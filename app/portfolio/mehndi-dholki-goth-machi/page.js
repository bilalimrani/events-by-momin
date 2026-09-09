import { siteConfig } from "@/lib/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Mehndi & Dholki Event — Goth Machi | Events by Momin",
  description:
    "Events by Momin managed a vibrant Mehndi & Dholki celebration in Goth Machi — colorful stage, dholki seating, fairy lights, floral décor and full event setup. See our portfolio case study.",
  alternates: { canonical: `${siteConfig.url}/portfolio/mehndi-dholki-goth-machi` },
  keywords: [
    "mehndi event Goth Machi",
    "dholki decoration Goth Machi",
    "mehndi dholki planner South Punjab",
    "mehndi decoration case study",
    "event planner Goth Machi",
    "mehndi setup decoration Pakistan",
    "dholki event management Goth Machi",
    "mehndi function planner Rahim Yar Khan",
  ],
  openGraph: {
    title: "Mehndi & Dholki — Goth Machi | Events by Momin",
    description:
      "Vibrant Mehndi & Dholki in Goth Machi — colorful stage, fairy lights, floral lounge and full event setup by Events by Momin.",
    images: [{ url: `${siteConfig.url}/gallery/mehndi-dholki.jpg` }],
  },
};

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Mehndi & Dholki Celebration — Goth Machi",
  description:
    "A vibrant Mehndi and Dholki celebration in Goth Machi managed by Events by Momin. Services included colorful stage design, dholki lounge seating, fairy lights, floral décor, and full event coordination.",
  location: {
    "@type": "Place",
    name: "Private Residence",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Goth Machi",
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
  image: `${siteConfig.url}/gallery/mehndi-dholki.jpg`,
  url: `${siteConfig.url}/portfolio/mehndi-dholki-goth-machi`,
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Portfolio", item: `${siteConfig.url}/portfolio` },
    { "@type": "ListItem", position: 3, name: "Mehndi & Dholki — Goth Machi", item: `${siteConfig.url}/portfolio/mehndi-dholki-goth-machi` },
  ],
};

const galleryImages = [
  { src: "/gallery/mehndi-dholki.jpg", alt: "Mehndi and dholki stage decoration Goth Machi" },
  { src: "/gallery/blue-mehndi-lounge.jpg", alt: "Blue mehndi lounge seating setup" },
  { src: "/gallery/rustic-mehndi-night.jpg", alt: "Rustic mehndi night decoration with fairy lights" },
];

export default function MehndiDholkiGothMachiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Navbar />
      <main className="min-h-screen">

        {/* Hero */}
        <div style={{ background: "linear-gradient(120deg,#2d0a4a,#4a1a6e,#2d0a4a)", padding: "100px 24px 60px", textAlign: "center", color: "#fffdfb" }}>
          <p style={{ fontSize: "0.85rem", marginBottom: "12px", opacity: 0.6 }}>
            <a href="/" style={{ color: "#ecc754", textDecoration: "none" }}>Home</a>
            {" "}&rsaquo;{" "}
            <a href="/portfolio" style={{ color: "#ecc754", textDecoration: "none" }}>Portfolio</a>
            {" "}&rsaquo;{" "}Mehndi &amp; Dholki
          </p>
          <p style={{ fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#ecc754", marginBottom: "12px", fontWeight: "600" }}>
            Case Study — Mehndi &amp; Dholki Event
          </p>
          <h1 style={{ fontSize: "clamp(1.8rem,5vw,3.2rem)", fontWeight: "bold", lineHeight: 1.2, marginBottom: "16px" }}>
            Mehndi &amp; Dholki Celebration
            <span style={{ display: "block", color: "#ecc754", marginTop: "8px" }}>Goth Machi, South Punjab</span>
          </h1>
          <p style={{ fontSize: "1.1rem", maxWidth: "620px", margin: "0 auto 28px", opacity: 0.9 }}>
            Colour, music, and joy — a vibrant Mehndi &amp; Dholki evening managed end-to-end by Events by Momin in Goth Machi.
          </p>
          <a href={`${siteConfig.whatsappLink}?text=Hi%2C%20I%20want%20to%20book%20a%20similar%20Mehndi%20%26%20Dholki%20event`}
            target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-block", background: "#c9a227", color: "#0c1a3a", fontWeight: "bold", padding: "14px 32px", borderRadius: "999px", textDecoration: "none", fontSize: "1rem" }}>
            💬 Book a Similar Mehndi Event
          </a>
        </div>

        {/* Stats bar */}
        <div style={{ background: "#f6f1ea", borderBottom: "2px solid #c9a227", padding: "24px", display: "flex", justifyContent: "center", gap: "48px", flexWrap: "wrap", textAlign: "center" }}>
          {[["150+", "Guests"], ["1", "Evening Event"], ["100%", "On-Time Setup"], ["5★", "Client Rating"]].map(([val, lbl]) => (
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
              ["📍", "Location", "Goth Machi, Punjab"],
              ["🎉", "Function", "Mehndi & Dholki"],
              ["👥", "Guests", "150+ attendees"],
              ["🌙", "Time", "Evening Celebration"],
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
            This <strong>Mehndi &amp; Dholki</strong> celebration in <strong>Goth Machi</strong> was a lively, colourful evening that the family had been planning for months. The family came to <strong>Events by Momin</strong> wanting something vibrant, festive, and uniquely beautiful — and we delivered exactly that.
          </p>
          <p style={{ color: "#333", lineHeight: 1.9, marginBottom: "32px" }}>
            We transformed the outdoor space with a colourful stage adorned with yellow and green draping, a comfortable dholki lounge setup with cushioned seating, warm fairy lights strung throughout, and a dedicated photo-booth area. The entire space radiated the energy and excitement that a Mehndi function deserves.
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
              ["🎨", "Mehndi Stage Design", "Colourful stage with vibrant draping, flowers, and festive décor."],
              ["🪑", "Dholki Lounge Setup", "Comfortable cushioned floor seating with decorative pillows."],
              ["✨", "Fairy Light Canopy", "Warm fairy lights strung across the full event area."],
              ["📸", "Photo Booth Area", "Floral backdrop for photos with printed family name."],
              ["🌸", "Floral Decorations", "Fresh and artificial flower arrangements throughout."],
              ["🎵", "Sound & Music Setup", "PA system for dholki music and announcements."],
            ].map(([icon, title, desc]) => (
              <div key={title} style={{ background: "#fff", border: "1px solid #ecc754", borderRadius: "12px", padding: "20px" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{icon}</div>
                <div style={{ fontWeight: "bold", color: "#7a1b3d", marginBottom: "6px" }}>{title}</div>
                <div style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div style={{ background: "linear-gradient(120deg,#2d0a4a,#4a1a6e)", borderRadius: "16px", padding: "28px", marginBottom: "32px", color: "#fffdfb" }}>
            <div style={{ fontSize: "2rem", marginBottom: "12px", opacity: 0.6 }}>&ldquo;</div>
            <p style={{ fontSize: "1.05rem", fontStyle: "italic", lineHeight: 1.8, marginBottom: "16px", opacity: 0.95 }}>
              Hamari Mehndi itni khoobsurat thi ke sab hairan reh gaye! Events by Momin ne bilkul waise hi banaya jaise humne soch rakha tha — rang, roshniyaan, lounge sab perfect tha. Goth Machi mein itna sunder event humne pehle kabhi nahi dekha. Shukriya Momin bhai!
            </p>
            <p style={{ color: "#ecc754", fontWeight: "bold", fontSize: "0.9rem" }}>
              — Bride&apos;s Family, Goth Machi
            </p>
          </div>

          {/* CTA */}
          <div style={{ background: "#f6f1ea", border: "2px solid #c9a227", borderRadius: "16px", padding: "28px", marginBottom: "32px" }}>
            <h3 style={{ color: "#7a1b3d", fontWeight: "bold", fontSize: "1.2rem", marginBottom: "8px" }}>
              Planning a Mehndi or Dholki in Goth Machi or South Punjab?
            </h3>
            <p style={{ color: "#555", lineHeight: 1.7, marginBottom: "16px" }}>
              Events by Momin specialises in Mehndi &amp; Dholki setups across Goth Machi, Rahim Yar Khan, Sadiqabad, Khanpur and Liaqatpur — vibrant, colourful and completely stress-free for your family.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href={`${siteConfig.whatsappLink}?text=Hi%2C%20I%20want%20to%20book%20a%20Mehndi%20%26%20Dholki%20event`}
                target="_blank" rel="noopener noreferrer"
                style={{ background: "#c9a227", color: "#0c1a3a", fontWeight: "bold", padding: "12px 24px", borderRadius: "999px", textDecoration: "none", fontSize: "0.95rem" }}>
                💬 Book Similar Event on WhatsApp
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
            <a href="/mehndi-decoration-rahim-yar-khan" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Mehndi Decoration</a>
            <a href="/event-planner-goth-machi" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Event Planner Goth Machi</a>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
