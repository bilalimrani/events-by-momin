"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  WeddingIllustration,
  MehndiIllustration,
  BaratIllustration,
  WalimaIllustration,
  GalaIllustration,
} from "./Illustrations";

const PinIcon = (props) => (
  <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path
      fillRule="evenodd"
      d="M10 18s6-5.686 6-10A6 6 0 0 0 4 8c0 4.314 6 10 6 10Zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      clipRule="evenodd"
    />
  </svg>
);

const ExpandIcon = (props) => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
    <path d="M7 3H3v4M13 3h4v4M17 13v4h-4M3 13v4h4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FILTERS = ["All", "Weddings & Barat", "Mehndi & Mayun", "Lounge & Reception", "Corporate & Gala"];

const tiles = [
  {
    title: "HBL Qawali Night &amp; Dinner",
    tall: true,
    category: "Corporate & Gala",
    link: "/hbl-qawali-night-dinner-ryk",
    photo: "/gallery/htbl-qawali.jpeg",
    city: "Rahim Yar Khan",
    alt: "HBL Qawali Night and Corporate Dinner event decoration and lighting in Rahim Yar Khan by Events by Momin",
  },
  {
    title: "RYK MUN — Model United Nations",
    tall: false,
    category: "Corporate & Gala",
    link: "/mun-event-management-rahim-yar-khan",
    photo: "/gallery/mun-ryk-stage-night.jpg",
    city: "Rahim Yar Khan",
    alt: "RYK MUN Model United Nations stage, LED backdrop and lighting decoration by Events by Momin at Sheikh Khalifa School, Rahim Yar Khan",
  },
  {
    title: "Wedding Decor",
    tall: true,
    category: "Weddings & Barat",
    Illustration: WeddingIllustration,
    photo: "/gallery/wedding-decor.jpg",
    city: "Rahim Yar Khan",
    alt: "Pink-carpet wedding stage and floral mandap decoration by Events by Momin, the top wedding planner in Rahim Yar Khan",
  },
  {
    title: "Mehndi &amp; Dholki",
    tall: false,
    category: "Mehndi & Mayun",
    Illustration: MehndiIllustration,
    photo: "/gallery/mehndi-dholki.jpg",
    city: "Goth Machi",
    alt: "Colourful mehndi and mayun stage decor with mandala rug and cushions by Events by Momin, mehndi decorator serving Goth Machi",
  },
  {
    title: "Barat Stage",
    tall: false,
    category: "Weddings & Barat",
    Illustration: BaratIllustration,
    photo: "/gallery/barat-stage.jpg",
    city: "Sadiqabad",
    alt: "Red and white floral barat stage decoration setup by Events by Momin, event management company in Sadiqabad",
  },
  {
    title: "Walima Reception",
    tall: true,
    category: "Weddings & Barat",
    Illustration: WalimaIllustration,
    photo: "/gallery/walima-reception.jpg",
    city: "Khanpur",
    alt: "Royal white and gold walima reception stage with candlelight decor by Events by Momin, walima decorator in Khanpur",
  },
  {
    title: "Grand Entrance &amp; Aisle",
    tall: false,
    category: "Weddings & Barat",
    photo: "/gallery/grand-entrance-aisle.jpg",
    city: "Sadiqabad",
    alt: "Crystal chandelier red carpet entrance aisle decoration by Events by Momin, top event management company in Sadiqabad",
  },
  {
    title: "Guest Lounge Seating",
    tall: false,
    category: "Lounge & Reception",
    photo: "/gallery/lounge-seating.jpg",
    city: "Rahim Yar Khan",
    alt: "Luxury teal and brown velvet guest lounge seating inside a wedding tent by Events by Momin, event decorator in Rahim Yar Khan",
  },
  {
    title: "Gala Night &amp; VIP Lounge",
    tall: false,
    category: "Lounge & Reception",
    Illustration: GalaIllustration,
    photo: "/gallery/gala-night.jpg",
    city: "Liaqatpur",
    alt: "Modern gala night VIP lounge seating with fairy-light backdrop by Events by Momin, gala night event planner in Liaqatpur",
  },
  {
    title: "Reception &amp; Dining Hall",
    tall: true,
    category: "Lounge & Reception",
    photo: "/gallery/reception-dining-hall.jpg",
    city: "Khanpur",
    alt: "Full wedding reception and dining hall setup with gold-frame sofas by Events by Momin, event planner in Khanpur",
  },
  {
    title: "Rustic Mehndi Theme",
    tall: false,
    category: "Mehndi & Mayun",
    photo: "/gallery/rustic-mehndi-night.jpg",
    city: "Goth Machi",
    alt: "Rustic gears-themed mehndi night stage with colourful bunting by Events by Momin, mehndi stage decorator in Goth Machi",
  },
  {
    title: "Night Aisle Walkway",
    tall: true,
    category: "Weddings & Barat",
    photo: "/gallery/night-aisle-walkway.jpg",
    city: "Rahim Yar Khan",
    alt: "Guests walking down a fairy-lit red carpet aisle at a wedding event by Events by Momin, wedding planner in Rahim Yar Khan",
  },
  {
    title: "Blue Lounge Mehndi Setup",
    tall: false,
    category: "Mehndi & Mayun",
    photo: "/gallery/blue-mehndi-lounge.jpg",
    city: "Liaqatpur",
    alt: "Blue mirror-tile mehndi lounge with gold bolster cushions by Events by Momin, mehndi decor company in Liaqatpur",
  },
  {
    title: "Garden Lounge Night Setup",
    tall: false,
    category: "Lounge & Reception",
    photo: "/gallery/garden-lounge-night.jpg",
    city: "Sadiqabad",
    alt: "Outdoor garden lounge seating lit up at night for a wedding event by Events by Momin, event management company in Sadiqabad",
  },
];

