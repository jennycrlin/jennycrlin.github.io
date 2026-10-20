"use client";

import { useEffect, useRef, useState } from "react";

export type StepFrame = {
  media: React.ReactNode;
  label?: string;
  /** Widens this frame's media column beyond the standard single-image
   * width — for frames showing two images side by side, so each one
   * isn't squeezed down to half of the normal (already-narrow) width. */
  wide?: boolean;
};

export type StepData = {
  /** Static heading for steps with no frames (e.g. a no-media step) — rendered
   * in-flow, full height, no collapse animation. */
  intro?: React.ReactNode;
  /** Short step title shown beside the Before/After pill, above the frames —
   * stays put while scrubbing between frames within the same step. */
  title?: React.ReactNode;
  /** Short caption shown once below the Before/After frames — stays put
   * while scrubbing between frames within the same step. */
  description?: React.ReactNode;
  frames?: StepFrame[];
  extra?: React.ReactNode;
};

export function StickyStepper({
  label,
  steps,
  stepLabels,
}: {
  label?: React.ReactNode;
  steps: StepData[];
  stepLabels?: string[];
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [localProgress, setLocalProgress] = useState(0);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    let raf = 0;

    const update = () => {
      raf = 0;
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight;
      const totalScrollable = rect.height - vh;
      if (totalScrollable <= 0) {
        setActive(0);
        setLocalProgress(0);
        return;
      }
      const scrolledIntoWrap = -rect.top;
      const progress = Math.min(1, Math.max(0, scrolledIntoWrap / totalScrollable));
      const raw = progress * steps.length;
      const idx = Math.min(steps.length - 1, Math.floor(raw));
      setActive(Math.max(0, idx));
      setLocalProgress(Math.min(1, Math.max(0, raw - idx)));
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [steps.length]);

  const goToStep = (i: number) => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const rect = wrap.getBoundingClientRect();
    const vh = window.innerHeight;
    const totalScrollable = rect.height - vh;
    const wrapTop = window.scrollY + rect.top;
    const target = wrapTop + (i / steps.length) * totalScrollable + 4;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  return (
    <div
      ref={wrapRef}
      className="sticky-stepper"
      style={{ height: `${steps.length * 120}vh` }}
    >
      <div className="sticky-stepper-pin">
        {label && <div className="sticky-stepper-label">{label}</div>}

        <div className="sticky-stepper-panel">
          {steps.map((step, i) => {
            const isActive = i === active;
            const frameIdx = step.frames
              ? Math.min(step.frames.length - 1, Math.floor(localProgress * step.frames.length))
              : 0;
            return (
              <div
                key={i}
                className={`sticky-stepper-step${isActive ? " is-active" : ""}`}
              >
                {step.intro && (
                  <div className="sticky-stepper-step-intro">{step.intro}</div>
                )}
                {step.frames && (
                  <div className="sticky-stepper-frames">
                    {/* Mobile-only: title once above the stacked frames
                        (the desktop header below is hidden there instead). */}
                    {step.title && (
                      <p className="sticky-stepper-step-title-mobile">{step.title}</p>
                    )}
                    {/* Desktop: pill + title share one row, reflecting
                        whichever frame is currently active as you scrub —
                        kept out of the per-frame blocks so the title
                        doesn't get duplicated or crossfade with them. */}
                    {(step.title || step.frames[frameIdx]?.label) && (
                      <div className="sticky-stepper-frame-header">
                        {step.frames[frameIdx]?.label && (
                          <p className="cs-label sticky-stepper-frame-label">
                            {step.frames[frameIdx].label}
                          </p>
                        )}
                        {step.title && (
                          <span className="sticky-stepper-step-title">{step.title}</span>
                        )}
                      </div>
                    )}
                    {step.frames.map((frame, fi) => (
                      <div
                        key={fi}
                        className={`sticky-stepper-frame${
                          isActive && fi === frameIdx ? " is-active" : ""
                        }`}
                      >
                        {frame.label && (
                          <p className="cs-label sticky-stepper-frame-label-mobile">
                            {frame.label}
                          </p>
                        )}
                        <div
                          className={`sticky-stepper-frame-media${
                            frame.wide ? " sticky-stepper-frame-media--wide" : ""
                          }`}
                        >
                          {frame.media}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {step.description && (
                  <p className="sticky-stepper-description">{step.description}</p>
                )}
                {step.extra}
              </div>
            );
          })}
        </div>

        <div className="sticky-stepper-dots">
          {steps.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`sticky-stepper-dot${i === active ? " is-active" : ""}`}
              onClick={() => goToStep(i)}
              aria-label={stepLabels?.[i] ?? `Go to step ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
