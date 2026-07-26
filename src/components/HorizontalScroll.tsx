"use client";

import { useRef, useState, useEffect, useCallback } from "react";

export function HorizontalScroll({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    const ro = new ResizeObserver(updateArrows);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      ro.disconnect();
    };
  }, [updateArrows]);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.6, behavior: "smooth" });
  };

  const onPointerDown = (e: React.PointerEvent) => {
    const el = trackRef.current;
    if (!el) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX, scrollLeft: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const el = trackRef.current;
    if (!el) return;
    const dx = e.clientX - dragStart.current.x;
    el.scrollLeft = dragStart.current.scrollLeft - dx;
  };

  const onPointerUp = () => setIsDragging(false);

  return (
    <div className={`h-scroll ${className}`}>
      {canScrollLeft && (
        <button
          className="h-scroll-arrow h-scroll-arrow--left"
          onClick={() => scroll(-1)}
          type="button"
          aria-label="Scroll left"
        >
          ‹
        </button>
      )}
      <div
        ref={trackRef}
        className={`h-scroll-track${isDragging ? " h-scroll-track--dragging" : ""}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {children}
      </div>
      {canScrollRight && (
        <button
          className="h-scroll-arrow h-scroll-arrow--right"
          onClick={() => scroll(1)}
          type="button"
          aria-label="Scroll right"
        >
          ›
        </button>
      )}
    </div>
  );
}
