"use client";

import { useEffect, useRef } from "react";

// Decorative. People who ask for reduced motion see the still image instead.
export function HeroVideo() {
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const element = video.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    element.muted = true;
    element.play().catch(() => {});
  }, []);

  return (
    <video
      ref={video}
      className="hero-video"
      poster="/video/brain-hero.jpg"
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src="/video/brain-hero.mp4" type="video/mp4" />
    </video>
  );
}
