"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

const cityDetails = [
  {
    name: "Rahim Yar Khan (RYK)",
    href: "/event-planner-rahim-yar-khan",
    home: true,
    blurb:
      "Our home base — Events by Momin is Rahim Yar Khan's most searched event planner and event management company, handling everything from weddings and barat stages to birthdays and corporate events.",
  },
  {
    name: "Sadiqabad",
    href: "/event-planner-sadiqabad",
    blurb:
      "One of the best-rated events planners serving Sadiqabad — our team regularly travels for wedding, barat, walima, mehndi, dholki, birthday and corporate décor with the same premium finish as our RYK setups.",
  },
  {
    name: "Khanpur",
    href: "/wedding-decorator-khanpur",
    blurb:
      "A trusted event planner and decorator in Khanpur for weddings, mehndis, birthday parties and office functions, delivered on time with transparent pricing.",
  },
  {
    name: "Goth Machi",
    href: "/event-planner-goth-machi",
    blurb:
      "Events by Momin brings the same premium wedding, barat, walima and mehndi décor to Goth Machi — our team travels on-site for setup, lighting and full event execution.",
  },
  {
    name: "Liaqatpur",
    href: "/event-planner-liaqatpur",
    blurb:
      "Full event management and décor services in Liaqatpur — from bridal stage design to gala nights and mango parties — planned and executed by our on-ground team.",
  },
];

const PinIcon = (props) => (
  <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path
      fillRule="evenodd"
      d="M10 18s6-5.686 6-10A6 6 0 0 0 4 8c0 4.314 6 10 6 10Zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      clipRule="evenodd"
    />
  </svg>
);

export default function ServiceAreas() {
  return (
    <section id="areas" className="section-padding bg-cream-100 relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 pattern-dots opacity-[0.05]" />
      <div
        aria-hidden="true"
        className="absolute top-10 right-[-6rem] w-80 h-80 bg-maroon-200/30 rounded-full blur-3xl"
      />
      <motion.svg
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="hidden lg:block absolute -bottom-16 -left-16 w-64 h-64 text-maroon-300/20"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="0.6" />
        <circle cx="50" cy="50" r="36" stroke="currentColor" strokeWidth="0.6" strokeDasharray="4 4" />
        {Array.from({ length: 8 }).map((_, i) => (
          <line
            key={i}
            x1="50"
            y1="4"
            x2="50"
            y2="14"
            stroke="currentColor"
            strokeWidth="0.6"
            transform={`rotate(${i * 45} 50 50)`}
          />
        ))}
        <path d="M50 20 L50 30 M50 70 L50 80 M20 50 L30 50 M70 50 L80 50" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </motion.svg>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <span className="section-eyebrow">Areas We Serve</span>
        <h2 className="section-heading">
          Proudly Decorating Events Across
          <span className="text-gold-600"> South Punjab</span>
        </h2>
        <p className="mt-5 max-w-2xl mx-auto text-charcoal/70">
          Events by Momin provides wedding decor, mehndi &amp; dholki setups, barat &amp; walima
          stages, birthday parties, gala nights, mango parties and office party planning throughout:
        </p>
        <div className="gold-divider mt-6" />
      </div>

      <div className="max-w-5xl mx-auto mt-12 grid sm:grid-cols-2 gap-5 relative z-10">
        {cityDetails.map((city, i) => (
          <motion.div
            key={city.name}
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -5 }}
            className={`group relative overflow-hidden rounded-2xl p-6 pl-7 text-left shadow-sm border transition-all duration-300 hover:shadow-xl ${
              city.home
                ? "bg-gradient-royal bg-300% animate-gradientMove border-transparent shadow-lg shadow-maroon-900/25 sm:col-span-2"
                : "bg-white border-gold-200 hover:border-gold-400"
            }`}
          >
            <span
              aria-hidden="true"
              className={`absolute left-0 top-0 bottom-0 w-1.5 ${
                city.home ? "bg-gold-400" : "bg-gradient-to-b from-gold-400 to-maroon-600"
              }`}
            />

            {city.home && (
              <span className="absolute top-5 right-5 bg-gold-400 text-maroon-900 text-[10px] font-bold tracking-wide uppercase px-3 py-1 rounded-full shadow-md">
                Home Base
              </span>
            )}

            <div className="flex items-start gap-3">
              <span
                className={`mt-0.5 flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110 ${
                  city.home ? "bg-gold-400 text-maroon-900" : "bg-gradient-to-br from-maroon-600 to-maroon-800 text-gold-300"
                }`}
              >
                <PinIcon className="w-4 h-4" />
              </span>
              <div>
                <h3
                  className={`font-display text-lg font-bold mb-1.5 ${
                    city.home ? "text-cream-50" : "text-maroon-700"
                  }`}
                >
                  <a
                    href={city.href}
                    className={`hover:underline ${city.home ? "text-cream-50" : "text-maroon-700"}`}
                  >
                    {city.name}
                  </a>
                </h3>
                <p className={`text-sm leading-relaxed ${city.home ? "text-cream-100/85" : "text-charcoal/70"}`}>
                  {city.blurb}
                </p>
                <a
                  href={city.href}
                  className={`inline-block mt-2 text-xs font-semibold underline ${city.home ? "text-gold-300 hover:text-gold-200" : "text-maroon-600 hover:text-maroon-800"}`}
                >
                  View details →
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-8 flex flex-wrap justify-center gap-3 relative z-10">
        {siteConfig.serviceAreas.map((area, i) => (
          <motion.span
            key={area}
            initial={{ scale: 0.85 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            whileHover={{ scale: 1.07, backgroundColor: "#7a1b3d", color: "#fffdfb" }}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border-2 border-gold-400 text-maroon-700 text-sm font-semibold bg-white shadow-sm cursor-default transition-colors"
          >
            <PinIcon className="w-3.5 h-3.5 opacity-70" />
            {area}
          </motion.span>
        ))}
      </div>

      <p className="max-w-2xl mx-auto mt-10 text-center text-sm text-charcoal/60 relative z-10">
        Don&apos;t see your town listed? We regularly travel across South Punjab for weddings, mehndis
        and corporate events — <a href="#contact" className="text-maroon-700 font-semibold underline">get in touch</a> and let&apos;s talk about your event.
      </p>
    </section>
  );
}
