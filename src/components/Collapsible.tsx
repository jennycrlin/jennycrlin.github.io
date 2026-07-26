"use client";

import { useState } from "react";

export function Collapsible({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`collapsible${open ? " collapsible--open" : ""}`}>
      <button
        className="collapsible-trigger"
        onClick={() => setOpen(!open)}
        type="button"
      >
        <h2>{title}</h2>
        <span className="collapsible-icon">{open ? "−" : "+"}</span>
      </button>
      <div className="collapsible-body">{children}</div>
    </div>
  );
}
