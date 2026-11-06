"use client";

import { useEffect } from "react";

// Drives the hero's scroll animation by setting --p (0 to 1) on the hero. Skipped for reduced motion,
// so without it the hero stays a normal, static section.
export function HeroScroll() {
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".hero");
    const stage = document.querySelector<HTMLElement>(".hero-stage");
    if (!hero || !stage || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const height = stage.offsetHeight;
      const viewport = window.innerHeight;
      const progress = Math.min(1, Math.max(0, window.scrollY / (Math.min(height, viewport) * 0.9)));
      hero.style.setProperty("--p", progress.toFixed(4));
      hero.style.setProperty("--stage-top", `${Math.min(0, viewport - height)}px`);
      stage.classList.toggle("hero-stage-gone", progress >= 1);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    hero.classList.add("hero-scroll");
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return null;
}
