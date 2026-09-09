import { siteConfig } from "@/lib/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Wedding Stage Decoration in Rahim Yar Khan & South Punjab | Events by Momin",
  description:
    "Luxury wedding stage decoration and bridal stage design in Rahim Yar Khan, Sadiqabad, Khanpur and South Punjab. Floral mandaps, LED stages, flower walls by Events by Momin. Call +92 309 4439441.",
  alternates: { canonical: `${siteConfig.url}/wedding-stage-decoration` },
  keywords: ["wedding stage decoration", "wedding stage design", "bridal stage decor", "wedding flower decoration", "wedding decor Rahim Yar Khan", "luxury wedding decor Pakistan", "affordable wedding decor Pakistan", "wedding backdrop design"],
  openGraph: {
    title: "Wedding Stage Decoration in Rahim Yar Khan | Events by Momin",
    description: "Luxury wedding stage and bridal decor in RYK, Sadiqabad, Khanpur & South Punjab. WhatsApp: +92 309 4439441",
    images: [{ url: `${siteConfig.url}/gallery/wedding-decor.jpg` }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Wedding Stage Decoration & Bridal Decor",
  description: "Elegant end-to-end wedding decoration — stages, mandaps, drapery, floral design and full-day coordination across Rahim Yar Khan and South Punjab.",
  provider: { "@type": "LocalBusiness", name: siteConfig.name, telephone: siteConfig.phoneRaw, url: siteConfig.url },
  areaServed: ["Rahim Yar Khan", "Sadiqabad", "Khanpur", "Goth Machi", "Liaqatpur"],
  url: `${siteConfig.url}/wedding-stage-decoration`,
  image: `${siteConfig.url}/gallery/wedding-decor.jpg`,
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Wedding Stage Decoration", item: `${siteConfig.url}/wedding-stage-decoration` },
  ],
};


export default function WeddingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <main className="min-h-screen">
        <div style={{ background: "linear-gradient(120deg,#3a0c1e,#7a1b3d,#a4335c)", padding: "100px 24px 60px", textAlign: "center", color: "#fffdfb" }}>
          <p style={{ fontSize: "0.85rem", marginBottom: "12px", opacity: 0.7 }}>
            <a href="/" style={{ color: "#ecc754", textDecoration: "none" }}>Home</a> &rsaquo; Wedding Stage Decoration
          </p>
          <h1 style={{ fontSize: "clamp(1.8rem,5vw,3.5rem)", fontWeight: "bold", lineHeight: 1.2, marginBottom: "16px" }}>
            Wedding Stage Decoration in Rahim Yar Khan &amp; South Punjab
          </h1>
          <p style={{ fontSize: "1.1rem", maxWidth: "620px", margin: "0 auto 28px", opacity: 0.9 }}>
            Dreamy bridal stages, floral mandaps, flower walls, LED backdrops and complete wedding decor — Events by Momin is South Punjab&apos;s most trusted wedding decorator, serving RYK, Sadiqabad, Khanpur, Goth Machi and Liaqatpur.
          </p>
          <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-block", background: "#c9a227", color: "#3a0c1e", fontWeight: "bold", padding: "14px 32px", borderRadius: "999px", textDecoration: "none", fontSize: "1rem" }}>
            Book Wedding Decoration
          </a>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <h2 style={{ color: "#7a1b3d", fontSize: "1.6rem", fontWeight: "bold", marginBottom: "16px" }}>Wedding Decoration Services in South Punjab</h2>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "16px" }}>
            <strong>Events by Momin</strong> is a full-service wedding decorator serving Rahim Yar Khan, Sadiqabad, Khanpur, Goth Machi and Liaqatpur. We handle every element of your wedding decor — from the bridal stage and floral mandap to the entrance aisle, guest lounge and dining hall — so you can relax and enjoy your big day.
          </p>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "24px" }}>
            Searching for <strong>"wedding stage decoration near me"</strong>, <strong>"best wedding planner in RYK"</strong> or <strong>"luxury wedding decor Pakistan"</strong>? Contact us for a free consultation.
          </p>

          <h2 style={{ color: "#7a1b3d", fontSize: "1.4rem", fontWeight: "bold", marginBottom: "12px" }}>Our Wedding Decoration Services</h2>
          <ul style={{ color: "#333", lineHeight: 2.2, paddingLeft: "20px", marginBottom: "24px" }}>
            <li>Bridal &amp; Nikah Stage Decoration</li>
            <li>Floral Mandap &amp; Flower Wall Design</li>
            <li>LED Stage &amp; Chandelier Lighting</li>
            <li>Red Carpet Entrance &amp; Aisle Decoration</li>
            <li>Wedding Backdrop &amp; Photo Booth</li>
            <li>Guest Lounge Seating &amp; Decor</li>
            <li>Reception &amp; Dining Hall Decoration</li>
            <li>Fresh &amp; Artificial Floral Arrangements</li>
            <li>Drapery &amp; Ceiling Decoration</li>
            <li>Complete Wedding Management</li>
          </ul>

          <div style={{ background: "#f6f1ea", border: "2px solid #c9a227", borderRadius: "16px", padding: "24px", marginBottom: "32px" }}>
            <h3 style={{ color: "#7a1b3d", fontWeight: "bold", marginBottom: "8px" }}>Book Wedding Decoration</h3>
            <p style={{ color: "#333", lineHeight: 1.8 }}>
              📞 <a href={`tel:${siteConfig.phoneRaw}`} style={{ color: "#7a1b3d" }}>{siteConfig.phoneDisplay}</a><br />
              💬 <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" style={{ color: "#7a1b3d" }}>WhatsApp for free consultation</a><br />
              📧 <a href={`mailto:${siteConfig.email}`} style={{ color: "#7a1b3d" }}>{siteConfig.email}</a>
            </p>
          </div>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="/" style={{ color: "#7a1b3d", fontWeight: "bold", textDecoration: "underline" }}>← Back to Home</a>
            <a href="/barat-stage-decoration" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Barat Stage Decoration</a>
            <a href="/walima-decoration" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Walima Decoration</a>
            <a href="/mehndi-decoration-rahim-yar-khan" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Mehndi Decoration</a>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
