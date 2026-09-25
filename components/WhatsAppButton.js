"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

export default function WhatsAppButton() {
  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setShowTip(true), 3000);
    const hideTimer = setTimeout(() => setShowTip(false), 9000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      <AnimatePresence>
        {showTip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 10 }}
            transition={{ duration: 0.3 }}
            className="mb-2 bg-maroon-800 rounded-2xl rounded-br-sm shadow-xl border border-gold-400/30 px-4 py-3 max-w-[190px] relative"
          >
            <button
              onClick={() => setShowTip(false)}
              aria-label="Dismiss"
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gold-500 text-black text-[10px] flex items-center justify-center"
            >
              ✕
            </button>
            <p className="text-sm font-semibold text-gold-400">Need help planning?</p>
            <p className="text-xs text-cream-50/60 mt-0.5">Chat with us on WhatsApp!</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={siteConfig.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Events by Momin on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        className="w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl animate-pulseGlow flex-shrink-0"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
          <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M8.5 8.7c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.4.2.5.7 1.6.7 1.8.1.1.1.3 0 .5-.1.1-.1.2-.3.4l-.4.5c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.6-.7c.2-.2.4-.2.6-.1l1.6.8c.2.1.4.2.4.4.1.5-.1 1.4-.6 1.8-.6.5-1.7.9-2.9.5-1.5-.5-3.4-1.5-4.9-3.5-1.2-1.6-1.7-2.9-1.9-3.7-.2-.7 0-1.4.3-1.9z" fill="currentColor" />
        </svg>
      </motion.a>
    </div>
  );
}
