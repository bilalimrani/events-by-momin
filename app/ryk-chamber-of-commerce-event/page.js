import { siteConfig } from "@/lib/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "RYK Chamber of Commerce Event Management | Events by Momin",
  description:
    "Events by Momin managed the complete event setup for Rahim Yar Khan Chamber of Commerce — lighting, stage, seating and full event coordination. A high-profile gathering attended by prominent business and political leaders of South Punjab.",
  alternates: { canonical: `${siteConfig.url}/ryk-chamber-of-commerce-event` },
  keywords: [
    "Chamber of Commerce event management RYK",
    "RYK Chamber of Commerce event",
    "corporate event management Rahim Yar Khan",
    "political event management RYK",
    "business event planner Rahim Yar Khan",
    "ijlaas event management RYK",
    "conference event planner South Punjab",
    "high profile event management RYK",
    "corporate gathering event planner RYK",
    "business seminar event management South Punjab",
    "VIP event management Rahim Yar Khan",
    "election event management RYK",
  ],
  openGraph: {
    title: "RYK Chamber of Commerce Event | Events by Momin",
    description:
      "Complete event management for Rahim Yar Khan Chamber of Commerce — attended by prominent business and political leaders. Managed by Events by Momin.",
    images: [{ url: `${siteConfig.url}/gallery/gala-night.jpg` }],
  },
};

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "RYK Chamber of Commerce — High-Profile Business & Political Gathering",
  description:
    "A prominent business and political gathering organized at Rahim Yar Khan Chamber of Commerce — full event management including stage, lighting, seating and coordination by Events by Momin.",
  location: {
    "@type": "Place",
    name: "Chamber of Commerce, Rahim Yar Khan",
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
  image: `${siteConfig.url}/gallery/gala-night.jpg`,
  url: `${siteConfig.url}/ryk-chamber-of-commerce-event`,
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Corporate Event Management", item: `${siteConfig.url}/corporate-event-management-rahim-yar-khan` },
    { "@type": "ListItem", position: 3, name: "RYK Chamber of Commerce Event", item: `${siteConfig.url}/ryk-chamber-of-commerce-event` },
  ],
};

export default function ChamberOfCommerceEventPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <main className="min-h-screen">

        {/* Hero */}
        <div style={{
          background: "linear-gradient(120deg,#1a1a2e,#16213e,#0f3460)",
          padding: "100px 24px 60px",
          textAlign: "center",
          color: "#fffdfb",
        }}>
          <p style={{ fontSize: "0.85rem", marginBottom: "12px", opacity: 0.6 }}>
            <a href="/" style={{ color: "#ecc754", textDecoration: "none" }}>Home</a>
            {" "}&rsaquo;{" "}
            <a href="/corporate-event-management-rahim-yar-khan" style={{ color: "#ecc754", textDecoration: "none" }}>Corporate Events</a>
            {" "}&rsaquo;{" "}Chamber of Commerce RYK
          </p>
          <p style={{ fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#ecc754", marginBottom: "12px", fontWeight: "600" }}>
            Case Study — Corporate & Political Event Management
          </p>
          <h1 style={{ fontSize: "clamp(1.8rem,5vw,3rem)", fontWeight: "bold", lineHeight: 1.2, marginBottom: "16px", maxWidth: "720px", margin: "0 auto 16px" }}>
            Chamber of Commerce, Rahim Yar Khan
            <span style={{ display: "block", color: "#ecc754", marginTop: "8px", fontSize: "clamp(1.2rem,3vw,1.8rem)" }}>
              High-Profile Business &amp; Political Gathering
            </span>
          </h1>
          <p style={{ fontSize: "1.05rem", maxWidth: "620px", margin: "0 auto 28px", opacity: 0.9, lineHeight: 1.8 }}>
            A shandar taqreeb — attended by prominent business leaders and political figures of South Punjab. Complete event management handled by Events by Momin in collaboration with Shoukat Event Organizer.
          </p>
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block", background: "#c9a227", color: "#1a1a2e", fontWeight: "bold", padding: "14px 32px", borderRadius: "999px", textDecoration: "none", fontSize: "1rem" }}
          >
            Book Your Corporate Event
          </a>
        </div>

        {/* Stats bar */}
        <div style={{ background: "#f6f1ea", borderBottom: "2px solid #c9a227", padding: "24px", display: "flex", justifyContent: "center", gap: "48px", flexWrap: "wrap", textAlign: "center" }}>
          {[
            ["🏛️", "Chamber of Commerce RYK"],
            ["🤝", "Business & Political Leaders"],
            ["✨", "Full Event Management"],
            ["5★", "Successfully Delivered"],
          ].map(([icon, lbl]) => (
            <div key={lbl} style={{ maxWidth: "140px" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "4px" }}>{icon}</div>
              <div style={{ fontSize: "0.78rem", color: "#7a1b3d", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", lineHeight: 1.4 }}>{lbl}</div>
            </div>
          ))}
        </div>

        <div style={{ maxWidth: "820px", margin: "0 auto", padding: "48px 24px" }}>

          {/* About */}
          <h2 style={{ color: "#7a1b3d", fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px" }}>
            About the Event
          </h2>
          <p style={{ color: "#333", lineHeight: 1.9, marginBottom: "16px" }}>
            The <strong>Rahim Yar Khan Chamber of Commerce</strong> hosted a high-profile ijlaas (gathering) that brought together prominent business leaders and political figures of South Punjab. With upcoming elections and key economic discussions on the agenda, this was one of the most significant events organized in RYK recently.
          </p>
          <p style={{ color: "#333", lineHeight: 1.9, marginBottom: "32px" }}>
            <strong>Events by Momin</strong>, in collaboration with <strong>Shoukat Event Organizer</strong>, was entrusted with the complete event management — from stage setup and lighting to guest seating and full on-ground coordination. Jag magati lights aur behtareen intezamaat ke saath, is mehfil ne kamyabi ki nayi misaal qaim ki.
          </p>

          {/* What we managed */}
          <h2 style={{ color: "#7a1b3d", fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px" }}>
            What We Managed
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "36px" }}>
            {[
              ["🎭", "Stage & Podium Setup", "Professional stage with podium and backdrop designed for a dignified, formal setting."],
              ["💡", "Premium Lighting", "Jag magati lights creating a grand, high-profile atmosphere throughout the venue."],
              ["🪑", "VIP Guest Seating", "Arranged seating for business leaders, political figures and distinguished guests."],
              ["🔊", "Sound System", "Crystal-clear PA system for speeches, announcements and presentations."],
              ["🎨", "Backdrop & Branding", "Branded backdrop and professional signage befitting a Chamber of Commerce event."],
              ["📋", "On-Ground Coordination", "Complete event day management — from setup to smooth execution and closedown."],
            ].map(([icon, title, desc]) => (
              <div key={title} style={{ background: "#fff", border: "1px solid #ecc754", borderRadius: "12px", padding: "20px" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{icon}</div>
                <div style={{ fontWeight: "bold", color: "#7a1b3d", marginBottom: "6px" }}>{title}</div>
                <div style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>

          {/* TikTok embed */}
          <h2 style={{ color: "#7a1b3d", fontSize: "1.3rem", fontWeight: "bold", marginBottom: "16px" }}>
            Event Highlights
          </h2>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "36px" }}>
            <blockquote
              className="tiktok-embed"
              cite="https://www.tiktok.com/@events_by_momin_official/video/7684707345976315157"
              data-video-id="7684707345976315157"
              style={{ maxWidth: "605px", minWidth: "325px", width: "100%" }}
            >
              <section>
                <a target="_blank" rel="noopener noreferrer" title="@events_by_momin_official" href="https://www.tiktok.com/@events_by_momin_official?refer=embed">
                  @events_by_momin_official
                </a>
                {" "}✨ Chamber of Commerce Rahim Yar Khan ki shandar taqreeb ka intezaam — Events by Momin ki taraf se!{" "}
                <a title="events" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/events?refer=embed">#events</a>{" "}
                <a title="RYK" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/RYK?refer=embed">#RYK</a>
              </section>
            </blockquote>
          </div>
          <script async src="https://www.tiktok.com/embed.js" />

          {/* Why trust us for corporate events */}
          <h2 style={{ color: "#7a1b3d", fontSize: "1.3rem", fontWeight: "bold", marginBottom: "14px" }}>
            Why Organizations Trust Events by Momin
          </h2>
          <ul style={{ color: "#444", lineHeight: 2.3, paddingLeft: "20px", marginBottom: "32px" }}>
            <li>Experience managing high-profile corporate, political and academic events in RYK</li>
            <li>Professional setup that reflects the dignity and prestige of your organization</li>
            <li>End-to-end management — you focus on your guests, we handle everything else</li>
            <li>On-time setup with experienced on-ground team</li>
            <li>Serving Rahim Yar Khan, Sadiqabad, Khanpur and all of South Punjab</li>
          </ul>

          {/* CTA */}
          <div style={{ background: "linear-gradient(120deg,#1a1a2e,#16213e)", borderRadius: "16px", padding: "28px", textAlign: "center", color: "#fffdfb", marginBottom: "32px" }}>
            <h3 style={{ fontWeight: "bold", fontSize: "1.2rem", marginBottom: "8px" }}>
              Planning a Corporate, Political or Organizational Event?
            </h3>
            <p style={{ opacity: 0.9, lineHeight: 1.7, marginBottom: "18px" }}>
              Events by Momin handles seminars, conferences, ijlaas, corporate dinners, award ceremonies and all formal gatherings across South Punjab — professionally and on time.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: "#c9a227", color: "#1a1a2e", fontWeight: "bold", padding: "13px 28px", borderRadius: "999px", textDecoration: "none", fontSize: "0.95rem" }}
              >
                💬 WhatsApp for Quote
              </a>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                style={{ background: "rgba(255,255,255,0.15)", color: "#fffdfb", fontWeight: "bold", padding: "13px 28px", borderRadius: "999px", textDecoration: "none", fontSize: "0.95rem", border: "1px solid rgba(255,255,255,0.3)" }}
              >
                📞 {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="/" style={{ color: "#7a1b3d", fontWeight: "bold", textDecoration: "underline" }}>← Back to Home</a>
            <a href="/corporate-event-management-rahim-yar-khan" style={{ color: "#7a1b3d", textDecoration: "underline" }}>All Corporate Events</a>
            <a href="/mun-event-management-rahim-yar-khan" style={{ color: "#7a1b3d", textDecoration: "underline" }}>RYK MUN Event</a>
            <a href="/gala-night-event-planner" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Gala Night Planner</a>
          </div>

        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
