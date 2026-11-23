// TaxRoots Insights: fourteen articles. Facts from files/research/CONTENT.md (checked 30 October 2026);
// the eight added 24 November 2026 were checked against revenue.ie / cro.ie / rbo.gov.ie that day.
// Internal links may only point at /, /#about, /#services, /#how-it-works, /#faq, /#check, /insights/… and legal pages.
// Budget 2027 items are announced only (Finance (No. 2) Bill 2026 pending) and are labelled as such.
// `related` = service slugs that must exist in SERVICE_LINKS (src/data/site.ts).

export type Tag = 'Deadline' | 'Credits' | 'Reliefs' | 'Budget' | 'Guide' | 'Business';

export interface Article {
  slug: string;
  title: string;
  seoTitle: string;        // <= 49 chars ("| TaxRoots" is appended by Base)
  description: string;     // meta description, 140–160 chars
  tag: Tag;
  date: string;            // ISO, published
  excerpt: string;
  photo: string;           // file in /public/photos
  alt: string;
  related: string[];       // service slugs
  sources: string[];       // keys of SOURCES
  body: string;            // HTML; h2s become the table of contents
  readingTime: number;     // minutes (computed)
}

export const LAST_CHECKED = '24 November 2026';
export const LAST_CHECKED_ISO = '2026-11-24';

export const SOURCES: Record<string, { label: string; url: string }> = {
  S1: { label: 'Revenue: tax rates, bands and reliefs charts', url: 'https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/tax-relief-charts/index.aspx' },
  S5: { label: 'Revenue: Budget 2026 summary (PDF)', url: 'https://www.revenue.ie/en/corporate/press-office/budget-information/current-year/budget-summary.pdf' },
  S6: { label: 'Citizens Information: Budget 2027', url: 'https://www.citizensinformation.ie/en/money-and-tax/budgets/budget-2027/' },
  S7: { label: 'Revenue: the four-year rule', url: 'https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/four-year-rule/index.aspx' },
  S8: { label: 'Revenue: Rent Tax Credit overview', url: 'https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/land-and-property/rent-credit/index.aspx' },
  S9: { label: 'Revenue: Rent Tax Credit, qualifying conditions', url: 'https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/land-and-property/rent-credit/qualifying-conditions.aspx' },
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
  S21: { label: 'Revenue: Flat Rate Expense allowances (PDF)', url: 'https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/documents/flat-rate-expenses.pdf' },
  S23: { label: 'Revenue: tuition fees, how to calculate the relief', url: 'https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/education/tuition-fees-paid-for-third-level-education/how-do-you-calculate-the-relief.aspx' },
  S32: { label: 'Revenue: taxation in the year of marriage', url: 'https://www.revenue.ie/en/life-events-and-personal-circumstances/marital-status/marriage-and-civil-partnerships/year-after-marriage-registration-civil-partnership.aspx' },
  S33: { label: 'Revenue: Emergency Tax overview', url: 'https://www.revenue.ie/en/jobs-and-pensions/emergency-tax/index.aspx' },
  S34: { label: 'Revenue: refund of Emergency Tax', url: 'https://www.revenue.ie/en/jobs-and-pensions/emergency-tax/get-refund-emergency-tax.aspx' },
  S35: { label: 'Revenue: leaving Ireland, are you entitled to a refund?', url: 'https://www.revenue.ie/en/life-events-and-personal-circumstances/moving-to-or-from-ireland/leaving-ireland/are-you-entitled-to-a-refund-of-tax.aspx' },
  S38: { label: 'Revenue: Statement of Liability', url: 'https://www.revenue.ie/en/jobs-and-pensions/end-of-year-process/statement-of-liability.aspx' },
  S39: { label: 'Revenue: how you will receive a refund', url: 'https://www.revenue.ie/en/jobs-and-pensions/end-of-year-process/refund-if-due.aspx' },
  S45: { label: 'Revenue: Mortgage Interest Tax Credit', url: 'https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/land-and-property/mortgage/how-much-can-you-claim.aspx' },
  S46: { label: 'Revenue: Help to Buy, how much can you claim', url: 'https://www.revenue.ie/en/property/help-to-buy-incentive/how-much-can-you-claim.aspx' },
  S51: { label: 'Revenue press release, 11 March 2026 (2025 PAYE returns)', url: 'https://www.revenue.ie/en/corporate/press-office/press-releases/2026/pr-031126-paye-filing.aspx' },
  S53: { label: 'KPMG Ireland: Budget 2027 tax rates and credits', url: 'https://kpmg.com/ie/en/insights/tax/budget-2027/tax-rates-and-credits.html' },
  S3: { label: 'Revenue: Universal Social Charge (USC)', url: 'https://www.revenue.ie/en/jobs-and-pensions/usc/index.aspx' },
  S20: { label: 'Revenue: Flat Rate Expenses', url: 'https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/income-and-employment/flat-rate-expenses/index.aspx' },
  S22: { label: 'Revenue: tuition fees for third-level education', url: 'https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/education/tuition-fees-paid-for-third-level-education/index.aspx' },
  S36: { label: 'Revenue: split-year treatment in your year of departure', url: 'https://www.revenue.ie/en/life-events-and-personal-circumstances/moving-to-or-from-ireland/leaving-ireland/split-year-treatment-in-your-year-of-departure.aspx' },
  S44: { label: 'Revenue: pension contribution relief limits', url: 'https://www.revenue.ie/en/jobs-and-pensions/pension/relief/tax-relief-limits.aspx' },
  S55: { label: 'Revenue: what to do if you have underpaid tax', url: 'https://www.revenue.ie/en/jobs-and-pensions/end-of-year-process/what-to-do-in-an-underpayment-position.aspx' },
  S56: { label: 'Revenue: registering as an employer for PAYE', url: 'https://www.revenue.ie/en/employing-people/becoming-an-employer-and-ongoing-obligations/registration-of-employers-for-paye-purposes/index.aspx' },
  S57: { label: 'Revenue: paying your employees’ tax to Revenue', url: 'https://www.revenue.ie/en/employing-people/paying-your-employees-tax-to-revenue/index.aspx' },
  S58: { label: 'Revenue: when employers pay tax to Revenue', url: 'https://www.revenue.ie/en/employing-people/paying-your-employees-tax-to-revenue/paying-tax-to-revenue.aspx' },
  S59: { label: 'Revenue: Relevant Contracts Tax (RCT)', url: 'https://www.revenue.ie/en/self-assessment-and-self-employment/rct/index.aspx' },
  S60: { label: 'Revenue: RCT for subcontractors', url: 'https://www.revenue.ie/en/self-assessment-and-self-employment/rct/rct-subcontractors.aspx' },
  S61: { label: 'Revenue: credit for RCT deducted and offsets', url: 'https://www.revenue.ie/en/self-assessment-and-self-employment/rct/credit-for-rct-deducted-and-offsets.aspx' },
  S62: { label: 'Revenue: enhanced withholding tax (eWHT) consultation', url: 'https://www.revenue.ie/en/corporate/consultations-and-submissions/ewht/explained/index.aspx' },
  S63: { label: 'CRO: company registration methods (Form A1 on CORE)', url: 'https://cro.ie/registration/company/registration-methods/' },
  S64: { label: 'CRO: EEA-resident director requirement (Leaflet 17)', url: 'https://cro.ie/information-leaflets/european-economic-area-resident-director-leaflet-17' },
  S65: { label: 'CRO: annual return date', url: 'https://cro.ie/annual-return/annual-return-date/' },
  S66: { label: 'RBO: frequently asked questions', url: 'https://rbo.gov.ie/faqs/' },
  S67: { label: 'Revenue: how to claim relief on pension contributions', url: 'https://www.revenue.ie/en/jobs-and-pensions/pension/relief/how-to-claim.aspx' },
  S68: { label: 'Revenue: PRSA and AVC contributions', url: 'https://www.revenue.ie/en/jobs-and-pensions/pension/relief/contributions-to-prsa-avc.aspx' },
};

const a = (key: keyof typeof SOURCES | string, text: string) =>
  `<a href="${SOURCES[key].url}" target="_blank" rel="noopener">${text}</a>`;

const ANNOUNCED = '<span class="ann">announced, subject to the Finance Bill</span>';

