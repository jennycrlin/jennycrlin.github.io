"use client";

import { useCallback, useEffect, useRef } from "react";

const BUBBLE_WORDS = [
  "UX Engineer",
  "User-Centric",
  "Empathy",
  "Inclusive Design",
  "AI × UX",
  "Design Systems",
  "Data Visualization",
  "B2B Enterprise",
  "Conversational AI",
  "AI Integration",
  "Accessibility",
  "User Research",
  "Figma",
  "Sketch",
  "Miro",
  "Jira",
  "Confluence",
  "Agile/Scrum",
  "MCP",
  "Tableau",
  "SQL",
  "RStudio",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "C++",
];

export function HeroBubbleField({
  children,
  className = "",
  avoidSelector = ".subtitle",
}: {
  children: React.ReactNode;
  className?: string;
  avoidSelector?: string;
}) {
  const containerRef = useRef<HTMLElement>(null);
  const avoidRight = useRef(0);
  const lastSpawn = useRef(0);
  const lastPos = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const measure = () => {
      const avoidEl = container.querySelector<HTMLElement>(avoidSelector);
      if (!avoidEl) return;
      const containerRect = container.getBoundingClientRect();
      const avoidRect = avoidEl.getBoundingClientRect();
      avoidRight.current = avoidRect.right - containerRect.left + 32;
    };

    measure();
    const fontRecheck = setTimeout(measure, 300);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(fontRecheck);
      window.removeEventListener("resize", measure);
    };
  }, [avoidSelector]);

  const spawnBubble = useCallback((x: number, y: number) => {
    const container = containerRef.current;
    if (!container) return;

    const bubble = document.createElement("span");
    bubble.className = "hero-bubble";
    bubble.textContent =
      BUBBLE_WORDS[Math.floor(Math.random() * BUBBLE_WORDS.length)];
    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;
    bubble.style.setProperty("--drift", `${(Math.random() - 0.5) * 70}px`);
    bubble.style.setProperty("--rotate", `${(Math.random() - 0.5) * 10}deg`);
    bubble.addEventListener("animationend", () => bubble.remove());
    container.appendChild(bubble);
  }, []);

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }

      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      // No room to the right of the text on narrow viewports — skip rather
      // than risk overlapping the copy.
      if (avoidRight.current >= rect.width - 40) return;

      const rawX = e.clientX - rect.left;
      const x = Math.max(rawX, avoidRight.current);
      const y = e.clientY - rect.top;
      const now = performance.now();

      if (lastPos.current) {
        const dx = x - lastPos.current.x;
        const dy = y - lastPos.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 90 || now - lastSpawn.current < 180) return;
      }

      lastSpawn.current = now;
      lastPos.current = { x, y };
      spawnBubble(x, y);
    },
    [spawnBubble]
  );

  return (
    <section
      ref={containerRef}
      className={`hero-bubble-field ${className}`}
      onMouseMove={handleMove}
    >
      {children}
    </section>
  );
}
