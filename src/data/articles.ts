// TaxRoots Insights: six articles. Facts from files/research/CONTENT.md (checked 30 October 2026).
// Budget 2027 items are announced only (Finance (No. 2) Bill 2026 pending) and are labelled as such.
// `related` = service slugs that must exist in SERVICE_LINKS (src/data/site.ts).

export type Tag = 'Deadline' | 'Credits' | 'Reliefs' | 'Budget' | 'Guide';

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

export const LAST_CHECKED = '30 October 2026';
export const LAST_CHECKED_ISO = '2026-10-30';

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
];

const words = (html: string) => html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;

export const ARTICLES: Article[] = raw
  .map((x) => ({ ...x, readingTime: Math.max(2, Math.round(words(x.body) / 220)) }))
  .sort((p, q) => q.date.localeCompare(p.date));

export const TAGS: Tag[] = ['Deadline', 'Credits', 'Reliefs', 'Budget', 'Guide'];

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
