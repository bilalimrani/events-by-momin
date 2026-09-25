"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

const services = [
  {
    title: "Wedding Decor &amp; Planning",
    desc: "Elegant end-to-end wedding decor — stages, mandaps, drapery, floral design and full-day coordination.",
    icon: "ring",
    featured: true,
  },
  {
    title: "Barat Stage &amp; Decoration",
    desc: "Show-stopping barat stages with lighting, flowers and premium seating across RYK &amp; Sadiqabad.",
    icon: "star",
  },
  {
    title: "Walima Decoration",
    desc: "Regal walima receptions with luxury backdrops, centrepieces and ambient lighting design.",
    icon: "crown",
  },
  {
    title: "Mehndi &amp; Dholki Setup",
    desc: "Vibrant mehndi and dholki décor with colourful themes, dhol arrangements and photo corners.",
    icon: "flower",
  },
  {
    title: "Gala Nights &amp; Theme Parties",
    desc: "Glamorous gala night setups with statement lighting, stage design and red-carpet entrances.",
    icon: "sparkle",
  },
  {
    title: "Birthday Party Decoration",
    desc: "Fun, colourful birthday setups for kids &amp; adults — balloon art, backdrops and themed props.",
    icon: "cake",
  },
  {
    title: "Mango Party &amp; Summer Themes",
    desc: "Refreshing mango-party &amp; summer-themed décor perfect for seasonal get-togethers in South Punjab.",
    icon: "sun",
  },
  {
    title: "Office &amp; Corporate Parties",
    desc: "Professional corporate event management — annual dinners, launches and office celebrations.",
    icon: "briefcase",
  },
  {
    title: "Engagement &amp; Anniversary",
    desc: "Romantic engagement and anniversary decor with elegant floral arches and ring ceremony stages.",
    icon: "heart",
  },
  {
    title: "Baby Shower &amp; Welcome Parties",
    desc: "Sweet, thoughtfully designed baby shower and welcome-baby décor for the whole family.",
    icon: "gift",
  },
  {
    title: "Balloon, Flower &amp; LED Decor",
    desc: "Statement balloon art, fresh &amp; artificial flower walls, and LED stage lighting for any event.",
    icon: "balloon",
  },
  {
    title: "Tent &amp; Marquee Decoration",
    desc: "Shamiana setup, ceiling drapery, fairy lights &amp; full marquee decoration for outdoor weddings and events.",
    icon: "tent",
    link: "/tent-marquee-decoration-ryk",
  },
  {
    title: "Catering Services",
    desc: "Full catering coordination — desi dawat, buffet &amp; continental menus for weddings, corporates &amp; all events.",
    icon: "food",
    link: "/catering-services-rahim-yar-khan",
  },
  {
    title: "Full Event Management",
    desc: "Catering coordination, sound &amp; lighting, seating and complete on-ground event execution.",
    icon: "calendar",
  },
];

