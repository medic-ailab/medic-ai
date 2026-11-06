import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { reviewableAnswers } from "@/lib/demo";
import { REVIEW_FORM_URL } from "@/lib/project";

export const metadata: Metadata = {
  title: "Review MEDIC AI's answers",
  description: "We want doctors and medical practitioners to check every answer in the MEDIC AI demo. No answer has been clinically reviewed yet.",
};

export default function ReviewPage() {
  return (
    <>
      <Nav />
      <main>
        <header className="review-head">
          <h1>Doctors, check our answers</h1>
          <p>
            We want doctors and medical practitioners to correct MEDIC AI. No answer below has been clinically reviewed
            yet. {REVIEW_FORM_URL ? "Tell us what's wrong, unsafe or missing." : "Reviews open soon."}
          </p>
          {REVIEW_FORM_URL && (
            <div className="review-actions">
              <a className="btn btn-loud" href={REVIEW_FORM_URL}>
                Suggest a recommendation
              </a>
            </div>
          )}
        </header>

        <div className="review-body">
          <h2 className="answers-title">Every answer in the demo</h2>
          {reviewableAnswers.map(({ topic, covers, reply }) => (
            <article key={topic} className="answer answer-plain">
              <div>
                <h3>{topic}</h3>
                <p className="answer-covers">{covers}</p>
              </div>
              <div>
                <p className="answer-label">{reply.label}</p>
                <p>{reply.text}</p>
                <p className="answer-status">Not yet reviewed by a clinician</p>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
