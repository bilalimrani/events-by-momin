import { siteConfig } from "@/lib/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Event Planning Tips & Ideas | Events by Momin Blog",
  description:
    "Read expert event planning tips, decoration ideas and guides from Events by Momin — South Punjab's top event planner in Rahim Yar Khan, Sadiqabad, Khanpur and beyond.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    title: "Event Planning Tips & Ideas | Events by Momin Blog",
    description:
      "Expert event planning tips, wedding decoration guides and party ideas from South Punjab's #1 event planner — Events by Momin, Rahim Yar Khan.",
    images: [{ url: `${siteConfig.url}/gallery/grand-entrance-aisle.jpg` }],
  },
};

const posts = [
  {
    slug: "best-stage-decoration-ideas-rahim-yar-khan",
    title: "Best Stage Decoration Ideas in Rahim Yar Khan 2026",
    excerpt:
      "Discover the most popular and stunning stage decoration styles trending in RYK — from floral mandaps and LED backdrops to royal throne setups. Get inspired for your wedding, barat or walima.",
    category: "Wedding Decor",
    date: "August 2026",
    photo: "/gallery/wedding-decor.jpg",
  },
  {
    slug: "mehndi-decoration-tips-ryk",
    title: "Mehndi Decoration Tips — Best Setups in Rahim Yar Khan",
    excerpt:
      "Planning a mehndi or dholki in RYK or South Punjab? Here are the top decoration tips, colour themes and stage setup ideas that make every mehndi unforgettable.",
    category: "Mehndi & Dholki",
    date: "August 2026",
    photo: "/gallery/mehndi-dholki.jpg",
  },
  {
    slug: "wedding-decoration-budget-guide-south-punjab",
    title: "Wedding Decoration Budget Guide for South Punjab",
    excerpt:
      "Worried about wedding decoration costs? This honest guide breaks down barat, walima and mehndi decoration budgets in Rahim Yar Khan, Sadiqabad and South Punjab — so you get the best decor at the right price.",
    category: "Wedding Planning",
    date: "July 2026",
    photo: "/gallery/barat-stage.jpg",
  },
  {
    slug: "top-event-planner-rahim-yar-khan",
    title: "Top Event Planners in Rahim Yar Khan — Complete Guide 2026",
    excerpt:
      "Looking for the best event planner in Rahim Yar Khan? We break down what to look for, questions to ask, and why Events by Momin is RYK's most trusted event management company.",
    category: "Event Planning",
    date: "July 2026",
    photo: "/gallery/grand-entrance-aisle.jpg",
  },
  {
    slug: "corporate-event-planning-ryk",
    title: "Corporate Event Planning in RYK — Complete Guide",
    excerpt:
      "Planning a corporate dinner, annual function, gala night or office party in Rahim Yar Khan? This complete guide covers everything — venue, decoration, sound, catering and event management tips.",
    category: "Corporate Events",
    date: "June 2026",
    photo: "/gallery/gala-night.jpg",
  },
];

export default function BlogPage() {
  return (
    <>
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
            {" "}›{" "}Blog
          </p>
          <h1
            style={{
              fontSize: "clamp(1.8rem,5vw,3rem)",
              fontWeight: "bold",
              lineHeight: 1.2,
              marginBottom: "16px",
            }}
          >
            Event Planning Tips &amp; Ideas
          </h1>
          <p style={{ fontSize: "1.05rem", maxWidth: "580px", margin: "0 auto", opacity: 0.9 }}>
            Expert advice on wedding decoration, mehndi setups, stage design and party planning
            from South Punjab&apos;s most trusted event team.
          </p>
        </div>

        {/* Posts Grid */}
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "48px 24px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "28px",
            }}
          >
            {posts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  style={{
                    border: "1px solid #e8dfc8",
                    borderRadius: "16px",
                    overflow: "hidden",
                    background: "#fff",
                    boxShadow: "0 2px 12px rgba(58,12,30,0.07)",
                  }}
                >
                  <div style={{ height: "180px", overflow: "hidden" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.photo}
                      alt={post.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ padding: "20px" }}>
                    <span
                      style={{
                        display: "inline-block",
                        background: "#f6f1ea",
                        color: "#7a1b3d",
                        fontSize: "0.75rem",
                        fontWeight: "700",
                        padding: "4px 12px",
                        borderRadius: "999px",
                        marginBottom: "10px",
                      }}
                    >
                      {post.category}
                    </span>
                    <h2
                      style={{
                        color: "#3a0c1e",
                        fontSize: "1.05rem",
                        fontWeight: "700",
                        lineHeight: 1.4,
                        marginBottom: "10px",
                      }}
                    >
                      {post.title}
                    </h2>
                    <p style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "14px" }}>
                      {post.excerpt}
                    </p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ color: "#999", fontSize: "0.8rem" }}>{post.date}</span>
                      <span style={{ color: "#7a1b3d", fontSize: "0.85rem", fontWeight: "600" }}>
                        Read More →
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div
            style={{
              background: "linear-gradient(120deg,#3a0c1e,#7a1b3d)",
              borderRadius: "16px",
              padding: "36px 28px",
              textAlign: "center",
              color: "#fffdfb",
              marginTop: "48px",
            }}
          >
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "10px" }}>
              Ready to Plan Your Event?
            </h2>
            <p style={{ opacity: 0.85, marginBottom: "20px" }}>
              Contact Events by Momin today — South Punjab&apos;s most trusted event planner in
              Rahim Yar Khan, Sadiqabad, Khanpur and beyond.
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
              Book on WhatsApp — {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
