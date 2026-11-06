# Clinical review

MEDIC AI's answers can affect someone's health, so medical content changes follow stricter rules than code changes.

**Status: no answer has been clinically reviewed yet.**

## How to send a review

Registered healthcare professionals can use the [clinical review form](https://github.com/Dipraise1/medic-ai/issues/new?template=clinical-review.yml), or start from the answer they want to change at `/review` on the site.

Reviews are public. Don't include patient details, and don't post a registration number.

## How advice becomes an answer

1. A clinician submits a review.
2. A maintainer confirms the clinician's professional registration privately, using the official registry for their country.
3. A maintainer proposes the change in a pull request that links to the review.
4. A verified clinician who didn't write the suggestion approves the wording.
5. The change is merged and the answer is marked as reviewed, with the reviewer's role, specialty, country and date. The reviewer's name is shown only if they agree.

## Rules for medical content

- Danger signs always come first. An emergency answer tells people to call their local emergency number before anything else.
- Answers don't diagnose, prescribe or recommend doses.
- A reported safety problem is handled before any other work.
- Anyone can report a suspected safety problem, but only verified clinicians can approve medical wording.
- Being a contributor or token holder gives no say over medical content.

Medical answers live in `lib/demo.ts`, and their tests are in `lib/demo.test.ts`. Any change to an answer's meaning must follow this process, even if it looks small.
