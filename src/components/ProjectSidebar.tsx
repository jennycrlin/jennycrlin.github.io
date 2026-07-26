"use client";

import { useState } from "react";

interface TocSection {
  title: string;
  href: string;
  children: { label: string; href: string }[];
}

export function ProjectSidebar({ sections }: { sections: TocSection[] }) {
  const [collapsed, setCollapsed] = useState(false);
  const [expanded, setExpanded] = useState<Set<number>>(new Set([0]));

  const toggleSection = (index: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <aside className={`proj-sidebar${collapsed ? " collapsed" : ""}`}>
      <div className="sidebar-inner">
        {sections.map((section, i) => (
          <div
            className={`toc-section${expanded.has(i) ? " expanded" : ""}`}
            key={section.title}
          >
            <div className="toc-header" onClick={() => toggleSection(i)}>
              <span>{section.title}</span>
            </div>
            <div className="toc-children">
              {section.children.map((child) => (
                <a href={child.href} key={child.label}>
                  {child.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        className="sidebar-toggle"
        onClick={() => setCollapsed(!collapsed)}
        title="Toggle navigation"
      >
        {collapsed ? "«" : "»"}
      </button>
    </aside>
  );
}
