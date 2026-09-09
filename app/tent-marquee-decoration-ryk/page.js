import { siteConfig } from "@/lib/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Tent & Marquee Decoration in Rahim Yar Khan | Events by Momin",
  description:
    "Premium tent and marquee decoration services in Rahim Yar Khan & South Punjab. Shamiana setup, wedding tent decor, lighting and full marquee management by Events by Momin. Call +92 309 4439441.",
  keywords: [
    "tent decoration Rahim Yar Khan",
    "marquee decoration RYK",
    "shamiana decoration South Punjab",
    "wedding tent decoration",
    "tent service Rahim Yar Khan",
    "tent setup RYK",
    "shamiana setup South Punjab",
    "outdoor event tent decoration",
    "marquee lighting RYK",
    "tent rental decoration Rahim Yar Khan",
    "barat tent decoration",
    "walima tent decoration RYK",
  ],
  alternates: { canonical: `${siteConfig.url}/tent-marquee-decoration-ryk` },
  openGraph: {
    title: "Tent & Marquee Decoration in Rahim Yar Khan | Events by Momin",
    description:
      "Shamiana setup, tent decoration, lighting and marquee management for weddings and events in RYK & South Punjab. WhatsApp: +92 309 4439441",
    images: [{ url: `${siteConfig.url}/gallery/reception-dining-hall.jpg` }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tent & Marquee Decoration — Shamiana Setup",
  description:
    "Complete tent and marquee decoration service in Rahim Yar Khan and South Punjab — shamiana setup, ceiling drapery, lighting design, flooring and full outdoor event decoration.",
  provider: {
    "@type": "LocalBusiness",
    name: siteConfig.name,
    telephone: siteConfig.phoneRaw,
    url: siteConfig.url,
  },
  areaServed: ["Rahim Yar Khan", "Sadiqabad", "Khanpur", "Goth Machi", "Liaqatpur"],
  url: `${siteConfig.url}/tent-marquee-decoration-ryk`,
  image: `${siteConfig.url}/gallery/reception-dining-hall.jpg`,
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Tent & Marquee Decoration RYK", item: `${siteConfig.url}/tent-marquee-decoration-ryk` },
  ],
};

const services = [
  ["⛺", "Shamiana Setup & Rental", "Full shamiana / marquee tent supply and setup for weddings, barat, walima and all outdoor events in RYK and South Punjab."],
  ["🎨", "Ceiling Drapery Decoration", "Premium fabric ceiling draping inside the tent — creating a beautiful, decorated canopy overhead for your event."],
  ["💡", "Tent Lighting Design", "Fairy lights, chandeliers and ambient tent lighting that transform the atmosphere after dark."],
  ["🌸", "Floral Tent Decoration", "Fresh and artificial flower arrangements, hanging floral garlands and floral centrepieces inside the marquee."],
  ["🪑", "Guest Seating Setup", "Complete guest seating arrangement — chairs, tables, table linen and centrepieces for any event size."],
  ["🔊", "Sound System in Tent", "Professional sound and PA system setup within the marquee for crystal-clear audio throughout."],
  ["🏮", "Entrance & Exterior Decor", "Decorated tent entrance with flower stands, lighting and red carpet to welcome guests in style."],
  ["🎭", "Full Outdoor Event Setup", "Complete outdoor event management — tent, decor, lighting, seating and coordination handled end-to-end."],
];

