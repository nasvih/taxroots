// TaxRoots services: one entry per /services/<slug>/ page.
// Every figure comes from files/research/CONTENT.md (sections 2 and 4) and carries its tax year.
// Budget 2027 measures stay labelled "announced in Budget 2027, subject to the Finance Bill" until enacted.
// Strings in canClaim / goodToKnow / faqs[].a may contain simple inline HTML (<strong>, <em>).
import { SERVICE_LINKS } from './site';

export type ServiceGroup = 'Everyone' | 'Your costs' | 'Your family' | 'Property';

export interface FigureTable {
  caption: string;
  head: string[];
  rows: string[][];
  /** row indexes (0-based) that hold announced-but-not-enacted figures */
  announced?: number[];
  note?: string;
}

export interface Service {
  slug: string;
  title: string;
  /** label used in nav + lead form (from SERVICE_LINKS) */
  label: string;
  group: ServiceGroup;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  whoFor: string[];
  canClaim: string[];
  tables: FigureTable[];
  /** value must hold one number for the count-up, e.g. "€1,000" */
  keyFigure: { value: string; label: string; year: string };
  /** short chip shown on the services index, with its year */
  chip: string;
  goodToKnow?: string[];
  documents: string[];
  faqs: { q: string; a: string }[];
  photo: string;
  alt: string;
  sources: string[];
  related: string[];
}

export const ANNOUNCED = 'Announced in Budget 2027, subject to the Finance Bill';

// Sources (CONTENT.md section 0). Keys = source IDs.
export const SOURCES: Record<string, { label: string; url: string }> = {
  S1: { label: 'Revenue: tax rates, bands and reliefs charts', url: 'https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/tax-relief-charts/index.aspx' },
  S4: { label: 'Revenue: reduced rates of USC', url: 'https://www.revenue.ie/en/jobs-and-pensions/usc/reduced-rates.aspx' },
  S5: { label: 'Revenue: Budget 2026 summary', url: 'https://www.revenue.ie/en/corporate/press-office/budget-information/current-year/budget-summary.pdf' },
  S6: { label: 'Citizens Information: Budget 2027', url: 'https://www.citizensinformation.ie/en/money-and-tax/budgets/budget-2027/' },
  S7: { label: 'Revenue: the four-year rule', url: 'https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/four-year-rule/index.aspx' },
  S8: { label: 'Revenue: Rent Tax Credit overview', url: 'https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/land-and-property/rent-credit/index.aspx' },
  S9: { label: 'Revenue: Rent Tax Credit qualifying conditions', url: 'https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/land-and-property/rent-credit/qualifying-conditions.aspx' },
  S10: { label: 'Revenue: Rent Tax Credit, property used by your child', url: 'https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/land-and-property/rent-credit/used-by-child.aspx' },
  S11: { label: 'Revenue: Rent Tax Credit, how much can you claim', url: 'https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/land-and-property/rent-credit/how-much-claim.aspx' },
  S12: { label: 'Revenue: Rent Tax Credit, how to claim', url: 'https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/land-and-property/rent-credit/how-to-claim.aspx' },
  S13: { label: 'Revenue: health expenses overview', url: 'https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/health-and-age/health-expenses/index.aspx' },
  S14: { label: 'Revenue: qualifying health expenses', url: 'https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/health-and-age/health-expenses/what-are-qualifying-expenses.aspx' },
  S15: { label: 'Revenue: dental expenses (Med 2)', url: 'https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/health-and-age/health-expenses/dental-expenses.aspx' },
  S16: { label: 'Revenue: nursing home expenses', url: 'https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/health-and-age/health-expenses/nursing-home-and-additional-nursing-care-expenses.aspx' },
  S17: { label: 'Revenue: how to claim health expenses', url: 'https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/health-and-age/health-expenses/how-do-you-claim-health-expenses.aspx' },
  S18: { label: 'Revenue: remote working, what costs can you claim', url: 'https://www.revenue.ie/en/jobs-and-pensions/eworking/what-costs-can-you-claim-for.aspx' },
  S19: { label: 'Revenue: remote working, how to calculate', url: 'https://www.revenue.ie/en/jobs-and-pensions/eworking/calculate-allowable-remote-working-costs.aspx' },
  S20: { label: 'Revenue: Flat Rate Expense allowances', url: 'https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/income-and-employment/flat-rate-expenses/index.aspx' },
  S21: { label: 'Revenue: Flat Rate Expenses list 2020–2026 (PDF)', url: 'https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/documents/flat-rate-expenses.pdf' },
  S22: { label: 'Revenue: tuition fees relief overview', url: 'https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/education/tuition-fees-paid-for-third-level-education/index.aspx' },
  S23: { label: 'Revenue: tuition fees, how to calculate the relief', url: 'https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/education/tuition-fees-paid-for-third-level-education/how-do-you-calculate-the-relief.aspx' },
  S24: { label: 'Revenue: Home Carer Tax Credit rates', url: 'https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/health-and-age/home-carer-credit/home-carer-tax-credit-rates.aspx' },
  S25: { label: 'Revenue: qualifying for the Home Carer Tax Credit', url: 'https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/health-and-age/home-carer-credit/qualifying-for-home-carer-tax-credit.aspx' },
  S26: { label: 'Revenue: Single Person Child Carer Credit', url: 'https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/children/single-person-child-carer-credit/index.aspx' },
  S27: { label: 'Revenue: how to qualify for SPCCC', url: 'https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/children/single-person-child-carer-credit/how-qualify-spccc.aspx' },
  S28: { label: 'Revenue: Incapacitated Child Tax Credit', url: 'https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/children/incapacitated-child-credit/qualifying.aspx' },
  S29: { label: 'Revenue: Dependent Relative Tax Credit', url: 'https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/health-and-age/dependant-relative-tax-credit/index.aspx' },
  S30: { label: 'Revenue: Age Tax Credit', url: 'https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/health-and-age/age-tax-credit/index.aspx' },
  S31: { label: 'Revenue: joint assessment', url: 'https://www.revenue.ie/en/life-events-and-personal-circumstances/marital-status/marriage-and-civil-partnerships/joint-assessment.aspx' },
  S32: { label: 'Revenue: taxation in the year of marriage', url: 'https://www.revenue.ie/en/life-events-and-personal-circumstances/marital-status/marriage-and-civil-partnerships/year-after-marriage-registration-civil-partnership.aspx' },
  S33: { label: 'Revenue: Emergency Tax', url: 'https://www.revenue.ie/en/jobs-and-pensions/emergency-tax/index.aspx' },
  S34: { label: 'Revenue: refund of Emergency Tax', url: 'https://www.revenue.ie/en/jobs-and-pensions/emergency-tax/get-refund-emergency-tax.aspx' },
  S35: { label: 'Revenue: leaving Ireland, refund of tax', url: 'https://www.revenue.ie/en/life-events-and-personal-circumstances/moving-to-or-from-ireland/leaving-ireland/are-you-entitled-to-a-refund-of-tax.aspx' },
  S36: { label: 'Revenue: split-year treatment on departure', url: 'https://www.revenue.ie/en/life-events-and-personal-circumstances/moving-to-or-from-ireland/leaving-ireland/split-year-treatment-in-your-year-of-departure.aspx' },
  S37: { label: 'Revenue: do you need to submit a tax return?', url: 'https://www.revenue.ie/en/jobs-and-pensions/end-of-year-process/need-to-submit-a-tax-return.aspx' },
  S38: { label: 'Revenue: Statement of Liability', url: 'https://www.revenue.ie/en/jobs-and-pensions/end-of-year-process/statement-of-liability.aspx' },
  S39: { label: 'Revenue: how you will receive a refund', url: 'https://www.revenue.ie/en/jobs-and-pensions/end-of-year-process/refund-if-due.aspx' },
  S41: { label: 'Revenue: Irish rental income', url: 'https://www.revenue.ie/en/property/rental-income/irish-rental-income/index.aspx' },
  S42: { label: 'Revenue: Residential Premises Rental Income Relief', url: 'https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/land-and-property/rprir/how-much-can-you-claim.aspx' },
  S43: { label: 'Revenue: Rent-a-Room Relief', url: 'https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/land-and-property/rent-a-room-relief/index.aspx' },
  S44: { label: 'Revenue: pension contribution relief limits', url: 'https://www.revenue.ie/en/jobs-and-pensions/pension/relief/tax-relief-limits.aspx' },
  S45: { label: 'Revenue: Mortgage Interest Tax Credit', url: 'https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/land-and-property/mortgage/how-much-can-you-claim.aspx' },
  S51: { label: 'Revenue press release, 11 March 2026 (2025 PAYE returns)', url: 'https://www.revenue.ie/en/corporate/press-office/press-releases/2026/pr-031126-paye-filing.aspx' },
};

