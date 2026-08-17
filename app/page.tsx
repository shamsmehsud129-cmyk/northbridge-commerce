import Link from "next/link";
import Navbar from "@/components/Navbar";

const categories = [
  { name: "Electronics", icon: '[E]' },
  { name: "Fashion", icon: '[F]' },
  { name: "Home & Living", icon: '[H]' },
  { name: "Beauty", icon: '[*]' },
  { name: "Gaming", icon: '[G]' },
  { name: "Accessories", icon: '[A]' },
];

const products = [
  {
    name: "Wireless Pro Earbuds",
    category: "Audio",
    price: "Rs. 7,999",
    oldPrice: "Rs. 9,499",
    badge: "Best Seller",
  },
  {
    name: "Smart Fitness Watch",
    category: "Wearables",
    price: "Rs. 12,499",
    oldPrice: "Rs. 15,999",
    badge: "Trending",
  },
  {
    name: "Mechanical RGB Keyboard",
    category: "Gaming",
    price: "Rs. 8,499",
    oldPrice: "Rs. 10,999",
    badge: "Hot Deal",
  },
  {
    name: "Magnetic Fast Charger",
    category: "Accessories",
    price: "Rs. 3,299",
    oldPrice: "Rs. 4,499",
    badge: "New",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="hero-premium">
          <div className="container hero-premium-inner">
            <div className="hero-copy">
              <span className="hero-kicker">SMART SHOPPING, SIMPLIFIED</span>

              <h1 className="hero-title">
                Find what you need.
                <br />
                <span>Buy with confidence.</span>
              </h1>

              <p className="hero-description">
                Discover better products, compare your options and get
                recommendations that fit your budget and needs.
              </p>

              <div className="ai-search hero-search">
                <span className="hero-search-icon">AI</span>
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  aria-label="AI shopping search"
                />
                <button className="btn btn-primary">
                  Search
                </button>
              </div>

              <div className="hero-suggestions">
                <span>Popular:</span>
                <button>Gaming setup</button>
                <button>Wireless earbuds</button>
                <button>Smart watches</button>
              </div>
            </div>

            <div className="hero-showcase" aria-hidden="true">
              <div className="showcase-card showcase-main">
                <span className="showcase-label">TRENDING NOW</span>
                <div className="showcase-product-shape">●</div>
                <div>
                  <strong>Smart picks</strong>
                  <p>Selected for you</p>
                </div>
              </div>

              <div className="showcase-card showcase-small showcase-small-one">
                <span>BEST VALUE</span>
                <strong>Compare</strong>
                <p>Before you buy</p>
              </div>

              <div className="showcase-card showcase-small showcase-small-two">
                <span>AI POWERED</span>
                <strong>Better choices</strong>
                <p>Less guesswork</p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="section">
          <div className="container">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600">
                  Explore
                </p>

                <h2 className="heading-md">Shop by category</h2>
              </div>

              <Link
                href="/categories"
                className="hidden text-sm font-bold text-blue-600 sm:block"
              >
                View all →
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={`/categories/${category.name
                    .toLowerCase()
                    .replaceAll(" ", "-")}`}
                  className="card group flex min-h-36 flex-col justify-between p-5"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    {category.icon}
                  </span>

                  <span className="text-sm font-bold text-slate-900">
                    {category.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="section bg-white">
          <div className="container">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600">
                  Trending now
                </p>

                <h2 className="heading-md">Popular products</h2>
              </div>

              <Link
                href="/shop"
                className="hidden text-sm font-bold text-blue-600 sm:block"
              >
                Shop all →
              </Link>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <article
                  key={product.name}
                  className="card product-card overflow-hidden"
                >
                  <div className="product-image">
                    <div className="absolute left-4 top-4 z-10">
                      <span className="badge badge-primary">
                        {product.badge}
                      </span>
                    </div>

                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-slate-100 via-blue-50 to-violet-50 text-5xl text-slate-300">
                      â—ˆ
                    </div>
                  </div>

                  <div className="product-info">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                      {product.category}
                    </p>

                    <h3 className="product-title">{product.name}</h3>

                    <div className="mt-4">
                      <span className="product-price">
                        {product.price}
                      </span>

                      <span className="product-old-price">
                        {product.oldPrice}
                      </span>
                    </div>

                    <button className="btn btn-primary mt-5 w-full">
                      Add to cart
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* AI Recommendation */}
        <section className="section">
          <div className="container">
            <div className="overflow-hidden rounded-[32px] bg-slate-950">
              <div className="relative px-7 py-14 sm:px-12 lg:px-16">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(124,58,237,0.3),transparent_35%)]" />

                <div className="relative max-w-2xl">
                  <span className="text-sm font-bold uppercase tracking-widest text-blue-300">
                    AI Smart recommendations
                  </span>

                  <h2 className="heading-lg mt-5 text-white">
                    Your next great find is closer than you think.
                  </h2>

                  <p className="mt-6 text-lg leading-8 text-slate-300">
                    Our future AI assistant will understand your budget,
                    preferences and needs to help you discover products that
                    actually fit you.
                  </p>

                  <Link
                    href="/assistant"
                    className="btn btn-primary mt-8"
                  >
                    Explore AI Assistant →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="section bg-white">
          <div className="container">
            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Smart discovery",
                  text: "Find products faster with intelligent search and recommendations.",
                },
                {
                  title: "Transparent pricing",
                  text: "Compare prices and discover better value before you buy.",
                },
                {
                  title: "Easy ordering",
                  text: "Shop online or connect directly through WhatsApp.",
                },
              ].map((item) => (
                <div key={item.title} className="card p-7">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    âœ“
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-500">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="container">
            <div className="rounded-[32px] bg-gradient-to-br from-blue-600 to-violet-600 px-7 py-16 text-center text-white sm:px-12">
              <h2 className="heading-lg">
                Ready to shop smarter?
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-blue-50">
                Discover products, compare options and find what fits you
                best.
              </p>

              <Link
                href="/shop"
                className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-7 font-bold text-blue-700 transition-transform hover:-translate-y-1"
              >
                Start Shopping
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

