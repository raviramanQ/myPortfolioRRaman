# Portfolio UI Redesign — Design Spec
Date: 2026-06-27

## Overview

Full visual overhaul of Ravi Raman's React portfolio from the current 2-year-old light theme to a **Bold / Creative Dark** editorial theme — deep navy (`#0a0f1e`) with amber gold (`#f59e0b`) accents, strong typography, and a **separate-page** navigation model (each nav item loads its own view, no full-page scroll).

---

## Theme & Visual Language

| Property | Value |
|---|---|
| Background | `#0a0f1e` (deep navy) |
| Surface | `#111827` (dark slate cards) |
| Accent primary | `#f59e0b` (amber gold) |
| Text primary | `#f1f5f9` |
| Text muted | `#94a3b8` / `#64748b` |
| Border | `#f59e0b22` (amber tint) / `#1e293b` (slate) |
| Font heading | System sans-serif, weight 700–800 |
| Font labels | Uppercase, `letter-spacing: 2–3px`, 7–9px |
| Corner radius | Sharp (2–4px) — editorial, not rounded |
| Decorative elements | Subtle radial blobs in `#f59e0b08` for depth |

### Key UI Patterns
- Section numbers: `№ 01`, `№ 02` … with a thin amber rule extending to full width
- Left-border accent cards: `border-left: 2px solid #f59e0b` for info blocks
- Amber underline on active nav link
- Stats displayed as large amber numbers with tiny uppercase labels
- Tech tags: dark bg `#1e293b`, amber border tint, small caps

---

## Navigation

- Fixed top navbar on every page: `RR` logo left, nav links center (uppercase, letter-spaced), `HIRE ME` button right
- Active page link: amber color + 1px amber underline
- Inactive links: muted slate (`#64748b`)
- Navigation is **page-based** — clicking a nav item renders that section's content, hides all others (React state / router)
- No hamburger on desktop; mobile gets a collapsed menu

---

## Pages

### 1. Home (`№ 01`)
- Oversized editorial headline: `"Building the future with code."` — "the future" in amber
- Small section number + horizontal amber rule at top
- Avatar circle (RR initials / photo) + name + subtitle inline
- Tech stack listed as a single muted line
- Two CTA buttons: `VIEW WORK` (outline amber) + `DOWNLOAD CV` (solid amber fill)
- Three stat counters: `5+` yrs · `12+` projects · `20+` tech
- Decorative radial blobs (background depth, no gradients)

### 2. About (`№ 02`)
- Big headline `"About me."` — "me." in amber
- Amber rule divider
- Two-column layout: bio text left, info cards right
- Info cards use left amber border: Location, Education, Status
- Paragraphs highlight company name in amber (`Vansun Media Tech`)
- Mentions: 5 yrs, MERN, PHP, Agentic AI, RAG, AWS, networking

### 3. Skills (`№ 03`)
- Headline `"Skills."`
- 3-column grid of category blocks (dark surface cards, amber top-border label)
- Categories: Frontend · Backend · AI/GenAI · Database · Cloud/AWS · Tools
- Tags inside each block: dark bg, small text — no progress bars (cleaner, more confident)

### 4. Projects (`№ 04`)
- Headline `"Projects."`
- 2-column card grid
- Each card: category label (amber for featured, slate for others) + top border color matched to category + title + tech stack line
- Filter tabs: All · Full Stack · AI/GenAI · Frontend · Backend
- Featured AI projects get amber top border; others get slate

### 5. Experience (`№ 05`)
- Headline `"Experience."`
- Vertical timeline with amber dots for current, slate for past
- Each entry: left amber border card — role, company + date in amber, bullet description
- Education block below the timeline (same card style)

### 6. Contact (`№ 06`)
- Headline `"Let's talk."` — "talk." in amber
- Stacked contact rows with left amber border: Email · Phone · GitHub · LinkedIn
- Optional: simple message form (name, email, message) with amber-styled inputs and send button

---

## Global Components

### Navbar
```
[RR logo]  HOME  ABOUT  SKILLS  PROJECTS  EXPERIENCE  CONTACT  [HIRE ME]
```
- Height ~50px, `border-bottom: 0.5px solid #f59e0b22`
- Sticky/fixed at top

### Footer
- Minimal: `© 2026 Ravi Raman` left, social icons right (GitHub, LinkedIn, Email)
- Same dark bg, amber icon hover

---

## Implementation Approach

- **React Router v6** — each page is a route (`/`, `/about`, `/skills`, etc.)
- Replace current single-page scroll with `<Routes>` + `<Route>` per section
- Reuse existing component files — restyle CSS, keep data/logic intact
- Replace all existing CSS with new dark theme CSS per component
- Global CSS variables defined in `index.css`
- Framer Motion page transitions: fade + slight upward translate on enter

---

## What Stays the Same
- All project data, experience data, skills data (already updated)
- Contact form EmailJS integration
- GitHub/LinkedIn/download CV links
- Existing React component structure (About.js, Skills.js, Projects.js, etc.)

## What Changes
- Every `.css` file — fully replaced
- `App.js` — add React Router, page-based navigation
- `Header/Hero` → merged into a single `Home` page component
- `index.css` — global CSS variables for the new theme
- Color scheme, typography, layout throughout
