# MEDIC AI

MEDIC AI is a health assistant in development, launching with the `$MEDIC` memecoin. It's being built to explain symptoms and test results in plain words, and to escalate severe cases to human consultations.

This repository holds the launch site and a scripted demo. **The demo doesn't use an AI model, and it isn't medical advice.** Nothing typed into it leaves the browser. If this might be an emergency, call your local emergency number now.

## Run it

You'll need Node.js 24 or newer.

```sh
npm install
npm run dev     # http://localhost:3000
npm test        # checks the demo's answers
npm run build   # builds the static site into out/
npm run deploy  # publishes out/ to Cloudflare
```

## Where things are

| Path | What it holds |
| --- | --- |
| `app/` | The pages: home, `/demo` and `/review` |
| `components/` | Shared parts such as the demo chat and nav |
| `lib/demo.ts` | The demo's scripted medical answers |
| `lib/token.ts` | Token details, all still to be announced |
| `lib/project.ts` | The link for clinician reviews |

To collect early-list sign-ups, set `NEXT_PUBLIC_WAITLIST_ENDPOINT` to a URL that accepts a JSON POST of `{ "email": "..." }`. Without it, the form says that sign-ups aren't open.

## Contributing

Changes to medical wording must follow [CLINICAL_REVIEW.md](CLINICAL_REVIEW.md).

To open clinician reviews on the site, set `NEXT_PUBLIC_REVIEW_FORM_URL` to your review form's address.

## Licence

The code is licensed under [Apache-2.0](LICENSE). This doesn't cover the MEDIC AI name or logo, which you can't use in a way that suggests your project is ours or endorsed by us. Photos are listed in [IMAGE-CREDITS.md](IMAGE-CREDITS.md).

## Risks

`$MEDIC` is a memecoin. It has no intrinsic value and no promised return, and its price can fall to zero. Clinical review doesn't make it a safer purchase. Nothing here is financial advice.
