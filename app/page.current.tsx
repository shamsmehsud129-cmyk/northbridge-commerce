import Link from "next/link";
import Navbar from "@/components/Navbar";

const categories = [
  { name: "Men's Fabrics", subtitle: "Elegant everyday & formal wear" },
  { name: "Women's Fabrics", subtitle: "Beautiful fabrics for every style" },
  { name: "Cotton", subtitle: "Soft, breathable & comfortable" },
  { name: "Linen", subtitle: "Lightweight premium collection" },
  { name: "Khaddar", subtitle: "Warm fabrics for winter" },
  { name: "Wash & Wear", subtitle: "Easy care, refined finish" },
];

const products = [
  {
    name: "Premium Wash & Wear",
    category: "Men's Collection",
    price: "Rs. 1,850",
    unit: "/ meter",
    badge: "Best Seller",
  },
  {
    name: "Fine Cotton Collection",
    category: "Men's Collection",
    price: "Rs. 1,450",
    unit: "/ meter",
    badge: "Popular",
  },
  {
    name: "Premium Linen",
    category: "Women's Collection",
    price: "Rs. 2,200",
    unit: "/ meter",
    badge: "Premium",
  },
  {
    name: "Winter Khaddar",
    category: "Winter Collection",
    price: "Rs. 1,650",
    unit: "/ meter",
    badge: "New",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(148,163,184,0.16),transparent_32%),radial-gradient(circle_at_85%_30%,rgba(255,255,255,0.08),transparent_30%)]" />

          <div className="container relative py-24 sm:py-32 lg:py-40">
            <div className="max-w-4xl">
              <span className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold tracking-wide text-slate-300">
                PREMIUM FABRICS & CLOTHING
              </span>

              <h1 className="heading-xl text-white">
                Quality fabrics.
                <br />
                <span className="text-slate-300">
                  Timeless style.
                </span>
              </h1>

              <p className="body-lg mt-7 max-w-2xl text-slate-300">
                Discover premium fabrics for men and women, carefully selected
                for comfort, quality and timeless style.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/men"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-7 font-bold text-slate-950 transition-all hover:-translate-y-1 hover:bg-slate-100"
                >
                  Shop Men
                </Link>

                <Link
                  href="/women"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-7 font-bold text-white transition-all hover:-translate-y-1 hover:bg-white/10"
                >
                  Shop Women
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-400">
                <span>✓ Premium quality</span>
                <span>✓ Sold by meter</span>
                <span>✓ Men & women collections</span>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="section">
          <div className="container">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-widest text-slate-500">
                  Explore
                </p>

                <h2 className="heading-md">
                  Shop by collection
                </h2>
              </div>

              <Link
                href="/fabrics"
                className="hidden text-sm font-bold text-slate-700 sm:block"
              >
                View all &gt;
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={`/fabrics/${category.name
                    .toLowerCase()
                    .replaceAll(" ", "-")
                    .replaceAll("'", "")}`}
                  className="card group flex min-h-40 flex-col justify-between p-5 transition-all hover:-translate-y-1"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-sm font-black text-slate-700 transition-colors group-hover:bg-slate-900 group-hover:text-white">
                    K
                  </div>

                  <div>
                    <h3 className="text-sm font-extrabold text-slate-950">
                      {category.name}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {category.subtitle}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="section bg-white">
          <div className="container">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-widest text-slate-500">
                  Featured
                </p>

                <h2 className="heading-md">
                  Popular fabrics
                </h2>
              </div>

              <Link
                href="/shop"
                className="hidden text-sm font-bold text-slate-700 sm:block"
              >
                Shop all &gt;
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

                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-stone-100 via-slate-100 to-stone-200">
                      <div className="text-center">
                        <div className="text-4xl font-black tracking-[0.18em] text-slate-300">
                          K
                        </div>

                        <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
                          Khalé Fabrics
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="product-info">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                      {product.category}
                    </p>

                    <h3 className="product-title">
                      {product.name}
                    </h3>

                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="product-price">
                        {product.price}
                      </span>

                      <span className="text-sm font-semibold text-slate-400">
                        {product.unit}
                      </span>
                    </div>

                    <Link
                      href="/shop"
                      className="btn btn-primary mt-5 w-full"
                    >
                      View Fabric
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Story */}
        <section className="section">
          <div className="container">
            <div className="overflow-hidden rounded-[32px] bg-slate-950">
              <div className="relative px-7 py-14 sm:px-12 lg:px-16">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(148,163,184,0.18),transparent_35%)]" />

                <div className="relative max-w-3xl">
                  <span className="text-sm font-bold uppercase tracking-widest text-slate-400">
                    Why KHALÉ FABRICS
                  </span>

                  <h2 className="heading-lg mt-5 text-white">
                    Fabric chosen with care.
                    <br />
                    Quality you can feel.
                  </h2>

                  <p className="mt-6 text-lg leading-8 text-slate-300">
                    We bring together carefully selected fabrics for everyday
                    comfort, special occasions and timeless wardrobes. Choose
                    the fabric you love and order exactly the quantity you
                    need.
                  </p>

                  <Link
                    href="/about"
                    className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-7 font-bold text-slate-950 transition-all hover:-translate-y-1 hover:bg-slate-100"
                  >
                    Our Story
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section bg-white">
          <div className="container">
            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Premium Quality",
                  text: "Carefully selected fabrics with comfort, finish and durability in mind.",
                },
                {
                  title: "Fair Pricing",
                  text: "Simple and transparent pricing so you know exactly what you are paying.",
                },
                {
                  title: "Easy Ordering",
                  text: "Choose your fabric, select the quantity and order online with ease.",
                },
              ].map((item) => (
                <div key={item.title} className="card p-7">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-sm font-black text-slate-700">
                    K
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
            <div className="rounded-[32px] bg-slate-950 px-7 py-16 text-center text-white sm:px-12">
              <h2 className="heading-lg">
                Find your perfect fabric.
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-300">
                Explore our latest collections and discover fabrics made for
                your style.
              </p>

              <Link
                href="/shop"
                className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-7 font-bold text-slate-950 transition-all hover:-translate-y-1 hover:bg-slate-100"
              >
                Shop Collection
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}