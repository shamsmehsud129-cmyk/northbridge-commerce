import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">
            <span className="brand-mark">N</span>
            <div>
              <strong>{site.name}</strong>
              <small>{site.tagline}</small>
            </div>
          </div>

          <p className="footer-copy">
            Building professional relationships across the UK e-commerce and
            online retail market through thoughtful sourcing and reliable
            commercial communication.
          </p>
        </div>

        <div>
          <h4>Explore</h4>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/how-we-work">How We Work</Link>
          <Link href="/partners">Partner With Us</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div>
          <h4>Legal</h4>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms &amp; Conditions</Link>
          <span>Cookie Policy</span>
        </div>

        <div>
          <h4>Business Enquiries</h4>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={`tel:${site.phone}`}>{site.phone}</a>
          <small>We aim to respond within 24 to 48 hours.</small>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          Copyright {new Date().getFullYear()} {site.name}. All rights
          reserved.
        </span>

        <span>{site.disclaimer}</span>
      </div>
    </footer>
  );
}