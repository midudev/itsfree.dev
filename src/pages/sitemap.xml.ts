import type { APIRoute } from "astro"
import { categories, resources, sourceReviewedAt } from "../data/resources"

const siteUrl = "https://itsfree.dev"

const escapeXml = (value: string) => value
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&apos;")

export const GET: APIRoute = () => {
  const pages = [
    { en: siteUrl, es: `${siteUrl}/es`, priority: "1.0" },
    ...categories.map((category) => ({
      en: `${siteUrl}/categories/${category.id}`,
      es: `${siteUrl}/es/categories/${category.id}`,
      priority: "0.9",
    })),
    ...resources.map((resource) => ({
      en: `${siteUrl}/tools/${resource.slug}`,
      es: `${siteUrl}/es/tools/${resource.slug}`,
      priority: "0.8",
    })),
  ]
  const urls = pages.flatMap((page) => [page.en, page.es].map((loc) => ({ ...page, loc })))
  const body = urls.map(({ loc, en, es, priority }) => `  <url>\n    <loc>${escapeXml(loc)}</loc>\n    <xhtml:link rel="alternate" hreflang="en" href="${escapeXml(en)}" />\n    <xhtml:link rel="alternate" hreflang="es" href="${escapeXml(es)}" />\n    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(en)}" />\n    <lastmod>${sourceReviewedAt}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`).join("\n")

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${body}\n</urlset>\n`, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  })
}
