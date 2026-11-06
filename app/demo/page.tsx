import type { Metadata } from "next";
import Image from "next/image";
import { AppBadges } from "@/components/AppBadges";
import { Demo } from "@/components/Demo";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Try the demo",
  description: "See how the MEDIC AI health assistant would sort what's urgent from what can wait, in a scripted demo. Mobile apps coming soon. Not medical advice.",
  alternates: { canonical: "/demo/" },
  openGraph: { url: "/demo/", title: "Try the MEDIC AI demo" },
};

export default function DemoPage() {
  return (
    <>
      <Nav cta={{ href: "/#join", label: "Join the early list" }} />
      <main className="demo-page">
        <span className="orb orb-h" aria-hidden="true" />
        <span className="orb orb-i" aria-hidden="true" />
        <span className="orb orb-j" aria-hidden="true" />

        <header className="demo-page-head">
          <h1>No waiting room</h1>
          <p>
            Ask about a symptom, a test result or a medication and see how MEDIC AI would respond. The answers are
            scripted and nothing you type leaves this page, so please don't use this for a real health concern.{" "}
            <Link href="/review">Are you a clinician? Review these answers.</Link>
          </p>
        </header>

        <Demo variant="full" />

        <section className="escalate glass" aria-labelledby="escalate-title">
          <h2 id="escalate-title">Severe cases go to a human</h2>
          <div>
            <p>When the AI detects a severe case, MEDIC AI will escalate it to a human consultation. This is planned for the finished product and isn't live yet.</p>
            <p className="escalate-first">In an emergency, don't wait for a consultation. Call your local emergency number.</p>
          </div>
        </section>

        <section className="apps glass" aria-labelledby="apps-title">
          <div>
            <h2 id="apps-title">Mobile apps coming soon</h2>
            <AppBadges />
          </div>
          <div className="apps-photo">
            <Image src="/images/phone-stethoscope.jpg" alt="" fill sizes="(max-width: 860px) 100vw, 40vw" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
