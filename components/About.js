"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    title: "Custom Themes",
    desc: "Every stage, mehndi setup and party theme designed around your story.",
    icon: (
      <path d="M12 2l2.6 6.6L21 10l-5.4 4.4L17 21l-5-3.4L7 21l1.4-6.6L3 10l6.4-1.4L12 2z" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinejoin="round" />
    ),
  },
  {
    title: "On-Time Delivery",
    desc: "Full setup completed well before your guests arrive — every single time.",
    icon: (
      <path d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Local Experts",
    desc: "Deep roots in Rahim Yar Khan, Sadiqabad, Khanpur & Liaqatpur.",
    icon: (
      <path d="M12 21s7-6.5 7-11.5A7 7 0 105 9.5C5 14.5 12 21 12 21zM12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinejoin="round" />
    ),
  },
  {
    title: "All Budgets Welcome",
    desc: "From intimate dholkis to grand walima receptions and corporate galas.",
    icon: (
      <path d="M3 10h18M5 6h14a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2zM7 14h4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

const stats = [
  { value: "500+", label: "Events Managed" },
  { value: "12+", label: "Event Types" },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-cream-100 relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -top-20 -left-20 w-72 h-72 bg-gold-100 rounded-full blur-3xl opacity-60"
      />
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">
        <motion.div
          initial={{ x: -30 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-eyebrow">Who We Are</span>
          <h2 className="section-heading">
            South Punjab&apos;s Go-To Name for
            <span className="text-gold-600"> Weddings, Parties &amp; Every Big Celebration</span>
          </h2>
          <p className="mt-6 text-charcoal/80 leading-relaxed">
            <strong>Events by Momin</strong> has become the most searched and most trusted event
            management &amp; decor company across Rahim Yar Khan (RYK), Sadiqabad (SDK), Khanpur,
            Liaqatpur and every town in between. Whether it&apos;s a dreamy wedding decor
            setup, a colourful mehndi and dholki night, a grand barat and walima stage, a fun-filled
            birthday party, a glamorous gala night, a refreshing summer mango party, or a polished
            office and corporate party — our team designs, decorates and delivers with precision.
          </p>
          <p className="mt-4 text-charcoal/80 leading-relaxed">
            We combine local craftsmanship with modern design trends — LED stage decor, flower walls,
            balloon art, drapery and lighting — to make sure every event we touch is talked about long
            after the last guest leaves.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ y: 16 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group flex gap-3 items-start bg-white/70 border border-gold-100 rounded-2xl p-4 shadow-sm hover:shadow-lg hover:border-gold-400 transition-all duration-300"
              >
                <span className="mt-0.5 flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-maroon-600 to-maroon-800 text-gold-300 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24">
                    {h.icon}
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-maroon-700">{h.title}</h3>
                  <p className="text-sm text-charcoal/70 mt-1">{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 30 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] max-w-md mx-auto">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-[3rem] border-4 border-dashed border-gold-300/70 rotate-3"
            />

            {/* Main photo */}
            <motion.div
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-4 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-maroon-900/25 border-4 border-cream-50 -rotate-2"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/gallery/grand-entrance-aisle.jpg"
                alt="Crystal chandelier red carpet entrance decor by Events by Momin, top wedding planner in Rahim Yar Khan"
                title="Crystal chandelier red carpet entrance decor by Events by Momin, top wedding planner in Rahim Yar Khan"
                loading="lazy"
                width={1100}
                height={825}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/50 via-transparent to-transparent" />
            </motion.div>

            {/* Secondary overlapping photo */}
            <motion.div
              whileHover={{ rotate: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="absolute -bottom-6 -left-6 w-32 h-32 sm:w-40 sm:h-40 rounded-3xl overflow-hidden shadow-xl border-4 border-cream-50 rotate-6 z-10"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/gallery/mehndi-dholki.jpg"
                alt="Colourful mehndi mayun decor by Events by Momin, mehndi decorator serving Goth Machi"
                title="Colourful mehndi mayun decor by Events by Momin, mehndi decorator serving Goth Machi"
                loading="lazy"
                width={1100}
                height={825}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating stat badge */}
            <motion.div
              initial={{ y: -10 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -top-5 -right-3 sm:-right-6 bg-white rounded-2xl shadow-xl border border-gold-200 px-5 py-4 flex gap-5 z-10"
            >
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-2xl font-bold text-maroon-700">{s.value}</div>
                  <div className="text-[10px] text-charcoal/60 tracking-wide uppercase mt-0.5 whitespace-nowrap">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Spinning badge */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              aria-hidden="true"
              className="absolute bottom-2 right-2 w-20 h-20 rounded-full border-2 border-dashed border-gold-400 flex items-center justify-center bg-cream-50 shadow-lg z-10"
            >
              <span className="font-display font-bold text-maroon-700 text-[10px] text-center leading-tight px-1">
                Since Day One
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
