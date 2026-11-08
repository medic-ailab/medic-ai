import Link from "next/link";
import { REPO_URL } from "@/lib/project";
export function Footer() {
  return <footer className="footer"><div className="wrap"><div className="footer-top"><Link className="brand" href="/">MEDIC<span className="brand-ai"> AI</span></Link><p>A clearer perspective on health.</p><div className="footer-links"><Link href="/vision">Our vision</Link><Link href="/review">For clinicians</Link><a href={REPO_URL}>GitHub ↗</a></div></div><div className="footer-bottom"><p>© {new Date().getFullYear()} MEDIC AI. Built with care.</p><p>In development. Not medical or financial advice. $MEDIC is a memecoin.</p></div><p className="emergency">If this might be an emergency, call your local emergency number now.</p></div></footer>;
}
