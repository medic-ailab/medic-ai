import Image from "next/image";
import Link from "next/link";
import { AppBadges } from "@/components/AppBadges";
import { Demo } from "@/components/Demo";
import { Escalation } from "@/components/Escalation";
import { Footer } from "@/components/Footer";
import { JoinForm } from "@/components/JoinForm";
import { Nav } from "@/components/Nav";
import { token } from "@/lib/token";

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <div className="hero" id="top">
          <section className="hero-copy">
            <h1>Take two {token.ticker} and call me in the morning</h1>
            <p className="lede">
              {token.ticker} is a memecoin launching with MEDIC AI, the health assistant we're building to explain
              symptoms and test results in plain words, and escalate severe cases to human consultations.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-loud" href="/demo">
                Try the demo
              </Link>
              <a className="btn btn-glass glass" href="#label">
                Read the label
              </a>
            </div>
            <AppBadges />
            <p className="status">Launch date to be announced. Not medicine. Not financial advice.</p>
          </section>

          <section className="tiles" aria-label="Concept previews of MEDIC AI">
            <figure className="tile tile-triage">
              <Image className="tile-photo" src="/images/stethoscope.jpg" alt="" fill sizes="(max-width: 560px) 100vw, 50vw" />
              <figcaption className="tile-panel glass">
                <p className="tile-kicker">Symptom check</p>
                <p className="quote">“My chest feels tight and it's hard to breathe.”</p>
                <p className="urgent">Call emergency services now</p>
              </figcaption>
            </figure>

            <figure className="tile tile-reminder">
              <Image className="tile-photo" src="/images/capsules.jpg" alt="" fill sizes="(max-width: 560px) 100vw, 50vw" />
              <figcaption className="tile-panel glass glass-dark">
                <p className="tile-kicker">Medication reminder</p>
                <p className="big">20:00</p>
                <p>Evening tablet, with dinner, as prescribed</p>
              </figcaption>
            </figure>

            <figure className="tile tile-result">
              <Image className="tile-photo" src="/images/blood-sample.jpg" alt="" fill sizes="(max-width: 560px) 100vw, 50vw" />
              <figcaption className="tile-panel glass">
                <p className="tile-kicker">Blood test, explained</p>
                <p className="big">HbA1c 5.4%</p>
                <p>Your average blood sugar over about three months. Under 5.7% is the usual healthy range. Ask your clinician what it means for you.</p>
              </figcaption>
            </figure>

            <figure className="tile tile-tracker">
              <Image className="tile-photo" src="/images/bp-monitor.jpg" alt="" fill sizes="(max-width: 560px) 100vw, 50vw" />
              <figcaption className="tile-panel glass">
                <p className="tile-kicker">Blood pressure</p>
                <svg viewBox="0 0 200 60" aria-hidden="true" focusable="false">
                  <polyline points="4,38 36,28 68,42 100,24 132,34 164,20 196,26" />
                  <circle cx="196" cy="26" r="5" />
                </svg>
                <p className="big">128/82</p>
                <p>This week's readings, ready for your appointment</p>
              </figcaption>
            </figure>
          </section>
          <p className="tiles-note">Concept previews with sample data, not a working product. Stock photos.</p>
        </div>

        <Escalation />

        <section className="demo" id="demo" aria-labelledby="demo-title">
          <div className="demo-copy">
            <h2 id="demo-title">Second opinion, anyone?</h2>
            <p>
              Here's a small preview of where MEDIC AI is heading. Ask about a symptom or a test result and see how it
              would sort what's urgent from what can wait.
            </p>
            <p>
              The answers are scripted, and nothing you type leaves this page. Please don't use this for a real health
              concern.
            </p>
            <Link className="btn btn-loud demo-open" href="/demo">
              Try the demo
            </Link>
          </div>
          <div className="demo-stage">
            <span className="orb orb-d" aria-hidden="true" />
            <span className="orb orb-e" aria-hidden="true" />
            <Demo variant="preview" />
          </div>

          <div className="open-band glass">
            <div>
              <h2>Real doctors invited.</h2>
              <p>
                We want doctors and medical practitioners to check every answer. No answer has been clinically reviewed
                yet, and reviews open soon.
              </p>
            </div>
            <div className="open-actions">
              <Link className="btn btn-loud" href="/review">
                See the answers
              </Link>
            </div>
          </div>
        </section>

        <section className="token" id="label" aria-labelledby="label-title">
          <h2 id="label-title">Read the label</h2>
          <div className="token-grid">
            <div className="rx-wrap">
              <span className="orb orb-f" aria-hidden="true" />
              <span className="orb orb-g" aria-hidden="true" />
              <article className="rx glass" aria-label="Token details">
                <header className="rx-head">
                  <Image src="/logo.png" alt="" width={72} height={72} />
                  <div>
                    <p className="rx-mark">Rx</p>
                    <p className="rx-name">{token.ticker}</p>
                  </div>
                </header>
                <dl>
                  <div>
                    <dt>Chain</dt>
                    <dd>{token.chain}</dd>
                  </div>
                  <div>
                    <dt>Total supply</dt>
                    <dd>{token.supply}</dd>
                  </div>
                  <div>
                    <dt>Launch date</dt>
                    <dd>{token.launchDate}</dd>
                  </div>
                  <div>
                    <dt>Contract address</dt>
                    <dd className="contract">{token.contractAddress ?? "Not deployed yet"}</dd>
                  </div>
                  <div>
                    <dt>Possible side effects</dt>
                    <dd>Volatility, sleepless nights, too many group chats, losing what you put in</dd>
                  </div>
                </dl>
                {!token.contractAddress && (
                  <p className="rx-warning">Until the address appears here, any {token.ticker} contract you see isn't ours.</p>
                )}
              </article>
            </div>

            <div className="risks">
              <h3>Read this before you buy</h3>
              <ul>
                <li>{token.ticker} is a memecoin. It has no intrinsic value and no promised return.</li>
                <li>Its price can fall to zero. Only use money you can afford to lose.</li>
                <li>Holding it doesn't give you health care, medical services or a share of MEDIC AI.</li>
                <li>It may not be legal or available where you live. Check before you buy.</li>
                <li>MEDIC AI doesn't diagnose, prescribe or replace your doctor, and it isn't available yet.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="join" id="join" aria-labelledby="join-title">
          <h2 id="join-title">Get the contract address from us, not a stranger</h2>
          <p className="join-copy">Fake tokens show up fast around a launch. Join the early list and hear it from the source.</p>
          <JoinForm />
        </section>
      </main>

      <Footer />
    </>
  );
}
