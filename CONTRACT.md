# TaxRoots site — build contract for page agents

Project: taxrootsirl.com for **TaxRoots Limited** (Irish tax refunds; CRO 828654; incorporated 19 Oct 2026, Dublin; tagline "Get more back").
Stack: Astro 5 (static pages + one node route `/api/lead`), GSAP + Lenis available, no Tailwind, no other UI libs.
Root: `/Users/nasvih/Claude/projects/taxroots/site`

**IRELAND ONLY.** Audience = people living/working in Ireland. Irish Revenue (revenue.ie, myAccount, ROS), € only, Irish place names, Irish/UK English. No India/US references, no rupees/dollars, no Indian imagery or wording.

## Sources of truth
- Copy + facts: `/Users/nasvih/Claude/projects/taxroots/files/research/CONTENT.md` (researched, cited). Write ORIGINAL copy from it. Never invent testimonials, client counts, refund totals, ratings, awards, "years of experience" or reviews — the company is days old. Figures (credit amounts, % rates) only from CONTENT.md, with the tax year stated.
- Photos: `public/photos/*.jpg` + `public/photos/CREDITS.json` (alt text + suggested use). Use `<Pic src="file.jpg" alt="..."/>` or `<img src="/photos/file.jpg">`. Never draw illustrations (no SVG/CSS art of objects/scenes). Simple UI icons (line icons, arrows, checks) are fine.
- Site facts + nav + service slugs: `src/data/site.ts` (`SITE`, `SERVICE_LINKS`, `CTA`). Contact placeholders there are marked CONFIRM — always read from `SITE`, never hard-code phone/email.

## Do NOT edit (shared)
`src/styles/*`, `src/layouts/Base.astro`, `src/components/{Header,Footer,Button,Arrow,Logo,Pic,LeadForm,Faq,PageHero,CtaBand}.astro`, `src/scripts/*`, `src/data/site.ts`, `astro.config.mjs`, `package.json`.
Need a shared change? Put it in your page's own `<style>`/component, or say so in your final report.

## Use these
- `Base` layout: `<Base title description jsonld?>` (title ≤ 60 chars, description 140–160 chars, unique per page).
- `PageHero` (inner pages: crumbs, tag, split H1, lede, slot for buttons, optional photo).
- `Button` (`variant` '' | green | ghost | white, `size` sm). `LeadForm source="page-id"`. `Faq items={[{q,a}]}`. `CtaBand`.
- Tokens (`src/styles/tokens.css`): `--indigo #322783`, `--green #00963F` (fills / large text only), `--green-ink #007A33` (small green text), `--green-bright` (green on indigo), `--indigo-50/100`, `--green-50/100`, `--bg-2`, `--ink/--ink-2/--ink-3`, `--line`, radii `--r-md/lg/xl/pill`, `--f-display` (Poppins = logo font), `--f-body` (Inter).
- Utility classes (`base.css`): `.wrap .sec .sec-s .bg-2 .bg-tint .bg-green .dark .band .lede .mega .display .hl .tag .btns .link .pill .card .pic .checks .field .crumbs .prose .note .muted`.
- Motion classes (`motion.css` header has the full reference): `.rv` (+ `.rv-l .rv-r .rv-s .rv-c .rv-i`), `data-delay`, `.stg` (stagger children), `.split` (word rise — H1/H2), `data-count` (count-up number), `.sd-clip .sd-par(--depth) .sd-fill .sd-out .sd-band`, `.marquee>.marquee-track`, `.stack-cards>.stack-card`.
- Page-specific GSAP: `<script>import { gsap, ScrollTrigger, reduceMotion } from '../scripts/gsap';</script>` (adjust relative path). Always guard with `reduceMotion` and keep content visible without JS.

## Design language
Brand colours = the logo: indigo + green on white. Light, modern, friendly, premium; generous space; soft corners; pill buttons with arrow disc.
Two references blended:
1. **Taxpert** (light tax template): clean white/soft-grey (`--bg-2`) sections, big confident Poppins headings, rounded photo cards, pill "Read more" buttons, article cards with "Tag • date", big dark rounded footer card.
2. **Orattice Media** (dynamic): kinetic hero with rounded photo collage, words rising out of masks, curtains/iris photo reveals, scroll-linked un-clip of big photos, parallax, sticky stacking cards for steps, marquee ticker of chips, colour bands that grow to full bleed, count-ups.
Avoid "AI default" tells: no eyebrow+dash+underline-bar headings, no glassmorphism pills, no icon-in-rounded-square card rows repeated everywhere, no identical card grids with hover lift on every section, no dark wash over every photo, no glow buttons, no gradients (solid colours only; the marquee edge mask is the one exception). Vary section layouts.
Accessibility: one H1 per page, semantic sections, alt text, AA contrast (never small green `#00963F` text on white — use `--green-ink`), visible focus, works at 360px wide.
Irish/UK English, € amounts, friendly plain language. Footer already carries the "not part of Revenue" disclaimer.

## Verify before you finish (required)
1. Run your own dev server on your assigned port: `cd /Users/nasvih/Claude/projects/taxroots/site && npx astro dev --port <PORT>` (run_in_background). Do NOT run `npm run build` (the lead runs the final build) and do not touch port 4600.
2. Screenshot your pages at 1440×900 and 390×844 with Playwright — helper: `node /private/tmp/claude-501/-Users-nasvih/159edcc5-f5d1-4cab-8f93-3ef53fa4c873/scratchpad/shots.mjs <url> <out-prefix> <w> <h> <n-shots>` (scrolls with the wheel so reveals fire; writes <prefix>-0..n.png). Write outputs to the scratchpad dir. LOOK at every screenshot with Read. Fix overflow, collisions, empty gaps, hidden-by-reveal content, contrast.
3. Check the dev-server console for errors. Stop your dev server when done (TaskStop on its task id — never pkill).
4. Final reply: files created, anything you needed changed in shared files, open questions. Short.

## Class-name rules (learned the hard way)
- Never reuse a global utility name (`.mega .note .card .tag .band .pic .lede …` — see base.css/motion.css) as a component's own class: the global style leaks in (the Services dropdown once inherited `.mega`'s 94px headline type).
- Scoped `<style>` cannot reach markup rendered by a child component (Arrow, Button, Pic, LeadForm…). Use `:global(...)` under your own scoped parent, e.g. `.card :global(svg){…}`.
