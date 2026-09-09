import { siteConfig } from "@/lib/siteConfig";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Gallery", href: "#gallery" },
  { label: "About Us", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { label: "Wedding Stage Decoration", href: "/wedding-stage-decoration" },
  { label: "Barat Stage Decoration", href: "/barat-stage-decoration" },
  { label: "Walima Decoration", href: "/walima-decoration" },
  { label: "Mehndi & Dholki Decoration", href: "/mehndi-decoration-rahim-yar-khan" },
  { label: "Birthday Party Planner", href: "/birthday-party-planner-rahim-yar-khan" },
  { label: "Gala Nights & Theme Parties", href: "#services" },
  { label: "Tent & Marquee Decoration", href: "/tent-marquee-decoration-ryk" },
  { label: "Catering Services RYK", href: "/catering-services-rahim-yar-khan" },
];

const cityLinks = [
  { label: "Event Planner Rahim Yar Khan", href: "/event-planner-rahim-yar-khan" },
  { label: "Event Planner Sadiqabad", href: "/event-planner-sadiqabad" },
  { label: "Wedding Decorator Khanpur", href: "/wedding-decorator-khanpur" },
  { label: "Event Planner Goth Machi", href: "/event-planner-goth-machi" },
  { label: "Event Planner Liaqatpur", href: "/event-planner-liaqatpur" },
];

export default function Footer() {
  return (
    <footer className="bg-maroon-950 text-cream-100/80">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 py-12 border-b border-cream-100/10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="font-display text-2xl font-bold text-cream-50">
              Ready to plan your <span className="text-gradient-gold">next celebration?</span>
            </h3>
            <p className="text-sm mt-1">
              Message us today — we usually reply within a few hours.
            </p>
          </div>
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !bg-gold-500 hover:!bg-gold-600 !text-maroon-900 flex-shrink-0"
          >
            Book on WhatsApp
          </a>
        </div>
      </div>

      <div className="section-padding !py-14">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-display text-2xl font-bold text-cream-50 mb-3">
              Events <span className="text-gradient-gold">by Momin</span>
            </h3>
            <p className="text-sm leading-relaxed">
              South Punjab&apos;s trusted event management &amp; decor studio for weddings, mehndi,
              barat, walima, birthdays, gala nights, mango parties and office parties.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-cream-50/10 border border-gold-300/30 flex items-center justify-center hover:bg-gold-500 hover:text-maroon-900 transition-colors"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
                </svg>
              </a>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-cream-50/10 border border-gold-300/30 flex items-center justify-center hover:bg-gold-500 hover:text-maroon-900 transition-colors"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                  <path d="M14 9h3V6h-3a3 3 0 00-3 3v2H9v3h2v6h3v-6h3l1-3h-4V9a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-cream-50/10 border border-gold-300/30 flex items-center justify-center hover:bg-gold-500 hover:text-maroon-900 transition-colors"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M8.5 8.7c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.4.2.5.7 1.6.7 1.8.1.1.1.3 0 .5-.1.1-.1.2-.3.4l-.4.5c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.6-.7c.2-.2.4-.2.6-.1l1.6.8c.2.1.4.2.4.4.1.5-.1 1.4-.6 1.8-.6.5-1.7.9-2.9.5-1.5-.5-3.4-1.5-4.9-3.5-1.2-1.6-1.7-2.9-1.9-3.7-.2-.7 0-1.4.3-1.9z" fill="currentColor" />
                </svg>
              </a>
              <a
                href={siteConfig.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 rounded-full bg-cream-50/10 border border-gold-300/30 flex items-center justify-center hover:bg-gold-500 hover:text-maroon-900 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.36 6.36 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.16 8.16 0 004.77 1.52V6.75a4.85 4.85 0 01-1-.06z"/>
                </svg>
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-cream-50/10 border border-gold-300/30 flex items-center justify-center hover:bg-gold-500 hover:text-maroon-900 transition-colors"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M7 10v7M7 7v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M11 17v-4a2 2 0 014 0v4M11 10v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href={siteConfig.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="w-10 h-10 rounded-full bg-cream-50/10 border border-gold-300/30 flex items-center justify-center hover:bg-gold-500 hover:text-maroon-900 transition-colors"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4c0 3-2 5-4 5-.7 0-1.4-.3-1.8-.7L9.5 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-cream-50 font-semibold mb-3">Our Services</h4>
            <ul className="space-y-2 text-sm">
              {serviceLinks.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className="hover:text-gold-300 transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-cream-50 font-semibold mb-3">Areas We Serve</h4>
            <ul className="space-y-2 text-sm">
              {cityLinks.map((c) => (
                <li key={c.href}>
                  <a href={c.href} className="hover:text-gold-300 transition-colors">
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="text-cream-50 font-semibold mb-3 mt-6">Quick Links</h4>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-gold-300 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-cream-50 font-semibold mb-3">Get In Touch</h4>
            <ul className="space-y-2 text-sm">
              <li>{siteConfig.fullAddress}</li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-gold-300 transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-gold-300 transition-colors">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold-300 transition-colors">
                  Instagram: {siteConfig.instagramHandle}
                </a>
              </li>
              <li>
                <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-gold-300 transition-colors">
                  Facebook: {siteConfig.facebookName}
                </a>
              </li>
              <li>
                <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gold-300 transition-colors">
                  LinkedIn: Events by Momin
                </a>
              </li>
              <li>
                <a href={siteConfig.pinterest} target="_blank" rel="noopener noreferrer" className="hover:text-gold-300 transition-colors">
                  Pinterest: eventsbymomin
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto border-t border-cream-100/10 mt-10 pt-6 text-xs text-cream-100/50 flex flex-col sm:flex-row justify-between gap-3">
          <p>© {new Date().getFullYear()} Events by Momin. All rights reserved.</p>
          <p>
            Serving Rahim Yar Khan, Sadiqabad, Khanpur, Goth Machi, Liaqatpur &amp; all of South Punjab.
          </p>
        </div>
      </div>
    </footer>
  );
}
