"use client";

import { useEffect, useRef } from "react";

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("revealed"), delay);
          observer.unobserve(el);
        }
      },
      // A tall block (heading + paragraphs + image) used to trigger as
      // soon as its top text edge crossed 15% visible — long before the
      // image further down had scrolled into view at all, so the fade
      // finished off-screen and was never actually seen. Shrinking the
      // effective viewport by 25% from the bottom delays the trigger
      // until the block (and the image inside it) is meaningfully on
      // screen, not just barely peeking in.
      { threshold: 0.15, rootMargin: "0px 0px -25% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${className}`}
      style={duration ? { transitionDuration: `${duration}ms` } : undefined}
    >
      {children}
    </div>
  );
}
