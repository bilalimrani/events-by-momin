"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

const stats = [
  { value: "500+", label: "Events Managed" },
  { value: "12+", label: "Signature Event Types" },
  { value: "5★", label: "Client Satisfaction" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-royal animate-gradientMove bg-300%"
    >
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 pattern-dots opacity-[0.08]" aria-hidden="true" />

      {/* Floating decorative sparkles */}
      <motion.svg
        aria-hidden="true"
        className="absolute top-28 left-[8%] w-16 h-16 text-gold-400/60 animate-float"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0l2.4 9.6L24 12l-9.6 2.4L12 24l-2.4-9.6L0 12l9.6-2.4L12 0z" />
      </motion.svg>
      <motion.svg
        aria-hidden="true"
        className="absolute bottom-24 right-[10%] w-24 h-24 text-gold-300/50 animate-floatSlow"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0l2.4 9.6L24 12l-9.6 2.4L12 24l-2.4-9.6L0 12l9.6-2.4L12 0z" />
      </motion.svg>
      <motion.div
        aria-hidden="true"
        className="absolute top-1/3 right-[18%] w-40 h-40 rounded-full border border-gold-300/30 animate-spinSlow"
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-10 left-[15%] w-64 h-64 bg-maroon-400/20 rounded-full blur-3xl"
      />

      {/* Decorative mandala corner motif */}
      <motion.svg
        aria-hidden="true"
        className="absolute -top-16 -left-16 w-56 h-56 sm:w-72 sm:h-72 text-gold-200/25 animate-spinSlow"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="0.6" />
        <circle cx="50" cy="50" r="36" stroke="currentColor" strokeWidth="0.6" />
        <circle cx="50" cy="50" r="26" stroke="currentColor" strokeWidth="0.6" />
        {Array.from({ length: 16 }).map((_, i) => (
          <line
            key={i}
            x1="50"
            y1="4"
            x2="50"
            y2="13"
            stroke="currentColor"
            strokeWidth="0.6"
            transform={`rotate(${(i * 360) / 16} 50 50)`}
          />
        ))}
      </motion.svg>

      {/* Decorative floral sparkle cluster */}
      <div aria-hidden="true" className="hidden sm:block absolute top-24 right-[6%] w-10 h-10 opacity-40">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gold-300 absolute -left-2 -top-1">
          <path d="M12 0l2.4 9.6L24 12l-9.6 2.4L12 24l-2.4-9.6L0 12l9.6-2.4L12 0z" />
        </svg>
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gold-100 absolute left-4 top-2">
          <path d="M12 0l2.4 9.6L24 12l-9.6 2.4L12 24l-2.4-9.6L0 12l9.6-2.4L12 0z" />
        </svg>
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-cream-100 absolute left-1 top-6">
          <path d="M12 0l2.4 9.6L24 12l-9.6 2.4L12 24l-2.4-9.6L0 12l9.6-2.4L12 0z" />
        </svg>
      </div>

      <div className="relative z-10 section-padding !py-32 w-full text-center flex flex-col items-center">
        <motion.span
          initial={{ y: -14 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7 }}
          className="section-eyebrow !text-gold-300"
        >
          Rahim Yar Khan · Sadiqabad · Khanpur · Goth Machi · Liaqatpur &amp; All of South Punjab
        </motion.span>

        <motion.h1
          initial={{ y: 24 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-cream-50 leading-[1.1] max-w-5xl"
        >
          Best Event Planner &amp; Decorator
          <span className="block text-gradient-gold mt-2">in Rahim Yar Khan &amp; South Punjab</span>
        </motion.h1>

        <motion.p
          initial={{ y: 24 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 max-w-2xl text-cream-100/90 text-base sm:text-lg leading-relaxed"
        >
          <strong className="text-gold-200">Events by Momin</strong> is South Punjab&apos;s trusted
          event planner &amp; event management company — weddings, barat &amp; walima stages, mehndi &amp; dholki,
          birthday parties, gala nights, mango parties, office parties and every celebration you can
          imagine. Serving Rahim Yar Khan, Sadiqabad, Khanpur, Liaqatpur and beyond.
        </motion.p>

        <motion.div
          initial={{ y: 24 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !bg-gold-500 hover:!bg-gold-600 !text-maroon-900 animate-pulseGlow"
          >
            Book on WhatsApp
          </a>
          <a href={`tel:${siteConfig.phoneRaw}`} className="btn-secondary !border-cream-100 !text-cream-100 hover:!bg-cream-100 hover:!text-maroon-800">
            Call {siteConfig.phoneDisplay}
          </a>
        </motion.div>

        <motion.div
          initial={{ y: 30 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-3 gap-6 sm:gap-10 max-w-2xl w-full"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl sm:text-4xl font-bold text-gold-300">
                {s.value}
              </div>
              <div className="text-cream-100/70 text-xs sm:text-sm mt-1 tracking-wide">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll-down indicator */}
      <motion.a
        href="#gallery"
        aria-label="Scroll down to see our gallery"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 text-cream-100/70 hover:text-gold-300 transition-colors"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll to Explore</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1.5"
        >
          <span className="w-1 h-1.5 rounded-full bg-current" />
        </motion.span>
      </motion.a>

      {/* Bottom wave */}
      <svg
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full text-white"
        viewBox="0 0 1440 100"
        fill="currentColor"
      >
        <path d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z" />
      </svg>
    </section>
  );
}
