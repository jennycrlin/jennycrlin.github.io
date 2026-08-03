"use client";

import { useState } from "react";

export function Carousel({
  children,
  labels,
}: {
  children: React.ReactNode[];
  labels: string[];
}) {
  const [index, setIndex] = useState(0);

  return (
    <div className="carousel">
      <div className="carousel-tabs">
        {labels.map((label, i) => (
          <button
            key={label}
            className={`carousel-tab${i === index ? " carousel-tab--active" : ""}`}
            onClick={() => setIndex(i)}
            type="button"
          >
            {label}
          </button>
        ))}
      </div>
      <div className="carousel-viewport">
        {index > 0 && (
          <button
            className="carousel-nav carousel-nav--prev"
            onClick={() => setIndex(index - 1)}
            type="button"
            aria-label="Previous"
          >
            ‹
          </button>
        )}
        <div className="carousel-slides-stack">
          {children.map((child, i) => (
            <div
              className={`carousel-slide${i === index ? " carousel-slide--active" : ""}`}
              key={i}
            >
              {child}
            </div>
          ))}
        </div>
        {index < children.length - 1 && (
          <button
            className="carousel-nav carousel-nav--next"
            onClick={() => setIndex(index + 1)}
            type="button"
            aria-label="Next"
          >
            ›
          </button>
        )}
      </div>
      <div className="carousel-dots">
        {labels.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot${i === index ? " carousel-dot--active" : ""}`}
            onClick={() => setIndex(i)}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
