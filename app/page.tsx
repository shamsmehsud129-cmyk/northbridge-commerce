import Link from "next/link";
import Navbar from "@/components/Navbar";

const collections = [
  {
    title: "Men's Collection",
    subtitle: "Refined fabrics for modern tailoring.",
    href: "/men",
    tone: "bg-[#d8c5b8]",
  },
  {
    title: "Women's Collection",
    subtitle: "Elegant textures made to stand out.",
    href: "/women",
    tone: "bg-[#e5d7ce]",
  },
  {
    title: "Premium Fabrics",
    subtitle: "Selected quality, sold by the meter.",
    href: "/fabrics",
    tone: "bg-[#cdb5a5]",
  },
];

const products = [
  {
    name: "Signature Wash & Wear",
    category: "Men's Fabric",
    price: "Rs. 1,850",
    unit: "/ meter",
    badge: "BEST SELLER",
  },
  {
    name: "Royal Cotton",
    category: "Premium Cotton",
    price: "Rs. 1,450",
    unit: "/ meter",
    badge: "POPULAR",
  },
  {
    name: "Soft Premium Linen",
    category: "Women's Fabric",
    price: "Rs. 2,200",
    unit: "/ meter",
    badge: "NEW",
  },
  {
    name: "Classic Khaddar",
    category: "Winter Collection",
    price: "Rs. 1,650",
    unit: "/ meter",
    badge: "FEATURED",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#fbf8f4] text-[#3f3029]">
        {/* HERO */}
        <section className="relative bg-[#f1e7df]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(109,76,65,0.13),transparent_30%),radial-gradient(circle_at_90%_30%,rgba(190,157,135,0.18),transparent_32%)]" />

          <div className="container relative">
            <div className="grid min-h-[650px] items-center gap-12 py-20 lg:grid-cols-[1fr_0.9fr] lg:py-24">
              {/* Copy */}
              <div className="max-w-2xl">
                <div className="mb-7 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#8b6a59]" />

                  <span className="text-xs font-black uppercase tracking-[0.3em] text-[#806457]">
                    KHALÉ FABRICS
                  </span>
                </div>

                <h1 className="text-5xl font-black leading-[1.02] tracking-[-0.045em] text-[#4a342b] sm:text-6xl lg:text-[76px]">
                  Fabrics made
                  <br />
                  <span className="font-serif italic font-medium text-[#896c5b]">
                    for your style.
                  </span>
                </h1>

                <p className="mt-7 max-w-xl text-lg leading-8 text-[#806f65] sm:text-xl">
                  Discover premium fabrics selected for comfort, character
                  and timeless style. From everyday essentials to refined
                  occasion wear.
                </p>

                {/* MOBILE-SAFE CTA BUTTONS */}
                <div className="mt-9 flex w-full flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/shop"
                    className="shop-now-btn inline-flex w-full sm:w-auto"
                  >
                    Shop Collection
                  </Link>

                  <Link
                    href="/fabrics"
                    className="inline-flex w-full min-h-11 items-center justify-center rounded-xl border border-[#cdb7a8] bg-[#fffaf6] px-6 text-sm font-bold text-[#6d4c41] transition-all hover:-translate-y-0.5 hover:bg-white sm:w-auto"
                  >
                    Explore Fabrics
                  </Link>
                </div>

                <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 text-xs font-bold uppercase tracking-wider text-[#9a8274]">
                  <span>Premium Quality</span>
                  <span>Sold by Meter</span>
                  <span>Curated Collections</span>
                </div>
              </div>

              {/* Editorial Visual */}
              <div className="relative mx-auto hidden h-[520px] w-full max-w-[500px] lg:block">
                <div className="absolute right-4 top-4 h-[430px] w-[310px] rotate-[7deg] rounded-[34px] bg-[#b99b88] shadow-2xl" />

                <div className="absolute right-16 top-9 h-[445px] w-[315px] rotate-[-5deg] rounded-[34px] bg-[#795548] shadow-2xl shadow-[#5d4037]/25" />

                <div className="absolute right-20 top-0 h-[455px] w-[320px] overflow-hidden rounded-[34px] bg-[#fffaf5] p-7 shadow-2xl">
                  <div className="flex h-full flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#987968]">
                        New Collection
                      </span>

                      <span className="rounded-full bg-[#f0e4db] px-3 py-1 text-[9px] font-black text-[#765548]">
                        2026
                      </span>
                    </div>

                    <div className="relative mx-auto h-64 w-full overflow-hidden rounded-[26px] bg-[linear-gradient(135deg,#dfcbbd,#f5ebe4_48%,#c9ae9c)]">
                      <div className="absolute -left-12 top-10 h-72 w-48 rotate-[20deg] rounded-[45%] bg-[#8b6a59]/20" />

                      <div className="absolute right-[-30px] top-[-20px] h-80 w-48 rotate-[-18deg] rounded-[45%] bg-[#fffaf5]/30" />

                      <div className="relative flex h-full items-center justify-center">
                        <div className="text-center">
                          <div className="text-7xl font-black tracking-[0.12em] text-[#806153]">
                            K
                          </div>

                          <p className="mt-2 text-[9px] font-black uppercase tracking-[0.3em] text-[#927567]">
                            KHALÉ FABRICS
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#a38d80]">
                        Premium Textile
                      </p>

                      <h2 className="mt-2 text-3xl font-black tracking-tight text-[#4a342b]">
                        Timeless
                        <br />
                        <span className="font-serif italic font-medium text-[#8b6a59]">
                          by nature.
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COLLECTIONS */}
        <section className="section">
          <div className="container">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-[#9a7866]">
                  Collections
                </p>

                <h2 className="text-4xl font-black tracking-tight text-[#49342b] sm:text-5xl">
                  Find your fabric.
                </h2>
              </div>

              <Link
                href="/fabrics"
                className="text-sm font-bold text-[#765548] hover:text-[#4e382f]"
              >
                View all →
              </Link>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {collections.map((collection, index) => (
                <Link
                  key={collection.title}
                  href={collection.href}
                  className="group relative min-h-[330px] overflow-hidden rounded-[30px] border border-[#e4d8cf] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div
                    className={`absolute inset-0 ${collection.tone} transition-transform duration-500 group-hover:scale-105`}
                  />

                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(50,35,29,0.58),transparent_65%)]" />

                  <div className="absolute right-7 top-7 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/20 text-sm font-black text-white backdrop-blur">
                    0{index + 1}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                    <p className="mb-2 text-[10px] font-black uppercase tracking-[0.25em] text-white/70">
                      KHALÉ
                    </p>

                    <h3 className="text-2xl font-black">
                      {collection.title}
                    </h3>

                    <p className="mt-2 max-w-xs text-sm leading-6 text-white/75">
                      {collection.subtitle}
                    </p>

                    <span className="mt-5 inline-block text-sm font-bold">
                      Explore collection →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="section bg-[#fffdf9]">
          <div className="container">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-[#9a7866]">
                  Curated For You
                </p>

                <h2 className="text-4xl font-black tracking-tight text-[#49342b] sm:text-5xl">
                  Featured fabrics.
                </h2>
              </div>

              <Link
                href="/shop"
                className="text-sm font-bold text-[#765548] hover:text-[#4e382f]"
              >
                Shop all →
              </Link>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <article
                  key={product.name}
                  className="group overflow-hidden rounded-[26px] border border-[#e8ddd5] bg-[#fffaf6] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/4.5] overflow-hidden bg-[#eee2d9]">
                    <span className="absolute left-4 top-4 z-10 rounded-full bg-[#fffaf5]/90 px-3 py-1.5 text-[9px] font-black tracking-wider text-[#765548] backdrop-blur">
                      {product.badge}
                    </span>

                    <div className="absolute inset-0 bg-[linear-gradient(135deg,#dfcbbd,#f8eee8_45%,#c7aa97)] transition-transform duration-500 group-hover:scale-105" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl font-black tracking-[0.16em] text-[#9a7968]">
                          K
                        </div>

                        <p className="mt-2 text-[9px] font-black uppercase tracking-[0.25em] text-[#a28b7d]">
                          KHALÉ FABRICS
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#a18b7d]">
                      {product.category}
                    </p>

                    <h3 className="mt-2 text-lg font-black text-[#49342b]">
                      {product.name}
                    </h3>

                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="text-xl font-black text-[#6d4c41]">
                        {product.price}
                      </span>

                      <span className="text-xs font-semibold text-[#a28e81]">
                        {product.unit}
                      </span>
                    </div>

                    <Link
                      href="/shop"
                      className="mt-5 flex min-h-11 items-center justify-center rounded-xl bg-[#f0e3d8] text-sm font-bold text-[#6d4c41] transition-all hover:bg-[#6d4c41] hover:text-white"
                    >
                      View Fabric
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* BRAND STORY */}
        <section className="section">
          <div className="container">
            <div className="relative overflow-hidden rounded-[34px] bg-[#4f3930]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(218,190,170,0.25),transparent_32%)]" />

              <div className="relative grid items-center gap-12 px-7 py-16 sm:px-12 lg:grid-cols-[1fr_0.7fr] lg:px-16 lg:py-20">
                <div className="max-w-2xl">
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-[#d8bdab]">
                    The KHALÉ Story
                  </p>

                  <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-[#fffaf6] sm:text-5xl">
                    We believe great style
                    <br />
                    <span className="font-serif italic font-medium text-[#d9bdaa]">
                      starts with great fabric.
                    </span>
                  </h2>

                  <p className="mt-6 max-w-xl text-lg leading-8 text-[#d8c7bd]">
                    Every collection is chosen with attention to texture,
                    comfort and character. Simple pieces, beautiful materials
                    and quality you can feel.
                  </p>

                  <Link
                    href="/about"
                    className="mt-8 inline-flex min-h-11 items-center justify-center rounded-xl bg-[#fffaf6] px-6 text-sm font-bold text-[#5d4037] transition-all hover:-translate-y-1 hover:bg-white"
                  >
                    About KHALÉ
                  </Link>
                </div>

                <div className="mx-auto flex h-64 w-64 items-center justify-center rounded-full border border-[#c7a995]/40 bg-[#705247] shadow-2xl">
                  <div className="text-center text-[#fffaf6]">
                    <div className="text-7xl font-black tracking-widest">
                      K
                    </div>

                    <p className="mt-2 text-[10px] font-black uppercase tracking-[0.3em] text-[#d9bdab]">
                      KHALÉ FABRICS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
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
                  text: "Simple and transparent pricing with clear per-meter prices.",
                },
                {
                  title: "Easy Ordering",
                  text: "Choose your fabric, select your quantity and order with ease.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-[25px] border border-[#e8ddd5] bg-[#fffaf6] p-7"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#f0e3d8] text-sm font-black text-[#6d4c41]">
                    0{index + 1}
                  </div>

                  <h3 className="text-lg font-black text-[#49342b]">
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

        {/* FINAL CTA */}
        <section className="section">
          <div className="container">
            <div className="relative overflow-hidden rounded-[34px] bg-[#eadbd0] px-7 py-16 text-center sm:px-12">
              <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-[#fffaf6]/30 blur-3xl" />

              <div className="relative">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#987765]">
                  KHALÉ FABRICS
                </p>

                <h2 className="mt-4 text-4xl font-black tracking-tight text-[#49342b] sm:text-5xl">
                  Your next favourite fabric
                  <br />
                  <span className="font-serif italic font-medium text-[#806153]">
                    is waiting.
                  </span>
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#806f65]">
                  Explore our collections and find something made for your
                  style.
                </p>

                <Link
                  href="/shop"
                  className="shop-now-btn mt-8 inline-flex"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}