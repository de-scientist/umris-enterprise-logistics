import { Link } from "react-router-dom";
import { FaRegClock, FaCalendar } from "react-icons/fa6";
import Reveal from "../components/ui/Reveal";
import CtaBand from "../components/sections/CtaBand";
import PageHero from "../components/ui/PageHero";
import { ARTICLES } from "../data/articles";
import { useSeo, JsonLd } from "../lib/seo";
import { organizationSchema, breadcrumbSchema } from "../lib/schema";

export default function Insights() {
  useSeo({
    title: "Insights | Umri's Enterprises",
    description:
      "Practical articles on efficient logistics, route optimisation and supply-chain strategy for businesses in Kenya and East Africa.",
    path: "/insights",
    image: "/logo512.png",
  });

  return (
    <>
      <JsonLd data={[organizationSchema(), breadcrumbSchema([{ name: "Insights", path: "/insights" }])]} />
      <PageHero
        eyebrow="Resources"
        title="Insights"
        description="Practical perspectives on moving goods efficiently across Kenya and East Africa."
        crumbs={[{ name: "Insights" }]}
      />

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {ARTICLES.map((a) => (
              <Reveal key={a.slug}>
                <Link to={`/insights/${a.slug}`} className="card card--interactive" style={{ display: "block", height: "100%" }}>
                  <img src={a.image} alt={a.title} style={{ width: "100%", height: 190, objectFit: "cover", borderRadius: "var(--radius-md)", marginBottom: "1.2rem" }} loading="lazy" />
                  <span className="chip">{a.category}</span>
                  <h3 className="mt-2" style={{ fontSize: "2rem" }}>{a.title}</h3>
                  <p className="text-muted mt-2" style={{ fontSize: "1.4rem" }}>{a.excerpt}</p>
                  <div className="article__meta" style={{ marginTop: "1.2rem" }}>
                    <span><FaCalendar /> {a.date}</span>
                    <span><FaRegClock /> {a.readTime}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Turn insight into action" text="Talk to our team about applying these ideas to your logistics." topic="Logistics consultancy" />
    </>
  );
}
