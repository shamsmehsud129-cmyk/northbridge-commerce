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

const images = [
  "/images/pexels-fauxels-3184431.jpg",
  "/images/pexels-imeenhae-2610109-4277794.jpg",
  "/images/pexels-tiger-lily-4483560.jpg",
  "/images/pexels-tiger-lily-4483864.jpg",
  "/images/pexels-tiger-lily-4487383.jpg",
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero hero-premium">
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

          {/* HERO VIDEO */}
          <div className="hero-video-wrap">
            <video
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={images[0]}
              aria-label="Northbridge Commerce sourcing and retail operations"
            >
              <source
                src="/images/6169090-uhd_3840_2160_25fps.mp4"
                type="video/mp4"
              />
            </video>

            <div className="hero-video-overlay">
              <div>
                <span>NORTHBRIDGE</span>
                <strong>Commerce Group</strong>
              </div>

              <div className="video-status">
                <span />
                UK MARKET
              </div>
            </div>

            <div className="hero-video-caption">
              <span>SUPPLY</span>
              <span>RETAIL</span>
              <span>PARTNERSHIPS</span>
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

      {/* IMAGE STORY */}
      <section className="image-story">
        <div className="container">
          <div className="image-story-header">
            <div>
              <p className="eyebrow">THE NORTHBRIDGE NETWORK</p>

              <h2>
                Connecting capable businesses across the supply chain.
              </h2>
            </div>

            <p>
              From product discovery and supplier relationships to retail
              opportunity, we focus on building dependable commercial
              connections.
            </p>
          </div>

          <div className="image-mosaic">
            <div className="mosaic-main">
              <img
                src={images[0]}
                alt="Professional business team working together"
                loading="lazy"
              />

              <div className="mosaic-label">
                <span>01</span>
                <strong>Business Relationships</strong>
              </div>
            </div>

            <div className="mosaic-side">
              <div className="mosaic-card">
                <img
                  src={images[1]}
                  alt="Professional commercial environment"
                  loading="lazy"
                />

                <div className="mosaic-label">
                  <span>02</span>
                  <strong>Commercial Evaluation</strong>
                </div>
              </div>

              <div className="mosaic-card">
                <img
                  src={images[2]}
                  alt="Products prepared for online retail"
                  loading="lazy"
                />

                <div className="mosaic-label">
                  <span>03</span>
                  <strong>Quality Products</strong>
                </div>
              </div>
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
            {audiences.map(({ icon: Icon, title, text }, index) => (
              <div className="card premium-card" key={title}>
                <div className="icon-box">
                  <Icon size={19} />
                </div>

                <p className="card-index">
                  {String(index + 1).padStart(2, "0")}
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

      {/* SECOND VIDEO */}
      <section className="media-section media-video-section">
        <div className="container">
          <div className="media-video-panel">
            <video
              className="secondary-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={images[3]}
              aria-label="Northbridge Commerce retail and supply showcase"
            >
              <source
                src="/images/6169085-uhd_2160_3840_25fps.mp4"
                type="video/mp4"
              />
            </video>

            <div className="secondary-video-overlay">
              <p className="eyebrow">THE NORTHBRIDGE APPROACH</p>

              <h2>
                From supply to opportunity, built around better connections.
              </h2>

              <p>
                We focus on clarity, suitability and dependable execution at
                every stage of the commercial relationship.
              </p>

              <Link className="button button-light" href="/how-we-work">
                Explore Our Approach
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT / RETAIL IMAGES */}
      <section className="section">
        <div className="container">
          <div className="visual-grid">
            <div className="visual-copy">
              <p className="eyebrow">QUALITY-LED SOURCING</p>

              <h2>
                Good commercial opportunities start with the right products.
              </h2>

              <p>
                We consider product quality, market positioning, pricing,
                supply capability and the strength of the underlying
                relationship before pursuing an opportunity.
              </p>

              <div className="check-list">
                <div>
                  <CheckCircle2 size={18} />
                  <span>Product suitability</span>
                </div>

                <div>
                  <CheckCircle2 size={18} />
                  <span>Supplier reliability</span>
                </div>

                <div>
                  <CheckCircle2 size={18} />
                  <span>Commercial potential</span>
                </div>
              </div>
            </div>

            <div className="visual-image-stack">
              <img
                className="visual-image-large"
                src={images[3]}
                alt="Products and retail presentation"
                loading="lazy"
              />

              <img
                className="visual-image-small"
                src={images[4]}
                alt="Online retail products"
                loading="lazy"
              />
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