"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { site } from "../lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/partners", label: "Partner With Us" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-shell">
      <nav className="nav" aria-label="Main navigation">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">N</span>
          <span>
            <strong>{site.shortName}</strong>
            <small>UK E-COMMERCE</small>
          </span>
        </Link>

        <div className="desktop-links">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </div>

        <Link href="/partners" className="nav-cta desktop-cta">
          Partner With Us <ArrowUpRight size={16} />
        </Link>

        <button className="menu-btn" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="mobile-menu">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>
          ))}
          <Link href="/partners" className="nav-cta" onClick={() => setOpen(false)}>Partner With Us <ArrowUpRight size={16} /></Link>
        </div>
      )}
    </header>
  );
}





