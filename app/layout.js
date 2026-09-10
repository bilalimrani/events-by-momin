import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "Events by Momin | Luxury Event Planner & Best Event Management Company in Rahim Yar Khan, South Punjab",
    template: "%s | Events by Momin",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "Events by Momin" }],
  creator: "Events by Momin",
  publisher: "Events by Momin",
  verification: {
    google: "fFWa8Z_JPigLzwSnvgEHu9TsTGmGLHJa4KUfME0N5CU",
  },
  applicationName: siteConfig.name,
  category: "Event Planning & Management Services",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title:
      "Events by Momin | Luxury Event Planner & Best Event Management Company in Rahim Yar Khan, South Punjab",
    description: siteConfig.description,
    images: [
      {
        url: "/gallery/grand-entrance-aisle.jpg",
        width: 1100,
        height: 825,
        alt: "Crystal chandelier red carpet wedding entrance decor by Events by Momin, top event planner in Rahim Yar Khan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Events by Momin | Luxury Event Planner & Best Event Management Company in Rahim Yar Khan, South Punjab",
    description: siteConfig.description,
    images: ["/gallery/grand-entrance-aisle.jpg"],
  },
  other: {
    "geo.region": "PK-PB",
    "geo.placename": "Rahim Yar Khan",
  },
};

