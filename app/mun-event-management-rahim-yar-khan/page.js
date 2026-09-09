import { siteConfig } from "@/lib/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "RYK MUN Event Management — Sheikh Khalifa School | Events by Momin",
  description:
    "Events by Momin managed the complete stage, decor, backdrop, lighting and setup for RYK MUN (Model United Nations) at Sheikh Khalifa School, Rahim Yar Khan — 650+ student delegates. Professional corporate & academic event management in South Punjab.",
  alternates: { canonical: `${siteConfig.url}/mun-event-management-rahim-yar-khan` },
  keywords: [
    "MUN event management Rahim Yar Khan",
    "Model United Nations event planner RYK",
    "school event management South Punjab",
    "college event management Rahim Yar Khan",
    "Sheikh Khalifa School event",
    "academic event planner RYK",
    "seminar event management Rahim Yar Khan",
    "conference decoration South Punjab",
  ],
  openGraph: {
    title: "RYK MUN Event Management | Events by Momin",
    description:
      "Complete stage, decor, backdrop, lighting and setup for RYK MUN at Sheikh Khalifa School — 650+ delegates. Events by Momin, Rahim Yar Khan.",
    images: [{ url: `${siteConfig.url}/gallery/reception-dining-hall.jpg` }],
  },
};

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "RYK MUN — Model United Nations, Rahim Yar Khan",
  description:
    "RYK MUN (Model United Nations) held at Sheikh Khalifa School, Rahim Yar Khan. Full event management including stage, decor, backdrop, sound, lighting and catering by Events by Momin — 650+ student delegates.",
  location: {
    "@type": "Place",
    name: "Sheikh Khalifa School",
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
  image: `${siteConfig.url}/gallery/reception-dining-hall.jpg`,
  url: `${siteConfig.url}/mun-event-management-rahim-yar-khan`,
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Corporate Event Management", item: `${siteConfig.url}/corporate-event-management-rahim-yar-khan` },
    { "@type": "ListItem", position: 3, name: "RYK MUN Event", item: `${siteConfig.url}/mun-event-management-rahim-yar-khan` },
  ],
};


