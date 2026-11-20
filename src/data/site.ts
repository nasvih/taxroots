// Site-wide facts + navigation. SHARED CONTRACT — edit only via the lead (main) agent.
// Every value marked CONFIRM is a placeholder the owner must confirm (see /CONFIRM.md).

export const SITE = {
  name: 'TaxRoots',
  legal: 'TaxRoots Limited',
  tagline: 'Get More Back',
  url: 'https://taxroots.ie',
  cro: '828654',
  incorporated: '2026-10-19',
  city: 'Co. Cork, Ireland',
  email: 'hello@taxroots.ie',          // CONFIRM
  phone: '+353 85 228 1647',
  phoneHref: 'tel:+353852281647',
  whatsappNumber: '353852281647',
  whatsapp: 'https://wa.me/353852281647',  // keep in sync with whatsappNumber
  address: '3 Willow Close, Bishops Island, Watergrasshill, Co. Cork, T56 RF40', // registered office (client confirmed 2026-11-13)
  hours: 'Mon–Fri, 9:00–17:30',            // CONFIRM
  fee: 'Only 6% service charge. No refund, no fee.', // client confirmed 2026-11-17
  feePercent: 6,       // client confirmed 2026-11-17: ONLY 6% service charge
  vatRate: 23,         // Irish standard VAT rate; VAT is charged on top of the 6%, not included in it
  feeLine: 'No refund, no fee. The tax refund is paid directly into your account by Revenue. Our 6% service charge is payable only after you receive the refund. VAT is charged separately and is not included in the 6%.',
};

// Offices. Empty strings are hidden on the site (never shown as placeholders). See /CONFIRM.md.
// Each office lists the main line first, then its own secondary line (client 2026-11-20).
export type Phone = { label: string; number: string; href: string };
export type Office = { name: string; city: string; address: string; phones: Phone[]; contactName: string };
const tel = (n: string) => 'tel:' + n.replace(/[^+\d]/g, '');
const phone = (label: string, number: string): Phone => ({ label, number, href: tel(number) });
export const OFFICES: Office[] = [
  { name: 'Cork office', city: 'Cork', address: SITE.address, phones: [phone('Main', SITE.phone), phone('Secondary', '+353 89 499 6722')], contactName: 'Jibin' },
  { name: 'Dublin office', city: 'Dublin', address: '', phones: [phone('Main', SITE.phone), phone('Secondary', '+353 89 973 4131')], contactName: 'Sujir' },  // CONFIRM Dublin address
];

export type NavLink = { label: string; href: string; desc?: string; group?: string };

// Canonical service slugs. Pages live at /services/<slug>/ (built from src/data/services.ts).
export const SERVICE_LINKS: NavLink[] = [
  { label: '4-Year PAYE Tax Review', href: '/services/paye-tax-review/', desc: 'Every credit and relief, every open year', group: 'Everyone' },
  { label: 'Emergency tax refunds', href: '/services/emergency-tax-refund/', desc: 'New job or first job? Get it back', group: 'Everyone' },
  { label: 'Leaving Ireland refunds', href: '/services/leaving-ireland-refund/', desc: 'Moving abroad mid-year', group: 'Everyone' },
  { label: 'Personal tax returns', href: '/services/personal-tax-returns/', desc: 'Form 11, Form 12 and myAccount returns', group: 'Everyone' },
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
  { label: 'Company registration & changes', href: '/services/company-registration/', desc: 'New company, directors, office, trading name', group: 'Business' },
  { label: 'CRO & RBO compliance', href: '/services/cro-rbo-compliance/', desc: 'Annual returns and beneficial owners', group: 'Business' },
  { label: 'Payroll & PAYE', href: '/services/payroll-paye/', desc: 'Payroll runs, payslips, PAYE on ROS', group: 'Business' },
  { label: 'VAT & RCT', href: '/services/vat-rct/', desc: 'VAT returns and Relevant Contracts Tax', group: 'Business' },
  { label: 'Mortgage finance support', href: '/services/mortgage-finance-support/', desc: 'Paperwork for your mortgage application', group: 'Mortgage & pension' },
  { label: 'Pension support', href: '/services/pension-support/', desc: 'Contribution relief reviews and referrals', group: 'Mortgage & pension' },
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
