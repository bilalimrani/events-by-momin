import { siteConfig } from "@/lib/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Birthday Party Decoration — Khanpur | Events by Momin",
  description:
    "Events by Momin planned and decorated a stunning birthday party in Khanpur — themed balloon décor, stage, photo booth, and full party setup. See our birthday party case study.",
  alternates: { canonical: `${siteConfig.url}/portfolio/birthday-party-khanpur` },
  keywords: [
    "birthday party Khanpur",
    "birthday decoration Khanpur",
    "birthday party planner South Punjab",
    "birthday party event management Khanpur",
    "kids birthday party decoration Khanpur",
    "theme birthday party Khanpur",
    "balloon decoration Khanpur",
    "birthday party case study Pakistan",
  ],
  openGraph: {
    title: "Birthday Party — Khanpur | Events by Momin",
    description:
      "Stunning themed birthday party in Khanpur — balloon décor, stage setup, photo booth and full event management by Events by Momin.",
    images: [{ url: `${siteConfig.url}/gallery/reception-dining-hall.jpg` }],
  },
};

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Birthday Party — Khanpur",
  description:
    "A themed birthday party in Khanpur managed by Events by Momin. Services included balloon décor, stage setup, themed photo booth, table arrangements, lighting, and full event coordination.",
  location: {
    "@type": "Place",
    name: "Private Venue",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Khanpur",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
  },
  organizer: {
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phoneRaw,
  },
  image: `${siteConfig.url}/gallery/reception-dining-hall.jpg`,
  url: `${siteConfig.url}/portfolio/birthday-party-khanpur`,
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Portfolio", item: `${siteConfig.url}/portfolio` },
    { "@type": "ListItem", position: 3, name: "Birthday Party — Khanpur", item: `${siteConfig.url}/portfolio/birthday-party-khanpur` },
  ],
};

const galleryImages = [
  { src: "/gallery/reception-dining-hall.jpg", alt: "Birthday party reception and dining hall setup Khanpur" },
  { src: "/gallery/lounge-seating.jpg", alt: "Birthday party lounge seating decoration" },
  { src: "/gallery/wedding-decor.jpg", alt: "Themed event decoration details" },
];

export default function BirthdayPartyKhanpurPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <main className="min-h-screen">

        {/* Hero */}
        <div style={{ background: "linear-gradient(120deg,#1a0a30,#3a0a5a,#1a0a30)", padding: "100px 24px 60px", textAlign: "center", color: "#fffdfb" }}>
          <p style={{ fontSize: "0.85rem", marginBottom: "12px", opacity: 0.6 }}>
            <a href="/" style={{ color: "#ecc754", textDecoration: "none" }}>Home</a>
            {" "}&rsaquo;{" "}
            <a href="/portfolio" style={{ color: "#ecc754", textDecoration: "none" }}>Portfolio</a>
            {" "}&rsaquo;{" "}Birthday Party
          </p>
          <p style={{ fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#ecc754", marginBottom: "12px", fontWeight: "600" }}>
            Case Study — Birthday Party Management
          </p>
          <h1 style={{ fontSize: "clamp(1.8rem,5vw,3.2rem)", fontWeight: "bold", lineHeight: 1.2, marginBottom: "16px" }}>
            Themed Birthday Party
            <span style={{ display: "block", color: "#ecc754", marginTop: "8px" }}>Khanpur, South Punjab</span>
          </h1>
          <p style={{ fontSize: "1.1rem", maxWidth: "620px", margin: "0 auto 28px", opacity: 0.9 }}>
            A celebration to remember — colourful balloon décor, themed stage, photo booth, and full party coordination by Events by Momin in Khanpur.
          </p>
          <a href={`${siteConfig.whatsappLink}?text=Hi%2C%20I%20want%20to%20book%20a%20Birthday%20Party%20event`}
            target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-block", background: "#c9a227", color: "#0c1a3a", fontWeight: "bold", padding: "14px 32px", borderRadius: "999px", textDecoration: "none", fontSize: "1rem" }}>
            🎂 Book a Birthday Party
          </a>
        </div>

        {/* Stats bar */}
        <div style={{ background: "#f6f1ea", borderBottom: "2px solid #c9a227", padding: "24px", display: "flex", justifyContent: "center", gap: "48px", flexWrap: "wrap", textAlign: "center" }}>
          {[["100+", "Guests"], ["1", "Special Day"], ["100%", "On-Time Setup"], ["5★", "Client Rating"]].map(([val, lbl]) => (
            <div key={lbl}>
              <div style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#7a1b3d" }}>{val}</div>
              <div style={{ fontSize: "0.78rem", color: "#555", textTransform: "uppercase", letterSpacing: "0.1em" }}>{lbl}</div>
            </div>
          ))}
        </div>

        <div style={{ maxWidth: "820px", margin: "0 auto", padding: "48px 24px" }}>

          {/* Event Details */}
          <div style={{ background: "#f6f1ea", borderRadius: "12px", padding: "20px 24px", marginBottom: "32px", display: "flex", flexWrap: "wrap", gap: "16px" }}>
            {[
              ["📍", "Location", "Khanpur, Punjab"],
              ["🎂", "Event Type", "Birthday Party"],
              ["👥", "Guests", "100+ family & friends"],
              ["🎈", "Theme", "Customised Theme Décor"],
            ].map(([icon, label, value]) => (
              <div key={label} style={{ flex: "1 1 160px" }}>
                <div style={{ fontSize: "1.3rem", marginBottom: "4px" }}>{icon}</div>
                <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#888", marginBottom: "2px" }}>{label}</div>
                <div style={{ fontWeight: "bold", color: "#333" }}>{value}</div>
              </div>
            ))}
          </div>

          {/* About */}
          <h2 style={{ color: "#7a1b3d", fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px" }}>About the Event</h2>
          <p style={{ color: "#333", lineHeight: 1.9, marginBottom: "16px" }}>
            This <strong>Birthday Party</strong> in <strong>Khanpur</strong> was a joyful, colour-filled celebration that the family wanted to make truly special. They trusted <strong>Events by Momin</strong> to design and coordinate everything — and we created a party atmosphere that had every guest smiling from the moment they walked in.
          </p>
          <p style={{ color: "#333", lineHeight: 1.9, marginBottom: "32px" }}>
            Our team set up a colourful themed stage as the centrepiece, decorated with custom balloon arches, a dedicated cake-cutting table, a floral photo booth, and coordinated table centrepieces throughout the venue. Every corner was designed to create the perfect backdrop for memories and photographs.
          </p>

          {/* Gallery */}
          <h2 style={{ color: "#7a1b3d", fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px" }}>Event Gallery</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", marginBottom: "32px" }}>
            {galleryImages.map((img) => (
              <div key={img.src} style={{ borderRadius: "10px", overflow: "hidden", aspectRatio: "4/3", border: "2px solid #ecc754" }}>
                <img src={img.src} alt={img.alt} loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
            ))}
          </div>

          {/* Services */}
          <h2 style={{ color: "#7a1b3d", fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px" }}>Services Provided</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "32px" }}>
            {[
              ["🎈", "Balloon Decoration", "Custom balloon arches, columns, and themed balloon clusters throughout."],
              ["🎭", "Birthday Stage Setup", "Themed stage with custom backdrop, name signage, and LED lighting."],
              ["📸", "Photo Booth", "Floral photo booth area with themed props for guests."],
              ["🎂", "Cake Table Setup", "Decorated cake-cutting table with matching theme and flowers."],
              ["🪑", "Guest Table Décor", "Centrepieces and table decoration for all guest tables."],
              ["💡", "Party Lighting", "Colourful LED lights and fairy lights for a festive atmosphere."],
            ].map(([icon, title, desc]) => (
              <div key={title} style={{ background: "#fff", border: "1px solid #ecc754", borderRadius: "12px", padding: "20px" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{icon}</div>
                <div style={{ fontWeight: "bold", color: "#7a1b3d", marginBottom: "6px" }}>{title}</div>
                <div style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div style={{ background: "linear-gradient(120deg,#1a0a30,#3a0a5a)", borderRadius: "16px", padding: "28px", marginBottom: "32px", color: "#fffdfb" }}>
            <div style={{ fontSize: "2rem", marginBottom: "12px", opacity: 0.6 }}>&ldquo;</div>
            <p style={{ fontSize: "1.05rem", fontStyle: "italic", lineHeight: 1.8, marginBottom: "16px", opacity: 0.95 }}>
              We booked Events by Momin for our child&apos;s birthday party in Khanpur and the results were absolutely amazing. The balloon decoration, the stage, the photo booth — every detail was perfectly done. Our child loved it, and every guest was impressed. Events by Momin made this birthday a memory that will last a lifetime. Highly recommend them in Khanpur and South Punjab!
            </p>
            <p style={{ color: "#ecc754", fontWeight: "bold", fontSize: "0.9rem" }}>
              — Parent, Khanpur
            </p>
          </div>

          {/* CTA */}
          <div style={{ background: "#f6f1ea", border: "2px solid #c9a227", borderRadius: "16px", padding: "28px", marginBottom: "32px" }}>
            <h3 style={{ color: "#7a1b3d", fontWeight: "bold", fontSize: "1.2rem", marginBottom: "8px" }}>
              Planning a Birthday Party in Khanpur or South Punjab?
            </h3>
            <p style={{ color: "#555", lineHeight: 1.7, marginBottom: "16px" }}>
              Events by Momin handles Birthday Parties, Baby Showers, Anniversary Parties and all celebrations across Khanpur, Rahim Yar Khan, Sadiqabad, Goth Machi and all of South Punjab.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href={`${siteConfig.whatsappLink}?text=Hi%2C%20I%20want%20to%20book%20a%20Birthday%20Party%20event%20in%20Khanpur`}
                target="_blank" rel="noopener noreferrer"
                style={{ background: "#c9a227", color: "#0c1a3a", fontWeight: "bold", padding: "12px 24px", borderRadius: "999px", textDecoration: "none", fontSize: "0.95rem" }}>
                🎂 Book Similar Event on WhatsApp
              </a>
              <a href={`tel:${siteConfig.phoneRaw}`}
                style={{ background: "#7a1b3d", color: "#fffdfb", fontWeight: "bold", padding: "12px 24px", borderRadius: "999px", textDecoration: "none", fontSize: "0.95rem" }}>
                📞 {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="/portfolio" style={{ color: "#7a1b3d", fontWeight: "bold", textDecoration: "underline" }}>← Back to Portfolio</a>
            <a href="/birthday-party-planner-rahim-yar-khan" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Birthday Party Planner</a>
            <a href="/wedding-decorator-khanpur" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Event Decorator Khanpur</a>
            <a href="/baby-shower-decoration" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Baby Shower Decoration</a>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
