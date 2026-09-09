import { siteConfig } from "@/lib/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Wedding Barat & Walima Decor — Rahim Yar Khan | Events by Momin",
  description:
    "Events by Momin planned and decorated a complete Barat & Walima wedding in Rahim Yar Khan — grand stage, bridal entrance, floral arches, lighting, and walima reception setup. See our wedding case study.",
  alternates: { canonical: `${siteConfig.url}/portfolio/wedding-barat-walima-ryk` },
  keywords: [
    "wedding barat walima decoration Rahim Yar Khan",
    "barat stage decor RYK",
    "walima reception decoration South Punjab",
    "wedding planner Rahim Yar Khan",
    "bridal stage decoration RYK",
    "wedding event management South Punjab",
    "barat walima event planner",
    "wedding decorator case study RYK",
  ],
  openGraph: {
    title: "Wedding Barat & Walima Decor — RYK | Events by Momin",
    description:
      "Grand barat stage, bridal entrance aisle, and walima reception — full wedding management in Rahim Yar Khan by Events by Momin.",
    images: [{ url: `${siteConfig.url}/gallery/barat-stage.jpg` }],
  },
};

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Wedding Barat & Walima — Rahim Yar Khan",
  description:
    "A grand wedding celebration spanning Barat and Walima functions in Rahim Yar Khan. Events by Momin provided full-service decoration and event management including stage, floral décor, lighting, bridal entrance and reception setup.",
  location: {
    "@type": "Place",
    name: "Private Marquee",
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
  image: `${siteConfig.url}/gallery/barat-stage.jpg`,
  url: `${siteConfig.url}/portfolio/wedding-barat-walima-ryk`,
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Portfolio", item: `${siteConfig.url}/portfolio` },
    { "@type": "ListItem", position: 3, name: "Wedding Barat & Walima — RYK", item: `${siteConfig.url}/portfolio/wedding-barat-walima-ryk` },
  ],
};

const galleryImages = [
  { src: "/gallery/barat-stage.jpg", alt: "Grand barat stage decoration Rahim Yar Khan" },
  { src: "/gallery/walima-reception.jpg", alt: "Walima reception setup and decor" },
  { src: "/gallery/grand-entrance-aisle.jpg", alt: "Bridal entrance aisle with floral arch" },
  { src: "/gallery/wedding-decor.jpg", alt: "Wedding decoration details" },
];

