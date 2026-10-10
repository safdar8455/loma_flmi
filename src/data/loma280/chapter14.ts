import { Question } from '../../types';

export const chapter14Questions: Question[] = [
  {
    id: 1,
    lo: "14A",
    question: "The Moonbeam Corporation failed to pay its group life insurance premium on the due date of January 1. The policy includes a 31-day grace period. If an insured employee dies on January 15, which of the following is true?",
    options: [
      "The claim will be denied because the premium was not paid.",
      "The claim will be paid because the policy remains in force during the grace period.",
      "The claim will be paid only if Moonbeam pays the premium before the funeral.",
      "The claim will be denied, but the insurer must refund all previous premiums."
    ],
    answer: 1,
    explanation: "As with individual life insurance, group life insurance coverage remains in force during the 30- or 31-day grace period."
  },
  {
    id: 2,
    lo: "14A",
    question: "Following the termination of Moonbeam Corporation's group life insurance plan for nonpayment of premiums after the grace period expired, what is Moonbeam's legal obligation regarding the grace period coverage?",
    options: [
      "Moonbeam has no further obligation once the policy terminates.",
      "Moonbeam must reinstate the policy immediately.",
      "Moonbeam must pay a penalty equal to 10% of the annual premium.",
      "Moonbeam is legally obligated to pay the premium for the coverage provided during the grace period."
    ],
    answer: 3,
    explanation: "Unlike individual insurance, the grace period provision in a group policy specifies that if the policy terminates for nonpayment, the group policyholder is legally obligated to pay the premium for coverage provided during that grace period."
  },
  {
    id: 3,
    lo: "14A",
    question: "Brandywine Corporation's group life insurance contract has been in force for four years and contains a two-year contestable period. John Finlaison, a newer employee, made material misrepresentations on a health questionnaire to qualify for a higher coverage limit. He died nine months later. In this case, the insurer:",
    options: [
      "Cannot contest the coverage because the master contract is older than two years.",
      "Can cancel the entire group contract for all employees due to John's fraud.",
      "Can contest the validity of Mr. Finlaison's coverage without contesting the validity of the master group contract.",
      "Must pay the claim because material misrepresentation is not allowed as a defense in group insurance."
    ],
    answer: 2,
    explanation: "An insurer can contest an individual group member's coverage on the grounds of material misrepresentation without contesting the validity of the master group contract itself, provided the individual contestability period hasn't expired."
  },
  {
    id: 4,
    lo: "14A",
    question: "In most standard group life insurance policies, who is typically NOT allowed to be named as the beneficiary?",
    options: [
      "The insured's children",
      "The insured's spouse",
      "The group policyholder (the employer)",
      "A charitable organization"
    ],
    answer: 2,
    explanation: "Insured group members generally have the right to name any beneficiary they choose, with the restriction that they may not name the group policyholder (employer) as beneficiary (except in group creditor life)."
  },
  {
    id: 5,
    lo: "14A",
    question: "Loretta stops working for her current employer and wants to keep her term life coverage. Her policy has a provision that allows her to continue her coverage under the group plan by paying the premium within 31 days. This is known as the:",
    options: [
      "Portability provision",
      "Entire contract provision",
      "Conversion privilege",
      "Waiver of premium benefit"
    ],
    answer: 0,
    explanation: "A portability provision allows a group insured whose coverage terminates for certain reasons to continue her coverage under the group plan, resulting in portable coverage."
  },
  {
    id: 6,
    lo: "14A",
    question: "When Kevin's group life insurance terminated due to his resignation, he exercised his right to change his group coverage into an individual permanent policy without providing evidence of insurability. This feature is the:",
    options: [
      "Portability provision",
      "Assignment provision",
      "Reinstatement provision",
      "Conversion privilege"
    ],
    answer: 3,
    explanation: "A conversion privilege allows a group insured whose coverage terminates to convert her group life insurance coverage to an individual life insurance policy, usually without presenting evidence of insurability."
  },
  {
    id: 7,
    lo: "14A",
    question: "In a voluntary group life insurance plan, Patricia's age was mistakenly reported as 45 when she was actually 35. Upon discovering this error after her death, how will the insurer most likely respond according to typical group life provisions?",
    options: [
      "They will adjust the death benefit to the amount the premiums would have purchased at the correct age.",
      "They will pay the benefit schedule amount and ignore the error because it's over two years old.",
      "They will deny the claim because the age was misstated on the application.",
      "They will retroactively adjust the amount of premium required for the coverage and refund any excess to the beneficiary."
    ],
    answer: 3,
    explanation: "In group life insurance, since the benefit amount is fixed by a schedule, the misstatement of age provision usually results in a retroactive adjustment of the premium and a refund or additional billing, rather than an adjustment of the benefit amount."
  },
  {
    id: 8,
    lo: "14A",
    question: "While several settlement options are generally available under group life insurance policies, the vast majority of death benefits are actually paid as a:",
    options: [
      "Interest option",
      "Lump sum",
      "Fixed period option",
      "Life income option"
    ],
    answer: 1,
    explanation: "The beneficiary of a group insured's coverage usually receives the death benefit in a lump sum."
  },
  {
    id: 9,
    lo: "14B",
    question: "Which of the following is the most common form of group life insurance currently issued?",
    options: [
      "Whole life insurance",
      "Universal life insurance",
      "Variable universal life insurance",
      "Yearly renewable term (YRT) insurance"
    ],
    answer: 3,
    explanation: "The majority of all group life insurance policies are yearly renewable term (YRT) insurance plans."
  },
  {
    id: 10,
    lo: "14B",
    question: "Karl Bernhard has $100,000 of group term life and $100,000 of group accidental death and dismemberment (AD&D) coverage. If Karl dies in an accident while on a family vacation, the total amount payable to his beneficiary is:",
    options: ["$300,000", "$100,000", "$200,000", "$50,000"],
    answer: 2,
    explanation: "Karl's beneficiary receives the basic life benefit ($100k) plus the AD&D benefit ($100k) because his death was caused by an accident. Total = $200,000."
  },
  {
    id: 11,
    lo: "14B",
    question: "In the Karl Bernhard scenario, if he also had $50,000 of business travel accident insurance and died in an accident while traveling for work, the total payout would be:",
    options: ["$250,000", "$150,000", "$300,000", "$200,000"],
    answer: 0,
    explanation: "He would receive the basic life ($100k), the AD&D ($100k), and the travel accident benefit ($50k) since he was on a business trip. Total = $250,000."
  },
  {
    id: 12,
    lo: "14B",
    question: "Participation levels in group cash value life insurance plans are generally much lower than in group term plans because:",
    options: [
      "Covered employees are usually required to pay a significant portion of the premium.",
      "The insurer doesn't permit more than 50% participation.",
      "They do not provide death benefits after retirement.",
      "They are considered illegal in some US states."
    ],
    answer: 0,
    explanation: "Because employees usually pay for most of the cost of cash value plans (which are more expensive than term), participation levels are typically lower than for employer-paid term plans."
  },
  {
    id: 13,
    lo: "14B",
    question: "Under a noncontributory group level premium whole life plan, if an employee leaves the group before retirement, any accumulated cash value generally belongs to the:",
    options: ["Employee", "State treasury", "Insurance company", "Employer"],
    answer: 3,
    explanation: "In a noncontributory plan (where the employer pays the entire premium), the accumulated cash value generally belongs to the employer."
  },
  {
    id: 14,
    lo: "14B",
    question: "Group universal life (UL) and group variable universal life (VUL) plans often function more like individual policies than typical group policies because:",
    options: [
      "The employer determines the subaccount investments for everyone.",
      "Each employee chooses the amount of premium she wishes to pay and the cash value depends on it.",
      "They are always mandatory for every employee.",
      "The employer typically pays all the premiums."
    ],
    answer: 1,
    explanation: "In group UL and VUL plans, employees typically choose their own premium amounts and investment subaccounts (for VUL), similar to individual policies."
  },
  {
    id: 15,
    lo: "14C",
    question: "In the United States, a qualified retirement plan must meet the requirements of which federal law designed to protect employee benefit plans?",
    options: [
      "Employee Retirement Income Security Act (ERISA)",
      "Affordable Care Act",
      "Social Security Act",
      "McCarran-Ferguson Act"
    ],
    answer: 0,
    explanation: "ERISA is the U.S. federal law designed to protect covered employees and their beneficiaries by ensuring that employee benefit plans meet specific requirements."
  },
  {
    id: 16,
    lo: "14C",
    question: "Which of the following is a tax benefit provide to sponsors of qualified retirement plans in the United States?",
    options: [
      "Tax-free dividends are paid to the plan sponsor each year.",
      "Employer contributions are not taxable to the employer.",
      "The employer can withdraw funds from the plan tax-free at any time.",
      "Employer contributions are considered a deductible business expense."
    ],
    answer: 3,
    explanation: "Employer contributions to a qualified plan are considered a business expense and are deductible from the employer’s current taxable income."
  },
  {
    id: 17,
    lo: "14C",
    question: "When investment earnings accrue in a qualified retirement plan, the taxes on those earnings are:",
    options: [
      "Paid annually by the employer.",
      "Waived completely for everyone involved.",
      "Deferred until the participant withdraws funds from the plan.",
      "Paid annually by the employee."
    ],
    answer: 2,
    explanation: "Investment earnings on plan contributions are allowed to accrue on a tax-deferred basis."
  },
  {
    id: 18,
    lo: "14D",
    question: "The detailed legal agreement that establishes the existence of a retirement plan and specifies the rights and obligations of various parties is the:",
    options: [
      "Summary plan description",
      "Employment contract",
      "Funding vehicle",
      "Plan document"
    ],
    answer: 3,
    explanation: "The plan document is a detailed legal agreement that establishes the retirement plan."
  },
  {
    id: 19,
    lo: "14D",
    question: "Peaberry Company's retirement plan states that employees must be 21 years old and have worked for one year before they can join. These conditions are known as:",
    options: [
      "Vesting requirements",
      "Settlement options",
      "Automatic enrollment features",
      "Eligibility requirements"
    ],
    answer: 3,
    explanation: "Age and service requirements are the most common types of eligibility requirements for retirement plans."
  },
  {
    id: 20,
    lo: "14D",
    question: "A company implements a policy where eligible employees are automatically enrolled in the retirement plan at a specific salary deferral rate unless they opt out. This is called:",
    options: [
      "Automatic enrollment",
      "Grace period enrollment",
      "Vesting enrollment",
      "Mandatory enrollment"
    ],
    answer: 0,
    explanation: "With automatic enrollment, eligible employees are enrolled in the plan at a specified salary deferral rate unless they choose otherwise."
  },
  {
    id: 21,
    lo: "14D",
    question: "The term used to describe when a plan participant is entitled to receive benefits under the plan even if they leave the company prior to retirement is:",
    options: ["Vesting", "Eligibility", "Annuitization", "Portability"],
    answer: 0,
    explanation: "Vesting requirements define when a plan participant is entitled to receive partial or full benefits even if he terminates employment."
  },
  {
    id: 22,
    lo: "14D",
    question: "Which of the following is true regarding the vesting of plan contributions?",
    options: [
      "Employee contributions vest only after 5 years.",
      "Employee contributions vest immediately.",
      "Neither employee nor employer contributions vest until age 65.",
      "Employer contributions vest immediately."
    ],
    answer: 1,
    explanation: "A plan participant’s right to receive benefits funded by his own contributions vests immediately."
  },
  {
    id: 23,
    lo: "14D",
    question: "A retirement plan where the employer bears the investment risk because it guarantees a specific retirement benefit amount to each participant is a:",
    options: [
      "Defined contribution plan",
      "401(k) plan",
      "Defined benefit plan",
      "Profit sharing plan"
    ],
    answer: 2,
    explanation: "A defined benefit plan specifies the benefit amount. The employer must fund the plan sufficiently to pay this amount, so the employer bears the investment risk."
  },
  {
    id: 24,
    lo: "14D",
    question: "In a defined contribution plan, which factor is Specified and Reasonably Certain?",
    options: [
      "The amount of the employer's contribution",
      "The amount of the participant's retirement benefits",
      "The rate of return on investments",
      "The exact date of the participant's death"
    ],
    answer: 0,
    explanation: "In a defined contribution plan, the sponsor's contributions are specified, but the final retirement benefit is uncertain and depends on investment performance."
  },
  {
    id: 25,
    lo: "14D",
    question: "The party responsible for overseeing the retirement plan's operation and ensuring it is managed in accordance with the plan document is the:",
    options: [
      "Plan administrator",
      "Actuary",
      "Plan sponsor",
      "Beneficiary"
    ],
    answer: 0,
    explanation: "The plan administrator is the party responsible for handling the administrative aspects and ensuring compliance with the plan document."
  },
  {
    id: 26,
    lo: "14D",
    question: "In the context of retirement plans, a 'funding vehicle' is:",
    options: [
      "The company's payroll department",
      "The method for paying out monthly checks",
      "A life insurance rider",
      "An arrangement for investing a retirement plan's assets (e.g., a group annuity)"
    ],
    answer: 3,
    explanation: "A funding vehicle is an arrangement for investing a retirement plan’s assets as the assets are accumulated."
  },
  {
    id: 27,
    lo: "14E",
    question: "The most common type of defined benefit plan provides a lifetime monthly income benefit called a:",
    options: ["Pension", "Dividend", "Refund", "MVA"],
    answer: 0,
    explanation: "A defined benefit pension plan provides participants with a lifetime monthly income benefit—known as a pension."
  },
  {
    id: 28,
    lo: "14E",
    question: "Which of the following is currently the most popular type of employer-sponsored retirement plan in the United States?",
    options: [
      "Defined benefit pension plan",
      "Employee stock ownership plan (ESOP)",
      "401(k) plan",
      "Profit sharing plan"
    ],
    answer: 2,
    explanation: "The 401(k) plan has become the most popular type of retirement plan in the United States."
  },
  {
    id: 29,
    lo: "14E",
    question: "When Jonathan contributes $7,000 of his $70,000 salary to a standard 401(k) plan, what is the immediate tax effect?",
    options: [
      "His taxable income for the year is reduced to $63,000.",
      "He receives a tax refund equal to $7,000.",
      "His taxable income for the year stays at $70,000.",
      "He must pay income tax on the $7,000 immediately."
    ],
    answer: 0,
    explanation: "Contributions to a standard 401(k) reduce current taxable income. $70,000 - $7,000 = $63,000."
  },
  {
    id: 30,
    lo: "14E",
    question: "A company that allows its employer to make discretionary contributions to employee retirement accounts based on company performance is using a:",
    options: [
      "Profit sharing plan",
      "Pension plan",
      "401(k) plan",
      "Credit union plan"
    ],
    answer: 0,
    explanation: "A profit sharing plan allows the plan sponsor to make discretionary contributions funded primarily from its profits."
  },
  {
    id: 31,
    lo: "14E",
    question: "In an Employee Stock Ownership Plan (ESOP), the contributions are invested primarily in:",
    options: [
      "Foreign currencies",
      "The employer's own stock",
      "Life insurance policies",
      "Government bonds"
    ],
    answer: 1,
    explanation: "An ESOP is a qualified plan in which employer contributions are invested primarily in the employer’s stock."
  },
  {
    id: 32,
    lo: "14E",
    question: "A 'SIMPLE' IRA is specifically designed to be a tax-advantaged retirement plan for:",
    options: [
      "Public school districts",
      "Small businesses with 100 or fewer employees",
      "State and local governments",
      "Large corporations with over 10,000 employees"
    ],
    answer: 1,
    explanation: "Savings incentive match plans for employees (SIMPLE) IRAs are for small businesses with 100 or fewer employees."
  },
  {
    id: 33,
    lo: "14E",
    question: "Which plan is typically used by non-profit organizations such as religious, charitable, and educational groups?",
    options: ["ESOP", "SEP IRA", "401(k) plan", "403(b) plan"],
    answer: 3,
    explanation: "403(b) plans are for tax-exempt organizations and public schools."
  },
  {
    id: 34,
    lo: "14E",
    question: "A deferred compensation plan established by a state or local government is a:",
    options: ["403(b) plan", "457(b) plan", "Pension plan", "401(k) plan"],
    answer: 1,
    explanation: "457(b) plans are deferred compensation plans established by a state or local government or a tax-exempt organization."
  },
  {
    id: 35,
    lo: "14F",
    question: "In the United States, nearly all workers are covered by this federal insurance program that provides monthly retirement income benefits:",
    options: ["CPP", "Social Security", "ERISA", "OAS"],
    answer: 1,
    explanation: "Social Security is the primary federal retirement program in the US."
  },
  {
    id: 36,
    lo: "14F",
    question: "Social Security retirement benefits generally become available starting at what age (though at a reduced amount)?",
    options: ["62", "55", "65", "70"],
    answer: 0,
    explanation: "These retirement benefits are available to covered individuals who are age 62 and older."
  },
  {
    id: 37,
    lo: "14F",
    question: "Which Canadian government-sponsored retirement plan is universal and provided to virtually all residents age 65 or older?",
    options: ["Quebec Pension Plan (QPP)", "Old Age Security (OAS)", "Canada Pension Plan (CPP)", "Social Security"],
    answer: 1,
    explanation: "The Old Age Security (OAS) Act is a universal public pension plan for Canadians age 65 and older."
  },
  {
    id: 38,
    lo: "14F",
    question: "The Canada Pension Plan (CPP) and the Quebec Pension Plan (QPP) are funded through:",
    options: [
      "Life insurance company dividends",
      "Compulsory contributions from employees, employers, and self-employed persons",
      "General tax revenues from Quebec only",
      "Federal income taxes only"
    ],
    answer: 1,
    explanation: "CPP and QPP benefits are funded through compulsory contributions from workers and employers."
  },
  {
    id: 39,
    lo: "14A",
    question: "If a group policyholder (employer) fails to pay a premium on time, the insurance remains in force for a certain period. During this period, is the insurer allowed to collect the premium for the coverage provided if the policy finally terminates?",
    options: [
      "Only in Canada.",
      "Only if multiple employees died.",
      "Yes, the policyholder is legally obligated to pay.",
      "No, the coverage was provided for free during that time."
    ],
    answer: 2,
    explanation: "In group life insurance, the policyholder is legally obligated to pay the premium for coverage during the grace period."
  },
  {
    id: 40,
    lo: "14A",
    question: "The '2-year contestable period' in a group life insurance policy usually refers to:",
    options: [
      "Two years until the employee is fully vested.",
      "Two years from the master contract issue date for the whole plan.",
      "Two years from the date an individual group insured's coverage becomes effective.",
      "Two years until the policy must be renewed."
    ],
    answer: 2,
    explanation: "Incontestability typically limits the contestability of an individual's coverage for 1-2 years from their effective date."
  },
  {
    id: 41,
    lo: "14B",
    question: "Accidental Death and Dismemberment (AD&D) benefits are attractive in group insurance primarily because:",
    options: [
      "They are mandatory by law.",
      "They guarantee retirement income.",
      "They never have exclusions.",
      "They have a low cost."
    ],
    answer: 3,
    explanation: "The low cost of AD&D benefits makes them an attractive addition to group insurance plans."
  },
  {
    id: 42,
    lo: "14B",
    question: "If an insured has basic life coverage of $50,000 and an AD&D rider of $50,000, and they die in a non-accidental heart attack, the beneficiary receives:",
    options: ["$50,000", "$0", "$100,000", "$25,000"],
    answer: 0,
    explanation: "Since the death was not accidental, only the basic term benefit is paid."
  },
  {
    id: 43,
    lo: "14C",
    question: "A 'qualified' plan in the US must meet requirements of ERISA. What does 'ERISA' stand for?",
    options: [
      "Essential Retirement Insurance Security Act",
      "Employment Retirement Individual Savings Account",
      "Employer Retirement Investment Savings Act",
      "Employee Retirement Income Security Act"
    ],
    answer: 3,
    explanation: "ERISA = Employee Retirement Income Security Act."
  },
  {
    id: 44,
    lo: "14D",
    question: "Peaberry Company's retirement plan document specifies that participants become 20% vested in employer contributions each year. How long until they are 100% vested?",
    options: ["At age 65", "5 years", "10 years", "1 year"],
    answer: 1,
    explanation: "20% per year reached 100% after 5 years."
  },
  {
    id: 45,
    lo: "14E",
    question: "Under a Roth 401(k) contribution feature, the tax treatment of the contribution is:",
    options: [
      "After-tax (does not reduce current income tax)",
      "Deferred for 50 years",
      "Pre-tax (reduces current income tax)",
      "Never taxed at all"
    ],
    answer: 0,
    explanation: "Roth features allow after-tax contributions in exchange for tax-free withdrawals later."
  },
  {
    id: 46,
    lo: "14F",
    question: "In Canada's Old Age Security (OAS) system, what happens to benefits for individuals whose preretirement incomes exceed certain amounts?",
    options: [
      "They get higher benefits.",
      "Their family must pay the tax.",
      "They are banned from Canada.",
      "They must repay part or all of the pension amount received."
    ],
    answer: 3,
    explanation: "Higher-income recipients are subject to a recovery tax on OAS benefits."
  },
  {
    id: 47,
    lo: "14A",
    question: "A group life insurance provision that allows an insured employee to continue coverage as term insurance after leaving the group (subject to certain conditions) is the:",
    options: ["Standard amount provision", "Conversion privilege", "Reinstatement provision", "Portability provision"],
    answer: 3,
    explanation: "The portability provision is for continuing group coverage after leaving the group."
  },
  {
    id: 48,
    lo: "14D",
    question: "A 'Defined Benefit' plan is characterized by:",
    options: [
      "Low administrative costs",
      "Employee bearing the investment risk",
      "Uncertain contributions and specified benefits",
      "Specified contributions and uncertain benefits"
    ],
    answer: 2,
    explanation: "In DB plans, the benefit is set (specified), so the funding (contributions) needed to meet that promise is uncertain and based on actuarial estimates."
  },
  {
    id: 49,
    lo: "14E",
    question: "Which plan allows ONLY the employer to contribute and uses Traditional IRAs to hold the funds?",
    options: ["ESOP", "SIMPLE IRA", "SEP IRA", "401(k)"],
    answer: 2,
    explanation: "Under a SEP IRA, only the employer makes contributions."
  },
  {
    id: 50,
    lo: "14A",
    question: "If an insurer discovers a misstatement of age in a group life plan, they retroactively adjust the premium. If the insured was actually OLDER than reported, what happens?",
    options: [
      "The beneficiary/employer owes more premium for the past coverage.",
      "The beneficiary gets a refund.",
      "The death benefit is doubled.",
      "The claim is denied."
    ],
    answer: 0,
    explanation: "If they were older, the premium paid was too low, so the insurer will adjust the bill accordingly (bill the difference)."
  },
  {
    id: 51,
    lo: "14A",
    question: "In a group life insurance policy, an 'incontestability' provision limits the period during which the insurance company may use statements in the __________ to contest the validity of the contract.",
    options: ["Application", "Benefit schedule", "Policy booklet", "Newspaper"],
    answer: 0,
    explanation: "Incontestability limits the use of application statements to avoid the contract."
  },
  {
    id: 52,
    lo: "14A",
    question: "True or False: Insurers contest the validity of group life insurance contracts much more frequently than individual contracts.",
    options: ["True", "False"],
    answer: 1,
    explanation: "Material misrepresentation occurs much less frequently in group applications, so companies rarely contest them."
  },
  {
    id: 53,
    lo: "14A",
    question: "Which of these typical individual provisions is NOT usually found in a group life insurance policy?",
    options: ["Incontestability", "Misstatement of sex", "Grace period", "Settlement options"],
    answer: 1,
    explanation: "Group life rates usually don't vary by sex at the individual level, so misstatement of sex provisions are typically not included."
  },
  {
    id: 54,
    lo: "14A",
    question: "In standard group insurance, who delivers the written description (certificate) to the group members?",
    options: ["The insurance company directly", "The state regulator", "The group policyholder (employer)", "The agent"],
    answer: 2,
    explanation: "The insurer provides descriptions to the policyholder, who then delivers them to the insureds."
  },
  {
    id: 55,
    lo: "14A",
    question: "Portable coverage under a group life plan usually consists of:",
    options: ["Variable universal life", "Term life", "Accidental death insurance only", "Whole life"],
    answer: 1,
    explanation: "Continued coverage under a portability provision is usually term insurance."
  },
  {
    id: 56,
    lo: "14A",
    question: "A group insured generally has how many days after coverage terminates to apply for ported coverage?",
    options: ["10 days", "31 days or less", "One year", "90 days"],
    answer: 1,
    explanation: "31 days is the standard application window for portability or conversion."
  },
  {
    id: 57,
    lo: "14A",
    question: "The premium for 'Portable coverage' is usually based on the insured's __________ age.",
    options: ["Attained", "Target", "Average", "Original"],
    answer: 0,
    explanation: "Costs for portable term insurance are based on the person's age when the continuation starts."
  },
  {
    id: 58,
    lo: "14A",
    question: "Do conversion privilege policies usually require medical evidence?",
    options: ["Yes, always", "No, usually without presenting evidence of insurability", "Only for managers", "Only in Quebec"],
    answer: 1,
    explanation: "The primary value of conversion is the lack of medical underwriting requirement."
  },
  {
    id: 59,
    lo: "14A",
    question: "Which is typically higher: the premium rate for converted coverage OR the rate for the equivalent portable coverage?",
    options: ["They are exactly the same", "Portable coverage rate is higher", "Converted coverage rate is higher", "Both are free"],
    answer: 2,
    explanation: "Converted (individual) policy rates are typically higher than continued (group) rates."
  },
  {
    id: 60,
    lo: "14A",
    question: "In a participative group life plan, can a beneficiary select a settlement option if the group insured has not done so?",
    options: ["No, only the group policyholder can", "Yes, typically", "Only for AD&D claims", "Only in the US"],
    answer: 1,
    explanation: "If the insured didn't choose, the beneficiary usually has the right to pick a settlement method."
  },
  {
    id: 61,
    lo: "14A",
    question: "For a beneficiary to select a 'Life Income' option, the death benefit usually must be:",
    options: ["At least $1", "Paid in Canadian dollars", "At least a stated minimum amount", "Less than $10,000"],
    answer: 2,
    explanation: "Life income options requiring recurring payments often have minimum benefit floors to be practical."
  },
  {
    id: 62,
    lo: "14B",
    question: "Group term life policies typically build __________ cash values.",
    options: ["No", "Large", "Variable", "Guaranteed"],
    answer: 0,
    explanation: "Term insurance provides protection only and does not accumulate value."
  },
  {
    id: 63,
    lo: "14B",
    question: "In a group AD&D plan, the amount paid for an accidental death is called the:",
    options: ["Pension", "MVA", "Capital sum", "Principal sum"],
    answer: 3,
    explanation: "Principal sum is the full accidental death benefit amount."
  },
  {
    id: 64,
    lo: "14B",
    question: "Which AD&D benefit covers accidental death ONLY if it happens while the employee is working/traveling for the employer?",
    options: ["Dismemberment benefit", "Basic term life", "Profit sharing benefit", "Travel accident benefit"],
    answer: 3,
    explanation: "Travel accident insurance is a restricted AD&D benefit."
  },
  {
    id: 65,
    lo: "14B",
    question: "If an employee paid 25% of the premium for a group whole life policy, they typically own __________ of the accumulated cash value.",
    options: ["50%", "0%", "25%", "100%"],
    answer: 2,
    explanation: "In contributory cash value plans, ownership is proportional to contributions."
  },
  {
    id: 66,
    lo: "14B",
    question: "Which type of group life is cheaper than its individual equivalent because it uses group pricing?",
    options: ["Individual whole life", "Group UL/VUL", "None of them", "Individual term"],
    answer: 1,
    explanation: "Group-specific pricing is a major advantage of group-sponsored permanent plans."
  },
  {
    id: 67,
    lo: "14B",
    question: "Who is designated as the beneficiary in a group creditor life policy?",
    options: ["The creditor (lender)", "The debtor", "The insurer", "The debtor's spouse"],
    answer: 0,
    explanation: "Group creditor life pays the lender to settle the debt if the borrower dies."
  },
  {
    id: 68,
    lo: "14C",
    question: "A plan sponsor is an entity that:",
    options: ["Sells life insurance to banks", "Collects all the money for itself", "Establishes a retirement plan for the benefit of its members", "Underwrites risk for the insurer"],
    answer: 2,
    explanation: "The sponsor (employer, union, etc.) creates the retirement benefit roadmap."
  },
  {
    id: 69,
    lo: "14C",
    question: "Employer contributions to qualified plans are not considered CURRENT income to participants. This means they are:",
    options: ["Illegal after-tax credits", "Free money without any tax ever", "Tax-deferred", "Subject to 50% penalty"],
    answer: 2,
    explanation: "Benefits are taxed later upon withdrawal."
  },
  {
    id: 70,
    lo: "14D",
    question: "A Summary Plan Description (SPD) informs participants of their ________ under the plan.",
    options: ["Rights", "Salary", "Address", "Weight"],
    answer: 0,
    explanation: "SPDs are participant-facing summaries of legal rights."
  },
  {
    id: 71,
    lo: "14D",
    question: "The most common eligibility requirement for a retirement plan is a __________ requirement.",
    options: ["Age", "Gender", "Service (length of employment)", "Weight"],
    answer: 2,
    explanation: "Ensuring an employee has worked some minimal time is a standard barrier."
  },
  {
    id: 72,
    lo: "14D",
    question: "Can a US retirement plan set a 'maximum age' for participants?",
    options: ["Only for pilots", "Yes, 70", "No, it is not allowed by law", "Yes, 65"],
    answer: 2,
    explanation: "Age discrimination laws prohibit upper age caps for participation."
  },
  {
    id: 73,
    lo: "14D",
    question: "Participation typically becomes effective on the first day of the month/quarter FOLLOWING the completion of __________.",
    options: ["The year", "Eligibility requirements", "Vesting", "The pension check"],
    answer: 1,
    explanation: "Enrollment triggers after the waiting criteria are met."
  },
  {
    id: 74,
    lo: "14D",
    question: "A company implemented automatic enrollment. Does the employee have the right to defer a different percentage?",
    options: ["Only if they are 21", "Yes, they can choose another rate or opt out entirely", "No, it's fixed", "Only if they work in Canada"],
    answer: 1,
    explanation: "Automatic enrollment is a 'default' that the employee can change."
  },
  {
    id: 75,
    lo: "14D",
    question: "Minimum vesting standards apply to __________ contributions.",
    options: ["Employee", "Anonymous", "State", "Employer"],
    answer: 3,
    explanation: "Employee money is always 100% vested; employer rules are what vesting schedules govern."
  },
  {
    id: 76,
    lo: "14D",
    question: "If an employee becomes 20% vested per year, their right to benefits is 'fully vested' after __________ years.",
    options: ["Two", "Three", "One", "Five"],
    answer: 3,
    explanation: "20% * 5 = 100%."
  },
  {
    id: 77,
    lo: "14D",
    question: "Which type of plan lets the employer know in advance what it will cost to fund each year?",
    options: ["Variable Whole Life", "Defined Benefit", "Defined Contribution", "Social Security"],
    answer: 2,
    explanation: "DC plans have fixed input costs (e.g., a 5% match)."
  },
  {
    id: 78,
    lo: "14D",
    question: "Who bears the investment risk in a Defined Contribution plan?",
    options: ["The employer", "The government", "The actuary", "The employee (participant)"],
    answer: 3,
    explanation: "Since the benefit isn't guaranteed, the employee's retirement security depends on market performance."
  },
  {
    id: 79,
    lo: "14D",
    question: "Defined Benefit plan cost rely on calculations made by __________.",
    options: ["Creditors", "Sales agents", "The police", "Actuaries"],
    answer: 3,
    explanation: "Mathematical risk modeling (actuarial science) is required for DB funding."
  },
  {
    id: 80,
    lo: "14E",
    question: "A 401(k) plan is a type of __________ retirement plan.",
    options: ["Defined Benefit", "Defined Contribution", "Government", "Non-qualified"],
    answer: 1,
    explanation: "401(k)s specify the contribution rate."
  },
  {
    id: 81,
    lo: "14E",
    question: "Participation in a 401(k) usually requires a __________ reduction arrangement.",
    options: ["Debt", "Salary", "Dividend", "Benefit"],
    answer: 1,
    explanation: "Wages are deferred into the plan."
  },
  {
    id: 82,
    lo: "14E",
    question: "Which plan might have 'zero' contributions in some years if company profits are low?",
    options: ["Profit Sharing Plan", "Standard Pension", "Social Security", "Group Term Life"],
    answer: 0,
    explanation: "Sharing is discretionary and tied to earnings."
  },
  {
    id: 83,
    lo: "14E",
    question: "If an ESOP stock increases in value, what is the main advantage for the employee?",
    options: ["Higher salary immediately", "They can sell the stock for a profit at retirement", "Free car", "No income tax ever"],
    answer: 1,
    explanation: "Stock appreciation provides the retirement growth in an ESOP."
  },
  {
    id: 84,
    lo: "14E",
    question: "SIMPLE IRAs are available to businesses with NO MORE than how many employees?",
    options: ["100", "1,000", "500", "10"],
    answer: 0,
    explanation: "Legislative limit for small business eligibility."
  },
  {
    id: 85,
    lo: "14E",
    question: "Are plan participants in a Group VUL plan given investment choices?",
    options: ["No, one choice only", "Only gold and silver", "Yes, multiple subaccount options", "Only the employer's stock"],
    answer: 2,
    explanation: "Variable products by definition offer a range of asset exposure options."
  },
  {
    id: 86,
    lo: "14E",
    question: "A 403(b) plan operates in some ways like a __________ plan.",
    options: ["Creditor Life", "401(k)", "MVA", "OAS"],
    answer: 1,
    explanation: "They are the non-profit equivalent of a 401(k)."
  },
  {
    id: 87,
    lo: "14E",
    question: "Under a SEP IRA, who is allowed to contribute?",
    options: ["The state", "Both", "Only the employer", "Only the employee"],
    answer: 2,
    explanation: "SEP = Employer-funded retirement arrangement."
  },
  {
    id: 88,
    lo: "14F",
    question: "Social Security is funded by __________ contributions.",
    options: ["Voluntary", "Lapse", "Interest", "Mandatory"],
    answer: 3,
    explanation: "FICA taxes are compulsory for workers and firms."
  },
  {
    id: 89,
    lo: "14F",
    question: "US Social Security benefits are available to people older than 62, but they receive a __________ amount if claimed before full retirement age.",
    options: ["Lower", "Identical", "Higher", "Unlimited"],
    answer: 0,
    explanation: "Early claiming reduces the monthly check size."
  },
  {
    id: 90,
    lo: "14F",
    question: "In Canada, Old Age Security (OAS) is funded by:",
    options: ["Employee contributions", "Sales tax only", "Oil profits", "General tax revenues"],
    answer: 3,
    explanation: "OAS is a general-revenue universal benefit, not a contribution-based pension."
  },
  {
    id: 91,
    lo: "14F",
    question: "The Quebec Pension Plan (QPP) functions in the same manner as the __________.",
    options: ["Social Security", "CPP (Canada Pension Plan)", "401(k)", "ERISA"],
    answer: 1,
    explanation: "QPP is Quebec's version of the national employment pension system."
  },
  {
    id: 92,
    lo: "14F",
    question: "Is participation in the Canada Pension Plan mandatory?",
    options: ["No, it's a gift", "Yes", "Only for the self-employed", "Only for Quebec"],
    answer: 1,
    explanation: "Participation is compulsory for covered employees and self-employed."
  },
  {
    id: 93,
    lo: "14F",
    question: "Which program provides benefits to surviving spouses and children of deceased workers in the US?",
    options: ["Social Security", "401(k)", "SEP IRA", "403(b)"],
    answer: 0,
    explanation: "Social Security has survivor benefit components."
  },
  {
    id: 94,
    lo: "14A",
    question: "In Moonbeam's scenario, if the plan ends on Feb 1, do they owe for January's coverage?",
    options: ["Only if employees pay", "No", "Only if it was an accident", "Yes"],
    answer: 3,
    explanation: "The text explicitly states they are obligated for grace period coverage even after termination."
  },
  {
    id: 95,
    lo: "14B",
    question: " Karl dies on vacation. AD&D pays __________.",
    options: ["$0", "Double the term benefit", "The AD&D benefit", "Triple the term benefit"],
    answer: 2,
    explanation: "Accidental death happens anywhere (unless excluded); vacation doesn't prevent AD&D payout."
  },
  {
    id: 96,
    lo: "14E",
    question: "Teachers use __________ plans.",
    options: ["SEP", "401(k)", "457(b)", "403(b)"],
    answer: 3,
    explanation: "Standard for public schools."
  },
  {
    id: 97,
    lo: "14B",
    question: "Group creditor life designates the __________ as beneficiary.",
    options: ["Employee", "Debtor", "Creditor (Bank)", "Spouse"],
    answer: 2,
    explanation: "Defines this specific group insurance type."
  },
  {
    id: 98,
    lo: "14D",
    question: "Profit sharing plans are usually __________ plans for employees.",
    options: ["Argentina-based", "Contributory", "Noncontributory", "Debt-based"],
    answer: 2,
    explanation: "Typically, the employer provides the profits without employee cost."
  },
  {
    id: 99,
    lo: "14C",
    question: "Tax-favored treatment means incentives for __________ to establish plans.",
    options: ["Plan Sponsors", "Insurers", "Agents", "Banks"],
    answer: 0,
    explanation: "Qualification encourages employers to provide retirement vehicles."
  },
  {
    id: 100,
    lo: "14F",
    question: "Canada's universal pension is the __________.",
    options: ["Social Security", "CPP", "QPP", "OAS"],
    answer: 3,
    explanation: "Old Age Security is the universal component."
  }
];
