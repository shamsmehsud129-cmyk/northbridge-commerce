import type { Metadata } from "next";
import CTA from "../../components/CTA";

export const metadata: Metadata = {
  title: "About Northbridge Commerce | UK E-Commerce",
  description:
    "Learn about Northbridge Commerce, an independent UK e-commerce business focused on product sourcing, supplier relationships and online retail opportunities.",
};


export default function About() {
  return <>
    <section className="page-hero"><div className="container"><p className="eyebrow">ABOUT US</p><h1>Sourcing quality products for UK online retail.</h1><p>Northbridge Commerce focuses on identifying quality products, evaluating commercial opportunities and developing professional relationships with suitable suppliers for the UK e-commerce market.</p></div></section>
    <section className="section"><div className="container prose">
      <h2>Who We Are</h2><p>Northbridge Commerce is an independent UK e-commerce business working with brands, manufacturers, wholesalers and suppliers to develop opportunities across online retail.</p>
      <h2>What We Do</h2><p>We look for quality products and reliable supply relationships that can create sustainable commercial opportunities in the UK online retail market.</p>
      <h2>Our Approach</h2><p>We value clear communication, sensible commercial discussions and dependable operations. Every potential relationship is considered on its own merits.</p>
      <h2>Our Values</h2><ul><li><strong>Integrity</strong> — communicate clearly and honestly.</li><li><strong>Reliability</strong> — be dependable in business relationships.</li><li><strong>Communication</strong> — keep discussions professional and straightforward.</li><li><strong>Quality</strong> — prioritise products and supply capabilities that meet expectations.</li><li><strong>Long-Term Thinking</strong> — focus on sustainable opportunities rather than quick transactions.</li></ul>
      <h2>Why Supplier Relationships Matter</h2><p>Good online retail starts with good supply relationships. We want to work with businesses that take product quality, consistency and professional communication seriously.</p>
    </div></section><CTA compact />
  </>;
}


