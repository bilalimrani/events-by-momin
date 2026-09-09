import { siteConfig } from "@/lib/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Walima Decoration in Rahim Yar Khan & South Punjab | Events by Momin",
  description:
    "Elegant walima decoration and reception setup in Rahim Yar Khan, Sadiqabad, Khanpur and South Punjab. Royal walima stages, luxury backdrops and ambient lighting by Events by Momin. Call +92 309 4439441.",
  alternates: { canonical: `${siteConfig.url}/walima-decoration` },
  keywords: ["walima decoration", "walima stage RYK", "walima reception decor", "valima decoration", "walima decoration Sadiqabad", "walima reception South Punjab"],
  openGraph: {
    title: "Walima Decoration in Rahim Yar Khan | Events by Momin",
    description: "Royal walima stages and reception decoration in RYK, Sadiqabad, Khanpur & South Punjab. WhatsApp: +92 309 4439441",
    images: [{ url: `${siteConfig.url}/gallery/walima-reception.jpg` }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Walima Decoration",
  description: "Regal walima reception decoration with luxury backdrops, centrepieces and ambient lighting across Rahim Yar Khan and South Punjab.",
  provider: { "@type": "LocalBusiness", name: siteConfig.name, telephone: siteConfig.phoneRaw, url: siteConfig.url },
  areaServed: ["Rahim Yar Khan", "Sadiqabad", "Khanpur", "Goth Machi", "Liaqatpur"],
  url: `${siteConfig.url}/walima-decoration`,
  image: `${siteConfig.url}/gallery/walima-reception.jpg`,
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Walima Decoration", item: `${siteConfig.url}/walima-decoration` },
  ],
};


export default function WalimaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <main className="min-h-screen">
        <div style={{ background: "linear-gradient(120deg,#3a0c1e,#7a1b3d,#a4335c)", padding: "100px 24px 60px", textAlign: "center", color: "#fffdfb" }}>
          <p style={{ fontSize: "0.85rem", marginBottom: "12px", opacity: 0.7 }}>
            <a href="/" style={{ color: "#ecc754", textDecoration: "none" }}>Home</a> &rsaquo; Walima Decoration
          </p>
          <h1 style={{ fontSize: "clamp(1.8rem,5vw,3.5rem)", fontWeight: "bold", lineHeight: 1.2, marginBottom: "16px" }}>
            Walima Decoration in Rahim Yar Khan &amp; South Punjab
          </h1>
          <p style={{ fontSize: "1.1rem", maxWidth: "620px", margin: "0 auto 28px", opacity: 0.9 }}>
            Royal walima receptions with luxury backdrops, elegant centrepieces, candlelight decor and premium stage setups — delivered by Events by Momin across RYK, Sadiqabad, Khanpur and South Punjab.
          </p>
          <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-block", background: "#c9a227", color: "#3a0c1e", fontWeight: "bold", padding: "14px 32px", borderRadius: "999px", textDecoration: "none", fontSize: "1rem" }}>
            Get Free Quote on WhatsApp
          </a>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <h2 style={{ color: "#7a1b3d", fontSize: "1.6rem", fontWeight: "bold", marginBottom: "16px" }}>Walima Reception Decoration Services</h2>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "16px" }}>
            <strong>Events by Momin</strong> creates elegant walima receptions across Rahim Yar Khan, Sadiqabad, Khanpur, Goth Machi and Liaqatpur. Our walima setups feature royal stage backdrops, white and gold floral arrangements, candlelight centrepieces, premium dining hall decoration and ambient lighting — creating the perfect atmosphere for your valima celebration.
          </p>

          <h2 style={{ color: "#7a1b3d", fontSize: "1.4rem", fontWeight: "bold", marginBottom: "12px" }}>What's Included in Our Walima Package</h2>
          <ul style={{ color: "#333", lineHeight: 2.2, paddingLeft: "20px", marginBottom: "24px" }}>
            <li>Custom walima stage and backdrop design</li>
            <li>Floral centrepieces and table decoration</li>
            <li>Dining hall and guest seating decoration</li>
            <li>Ambient lighting and chandeliers</li>
            <li>Entrance and reception area decoration</li>
            <li>Royal sofa and bridal seating</li>
            <li>Full on-ground setup and cleanup team</li>
          </ul>

          <div style={{ background: "#f6f1ea", border: "2px solid #c9a227", borderRadius: "16px", padding: "24px", marginBottom: "32px" }}>
            <h3 style={{ color: "#7a1b3d", fontWeight: "bold", marginBottom: "8px" }}>Book Walima Decoration</h3>
            <p style={{ color: "#333", lineHeight: 1.8 }}>
              📞 <a href={`tel:${siteConfig.phoneRaw}`} style={{ color: "#7a1b3d" }}>{siteConfig.phoneDisplay}</a><br />
              💬 <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" style={{ color: "#7a1b3d" }}>WhatsApp for instant quote</a><br />
              📧 <a href={`mailto:${siteConfig.email}`} style={{ color: "#7a1b3d" }}>{siteConfig.email}</a>
            </p>
          </div>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="/" style={{ color: "#7a1b3d", fontWeight: "bold", textDecoration: "underline" }}>← Back to Home</a>
            <a href="/barat-stage-decoration" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Barat Stage Decoration</a>
            <a href="/mehndi-decoration-rahim-yar-khan" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Mehndi Decoration</a>
            <a href="/wedding-stage-decoration" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Wedding Stage Decoration</a>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
