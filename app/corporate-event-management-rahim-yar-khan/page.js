import { siteConfig } from "@/lib/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Corporate Event Management in Rahim Yar Khan | Annual Dinner & Team Building | Events by Momin",
  description:
    "Corporate event management near you in RYK & South Punjab. Annual dinners, team building, office parties, award ceremonies & product launches. WhatsApp for free quote: +92 309 4439441.",
  alternates: { canonical: `${siteConfig.url}/corporate-event-management-rahim-yar-khan` },
  keywords: [
    "corporate event management RYK",
    "corporate event management Rahim Yar Khan",
    "corporate event planner South Punjab",
    "office party planner Rahim Yar Khan",
    "annual dinner event management",
    "annual dinner management RYK",
    "annual dinner near me RYK",
    "team building event RYK",
    "team building Rahim Yar Khan",
    "team building near me RYK",
    "team building event management South Punjab",
    "corporate event planner Pakistan",
    "product launch event management",
    "product launch RYK",
    "seminar event planning",
    "seminar management RYK",
    "conference event planning South Punjab",
    "award ceremony management RYK",
    "awards night management Rahim Yar Khan",
    "corporate dinner RYK",
    "corporate gala night RYK",
    "office farewell party decoration",
    "welcome party decoration RYK",
    "corporate function management near me",
    "corporate event management near me RYK",
    "company event planner RYK",
    "business event management South Punjab",
    "school college function decoration RYK",
    "exhibition stall decoration RYK",
    "corporate event decoration near me",
  ],
  openGraph: {
    title: "Corporate Event Management in Rahim Yar Khan | Annual Dinner & Team Building",
    description: "Annual dinners, team building, office parties & award ceremonies in RYK & South Punjab. WhatsApp: +92 309 4439441",
    images: [{ url: `${siteConfig.url}/gallery/reception-dining-hall.jpg` }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Corporate Event Management",
  description: "Professional corporate event management for annual dinners, office parties, product launches and corporate celebrations in Rahim Yar Khan and South Punjab.",
  provider: { "@type": "LocalBusiness", name: siteConfig.name, telephone: siteConfig.phoneRaw, url: siteConfig.url },
  areaServed: ["Rahim Yar Khan", "Sadiqabad", "Khanpur", "Goth Machi", "Liaqatpur"],
  url: `${siteConfig.url}/corporate-event-management-rahim-yar-khan`,
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Corporate Event Management RYK", item: `${siteConfig.url}/corporate-event-management-rahim-yar-khan` },
  ],
};


