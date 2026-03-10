import { siteData } from "./site-data";

export type CasestudyItem = {
  slug: string;
  logo: string;
  company: string;
  tags: string;
  title: string;
  subtitle: string;
  description?: string;
  image: string;
  link: string;
};

export function getCasestudyBySlug(slug: string): CasestudyItem | null {
  const featured = siteData.casestudies.featured as CasestudyItem;
  if (featured.slug === slug) return featured;

  const item = siteData.casestudies.items.find(
    (i) => (i as CasestudyItem).slug === slug
  );
  return (item as CasestudyItem) ?? null;
}

export function getAllCasestudySlugs(): string[] {
  const featured = siteData.casestudies.featured as CasestudyItem;
  const items = [...siteData.casestudies.items] as CasestudyItem[];
  return [featured.slug, ...items.map((i) => i.slug)];
}