export const GROUPS: { name: ServiceGroup; id: string; blurb: string; photo: string; alt: string }[] = [
  { name: 'Everyone', id: 'everyone', blurb: 'If you have worked in Ireland on PAYE, start here. These cover the whole of your tax record, not just one cost.', photo: 'hero-dublin-street.jpg', alt: 'People walking down a colourful Dublin shopping street lined with shopfronts and a church spire' },
  { name: 'Your costs', id: 'your-costs', blurb: 'Money you already spent on rent, health, college fees, work clothes or home bills. Part of it can come back to you.', photo: 'service-rent-apartment-keys.jpg', alt: 'Hand holding a set of house keys in front of an apartment door' },
  { name: 'Your family', id: 'your-family', blurb: 'Marriage, children, caring for someone, turning 65. Life changes often mean credits that never made it onto your record.', photo: 'service-parent-child.jpg', alt: 'Father and young daughter washing up together at the kitchen sink' },
  { name: 'Property', id: 'property', blurb: 'Letting a flat or a spare room alongside your job? Declare it properly and claim the relief that goes with it.', photo: 'service-irish-terrace-house.jpg', alt: 'Brick terraced houses in Sandymount, Dublin, with red and blue Georgian-style front doors' },
];

const label = (slug: string) => SERVICE_LINKS.find((s) => s.href === `/services/${slug}/`)?.label ?? slug;

