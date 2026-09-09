import { siteConfig } from "@/lib/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Gala Night Event Planner in Rahim Yar Khan & South Punjab | Events by Momin",
  description:
    "Best gala night event planner in Rahim Yar Khan, Sadiqabad, Liaqatpur and South Punjab. VIP lounge setups, red carpet, statement lighting and elegant gala night decor by Events by Momin. Call +92 309 4439441.",
  alternates: { canonical: `${siteConfig.url}/gala-night-event-planner` },
  keywords: ["gala night decor", "gala night event planner", "gala night RYK", "annual dinner event management", "gala night decoration South Punjab", "VIP lounge decoration", "gala night Sadiqabad"],
  openGraph: {
    title: "Gala Night Event Planner in South Punjab | Events by Momin",
    description: "Glamorous gala night setups in RYK, Sadiqabad, Liaqatpur & South Punjab. WhatsApp: +92 309 4439441",
    images: [{ url: `${siteConfig.url}/gallery/gala-night.jpg` }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gala Night Event Planning & Decoration",
  description: "Glamorous gala night setups with statement lighting, stage design and red-carpet entrances across Rahim Yar Khan and South Punjab.",
  provider: { "@type": "LocalBusiness", name: siteConfig.name, telephone: siteConfig.phoneRaw, url: siteConfig.url },
  areaServed: ["Rahim Yar Khan", "Sadiqabad", "Khanpur", "Liaqatpur"],
  url: `${siteConfig.url}/gala-night-event-planner`,
  image: `${siteConfig.url}/gallery/gala-night.jpg`,
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Gala Night Event Planner", item: `${siteConfig.url}/gala-night-event-planner` },
  ],
};


export default function GalaNightPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <main className="min-h-screen">
        <div style={{ background: "linear-gradient(120deg,#3a0c1e,#7a1b3d,#a4335c)", padding: "100px 24px 60px", textAlign: "center", color: "#fffdfb" }}>
          <p style={{ fontSize: "0.85rem", marginBottom: "12px", opacity: 0.7 }}>
            <a href="/" style={{ color: "#ecc754", textDecoration: "none" }}>Home</a> &rsaquo; Gala Night Event Planner
          </p>
          <h1 style={{ fontSize: "clamp(1.8rem,5vw,3.5rem)", fontWeight: "bold", lineHeight: 1.2, marginBottom: "16px" }}>
            Gala Night Event Planner in Rahim Yar Khan &amp; South Punjab
          </h1>
          <p style={{ fontSize: "1.1rem", maxWidth: "620px", margin: "0 auto 28px", opacity: 0.9 }}>
            Glamorous gala night setups — VIP lounge seating, red carpet entrances, fairy light backdrops and statement lighting. Events by Momin serves RYK, Sadiqabad, Khanpur and Liaqatpur.
          </p>
          <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-block", background: "#c9a227", color: "#3a0c1e", fontWeight: "bold", padding: "14px 32px", borderRadius: "999px", textDecoration: "none", fontSize: "1rem" }}>
            Plan My Gala Night
          </a>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <h2 style={{ color: "#7a1b3d", fontSize: "1.6rem", fontWeight: "bold", marginBottom: "16px" }}>Gala Night Decoration Services in South Punjab</h2>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "16px" }}>
            <strong>Events by Momin</strong> is South Punjab&apos;s leading gala night event planner and decorator. Whether it&apos;s a corporate annual dinner, a school or college gala, an awards night or a VIP celebration — our team creates glamorous, Instagram-worthy setups with premium lighting, elegant lounge seating, red carpet entrances and custom stage designs.
          </p>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "24px" }}>
            Searching for a <strong>&quot;gala night event planner in RYK&quot;</strong>, <strong>&quot;annual dinner decoration Sadiqabad&quot;</strong> or <strong>&quot;VIP lounge setup Liaqatpur&quot;</strong>? Contact Events by Momin for a free consultation.
          </p>

          <h2 style={{ color: "#7a1b3d", fontSize: "1.4rem", fontWeight: "bold", marginBottom: "12px" }}>What's Included in Our Gala Night Package</h2>
          <ul style={{ color: "#333", lineHeight: 2.2, paddingLeft: "20px", marginBottom: "24px" }}>
            <li>Red carpet entrance &amp; step-and-repeat backdrop</li>
            <li>VIP lounge seating with premium sofas</li>
            <li>Stage decoration &amp; backdrop design</li>
            <li>Fairy light &amp; LED lighting setup</li>
            <li>Dining table &amp; hall decoration</li>
            <li>Photo booth &amp; selfie corner</li>
            <li>Floral centrepieces &amp; table decor</li>
            <li>Sound &amp; lighting coordination</li>
            <li>Full on-ground team — setup to cleanup</li>
          </ul>

          <div style={{ background: "#f6f1ea", border: "2px solid #c9a227", borderRadius: "16px", padding: "24px", marginBottom: "32px" }}>
            <h3 style={{ color: "#7a1b3d", fontWeight: "bold", marginBottom: "8px" }}>Book Gala Night Decoration</h3>
            <p style={{ color: "#333", lineHeight: 1.8 }}>
              📞 <a href={`tel:${siteConfig.phoneRaw}`} style={{ color: "#7a1b3d" }}>{siteConfig.phoneDisplay}</a><br />
              💬 <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" style={{ color: "#7a1b3d" }}>WhatsApp for instant quote</a><br />
              📧 <a href={`mailto:${siteConfig.email}`} style={{ color: "#7a1b3d" }}>{siteConfig.email}</a>
            </p>
          </div>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="/" style={{ color: "#7a1b3d", fontWeight: "bold", textDecoration: "underline" }}>← Back to Home</a>
            <a href="/corporate-event-management-rahim-yar-khan" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Corporate Events</a>
            <a href="/birthday-party-planner-rahim-yar-khan" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Birthday Party Planner</a>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
