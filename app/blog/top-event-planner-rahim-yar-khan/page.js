import { siteConfig } from "@/lib/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Top Event Planner in Rahim Yar Khan — Complete Guide 2026 | Events by Momin",
  description:
    "Looking for the best event planner in Rahim Yar Khan? This guide tells you what to look for, questions to ask, and why Events by Momin is RYK's most trusted event management company.",
  keywords: [
    "top event planner Rahim Yar Khan",
    "best event planner RYK",
    "event management company Rahim Yar Khan",
    "event planner near me RYK",
    "event organizer Rahim Yar Khan",
    "how to choose event planner Pakistan",
    "events by momin RYK",
  ],
  alternates: {
    canonical: `${siteConfig.url}/blog/top-event-planner-rahim-yar-khan`,
  },
  openGraph: {
    title: "Top Event Planner in Rahim Yar Khan — Complete Guide 2026 | Events by Momin",
    description:
      "How to choose the best event planner in RYK — what to look for, questions to ask, and why Events by Momin leads South Punjab.",
    images: [{ url: `${siteConfig.url}/gallery/grand-entrance-aisle.jpg` }],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Top Event Planner in Rahim Yar Khan — Complete Guide 2026",
  description:
    "A complete guide to finding and choosing the best event planner in Rahim Yar Khan, South Punjab.",
  image: `${siteConfig.url}/gallery/grand-entrance-aisle.jpg`,
  datePublished: "2026-07-20",
  dateModified: "2026-07-20",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: { "@type": "ImageObject", url: `${siteConfig.url}/logo.png` },
  },
  mainEntityOfPage: `${siteConfig.url}/blog/top-event-planner-rahim-yar-khan`,
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
    { "@type": "ListItem", position: 3, name: "Top Event Planner RYK Guide", item: `${siteConfig.url}/blog/top-event-planner-rahim-yar-khan` },
  ],
};

const qualities = [
  {
    icon: "📸",
    title: "Real Portfolio — Not Just Stock Photos",
    body: "Any serious event planner in RYK should have a real portfolio of events they have personally executed. Ask to see actual photos from weddings, mehndi nights and corporate events they have managed in Rahim Yar Khan and South Punjab. Stock images or photos from other cities are a red flag.",
  },
  {
    icon: "⭐",
    title: "Verified Google Reviews",
    body: "Check the event planner's Google Business profile and read their reviews. Look for reviews that mention specific events, locations and what the client liked. A high number of genuine 5-star reviews from RYK, Sadiqabad and nearby cities is a strong positive signal. Be cautious of profiles with very few or very generic reviews.",
  },
  {
    icon: "📋",
    title: "Transparent, Itemised Quotes",
    body: "A professional event planner should give you a clear, itemised quote — not just a lump sum. You should know exactly what you are paying for: stage decoration, lighting, drapery, flower type, entrance setup and any additional charges for travel or extra items. Hidden costs added later are a sign of an unprofessional team.",
  },
  {
    icon: "📞",
    title: "Responsive Communication",
    body: "Your event planner should respond to your WhatsApp messages and calls quickly. If they take days to reply before booking, it is likely to get worse during your event. A good team stays in regular contact with the client from booking to event day.",
  },
  {
    icon: "🎨",
    title: "Flexibility & Custom Themes",
    body: "The best event planners in RYK don't have a single style they repeat for every event. They listen to what you want, understand your theme and colour preferences, and create a custom design for your event. Ask to see at least 3–5 different styles from their portfolio.",
  },
  {
    icon: "🏙️",
    title: "Local Experience in South Punjab",
    body: "An event planner who has worked extensively in Rahim Yar Khan, Sadiqabad, Khanpur, Goth Machi and Liaqatpur understands local venues, weather conditions, suppliers and guest expectations. This local knowledge is invaluable — it is very different from planners who only work in Lahore or Karachi.",
  },
];

const faqs = [
  {
    q: "How far in advance should I book an event planner in RYK?",
    a: "For weddings and multi-function events, book 6–10 weeks in advance, especially during the October to February wedding season. For smaller events like birthdays or gala nights, 2–4 weeks is usually enough.",
  },
  {
    q: "Do event planners in Rahim Yar Khan travel to Sadiqabad and Khanpur?",
    a: "Yes — Events by Momin regularly travels to Sadiqabad, Khanpur, Goth Machi and Liaqatpur for events. Travel is included in most packages; just confirm when getting your quote.",
  },
  {
    q: "What is the difference between an event planner and a decorator?",
    a: "A decorator focuses on decoration only (stage, flowers, lighting). An event planner manages the whole event — vendor coordination, timeline, setup, on-ground execution and problem-solving on the day. Events by Momin does both.",
  },
  {
    q: "Is Events by Momin the best event planner in Rahim Yar Khan?",
    a: "Events by Momin is one of the most searched, rated and trusted event management companies in RYK — with real portfolio photos, verified reviews, and hundreds of events managed across South Punjab.",
  },
];

