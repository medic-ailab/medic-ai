import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { reviewableAnswers } from "@/lib/demo";
import { REPO_URL, reviewIssueUrl } from "@/lib/project";

export const metadata: Metadata = {
  title: "Review MEDIC AI's answers",
  description: "Doctors and medical practitioners can check and correct every answer in the MEDIC AI demo. No answer has been clinically reviewed yet.",
};

export default function ReviewPage() {
  return (
    <>
      <Nav />
      <main>
        <header className="review-head">
          <h1>Doctors, check our answers</h1>
          <p>
            MEDIC AI is open source, and we want doctors and medical practitioners to correct it. No answer below has
            been clinically reviewed yet, so tell us what's wrong, unsafe or missing.
          </p>
          <div className="review-actions">
            <a className="btn btn-loud" href={reviewIssueUrl()}>
              Suggest a recommendation
            </a>
            <a className="btn btn-quiet" href={REPO_URL}>
              See the code on GitHub
            </a>
          </div>
        </header>

        <div className="review-body">
          <ol className="review-steps">
            <li>
              <h2>Send your advice</h2>
              <p>Pick an answer and suggest a change. You'll need a free GitHub account, and your review is public.</p>
            </li>
            <li>
              <h2>We confirm your registration</h2>
              <p>We check your professional registration privately before your advice changes an answer.</p>
            </li>
            <li>
              <h2>The answer gets updated</h2>
              <p>Approved changes go into the open code, and the answer shows that it has been reviewed.</p>
            </li>
          </ol>

          <h2 className="answers-title">Every answer in the demo</h2>
          {reviewableAnswers.map(({ topic, covers, reply }) => (
            <article key={topic} className="answer">
              <div>
                <h3>{topic}</h3>
                <p className="answer-covers">{covers}</p>
              </div>
              <div>
                <p className="answer-label">{reply.label}</p>
                <p>{reply.text}</p>
                <p className="answer-status">Not yet reviewed by a clinician</p>
              </div>
              <a className="btn btn-quiet-line" href={reviewIssueUrl(topic, reply.text)} aria-label={`Suggest a change to ${topic}`}>
                Suggest a change
              </a>
            </article>
          ))}
          <p className="review-privacy">Please don't include patient details or anything that could identify a patient.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
