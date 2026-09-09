import { siteConfig } from "@/lib/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Mehndi Decoration Tips — Best Mehndi Setups in Rahim Yar Khan | Events by Momin",
  description:
    "Top mehndi decoration tips, colour themes and dholki stage ideas for Rahim Yar Khan & South Punjab events. Expert advice from Events by Momin — RYK's #1 mehndi decorator.",
  keywords: [
    "mehndi decoration tips RYK",
    "mehndi decoration Rahim Yar Khan",
    "mehndi stage setup ideas",
    "dholki decoration ideas",
    "mehndi decoration South Punjab",
    "mehndi decorator near me",
    "best mehndi decoration company RYK",
  ],
  alternates: {
    canonical: `${siteConfig.url}/blog/mehndi-decoration-tips-ryk`,
  },
  openGraph: {
    title: "Mehndi Decoration Tips — Best Setups in Rahim Yar Khan | Events by Momin",
    description:
      "Expert mehndi decoration tips and dholki stage ideas from South Punjab's top mehndi decorator — Events by Momin, RYK.",
    images: [{ url: `${siteConfig.url}/gallery/mehndi-dholki.jpg` }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mehndi Decoration Tips — Best Mehndi Setups in Rahim Yar Khan",
  description:
    "Expert tips for planning the perfect mehndi and dholki decoration in Rahim Yar Khan and South Punjab.",
  image: `${siteConfig.url}/gallery/mehndi-dholki.jpg`,
  datePublished: "2026-08-05",
  dateModified: "2026-08-05",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: { "@type": "ImageObject", url: `${siteConfig.url}/logo.png` },
  },
  mainEntityOfPage: `${siteConfig.url}/blog/mehndi-decoration-tips-ryk`,
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
    { "@type": "ListItem", position: 3, name: "Mehndi Decoration Tips RYK", item: `${siteConfig.url}/blog/mehndi-decoration-tips-ryk` },
  ],
};

const tips = [
  {
    no: "01",
    title: "Choose a Bold Colour Palette",
    body: "Mehndi events are all about colour. The most popular colour combinations in South Punjab right now are yellow + orange + green (classic desi), pink + gold + white (elegant boho), and blue + yellow + white (fresh and modern). Pick your main colour first and build the entire decoration around it — from the stage draping to the cushion covers and table runners.",
  },
  {
    no: "02",
    title: "Create a Defined Stage Area",
    body: "Even for a smaller mehndi, a defined stage area makes a huge difference. Use a flower arch, a colourful fabric canopy (shamiana), or a bamboo and floral frame to mark where the bride sits. Add a colourful rug or dhurrie, floor cushions and bolsters for the ground-sitting look that is so popular in RYK mehndi events. This also creates a perfect photo backdrop.",
  },
  {
    no: "03",
    title: "Add a Hanging Décor Element",
    body: "What separates a great mehndi from an average one is always the ceiling and hanging décor. Hanging flower garlands (laddis), paper pom-poms, string lights or macramé dreamcatchers hanging from above instantly transform a plain hall or outdoor space. Events by Momin uses premium hanging décor to create that Insta-worthy overhead look at mehndi events across Rahim Yar Khan, Goth Machi and Liaqatpur.",
  },
  {
    no: "04",
    title: "Set Up a Photo Corner / Selfie Wall",
    body: "Guests at every mehndi in RYK are taking photos. A dedicated photo corner with a floral wall, neon sign (like 'Bride to Be' or a heart), balloons or a boho arch gives guests the perfect selfie spot — and means your event looks amazing across everyone's Instagram stories. This is one of the most requested additions from mehndi clients in South Punjab.",
  },
  {
    no: "05",
    title: "Don't Forget the Guest Seating Area",
    body: "The stage is important, but so is where your guests sit. Ground seating with colourful cushions and durries is traditional and comfortable. Mix it with low tables dressed with flower centrepieces and candle votives. For larger events, a mix of ground seating and chairs works best. Events by Momin sets up complete mehndi seating arrangements that feel cosy and photogenic at the same time.",
  },
  {
    no: "06",
    title: "Lighting Makes the Night Magical",
    body: "Mehndi events that go into the evening need warm, ambient lighting. Fairy lights strung across the area, coloured lanterns, and warm floodlighting on the stage create a magical atmosphere after sunset. Avoid harsh white lights — they wash out colours in photos. Events by Momin provides full lighting design as part of every mehndi decoration package.",
  },
];

