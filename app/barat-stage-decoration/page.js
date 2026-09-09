import { siteConfig } from "@/lib/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Barat Stage Decoration in Rahim Yar Khan & South Punjab | Events by Momin",
  description:
    "Stunning barat stage decoration in Rahim Yar Khan, Sadiqabad, Khanpur and South Punjab. Floral barat stages, premium lighting, royal seating by Events by Momin. Call +92 309 4439441.",
  alternates: { canonical: `${siteConfig.url}/barat-stage-decoration` },
  keywords: ["barat decoration RYK", "barat stage decor", "barat stage design", "groom stage decoration", "barat decoration Sadiqabad", "barat stage South Punjab", "wedding barat decoration Pakistan"],
  openGraph: {
    title: "Barat Stage Decoration in Rahim Yar Khan | Events by Momin",
    description: "Show-stopping barat stages in RYK, Sadiqabad, Khanpur & South Punjab. WhatsApp: +92 309 4439441",
    images: [{ url: `${siteConfig.url}/gallery/barat-stage.jpg` }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Barat Stage Decoration",
  description: "Show-stopping barat stage decoration with premium lighting, floral arrangements and royal seating across Rahim Yar Khan and South Punjab.",
  provider: { "@type": "LocalBusiness", name: siteConfig.name, telephone: siteConfig.phoneRaw, url: siteConfig.url },
  areaServed: ["Rahim Yar Khan", "Sadiqabad", "Khanpur", "Goth Machi", "Liaqatpur"],
  url: `${siteConfig.url}/barat-stage-decoration`,
  image: `${siteConfig.url}/gallery/barat-stage.jpg`,
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Barat Stage Decoration", item: `${siteConfig.url}/barat-stage-decoration` },
  ],
};


export default function BaratPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <main className="min-h-screen">
        <div style={{ background: "linear-gradient(120deg,#3a0c1e,#7a1b3d,#a4335c)", padding: "100px 24px 60px", textAlign: "center", color: "#fffdfb" }}>
          <p style={{ fontSize: "0.85rem", marginBottom: "12px", opacity: 0.7 }}>
            <a href="/" style={{ color: "#ecc754", textDecoration: "none" }}>Home</a> &rsaquo; Barat Stage Decoration
          </p>
          <h1 style={{ fontSize: "clamp(1.8rem,5vw,3.5rem)", fontWeight: "bold", lineHeight: 1.2, marginBottom: "16px" }}>
            Barat Stage Decoration in Rahim Yar Khan &amp; South Punjab
          </h1>
          <p style={{ fontSize: "1.1rem", maxWidth: "620px", margin: "0 auto 28px", opacity: 0.9 }}>
            Grand, show-stopping barat stages — floral arrangements, premium lighting, royal sofa sets and red carpet entrances. Events by Momin delivers barat decoration across RYK, Sadiqabad, Khanpur, Goth Machi and Liaqatpur.
          </p>
          <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-block", background: "#c9a227", color: "#3a0c1e", fontWeight: "bold", padding: "14px 32px", borderRadius: "999px", textDecoration: "none", fontSize: "1rem" }}>
            Get Free Quote on WhatsApp
          </a>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <h2 style={{ color: "#7a1b3d", fontSize: "1.6rem", fontWeight: "bold", marginBottom: "16px" }}>Barat Stage Decoration Services</h2>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "16px" }}>
            <strong>Events by Momin</strong> creates unforgettable barat stages across Rahim Yar Khan, Sadiqabad, Khanpur, Goth Machi and Liaqatpur. Our barat setups feature custom floral walls, LED lighting, premium sofa and seating, red carpet entrance aisles and stunning backdrops — all designed to make your barat the most talked-about event.
          </p>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "24px" }}>
            Searching for <strong>"barat decoration in RYK"</strong>, <strong>"barat stage design Sadiqabad"</strong> or <strong>"groom stage decoration near me"</strong>? WhatsApp us for a free consultation and quote.
          </p>

          <h2 style={{ color: "#7a1b3d", fontSize: "1.4rem", fontWeight: "bold", marginBottom: "12px" }}>What's Included in Our Barat Package</h2>
          <ul style={{ color: "#333", lineHeight: 2.2, paddingLeft: "20px", marginBottom: "24px" }}>
            <li>Custom barat stage design and full installation</li>
            <li>Fresh and artificial floral wall backdrop</li>
            <li>Bridal sofa / royal seating arrangement</li>
            <li>LED and chandelier stage lighting</li>
            <li>Red carpet entrance and aisle decoration</li>
            <li>Guest seating area decoration</li>
            <li>Drapery and ceiling decoration</li>
            <li>Photo booth / backdrop setup</li>
            <li>Full on-ground team — setup and cleanup</li>
          </ul>

          <div style={{ background: "#f6f1ea", border: "2px solid #c9a227", borderRadius: "16px", padding: "24px", marginBottom: "32px" }}>
            <h3 style={{ color: "#7a1b3d", fontWeight: "bold", marginBottom: "8px" }}>Book Barat Decoration</h3>
            <p style={{ color: "#333", lineHeight: 1.8 }}>
              📞 <a href={`tel:${siteConfig.phoneRaw}`} style={{ color: "#7a1b3d" }}>{siteConfig.phoneDisplay}</a><br />
              💬 <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" style={{ color: "#7a1b3d" }}>WhatsApp for instant quote</a><br />
              📧 <a href={`mailto:${siteConfig.email}`} style={{ color: "#7a1b3d" }}>{siteConfig.email}</a>
            </p>
          </div>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="/" style={{ color: "#7a1b3d", fontWeight: "bold", textDecoration: "underline" }}>← Back to Home</a>
            <a href="/mehndi-decoration-rahim-yar-khan" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Mehndi Decoration</a>
            <a href="/walima-decoration" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Walima Decoration</a>
            <a href="/wedding-stage-decoration" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Wedding Stage Decoration</a>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
