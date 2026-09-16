"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

const links = [
  { label: "Home", href: "/#home" },
  { label: "Gallery", href: "/#gallery" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Areas We Serve", href: "/#areas" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream-50/90 backdrop-blur-md shadow-md shadow-maroon-900/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
      <nav className="section-padding !py-0 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            className={`flex-shrink-0 transition-transform duration-500 group-hover:rotate-12 ${
              scrolled ? "text-gold-500" : "text-gold-300"
            }`}
          >
            <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z" fill="currentColor" />
          </svg>
          <span
            className={`font-display text-2xl sm:text-3xl font-bold tracking-wide transition-colors ${
              scrolled ? "text-maroon-700" : "text-cream-50"
            }`}
          >
            Events <span className="text-gradient-gold">by Momin</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`font-body text-sm font-medium tracking-wide transition-colors hover:text-gold-500 ${
                  scrolled ? "text-charcoal" : "text-cream-100"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={siteConfig.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-maroon-900 font-semibold text-sm px-6 py-3 rounded-full shadow-md transition-all duration-300 hover:scale-105"
        >
          Book Now
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden p-2 rounded-lg ${scrolled ? "text-maroon-700" : "text-cream-50"}`}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-cream-50/98 backdrop-blur-md mt-4 shadow-lg"
          >
            <ul className="flex flex-col gap-1 px-6 py-6">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-charcoal font-medium border-b border-gold-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center"
                >
                  Book on WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
