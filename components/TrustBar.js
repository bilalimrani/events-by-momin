"use client";

import { motion } from "framer-motion";

const stats = [
  {
    icon: "M12 2l2.6 5.6L21 8.3l-4.5 4.2L17.8 19 12 15.8 6.2 19l1.3-6.5L3 8.3l6.4-.7L12 2z",
    value: "500+",
    label: "Events Managed",
  },
  {
    icon: "M12 8v8m-4-4h8M12 2a10 10 0 100 20 10 10 0 000-20z",
    value: "12+",
    label: "Signature Event Types",
  },
  {
    icon: "M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z",
    value: "5",
    label: "Towns Across South Punjab",
  },
  {
    icon: "M12 17.3l-5.4 3.2 1.4-6.1L3 9.9l6.2-.5L12 3.7l2.8 5.7 6.2.5-4.9 4.5 1.4 6.1z",
    value: "5★",
    label: "Average Client Rating",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-maroon-900 relative border-b border-gold-400/20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-gold-400/20">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ y: 16 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center text-center px-3 sm:px-6"
            >
              <span className="w-11 h-11 rounded-full bg-gradient-to-br from-gold-600 to-gold-400 text-black flex items-center justify-center mb-3 shadow-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d={s.icon} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="font-display text-2xl sm:text-3xl font-bold text-gold-400">{s.value}</span>
              <span className="text-[11px] sm:text-xs text-cream-50/60 tracking-wide uppercase mt-1">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
