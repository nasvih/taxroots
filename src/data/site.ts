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
  email: 'info@taxroots.ie',
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

// Offices, Dublin first (client 2026-11-24). Empty strings are hidden on the site.
// Phones: the shared main line first, then the office's own line. Labels are not shown on the site.
export type Phone = { number: string; href: string };
export type Office = { name: string; city: string; address: string; phones: Phone[] };
const tel = (n: string) => 'tel:' + n.replace(/[^+\d]/g, '');
const phone = (number: string): Phone => ({ number, href: tel(number) });
export const OFFICES: Office[] = [
  { name: 'Dublin office', city: 'Dublin', address: 'Apartment 39, Block B1, The Quarter, Citywest Avenue, Citywest, Co. Dublin, D24 V4PV', phones: [phone(SITE.phone), phone('+353 89 973 4131')] },
  { name: 'Cork office', city: 'Cork', address: SITE.address, phones: [phone(SITE.phone), phone('+353 89 499 6722')] },
];

// Tax years. Revenue's four-year rule: the oldest open year is (this year - 4) and its claims close
// on 31 December of this year. Computed at build time here; the home page recomputes it in the browser
// so the site rolls over on 1 January without a rebuild.
export const taxYears = (now = new Date()) => {
  const y = now.getFullYear();
  return { current: y, oldest: y - 4, newest: y - 1, open: [y - 4, y - 3, y - 2, y - 1] };
};

export type NavLink = { label: string; href: string };

// The eight services (client PDF, 2026-11-24). All live in the home page #services section.
export const SERVICES = [
  { no: '01', slug: 'personal-tax', title: 'Personal Tax', desc: 'Personal tax returns and eligible tax relief / refund claims.' },
  { no: '02', slug: 'company-registration', title: 'Company Registration & Changes', desc: 'Company incorporation, director changes, registered office address changes, company secretary changes and trading name registration.' },
  { no: '03', slug: 'cro-rbo-compliance', title: 'CRO & RBO Compliance', desc: 'Companies Registration Office filings and Register of Beneficial Ownership submissions.' },
  { no: '04', slug: 'payroll-paye', title: 'Payroll & PAYE', desc: 'Payroll processing, payslips and PAYE administration.' },
  { no: '05', slug: 'vat-rct', title: 'VAT & RCT', desc: 'VAT registration and returns; Relevant Contracts Tax registration and filings.' },
  { no: '06', slug: 'mortgage-finance-support', title: 'Mortgage Finance Support', desc: 'Mortgage application preparation, documentation coordination, and referral or administrative support. Regulated mortgage advice, arranging or credit intermediation only where legally authorised.' },
  { no: '07', slug: 'pension-support', title: 'Pension Support', desc: 'Pension information, contribution tax-relief reviews and administration/referrals. Regulated pension or investment advice requires appropriate authorisation.' },
  { no: '08', slug: 'property-investment-support', title: 'Property Investment Support', desc: 'Looking to invest in property? We provide guidance and end-to-end support, from investment planning to identifying suitable property opportunities, helping you make informed and confident investment decisions.' },
];

// Personal reliefs we claim (all part of 01 Personal Tax). No pages of their own any more.
// `slug` is kept because insight articles list related reliefs by slug (src/data/articles.ts `related`).
export type Relief = { slug: string; label: string; desc: string };
export const SERVICE_LINKS: Relief[] = [
  { slug: 'paye-tax-review', label: '4-year PAYE tax review', desc: 'Every credit and relief, every open year' },
  { slug: 'rent-tax-credit', label: 'Rent Tax Credit', desc: 'Renters and parents of students' },
  { slug: 'medical-expenses', label: 'Medical & dental expenses', desc: '20% back on qualifying health costs' },
  { slug: 'remote-working-relief', label: 'Remote working relief', desc: 'Work from home? Claim on your bills' },
  { slug: 'flat-rate-expenses', label: 'Flat rate expenses', desc: 'Nurses, teachers, retail and more' },
  { slug: 'tuition-fees-relief', label: 'Tuition fees relief', desc: 'College fees for you or family' },
  { slug: 'emergency-tax-refund', label: 'Emergency tax refunds', desc: 'New job or first job? Get it back' },
  { slug: 'marriage-joint-assessment', label: 'Marriage & joint assessment', desc: 'Share credits and rate bands' },
  { slug: 'leaving-ireland-refund', label: 'Leaving Ireland refunds', desc: 'Moving abroad mid-year' },
  { slug: 'personal-tax-returns', label: 'Personal tax returns', desc: 'Form 11, Form 12 and myAccount returns' },
  { slug: 'home-carer-tax-credit', label: 'Home Carer Tax Credit', desc: 'One partner caring at home' },
  { slug: 'single-parent-credit', label: 'Single parent credit (SPCCC)', desc: 'Single Person Child Carer Credit' },
  { slug: 'incapacitated-child-credit', label: 'Incapacitated Child Credit', desc: 'For a child with a lasting incapacity' },
  { slug: 'dependent-relative-age-credits', label: 'Dependent relative & age credits', desc: 'Caring for a relative, or 65+' },
  { slug: 'landlord-tax-returns', label: 'Small landlord tax returns', desc: 'Rental income, done right' },
];
// The nine shown as tags under 01 Personal Tax.
export const PERSONAL_TAGS = SERVICE_LINKS.slice(0, 9).map((r) => r.label);

// Single page: everything is an anchor on the home page except Insights.
export const NAV: NavLink[] = [
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Insights', href: '/insights/' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#check' },
];

export const CTA = { label: 'Start my claim', href: '/#check' };

export const FOOTER = {
  legal: [
    { label: 'Privacy notice', href: '/privacy/' },
    { label: 'Terms of engagement', href: '/terms/' },
    { label: 'Cookies', href: '/cookies/' },
    { label: 'Complaints', href: '/complaints/' },
  ],
};
