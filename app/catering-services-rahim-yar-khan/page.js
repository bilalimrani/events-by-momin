import { siteConfig } from "@/lib/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Catering Services in Rahim Yar Khan & South Punjab | Events by Momin",
  description:
    "Professional catering services in Rahim Yar Khan for weddings, barat, walima, corporate dinners and all events. Desi & continental menu options across RYK, Sadiqabad & South Punjab. Call +92 309 4439441.",
  keywords: [
    "catering services Rahim Yar Khan",
    "catering company RYK",
    "wedding catering South Punjab",
    "catering services Sadiqabad",
    "barat catering Rahim Yar Khan",
    "walima catering RYK",
    "buffet catering South Punjab",
    "corporate catering Rahim Yar Khan",
    "desi catering RYK",
    "event catering near me",
    "catering services Khanpur",
    "catering services Goth Machi",
    "catering services Liaqatpur",
    "affordable catering Rahim Yar Khan",
    "catering chahiye RYK",
    "khana banana hai event ke liye",
    "dawat ka khana RYK",
    "wedding ka khana Rahim Yar Khan",
    "catering wala contact number RYK",
    "barat ka khana chahiye",
    "walima catering contact number",
    "khana catering near me RYK",
    "function ka khana South Punjab",
    "best catering wala RYK",
  ],
  alternates: { canonical: `${siteConfig.url}/catering-services-rahim-yar-khan` },
  openGraph: {
    title: "Catering Services in Rahim Yar Khan | Events by Momin",
    description:
      "Wedding, barat, walima and corporate catering in RYK & South Punjab. Desi buffet, continental menus, full setup. WhatsApp: +92 309 4439441",
    images: [{ url: `${siteConfig.url}/gallery/lounge-seating.jpg` }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: "Events by Momin — Catering Services",
  description:
    "Professional catering coordination for weddings, barat, walima, corporate dinners and all events in Rahim Yar Khan and South Punjab.",
  servesCuisine: ["Pakistani", "Desi", "Continental"],
  hasMenu: `${siteConfig.url}/catering-services-rahim-yar-khan`,
  telephone: siteConfig.phoneRaw,
  url: `${siteConfig.url}/catering-services-rahim-yar-khan`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rahim Yar Khan",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  areaServed: ["Rahim Yar Khan", "Sadiqabad", "Khanpur", "Goth Machi", "Liaqatpur"],
  priceRange: "$$",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Catering Services Rahim Yar Khan", item: `${siteConfig.url}/catering-services-rahim-yar-khan` },
  ],
};

const cateringTypes = [
  {
    icon: "💍",
    title: "Wedding Catering",
    desc: "Complete barat and walima catering — traditional desi dawat with full setup, service staff and cleanup for 100 to 1000+ guests.",
    events: ["Barat", "Walima", "Nikah"],
  },
  {
    icon: "🎵",
    title: "Mehndi & Dholki",
    desc: "Mehndi event catering with snacks, chai, finger food and light bites for family and guests.",
    events: ["Mehndi", "Dholki", "Mayun"],
  },
  {
    icon: "🏢",
    title: "Corporate Catering",
    desc: "Professional catering for corporate dinners, annual functions, gala nights, product launches and office events.",
    events: ["Annual Dinner", "Gala Night", "Office Party"],
  },
  {
    icon: "🎂",
    title: "Birthday & Party Catering",
    desc: "Customised catering for birthday parties, get-togethers, mango parties and seasonal events.",
    events: ["Birthday", "Mango Party", "Get-Together"],
  },
  {
    icon: "🎓",
    title: "Academic Event Catering",
    desc: "Catering for school/college events, MUNs, seminars and farewell parties.",
    events: ["MUN", "Farewell", "Annual Function"],
  },
  {
    icon: "🏡",
    title: "Family Event Catering",
    desc: "Catering for engagements, baby showers, aqeeqa, family gatherings and religious events.",
    events: ["Engagement", "Baby Shower", "Aqeeqa"],
  },
];

const menuItems = [
  { category: "Main Course", items: ["Biryani (Chicken / Mutton)", "Qorma & Korahi", "Nihari & Haleem", "BBQ & Tikka", "Roast Chicken", "Dal Makhani"] },
  { category: "Starters", items: ["Pakoras", "Samosas", "BBQ Boti", "Chicken Wings", "Dahi Bhalle"] },
  { category: "Desserts", items: ["Kheer & Zarda", "Sooji Halwa", "Gajar Ka Halwa", "Sheer Khurma", "Ice Cream"] },
  { category: "Beverages", items: ["Chai & Qahwa", "Cold Drinks", "Fresh Juice", "Lassi", "Water"] },
];

