# Trade International Logistics — Marketing Website

A modern, fully responsive marketing/portfolio site for **Trade International Logistics**, a
Pakistani air freight forwarding company. Built with **React + Vite + Tailwind CSS**. Static,
no backend required, and ready to deploy on Vercel.

## Tech stack

- React 18 + Vite 5
- Tailwind CSS 3
- lucide-react (icons)
- Inter + JetBrains Mono (Google Fonts)

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build into /dist
npm run preview  # preview the production build locally
```

> Requires Node.js 18+.

## Deploy to Vercel

1. Push this folder to a Git repository (GitHub/GitLab/Bitbucket).
2. In Vercel, **Add New → Project** and import the repo.
3. Vercel auto-detects Vite. Defaults are correct:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Deploy. That's it.

You can also run `npx vercel` from this folder to deploy straight from the CLI.

## Project structure

```
src/
  App.jsx                 # page composition (section order)
  data.js                 # ALL editable content — edit this first
  index.css               # Tailwind layers, base styles, animations
  components/
    Navbar.jsx            # sticky nav + mobile menu
    Hero.jsx              # hero with flight-path background + AWB card
    About.jsx             # company story + leadership card
    Stats.jsx             # animated counters (navy band)
    Services.jsx          # 6 service cards
    Origins.jsx           # 6 Pakistani origin cities
    Destinations.jsx      # 14 international destinations
    Airlines.jsx          # 11 airline partners (placeholder logos)
    Testimonials.jsx      # 3 client reviews
    Certificates.jsx      # accreditations
    Contact.jsx           # frontend-only enquiry form
    Footer.jsx            # footer + copyright
    BackgroundPattern.jsx # decorative SVG route map
    Reveal.jsx            # scroll fade-in wrapper
    Counter.jsx           # count-up animation
    Logo.jsx              # brand lockup (placeholder plane mark)
    SectionHeading.jsx    # shared eyebrow + title
```

## Editing content

Almost everything you'll want to change lives in **`src/data.js`**:

- Company name, tagline, founder, CEO, email, phone, address (`COMPANY`)
- Counter stats (`STATS`) — "Years in Business" updates automatically each year
- Services, origins, destinations, airlines, testimonials, certificates
- Navigation links (`NAV_LINKS`)

## Brand colours

Defined in `tailwind.config.js`:

| Token            | Hex       | Use                         |
| ---------------- | --------- | --------------------------- |
| `navy.900`       | `#1a2744` | Primary navy                |
| `accent.DEFAULT` | `#2563eb` | Accent blue (CTAs, links)   |
| `canvas`         | `#f9fafb` | Page background             |

## Placeholders to replace later

This build intentionally uses **placeholders** instead of real imagery:

- **Logo:** a generic plane mark in `src/components/Logo.jsx` and the favicon in `index.html`.
- **Airline logos:** monogram tiles in `Airlines.jsx` (names are real, logos are placeholders).
- **Certificate seals:** generated SVG seals in `Certificates.jsx`.
- **Hero imagery:** a custom SVG route map (`BackgroundPattern.jsx`) — no stock photos needed.

Swap any of these for real assets when you have them. To use real images, drop files into a
`public/` folder and reference them as `/your-image.png`.

## Wiring up the contact form

The form in `Contact.jsx` is **frontend only** — it validates and shows a success message but
does not send data anywhere. To receive enquiries, connect it to a service such as
[Formspree](https://formspree.io), [EmailJS](https://www.emailjs.com), or your own API inside
the `handleSubmit` function (look for the comment marking where to add the request).

---

© 2009–2026 Trade International Logistics. Founder: Ghulam Yasin Anjum · CEO: Haider Ali
