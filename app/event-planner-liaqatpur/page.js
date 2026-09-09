import { siteConfig } from "@/lib/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Best Event Planner in Liaqatpur | Events by Momin",
  description:
    "Events by Momin is Liaqatpur's trusted event planner and decoration company. Wedding decor, barat stage, walima, mehndi, gala nights and birthday parties in Liaqatpur. Call +92 309 4439441.",
  alternates: { canonical: `${siteConfig.url}/event-planner-liaqatpur` },
  openGraph: {
    title: "Best Event Planner in Liaqatpur | Events by Momin",
    description: "Liaqatpur's premium event management and decor company. Weddings, barat, walima, mehndi & birthdays. WhatsApp: +92 309 4439441",
    images: [{ url: `${siteConfig.url}/gallery/gala-night.jpg` }],
  },
};

const citySchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Events by Momin — Event Planner Liaqatpur",
  image: `${siteConfig.url}/gallery/gala-night.jpg`,
  url: `${siteConfig.url}/event-planner-liaqatpur`,
  telephone: siteConfig.phoneRaw,
  email: siteConfig.email,
  address: { "@type": "PostalAddress", streetAddress: siteConfig.streetAddress, addressLocality: "Rahim Yar Khan", addressRegion: "Punjab", addressCountry: "PK" },
  areaServed: { "@type": "City", name: "Liaqatpur" },
  serviceType: "Event Planning, Wedding Decoration, Gala Night, Mehndi Decoration, Birthday Party",
  priceRange: "$$",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", ratingCount: "47" },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Event Planner Liaqatpur", item: `${siteConfig.url}/event-planner-liaqatpur` },
  ],
};

export default function LiaqatpurPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <main className="min-h-screen">
        <div style={{ background: "linear-gradient(120deg,#3a0c1e,#7a1b3d,#a4335c)", padding: "100px 24px 60px", textAlign: "center", color: "#fffdfb" }}>
          <p style={{ fontSize: "0.85rem", marginBottom: "12px", opacity: 0.7 }}>
            <a href="/" style={{ color: "#ecc754", textDecoration: "none" }}>Home</a> &rsaquo; Event Planner Liaqatpur
          </p>
          <h1 style={{ fontSize: "clamp(1.8rem,5vw,3.5rem)", fontWeight: "bold", lineHeight: 1.2, marginBottom: "16px" }}>
            Best Event Planner in Liaqatpur
          </h1>
          <p style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto 28px", opacity: 0.9 }}>
            Events by Momin delivers stunning wedding decoration, barat stages, walima receptions, mehndi setups, gala nights and birthday parties in Liaqatpur — on time, every time.
          </p>
          <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-block", background: "#c9a227", color: "#3a0c1e", fontWeight: "bold", padding: "14px 32px", borderRadius: "999px", textDecoration: "none", fontSize: "1rem" }}>
            Book on WhatsApp — +92 309 4439441
          </a>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <h2 style={{ color: "#7a1b3d", fontSize: "1.6rem", fontWeight: "bold", marginBottom: "16px" }}>Event Management & Decoration in Liaqatpur</h2>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "16px" }}>
            <strong>Events by Momin</strong> is a trusted event management and decoration company serving Liaqatpur. From grand wedding stages and barat setups to intimate mehndi nights, walima receptions, gala night events and birthday parties — our team travels to Liaqatpur for full on-ground setup and execution.
          </p>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "24px" }}>
            Looking for an <strong>"event planner in Liaqatpur"</strong>, <strong>"wedding decorator Liaqatpur"</strong> or <strong>"gala night event planner near me"</strong>? Contact Events by Momin for a free, transparent quote.
          </p>

          <h2 style={{ color: "#7a1b3d", fontSize: "1.4rem", fontWeight: "bold", marginBottom: "12px" }}>Our Services in Liaqatpur</h2>
          <ul style={{ color: "#333", lineHeight: 2.2, paddingLeft: "20px", marginBottom: "24px" }}>
            <li>Wedding Decor &amp; Stage Decoration — Liaqatpur</li>
            <li>Barat Stage Decoration Liaqatpur</li>
            <li>Walima Reception Decoration</li>
            <li>Mehndi &amp; Dholki Stage Setup</li>
            <li>Gala Night &amp; VIP Lounge Setup Liaqatpur</li>
            <li>Birthday Party Decoration</li>
            <li>Mango Party &amp; Summer Theme Decoration</li>
            <li>Engagement &amp; Anniversary Decor</li>
          </ul>

          <div style={{ background: "#f6f1ea", border: "2px solid #c9a227", borderRadius: "16px", padding: "24px", marginBottom: "32px" }}>
            <h3 style={{ color: "#7a1b3d", fontWeight: "bold", marginBottom: "8px" }}>Contact Events by Momin</h3>
            <p style={{ color: "#333", lineHeight: 1.8 }}>
              📞 <a href={`tel:${siteConfig.phoneRaw}`} style={{ color: "#7a1b3d" }}>{siteConfig.phoneDisplay}</a><br />
              💬 <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" style={{ color: "#7a1b3d" }}>WhatsApp us</a><br />
              📧 <a href={`mailto:${siteConfig.email}`} style={{ color: "#7a1b3d" }}>{siteConfig.email}</a><br />
              📍 Darhi Sanghi, Near Dominos, Rahim Yar Khan, Punjab
            </p>
          </div>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="/" style={{ color: "#7a1b3d", fontWeight: "bold", textDecoration: "underline" }}>← Back to Home</a>
            <a href="/event-planner-rahim-yar-khan" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Event Planner RYK</a>
            <a href="/event-planner-sadiqabad" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Event Planner Sadiqabad</a>
            <a href="/event-planner-goth-machi" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Event Planner Goth Machi</a>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
