"use client";

import { motion } from "framer-motion";

const points = [
  {
    icon: "M12 2l2.6 5.6L21 8.3l-4.5 4.2L17.8 19 12 15.8 6.2 19l1.3-6.5L3 8.3l6.4-.7L12 2z",
    title: "Trusted &amp; Experienced",
    desc: "Years of hands-on experience decorating weddings, mehndis, birthdays and corporate events across South Punjab.",
  },
  {
    icon: "M12 8v8m-4-4h8M12 2a10 10 0 100 20 10 10 0 000-20z",
    title: "Transparent Pricing",
    desc: "Clear packages for every budget — no hidden costs, honest quotes for barat, walima, mehndi or party decor.",
  },
  {
    icon: "M13 2L3 14h7l-1 8 11-14h-7l0-6z",
    title: "Fast &amp; Reliable Setup",
    desc: "Our team arrives early and completes every stage, backdrop and light setup well before your guests do.",
  },
  {
    icon: "M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m5-4a4 4 0 100-8 4 4 0 000 8zm6 4a4 4 0 00-3-3.87",
    title: "Dedicated Local Team",
    desc: "Based right in Rahim Yar Khan and serving Sadiqabad, Khanpur and Liaqatpur with personal care.",
  },
];

export default function WhyUs() {
  return (
    <section className="section-padding bg-gradient-royal animate-gradientMove bg-300% relative overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/gallery/reception-dining-hall.jpg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.12] mix-blend-luminosity"
      />
      <div aria-hidden="true" className="absolute inset-0 pattern-dots opacity-10" />

      {/* Top wave — blends in from the section above */}
      <svg
        aria-hidden="true"
        className="absolute top-0 left-0 w-full text-white"
        style={{ transform: "scaleY(-1)" }}
        viewBox="0 0 1440 100"
        fill="currentColor"
      >
        <path d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z" />
      </svg>

      {/* Bottom wave — blends into the section below */}
      <svg
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full text-cream-100"
        viewBox="0 0 1440 100"
        fill="currentColor"
      >
        <path d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z" />
      </svg>
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <span className="section-eyebrow !text-gold-300">Why Choose Us</span>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-cream-50">
          Why Events by Momin is South Punjab&apos;s
          <span className="block text-gradient-gold mt-1">#1 Event Planner &amp; Decorator</span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {points.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="bg-cream-50/10 border border-gold-300/30 backdrop-blur-sm rounded-3xl p-7 text-center hover:bg-cream-50/15 transition-colors duration-500"
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-gold-500 text-maroon-900 flex items-center justify-center mb-5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d={p.icon} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3
              className="font-display text-lg font-bold text-gold-200 mb-2"
              dangerouslySetInnerHTML={{ __html: p.title }}
            />
            <p className="text-sm text-cream-100/80 leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
