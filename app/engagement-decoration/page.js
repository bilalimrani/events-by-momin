import { siteConfig } from "@/lib/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Engagement & Ring Ceremony Decoration in Rahim Yar Khan | Events by Momin",
  description:
    "Engagement & mangni decoration near you in RYK, Sadiqabad & Khanpur. Romantic stages, floral arches, ring ceremony & anniversary setups. WhatsApp for booking: +92 309 4439441.",
  alternates: { canonical: `${siteConfig.url}/engagement-decoration` },
  keywords: ["engagement decoration", "ring ceremony decoration", "engagement stage RYK", "engagement decorator Rahim Yar Khan", "ring ceremony decoration South Punjab", "anniversary decoration", "bridal shower decoration", "engagement decoration near me RYK", "mangni decoration", "mangni ka stage", "mangni decoration near me", "ring ceremony near me RYK", "nisbat decoration", "engagement stage near me South Punjab"],
  openGraph: {
    title: "Engagement & Ring Ceremony Decoration in RYK | Events by Momin",
    description: "Romantic engagement and ring ceremony decoration in RYK, Sadiqabad, Khanpur & South Punjab. WhatsApp: +92 309 4439441",
    images: [{ url: `${siteConfig.url}/gallery/lounge-seating.jpg` }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Engagement & Ring Ceremony Decoration",
  description: "Romantic engagement and anniversary decor with elegant floral arches and ring ceremony stages across Rahim Yar Khan and South Punjab.",
  provider: { "@type": "LocalBusiness", name: siteConfig.name, telephone: siteConfig.phoneRaw, url: siteConfig.url },
  areaServed: ["Rahim Yar Khan", "Sadiqabad", "Khanpur", "Goth Machi", "Liaqatpur"],
  url: `${siteConfig.url}/engagement-decoration`,
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Engagement Decoration", item: `${siteConfig.url}/engagement-decoration` },
  ],
};


export default function EngagementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <main className="min-h-screen">
        <div style={{ background: "linear-gradient(120deg,#3a0c1e,#7a1b3d,#a4335c)", padding: "100px 24px 60px", textAlign: "center", color: "#fffdfb" }}>
          <p style={{ fontSize: "0.85rem", marginBottom: "12px", opacity: 0.7 }}>
            <a href="/" style={{ color: "#ecc754", textDecoration: "none" }}>Home</a> &rsaquo; Engagement &amp; Ring Ceremony Decoration
          </p>
          <h1 style={{ fontSize: "clamp(1.8rem,5vw,3.5rem)", fontWeight: "bold", lineHeight: 1.2, marginBottom: "16px" }}>
            Engagement &amp; Ring Ceremony Decoration in Rahim Yar Khan
          </h1>
          <p style={{ fontSize: "1.1rem", maxWidth: "620px", margin: "0 auto 28px", opacity: 0.9 }}>
            Romantic, elegant engagement decor and ring ceremony stages — floral arches, candles, fairy lights and beautiful backdrops. Events by Momin serves RYK, Sadiqabad, Khanpur, Goth Machi and Liaqatpur.
          </p>
          <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-block", background: "#c9a227", color: "#3a0c1e", fontWeight: "bold", padding: "14px 32px", borderRadius: "999px", textDecoration: "none", fontSize: "1rem" }}>
            Book Engagement Decoration
          </a>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <h2 style={{ color: "#7a1b3d", fontSize: "1.6rem", fontWeight: "bold", marginBottom: "16px" }}>Engagement &amp; Ring Ceremony Decoration Services</h2>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "16px" }}>
            <strong>Events by Momin</strong> creates beautiful engagement and ring ceremony decoration across Rahim Yar Khan, Sadiqabad, Khanpur, Goth Machi and Liaqatpur. From intimate home engagements to grand ring ceremony halls — we design romantic setups with floral arches, fairy light backdrops, elegant lounge seating and customised decor that makes the moment unforgettable.
          </p>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "24px" }}>
            Also looking for <strong>&quot;anniversary decoration near me&quot;</strong>, <strong>&quot;bridal shower decoration RYK&quot;</strong> or <strong>&quot;ring ceremony decoration Sadiqabad&quot;</strong>? We cover all of these!
          </p>

          <h2 style={{ color: "#7a1b3d", fontSize: "1.4rem", fontWeight: "bold", marginBottom: "12px" }}>Engagement Decoration Includes</h2>
          <ul style={{ color: "#333", lineHeight: 2.2, paddingLeft: "20px", marginBottom: "24px" }}>
            <li>Custom engagement stage &amp; backdrop</li>
            <li>Floral arch &amp; flower wall decoration</li>
            <li>Fairy light &amp; candle ambiance</li>
            <li>Lounge seating &amp; table decor</li>
            <li>Ring ceremony table &amp; tray decoration</li>
            <li>Photo booth &amp; selfie corner</li>
            <li>Balloon decoration</li>
            <li>Anniversary &amp; bridal shower add-ons</li>
          </ul>

          <div style={{ background: "#f6f1ea", border: "2px solid #c9a227", borderRadius: "16px", padding: "24px", marginBottom: "32px" }}>
            <h3 style={{ color: "#7a1b3d", fontWeight: "bold", marginBottom: "8px" }}>Book Engagement Decoration</h3>
            <p style={{ color: "#333", lineHeight: 1.8 }}>
              📞 <a href={`tel:${siteConfig.phoneRaw}`} style={{ color: "#7a1b3d" }}>{siteConfig.phoneDisplay}</a><br />
              💬 <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" style={{ color: "#7a1b3d" }}>WhatsApp for instant quote</a><br />
              📧 <a href={`mailto:${siteConfig.email}`} style={{ color: "#7a1b3d" }}>{siteConfig.email}</a>
            </p>
          </div>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="/" style={{ color: "#7a1b3d", fontWeight: "bold", textDecoration: "underline" }}>← Back to Home</a>
            <a href="/mehndi-decoration-rahim-yar-khan" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Mehndi Decoration</a>
            <a href="/baby-shower-decoration" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Baby Shower Decoration</a>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
