import { siteConfig } from "@/lib/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Best Event Planner in Sadiqabad | Events by Momin",
  description:
    "Events by Momin is Sadiqabad's top-rated event planner and decoration company. Wedding decor, barat stage, walima, mehndi, dholki, birthday and corporate events in Sadiqabad. Call +92 309 4439441.",
  alternates: {
    canonical: `${siteConfig.url}/event-planner-sadiqabad`,
  },
  openGraph: {
    title: "Best Event Planner in Sadiqabad | Events by Momin",
    description:
      "Sadiqabad's trusted event management and decor company. Weddings, barat, walima, mehndi, birthdays and gala nights. WhatsApp: +92 309 4439441",
    images: [{ url: `${siteConfig.url}/gallery/barat-stage.jpg` }],
  },
};

const citySchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Events by Momin — Event Planner Sadiqabad",
  image: `${siteConfig.url}/gallery/barat-stage.jpg`,
  url: `${siteConfig.url}/event-planner-sadiqabad`,
  telephone: siteConfig.phoneRaw,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.streetAddress,
    addressLocality: "Rahim Yar Khan",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  areaServed: { "@type": "City", name: "Sadiqabad" },
  serviceType: "Event Planning, Wedding Decoration, Mehndi Decoration, Barat Stage, Birthday Party",
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    ratingCount: "47",
  },
};

export default function SadiqabadPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
      />
      <Navbar />
      <main className="min-h-screen">
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
            Best Event Planner in Sadiqabad
          </h1>
          <p style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto 28px", opacity: 0.9 }}>
            Events by Momin brings premium event management and decoration to Sadiqabad — weddings,
            barat stages, walima, mehndi &amp; dholki, birthday parties, gala nights and corporate
            events.
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
            Event Planning &amp; Decoration Services in Sadiqabad
          </h2>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "16px" }}>
            <strong>Events by Momin</strong> is one of the best-rated event planners and decorators
            serving Sadiqabad (SDK). Our team regularly travels to Sadiqabad for wedding decor, barat
            stages, walima receptions, mehndi nights, birthday parties and corporate events — with the
            same premium quality as our Rahim Yar Khan setups.
          </p>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "24px" }}>
            Whether you&apos;re looking for a "wedding planner in Sadiqabad," "event organizer
            Sadiqabad," or "decoration company near me" — Events by Momin is the name to call. We
            handle everything from theme design to on-ground execution.
          </p>

          <h2 style={{ color: "#7a1b3d", fontSize: "1.4rem", fontWeight: "bold", marginBottom: "12px" }}>
            Our Services in Sadiqabad
          </h2>
          <ul style={{ color: "#333", lineHeight: 2, paddingLeft: "20px", marginBottom: "24px" }}>
            <li>Wedding Decor &amp; Planning in Sadiqabad</li>
            <li>Barat Stage Decoration Sadiqabad</li>
            <li>Walima Reception Decoration</li>
            <li>Mehndi &amp; Dholki Stage Setup Sadiqabad</li>
            <li>Birthday Party Decoration</li>
            <li>Gala Night &amp; Theme Party Planning</li>
            <li>Office &amp; Corporate Event Management</li>
            <li>Engagement &amp; Anniversary Decor</li>
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
