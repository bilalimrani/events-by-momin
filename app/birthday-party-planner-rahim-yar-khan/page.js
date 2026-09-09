import { siteConfig } from "@/lib/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Birthday Party Planner in Rahim Yar Khan | Kids & Adults | Events by Momin",
  description:
    "Best birthday party planner and decorator in Rahim Yar Khan, Sadiqabad, Khanpur and South Punjab. Kids birthday, 1st birthday, theme parties, balloon decoration by Events by Momin. Call +92 309 4439441.",
  alternates: { canonical: `${siteConfig.url}/birthday-party-planner-rahim-yar-khan` },
  keywords: ["birthday party decoration Rahim Yar Khan", "birthday party planner RYK", "kids birthday party planner", "1st birthday decoration", "theme birthday party", "balloon decoration RYK", "birthday party planner Sadiqabad"],
  openGraph: {
    title: "Birthday Party Planner in Rahim Yar Khan | Events by Momin",
    description: "Fun birthday party decoration for kids & adults in RYK, Sadiqabad, Khanpur & South Punjab. WhatsApp: +92 309 4439441",
    images: [{ url: `${siteConfig.url}/gallery/reception-dining-hall.jpg` }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Birthday Party Planning & Decoration",
  description: "Fun, colourful birthday party decoration for kids and adults — balloon art, themed backdrops and props across Rahim Yar Khan and South Punjab.",
  provider: { "@type": "LocalBusiness", name: siteConfig.name, telephone: siteConfig.phoneRaw, url: siteConfig.url },
  areaServed: ["Rahim Yar Khan", "Sadiqabad", "Khanpur", "Goth Machi", "Liaqatpur"],
  url: `${siteConfig.url}/birthday-party-planner-rahim-yar-khan`,
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Birthday Party Planner RYK", item: `${siteConfig.url}/birthday-party-planner-rahim-yar-khan` },
  ],
};


export default function BirthdayPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <main className="min-h-screen">
        <div style={{ background: "linear-gradient(120deg,#3a0c1e,#7a1b3d,#a4335c)", padding: "100px 24px 60px", textAlign: "center", color: "#fffdfb" }}>
          <p style={{ fontSize: "0.85rem", marginBottom: "12px", opacity: 0.7 }}>
            <a href="/" style={{ color: "#ecc754", textDecoration: "none" }}>Home</a> &rsaquo; Birthday Party Planner Rahim Yar Khan
          </p>
          <h1 style={{ fontSize: "clamp(1.8rem,5vw,3.5rem)", fontWeight: "bold", lineHeight: 1.2, marginBottom: "16px" }}>
            Birthday Party Planner in Rahim Yar Khan
          </h1>
          <p style={{ fontSize: "1.1rem", maxWidth: "620px", margin: "0 auto 28px", opacity: 0.9 }}>
            Fun, colourful birthday party decoration for kids and adults — balloon arches, theme setups, backdrops, cakes tables and photo corners. Events by Momin serves RYK, Sadiqabad, Khanpur and all of South Punjab.
          </p>
          <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-block", background: "#c9a227", color: "#3a0c1e", fontWeight: "bold", padding: "14px 32px", borderRadius: "999px", textDecoration: "none", fontSize: "1rem" }}>
            Plan My Birthday Party
          </a>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
          <h2 style={{ color: "#7a1b3d", fontSize: "1.6rem", fontWeight: "bold", marginBottom: "16px" }}>Birthday Party Decoration Services in RYK</h2>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "16px" }}>
            <strong>Events by Momin</strong> is Rahim Yar Khan&apos;s go-to birthday party planner and decorator. We design colourful, Instagram-worthy birthday setups for kids and adults — from simple balloon decoration to fully themed parties with custom backdrops, cake tables, lounge seating and photo booths.
          </p>
          <p style={{ color: "#333", lineHeight: 1.8, marginBottom: "24px" }}>
            Looking for a <strong>"birthday party planner in RYK"</strong>, <strong>"kids birthday decoration Sadiqabad"</strong> or <strong>"1st birthday party decorator near me"</strong>? WhatsApp us for a free quote and theme suggestions.
          </p>

          <h2 style={{ color: "#7a1b3d", fontSize: "1.4rem", fontWeight: "bold", marginBottom: "12px" }}>Popular Birthday Themes We Do</h2>
          <ul style={{ color: "#333", lineHeight: 2.2, paddingLeft: "20px", marginBottom: "24px" }}>
            <li>1st Birthday / Half Birthday Decoration</li>
            <li>Kids Cartoon &amp; Princess Theme Parties</li>
            <li>Balloon Arch &amp; Balloon Bouquet Decoration</li>
            <li>Floral &amp; Botanical Birthday Setup</li>
            <li>Fairy Light &amp; Neon Birthday Party</li>
            <li>Elegant Adult Birthday Party Decoration</li>
            <li>Surprise Birthday Party Setup</li>
            <li>Outdoor &amp; Garden Birthday Party</li>
          </ul>

          <div style={{ background: "#f6f1ea", border: "2px solid #c9a227", borderRadius: "16px", padding: "24px", marginBottom: "32px" }}>
            <h3 style={{ color: "#7a1b3d", fontWeight: "bold", marginBottom: "8px" }}>Book Birthday Decoration</h3>
            <p style={{ color: "#333", lineHeight: 1.8 }}>
              📞 <a href={`tel:${siteConfig.phoneRaw}`} style={{ color: "#7a1b3d" }}>{siteConfig.phoneDisplay}</a><br />
              💬 <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" style={{ color: "#7a1b3d" }}>WhatsApp for instant quote</a><br />
              📧 <a href={`mailto:${siteConfig.email}`} style={{ color: "#7a1b3d" }}>{siteConfig.email}</a>
            </p>
          </div>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="/" style={{ color: "#7a1b3d", fontWeight: "bold", textDecoration: "underline" }}>← Back to Home</a>
            <a href="/mehndi-decoration-rahim-yar-khan" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Mehndi Decoration</a>
            <a href="/barat-stage-decoration" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Barat Stage Decoration</a>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
