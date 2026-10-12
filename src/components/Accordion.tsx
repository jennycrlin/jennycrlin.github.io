"use client";

import { useEffect, useRef, useState } from "react";

export function Accordion({ children }: { children: React.ReactNode }) {
  return <div className="cs-accordion">{children}</div>;
}

export function AccordionItem({
  id,
  num,
  title,
  children,
  defaultOpen = false,
}: {
  id?: string;
  num?: string;
  title: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const wrapRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  // Animate max-height to the body's real measured height (not a huge flat
  // cap) so the transition duration is what actually plays, for content of
  // any size — images included — instead of snapping open almost instantly.
  useEffect(() => {
    const wrap = wrapRef.current;
    const body = bodyRef.current;
    if (!wrap || !body) return;

    if (open) {
      const height = body.scrollHeight;
      wrap.style.maxHeight = `${height}px`;
      const onEnd = (e: TransitionEvent) => {
        if (e.propertyName === "max-height") wrap.style.maxHeight = "none";
      };
      wrap.addEventListener("transitionend", onEnd);
      return () => wrap.removeEventListener("transitionend", onEnd);
    }

    const height = body.scrollHeight;
    wrap.style.maxHeight = `${height}px`;
    void wrap.offsetHeight;
    const frame = requestAnimationFrame(() => {
      wrap.style.maxHeight = "0px";
    });
    return () => cancelAnimationFrame(frame);
  }, [open]);

  return (
    <div
      id={id}
      className={`cs-accordion-item${open ? " cs-accordion-item--open" : ""}`}
    >
      <button
        type="button"
        className="cs-accordion-summary"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        {num && <span className="cs-accordion-num">{num}</span>}
        <span className="cs-accordion-title">{title}</span>
        <span className="cs-accordion-icon" />
      </button>
      <div className="cs-accordion-body-wrap" ref={wrapRef}>
        <div className="cs-accordion-body" ref={bodyRef}>
          {children}
        </div>
      </div>
    </div>
  );
}
