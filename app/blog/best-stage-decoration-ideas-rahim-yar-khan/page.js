import { siteConfig } from "@/lib/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Best Stage Decoration Ideas in Rahim Yar Khan 2026 | Events by Momin",
  description:
    "Discover the top wedding, barat and walima stage decoration ideas trending in Rahim Yar Khan & South Punjab 2026. From LED backdrops to floral mandaps — get inspired by Events by Momin.",
  keywords: [
    "stage decoration ideas Rahim Yar Khan",
    "wedding stage decoration RYK",
    "barat stage decoration ideas",
    "walima stage design South Punjab",
    "best stage decoration 2026",
    "LED stage decoration Pakistan",
    "floral mandap decoration RYK",
  ],
  alternates: {
    canonical: `${siteConfig.url}/blog/best-stage-decoration-ideas-rahim-yar-khan`,
  },
  openGraph: {
    title: "Best Stage Decoration Ideas in Rahim Yar Khan 2026 | Events by Momin",
    description:
      "Top wedding, barat & walima stage decoration ideas in RYK & South Punjab. Get inspired for your next event.",
    images: [{ url: `${siteConfig.url}/gallery/wedding-decor.jpg` }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Stage Decoration Ideas in Rahim Yar Khan 2026",
  description:
    "A complete guide to the most popular stage decoration styles in Rahim Yar Khan and South Punjab for weddings, barat and walima events.",
  image: `${siteConfig.url}/gallery/wedding-decor.jpg`,
  datePublished: "2026-08-01",
  dateModified: "2026-08-01",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: { "@type": "ImageObject", url: `${siteConfig.url}/logo.png` },
  },
  mainEntityOfPage: `${siteConfig.url}/blog/best-stage-decoration-ideas-rahim-yar-khan`,
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Best Stage Decoration Ideas in Rahim Yar Khan",
      item: `${siteConfig.url}/blog/best-stage-decoration-ideas-rahim-yar-khan`,
    },
  ],
};

const ideas = [
  {
    title: "1. Floral Mandap & Flower Wall",
    body: "The floral mandap is the most popular stage decoration choice in Rahim Yar Khan weddings right now. Using fresh or premium artificial flowers, a mandap creates a dreamy canopy over the bridal couple. Combine it with a full flower wall backdrop in white, pink or gold tones for a magazine-worthy look. Events by Momin builds custom floral mandaps tailored to your venue size and colour theme.",
  },
  {
    title: "2. LED Backdrop Stage",
    body: "LED backdrop stages have taken RYK weddings to a new level. A large LED screen or LED panel wall behind the stage displays your custom monogram, couple's name or animated floral patterns. It adds a modern, cinematic feel and photographs beautifully. This is especially popular for barat and walima events at larger marquees.",
  },
  {
    title: "3. Royal Throne Setup",
    body: "A king and queen throne setup with gold-framed chairs, floral side arrangements and a richly decorated backdrop is a timeless choice for barat stages in South Punjab. Velvet draping, chandelier lighting overhead and a red carpet entrance complete the royal look. Events by Momin sources premium throne furniture for both indoor and outdoor venues.",
  },
  {
    title: "4. Fairy Light & Drapery Canopy",
    body: "For a romantic, warm atmosphere, fairy lights and ceiling drapery are unbeatable. Thousands of warm-white or golden fairy lights draped from the ceiling create a magical canopy effect. This style works beautifully for walima receptions and engagement ceremonies. Pair with soft floral centrepieces and votives for a complete look.",
  },
  {
    title: "5. Crystal Chandelier Entrance Aisle",
    body: "First impressions matter — and a crystal chandelier-lit entrance aisle sets the tone for the entire event. Hanging chandeliers over a red carpet aisle, flanked by flower stands or lanterns, creates a grand processional moment. Events by Momin has installed this at weddings across Rahim Yar Khan, Sadiqabad and Khanpur to stunning effect.",
  },
  {
    title: "6. Mehndi & Dholki Colour Burst",
    body: "Mehndi stages call for colour, energy and fun. Bright florals in yellow, orange and pink, combined with dhol-themed props, cushion lounges and a boho-style arch, create the perfect mehndi backdrop. Hanging rangoli decorations, pom-poms and string lights add texture. Events by Momin specialises in vibrant mehndi stage setups across Goth Machi, Liaqatpur and South Punjab.",
  },
];

