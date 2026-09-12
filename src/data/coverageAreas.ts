export interface CoverageArea {
  name: string;
  slug: string;
}

export const COVERAGE_AREAS: CoverageArea[] = [
  { name: "Meru County", slug: "meru" },
  { name: "Makueni County", slug: "makueni" },
  { name: "Samburu County", slug: "samburu" },
  { name: "Taita-Taveta County", slug: "taita-taveta" },
  { name: "Nyandarua County", slug: "nyandarua" },
  { name: "Kajiado County", slug: "kajiado" },
  { name: "Nakuru County", slug: "nakuru" },
  { name: "Laikipia County", slug: "laikipia" },
  { name: "Kitui County", slug: "kitui" },
  { name: "Kwale County", slug: "kwale" },
] as const;

export function getCoverageArea(slug: string): CoverageArea | undefined {
  return COVERAGE_AREAS.find((a) => a.slug === slug);
}
