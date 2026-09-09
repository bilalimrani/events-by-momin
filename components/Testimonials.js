"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ayesha K.",
    role: "Walima Decoration, Rahim Yar Khan",
    quote:
      "Events by Momin decorated our walima and it looked exactly like a five-star hotel setup. Guests are still talking about the stage! Best event planner in RYK — bar none.",
  },
  {
    name: "Usman R.",
    role: "Barat Stage Decoration, Sadiqabad",
    quote:
      "Booked them for our barat on short notice and the team delivered a stunning barat stage setup on time. Highly recommended for anyone looking for event management in RYK and Sadiqabad.",
  },
  {
    name: "Hina M.",
    role: "Birthday Party Decoration, Khanpur",
    quote:
      "My daughter&apos;s birthday theme was perfect — balloons, backdrop, the whole setup. Best birthday party planner in Khanpur, hands down. Will book again for our mehndi next year!",
  },
  {
    name: "Fahad Corp.",
    role: "Corporate Annual Dinner, Liaqatpur",
    quote:
      "Professional, punctual and creative. Our office annual dinner decor was elegant and well organised from start to finish. Best corporate event management company in South Punjab.",
  },
  {
    name: "Sana T.",
    role: "Mehndi &amp; Dholki Decoration, Goth Machi",
    quote:
      "The mehndi stage decoration was beyond our expectations — colourful, beautiful and full of energy. Events by Momin travelled to Goth Machi and set everything up perfectly. 5 stars!",
  },
  {
    name: "Ahmed B.",
    role: "Engagement Decoration, Rahim Yar Khan",
    quote:
      "Our ring ceremony and engagement setup was gorgeous — floral arch, fairy lights, the photo booth. Everyone asked who the decorator was. Shukria Events by Momin!",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-cream-100 relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 pattern-dots opacity-[0.07]" />
      <div
        aria-hidden="true"
        className="absolute -top-10 -right-10 w-72 h-72 bg-gold-200/40 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <span className="section-eyebrow">Client Love</span>
        <h2 className="section-heading">
          What Our <span className="text-gold-600">Clients Say</span>
        </h2>
        <div className="mt-4 inline-flex items-center gap-2 bg-white border border-gold-200 rounded-full px-5 py-2 shadow-sm">
          <div className="flex text-gold-500 text-sm" aria-hidden="true">
            {"★★★★★".split("").map((s, i) => (
              <span key={i}>{s}</span>
            ))}
          </div>
          <span className="text-sm font-semibold text-maroon-700">4.9/5</span>
          <span className="text-xs text-charcoal/50">from real clients across South Punjab</span>
        </div>
        <div className="gold-divider mt-6" />
      </div>

      <div className="max-w-6xl mx-auto mt-14 grid sm:grid-cols-2 gap-6 relative z-10">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ y: 24 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="card-elegant text-left relative overflow-hidden"
          >
            <span
              aria-hidden="true"
              className="absolute -top-4 right-4 font-display text-8xl text-gold-200 select-none leading-none"
            >
              &rdquo;
            </span>
            <div className="flex gap-1 text-gold-500 mb-4 relative" aria-label="5 star rating">
              {"★★★★★".split("").map((s, idx) => (
                <span key={idx}>{s}</span>
              ))}
            </div>
            <p
              className="text-charcoal/80 leading-relaxed italic relative"
              dangerouslySetInnerHTML={{ __html: `“${t.quote}”` }}
            />
            <div className="mt-5 flex items-center gap-3 relative">
              <span className="w-11 h-11 rounded-full bg-maroon-700 text-gold-300 font-display font-bold flex items-center justify-center">
                {t.name.charAt(0)}
              </span>
              <div>
                <p className="font-semibold text-maroon-700">{t.name}</p>
                <p className="text-xs text-charcoal/60">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
