# Events by Momin — Website

A single-page, SEO-optimized Next.js website for **Events by Momin**, an event management &
decor company serving Rahim Yar Khan (RYK), Sadiqabad (SDK), Khanpur, Liaqatpur and all of
South Punjab.

## What's included

- Next.js 14 (App Router) + Tailwind CSS + Framer Motion animations
- One-page layout: Hero, About, Services (12 event types), Why Us, Areas We Serve, Gallery,
  Testimonials, FAQ (with schema), Contact form (WhatsApp), Footer
- Deep SEO setup: meta title/description/keywords, Open Graph & Twitter cards,
  `EventPlanning` + `FAQPage` JSON-LD structured data, auto-generated `sitemap.xml` and
  `robots.txt`
- Contact: eventbymomin@gmail.com · +92 309 4439441 · WhatsApp click-to-chat
- Social: Instagram @events_by_momin_official · Facebook "Events by Momin"

## Run it locally

You need [Node.js 18+](https://nodejs.org) installed. Then, inside this folder:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for production

```bash
npm run build
npm start
```

## Deploy

The easiest option is [Vercel](https://vercel.com) (made by the Next.js team):

1. Push this folder to a GitHub repo (or drag-and-drop deploy on vercel.com).
2. Import the repo on Vercel and click Deploy — no configuration needed.
3. Once live, update `url` in `lib/siteConfig.js` to your real domain and redeploy so all SEO
   tags, sitemap and structured data point to the correct URL.

## Where to edit things

- **Contact info, phone, email, social links, service areas, SEO keywords** →
  `lib/siteConfig.js` (single source of truth used everywhere on the site)
- **Page sections** → individual files inside `components/` (`Hero.js`, `Services.js`,
  `FAQ.js`, etc.)
- **Colors / theme** → `tailwind.config.js` (`maroon` and `gold` color scales)
- **Page title / meta description** → `app/layout.js`

## Notes

- No stock photography is bundled (to keep the project self-contained and avoid broken/licensed
  image links). Visual interest comes from a royal maroon-and-gold gradient theme, decorative
  SVG patterns and Framer Motion animations. Once you have real event photos, drop them into
  `public/images/` and swap them into `components/Gallery.js` and `components/Hero.js` using
  Next.js `<Image />` for the best performance.
- The quick enquiry form on the Contact section sends the message straight to WhatsApp — no
  backend or database required.
