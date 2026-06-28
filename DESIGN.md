---
name: Think Hawks
description: Full-service digital marketing agency — Lahore-based, global-standard
colors:
  hawk-green: "#8EA97A"
  hawk-green-light: "#A9C193"
  hawk-green-dark: "#6E8960"
  charcoal: "#555353"
  ink: "#222222"
  muted: "#666666"
  surface-alt: "#F8FAF8"
  surface-dark: "#111111"
  white: "#FFFFFF"
typography:
  display:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.01em"
rounded:
  sm: "0.5rem"
  md: "0.75rem"
  lg: "1rem"
  xl: "1.5rem"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  2xl: "80px"
  section: "112px"
components:
  button-primary:
    backgroundColor: "linear-gradient(135deg, #8EA97A, #A9C193)"
    textColor: "#FFFFFF"
    rounded: "{rounded.xl}"
    padding: "10px 24px"
  button-primary-hover:
    backgroundColor: "linear-gradient(135deg, #6E8960, #8EA97A)"
    textColor: "#FFFFFF"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.hawk-green}"
    rounded: "{rounded.xl}"
    padding: "10px 24px"
  button-outline-hover:
    backgroundColor: "{colors.hawk-green}"
    textColor: "{colors.white}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.hawk-green}"
    rounded: "{rounded.xl}"
    padding: "10px 24px"
  card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.xl}"
    padding: "28px"
---

# Design System: Think Hawks

## 1. Overview

**Creative North Star: "The Predator's Clarity"**

Think Hawks operates at altitude. The design sees everything below clearly, acts decisively, and wastes nothing. Every element on the page earns its place by moving a visitor closer to making contact. This is not a decorative site; it is a conversion instrument wearing a sharp suit.

The visual language is anchored in contrast: dark hero sections that command the opening of every page, clean white body for content to breathe, and a single hawk-green accent that fires with purpose. Typography is tight and deliberate — Poppins for display weight and authority, Inter for body legibility. Motion is choreographed around the scroll, not sprinkled for decoration.

The system explicitly rejects: the warm-beige-card-grid-eyebrow-on-every-section aesthetic that AI-generated agency sites have defaulted to in 2026. It also rejects the IBM-blue corporate stiffness of procurement vendors. Think Hawks is neither generic nor stiff — it is sharp, regional, and operating at a standard its competitors haven't reached.

**Key Characteristics:**
- Dark hero sections open every page; light body sections carry the content
- One accent color (hawk green) used with discipline — never as a body background
- Display type is Poppins at tight letter-spacing; body type is Inter at 1.65 line-height
- Motion reveals content on scroll entry; hover states translate cards -2px on Y
- Glassmorphism used once per page maximum (the nav on scroll), never decoratively

## 2. Colors: The Hawk Palette

One green carries the entire brand. Its restraint is the point.

