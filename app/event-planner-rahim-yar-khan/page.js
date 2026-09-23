import { siteConfig } from "@/lib/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Event Planner in Rahim Yar Khan | Weddings, Barat & More | Events by Momin",
  description:
    "Looking for an event planner in Rahim Yar Khan? Weddings, barat stage, mehndi, walima, birthday & corporate events across RYK & South Punjab. WhatsApp for free quote: +92 309 4439441.",
  keywords: [
    "best event planner in RYK",
    "best event planner in Rahim Yar Khan",
    "best event decor in RYK",
    "best event decoration Rahim Yar Khan",
    "best event services in RYK",
    "best event management RYK",
    "best event company in RYK",
    "best wedding planner in RYK",
    "best wedding decorator in RYK",
    "best decoration company in RYK",
    "top event planner RYK",
    "top rated event planner Rahim Yar Khan",
    "number 1 event planner RYK",
    "No 1 event planner Rahim Yar Khan",
    "number one event planner South Punjab",
    "trusted event planner RYK",
    "professional event planner RYK",
    "leading event management company RYK",
    "famous event planner Rahim Yar Khan",
    "best event organizer RYK",
    "event planner RYK",
    "event planner Rahim Yar Khan",
    "event management company Rahim Yar Khan",
    "wedding planner Rahim Yar Khan",
    "wedding decor Rahim Yar Khan",
    "mehndi decoration RYK",
    "birthday party planner RYK",
    "gala night planner RYK",
    "corporate event planner RYK",
    "decoration company near me RYK",
    "event planner near me RYK",
    "event planner near me Rahim Yar Khan",
    "event organizer near me RYK",
    "event decorator near me RYK",
    "wedding canopy RYK",
    "canopy decoration Rahim Yar Khan",
    "tent canopy wedding RYK",
    "event management near me South Punjab",
    "shadi event decoration RYK",
    "home marriage decoration",
    "shadi planner RYK",
    "wedding organizer RYK",
    "shadi decoration near me Rahim Yar Khan",
  ],
  alternates: {
    canonical: `${siteConfig.url}/event-planner-rahim-yar-khan`,
  },
  openGraph: {
    title: "Event Planner in Rahim Yar Khan | Weddings, Barat & More | Events by Momin",
    description:
      "Looking for an event planner in RYK? Weddings, barat, mehndi, walima, birthday & corporate events. WhatsApp for free quote: +92 309 4439441",
    images: [{ url: `${siteConfig.url}/gallery/grand-entrance-aisle.jpg` }],
  },
};

const citySchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Events by Momin — Event Planner Rahim Yar Khan",
  image: `${siteConfig.url}/gallery/grand-entrance-aisle.jpg`,
  url: `${siteConfig.url}/event-planner-rahim-yar-khan`,
  telephone: siteConfig.phoneRaw,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.streetAddress,
    addressLocality: "Rahim Yar Khan",
    addressRegion: "Punjab",
    postalCode: "64200",
    addressCountry: "PK",
  },
  areaServed: { "@type": "City", name: "Rahim Yar Khan" },
  serviceType: "Event Planning, Wedding Decoration, Mehndi Decoration, Barat Stage, Birthday Party",
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    ratingCount: "47",
  },
};

export default function RahimYarKhanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
      />
      <Navbar />
      <main className="min-h-screen bg-cream-100">
        <div
          style={{
            background: "linear-gradient(120deg, #3a0c1e, #7a1b3d, #a4335c)",
            padding: "100px 24px 60px",
            textAlign: "center",
            color: "#fffdfb",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(1.8rem, 5vw, 3.5rem)",
              fontWeight: "bold",
              lineHeight: 1.2,
              marginBottom: "16px",
            }}
          >
            Best Event Planner in Rahim Yar Khan
          </h1>
          <p style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto 28px", opacity: 0.9 }}>
            Events by Momin is RYK&apos;s most trusted event management and decoration company —
            weddings, barat stages, walima, mehndi &amp; dholki, birthday parties, gala nights, mango
            parties and corporate events.
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
              padding: "14px 32px",
              borderRadius: "999px",
              textDecoration: "none",
              fontSize: "1rem",
            }}
          >
            Book on WhatsApp — +92 309 4439441
          </a>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <h2 style={{ color: "#7a1b3d", fontSize: "1.6rem", fontWeight: "bold", marginBottom: "16px" }}>
            Event Planning Services in Rahim Yar Khan (RYK)
          </h2>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "16px" }}>
            <strong>Events by Momin</strong> is Rahim Yar Khan&apos;s leading event management and
            decoration company. We handle everything from start to finish — whether it&apos;s a grand
            wedding, a colourful mehndi night, a barat stage, walima reception, birthday party, gala
            night, mango party or a corporate event.
          </p>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "24px" }}>
            Based in Darhi Sanghi, Near Dominos, Rahim Yar Khan, our team of professional event
            planners and decorators brings world-class decor to South Punjab — at honest, transparent
            prices.
          </p>

          <h2 style={{ color: "#7a1b3d", fontSize: "1.4rem", fontWeight: "bold", marginBottom: "12px" }}>
            Our Services in RYK
          </h2>
          <ul style={{ color: "#333", lineHeight: 2, paddingLeft: "20px", marginBottom: "24px" }}>
            <li>Wedding Decor &amp; Planning in Rahim Yar Khan</li>
            <li>Barat Stage Decoration RYK</li>
            <li>Walima Reception Decoration</li>
            <li>Mehndi &amp; Dholki Stage Setup</li>
            <li>Birthday Party Decoration</li>
            <li>Gala Night &amp; Theme Party Planning</li>
            <li>Mango Party Decoration</li>
            <li>Office &amp; Corporate Event Management</li>
            <li>Engagement &amp; Anniversary Decor</li>
            <li>Baby Shower Decoration</li>
          </ul>

          <div
            style={{
              background: "#f6f1ea",
              border: "2px solid #c9a227",
              borderRadius: "16px",
              padding: "24px",
              marginBottom: "24px",
            }}
          >
            <h3 style={{ color: "#7a1b3d", fontWeight: "bold", marginBottom: "8px" }}>Contact Us</h3>
            <p style={{ color: "#333", lineHeight: 1.8 }}>
              📍 Darhi Sanghi, Near Dominos, Rahim Yar Khan, Punjab, Pakistan
              <br />
              📞 <a href={`tel:${siteConfig.phoneRaw}`} style={{ color: "#7a1b3d" }}>{siteConfig.phoneDisplay}</a>
              <br />
              📧 <a href={`mailto:${siteConfig.email}`} style={{ color: "#7a1b3d" }}>{siteConfig.email}</a>
              <br />
              📸 Instagram:{" "}
              <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" style={{ color: "#7a1b3d" }}>
                {siteConfig.instagramHandle}
              </a>
            </p>
          </div>

          <a
            href="/"
            style={{ color: "#7a1b3d", fontWeight: "bold", textDecoration: "underline" }}
          >
            ← Back to Events by Momin Home
          </a>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
