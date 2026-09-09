import { siteConfig } from "@/lib/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Gala Night Event — Sadiqabad | Events by Momin",
  description:
    "Events by Momin planned and decorated a premium Gala Night in Sadiqabad — elegant stage, ambient lighting, garden lounge setup, and complete event coordination. See our gala night case study.",
  alternates: { canonical: `${siteConfig.url}/portfolio/gala-night-sadiqabad` },
  keywords: [
    "gala night Sadiqabad",
    "gala night event planner South Punjab",
    "gala night decoration Sadiqabad",
    "corporate gala night South Punjab",
    "annual dinner event Sadiqabad",
    "event planner Sadiqabad gala",
    "gala night decor case study Pakistan",
    "corporate event management Sadiqabad",
  ],
  openGraph: {
    title: "Gala Night — Sadiqabad | Events by Momin",
    description:
      "Premium Gala Night in Sadiqabad — elegant stage, garden lounge, ambient lighting and full event management by Events by Momin.",
    images: [{ url: `${siteConfig.url}/gallery/gala-night.jpg` }],
  },
};

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Gala Night — Sadiqabad",
  description:
    "A premium Gala Night event in Sadiqabad managed by Events by Momin. Services included stage design, ambient and garden lighting, lounge seating, backdrop and branding, sound setup, and full event coordination.",
  location: {
    "@type": "Place",
    name: "Private Venue",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sadiqabad",
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
  url: `${siteConfig.url}/portfolio/gala-night-sadiqabad`,
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Portfolio", item: `${siteConfig.url}/portfolio` },
    { "@type": "ListItem", position: 3, name: "Gala Night — Sadiqabad", item: `${siteConfig.url}/portfolio/gala-night-sadiqabad` },
  ],
};

const galleryImages = [
  { src: "/gallery/gala-night.jpg", alt: "Gala night stage decoration Sadiqabad" },
  { src: "/gallery/garden-lounge-night.jpg", alt: "Garden lounge setup at night gala event" },
  { src: "/gallery/lounge-seating.jpg", alt: "Elegant lounge seating arrangement" },
  { src: "/gallery/night-aisle-walkway.jpg", alt: "Illuminated night aisle walkway" },
];

