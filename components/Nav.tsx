"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  ["/#mission", "The mission"],
  ["/#label", "$MEDIC"],
  ["/vision", "MedicHealth"],
  ["/demo", "Try the demo"],
  ["/review", "For doctors"],
];

export function Nav({
  cta = { href: "/#join", label: "Join the early list" },
}: {
  cta?: { href: string; label: string };
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    function onPointer(event: PointerEvent) {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <header className="nav" ref={header}>
      <Link className="brand" href="/" aria-label="MEDIC AI home" onClick={() => setOpen(false)}>
        <Image src="/logo.png" alt="" width={38} height={38} priority />
        <span>MEDIC<span className="brand-ai"> AI</span></span>
      </Link>
      <nav id="main-navigation" className={open ? "nav-links is-open" : "nav-links"} aria-label="Main">
        {links.map(([href, label]) => (
          <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
      </nav>
      <Link className="btn btn-loud nav-cta" href={cta.href} onClick={() => setOpen(false)}>
        <span className="nav-cta-label">{cta.label}</span>
        <span className="nav-cta-short">{cta.label === "Join the early list" ? "Early list" : cta.label}</span>
        <span className="nav-cta-arrow" aria-hidden="true">↗</span>
      </Link>
      <button
        ref={toggle}
        className="menu-toggle"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="main-navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </button>
    </header>
  );
}
