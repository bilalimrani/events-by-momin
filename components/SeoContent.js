// SeoContent — keyword-rich descriptive section for Google indexing.
// Styled subtly so it blends naturally with the page design.

import { siteConfig } from "@/lib/siteConfig";

const cityLinks = [
  { label: "Event Planner Rahim Yar Khan", href: "/event-planner-rahim-yar-khan" },
  { label: "Event Planner Sadiqabad", href: "/event-planner-sadiqabad" },
  { label: "Wedding Decorator Khanpur", href: "/wedding-decorator-khanpur" },
  { label: "Event Planner Goth Machi", href: "/event-planner-goth-machi" },
  { label: "Event Planner Liaqatpur", href: "/event-planner-liaqatpur" },
];

const serviceLinks = [
  { label: "Wedding Stage Decoration", href: "/wedding-stage-decoration" },
  { label: "Barat Stage Decoration", href: "/barat-stage-decoration" },
  { label: "Walima Decoration", href: "/walima-decoration" },
  { label: "Mehndi & Dholki Decoration", href: "/mehndi-decoration-rahim-yar-khan" },
  { label: "Birthday Party Planner", href: "/birthday-party-planner-rahim-yar-khan" },
  { label: "Gala Night Event Planner", href: "/gala-night-event-planner" },
  { label: "Mango Party Decoration", href: "/mango-party-decoration" },
  { label: "Corporate Event Management", href: "/corporate-event-management-rahim-yar-khan" },
  { label: "Engagement Decoration", href: "/engagement-decoration" },
  { label: "Baby Shower Decoration", href: "/baby-shower-decoration" },
];

export default function SeoContent() {
  return (
    <section
      className="bg-cream-100 border-t border-gold-100"
      aria-label="About Events by Momin — Event Planner in South Punjab"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 py-16 sm:py-20">
        {/* Heading */}
        <div className="text-center mb-10">
          <span className="section-eyebrow">About Us</span>
          <h2 className="section-heading">
            Events by Momin —{" "}
            <span className="text-gold-600">South Punjab&apos;s Most Searched Event Planner</span>
          </h2>
          <div className="gold-divider mt-6" />
        </div>

        {/* Rich text content */}
        <div className="grid lg:grid-cols-2 gap-10 text-charcoal/75 leading-relaxed text-sm sm:text-base">
          <div>
            <h3 className="font-display text-xl font-bold text-maroon-700 mb-3">
              Best Event Planner &amp; Decoration Company in Rahim Yar Khan (RYK)
            </h3>
            <p className="mb-4">
              <strong>Events by Momin</strong> is widely recognized as the{" "}
              <strong>best event planner in RYK</strong> and the leading provider of{" "}
              <strong>event decor services in Rahim Yar Khan</strong>. Proudly based in South Punjab,
              we have managed and decorated 500+ events — making us the most trusted name across
              Rahim Yar Khan, Sadiqabad, Khanpur, Goth Machi, Liaqatpur and all of South Punjab for{" "}
              <strong>best event decoration</strong>,{" "}
              <strong>best wedding planning</strong> and{" "}
              <strong>best event management services in RYK</strong>.
            </p>
            <p className="mb-4">
              Whether you&apos;re planning a grand <strong>wedding decor</strong>, a colourful{" "}
              <strong>mehndi and dholki night</strong>, a show-stopping{" "}
              <strong>barat stage decoration</strong>, an elegant{" "}
              <strong>walima reception</strong>, a fun <strong>birthday party</strong>, a glamorous{" "}
              <strong>gala night</strong>, a refreshing <strong>mango party</strong>, or a polished{" "}
              <strong>corporate event</strong> — Events by Momin is the one team you need.
            </p>
            <p>
              Our professional decorators and event planners bring world-class design — LED stages,
              flower walls, balloon art, drapery, fairy lights and custom backdrops — to make every
              event unforgettable, at honest and transparent prices for every budget.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold text-maroon-700 mb-3">
              Serving All of South Punjab — From RYK to Liaqatpur
            </h3>
            <p className="mb-4">
              Our team travels across South Punjab for full on-site event setup. We are the{" "}
              <strong>No. 1 event planner in Rahim Yar Khan</strong>, the top-rated{" "}
              <strong>events planner in Sadiqabad</strong>, and the{" "}
              <strong>best wedding decorator in Khanpur</strong>. We also regularly serve{" "}
              <strong>Goth Machi</strong>, <strong>Liaqatpur</strong>,{" "}
              <strong>Ahmadpur East</strong>, Sadiq Colony and all surrounding towns.
            </p>
            <p className="mb-4">
              Looking for the <strong>&quot;best decoration company near me&quot;</strong>,{" "}
              <strong>&quot;best event planner in RYK&quot;</strong>,{" "}
              <strong>&quot;best event services in Rahim Yar Khan&quot;</strong> or{" "}
              <strong>&quot;best wedding planner South Punjab&quot;</strong>? Events by Momin is your
              answer — one call and we handle everything from theme to cleanup.
            </p>
            <p>
              Contact us today on WhatsApp at{" "}
              <a
                href={siteConfig.whatsappLink}
                className="text-maroon-700 font-semibold underline hover:text-maroon-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteConfig.phoneDisplay}
              </a>{" "}
              or email us at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-maroon-700 font-semibold underline hover:text-maroon-900"
              >
                {siteConfig.email}
              </a>
              . We reply within a few hours.
            </p>
          </div>
        </div>

        {/* City links */}
        <div className="mt-12">
          <h3 className="font-display text-lg font-bold text-maroon-700 mb-4 text-center">
            Event Planning by City
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {cityLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 rounded-full border-2 border-gold-400 text-maroon-700 text-xs sm:text-sm font-semibold bg-white hover:bg-maroon-700 hover:text-cream-50 hover:border-maroon-700 transition-all duration-300 shadow-sm"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Service links */}
        <div className="mt-8">
          <h3 className="font-display text-lg font-bold text-maroon-700 mb-4 text-center">
            Event Decoration by Service
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 rounded-full border-2 border-gold-200 text-charcoal/70 text-xs sm:text-sm font-medium bg-white hover:border-gold-400 hover:text-maroon-700 transition-all duration-300 shadow-sm"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* NAP block — for local SEO consistency */}
        <address
          className="mt-12 text-center not-italic text-sm text-charcoal/60 leading-relaxed"
          itemScope
          itemType="https://schema.org/LocalBusiness"
        >
          <span itemProp="name" className="font-semibold text-maroon-700">Events by Momin</span>
          {" · "}
          <span itemProp="streetAddress">Darhi Sanghi, Near Dominos</span>
          {", "}
          <span itemProp="addressLocality">Rahim Yar Khan</span>
          {", "}
          <span itemProp="addressRegion">Punjab</span>
          {", "}
          <span itemProp="addressCountry">Pakistan</span>
          {" · "}
          <a href={`tel:${siteConfig.phoneRaw}`} itemProp="telephone" className="text-maroon-700 hover:underline">
            {siteConfig.phoneDisplay}
          </a>
          {" · "}
          <a href={`mailto:${siteConfig.email}`} itemProp="email" className="text-maroon-700 hover:underline">
            {siteConfig.email}
          </a>
        </address>
      </div>
    </section>
  );
}
