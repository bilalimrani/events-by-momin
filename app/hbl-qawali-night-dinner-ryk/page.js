import { siteConfig } from "@/lib/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "HBL Qawali Night & Corporate Dinner RYK | Events by Momin",
  description:
    "Events by Momin managed the complete decoration, lighting, stage setup and event management for HBL's Qawali Night & Corporate Dinner in Rahim Yar Khan. Premium corporate event management in South Punjab.",
  alternates: { canonical: `${siteConfig.url}/hbl-qawali-night-dinner-ryk` },
  keywords: [
    "HBL event Rahim Yar Khan",
    "corporate dinner event management RYK",
    "qawali night event planner South Punjab",
    "bank corporate event management Rahim Yar Khan",
    "corporate gala dinner RYK",
    "corporate event decorator South Punjab",
    "annual dinner event management Rahim Yar Khan",
  ],
  openGraph: {
    title: "HBL Qawali Night & Corporate Dinner RYK | Events by Momin",
    description:
      "Premium corporate dinner and qawali night event managed end-to-end by Events by Momin in Rahim Yar Khan — stage, decor, lighting, sound and full coordination.",
    images: [{ url: `${siteConfig.url}/gallery/htbl-qawali.jpeg` }],
  },
};

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "HBL Qawali Night & Corporate Dinner — Rahim Yar Khan",
  description:
    "HBL (Habib Bank Limited) Qawali Night and Corporate Dinner held in Rahim Yar Khan. Complete event management including stage decor, lighting, sound, dinner setup and full-event coordination by Events by Momin.",
  location: {
    "@type": "Place",
    name: "Rahim Yar Khan",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rahim Yar Khan",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
  },
  organizer: {
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phoneRaw,
  },
  image: `${siteConfig.url}/gallery/htbl-qawali.jpeg`,
  url: `${siteConfig.url}/hbl-qawali-night-dinner-ryk`,
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Corporate Event Management", item: `${siteConfig.url}/corporate-event-management-rahim-yar-khan` },
    { "@type": "ListItem", position: 3, name: "HBL Qawali Night & Dinner RYK", item: `${siteConfig.url}/hbl-qawali-night-dinner-ryk` },
  ],
};

