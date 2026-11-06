import Link from "next/link";
import { token } from "@/lib/token";

export function Footer() {
  return (
    <footer className="footer">
      <p className="emergency">If this might be an emergency, call your local emergency number now.</p>
      <p>Nothing on this page is medical or financial advice. {token.ticker} is a memecoin. MEDIC AI is in development.</p>
      <p className="footer-links">
        <Link href="/review">For doctors</Link>
      </p>
    </footer>
  );
}
