import test from "node:test";
import assert from "node:assert/strict";
import { examples, respond, reviewableAnswers } from "./demo.ts";

const cases: [string, string][] = [
  ["My chest feels tight and it's hard to breathe", "emergency"],
  ["sharp pain in my chest", "emergency"],
  ["I can't breathe properly", "emergency"],
  ["my dad's face is drooping", "emergency"],
  ["I think I took an overdose", "emergency"],
  ["the bleeding won't stop", "emergency"],
  ["I want to kill myself", "crisis"],
  ["I don't want to live anymore", "crisis"],
  ["my 2-month-old has a temperature of 38.2", "urgent"],
  ["fever and sore throat", "routine"],
  ["What does HbA1c 5.4% mean?", "info"],
  ["my LDL is 160", "info"],
  ["my blood pressure was 148/92", "routine"],
  ["My ear hurts", "routine"],
  ["I can't sleep", "info"],
  ["Wen moon?", "joke"],
  ["what's the price of $MEDIC", "joke"],
  ["tell me about quantum physics", "unknown"],
  ["my heart is racing", "unknown"],
  ["I think I'm having a heart attack", "emergency"],
  ["my insulin pump stopped working", "unknown"],
  ["I had a bad year", "unknown"],
  ["is medic worth buying", "joke"],
];

for (const [input, tier] of cases) {
  test(`"${input}" -> ${tier}`, () => assert.equal(respond(input).tier, tier));
}

test("danger signs beat a topic in the same message", () => {
  assert.equal(respond("I have a fever and chest pain").tier, "emergency");
  assert.equal(respond("is $MEDIC worth it, also I can't breathe").tier, "emergency");
  assert.equal(respond("sleep is hard and I want to end my life").tier, "crisis");
});

test("doctors can review every medical answer exactly once", () => {
  assert.equal(reviewableAnswers.length, 12);
  assert.equal(new Set(reviewableAnswers.map((answer) => answer.reply.text)).size, 12);
  assert.ok(reviewableAnswers.every((answer) => answer.reply.tier !== "joke"));
});

test("every example gets the reply written for it", () => {
  const expected: Record<string, string> = {
    "My chest feels tight and it's hard to breathe": "Emergency",
    "I've had a fever and a sore throat for two days": "See a clinician soon",
    "My ear hurts. Can it wait until morning?": "Can often wait until morning",
    "What does HbA1c 5.4% mean?": "Test result, explained",
    "My LDL is 160. Is that bad?": "Test result, explained",
    "My blood pressure was 148/92": "Track and share",
    "Can I take ibuprofen with blood pressure tablets?": "Ask your pharmacist",
    "My 2-month-old has a temperature of 38.2°C": "Get care now",
    "How much sleep do I need?": "Everyday health",
    "I can't switch off at night": "Everyday support",
    "Wen moon?": "Off topic",
  };
  assert.deepEqual([...examples].sort(), Object.keys(expected).sort());
  for (const example of examples) assert.equal(respond(example).label, expected[example], example);
});
