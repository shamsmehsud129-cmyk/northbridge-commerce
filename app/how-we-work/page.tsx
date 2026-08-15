import type { Metadata } from "next";
import CTA from "../../components/CTA";
export const metadata: Metadata = {
  title: "How We Work | UK E-Commerce Sourcing",
  description:
    "Learn how Northbridge Commerce researches products, evaluates opportunities, works with suppliers and develops long-term UK e-commerce partnerships.",
};

const steps = [
  ["01","Research","We identify products, brands and categories with potential in the online retail market."],
  ["02","Product Evaluation","We consider product quality, market suitability, pricing and commercial potential."],
  ["03","Supplier Discussion","We open a clear conversation around products, supply capabilities and business requirements."],
  ["04","Commercial Review","We review the practical commercial details needed to understand a potential relationship."],
  ["05","Partnership","Where there is a good fit, we work toward a clear and professional business relationship."],
  ["06","Ongoing Growth","We focus on dependable communication and sustainable opportunities over time."]
];

export default function HowWeWork() {
  return <>
    <section className="page-hero"><div className="container"><p className="eyebrow">HOW WE WORK</p><h1>A clear process for building the right relationships.</h1><p>Our approach is designed to keep supplier conversations professional, practical and focused on long-term potential.</p></div></section>
    <section className="section"><div className="container"><div className="list">{steps.map(([no,title,text]) => <div className="list-item" key={no}><div className="number">{no}</div><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div></section>
    <CTA/>
  </>;
}

