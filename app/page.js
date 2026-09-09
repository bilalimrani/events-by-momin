import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import ServiceAreas from "@/components/ServiceAreas";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import SeoContent from "@/components/SeoContent";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig } from "@/lib/siteConfig";

// FAQ schema is placed here (server component) so Googlebot sees it in the
// initial HTML — not inside a "use client" component where it would only
// appear after JavaScript executes.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is the best event planner in Rahim Yar Khan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Events by Momin is one of the most searched and highest-rated event management and decor companies in Rahim Yar Khan (RYK), trusted for weddings, mehndis, birthdays and corporate parties.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide wedding decor in Sadiqabad and Khanpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We regularly travel to Sadiqabad, Khanpur, Goth Machi, Liaqatpur and surrounding South Punjab towns for wedding, barat and walima decor.",
      },
    },
    {
      "@type": "Question",
      name: "Who is the best events planner in Sadiqabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Events by Momin is a top-rated events planner serving Sadiqabad — from wedding, barat and walima stage decor to mehndi, dholki, birthday and corporate events. Our team regularly travels to Sadiqabad for setup and on-ground execution, so you get the same premium decor and planning quality as our Rahim Yar Khan clients.",
      },
    },
    {
      "@type": "Question",
      name: "What events does Events by Momin manage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We manage weddings, barat and walima stages, mehndi and dholki setups, birthday parties, gala nights, mango parties, office and corporate parties, engagements, anniversaries and baby showers.",
      },
    },
    {
      "@type": "Question",
      name: "How much does mehndi, barat or walima decoration cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pricing depends on venue size, theme and guest count. Message us on WhatsApp with your event details and we'll share a transparent, no-obligation quote.",
      },
    },
    {
      "@type": "Question",
      name: "Do you plan mango parties and theme parties?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Mango parties and seasonal theme parties are one of our specialities — bright, fun décor perfect for get-togethers across South Punjab.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book Events by Momin for my event?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Simply WhatsApp or call us at ${siteConfig.phoneDisplay}, or email ${siteConfig.email}, and our team will get back to you with availability and packages.`,
      },
    },
    {
      "@type": "Question",
      name: "Is there a reliable event organizer in Rahim Yar Khan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Events by Momin is a full-service event organizer in Rahim Yar Khan, handling everything from theme, décor and vendors to on-ground execution so you don't have to manage anything yourself.",
      },
    },
    {
      "@type": "Question",
      name: "Who is the best wedding planner in RYK, Sadiqabad or Khanpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Events by Momin is a leading wedding planner across Rahim Yar Khan, Sadiqabad and Khanpur, covering everything from bridal stage decor to barat, walima, mehndi and dholki planning.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work as a party planner for birthdays and get-togethers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely — we're a trusted party planner for birthdays, get-togethers, gala nights and mango parties, taking care of theme, décor, seating and setup from start to finish.",
      },
    },
    {
      "@type": "Question",
      name: "Are you just decorators or a full decoration company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We're a complete decoration company — not just decorators. Events by Momin plans, designs and installs everything from stage decor and lighting to florals, so you get one team for the whole event.",
      },
    },
    {
      "@type": "Question",
      name: "Kya aap Goth Machi aur Liaqatpur mein bhi event decor karte hain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Haan! Events by Momin Goth Machi aur Liaqatpur mein bhi full event decoration services deta hai — wedding, barat, walima, mehndi, birthday aur gala night sab kuch. Hamaari team on-site travel karti hai setup ke liye.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best mehndi decoration company in Rahim Yar Khan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Events by Momin is the most searched and trusted mehndi decoration company in Rahim Yar Khan — serving RYK, Sadiqabad, Khanpur, Goth Machi and Liaqatpur with colourful mehndi stages, dholki setups, photo corners and custom backdrops.",
      },
    },
    {
      "@type": "Question",
      name: "Do you do baby shower and engagement decoration in South Punjab?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Events by Momin handles baby shower decoration, engagement and ring ceremony decor, bridal shower setups and anniversary decoration across Rahim Yar Khan and all of South Punjab.",
      },
    },
    {
      "@type": "Question",
      name: "How far in advance should I book Events by Momin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For weddings and large functions, we recommend booking at least 4–8 weeks in advance, especially during peak wedding season. For smaller events like birthdays and get-togethers, 1–2 weeks is usually sufficient. WhatsApp us to check availability.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Gallery />
        <About />
        <Services />
        <WhyUs />
        <ServiceAreas />
        <Testimonials />
        <FAQ />
        <Contact />
        <SeoContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
