"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

const popularSearches = [
  "Wedding Decor Near Me",
  "Best Wedding Planner in RYK",
  "Barat Stage Decoration",
  "Walima Stage Setup",
  "Mehndi Decor Ideas",
  "Dholki Party Planner",
  "Nikah Stage Decoration",
  "Birthday Party Decoration",
  "Kids Birthday Party Planner",
  "1st Birthday Party Decoration",
  "Gala Night Event Planner",
  "Mango Party Theme Decoration",
  "Office Party Planner",
  "Corporate Event Management",
  "Engagement Decoration",
  "Ring Ceremony Decoration",
  "Anniversary Party Planner",
  "Baby Shower Decoration",
  "Aqeeqa Decoration",
  "Balloon Arch Decoration",
  "Flower Wall Decoration",
  "LED Stage Decoration",
  "Backdrop & Photo Booth Design",
  "Affordable Wedding Decor Pakistan",
  "Luxury Event Decor",
  "Event Management Company Sadiqabad",
  "Event Planner in Khanpur",
  "Wedding Decorator in Liaqatpur",
  "Theme Party Decoration",
  "Event Decoration Packages",
  "Wedding Stage Design",
  "Event Planner Near Me",
  "Welcome Party Decoration",
  "Farewell Party Decoration",
  "Get Together Event Planner",
  "Exhibition Stall Decoration",
  "Bridal Shower Decoration",
  "Catering Services in RYK",
  "Tent Lagana Hai",
  "Stage Banana Hai",
  "Mehndi Ki Raat Decoration Chahiye",
  "Shaadi Ka Decoration RYK",
  "Barat Wala Stage Chahiye",
  "Walima Stage Banana Hai",
  "Dholki Setup Chahiye",
  "Birthday Ka Decoration Chahiye",
  "Function Ka Tent Chahiye",
  "Decoration Wala Number Chahiye",
  "Event Planner Ka Number",
  "Sab Say Acha Decorator RYK",
  "Mehndi Function Setup Chahiye",
  "Tent Service Near Me",
  "Shamiana Decoration",
  "Marquee Setup for Weddings",
  "Tent & Chair Rental",
  "Wedding Tent House in RYK",
  "Outdoor Event Tent Setup",
  "Qanaat Service Sadiqabad",
  "Sound & Lighting for Events",
  "Stage Sound System Rental",
  "Event Furniture Rental",
  "Red Carpet Setup",
  "VIP Sofa Set Rental",
  "Chandelier & Stage Lighting",
  "Fireworks for Events",
  "Dua-e-Khair Stage Decoration",
  "Milad Stage Decoration",
  "Qul & Chelum Setup",
  "House Party Decoration",
  "Rooftop Party Decoration",
  "Event Planner in Goth Machi",
  "Best Decorators Near Me",
  "Wedding Planning Services Pakistan",
];

