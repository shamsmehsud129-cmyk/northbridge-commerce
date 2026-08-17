import Link from "next/link";
import Navbar from "@/components/Navbar";

const categories = [
  {
    name: "Men's Fabrics",
    subtitle: "Premium fabrics for every occasion",
    href: "/men",
  },
  {
    name: "Women's Fabrics",
    subtitle: "Elegant fabrics for your style",
    href: "/women",
  },
  {
    name: "Cotton",
    subtitle: "Soft, breathable and comfortable",
    href: "/fabrics/cotton",
  },
  {
    name: "Linen",
    subtitle: "Lightweight premium fabrics",
    href: "/fabrics/linen",
  },
  {
    name: "Khaddar",
    subtitle: "Warm and comfortable collection",
    href: "/fabrics/khaddar",
  },
  {
    name: "Wash & Wear",
    subtitle: "Smart, easy-care fabrics",
    href: "/fabrics/wash-and-wear",
  },
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
    name: "Fine Cotton",
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
    name: "Classic Khaddar",
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

      <main className="bg-[#fbf7f2] text-[#3f2b24]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#f4e9df]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(121,85,72,0.12),transparent_34%),radial-gradient(circle_at_85%_25%,rgba(166,124,99,0.12),transparent_32%)]" />

          <div className="container relative py-24 sm:py-32 lg:py-36">
            <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="max-w-3xl">
                <span className="mb-6 inline-flex rounded-full border border-[#d8c5b7] bg-[#fffaf5] px-4 py-2 text-sm font-bold tracking-wide text-[#765548]">
                  PREMIUM FABRICS & CLOTHING
                </span>

                <h1 className="heading-xl text-[#4a332b]">
                  Fabric that feels right.
                  <br />
                  <span className="text-[#8b6a59]">
                    Style that lasts.
                  </span>
                </h1>

                <p className="body-lg mt-7 max-w-2xl text-[#806f65]">
                  Explore carefully selected fabrics for men and women,
                  available by the meter and chosen for quality, comfort and
                  timeless style.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/men"
                    className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#6d4c41] px-7 font-bold text-white shadow-lg shadow-[#6d4c41]/10 transition-all hover:-translate-y-1 hover:bg-[#5d4037]"
                  >
                    Shop Men
                  </Link>

                  <Link
                    href="/women"
                    className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#d5c1b3] bg-[#fffaf5] px-7 font-bold text-[#6d4c41] transition-all hover:-translate-y-1 hover:bg-[#f8eee6]"
                  >
                    Shop Women
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm text-[#927e71]">
                  <span>Premium quality</span>
                  <span>Sold by meter</span>
                  <span>Men & women collections</span>
                </div>
              </div>

              {/* Premium Visual */}
              <div className="relative hidden min-h-[450px] lg:block">
                <div className="absolute right-3 top-8 h-[355px] w-[280px] rotate-[-5deg] rounded-[32px] bg-[#d8c2b3] shadow-xl" />

                <div className="absolute right-14 top-1 h-[370px] w-[280px] rotate-[4deg] rounded-[32px] bg-[#795548] shadow-2xl shadow-[#6d4c41]/20" />

                <div className="absolute right-24 top-12 h-[365px] w-[280px] rounded-[32px] border border-[#eaded5] bg-[#fffaf5] p-7 shadow-xl">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#9b7a68]">
                        KHALÉ FABRICS
                      </p>

                      <div className="mt-8 h-44 rounded-2xl bg-[linear-gradient(135deg,#eadbd0,#f8eee7,#d7c1b2)]">
                        <div className="flex h-full items-center justify-center">
                          <span className="text-6xl font-black tracking-[0.15em] text-[#a88b79]">
                            K
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#a18d81]">
                        Premium Collection
                      </p>

                      <h3 className="mt-2 text-2xl font-black text-[#4a332b]">
                        Timeless Fabrics
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="section">
          <div className="container">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#9b7a68]">
                  Explore
                </p>

                <h2 className="heading-md text-[#4a332b]">
                  Shop by collection
                </h2>
              </div>

              <Link
                href="/fabrics"
                className="hidden text-sm font-bold text-[#765548] sm:block"
              >
                View all →
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="card group flex min-h-40 flex-col justify-between border-[#eaded5] bg-[#fffdf9] p-5 transition-all hover:-translate-y-1 hover:border-[#cdb8a9] hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f0e5dc] text-sm font-black text-[#6d4c41] transition-colors group-hover:bg-[#6d4c41] group-hover:text-white">
                    K
                  </div>

                  <div>
                    <h3 className="text-sm font-extrabold text-[#4a332b]">
                      {category.name}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-[#907c70]">
                      {category.subtitle}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="section bg-[#fffdf9]">
          <div className="container">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#9b7a68]">
                  Featured
                </p>

                <h2 className="heading-md text-[#4a332b]">
                  Popular fabrics
                </h2>
              </div>

              <Link
                href="/shop"
                className="hidden text-sm font-bold text-[#765548] sm:block"
              >
                Shop all →
              </Link>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <article
                  key={product.name}
                  className="card product-card overflow-hidden border-[#eaded5] bg-[#fffdf9]"
                >
                  <div className="product-image">
                    <div className="absolute left-4 top-4 z-10">
                      <span className="badge badge-primary">
                        {product.badge}
                      </span>
                    </div>

                    <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,#f0e3d8,#faf4ee,#dfccbd)]">
                      <div className="text-center">
                        <div className="text-5xl font-black tracking-[0.2em] text-[#a98d7c]">
                          K
                        </div>

                        <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#9b877a]">
                          Khalé Fabrics
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="product-info">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#9b877a]">
                      {product.category}
                    </p>

                    <h3 className="product-title text-[#4a332b]">
                      {product.name}
                    </h3>

                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="product-price text-[#6d4c41]">
                        {product.price}
                      </span>

                      <span className="text-sm font-semibold text-[#a18d81]">
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
            <div className="grid overflow-hidden rounded-[32px] bg-[#6d4c41] lg:grid-cols-[1fr_0.65fr]">
              <div className="relative px-7 py-14 sm:px-12 lg:px-16">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.12),transparent_38%)]" />

                <div className="relative max-w-2xl">
                  <span className="text-sm font-bold uppercase tracking-widest text-[#eadbd0]">
                    The KHALÉ Difference
                  </span>

                  <h2 className="heading-lg mt-5 text-[#fffaf5]">
                    Good fabric makes
                    <br />
                    a better wardrobe.
                  </h2>

                  <p className="mt-6 text-lg leading-8 text-[#eadbd0]">
                    We focus on fabrics that look refined, feel comfortable
                    and perform beautifully in everyday life. Choose your
                    fabric, select the quantity you need and order with ease.
                  </p>

                  <Link
                    href="/about"
                    className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#fffaf5] px-7 font-bold text-[#6d4c41] transition-all hover:-translate-y-1 hover:bg-white"
                  >
                    Discover KHALÉ
                  </Link>
                </div>
              </div>

              <div className="hidden items-center justify-center bg-[#795548] p-12 lg:flex">
                <div className="flex h-56 w-56 items-center justify-center rounded-full border border-[#cdb8a9]/40 bg-[#8a6758]">
                  <div className="text-center text-[#fffaf5]">
                    <div className="text-6xl font-black">K</div>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.3em]">
                      KHALÉ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section bg-[#fffdf9]">
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
                <div
                  key={item.title}
                  className="card border-[#eaded5] bg-[#fffdf9] p-7"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#f0e5dc] text-sm font-black text-[#6d4c41]">
                    K
                  </div>

                  <h3 className="text-lg font-extrabold text-[#4a332b]">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#806f65]">
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
            <div className="rounded-[32px] bg-[#f0e3d8] px-7 py-16 text-center sm:px-12">
              <p className="text-sm font-bold uppercase tracking-widest text-[#9b7a68]">
                KHALÉ FABRICS
              </p>

              <h2 className="heading-lg mt-3 text-[#4a332b]">
                Find your perfect fabric.
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#806f65]">
                Explore our latest collections and discover fabrics made for
                your style.
              </p>

              <Link
                href="/shop"
                className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#6d4c41] px-7 font-bold text-white shadow-md shadow-[#6d4c41]/10 transition-all hover:-translate-y-1 hover:bg-[#5d4037]"
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