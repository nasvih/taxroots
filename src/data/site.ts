// Site-wide facts + navigation. SHARED CONTRACT — edit only via the lead (main) agent.
// Every value marked CONFIRM is a placeholder the owner must confirm (see /CONFIRM.md).

export const SITE = {
  name: 'TaxRoots',
  legal: 'TaxRoots Limited',
  tagline: 'Get more back',
  url: 'https://taxroots.ie',
  cro: '828654',
  incorporated: '2026-10-19',
  city: 'Dublin, Ireland',
  email: 'hello@taxroots.ie',          // CONFIRM
  phone: '+353 85 228 1647',
  phoneHref: 'tel:+353852281647',
  whatsappNumber: '353852281647',
  whatsapp: 'https://wa.me/353852281647',  // keep in sync with whatsappNumber
  address: 'Dublin, Ireland',              // CONFIRM full registered address
  hours: 'Mon–Fri, 9:00–17:30',            // CONFIRM
  fee: 'Agreed upfront. No refund, no fee.', // CONFIRM fee model
};

export type NavLink = { label: string; href: string; desc?: string; group?: string };

// Canonical service slugs. Pages live at /services/<slug>/ (built from src/data/services.ts).
export const SERVICE_LINKS: NavLink[] = [
  { label: '4-Year PAYE Tax Review', href: '/services/paye-tax-review/', desc: 'Every credit and relief, every open year', group: 'Everyone' },
  { label: 'Emergency tax refunds', href: '/services/emergency-tax-refund/', desc: 'New job or first job? Get it back', group: 'Everyone' },
  { label: 'Leaving Ireland refunds', href: '/services/leaving-ireland-refund/', desc: 'Moving abroad mid-year', group: 'Everyone' },
  { label: 'Rent Tax Credit', href: '/services/rent-tax-credit/', desc: 'Renters and parents of students', group: 'Your costs' },
  { label: 'Medical & dental expenses', href: '/services/medical-expenses/', desc: '20% back on qualifying health costs', group: 'Your costs' },
  { label: 'Remote working relief', href: '/services/remote-working-relief/', desc: 'Work from home? Claim on your bills', group: 'Your costs' },
  { label: 'Flat rate expenses', href: '/services/flat-rate-expenses/', desc: 'Nurses, teachers, retail and more', group: 'Your costs' },
  { label: 'Tuition fees relief', href: '/services/tuition-fees-relief/', desc: 'College fees for you or family', group: 'Your costs' },
  { label: 'Marriage & joint assessment', href: '/services/marriage-joint-assessment/', desc: 'Share credits and rate bands', group: 'Your family' },
  { label: 'Home Carer Tax Credit', href: '/services/home-carer-tax-credit/', desc: 'One partner caring at home', group: 'Your family' },
  { label: 'Single parent credit (SPCCC)', href: '/services/single-parent-credit/', desc: 'Single Person Child Carer Credit', group: 'Your family' },
  { label: 'Incapacitated Child Credit', href: '/services/incapacitated-child-credit/', desc: 'For a child with a lasting incapacity', group: 'Your family' },
  { label: 'Dependent relative & age credits', href: '/services/dependent-relative-age-credits/', desc: 'Caring for a relative, or 65+', group: 'Your family' },
  { label: 'Small landlord tax returns', href: '/services/landlord-tax-returns/', desc: 'Rental income, done right', group: 'Property' },
];

export const NAV: (NavLink & { children?: NavLink[] })[] = [
  { label: 'How it works', href: '/how-it-works/' },
  { label: 'Services', href: '/services/', children: SERVICE_LINKS },
  { label: 'Refund estimator', href: '/refund-estimator/' },
  { label: 'Fees', href: '/fees/' },
  { label: 'Insights', href: '/insights/' },
  { label: 'About', href: '/about/' },
];

export const CTA = { label: 'Start my claim', href: '/start/' };

export const FOOTER = {
  company: [
    { label: 'About us', href: '/about/' },
    { label: 'How it works', href: '/how-it-works/' },
    { label: 'Fees', href: '/fees/' },
    { label: 'Insights', href: '/insights/' },
    { label: 'Contact', href: '/contact/' },
  ],
  help: [
    { label: 'Start my claim', href: '/start/' },
    { label: 'Refund estimator', href: '/refund-estimator/' },
    { label: 'FAQ', href: '/faq/' },
  ],
  legal: [
    { label: 'Privacy notice', href: '/privacy/' },
    { label: 'Terms of engagement', href: '/terms/' },
    { label: 'Cookies', href: '/cookies/' },
    { label: 'Complaints', href: '/complaints/' },
  ],
};
