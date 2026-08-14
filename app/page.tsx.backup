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
  Globe2,
  CheckCircle2,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import CTA from "../components/CTA";

const audiences = [
  {
    icon: Store,
    title: "Brands",
    text: "We work with established and emerging brands seeking credible routes into UK online retail.",
  },
  {
    icon: Factory,
    title: "Manufacturers",
    text: "We build direct relationships with capable manufacturers focused on quality, consistency and dependable supply.",
  },
  {
    icon: PackageCheck,
    title: "Wholesalers & Distributors",
    text: "We source commercially relevant products from trusted supply partners with strong market potential.",
  },
  {
    icon: Handshake,
    title: "Strategic Partners",
    text: "We develop professional relationships designed around clarity, reliability and long-term opportunity.",
  },
];

const services = [
  {
    icon: Search,
    title: "Product & Supplier Sourcing",
    text: "Identifying relevant products and supply partners with the potential to perform in the UK online retail market.",
  },
  {
    icon: BarChart3,
    title: "Commercial Evaluation",
    text: "Reviewing product positioning, pricing, supply capability and broader commercial suitability.",
  },
  {
    icon: Handshake,
    title: "Retail Partnerships",
    text: "Connecting suitable businesses through clear, professional and commercially focused relationships.",
  },
  {
    icon: ShieldCheck,
    title: "Quality-Led Approach",
    text: "Prioritising dependable supply, product quality, communication and relationships built for the long term.",
  },
];

const process = [
  [
    "01",
    "Discover",
    "We identify products, brands and suppliers that may offer genuine commercial potential.",
  ],
  [
    "02",
    "Evaluate",
    "We consider quality, positioning, pricing, supply capability and market suitability.",
  ],
  [
    "03",
    "Connect",
    "We establish clear communication between suitable commercial partners.",
  ],
  [
    "04",
    "Develop",
    "We work towards sustainable opportunities through dependable long-term relationships.",
  ],
];

