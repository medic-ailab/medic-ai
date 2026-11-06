"use client";

import { useState } from "react";
import { respond } from "@/lib/demo";

const TABS = ["Home", "Chat", "Check", "Health", "Records"] as const;
type Tab = (typeof TABS)[number];
const QUESTION = "I've had a fever and a sore throat for two days";

export function AppMock() {
  const [tab, setTab] = useState<Tab>("Home");
  const reply = respond(QUESTION);

  return (
    <div className="phone">
      <div className="phone-screen">
        <p className="phone-brand">MEDIC AI</p>
        <div className="phone-body" id="phone-panel" role="tabpanel" aria-label={tab}>
          {tab === "Home" && (
            <>
              <h3>How can we help you feel better?</h3>
              <p>Explore health information and organize your care in one place.</p>
              <div className="phone-grid">
                {(["Chat", "Check", "Health", "Records"] as const).map((target) => (
                  <button key={target} type="button" className="phone-tile" onClick={() => setTab(target)}>
                    {{ Chat: "Ask MEDIC AI", Check: "Check symptoms", Health: "Health dashboard", Records: "Medical records" }[target]}
                  </button>
                ))}
              </div>
            </>
          )}
          {tab === "Chat" && (
            <>
              <p className="bubble bubble-you">{QUESTION}</p>
              <div className="bubble bubble-demo">
                <p className="tier-label">{reply.label}</p>
                <p>{reply.text}</p>
              </div>
            </>
          )}
          {tab === "Check" && (
            <>
              <h3>Check symptoms</h3>
              <ol className="phone-list">
                <li>What's bothering you?</li>
                <li>How long has it been going on?</li>
                <li>How severe is it?</li>
                <li>Do you have any warning signs?</li>
              </ol>
              <p>You'd then get clear guidance on what kind of care to consider.</p>
            </>
          )}
          {tab === "Health" && (
            <>
              <h3>Your week</h3>
              <dl className="phone-stats">
                <div><dt>Blood pressure</dt><dd>128/82</dd></div>
                <div><dt>Glucose</dt><dd>5.4 mmol/L</dd></div>
                <div><dt>Weight</dt><dd>72 kg</dd></div>
              </dl>
              <p>Next appointment: Tuesday, 10:00</p>
            </>
          )}
          {tab === "Records" && (
            <>
              <h3>Your records</h3>
              <ul className="phone-list">
                <li>Medical reports</li>
                <li>Allergies</li>
                <li>Prescribed medications</li>
                <li>Past diagnoses and treatment history</li>
              </ul>
              <p>Encrypted, and shared only with your consent.</p>
            </>
          )}
        </div>
        <div className="phone-tabs" role="tablist" aria-label="App sections">
          {TABS.map((name) => (
            <button key={name} type="button" role="tab" aria-selected={tab === name} aria-controls="phone-panel" onClick={() => setTab(name)}>
              {name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
