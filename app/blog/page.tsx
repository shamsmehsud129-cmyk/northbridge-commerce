import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "E-Commerce Sourcing Insights",
  description:
    "Practical insights on Amazon wholesale sourcing, product research, supplier relationships and UK e-commerce opportunities from Northbridge Commerce.",
};

const articles = [
  {
    title: "Amazon Wholesale Sourcing: A Practical Starting Point",
    description:
      "Understand the basic stages involved in researching products, evaluating opportunities and exploring suitable wholesale supply relationships.",
    href: "/blog/amazon-wholesale-sourcing",
  },
  {
    title: "Product Sourcing for UK Online Retail",
    description:
      "A practical overview of the factors businesses can consider when evaluating products for the UK e-commerce market.",
    href: "/blog/product-sourcing-uk",
  },
  {
    title: "How to Evaluate an E-Commerce Supplier",
    description:
      "Key considerations when researching suppliers, including product quality, communication, supply capability and commercial suitability.",
    href: "/blog/uk-ecommerce-supplier-guide",
  },
];

export default function Blog() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">INSIGHTS</p>

          <h1>E-Commerce Sourcing Insights.</h1>

          <p>
            Practical information about product sourcing, supplier
            relationships and opportunities in UK online retail.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card-grid">
            {articles.map((article) => (
              <article className="card premium-card" key={article.href}>
                <p className="eyebrow">E-COMMERCE INSIGHTS</p>

                <h2>{article.title}</h2>

                <p>{article.description}</p>

                <Link className="text-link" href={article.href}>
                  Read Article
                  <ArrowUpRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}