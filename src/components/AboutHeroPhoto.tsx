"use client";

import { useRef } from "react";
import Image from "next/image";

export function AboutHeroPhoto() {
  const tiltRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = tiltRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--tiltX", `${(-y * 7).toFixed(2)}deg`);
    el.style.setProperty("--tiltY", `${(x * 7).toFixed(2)}deg`);
  }

  function handleMouseLeave() {
    const el = tiltRef.current;
    if (!el) return;
    el.style.setProperty("--tiltX", "0deg");
    el.style.setProperty("--tiltY", "0deg");
  }

  return (
    <div className="about-hero-photo">
      <div className="about-hero-photo-ring" aria-hidden="true" />
      <div className="about-hero-photo-reveal">
        <div
          ref={tiltRef}
          className="about-hero-photo-tilt"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src="/images/about/me.JPG"
            alt="Jenny Lin"
            width={560}
            height={373}
            priority
          />
        </div>
      </div>
    </div>
  );
}
