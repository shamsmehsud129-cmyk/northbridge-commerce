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
    "Helping established and emerging brands identify opportunities to expand through UK online retail.",
  ],
  [
    Factory,
    "Manufacturers",
    "Building direct, professional relationships with manufacturers offering quality products and dependable supply.",
  ],
  [
    PackageCheck,
    "Wholesalers & Distributors",
    "Working with reliable suppliers to source products suited to the UK e-commerce market.",
  ],
  [
    Handshake,
    "Strategic Partners",
    "Developing long-term commercial relationships built around clear communication and shared opportunity.",
  ],
] as const;

const reasons = [
  [
    "UK Market Focus",
    "Our sourcing and commercial decisions are focused on opportunities within the UK online retail market.",
  ],
  [
    "Supplier Relationships",
    "We value reliable communication, consistent supply and professional long-term relationships.",
  ],
  [
    "Commercial Evaluation",
    "We consider product quality, market suitability, pricing and sustainable commercial potential.",
  ],
  [
    "Long-Term Approach",
    "Our goal is to build lasting retail opportunities rather than focus on short-term transactions.",
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
              Connecting quality products with opportunities in UK online
              retail.
            </h1>

            <p className="lead">
              Northbridge Commerce Group works with brands, manufacturers,
              wholesalers and trusted suppliers to source, evaluate and
              develop products for the UK e-commerce market.
            </p>

            <div className="actions">
              <Link
                className="button button-dark"
                href="/partners"
              >
                Partner With Us <ArrowUpRight size={18} />
              </Link>

              <Link
                className="button button-outline"
                href="/how-we-work"
              >
                How We Work
              </Link>
            </div>

            <div className="hero-meta">
              <span>UK Market Focus</span>
              <span>•</span>
              <span>Product Sourcing</span>
              <span>•</span>
              <span>Long-Term Partnerships</span>
            </div>
          </div>

          <div
            className="hero-art"
            aria-label="E-commerce sourcing and partnership visual"
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
            title="Built around strong supplier and retail relationships."
            text="We welcome conversations with businesses that value product quality, reliable supply and professional commercial relationships."
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
            eyebrow="OUR PROCESS"
            title="A clear approach to sourcing and partnership."
            text="We keep the process straightforward, commercially focused and built around long-term opportunity."
          />

          <div className="steps">
            {[
              [
                "01",
                "Source",
                "Identify brands, products and suppliers with potential in the UK online retail market.",
              ],
              [
                "02",
                "Evaluate",
                "Assess product quality, market suitability, pricing, supply and commercial potential.",
              ],
              [
                "03",
                "Partner",
                "Build clear and professional relationships with suitable suppliers and brands.",
              ],
              [
                "04",
                "Grow",
                "Develop sustainable retail opportunities through dependable long-term partnerships.",
              ],
            ].map(([no, title, text]) => (
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
            title="Commercial thinking with a long-term approach."
            text="Our aim is to make sourcing and supplier relationships clear, dependable and focused on genuine market opportunity."
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

            <h2
              className="section-heading"
              style={{ marginBottom: 0 }}
            >
              Building opportunities across the UK online retail market.
            </h2>
          </div>

          <div className="prose">
            <p>
              Northbridge Commerce Group is a UK-focused e-commerce sourcing
              and retail business working with brands, manufacturers,
              wholesalers and trusted suppliers.
            </p>

            <p>
              We focus on identifying quality products, developing dependable
              supply relationships and creating sustainable opportunities
              within the UK online retail market.
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