const raw: Omit<Article, 'readingTime'>[] = [
  {
    slug: 'claim-2022-tax-refund-before-deadline',
    title: 'Claim your 2022 tax back before 31 December 2026',
    seoTitle: '2022 tax refund deadline: 31 December 2026',
    description: 'Revenue only repays 2022 claims made by 31 December 2026. See what PAYE workers in Ireland are commonly owed for 2022 and how to claim before the window closes.',
    tag: 'Deadline',
    date: '2026-10-30',
    excerpt: 'Revenue only looks back four years. On 31 December, 2022 drops out of the window for good. Here is what you might be owed for that year and how to claim in time.',
    photo: 'blog-calendar-deadline.jpg',
    alt: 'Desk calendar beside a potted plant',
    related: ['paye-tax-review', 'rent-tax-credit', 'medical-expenses'],
    sources: ['S7', 'S8', 'S13', 'S14', 'S19', 'S21', 'S23', 'S32', 'S34', 'S39'],
    body: `
<p>Revenue only lets you look back four years. Every 31 December, one year falls out of that window, and any refund you didn’t claim for it goes with it. This year it’s 2022. According to Revenue’s ${a('S7', 'four-year rule')}, claims for 2022 must be made by <strong>31 December 2026</strong>, and claims made after that date can’t be repaid.</p>
<p>If you’re a PAYE worker and you’ve never filed a tax return for 2022, it’s worth ten minutes to check.</p>

<h2>Why you might be owed money for 2022</h2>
<p>PAYE takes tax from your wages every payday, but it can only use the credits and reliefs Revenue already knows about. Anything you didn’t tell Revenue about in 2022, such as your rent, a dental crown, college fees or the uniform you wash at home, never made it into the calculation.</p>
<p>The only way to get that money back is to file an Income Tax Return for 2022. Revenue then issues a Statement of Liability showing whether you overpaid.</p>

<h2>The most common 2022 claims</h2>
<div class="tbl rows"><table>
<thead><tr><th scope="col">Claim</th><th scope="col">How it worked in 2022</th></tr></thead>
<tbody>
<tr><td><strong>Rent Tax Credit</strong></td><td>New for 2022. 20% of the rent you paid, up to €500 for a single person or €1,000 for a jointly assessed couple.</td></tr>
<tr><td><strong>Health expenses</strong></td><td>20% of qualifying costs: GP and consultant visits, prescriptions, physio on referral, and non-routine dental such as crowns and braces.</td></tr>
<tr><td><strong>Flat rate expenses</strong></td><td>A fixed deduction for jobs on Revenue’s list. For 2022: nurses who buy and wash their own uniforms €733, teachers €518, shop assistants €121. Relief is at your marginal rate.</td></tr>
<tr><td><strong>Remote working relief</strong></td><td>30% of your electricity, heating and broadband, apportioned for the days you worked from home, with relief at your highest rate.</td></tr>
<tr><td><strong>Tuition fees</strong></td><td>20% of fees above a €3,000 disregard (€1,500 if all courses were part-time), on fees of up to €7,000 per course.</td></tr>
<tr><td><strong>Getting married</strong></td><td>In the year you marry you’re taxed as two single people. If joint assessment would have cost less, you can claim back the difference from your wedding date.</td></tr>
</tbody></table></div>
<p>Many renters never claimed the Rent Tax Credit in its first year, so 2022 is often where it’s missing. Sources: ${a('S8', 'Rent Tax Credit')}, ${a('S14', 'qualifying health expenses')}, ${a('S21', 'flat rate expenses list')}, ${a('S19', 'remote working')}, ${a('S23', 'tuition fees')}, ${a('S32', 'year of marriage')}.</p>

<h2>Don’t stop at 2022</h2>
<p>2023, 2024 and 2025 are still open too. From 2024, the Rent Tax Credit doubled to <strong>€1,000</strong> for a single person and <strong>€2,000</strong> for a jointly assessed couple, so for many renters the later years are worth more than 2022 was.</p>
<div class="tbl"><table>
<thead><tr><th scope="col">Tax year</th><th scope="col">Claim by</th></tr></thead>
<tbody>
<tr><td>2022</td><td><strong>31 December 2026</strong></td></tr>
<tr><td>2023</td><td>31 December 2027</td></tr>
<tr><td>2024</td><td>31 December 2028</td></tr>
<tr><td>2025</td><td>31 December 2029</td></tr>
</tbody></table></div>

<h2>How to claim 2022 yourself</h2>
<ol>
<li>Log in to <strong>myAccount</strong> and open PAYE Services.</li>
<li>Choose <strong>"Review your tax for the previous 4 years"</strong> and request a Statement of Liability for 2022.</li>
<li>Select <strong>"Complete Income Tax Return"</strong> and add the credits and reliefs you’re due.</li>
<li>Check the bank details on your Revenue record. According to ${a('S39', 'Revenue')}, refunds go to that account, usually within three to five working days of the return being processed.</li>
</ol>
<p>Have your receipts, rent details and landlord’s information to hand before you start. Revenue’s ${a('S34', 'emergency tax refund guide')} walks through the same myAccount steps.</p>

<h2>Prefer someone else to do it?</h2>
<p>TaxRoots can review all four open years for you, check every credit and relief, file the returns and keep you posted until Revenue pays. We’ll tell you what we find before anything is filed, including the rare case where a review shows tax owed.</p>
<div class="note"><strong>Don’t leave it to Christmas week.</strong> Revenue gets very busy in December, and it can take time to find old receipts or your landlord’s details. Starting now gives you room to get it right.</div>
`,
  },
  {
    slug: 'rent-tax-credit-explained',
    title: 'Rent Tax Credit explained: 2022 to 2027',
    seoTitle: 'Rent Tax Credit explained: 2022 to 2027',
    description: 'How much the Rent Tax Credit is worth for each year from 2022 to 2027, who qualifies in Ireland, and how parents paying rent for a student child can claim it.',
    tag: 'Credits',
    date: '2026-10-28',
    excerpt: 'What the credit is worth each year, who qualifies and who doesn’t, and how parents paying a student’s rent can claim it too.',
    photo: 'service-rent-apartment-keys.jpg',
    alt: 'Hand holding a set of house keys in front of an apartment door',
    related: ['rent-tax-credit', 'tuition-fees-relief', 'paye-tax-review'],
    sources: ['S6', 'S8', 'S9', 'S10', 'S11', 'S12', 'S51'],
    body: `
<p>The Rent Tax Credit is one of the most-claimed reliefs in Ireland. According to ${a('S51', 'Revenue')}, more than 216,000 people had claimed it on their 2025 returns by early March 2026. It’s also one of the most misunderstood, especially by parents paying rent for a student. Here’s how it works.</p>

<h2>How much is it worth?</h2>
<p>The credit is <strong>20% of the rent you pay</strong>, up to a maximum for each year:</p>
<div class="tbl"><table>
<thead><tr><th scope="col">Tax year</th><th scope="col">Single person (max)</th><th scope="col">Jointly assessed couple (max)</th></tr></thead>
<tbody>
<tr><td>2022</td><td>€500</td><td>€1,000</td></tr>
<tr><td>2023</td><td>€500</td><td>€1,000</td></tr>
<tr><td>2024</td><td>€1,000</td><td>€2,000</td></tr>
<tr><td>2025</td><td>€1,000</td><td>€2,000</td></tr>
<tr><td>2026</td><td>€1,000</td><td>€2,000</td></tr>
<tr><td>2027</td><td>€1,150 <em>(${ANNOUNCED})</em></td><td>€2,300 <em>(announced)</em></td></tr>
</tbody></table></div>
<p>${a('S11', 'Revenue’s own example')}: a single person who paid €18,000 in rent in 2025 works out 20% as €3,600, but the credit is capped at <strong>€1,000</strong>.</p>
<p>Two limits to keep in mind. The credit reduces your income tax only, not USC or PRSI. And it can’t be more than the income tax you paid that year.</p>

<h2>Who qualifies</h2>
<p>You can claim for rent you pay on:</p>
<ul>
<li>your main home;</li>
<li>another property you rent so you can get to work or attend an approved college course; or</li>
<li>a property your child rents to attend an approved college course.</li>
</ul>
<p>Rooms in a shared house and "digs" can count. The tenancy must be genuine, with the landlord’s consent. If it’s the kind that must be registered with the Residential Tenancies Board (RTB), including most student accommodation, it needs to be registered (${a('S9', 'qualifying conditions')}).</p>

<h2>Who doesn’t qualify</h2>
<ul>
<li>People receiving Housing Assistance Payment (HAP), Rent Supplement or the Rental Accommodation Scheme (RAS), even if you pay a top-up.</li>
<li>Tenants of Approved Housing Bodies or Housing Associations.</li>
<li>Anyone renting from a relative.</li>
</ul>
<p>"Rent" means rent only. If your payment includes bills, meals or laundry, take those out first.</p>

<h2>Parents paying a student’s rent</h2>
<p>This is where a lot of families miss out. According to ${a('S10', 'Revenue')}, you can claim if:</p>
<ul class="checks">
<li>your child is on an approved course (the same list used for tuition fees relief);</li>
<li>the rented place is their main home during term (coming home at weekends is fine);</li>
<li>your child was under 23 at the start of the tax year in which they first started the course; and</li>
<li>neither you nor your child is related to the landlord.</li>
</ul>
<p>The overall cap still applies: one credit per year, up to €1,000 for a single person or €2,000 for a couple (2024 to 2026), however many properties you pay rent for.</p>

<h2>What you’ll need</h2>
<ul>
<li>Your landlord’s name and address</li>
<li>The address of the rented property</li>
<li>How much rent you paid in each year</li>
<li>The RTB registration number, where there is one</li>
</ul>
<p>If you can’t get the RTB number you can still claim, but Revenue may ask for it later and can withdraw the credit if the tenancy should have been registered (${a('S12', 'how to claim')}). Keep your rent records.</p>

<h2>How far back can I go?</h2>
<p>Four years. Right now that’s 2022, 2023, 2024 and 2025, but <strong>2022 closes on 31 December 2026</strong>. For 2026 you can add the credit in-year in myAccount ("Manage your tax 2026", then "Add new credits") or claim it on your 2026 return from January.</p>
<p>The credit runs to 2028 (${a('S8', 'Revenue overview')}), and Budget 2027 announced the increase for 2027 shown above (${a('S6', 'Citizens Information')}).</p>
<p>TaxRoots can check every open year for you and claim the credit alongside anything else you’re due.</p>
`,
  },
  {
    slug: 'remote-working-relief-guide',
    title: 'Working from home? How Remote Working Relief actually works',
    seoTitle: 'Remote Working Relief explained, with example',
    description: 'Revenue’s formula for Remote Working Relief explained step by step, with a worked example, which days count, shared bills, employer allowances and how to claim.',
    tag: 'Reliefs',
    date: '2026-10-26',
    excerpt: 'Revenue’s formula for claiming part of your electricity, heating and broadband, explained with a worked example and the days that count.',
    photo: 'blog-home-office.jpg',
    alt: 'Minimal home office desk with a laptop, headphones and plants',
    related: ['remote-working-relief', 'paye-tax-review'],
    sources: ['S18', 'S19'],
    body: `
<p>If you work from home some or all of the week, you can claim back part of your household bills. On its own it’s not a huge amount, but across four open years, and alongside your other claims, it’s well worth doing.</p>

<h2>What can you claim for?</h2>
<p>Revenue lets you attribute <strong>30%</strong> of your electricity, heating and broadband costs to working from home, apportioned for the days you actually worked there (${a('S18', 'what costs can you claim')}).</p>
<p>Equipment isn’t covered. Laptops, desks, chairs and other items you buy yourself can’t be claimed under this relief.</p>

<h2>The formula</h2>
<p>Revenue works it out like this (${a('S19', 'how to calculate')}):</p>
<p class="formula"><code>((A × B) ÷ C − D) × 30%</code></p>
<ul>
<li><strong>A</strong>: your total electricity, heating and broadband bills for the year</li>
<li><strong>B</strong>: the number of days you worked from home</li>
<li><strong>C</strong>: the number of days in the year</li>
<li><strong>D</strong>: any remote working allowance your employer paid you</li>
</ul>
<p>The result is the amount you can deduct. You then get tax relief on it at your highest rate of tax, 20% or 40%.</p>

<h2>A worked example</h2>
<p>This one comes from Revenue. In 2023, Jane worked from home for 50 days. Her electricity, heating and broadband came to €1,890, and her employer paid her nothing towards working from home.</p>
<div class="tbl"><table>
<thead><tr><th scope="col">Step</th><th scope="col">Working</th><th scope="col">Result</th></tr></thead>
<tbody>
<tr><td>Bills × days at home</td><td>€1,890 × 50</td><td>€94,500</td></tr>
<tr><td>÷ days in the year</td><td>€94,500 ÷ 365</td><td>€258.90</td></tr>
<tr><td>× 30%</td><td>€258.90 × 30%</td><td><strong>€77.67 allowable</strong></td></tr>
<tr><td>Relief at 40%</td><td>€77.67 × 40%</td><td><strong>€31.07 back</strong></td></tr>
</tbody></table></div>
<p>Someone working from home three days a week (about 140 days) with the same bills would have around €217 allowable. That’s roughly €43 back at 20%, or €87 at 40%, for one year. Over four open years it starts to add up.</p>

<h2>Which days count?</h2>
<p>Only the days you actually worked from home as part of your job. Leave out:</p>
<ul>
<li>weekends and bank holidays you didn’t work;</li>
<li>annual leave; and</li>
<li>evenings when you brought work home after a day in the office.</li>
</ul>

<h2>Sharing a house or the bills?</h2>
<p>If you split the bills, each person claims on what they actually paid. Revenue’s own guidance includes an example of two housemates each claiming on their half.</p>

<h2>If your employer pays an allowance</h2>
<p>Employers can pay up to <strong>€3.20 a day</strong> tax-free towards remote working costs. If yours does, take the total allowance off (that’s "D" in the formula) before applying the 30%. If they pay less than your actual costs, you can still claim the difference.</p>
<p><strong>Broadband in a bundle?</strong> If your provider doesn’t show the broadband cost separately, Revenue accepts a reasonable estimate of the broadband part.</p>

<h2>How to claim</h2>
<p>Add it to your Income Tax Return for each year in myAccount. Enter the allowable amount (after the 30%), not your total bills, and keep the bills in case Revenue asks to see them.</p>
<p>TaxRoots can work this out for every open year and claim it alongside your other credits. Remember that <strong>2022 closes on 31 December 2026</strong>.</p>
`,
  },
  {
    slug: 'budget-2027-paye-workers',
    title: 'Budget 2027: what changes for PAYE workers from January',
    seoTitle: 'Budget 2027: what changes for PAYE workers',
    description: 'Budget 2027 tax changes for Irish employees in plain English: a wider 20% band, higher credits, USC, Rent Tax Credit and tuition fees. Announced, not yet law.',
    tag: 'Budget',
    date: '2026-10-23',
    excerpt: 'A wider 20% band, bigger credits and a higher Rent Tax Credit. The announced changes that matter for employees, renters and families, in plain English.',
    photo: 'blog-savings-jar.jpg',
    alt: 'Euro cent coins spilling out of a glass savings jar',
    related: ['paye-tax-review', 'rent-tax-credit', 'tuition-fees-relief', 'home-carer-tax-credit'],
    sources: ['S5', 'S6', 'S45', 'S46', 'S53'],
    body: `
<p>Budget 2027 was announced on 6 October 2026. Most of the income tax changes are due to start on 1 January 2027 and are being legislated through the Finance (No. 2) Bill 2026, so details could still change before it’s enacted.</p>
<div class="note">Everything in this article marked 2027 is <strong>announced, subject to the Finance Bill</strong>. We’ll update it once the Finance Act is passed. Sources: ${a('S6', 'Citizens Information: Budget 2027')} and ${a('S53', 'KPMG Ireland')}.</div>

<h2>More of your income taxed at 20%</h2>
<p>The standard rate band, the amount you can earn before paying 40%, is due to go up by €2,500:</p>
<div class="tbl"><table>
<thead><tr><th scope="col">Your situation</th><th scope="col">2026</th><th scope="col">2027 (announced)</th></tr></thead>
<tbody>
<tr><td>Single person</td><td>€44,000</td><td><strong>€46,500</strong></td></tr>
<tr><td>One-parent family</td><td>€48,000</td><td><strong>€50,500</strong></td></tr>
<tr><td>Married couple, one income</td><td>€53,000</td><td><strong>€55,500</strong></td></tr>
<tr><td>Married couple, two incomes: extra band for the second earner (up to)</td><td>€35,000</td><td><strong>€37,500</strong></td></tr>
</tbody></table></div>

<h2>Bigger tax credits</h2>
<div class="tbl"><table>
<thead><tr><th scope="col">Credit</th><th scope="col">2026</th><th scope="col">2027 (announced)</th></tr></thead>
<tbody>
<tr><td>Personal tax credit (single)</td><td>€2,000</td><td><strong>€2,125</strong></td></tr>
<tr><td>Personal tax credit (married or civil partners)</td><td>€4,000</td><td><strong>€4,250</strong></td></tr>
<tr><td>Employee (PAYE) credit</td><td>€2,000</td><td><strong>€2,125</strong></td></tr>
<tr><td>Earned Income Credit</td><td>€2,000</td><td><strong>€2,125</strong></td></tr>
<tr><td>Home Carer Tax Credit</td><td>€1,950</td><td><strong>€2,050</strong></td></tr>
</tbody></table></div>

<h2>Universal Social Charge (USC)</h2>
<p>The 2% band is due to run up to <strong>€30,300</strong> (from €28,700 in 2026). This keeps full-time workers on the new €14.94 minimum wage, due from 1 January 2027, out of the 3% band. USC rates themselves don’t change.</p>

<h2>Renters</h2>
<p>The Rent Tax Credit is due to rise by €150, to <strong>€1,150</strong> for a single person and <strong>€2,300</strong> for a jointly assessed couple (${ANNOUNCED}). Budget 2026 had already extended the credit to 2028 (${a('S5', 'Revenue Budget 2026 summary')}).</p>

<h2>Students and parents</h2>
<p>The student contribution is cut permanently to €2,350, and the tuition fees relief disregard is being aligned with it. According to Citizens Information, from the <strong>2026 tax year</strong> the first <strong>€2,350</strong> of full-time fees (€1,175 part-time) is disregarded, down from €3,000 and €1,500. That means slightly more relief for families paying fees.</p>
<p>Revenue’s own tuition fees page still shows €3,000 and €1,500 at the time of writing, so treat the new figures as ${ANNOUNCED}.</p>

<h2>Landlords and homeowners</h2>
<ul>
<li><strong>Rent-a-Room Relief:</strong> the tax-free limit is due to go up from €14,000 to <strong>€16,000</strong> from 1 January 2027.</li>
<li><strong>Help to Buy:</strong> first-time buyers can get up to <strong>€35,000</strong> (from €30,000) for contracts from 7 October 2026 (${a('S46', 'Revenue Help to Buy')}).</li>
<li><strong>Mortgage Interest Tax Credit:</strong> no extension was announced, so 2026 looks like the last year, worth up to €625 (${a('S45', 'Revenue Mortgage Interest Tax Credit')}).</li>
</ul>

<h2>What should I do now?</h2>
<p>Most of these changes will be applied automatically through your Tax Credit Certificate in January, but it’s worth checking it in myAccount once it’s issued, especially if you rent, care for someone at home or have a second income in the household.</p>
<p>The Budget doesn’t change what you’re owed for past years. <strong>2022 claims close on 31 December 2026</strong>, and 2023 to 2025 are still open. TaxRoots can review your open years before the deadline and help make sure you’re set up properly for 2027.</p>
`,
  },
  {
    slug: 'medical-expenses-tax-relief',
    title: 'Medical expenses tax relief: what you can and can’t claim',
    seoTitle: 'Medical expenses tax relief: what counts',
    description: '20% tax relief on qualifying health costs in Ireland: what counts and what doesn’t, non-routine dental, the Med 2 form, receipts and how to claim.',
    tag: 'Reliefs',
    date: '2026-10-21',
    excerpt: 'GP visits, prescriptions, braces and more. What qualifies for 20% relief, what doesn’t, and what the Med 2 form is really for.',
    photo: 'service-medical-pharmacist.jpg',
    alt: 'Smiling pharmacist reaching for a medicine box on the pharmacy shelves',
    related: ['medical-expenses', 'dependent-relative-age-credits', 'paye-tax-review'],
    sources: ['S13', 'S14', 'S15', 'S16', 'S17', 'S51'],
    body: `
<p>Health expenses are the most common claim on Irish tax returns. According to ${a('S51', 'Revenue')}, nearly 261,000 people had claimed them on 2025 returns by early March 2026. Even so, plenty of people still leave money behind, usually because they’re not sure what counts.</p>

<h2>How the relief works</h2>
<p>You get tax relief at <strong>20%</strong> on qualifying health expenses you paid during the year (${a('S13', 'Revenue overview')}). If you paid €1,200 between the GP, the pharmacy and the physio, that’s €240 back, as long as you paid at least that much income tax.</p>
<p>Nursing home fees are different: relief is given at your <strong>highest rate</strong>, up to 40%, and only on what you pay yourself, not the HSE’s Fair Deal share (${a('S16', 'nursing home expenses')}).</p>
<p>You can claim for yourself, your family, or <strong>anyone else</strong>, as long as you were the one who paid. Take off anything your health insurer, the HSE or a compensation payment covered or will cover. You can claim the part your insurer didn’t pay.</p>

<h2>What counts</h2>
<p>Revenue’s ${a('S14', 'list of qualifying expenses')} includes:</p>
<ul class="checks cols">
<li>GP and consultant fees</li>
<li>Prescribed drugs and medicines</li>
<li>Routine maternity care</li>
<li>Diagnostic tests a practitioner recommended</li>
<li>Hospital and clinic charges, and ambulance</li>
<li>IVF</li>
<li>Physiotherapy, chiropractic and osteopathy on referral</li>
<li>Psychologist or psychotherapist (conditions apply)</li>
<li>Podiatry and chiropody</li>
<li>Hearing aids and other medical appliances</li>
<li>Coeliac and diabetic diets</li>
<li>The pharmacy Common Conditions Service</li>
</ul>
<p>Care abroad also qualifies if the practitioner is registered there, along with reasonable travel and accommodation if the treatment isn’t available in Ireland.</p>

<h2>What doesn’t</h2>
<ul>
<li>Routine dental: check-ups, scaling and cleaning, fillings, extractions and dentures</li>
<li>Routine eye care: eye tests and glasses</li>
<li>Cosmetic procedures, unless they correct a medical problem</li>
</ul>

<h2>Dental work and the Med 2 form</h2>
<p>Non-routine dental work does qualify. That includes crowns, veneers, root canal treatment, implants, gum (periodontal) treatment, bridgework, surgical removal of impacted wisdom teeth and <strong>orthodontics (braces)</strong> (${a('S15', 'dental expenses')}).</p>
<p>Ask your dentist for a <strong>Med 2</strong> form for each year of treatment. It’s a receipt, not a claim form: you don’t send it to Revenue, but you must keep it.</p>

<h2>Treatment paid across two years</h2>
<p>If you had treatment in December and paid part of it in January, you can claim it either in the year you received the care or in the year you paid for it.</p>

<h2>Keeping receipts</h2>
<p>You don’t usually send receipts with your claim, but you must keep them for <strong>six years</strong>. Revenue’s Receipts Tracker in myAccount lets you photograph and store them as you go.</p>

<h2>How to claim</h2>
<p>The old Med 1 form has been withdrawn. You now claim on your Income Tax Return in myAccount, either after the year ends or in real time during the year (${a('S17', 'how to claim')}). Each year is claimed separately, and you can go back four years. <strong>2022 closes on 31 December 2026.</strong></p>
<p>TaxRoots can gather your health costs for each open year and claim them alongside everything else you’re due.</p>
`,
  },
  {
    slug: 'emergency-tax-refund',
    title: 'Emergency tax and changing jobs: how to get your money back',
    seoTitle: 'Emergency tax in Ireland: how to get it back',
    description: 'Why emergency tax happens when you start a new job in Ireland, how to stop it in myAccount, and how to claim back what you overpaid this year or in past years.',
    tag: 'Guide',
    date: '2026-10-20',
    excerpt: 'New job, smaller payslip? Why emergency tax happens, how to stop it quickly, and how to claim back what you overpaid.',
    photo: 'blog-card-laptop.jpg',
    alt: 'Person holding a bank card while using a laptop',
    related: ['emergency-tax-refund', 'leaving-ireland-refund', 'paye-tax-review'],
    sources: ['S7', 'S33', 'S34', 'S35', 'S38'],
    body: `
<p>Starting a new job should be good news, until the first payslip arrives and a big chunk has gone in tax. That’s usually emergency tax. The good news is that it’s temporary, and the money isn’t lost.</p>

<h2>What is emergency tax?</h2>
<p>Emergency tax is what payroll uses when your employer can’t get a <strong>Revenue Payroll Notification (RPN)</strong> for you (${a('S33', 'Revenue: Emergency Tax')}). Without an RPN, your employer doesn’t know your tax credits or rate band, so income tax and USC are taken at higher emergency rates.</p>
<p>It usually happens because:</p>
<ul>
<li>your employer doesn’t have your Personal Public Service Number (PPSN); or</li>
<li>your job hasn’t been registered with Revenue.</li>
</ul>

<h2>How to stop it</h2>
<ol>
<li>Give your employer your PPSN as soon as you can.</li>
<li>If this is your first job in Ireland, register it yourself: in myAccount, go to PAYE Services and choose <strong>"Add Job or Pension Details"</strong>.</li>
<li>If you don’t have a PPSN yet, contact the Department of Social Protection first.</li>
</ol>
<p>Once your employer receives your RPN, emergency tax stops.</p>

<h2>Getting it back this year</h2>
<div class="tbl rows"><table>
<thead><tr><th scope="col">Your situation</th><th scope="col">What happens</th></tr></thead>
<tbody>
<tr><td>Employer gets a <strong>cumulative</strong> RPN</td><td>They recalculate your tax from January and refund the overpayment on your next payday.</td></tr>
<tr><td>You’re on a <strong>Week 1</strong> RPN</td><td>Your employer can’t refund past overpayments until Revenue issues a cumulative one. You can ask Revenue why through MyEnquiries.</td></tr>
<tr><td>You’ve <strong>moved jobs</strong> before it was refunded</td><td>Your new employer refunds it once they get a cumulative RPN.</td></tr>
<tr><td>You’ve <strong>stopped working</strong></td><td>You can claim the refund directly from Revenue.</td></tr>
</tbody></table></div>
<p>Source: ${a('S34', 'Revenue: refund of Emergency Tax')}.</p>

<h2>Emergency tax in a previous year</h2>
<p>If you were on emergency tax in an earlier year and never got it all back, you need to file an Income Tax Return for that year. In myAccount: <strong>"Review your tax for the previous 4 years"</strong>, request a Statement of Liability (${a('S38', 'what it shows')}), then <strong>"Complete Income Tax Return"</strong>.</p>
<p>Refunds can take longer if you had several jobs at once, if credits were moved between jobs, or if there are questions about your residency.</p>

<h2>Moved abroad part-way through a year?</h2>
<p>If you’ve left Ireland during a year, you may also be owed tax, because you get a full year’s credits against part-year income (${a('S35', 'Revenue: leaving Ireland')}).</p>

<h2>Remember the four-year limit</h2>
<p>Refunds can only be claimed for the last four years, and claims for 2022 must be made by <strong>31 December 2026</strong> (${a('S7', 'four-year rule')}). TaxRoots can check every open year for emergency tax, missing credits and USC overpayments, and claim back what you’re owed.</p>
`,
  },
  {
    slug: 'flat-rate-expenses-by-job',
    title: 'Flat rate expenses: what your job could be worth',
    seoTitle: 'Flat rate expenses in Ireland, by job',
    description: 'Flat rate expenses for nurses, teachers, shop staff and trades: Revenue’s amounts by job, what they’re worth at 20% or 40%, and how to claim for four years.',
    tag: 'Reliefs',
    date: '2026-11-24',
    excerpt: 'Nurses, teachers, shop assistants, chefs, electricians and plenty more can claim a fixed yearly deduction for work costs. Here’s what it’s worth and how to claim it.',
    photo: 'service-nurse-healthcare.jpg',
    alt: 'Healthcare worker in navy scrubs smiling with arms crossed',
    related: ['flat-rate-expenses', 'paye-tax-review'],
    sources: ['S7', 'S20', 'S21', 'S51'],
    body: `
<p>If you buy your own uniform, wash it at home, pay a registration fee to keep working or bring your own tools, Revenue may already have agreed a fixed yearly amount for your job. It’s called a flat rate expense, and you don’t need a single receipt to claim it. According to ${a('S51', 'Revenue')}, more than 202,000 people had claimed one on their 2025 returns by early March 2026.</p>

<h2>What is a flat rate expense?</h2>
<p>It’s a fixed amount, agreed between Revenue and groups of employees, that you can deduct from your income each year to cover the cost of things you need for your job (${a('S20', 'Revenue: Flat Rate Expenses')}). Because it comes off your income, you get relief at your highest rate of tax: 20% or 40%.</p>
<p>It isn’t given automatically. If you’ve never claimed it, it isn’t on your record.</p>

<h2>Amounts for common jobs</h2>
<p>These come from ${a('S21', 'Revenue’s list of allowances')}. They’re yearly figures and are the same for 2020 to 2026 unless noted.</p>
<div class="tbl rows"><table>
<thead><tr><th scope="col">Job</th><th scope="col">Per year</th></tr></thead>
<tbody>
<tr><td>Nurses who buy and wash their own uniforms</td><td>€733</td></tr>
<tr><td>Nurses who buy but don’t wash their uniforms</td><td>€638</td></tr>
<tr><td>Nursing assistants who buy and wash their own uniforms</td><td>€526</td></tr>
<tr><td>Hospital doctors, including consultants</td><td>€695</td></tr>
<tr><td>Teachers (other than principals)</td><td>€518</td></tr>
<tr><td>School principals</td><td>€608</td></tr>
<tr><td>Pharmacists</td><td>€400</td></tr>
<tr><td>Physiotherapists and occupational therapists (2023 to 2026)</td><td>€410</td></tr>
<tr><td>Carpenters and joiners</td><td>€220</td></tr>
<tr><td>Plumbers (non-welders)</td><td>€177</td></tr>
<tr><td>Electricians (building industry)</td><td>€153</td></tr>
<tr><td>Shop assistants</td><td>€121</td></tr>
<tr><td>Hotel chefs / waiters and waitresses</td><td>€97 / €80</td></tr>
<tr><td>Bar staff</td><td>€93</td></tr>
<tr><td>Home helps employed by or for the HSE</td><td>€256</td></tr>
</tbody></table></div>
<p>The list runs to dozens of jobs, and many have several rates depending on who supplies and washes the uniform. The exact wording of your category matters, so check it against the list rather than going on a job title alone.</p>

<h2>What it’s worth in your pocket</h2>
<p>The figure on the list is a deduction, not money back. Multiply it by your tax rate:</p>
<div class="tbl"><table>
<thead><tr><th scope="col">Allowance</th><th scope="col">Back at 20%</th><th scope="col">Back at 40%</th></tr></thead>
<tbody>
<tr><td>Nurse, €733</td><td>€146.60</td><td>€293.20</td></tr>
<tr><td>Teacher, €518</td><td>€103.60</td><td>€207.20</td></tr>
<tr><td>Shop assistant, €121</td><td>€24.20</td><td>€48.40</td></tr>
</tbody></table></div>
<p>That’s for one year. You can go back four, so a nurse who has never claimed could be looking at four years’ worth on top of anything else they’re due.</p>

<h2>Not sure your job is on the list?</h2>
<p>Some roles don’t match a heading neatly. Healthcare assistants are a common example: there’s no "HCA" line, but some hospital roles may fall under nursing assistants. If you’re unsure, it’s better to check than to guess. Claiming an amount you’re not entitled to can be clawed back later.</p>
<p>You can also claim actual expenses instead if they’re higher, but only where they were incurred "wholly, exclusively and necessarily" for your job, and you’ll need receipts. For most people the flat rate is simpler.</p>

<h2>How to claim</h2>
<ul>
<li><strong>This year:</strong> add it in myAccount under "Manage your tax 2026" and it’s spread across your remaining paydays.</li>
<li><strong>Past years:</strong> file an Income Tax Return for each year in myAccount and add the expense there.</li>
</ul>
<p>Revenue’s ${a('S7', 'four-year rule')} means <strong>2022 closes on 31 December 2026</strong>. TaxRoots can check your role against the list for every open year and claim it with your other credits. If you’d like us to look, <a href="/#check">ask us for a free check</a>.</p>
`,
  },
  {
    slug: 'tuition-fees-tax-relief',
    title: 'Tuition fees relief: getting 20% back on college fees',
    seoTitle: 'Tuition fees tax relief in Ireland explained',
    description: 'How tuition fees relief works in Ireland: the €7,000 cap, the disregard and its lower 2026 figures, what fees count, and claiming for more than one student.',
    tag: 'Reliefs',
    date: '2026-11-21',
    excerpt: 'Paying college fees for yourself or a family member? How the relief is worked out, why the student contribution alone often isn’t enough, and what changes for 2026.',
    photo: 'service-graduation-tuition.jpg',
    alt: 'Graduates in gowns throwing their caps in the air outside a university building',
    related: ['tuition-fees-relief', 'rent-tax-credit', 'paye-tax-review'],
    sources: ['S6', 'S7', 'S22', 'S23'],
    body: `
<p>If you pay third-level fees for yourself, your child or anyone else, you may be able to claim tax relief on part of them. The rules are simple once you see how the numbers fit together, but the "disregard" catches a lot of families out.</p>

<h2>The basics</h2>
<ul>
<li>Relief is at <strong>20%</strong> of qualifying fees (${a('S22', 'Revenue: tuition fees')}).</li>
<li>The course and the college must both be on the approved list. Undergraduate and postgraduate courses can both qualify.</li>
<li>The most you can claim on is <strong>€7,000 per course, per person, per academic year</strong>.</li>
<li>Only the person who actually paid can claim, and you can claim for anyone: yourself, a child, a partner or another relative.</li>
</ul>

<h2>What fees count</h2>
<p>Tuition fees count, including the student contribution. Registration and administration fees, exam fees, student centre levies, sports charges and the USI levy don’t. If someone else covered the fees, such as a grant, a scholarship or an employer, take that part out first.</p>

<h2>The disregard</h2>
<p>Each year, the first part of what you pay is ignored. That’s the disregard, and it applies <strong>once per claim, per tax year</strong>, however many students or courses you’re paying for.</p>
<div class="tbl"><table>
<thead><tr><th scope="col">Tax year</th><th scope="col">Any course full-time</th><th scope="col">All courses part-time</th></tr></thead>
<tbody>
<tr><td>2022 to 2025</td><td>€3,000</td><td>€1,500</td></tr>
<tr><td>2026</td><td>€2,350 <em>(${ANNOUNCED})</em></td><td>€1,175 <em>(announced)</em></td></tr>
</tbody></table></div>
<p>The lower 2026 figures were announced in Budget 2027 to match the reduced student contribution (${a('S6', 'Citizens Information')}). ${a('S23', 'Revenue’s calculation page')} says they’ll apply back to 2026 once the Finance Act 2026 is enacted.</p>

<h2>Worked examples</h2>
<p>These two come from ${a('S23', 'Revenue')} and use the €3,000 disregard that applies up to 2025.</p>
<div class="tbl rows"><table>
<thead><tr><th scope="col">Situation</th><th scope="col">Working</th><th scope="col">Relief</th></tr></thead>
<tbody>
<tr><td>One student, fees of €8,500</td><td>Capped at €7,000, minus €3,000 = €4,000 × 20%</td><td><strong>€800</strong></td></tr>
<tr><td>Two students, €7,000 (capped) and €3,500</td><td>€10,500, minus one €3,000 disregard = €7,500 × 20%</td><td><strong>€1,500</strong></td></tr>
</tbody></table></div>
<p>If the only thing you paid in a year was one full-time student contribution, the disregard usually cancels it out and there’s nothing to claim. Where it pays off is with higher fees (postgraduate courses, for example) or two or more students in the same year, because you only take the disregard off once.</p>

<h2>Paying for a student’s rent too?</h2>
<p>Parents paying rent for a student on an approved course may also be able to claim the Rent Tax Credit. We cover the conditions in our <a href="/insights/rent-tax-credit-explained/">Rent Tax Credit guide</a>.</p>

<h2>How to claim</h2>
<p>Claim on your Income Tax Return in myAccount for the year you paid the fees (Form IT31 is the paper option). Keep the college receipts. You can go back four years, and <strong>2022 closes on 31 December 2026</strong> (${a('S7', 'four-year rule')}).</p>
<p>TaxRoots can work out whether you’re due anything for each open year and add it to the rest of your claim. <a href="/#check">Ask us for a free check</a>.</p>
`,
  },
  {
    slug: 'leaving-ireland-tax-refund',
    title: 'Leaving Ireland mid-year? You may be owed a tax refund',
    seoTitle: 'Leaving Ireland? Claim your tax refund',
    description: 'Moving abroad mid-year? Why you may have overpaid Irish tax and USC, how split-year treatment works, and how to claim a refund through myAccount or Form P50.',
    tag: 'Guide',
    date: '2026-11-18',
    excerpt: 'You get a full year’s tax credits even if you only work part of the year in Ireland. Here’s why people leaving often overpay, and how to claim it back.',
    photo: 'service-airport-leaving-ireland.jpg',
    alt: 'Empty airport departure lounge looking out at a plane on the stand',
    related: ['leaving-ireland-refund', 'emergency-tax-refund', 'paye-tax-review'],
    sources: ['S1', 'S3', 'S7', 'S35', 'S36'],
    body: `
<p>Moving abroad comes with a long to-do list, and Irish tax is usually near the bottom of it. It’s worth moving up. Many people who leave Ireland part-way through a year have paid more tax than they owe for that year, and Revenue won’t send it back unless you ask.</p>

<h2>Why you might be owed money</h2>
<p>Your tax credits and rate band are set for a full year, but payroll gives them to you a bit at a time, payday by payday. If you stop working in Ireland in June, you’ve only used about half of them. According to ${a('S35', 'Revenue')}, you’re entitled to the full year’s credits against the income you earned in Ireland that year, so the unused part can come back to you as a refund.</p>

<h2>A simple example</h2>
<p>This is a simplified illustration, not a Revenue example. Take a single PAYE worker in 2026 with the personal and employee credits of €2,000 each (${a('S1', 'Revenue tax charts')}), earning €24,000 before leaving at the end of June.</p>
<div class="tbl rows"><table>
<thead><tr><th scope="col">Step</th><th scope="col">Amount</th></tr></thead>
<tbody>
<tr><td>Income tax at 20% on €24,000</td><td>€4,800</td></tr>
<tr><td>Credits used through payroll by June (about half of €4,000)</td><td>−€2,000</td></tr>
<tr><td>Tax actually paid</td><td>€2,800</td></tr>
<tr><td>Tax due using the full year’s credits (€4,800 − €4,000)</td><td>€800</td></tr>
<tr><td><strong>Possible refund</strong></td><td><strong>€2,000</strong></td></tr>
</tbody></table></div>
<p>Real cases vary with your pay, other income and when you leave. USC can come back too: if your total income for the year is €13,000 or less, no USC is due at all (${a('S3', 'Revenue: USC')}).</p>

<h2>Split-year treatment</h2>
<p>If you’re Irish resident in the year you leave and won’t be resident the following year, you may qualify for split-year treatment on your employment income (${a('S36', 'Revenue: split-year treatment')}). In practice, the wages you earn abroad after you leave are ignored for Irish tax, so they don’t eat into the credits you’re claiming against your Irish pay. You can ask for it through MyEnquiries or when you file your return.</p>

<h2>How to claim</h2>
<ul>
<li><strong>Online:</strong> in myAccount, go to PAYE Services and use "Claim unemployment repayment", which also covers people who have left the country.</li>
<li><strong>On paper:</strong> send Revenue a Form P50, an Income Tax Return (Form 12 for PAYE, Form 11 if you’re self-employed) and a short statement that you’re leaving permanently or will be non-resident for at least the next tax year.</li>
</ul>
<p>There’s no P45 any more. Your employer reports your final pay to Revenue, so make sure they have done that before you claim.</p>

<h2>Before you go</h2>
<ul class="checks">
<li>Make sure you can still log in to myAccount from abroad.</li>
<li>Check the bank details on your Revenue record, because that’s where refunds are paid.</li>
<li>Keep your last payslip and any receipts for credits you haven’t claimed yet, such as rent or medical costs.</li>
<li>Look back at earlier years too: emergency tax, rent or medical expenses you never claimed can all be reclaimed for four years.</li>
</ul>

<h2>Already left?</h2>
<p>You can still claim from abroad. The four-year rule applies, so a 2022 departure must be claimed by <strong>31 December 2026</strong> (${a('S7', 'four-year rule')}). TaxRoots can handle the claim for you, wherever you are now. Our fee is 6% of the refund plus VAT, paid only after the refund arrives. <a href="/#check">Ask us for a free check</a>.</p>
`,
  },
  {
    slug: 'tax-review-shows-underpayment',
    title: 'What happens if a tax review shows you owe money?',
    seoTitle: 'Tax review shows an underpayment? What next',
    description: 'Most PAYE reviews in Ireland end in a refund, but some show tax owed. Why underpayments happen, how Revenue collects them interest-free, and what you can do.',
    tag: 'Guide',
    date: '2026-11-14',
    excerpt: 'Most reviews end in a refund, but not all. Why some people owe tax, how Revenue collects it, and why we tell you before anything is filed.',
    photo: 'about-calculator-paperwork.jpg',
    alt: 'Close-up of a calculator and pen on handwritten paperwork',
    related: ['paye-tax-review', 'personal-tax-returns'],
    sources: ['S7', 'S38', 'S51', 'S55'],
    body: `
<p>Most people who review their tax get money back. According to ${a('S51', 'Revenue')}, about 82% of the 2025 PAYE returns it had processed by early March 2026 showed an overpayment. But almost 12% showed an underpayment. It’s not common, and it’s rarely a disaster, but it’s worth knowing how it works before you file.</p>

<h2>Why underpayments happen</h2>
<p>PAYE gets most people’s tax right, but some situations slip through:</p>
<ul>
<li><strong>Taxable social welfare:</strong> payments like Illness Benefit or Jobseeker’s Benefit are taxable, and the tax isn’t always fully collected through payroll.</li>
<li><strong>Two jobs or pensions at once:</strong> if your credits or rate band were given to both, you can end up with more than your share.</li>
<li><strong>Extra income:</strong> rental income, a side business or other income that hasn’t been declared.</li>
<li><strong>Credits that weren’t due:</strong> for example, a credit claimed in-year that turned out not to apply.</li>
<li><strong>A change in circumstances</strong> such as marriage, separation or a partner’s income changing, where credits were split in a way that didn’t match the final picture.</li>
</ul>

<h2>How you find out</h2>
<p>When you file an Income Tax Return, Revenue issues a Statement of Liability, usually about five days later, in myAccount under My Documents (${a('S38', 'Revenue: Statement of Liability')}). It shows whether you overpaid, underpaid or got it about right.</p>

<h2>How Revenue collects it</h2>
<div class="tbl rows"><table>
<thead><tr><th scope="col">Amount owed</th><th scope="col">Your options</th></tr></thead>
<tbody>
<tr><td>Under €6,000</td><td>Pay all or part of it through myAccount, or let Revenue collect the balance <strong>interest-free</strong> by reducing your tax credits over up to four years.</td></tr>
<tr><td>Over €6,000</td><td>Revenue sends a notice setting out what’s owed. You can pay through myAccount or contact Revenue through MyEnquiries to talk about repayment options.</td></tr>
</tbody></table></div>
<p>Source: ${a('S55', 'Revenue: what to do if you have underpaid tax')}. Spreading it over four years usually means a small reduction on each payslip rather than one big bill.</p>

<h2>Refund in one year, tax owed in another?</h2>
<p>It happens. A review across four years might show a refund for 2023 and an underpayment for 2024. Revenue can use a refund to clear tax you owe, so the end result is the net position. That’s why we look at all your open years together rather than cherry-picking.</p>

<h2>Should I just not file?</h2>
<p>Leaving a year unfiled doesn’t make tax that’s due go away. Revenue reviews PAYE records itself and can raise an underpayment for a year you never looked at, generally within the same four-year window that applies to refunds (${a('S7', 'four-year rule')}). It’s usually better to know where you stand and deal with it on your terms.</p>

<h2>How TaxRoots handles it</h2>
<p>When we review your tax, we tell you what we find before anything is filed, including the rare case where a year shows tax owed. You decide what happens next. And if there’s no refund, there’s no fee. If you’d like us to take a look, <a href="/#check">ask us for a free check</a>.</p>
`,
  },
  {
    slug: 'register-a-company-in-ireland',
    title: 'Registering a company in Ireland: the steps, in order',
    seoTitle: 'How to register a company in Ireland',
    description: 'Setting up a limited company in Ireland: name, directors, the EEA director rule, Form A1 on CORE, Revenue, the RBO within five months and your first return.',
    tag: 'Business',
    date: '2026-11-11',
    excerpt: 'From picking a name to your first annual return: what the CRO, Revenue and the RBO need from a new Irish company, and the deadlines that catch people out.',
    photo: 'about-laptop-documents.jpg',
    alt: 'Laptop on a bright white desk with documents and a coffee cup',
    related: ['company-registration', 'cro-rbo-compliance', 'payroll-paye', 'vat-rct'],
    sources: ['S56', 'S63', 'S64', 'S65', 'S66'],
    body: `
<p>Setting up a company in Ireland is mostly online and can be fairly quick, but there are a few deadlines after incorporation that new directors often miss. Here’s the whole process, in the order you’ll meet it.</p>

<h2>1. Choose the type of company</h2>
<p>Most small businesses register a <strong>private company limited by shares</strong>, which ends in "Limited" or "Ltd". An LTD can have a single director and doesn’t need an objects clause in its constitution (${a('S63', 'CRO')}). Other types, such as a designated activity company (DAC) or a company limited by guarantee (CLG), suit more specific situations.</p>

<h2>2. Pick a name</h2>
<p>Check the name isn’t already taken, or too close to an existing company, on the CRO register. You can reserve a name with the CRO for a short period before you file, though it’s optional.</p>

<h2>3. Line up your officers and address</h2>
<ul>
<li><strong>Director(s):</strong> at least one for an LTD.</li>
<li><strong>Company secretary:</strong> required. If there’s only one director, that person can’t also be the secretary.</li>
<li><strong>An EEA-resident director:</strong> at least one director must live in the European Economic Area. If none does, the company needs a <strong>€25,000 non-resident director bond</strong>, or a Section 140 certificate showing a real and continuous economic link with Ireland (${a('S64', 'CRO Leaflet 17')}). Since Brexit, a UK-resident director doesn’t count.</li>
<li><strong>Registered office:</strong> a physical address in the State.</li>
</ul>

<h2>4. File Form A1 and the constitution on CORE</h2>
<p>Form A1 sets out the company name, registered office, directors and secretary (with their consent to act), and the shareholders and their shares. It’s filed with the constitution on CORE, the CRO’s online system (${a('S63', 'CRO: registration methods')}). Filing online is cheaper and faster than paper. Once it’s approved, you get a certificate of incorporation and a company number.</p>

<h2>5. Register with Revenue</h2>
<ul>
<li><strong>Corporation Tax:</strong> every trading company registers.</li>
<li><strong>Employer (PAYE):</strong> a company must register as an employer and run PAYE on directors’ pay, even if it has no other staff (${a('S56', 'Revenue: registering as an employer')}).</li>
<li><strong>VAT:</strong> once turnover passes Revenue’s thresholds, or sooner if registering voluntarily suits you.</li>
<li><strong>ROS:</strong> you’ll need Revenue Online Service access to file and pay.</li>
</ul>

<h2>6. Register beneficial owners within five months</h2>
<p>This is the deadline people forget. A newly incorporated company has <strong>five months from incorporation</strong> to file its beneficial ownership details with the Register of Beneficial Ownership (RBO) (${a('S66', 'RBO')}). Beneficial owners are, broadly, the people who ultimately own or control the company. Filing is online and free, but missing the deadline can lead to fines and prosecution. Later changes must be filed within 14 days.</p>

<h2>7. Your first annual return</h2>
<p>A company’s first annual return date is <strong>six months after incorporation</strong>. The first return doesn’t need financial statements, but it must be filed within <strong>56 days</strong> of that date and can’t be filed early. From the second return on, financial statements must be attached, and the second return is due no later than 18 months after incorporation (${a('S65', 'CRO: annual return date')}). Late filing brings late fees and can cost the company its audit exemption.</p>

<h2>Want it done for you?</h2>
<p>TaxRoots helps with company registration, CRO and RBO filings, and getting set up with Revenue, so the first-year deadlines don’t sneak up on you. See <a href="/#services">our services</a> or <a href="/#check">get in touch</a>.</p>
`,
  },
  {
    slug: 'rct-guide-for-subcontractors',
    title: 'RCT for subcontractors: the 0%, 20% and 35% rates explained',
    seoTitle: 'RCT in Ireland: a guide for subcontractors',
    description: 'Relevant Contracts Tax for construction, forestry and meat processing subcontractors: what decides your RCT rate, how to lower it and how RCT is credited.',
    tag: 'Business',
    date: '2026-11-07',
    excerpt: 'Working as a subcontractor in construction? What decides whether 0%, 20% or 35% is taken from your payments, and how to get the tax you’ve had deducted back.',
    photo: 'service-construction-worker.jpg',
    alt: 'Construction worker in hard hat and hi-vis cutting timber on site',
    related: ['vat-rct', 'personal-tax-returns', 'company-registration'],
    sources: ['S59', 'S60', 'S61', 'S62'],
    body: `
<p>If you do subcontract work in construction, you’ve probably seen RCT taken off a payment. Relevant Contracts Tax is a withholding tax: the main contractor deducts it before paying you and passes it to Revenue. How much they take depends almost entirely on your own tax record.</p>

<h2>Who it applies to</h2>
<p>RCT covers payments from principal contractors to subcontractors in three sectors (${a('S59', 'Revenue: RCT')}):</p>
<ul>
<li><strong>Construction:</strong> building, altering, repairing or demolishing buildings and structures, installing heating, lighting or drainage, site clearance, excavation and scaffolding.</li>
<li><strong>Forestry:</strong> planting, thinning and felling trees and maintaining woodland.</li>
<li><strong>Meat processing:</strong> slaughtering and processing animals and poultry, and cleaning the premises.</li>
</ul>
<p>Everything is done online through ROS, Revenue’s online service.</p>

<h2>The three rates</h2>
<div class="tbl rows"><table>
<thead><tr><th scope="col">Rate</th><th scope="col">Who gets it</th></tr></thead>
<tbody>
<tr><td><strong>0%</strong></td><td>Subcontractors with an up-to-date tax compliance record</td></tr>
<tr><td><strong>20%</strong></td><td>A substantially up-to-date record</td></tr>
<tr><td><strong>35%</strong></td><td>A poor compliance record, or not registered with Revenue</td></tr>
</tbody></table></div>
<p>Source: ${a('S60', 'Revenue: RCT for subcontractors')}. "Compliance" means things like filing your returns on time and not having tax outstanding.</p>

<h2>How it works on each job</h2>
<ol>
<li>You give the principal contractor your name as Revenue has it, your tax reference number and proof of identity.</li>
<li>The principal registers the contract with Revenue, and Revenue sends you a letter confirming it and your rate.</li>
<li>Before each payment, the principal notifies Revenue and gets a <strong>deduction authorisation</strong> showing the rate and how much to deduct.</li>
<li>If tax is deducted, they should give you a copy showing the gross payment, the RCT taken and the net amount.</li>
</ol>
<p>Keep those copies. They’re your record of what was deducted.</p>

<h2>Getting a lower rate</h2>
<p>Revenue reviews every subcontractor’s rate on a rolling basis, and a change shows up as a notice in your ROS inbox. If you’re on 20% or 35%, sort out whatever is causing it (usually a missing return or an unpaid balance), wait at least 72 hours, then request a rate review in ROS. If that doesn’t work, you can ask through MyEnquiries (${a('S60', 'Revenue')}).</p>

<h2>Getting credit for RCT deducted</h2>
<p>RCT taken from your payments isn’t lost. Revenue automatically credits it to your tax record and offsets it against your other taxes once the relevant return is filed: your Form 11 or CT1 for income or corporation tax, your VAT3 for VAT, or your monthly PAYE return if you employ people (${a('S61', 'Revenue: credit for RCT and offsets')}). That’s another reason to keep your returns up to date: the credit sits there until you file.</p>

<h2>Don’t forget VAT</h2>
<p>On construction work covered by RCT, VAT is normally handled under a reverse charge: the principal contractor accounts for the VAT, not the subcontractor. Your invoices should reflect that.</p>

<h2>Changes on the way</h2>
<p>Revenue has consulted on replacing the current RCT rates with a new withholding system (${a('S62', 'Revenue: eWHT')}). No start date has been confirmed, and today’s 0%, 20% and 35% rates still apply. We’ll update this guide if that changes.</p>
<p>TaxRoots helps subcontractors and contractors with RCT, VAT and their annual returns. See <a href="/#services">our services</a> or <a href="/#check">get in touch</a>.</p>
`,
  },
  {
    slug: 'payroll-basics-new-employer',
    title: 'Taking on your first employee: payroll basics in Ireland',
    seoTitle: 'Payroll basics for a new employer in Ireland',
    description: 'Hiring your first employee in Ireland? Registering as an employer, Revenue Payroll Notifications, reporting by payday, and when PAYE, USC and PRSI are due.',
    tag: 'Business',
    date: '2026-11-04',
    excerpt: 'Registering as an employer, getting an RPN for each employee, reporting every payday and paying Revenue on time: the payroll basics for a small business.',
    photo: 'service-hospitality-barista.jpg',
    alt: 'Smiling barista in a beanie working behind a café counter',
    related: ['payroll-paye', 'company-registration', 'cro-rbo-compliance'],
    sources: ['S6', 'S33', 'S56', 'S57', 'S58'],
    body: `
<p>Hiring your first person is a big step, and payroll is where a lot of small employers get nervous. Since PAYE Modernisation in 2019, Ireland’s system works in real time: you report each pay run to Revenue as it happens. Once it’s set up, it’s routine.</p>

<h2>1. Register as an employer</h2>
<p>You must register with Revenue as an employer <strong>before you pay anyone</strong>. In ROS, go to "Manage Tax Registrations" and register for Employer (PAYE/PRSI) (${a('S56', 'Revenue: registering as an employer')}).</p>
<ul>
<li>A company must register even if the only people it pays are its directors.</li>
<li>If you have just one domestic employee paid less than €40 a week, you don’t need to register.</li>
</ul>

<h2>2. Get your new employee’s details</h2>
<p>You’ll need their Personal Public Service Number (PPSN) and start date. If it’s their first job in Ireland, they should register the job themselves in myAccount. Without a PPSN, you can’t get their tax details and you’ll have to apply emergency tax (${a('S33', 'Revenue: Emergency Tax')}), which nobody enjoys on their first payslip.</p>

<h2>3. Get a Revenue Payroll Notification (RPN)</h2>
<p>An RPN tells you the employee’s tax credits, rate band and USC position. Your payroll software requests it from Revenue. Always use the most recent RPN for each pay run, because it changes when the employee updates their credits.</p>

<h2>4. Report on or before every payday</h2>
<p>Each time you pay someone, you work out their PAYE, USC and PRSI and send a payroll submission to Revenue <strong>on or before the pay date</strong> (${a('S57', 'Revenue: paying your employees’ tax')}). Weekly payers report weekly; monthly payers report monthly. Your employees can see this information in their own myAccount.</p>
<p>There are no P45s or P60s any more. The real-time submissions replaced them.</p>

<h2>5. Check the monthly statement and pay on time</h2>
<div class="tbl rows"><table>
<thead><tr><th scope="col">When</th><th scope="col">What happens</th></tr></thead>
<tbody>
<tr><td>By the 5th of the next month</td><td>Revenue issues a monthly statement based on your submissions.</td></tr>
<tr><td>By the 14th</td><td>Accept or correct the statement. If you do nothing, Revenue treats it as your return on the 14th.</td></tr>
<tr><td>By the 14th, or the 23rd</td><td>Pay the total. The later 23rd date applies if you file and pay through ROS.</td></tr>
</tbody></table></div>
<p>Late payment is charged interest at <strong>0.0274% a day</strong> from the 14th (${a('S58', 'Revenue: paying tax to Revenue')}).</p>

<h2>6. Budget for employer PRSI</h2>
<p>On top of wages, you pay employer PRSI. The rate depends on how much the employee earns each week, and the rates have gone up each October since 2024 as part of a planned series of increases. Check the current rates before you set your budget.</p>
<p>Also keep an eye on the minimum wage. Budget 2027 announced a rise to €14.94 an hour from 1 January 2027 (${a('S6', 'Citizens Information')}).</p>

<h2>Records to keep</h2>
<p>Keep timesheets, payslips and payroll records. Revenue can ask to see them, and you should hold on to them for at least six years.</p>

<h2>Would you rather hand it over?</h2>
<p>TaxRoots can register you as an employer and run payroll each pay period: payslips, Revenue submissions and the monthly statement. See <a href="/#services">our services</a> or <a href="/#check">get in touch</a>.</p>
`,
  },
  {
    slug: 'pension-tax-relief-limits-by-age',
    title: 'Pension tax relief in Ireland: how much you can put in at each age',
    seoTitle: 'Pension tax relief limits by age in Ireland',
    description: 'How much you can put into a pension with tax relief at each age in Ireland, the €115,000 earnings cap, PRSAs and AVCs, and claiming relief for last year.',
    tag: 'Reliefs',
    date: '2026-11-01',
    excerpt: 'Pension contributions get relief at your highest rate of tax, up to a limit that rises with age. The limits, a worked example and how to claim relief for last year.',
    photo: 'service-elderly-couple.jpg',
    alt: 'Older couple sharing an affectionate moment on a windswept beach',
    related: ['pension-support', 'paye-tax-review'],
    sources: ['S3', 'S44', 'S67', 'S68'],
    body: `
<p>Paying into a pension is one of the few ways to get tax relief at 40% in Ireland. The catch is that there’s a yearly limit, and it depends on your age.</p>
<div class="note">This is general information about tax relief, not financial or pension advice. For advice on which pension product suits you, talk to a qualified financial adviser.</div>

<h2>How the relief works</h2>
<p>Your own contributions to a pension are deducted from your income before income tax is worked out, so you get relief at your <strong>highest rate</strong>: 20% or 40%. They don’t reduce USC or PRSI (${a('S3', 'Revenue: USC')}).</p>

<h2>The limits by age</h2>
<p>The most you can get relief on each year is a percentage of your earnings (${a('S44', 'Revenue: relief limits')}):</p>
<div class="tbl"><table>
<thead><tr><th scope="col">Your age in the year</th><th scope="col">% of earnings</th></tr></thead>
<tbody>
<tr><td>Under 30</td><td>15%</td></tr>
<tr><td>30 to 39</td><td>20%</td></tr>
<tr><td>40 to 49</td><td>25%</td></tr>
<tr><td>50 to 54</td><td>30%</td></tr>
<tr><td>55 to 59</td><td>35%</td></tr>
<tr><td>60 or over</td><td>40%</td></tr>
</tbody></table></div>
<p>Earnings above <strong>€115,000</strong> a year are ignored, so that’s the ceiling the percentages apply to. Your employer’s contributions don’t count towards your limit.</p>

<h2>A worked example</h2>
<p>This is our own illustration. Aoife is 35, single, and earns €60,000 in 2026. Her limit is 20%, so she can get relief on up to €12,000 of contributions. She pays €6,000 into her pension.</p>
<div class="tbl rows"><table>
<thead><tr><th scope="col">Step</th><th scope="col">Amount</th></tr></thead>
<tbody>
<tr><td>Income taxed at 40% (above the €44,000 band)</td><td>€16,000</td></tr>
<tr><td>Her €6,000 contribution comes off that top slice</td><td>€6,000 × 40%</td></tr>
<tr><td><strong>Income tax saved</strong></td><td><strong>€2,400</strong></td></tr>
</tbody></table></div>
<p>So the €6,000 going into her pension costs her about €3,600 in take-home pay. If all of her income were taxed at 20%, the saving would be €1,200.</p>

<h2>How you get the relief</h2>
<ul>
<li><strong>Through payroll:</strong> most workplace pension contributions, and PRSA or AVC contributions your employer deducts, get relief automatically through your pay.</li>
<li><strong>Paid directly:</strong> if you pay into a PRSA or AVC yourself, claim in myAccount under "Review your tax for the previous 4 years", then "Tax Credits and Reliefs". You’ll need the payment date, the amount, proof of payment, the type of pension and the policy number if you have it (${a('S67', 'Revenue: how to claim')}).</li>
</ul>

<h2>Claiming relief for last year</h2>
<p>A contribution paid after the end of a tax year can be treated as paid in that earlier year, as long as you pay it and elect to do so by <strong>31 October</strong> of the following year. The deadline is extended if you file and pay online (${a('S68', 'Revenue: PRSA and AVC')}). It’s a useful option if you have spare money after the year ends and paid 40% tax last year.</p>

<h2>Have you missed relief in past years?</h2>
<p>If you paid into a PRSA or AVC yourself and never claimed, you may be able to claim back up to four years, as with other reliefs. <strong>2022 closes on 31 December 2026.</strong> TaxRoots can check whether your contributions were relieved for each open year and claim anything missing. <a href="/#check">Ask us for a free check</a>.</p>
`,
  },
];

const words = (html: string) => html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;

export const ARTICLES: Article[] = raw
  .map((x) => ({ ...x, readingTime: Math.max(2, Math.round(words(x.body) / 220)) }))
  .sort((p, q) => q.date.localeCompare(p.date));

export const TAGS: Tag[] = ['Deadline', 'Credits', 'Reliefs', 'Budget', 'Guide', 'Business'];

export const fmtDate = (iso: string) =>
  new Date(iso + 'T12:00:00Z').toLocaleDateString('en-IE', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });

export const slugify = (s: string) =>
  s.toLowerCase().replace(/<[^>]+>/g, '').replace(/&[a-z]+;/g, '').replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/** Adds ids to every <h2> and returns the TOC. */
export function withToc(html: string) {
  const toc: { id: string; text: string }[] = [];
  const out = html.replace(/<h2>([\s\S]*?)<\/h2>/g, (_m, inner: string) => {
    const text = inner.replace(/<[^>]+>/g, '');
    const id = slugify(text);
    toc.push({ id, text });
    return `<h2 id="${id}">${inner}</h2>`;
  });
  return { html: out, toc };
}