### Primary
- **Hawk Green** (#8EA97A): The brand's only accent color. Used as gradient fill on primary buttons and CTAs, focus rings, scrollbar thumb, text selection, and category badges. Never used as a background for large text sections.
- **Hawk Green Light** (#A9C193): The lighter end of the gradient. Used only within `gradient-bg` or as a tint on hover states. Not used as a standalone text color against white.
- **Hawk Green Dark** (#6E8960): The darker end for `gradient-bg-dark`, hover gradient states, and link underlines on light backgrounds.

### Neutral
- **Ink** (#222222): The primary body text color. Used on all body, heading, and label text over white or `surface-alt` backgrounds.
- **Charcoal** (#555353): Used for secondary text, captions, and the secondary button background. Reads as "secondary without being invisible."
- **Muted** (#666666): Tertiary text only — captions below images, form helper text, timestamps. Never for body paragraphs. Contrast ratio ~4.7:1 on white (passes WCAG AA).
- **Surface Alt** (#F8FAF8): The alternating section background. A barely perceptible sage tint — 0.01 chroma toward green — distinguishes it from pure white without competing with content.
- **Surface Dark** (#111111): Hero sections, footer, dark CTAs. Sits one step above pure black for rendered depth.
- **White** (#FFFFFF): Body sections, card surfaces, input backgrounds.

**The One Accent Rule.** Hawk Green is the only color that stands out. Every other surface is neutral. The moment a second accent is introduced (blue, orange, purple per-category in cards), it competes with the brand signal. Per-category color tints in service cards are permitted only as low-opacity icon backgrounds, never as primary visual differentiators.

**The Muted Minimum Rule.** No text color lighter than #666666 on white or #F8FAF8 backgrounds. At that value the contrast ratio is ~4.7:1. Below it, WCAG AA fails. The temptation to go lighter "for elegance" is the single fastest way to make the site feel like it was assembled rather than designed.

## 3. Typography

**Display Font:** Poppins (700, 600 weights), with `system-ui, sans-serif` fallback
**Body Font:** Inter (400, 500, 600 weights), with `system-ui, sans-serif` fallback

**Character:** Poppins is geometric and confident — it commands attention without shouting. Inter is neutral and precise — it gets out of the way of the message. Together they cover authority (display) and clarity (body) without competing for personality.

### Hierarchy
- **Display** (700, `clamp(2.25rem, 5vw, 3.75rem)`, 1.15): Page heroes only. Max one instance per route. Letter-spacing `-0.02em` (floor: never tighter).
- **Headline** (700, `clamp(1.5rem, 3vw, 2.25rem)`, 1.25): Section headings. Letter-spacing `-0.01em`.
- **Title** (Poppins 600, `1.125rem`, 1.4): Card headings, sidebar titles, modal headers.
- **Body** (Inter 400, `1rem`, 1.65): All paragraph text. Max line length 65–75ch; enforce with `max-w-prose` or explicit `max-width`.
- **Label** (Inter 600, `0.875rem`, 1.4, `letter-spacing: 0.01em`): Button text, form labels, table headers, badge text.

**The Ceiling Rule.** Display headings must stay within `clamp(2.25rem, 5vw, 3.75rem)`. The temptation to push hero headlines to 5–8rem is the most common AI-generation tell. 3.75rem is loud enough. Letter-spacing must stay at or above `-0.02em` — tighter than that and Poppins's glyphs touch and lose their authority.

**The Balance Rule.** Apply `text-wrap: balance` to all `h1`–`h3` elements so short-copy headings split evenly across lines on narrow viewports. Apply `text-wrap: pretty` to long body paragraphs to prevent orphaned words.

## 4. Elevation

This system uses **tonal layering plus restrained shadow**. Shadows appear only in response to state, never as ambient decoration on static surfaces.

### Shadow Vocabulary
- **Ambient Rest** (`box-shadow: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)`): Cards at rest. Subtle enough to be nearly invisible; there to separate card from `surface-alt` background.
- **Hover Lift** (`box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)`): Cards on `:hover`. Pairs with `transform: translateY(-4px)`.
- **Green Glow** (`box-shadow: 0 8px 40px rgba(142, 169, 122, 0.28)`): CTA buttons and floating accent elements only. Applied via `.glow-primary`. Never on cards or inputs.
- **Dark Sections**: No shadow. The surface itself is the signal.

**The Ghost-Card Ban.** A `border: 1px solid` plus a `box-shadow` with blur ≥ 16px on the same element is the ghost-card pattern. Cards have one or the other — either a border at rest (no shadow) or a shadow at rest (no border). The shadow is the correct choice here; remove `border border-gray-100` from card defaults and rely on the ambient shadow instead.

**The Flat-by-Default Rule.** Sections are flat. Elevation responds to interaction (hover, focus, drag) and hierarchy (card > section), never to decoration.

## 5. Components

### Buttons
Bold and direct: high contrast, clear verbs, no ambiguity about what clicking does.

- **Shape:** Rounded extra-large (`rounded-xl`, 12px). Tags and pills use full-pill; cards and inputs never exceed `rounded-xl`.
- **Primary (default):** Gradient fill `linear-gradient(135deg, #8EA97A, #A9C193)` + white text + `box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1)`. On hover: darker gradient `linear-gradient(135deg, #6E8960, #8EA97A)`, `transform: translateY(-2px)`, increased shadow.
- **Outline:** `border-2` solid Hawk Green, Hawk Green text, transparent bg. On hover: fills solid Hawk Green with white text. Use on dark sections where the primary gradient would blend.
- **Ghost:** Hawk Green text, no border, no bg. Hover adds `bg-primary/10` tint. Use for tertiary actions.
- **White (on dark):** White bg + Charcoal text + `shadow-lg`. Use only within dark hero sections.
- **Outline-White (on dark):** `border-2 border-white` + white text. Converts to white fill + dark text on hover. Use as a secondary CTA within hero sections.
- **Focus:** `outline: 2px solid #8EA97A; outline-offset: 2px` on all variants (`:focus-visible` only).

### Cards
- **Corner Style:** `rounded-xl` (12px — never `rounded-2xl` or larger on card surfaces).
- **Background:** White (`#FFFFFF`) on `surface-alt`; `surface-alt` (`#F8FAF8`) on white sections.
- **Shadow:** Ambient rest shadow only. Remove the `border border-gray-100` — the shadow provides separation; the border is redundant and adds the ghost-card pattern.
- **Hover:** Lift shadow + `transform: translateY(-4px)` transition (duration 300ms).
- **Internal Padding:** `p-6` (24px) for tight cards, `p-7` (28px) for standard service/blog cards.

### Inputs and Fields
- **Style:** White background, `border border-gray-200` at rest, `rounded-xl` (12px).
- **Focus:** `ring-2 ring-primary ring-offset-2` via Tailwind. The ring uses Hawk Green. No glow, no shadow — the ring is the focus signal.
- **Error:** `ring-2 ring-red-500` + `aria-invalid="true"` + `aria-describedby` pointing at the error message. Error text in `text-red-600`.
- **Disabled:** `opacity-50 pointer-events-none`.

### Navigation
- **Scroll-off (transparent):** Uses `.glass-dark` — `rgba(22, 22, 22, 0.80)` + `backdrop-filter: blur(16px)` + subtle white/8% border. This is the one sanctioned use of glassmorphism per page.
- **Scroll-on (solid):** Transitions to `bg-[#111111]` after threshold. Smooth transition over 300ms.
- **Link states:** White text at rest, Hawk Green on hover/active. The active state uses a 2px Hawk Green underline, not background fill.
- **Mobile nav:** Slides in from the right as a full-height sheet over `bg-[#111111]`. Never obscures scrollbar.

### Hero Sections (Signature Pattern)
Each page opens with a dark section (`bg-[#111111]` or gradient overlay) with:
- A category badge: `bg-primary/15 border border-primary/30 text-primary` + small pulsing dot — used once per hero, not on body sections.
- An SVG wave at the bottom transitioning to the body color.
- One or two CTA buttons: primary (gradient-bg) + secondary (outline-white).

**The One-Hero Badge Rule.** The pulsing category badge ("What We Do", "Our Services") appears only in the hero. Repeating the same badge component in body sections as section eyebrows is the AI-grammar scaffold this design explicitly rejects.

## 6. Do's and Don'ts

### Do:
- **Do** open every page with a dark hero section (`#111111` background) that transitions to the light body via the SVG wave divider.
- **Do** use Hawk Green as the only accent across the entire interface — one color, used with discipline.
- **Do** use `text-wrap: balance` on all `h1`–`h3` and `text-wrap: pretty` on body prose.
- **Do** keep display heading `font-size` inside the `clamp(2.25rem, 5vw, 3.75rem)` ceiling. 3.75rem (60px) is the maximum.
- **Do** keep `letter-spacing` on display headings at `-0.02em` or looser. Tighter is cramped.
- **Do** ensure every text color on white or `#F8FAF8` meets WCAG AA (≥4.5:1). The minimum is `#666666`.
- **Do** keep glassmorphism to a single use per route: the scrolled-transparent navigation only.
- **Do** limit card `border-radius` to `rounded-xl` (12px). Full-pill is for tags and badges only.
- **Do** translate every button `<button>` and `<Link>` to use verb + object labels ("Submit inquiry", "View pricing plans", "Read the full article").
- **Do** handle both success and error states visibly in all forms. Silent failure is not a UX pattern.

### Don't:
- **Don't** use the generic "SaaS cream" palette: warm-beige body backgrounds, soft rounded-card grids with identical icon + heading + text layouts, tiny uppercase tracked eyebrows above every section. This is the first thing a visitor recognizes as AI-generated.
- **Don't** use corporate/enterprise visual language: formal IBM-blue palettes, stock-photo-heavy layouts, procurement-vendor tone. Think Hawks is a growth partner, not a vendor.
- **Don't** use gradient text (`background-clip: text` with a gradient). It is decoration, not information. The `.gradient-text` utility exists in globals.css for legacy reasons; deprecate its use on new sections. Replace with solid `text-primary` or a weight change.
- **Don't** repeat the pulsing category badge ("What We Do", "Our Process") as an eyebrow on body sections. One badge per hero section is brand voice; an eyebrow on every section is AI grammar.
- **Don't** use numbered section markers (01 / 02 / 03) as default scaffolding across the site. They earn their place only in genuinely sequential content (the academy module list, a 3-step process).
- **Don't** pair `border: 1px solid` with a `box-shadow` blur ≥ 16px on the same card element (the ghost-card pattern). Choose one: border at rest, or shadow at rest.
- **Don't** exceed `rounded-xl` (12px) on card and container surfaces. The `rounded-2xl` and `rounded-3xl` tokens exist for specific elements (the hero badge pill, modal containers) — not for service cards, blog cards, or inputs.
- **Don't** introduce a second accent color at full saturation. Per-category colors (blue for Social Media, orange for Ads) must remain as low-opacity icon backgrounds (≤10% opacity) only.
- **Don't** use hero-metric templates (large number + small label + gradient accent) as the primary trust signal on the homepage. Trust is earned through named clients, real outcomes, and specific service descriptions.
