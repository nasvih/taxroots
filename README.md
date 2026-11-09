# TaxRoots — taxroots.ie

Website for **TaxRoots Limited** (Irish tax refunds, CRO 828654, Dublin). Static Astro 5 site — no backend.
Every enquiry form opens WhatsApp (or email) with the details pre-filled.

```
npm ci
npm run dev      # http://localhost:4610
npm run build    # -> dist/ (static)
npm run start    # serve dist on http://localhost:4600
```

Deploy (Vercel): framework preset **Astro**, build `npm run build`, output `dist`. No env vars.

## Before launch — confirm with the owner
- Email, address, hours: `src/data/site.ts` (marked CONFIRM). Phone and WhatsApp are confirmed (+353 85 228 1647), also set there
- Fee %: `FEE_PERCENT` in `src/pages/fees.astro`, `feePercent` in `src/lib/estimator.ts`
- TAIN, legal pages (solicitor review), visible `[CONFIRM]` chips on some pages
- Budget 2027 figures are "announced" until the Finance (No. 2) Bill 2026 passes

Design/build rules: `CONTRACT.md`.