export default function GalaNightSadiqabadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <main className="min-h-screen">

        {/* Hero */}
        <div style={{ background: "linear-gradient(120deg,#0d0d1a,#1a1a35,#0d0d1a)", padding: "100px 24px 60px", textAlign: "center", color: "#fffdfb" }}>
          <p style={{ fontSize: "0.85rem", marginBottom: "12px", opacity: 0.6 }}>
            <a href="/" style={{ color: "#ecc754", textDecoration: "none" }}>Home</a>
            {" "}&rsaquo;{" "}
            <a href="/portfolio" style={{ color: "#ecc754", textDecoration: "none" }}>Portfolio</a>
            {" "}&rsaquo;{" "}Gala Night
          </p>
          <p style={{ fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#ecc754", marginBottom: "12px", fontWeight: "600" }}>
            Case Study — Gala Night Event Management
          </p>
          <h1 style={{ fontSize: "clamp(1.8rem,5vw,3.2rem)", fontWeight: "bold", lineHeight: 1.2, marginBottom: "16px" }}>
            Premium Gala Night
            <span style={{ display: "block", color: "#ecc754", marginTop: "8px" }}>Sadiqabad, South Punjab</span>
          </h1>
          <p style={{ fontSize: "1.1rem", maxWidth: "620px", margin: "0 auto 28px", opacity: 0.9 }}>
            An elegant, upscale gala evening — stunning stage, ambient garden lighting, and flawless event coordination by Events by Momin.
          </p>
          <a href={`${siteConfig.whatsappLink}?text=Hi%2C%20I%20want%20to%20book%20a%20Gala%20Night%20event`}
            target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-block", background: "#c9a227", color: "#0c1a3a", fontWeight: "bold", padding: "14px 32px", borderRadius: "999px", textDecoration: "none", fontSize: "1rem" }}>
            💬 Book a Gala Night Event
          </a>
        </div>

        {/* Stats bar */}
        <div style={{ background: "#f6f1ea", borderBottom: "2px solid #c9a227", padding: "24px", display: "flex", justifyContent: "center", gap: "48px", flexWrap: "wrap", textAlign: "center" }}>
          {[["200+", "Attendees"], ["1", "Premium Evening"], ["100%", "On-Time Setup"], ["5★", "Client Rating"]].map(([val, lbl]) => (
            <div key={lbl}>
              <div style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#7a1b3d" }}>{val}</div>
              <div style={{ fontSize: "0.78rem", color: "#555", textTransform: "uppercase", letterSpacing: "0.1em" }}>{lbl}</div>
            </div>
          ))}
        </div>

        <div style={{ maxWidth: "820px", margin: "0 auto", padding: "48px 24px" }}>

          {/* Event Details */}
          <div style={{ background: "#f6f1ea", borderRadius: "12px", padding: "20px 24px", marginBottom: "32px", display: "flex", flexWrap: "wrap", gap: "16px" }}>
            {[
              ["📍", "Location", "Sadiqabad (SDK), Punjab"],
              ["🎉", "Event Type", "Gala Night / Annual Dinner"],
              ["👥", "Attendees", "200+ guests"],
              ["🌟", "Occasion", "Corporate & Social"],
            ].map(([icon, label, value]) => (
              <div key={label} style={{ flex: "1 1 160px" }}>
                <div style={{ fontSize: "1.3rem", marginBottom: "4px" }}>{icon}</div>
                <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#888", marginBottom: "2px" }}>{label}</div>
                <div style={{ fontWeight: "bold", color: "#333" }}>{value}</div>
              </div>
            ))}
          </div>

          {/* About */}
          <h2 style={{ color: "#7a1b3d", fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px" }}>About the Event</h2>
          <p style={{ color: "#333", lineHeight: 1.9, marginBottom: "16px" }}>
            This <strong>Gala Night</strong> in <strong>Sadiqabad</strong> was a high-profile social event that demanded sophistication and precision. The organizers approached <strong>Events by Momin</strong> to transform an outdoor venue into a premium gala experience — and we delivered beyond expectations.
          </p>
          <p style={{ color: "#333", lineHeight: 1.9, marginBottom: "32px" }}>
            We designed an elegant stage with rich draping and a custom LED backdrop, created a stunning garden lounge with intimate seating clusters, and illuminated the entire venue with warm amber uplighting and a lit walkway for guests. The result was a breathtaking gala atmosphere that left every attendee impressed.
          </p>

          {/* Gallery */}
          <h2 style={{ color: "#7a1b3d", fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px" }}>Event Gallery</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px", marginBottom: "32px" }}>
            {galleryImages.map((img) => (
              <div key={img.src} style={{ borderRadius: "10px", overflow: "hidden", aspectRatio: "4/3", border: "2px solid #ecc754" }}>
                <img src={img.src} alt={img.alt} loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
            ))}
          </div>

          {/* Services */}
          <h2 style={{ color: "#7a1b3d", fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px" }}>Services Provided</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "32px" }}>
            {[
              ["🎭", "Gala Stage Design", "Premium stage with rich draping, custom backdrop, and LED lighting."],
              ["🌿", "Garden Lounge Setup", "Outdoor lounge with elegant seating clusters and table arrangements."],
              ["💡", "Ambient Lighting", "Full venue uplighting, fairy lights, and illuminated walkway."],
              ["🔊", "Sound System", "Professional PA system and microphones for presentations and music."],
              ["🎨", "Backdrop & Branding", "Custom-printed event backdrop with logo and event branding."],
              ["🍽️", "Dining Setup", "Catering-coordinated table settings for 200+ guests."],
            ].map(([icon, title, desc]) => (
              <div key={title} style={{ background: "#fff", border: "1px solid #ecc754", borderRadius: "12px", padding: "20px" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{icon}</div>
                <div style={{ fontWeight: "bold", color: "#7a1b3d", marginBottom: "6px" }}>{title}</div>
                <div style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div style={{ background: "linear-gradient(120deg,#0d0d1a,#1a1a35)", borderRadius: "16px", padding: "28px", marginBottom: "32px", color: "#fffdfb" }}>
            <div style={{ fontSize: "2rem", marginBottom: "12px", opacity: 0.6 }}>&ldquo;</div>
            <p style={{ fontSize: "1.05rem", fontStyle: "italic", lineHeight: 1.8, marginBottom: "16px", opacity: 0.95 }}>
              We hosted our annual gala in Sadiqabad and entrusted Events by Momin to handle everything. The setup was magnificent — the garden lounge, the lighting, the stage — everything looked like something out of a luxury event magazine. Our guests couldn&apos;t stop complimenting the décor. We&apos;ll definitely work with Events by Momin for every future event.
            </p>
            <p style={{ color: "#ecc754", fontWeight: "bold", fontSize: "0.9rem" }}>
              — Event Organizer, Sadiqabad
            </p>
          </div>

          {/* CTA */}
          <div style={{ background: "#f6f1ea", border: "2px solid #c9a227", borderRadius: "16px", padding: "28px", marginBottom: "32px" }}>
            <h3 style={{ color: "#7a1b3d", fontWeight: "bold", fontSize: "1.2rem", marginBottom: "8px" }}>
              Planning a Gala Night or Annual Dinner in South Punjab?
            </h3>
            <p style={{ color: "#555", lineHeight: 1.7, marginBottom: "16px" }}>
              Events by Momin handles Gala Nights, Annual Dinners, Corporate Events and Social Evenings across Sadiqabad, Rahim Yar Khan, Khanpur, Goth Machi and all of South Punjab.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href={`${siteConfig.whatsappLink}?text=Hi%2C%20I%20want%20to%20book%20a%20Gala%20Night%20event`}
                target="_blank" rel="noopener noreferrer"
                style={{ background: "#c9a227", color: "#0c1a3a", fontWeight: "bold", padding: "12px 24px", borderRadius: "999px", textDecoration: "none", fontSize: "0.95rem" }}>
                💬 Book Similar Event on WhatsApp
              </a>
              <a href={`tel:${siteConfig.phoneRaw}`}
                style={{ background: "#7a1b3d", color: "#fffdfb", fontWeight: "bold", padding: "12px 24px", borderRadius: "999px", textDecoration: "none", fontSize: "0.95rem" }}>
                📞 {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="/portfolio" style={{ color: "#7a1b3d", fontWeight: "bold", textDecoration: "underline" }}>← Back to Portfolio</a>
            <a href="/gala-night-event-planner" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Gala Night Planner</a>
            <a href="/event-planner-sadiqabad" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Event Planner Sadiqabad</a>
            <a href="/corporate-event-management-rahim-yar-khan" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Corporate Events</a>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