const icons = {
  ring: (
    <path d="M12 15a5 5 0 100-10 5 5 0 000 10zM12 15v6m-4 0h8" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
  ),
  star: (
    <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9L5.7 21l1.7-7L2 9.2l7.1-.6L12 2z" fill="currentColor" />
  ),
  crown: (
    <path d="M3 8l4 4 5-7 5 7 4-4-2 11H5L3 8z" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinejoin="round" />
  ),
  flower: (
    <path d="M12 8a3 3 0 110 6 3 3 0 010-6zm0-6c1 2 1 4 0 6M12 22c1-2 1-4 0-6M2 12c2-1 4-1 6 0M16 12c2-1 4-1 6 0M5 5c1.5 1.5 2.5 3 3 5M16 14c.5 2 1.5 3.5 3 5M19 5c-1.5 1.5-2.5 3-3 5M8 14c-.5 2-1.5 3.5-3 5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
  ),
  sparkle: (
    <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" fill="currentColor" />
  ),
  cake: (
    <path d="M4 21v-8a2 2 0 012-2h12a2 2 0 012 2v8M4 21h16M9 11V7a1 1 0 011-1h4a1 1 0 011 1v4M12 3v2" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  ),
  sun: (
    <path d="M12 17a5 5 0 100-10 5 5 0 000 10zM12 1v3M12 20v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1 12h3M20 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  ),
  briefcase: (
    <path d="M3 8a2 2 0 012-2h14a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V8zM8 6V5a2 2 0 012-2h4a2 2 0 012 2v1" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinejoin="round" />
  ),
  heart: (
    <path d="M12 21s-7.5-4.6-10-9.3C.5 8.1 2.4 4.5 6 4.1c2-.2 3.7.8 6 3 2.3-2.2 4-3.2 6-3 3.6.4 5.5 4 4 7.6-2.5 4.7-10 9.3-10 9.3z" fill="currentColor" />
  ),
  gift: (
    <path d="M20 12v9H4v-9M2 7h20v5H2V7zM12 22V7M12 7c-2 0-4-1.5-4-3.5S9 1 10.5 1 12 3 12 5m0 2c2 0 4-1.5 4-3.5S13.5 1 12 1s0 2 0 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  ),
  balloon: (
    <path d="M12 2a6 6 0 00-2 11.6c.4.2.6.6.5 1L10 17h4l-.5-2.4c-.1-.4.1-.8.5-1A6 6 0 0012 2zM12 17v3m-1 0h2" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  ),
  calendar: (
    <path d="M7 3v3M17 3v3M4 8h16M5 6h14a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  ),
  tent: (
    <path d="M2 20h20M12 3L3 16h18L12 3zM12 3v17M7.5 16l4.5-8 4.5 8" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  ),
  food: (
    <path d="M3 11l1 8h16l1-8M1 7h22M8 7V4a1 1 0 011-1h6a1 1 0 011 1v3M12 12v4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  ),
};

function ServiceCard({ s, index }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ y: 30 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -8 }}
      className={`group relative text-left rounded-3xl p-7 overflow-hidden transition-all duration-500 ${
        s.featured
          ? "bg-gradient-royal bg-300% animate-gradientMove shadow-xl shadow-black/40 sm:col-span-2 lg:col-span-1"
          : "bg-maroon-800 border border-gold-400/20 shadow-sm hover:shadow-2xl hover:shadow-black/30 hover:border-gold-400/50"
      }`}
    >
      <span
        aria-hidden="true"
        className={`absolute -top-3 right-4 font-display font-bold text-7xl select-none pointer-events-none transition-colors duration-500 ${
          s.featured ? "text-cream-50/10" : "text-gold-100 group-hover:text-gold-200/80"
        }`}
      >
        {number}
      </span>

      {s.featured && (
        <span className="absolute top-5 right-5 bg-gold-400 text-maroon-900 text-[10px] font-bold tracking-wide uppercase px-3 py-1 rounded-full shadow-md">
          Most Requested
        </span>
      )}

      <div className="relative z-10">
        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${
            s.featured
              ? "bg-gold-400 text-maroon-900 shadow-gold-900/30"
              : "bg-gradient-to-br from-gold-600 to-gold-400 text-black shadow-gold-900/20 ring-2 ring-gold-300/0 group-hover:ring-gold-300/60"
          }`}
        >
          <svg width="26" height="26" viewBox="0 0 24 24">
            {icons[s.icon]}
          </svg>
        </div>
        <h3
          className={`font-display text-xl font-bold mb-2 ${s.featured ? "text-cream-50" : "text-gold-300"}`}
          dangerouslySetInnerHTML={{ __html: s.title }}
        />
        <span
          aria-hidden="true"
          className={`block h-[3px] w-10 rounded-full mb-3 transition-all duration-500 group-hover:w-16 ${
            s.featured ? "bg-gold-400" : "bg-gold-400/70"
          }`}
        />
        <p
          className={`text-sm leading-relaxed ${s.featured ? "text-cream-50/85" : "text-cream-50/70"}`}
          dangerouslySetInnerHTML={{ __html: s.desc }}
        />
        <a
          href={`${siteConfig.whatsappLink}?text=${encodeURIComponent(
            `Hi Events by Momin! I'm interested in your ${s.title.replace(/&amp;/g, "&")} service.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-4 inline-flex items-center gap-1.5 text-sm font-semibold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${
            s.featured ? "text-gold-300 hover:text-gold-200" : "text-gold-400 hover:text-gold-300"
          }`}
        >
          Enquire on WhatsApp
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="section-padding bg-maroon-900 relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 pattern-dots opacity-[0.04]" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <span className="section-eyebrow">What We Do</span>
        <h2 className="section-heading">
          Every Event, Every Theme, <span className="text-gold-600">One Trusted Team</span>
        </h2>
        <p className="mt-5 max-w-2xl mx-auto text-cream-50/70">
          From weddings and walimas to mango parties and office celebrations — Events by Momin is the
          full-service event planner, event management company and decorator for Rahim Yar Khan,
          Sadiqabad, Khanpur and Liaqatpur.
        </p>
        <div className="gold-divider mt-6" />
      </div>

      <div className="max-w-6xl mx-auto mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {services.map((s, i) => (
          <ServiceCard key={s.title} s={s} index={i} />
        ))}
      </div>
    </section>
  );
}
