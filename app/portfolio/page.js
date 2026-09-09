import { siteConfig } from "@/lib/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Event Portfolio & Case Studies | Events by Momin — South Punjab",
  description:
    "Browse real events managed by Events by Momin — wedding Barat & Walima, Mehndi & Dholki, Gala Nights, Birthday Parties and more across Rahim Yar Khan, Sadiqabad, Khanpur, Goth Machi and South Punjab.",
  alternates: { canonical: `${siteConfig.url}/portfolio` },
  keywords: [
    "event portfolio South Punjab",
    "Events by Momin portfolio",
    "event case studies Rahim Yar Khan",
    "wedding decoration portfolio Pakistan",
    "event planner portfolio RYK",
    "real events South Punjab",
    "event gallery Rahim Yar Khan",
    "best event planner portfolio Pakistan",
  ],
  openGraph: {
    title: "Event Portfolio | Events by Momin — South Punjab",
    description:
      "Real events, real results. Browse case studies of weddings, gala nights, birthday parties, mehndi functions and more by Events by Momin across South Punjab.",
    images: [{ url: `${siteConfig.url}/gallery/barat-stage.jpg` }],
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Portfolio", item: `${siteConfig.url}/portfolio` },
  ],
};

const portfolioItems = [
  {
    href: "/portfolio/wedding-barat-walima-ryk",
    image: "/gallery/barat-stage.jpg",
    tag: "Wedding",
    tagColor: "#7a1b3d",
    title: "Wedding Barat & Walima",
    location: "Rahim Yar Khan",
    description:
      "A two-day wedding celebration — grand Barat stage with floral arch entrance and elegant Walima reception, managed end-to-end.",
    stats: [["2", "Functions"], ["300+", "Guests"], ["5★", "Rating"]],
  },
  {
    href: "/portfolio/mehndi-dholki-goth-machi",
    image: "/gallery/mehndi-dholki.jpg",
    tag: "Mehndi & Dholki",
    tagColor: "#4a1a6e",
    title: "Mehndi & Dholki Evening",
    location: "Goth Machi",
    description:
      "A vibrant Mehndi & Dholki celebration with colourful stage, dholki lounge seating, fairy lights and floral décor.",
    stats: [["150+", "Guests"], ["1", "Evening"], ["5★", "Rating"]],
  },
  {
    href: "/portfolio/gala-night-sadiqabad",
    image: "/gallery/gala-night.jpg",
    tag: "Gala Night",
    tagColor: "#0d0d35",
    title: "Premium Gala Night",
    location: "Sadiqabad",
    description:
      "An upscale Gala Night with elegant stage, garden lounge, ambient lighting and illuminated walkway for 200+ guests.",
    stats: [["200+", "Guests"], ["1", "Evening"], ["5★", "Rating"]],
  },
  {
    href: "/portfolio/birthday-party-khanpur",
    image: "/gallery/reception-dining-hall.jpg",
    tag: "Birthday Party",
    tagColor: "#1a0a30",
    title: "Themed Birthday Party",
    location: "Khanpur",
    description:
      "A joyful themed birthday with custom balloon arches, stage, photo booth, cake table and full décor for 100+ guests.",
    stats: [["100+", "Guests"], ["1", "Special Day"], ["5★", "Rating"]],
  },
  {
    href: "/mun-event-management-rahim-yar-khan",
    image: "/gallery/mun-ryk-stage-night.jpg",
    tag: "Academic Event",
    tagColor: "#1a3a1a",
    title: "RYK MUN — Model United Nations",
    location: "Sheikh Khalifa School, RYK",
    description:
      "Full event management for Rahim Yar Khan MUN — 650+ student delegates, stage, sound, lighting, backdrop and catering.",
    stats: [["650+", "Delegates"], ["1", "Full Day"], ["5★", "Rating"]],
  },
];