export default function TopEventPlannerBlogPage() {
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
            {" "}›{" "}Top Event Planner RYK
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
            Event Planning
          </span>
          <h1
            style={{
              fontSize: "clamp(1.6rem,4.5vw,3rem)",
              fontWeight: "bold",
              lineHeight: 1.2,
              maxWidth: "720px",
              margin: "0 auto 16px",
            }}
          >
            Top Event Planner in Rahim Yar Khan — Complete Guide 2026
          </h1>
          <p style={{ fontSize: "1rem", maxWidth: "580px", margin: "0 auto", opacity: 0.85 }}>
            What to look for, questions to ask, and how to choose the right event management
            company in RYK for your wedding, mehndi or corporate event.
          </p>
          <p style={{ marginTop: "16px", fontSize: "0.85rem", opacity: 0.6 }}>July 2026 · By Events by Momin</p>
        </div>

        {/* Body */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "48px 24px" }}>
          <p style={{ color: "#333", lineHeight: 1.85, fontSize: "1.05rem", marginBottom: "32px" }}>
            Finding a reliable event planner in Rahim Yar Khan can feel overwhelming — especially
            when every team claims to be &quot;the best.&quot; This guide will help you cut through
            the noise and make a confident choice for your wedding, mehndi, corporate event or any
            celebration in South Punjab.
          </p>

          <h2 style={{ color: "#7a1b3d", fontSize: "1.3rem", fontWeight: "700", marginBottom: "20px" }}>
            6 Qualities of a Great Event Planner in RYK
          </h2>

          {qualities.map((q, i) => (
            <div
              key={i}
              style={{
                background: i % 2 === 0 ? "#fff" : "#f6f1ea",
                border: "1px solid #e8dfc8",
                borderRadius: "14px",
                padding: "20px",
                marginBottom: "16px",
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
              }}
            >
              <span style={{ fontSize: "1.8rem", flexShrink: 0 }}>{q.icon}</span>
              <div>
                <h3 style={{ color: "#3a0c1e", fontWeight: "700", fontSize: "1rem", marginBottom: "6px" }}>
                  {q.title}
                </h3>
                <p style={{ color: "#444", lineHeight: 1.75, margin: 0 }}>{q.body}</p>
              </div>
            </div>
          ))}

          {/* Why EBM */}
          <div
            style={{
              background: "linear-gradient(120deg,#3a0c1e,#7a1b3d)",
              borderRadius: "16px",
              padding: "28px",
              color: "#fffdfb",
              marginTop: "36px",
              marginBottom: "36px",
            }}
          >
            <h2 style={{ fontWeight: "bold", fontSize: "1.2rem", marginBottom: "14px" }}>
              Why Events by Momin is RYK&apos;s Most Trusted Event Planner
            </h2>
            <ul style={{ lineHeight: 2.1, paddingLeft: "20px", opacity: 0.9 }}>
              <li>500+ events managed across South Punjab</li>
              <li>Real portfolio of weddings, mehndi, corporate and gala night events</li>
              <li>Serving RYK, Sadiqabad, Khanpur, Goth Machi and Liaqatpur</li>
              <li>Transparent pricing — no hidden costs</li>
              <li>Full service: decoration, lighting, coordination, on-ground execution</li>
              <li>Fast WhatsApp response — usually within a few hours</li>
            </ul>
          </div>

          {/* FAQ */}
          <h2 style={{ color: "#7a1b3d", fontSize: "1.2rem", fontWeight: "700", marginBottom: "16px" }}>
            Frequently Asked Questions
          </h2>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                borderBottom: "1px solid #e8dfc8",
                paddingBottom: "18px",
                marginBottom: "18px",
              }}
            >
              <h3 style={{ color: "#3a0c1e", fontWeight: "700", fontSize: "0.97rem", marginBottom: "6px" }}>
                Q: {faq.q}
              </h3>
              <p style={{ color: "#444", lineHeight: 1.75, margin: 0 }}>A: {faq.a}</p>
            </div>
          ))}

          {/* CTA */}
          <div
            style={{
              background: "#f6f1ea",
              border: "2px solid #c9a227",
              borderRadius: "16px",
              padding: "28px",
              textAlign: "center",
              marginTop: "12px",
            }}
          >
            <h3 style={{ color: "#7a1b3d", fontWeight: "bold", fontSize: "1.2rem", marginBottom: "8px" }}>
              Ready to Book Rahim Yar Khan&apos;s Top Event Planner?
            </h3>
            <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "18px" }}>
              WhatsApp or call Events by Momin today for availability, packages and a free
              personalised quote for your event in RYK or anywhere in South Punjab.
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
                Book on WhatsApp
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

          {/* Related */}
          <div style={{ marginTop: "36px" }}>
            <h3 style={{ color: "#7a1b3d", fontWeight: "700", marginBottom: "12px" }}>Related Articles</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a href="/blog/wedding-decoration-budget-guide-south-punjab" style={{ color: "#7a1b3d", textDecoration: "underline" }}>
                → Wedding Decoration Budget Guide for South Punjab
              </a>
              <a href="/blog/corporate-event-planning-ryk" style={{ color: "#7a1b3d", textDecoration: "underline" }}>
                → Corporate Event Planning in RYK — Complete Guide
              </a>
              <a href="/event-planner-rahim-yar-khan" style={{ color: "#7a1b3d", textDecoration: "underline" }}>
                → Event Planner Rahim Yar Khan — Our Service Page
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
