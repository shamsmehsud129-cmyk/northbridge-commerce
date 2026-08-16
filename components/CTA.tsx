import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CTA({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`cta ${compact ? "cta-compact" : ""}`}><video className="cta-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true"><source src="/images/6169085-uhd_2160_3840_25fps.mp4" type="video/mp4" /></video><div className="cta-overlay" /><div className="cta-content"><p className="eyebrow">PARTNERSHIPS</p><h2>Looking for a reliable e-commerce retail partner?</h2><p>We are interested in connecting with brands, manufacturers, wholesalers and distributors with quality products and reliable supply capabilities.</p></div><Link className="button button-light cta-button" href="/contact">Start a Conversation <ArrowUpRight size={18} /></Link></section>
  );
}