export default function PortfolioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <style>{`
        .portfolio-card {
          display: block;
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #e8e0d4;
          text-decoration: none;
          color: inherit;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .portfolio-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
        }
      `}</style>
      <Navbar />
      <main className="min-h-screen">

        {/* Hero */}
        <div style={{ background: "linear-gradient(120deg,#0c1a3a,#1a2f5a,#0c1a3a)", padding: "100px 24px 60px", textAlign: "center", color: "#fffdfb" }}>
          <p style={{ fontSize: "0.85rem", marginBottom: "12px", opacity: 0.6 }}>
            <a href="/" style={{ color: "#ecc754", textDecoration: "none" }}>Home</a>
            {" "}&rsaquo;{" "}Portfolio
          </p>
          <p style={{ fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#ecc754", marginBottom: "12px", fontWeight: "600" }}>
            Real Events. Real Results.
          </p>
          <h1 style={{ fontSize: "clamp(1.8rem,5vw,3.2rem)", fontWeight: "bold", lineHeight: 1.2, marginBottom: "16px" }}>
            Our Event Portfolio
            <span style={{ display: "block", color: "#ecc754", marginTop: "8px" }}>Case Studies from South Punjab</span>
          </h1>
          <p style={{ fontSize: "1.1rem", maxWidth: "640px", margin: "0 auto 28px", opacity: 0.9 }}>
            Browse real events we&apos;ve managed across Rahim Yar Khan, Sadiqabad, Khanpur, Goth Machi and all of South Punjab — weddings, gala nights, mehndi functions, birthday parties and more.
          </p>
          <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-block", background: "#c9a227", color: "#0c1a3a", fontWeight: "bold", padding: "14px 32px", borderRadius: "999px", textDecoration: "none", fontSize: "1rem" }}>
            💬 Book Your Event
          </a>
        </div>

        {/* Stats bar */}
        <div style={{ background: "#f6f1ea", borderBottom: "2px solid #c9a227", padding: "24px", display: "flex", justifyContent: "center", gap: "48px", flexWrap: "wrap", textAlign: "center" }}>
          {[["200+", "Events Managed"], ["5", "Cities Served"], ["1000+", "Happy Clients"], ["5★", "Average Rating"]].map(([val, lbl]) => (
            <div key={lbl}>
              <div style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#7a1b3d" }}>{val}</div>
              <div style={{ fontSize: "0.78rem", color: "#555", textTransform: "uppercase", letterSpacing: "0.1em" }}>{lbl}</div>
            </div>
          ))}
        </div>

        {/* Portfolio grid */}
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 24px" }}>
          <h2 style={{ color: "#7a1b3d", fontSize: "1.6rem", fontWeight: "bold", marginBottom: "8px", textAlign: "center" }}>
            Featured Event Case Studies
          </h2>
          <p style={{ color: "#666", textAlign: "center", marginBottom: "40px", maxWidth: "500px", margin: "0 auto 40px" }}>
            Each event tells a story. Click any case study to see the full details, gallery, services and client testimonial.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "28px" }}>
            {portfolioItems.map((item) => (
              <a key={item.href} href={item.href} className="portfolio-card">
                {/* Image */}
                <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
                  <img src={item.image} alt={item.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  <span style={{ position: "absolute", top: "12px", left: "12px", background: item.tagColor, color: "#ecc754", fontSize: "0.72rem", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 12px", borderRadius: "999px" }}>
                    {item.tag}
                  </span>
                </div>
                {/* Content */}
                <div style={{ padding: "20px" }}>
                  <div style={{ fontSize: "0.8rem", color: "#888", marginBottom: "6px" }}>📍 {item.location}</div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#1a1a1a", marginBottom: "8px", lineHeight: 1.3 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.6, marginBottom: "16px" }}>
                    {item.description}
                  </p>
                  {/* Mini stats */}
                  <div style={{ display: "flex", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
                    {item.stats.map(([val, lbl]) => (
                      <div key={lbl} style={{ textAlign: "center", background: "#f6f1ea", borderRadius: "8px", padding: "6px 12px", flex: "1 1 60px" }}>
                        <div style={{ fontSize: "1rem", fontWeight: "bold", color: "#7a1b3d" }}>{val}</div>
                        <div style={{ fontSize: "0.65rem", color: "#888", textTransform: "uppercase" }}>{lbl}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ color: "#c9a227", fontWeight: "bold", fontSize: "0.875rem" }}>
                    View Case Study →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: "linear-gradient(120deg,#0c1a3a,#1a2f5a)", padding: "60px 24px", textAlign: "center", color: "#fffdfb" }}>
          <h2 style={{ fontSize: "clamp(1.4rem,4vw,2.2rem)", fontWeight: "bold", marginBottom: "12px" }}>
            Ready to Create Your Own Success Story?
          </h2>
          <p style={{ fontSize: "1rem", opacity: 0.85, marginBottom: "28px", maxWidth: "500px", margin: "0 auto 28px" }}>
            Events by Momin serves all of South Punjab — Rahim Yar Khan, Sadiqabad, Khanpur, Goth Machi, Liaqatpur and beyond.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
            <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer"
              style={{ background: "#c9a227", color: "#0c1a3a", fontWeight: "bold", padding: "14px 28px", borderRadius: "999px", textDecoration: "none", fontSize: "1rem" }}>
              💬 WhatsApp Us
            </a>
            <a href={`tel:${siteConfig.phoneRaw}`}
              style={{ background: "rgba(255,255,255,0.1)", color: "#fffdfb", fontWeight: "bold", padding: "14px 28px", borderRadius: "999px", textDecoration: "none", fontSize: "1rem", border: "1px solid rgba(255,255,255,0.2)" }}>
              📞 {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>

        {/* Nav links */}
        <div style={{ maxWidth: "820px", margin: "0 auto", padding: "32px 24px" }}>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="/" style={{ color: "#7a1b3d", fontWeight: "bold", textDecoration: "underline" }}>← Back to Home</a>
            <a href="/event-planner-rahim-yar-khan" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Event Planner RYK</a>
            <a href="/wedding-stage-decoration" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Wedding Decoration</a>
            <a href="/gala-night-event-planner" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Gala Night Planner</a>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
