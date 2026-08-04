"use client";

import { useState, useEffect, useCallback, Children } from "react";

export function AutoFade({
  children,
  interval = 4000,
  className,
}: {
  children: React.ReactNode;
  interval?: number;
  className?: string;
}) {
  const slides = Children.toArray(children);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setActive((i) => (i + 1) % slides.length),
    [slides.length],
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [paused, next, interval]);

  return (
    <div
      className={`autofade${className ? ` ${className}` : ""}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="autofade-stage">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`autofade-slide${i === active ? " autofade-slide--active" : ""}`}
          >
            {slide}
          </div>
        ))}
      </div>
      <div className="autofade-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`autofade-dot${i === active ? " autofade-dot--active" : ""}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  );
}
