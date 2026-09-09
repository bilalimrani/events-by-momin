"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-gradient-royal animate-gradientMove bg-300% relative overflow-hidden">
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

      {/* Bottom wave — blends into the footer */}
      <svg
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full text-maroon-950"
        viewBox="0 0 1440 100"
        fill="currentColor"
      >
        <path d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z" />
      </svg>
      <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-2 gap-14 items-start">
        <motion.div
          initial={{ x: -30 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-eyebrow !text-gold-300">Let&apos;s Talk</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-cream-50 leading-tight">
            Ready to Plan Your Next
            <span className="block text-gradient-gold">Unforgettable Event?</span>
          </h2>
          <p className="mt-6 text-cream-100/85 leading-relaxed max-w-lg">
            Weddings, mehndi, barat, walima, birthdays, gala nights, mango parties or office
            parties — reach out to Events by Momin today and let&apos;s bring your vision to life
            anywhere in Rahim Yar Khan, Sadiqabad, Khanpur or Liaqatpur.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-4 text-cream-50 hover:text-gold-300 transition-colors group"
            >
              <span className="w-12 h-12 rounded-full bg-cream-50/10 border border-gold-300/40 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-maroon-900 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M3 6l9 7 9-7M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>{siteConfig.email}</span>
            </a>

            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center gap-4 text-cream-50 hover:text-gold-300 transition-colors group"
            >
              <span className="w-12 h-12 rounded-full bg-cream-50/10 border border-gold-300/40 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-maroon-900 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.4 2.1L8 9.9a16 16 0 006 6l1.4-1.3a2 2 0 012.1-.4c.9.3 1.8.5 2.7.6a2 2 0 011.8 2.1z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>{siteConfig.phoneDisplay}</span>
            </a>

            <div className="flex items-start gap-4 text-cream-50">
              <span className="w-12 h-12 flex-shrink-0 rounded-full bg-cream-50/10 border border-gold-300/40 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                  <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </span>
              <span className="pt-3">{siteConfig.fullAddress}</span>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-12 h-12 rounded-full bg-cream-50/10 border border-gold-300/40 flex items-center justify-center hover:bg-gold-500 hover:text-maroon-900 text-cream-50 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
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
                className="w-12 h-12 rounded-full bg-cream-50/10 border border-gold-300/40 flex items-center justify-center hover:bg-gold-500 hover:text-maroon-900 text-cream-50 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M14 9h3V6h-3a3 3 0 00-3 3v2H9v3h2v6h3v-6h3l1-3h-4V9a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-12 h-12 rounded-full bg-cream-50/10 border border-gold-300/40 flex items-center justify-center hover:bg-gold-500 hover:text-maroon-900 text-cream-50 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M8.5 8.7c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.4.2.5.7 1.6.7 1.8.1.1.1.3 0 .5-.1.1-.1.2-.3.4l-.4.5c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.6-.7c.2-.2.4-.2.6-.1l1.6.8c.2.1.4.2.4.4.1.5-.1 1.4-.6 1.8-.6.5-1.7.9-2.9.5-1.5-.5-3.4-1.5-4.9-3.5-1.2-1.6-1.7-2.9-1.9-3.7-.2-.7 0-1.4.3-1.9z" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 30 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="bg-cream-50 rounded-3xl p-8 shadow-2xl"
        >
          <div className="flex items-center justify-between gap-3 mb-1">
            <h3 className="font-display text-2xl font-bold text-maroon-700">Quick Enquiry</h3>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-semibold text-maroon-700 bg-gold-100 px-3 py-1 rounded-full flex-shrink-0">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 7v5l3.5 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              ~2hr reply
            </span>
          </div>
          <p className="text-sm text-charcoal/60 mb-6">
            Tell us about your event and we&apos;ll reply within a few hours.
          </p>
          <form
            action={`https://wa.me/923094439441`}
            method="GET"
            target="_blank"
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const name = e.target.name.value;
              const eventType = e.target.eventType.value;
              const city = e.target.city.value;
              const message = e.target.message.value;
              const text = encodeURIComponent(
                `Hi Events by Momin! My name is ${name}. I'm interested in ${eventType} in ${city}. ${message}`
              );
              window.open(`https://wa.me/923094439441?text=${text}`, "_blank");
            }}
          >
            <input
              name="name"
              required
              placeholder="Your Name"
              className="w-full rounded-xl border border-gold-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
            />
            <input
              name="eventType"
              required
              placeholder="Event Type (Wedding, Mehndi, Birthday...)"
              className="w-full rounded-xl border border-gold-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
            />
            <input
              name="city"
              required
              placeholder="City / Town (RYK, Sadiqabad, Khanpur...)"
              className="w-full rounded-xl border border-gold-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
            />
            <textarea
              name="message"
              rows={3}
              placeholder="Tell us more about your event"
              className="w-full rounded-xl border border-gold-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
            />
            <button type="submit" className="btn-primary w-full justify-center">
              Send via WhatsApp
            </button>
          </form>

          <div className="mt-6 rounded-2xl overflow-hidden border border-gold-200">
            <iframe
              title="Events by Momin Office Location Map"
              src={siteConfig.mapEmbedSrc}
              width="100%"
              height="220"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
