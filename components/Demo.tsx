"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { exampleGroups, previewExamples, respond, type Reply } from "@/lib/demo";

type Message = { id: number; from: "you" } & { text: string } | { id: number; from: "demo"; reply: Reply };

const GREETING: Reply = {
  tier: "info",
  label: "Demo",
  text: "Hi, I'm the MEDIC AI demo. Tell me what's going on, or pick an example.",
};

export function Demo({ variant }: { variant: "preview" | "full" }) {
  const [messages, setMessages] = useState<Message[]>([{ id: 0, from: "demo", reply: GREETING }]);
  const [draft, setDraft] = useState("");
  const [thinking, setThinking] = useState(false);
  const log = useRef<HTMLDivElement>(null);
  const nextId = useRef(1);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // Scroll only inside the chat window, so the page itself never jumps
  useEffect(() => {
    if (log.current) log.current.scrollTop = log.current.scrollHeight;
  }, [messages, thinking]);

  useEffect(() => () => clearTimeout(timer.current), []);

  function ask(text: string) {
    const question = text.trim();
    if (!question || thinking) return;
    setMessages((all) => [...all, { id: nextId.current++, from: "you", text: question }]);
    setDraft("");
    setThinking(true);
    timer.current = setTimeout(() => {
      setMessages((all) => [...all, { id: nextId.current++, from: "demo", reply: respond(question) }]);
      setThinking(false);
    }, 600);
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    ask(draft);
  }

  function startOver() {
    clearTimeout(timer.current);
    setThinking(false);
    setDraft("");
    setMessages([{ id: 0, from: "demo", reply: GREETING }]);
  }

  const chips = (items: string[]) =>
    items.map((example) => (
      <button key={example} type="button" className="chip" onClick={() => ask(example)} disabled={thinking}>
        {example}
      </button>
    ));

  const chat = (
    <div className={`demo-window glass demo-window-${variant}`}>
      <div className="demo-bar">
        <p>Scripted demo. Not medical advice.</p>
        <button type="button" className="link-button" onClick={startOver}>
          Start over
        </button>
      </div>

      <div className="demo-log" ref={log} role="log" aria-live="polite" aria-label="Demo conversation" tabIndex={0}>
        {messages.map((message) =>
          message.from === "you" ? (
            <p key={message.id} className="bubble bubble-you">
              {message.text}
            </p>
          ) : (
            <div key={message.id} className={`bubble bubble-demo tier-${message.reply.tier}`}>
              {message.id !== 0 && <p className="tier-label">{message.reply.label}</p>}
              <p>{message.reply.text}</p>
              {(message.reply.tier === "emergency" || message.reply.tier === "crisis") && (
                <p className="escalate-note">
                  In the finished product, severe cases like this would also go to a human consultation. This demo can't
                  connect you to anyone.
                </p>
              )}
            </div>
          ),
        )}
        {thinking && <p className="bubble bubble-demo bubble-thinking">Checking…</p>}
      </div>

      {variant === "preview" && (
        <div className="demo-examples" aria-label="Example questions" role="group">
          {chips(previewExamples)}
        </div>
      )}

      <form className="demo-form" onSubmit={onSubmit}>
        <label htmlFor="demo-input" className="sr-only">
          Your question
        </label>
        <input
          id="demo-input"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Ask about a symptom or test result"
          maxLength={200}
          autoComplete="off"
          enterKeyHint="send"
        />
        <button type="submit" className="btn btn-loud" disabled={thinking || !draft.trim()}>
          Ask
        </button>
      </form>
    </div>
  );

  if (variant === "preview") return chat;

  return (
    <div className="full-demo">
      {chat}
      <aside className="full-examples glass" aria-label="Example questions">
        <h2>Try asking</h2>
        {exampleGroups.map((group) => (
          <div key={group.title} className="example-group">
            <h3>{group.title}</h3>
            <div className="demo-examples">{chips(group.items)}</div>
          </div>
        ))}
      </aside>
    </div>
  );
}
