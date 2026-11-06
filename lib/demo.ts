// Scripted replies for the demo. No AI model and no network: nothing typed leaves the browser.
// Danger signs are checked before anything else, so they always win over a topic match.

export type Tier = "emergency" | "crisis" | "urgent" | "routine" | "info" | "joke" | "unknown";

export type Reply = { tier: Tier; label: string; text: string };

type Rule = { match: RegExp; reply: Reply };

const CRISIS: Rule = {
  match: /suicid|kill myself|harm(ing)? myself|hurt(ing)? myself|end my life|don'?t want to (live|be here)/i,
  reply: {
    tier: "crisis",
    label: "Reach out now",
    text: "I'm sorry you're carrying this. Please contact your local crisis line or emergency services now, or ask someone you trust to stay with you. This demo can't support you the way a person can.",
  },
};

const EMERGENCY: Rule = {
  match:
    /heart attack|chest.{0,20}(pain|tight|pressure|hurt)|(pain|tight|pressure|hurt).{0,20}chest|(can'?t|cannot|hard to|trouble|struggling to|difficulty|unable to).{0,12}breath|short(ness)? of breath|stroke|face.{0,12}droop|slurred|unconscious|passed out|not waking|seizure|(bleeding|blood).{0,20}(won'?t|not|doesn'?t) stop|heavy bleeding|overdose|anaphyla|throat.{0,12}(swell|closing)/i,
  reply: {
    tier: "emergency",
    label: "Emergency",
    text: "These can be signs of a medical emergency. Call your local emergency number now. Don't wait, and don't drive yourself if you can avoid it.",
  },
};

const BABY_FEVER: Rule = {
  match: /(baby|newborn|infant|month[- ]old).*(fever|temperature|hot)|(fever|temperature).*(baby|newborn|infant|month[- ]old)/i,
  reply: {
    tier: "urgent",
    label: "Get care now",
    text: "A baby under three months with a temperature of 38°C or higher needs medical care right away. Older babies with a fever should be checked by a doctor if they seem unwell or won't feed. If you're unsure, call now.",
  },
};

const TOPICS: Rule[] = [
  {
    match: /\$medic|\bmedic\b.*(price|buy|pump|worth)|(price|buy|pump|worth).*\bmedic\b|\b(moon|wen|lambo)\b/i,
    reply: {
      tier: "joke",
      label: "Off topic",
      text: "I read blood tests, not price charts. Nobody can tell you where a memecoin is going, and that includes me. Not financial advice.",
    },
  },
  {
    match: /fever|sore throat/i,
    reply: {
      tier: "routine",
      label: "See a clinician soon",
      text: "A fever with a sore throat is often a viral infection, and sometimes strep. Get urgent care if you have trouble breathing or swallowing. If not, book a routine appointment so a clinician can check your throat.",
    },
  },
  {
    match: /hba1c|a1c/i,
    reply: {
      tier: "info",
      label: "Test result, explained",
      text: "HbA1c shows your average blood sugar over about three months. Under 5.7% is the usual healthy range, and 6.5% or higher can point to diabetes. Ask your clinician what your number means for you.",
    },
  },
  {
    match: /ldl|cholesterol/i,
    reply: {
      tier: "info",
      label: "Test result, explained",
      text: "LDL is often called “bad” cholesterol, and most labs count 160 mg/dL or more as high. A good question for your clinician: what target is right for me, given my overall health?",
    },
  },
  {
    match: /ibuprofen|paracetamol|acetaminophen|medication|medicine|tablet|dose/i,
    reply: {
      tier: "info",
      label: "Ask your pharmacist",
      text: "Some common medicines interact with each other. For example, ibuprofen can raise blood pressure and affect some blood pressure tablets. A pharmacist can check your exact combination. This demo can't recommend doses.",
    },
  },
  {
    match: /blood pressure|\bbp\b|hypertension/i,
    reply: {
      tier: "routine",
      label: "Track and share",
      text: "One reading doesn't tell the whole story. Rest for five minutes and measure again, then share the pattern with your clinician. If it's 180/120 or higher, or you feel unwell, get medical help right away.",
    },
  },
  {
    match: /\bears?\b|earache/i,
    reply: {
      tier: "routine",
      label: "Can often wait until morning",
      text: "Ear pain can often wait until morning. Seek care tonight if the pain is severe, or you have a high fever or swelling behind the ear.",
    },
  },
  {
    match: /stress|overwhelm|anxious|anxiety|switch off/i,
    reply: {
      tier: "info",
      label: "Everyday support",
      text: "That sounds exhausting. A few minutes of slow breathing can help you settle. If this has gone on for weeks, or it's getting in the way of your day, a doctor or counsellor can help.",
    },
  },
  {
    match: /sleep|insomnia/i,
    reply: {
      tier: "info",
      label: "Everyday health",
      text: "Most adults need at least seven hours a night. Going to bed and waking up at the same time each day is a good place to start.",
    },
  },
];

const UNKNOWN: Reply = {
  tier: "unknown",
  label: "Not in this demo",
  text: "This demo only has a few scripted topics, so it can't answer that. Try one of the examples. For a real health concern, talk to a healthcare professional.",
};

// Everything doctors are asked to check on /review. The coin joke isn't medical, so it's left out.
export const reviewableAnswers: { topic: string; covers: string; reply: Reply }[] = [
  { topic: "Self-harm and suicide", covers: "Thoughts of suicide or self-harm, not wanting to live", reply: CRISIS.reply },
  {
    topic: "Medical emergency signs",
    covers:
      "Heart attack, chest pain or pressure, trouble breathing, stroke signs, unconsciousness, seizure, bleeding that won't stop, overdose, severe allergic reaction, throat swelling",
    reply: EMERGENCY.reply,
  },
  { topic: "Fever in a baby", covers: "A baby, infant or newborn with a fever or high temperature", reply: BABY_FEVER.reply },
  { topic: "Fever or sore throat", covers: "Fever or sore throat in an older child or adult", reply: TOPICS[1].reply },
  { topic: "HbA1c results", covers: "Questions about HbA1c or A1c", reply: TOPICS[2].reply },
  { topic: "Cholesterol results", covers: "Questions about LDL or cholesterol", reply: TOPICS[3].reply },
  { topic: "Medication questions", covers: "Ibuprofen, paracetamol, medicines, tablets, doses", reply: TOPICS[4].reply },
  { topic: "Blood pressure", covers: "Blood pressure readings and hypertension", reply: TOPICS[5].reply },
  { topic: "Ear pain", covers: "Ear pain and earache", reply: TOPICS[6].reply },
  { topic: "Stress and anxiety", covers: "Stress, feeling overwhelmed, anxiety, trouble switching off", reply: TOPICS[7].reply },
  { topic: "Sleep", covers: "Sleep and insomnia", reply: TOPICS[8].reply },
  { topic: "Anything else", covers: "Any question the demo doesn't recognise", reply: UNKNOWN },
];

export const exampleGroups = [
  {
    title: "Symptoms",
    items: [
      "My chest feels tight and it's hard to breathe",
      "I've had a fever and a sore throat for two days",
      "My ear hurts. Can it wait until morning?",
    ],
  },
  {
    title: "Test results",
    items: ["What does HbA1c 5.4% mean?", "My LDL is 160. Is that bad?", "My blood pressure was 148/92"],
  },
  {
    title: "Medication",
    items: ["Can I take ibuprofen with blood pressure tablets?"],
  },
  {
    title: "Family and everyday health",
    items: [
      "My 2-month-old has a temperature of 38.2°C",
      "How much sleep do I need?",
      "I can't switch off at night",
    ],
  },
  {
    title: "The coin",
    items: ["Wen moon?"],
  },
];

export const examples = exampleGroups.flatMap((group) => group.items);

export const previewExamples = [
  "My chest feels tight and it's hard to breathe",
  "What does HbA1c 5.4% mean?",
  "Wen moon?",
];

export function respond(input: string): Reply {
  for (const rule of [CRISIS, EMERGENCY, BABY_FEVER, ...TOPICS]) {
    if (rule.match.test(input)) return rule.reply;
  }
  return UNKNOWN;
}
