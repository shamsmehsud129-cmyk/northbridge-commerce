import type { Metadata } from "next";
import { BadgeCheck, Boxes, Factory, Truck } from "lucide-react";
import EnquiryForm from "../../components/EnquiryForm";
export const metadata: Metadata = {
  title: "Supplier Partnerships | Northbridge Commerce",
  description:
    "Partner with Northbridge Commerce for UK e-commerce opportunities. We work with brands, manufacturers, wholesalers and distributors with quality products and reliable supply.",
};

export default function Partners() {
  return <>
    <section className="page-hero"><div className="container"><p className="eyebrow">PARTNER WITH US</p><h1>Let’s build a long-term partnership.</h1><p>If you are a brand, manufacturer, wholesaler or distributor with quality products and reliable supply capabilities, we would be interested in hearing from you.</p></div></section>
    <section className="section"><div className="container">
      <div className="section-heading"><p className="eyebrow">WHAT WE LOOK FOR</p><h2>Good products. Reliable supply. Clear communication.</h2></div>
      <div className="card-grid">
        {[["Quality products", BadgeCheck],["Reliable supply", Boxes],["Competitive commercial terms", Truck],["Consistent inventory", Boxes],["Professional communication", BadgeCheck],["Strong brand potential", Factory]].map(([title,Icon]) => <div className="card" key={String(title)}><div className="icon-box"><Icon size={19}/></div><h3>{String(title)}</h3><p>We consider this as part of the overall fit when assessing a potential supplier relationship.</p></div>)}
      </div>
    </div></section>
    <section className="section alt"><div className="container form-layout"><div className="form-info"><p className="eyebrow">START A DISCUSSION</p><h2>Tell us about your business.</h2><p>Share your company and product details. The more context you provide, the easier it is to understand whether there may be a good fit.</p></div><EnquiryForm/></div></section>
  </>;
}



