import type { Metadata } from "next";
import EnquiryForm from "../../components/EnquiryForm";
import { site } from "@/lib/site";
export const metadata: Metadata = {
  title: "Contact Northbridge Commerce | Business Enquiries",
  description:
    "Contact Northbridge Commerce for UK e-commerce sourcing, supplier partnerships, wholesale opportunities and business enquiries.",
};

export default function Contact() {
  return <>
    <section className="page-hero"><div className="container"><p className="eyebrow">CONTACT</p><h1>Start a business conversation.</h1><p>Whether you represent a brand, manufacturer, wholesaler or distributor, we welcome relevant partnership enquiries.</p></div></section>
    <section className="section"><div className="container form-layout"><div className="form-info"><p className="eyebrow">BUSINESS ENQUIRIES</p><h2>Let’s talk.</h2><p>Use the form to introduce your company and products. We can then understand the opportunity and respond appropriately.</p><div className="contact-card"><small>Email</small><a href={`mailto:${site.email}`}>{site.email}</a></div><div className="contact-card"><small>Business</small><p style={{margin:0}}>UK-Based E-Commerce & Retail</p></div></div><EnquiryForm/></div></section>
    <section className="section alt"><div className="container"><div className="section-heading"><p className="eyebrow">FAQ</p><h2>Common questions.</h2></div><div className="faq">
      <details><summary>Are you interested in working with new suppliers?</summary><p>Yes. We welcome enquiries from established brands, manufacturers, wholesalers and distributors.</p></details>
      <details><summary>What types of products do you consider?</summary><p>We consider a range of consumer product categories based on market demand, product quality, commercial viability and supply capabilities.</p></details>
      <details><summary>Do you work with UK suppliers?</summary><p>Yes. We are particularly interested in building relationships with suppliers serving the UK market.</p></details>
      <details><summary>How can I introduce my brand or products?</summary><p>Use the partnership enquiry form and provide details about your company and products.</p></details>
    </div></div></section>
  </>;
}

