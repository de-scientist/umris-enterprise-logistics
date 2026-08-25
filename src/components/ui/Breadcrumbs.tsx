import { Link } from "react-router-dom";

export interface Crumb {
  name: string;
  to?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      {items.map((it, i) => (
        <span key={i} style={{ display: "inline-flex", gap: "0.5rem" }}>
          <span>/</span>
          {it.to ? <Link to={it.to}>{it.name}</Link> : <span>{it.name}</span>}
        </span>
      ))}
    </nav>
  );
}
