import { siteConfig } from "@/lib/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Wedding Decoration Budget Guide for South Punjab 2026 | Events by Momin",
  description:
    "How much does wedding decoration cost in Rahim Yar Khan, Sadiqabad & South Punjab? Honest breakdown of barat, walima and mehndi decoration budgets with tips from Events by Momin.",
  keywords: [
    "wedding decoration budget South Punjab",
    "wedding decoration cost RYK",
    "barat decoration price Rahim Yar Khan",
    "walima decoration cost",
    "affordable wedding decoration Pakistan",
    "wedding decoration packages RYK",
    "mehndi decoration price Sadiqabad",
  ],
  alternates: {
    canonical: `${siteConfig.url}/blog/wedding-decoration-budget-guide-south-punjab`,
  },
  openGraph: {
    title: "Wedding Decoration Budget Guide South Punjab 2026 | Events by Momin",
    description:
      "Honest guide to wedding decoration costs in Rahim Yar Khan & South Punjab — barat, walima, mehndi packages explained.",
    images: [{ url: `${siteConfig.url}/gallery/barat-stage.jpg` }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Wedding Decoration Budget Guide for South Punjab 2026",
  description:
    "A transparent guide to wedding decoration costs in Rahim Yar Khan and South Punjab, covering mehndi, barat and walima decoration budgets.",
  image: `${siteConfig.url}/gallery/barat-stage.jpg`,
  datePublished: "2026-07-15",
  dateModified: "2026-07-15",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: { "@type": "ImageObject", url: `${siteConfig.url}/logo.png` },
  },
  mainEntityOfPage: `${siteConfig.url}/blog/wedding-decoration-budget-guide-south-punjab`,
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
    { "@type": "ListItem", position: 3, name: "Wedding Decoration Budget Guide", item: `${siteConfig.url}/blog/wedding-decoration-budget-guide-south-punjab` },
  ],
};

const budgetTiers = [
  {
    label: "Mehndi / Dholki Decoration",
    tiers: [
      { name: "Simple", desc: "Basic flower arch, colourful draping, fairy lights, floor cushions for up to 50 guests" },
      { name: "Standard", desc: "Full stage setup, hanging décor, photo corner, complete guest seating area for up to 100–150 guests" },
      { name: "Premium", desc: "Elaborate hanging installations, LED lighting, dhol-themed props, custom signage, photobooth for 200+ guests" },
    ],
  },
  {
    label: "Barat Stage Decoration",
    tiers: [
      { name: "Simple", desc: "Clean floral backdrop, basic throne setup, entrance carpet, simple lighting" },
      { name: "Standard", desc: "Full floral mandap or LED backdrop, premium throne, entrance arch, drapery, ambient lighting" },
      { name: "Premium", desc: "Grand LED stage with custom graphics, fresh flowers, chandelier, red carpet aisle, full hall drapery" },
    ],
  },
  {
    label: "Walima Reception Decoration",
    tiers: [
      { name: "Simple", desc: "Clean stage backdrop, couple seating, entrance décor, basic table centrepieces" },
      { name: "Standard", desc: "Full stage with backdrop and lighting, decorated entrance, guest table centrepieces, lounge seating area" },
      { name: "Premium", desc: "Grand themed reception: LED stage, custom monogram, full hall drapery and lighting, photo corner, VIP lounge" },
    ],
  },
];

