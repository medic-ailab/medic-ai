import Image from "next/image";
import Link from "next/link";
import { AppBadges } from "@/components/AppBadges";
import { Demo } from "@/components/Demo";
import { Escalation } from "@/components/Escalation";
import { Footer } from "@/components/Footer";
import { JoinForm } from "@/components/JoinForm";
import { Nav } from "@/components/Nav";
import { REPO_URL } from "@/lib/project";
import { token } from "@/lib/token";
import "./launch.css";

export default function Home() {
  return (
    <div className="launch-site">
      <a className="skip" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <section className="portrait-hero" aria-labelledby="launch-title">
          <Image className="portrait-hero-image" src="/video/brain-hero.jpg" alt="A woman’s profile illuminated by a network of light" fill priority sizes="100vw" />
          <div className="portrait-hero-shade" />
          <div className="portrait-hero-content launch-container">
            <div className="portrait-hero-top"><p>A COMMUNITY. A COIN. A CAUSE.</p><span className="launch-live"><span /> PRE-LAUNCH</span></div>
            <h1 id="launch-title" className="portrait-headline"><span>A coin.</span><em>A cause.</em></h1>
            <div className="portrait-hero-bottom">
              <div className="portrait-introduction"><span className="portrait-kicker">MEME CULTURE, MEET HUMAN POTENTIAL.</span><p>Bring the energy.<br />Back a bigger idea.</p><span>$MEDIC aims to bring a community together to help raise funds for the MedicHealth vision.</span></div>
              <div className="portrait-signature"><Image src="/logo.png" alt="" width={58} height={58} /><strong>$MEDIC</strong><span>THE HEALTHCARE MEMECOIN</span></div>
              <div className="portrait-actions"><Link className="launch-button" href="#join">Get launch updates <span aria-hidden="true">↗</span></Link><Link className="portrait-mission-link" href="#mission">Step inside the mission <span aria-hidden="true">↓</span></Link></div>
            </div>
            <div className="portrait-fineprint"><span>COMMUNITY POWERED. HEALTH INSPIRED.</span><p>A memecoin. No promised returns.</p></div>
          </div>
        </section>

        <div className="launch-briefing" aria-label="Explore the project">
          <div className="launch-container launch-briefing-grid">
            <a href="#label"><span className="briefing-number">01</span><div><small>THE TOKEN</small><strong>Get the launch details</strong></div><span aria-hidden="true">↗</span></a>
            <Link href="/vision"><span className="briefing-number">02</span><div><small>THE PURPOSE</small><strong>Discover MedicHealth</strong></div><span aria-hidden="true">↗</span></Link>
            <Link href="/demo"><span className="briefing-number">03</span><div><small>THE PROTOTYPE</small><strong>Try what we’re building</strong></div><span aria-hidden="true">↗</span></Link>
          </div>
        </div>

        <section className="launch-mission" id="mission">
          <div className="launch-container">
            <div className="launch-section-label"><span>01 — WHY WE EXIST</span><span>THE BIGGER PICTURE</span></div>
            <div className="launch-mission-heading"><h2>Good memes.<br /><span>Bigger intentions.</span></h2><div className="launch-brand-seal"><Image src="/logo.png" alt="MEDIC AI logo" width={180} height={180} /><span>MEME CULTURE / HUMAN POTENTIAL</span></div></div>
            <div className="launch-mission-copy"><p>The internet knows how to<br />get behind an idea.<br /><strong>This one is about health.</strong></p><div><p>$MEDIC aims to raise funds for MedicHealth: a vision for more accessible health information and technology. We’re starting with MEDIC AI, a health assistant in development.</p><p>Community comes first. The product takes work. Neither the healthcare ambition nor the token is a promise of returns.</p><Link className="launch-underlink" href="/vision">Read the full vision <span>↗</span></Link></div></div>
            <div className="launch-connection" aria-label="The project's proposed direction"><div><small>THE COMMUNITY TOKEN</small><strong>$MEDIC</strong></div><span aria-hidden="true">↗</span><div><small>THE HEALTHCARE AMBITION</small><strong>MedicHealth</strong></div><span aria-hidden="true">↗</span><div><small>THE FIRST PRODUCT IDEA</small><strong>MEDIC AI</strong></div></div>
            <p className="launch-funding-note">Proposed direction. Fundraising terms, funding mechanisms, and allocation of proceeds have not been published.</p>
          </div>
        </section>

        <section className="launch-lab launch-container" id="demo">
          <div className="launch-section-label"><span>02 — FROM IDEA TO SOMETHING REAL</span><span>THE WORK IN PROGRESS</span></div>
          <div className="launch-lab-grid">
            <div className="launch-lab-copy"><p className="launch-caption">MEET MEDIC AI</p><h2>Behind the hype,<br /><em>the homework.</em></h2><p>Here’s where the healthcare ambition starts. Try a scripted preview of a health companion that explains information in everyday language.</p>
              <div className="launch-accordion">
                <details open><summary>Understand the unfamiliar<span aria-hidden="true">+</span></summary><p>Explore how a future assistant could explain symptoms and medical reports. These are planned capabilities, not live clinical services.</p></details>
                <details><summary>Keep people in the picture<span aria-hidden="true">+</span></summary><p>Human consultations are part of the vision. They are not available yet. In an emergency, contact your local emergency services immediately.</p></details>
                <details><summary>Build where everyone can see<span aria-hidden="true">+</span></summary><p>The code is open source. Clinicians are invited to review the scripted answers; none have been clinically reviewed yet. <Link href="/review">Help review the prototype ↗</Link></p></details>
              </div>
              <Link className="launch-underlink" href="/demo">Explore the full demo <span>↗</span></Link>
              <div className="launch-apps"><p className="launch-caption">MOBILE APPS COMING SOON</p><AppBadges /></div>
            </div>
            <div className="launch-demo"><div className="launch-demo-caption"><span className="launch-live"><span /> THE PROTOTYPE</span><span className="launch-demo-version">V.01 / SCRIPTED</span></div><Demo variant="preview" /><p className="launch-demo-note">Scripted answers. Not medical advice.<br />Nothing you type leaves this page.</p><a href={REPO_URL} className="launch-code-link">View the open-source code ↗</a></div>
          </div>
        </section>

        <div className="launch-escalation"><div className="launch-container"><div className="launch-section-label"><span>03 — WHEN IT’S SERIOUS</span><span>HUMAN BACKUP</span></div><Escalation /></div></div>

        <section className="launch-token" id="label"><div className="launch-container">
          <div className="launch-section-label"><span>04 — READ BEFORE YOU LEAP</span><span>THE TOKEN</span></div>
          <div className="launch-token-grid"><div><h2>No mystery.<br /><em>Just the details.</em></h2><p>$MEDIC is a memecoin. The launch is still ahead of us. Here’s what is—and isn’t—confirmed.</p><span className="launch-token-stamp"><span aria-hidden="true" />{token.contractAddress ? "OFFICIAL CONTRACT AVAILABLE" : "PRE-LAUNCH · NOT DEPLOYED"}</span></div><dl>{[["01", "Network", token.chain], ["02", "Total supply", token.supply], ["03", "Launch date", token.launchDate], ["04", "Contract", token.contractAddress ?? "Not deployed yet"]].map(([number, name, value]) => <div key={name}><span>{number}</span><dt>{name}</dt><dd>{value}</dd></div>)}</dl></div>
          <div className="launch-questions" aria-labelledby="questions-title">
            <div><p className="launch-caption">A FEW THINGS TO KNOW</p><h3 id="questions-title">Before you join in.</h3></div>
            <div className="launch-question-list">
              <details><summary>How will funds support MedicHealth?<span aria-hidden="true">+</span></summary><p>Supporting MedicHealth is the aim. Fundraising terms, the funding mechanism, and allocation of proceeds have not been published yet.</p></details>
              <details><summary>What does holding $MEDIC give me?<span aria-hidden="true">+</span></summary><p>$MEDIC is a memecoin. Holding it does not provide healthcare, medical services, ownership in MEDIC AI, or promised returns.</p></details>
              <details><summary>Can I use MEDIC AI today?<span aria-hidden="true">+</span></summary><p>You can explore the scripted prototype. The healthcare product is still in development, and the demo is not medical advice. <Link href="/demo">Try the demo ↗</Link></p></details>
            </div>
          </div>
          <div className="launch-token-notes"><p>{token.contractAddress ? `Official contract: ${token.contractAddress}` : `Until the official address appears here, any ${token.ticker} contract you see isn’t ours.`}</p><p>$MEDIC has no intrinsic value or promised return and can fall to zero. Holding it provides no healthcare, medical services, or ownership in MEDIC AI. Check availability and legality where you live.</p></div>
        </div></section>

        <section className="launch-join" id="join"><div className="launch-container"><div className="launch-section-label"><span>05 — BE HERE FOR WHAT’S NEXT</span><span>THE EARLY LIST</span></div><div className="launch-join-grid"><div><h2>You’re<br /><em>early.</em><span aria-hidden="true">↗</span></h2><p>Get the launch date and official contract address.<br />From us. Directly to you.</p></div><JoinForm /></div></div></section>
      </main>
      <Footer />
    </div>
  );
}
