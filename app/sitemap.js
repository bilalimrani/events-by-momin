import { siteConfig } from "@/lib/siteConfig";

export default function sitemap() {
  const base = siteConfig.url;
  const now = new Date();

  // City pages — high priority local SEO
  const cityPages = [
    "/event-planner-rahim-yar-khan",
    "/event-planner-sadiqabad",
    "/wedding-decorator-khanpur",
    "/event-planner-goth-machi",
    "/event-planner-liaqatpur",
  ].map((path) => ({ url: `${base}${path}`, lastModified: now, changeFrequency: "monthly", priority: 0.9 }));

  // Service pages — target high-search service keywords
  const servicePages = [
    "/wedding-stage-decoration",
    "/barat-stage-decoration",
    "/walima-decoration",
    "/mehndi-decoration-rahim-yar-khan",
    "/birthday-party-planner-rahim-yar-khan",
    "/gala-night-event-planner",
    "/mango-party-decoration",
    "/corporate-event-management-rahim-yar-khan",
    "/engagement-decoration",
    "/baby-shower-decoration",
    "/tent-marquee-decoration-ryk",
    "/catering-services-rahim-yar-khan",
  ].map((path) => ({ url: `${base}${path}`, lastModified: now, changeFrequency: "monthly", priority: 0.85 }));

  // Blog pages — long-tail keyword targeting
  const blogPages = [
    "/blog",
    "/blog/best-stage-decoration-ideas-rahim-yar-khan",
    "/blog/mehndi-decoration-tips-ryk",
    "/blog/wedding-decoration-budget-guide-south-punjab",
    "/blog/top-event-planner-rahim-yar-khan",
    "/blog/corporate-event-planning-ryk",
  ].map((path) => ({ url: `${base}${path}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 }));

  // Case-study / recent event pages
  const eventPages = [
    "/mun-event-management-rahim-yar-khan",
    "/hbl-qawali-night-dinner-ryk",
  ].map((path) => ({ url: `${base}${path}`, lastModified: now, changeFrequency: "yearly", priority: 0.7 }));

  // Portfolio pages
  const portfolioPages = [
    "/portfolio",
    "/portfolio/wedding-barat-walima-ryk",
    "/portfolio/mehndi-dholki-goth-machi",
    "/portfolio/gala-night-sadiqabad",
    "/portfolio/birthday-party-khanpur",
  ].map((path) => ({ url: `${base}${path}`, lastModified: now, changeFrequency: "monthly", priority: 0.75 }));

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...cityPages,
    ...servicePages,
    ...blogPages,
    ...eventPages,
    ...portfolioPages,
  ];
}