export default function BudgetGuideBlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <main className="min-h-screen">
        {/* Hero */}
        <div
          style={{
            background: "linear-gradient(120deg,#3a0c1e,#7a1b3d,#a4335c)",
            padding: "100px 24px 60px",
            textAlign: "center",
            color: "#fffdfb",
          }}
        >
          <p style={{ fontSize: "0.85rem", marginBottom: "12px", opacity: 0.7 }}>
            <a href="/" style={{ color: "#ecc754", textDecoration: "none" }}>Home</a>
            {" "}›{" "}
            <a href="/blog" style={{ color: "#ecc754", textDecoration: "none" }}>Blog</a>
            {" "}›{" "}Budget Guide
          </p>
          <span
            style={{
              display: "inline-block",
              background: "rgba(201,162,39,0.2)",
              color: "#ecc754",
              fontSize: "0.8rem",
              fontWeight: "700",
              padding: "4px 14px",
              borderRadius: "999px",
              marginBottom: "14px",
            }}
          >
            Wedding Planning
          </span>
          <h1
            style={{
              fontSize: "clamp(1.6rem,4.5vw,3rem)",
              fontWeight: "bold",
              lineHeight: 1.2,
              maxWidth: "700px",
              margin: "0 auto 16px",
            }}
          >
            Wedding Decoration Budget Guide for South Punjab 2026
          </h1>
          <p style={{ fontSize: "1rem", maxWidth: "600px", margin: "0 auto", opacity: 0.85 }}>
            An honest, transparent guide to what wedding decoration costs in Rahim Yar Khan,
            Sadiqabad and South Punjab — and how to get the most for your budget.
          </p>
          <p style={{ marginTop: "16px", fontSize: "0.85rem", opacity: 0.6 }}>July 2026 · By Events by Momin</p>
        </div>

        {/* Body */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "48px 24px" }}>
          <p style={{ color: "#333", lineHeight: 1.85, fontSize: "1.05rem", marginBottom: "24px" }}>
            One of the most common questions we get at <strong>Events by Momin</strong> is:{" "}
            <em>&quot;Kitna budget chahiye wedding decoration ke liye?&quot;</em> The honest answer
            is — it depends on your event size, venue, number of guests and how elaborate you want
            the decoration to be. But this guide will give you a clear picture of the decoration
            tiers in South Punjab so you can plan your budget properly.
          </p>

          <div
            style={{
              background: "#fff8ee",
              border: "1px solid #e8c96a",
              borderRadius: "12px",
              padding: "18px 22px",
              marginBottom: "32px",
            }}
          >
            <strong style={{ color: "#7a1b3d" }}>💡 Important Note:</strong>{" "}
            <span style={{ color: "#444" }}>
              We do not publish fixed prices here because costs vary significantly based on venue
              size, city (RYK vs. Sadiqabad vs. Khanpur), guest count, decor complexity and flower
              type (fresh vs. artificial). For an accurate quote, WhatsApp us with your event
              details — we give transparent, no-obligation estimates.
            </span>
          </div>

          {/* Budget Tables */}
          {budgetTiers.map((section, i) => (
            <div key={i} style={{ marginBottom: "36px" }}>
              <h2 style={{ color: "#7a1b3d", fontSize: "1.25rem", fontWeight: "700", marginBottom: "16px" }}>
                {section.label}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {section.tiers.map((tier, j) => (
                  <div
                    key={j}
                    style={{
                      display: "flex",
                      gap: "16px",
                      alignItems: "flex-start",
                      background: j === 1 ? "#f6f1ea" : "#fff",
                      border: `1px solid ${j === 1 ? "#c9a227" : "#e8dfc8"}`,
                      borderRadius: "12px",
                      padding: "16px",
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        background: j === 0 ? "#e8dfc8" : j === 1 ? "#c9a227" : "#7a1b3d",
                        color: j === 2 ? "#fff" : "#3a0c1e",
                        fontWeight: "700",
                        fontSize: "0.8rem",
                        padding: "4px 12px",
                        borderRadius: "999px",
                        alignSelf: "center",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {tier.name}
                    </span>
                    <p style={{ color: "#444", lineHeight: 1.7, margin: 0 }}>{tier.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* What Affects Cost */}
          <h2 style={{ color: "#7a1b3d", fontSize: "1.2rem", fontWeight: "700", marginBottom: "14px" }}>
            What Affects Decoration Cost?
          </h2>
          <ul style={{ color: "#444", lineHeight: 2.1, paddingLeft: "20px", marginBottom: "32px" }}>
            <li><strong>Guest Count</strong> — More guests = larger venue = more décor needed</li>
            <li><strong>Fresh vs. Artificial Flowers</strong> — Fresh flowers cost more but look stunning; artificial lasts and is more budget-friendly</li>
            <li><strong>Venue Size</strong> — A large marquee needs more drapery, lighting and installations</li>
            <li><strong>Number of Events</strong> — Mehndi + barat + walima packaged together is usually better value</li>
            <li><strong>Travel Distance</strong> — Events in Sadiqabad, Khanpur or Liaqatpur may have a small travel charge</li>
            <li><strong>Season</strong> — Peak wedding season (October to February) may have higher demand</li>
          </ul>

          {/* Tips to Save */}
          <h2 style={{ color: "#7a1b3d", fontSize: "1.2rem", fontWeight: "700", marginBottom: "14px" }}>
            Tips to Get Great Decoration on a Budget
          </h2>
          <ul style={{ color: "#444", lineHeight: 2.1, paddingLeft: "20px", marginBottom: "32px" }}>
            <li>Book all three events (mehndi, barat, walima) with one decorator — always cheaper as a package</li>
            <li>Choose a weekday event if possible — venues and decorators may have better availability</li>
            <li>Use premium artificial flowers — they are beautiful, photograph well, and cost less than fresh</li>
            <li>Book well in advance (8–10 weeks) — last-minute bookings are always more expensive</li>
            <li>Be clear about your guest count from the start — it helps the decorator give an accurate quote</li>
          </ul>

          {/* CTA */}
          <div
            style={{
              background: "#f6f1ea",
              border: "2px solid #c9a227",
              borderRadius: "16px",
              padding: "28px",
              textAlign: "center",
            }}
          >
            <h3 style={{ color: "#7a1b3d", fontWeight: "bold", fontSize: "1.2rem", marginBottom: "8px" }}>
              Get a Free Quote for Your Wedding
            </h3>
            <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "18px" }}>
              Tell us your event type, date, guest count and city — we&apos;ll give you a transparent,
              no-obligation quote within a few hours. Events by Momin serves Rahim Yar Khan,
              Sadiqabad, Khanpur, Goth Machi and Liaqatpur.
            </p>
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "#c9a227",
                color: "#3a0c1e",
                fontWeight: "bold",
                padding: "13px 28px",
                borderRadius: "999px",
                textDecoration: "none",
                fontSize: "0.95rem",
              }}
            >
              WhatsApp for Free Quote — {siteConfig.phoneDisplay}
            </a>
          </div>

          {/* Related */}
          <div style={{ marginTop: "36px" }}>
            <h3 style={{ color: "#7a1b3d", fontWeight: "700", marginBottom: "12px" }}>Related Articles</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a href="/blog/best-stage-decoration-ideas-rahim-yar-khan" style={{ color: "#7a1b3d", textDecoration: "underline" }}>
                → Best Stage Decoration Ideas in Rahim Yar Khan 2026
              </a>
              <a href="/blog/top-event-planner-rahim-yar-khan" style={{ color: "#7a1b3d", textDecoration: "underline" }}>
                → Top Event Planners in Rahim Yar Khan — Guide 2026
              </a>
              <a href="/wedding-stage-decoration" style={{ color: "#7a1b3d", textDecoration: "underline" }}>
                → Our Wedding Stage Decoration Service
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
