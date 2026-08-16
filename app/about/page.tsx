import type { Metadata } from "next";
import CTA from "../../components/CTA";

export const metadata: Metadata = {
  title: "About Northbridge Commerce | UK E-Commerce Sourcing",
  description:
    "Learn about Northbridge Commerce, an independent e-commerce business focused on product sourcing, supplier relationships and commercial opportunities in UK online retail.",
};

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">ABOUT US</p>

          <h1>Building better opportunities through thoughtful sourcing.</h1>

          <p>
            Northbridge Commerce is an independent e-commerce business focused
            on identifying quality products, evaluating commercial
            opportunities and developing professional supplier relationships
            for the UK online retail market.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <h2>Who We Are</h2>

          <p>
            Northbridge Commerce works across product sourcing and online
            retail, connecting commercial opportunities with brands,
            manufacturers, wholesalers and suitable suppliers.
          </p>

          <p>
            Our focus is simple: understand the opportunity, assess the
            product and supply relationship carefully, and build professional
            relationships that can support sustainable commercial activity.
          </p>

          <h2>What We Do</h2>

          <p>
            We research products, explore suitable supply opportunities and
            evaluate potential relationships for the UK e-commerce market.
            Each opportunity is considered individually rather than following
            a one-size-fits-all approach.
          </p>

          <h2>Our Mission</h2>

          <p>
            Our mission is to make product sourcing and commercial
            communication more straightforward by combining careful research,
            practical evaluation and dependable supplier relationships.
          </p>

          <h2>Our Vision</h2>

          <p>
            We aim to build a trusted e-commerce business known for
            professional communication, thoughtful sourcing and long-term
            commercial relationships.
          </p>

          <h2>Who We Work With</h2>

          <p>
            We are interested in working with brands, manufacturers,
            wholesalers and suppliers that value product quality, reliable
            communication and professional business relationships.
          </p>

          <h2>Our Approach</h2>

          <p>
            Our approach follows a straightforward process: research the
            opportunity, understand the product and market, evaluate supply
            considerations, communicate clearly and determine whether the
            relationship makes commercial sense.
          </p>

          <h2>Our Values</h2>

          <ul>
            <li>
              <strong>Integrity</strong> - communicate clearly and honestly.
            </li>
            <li>
              <strong>Reliability</strong> - be dependable in business
              relationships.
            </li>
            <li>
              <strong>Communication</strong> - keep discussions professional
              and straightforward.
            </li>
            <li>
              <strong>Quality</strong> - prioritise products and supply
              capabilities that meet expectations.
            </li>
            <li>
              <strong>Long-Term Thinking</strong> - focus on sustainable
              opportunities rather than quick transactions.
            </li>
          </ul>

          <h2>Why Supplier Relationships Matter</h2>

          <p>
            Strong online retail starts with dependable supply. We believe
            good communication, product consistency and mutual understanding
            are important foundations for building sustainable commercial
            opportunities.
          </p>

          <h2>Our Commitment</h2>

          <p>
            Northbridge Commerce is committed to maintaining a professional,
            transparent and practical approach to every business conversation.
            We do not rely on exaggerated claims or promises. Instead, we
            focus on understanding opportunities and building relationships
            that make genuine commercial sense.
          </p>
        </div>
      </section>

      <CTA compact />
    </>
  );
}