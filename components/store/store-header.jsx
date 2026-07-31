"use client";

import Link from "next/link";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useState } from "react";

export default function StoreHeader() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="announcement">Complimentary delivery across Pakistan on orders over PKR 10,000</div>
      <header className="store-header">
        <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
        <nav className={open ? "open" : ""}><Link href="/#collection" onClick={() => setOpen(false)}>Shop</Link><Link href="/#story" onClick={() => setOpen(false)}>Our story</Link><Link href="/#collection" onClick={() => setOpen(false)}>Journal</Link></nav>
        <Link href="/" className="wordmark">AURELIA<span>MODEST WEAR</span></Link>
        <div className="header-tools"><button aria-label="Search"><Search /></button><button aria-label="Shopping bag"><ShoppingBag /><span>0</span></button></div>
      </header>
    </>
  );
}
