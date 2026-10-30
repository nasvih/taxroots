// TaxRoots refund estimator: ONE config constant + pure calculation functions.
// Source: files/research/CONTENT.md section 8 (rates from sections 2.5–2.15). Last checked 30 Oct 2026.
// Never hard-code these figures in components: import ESTIMATOR / calculate() instead.

export type YearTable = Record<string, number>;

export const ESTIMATOR = {
  lastChecked: '2026-10-30',
  openYears: [2022, 2023, 2024, 2025], // static fallback; use openYears() which rolls over each 1 January
  deadlineNote: { year: 2022, date: '2026-12-31' },
  daysInYear: { '2022': 365, '2023': 365, '2024': 366, '2025': 365, '2026': 365 } as YearTable,
  standardRate: 0.2,
  higherRate: 0.4,
  cutOff: {
    single: { '2022': 36800, '2023': 40000, '2024': 42000, '2025': 44000, '2026': 44000 } as YearTable,
    singleParent: { '2022': 40800, '2023': 44000, '2024': 46000, '2025': 48000, '2026': 48000 } as YearTable,
    marriedOne: { '2022': 45800, '2023': 49000, '2024': 51000, '2025': 53000, '2026': 53000 } as YearTable,
    marriedTwoMaxIncrease: { '2022': 27800, '2023': 31000, '2024': 33000, '2025': 35000, '2026': 35000 } as YearTable,
  },
  personalCreditSingle: { '2022': 1700, '2023': 1775, '2024': 1875, '2025': 2000, '2026': 2000 } as YearTable,
  employeeCredit: { '2022': 1700, '2023': 1775, '2024': 1875, '2025': 2000, '2026': 2000 } as YearTable,
  rentCap: {
    single: { '2022': 500, '2023': 500, '2024': 1000, '2025': 1000, '2026': 1000 } as YearTable,
    couple: { '2022': 1000, '2023': 1000, '2024': 2000, '2025': 2000, '2026': 2000 } as YearTable,
  },
  tuition: {
    maxPerCourse: 7000,
    disregardFullTime: { '2022': 3000, '2023': 3000, '2024': 3000, '2025': 3000, '2026': 2350 } as YearTable,
    disregardPartTime: { '2022': 1500, '2023': 1500, '2024': 1500, '2025': 1500, '2026': 1175 } as YearTable,
    announcedFrom: 2026, // 2026+ disregard is "announced in Budget 2027" (tooltip)
  },
  remoteWorking: { share: 0.3, employerTaxFreePerDay: 3.2 },
  otherCredits: {
    homeCarer: { '2022': 1600, '2023': 1700, '2024': 1800, '2025': 1950, '2026': 1950 } as YearTable,
    singleParent: { '2022': 1650, '2023': 1650, '2024': 1750, '2025': 1900, '2026': 1900 } as YearTable,
    incapacitatedChild: { '2022': 3300, '2023': 3300, '2024': 3500, '2025': 3800, '2026': 3800 } as YearTable,
    dependentRelative: { '2022': 245, '2023': 245, '2024': 245, '2025': 305, '2026': 305 } as YearTable,
    ageSingle: 245,
    ageCouple: 490,
  },
  spcccExtraBand: 4000, // SPCCC adds €4,000 to the standard rate band
  feePercent: null as number | null, // CONFIRM with owner; null = no fee line shown
  feeVat: false, // CONFIRM
  // Flat Rate Expenses (CONTENT.md 2.14, Revenue list [S21]); € per year, same 2020–2026 unless a table is given.
  fre: [
    { id: 'nurse-supply-launder', label: 'Nurse: supply and launder own uniforms', amount: 733 },
    { id: 'nurse-supply', label: 'Nurse: supply but don’t launder uniforms', amount: 638 },
    { id: 'nurse-launder', label: 'Nurse: launder uniforms supplied to you', amount: 353 },
    { id: 'nurse-hospital', label: 'Nurse: hospital supplies and launders', amount: 258 },
    { id: 'nurse-assistant', label: 'Nursing assistant / nurses’ aide (supply and launder)', amount: 526 },
    { id: 'nurse-assistant-supply', label: 'Nursing assistant (supply, don’t launder)', amount: 440 },
    { id: 'nurse-assistant-launder', label: 'Nursing assistant (launder supplied uniforms)', amount: 234 },
    { id: 'nurse-assistant-hospital', label: 'Nursing assistant (hospital launders)', amount: 93 },
    { id: 'hospital-doctor', label: 'Hospital doctor, including consultants', amount: 695 },
    { id: 'teacher', label: 'Teacher (not a principal)', amount: 518 },
    { id: 'principal', label: 'School principal', amount: 608 },
    { id: 'teacher-part-time', label: 'Part-time teacher, not on full hours', amount: 279 },
    { id: 'lecturer', label: 'Third-level lecturer', amount: 518 },
    { id: 'shop-assistant', label: 'Shop assistant (supermarket, drapery, footwear)', amount: 121 },
    { id: 'chef', label: 'Hotel chef', amount: 97 },
    { id: 'waiter', label: 'Hotel waiter or waitress', amount: 80 },
    { id: 'hotel-manager', label: 'Hotel manager', amount: 191 },
    { id: 'bar', label: 'Bar staff', amount: 93 },
    { id: 'hospital-domestic', label: 'Hospital porter, cook, catering or domestic staff', amount: 353 },
    { id: 'pharmacist', label: 'Pharmacist', amount: 400 },
    { id: 'physio', label: 'Physiotherapist', amount: { '2022': 381, '2023': 410, '2024': 410, '2025': 410, '2026': 410 } as YearTable },
    { id: 'ot', label: 'Occupational therapist', amount: { '2022': 217, '2023': 410, '2024': 410, '2025': 410, '2026': 410 } as YearTable },
    { id: 'carpenter', label: 'Carpenter, joiner or cabinet maker', amount: 220 },
    { id: 'electrician', label: 'Electrician (building industry)', amount: 153 },
    { id: 'plumber', label: 'Plumber (non-welder)', amount: 177 },
    { id: 'firefighter-ft', label: 'Firefighter, full-time', amount: 272 },
    { id: 'firefighter-pt', label: 'Firefighter, part-time', amount: 407 },
    { id: 'cabin-crew', label: 'Airline cabin crew', amount: 64 },
    { id: 'home-help', label: 'Home help (HSE-employed)', amount: 256 },
  ] as { id: string; label: string; amount: number | YearTable }[],
} as const;