export default function StagDecorationBlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
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
            {" "}›{" "}
            <a href="/blog" style={{ color: "#ecc754", textDecoration: "none" }}>Blog</a>
            {" "}›{" "}Stage Decoration Ideas
          </p>
          <span
            style={{
              display: "inline-block",
              background: "rgba(201,162,39,0.2)",
              color: "#ecc754",
              fontSize: "0.8rem",
              fontWeight: "700",
              padding: "4px 14px",
              borderRadius: "999px",
              marginBottom: "14px",
              letterSpacing: "0.05em",
            }}
          >
            Wedding Decor
          </span>
          <h1
            style={{
              fontSize: "clamp(1.6rem,4.5vw,3rem)",
              fontWeight: "bold",
              lineHeight: 1.2,
              marginBottom: "16px",
              maxWidth: "700px",
              margin: "0 auto 16px",
            }}
          >
            Best Stage Decoration Ideas in Rahim Yar Khan 2026
          </h1>
          <p style={{ fontSize: "1rem", maxWidth: "580px", margin: "0 auto", opacity: 0.85 }}>
            From floral mandaps to LED backdrops — here are the most stunning stage decoration
            styles trending in RYK &amp; South Punjab weddings right now.
          </p>
          <p style={{ marginTop: "16px", fontSize: "0.85rem", opacity: 0.6 }}>August 2026 · By Events by Momin</p>
        </div>

        {/* Article Body */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "48px 24px" }}>
          {/* Intro */}
          <p style={{ color: "#333", lineHeight: 1.85, fontSize: "1.05rem", marginBottom: "32px" }}>
            Choosing the right stage decoration is one of the most important decisions for any wedding
            in Rahim Yar Khan. The stage is where you sit, where all eyes turn, and where every photo
            is taken — so it has to be perfect. At{" "}
            <strong>Events by Momin</strong>, we&apos;ve decorated hundreds of stages across RYK,
            Sadiqabad, Khanpur, Goth Machi and Liaqatpur. Here are the 6 best stage decoration ideas
            that are trending in South Punjab right now.
          </p>

          {/* Idea Cards */}
          {ideas.map((idea, i) => (
            <div
              key={i}
              style={{
                borderLeft: "4px solid #c9a227",
                paddingLeft: "20px",
                marginBottom: "32px",
              }}
            >
              <h2
                style={{
                  color: "#7a1b3d",
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  marginBottom: "10px",
                }}
              >
                {idea.title}
              </h2>
              <p style={{ color: "#444", lineHeight: 1.8 }}>{idea.body}</p>
            </div>
          ))}

          {/* Gallery Teaser */}
          <div style={{ marginBottom: "36px" }}>
            <h2 style={{ color: "#7a1b3d", fontSize: "1.3rem", fontWeight: "700", marginBottom: "16px" }}>
              Our Work — Real Stages We&apos;ve Decorated in South Punjab
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {[
                { src: "/gallery/wedding-decor.jpg", alt: "Pink floral wedding stage decoration in Rahim Yar Khan by Events by Momin" },
                { src: "/gallery/barat-stage.jpg", alt: "Red white barat stage decoration in Sadiqabad by Events by Momin" },
                { src: "/gallery/walima-reception.jpg", alt: "White gold walima reception stage in Khanpur by Events by Momin" },
                { src: "/gallery/grand-entrance-aisle.jpg", alt: "Crystal chandelier entrance aisle at wedding in Rahim Yar Khan by Events by Momin" },
              ].map((img) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  style={{ width: "100%", borderRadius: "12px", objectFit: "cover", aspectRatio: "4/3" }}
                />
              ))}
            </div>
          </div>

          {/* Tips */}
          <h2 style={{ color: "#7a1b3d", fontSize: "1.2rem", fontWeight: "700", marginBottom: "14px" }}>
            Tips for Choosing Your Stage Decoration
          </h2>
          <ul style={{ color: "#444", lineHeight: 2.1, paddingLeft: "20px", marginBottom: "32px" }}>
            <li>Match your stage colour to the wedding card and invitation colour scheme</li>
            <li>Tell your decorator the venue size — stage proportions must match the hall</li>
            <li>Book at least 6–8 weeks in advance for peak wedding season (Oct–Feb)</li>
            <li>Ask to see real photos from past events — not just stock images</li>
            <li>Decide early whether you want fresh flowers, artificial or a mix</li>
            <li>Lighting matters as much as decor — ask about LED and fairy light options</li>
          </ul>

          {/* CTA */}
          <div
            style={{
              background: "#f6f1ea",
              border: "2px solid #c9a227",
              borderRadius: "16px",
              padding: "28px",
              textAlign: "center",
            }}
          >
            <h3 style={{ color: "#7a1b3d", fontWeight: "bold", fontSize: "1.2rem", marginBottom: "8px" }}>
              Want This Stage for Your Wedding?
            </h3>
            <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "18px" }}>
              Events by Momin decorates weddings, barat and walima stages across Rahim Yar Khan,
              Sadiqabad, Khanpur, Goth Machi and Liaqatpur. WhatsApp us for a free consultation and
              personalised quote.
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
                WhatsApp for Free Quote
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
                Call {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Related Posts */}
          <div style={{ marginTop: "40px" }}>
            <h3 style={{ color: "#7a1b3d", fontWeight: "700", marginBottom: "14px" }}>Related Articles</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a href="/blog/mehndi-decoration-tips-ryk" style={{ color: "#7a1b3d", textDecoration: "underline" }}>
                → Mehndi Decoration Tips — Best Setups in Rahim Yar Khan
              </a>
              <a href="/blog/wedding-decoration-budget-guide-south-punjab" style={{ color: "#7a1b3d", textDecoration: "underline" }}>
                → Wedding Decoration Budget Guide for South Punjab
              </a>
              <a href="/wedding-stage-decoration" style={{ color: "#7a1b3d", textDecoration: "underline" }}>
                → Our Wedding Stage Decoration Service
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