const reasons = [
  "UK online retail market focus",
  "Independent and commercially focused approach",
  "Quality-led supplier evaluation",
  "Professional business communication",
  "Long-term partnership mindset",
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">
              UK E-COMMERCE · SOURCING & PARTNERSHIPS
            </p>

            <h1>
              Building better routes from quality products to UK online
              retail.
            </h1>

            <p className="lead">
              Northbridge Commerce Group works with brands, manufacturers,
              wholesalers and trusted suppliers to identify commercially
              relevant opportunities across the UK e-commerce market.
            </p>

            <div className="actions">
              <Link className="button button-dark" href="/partners">
                Partner With Us
                <ArrowUpRight size={18} />
              </Link>

              <Link className="button button-outline" href="/how-we-work">
                How We Work
              </Link>
            </div>

            <div className="hero-meta">
              <span>UK Market Focus</span>
              <span>•</span>
              <span>Quality-Led Sourcing</span>
              <span>•</span>
              <span>Long-Term Partnerships</span>
            </div>
          </div>

          {/* IMAGE-READY HERO VISUAL */}
          <div
            className="hero-art"
            aria-label="Northbridge Commerce e-commerce sourcing and retail partnerships"
          >
            <div className="hero-art-glow" />

            <div className="art-panel">
              <div className="art-top">
                <div>
                  <span className="art-label">NORTHBRIDGE</span>
                  <strong>Commerce Network</strong>
                </div>

                <div className="art-status">
                  <span />
                  UK Market
                </div>
              </div>

              <div className="art-map">
                <div className="map-ring ring-one" />
                <div className="map-ring ring-two" />
                <div className="map-line line-one" />
                <div className="map-line line-two" />
                <div className="map-node node-one" />
                <div className="map-node node-two" />
                <div className="map-node node-three" />

                <div className="central-node">
                  <Globe2 size={24} />
                </div>
              </div>

              <div className="art-bottom">
                <div>
                  <small>SUPPLY</small>
                  <strong>Connected</strong>
                </div>

                <div>
                  <small>RETAIL</small>
                  <strong>Opportunity</strong>
                </div>

                <div>
                  <small>PARTNERS</small>
                  <strong>Long-Term</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="container">
          <div className="intro-grid">
            <div>
              <p className="eyebrow">NORTHBRIDGE COMMERCE GROUP</p>
              <h2 className="display-title">
                A focused approach to sourcing, supply and online retail.
              </h2>
            </div>

            <div className="intro-copy">
              <p>
                We help create clearer commercial connections between quality
                supply and the UK online retail market.
              </p>

              <p>
                Our work is centred on identifying suitable products,
                evaluating commercial potential and developing dependable
                relationships with businesses that value quality and
                consistency.
              </p>

              <Link className="text-link" href="/about">
                Discover Northbridge
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="section alt">
        <div className="container">
          <SectionHeading
            eyebrow="WHO WE WORK WITH"
            title="Built around capable businesses and reliable supply."
            text="We work across the supply chain with businesses that value professional communication, product quality and sustainable commercial relationships."
          />

          <div className="card-grid">
            {audiences.map(({ icon: Icon, title, text }) => (
              <div className="card premium-card" key={title}>
                <div className="icon-box">
                  <Icon size={19} />
                </div>

                <p className="card-index">
                  {String(audiences.findIndex((item) => item.title === title) + 1).padStart(2, "0")}
                </p>

                <h3>{title}</h3>
                <p>{text}</p>

                <span className="card-arrow">
                  <ArrowUpRight size={16} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="WHAT WE DO"
            title="From sourcing decisions to commercial relationships."
            text="Our approach combines practical sourcing with careful commercial evaluation and professional partner development."
          />

          <div className="service-grid">
            {services.map(({ icon: Icon, title, text }, index) => (
              <div className="service-item" key={title}>
                <div className="service-number">
                  0{index + 1}
                </div>

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

      {/* VISUAL STORY PLACEHOLDER */}
      <section className="media-section">
        <div className="container">
          <div className="media-panel">
            <div className="media-content">
              <p className="eyebrow">THE NORTHBRIDGE APPROACH</p>

              <h2>
                Connecting supply with commercially relevant opportunity.
              </h2>

              <p>
                From the first supplier conversation to the development of a
                long-term commercial relationship, we focus on clarity,
                suitability and dependable execution.
              </p>

              <Link className="button button-light" href="/how-we-work">
                Explore Our Approach
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="media-visual">
              <div className="media-orbit orbit-one" />
              <div className="media-orbit orbit-two" />

              <div className="media-center">
                <Globe2 size={34} />
                <span>UK RETAIL</span>
              </div>

              <div className="media-point point-a">
                <Factory size={16} />
              </div>

              <div className="media-point point-b">
                <PackageCheck size={16} />
              </div>

              <div className="media-point point-c">
                <Store size={16} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section alt">
        <div className="container">
          <SectionHeading
            eyebrow="HOW WE WORK"
            title="A straightforward process, built around good decisions."
            text="We keep the journey clear: discover relevant opportunities, evaluate them carefully, connect the right businesses and develop relationships with long-term potential."
          />

          <div className="steps premium-steps">
            {process.map(([no, title, text]) => (
              <div className="step" key={no}>
                <span className="step-no">{no}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="step-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY NORTHBRIDGE */}
      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">WHY NORTHBRIDGE</p>

            <h2 className="section-heading-title">
              Professional sourcing with a long-term commercial perspective.
            </h2>

            <p className="section-description">
              We believe strong retail opportunities start with good products,
              dependable supply and clear communication between the businesses
              involved.
            </p>

            <Link className="text-link" href="/about">
              Learn more about us
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="reason-list">
            {reasons.map((reason, index) => (
              <div className="reason-row" key={reason}>
                <span>0{index + 1}</span>

                <div>
                  <CheckCircle2 size={18} />
                  <strong>{reason}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UK FOCUS */}
      <section className="section alt">
        <div className="container uk-focus">
          <div className="uk-badge">
            <Globe2 size={25} />
          </div>

          <div>
            <p className="eyebrow">UK MARKET FOCUS</p>

            <h2>
              Built with the expectations of the UK online retail market in
              mind.
            </h2>

            <p>
              Northbridge Commerce Group is an independent e-commerce sourcing
              and retail business focused on creating credible opportunities
              between quality supply partners and online retail.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTA />
    </>
  );
}