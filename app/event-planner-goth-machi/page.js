import { siteConfig } from "@/lib/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Best Event Planner in Goth Machi | Events by Momin",
  description:
    "Events by Momin is Goth Machi's most trusted event planner. Wedding decor, barat stage, walima, mehndi, dholki and birthday party decoration in Goth Machi. Call +92 309 4439441.",
  alternates: { canonical: `${siteConfig.url}/event-planner-goth-machi` },
  openGraph: {
    title: "Best Event Planner in Goth Machi | Events by Momin",
    description: "Goth Machi's trusted event management company. Weddings, barat, walima, mehndi & birthdays. WhatsApp: +92 309 4439441",
    images: [{ url: `${siteConfig.url}/gallery/mehndi-dholki.jpg` }],
  },
};

const citySchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Events by Momin — Event Planner Goth Machi",
  image: `${siteConfig.url}/gallery/mehndi-dholki.jpg`,
  url: `${siteConfig.url}/event-planner-goth-machi`,
  telephone: siteConfig.phoneRaw,
  email: siteConfig.email,
  address: { "@type": "PostalAddress", streetAddress: siteConfig.streetAddress, addressLocality: "Rahim Yar Khan", addressRegion: "Punjab", addressCountry: "PK" },
  areaServed: { "@type": "City", name: "Goth Machi" },
  serviceType: "Event Planning, Wedding Decoration, Mehndi Decoration, Barat Stage, Birthday Party",
  priceRange: "$$",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", ratingCount: "47" },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Event Planner Goth Machi", item: `${siteConfig.url}/event-planner-goth-machi` },
  ],
};

export default function GothMachiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <main className="min-h-screen">
        <div style={{ background: "linear-gradient(120deg,#3a0c1e,#7a1b3d,#a4335c)", padding: "100px 24px 60px", textAlign: "center", color: "#fffdfb" }}>
          <p style={{ fontSize: "0.85rem", marginBottom: "12px", opacity: 0.7 }}>
            <a href="/" style={{ color: "#ecc754", textDecoration: "none" }}>Home</a> &rsaquo; Event Planner Goth Machi
          </p>
          <h1 style={{ fontSize: "clamp(1.8rem,5vw,3.5rem)", fontWeight: "bold", lineHeight: 1.2, marginBottom: "16px" }}>
            Best Event Planner in Goth Machi
          </h1>
          <p style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto 28px", opacity: 0.9 }}>
            Events by Momin brings premium event management and decoration to Goth Machi — weddings, barat stages, walima, mehndi &amp; dholki, birthday parties and gala nights.
          </p>
          <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-block", background: "#c9a227", color: "#3a0c1e", fontWeight: "bold", padding: "14px 32px", borderRadius: "999px", textDecoration: "none", fontSize: "1rem" }}>
            Book on WhatsApp — +92 309 4439441
          </a>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <h2 style={{ color: "#7a1b3d", fontSize: "1.6rem", fontWeight: "bold", marginBottom: "16px" }}>Event Planning & Decoration in Goth Machi</h2>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "16px" }}>
            <strong>Events by Momin</strong> is the go-to event planner and decoration company for Goth Machi. Our team travels on-site for full setup — wedding stages, mehndi nights, barat and walima decor, birthday party decoration and corporate events — all delivered with the same premium finish as our Rahim Yar Khan events.
          </p>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "24px" }}>
            Searching for a <strong>"wedding planner in Goth Machi"</strong>, <strong>"event decorator Goth Machi"</strong> or <strong>"decoration company near me"</strong>? Call or WhatsApp us today for a free quote.
          </p>

          <h2 style={{ color: "#7a1b3d", fontSize: "1.4rem", fontWeight: "bold", marginBottom: "12px" }}>Our Services in Goth Machi</h2>
          <ul style={{ color: "#333", lineHeight: 2.2, paddingLeft: "20px", marginBottom: "24px" }}>
            <li>Wedding Decor &amp; Stage Decoration — Goth Machi</li>
            <li>Barat Stage Decoration Goth Machi</li>
            <li>Walima Reception Setup</li>
            <li>Mehndi &amp; Dholki Night Decoration</li>
            <li>Birthday Party Decoration</li>
            <li>Engagement &amp; Ring Ceremony Decor</li>
            <li>Baby Shower Decoration</li>
            <li>Gala Night &amp; Theme Party Planning</li>
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
            <a href="/wedding-decorator-khanpur" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Wedding Decorator Khanpur</a>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