export default function TentMarqueePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <main className="min-h-screen">
        {/* Hero */}
        <div
          style={{
            background: "linear-gradient(120deg,#3a0c1e,#7a1b3d,#a4335c)",
            padding: "100px 24px 60px",
            textAlign: "center",
            color: "#fffdfb",
          }}
        >
          <p style={{ fontSize: "0.85rem", marginBottom: "12px", opacity: 0.7 }}>
            <a href="/" style={{ color: "#ecc754", textDecoration: "none" }}>Home</a>
            {" "}›{" "}Tent &amp; Marquee Decoration RYK
          </p>
          <h1
            style={{
              fontSize: "clamp(1.8rem,5vw,3.2rem)",
              fontWeight: "bold",
              lineHeight: 1.2,
              marginBottom: "16px",
              maxWidth: "700px",
              margin: "0 auto 16px",
            }}
          >
            Tent &amp; Marquee Decoration in Rahim Yar Khan
          </h1>
          <p style={{ fontSize: "1.1rem", maxWidth: "620px", margin: "0 auto 28px", opacity: 0.9 }}>
            Events by Momin provides complete shamiana setup, tent decoration, ceiling drapery,
            lighting and outdoor event management across Rahim Yar Khan, Sadiqabad, Khanpur,
            Goth Machi and all of South Punjab.
          </p>
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "#c9a227",
              color: "#3a0c1e",
              fontWeight: "bold",
              padding: "14px 32px",
              borderRadius: "999px",
              textDecoration: "none",
              fontSize: "1rem",
            }}
          >
            Book Tent Decoration — WhatsApp
          </a>
        </div>

        <div style={{ maxWidth: "820px", margin: "0 auto", padding: "48px 24px" }}>

          {/* Intro */}
          <p style={{ color: "#333", lineHeight: 1.9, fontSize: "1.05rem", marginBottom: "16px" }}>
            In South Punjab, most weddings, barat, walima and large family events take place under
            a <strong>shamiana or marquee tent</strong>. The tent is not just a shelter — it is the
            canvas on which your entire event decoration is built. At{" "}
            <strong>Events by Momin</strong>, we transform plain tents into beautifully decorated
            event spaces with ceiling drapery, lighting, floral arrangements and full guest seating
            setup.
          </p>
          <p style={{ color: "#333", lineHeight: 1.9, fontSize: "1.05rem", marginBottom: "32px" }}>
            Whether you&apos;re searching for <strong>&quot;tent decoration near me&quot;</strong>,{" "}
            <strong>&quot;shamiana setup RYK&quot;</strong> or{" "}
            <strong>&quot;marquee decoration in Rahim Yar Khan&quot;</strong> — Events by Momin
            is your one-stop team for the complete tent decoration and setup.
          </p>

          {/* Services grid */}
          <h2 style={{ color: "#7a1b3d", fontSize: "1.4rem", fontWeight: "bold", marginBottom: "20px" }}>
            Our Tent &amp; Marquee Decoration Services
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
              marginBottom: "36px",
            }}
          >
            {services.map(([icon, title, desc]) => (
              <div
                key={title}
                style={{
                  background: "#fff",
                  border: "1px solid #e8dfc8",
                  borderRadius: "14px",
                  padding: "20px",
                  borderLeft: "4px solid #c9a227",
                }}
              >
                <div style={{ fontSize: "1.6rem", marginBottom: "8px" }}>{icon}</div>
                <div style={{ fontWeight: "bold", color: "#7a1b3d", marginBottom: "6px", fontSize: "0.95rem" }}>{title}</div>
                <div style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.65 }}>{desc}</div>
              </div>
            ))}
          </div>

          {/* Photo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/gallery/reception-dining-hall.jpg"
            alt="Decorated marquee tent with full guest seating, lighting and decor by Events by Momin in Rahim Yar Khan"
            style={{ width: "100%", borderRadius: "14px", objectFit: "cover", aspectRatio: "16/9", marginBottom: "36px" }}
          />

          {/* Why us */}
          <h2 style={{ color: "#7a1b3d", fontSize: "1.3rem", fontWeight: "bold", marginBottom: "14px" }}>
            Why Choose Events by Momin for Tent Decoration?
          </h2>
          <ul style={{ color: "#444", lineHeight: 2.2, paddingLeft: "20px", marginBottom: "32px" }}>
            <li>Experience with all tent sizes — from small family events to large weddings of 500+ guests</li>
            <li>Full setup and takedown handled by our team — you don&apos;t lift a finger</li>
            <li>Ceiling drapery, lighting, flooring and seating — all in one package</li>
            <li>Serving RYK, Sadiqabad, Khanpur, Goth Machi and Liaqatpur with travel included</li>
            <li>Transparent pricing — get a quote on WhatsApp within hours</li>
          </ul>

          {/* Service areas */}
          <h2 style={{ color: "#7a1b3d", fontSize: "1.2rem", fontWeight: "bold", marginBottom: "12px" }}>
            Areas We Serve for Tent Decoration
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "32px" }}>
            {["Rahim Yar Khan (RYK)", "Sadiqabad (SDK)", "Khanpur", "Goth Machi", "Liaqatpur", "Ahmadpur East", "All of South Punjab"].map((city) => (
              <span
                key={city}
                style={{
                  background: "#f6f1ea",
                  border: "1px solid #c9a227",
                  borderRadius: "999px",
                  padding: "6px 16px",
                  color: "#7a1b3d",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                }}
              >
                {city}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div
            style={{
              background: "#f6f1ea",
              border: "2px solid #c9a227",
              borderRadius: "16px",
              padding: "28px",
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <h3 style={{ color: "#7a1b3d", fontWeight: "bold", fontSize: "1.2rem", marginBottom: "8px" }}>
              Get a Free Tent Decoration Quote
            </h3>
            <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "18px" }}>
              Tell us your event type, guest count, date and location — we&apos;ll give you a
              transparent tent decoration quote within a few hours.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  background: "#c9a227",
                  color: "#3a0c1e",
                  fontWeight: "bold",
                  padding: "13px 28px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                }}
              >
                💬 WhatsApp for Quote
              </a>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                style={{
                  display: "inline-block",
                  background: "#7a1b3d",
                  color: "#fffdfb",
                  fontWeight: "bold",
                  padding: "13px 28px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                }}
              >
                📞 {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Related */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="/" style={{ color: "#7a1b3d", fontWeight: "bold", textDecoration: "underline" }}>← Home</a>
            <a href="/wedding-stage-decoration" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Wedding Stage Decoration</a>
            <a href="/catering-services-rahim-yar-khan" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Catering Services RYK</a>
            <a href="/event-planner-rahim-yar-khan" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Event Planner RYK</a>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
