import Image from "next/image";
import Link from "next/link";

export function Nav({ cta = { href: "/demo", label: "Try the demo" } }: { cta?: { href: string; label: string } }) {
  return (
    <header className="nav glass">
      <Link className="brand" href="/" aria-label="MEDIC AI home">
        <Image src="/logo.png" alt="" width={40} height={40} priority />
        <span>MEDIC AI</span>
      </Link>
      <nav aria-label="Main">
        <Link href="/demo">Demo</Link>
        <Link href="/#label">The label</Link>
        <Link href="/review">For doctors</Link>
        <Link href="/#join">Early list</Link>
      </nav>
      <Link className="btn btn-loud" href={cta.href}>
        {cta.label}
      </Link>
    </header>
  );
}
