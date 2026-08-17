import Link from "next/link";

const navItems = [
  { label: "Men", href: "/shop/mens-fabrics" },
  { label: "Women", href: "/shop/womens-fabrics" },
  { label: "Collections", href: "/shop" },
  { label: "Thaan & Bulk", href: "/shop/thaan-bulk" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="kale-navbar">
      <div className="container">
        <div className="kale-navbar-inner">
          <Link href="/" className="kale-brand">
            <span className="kale-brand-name">KHALÉ</span>
            <span className="kale-brand-subtitle">FABRICS</span>
          </Link>

          <nav className="kale-nav">
            <Link href="/" className="kale-nav-link">
              Home
            </Link>

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="kale-nav-link"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="kale-navbar-actions">
            <Link
              href="/cart"
              className="kale-cart"
              aria-label="Shopping cart"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="9" cy="20" r="1" />
                <circle cx="19" cy="20" r="1" />
                <path d="M3 4h2l2.4 11.4a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 1.9-1.4L21 8H6" />
              </svg>
            </Link>

            <Link href="/shop" className="kale-nav-button">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}