const raw: Omit<Service, 'label'>[] = [
  // ───────────────────────── Everyone ─────────────────────────
  {
    slug: 'paye-tax-review',
    title: '4-Year PAYE Tax Review',
    group: 'Everyone',
    summary: 'One careful look at every tax year that is still open, so nothing you are owed gets left behind.',
    metaTitle: 'PAYE Tax Refund: 4-Year Review, 2022 to 2025',
    metaDescription: 'We review your PAYE tax for 2022 to 2025, check every credit and relief you could be owed and file the claim. 2022 refunds close on 31 December 2026.',
    whoFor: [
      'Employees and pensioners taxed through PAYE in Ireland',
      'Anyone who has not filed an Income Tax Return for each of the last four years',
      'People who changed jobs, married, rented, studied or had health costs and never told Revenue',
      'Anyone who simply is not sure their tax credits were right',
    ],
    canClaim: [
      'Overpaid income tax and USC (Universal Social Charge) for <strong>2022, 2023, 2024 and 2025</strong>, the four years that are open today. Each year is reviewed on its own, so a claim for one does not affect another.',
      'We go through every credit and relief that could apply to you: rent, health and dental costs, remote working, flat rate expenses, tuition fees, marriage, home carer and family credits, the age credit, pension contributions, and the Mortgage Interest Tax Credit (up to €1,250 a year for 2023, 2024 and 2025, and up to €625 for 2026).',
      'We also check your USC rate. For example, a reduced rate applies to full medical card holders with income of €60,000 or less, extended to 2026 and 2027 in Budget 2026, but you have to tell Revenue to get it.',
    ],
    tables: [
      {
        caption: 'A few of the credits we check, by tax year (€, maximum for a single person unless noted)',
        head: ['Credit', '2022', '2023', '2024', '2025'],
        rows: [
          ['Rent Tax Credit', '500', '500', '1,000', '1,000'],
          ['Mortgage Interest Tax Credit', 'n/a', '1,250', '1,250', '1,250'],
          ['Home Carer Tax Credit', '1,600', '1,700', '1,800', '1,950'],
          ['Single Person Child Carer Credit', '1,650', '1,650', '1,750', '1,900'],
          ['Incapacitated Child Tax Credit (per child)', '3,300', '3,300', '3,500', '3,800'],
          ['Dependent Relative Tax Credit', '245', '245', '245', '305'],
          ['Age Tax Credit (single)', '245', '245', '245', '245'],
        ],
        note: 'Credits reduce the tax you paid; they are not paid out on top of it. Mortgage Interest Tax Credit applies from 2023.',
      },
    ],
    keyFigure: { value: '4', label: 'tax years you can still review today: 2022, 2023, 2024 and 2025', year: '2022 claims close 31 Dec 2026' },
    chip: '2022 to 2025 reviewed',
    goodToKnow: [
      'A review can occasionally show tax owed, for example after two jobs at once. According to Revenue, almost 12% of processed 2025 returns showed an underpayment. We look at your record first and tell you before anything is filed.',
      '<strong>2022 claims close on 31 December 2026.</strong> After that date, Revenue cannot repay tax for 2022.',
    ],
    documents: [
      'Your PPSN (Personal Public Service Number)',
      'Name, date of birth, address, email and mobile number',
      'Marital status, and your date of marriage if it is relevant',
      'Your employers for each year',
      'Approval of our agent-link request in myAccount, or a signed Form PAYE A1',
      'Details of any rent, medical, tuition or work-from-home costs',
      'Correct bank details on your Revenue record, so the refund reaches you',
    ],
    faqs: [
      { q: 'Could a review leave me owing money?', a: 'It can happen, for example if you had two jobs at the same time or untaxed extra income. We look at your record first and tell you before anything is filed with Revenue.' },
      { q: 'I already got a refund for one year. Can you check the others?', a: 'Yes. Every year is reviewed separately, and a claim for one year does not stop a claim for another.' },
      { q: 'How long does it take?', a: 'Once we can see your record and have your details, we file as soon as we can, and we tell you the date it went in. Revenue usually issues a Statement of Liability about five days after filing, and refunds are paid within three to five working days.' },
    ],
    photo: 'about-calculator-paperwork.jpg',
    alt: 'Close-up of a calculator and pen on handwritten paperwork',
    sources: ['S7', 'S1', 'S45', 'S4', 'S5', 'S38', 'S39', 'S51'],
    related: ['rent-tax-credit', 'medical-expenses', 'flat-rate-expenses'],
  },
  {
    slug: 'emergency-tax-refund',
    title: 'Emergency Tax Refunds',
    group: 'Everyone',
    summary: 'New job, first job or a payslip full of emergency tax? We get your record fixed and the overpaid tax back to you.',
    metaTitle: 'Emergency Tax Refunds in Ireland',
    metaDescription: 'Paid emergency tax after starting a new job in Ireland? We fix your Revenue record and claim back the overpaid income tax and USC, this year or earlier years.',
    whoFor: [
      'New starters and people who have just changed jobs',
      'First-time workers who are new to Ireland',
      'Anyone whose payslip has shown emergency tax or "Week 1" for a long time',
      'People who left a job before the overpaid tax was refunded',
    ],
    canClaim: [
      'All the income tax and USC you overpaid while on emergency tax. Emergency tax kicks in when your employer cannot get a Revenue Payroll Notification (RPN) for you, usually because they do not have your PPSN or the job is not registered with Revenue.',
      'For <strong>this year</strong>, the fix is to get the job registered so your employer receives a cumulative RPN. They then refund the overpayment through payroll. For <strong>earlier years (2022 to 2025)</strong>, the money comes back when an Income Tax Return is filed for that year.',
    ],
    tables: [
      {
        caption: 'Who refunds the overpaid tax',
        head: ['Your situation', 'Who pays it back'],
        rows: [
          ['Still in the job, cumulative RPN now issued', 'Your employer, on your next payday'],
          ['Moved to a new job', 'Your new employer, through payroll'],
          ['Not working at the moment', 'Revenue, when you claim directly'],
          ['Overpaid in 2022, 2023, 2024 or 2025', 'Revenue, after an Income Tax Return for that year'],
        ],
        note: 'A "Week 1" RPN means your employer cannot refund past overpayments until a cumulative RPN arrives.',
      },
    ],
    keyFigure: { value: '4', label: 'past tax years you can still claim emergency tax back for: 2022 to 2025', year: '2022 claims close 31 Dec 2026' },
    chip: 'This year and 2022 to 2025',
    documents: [
      'Your PPSN',
      'Employer names and your start dates',
      'Payslips, if you have them',
      'Whether the job is registered in myAccount (we can check this with you)',
    ],
    faqs: [
      { q: 'Why am I on emergency tax?', a: 'Usually because your employer does not have your PPSN, or the job has not been registered with Revenue. If it is your first job in Ireland, you can register it in myAccount under "Add Job or Pension Details".' },
      { q: 'I have left that job. Is the money gone?', a: 'No. Your new employer can refund it through payroll, or you can claim it directly from Revenue if you are not working at the moment.' },
      { q: 'What does "Week 1" mean on my payslip?', a: 'Your credits are being applied week by week rather than across the whole year. Your employer cannot refund past overpayments until Revenue issues a cumulative notification.' },
    ],
    photo: 'service-hospitality-barista.jpg',
    alt: 'Smiling barista in a beanie working behind a café counter',
    sources: ['S33', 'S34', 'S39', 'S7'],
    related: ['paye-tax-review', 'leaving-ireland-refund', 'flat-rate-expenses'],
  },
  {
    slug: 'leaving-ireland-refund',
    title: 'Leaving Ireland Tax Refund',
    group: 'Everyone',
    summary: 'Moving abroad? You may be owed tax for the part of the year you worked here, plus any open earlier years.',
    metaTitle: 'Leaving Ireland? Claim Your Tax Refund',
    metaDescription: 'Leaving Ireland mid-year? A full year of tax credits against part-year pay often means a refund. We check the year you leave and every open year before it.',
    whoFor: [
      'Anyone who has left, or is about to leave, Ireland after working here',
      'Students and working-holiday visa holders heading home',
      'People relocating abroad for work',
    ],
    canClaim: [
      'Overpaid income tax and USC for the year you leave. You usually get a full year of tax credits, but only earned for part of the year, so too much tax was often taken.',
      'Any earlier year that is still open (2022 to 2025) is checked too. <strong>Split-year treatment</strong> may also apply: if you are resident in the year you leave and not resident the next year, employment income you earn abroad after you go is ignored for Irish tax.',
    ],
    tables: [
      {
        caption: 'A full year of credits for a single PAYE worker (€)',
        head: ['Tax year', 'Personal credit', 'Employee credit', 'Total'],
        rows: [
          ['2022', '1,700', '1,700', '3,400'],
          ['2023', '1,775', '1,775', '3,550'],
          ['2024', '1,875', '1,875', '3,750'],
          ['2025', '2,000', '2,000', '4,000'],
          ['2026', '2,000', '2,000', '4,000'],
        ],
        note: 'Credits can only reduce tax you actually paid. We work out what was overpaid from your own record.',
      },
    ],
    keyFigure: { value: '€4,000', label: 'personal and employee credits for a single person, given for the full year even if you only worked part of it', year: '2025 and 2026' },
    chip: 'Year you leave + 2022 to 2025',
    documents: [
      'Your PPSN',
      'Your leaving date and new country of residence',
      'Your final payslip or employment detail summary',
      'Your overseas address and bank details on your Revenue record',
      'Whether you are leaving permanently, or for at least the next tax year',
    ],
    faqs: [
      { q: 'Can I claim before I go?', a: 'Yes. If you are leaving Ireland permanently, you can claim straight away rather than waiting until the end of the year.' },
      { q: 'Can the refund go to a foreign bank account?', a: 'Revenue pays refunds by bank transfer to the account on your Revenue record. Tell us where your account is and we will check with you whether it can be used before we file.' },
      { q: 'What is split-year treatment?', a: 'If you are resident in Ireland in the year you leave and not resident the following year, employment income you earn abroad after you leave is ignored for Irish tax.' },
    ],
    photo: 'service-airport-leaving-ireland.jpg',
    alt: 'Empty airport departure lounge looking out at a plane on the stand',
    sources: ['S35', 'S36', 'S1', 'S39'],
    related: ['emergency-tax-refund', 'paye-tax-review', 'rent-tax-credit'],
  },

  // ───────────────────────── Your costs ─────────────────────────
  {
    slug: 'rent-tax-credit',
    title: 'Rent Tax Credit',
    group: 'Your costs',
    summary: 'Renting privately? You could get up to €1,000 a year back (€2,000 for a jointly assessed couple) for 2024 to 2026, with smaller amounts for 2022 and 2023.',
    metaTitle: 'Rent Tax Credit Claims, 2022 to 2026',
    metaDescription: 'Claim the Rent Tax Credit: 20% of rent, up to €1,000 a year for 2024 to 2026 (€2,000 for couples). Renters and parents of students may qualify back to 2022.',
    whoFor: [
      'Private renters, including people renting a room or living in digs',
      'People renting a second place near work or college',
      'Parents paying rent for a son or daughter at college',
      'Couples who rent together and are jointly assessed',
    ],
    canClaim: [
      '<strong>20% of the rent you paid</strong>, up to the yearly maximum below. The maximum is the same however many properties you pay rent for, and the credit cannot be more than the income tax you paid that year. It gives no relief against USC or PRSI.',
      'Rent means payment for the property only. Leave out bills, meals, board and laundry.',
      'Revenue\'s own example: a single person paying €18,000 in rent in 2025. 20% of that is €3,600, so the credit is capped at the 2025 maximum of <strong>€1,000</strong>.',
    ],
    tables: [
      {
        caption: 'Maximum Rent Tax Credit by tax year (€)',
        head: ['Tax year', 'Single person', 'Jointly assessed couple'],
        rows: [
          ['2022', '500', '1,000'],
          ['2023', '500', '1,000'],
          ['2024', '1,000', '2,000'],
          ['2025', '1,000', '2,000'],
          ['2026', '1,000', '2,000'],
          ['2027', '1,150', '2,300'],
        ],
        announced: [5],
        note: '2027 figures: announced in Budget 2027, subject to the Finance Bill. The credit is available for 2022 to 2028.',
      },
    ],
    keyFigure: { value: '€1,000', label: 'maximum credit for a single renter each year (€2,000 for a jointly assessed couple)', year: '2024, 2025 and 2026' },
    chip: 'Up to €1,000 a year, 2024 to 2026',
    goodToKnow: [
      'You cannot claim if you get HAP, Rent Supplement or RAS (even if you pay a top-up), or if your landlord is an Approved Housing Body.',
      'Where a tenancy must be registered with the RTB (Residential Tenancies Board), including student accommodation, it has to actually be registered.',
      'For a student child: the course must be approved, the child must have been under 23 at the start of the tax year they first began it, and neither of you can be related to the landlord. Digs and rent-a-room arrangements count.',
      'For 2026 you can claim during the year in myAccount, or on your 2026 return from January 2027.',
    ],
    documents: [
      'Your landlord\'s name and address',
      'The rental address and the dates you lived there',
      'Rent paid each year, not counting bills or meals',
      'The RTB registration number, if the tenancy should be registered',
      'Your lease, rent receipts or bank statements',
      'For a student: the college, the course and your child\'s date of birth',
    ],
    faqs: [
      { q: 'I pay rent for my son at college. Can I claim?', a: 'Often, yes. The course needs to be approved, he must have been under 23 at the start of the tax year he first started it, and neither of you can be related to the landlord. Digs count too.' },
      { q: 'My landlord is not registered with the RTB. Can I still claim?', a: 'You can make the claim, but where registration is required, Revenue can later withdraw the credit if the tenancy is not registered. We will talk you through your options.' },
      { q: 'Three of us share the rent. How does that work?', a: 'Each person claims on the rent they personally paid, up to their own yearly maximum.' },
    ],
    photo: 'service-rent-apartment-keys.jpg',
    alt: 'Hand holding a set of house keys in front of an apartment door',
    sources: ['S8', 'S9', 'S10', 'S11', 'S12', 'S6'],
    related: ['tuition-fees-relief', 'paye-tax-review', 'remote-working-relief'],
  },
  {
    slug: 'medical-expenses',
    title: 'Medical & Dental Expenses Relief',
    group: 'Your costs',
    summary: 'Get 20% back on GP visits, consultants, prescriptions, physio, braces and other qualifying health costs, for yourself or anyone you paid for.',
    metaTitle: 'Medical & Dental Expenses Tax Relief',
    metaDescription: 'Claim 20% tax relief on GP, consultant, prescription, physio and non-routine dental costs you paid from 2022 to 2025, for yourself, family or anyone else.',
    whoFor: [
      'Anyone who paid medical costs for themselves, family or anyone else in the last four years',
      'People who paid for non-routine dental work such as crowns, root canals or braces',
      'Families paying nursing home fees for a relative',
      'People with health insurance who still paid part of the bill',
    ],
    canClaim: [
      '<strong>20% of qualifying costs</strong> that were not paid back by your insurer, the HSE or a compensation payment. Nursing home fees get relief at your highest rate, <strong>up to 40%</strong>, on the part you pay (not the HSE\'s Fair Deal share).',
      'It does not matter who the care was for. What matters is that <strong>you paid</strong>. Each year is claimed separately, and care paid across two years can be claimed in the year you got it or the year you paid.',
      'According to Revenue, health expenses were the most-claimed relief on 2025 returns, with 260,995 taxpayers claiming by 6 March 2026.',
    ],
    tables: [
      {
        caption: 'What counts and what does not',
        head: ['Usually qualifies', 'Does not qualify'],
        rows: [
          ['GP and consultant fees', 'Routine dental: fillings, scaling and cleaning, extractions, dentures'],
          ['Prescribed drugs and medicines', 'Routine eye care, such as eye tests'],
          ['Physio, chiropractor or osteopath when referred', 'Cosmetic procedures, unless correcting a health issue'],
          ['Non-routine dental: crowns, veneers, root canal, implants, braces', 'Guide and assistance dog costs'],
          ['IVF, routine maternity care, diagnostic tests', ''],
          ['Hearing aids and other medical appliances', ''],
          ['Psychologist or psychotherapist (conditions apply)', ''],
        ],
      },
    ],
    keyFigure: { value: '20%', label: 'of qualifying health costs back, or up to 40% on nursing home fees', year: 'Each year, 2022 to 2025' },
    chip: '20% back, 2022 to 2025',
    goodToKnow: [
      'Non-routine dental needs a <strong>Med 2</strong> form completed by your dentist. It is a receipt, not a claim form: keep it, do not send it in.',
      'Form Med 1 has been withdrawn. Claims go through the Income Tax Return in myAccount, or in real time during the year.',
      'Keep receipts for six years. Revenue\'s Receipts Tracker in myAccount can store them for you.',
    ],
    documents: [
      'Receipts, or a list of amounts paid in each year',
      'Med 2 forms from your dentist for any non-routine dental work',
      'Details of anything your health insurer or the HSE paid back',
      'Who each cost was for, and who paid it',
      'For nursing homes: the fees you paid yourself',
    ],
    faqs: [
      { q: 'Do I need to send my receipts to Revenue?', a: 'Not usually. You keep them for six years and show them if Revenue asks.' },
      { q: 'Can I claim for my mum\'s prescriptions?', a: 'Yes, if you paid for them. Relief goes to whoever paid, whoever the care was for.' },
      { q: 'I have health insurance. Can I still claim?', a: 'Yes, on the part your insurer did not cover.' },
    ],
    photo: 'service-medical-pharmacist.jpg',
    alt: 'Smiling pharmacist reaching for a medicine box on the pharmacy shelves',
    sources: ['S13', 'S14', 'S15', 'S16', 'S17', 'S51'],
    related: ['dependent-relative-age-credits', 'paye-tax-review', 'incapacitated-child-credit'],
  },
  {
    slug: 'remote-working-relief',
    title: 'Remote Working Relief',
    group: 'Your costs',
    summary: 'Worked from home? Claim back part of your electricity, heating and broadband for every year still open.',
    metaTitle: 'Remote Working Relief: Claim Tax Back',
    metaDescription: 'Worked from home for your employer? Claim 30% of your share of electricity, heating and broadband, at your highest tax rate, for 2022 to 2025. We do the sums.',
    whoFor: [
      'Employees who worked from home under an arrangement with their employer',
      'People who paid their own electricity, heating or broadband bills',
      'Hybrid workers, even if only one or two days a week at home',
    ],
    canClaim: [
      'Take your yearly electricity, heating and broadband bills, multiply by the days you worked from home and divide by the days in the year. <strong>30% of that</strong>, less any remote working allowance your employer paid, is allowable. Relief is given at your highest rate of tax.',
      'Only days you actually worked from home count. Weekends, public holidays you did not work, annual leave and evenings catching up on work are left out. Shared bills are split by what each person paid.',
      'Laptops, office furniture and other equipment are not covered by this relief.',
    ],
    tables: [
      {
        caption: 'Revenue\'s worked example (2023 tax year)',
        head: ['Step', 'Amount'],
        rows: [
          ['Electricity, heating and broadband for the year', '€1,890.00'],
          ['× 50 days worked from home ÷ 365 days', '€258.90'],
          ['× 30% = allowable cost', '€77.67'],
          ['Tax relief at 40%', '€31.07'],
        ],
        note: 'Small on its own, but it adds up across four years and alongside other claims.',
      },
    ],
    keyFigure: { value: '30%', label: 'of your work-from-home share of household bills is allowable, relieved at your highest tax rate', year: '2022 to 2025' },
    chip: '30% of bills, 2022 to 2025',
    goodToKnow: [
      'Your employer can pay up to €3.20 a day tax-free. If they paid less than your costs, you can claim the difference.',
      'Broadband in a TV bundle? Revenue accepts a reasonable estimate of the broadband part.',
    ],
    documents: [
      'Yearly electricity, heating and broadband bills, or the totals',
      'How many days you worked from home in each year',
      'Any remote working allowance your employer paid',
      'Who else shares the bills, and what they pay',
    ],
    faqs: [
      { q: 'I only work from home two days a week. Is it worth claiming?', a: 'It is usually a modest amount, but it adds up across four years and alongside your other claims.' },
      { q: 'My broadband is part of a TV bundle.', a: 'Revenue accepts a reasonable estimate of the broadband part of the bill.' },
      { q: 'My partner pays half the bills.', a: 'Each of you claims on your own share of the bills.' },
    ],
    photo: 'service-work-from-home-desk.jpg',
    alt: 'Tidy home office desk with a monitor, notebook and chair by a window',
    sources: ['S18', 'S19'],
    related: ['flat-rate-expenses', 'rent-tax-credit', 'paye-tax-review'],
  },
  {
    slug: 'flat-rate-expenses',
    title: 'Flat Rate Expenses',
    group: 'Your costs',
    summary: 'Nurses, teachers, shop staff, chefs, tradespeople and many more can claim a fixed yearly allowance for work costs like uniforms, tools and registration fees.',
    metaTitle: 'Flat Rate Expenses: Claim Tax Back for Your Job',
    metaDescription: 'Nurses, teachers, retail and hospitality staff can claim flat rate expenses: €733 a year for nurses, €518 for teachers (2020 to 2026). We check your job.',
    whoFor: [
      'Employees whose job is on Revenue\'s flat rate expenses list',
      'Nurses, healthcare and hospital staff, doctors and pharmacists',
      'Teachers, principals and lecturers',
      'Shop, hotel, bar and trade workers',
    ],
    canClaim: [
      'A set yearly amount agreed between Revenue and your profession. It is deducted from your income, so the relief is at your <strong>marginal rate</strong>: 20% or 40%. A nurse\'s €733, for example, is worth €146.60 a year at 20%, or €293.20 at 40%.',
      'You have to claim it, it is not automatic. Some health roles, such as physiotherapists and occupational therapists, got higher rates from 2023 that also have to be claimed.',
    ],
    tables: [
      {
        caption: 'Examples from Revenue\'s list (€ per year, 2020 to 2026 unless noted)',
        head: ['Role', 'Amount'],
        rows: [
          ['Nurses who buy and launder their own uniforms', '733'],
          ['Hospital doctors, including consultants', '695'],
          ['School principals', '608'],
          ['Nursing assistants (supply and launder)', '526'],
          ['Teachers (other than principals)', '518'],
          ['Physiotherapists / occupational therapists (2023 to 2026)', '410'],
          ['Pharmacists', '400'],
          ['Carpenters, joiners, cabinet makers', '220'],
          ['Plumbers (non-welder)', '177'],
          ['Electricians (building industry)', '153'],
          ['Shop assistants', '121'],
          ['Hotel chefs / waiters and waitresses', '97 / 80'],
        ],
        note: 'Physiotherapists were €381 and occupational therapists €217 for 2020 to 2022.',
      },
    ],
    keyFigure: { value: '€733', label: 'a year for nurses who buy and launder their own uniforms', year: '2020 to 2026' },
    chip: 'Nurses €733 a year (2020 to 2026)',
    goodToKnow: [
      'Healthcare assistants: Revenue\'s list has no separate "HCA" line. Many hospital HCA roles fall under nursing assistants, but it depends on your role, so we check rather than promise an amount.',
    ],
    documents: [
      'Your job title and employer for each year',
      'Whether you buy, or wash, your own uniform',
      'For health and social care roles: your registration body (NMBI, CORU, PSI and so on)',
    ],
    faqs: [
      { q: 'How do I know if my job is on the list?', a: 'We check your exact role against Revenue\'s list for each year you worked in it.' },
      { q: 'I am a healthcare assistant. Am I covered?', a: 'Many hospital HCA roles fall under the "nursing assistants" category, but it depends on your role and how your uniform is supplied and washed. We will confirm before claiming.' },
      { q: 'Do I need receipts?', a: 'No. It is a flat amount, so no receipts are needed, but you do need to have been in the qualifying role.' },
    ],
    photo: 'service-nurse-healthcare.jpg',
    alt: 'Healthcare worker in navy scrubs smiling with arms crossed',
    sources: ['S20', 'S21'],
    related: ['remote-working-relief', 'medical-expenses', 'paye-tax-review'],
  },
  {
    slug: 'tuition-fees-relief',
    title: 'Tuition Fees Relief',
    group: 'Your costs',
    summary: 'Paid third-level fees for yourself or someone else? Get 20% back on the fees above the yearly disregard.',
    metaTitle: 'Tuition Fees Tax Relief (Third Level)',
    metaDescription: 'Paid college fees for yourself or your children? Claim 20% relief on qualifying fees up to €7,000 per course, above the yearly disregard. We check 2022 to 2025.',
    whoFor: [
      'Students who paid their own fees',
      'Parents, grandparents or anyone else who paid fees for a student',
      'Families with two or more students in college in the same year',
      'Part-time and postgraduate students on approved courses',
    ],
    canClaim: [
      '<strong>20% of qualifying fees</strong> (tuition, including the student contribution) for an approved course at an approved college, up to <strong>€7,000 per course</strong> per person, per academic year.',
      'One disregard is taken off each claim per tax year, however many students or courses it covers. That is why a second child\'s fees can get full relief.',
      'Revenue\'s examples: fees of €8,500 are capped at €7,000; less the €3,000 disregard leaves €4,000, so the relief is <strong>€800</strong>. Two students (€7,000 + €3,500) less one €3,000 disregard gives €7,500 × 20% = <strong>€1,500</strong>.',
    ],
    tables: [
      {
        caption: 'The yearly disregard (€, not relieved)',
        head: ['Tax year', 'Any course full-time', 'All courses part-time'],
        rows: [
          ['2022 to 2025', '3,000', '1,500'],
          ['2026 onwards', '2,350', '1,175'],
        ],
        announced: [1],
        note: '2026 onwards: announced in Budget 2027, subject to the Finance Bill. Revenue\'s page still shows €3,000 / €1,500.',
      },
    ],
    keyFigure: { value: '€7,000', label: 'maximum qualifying fees per course, per person, per academic year, relieved at 20%', year: '2022 to 2025' },
    chip: '20% on fees, up to €7,000 per course',
    goodToKnow: [
      'Administration fees, student centre levies, sports charges and the USI levy do not qualify.',
      'Only the person who actually paid the fees can claim the relief.',
    ],
    documents: [
      'Fee receipts or college statements for each year',
      'The course name and college',
      'Whether the course is full-time or part-time',
      'Who paid the fees',
      'Any grants or scholarships received',
    ],
    faqs: [
      { q: 'We only paid the student contribution. Can we claim?', a: 'For 2022 to 2025, paying only the €3,000 student contribution for one full-time student is cancelled out by the €3,000 disregard. Two students, or higher fees, usually change that.' },
      { q: 'Do levies count?', a: 'No. Sports, student centre, USI and administration charges do not qualify.' },
      { q: 'The course is abroad.', a: 'Some EU and overseas courses are approved. We check the approved list for you before claiming.' },
    ],
    photo: 'service-graduation-tuition.jpg',
    alt: 'Graduates in gowns throwing their caps in the air outside a university building',
    sources: ['S22', 'S23', 'S6'],
    related: ['rent-tax-credit', 'paye-tax-review', 'medical-expenses'],
  },

  // ───────────────────────── Your family ─────────────────────────
  {
    slug: 'marriage-joint-assessment',
    title: 'Marriage & Joint Assessment',
    group: 'Your family',
    summary: 'Married or in a civil partnership? Make sure you got the year-of-marriage refund and the best split of credits and rate bands.',
    metaTitle: 'Marriage Tax Refund & Joint Assessment',
    metaDescription: 'Married or in a civil partnership since 2022? Claim the year-of-marriage tax refund and check you are on the best basis of assessment. We compare the options.',
    whoFor: [
      'Couples who married or registered a civil partnership in the last four years',
      'Couples who are not sure they are on the best basis of assessment',
      'Couples where one partner earns much less than the other',
    ],
    canClaim: [
      '<strong>Year of marriage:</strong> you are taxed as two single people. If that cost more than joint assessment would have, you can claim back the difference from your wedding date, worked out by month. In Revenue\'s example, a couple married on 10 July 2025 paid €8,100 as singles against €6,900 jointly: €1,200 × 6/12 = <strong>€600</strong> back.',
      '<strong>Later years:</strong> joint assessment lets you transfer most credits and the standard rate band between you. The Employee credit, Earned Income credit, employment expenses and the increased band for a second income cannot be transferred.',
    ],
    tables: [
      {
        caption: 'Standard rate band for married couples and civil partners (€, taxed at 20%)',
        head: ['Tax year', 'One income', 'Extra for a second income (max)'],
        rows: [
          ['2022', '45,800', '27,800'],
          ['2023', '49,000', '31,000'],
          ['2024', '51,000', '33,000'],
          ['2025', '53,000', '35,000'],
          ['2026', '53,000', '35,000'],
          ['2027', '55,500', '37,500'],
        ],
        announced: [5],
        note: 'The extra band is the lower of the maximum and the lower earner\'s income. 2027: announced in Budget 2027, subject to the Finance Bill.',
      },
    ],
    keyFigure: { value: '€600', label: 'year-of-marriage refund in Revenue\'s own example, for a July wedding', year: '2025 tax year' },
    chip: 'Year-of-marriage refund',
    goodToKnow: [
      'The year-of-marriage refund is claimed after 31 December of that year, by filing a return and making a request through MyEnquiries.',
      'The assessable spouse is chosen by 31 March. Otherwise Revenue defaults to the higher earner.',
      'Married in 2022? 2022 claims must be made by 31 December 2026.',
    ],
    documents: [
      'Both PPSNs',
      'Your marriage or civil partnership date',
      'Both partners\' incomes for the year',
      'Agent-link approval from the assessable spouse',
      'Consent from the other spouse',
    ],
    faqs: [
      { q: 'Do we both need to sign up?', a: 'The assessable spouse is normally the one who links with us, but we will need some details and consent from both of you.' },
      { q: 'We married in 2022. Is it too late?', a: 'Not yet. 2022 claims must be made by <strong>31 December 2026</strong>.' },
      { q: 'Is joint assessment always better?', a: 'Usually, but not in every case. For example, you cannot have both the Home Carer credit and the increased two-income band, so we compare the options first.' },
    ],
    photo: 'service-wedding-rings-joint.jpg',
    alt: 'Married couple’s hands resting together, showing their wedding rings',
    sources: ['S31', 'S32', 'S1', 'S6', 'S7'],
    related: ['home-carer-tax-credit', 'rent-tax-credit', 'paye-tax-review'],
  },
  {
    slug: 'home-carer-tax-credit',
    title: 'Home Carer Tax Credit',
    group: 'Your family',
    summary: 'If one of you stays at home to care for children or a relative, you could get up to €1,950 a year (2025 and 2026).',
    metaTitle: 'Home Carer Tax Credit Claims',
    metaDescription: 'One of you cares for children or a relative at home? The Home Carer Tax Credit is worth up to €1,950 a year for 2025 and 2026. We check back to 2022 for you.',
    whoFor: [
      'Married or civil partner couples who are jointly assessed',
      'Where one partner cares for a child getting Child Benefit',
      'Or for a person aged 65 or over, or someone permanently incapacitated',
    ],
    canClaim: [
      'The full credit if the carer\'s own income is <strong>€7,200 or less</strong>. Above that, the credit is reduced by half of the excess, until it runs out at the upper limit for the year. Carer\'s Allowance and Carer\'s Benefit are not counted as income.',
      'A relative being cared for can live next door, on the same property or within 2 km, as long as there is a direct phone or alarm link. A non-relative must live in your home.',
    ],
    tables: [
      {
        caption: 'Home Carer Tax Credit by tax year (€)',
        head: ['Tax year', 'Maximum credit', 'Full credit if carer earns up to', 'No credit from'],
        rows: [
          ['2022', '1,600', '7,200', '10,400'],
          ['2023', '1,700', '7,200', '10,600'],
          ['2024', '1,800', '7,200', '10,800'],
          ['2025', '1,950', '7,200', '11,100'],
          ['2026', '1,950', '7,200', '11,100'],
          ['2027', '2,050', 'to be confirmed', 'to be confirmed'],
        ],
        announced: [5],
        note: '2027: announced in Budget 2027, subject to the Finance Bill.',
      },
    ],
    keyFigure: { value: '€1,950', label: 'maximum Home Carer Tax Credit for a jointly assessed couple', year: '2025 and 2026' },
    chip: 'Up to €1,950 a year, 2025 and 2026',
    goodToKnow: [
      'You cannot claim both the Home Carer credit and the increased rate band for two-income couples. We work out which is better for each year.',
    ],
    documents: [
      'Both PPSNs',
      'The carer\'s income for each year',
      'Who is being cared for: a child, an older person or someone incapacitated',
      'Their address, if a relative lives nearby rather than with you',
    ],
    faqs: [
      { q: 'Does Carer\'s Allowance count as the carer\'s income?', a: 'No. Carer\'s Allowance and Carer\'s Benefit are ignored for the income test.' },
      { q: 'My mother lives down the road. Does that count?', a: 'Yes, if she lives within 2 km (or next door, or on the same property) and there is a direct phone or alarm link between you.' },
      { q: 'We both work part-time.', a: 'We compare the Home Carer credit with the two-income rate band for each year and claim whichever leaves you better off.' },
    ],
    photo: 'hero-couple-kitchen-paperwork.jpg',
    alt: 'Couple laughing together while reading a letter at their kitchen counter',
    sources: ['S24', 'S25', 'S31', 'S1', 'S6'],
    related: ['marriage-joint-assessment', 'dependent-relative-age-credits', 'incapacitated-child-credit'],
  },
  {
    slug: 'single-parent-credit',
    title: 'Single Person Child Carer Credit',
    group: 'Your family',
    summary: 'Raising a child on your own? Claim €1,900 a year (2025 onwards) plus an extra €4,000 of income taxed at 20%.',
    metaTitle: 'Single Parent Tax Credit (SPCCC)',
    metaDescription: 'Raising a child on your own? The Single Person Child Carer Credit is worth €1,900 a year from 2025, plus a wider 20% rate band. We check 2022 to 2025 for you.',
    whoFor: [
      'Single, separated, divorced or widowed parents and guardians',
      'Who are not living with a partner',
      'Caring for a child under 18, or over 18 in full-time education or permanently incapacitated',
    ],
    canClaim: [
      'A tax credit each year, plus an <strong>extra €4,000</strong> on your standard rate band, so more of your income is taxed at 20% instead of 40%.',
      'You get one credit however many children you have, and only one parent can claim it in a year. The primary claimant can give it up to a secondary claimant.',
    ],
    tables: [
      {
        caption: 'Single Person Child Carer Credit by tax year (€)',
        head: ['Tax year', 'Credit', 'Your standard rate band'],
        rows: [
          ['2022', '1,650', '40,800'],
          ['2023', '1,650', '44,000'],
          ['2024', '1,750', '46,000'],
          ['2025', '1,900', '48,000'],
          ['2026', '1,900', '48,000'],
          ['2027', '1,900', '50,500'],
        ],
        announced: [5],
        note: '2027: no change to the credit announced; the band is announced in Budget 2027, subject to the Finance Bill.',
      },
    ],
    keyFigure: { value: '€1,900', label: 'a year, plus €4,000 more of your income at the 20% rate', year: '2025 onwards' },
    chip: '€1,900 a year from 2025',
    goodToKnow: [
      'Living with a partner rules you out, and so does being widowed in the year of bereavement. Foster children do not qualify.',
    ],
    documents: [
      'Your PPSN',
      'Your child\'s details and date of birth',
      'Confirmation that you are the primary carer',
      'For children over 18: details of their full-time education',
    ],
    faqs: [
      { q: 'Can both parents claim?', a: 'Only one parent can claim in a year. The primary claimant can give the credit up to a secondary claimant.' },
      { q: 'I live with my new partner.', a: 'Living with a partner rules you out of this credit.' },
      { q: 'I have three children. Do I get three credits?', a: 'No. It is one credit per claimant, however many children you care for.' },
    ],
    photo: 'service-parent-child.jpg',
    alt: 'Father and young daughter washing up together at the kitchen sink',
    sources: ['S26', 'S27', 'S1', 'S6'],
    related: ['incapacitated-child-credit', 'rent-tax-credit', 'medical-expenses'],
  },
  {
    slug: 'incapacitated-child-credit',
    title: 'Incapacitated Child Tax Credit',
    group: 'Your family',
    summary: 'Caring for a child with a lasting disability? This credit is worth €3,800 a year (2025 and 2026) and can be backdated four years.',
    metaTitle: 'Incapacitated Child Tax Credit',
    metaDescription: 'Caring for a child with a permanent disability? The Incapacitated Child Tax Credit is €3,800 a year for 2025 and 2026 and can go back four years. We help.',
    whoFor: [
      'Parents of a child who is permanently incapacitated, physically or mentally',
      'Guardians who have custody of the child and maintain them',
      'Parents of adult children whose incapacity began before 21, or during full-time education or training',
    ],
    canClaim: [
      'One credit per child each year. It can be claimed for the current year and the four years before it, so a first claim can be worth a lot.',
      'If more than one person maintains the child, the credit is divided between them, but the total is still one credit per child.',
    ],
    tables: [
      {
        caption: 'Incapacitated Child Tax Credit per child (€)',
        head: ['Tax year', 'Credit'],
        rows: [
          ['2022', '3,300'],
          ['2023', '3,300'],
          ['2024', '3,500'],
          ['2025', '3,800'],
          ['2026', '3,800'],
          ['2027', '3,800 (no change announced)'],
        ],
      },
    ],
    keyFigure: { value: '€3,800', label: 'a year for each qualifying child', year: '2025 and 2026' },
    chip: '€3,800 a year, 2025 and 2026',
    goodToKnow: [
      'A <strong>Form ICC2</strong> certified by a doctor is needed.',
      'You cannot claim this and the Dependent Relative credit for the same child.',
    ],
    documents: [
      'Your child\'s details',
      'A Form ICC2 certified by a GP or consultant',
      'If you are not the parent: confirmation of custody and that you maintain the child',
    ],
    faqs: [
      { q: 'My child is over 18.', a: 'You may still qualify if the incapacity began before 21, or while they were in full-time education or training lasting two years or more.' },
      { q: 'Can both parents claim?', a: 'The credit can be split between the people who maintain the child, but the total is one credit per child.' },
      { q: 'Can I claim this and the Dependent Relative credit?', a: 'Not for the same child.' },
    ],
    photo: 'about-consultant-video-call.jpg',
    alt: 'Friendly advisor in glasses smiling at the camera during a video call',
    sources: ['S28', 'S1'],
    related: ['single-parent-credit', 'medical-expenses', 'home-carer-tax-credit'],
  },
  {
    slug: 'dependent-relative-age-credits',
    title: 'Dependent Relative & Age Credits',
    group: 'Your family',
    summary: 'Supporting an elderly or ill relative, or aged 65 or over? Make sure these credits are actually on your record.',
    metaTitle: 'Dependent Relative & Age Tax Credits',
    metaDescription: 'Supporting an older or ill relative, or aged 65 or over? Claim the Dependent Relative credit (€305 for 2025 and 2026) and check your Age credit is on record.',
    whoFor: [
      'People who maintain a relative who cannot support themselves because of age or illness',
      'Anyone supporting a widowed parent, or a parent who is a surviving civil partner',
      'Anyone aged 65 or over in the tax year, or whose spouse is',
    ],
    canClaim: [
      '<strong>Dependent Relative Tax Credit</strong> for a relative of yours or your spouse who cannot maintain themselves, as long as their income is under the limit for the year (it includes social welfare and pensions). The relative does not need to live in Ireland. If several people maintain them, the credit is split.',
      '<strong>Age Tax Credit</strong> if you or your spouse are 65 or over in the tax year. It should be given automatically, but it can be missing if your date of birth is not on your Revenue record.',
    ],
    tables: [
      {
        caption: 'Dependent Relative and Age credits by tax year (€)',
        head: ['Tax year', 'Dependent Relative credit', 'Relative\'s income limit', 'Age credit (single / couple)'],
        rows: [
          ['2022', '245', '16,156', '245 / 490'],
          ['2023', '245', '16,780', '245 / 490'],
          ['2024', '245', '17,404', '245 / 490'],
          ['2025', '305', '18,028', '245 / 490'],
          ['2026', '305', '18,548', '245 / 490'],
        ],
        note: '2027 Dependent Relative figures have not been announced yet.',
      },
    ],
    keyFigure: { value: '€305', label: 'Dependent Relative Tax Credit for each relative you maintain', year: '2025 and 2026' },
    chip: '€305 (2025, 2026) + €245 age credit',
    documents: [
      'Your relative\'s name, relationship to you and address',
      'Their yearly income, including social welfare and pensions',
      'Evidence that you help maintain them',
      'Your date of birth, for the age credit',
    ],
    faqs: [
      { q: 'Does my relative have to live in Ireland?', a: 'No, except where the claim is for a child carer who lives with you.' },
      { q: 'I turned 65 but I cannot see the age credit.', a: 'It should be automatic, but it can be missing if your date of birth is not on your record. Check your Tax Credit Certificate, or let us check it with you.' },
      { q: 'My brother and I both support Dad.', a: 'The credit is split between the people who maintain him.' },
    ],
    photo: 'service-elderly-couple.jpg',
    alt: 'Older couple sharing an affectionate moment on a windswept beach',
    sources: ['S29', 'S30', 'S1'],
    related: ['medical-expenses', 'home-carer-tax-credit', 'incapacitated-child-credit'],
  },

  // ───────────────────────── Property ─────────────────────────
  {
    slug: 'landlord-tax-returns',
    title: 'Small Landlord Tax Returns',
    group: 'Property',
    summary: 'Renting out a property or a room alongside your job? We help you declare it correctly and claim the reliefs that go with it.',
    metaTitle: 'Small Landlord Tax Returns in Ireland',
    metaDescription: 'PAYE worker letting a flat or a room? We declare your rental income correctly and claim reliefs like Rental Income Relief, up to €1,000 for 2026 and 2027.',
    whoFor: [
      'PAYE workers with a single rental property',
      'Accidental landlords renting out a home they used to live in',
      'People letting a room in the home they live in',
    ],
    canClaim: [
      'Rental income is taxable, but you only pay tax on the profit after allowable expenses. Which return you file depends on how much it is: see the table "Which return do you need?".',
      '<strong>Residential Premises Rental Income Relief</strong> reduces your income tax by the lowest of the yearly cap or 20% of the relevant rental profit. You get one relief a year, however many properties you have.',
      '<strong>Rent-a-Room Relief:</strong> income from letting a room in your own home can be tax-free up to €14,000 (2026). Go over the limit and all of it is taxed.',
    ],
    tables: [
      {
        caption: 'Residential Premises Rental Income Relief, maximum (€)',
        head: ['Tax year', 'Maximum relief'],
        rows: [
          ['2024', '600'],
          ['2025', '800'],
          ['2026', '1,000'],
          ['2027', '1,000'],
        ],
      },
      {
        caption: 'Rent-a-Room Relief limit (€)',
        head: ['Tax year', 'Tax-free limit'],
        rows: [
          ['2026', '14,000'],
          ['2027', '16,000'],
        ],
        announced: [1],
        note: '2027: announced in Budget 2027, subject to the Finance Bill.',
      },
      {
        caption: 'Which return do you need?',
        head: ['Your rental income', 'Return'],
        rows: [
          ['Net rental income under €5,000', 'PAYE Income Tax Return in myAccount'],
          ['Net non-PAYE income over €5,000, or gross over €30,000', 'Form 11 (self-assessment) through ROS'],
        ],
      },
    ],
    keyFigure: { value: '€1,000', label: 'maximum Residential Premises Rental Income Relief', year: '2026 and 2027' },
    chip: 'Rental relief up to €1,000 (2026)',
    documents: [
      'Rent received in each year',
      'Expenses: insurance, repairs, letting agent fees, mortgage interest on the rental',
      'Your RTB registration',
      'Property purchase details, for capital allowances',
    ],
    faqs: [
      { q: 'Is a room in my house treated the same as a rental flat?', a: 'No. Rent-a-Room Relief can make room income tax-free up to the limit, but if you go over the limit, all of it is taxed.' },
      { q: 'I am a PAYE worker. Do I really need a Form 11?', a: 'Only if your net non-PAYE income is over €5,000, or your gross non-PAYE income is over €30,000. Below that, it goes on your PAYE return.' },
      { q: 'Do you handle bigger portfolios?', a: 'Talk to us first. We will tell you upfront whether we can take it on and what it would cost, before any work starts.' },
    ],
    photo: 'service-irish-terrace-house.jpg',
    alt: 'Brick terraced houses in Sandymount, Dublin, with red and blue Georgian-style front doors',
    sources: ['S41', 'S42', 'S43', 'S37', 'S6'],
    related: ['paye-tax-review', 'rent-tax-credit', 'marriage-joint-assessment'],
  },
];

export const SERVICES: Service[] = raw.map((s) => ({ ...s, label: label(s.slug) }));

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
export const servicesIn = (g: ServiceGroup) => SERVICES.filter((s) => s.group === g);