export default function WeddingBaratWalimaRykPage() {
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
            <a href="/portfolio" style={{ color: "#ecc754", textDecoration: "none" }}>Portfolio</a>
            {" "}&rsaquo;{" "}Wedding Barat &amp; Walima
          </p>
          <p style={{ fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#ecc754", marginBottom: "12px", fontWeight: "600" }}>
            Case Study — Wedding Event Management
          </p>
          <h1 style={{ fontSize: "clamp(1.8rem,5vw,3.2rem)", fontWeight: "bold", lineHeight: 1.2, marginBottom: "16px" }}>
            Wedding Barat &amp; Walima
            <span style={{ display: "block", color: "#ecc754", marginTop: "8px" }}>Rahim Yar Khan</span>
          </h1>
          <p style={{ fontSize: "1.1rem", maxWidth: "620px", margin: "0 auto 28px", opacity: 0.9 }}>
            Two unforgettable celebrations — one grand Barat, one elegant Walima. Full decoration and event management by Events by Momin in Rahim Yar Khan.
          </p>
          <a href={`${siteConfig.whatsappLink}?text=Hi%2C%20I%20want%20to%20book%20a%20similar%20Wedding%20Barat%20%26%20Walima%20event`}
            target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-block", background: "#c9a227", color: "#0c1a3a", fontWeight: "bold", padding: "14px 32px", borderRadius: "999px", textDecoration: "none", fontSize: "1rem" }}>
            💬 Book a Similar Wedding Event
          </a>
        </div>

        {/* Stats bar */}
        <div style={{ background: "#f6f1ea", borderBottom: "2px solid #c9a227", padding: "24px", display: "flex", justifyContent: "center", gap: "48px", flexWrap: "wrap", textAlign: "center" }}>
          {[["2", "Functions (Barat + Walima)"], ["300+", "Guests"], ["100%", "On-Time Setup"], ["5★", "Client Rating"]].map(([val, lbl]) => (
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
              ["📍", "Location", "Rahim Yar Khan (RYK), Punjab"],
              ["🎉", "Functions", "Barat & Walima"],
              ["👥", "Guests", "300+ attendees"],
              ["📅", "Duration", "2-Day Celebration"],
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
            This <strong>Barat &amp; Walima</strong> wedding in <strong>Rahim Yar Khan</strong> was a two-day celebration that demanded elegance, precision, and seamless execution. The family trusted <strong>Events by Momin</strong> to manage both functions from start to finish — and we delivered a celebration that exceeded every expectation.
          </p>
          <p style={{ color: "#333", lineHeight: 1.9, marginBottom: "32px" }}>
            The Barat featured a majestic stage with fresh floral arrangements, a dramatic entrance aisle with rose-petal carpeting, and warm amber lighting throughout. The Walima, held the following day, transformed the same venue into an intimate yet sophisticated reception with a different color palette, table settings, and a refined stage backdrop.
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
              ["💐", "Barat Stage Decoration", "Grand bridal stage with fresh flowers, draping, and LED backdrop."],
              ["🚶", "Entrance Aisle Setup", "Rose-petal carpet aisle with floral arch columns for the bride's entrance."],
              ["💡", "Lighting & Ambience", "Warm amber fairy lights, spotlights, and customized color lighting."],
              ["🍽️", "Walima Reception Setup", "Elegant table settings, centerpieces, and reception stage for the Walima."],
              ["🎨", "Backdrop & Branding", "Printed photo-booth backdrop with family name and date."],
              ["🪑", "Seating Arrangements", "Guest seating layout for 300+ with decorated chairs and tables."],
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
            <div style={{ fontSize: "2rem", marginBottom: "12px", opacity: 0.6 }}>&ldquo;</div>
            <p style={{ fontSize: "1.05rem", fontStyle: "italic", lineHeight: 1.8, marginBottom: "16px", opacity: 0.95 }}>
              We gave Momin bhai the task of decorating both our Barat and Walima — and he exceeded everything we imagined. The stage was breathtaking, the lights were perfect, and the team set up everything without us having to worry about a single thing. Our guests are still talking about how beautiful it was. Highly recommend Events by Momin for weddings in Rahim Yar Khan!
            </p>
            <p style={{ color: "#ecc754", fontWeight: "bold", fontSize: "0.9rem" }}>
              — Groom&apos;s Family, Rahim Yar Khan
            </p>
          </div>

          {/* CTA */}
          <div style={{ background: "#f6f1ea", border: "2px solid #c9a227", borderRadius: "16px", padding: "28px", marginBottom: "32px" }}>
            <h3 style={{ color: "#7a1b3d", fontWeight: "bold", fontSize: "1.2rem", marginBottom: "8px" }}>
              Planning a Barat or Walima in South Punjab?
            </h3>
            <p style={{ color: "#555", lineHeight: 1.7, marginBottom: "16px" }}>
              Events by Momin handles complete wedding management — Barat, Walima, Mehndi, Nikah and more — across Rahim Yar Khan, Sadiqabad, Khanpur, Goth Machi and all of South Punjab.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href={`${siteConfig.whatsappLink}?text=Hi%2C%20I%20want%20to%20book%20a%20Wedding%20Barat%20%26%20Walima%20event`}
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
            <a href="/wedding-stage-decoration" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Wedding Stage Decor</a>
            <a href="/barat-stage-decoration" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Barat Stage Decor</a>
            <a href="/walima-decoration" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Walima Decoration</a>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