function GalleryTile({ tile, index, onOpen }) {
  const [photoFailed, setPhotoFailed] = useState(false);
  const { Illustration, photo, title, tall, city, alt, link } = tile;
  const plainTitle = title.replace(/&amp;/g, "&");

  const handleActivate = () => {
    if (link) {
      window.location.href = link;
      return;
    }
    if (!photoFailed) onOpen(tile);
  };

  return (
    <motion.div
      initial={{ scale: 0.9 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ scale: 1.03 }}
      onClick={handleActivate}
      role="button"
      tabIndex={0}
      aria-label={link ? `View case study: ${plainTitle}` : `View photo: ${plainTitle} in ${city}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleActivate();
      }}
      className={`group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer ring-1 ring-transparent hover:ring-2 hover:ring-gold-400/80 hover:shadow-xl hover:shadow-maroon-900/20 transition-shadow duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 ${
        tall ? "row-span-2" : "row-span-1"
      }`}
    >
      {!photoFailed && photo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photo}
          alt={alt || plainTitle}
          title={alt || plainTitle}
          loading="lazy"
          width={1100}
          height={825}
          onError={() => setPhotoFailed(true)}
          className="absolute inset-0 w-full h-full object-cover saturate-[0.8] sepia-[0.1] contrast-[1.05] transition-[transform,filter] duration-700 ease-out group-hover:scale-110 group-hover:saturate-[1.2] group-hover:sepia-0 group-hover:contrast-[1.1]"
        />
      ) : Illustration ? (
        <Illustration className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      ) : (
        <div className="absolute inset-0 bg-gradient-royal" />
      )}

      {!photoFailed && photo && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-maroon-700 mix-blend-color opacity-30 group-hover:opacity-0 transition-opacity duration-500"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/85 via-maroon-950/15 to-transparent transition-opacity duration-500 group-hover:from-maroon-950/90" />

      {!photoFailed && photo && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-cream-50/90 text-maroon-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-hidden="true"
        >
          <ExpandIcon className="w-4 h-4" />
        </motion.div>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <span
          className="block font-display text-cream-50 font-semibold text-lg drop-shadow"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <span className="mt-1 flex items-center gap-1 text-gold-200/90 text-xs font-semibold tracking-wide opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <PinIcon className="w-3.5 h-3.5" />
          {city}
          {link && <span className="text-cream-50/90">&nbsp;· View Event Details →</span>}
        </span>
      </div>
    </motion.div>
  );
}

function Lightbox({ tile, onClose }) {
  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!tile) return;
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [tile, handleKey]);

  if (!tile) return null;
  const plainTitle = tile.title.replace(/&amp;/g, "&");

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-maroon-950/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
      >
        <motion.figure
          initial={{ opacity: 0, scale: 0.92, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl bg-maroon-950"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={tile.photo}
            alt={tile.alt || plainTitle}
            title={tile.alt || plainTitle}
            className="w-full h-full max-h-[75vh] object-contain bg-black"
          />
          <figcaption className="px-5 py-4 bg-maroon-950 flex items-center justify-between gap-4">
            <div>
              <p className="font-display text-cream-50 font-semibold">{plainTitle}</p>
              <span className="flex items-center gap-1 text-gold-300 text-xs font-semibold mt-1">
                <PinIcon className="w-3.5 h-3.5" />
                {tile.city}, South Punjab
              </span>
            </div>
            <a
              href="#contact"
              onClick={onClose}
              className="hidden sm:inline-flex btn-primary !bg-gold-500 hover:!bg-gold-600 !text-maroon-900 !py-2 !px-5 !text-sm flex-shrink-0"
            >
              Book This Look
            </a>
          </figcaption>
          <button
            onClick={onClose}
            aria-label="Close photo preview"
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-cream-50/90 text-maroon-800 flex items-center justify-center hover:bg-cream-50 transition-colors"
          >
            ✕
          </button>
        </motion.figure>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Gallery() {
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState("All");

  const visibleTiles = filter === "All" ? tiles : tiles.filter((t) => t.category === filter);

  return (
    <section id="gallery" className="section-padding bg-maroon-900">
      <div className="max-w-6xl mx-auto text-center">
        <span className="section-eyebrow">Our Style</span>
        <h2 className="section-heading">
          A Glimpse Into <span className="text-gold-600">Our Celebrations</span>
        </h2>
        <p className="mt-5 max-w-2xl mx-auto text-cream-50/70">
          Real weddings, mehndis, barat stages and gala nights designed and installed by Events by
          Momin across Rahim Yar Khan, Sadiqabad, Khanpur, Goth Machi and Liaqatpur — tap any photo
          for a closer look.
        </p>
        <div className="gold-divider mt-6" />
      </div>

      <div className="max-w-6xl mx-auto mt-10 flex flex-wrap justify-center gap-3">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-all duration-300 ${
              filter === f
                ? "bg-gold-500 border-gold-500 text-black shadow-md shadow-gold-900/20"
                : "bg-transparent border-gold-400/30 text-cream-50/70 hover:border-gold-400 hover:text-gold-400"
            }`}
          >
            {f}
            <span className={`ml-1.5 text-xs ${filter === f ? "text-black/70" : "text-cream-50/40"}`}>
              ({f === "All" ? tiles.length : tiles.filter((t) => t.category === f).length})
            </span>
          </button>
        ))}
      </div>

      <div
        key={filter}
        className="max-w-6xl mx-auto mt-8 grid grid-cols-2 sm:grid-cols-4 gap-5 auto-rows-[160px]"
      >
        {visibleTiles.map((t, i) => (
          <GalleryTile key={t.title + t.city} tile={t} index={i} onOpen={setActive} />
        ))}
      </div>

      <Lightbox tile={active} onClose={() => setActive(null)} />
    </section>
  );
}