const faqs = [
  {
    q: "Who is the best luxury event planner in Rahim Yar Khan?",
    a: "Events by Momin is South Punjab's leading luxury event planner — known for premium wedding stages, high-end barat and walima decor, luxury mehndi setups and elegant gala nights. We bring luxury event planning to Rahim Yar Khan, Sadiqabad, Khanpur and all of South Punjab.",
  },
  {
    q: "Who is the best event planner in Rahim Yar Khan?",
    a: "Events by Momin is one of the most searched and highest-rated event management and decor companies in Rahim Yar Khan (RYK), trusted for weddings, mehndis, birthdays and corporate parties.",
  },
  {
    q: "Do you provide wedding decor in Sadiqabad and Khanpur?",
    a: "Yes. We regularly travel to Sadiqabad, Khanpur, Goth Machi, Liaqatpur and surrounding South Punjab towns for wedding, barat and walima decor.",
  },
  {
    q: "Who is the best events planner in Sadiqabad?",
    a: "Events by Momin is a top-rated events planner serving Sadiqabad — from wedding, barat and walima stage decor to mehndi, dholki, birthday and corporate events. Our team regularly travels to Sadiqabad for setup and on-ground execution, so you get the same premium decor and planning quality as our Rahim Yar Khan clients.",
  },
  {
    q: "What events does Events by Momin manage?",
    a: "We manage weddings, barat and walima stages, mehndi and dholki setups, birthday parties, gala nights, mango parties, office and corporate parties, engagements, anniversaries and baby showers.",
  },
  {
    q: "How much does mehndi, barat or walima decoration cost?",
    a: "Pricing depends on venue size, theme and guest count. Message us on WhatsApp with your event details and we'll share a transparent, no-obligation quote.",
  },
  {
    q: "Do you plan mango parties and theme parties?",
    a: "Yes! Mango parties and seasonal theme parties are one of our specialities — bright, fun décor perfect for get-togethers across South Punjab.",
  },
  {
    q: "How do I book Events by Momin for my event?",
    a: `Simply WhatsApp or call us at ${siteConfig.phoneDisplay}, or email ${siteConfig.email}, and our team will get back to you with availability and packages.`,
  },
  {
    q: "Is there a reliable event organizer in Rahim Yar Khan?",
    a: "Yes — Events by Momin is a full-service event organizer in Rahim Yar Khan, handling everything from theme, décor and vendors to on-ground execution so you don't have to manage anything yourself.",
  },
  {
    q: "Who is the best wedding planner in RYK, Sadiqabad or Khanpur?",
    a: "Events by Momin is a leading wedding planner across Rahim Yar Khan, Sadiqabad and Khanpur, covering everything from bridal stage decor to barat, walima, mehndi and dholki planning.",
  },
  {
    q: "Do you work as a party planner for birthdays and get-togethers?",
    a: "Absolutely — we're a trusted party planner for birthdays, get-togethers, gala nights and mango parties, taking care of theme, décor, seating and setup from start to finish.",
  },
  {
    q: "Are you just decorators or a full decoration company?",
    a: "We're a complete decoration company — not just decorators. Events by Momin plans, designs and installs everything from stage decor and lighting to florals, so you get one team for the whole event.",
  },
  {
    q: "Tent lagana hai — kya aap yeh service dete hain?",
    a: "Haan! Events by Momin tent, shamiana aur marquee setup ki complete service deta hai Rahim Yar Khan aur surrounding areas mein. Outdoor functions, barats, walimas aur gala nights ke liye hamaari team pura tent setup karti hai — chairs, lighting aur decor samait. WhatsApp karein aur quote len.",
  },
  {
    q: "Stage banana hai, kahan se contact karein?",
    a: "Stage banana ho — chahe barat ka ho, walima ka, mehndi ka ya birthday ka — Events by Momin se contact karein. Hum custom stage design, lighting aur decoration ka pura kaam karte hain. Call ya WhatsApp karein: 0309-4439441.",
  },
  {
    q: "Mehndi ki raat ka decoration chahiye — kya karna hoga?",
    a: "Bohot asaan! Bas hamaari WhatsApp par date, venue aur guest count bhejein. Events by Momin mehndi ki raat ka poora decoration karta hai — colorful stage, dholki setup, photo corner, flower decor aur lighting sab kuch. Hum RYK, Sadiqabad, Khanpur aur Goth Machi mein service dete hain.",
  },
  {
    q: "Kya aap Goth Machi aur Liaqatpur mein bhi event decor karte hain?",
    a: "Haan! Events by Momin Goth Machi aur Liaqatpur mein bhi full event decoration services deta hai — wedding, barat, walima, mehndi, birthday aur gala night sab kuch. Hamaari team on-site travel karti hai setup ke liye.",
  },
  {
    q: "What is the best mehndi decoration company in Rahim Yar Khan?",
    a: "Events by Momin is the most searched and trusted mehndi decoration company in Rahim Yar Khan — serving RYK, Sadiqabad, Khanpur, Goth Machi and Liaqatpur with colourful mehndi stages, dholki setups, photo corners and custom backdrops.",
  },
  {
    q: "Do you do baby shower and engagement decoration in South Punjab?",
    a: "Yes — Events by Momin handles baby shower decoration, engagement and ring ceremony decor, bridal shower setups and anniversary decoration across Rahim Yar Khan and all of South Punjab.",
  },
  {
    q: "How far in advance should I book Events by Momin?",
    a: "For weddings and large functions, we recommend booking at least 4–8 weeks in advance, especially during peak wedding season. For smaller events like birthdays and get-togethers, 1–2 weeks is usually sufficient. WhatsApp us to check availability.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1);
  const searchesIndex = faqs.length;
  const isSearchesOpen = openIndex === searchesIndex;

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <span className="section-eyebrow">Frequently Asked</span>
        <h2 className="section-heading">
          Questions People <span className="text-gold-600">Search &amp; Ask</span>
        </h2>
        <div className="gold-divider mt-6" />
      </div>

      <div className="max-w-5xl mx-auto mt-12 grid sm:grid-cols-2 gap-4 items-start">
        {faqs.map((f, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={f.q}
              className="border border-gold-200 rounded-2xl overflow-hidden bg-cream-50 hover:border-gold-400 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="w-full flex items-center justify-between text-left px-6 py-5 font-semibold text-maroon-700"
              >
                <span>{f.q}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  className="text-gold-500 text-2xl font-light flex-shrink-0 ml-4"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-charcoal/70 leading-relaxed text-sm">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}

        <div className="sm:col-span-2 border border-gold-200 rounded-2xl overflow-hidden bg-cream-50 hover:border-gold-400 transition-colors">
          <button
            onClick={() => setOpenIndex(isSearchesOpen ? -1 : searchesIndex)}
            className="w-full flex items-center justify-between text-left px-6 py-5 font-semibold text-maroon-700"
          >
            <span>What do people search for when planning an event in South Punjab?</span>
            <motion.span
              animate={{ rotate: isSearchesOpen ? 45 : 0 }}
              className="text-gold-500 text-2xl font-light flex-shrink-0 ml-4"
            >
              +
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {isSearchesOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5">
                  <p className="text-charcoal/70 leading-relaxed text-sm mb-4">
                    Whatever you type into Google — wedding decor, mehndi setup, barat stage,
                    birthday party, gala night, mango party or office party — Events by Momin is
                    the name that shows up for Rahim Yar Khan, Sadiqabad, Khanpur and Liaqatpur.
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {popularSearches.map((term) => (
                      <span
                        key={term}
                        className="px-4 py-2 rounded-full bg-white border border-gold-200 text-charcoal/70 text-xs hover:border-gold-400 hover:text-maroon-700 transition-colors"
                      >
                        {term}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="sm:col-span-2 bg-gradient-royal bg-300% animate-gradientMove rounded-2xl p-6 flex flex-col items-start justify-center text-left shadow-lg shadow-maroon-900/20">
          <h3 className="font-display text-lg font-bold text-cream-50 mb-1.5">
            Still have questions?
          </h3>
          <p className="text-sm text-cream-100/80 leading-relaxed mb-4">
            Message us directly on WhatsApp — we usually reply within a few hours with a
            transparent quote.
          </p>
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-maroon-900 font-semibold text-sm px-5 py-2.5 rounded-full shadow-md transition-all duration-300 hover:scale-105"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