export default function MehndiDecorationBlogPage() {
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
            {" "}›{" "}Mehndi Decoration Tips
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
            }}
          >
            Mehndi &amp; Dholki
          </span>
          <h1
            style={{
              fontSize: "clamp(1.6rem,4.5vw,3rem)",
              fontWeight: "bold",
              lineHeight: 1.2,
              maxWidth: "700px",
              margin: "0 auto 16px",
            }}
          >
            Mehndi Decoration Tips — Best Setups in Rahim Yar Khan
          </h1>
          <p style={{ fontSize: "1rem", maxWidth: "580px", margin: "0 auto", opacity: 0.85 }}>
            Planning a mehndi or dholki in RYK? Here are 6 expert decoration tips to make your
            mehndi night unforgettable.
          </p>
          <p style={{ marginTop: "16px", fontSize: "0.85rem", opacity: 0.6 }}>August 2026 · By Events by Momin</p>
        </div>

        {/* Body */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "48px 24px" }}>
          <p style={{ color: "#333", lineHeight: 1.85, fontSize: "1.05rem", marginBottom: "32px" }}>
            The mehndi is one of the most joyful, colourful events in a Pakistani wedding — and in
            Rahim Yar Khan, mehndi nights are celebrated with full energy and style. But a great
            mehndi decoration takes planning. At <strong>Events by Momin</strong>, we&apos;ve
            decorated mehndi events across RYK, Sadiqabad, Goth Machi and Liaqatpur — and
            here are our top tips to get the look right.
          </p>

          {tips.map((tip, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "20px",
                marginBottom: "32px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: "48px",
                  height: "48px",
                  background: "linear-gradient(135deg,#7a1b3d,#a4335c)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ecc754",
                  fontWeight: "800",
                  fontSize: "0.9rem",
                }}
              >
                {tip.no}
              </div>
              <div>
                <h2 style={{ color: "#7a1b3d", fontSize: "1.15rem", fontWeight: "700", marginBottom: "8px" }}>
                  {tip.title}
                </h2>
                <p style={{ color: "#444", lineHeight: 1.8 }}>{tip.body}</p>
              </div>
            </div>
          ))}

          {/* Photo Grid */}
          <div style={{ marginBottom: "36px" }}>
            <h2 style={{ color: "#7a1b3d", fontSize: "1.2rem", fontWeight: "700", marginBottom: "16px" }}>
              Our Mehndi Decorations — Real Events in South Punjab
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {[
                { src: "/gallery/mehndi-dholki.jpg", alt: "Colourful mehndi stage decoration with mandala rug by Events by Momin in Goth Machi" },
                { src: "/gallery/rustic-mehndi-night.jpg", alt: "Rustic mehndi night stage decoration with colourful bunting by Events by Momin" },
                { src: "/gallery/blue-mehndi-lounge.jpg", alt: "Blue mirror-tile mehndi lounge seating by Events by Momin in Liaqatpur" },
                { src: "/gallery/lounge-seating.jpg", alt: "Guest lounge seating at mehndi event decorated by Events by Momin" },
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

          {/* Quick checklist */}
          <div
            style={{
              background: "#f6f1ea",
              borderRadius: "14px",
              padding: "24px",
              marginBottom: "32px",
            }}
          >
            <h3 style={{ color: "#7a1b3d", fontWeight: "700", marginBottom: "14px" }}>
              ✅ Mehndi Decoration Quick Checklist
            </h3>
            <ul style={{ color: "#444", lineHeight: 2.1, paddingLeft: "20px" }}>
              <li>Colour palette decided (3 max)</li>
              <li>Stage area / arch / canopy planned</li>
              <li>Hanging décor (laddis, pom-poms, fairy lights)</li>
              <li>Photo corner / selfie wall</li>
              <li>Guest seating (ground cushions / chairs)</li>
              <li>Lighting plan for evening</li>
              <li>Dhol / music setup area</li>
              <li>Decorator booked at least 4 weeks ahead</li>
            </ul>
          </div>

          {/* CTA */}
          <div
            style={{
              background: "linear-gradient(120deg,#3a0c1e,#7a1b3d)",
              borderRadius: "16px",
              padding: "28px",
              textAlign: "center",
              color: "#fffdfb",
            }}
          >
            <h3 style={{ fontWeight: "bold", fontSize: "1.2rem", marginBottom: "8px" }}>
              Need a Mehndi Decorator in Rahim Yar Khan?
            </h3>
            <p style={{ opacity: 0.85, marginBottom: "18px" }}>
              Events by Momin handles mehndi &amp; dholki decoration across RYK, Sadiqabad, Goth
              Machi, Liaqatpur and all of South Punjab. WhatsApp us today for a free quote.
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
                padding: "13px 28px",
                borderRadius: "999px",
                textDecoration: "none",
                fontSize: "0.95rem",
              }}
            >
              Book Mehndi Decoration — WhatsApp
            </a>
          </div>

          {/* Related */}
          <div style={{ marginTop: "36px" }}>
            <h3 style={{ color: "#7a1b3d", fontWeight: "700", marginBottom: "12px" }}>Related Articles</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a href="/blog/best-stage-decoration-ideas-rahim-yar-khan" style={{ color: "#7a1b3d", textDecoration: "underline" }}>
                → Best Stage Decoration Ideas in Rahim Yar Khan 2026
              </a>
              <a href="/blog/wedding-decoration-budget-guide-south-punjab" style={{ color: "#7a1b3d", textDecoration: "underline" }}>
                → Wedding Decoration Budget Guide for South Punjab
              </a>
              <a href="/mehndi-decoration-rahim-yar-khan" style={{ color: "#7a1b3d", textDecoration: "underline" }}>
                → Our Mehndi Decoration Service
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
