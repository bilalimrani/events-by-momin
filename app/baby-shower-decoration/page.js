import { siteConfig } from "@/lib/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Baby Shower Decoration in Rahim Yar Khan & South Punjab | Events by Momin",
  description:
    "Sweet and beautiful baby shower decoration in Rahim Yar Khan, Sadiqabad, Khanpur and South Punjab. Welcome baby setups, aqeeqa decoration and baby shower parties by Events by Momin. Call +92 309 4439441.",
  alternates: { canonical: `${siteConfig.url}/baby-shower-decoration` },
  keywords: ["baby shower decoration RYK", "baby shower planner", "welcome baby party decoration", "aqeeqa decoration", "baby shower decoration South Punjab", "baby shower Rahim Yar Khan", "gender reveal decoration Pakistan"],
  openGraph: {
    title: "Baby Shower Decoration in Rahim Yar Khan | Events by Momin",
    description: "Sweet baby shower and welcome baby decoration in RYK, Sadiqabad, Khanpur & South Punjab. WhatsApp: +92 309 4439441",
    images: [{ url: `${siteConfig.url}/gallery/blue-mehndi-lounge.jpg` }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Baby Shower & Aqeeqa Decoration",
  description: "Sweet, thoughtfully designed baby shower, welcome-baby and aqeeqa decoration for the whole family across Rahim Yar Khan and South Punjab.",
  provider: { "@type": "LocalBusiness", name: siteConfig.name, telephone: siteConfig.phoneRaw, url: siteConfig.url },
  areaServed: ["Rahim Yar Khan", "Sadiqabad", "Khanpur", "Goth Machi", "Liaqatpur"],
  url: `${siteConfig.url}/baby-shower-decoration`,
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Baby Shower Decoration", item: `${siteConfig.url}/baby-shower-decoration` },
  ],
};


export default function BabyShowerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <main className="min-h-screen">
        <div style={{ background: "linear-gradient(120deg,#3a0c1e,#7a1b3d,#a4335c)", padding: "100px 24px 60px", textAlign: "center", color: "#fffdfb" }}>
          <p style={{ fontSize: "0.85rem", marginBottom: "12px", opacity: 0.7 }}>
            <a href="/" style={{ color: "#ecc754", textDecoration: "none" }}>Home</a> &rsaquo; Baby Shower Decoration
          </p>
          <h1 style={{ fontSize: "clamp(1.8rem,5vw,3.5rem)", fontWeight: "bold", lineHeight: 1.2, marginBottom: "16px" }}>
            Baby Shower &amp; Aqeeqa Decoration in Rahim Yar Khan
          </h1>
          <p style={{ fontSize: "1.1rem", maxWidth: "620px", margin: "0 auto 28px", opacity: 0.9 }}>
            Sweet, beautiful baby shower and welcome-baby decoration — soft colours, balloon arches, themed setups and aqeeqa decor. Events by Momin serves RYK, Sadiqabad, Khanpur, Goth Machi and Liaqatpur.
          </p>
          <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-block", background: "#c9a227", color: "#3a0c1e", fontWeight: "bold", padding: "14px 32px", borderRadius: "999px", textDecoration: "none", fontSize: "1rem" }}>
            Plan My Baby Shower
          </a>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <h2 style={{ color: "#7a1b3d", fontSize: "1.6rem", fontWeight: "bold", marginBottom: "16px" }}>Baby Shower Decoration Services in South Punjab</h2>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "16px" }}>
            <strong>Events by Momin</strong> creates sweet, thoughtful baby shower and aqeeqa setups across Rahim Yar Khan, Sadiqabad, Khanpur, Goth Machi and Liaqatpur. From pink-and-gold baby girl themes to blue-and-white baby boy setups — or a neutral welcome-baby celebration — our team designs beautiful, Instagram-worthy events that the whole family will love.
          </p>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "24px" }}>
            Looking for <strong>&quot;baby shower decoration in RYK&quot;</strong>, <strong>&quot;aqeeqa decoration near me&quot;</strong> or <strong>&quot;welcome baby party planner South Punjab&quot;</strong>? WhatsApp us for a free quote!
          </p>

          <h2 style={{ color: "#7a1b3d", fontSize: "1.4rem", fontWeight: "bold", marginBottom: "12px" }}>Baby Shower Decoration Includes</h2>
          <ul style={{ color: "#333", lineHeight: 2.2, paddingLeft: "20px", marginBottom: "24px" }}>
            <li>Custom baby shower backdrop &amp; stage</li>
            <li>Balloon arch &amp; balloon bouquets</li>
            <li>Welcome baby sign &amp; props</li>
            <li>Dessert / cake table decoration</li>
            <li>Soft lounge seating &amp; cushion decor</li>
            <li>Photo booth &amp; selfie corner</li>
            <li>Aqeeqa ceremony decoration</li>
            <li>Gender reveal party setup</li>
            <li>Full setup and cleanup team</li>
          </ul>

          <div style={{ background: "#f6f1ea", border: "2px solid #c9a227", borderRadius: "16px", padding: "24px", marginBottom: "32px" }}>
            <h3 style={{ color: "#7a1b3d", fontWeight: "bold", marginBottom: "8px" }}>Book Baby Shower Decoration</h3>
            <p style={{ color: "#333", lineHeight: 1.8 }}>
              📞 <a href={`tel:${siteConfig.phoneRaw}`} style={{ color: "#7a1b3d" }}>{siteConfig.phoneDisplay}</a><br />
              💬 <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" style={{ color: "#7a1b3d" }}>WhatsApp for instant quote</a><br />
              📧 <a href={`mailto:${siteConfig.email}`} style={{ color: "#7a1b3d" }}>{siteConfig.email}</a>
            </p>
          </div>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="/" style={{ color: "#7a1b3d", fontWeight: "bold", textDecoration: "underline" }}>← Back to Home</a>
            <a href="/engagement-decoration" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Engagement Decoration</a>
            <a href="/birthday-party-planner-rahim-yar-khan" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Birthday Party Planner</a>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
