export const REPO_URL = "https://github.com/Dipraise1/medic-ai";

export function reviewIssueUrl(topic?: string, answer?: string) {
  const params = new URLSearchParams({ template: "clinical-review.yml" });
  if (topic && answer) {
    params.set("title", `Clinical review: ${topic}`);
    params.set("answer", `${topic}\n\n${answer}`);
  }
  return `${REPO_URL}/issues/new?${params}`;
}
