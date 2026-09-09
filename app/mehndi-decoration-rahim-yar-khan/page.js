import { siteConfig } from "@/lib/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Mehndi Decoration in Rahim Yar Khan | Dholki Setup | Events by Momin",
  description:
    "Best mehndi and dholki decoration in Rahim Yar Khan, Sadiqabad, Khanpur and South Punjab. Colourful mehndi stage, photo corners, dhol arrangements by Events by Momin. Call +92 309 4439441.",
  alternates: { canonical: `${siteConfig.url}/mehndi-decoration-rahim-yar-khan` },
  keywords: ["mehndi decoration RYK", "mehndi stage setup", "dholki decoration", "mehndi decor near me", "mehndi decorator Rahim Yar Khan", "mehndi night decoration South Punjab", "henna night decoration", "mehndi function decoration"],
  openGraph: {
    title: "Mehndi Decoration in Rahim Yar Khan | Events by Momin",
    description: "Colourful mehndi and dholki decoration in RYK, Sadiqabad, Khanpur & South Punjab. WhatsApp: +92 309 4439441",
    images: [{ url: `${siteConfig.url}/gallery/mehndi-dholki.jpg` }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mehndi & Dholki Decoration",
  description: "Vibrant mehndi and dholki stage decoration with colourful themes, dhol arrangements, photo corners and custom backdrops across Rahim Yar Khan and South Punjab.",
  provider: {
    "@type": "LocalBusiness",
    name: siteConfig.name,
    telephone: siteConfig.phoneRaw,
    url: siteConfig.url,
    address: { "@type": "PostalAddress", addressLocality: "Rahim Yar Khan", addressRegion: "Punjab", addressCountry: "PK" },
  },
  areaServed: ["Rahim Yar Khan", "Sadiqabad", "Khanpur", "Goth Machi", "Liaqatpur"],
  url: `${siteConfig.url}/mehndi-decoration-rahim-yar-khan`,
  image: `${siteConfig.url}/gallery/mehndi-dholki.jpg`,
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Mehndi Decoration RYK", item: `${siteConfig.url}/mehndi-decoration-rahim-yar-khan` },
  ],
};


export default function MehndiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <main className="min-h-screen">
        <div style={{ background: "linear-gradient(120deg,#3a0c1e,#7a1b3d,#a4335c)", padding: "100px 24px 60px", textAlign: "center", color: "#fffdfb" }}>
          <p style={{ fontSize: "0.85rem", marginBottom: "12px", opacity: 0.7 }}>
            <a href="/" style={{ color: "#ecc754", textDecoration: "none" }}>Home</a> &rsaquo; Mehndi Decoration Rahim Yar Khan
          </p>
          <h1 style={{ fontSize: "clamp(1.8rem,5vw,3.5rem)", fontWeight: "bold", lineHeight: 1.2, marginBottom: "16px" }}>
            Mehndi &amp; Dholki Decoration in Rahim Yar Khan
          </h1>
          <p style={{ fontSize: "1.1rem", maxWidth: "620px", margin: "0 auto 28px", opacity: 0.9 }}>
            Vibrant, colourful mehndi stages, dholki setups, photo corners and custom backdrops — designed and installed by Events by Momin across RYK, Sadiqabad, Khanpur and South Punjab.
          </p>
          <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-block", background: "#c9a227", color: "#3a0c1e", fontWeight: "bold", padding: "14px 32px", borderRadius: "999px", textDecoration: "none", fontSize: "1rem" }}>
            Get Free Quote on WhatsApp
          </a>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <h2 style={{ color: "#7a1b3d", fontSize: "1.6rem", fontWeight: "bold", marginBottom: "16px" }}>Mehndi Decoration Services in South Punjab</h2>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "16px" }}>
            <strong>Events by Momin</strong> specialises in mehndi and dholki decoration across Rahim Yar Khan, Sadiqabad, Khanpur, Goth Machi and Liaqatpur. We design custom mehndi stages with rich colour themes, floral mandala decor, string lights, dhol arrangements and Instagram-worthy photo corners — making your mehndi night the most talked-about function of the wedding.
          </p>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "24px" }}>
            Whether you want a rustic mehndi theme, a Bollywood-style mayun setup or a modern colourful dholki night — our team handles every detail from concept to cleanup.
          </p>

          <h2 style={{ color: "#7a1b3d", fontSize: "1.4rem", fontWeight: "bold", marginBottom: "12px" }}>What's Included in Our Mehndi Package</h2>
          <ul style={{ color: "#333", lineHeight: 2.2, paddingLeft: "20px", marginBottom: "24px" }}>
            <li>Custom mehndi &amp; dholki stage design and installation</li>
            <li>Colourful backdrop and photo wall</li>
            <li>Flower wall, string lights and fairy light canopy</li>
            <li>Floor seating, cushions and mandala rugs</li>
            <li>Balloon arch and floral decoration</li>
            <li>Photo corner / photo booth setup</li>
            <li>Dhol arrangement &amp; coordination</li>
            <li>Full cleanup after the event</li>
          </ul>

          <h2 style={{ color: "#7a1b3d", fontSize: "1.3rem", fontWeight: "bold", marginBottom: "12px" }}>Areas We Serve for Mehndi Decoration</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "28px" }}>
            {["Rahim Yar Khan (RYK)","Sadiqabad","Khanpur","Goth Machi","Liaqatpur","Ahmadpur East"].map(c => (
              <span key={c} style={{ background: "#f6f1ea", border: "1px solid #c9a227", borderRadius: "999px", padding: "6px 16px", color: "#7a1b3d", fontSize: "0.9rem", fontWeight: "600" }}>{c}</span>
            ))}
          </div>

          <div style={{ background: "#f6f1ea", border: "2px solid #c9a227", borderRadius: "16px", padding: "24px", marginBottom: "32px" }}>
            <h3 style={{ color: "#7a1b3d", fontWeight: "bold", marginBottom: "8px" }}>Book Your Mehndi Decoration</h3>
            <p style={{ color: "#333", lineHeight: 1.8 }}>
              📞 <a href={`tel:${siteConfig.phoneRaw}`} style={{ color: "#7a1b3d" }}>{siteConfig.phoneDisplay}</a><br />
              💬 <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" style={{ color: "#7a1b3d" }}>WhatsApp for instant quote</a><br />
              📧 <a href={`mailto:${siteConfig.email}`} style={{ color: "#7a1b3d" }}>{siteConfig.email}</a>
            </p>
          </div>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="/" style={{ color: "#7a1b3d", fontWeight: "bold", textDecoration: "underline" }}>← Back to Home</a>
            <a href="/barat-stage-decoration" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Barat Stage Decoration</a>
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