export type Status = 'single' | 'singleParent' | 'marriedOne' | 'marriedTwo';
export type YesNo = 'yes' | 'no' | 'unsure';

export interface Course { fee: number; fullTime: boolean }
export interface YearInput {
  status: Status;
  income?: number | null;            // approx gross employment income (combined for couples)
  lowerEarnerIncome?: number | null; // married, two incomes
  answer40?: YesNo;                  // used when income is blank; unsure = 20%
  rent?: number;
  rentCouple?: boolean;
  medical?: number;
  nursingHome?: number;
  wfhDays?: number;
  wfhBills?: number;
  wfhAllowancePerDay?: number;
  job?: string;                      // FRE id, '' / 'other' = none
  freOnCertificate?: YesNo;
  courses?: Course[];
  homeCarer?: boolean;
  singleParentCredit?: boolean;
  incapacitatedChildren?: number;
  dependentRelative?: boolean;
  age65?: boolean;
  taxPaid?: number | null;           // overrides the tax-cap estimate
}

export interface YearResult {
  year: number;
  rate: number;               // marginal rate used
  lines: { key: string; label: string; cents: number }[];
  rawCents: number;
  capCents: number | null;    // null = not capped (no data)
  capped: boolean;
  estimateCents: number;
}

const isMarried = (s: Status) => s === 'marriedOne' || s === 'marriedTwo';
const n = (v: unknown) => (typeof v === 'number' && isFinite(v) && v > 0 ? v : 0);
/** € → whole cents (round half up on the cent). */
export const cents = (euro: number) => Math.round(euro * 100 + 1e-7);

/** Look up a year table; falls back to the nearest earlier year (then the latest) if a year is missing. */
export function pick(t: YearTable, y: number): number {
  if (t[String(y)] != null) return t[String(y)];
  const ys = Object.keys(t).map(Number).sort((a, b) => a - b);
  const earlier = ys.filter((k) => k <= y);
  return t[String(earlier.length ? earlier[earlier.length - 1] : ys[ys.length - 1])];
}

/** Open review years = the four years before the current calendar year. */
export function openYears(now: Date = new Date()): number[] {
  const Y = now.getFullYear();
  return [Y - 4, Y - 3, Y - 2, Y - 1];
}
/** Deadline banner for the oldest open year, shown October–December. */
export function deadlineBanner(now: Date = new Date()): { year: number; date: string } | null {
  if (now.getMonth() < 9) return null;
  const year = openYears(now)[0];
  return { year, date: `${year + 4}-12-31` };
}

export function freAmount(job: string | undefined, y: number): number {
  const f = ESTIMATOR.fre.find((x) => x.id === job);
  if (!f) return 0;
  return typeof f.amount === 'number' ? f.amount : pick(f.amount, y);
}

export function cutOffFor(inp: YearInput, y: number): number {
  const c = ESTIMATOR.cutOff;
  if (inp.status === 'marriedTwo') return pick(c.marriedOne, y) + Math.min(pick(c.marriedTwoMaxIncrease, y), n(inp.lowerEarnerIncome));
  return pick(c[inp.status], y);
}

