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
  { name: "Embu County", slug: "embu" },
  { name: "Machakos County", slug: "machakos" },
  { name: "Lamu County", slug: "lamu" },
] as const;

if (typeof window !== "undefined") {
  if (COVERAGE_AREAS.length !== 13) {
    throw new Error(`Expected 13 Umri's Enterprises coverage areas, got ${COVERAGE_AREAS.length}.`);
  }
}

export function getCoverageArea(slug: string): CoverageArea | undefined {
  return COVERAGE_AREAS.find((a) => a.slug === slug);
}
