import Link from "next/link";

const FEATURES = [
  ["Symptom assessment", "Describe how you feel in your own words. MEDIC AI will go through possible causes and warning signs, and suggest whether routine care, urgent attention or emergency help fits."],
  ["Long-term conditions", "Understand diabetes, hypertension, asthma and more, track symptoms and measurements, and follow the care routine your clinician recommended."],
  ["Test results explained", "Get blood tests, cholesterol and blood sugar results in simple language, with questions to take to your appointment."],
  ["Medication information and reminders", "Understand what you've been prescribed, its common side effects and precautions, and keep to your schedule."],
  ["Everyday health", "Learn about nutrition, activity, sleep, hydration and preventive screenings, based on what matters for you."],
  ["Family support", "Understand common concerns, spot symptoms that need a professional, and prepare for appointments as a parent or caregiver."],
  ["Mental wellbeing", "Supportive conversations and stress-management techniques for everyday challenges, with encouragement to get professional support when you need it."],
  ["Any hour", "Health questions don't wait for clinic hours. General health information will be there 24/7, to help you work out your next step."],
];

export function Features() {
  return (
    <section className="features" aria-labelledby="features-title">
      <div className="features-head">
        <h2 id="features-title">The AI health assistant for everyone</h2>
        <div>
          <p>
            We're building MEDIC AI to make health information easier to reach and understand, wherever you live and
            whatever you already know about medicine. None of this is available yet.
          </p>
          <Link className="btn btn-quiet-line" href="/vision">
            See the full vision
          </Link>
        </div>
      </div>
      <ul className="feature-list">
        {FEATURES.map(([title, text]) => (
          <li key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ul>
      <p className="features-promise">Understand your health. Make informed decisions. Live better.</p>
    </section>
  );
}
