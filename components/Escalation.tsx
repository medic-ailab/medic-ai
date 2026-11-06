"use client";

import { useEffect, useRef, useState } from "react";

const HEADLINE = "Severe cases go to a human".split(" ");

const STEPS = [
  "You describe what's wrong",
  "The AI detects a severe case",
  "We escalate it to a human consultation",
];

// Hidden state is only applied once JS runs, so the words still show if it never does.
export function Escalation() {
  const section = useRef<HTMLElement>(null);
  const [stage, setStage] = useState<"idle" | "armed" | "on">("idle");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !section.current) return;
    setStage("armed");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStage("on");
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(section.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={section} className={`escalation escalation-${stage}`} aria-labelledby="escalation-title">
      <h2 id="escalation-title">
        {HEADLINE.map((word, index) => (
          <span key={index} className="word" style={{ "--i": index } as React.CSSProperties}>
            {word}{" "}
          </span>
        ))}
      </h2>

      <ol className="track">
        <span className="track-line" aria-hidden="true">
          <span className="track-fill" />
        </span>
        {STEPS.map((step, index) => (
          <li key={step} className={`track-step track-step-${index + 1}`}>
            <span className="track-node" aria-hidden="true">
              {index + 1}
            </span>
            <p>{step}</p>
          </li>
        ))}
      </ol>

      <p className="escalation-note">This is planned for the finished product and isn't live yet.</p>
      <p className="escalation-first">In an emergency, don't wait for a consultation. Call your local emergency number.</p>
    </section>
  );
}