export default function HblQawaliPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <main className="min-h-screen">

        {/* Hero */}
        <div
          style={{
            background: "linear-gradient(120deg,#1a0a2e,#3a1060,#1a0a2e)",
            padding: "100px 24px 60px",
            textAlign: "center",
            color: "#fffdfb",
          }}
        >
          <p style={{ fontSize: "0.85rem", marginBottom: "12px", opacity: 0.6 }}>
            <a href="/" style={{ color: "#ecc754", textDecoration: "none" }}>Home</a>
            {" "}&rsaquo;{" "}
            <a href="/corporate-event-management-rahim-yar-khan" style={{ color: "#ecc754", textDecoration: "none" }}>Corporate Events</a>
            {" "}&rsaquo;{" "}HBL Qawali Night
          </p>
          <p
            style={{
              fontSize: "0.8rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#ecc754",
              marginBottom: "12px",
              fontWeight: "600",
            }}
          >
            Case Study — Corporate Dinner &amp; Entertainment Event
          </p>
          <h1
            style={{
              fontSize: "clamp(1.8rem,5vw,3.2rem)",
              fontWeight: "bold",
              lineHeight: 1.2,
              marginBottom: "16px",
            }}
          >
            HBL Qawali Night &amp; Corporate Dinner
            <span style={{ display: "block", color: "#ecc754", marginTop: "8px" }}>
              Rahim Yar Khan
            </span>
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              maxWidth: "620px",
              margin: "0 auto 28px",
              opacity: 0.9,
            }}
          >
            A premium evening of qawali music and corporate dining — complete stage decoration,
            ambience lighting, sound system and end-to-end event coordination by Events by Momin.
          </p>
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "#c9a227",
              color: "#1a0a2e",
              fontWeight: "bold",
              padding: "14px 32px",
              borderRadius: "999px",
              textDecoration: "none",
              fontSize: "1rem",
            }}
          >
            Book a Corporate Event Like This
          </a>
        </div>

        {/* Stats bar */}
        <div
          style={{
            background: "#f6f1ea",
            borderBottom: "2px solid #c9a227",
            padding: "24px",
            display: "flex",
            justifyContent: "center",
            gap: "48px",
            flexWrap: "wrap",
            textAlign: "center",
          }}
        >
          {[
            ["HBL", "Client"],
            ["1", "Premium Evening"],
            ["100%", "On-Time Setup"],
            ["5★", "Client Rating"],
          ].map(([val, lbl]) => (
            <div key={lbl}>
              <div style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#7a1b3d" }}>{val}</div>
              <div style={{ fontSize: "0.78rem", color: "#555", textTransform: "uppercase", letterSpacing: "0.1em" }}>{lbl}</div>
            </div>
          ))}
        </div>

        <div style={{ maxWidth: "820px", margin: "0 auto", padding: "48px 24px" }}>

          {/* Event Video */}
          <h2 style={{ color: "#7a1b3d", fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px" }}>
            Event Highlights — Video
          </h2>
          <video
            controls
            playsInline
            poster="/gallery/htbl-qawali.jpeg"
            style={{
              width: "100%",
              borderRadius: "16px",
              marginBottom: "12px",
              background: "#000",
              aspectRatio: "16/9",
              objectFit: "cover",
            }}
          >
            <source src="/gallery/html.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p style={{ color: "#888", fontSize: "0.85rem", marginBottom: "36px", textAlign: "center" }}>
            HBL Qawali Night &amp; Corporate Dinner — Rahim Yar Khan · Managed by Events by Momin
          </p>

          {/* Event Photo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/gallery/htbl-qawali.jpeg"
            alt="HBL Qawali Night and Corporate Dinner stage decoration and lighting in Rahim Yar Khan by Events by Momin"
            style={{ width: "100%", borderRadius: "16px", objectFit: "cover", aspectRatio: "16/9", marginBottom: "36px" }}
          />

          {/* About */}
          <h2 style={{ color: "#7a1b3d", fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px" }}>
            About the Event
          </h2>
          <p style={{ color: "#333", lineHeight: 1.9, marginBottom: "16px" }}>
            <strong>HBL (Habib Bank Limited)</strong> — Pakistan&apos;s largest bank — chose{" "}
            <strong>Events by Momin</strong> as their event management partner for an exclusive
            Qawali Night and Corporate Dinner in Rahim Yar Khan. This high-profile event brought
            together HBL&apos;s guests, clients and team for an evening of traditional qawali
            music, fine dining and premium hospitality.
          </p>
          <p style={{ color: "#333", lineHeight: 1.9, marginBottom: "32px" }}>
            Events by Momin handled the complete setup — from the qawali stage and ambient lighting
            design to the dinner arrangement, entrance decoration and on-ground event flow. The
            result was an elegant, seamlessly run evening that reflected HBL&apos;s brand standards.
          </p>

          {/* What we managed */}
          <h2 style={{ color: "#7a1b3d", fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px" }}>
            What Events by Momin Delivered
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
              marginBottom: "36px",
            }}
          >
            {[
              ["🎵", "Qawali Stage Setup", "Traditional yet elegant qawali performance stage with backdrop, lighting and seating for artists."],
              ["💡", "Ambience Lighting", "Warm, premium lighting design creating the perfect atmosphere for a corporate evening."],
              ["🔊", "Sound System", "High-quality sound system ensuring crystal-clear qawali performance throughout the venue."],
              ["🍽️", "Dinner Table Setup", "Premium dinner arrangement with table dressing, centrepieces and guest seating."],
              ["🌹", "Entrance Decoration", "Elegant floral entrance with red carpet and lighting to welcome guests."],
              ["📋", "Event Coordination", "Full on-ground coordination — timeline management, staff briefing and event flow."],
            ].map(([icon, title, desc]) => (
              <div
                key={title}
                style={{ background: "#fff", border: "1px solid #ecc754", borderRadius: "12px", padding: "20px" }}
              >
                <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{icon}</div>
                <div style={{ fontWeight: "bold", color: "#7a1b3d", marginBottom: "6px" }}>{title}</div>
                <div style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div
            style={{
              background: "linear-gradient(120deg,#1a0a2e,#3a1060)",
              borderRadius: "16px",
              padding: "28px",
              marginBottom: "32px",
              color: "#fffdfb",
            }}
          >
            <p
              style={{
                fontSize: "1.1rem",
                fontStyle: "italic",
                lineHeight: 1.8,
                marginBottom: "16px",
                opacity: 0.95,
              }}
            >
              &ldquo;Events by Momin delivered a truly premium experience for our Qawali Night in
              Rahim Yar Khan. The decoration, lighting and event management were flawless — exactly
              what we expected for an HBL event. Professional, punctual and outstanding in every
              detail. We highly recommend them for any corporate event in South Punjab.&rdquo;
            </p>
            <p style={{ color: "#ecc754", fontWeight: "bold", fontSize: "0.9rem" }}>
              — HBL Team, Rahim Yar Khan
            </p>
          </div>

          {/* Why corporates trust EBM */}
          <h2 style={{ color: "#7a1b3d", fontSize: "1.3rem", fontWeight: "bold", marginBottom: "14px" }}>
            Why Leading Companies Choose Events by Momin
          </h2>
          <ul style={{ color: "#444", lineHeight: 2.1, paddingLeft: "20px", marginBottom: "32px" }}>
            <li>Trusted by top organisations including HBL, schools and NGOs in South Punjab</li>
            <li>Full-service team — decoration, sound, lighting, catering coordination, timeline management</li>
            <li>On-ground presence throughout the event — no detail is missed</li>
            <li>Experience with high-profile audiences and brand-standard delivery</li>
            <li>Serving Rahim Yar Khan, Sadiqabad, Khanpur and all of South Punjab</li>
          </ul>

          {/* CTA */}
          <div
            style={{
              background: "#f6f1ea",
              border: "2px solid #c9a227",
              borderRadius: "16px",
              padding: "28px",
              marginBottom: "32px",
            }}
          >
            <h3 style={{ color: "#7a1b3d", fontWeight: "bold", fontSize: "1.2rem", marginBottom: "8px" }}>
              Planning a Corporate Event or Gala Night in RYK?
            </h3>
            <p style={{ color: "#555", lineHeight: 1.7, marginBottom: "16px" }}>
              Events by Momin handles corporate dinners, qawali nights, gala events, annual
              functions and all formal celebrations across Rahim Yar Khan and South Punjab —
              with the same professional standard we delivered for HBL.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "#c9a227",
                  color: "#1a0a2e",
                  fontWeight: "bold",
                  padding: "12px 24px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                }}
              >
                💬 WhatsApp for Corporate Quote
              </a>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                style={{
                  background: "#7a1b3d",
                  color: "#fffdfb",
                  fontWeight: "bold",
                  padding: "12px 24px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                }}
              >
                📞 {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="/" style={{ color: "#7a1b3d", fontWeight: "bold", textDecoration: "underline" }}>← Back to Home</a>
            <a href="/corporate-event-management-rahim-yar-khan" style={{ color: "#7a1b3d", textDecoration: "underline" }}>All Corporate Events</a>
            <a href="/gala-night-event-planner" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Gala Night Planner</a>
            <a href="/mun-event-management-rahim-yar-khan" style={{ color: "#7a1b3d", textDecoration: "underline" }}>RYK MUN Case Study</a>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
