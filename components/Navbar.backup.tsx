import Link from "next/link";

const navItems = [
  { label: "Shop", href: "/shop" },
  { label: "Categories", href: "/categories" },
  { label: "AI Assistant", href: "/assistant" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="container">
        <div className="flex min-h-[76px] items-center justify-between gap-6">
          {/* Brand */}
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-lg font-black text-white shadow-lg shadow-blue-500/20 transition-transform duration-200 group-hover:-translate-y-0.5">
              AI
            </span>

            <div className="leading-none">
              <div className="text-[17px] font-black tracking-tight text-slate-950">
                Smart
                <span className="gradient-text"> Commerce</span>
              </div>

              <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Shop smarter
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 rounded-2xl border border-slate-200 bg-slate-50/70 p-1 md:flex">
            <Link
              href="/"
              className="rounded-xl px-4 py-2.5 text-sm font-bold text-slate-900 transition-colors hover:bg-white hover:text-blue-600"
            >
              Home
            </Link>

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-2.5 text-sm font-bold text-slate-600 transition-colors hover:bg-white hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Link
              href="/cart"
              aria-label="Shopping cart"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="9" cy="20" r="1" />
                <circle cx="19" cy="20" r="1" />
                <path d="M3 4h2l2.4 11.4a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 1.9-1.4L21 8H6" />
              </svg>
            </Link>

            <Link
              href="/shop"
              className="btn btn-primary hidden sm:inline-flex"
            >
              Start Shopping
            </Link>

            <button
              type="button"
              aria-label="Open menu"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm md:hidden"
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}