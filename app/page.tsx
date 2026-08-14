import Link from "next/link";
import {
  ArrowUpRight,
  Factory,
  Handshake,
  PackageCheck,
  Store,
  Search,
  BarChart3,
  ShieldCheck,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import CTA from "../components/CTA";

const audiences = [
  [
    Store,
    "Brands",
    "Helping established and emerging brands identify credible opportunities across the UK online retail market.",
  ],
  [
    Factory,
    "Manufacturers",
    "Building direct relationships with manufacturers focused on quality, consistency and dependable supply.",
  ],
  [
    PackageCheck,
    "Wholesalers & Distributors",
    "Sourcing commercially relevant products from trusted supply partners with strong market fit.",
  ],
  [
    Handshake,
    "Strategic Partners",
    "Developing thoughtful, long-term commercial relationships built on clarity, trust and shared opportunity.",
  ],
] as const;

const reasons = [
  [
    "UK Market Focus",
    "Our commercial decisions are shaped around the opportunities, expectations and dynamics of the UK online retail market.",
  ],
  [
    "Quality-Led Sourcing",
    "We look beyond availability, considering product quality, consistency, positioning and supplier reliability.",
  ],
  [
    "Commercial Evaluation",
    "We assess market suitability, pricing, supply capability and the potential for sustainable retail growth.",
  ],
  [
    "Long-Term Relationships",
    "We prioritise dependable partnerships, transparent communication and relationships built to last.",
  ],
];

const process = [
  [
    "01",
    "Source",
    "Identify brands, products and suppliers with credible potential within the UK online retail market.",
  ],
  [
    "02",
    "Evaluate",
    "Consider product quality, positioning, pricing, supply capability and broader commercial suitability.",
  ],
  [
    "03",
    "Partner",
    "Build clear and professional relationships with suitable brands, manufacturers and supply partners.",
  ],
  [
    "04",
    "Develop",
    "Work towards sustainable retail opportunities through dependable long-term commercial relationships.",
  ],
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <p className="eyebrow">
              UK E-COMMERCE • SOURCING & PARTNERSHIPS
            </p>

            <h1>
              Connecting quality supply with meaningful retail opportunity.
            </h1>

            <p className="lead">
              Northbridge Commerce Group works with brands, manufacturers,
              wholesalers and trusted suppliers to identify, evaluate and
              develop commercially relevant opportunities across the UK
              e-commerce market.
            </p>

            <div className="actions">
              <Link className="button button-dark" href="/partners">
                Partner With Us <ArrowUpRight size={18} />
              </Link>

              <Link className="button button-outline" href="/how-we-work">
                Explore Our Approach
              </Link>
            </div>

            <div className="hero-meta">
              <span>UK Market Focus</span>
              <span>•</span>
              <span>Strategic Sourcing</span>
              <span>•</span>
              <span>Long-Term Partnerships</span>
            </div>
          </div>

          <div
            className="hero-art"
            aria-label="Northbridge Commerce sourcing and retail partnership visual"
          >
            <div className="art-panel">
              <div className="art-top">
                <div className="art-pill" />
                <div className="art-dot" />
              </div>

              <div className="art-lines">
                <div className="art-line" />
                <div className="art-line short" />
              </div>

              <div className="art-cards">
                <div className="art-card">
                  <Search size={18} />
                  <span />
                  <i />
                </div>

                <div className="art-card">
                  <BarChart3 size={18} />
                  <span />
                  <i />
                </div>

                <div className="art-card">
                  <Factory size={18} />
                  <span />
                  <i />
                </div>

                <div className="art-card">
                  <ShieldCheck size={18} />
                  <span />
                  <i />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="WHO WE WORK WITH"
            title="Built around strong relationships and reliable supply."
            text="We work with businesses that value quality, dependable supply and professional commercial relationships — from established brands and capable manufacturers to trusted wholesalers and distribution partners."
          />

          <div className="card-grid">
            {audiences.map(([Icon, title, text]) => (
              <div className="card" key={title}>
                <div className="icon-box">
                  <Icon size={19} />
                </div>

                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeading
            eyebrow="OUR APPROACH"
            title="A considered process from sourcing to opportunity."
            text="We keep our approach straightforward and commercially focused, with careful attention to product quality, market suitability and the strength of the underlying supplier relationship."
          />

          <div className="steps">
            {process.map(([no, title, text]) => (
              <div className="step" key={no}>
                <span className="step-no">{no}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <SectionHeading
            eyebrow="WHY NORTHBRIDGE"
            title="Commercial thinking with a long-term perspective."
            text="Our aim is to make sourcing and supplier relationships clear, dependable and focused on genuine commercial opportunity."
          />

          <div className="list">
            {reasons.map(([title, text], i) => (
              <div className="list-item" key={title}>
                <div className="number">
                  0{i + 1}
                </div>

                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container split">
          <div>
            <p className="eyebrow">NORTHBRIDGE COMMERCE GROUP</p>

            <h2 className="section-heading" style={{ marginBottom: 0 }}>
              Creating clearer routes from supply to UK retail.
            </h2>
          </div>

          <div className="prose">
            <p>
              Northbridge Commerce Group is a UK-focused e-commerce sourcing
              and retail business working across brands, manufacturers,
              wholesalers and trusted suppliers.
            </p>

            <p>
              We focus on identifying quality products, evaluating their
              commercial potential and developing dependable supply
              relationships that can support sustainable opportunities within
              UK online retail.
            </p>

            <p>
              Our approach is independent, commercially focused and built
              around professional relationships rather than short-term
              transactions.
            </p>

            <p>
              We operate independently and do not represent ourselves as an
              official Amazon entity, affiliate or representative.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}