import { Question } from '../../types';

export const actualExam2026Questions: Question[] = [
  // 01A: Distinguish between speculative risk and pure risk.
  {
    id: 1,
    lo: "01A: Pure vs Speculative Risk",
    question: "Scenario: Sarah buys a life insurance policy to provide for her family in case of her death. This type of risk, which involves only the possibility of loss or no loss, is known as:",
    options: ["Fundamental risk", "Speculative risk", "Pure risk", "Financial risk"],
    answer: 2,
    explanation: "Pure risk involves only the chance of loss or no loss. Insurance is designed to cover pure risks, like premature death."
  },
  {
    id: 2,
    lo: "01A: Speculative Risk",
    question: "Scenario: An investor buys shares in a startup company hoping the value will triple, though there is a chance the company will fail. This is an example of:",
    options: ["Objective risk", "Static risk", "Pure risk", "Speculative risk"],
    answer: 3,
    explanation: "Speculative risk involves the possibility of gain, loss, or no loss. Investing in stocks is a classic example."
  },

  // 01D: Antiselection
  {
    id: 3,
    lo: "01D: Antiselection",
    question: "Scenario: A person who just discovered they have a terminal illness applies for a large life insurance policy without disclosing their condition. This tendency for people with higher-than-average risk to seek insurance is called:",
    options: ["Adverse selection", "Moral hazard", "Pro-rata allocation", "Risk pooling"],
    answer: 0,
    explanation: "Antiselection (or adverse selection) is the tendency of people who believe they have a higher risk than average to seek or maintain insurance."
  },

  // 01E: Risk Classes
  {
    id: 4,
    lo: "01E: Risk Classes",
    question: "Scenario: An applicant for life insurance is in excellent health, exercises regularly, and has no family history of serious disease. They would likely be placed in which risk class?",
    options: ["Substandard", "Standard", "Preferred", "Declined"],
    answer: 2,
    explanation: "Preferred risk classes are for individuals whose anticipated mortality is significantly lower than average."
  },

  // 01F: Insurable Interest
  {
    id: 5,
    lo: "01F: Insurable Interest",
    question: "Scenario: Mark wants to take out a life insurance policy on his neighbor, Mr. Jones, just because he thinks Mr. Jones is getting old. Mark has no financial connection to him. Is this policy valid?",
    options: ["Yes, if Mr. Jones agrees", "Yes, anyone can buy a policy on anyone", "No, because Mark lacks insurable interest", "No, because Mark is not a relative"],
    answer: 2,
    explanation: "Insurable interest must exist at the time of application. The policyowner must suffer a financial loss upon the death of the insured."
  },

  // 02B: Stock vs Mutual vs Fraternal
  {
    id: 6,
    lo: "02B: Stock Insurers",
    question: "A life insurance company that is owned by shareholders who elect the board of directors is a:",
    options: ["Mutual insurer", "Stock insurer", "Reciprocal exchange", "Fraternal benefit society"],
    answer: 1,
    explanation: "Stock insurers are owned by shareholders. Mutual insurers are owned by policyowners."
  },

  // 03C: Valid Informal Contract (REMEDIATION - Score was 0%)
  {
    id: 7,
    lo: "03C: Contract Requirements",
    question: "Scenario: James offers to buy a policy, and the insurer accepts. However, James is currently intoxicated and does not understand the terms. Which requirement for a valid contract is missing?",
    options: ["Consideration", "Lawful objective", "Contractual capacity", "Mutual assent"],
    answer: 2,
    explanation: "Contractual capacity requires that all parties be of legal age and mentally competent (not intoxicated or under duress)."
  },
  {
    id: 8,
    lo: "03C: Mutual Assent",
    question: "Scenario: An applicant submits an application with the first premium. The insurer issues a policy that is exactly what was requested. This exchange of offer and acceptance is known as:",
    options: ["Indemnity", "Mutual assent", "Consideration", "Aleatory exchange"],
    answer: 1,
    explanation: "Mutual assent (meeting of the minds) occurs through an offer and its acceptance."
  },
  {
    id: 9,
    lo: "03C: Consideration",
    question: "In a life insurance contract, the policyowner's 'consideration' consists of the application and the:",
    options: ["Initial premium payment", "Medical exam results", "Agent's commission", "Face amount"],
    answer: 0,
    explanation: "Consideration is something of value given by each party. For the owner, it's the premium; for the insurer, it's the promise to pay."
  },

  // 04C: Actuaries / Costs (REMEDIATION - Score was 0%)
  {
    id: 10,
    lo: "04C: Premium Components",
    question: "When actuaries develop premium rates, they must account for the cost of benefits, investment earnings, and:",
    options: ["competitor stock prices", "Marketing slogans", "Agent's personal loans", "Operating expenses"],
    answer: 3,
    explanation: "Premiums must cover: (1) Cost of benefits (mortality), (2) Operating expenses (loading), and (3) be adjusted for (3) Investment earnings."
  },
  {
    id: 11,
    lo: "04C: Interest and Premiums",
    question: "Scenario: If an insurance company assumes a HIGHER interest rate on its investments, how does this typically affect the premium rates for its products?",
    options: ["Premiums will decrease", "Premiums will stay the same", "Premiums will increase", "Interest rates have no effect on premiums"],
    answer: 0,
    explanation: "Higher investment earnings help offset the cost of benefits, allowing for lower premiums."
  },

  // 05B: Term Life
  {
    id: 12,
    lo: "05B: Decreasing Term",
    question: "Scenario: David wants life insurance to cover his 30-year mortgage. As he pays off the mortgage, the amount of insurance needed decreases. He should buy:",
    options: ["Whole life insurance", "Level term insurance", "Decreasing term insurance", "Increasing term insurance"],
    answer: 2,
    explanation: "Decreasing term insurance provides a death benefit that reduces over time, often used for mortgage protection."
  },

  // 06C: Universal Life
  {
    id: 13,
    lo: "06C: Universal Life",
    question: "Which type of life insurance allows the policyowner to vary the amount and timing of premium payments and change the face amount?",
    options: ["Variable life", "Whole life", "Term life", "Universal life"],
    answer: 3,
    explanation: "Universal Life (UL) is characterized by its flexible premiums and adjustable face amount."
  },

  // 10A: Longevity Risk (REMEDIATION - Score was 50%)
  {
    id: 14,
    lo: "10A: Longevity Risk",
    question: "The risk that a person will outlive their financial resources is known as:",
    options: ["Mortality risk", "Longevity risk", "Liquidity risk", "Credit risk"],
    answer: 1,
    explanation: "Longevity risk is the danger of living 'too long' and running out of money. Annuities protect against this."
  },
  {
    id: 15,
    lo: "10A: Annuitant",
    question: "Scenario: John buys an annuity. The payments will be based on the life of his wife, Mary. In this contract, Mary is the:",
    options: ["Contract owner", "Beneficiary", "Payee", "Annuitant"],
    answer: 3,
    explanation: "The annuitant is the person whose life expectancy determines the amount and duration of the annuity payments."
  },

  // 14A: Group Life Provisions (REMEDIATION - Score was 0%)
  {
    id: 16,
    lo: "14A: Group Life Conversion",
    question: "Scenario: Robert leaves his job at ABC Corp. He wants to keep his group life insurance but convert it to an individual policy. This is possible through the:",
    options: ["Facility-of-payment clause", "Conversion provision", "Grace period provision", "Incontestability clause"],
    answer: 1,
    explanation: "The conversion provision allows employees leaving a group to obtain an individual policy without evidence of insurability."
  },
  {
    id: 17,
    lo: "14A: Certificate of Insurance",
    question: "In a group life insurance plan, the individual employees receive a document that summarizes their coverage, known as a:",
    options: ["Master contract", "Certificate of insurance", "Binder", "Policy rider"],
    answer: 1,
    explanation: "The employer holds the master contract; employees receive certificates of insurance."
  },

  // 08C: Incontestability
  {
    id: 18,
    lo: "08C: Incontestability",
    question: "Scenario: An insurer discovers three years after issuing a policy that the insured lied about a minor medical condition. Can the insurer contest the claim now?",
    options: ["Yes, if it was a lie", "Yes, only if the insured died", "No, insurers can never contest policies", "No, because the contestable period has passed"],
    answer: 3,
    explanation: "The incontestability provision usually limits the insurer's right to contest a policy to within two years of issue."
  },

  // 08F: Misstatement of Age
  {
    id: 19,
    lo: "08F: Misstatement of Age",
    question: "Scenario: After the insured's death, the insurer finds out the insured was actually 45 years old at issue, not 40 as stated. What will the insurer do?",
    options: ["Refuse to pay the claim", "Adjust the death benefit to what the premium would have bought at age 45", "Sue the estate for fraud", "Pay the full face amount"],
    answer: 1,
    explanation: "If age is misstated, the benefit is adjusted to what the premiums paid would have purchased at the correct age."
  },

  // 11A: Annuity Options
  {
    id: 20,
    lo: "11A: Life Income with Period Certain",
    question: "Which annuity settlement option provides payments for the annuitant's entire life, but guarantees payments for at least a minimum number of years (e.g., 10 years)?",
    options: ["Joint-and-survivor annuity", "Fixed-amount option", "Life income with period certain", "Straight life annuity"],
    answer: 2,
    explanation: "Life income with period certain ensures that if the annuitant dies early, a beneficiary receives payments for the remainder of the 'certain' period."
  },

  // Continuing with more questions to reach a total of 100...
  // (Truncating for the draft, will provide full 100 in logic)
  {
    id: 21,
    lo: "01A: Objective Risk",
    question: "The relative variation of actual loss from expected loss is called:",
    options: ["Pure risk", "Financial risk", "Objective risk", "Subjective risk"],
    answer: 2,
    explanation: "Objective risk (or degree of risk) measures how much reality deviates from the statistical average."
  },
  {
    id: 22,
    lo: "01D: Factors in Antiselection",
    question: "Which of the following would DECREASE the likelihood of antiselection for an insurer?",
    options: ["Eliminating waiting periods", "Charging everyone the same premium regardless of health", "Allowing applicants to choose any face amount", "Requiring medical exams for all applicants"],
    answer: 3,
    explanation: "Medical underwriting helps identify high-risk individuals and price accordingly, reducing antiselection."
  },
  {
    id: 23,
    lo: "01E: Substandard Risk",
    question: "An applicant who is a heavy smoker and has high blood pressure would most likely be classified as a:",
    options: ["Preferred risk", "Non-insurable risk", "Substandard risk", "Standard risk"],
    answer: 2,
    explanation: "Substandard risks are those with higher-than-average mortality expectations."
  },
  {
    id: 24,
    lo: "01F: Insurable Interest timing",
    question: "For a life insurance policy to be valid, insurable interest must exist at the time:",
    options: ["The claim is filed", "Of the first premium payment", "The policy is issued", "Of the insured's death"],
    answer: 2,
    explanation: "Unlike property insurance, life insurance only requires insurable interest at the inception of the contract."
  },
  {
    id: 25,
    lo: "02B: Mutual Insurers",
    question: "Dividends paid to policyowners of a mutual company are technically:",
    options: ["A refund of premium overpayment", "Taxable investment income", "Interest on a bank account", "A gift from shareholders"],
    answer: 0,
    explanation: "Policy dividends in mutual companies are considered a return of part of the premium paid for 'participating' policies."
  },
  {
    id: 26,
    lo: "03A: Contract of Adhesion",
    question: "Because the insurer drafts the contract and the applicant must 'take it or leave it,' an insurance policy is a:",
    options: ["Bargaining contract", "Contract of adhesion", "Unilateral contract", "Personal contract"],
    answer: 1,
    explanation: "In a contract of adhesion, one party prepares the document and the other simply adheres to it."
  },
  {
    id: 27,
    lo: "03A: Aleatory Contract",
    question: "Scenario: Mr. Smith pays $500 in premiums and dies shortly after. The insurer pays $100,000 to his beneficiary. This imbalance in values exchanged makes it a/an:",
    options: ["Aleatory contract", "Bilateral contract", "Informal contract", "Commutative contract"],
    answer: 0,
    explanation: "Aleatory contracts involve an unequal exchange of values based on a chance event."
  },
  {
    id: 28,
    lo: "03A: Unilateral Contract",
    question: "An insurance policy is a unilateral contract because only one party, the ______, makes a legally enforceable promise.",
    options: ["Insured", "Insurer", "Agent", "Policyowner"],
    answer: 1,
    explanation: "The insurer is the only one legally bound to perform as long as premiums are paid."
  },
  {
    id: 29,
    lo: "03C: Lawful Objective",
    question: "An insurance contract taken out for the purpose of a gambling wager would be void because it lacks:",
    options: ["Lawful objective", "Mutual assent", "Capacity", "Consideration"],
    answer: 0,
    explanation: "Contracts must have a legal purpose; wagering on lives is illegal."
  },
  {
    id: 30,
    lo: "03D: Policyholder Rights",
    question: "Which of the following is a property right held by a policyowner?",
    options: ["The right to stop paying taxes", "The right to change the beneficiary", "The right to change the insurer's CEO", "The right to demand the agent's commission"],
    answer: 1,
    explanation: "The policyowner has several 'incidents of ownership,' including changing beneficiaries and taking loans."
  },
  {
    id: 31,
    lo: "04C: Mortality Charges",
    question: "The part of the premium that covers the chance of the insured dying during the policy year is the:",
    options: ["Mortality charge", "Interest credit", "Reserve fund", "Loading charge"],
    answer: 0,
    explanation: "Mortality charges are based on life expectancy statistics."
  },
  {
    id: 32,
    lo: "04C: Loading",
    question: "The portion of an insurance premium that covers taxes, commissions, and administrative costs is called:",
    options: ["Reserve", "Loading", "Net premium", "Risk premium"],
    answer: 1,
    explanation: "Loading is the 'expense' component added to the net premium."
  },
  {
    id: 33,
    lo: "04D: Mortality Tables",
    question: "Mortality tables show the probability of ______ at each age.",
    options: ["Dying", "Retiring", "Living", "Being disabled"],
    answer: 0,
    explanation: "Mortality tables are the foundation of life insurance pricing."
  },
  {
    id: 34,
    lo: "04F: Conservative Values",
    question: "Actuaries use conservative values in financial models primarily to ensure:",
    options: ["Maximum speed", "Lowest possible premiums", "Company solvency", "Higher agent commissions"],
    answer: 2,
    explanation: "Conservative assumptions (lower interest, higher mortality) protect the company's ability to pay future claims."
  },
  {
    id: 35,
    lo: "05A: Personal Needs",
    question: "Using life insurance to provide funds for a child's college education is an example of meeting a:",
    options: ["Financial goal or dependency need", "Final expense need", "Retirement need", "Business buyout need"],
    answer: 0,
    explanation: "Education funding is a major financial goal met by insurance/savings."
  },
  {
    id: 36,
    lo: "05B: Level Term",
    question: "Scenario: Mary buys a 10-year term policy with a $200,000 face amount. If she dies in year 9, the benefit paid is $200,000. This is:",
    options: ["Decreasing term", "Increasing term", "Variable term", "Level term"],
    answer: 3,
    explanation: "Level term keeps the same face amount throughout the policy period."
  },
  {
    id: 37,
    lo: "05C: Renewable Term",
    question: "A term policy that allows the owner to extend the coverage without a new medical exam is:",
    options: ["Renewable term", "Fixed term", "Convertible term", "Variable term"],
    answer: 0,
    explanation: "Renewability allows continued coverage without evidence of insurability."
  },
  {
    id: 38,
    lo: "06A: Cash Value Insurance",
    question: "Unlike term insurance, permanent life insurance builds an equity element known as:",
    options: ["Cash value", "Face amount", "Premium return", "Dividends"],
    answer: 0,
    explanation: "Cash value represents the savings or investment component of whole life/UM policies."
  },
  {
    id: 39,
    lo: "06B: Whole Life Characteristics",
    question: "Whole life insurance typically has level premiums and coverage that lasts until age:",
    options: ["80", "The policy is canceled", "65", "100 or 121 (maturity)"],
    answer: 3,
    explanation: "Whole life is designed to provide coverage for the 'whole life' and usually matures at 100 or later."
  },
  {
    id: 40,
    lo: "06F: Variable Universal Life (VUL)",
    question: "VUL policies are different from standard UL policies because the owner:",
    options: ["Only has term coverage", "Must pay set premiums", "Cannot change the face amount", "Can choose how the cash value is invested"],
    answer: 3,
    explanation: "VUL combines the flexibility of UL with the investment choices of Variable Life."
  },
  {
    id: 41,
    lo: "07A: Waiver of Premium",
    question: "Scenario: An insured becomes totally disabled and cannot work. The insurer stops charging premiums but keeps the policy in force. This is the:",
    options: ["Guaranteed insurability rider", "Payor benefit", "Waiver of premium rider", "Accidental death benefit"],
    answer: 2,
    explanation: "Waiver of premium is a common disability benefit in life policies."
  },
  {
    id: 42,
    lo: "07B: Accidental Death Benefit (ADB)",
    question: "ADB riders typically pay a multiple of the face amount if death occurs within how many days of an accident?",
    options: ["1 year", "30 days", "90 days", "Only immediately"],
    answer: 2,
    explanation: "90 days is the standard time limit for an 'accidental' causation in many states/policies."
  },
  {
    id: 43,
    lo: "07C: Accelerated Death Benefits",
    question: "Scenario: A policyowner is diagnosed with a terminal illness and needs money for medical bills. They can receive a portion of their death benefit while still living through the:",
    options: ["Accelerated death benefit rider", "Dividend option", "Cash surrender option", "Loan provision"],
    answer: 0,
    explanation: "Also called 'living benefits,' these are for terminal or chronic illness."
  },
  {
    id: 44,
    lo: "07D: Family Rider",
    question: "A rider that covers the spouse and children under the primary insured's policy is usually a:",
    options: ["Payor rider", "Family rider", "Joint life rider", "Term rider"],
    answer: 1,
    explanation: "Family riders provide term coverage for dependents."
  },
  {
    id: 45,
    lo: "07E: Guaranteed Insurability Rider (GIR)",
    question: "GIR allows the policyowner to purchase additional insurance at specified intervals without:",
    options: ["Any cost", "Evidence of insurability", "Paying premiums", "The agent's consent"],
    answer: 1,
    explanation: "This is valuable for individuals whose health might decline later."
  },
  {
    id: 46,
    lo: "08D: Grace Period",
    question: "Scenario: A premium was due on May 1st but wasn't paid. The policy stays in force for 31 days. This period is the:",
    options: ["Free-look period", "Reinstatement period", "Incontestable period", "Grace period"],
    answer: 3,
    explanation: "The grace period prevents immediate lapse for accidental non-payment."
  },
  {
    id: 47,
    lo: "08E: Reinstatement",
    question: "To reinstate a lapsed policy, the owner usually MUST provide evidence of insurability and:",
    options: ["Wait 5 years", "Change the beneficiary", "Buy a new policy", "Pay all back premiums plus interest"],
    answer: 3,
    explanation: "Reinstatement puts the original policy back in force."
  },
  {
    id: 48,
    lo: "08G: Policy Loans",
    question: "Interest charged on a policy loan is usually ______ than the interest credited to the cash value.",
    options: ["Higher", "Never charged", "Lower", "Identical"],
    answer: 0,
    explanation: "Insurers charge interest on loans to offset the lost investment opportunity."
  },
  {
    id: 49,
    lo: "08H: Nonforfeiture Options",
    question: "Which nonforfeiture option provides the SAME face amount as the original policy but for a shorter period of time?",
    options: ["Reduced paid-up", "Automatic premium loan", "Cash surrender", "Extended term"],
    answer: 3,
    explanation: "Extended term uses the cash value to buy term insurance of the same face amount."
  },
  {
    id: 50,
    lo: "09A: Contingent Beneficiary",
    question: "Scenario: The primary beneficiary dies before the insured. Who will receive the death benefit?",
    options: ["The primary beneficiary's family", "The insurer", "The contingent beneficiary", "The insured's estate"],
    answer: 2,
    explanation: "Contingent (secondary) beneficiaries step up if the primary is deceased."
  },
  {
    id: 51,
    lo: "09C: Dividend Options - Paid-up Additions",
    question: "Which dividend option uses the dividend to buy more small amounts of permanent insurance?",
    options: ["Accumulation at interest", "Paid-up additions", "Cash option", "Premium reduction"],
    answer: 1,
    explanation: "Paid-up additions increase the total death benefit and cash value."
  },
  {
    id: 52,
    lo: "09D: Assignment",
    question: "The transfer of some or all rights under a policy to another person is called:",
    options: ["Allocation", "Assignment", "Amendment", "Appraisal"],
    answer: 1,
    explanation: "Collateral assignment is common for securing bank loans."
  },
  {
    id: 53,
    lo: "09G: Benefit Calculation",
    question: "Scenario: Insured dies with a $100,000 policy, an outstanding $5,000 loan, and has paid $1,000 in advanced premiums. The death benefit paid is:",
    options: ["$100,000", "$104,000", "$95,000", "$96,000"],
    answer: 3,
    explanation: "$100,000 - $5,000 (loan) + $1,000 (returned premium) = $96,000."
  },
  {
    id: 54,
    lo: "09H: Settlement Options - Interest Only",
    question: "In which settlement option does the insurer keep the principal and just pay the earnings to the beneficiary?",
    options: ["Interest option", "Lump sum", "Fixed period", "Fixed amount"],
    answer: 0,
    explanation: "The interest option preserves the principal for a later time or different beneficiary."
  },
  {
    id: 55,
    lo: "10B: Immediate Annuity",
    question: "An annuity where payments begin within one year of purchase is a:",
    options: ["Immediate annuity", "Flexible annuity", "Single premium annuity", "Deferred annuity"],
    answer: 0,
    explanation: "Single Premium Immediate Annuities (SPIAs) start generating income almost right away."
  },
  {
    id: 56,
    lo: "10D: Free-Look Provision",
    question: "The period (usually 10-30 days) during which an annuity owner can cancel the contract for a full refund is the:",
    options: ["Market value adjustment", "Incontestability period", "Free-look period", "Grace period"],
    answer: 2,
    explanation: "Free-look gives the consumer time to review the actual contract."
  },
  {
    id: 57,
    lo: "11B: GMIB Rider",
    question: "GMIB stands for Guaranteed Minimum ______ Benefit.",
    options: ["Income", "Instalment", "Insurance", "Investment"],
    answer: 0,
    explanation: "Guaranteed Minimum Income Benefit ensures a minimum income stream regardless of market performance."
  },
  {
    id: 58,
    lo: "12A: Hospital Indemnity",
    question: "Which medical coverage pays a flat daily amount for each day of stay in a hospital?",
    options: ["Hospital indemnity", "Major medical", "HMO", "Surgical expense"],
    answer: 0,
    explanation: "Hospital indemnity pays regardless of actual costs incurred."
  },
  {
    id: 59,
    lo: "12B: Coinsurance",
    question: "The percentage of medical expenses (e.g., 20%) that the insured must pay after the deductible is the:",
    options: ["Copayment", "Coinsurance", "Stop-loss", "Maximum out-of-pocket"],
    answer: 1,
    explanation: "Coinsurance is a cost-sharing mechanism."
  },
  {
    id: 60,
    lo: "12D: PPO",
    question: "PPO stands for ______ Provider Organization.",
    options: ["Preferred", "Professional", "Primary", "Private"],
    answer: 0,
    explanation: "PPOs use a network of providers but allow out-of-network care at higher costs."
  },
  {
    id: 61,
    lo: "12H: Total Disability - Own Occupation",
    question: "A definition of disability that pays benefits if the insured cannot perform the duties of THEIR SPECIFIC job is:",
    options: ["Residual disability", "Any occupation", "Presumptive disability", "Own occupation"],
    answer: 3,
    explanation: "Own-occ is the most liberal/expensive definition for the insured."
  },
  {
    id: 62,
    lo: "12M: LTC Benefit Triggers",
    question: "LTC benefits are often triggered when the insured cannot perform 'Activities of Daily Living' (ADLs). Which is an ADL?",
    options: ["Managing a bank account", "Cooking a meal", "Driving a car", "Bathing"],
    answer: 3,
    explanation: "Bathing, dressing, eating, toileting, continence, and transferring are standard ADLs."
  },
  {
    id: 63,
    lo: "13A: Noncontributory Plan",
    question: "In a group plan where the employer pays the ENTIRE premium, it is called a:",
    options: ["Contributory plan", "Self-funded plan", "Noncontributory plan", "Shared plan"],
    answer: 2,
    explanation: "Noncontributory usually requires 100% participation of eligible employees."
  },
  {
    id: 64,
    lo: "13B: Actively-at-Work Requirement",
    question: "The requirement that an employee be working on the day their group coverage would normally begin is the:",
    options: ["Eligibility period", "Actively-at-work requirement", "Vesting requirement", "Probationary period"],
    answer: 1,
    explanation: "This prevents immediate death claims for employees already terminally ill and not working."
  },
  {
    id: 65,
    lo: "13C: Group Underwriting",
    question: "Unlike individual underwriting, group underwriting focuses on the characteristics of the:",
    options: ["Local hospital", "Group as a whole", "Individual employee", "Employer's bank account"],
    answer: 1,
    explanation: "Group underwriting looks at the group's size, industry, and previous loss history."
  },
  {
    id: 66,
    lo: "14D: Qualified Retirement Plan",
    question: "To receive favorable tax treatment in the U.S., a retirement plan must be 'qualified' by meeting rules in:",
    options: ["The Patriot Act", "HIPAA", "ERISA and the IRS code", "Glass-Steagall"],
    answer: 2,
    explanation: "ERISA set standards for most voluntary private sector pension and health plans."
  },
  {
    id: 67,
    lo: "14E: 401(k) Plan",
    question: "A type of defined contribution plan that allows employees to defer a portion of their pre-tax salary into the plan is a:",
    options: ["Traditional Pension", "Profit Sharing", "401(k)", "Defined Benefit"],
    answer: 2,
    explanation: "401(k)s are the most common employer-sponsored retirement plans in the US."
  },
  {
    id: 68,
    lo: "02B: Fraternal Benefit Societies",
    question: "A non-profit organization owned by its members that provides insurance only to its members is a:",
    options: ["Stock insurer", "Fraternal benefit society", "Lloyd's association", "Mutual insurer"],
    answer: 1,
    explanation: "Fraternals often have a social or religious common bond."
  },
  {
    id: 69,
    lo: "02E: Solvency Regulation",
    question: "Regulation that ensures insurance companies have enough money to pay future claims is ______ regulation.",
    options: ["Advertising", "Solvency", "Market conduct", "Privacy"],
    answer: 1,
    explanation: "Solvency (or financial) regulation is a core pillar of insurance oversight."
  },
  {
    id: 70,
    lo: "03A: Formal vs Informal",
    question: "Most standard life insurance policies are considered ______ because they require a written document and standard provisions.",
    options: ["Oral contracts", "Informal contracts", "Implied contracts", "Formal contracts"],
    answer: 3,
    explanation: "While not 'contracts under seal', insurance policies are highly formalized documents required by law."
  },
  {
    id: 71,
    lo: "03C: Illegal Contracts",
    question: "If a person takes out a policy with the intent of murdering the insured for the money, the contract is void due to lack of:",
    options: ["Capacity", "Insurable interest", "Lawful objective", "Consideration"],
    answer: 2,
    explanation: "Murder-for-hire or insurance fraud violates the 'lawful objective' requirement."
  },
  {
    id: 72,
    lo: "04C: Interest Assumption",
    question: "Actuaries use the ______ to determine how much the premiums collected today will grow over time.",
    options: ["Lapse rate", "Mortality rate", "Expense ratio", "Interest assumption"],
    answer: 3,
    explanation: "Interest assumptions are critical for long-term products like whole life."
  },
  {
    id: 73,
    lo: "05B: Increasing Term",
    question: "A rider that allows the death benefit to grow over time, often used as a 'return of premium' feature, is:",
    options: ["Decreasing term", "Increasing term", "Level term", "Variable term"],
    answer: 1,
    explanation: "Increasing term provides a benefit that grows according to a schedule or formula."
  },
  {
    id: 74,
    lo: "06B: Joint Life Insurance",
    question: "Which type of policy covers two lives and pays the death benefit only when the FIRST person dies?",
    options: ["Second-to-die (Survivorship)", "First-to-die (Joint Life)", "Family policy", "Individual policy"],
    answer: 1,
    explanation: "Joint Life pays on the first death; Survivorship pays on the second."
  },
  {
    id: 75,
    lo: "07B: Double Indemnity",
    question: "Scenario: An insured has a $50,000 policy with an Accidental Death rider. If they die in a car accident, the rider pays an additional $50,000. This is often called:",
    options: ["Face enhancement", "Total payout", "Double indemnity", "Triple indemnity"],
    answer: 2,
    explanation: "Double indemnity is a common term for 2x payout on accidental death."
  },
  {
    id: 76,
    lo: "08C: Fraud exception in Incontestability",
    question: "In some jurisdictions, the incontestability clause DOES NOT protect the insured in cases of:",
    options: ["Smoking status", "Minor health lies", "Income misstatement", "Gross fraud (like impersonation)"],
    answer: 3,
    explanation: "Impersonation or 'no insurable interest' can sometimes vent a policy from ever becoming incontestable."
  },
  {
    id: 77,
    lo: "08H: Reduced Paid-Up Insurance",
    question: "Under this nonforfeiture option, the cash value is used to buy a PERMANENT policy of a smaller face amount, with no further premiums due:",
    options: ["Accumulation", "Cash surrender", "Reduced paid-up", "Extended term"],
    answer: 2,
    explanation: "Reduced paid-up keeps the permanent nature but at a lower benefit level."
  },
  {
    id: 78,
    lo: "09C: Dividend Option - Cash",
    question: "The most straightforward dividend option, where the insurer simply sends a check to the owner, is the:",
    options: ["Cash option", "Premium reduction", "One-year term", "None of the above"],
    answer: 0,
    explanation: "It's a simple cash payout."
  },
  {
    id: 79,
    lo: "10B: Deferred Annuity",
    question: "An annuity designed for the accumulation of funds for retirement, with payments starting many years in the future, is a:",
    options: ["Variable annuity", "Fixed annuity", "Immediate annuity", "Deferred annuity"],
    answer: 3,
    explanation: "Deferred annuities have an 'accumulation phase'."
  },
  {
    id: 80,
    lo: "11A: Period Certain Only",
    question: "Unlike a life annuity, a 'period certain' annuity payout is NOT based on:",
    options: ["Interest rates", "Life expectancy", "The initial investment", "Time"],
    answer: 1,
    explanation: "Period certain only pays for a set time (e.g., 15 years), regardless of whether the annuitant lives or dies."
  },
  {
    id: 81,
    lo: "12B: Deductible",
    question: "The initial amount of medical expenses (e.g., $500) that the insured must pay each year before the insurer starts paying is the:",
    options: ["Coinsurance", "Out-of-pocket maximum", "Copayment", "Deductible"],
    answer: 3,
    explanation: "The deductible is the insured's 'first dollar' responsibility."
  },
  {
    id: 82,
    lo: "13A: Contributory Plan",
    question: "In a group plan where employees pay a portion of the premium, it is a:",
    options: ["Government plan", "Free plan", "Contributory plan", "Noncontributory plan"],
    answer: 2,
    explanation: "Contributory plans usually require at least 75% participation."
  },
  {
    id: 83,
    lo: "14A: Incontestability in Group Life",
    question: "Group life policies also have an incontestable period, usually lasting:",
    options: ["Forever", "2 years", "5 years", "1 year"],
    answer: 1,
    explanation: "2 years is the standard for both individual and group life."
  },
  {
    id: 84,
    lo: "01F: Business Insurable Interest",
    question: "Scenario: A corporation buys insurance on its key CEO. Does it have insurable interest?",
    options: ["Yes, due to the financial loss the company would suffer", "Only if the board votes", "No, it is a legal person not a real person", "No, only family can have it"],
    answer: 0,
    explanation: "Key-person insurance is based on the economic value of the employee to the firm."
  },
  {
    id: 85,
    lo: "03A: Commutative Contract",
    question: "A contract where the values exchanged are intended to be roughly equal is a:",
    options: ["Draft contract", "Aleatory contract", "Commutative contract", "Standard contract"],
    answer: 2,
    explanation: "Most non-insurance business contracts (like buying a car) are commutative."
  },
  {
    id: 86,
    lo: "05B: Convertible Term",
    question: "A term policy that allows the owner to swap it for a whole life policy without a medical exam is:",
    options: ["Renewable", "Variable", "Universal", "Convertible"],
    answer: 3,
    explanation: "Conversion is usually to a permanent policy with the same insurer."
  },
  {
    id: 87,
    lo: "08D: Lapse",
    question: "The termination of an insurance policy for non-payment of premiums is called a:",
    options: ["Lapse", "Cancellation", "Rescission", "Surrender"],
    answer: 0,
    explanation: "Lapse specifically refers to ending due to unpaid premium."
  },
  {
    id: 88,
    lo: "09A: Revocable Beneficiary",
    question: "A beneficiary that the policyowner can change at any time without the beneficiary's consent is:",
    options: ["Primary", "Contingent", "Irrevocable", "Revocable"],
    answer: 3,
    explanation: "Most beneficiaries are revocable by default in the U.S."
  },
  {
    id: 89,
    lo: "11C: Age and Annuity Payments",
    question: "If an older person and a younger person buy the same immediate life annuity with the same amount of money, who will receive HIGHER monthly payments?",
    options: ["The younger person", "The older person", "It depends on the company", "They will be identical"],
    answer: 1,
    explanation: "Older people have shorter life expectancies, so the insurer can pay out more each month."
  },
  {
    id: 90,
    lo: "13B: Probationary Period",
    question: "The period of time (e.g., 90 days) a NEW employee must wait before becoming eligible for group benefits is the:",
    options: ["Grace period", "Eligibility period", "Probationary period", "Enrollment period"],
    answer: 2,
    explanation: "Probationary periods eliminate short-term turnover costs."
  },
  {
    id: 91,
    lo: "01A: Risk Avoidance",
    question: "Scenario: Tim refuses to drive a car because he is afraid of accidents. This risk management technique is:",
    options: ["Risk avoidance", "Risk retention", "Risk reduction", "Risk transfer"],
    answer: 0,
    explanation: "Avoidance means simply not engaging in the risky activity."
  },
  {
    id: 92,
    lo: "03C: Competent Parties",
    question: "In most states, the minimum age to be considered 'competent' to sign an insurance contract is:",
    options: ["12", "15 or 16", "21", "18"],
    answer: 3,
    explanation: "18 is the standard legal age of majority for contracts."
  },
  {
    id: 93,
    lo: "06A: Maturity Value",
    question: "When the cash value of a whole life policy equals the face amount, the policy is said to have:",
    options: ["Converted", "Matured", "Lapsed", "Surrendered"],
    answer: 1,
    explanation: "At maturity, the insurer pays the face amount to the living owner."
  },
  {
    id: 94,
    lo: "08G: Automatic Premium Loan (APL)",
    question: "Which feature protects a policy from lapsing by using the cash value to pay an overdue premium automatically?",
    options: ["Waiver of premium", "Dividend accumulation", "Grace period", "Automatic Premium Loan"],
    answer: 3,
    explanation: "APL is an optional feature that keeps a policy in force."
  },
  {
    id: 95,
    lo: "10A: Payout Period",
    question: "The time during which an annuity actually makes income payments to the annuitant is the ______ phase.",
    options: ["Liquidation (or Payout)", "Deferred", "Accumulation", "Inception"],
    answer: 0,
    explanation: "Payout is when the 'annuitization' occurs."
  },
  {
    id: 96,
    lo: "12J: Residual Disability",
    question: "A benefit that pays a partial amount if the insured is working part-time due to disability but earning less than before is:",
    options: ["Residual disability", "Partial disability", "Presumptive disability", "Recurring disability"],
    answer: 0,
    explanation: "Residual covers loss of income rather than just inability to work full-time."
  },
  {
    id: 97,
    lo: "14E: Profit-Sharing Plan",
    question: "A retirement plan where the employer's contribution is based on the company's yearly success is a:",
    options: ["Money purchase plan", "Stock option plan", "Profit-sharing plan", "Defined benefit plan"],
    answer: 2,
    explanation: "Contributions vary based on profitability."
  },
  {
    id: 98,
    lo: "01D: Moral Hazard",
    question: "Scenario: After buying a policy with broad coverage, an insured stops being careful about their property. This is a:",
    options: ["Physical hazard", "Fundamental hazard", "Legal hazard", "Moral hazard"],
    answer: 3,
    explanation: "Moral hazard involves changes in behavior due to being insured."
  },
  {
    id: 99,
    lo: "03A: Condition Precedent",
    question: "A condition that MUST be met before the contract is even formed (like paying the first premium) is a:",
    options: ["Representation", "Warranty", "Condition precedent", "Condition subsequent"],
    answer: 2,
    explanation: "Meeting this condition 'precedes' the effectiveness of the contract."
  },
  {
    id: 100,
    lo: "04C: Net Premium Calculation",
    question: "Net Premium = Mortality Cost - ______.",
    options: ["Interest", "Dividends", "Expenses", "Lapses"],
    answer: 0,
    explanation: "The net premium assumes no expenses, only mortality and interest."
  }
];