export default function MunEventPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <main className="min-h-screen">
        {/* Hero */}
        <div style={{ background: "linear-gradient(120deg,#0c1a3a,#1a2f5a,#0c1a3a)", padding: "100px 24px 60px", textAlign: "center", color: "#fffdfb" }}>
          <p style={{ fontSize: "0.85rem", marginBottom: "12px", opacity: 0.6 }}>
            <a href="/" style={{ color: "#ecc754", textDecoration: "none" }}>Home</a>
            {" "}&rsaquo;{" "}
            <a href="/corporate-event-management-rahim-yar-khan" style={{ color: "#ecc754", textDecoration: "none" }}>Corporate Events</a>
            {" "}&rsaquo;{" "}RYK MUN
          </p>
          <p style={{ fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#ecc754", marginBottom: "12px", fontWeight: "600" }}>
            Case Study — Academic Event Management
          </p>
          <h1 style={{ fontSize: "clamp(1.8rem,5vw,3.2rem)", fontWeight: "bold", lineHeight: 1.2, marginBottom: "16px" }}>
            RYK MUN — Model United Nations
            <span style={{ display: "block", color: "#ecc754", marginTop: "8px" }}>Sheikh Khalifa School, Rahim Yar Khan</span>
          </h1>
          <p style={{ fontSize: "1.1rem", maxWidth: "620px", margin: "0 auto 28px", opacity: 0.9 }}>
            650+ student delegates. Complete event management — stage, decor, backdrop, sound, lighting and catering — handled end-to-end by Events by Momin.
          </p>
          <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-block", background: "#c9a227", color: "#0c1a3a", fontWeight: "bold", padding: "14px 32px", borderRadius: "999px", textDecoration: "none", fontSize: "1rem" }}>
            Book Your Academic / Corporate Event
          </a>
        </div>

        {/* Stats bar */}
        <div style={{ background: "#f6f1ea", borderBottom: "2px solid #c9a227", padding: "24px", display: "flex", justifyContent: "center", gap: "48px", flexWrap: "wrap", textAlign: "center" }}>
          {[["650+", "Student Delegates"], ["1", "Full-Day Event"], ["100%", "On-Time Setup"], ["5★", "Client Rating"]].map(([val, lbl]) => (
            <div key={lbl}>
              <div style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#7a1b3d" }}>{val}</div>
              <div style={{ fontSize: "0.78rem", color: "#555", textTransform: "uppercase", letterSpacing: "0.1em" }}>{lbl}</div>
            </div>
          ))}
        </div>

        <div style={{ maxWidth: "820px", margin: "0 auto", padding: "48px 24px" }}>

          {/* About the event */}
          <h2 style={{ color: "#7a1b3d", fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px" }}>
            About the Event
          </h2>
          <p style={{ color: "#333", lineHeight: 1.9, marginBottom: "16px" }}>
            <strong>RYK MUN (Model United Nations)</strong> is one of Rahim Yar Khan&apos;s most prominent academic events, held at <strong>Sheikh Khalifa School</strong>. With over 650 student delegates representing different countries and committees, it required a professional, high-capacity event management team to handle the full scale of the event.
          </p>
          <p style={{ color: "#333", lineHeight: 1.9, marginBottom: "32px" }}>
            <strong>Events by Momin</strong> was selected as the official event management partner for RYK MUN — responsible for all physical setup, decoration, sound and lighting, backdrop branding, stage design and catering coordination.
          </p>

          {/* What we managed */}
          <h2 style={{ color: "#7a1b3d", fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px" }}>
            What Events by Momin Managed
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "32px" }}>
            {[
              ["🎭", "Main Stage Design", "Grand stage setup with branded backdrop, podiums and delegate seating."],
              ["🔊", "Sound & PA System", "Professional PA system for 650+ delegates across multiple halls."],
              ["💡", "Lighting Setup", "Ambient and stage lighting throughout the venue."],
              ["🎨", "Backdrop & Branding", "Custom-printed RYK MUN backdrop, banners and signage."],
              ["🪑", "Delegate Seating", "Full seating arrangement for 650+ participants in committee rooms."],
              ["🍽️", "Catering Coordination", "Catering management for delegates, chairs and secretariat staff."],
            ].map(([icon, title, desc]) => (
              <div key={title} style={{ background: "#fff", border: "1px solid #ecc754", borderRadius: "12px", padding: "20px" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{icon}</div>
                <div style={{ fontWeight: "bold", color: "#7a1b3d", marginBottom: "6px" }}>{title}</div>
                <div style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div style={{ background: "linear-gradient(120deg,#0c1a3a,#1a2f5a)", borderRadius: "16px", padding: "28px", marginBottom: "32px", color: "#fffdfb" }}>
            <p style={{ fontSize: "1.1rem", fontStyle: "italic", lineHeight: 1.8, marginBottom: "16px", opacity: 0.95 }}>
              &ldquo;Events by Momin handled our entire MUN setup professionally and flawlessly. With 650+ delegates, the logistics were challenging — but their team set everything up on time and managed the full day without a single issue. Highly recommended for any school or corporate event in Rahim Yar Khan.&rdquo;
            </p>
            <p style={{ color: "#ecc754", fontWeight: "bold", fontSize: "0.9rem" }}>
              — RYK MUN Secretariat, Sheikh Khalifa School, Rahim Yar Khan
            </p>
          </div>

          {/* CTA */}
          <div style={{ background: "#f6f1ea", border: "2px solid #c9a227", borderRadius: "16px", padding: "28px", marginBottom: "32px" }}>
            <h3 style={{ color: "#7a1b3d", fontWeight: "bold", fontSize: "1.2rem", marginBottom: "8px" }}>
              Need Event Management for Your School, College or Corporate Event?
            </h3>
            <p style={{ color: "#555", lineHeight: 1.7, marginBottom: "16px" }}>
              Events by Momin handles seminars, MUNs, annual functions, conferences, product launches and corporate events across Rahim Yar Khan and South Punjab — from setup to cleanup.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer"
                style={{ background: "#c9a227", color: "#0c1a3a", fontWeight: "bold", padding: "12px 24px", borderRadius: "999px", textDecoration: "none", fontSize: "0.95rem" }}>
                💬 WhatsApp Us
              </a>
              <a href={`tel:${siteConfig.phoneRaw}`}
                style={{ background: "#7a1b3d", color: "#fffdfb", fontWeight: "bold", padding: "12px 24px", borderRadius: "999px", textDecoration: "none", fontSize: "0.95rem" }}>
                📞 {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="/" style={{ color: "#7a1b3d", fontWeight: "bold", textDecoration: "underline" }}>← Back to Home</a>
            <a href="/corporate-event-management-rahim-yar-khan" style={{ color: "#7a1b3d", textDecoration: "underline" }}>All Corporate Events</a>
            <a href="/gala-night-event-planner" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Gala Night Planner</a>
            <a href="/event-planner-rahim-yar-khan" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Event Planner RYK</a>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