export default function CorporatePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <main className="min-h-screen">
        <div style={{ background: "linear-gradient(120deg,#3a0c1e,#7a1b3d,#a4335c)", padding: "100px 24px 60px", textAlign: "center", color: "#fffdfb" }}>
          <p style={{ fontSize: "0.85rem", marginBottom: "12px", opacity: 0.7 }}>
            <a href="/" style={{ color: "#ecc754", textDecoration: "none" }}>Home</a> &rsaquo; Corporate Event Management Rahim Yar Khan
          </p>
          <h1 style={{ fontSize: "clamp(1.8rem,5vw,3.5rem)", fontWeight: "bold", lineHeight: 1.2, marginBottom: "16px" }}>
            Corporate Event Management in Rahim Yar Khan
          </h1>
          <p style={{ fontSize: "1.1rem", maxWidth: "620px", margin: "0 auto 28px", opacity: 0.9 }}>
            Professional corporate events — annual dinners, office parties, product launches, seminars and award ceremonies. Events by Momin handles everything from decor to execution across RYK and South Punjab.
          </p>
          <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-block", background: "#c9a227", color: "#3a0c1e", fontWeight: "bold", padding: "14px 32px", borderRadius: "999px", textDecoration: "none", fontSize: "1rem" }}>
            Plan Your Corporate Event
          </a>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <h2 style={{ color: "#7a1b3d", fontSize: "1.6rem", fontWeight: "bold", marginBottom: "16px" }}>Corporate Event Services in South Punjab</h2>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "16px" }}>
            <strong>Events by Momin</strong> is Rahim Yar Khan&apos;s trusted corporate event management company. We plan, design and execute professional corporate events from start to finish — venue decoration, stage setup, lighting, seating arrangements, backdrop and branding — so your team can focus on the event, not the logistics.
          </p>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "24px" }}>
            Whether you need an <strong>&quot;office party planner in RYK&quot;</strong>, <strong>&quot;annual dinner event management Sadiqabad&quot;</strong> or <strong>&quot;corporate event management South Punjab&quot;</strong> — Events by Momin is your one-stop solution.
          </p>

          <h2 style={{ color: "#7a1b3d", fontSize: "1.4rem", fontWeight: "bold", marginBottom: "12px" }}>Corporate Events We Manage</h2>
          <ul style={{ color: "#333", lineHeight: 2.2, paddingLeft: "20px", marginBottom: "24px" }}>
            <li>Annual Dinner &amp; Awards Night</li>
            <li>Team Building Events &amp; Corporate Activities</li>
            <li>Office Party &amp; Team Celebration</li>
            <li>Product Launch Event</li>
            <li>Seminar &amp; Conference Setup</li>
            <li>Exhibition Stall Decoration</li>
            <li>Corporate Gala Night</li>
            <li>Award Ceremony Management</li>
            <li>School &amp; College Functions</li>
            <li>Welcome &amp; Farewell Party Decoration</li>
          </ul>

          <h2 style={{ color: "#7a1b3d", fontSize: "1.4rem", fontWeight: "bold", marginBottom: "12px" }}>Team Building Events in Rahim Yar Khan</h2>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "24px" }}>
            Looking for <strong>team building event management in RYK</strong>? Events by Momin organises engaging team building activities, corporate dinners and staff celebrations across Rahim Yar Khan and South Punjab. Full decor, stage, lighting, seating and catering — all in one place.
          </p>

          <h2 style={{ color: "#7a1b3d", fontSize: "1.4rem", fontWeight: "bold", marginBottom: "12px" }}>Annual Dinner Management Near You</h2>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "24px" }}>
            Planning an <strong>annual dinner in Rahim Yar Khan</strong>? We handle complete annual dinner management — stage setup, backdrop with company branding, ambient lighting, seating arrangements, food service and awards presentation. Contact us for a free quote.
          </p>

          <div style={{ background: "#0c1a3a", borderRadius: "16px", padding: "24px", marginBottom: "32px", color: "#fffdfb" }}>
            <h3 style={{ color: "#ecc754", fontWeight: "bold", marginBottom: "8px" }}>Recent Case Study: RYK MUN</h3>
            <p style={{ lineHeight: 1.8, opacity: 0.9, marginBottom: "12px" }}>
              We recently managed the stage, decor, backdrop, sound, lighting and catering for RYK MUN
              (Model United Nations) at Sheikh Khalifa School — 650+ student delegates.
            </p>
            <a href="/mun-event-management-rahim-yar-khan" style={{ color: "#ecc754", fontWeight: "bold", textDecoration: "underline" }}>
              See the RYK MUN event →
            </a>
          </div>

          <div style={{ background: "#f6f1ea", border: "2px solid #c9a227", borderRadius: "16px", padding: "24px", marginBottom: "32px" }}>
            <h3 style={{ color: "#7a1b3d", fontWeight: "bold", marginBottom: "8px" }}>Book Corporate Event Management</h3>
            <p style={{ color: "#333", lineHeight: 1.8 }}>
              📞 <a href={`tel:${siteConfig.phoneRaw}`} style={{ color: "#7a1b3d" }}>{siteConfig.phoneDisplay}</a><br />
              💬 <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" style={{ color: "#7a1b3d" }}>WhatsApp for quote</a><br />
              📧 <a href={`mailto:${siteConfig.email}`} style={{ color: "#7a1b3d" }}>{siteConfig.email}</a>
            </p>
          </div>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="/" style={{ color: "#7a1b3d", fontWeight: "bold", textDecoration: "underline" }}>← Back to Home</a>
            <a href="/gala-night-event-planner" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Gala Night Planner</a>
            <a href="/event-planner-rahim-yar-khan" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Event Planner RYK</a>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
