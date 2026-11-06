import Link from "next/link";
import { REPO_URL } from "@/lib/project";
import { token } from "@/lib/token";

export function Footer() {
  return (
    <footer className="footer">
      <p className="emergency">If this might be an emergency, call your local emergency number now.</p>
      <p>Nothing on this page is medical or financial advice. {token.ticker} is a memecoin. MEDIC AI is in development.</p>
      <p className="footer-links">
        <a href={REPO_URL}>Open source on GitHub</a>
        <Link href="/review">Review the answers</Link>
      </p>
    </footer>
  );
}
