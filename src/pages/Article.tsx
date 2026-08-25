import { useParams, Link } from "react-router-dom";
import { FaArrowRight, FaCalendar, FaRegClock, FaUser } from "react-icons/fa6";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import Faq from "../components/ui/Faq";
import CtaBand from "../components/sections/CtaBand";
import { getArticle, ARTICLES } from "../data/articles";
import { SERVICES } from "../data/services";
import { useSeo, JsonLd } from "../lib/seo";
import { organizationSchema, articleSchema, breadcrumbSchema } from "../lib/schema";
import NotFound from "./NotFound";

function Block({ block }: { block: (typeof ARTICLES)[number]["blocks"][number] }) {
  switch (block.type) {
    case "h2": return <h2>{block.text}</h2>;
    case "h3": return <h3>{block.text}</h3>;
    case "p": return <p>{block.text}</p>;
    case "quote": return <blockquote>{block.text}</blockquote>;
    case "ul": return <ul>{block.items.map((i, k) => <li key={k}>{i}</li>)}</ul>;
    case "ol": return <ol>{block.items.map((i, k) => <li key={k}>{i}</li>)}</ol>;
  }
}

export default function Article() {
  const { slug } = useParams();
  const article = slug ? getArticle(slug) : undefined;
  if (!article) return <NotFound />;

  useSeo({
    title: article.title,
    description: article.excerpt,
    path: `/insights/${article.slug}`,
    type: "article",
  });

  const related = article.relatedServices
    .map((r) => SERVICES.find((s) => s.slug === r))
    .filter(Boolean) as typeof SERVICES;

  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          articleSchema(article),
          breadcrumbSchema([
            { name: "Insights", path: "/insights" },
            { name: article.title, path: `/insights/${article.slug}` },
          ]),
        ]}
      />
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: "Insights", to: "/insights" }, { name: article.title }]} />
          <span className="chip" style={{ marginBottom: "1.2rem" }}>{article.category}</span>
          <h1>{article.title}</h1>
          <div className="article__meta" style={{ marginTop: "1.6rem" }}>
            <span><FaUser /> {article.author}</span>
            <span><FaCalendar /> {article.date}</span>
            <span><FaRegClock /> {article.readTime}</span>
          </div>
        </div>
      </section>

      <article className="section article">
        <div className="container-narrow article">
          <img src={article.image} alt={article.title} style={{ width: "100%", borderRadius: "var(--radius-md)", marginBottom: "2.4rem" }} />
          {article.blocks.map((b, i) => <Block key={i} block={b} />)}

          <hr className="my-5" style={{ border: "none", borderTop: "1px solid var(--color-border)" }} />

          <h2>Frequently asked questions</h2>
          <div className="mt-3"><Faq items={article.faqs} /></div>

          {related.length > 0 && (
            <div className="mt-6">
              <h2>Related services</h2>
              <div className="flex gap-3 wrap mt-3">
                {related.map((r) => (
                  <Link key={r.slug} to={`/services/${r.slug}`} className="btn btn--ghost">
                    {r.title} <FaArrowRight />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <CtaBand title="Need help with this in your business?" text="Talk to our team about a tailored logistics approach." topic={related[0]?.title} />
    </>
  );
}
