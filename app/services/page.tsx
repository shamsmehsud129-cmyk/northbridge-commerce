import Link from "next/link";
import {
  ArrowUpRight,
  Search,
  BarChart3,
  Handshake,
  ShieldCheck,
  PackageCheck,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Search,
    title: "Product & Supplier Sourcing",
    text: "We identify relevant products and potential supply partners with suitability for the UK online retail market.",
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Commercial Evaluation",
    text: "We consider product positioning, pricing, supply capability and broader commercial suitability before pursuing an opportunity.",
  },
  {
    number: "03",
    icon: Handshake,
    title: "Retail Partnerships",
    text: "We help create clear and professional connections between suitable suppliers, brands and online retail opportunities.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Quality-Led Approach",
    text: "We prioritise product quality, dependable communication, consistency and relationships built with a long-term perspective.",
  },
];

const focus = [
  "Product suitability",
  "Supplier capability",
  "Commercial positioning",
  "Market potential",
  "Quality and consistency",
  "Long-term relationship potential",
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">WHAT WE DO</p>

          <h1>
            Practical sourcing and commercial support for UK online retail.
          </h1>

          <p className="page-hero-text">
            Northbridge Commerce Group focuses on identifying relevant products,
            evaluating commercial opportunities and developing professional
            relationships between businesses across the supply chain.
          </p>

          <div className="actions">
            <Link className="button button-dark" href="/contact">
              Discuss an Opportunity
              <ArrowUpRight size={18} />
            </Link>

            <Link className="button button-outline" href="/how-we-work">
              How We Work
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="intro-grid">
            <div>
              <p className="eyebrow">OUR SERVICES</p>

              <h2 className="display-title">
                From product discovery to stronger commercial connections.
              </h2>
            </div>

            <div className="intro-copy">
              <p>
                We take a focused and practical approach to sourcing and
                commercial development.
              </p>

              <p>
                Our work is designed to help businesses assess opportunities
                carefully before moving towards suitable retail and supply
                relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">CORE SERVICES</p>

            <h2>
              Clear thinking at every stage of the commercial journey.
            </h2>

            <p>
              We focus on the areas that matter when assessing products,
              suppliers and potential UK e-commerce opportunities.
            </p>
          </div>

          <div className="service-grid">
            {services.map(({ number, icon: Icon, title, text }) => (
              <div className="service-item" key={number}>
                <div className="service-number">{number}</div>

                <div className="service-icon">
                  <Icon size={21} />
                </div>

                <h3>{title}</h3>

                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">QUALITY-LED EVALUATION</p>

            <h2 className="section-heading-title">
              Good opportunities start with good decisions.
            </h2>

            <p className="section-description">
              We do not assume that every product or supplier is the right
              fit. We look at the fundamentals and focus on opportunities
              where there is a sensible commercial case.
            </p>

            <Link className="text-link" href="/how-we-work">
              See Our Process
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="reason-list">
            {focus.map((item, index) => (
              <div className="reason-row" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>

                <div>
                  <CheckCircle2 size={18} />
                  <strong>{item}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container uk-focus">
          <div className="uk-badge">
            <PackageCheck size={25} />
          </div>

          <div>
            <p className="eyebrow">UK E-COMMERCE FOCUS</p>

            <h2>
              Built around the requirements of modern online retail.
            </h2>

            <p>
              Our focus is on creating credible commercial opportunities
              between suitable supply partners and the UK online retail
              market, with an emphasis on quality, clarity and long-term
              potential.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta">
            <div>
              <p className="eyebrow">START A CONVERSATION</p>

              <h2>Have a product or supply opportunity to discuss?</h2>

              <p>
                Tell us about your business, products or supply capability and
                we can review whether there may be a suitable commercial fit.
              </p>
            </div>

            <Link className="button button-dark" href="/contact">
              Contact Northbridge
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}