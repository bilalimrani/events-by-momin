import { siteConfig } from "@/lib/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Wedding Decorator & Event Planner in Khanpur | Events by Momin",
  description:
    "Events by Momin provides wedding decoration, barat stage, walima, mehndi, dholki and birthday party planning in Khanpur. Best event management company near Khanpur. Call +92 309 4439441.",
  alternates: {
    canonical: `${siteConfig.url}/wedding-decorator-khanpur`,
  },
  openGraph: {
    title: "Wedding Decorator & Event Planner in Khanpur | Events by Momin",
    description:
      "Premium wedding decoration and event management in Khanpur. Weddings, barat, walima, mehndi & birthdays. WhatsApp: +92 309 4439441",
    images: [{ url: `${siteConfig.url}/gallery/walima-reception.jpg` }],
  },
};

const citySchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Events by Momin — Wedding Decorator Khanpur",
  image: `${siteConfig.url}/gallery/walima-reception.jpg`,
  url: `${siteConfig.url}/wedding-decorator-khanpur`,
  telephone: siteConfig.phoneRaw,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.streetAddress,
    addressLocality: "Rahim Yar Khan",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  areaServed: { "@type": "City", name: "Khanpur" },
  serviceType: "Wedding Decoration, Event Planning, Barat Stage, Walima Decoration, Mehndi Setup",
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    ratingCount: "47",
  },
};

export default function KhanpurPage() {
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
            Wedding Decorator &amp; Event Planner in Khanpur
          </h1>
          <p style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto 28px", opacity: 0.9 }}>
            Events by Momin delivers stunning wedding decor, barat stages, walima receptions, mehndi
            setups and birthday parties in Khanpur — on time, on budget.
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
            Event Decoration Services in Khanpur
          </h2>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "16px" }}>
            <strong>Events by Momin</strong> is a trusted wedding decorator and event planner
            serving Khanpur. From bridal stage decor and barat setups to walima receptions, mehndi
            nights, birthday parties and office functions — our on-ground team travels to Khanpur for
            full setup and execution.
          </p>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "24px" }}>
            Looking for a "wedding decorator in Khanpur," "event planner near me" or "decoration
            company Khanpur"? Call or WhatsApp us and we&apos;ll share our portfolio and packages.
          </p>

          <h2 style={{ color: "#7a1b3d", fontSize: "1.4rem", fontWeight: "bold", marginBottom: "12px" }}>
            Our Services in Khanpur
          </h2>
          <ul style={{ color: "#333", lineHeight: 2, paddingLeft: "20px", marginBottom: "24px" }}>
            <li>Wedding Decor &amp; Stage Decoration in Khanpur</li>
            <li>Barat Stage Decoration Khanpur</li>
            <li>Walima Reception Decoration</li>
            <li>Mehndi &amp; Dholki Night Setup</li>
            <li>Birthday Party Decoration Khanpur</li>
            <li>Engagement &amp; Anniversary Decor</li>
            <li>Gala Night &amp; Theme Party Planning</li>
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