export default function RootLayout({ children }) {
  // LocalBusiness schema — "EventPlanning" is not a valid Schema.org type; use LocalBusiness
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: siteConfig.name,
    image: [
      `${siteConfig.url}/gallery/grand-entrance-aisle.jpg`,
      `${siteConfig.url}/gallery/wedding-decor.jpg`,
      `${siteConfig.url}/gallery/barat-stage.jpg`,
      `${siteConfig.url}/gallery/mehndi-dholki.jpg`,
      `${siteConfig.url}/gallery/walima-reception.jpg`,
      `${siteConfig.url}/logo.png`,
    ],
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/logo.png`,
    },
    "@id": `${siteConfig.url}/#business`,
    url: siteConfig.url,
    telephone: siteConfig.phoneRaw,
    email: siteConfig.email,
    priceRange: "$$",
    currenciesAccepted: "PKR",
    paymentAccepted: "Cash, Bank Transfer",
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    foundingDate: "2020",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.streetAddress,
      addressLocality: siteConfig.primaryCity,
      addressRegion: siteConfig.addressRegion,
      postalCode: "64200",
      addressCountry: siteConfig.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.4196",
      longitude: "70.2980",
    },
    hasMap: siteConfig.mapEmbedSrc,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "09:00",
        closes: "22:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Rahim Yar Khan", containedInPlace: { "@type": "State", name: "Punjab, Pakistan" } },
      { "@type": "City", name: "Sadiqabad", containedInPlace: { "@type": "State", name: "Punjab, Pakistan" } },
      { "@type": "City", name: "Khanpur", containedInPlace: { "@type": "State", name: "Punjab, Pakistan" } },
      { "@type": "City", name: "Goth Machi", containedInPlace: { "@type": "State", name: "Punjab, Pakistan" } },
      { "@type": "City", name: "Liaqatpur", containedInPlace: { "@type": "State", name: "Punjab, Pakistan" } },
      { "@type": "City", name: "Ahmadpur East", containedInPlace: { "@type": "State", name: "Punjab, Pakistan" } },
    ],
    serviceType: [
      "Event Planning",
      "Wedding Decoration",
      "Event Management",
      "Party Planning",
      "Event Decoration",
    ],
    sameAs: [
      siteConfig.instagram,
      siteConfig.facebook,
      siteConfig.tiktok,
      `https://wa.me/${siteConfig.phoneRaw.replace("+", "")}`,
      siteConfig.linkedin,
      siteConfig.pinterest,
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "47",
      reviewCount: "47",
    },
    review: [
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Asma Rashid" },
        reviewBody:
          "Events by Momin ne humari shadi ke liye kaam kiya aur sach mein unka kaam bohat zabardast tha. Stage decoration, mehndi setup sab kuch perfect tha. Highly recommended for Rahim Yar Khan!",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Bilal Ahmed" },
        reviewBody:
          "Best event planner in South Punjab. Our barat and walima were both handled by Events by Momin and the decor was absolutely beautiful. Will definitely hire again!",
      },
    ],
    makesOffer: [
      { "@type": "Offer", name: "Wedding Decor & Planning", description: "Complete wedding decoration including stage, mandap, drapery and floral design in Rahim Yar Khan and South Punjab.", areaServed: "Rahim Yar Khan, South Punjab, Pakistan" },
      { "@type": "Offer", name: "Barat Stage Decoration", description: "Show-stopping barat stages with lighting, flowers and premium seating.", areaServed: "Rahim Yar Khan, Sadiqabad, South Punjab" },
      { "@type": "Offer", name: "Walima Decoration", description: "Regal walima receptions with luxury backdrops and ambient lighting.", areaServed: "South Punjab, Pakistan" },
      { "@type": "Offer", name: "Mehndi & Dholki Setup", description: "Vibrant mehndi and dholki decor with colourful themes and photo corners.", areaServed: "South Punjab, Pakistan" },
      { "@type": "Offer", name: "Birthday Party Decoration", description: "Fun birthday setups for kids and adults — balloon art, backdrops and themed props.", areaServed: "South Punjab, Pakistan" },
      { "@type": "Offer", name: "Gala Nights & Theme Parties", description: "Glamorous gala night setups with statement lighting and red-carpet entrances.", areaServed: "South Punjab, Pakistan" },
      { "@type": "Offer", name: "Baby Shower Decoration", description: "Sweet baby shower and welcome-baby decor for the whole family.", areaServed: "South Punjab, Pakistan" },
      { "@type": "Offer", name: "Office & Corporate Parties", description: "Professional corporate event management for annual dinners and office celebrations.", areaServed: "South Punjab, Pakistan" },
      { "@type": "Offer", name: "Mango Party & Summer Themes", description: "Refreshing mango-party and summer-themed decor for seasonal get-togethers in South Punjab.", areaServed: "South Punjab, Pakistan" },
      { "@type": "Offer", name: "Engagement & Anniversary Decoration", description: "Romantic engagement and anniversary decor with elegant floral arches and ring ceremony stages.", areaServed: "South Punjab, Pakistan" },
    ],
  };

  // WebSite schema — helps Google understand site structure
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#business` },
    inLanguage: "en-PK",
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${siteConfig.url}/?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };

  // ItemList schema — lists all services for Google rich results
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Event Planning & Decoration Services — Events by Momin",
    description: "Complete list of event management and decoration services offered by Events by Momin across South Punjab, Pakistan.",
    url: siteConfig.url,
    numberOfItems: 14,
    itemListElement: [
      { "@type": "ListItem", position: 1, url: `${siteConfig.url}/wedding-stage-decoration`, name: "Wedding Stage Decoration — Events by Momin" },
      { "@type": "ListItem", position: 2, url: `${siteConfig.url}/barat-stage-decoration`, name: "Barat Stage Decoration — Events by Momin" },
      { "@type": "ListItem", position: 3, url: `${siteConfig.url}/walima-decoration`, name: "Walima Decoration — Events by Momin" },
      { "@type": "ListItem", position: 4, url: `${siteConfig.url}/mehndi-decoration-rahim-yar-khan`, name: "Mehndi & Dholki Decoration — Events by Momin" },
      { "@type": "ListItem", position: 5, url: `${siteConfig.url}/birthday-party-planner-rahim-yar-khan`, name: "Birthday Party Planner — Events by Momin" },
      { "@type": "ListItem", position: 6, url: `${siteConfig.url}/gala-night-event-planner`, name: "Gala Night Event Planner — Events by Momin" },
      { "@type": "ListItem", position: 7, url: `${siteConfig.url}/mango-party-decoration`, name: "Mango Party Decoration — Events by Momin" },
      { "@type": "ListItem", position: 8, url: `${siteConfig.url}/corporate-event-management-rahim-yar-khan`, name: "Corporate Event Management — Events by Momin" },
      { "@type": "ListItem", position: 9, url: `${siteConfig.url}/engagement-decoration`, name: "Engagement & Ring Ceremony Decoration — Events by Momin" },
      { "@type": "ListItem", position: 10, url: `${siteConfig.url}/baby-shower-decoration`, name: "Baby Shower & Aqeeqa Decoration — Events by Momin" },
      { "@type": "ListItem", position: 11, url: `${siteConfig.url}/mun-event-management-rahim-yar-khan`, name: "MUN & School Event Management — Events by Momin" },
      { "@type": "ListItem", position: 12, url: `${siteConfig.url}/hbl-qawali-night-dinner-ryk`, name: "HBL Qawali Night & Corporate Dinner — Events by Momin" },
      { "@type": "ListItem", position: 13, url: `${siteConfig.url}/tent-marquee-decoration-ryk`, name: "Tent & Marquee Decoration RYK — Events by Momin" },
      { "@type": "ListItem", position: 14, url: `${siteConfig.url}/catering-services-rahim-yar-khan`, name: "Catering Services Rahim Yar Khan — Events by Momin" },
    ],
  };

  return (
    <html lang="en">
      <head>
        {/* Preconnect for faster Google Fonts loading — improves Core Web Vitals */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for WhatsApp and social links */}
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        <link rel="dns-prefetch" href="https://www.facebook.com" />
      </head>
      <body
        className={`${playfair.variable} ${poppins.variable} font-body antialiased bg-cream-100 text-charcoal`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
