import { useEffect } from "react";
import { SITE, absoluteUrl } from "../data/siteConfig";

export interface SeoProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
}

const BRAND_SUFFIX = ` | ${SITE.name}`;

function upsertMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSeo({ title, description, path = "/", image, type = "website" }: SeoProps) {
  useEffect(() => {
    const url = absoluteUrl(path);
    const fullTitle = title.includes(SITE.name) ? title : title + BRAND_SUFFIX;

    document.title = fullTitle;
    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[property="og:url"]', "property", "og:url", url);
    upsertMeta('meta[property="og:type"]', "property", "og:type", type);
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    upsertMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    if (image) {
      upsertMeta('meta[property="og:image"]', "property", "og:image", image);
      upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", image);
    }
    upsertLink("canonical", url);
  }, [title, description, path, image, type]);
}

const LD_ID = "jsonld-injected";

export function JsonLd({ data }: { data: object | object[] }) {
  useEffect(() => {
    let el = document.getElementById(LD_ID) as HTMLScriptElement | null;
    if (!el) {
      el = document.createElement("script");
      el.type = "application/ld+json";
      el.id = LD_ID;
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);
    return () => {
      // leave in place; replaced on next page
    };
  }, [data]);

  return null;
}
