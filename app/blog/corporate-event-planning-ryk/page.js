import { siteConfig } from "@/lib/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Corporate Event Planning in Rahim Yar Khan — Complete Guide | Events by Momin",
  description:
    "Planning a corporate dinner, annual function, gala night or office party in Rahim Yar Khan? Complete guide to corporate event management in RYK & South Punjab by Events by Momin.",
  keywords: [
    "corporate event planning RYK",
    "corporate event management Rahim Yar Khan",
    "annual dinner event management South Punjab",
    "gala night event planner RYK",
    "office party planner Rahim Yar Khan",
    "corporate event decorator Pakistan",
    "product launch event management RYK",
  ],
  alternates: {
    canonical: `${siteConfig.url}/blog/corporate-event-planning-ryk`,
  },
  openGraph: {
    title: "Corporate Event Planning in Rahim Yar Khan | Events by Momin",
    description:
      "Complete guide to planning corporate dinners, annual functions and gala nights in RYK by South Punjab's top event management company.",
    images: [{ url: `${siteConfig.url}/gallery/gala-night.jpg` }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Corporate Event Planning in Rahim Yar Khan — Complete Guide",
  description:
    "A complete guide to corporate event management in Rahim Yar Khan and South Punjab — covering gala nights, annual dinners, office parties and product launches.",
  image: `${siteConfig.url}/gallery/gala-night.jpg`,
  datePublished: "2026-06-15",
  dateModified: "2026-06-15",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: { "@type": "ImageObject", url: `${siteConfig.url}/logo.png` },
  },
  mainEntityOfPage: `${siteConfig.url}/blog/corporate-event-planning-ryk`,
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
    { "@type": "ListItem", position: 3, name: "Corporate Event Planning RYK", item: `${siteConfig.url}/blog/corporate-event-planning-ryk` },
  ],
};

const steps = [
  {
    step: "Step 1",
    title: "Define Your Event Objectives",
    body: "Every successful corporate event starts with clear objectives. Are you rewarding employees at an annual dinner? Launching a new product? Recognising top performers at a gala night? Your objectives will determine the venue size, decoration style, programme flow and budget. Events by Momin consults with corporate clients in RYK to understand these goals before planning anything.",
  },
  {
    step: "Step 2",
    title: "Choose the Right Venue in RYK",
    body: "Rahim Yar Khan has a growing number of marquees and banquet halls suitable for corporate events of 50 to 500+ guests. Consider: indoor vs. outdoor, parking availability, AV and sound system infrastructure, stage area, and whether the venue allows outside caterers and decorators. Events by Momin has worked at venues across RYK and can advise on the best fit for your event.",
  },
  {
    step: "Step 3",
    title: "Plan the Stage & Decoration Theme",
    body: "Corporate events need a professional, polished look. Popular decoration choices for corporate events in South Punjab include LED backdrop stages with company logo or event branding, red-carpet VIP entrance setups, sleek and modern floral arrangements, and branded table centrepieces. Gala nights can go glamorous — with fairy-light canopies and chandeliers. The key is consistency: every element should reinforce your company's image.",
  },
  {
    step: "Step 4",
    title: "Sound System, AV & Lighting",
    body: "Corporate events live and die by their audio-visual setup. You need clear sound across the whole room, a proper microphone system for speeches and presentations, and a reliable projector or LED screen if displaying presentations or videos. Stage lighting must be bright enough for photos but not harsh. Events by Momin coordinates with trusted AV suppliers in RYK to ensure everything runs without technical issues.",
  },
  {
    step: "Step 5",
    title: "Programme & Timeline Management",
    body: "A professional corporate event runs on a tight, well-managed timeline. Doors open → welcome drinks → seating → dinner service → speeches → awards or entertainment → close. Events by Momin provides an on-ground team to manage this timeline so your team can relax and enjoy the evening instead of running around solving problems.",
  },
  {
    step: "Step 6",
    title: "Post-Event Photos & Documentation",
    body: "Corporate events should be documented for company archives, social media and future marketing. Coordinate a photographer and videographer who understand event documentation — not just portraits. Events by Momin works with professional photographers and can advise on angles and setups that photograph best in the venues we work at across South Punjab.",
  },
];

const services = [
  "Annual Dinner & Award Nights",
  "Gala Nights & Fundraising Events",
  "Product Launch Events",
  "Seminars & Conference Decoration",
  "Office & Staff Parties",
  "Corporate Team Building Events",
  "MUN & School/College Events",
  "Exhibition & Trade Show Setups",
  "Farewell & Welcome Parties",
  "NGO & Government Functions",
];

