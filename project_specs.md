# Project Specs — La Motivacion Website

## What the app does
Static marketing website for **LA MOTIVACION – Premium Fitness Lounge**, Dhuri, Punjab.
No auth, no database, no server-side logic. Pure front-end marketing site.

## Who uses it
Potential gym members in Dhuri & Sangrur, Punjab looking for membership info, timings, and contact.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (subtle scroll-reveal + hover effects)
- **Fonts:** Bebas Neue + Inter via `next/font/google`
- **Hosting:** Vercel (recommended)
- **No database, no auth, no third-party services**

## Pages & User Flows
Single page (`/`) — all public, no auth:
1. Navbar (sticky)
2. Hero
3. Membership Plans
4. Timings & Facilities
5. Pro Ultimate Equipment
6. Trainer Profiles
7. Testimonials Slider
8. Sister Branch (FitnessBox, Sangrur)
9. Contact Form
10. Footer

## Data Models
No database. All content is hardcoded in component files.

## Assets (place in `/public`)
- `logo.png` — navbar and footer logo
- `photo1.png` — right side fixed background figure
- `photo2.png` — left side fixed background figure

## Done When
- All 10 sections render correctly at `/`
- Animations trigger on scroll, feel subtle (not flashy)
- Fully responsive — hamburger menu on mobile, side images hidden on mobile
- `npm run build` exits with no errors
