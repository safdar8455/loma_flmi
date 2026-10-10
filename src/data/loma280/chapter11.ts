import { Question } from '../../types';

export const chapter11Questions: Question[] = [
  {
    id: 1,
    lo: "11A",
    question: "Miko Yamata is retiring at 60 but won't receive employer pension benefits until 65. She buys a deferred annuity specifically to provide income for only those five 'gap' years. Which payout option did Miko choose?",
    options: ["Life only annuity", "Fixed period annuity", "Joint and survivor annuity", "Life income with refund annuity"],
    answer: 1,
    explanation: "A fixed period annuity (or annuity certain) provides payments for a specified period of time. It is ideal for filling temporary income gaps."
  },
  {
    id: 2,
    lo: "11A",
    question: "Isabel Loyola tells her insurer she wants to receive exactly $1,000 every month from her $55,000 annuity until the money runs out. This is an example of which payout option?",
    options: ["Fixed amount annuity", "Lump-sum distribution", "Fixed period annuity", "Life income annuity"],
    answer: 0,
    explanation: "Under the fixed amount option, the owner specifies the payment amount, and the insurer calculates how long the funds will last based on interest and principal."
  },
  {
    id: 3,
    lo: "11A",
    question: "Gabriel Long purchases a 'life only' annuity at age 65. If Gabriel dies just two years later, what happens to the remaining principal in the contract?",
    options: ["It is used to pay for his funeral expenses", "It is paid to his beneficiary", "The insurer has no further liability and keeps the remaining funds", "It is refunded to his estate"],
    answer: 2,
    explanation: "A life only annuity (straight life) provides payments only as long as the annuitant lives. There are no survivor or refund benefits after death."
  },
  {
    id: 4,
    lo: "11A",
    question: "Lawrence and Natasha, a retired couple, want an annuity that guarantees a check every month as long as *at least one* of them is still alive. They should purchase a:",
    options: ["Fixed period annuity", "Refund annuity", "Joint and survivor annuity", "Life only annuity"],
    answer: 2,
    explanation: "A joint and survivor annuity continues payments until the last of two or more named annuitants dies."
  },
  {
    id: 5,
    lo: "11A",
    question: "Blanche Bessett has a 'life income with 10-year period certain' annuity. If Blanche dies 7 years after starting the payout, who receives the remaining payments?",
    options: ["Her named beneficiary, for the remaining 3 years", "The insurer", "The state government", "No one; payments stop"],
    answer: 0,
    explanation: "The 'period certain' guarantee ensures that if the annuitant dies early, the beneficiary receives the remainder of that specific period's payments."
  },
  {
    id: 6,
    lo: "11A",
    question: "Harry Benedict paid $150,000 for a 'life income with refund' annuity. He died after receiving $60,000 in payments. What is the amount his beneficiary, Dorothy, is entitled to?",
    options: ["$150,000", "$60,000", "$90,000", "Zero"],
    answer: 2,
    explanation: "A refund annuity guarantees that at least the purchase price is paid out. Dorothy receives the difference ($150k - $60k = $90k)."
  },
  {
    id: 7,
    lo: "11A",
    question: "Which of the following describes a 'lump-sum distribution' for a deferred annuity?",
    options: ["The total accumulated value paid in one single payment", "A series of monthly payments for life", "An extra payment made upon the death of the annuitant", "A guaranteed interest rate for 10 years"],
    answer: 0,
    explanation: "A lump-sum distribution terminates the contract by paying out the entire value at once."
  },
  {
    id: 8,
    lo: "11B",
    question: "Kishan Halwai's variable annuity has a Guaranteed Minimum Death Benefit (GMDB) rider. At his death, the accumulated value is $300,000, but he had paid $500,000 in premiums. What will the beneficiary receive?",
    options: ["$300,000", "$800,000", "$200,000", "$500,000"],
    answer: 3,
    explanation: "A GMDB usually guarantees the higher of premiums paid or the current value if the insured dies during the accumulation period."
  },
  {
    id: 9,
    lo: "11B",
    question: "Which 'Guaranteed Living Benefit' (GLB) allows a contract owner to take withdrawals for life without annuitizing, even if the account value hit zero?",
    options: ["GLWB", "GMWB", "GMIB", "GMAB"],
    answer: 0,
    explanation: "The Guaranteed Lifetime Withdrawal Benefit (GLWB) is the most popular rider, allowing lifetime withdrawals regardless of account depletion."
  },
  {
    id: 10,
    lo: "11B",
    question: "A Guaranteed Minimum Income Benefit (GMIB) rider typically requires the owner to wait a certain number of years before annuitizing. This is known as the:",
    options: ["Conversion window", "Waiting period", "Surrender period", "Blackout period"],
    answer: 1,
    explanation: "The GMIB rider generally requires the contract to be in force for a specific waiting period before the guaranteed floor can be used to annuitize."
  },
  {
    id: 11,
    lo: "11C",
    question: "A 'payout factor' used by insurers to determine annuity payments represents the amount of payment per:",
    options: ["Year of life expectancy", "$100 of premium", "$10,000 of insurer assets", "$1,000 of premium or accumulated value"],
    answer: 3,
    explanation: "Payout factors are standardized as the dollar amount paid per $1,000 of the value being annuitized."
  },
  {
    id: 12,
    lo: "11C",
    question: "Trey Lee, age 65, is looking at SPIA payout factors. All other factors being equal, why is the 'Life Only' factor higher than the 'Life with 10-Year Period Certain' factor?",
    options: ["The Life Only option carries more risk for the annuitant of losing principal", "Women live longer than men", "The law requires Life Only to pay more", "The insurer charges more fees for Life Only"],
    answer: 0,
    explanation: "Guarantees (like period certain or refunds) cost money. The more guarantees added, the lower the monthly payment amount will be."
  },
  {
    id: 13,
    lo: "11C",
    question: "For a fixed SPIA, which of the following would result in a LARGER monthly annuity payment for the same premium amount?",
    options: ["A longer guaranteed payout period", "A younger annuitant", "A female annuitant", "A higher estimated rate of return by the insurer"],
    answer: 3,
    explanation: "Higher interest/return assumptions by the insurer translate into higher payouts for the owner."
  },
  {
    id: 14,
    lo: "11D",
    question: "Emma Maier is annuitizing her Fixed Deferred Annuity (FDA). The insurer uses a formula: (Accumulated Value ÷ 1,000) × Payout Factor. If her value is $300,000 and the factor is $4.27, what is her monthly check?",
    options: ["$3,000", "$1,281", "$427", "$4,270"],
    answer: 1,
    explanation: "(300,000 / 1,000) = 300. 300 * $4.27 = $1,281."
  },
  {
    id: 15,
    lo: "11D",
    question: "Todd Lovett annuitized his variable annuity and chose 'variable' payments. His accumulation units were converted into __________ units.",
    options: ["Annuity", "Benefit", "Premium", "Settlement"],
    answer: 0,
    explanation: "Upon annuitization of a variable contract for variable payments, accumulation units are converted into a fixed number of annuity units."
  },
  {
    id: 16,
    lo: "11D",
    question: "Todd has 650 total annuity units across three subaccounts. While the *number* of units stays fixed, why does the dollar amount of his monthly check change?",
    options: ["The insurer changes the fees every month", "The value of each annuity unit fluctuates daily based on investment performance", "Todd is getting older", "Federal law requires checks to change"],
    answer: 1,
    explanation: "The payment amount is (Fixed Number of Units) x (Fluctuating Unit Value), causing the check size to vary."
  },
  {
    id: 17,
    lo: "11E",
    question: "Which fee is a periodic charge that covers general expenses like account statements and is often waived if the account value is over $50,000?",
    options: ["M&E charge", "Contract maintenance fee", "Surrender charge", "Front-end load"],
    answer: 1,
    explanation: "The contract fee (FDA) or contract maintenance fee (Variable) covers basic admin costs."
  },
  {
    id: 18,
    lo: "11E",
    question: "An insurer subtracts a percentage from every premium payment *before* applying it to the account value. This is a:",
    options: ["Front-end load", "Service fee", "Dividend", "Back-end load"],
    answer: 0,
    explanation: "Front-end loads are acquisition costs deducted from the gross premium."
  },
  {
    id: 19,
    lo: "11E",
    question: "Why do more modern annuity contracts impose 'surrender charges' rather than 'front-end loads'?",
    options: ["Agents work for free in year one", "Surrender charges are higher", "The IRS forbids front-end loads", "Customers generally dislike upfront costs and prefer their full premium to start working immediately"],
    answer: 3,
    explanation: "Surrender charges allow 100% of the premium to be invested Day 1, which Is more attractive to buyers."
  },
  {
    id: 20,
    lo: "11F",
    question: "In the US, an annuity purchased outside of a tax-advantaged retirement plan or IRA is called a(n) __________ annuity.",
    options: ["Nonqualified", "Qualified", "Deferred", "Exempt"],
    answer: 0,
    explanation: "Nonqualified annuities are funded with after-tax dollars and aren't part of formal retirement plans."
  },
  {
    id: 21,
    lo: "11F",
    question: "How is a payment from a NONQUALIFIED annuity taxed in the United States?",
    options: ["Only the interest is taxed at point of death", "It is 100% tax-free", "Part is a tax-free return of premium, part is taxable earnings", "It is 100% taxable as income"],
    answer: 2,
    explanation: "Payments follow an 'exclusion ratio' - returning the original principal (already taxed) tax-free and taxing the growth."
  },
  {
    id: 22,
    lo: "11F",
    question: "For a NONQUALIFIED annuity, investment earnings are __________ until payments are received.",
    options: ["Taxed annually", "Tax-deferred", "Deducted from the principal", "Tax-exempt forever"],
    answer: 1,
    explanation: "Tax-deferral is a key benefit of annuities, allowing interest to grow without being taxed each year."
  },
  {
    id: 23,
    lo: "11G",
    question: "What is the primary difference between an individual retirement *account* and an individual retirement *annuity*?",
    options: ["There is no difference", "One is for rich people, one is not", "The individual retirement annuity is issued by an insurance company, whereas the account is a trust/custodial account at a bank", "Accounts are tax-free, annuities are not"],
    answer: 2,
    explanation: "The form (insurance contract vs. bank account) determines the name, though both are IRAs."
  },
  {
    id: 24,
    lo: "11G",
    question: "A Traditional IRA generally offers which tax advantage that a Roth IRA does NOT?",
    options: ["No contribution limits", "Annual contributions may be tax-deductible", "Guaranteed 10% interest", "Tax-free withdrawals for life"],
    answer: 1,
    explanation: "Traditional IRA contributions can often be deducted from taxable income in the year they are made."
  },
  {
    id: 25,
    lo: "11G",
    question: "A Roth IRA provides which main benefit to retirees?",
    options: ["There are no income limits to contribute", "Contributions are tax-deductible", "The government matches 5%", "Qualified withdrawals are tax-free"],
    answer: 3,
    explanation: "Roth IRAs are funded with after-tax dollars, making qualified withdrawals in retirement completely tax-free."
  },
  {
    id: 26,
    lo: "11G",
    question: "Withdrawals from an IRA made before age __________ typically incur a 10% tax penalty.",
    options: ["65", "50", "59 1/2", "70 1/2"],
    answer: 2,
    explanation: "59 1/2 is the standard age for penalty-free retirement withdrawals in the US."
  },
  {
    id: 27,
    lo: "11A",
    question: "Joint and survivor with 50% reduction: If the primary annuitant gets $2,000/mo and dies, how much does the survivor get?",
    options: ["$2,000", "$1,000", "Zero", "$500"],
    answer: 1,
    explanation: "A 50% reduction survivor annuity halves the payment amount upon the first death."
  },
  {
    id: 28,
    lo: "11B",
    question: "A Guaranteed Minimum Withdrawal Benefit (GMWB) rider differs from a GLWB because the GMWB:",
    options: ["Only works for fixed annuities", "Pays more money", "Is free", "Does not guarantee income for life"],
    answer: 3,
    explanation: "GMWB guarantees the return of the principal through withdrawals, but doesn't necessarily promise them for the annuitant's entire lifetime if funds run out."
  },
  {
    id: 29,
    lo: "11C",
    question: "Why does a 65-year-old MAN receive a larger monthly SPIA payment than a 65-year-old WOMAN?",
    options: ["Men pay higher fees", "Insurers are biased", "The law requires it", "Men have a shorter average life expectancy, so the insurer expects to make fewer payments"],
    answer: 3,
    explanation: "Mortality tables show women live longer on average; therefore, their payouts are spread over more anticipated months, making each check smaller."
  },
  {
    id: 30,
    lo: "11E",
    question: "The M&E (Mortality and Expense) charge in a variable annuity is typically expressed as a percentage of:",
    options: ["The agent's commission", "The accumulated value", "The death benefit", "The gross premium"],
    answer: 1,
    explanation: "M&E charges are asset-based fees deducted from the account balance."
  },
  {
    id: 31,
    lo: "11F",
    question: "A 'qualified' annuity is used to fund which of the following?",
    options: ["A business savings account", "A child's piggy bank", "An employer-sponsored retirement plan or IRA", "A yacht purchase"],
    answer: 2,
    explanation: "Qualified refers to meeting IRS requirements for special retirement tax treatment."
  },
  {
    id: 32,
    lo: "11G",
    question: "Traditional IRA vs. Roth IRA: In which one are you paying the 'taxes on the seed' (upfront) to get a 'tax-free harvest' later?",
    options: ["Neither", "Traditional", "Both", "Roth"],
    answer: 3,
    explanation: "Roth IRAs require after-tax contributions (taxes on seed) to provide tax-free growth and withdrawals (harvest)."
  },
  {
    id: 33,
    lo: "11A",
    question: "If an annuitant dies before the end of a 'period certain' in a life income annuity, who gets the money?",
    options: ["The named beneficiary", "The insurer stops paying", "The payee's estate", "The primary beneficiary's spouse"],
    answer: 0,
    explanation: "The beneficiary steps in to receive the remaining guaranteed checks."
  },
  {
    id: 34,
    lo: "11B",
    question: "Which rider guarantees a minimum floor for the account value after a set number of years (e.g. 10), regardless of market crashes?",
    options: ["GLWB", "GMIB", "GMAB", "GMDB"],
    answer: 2,
    explanation: "The Guaranteed Minimum Accumulation Benefit (GMAB) protects the principal balance over time."
  },
  {
    id: 35,
    lo: "11A",
    question: "A 'Straight Life' annuity is another name for a __________ annuity.",
    options: ["10-year certain", "Variable", "Lump sum", "Life only"],
    answer: 3,
    explanation: "Straight life refers to payments ending exactly at death with no further obligations."
  },
  {
    id: 36,
    lo: "11C",
    question: "As an annuitant gets older, the payout factor for an immediate annuity generally __________.",
    options: ["Increases", "Stay the same", "Depends on the gender only", "Decreases"],
    answer: 0,
    explanation: "Older people have shorter life expectancies, so the insurer can afford to pay out more each month from the same lump sum."
  },
  {
    id: 37,
    lo: "11E",
    question: "The 'Fund Operating Expense' charge is found where?",
    options: ["In the insurer's annual report", "On the back of the policy", "In the prospectus for each subaccount's underlying fund", "In a local newspaper"],
    answer: 2,
    explanation: "Since these are costs of the specific mutual funds/investments, they are disclosed in the fund prospectus."
  },
  {
    id: 38,
    lo: "11G",
    question: "Which agency is responsible for collecting federal taxes and enforcing IRA regulations in the US?",
    options: ["LOMA", "SEC", "FINRA", "IRS"],
    answer: 3,
    explanation: "The Internal Revenue Service (IRS)."
  },
  {
    id: 39,
    lo: "11A",
    question: "Miko receives payments for exactly 60 months and then they stop. This was a:",
    options: ["Cash distribution", "Permanent refund", "5-year fixed period annuity", "5-year life annuity"],
    answer: 2,
    explanation: "60 months = 5 years of fixed period."
  },
  {
    id: 40,
    lo: "11E",
    question: "Imran Kahn's $4,800 withdrawal resulted in a surrender charge. This means he exceeded his __________ withdrawal limit.",
    options: ["Free", "Mandatory", "Tax-free", "Absolute"],
    answer: 0,
    explanation: "Contracts allow a 'free' amount (usually 10%) before charges kick in."
  },
  {
    id: 41,
    lo: "11A",
    question: "Is 'Distribution Period' a valid term for the payout phase?",
    options: ["Yes", "Only for Roth IRAs", "No", "Only for SPIAs"],
    answer: 0,
    explanation: "Payout, liquidation, and distribution period are all used."
  },
  {
    id: 42,
    lo: "11D",
    question: "If Willow annuitizes her variable annuity for FIXED payments, the insurer transfers money from the __________ to the __________ account.",
    options: ["General; Separate", "Agent; Owner", "Savings; Checking", "Separate; General"],
    answer: 3,
    explanation: "The insurer 'locks in' the value by moving it to the general account to support fixed guarantees."
  },
  {
    id: 43,
    lo: "11F",
    question: "Canada's tax laws for annuities are __________ favorable than the United States' general rules during the accumulation phase.",
    options: ["More", "Less (Canada often taxes earnings during accumulation)", "Exactly as", "None of the above"],
    answer: 1,
    explanation: "The text notes Canada often taxes interest during the growth phase, unlike US deferral."
  },
  {
    id: 44,
    lo: "11G",
    question: "Tax-favored retirement savings vehicles that allow people with 'taxable compensation' to save are called:",
    options: ["Payout factors", "Annuity units", "Individual Retirement Arrangements (IRAs)", "Mutual funds"],
    answer: 2,
    explanation: "IRAs are specifically defined for people with earned income (taxable compensation)."
  },
  {
    id: 45,
    lo: "11B",
    question: "Guaranteed minimum death benefit riders (GMDBs) apply ONLY to which stage of the annuity?",
    options: ["Accumulation period", "Only after annuitization", "Payout period", "Only in Year 1"],
    answer: 0,
    explanation: "Once a contract is annuitized, the death benefit (if any) is determined by the payout option chosen (like refund or period certain), not the GMDB rider."
  },
  {
    id: 46,
    lo: "11D",
    question: "The value of an annuity unit in a subaccount usually changes:",
    options: ["Daily", "Never", "Yearly", "Monthly"],
    answer: 0,
    explanation: "Values fluctuate daily based on market performance."
  },
  {
    id: 47,
    lo: "11D",
    question: "In Todd's example, his second payment was $2,125, which was _________ than the first.",
    options: ["The same", "Lower", "Zero", "Higher"],
    answer: 1,
    explanation: "Because unit values fell, the second variable check was smaller."
  },
  {
    id: 48,
    lo: "11E",
    question: "Surrender charges usually __________ over time.",
    options: ["Disappear after 1 year", "Decrease", "Increase", "Vibrate"],
    answer: 1,
    explanation: "They grade down (level off at 0%) over several years."
  },
  {
    id: 49,
    lo: "11B",
    question: "Benefit Base is used to calculate:",
    options: ["Premium rates", "Surrender fees", "Monthly payment guarantees (GMIB, GLWB)", "Agent bonuses"],
    answer: 2,
    explanation: "Rider guarantees look at the 'Benefit Base' rather than the fluctuating cash balance."
  },
  {
    id: 50,
    lo: "11C",
    question: "The less FREQUENTLY annuity payments are made (e.g. Annual vs Monthly), each check will be:",
    options: ["Zero", "The same", "Smaller", "Larger"],
    answer: 3,
    explanation: "Insurer earns more interest and has fewer admin costs for annual checks, so they can pay more in the aggregate check."
  },
  {
    id: 51,
    lo: "11G",
    question: "Roth IRAs have __________ limits to qualify to contribute.",
    options: ["Income", "Age", "Health", "Job"],
    answer: 0,
    explanation: "High earners may be restricted from contributing to a Roth IRA."
  },
  {
    id: 52,
    lo: "11E",
    question: "Cynthia paid $100k, surrendered in Year 2 (6% fee). She lost $6,000 to the insurer. This money compensates for:",
    options: ["Acquisition, issue, and sales costs", "Inflation", "Taxes", "Profit"],
    answer: 0,
    explanation: "Insurers use these fees to recover the heavy upfront costs of establishing the contract."
  },
  {
    id: 53,
    lo: "11A",
    question: "Annuity payout options are also known as __________ options.",
    options: ["Surrender", "Payout", "Purchase", "Benefit"],
    answer: 1,
    explanation: "Used interchangeably in contracts."
  },
  {
    id: 54,
    lo: "11F",
    question: "Qualified annuities are taxed in accordance with:",
    options: ["Fixed rates of 20%", "The insurer's board", "The tax laws applying to the retirement plan/IRA they fund", "State lottery laws"],
    answer: 2,
    explanation: "The plan's status (401k, IRA, etc.) dictates the taxation rules."
  },
  {
    id: 55,
    lo: "11A",
    question: "With a life only annuity, who is the 'risk bearer' regarding how long the payments continue?",
    options: ["The government", "The insurer", "The beneficiary", "The annuitant"],
    answer: 3,
    explanation: "The annuitant takes the risk that they might die early and lose their principal."
  },
  {
    id: 56,
    lo: "11D",
    question: "Formula for variable check: (Fixed Number of Units) x (Current __________).",
    options: ["Accumulation Unit Value", "Annuity Unit Value", "Interest Rate", "Payout Factor"],
    answer: 1,
    explanation: "Annuity units are for the payout phase."
  },
  {
    id: 57,
    lo: "11F",
    question: "Do nonqualified annuities have annual contribution limits?",
    options: ["No, they typically have no limit other than what the insurer allows", "Only in California", "Only for people over 50", "Yes, set by the IRS"],
    answer: 0,
    explanation: "Nonqualified products aren't IRA-capped, permitting large investments."
  },
  {
    id: 58,
    lo: "11G",
    question: "A bank 'custodial account' for retirement is a(n):",
    options: ["Variable annuity", "Settlement plan", "Individual retirement annuity", "Individual retirement account"],
    answer: 3,
    explanation: "Account = Bank/Broker; Annuity = Insurance."
  },
  {
    id: 59,
    lo: "11A",
    question: "Life income with refund is and guarantees at least the __________ will be paid.",
    options: ["Accumulated value", "Purchase price", "Face amount", "Dividend"],
    answer: 1,
    explanation: "Basic definition of the refund guarantee."
  },
  {
    id: 60,
    lo: "11C",
    question: "For FIXED period and FIXED amount annuities, payout factors DO NOT take into account:",
    options: ["Mortality (life expectancy)", "Interest rates", "Taxes", "Admin fees"],
    answer: 0,
    explanation: "Since these options pay for a set time/amount regardless of how long anyone lives, mortality is irrelevant."
  },
  {
    id: 61,
    lo: "11E",
    question: "An insurer charges a flat $20 for every 'extra' withdrawal. This is a:",
    options: ["Service fee", "Surrender charge", "Load", "Maintenance fee"],
    answer: 0,
    explanation: "Service fees cover specific transaction requests."
  },
  {
    id: 62,
    lo: "11G",
    question: "Qualified distributions from a Roth IRA are tax-free if the account has been open for 5 years and the owner is __________.",
    options: ["In a lower tax bracket", "59 1/2 or older", "Dying", "Retired"],
    answer: 1,
    explanation: "Standard Roth rule for tax-free status."
  },
  {
    id: 63,
    lo: "11B",
    question: "GMIB vs GLWB: Which one REQUIRES full annuitization (conversion to life income) to use the guarantee?",
    options: ["GLWB", "Both", "Neither", "GMIB"],
    answer: 3,
    explanation: "GMIB (Minimum Income) requires annuitization; GLWB (Lifetime Withdrawal) does NOT require annuitization."
  },
  {
    id: 64,
    lo: "11D",
    question: "Variable immediate annuity uses the __________ as a substitute for accumulated value in the payout formula.",
    options: ["Last check amount", "Cash value of a life policy", "Interest rate", "Lump-sum premium payment"],
    answer: 3,
    explanation: "Since there was no growth phase, the premium is the starting principal."
  },
  {
    id: 65,
    lo: "11F",
    question: "Tax-deferral on earnings usually ends when?",
    options: ["Only if the insurer goes bankrupt", "After 10 years", "When payments are received from the annuity", "When the owner dies"],
    answer: 2,
    explanation: "Tax is paid upon distribution."
  },
  {
    id: 66,
    lo: "11G",
    question: "IRA assets accounted for __________ percent of all retirement assets in 2014.",
    options: ["66%", "90%", "5%", "30%"],
    answer: 3,
    explanation: "Refers to the stats on page 11.2."
  },
  {
    id: 67,
    lo: "11A",
    question: "Is 'Lump-sum distribution' available as a payout option for immediate annuities?",
    options: ["No, it only applies to deferred annuities", "Only for variables", "Only in divorce", "Yes"],
    answer: 0,
    explanation: "Immediate annuities are *born* from a lump sum to create income; a lump sum payout would defeat the purpose (though deferred owners can take it instead of annuitizing)."
  },
  {
    id: 68,
    lo: "11C",
    question: "Gender impacts payouts for which options?",
    options: ["Fixed period", "Fixed amount", "lump-sum distributions", "Life income options"],
    answer: 3,
    explanation: "Only options involving life contingencies (how long someone might live) use gender-based mortality data."
  },
  {
    id: 69,
    lo: "11E",
    question: "Asset-based fees (M&E) result in larger charges as the account value __________.",
    options: ["Stays same", "Grows", "Is annuitized", "Shrinks"],
    answer: 1,
    explanation: "1% of $100k is more than 1% of $10k."
  },
  {
    id: 70,
    lo: "11G",
    question: "Can an individual retirement annuity be a 'Variable Indexed' annuity?",
    options: ["No, only traditional", "Only for group plans", "No, only fixed", "Yes, any of the common annuity types can be used as an IRA vehicle"],
    answer: 3,
    explanation: "An IRA is a tax shell that can hold almost any annuity type."
  },
  {
    id: 71,
    lo: "11A",
    question: "Period certain for life income can be chosen by the owner, usually spanning __________ years.",
    options: ["5 or 10", "The life of the spouse", "40 to 50", "1 to 2"],
    answer: 0,
    explanation: "5-10 years are standard 'period certain' guarantees."
  },
  {
    id: 72,
    lo: "11D",
    question: "In variable annuities, fixed numbers of units are to variable payouts as __________ are to accumulation values.",
    options: ["Premiums", "Surrender charges", "Accumulation units", "Dividends"],
    answer: 2,
    explanation: "Analogous units for the two phases."
  },
  {
    id: 73,
    lo: "11F",
    question: "Dividing a check into 'return of premium' and 'taxable earnings' uses which ratio?",
    options: ["Surrender ratio", "Exclusion ratio", "Mortality ratio", "Annuitization ratio"],
    answer: 1,
    explanation: "Exclusion ratio = (Investment in contract / Expected return)."
  },
  {
    id: 74,
    lo: "11G",
    question: "Tax-deductible contributions: pay taxes __________.",
    options: ["Never", "Now", "Later (upon withdrawal)", "Twice"],
    answer: 2,
    explanation: "Deductions defer the tax bill to the future."
  },
  {
    id: 75,
    lo: "11A",
    question: "Annuity payoff 'liquidation' literally means __________.",
    options: ["Insuring for death only", "Losing all value", "Turning assets into a flow of cash", "Freezing money"],
    answer: 2,
    explanation: "Concept of converting a pool into a stream."
  },
  {
    id: 76,
    lo: "11B",
    question: "The 'most popular' GLB for variable/indexed annuities is the __________.",
    options: ["GLWB", "GMWB", "GMAB", "GMIB"],
    answer: 0,
    explanation: "GLWB provides flexible lifetime income."
  },
  {
    id: 77,
    lo: "11C",
    question: "A man's payment is larger because his average life expectancy is __________ than a woman's.",
    options: ["Identical", "Longer", "Shorter", "Undefined"],
    answer: 2,
    explanation: "Basic actuarial fact used in pricing."
  },
  {
    id: 78,
    lo: "11E",
    question: "CDSC stands for:",
    options: ["Canadian Deferred Security Charge", "Current Deferred Sales Charge", "Contingent Deferred Sales Charge", "Corporate Dividend Settlement Clause"],
    answer: 2,
    explanation: "Standard term for surrender charges."
  },
  {
    id: 79,
    lo: "11G",
    question: "Traditional IRA - 'Yes' for annual contribution limits. Roth IRA - __________.",
    options: ["No", "Yes", "Only if rich", "Only for children"],
    answer: 1,
    explanation: "Both types have annual funding caps."
  },
  {
    id: 80,
    lo: "11A",
    question: "Payout choice for deferred annuity: done at __________.",
    options: ["Only by beneficiary", "Only at age 65", "Any time *before* annuitization", "Time of application"],
    answer: 2,
    explanation: "Owners keep flexibility until they pull the trigger to annuitize."
  },
  {
    id: 81,
    lo: "11B",
    question: "In Kishan's death benefit example, his accumulated value was $300k. If he had no GMDB, Dorothy would likely get:",
    options: ["$0", "A monthly check", "$300,000", "$500,000"],
    answer: 2,
    explanation: "Standard death benefit is the current account value; riders boost it to the premium floor."
  },
  {
    id: 82,
    lo: "11D",
    question: "To get the first monthly payment, the insurer multiplies units by the __________ value.",
    options: ["Estimate", "Current (on payment date)", "Historical", "Purchase"],
    answer: 1,
    explanation: "Real-time market valuation."
  },
  {
    id: 83,
    lo: "11F",
    question: "Investment in the contract for a nonqualified annuity = __________.",
    options: ["Accumulated value", "Gains", "Total premiums paid", "Interest"],
    answer: 2,
    explanation: "It's the amount you already paid taxes on."
  },
  {
    id: 84,
    lo: "11G",
    question: "Age for early withdrawal penalty: __________.",
    options: ["21", "65", "50", "59 1/2"],
    answer: 3,
    explanation: "US tax law trigger."
  },
  {
    id: 85,
    lo: "11A",
    question: "Life Income with 10-Year Certain. Annuitant dies in Year 15. Beneficiary gets:",
    options: ["Zero", "Principal refund", "Remaining payments", "$1,000 flat"],
    answer: 0,
    explanation: "Since the annuitant outlived the 10-year guarantee, payments stop at death."
  },
  {
    id: 86,
    lo: "11B",
    question: "Riders 'increase risk' for the insurer, so they charge __________.",
    options: ["Less", "Nothing", "Extra", "Only at death"],
    answer: 2,
    explanation: "Riders are optional paid features."
  },
  {
    id: 87,
    lo: "11C",
    question: "Higher estimated rate of return = __________ payment.",
    options: ["Fixed", "Smaller", "Uncertain", "Larger"],
    answer: 3,
    explanation: "Earnings help fund the check size."
  },
  {
    id: 88,
    lo: "11E",
    question: "Variable annuity subaccount 'Operating Expense' covers __________ expenses.",
    options: ["Advisory and Administrative", "IRA", "Death", "Sales"],
    answer: 0,
    explanation: "Specifically for fund management."
  },
  {
    id: 89,
    lo: "11G",
    question: "Individual Retirement Arrangement (IRA) - acronym refers to accounts AND __________.",
    options: ["Acts", "Agents", "Annuities", "Assets"],
    answer: 2,
    explanation: "Both vehicles share the IRA tag."
  },
  {
    id: 90,
    lo: "11A",
    question: "Grant (beneficiary) receives payments for 3 years because Jocelyn had 10-year certain and died in Year __________.",
    options: ["15", "7", "10", "1"],
    answer: 1,
    explanation: "10-year guarantee - 7 years used = 3 years left for beneficiary."
  },
  {
    id: 91,
    lo: "11B",
    question: "GMIB vs GMWB: Minimum withdrawal vs. Minimum __________.",
    options: ["Death", "Income", "Sales", "Tax"],
    answer: 1,
    explanation: "Full names define the benefit."
  },
  {
    id: 92,
    lo: "11D",
    question: "Todd's Subaccount C unit value was $2.50. With 200 units, that part of his check was:",
    options: ["$200", "$2,500", "$500 ($2.5 x 200)", "$100"],
    answer: 2,
    explanation: "Basic multiplication of units."
  },
  {
    id: 93,
    lo: "11F",
    question: "Nonqualified earnings are taxable because: __________.",
    options: ["Canada says so", "Purchaser never paid income taxes on those specific gains", "The insurer is evil", "They are capital gains"],
    answer: 1,
    explanation: "Insurance growth is tax-deferred, not tax-exempt."
  },
  {
    id: 94,
    lo: "11G",
    question: "Can you contribute to a Roth IRA if you have no taxable income?",
    options: ["Yes", "Only if you were born in Canada", "Only if over 59 1/2", "No, you must have earned compensation"],
    answer: 3,
    explanation: "Compensation is a requirement for IRA eligibility."
  },
  {
    id: 95,
    lo: "11A",
    question: "Contractterminates after _________ distribution.",
    options: ["Refund", "Lump-sum", "Certain", "Monthly"],
    answer: 1,
    explanation: "Taking everything at once ends the contract."
  },
  {
    id: 96,
    lo: "11B",
    question: "Guarantees increase insurer __________ risk.",
    options: ["Sales", "Tax", "Employee", "Investment/Mortality"],
    answer: 3,
    explanation: "Giving floors increases the chance of insurer loss."
  },
  {
    id: 97,
    lo: "11C",
    question: "Longer guarantees = __________ payments.",
    options: ["Smaller", "Identical", "Zero", "Larger"],
    answer: 0,
    explanation: "Risk pooling cost."
  },
  {
    id: 98,
    lo: "11E",
    question: "Surrender charge 'declines over time' because the insurer has __________.",
    options: ["Lost hope", "Gained a new agent", "Run out of paper", "Recovered its upfront costs"],
    answer: 3,
    explanation: "Economic rationale for graded fees."
  },
  {
    id: 99,
    lo: "11G",
    question: "Traditional IRA withdrawals: usually __________.",
    options: ["Optional", "Tax-free", "Guaranteed", "Taxable as income"],
    answer: 3,
    explanation: "Distribution of deferred income is taxed."
  },
  {
    id: 100,
    lo: "11A",
    question: "Joint and survivor vs Life Only: Which one has a SHORTER payout expectancy (pooled)?",
    options: ["Fixed Period", "Life Only", "They are identical", "Joint and survivor"],
    answer: 1,
    explanation: "Probability of ONE person being alive is lower than the probability of at least one of TWO being alive."
  }
];