export function marginalRate(inp: YearInput, y: number): number {
  const { standardRate: sr, higherRate: hr } = ESTIMATOR;
  if (n(inp.income) > 0) return n(inp.income) > cutOffFor(inp, y) ? hr : sr;
  return inp.answer40 === 'yes' ? hr : sr;
}

/** Calculate one year. All lines computed in euro, rounded to cents. */
export function calculateYear(y: number, inp: YearInput): YearResult {
  const E = ESTIMATOR;
  const sr = E.standardRate;
  const m = marginalRate(inp, y);
  const lines: YearResult['lines'] = [];
  const add = (key: string, label: string, euro: number) => { const c = cents(euro); if (c > 0) lines.push({ key, label, cents: c }); };

  // 1. Rent Tax Credit
  add('rent', 'Rent Tax Credit', Math.min(n(inp.rent) * sr, pick(inp.rentCouple ? E.rentCap.couple : E.rentCap.single, y)));
  // 2. Health expenses (20%) + nursing home (marginal)
  add('medical', 'Medical and dental expenses', n(inp.medical) * sr);
  add('nursing', 'Nursing home fees', n(inp.nursingHome) * m);
  // 3. Remote Working Relief
  const D = n(inp.wfhAllowancePerDay) * n(inp.wfhDays);
  const allowable = Math.max(0, (n(inp.wfhBills) * n(inp.wfhDays)) / pick(E.daysInYear, y) - D) * E.remoteWorking.share;
  add('rwr', 'Remote Working Relief', cents(allowable) / 100 * m);
  // 4. Flat Rate Expense
  if (inp.freOnCertificate !== 'yes') add('fre', 'Flat Rate Expense', freAmount(inp.job, y) * m);
  // 5. Tuition fees
  const courses = (inp.courses || []).filter((c) => n(c.fee) > 0);
  if (courses.length) {
    const qualifying = courses.reduce((s, c) => s + Math.min(n(c.fee), E.tuition.maxPerCourse), 0);
    const disregard = courses.some((c) => c.fullTime) ? pick(E.tuition.disregardFullTime, y) : pick(E.tuition.disregardPartTime, y);
    add('tuition', 'Tuition fees relief', Math.max(0, qualifying - disregard) * sr);
  }
  // 6. Other credits (only if ticked)
  const o = E.otherCredits;
  if (inp.homeCarer) add('homeCarer', 'Home Carer Tax Credit', pick(o.homeCarer, y));
  if (inp.singleParentCredit) {
    add('spccc', 'Single Person Child Carer Credit', pick(o.singleParent, y));
    if (m === E.higherRate) add('spcccBand', 'Single parent rate band (extra €4,000 at 20%)', E.spcccExtraBand * (E.higherRate - sr));
  }
  if (n(inp.incapacitatedChildren) > 0) add('icc', 'Incapacitated Child Tax Credit', pick(o.incapacitatedChild, y) * Math.floor(n(inp.incapacitatedChildren)));
  if (inp.dependentRelative) add('dr', 'Dependent Relative Tax Credit', pick(o.dependentRelative, y));
  if (inp.age65) add('age', 'Age Tax Credit', isMarried(inp.status) ? o.ageCouple : o.ageSingle);

  const rawCents = lines.reduce((s, l) => s + l.cents, 0);

  // Cap at income tax paid
  let capCents: number | null = null;
  if (n(inp.taxPaid) > 0) capCents = cents(n(inp.taxPaid));
  else if (!isMarried(inp.status) && n(inp.income) > 0) {
    const inc = n(inp.income); const cut = cutOffFor(inp, y);
    const tax = sr * Math.min(inc, cut) + E.higherRate * Math.max(0, inc - cut) - pick(E.personalCreditSingle, y) - pick(E.employeeCredit, y);
    capCents = cents(Math.max(0, tax));
  }
  const estimateCents = capCents == null ? rawCents : Math.min(rawCents, capCents);
  return { year: y, rate: m, lines, rawCents, capCents, capped: capCents != null && rawCents > capCents, estimateCents };
}

export interface Result { years: YearResult[]; totalCents: number; displayEuro: number; coupleUncapped: boolean }

/** Total across years. displayEuro = total rounded DOWN to the nearest €10. */
export function calculate(years: number[], inputFor: (y: number) => YearInput): Result {
  const rs = years.map((y) => calculateYear(y, inputFor(y)));
  const totalCents = rs.reduce((s, r) => s + r.estimateCents, 0);
  return {
    years: rs,
    totalCents,
    displayEuro: Math.floor(totalCents / 1000) * 10,
    coupleUncapped: rs.some((r) => r.capCents == null && r.rawCents > 0 && isMarried(inputFor(r.year).status)),
  };
}

export const euro = (c: number, dp = 2) => '€' + (c / 100).toLocaleString('en-IE', { minimumFractionDigits: dp, maximumFractionDigits: dp });
