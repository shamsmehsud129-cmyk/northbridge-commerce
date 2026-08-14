import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CTA({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`cta ${compact ? "cta-compact" : ""}`}>
      <div>
        <p className="eyebrow">PARTNERSHIPS</p>
        <h2>Looking for a reliable e-commerce retail partner?</h2>
        <p>We are interested in connecting with brands, manufacturers, wholesalers and distributors with quality products and reliable supply capabilities.</p>
      </div>
      <Link className="button button-light" href="/contact">Start a Conversation <ArrowUpRight size={18} /></Link>
    </section>
  );
}

