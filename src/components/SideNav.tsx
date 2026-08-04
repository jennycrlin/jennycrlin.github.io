"use client";

import { useEffect, useState } from "react";

interface NavItem {
  label: string;
  href: string;
}

export function SideNav({ sections }: { sections: NavItem[] }) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = sections.map((s) => s.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-30% 0px -65% 0px" }
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="side-nav">
      <div className="side-nav-inner">
        {sections.map((s) => {
          const isActive = active === s.href.replace("#", "");
          return (
            <a
              key={s.href}
              href={s.href}
              className={`sn-item${isActive ? " sn-active" : ""}`}
            >
              {s.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
