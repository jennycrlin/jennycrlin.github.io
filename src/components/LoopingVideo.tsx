"use client";

import { useRef } from "react";

export function LoopingVideo({
  src,
  mp4Src,
  poster,
  pauseMs = 3000,
  style,
}: {
  src: string;
  mp4Src?: string;
  poster?: string;
  pauseMs?: number;
  style?: React.CSSProperties;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnded = () => {
    setTimeout(() => {
      const el = videoRef.current;
      if (!el) return;
      el.currentTime = 0;
      el.play().catch(() => {});
    }, pauseMs);
  };

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      playsInline
      controls={false}
      disablePictureInPicture
      disableRemotePlayback
      controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
      onEnded={handleEnded}
      poster={poster}
      style={style}
    >
      {mp4Src && <source src={mp4Src} type="video/mp4" />}
      <source src={src} type="video/quicktime" />
    </video>
  );
}
