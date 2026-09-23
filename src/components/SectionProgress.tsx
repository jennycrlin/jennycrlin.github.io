"use client";

import { useEffect, useState } from "react";

interface ProgressSection {
  label: string;
  href: string;
  childIds?: string[];
}

export function SectionProgress({
  sections,
}: {
  sections: ProgressSection[];
}) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const idToNav: Record<string, string> = {};
    for (const s of sections) {
      const navId = s.href.replace("#", "");
      idToNav[navId] = navId;
      for (const child of s.childIds ?? []) {
        idToNav[child] = navId;
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const navId = idToNav[entry.target.id];
            if (navId) setActive(navId);
          }
        }
      },
      { rootMargin: "-130px 0px -60% 0px" }
    );

    // Some section ids (e.g. behind a PasswordGate) don't exist in the DOM
    // yet on first mount. Re-scan whenever the DOM changes so newly-revealed
    // sections (unlocked content, client-side renders) get observed too.
    const observedIds = new Set<string>();
    const scanForSections = () => {
      for (const id of Object.keys(idToNav)) {
        if (observedIds.has(id)) continue;
        const el = document.getElementById(id);
        if (el) {
          observer.observe(el);
          observedIds.add(id);
        }
      }
    };
    scanForSections();

    const mutationObserver = new MutationObserver(scanForSections);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [sections]);

  return (
    <nav className="section-progress">
      <div className="sp-inner">
        {sections.map((s, i) => {
          const isCurrent = active === s.href.replace("#", "");
          return (
            <div key={s.href} className="sp-step-wrap">
              <a
                href={s.href}
                onClick={(e) => {
                  e.preventDefault();
                  e.currentTarget.blur();
                  const el = document.getElementById(s.href.replace("#", ""));
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className={`sp-item${isCurrent ? " sp-active" : ""}`}
              >
                <span className="sp-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="sp-label">{s.label}</span>
              </a>
              {i < sections.length - 1 && (
                <span className="sp-line" />
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