export default function CorporateEventBlogPage() {
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
            {" "}›{" "}Corporate Event Planning RYK
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
            Corporate Events
          </span>
          <h1
            style={{
              fontSize: "clamp(1.6rem,4.5vw,3rem)",
              fontWeight: "bold",
              lineHeight: 1.2,
              maxWidth: "720px",
              margin: "0 auto 16px",
            }}
          >
            Corporate Event Planning in Rahim Yar Khan — Complete Guide
          </h1>
          <p style={{ fontSize: "1rem", maxWidth: "580px", margin: "0 auto", opacity: 0.85 }}>
            How to plan a flawless corporate dinner, annual function, gala night or office party
            in RYK — step by step, from a team that has done it hundreds of times.
          </p>
          <p style={{ marginTop: "16px", fontSize: "0.85rem", opacity: 0.6 }}>June 2026 · By Events by Momin</p>
        </div>

        {/* Body */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "48px 24px" }}>
          <p style={{ color: "#333", lineHeight: 1.85, fontSize: "1.05rem", marginBottom: "32px" }}>
            Corporate events in Rahim Yar Khan have grown significantly in the last few years.
            Companies, schools, NGOs and government departments across RYK and South Punjab are
            hosting annual dinners, gala nights, product launches and team events that demand
            professional management. <strong>Events by Momin</strong> has managed corporate events
            for organisations across the region — from intimate office parties of 50 people to
            large gala nights of 500+ guests. Here is our complete guide to planning a corporate
            event in RYK.
          </p>

          {/* Steps */}
          {steps.map((s, i) => (
            <div
              key={i}
              style={{
                borderLeft: "4px solid #c9a227",
                paddingLeft: "20px",
                marginBottom: "30px",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  background: "#7a1b3d",
                  color: "#ecc754",
                  fontSize: "0.75rem",
                  fontWeight: "700",
                  padding: "2px 10px",
                  borderRadius: "999px",
                  marginBottom: "6px",
                }}
              >
                {s.step}
              </span>
              <h2 style={{ color: "#3a0c1e", fontSize: "1.15rem", fontWeight: "700", marginBottom: "8px" }}>
                {s.title}
              </h2>
              <p style={{ color: "#444", lineHeight: 1.8 }}>{s.body}</p>
            </div>
          ))}

          {/* Services */}
          <h2 style={{ color: "#7a1b3d", fontSize: "1.2rem", fontWeight: "700", marginBottom: "14px" }}>
            Corporate Events We Manage in South Punjab
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "10px",
              marginBottom: "32px",
            }}
          >
            {services.map((s) => (
              <div
                key={s}
                style={{
                  background: "#f6f1ea",
                  border: "1px solid #e8dfc8",
                  borderRadius: "10px",
                  padding: "10px 14px",
                  color: "#7a1b3d",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                }}
              >
                ✓ {s}
              </div>
            ))}
          </div>

          {/* Photo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/gallery/gala-night.jpg"
            alt="Gala night VIP lounge decoration by Events by Momin in Rahim Yar Khan South Punjab"
            style={{ width: "100%", borderRadius: "14px", objectFit: "cover", aspectRatio: "16/9", marginBottom: "32px" }}
          />

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
              Plan Your Corporate Event with Events by Momin
            </h3>
            <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "18px" }}>
              From gala nights and annual dinners to office parties and MUN events — Events by
              Momin delivers professional, polished corporate event management across Rahim Yar
              Khan and South Punjab. Contact us for availability and a custom proposal.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
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
                WhatsApp for Corporate Event Quote
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                style={{
                  display: "inline-block",
                  background: "#7a1b3d",
                  color: "#fffdfb",
                  fontWeight: "bold",
                  padding: "13px 28px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                }}
              >
                Email Us
              </a>
            </div>
          </div>

          {/* Related */}
          <div style={{ marginTop: "36px" }}>
            <h3 style={{ color: "#7a1b3d", fontWeight: "700", marginBottom: "12px" }}>Related Articles</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a href="/blog/top-event-planner-rahim-yar-khan" style={{ color: "#7a1b3d", textDecoration: "underline" }}>
                → Top Event Planner in Rahim Yar Khan — Complete Guide
              </a>
              <a href="/blog/best-stage-decoration-ideas-rahim-yar-khan" style={{ color: "#7a1b3d", textDecoration: "underline" }}>
                → Best Stage Decoration Ideas in Rahim Yar Khan 2026
              </a>
              <a href="/corporate-event-management-rahim-yar-khan" style={{ color: "#7a1b3d", textDecoration: "underline" }}>
                → Our Corporate Event Management Service
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
