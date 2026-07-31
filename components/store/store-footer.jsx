import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function StoreFooter() {
  return <footer className="store-footer"><div className="footer-brand"><Link href="/" className="wordmark light">AURELIA<span>MODEST WEAR</span></Link><p>Modern modestwear,<br />thoughtfully composed.</p></div><div className="footer-links"><div><p>Explore</p><Link href="/#collection">Collection</Link><Link href="/#story">Our story</Link><Link href="/">Size guide</Link></div><div><p>Care</p><Link href="/">Delivery & returns</Link><Link href="/">Garment care</Link><Link href="/">Contact</Link></div><div><p>Follow</p><Link href="/">Instagram <ArrowUpRight size={12} /></Link><Link href="/">Pinterest <ArrowUpRight size={12} /></Link></div></div><div className="footer-bottom"><span>© 2026 Aurelia. All rights reserved.</span><span>Made with intention.</span></div></footer>;
}