export default function CateringPage() {
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
            {" "}›{" "}Catering Services Rahim Yar Khan
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
            Catering Services in Rahim Yar Khan &amp; South Punjab
          </h1>
          <p style={{ fontSize: "1.1rem", maxWidth: "620px", margin: "0 auto 28px", opacity: 0.9 }}>
            Events by Momin coordinates full catering for weddings, barat, walima, corporate dinners,
            birthdays and all events — across Rahim Yar Khan, Sadiqabad, Khanpur, Goth Machi and
            all of South Punjab.
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
            Book Catering — WhatsApp
          </a>
        </div>

        <div style={{ maxWidth: "820px", margin: "0 auto", padding: "48px 24px" }}>

          {/* Intro */}
          <p style={{ color: "#333", lineHeight: 1.9, fontSize: "1.05rem", marginBottom: "16px" }}>
            Good food is the heart of every celebration in South Punjab. Events by Momin
            coordinates professional catering services for all types of events in Rahim Yar Khan —
            from intimate family gatherings to large weddings with 500+ guests. We work with
            trusted, experienced catering teams to deliver fresh, delicious and hygienic food with
            full setup and service staff.
          </p>
          <p style={{ color: "#333", lineHeight: 1.9, fontSize: "1.05rem", marginBottom: "32px" }}>
            Looking for <strong>&quot;catering services near me&quot;</strong>,{" "}
            <strong>&quot;wedding catering RYK&quot;</strong> or{" "}
            <strong>&quot;catering company in Rahim Yar Khan&quot;</strong>?
            Contact Events by Momin — we handle all catering coordination so you don&apos;t have
            to manage multiple vendors.
          </p>

          {/* Catering types */}
          <h2 style={{ color: "#7a1b3d", fontSize: "1.4rem", fontWeight: "bold", marginBottom: "20px" }}>
            Events We Cater For
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px",
              marginBottom: "40px",
            }}
          >
            {cateringTypes.map((type) => (
              <div
                key={type.title}
                style={{
                  background: "#fff",
                  border: "1px solid #e8dfc8",
                  borderRadius: "14px",
                  padding: "20px",
                  borderTop: "4px solid #c9a227",
                }}
              >
                <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>{type.icon}</div>
                <div style={{ fontWeight: "bold", color: "#7a1b3d", marginBottom: "6px" }}>{type.title}</div>
                <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.65, marginBottom: "10px" }}>{type.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {type.events.map((e) => (
                    <span
                      key={e}
                      style={{
                        background: "#f6f1ea",
                        color: "#7a1b3d",
                        fontSize: "0.75rem",
                        fontWeight: "600",
                        padding: "2px 10px",
                        borderRadius: "999px",
                      }}
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Menu */}
          <h2 style={{ color: "#7a1b3d", fontSize: "1.4rem", fontWeight: "bold", marginBottom: "16px" }}>
            Sample Menu Options
          </h2>
          <div
            style={{
              background: "#f6f1ea",
              borderRadius: "14px",
              padding: "24px",
              marginBottom: "36px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "20px",
              }}
            >
              {menuItems.map((section) => (
                <div key={section.category}>
                  <h3 style={{ color: "#7a1b3d", fontWeight: "700", fontSize: "0.9rem", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {section.category}
                  </h3>
                  <ul style={{ color: "#444", lineHeight: 2, fontSize: "0.9rem", paddingLeft: "0", listStyle: "none" }}>
                    {section.items.map((item) => (
                      <li key={item} style={{ paddingLeft: "0" }}>✓ {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p style={{ color: "#888", fontSize: "0.82rem", marginTop: "16px" }}>
              * Custom menus available on request. Desi, continental and mixed menus can be tailored to your event and budget.
            </p>
          </div>

          {/* What we handle */}
          <h2 style={{ color: "#7a1b3d", fontSize: "1.3rem", fontWeight: "bold", marginBottom: "14px" }}>
            What&apos;s Included in Our Catering Service
          </h2>
          <ul style={{ color: "#444", lineHeight: 2.2, paddingLeft: "20px", marginBottom: "32px" }}>
            <li>Full catering coordination — from menu planning to on-event service</li>
            <li>Experienced serving staff for dawat, buffet or dinner service</li>
            <li>Crockery, cutlery, serving dishes and buffet table setup</li>
            <li>Food prepared fresh on or near the venue</li>
            <li>Hygiene-first approach — all food handled safely</li>
            <li>Cleanup and removal after the event</li>
            <li>Combined packages available with decoration + tent + catering</li>
          </ul>

          {/* Service areas */}
          <h2 style={{ color: "#7a1b3d", fontSize: "1.2rem", fontWeight: "bold", marginBottom: "12px" }}>
            We Provide Catering In
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "32px" }}>
            {["Rahim Yar Khan", "Sadiqabad", "Khanpur", "Goth Machi", "Liaqatpur", "Ahmadpur East", "All of South Punjab"].map((city) => (
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
              background: "linear-gradient(120deg,#3a0c1e,#7a1b3d)",
              borderRadius: "16px",
              padding: "28px",
              textAlign: "center",
              color: "#fffdfb",
              marginBottom: "32px",
            }}
          >
            <h3 style={{ fontWeight: "bold", fontSize: "1.2rem", marginBottom: "8px" }}>
              Get a Catering Quote for Your Event
            </h3>
            <p style={{ opacity: 0.9, lineHeight: 1.7, marginBottom: "18px" }}>
              Tell us your event type, guest count and date — we&apos;ll send you a transparent
              catering quote within hours. Package deals available with decoration + tent + catering.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "#c9a227",
                  color: "#3a0c1e",
                  fontWeight: "bold",
                  padding: "13px 28px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                }}
              >
                💬 WhatsApp for Catering Quote
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                style={{
                  background: "rgba(255,255,255,0.15)",
                  color: "#fffdfb",
                  fontWeight: "bold",
                  padding: "13px 28px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  border: "1px solid rgba(255,255,255,0.3)",
                }}
              >
                📧 {siteConfig.email}
              </a>
            </div>
          </div>

          {/* Local FAQ */}
          <h2 style={{ color: "#7a1b3d", fontSize: "1.3rem", fontWeight: "bold", marginBottom: "16px" }}>
            Aksar Poochhe Jaane Wale Sawalaat
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "36px" }}>
            {[
              {
                q: "Catering chahiye — Events by Momin se kaise book karein?",
                a: "WhatsApp karein 0309-4439441 — event type (barat/walima/birthday), date, location aur guest count batayein. Hum aapko same day catering quote de denge. RYK, Sadiqabad, Khanpur aur poore South Punjab mein service dete hain.",
              },
              {
                q: "Barat ya walima ka khana kitna kharcha aata hai?",
                a: "Catering cost guest count, menu type aur service style par depend karti hai. Hum desi, continental aur mixed menus dete hain. Budget ke hisaab se package milta hai — WhatsApp par poochhein, transparent quote milega.",
              },
              {
                q: "Kya Events by Momin decoration ke saath catering bhi deta hai?",
                a: "Haan! Events by Momin ka combined package hai — decoration + tent + catering sab ek hi jagah se. Alag alag vendors dhundne ki zaroorat nahi. Ek call ya WhatsApp mein pura event manage ho jata hai.",
              },
              {
                q: "Kya khana fresh banta hai ya bahar se aata hai?",
                a: "Hum trusted local catering teams ke saath kaam karte hain jo fresh, hygienic khana venue par ya paas mein tayyar karte hain. Serving staff, crockery aur cleanup sab included hota hai.",
              },
            ].map(({ q, a }) => (
              <div key={q} style={{ background: "#f6f1ea", borderRadius: "12px", padding: "18px 20px", borderLeft: "4px solid #c9a227" }}>
                <div style={{ fontWeight: "700", color: "#7a1b3d", marginBottom: "6px", fontSize: "0.97rem" }}>Q: {q}</div>
                <div style={{ color: "#444", lineHeight: 1.75, fontSize: "0.9rem" }}>A: {a}</div>
              </div>
            ))}
          </div>

          {/* Related */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="/" style={{ color: "#7a1b3d", fontWeight: "bold", textDecoration: "underline" }}>← Home</a>
            <a href="/tent-marquee-decoration-ryk" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Tent Decoration RYK</a>
            <a href="/wedding-stage-decoration" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Wedding Stage Decoration</a>
            <a href="/corporate-event-management-rahim-yar-khan" style={{ color: "#7a1b3d", textDecoration: "underline" }}>Corporate Event Management</a>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
