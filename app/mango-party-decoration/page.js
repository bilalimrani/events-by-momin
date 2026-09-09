import { siteConfig } from "@/lib/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Mango Party Decoration & Theme in South Punjab | Events by Momin",
  description:
    "Best mango party decoration and summer theme setups in Rahim Yar Khan, Sadiqabad, Khanpur and South Punjab. Fun seasonal party planners — Events by Momin. Call +92 309 4439441.",
  alternates: { canonical: `${siteConfig.url}/mango-party-decoration` },
  keywords: ["mango party decoration", "mango party theme", "summer theme party decoration", "mango party RYK", "mango party South Punjab", "seasonal party decoration Pakistan", "mango party planner"],
  openGraph: {
    title: "Mango Party Decoration in South Punjab | Events by Momin",
    description: "Fun mango party and summer theme decoration in RYK, Sadiqabad, Khanpur & South Punjab. WhatsApp: +92 309 4439441",
    images: [{ url: `${siteConfig.url}/gallery/garden-lounge-night.jpg` }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mango Party & Summer Theme Decoration",
  description: "Refreshing mango-party and summer-themed decor perfect for seasonal get-togethers across South Punjab.",
  provider: { "@type": "LocalBusiness", name: siteConfig.name, telephone: siteConfig.phoneRaw, url: siteConfig.url },
  areaServed: ["Rahim Yar Khan", "Sadiqabad", "Khanpur", "Goth Machi", "Liaqatpur"],
  url: `${siteConfig.url}/mango-party-decoration`,
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Mango Party Decoration", item: `${siteConfig.url}/mango-party-decoration` },
  ],
};


export default function MangoPartyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <main className="min-h-screen">
        <div style={{ background: "linear-gradient(120deg,#3a0c1e,#7a1b3d,#a4335c)", padding: "100px 24px 60px", textAlign: "center", color: "#fffdfb" }}>
          <p style={{ fontSize: "0.85rem", marginBottom: "12px", opacity: 0.7 }}>
            <a href="/" style={{ color: "#ecc754", textDecoration: "none" }}>Home</a> &rsaquo; Mango Party Decoration
          </p>
          <h1 style={{ fontSize: "clamp(1.8rem,5vw,3.5rem)", fontWeight: "bold", lineHeight: 1.2, marginBottom: "16px" }}>
            Mango Party Decoration &amp; Summer Theme in South Punjab
          </h1>
          <p style={{ fontSize: "1.1rem", maxWidth: "620px", margin: "0 auto 28px", opacity: 0.9 }}>
            South Punjab ka beloved mango season — events by Momin ke saath celebrate karo! Bright, fun mango party themes aur summer decoration for get-togethers across RYK, Sadiqabad, Khanpur and Liaqatpur.
          </p>
          <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-block", background: "#c9a227", color: "#3a0c1e", fontWeight: "bold", padding: "14px 32px", borderRadius: "999px", textDecoration: "none", fontSize: "1rem" }}>
            Plan My Mango Party
          </a>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <h2 style={{ color: "#7a1b3d", fontSize: "1.6rem", fontWeight: "bold", marginBottom: "16px" }}>Mango Party Decoration Services in South Punjab</h2>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "16px" }}>
            <strong>Events by Momin</strong> is South Punjab&apos;s go-to mango party planner and decorator. Mango season in Rahim Yar Khan, Sadiqabad and Khanpur is a big deal — and we make sure your mango party is just as grand as any wedding. Our mango-themed setups include bright yellow-and-orange decor, fruit-themed backdrops, refreshing outdoor lounge seating and custom party props.
          </p>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "24px" }}>
            Searching for <strong>&quot;mango party decoration near me&quot;</strong>, <strong>&quot;mango party theme Rahim Yar Khan&quot;</strong> or <strong>&quot;summer party decoration South Punjab&quot;</strong>? WhatsApp Events by Momin for a free quote!
          </p>

          <h2 style={{ color: "#7a1b3d", fontSize: "1.4rem", fontWeight: "bold", marginBottom: "12px" }}>What We Include in Mango Party Decoration</h2>
          <ul style={{ color: "#333", lineHeight: 2.2, paddingLeft: "20px", marginBottom: "24px" }}>
            <li>Mango &amp; tropical theme stage / backdrop</li>
            <li>Bright yellow, orange &amp; green colour scheme</li>
            <li>Outdoor garden lounge seating &amp; cushions</li>
            <li>Balloon arch with mango colours</li>
            <li>Fruit-themed props and table decoration</li>
            <li>Photo corner / selfie booth</li>
            <li>String light &amp; fairy light canopy</li>
            <li>Full setup and cleanup on the day</li>
          </ul>

          <div style={{ background: "#f6f1ea", border: "2px solid #c9a227", borderRadius: "16px", padding: "24px", marginBottom: "32px" }}>
            <h3 style={{ color: "#7a1b3d", fontWeight: "bold", marginBottom: "8px" }}>Book Mango Party Decoration</h3>
            <p style={{ color: "#333", lineHeight: 1.8 }}>
              📞 <a href={`tel:${siteConfig.phoneRaw}`} style={{ color: "#7a1b3d" }}>{siteConfig.phoneDisplay}</a><br />
              💬 <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" style={{ color: "#7a1b3d" }}>WhatsApp for instant quote</a><br />
              📧 <a href={`mailto:${siteConfig.email}`} style={{ color: "#7a1b3d" }}>{siteConfig.email}</a>
            </p>
          </div>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="/" style={{ color: "#7a1b3d", fontWeight: "bold", textDecoration: "underline" }}>← Back to Home</a>
            <a href="/birthday-party-planner-rahim-yar-khan" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Birthday Party Planner</a>
            <a href="/gala-night-event-planner" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Gala Night Planner</a>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
