import type { Metadata } from "next";
import { AppBadges } from "@/components/AppBadges";
import { AppMock } from "@/components/AppMock";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Our vision",
  description: "What we plan to build: the MEDIC AI mobile app, a wearable health band, a phased roadmap and our long-term plan for synthetic intelligence. None of it is available yet.",
  alternates: { canonical: "/vision/" },
  openGraph: { url: "/vision/", title: "The MEDIC AI vision" },
};

const APP_FEATURES = [
  ["Your health hub", "A personal welcome, a quick symptom check, medication reminders, health summaries and shortcuts."],
  ["AI medical chat", "Describe a concern in everyday language. MEDIC AI asks follow-up questions and explains things plainly."],
  ["Symptom assessment", "Structured questions about symptoms, how long they've lasted, severity and warning signs, with clear guidance on what to do next."],
  ["Health dashboard", "Track blood pressure, glucose, weight, symptoms, appointments and the goals your clinician recommended."],
  ["Medical records", "Keep reports, allergies, prescribed medications, past diagnoses and treatment history in one secure place."],
];

const LATER = [
  ["Medication management", "Medication lists, schedules and optional reminders."],
  ["Report explainer", "Upload lab reports and get plain-language explanations."],
  ["More languages", "English and selected African languages."],
  ["Doctor connection", "Find qualified professionals or connect to approved telehealth providers."],
  ["Family profiles", "Manage dependents' health information, with the right consent and permissions."],
  ["Emergency guidance", "Clear escalation steps and emergency contacts that fit where you are."],
];

const BAND_STEPS = [
  "The band collects supported health measurements",
  "Validated safety rules check the readings",
  "If it sees a warning sign, it asks whether you need help",
  "If you confirm or don't respond, it alerts your family or caregiver",
  "Emergency services are reached through an approved provider",
];

const MEASUREMENTS = [
  ["Heart rate", "Spot unusually high or low readings"],
  ["Blood oxygen", "Identify potentially concerning oxygen levels"],
  ["ECG", "Support detection of certain heart rhythm problems"],
  ["Skin temperature", "Follow temperature trends"],
  ["Movement and falls", "Detect possible falls and inactivity"],
  ["Blood pressure", "Track readings from a validated compatible device"],
  ["Blood glucose", "Follow readings from a compatible regulated glucose monitor"],
];

const HARDWARE = [
  ["Optical sensor", "Heart rate and supported oxygen measurements"],
  ["Accelerometer and gyroscope", "Fall and movement detection"],
  ["ECG hardware", "Optional, depending on the medical features and regulatory route"],
  ["Bluetooth", "Connects to the MEDIC AI mobile app"],
  ["Cellular connection", "Through your phone at first, with optional standalone LTE later"],
  ["SOS button", "Ask for help yourself at any time"],
  ["Rechargeable battery", "With low-battery and disconnected-device warnings"],
];

const ROADMAP = [
  ["First version", "Account registration, the home screen, educational AI chat, basic health records and symptom guidance."],
  ["Health management", "Medication reminders, health tracking, medical report explanations, consent controls and clinician-reviewed content."],
  ["Connected healthcare", "Doctor consultations, clinic partnerships, interoperable medical records and healthcare services for each location."],
];

export default function VisionPage() {
  return (
    <>
      <Nav />
      <main>
        <header className="vision-head">
          <h1>No one should face a health concern alone</h1>
          <p>
            AI can help close the gap between people and health knowledge, especially where care is expensive, hard to
            reach or far away. This is what we plan to build. None of it is available yet.
          </p>
        </header>

        <section className="vision-app" aria-labelledby="app-title">
          <span className="orb orb-k" aria-hidden="true" />
          <span className="orb orb-l" aria-hidden="true" />
          <div className="vision-app-copy">
            <h2 id="app-title">Your health companion, in your pocket</h2>
            <ul className="vision-rows">
              {APP_FEATURES.map(([title, text]) => (
                <li key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ul>
            <AppBadges />
          </div>
          <div className="vision-app-mock">
            <AppMock />
            <p className="mock-note">Interactive concept with sample data, not a working app.</p>
          </div>
        </section>

        <section className="vision-section" aria-labelledby="later-title">
          <h2 id="later-title">What comes later</h2>
          <ul className="vision-grid">
            {LATER.map(([title, text]) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="vision-band" aria-labelledby="band-title">
          <h2 id="band-title">A health band that can call for help</h2>
          <p className="vision-lead">
            We're exploring a wearable, starting with a wristband that offers heart-rate monitoring, fall detection, a
            manual SOS button and caregiver alerts. It's an early concept, and no device exists yet.
          </p>
          <ol className="band-steps">
            {BAND_STEPS.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>

          <div className="band-grid">
            <div>
              <h3>What it could monitor</h3>
              <dl className="band-table">
                {MEASUREMENTS.map(([name, purpose]) => (
                  <div key={name}>
                    <dt>{name}</dt>
                    <dd>{purpose}</dd>
                  </div>
                ))}
              </dl>
              <p className="band-note">A wrist wearable can't reliably diagnose every condition.</p>
            </div>
            <div>
              <div className="alert-card glass" role="img" aria-label="Simulated alert: possible fall detected, no movement, patient may need assistance">
                <p className="alert-tag">Simulation</p>
                <p className="alert-title">Possible fall detected</p>
                <p>Patient may need assistance</p>
                <dl>
                  <div><dt>Motion</dt><dd>No movement detected</dd></div>
                  <div><dt>Device</dt><dd>Connected</dd></div>
                  <div><dt>Location</dt><dd>Available with consent</dd></div>
                </dl>
              </div>
              <h3 className="band-hardware-title">What's inside</h3>
              <dl className="band-table">
                {HARDWARE.map(([name, purpose]) => (
                  <div key={name}>
                    <dt>{name}</dt>
                    <dd>{purpose}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <p className="band-warning">
            An alert to a caregiver isn't an ambulance on its way. Automatic dispatch would need licensed ambulance,
            hospital and clinic partners. Medical algorithms need clinical validation, and the device has to handle
            false alarms and missed events.
          </p>
        </section>

        <section className="vision-synthetic" aria-labelledby="synthetic-title">
          <h2 id="synthetic-title">Our long-term plan: synthetic intelligence</h2>
          <div className="synthetic-grid">
            <div>
              <h3>Today's AI</h3>
              <p>Relies on statistical pattern matching, big data and predicting the next word or value.</p>
            </div>
            <div>
              <h3>Synthetic intelligence</h3>
              <p>Aims to recreate the underlying mechanisms, architecture and processes of biological intelligence.</p>
            </div>
          </div>
          <p className="synthetic-status">
            We haven't built this yet, and the current demo is scripted. Whatever approach we use, it has to pass clinical
            safety testing and review before it reaches anyone.
          </p>
        </section>

        <section className="vision-section" aria-labelledby="roadmap-title">
          <h2 id="roadmap-title">How we get there</h2>
          <ol className="roadmap">
            {ROADMAP.map(([title, text]) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
          <p className="roadmap-gate">
            Before any public launch, MEDIC AI needs medical safety testing, clinical oversight, secure handling of health
            information and regulatory review.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
