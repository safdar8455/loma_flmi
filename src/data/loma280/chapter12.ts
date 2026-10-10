import { Question } from '../../types';

export const chapter12Questions: Question[] = [
  {
    id: 1,
    lo: "12A",
    question: "Katarina is hospitalized for five days. Her traditional medical expense policy covers her room and board, medications, and laboratory services. These specific benefits fall under which category?",
    options: ["Surgical expenses", "Physicians' expenses", "Major medical expenses", "Hospital expenses"],
    answer: 3,
    explanation: "Hospital expenses include charges for specific inpatient and outpatient hospital services such as room and board, medications, and laboratory services."
  },
  {
    id: 2,
    lo: "12A",
    question: "A traditional medical expense insurance product that provides benefits based on the actual amount of the insured's financial loss is said to provide:",
    options: ["Deferred benefits", "Indemnity benefits", "Fixed benefits", "Valued benefits"],
    answer: 1,
    explanation: "Traditional medical expense insurance products provide indemnity benefits (or reimbursement benefits), which are based on the actual amount of the insured's financial loss."
  },
  {
    id: 3,
    lo: "12A",
    question: "Basic medical expense coverage typically provides 'first-dollar coverage'. This means:",
    options: ["The insurer begins to reimburse eligible expenses without requiring an out-of-pocket contribution first", "The policy only pays for the first day of a hospital stay", "The insurer only pays one dollar for every ten dollars spent", "The insured must pay the first dollar of any claim"],
    answer: 0,
    explanation: "First-dollar coverage means the insurer begins to reimburse the insured for eligible medical expenses without first requiring an out-of-pocket contribution (like a deductible) from the insured."
  },
  {
    id: 4,
    lo: "12A",
    question: "Which of the following is typically a characteristic of BASIC medical expense coverage?",
    options: ["Limited benefits for specific types of medical care", "Comprehensive coverage for all medical needs", "High maximum benefit limits", "Coverage for preventive care only"],
    answer: 0,
    explanation: "Benefits provided under basic medical expense policies typically are limited, and many types of medical expenses are not covered."
  },
  {
    id: 5,
    lo: "12A",
    question: "Traditional medical expense insurance usually provides three separate types of coverage. Which of these is NOT one of those traditional basic types?",
    options: ["Hospital expenses", "Physicians' expenses", "Surgical expenses", "Long-term care expenses"],
    answer: 3,
    explanation: "The three types of traditional basic coverage are hospital, surgical, and physicians' expenses."
  },
  {
    id: 6,
    lo: "12A",
    question: "Dr. Smith visits a patient in the hospital to monitor their recovery. The charges for this visit are covered under which type of basic medical expense coverage?",
    options: ["Physicians' expenses", "Surgical expenses", "Nursing expenses", "Hospital expenses"],
    answer: 0,
    explanation: "Physicians' expenses include charges associated with physicians' visits both in and out of the hospital."
  },
  {
    id: 7,
    lo: "12A",
    question: "A surgical expense policy covers charges for inpatient and outpatient surgical procedures. This policy is an example of:",
    options: ["Disability income coverage", "Major medical coverage", "Managed care", "Basic medical expense coverage"],
    answer: 3,
    explanation: "Surgical expense coverage is one of the three types of basic medical expense coverage."
  },
  {
    id: 8,
    lo: "12A",
    question: "Indemnity benefits are also known as __________ benefits.",
    options: ["Reimbursement", "Annuity", "Flat", "Valued"],
    answer: 0,
    explanation: "Indemnity benefits are also called reimbursement benefits because they reimburse the actual financial loss."
  },
  {
    id: 9,
    lo: "12B",
    question: "The amount that medical care providers within a particular geographic region commonly charge for a particular medical service is known as the:",
    options: ["Current interest rate", "Maximum out-of-pocket fee", "Standard premium rate", "Usual, customary, and reasonable (UCR) fee"],
    answer: 3,
    explanation: "The UCR fee is the amount that providers in a specific geographic region commonly charge for a particular service."
  },
  {
    id: 10,
    lo: "12B",
    question: "Kara Garner's major medical policy has a $500 calendar-year deductible. Last year she had $400 in expenses. This year she has $800 in expenses. How much must she pay of this year's $800 expenses to satisfy the deductible?",
    options: ["$0", "$400", "$500", "$100"],
    answer: 2,
    explanation: "Since it is a calendar-year deductible, she must pay the full $500 in the current year. Last year's expenses did not satisfy the deductible and do not roll over."
  },
  {
    id: 11,
    lo: "12B",
    question: "Duncan Wu has a $400 deductible and 20% coinsurance. He incurs $1,000 in expenses for his first claim of the year. How much does the INSURER pay?",
    options: ["$400", "$480", "$800", "$520"],
    answer: 1,
    explanation: "First, Duncan pays the $400 deductible. Remaining is $600. Coinsurance is 20% of $600 = $120. Total Duncan pays = $400 + $120 = $520. Insurer pays $1,000 - $520 = $480."
  },
  {
    id: 12,
    lo: "12B",
    question: "The purpose of expense participation features like deductibles and coinsurance in major medical policies is to:",
    options: ["Encourage insureds to control the amount of their medical expenses", "Increase the insurer's profit margins", "Bypass state insurance regulations", "Eliminate the need for medical underwriting"],
    answer: 0,
    explanation: "Cost-sharing requirements are designed to encourage insureds to be more mindful of healthcare costs and utilization."
  },
  {
    id: 13,
    lo: "12B",
    question: "A provision that specifies the policy will cover 100 percent of allowable medical expenses after the insured has paid a specified amount out-of-pocket is the:",
    options: ["Deductible provision", "Maximum out-of-pocket (stop-loss) provision", "Indemnity provision", "Coinsurance provision"],
    answer: 1,
    explanation: "The maximum out-of-pocket (or stop-loss) provision sets a limit on the total amount the insured must pay in a year, after which the insurer pays 100%."
  },
  {
    id: 14,
    lo: "12B",
    question: "Marisol Lopez has a $500 deductible, 20% coinsurance, and a $5,000 out-of-pocket maximum. In January she pays $900 in total cost-sharing. In May, she incurs $30,000 in expenses. What is the MOST Marisol will have to pay in May for these expenses?",
    options: ["$900", "$5,000", "$4,100", "$6,000"],
    answer: 2,
    explanation: "Her annual limit is $5,000. She already paid $900. $5,000 - $900 = $4,100 remaining. Even though 20% of $30,000 is $6,000, her out-of-pocket maximum limits her May payment to $4,100."
  },
  {
    id: 15,
    lo: "12B",
    question: "Which of the following is typically EXCLUDED from major medical coverage?",
    options: ["Routine dental treatments", "Physical therapy", "Semiprivate hospital room", "Medically necessary surgery"],
    answer: 0,
    explanation: "Routine dental treatments, eye exams, and cosmetic surgery (except corrective surgery for accidents) are common exclusions."
  },
  {
    id: 16,
    lo: "12B",
    question: "Allowable expenses are defined as:",
    options: ["Expenses paid for by the government", "Expenses that the insured incurs that are covered under the policy", "Only expenses that are less than $100", "Any expense the insured wants to submit"],
    answer: 1,
    explanation: "Major medical policies pay benefits only for allowable expenses—those incurred by the insured that are covered under the policy."
  },
  {
    id: 17,
    lo: "12B",
    question: "A deductible that applies to the total of all allowable expenses an insured incurs during a given calendar year is a:",
    options: ["Per-cause deductible", "Lifetime deductible", "Indemnity deductible", "Calendar-year deductible"],
    answer: 3,
    explanation: "A calendar-year deductible applies to all claims within that specific year."
  },
  {
    id: 18,
    lo: "12B",
    question: "If an insured submits a claim for an amount GREATER than the maximum benefit (based on UCR fees) allowed by the insurer, who is responsible for the excess?",
    options: ["The medical provider must write it off", "The state insurance fund", "The insurer pays it automatically", "The insured is responsible for paying expenses that exceed the maximum benefit amount"],
    answer: 3,
    explanation: "The insurer only pays up to the maximum benefit amount; any balance is the insured's responsibility."
  },
  {
    id: 19,
    lo: "12B",
    question: "Which expense participation requirement requires the insured to pay a specified PERCENTAGE of allowable expenses?",
    options: ["Coinsurance", "Deductible", "Indemnity", "UCR fee"],
    answer: 0,
    explanation: "Coinsurance is cost-sharing expressed as a percentage of the remaining bill after the deductible is paid."
  },
  {
    id: 20,
    lo: "12B",
    question: "If a major medical policy has a 20 percent coinsurance requirement, what percentage does the INSURER typically pay?",
    options: ["80%", "50%", "100%", "20%"],
    answer: 0,
    explanation: "If the insured pays 20%, the insurer pays the remaining 80%."
  },
  {
    id: 21,
    lo: "12B",
    question: "Are excluded expenses counted toward the insured's deductible?",
    options: ["Only for emergency care", "No, excluded or nonallowable expenses are not counted toward the insured’s deductible", "Yes, always", "Only if the expense is more than $1,000"],
    answer: 1,
    explanation: "Only allowable (covered) expenses can satisfy the deductible requirement."
  },
  {
    id: 22,
    lo: "12B",
    question: "An insured has a $500 deductible and a 20% coinsurance requirement. He incurs a $300 bill. How much must he pay?",
    options: ["$300", "$0", "$240", "$60"],
    answer: 0,
    explanation: "Since the bill is less than the $500 deductible, the insured must pay the full $300 out-of-pocket."
  },
  {
    id: 23,
    lo: "12B",
    question: "In applying the logic of major medical policies, which order is correct for determining the insured's payment?",
    options: ["Deductible first, then Coinsurance on the remainder", "Coinsurance first, then Deductible", "UCR fee first, then Coinsurance on the total bill", "Max out-of-pocket first, then Deductible"],
    answer: 0,
    explanation: "The insured satisfies the deductible first, then pays coinsurance on the remaining amount."
  },
  {
    id: 24,
    lo: "12B",
    question: "What happens to the coinsurance requirement once the insured hits their maximum out-of-pocket (stop-loss) limit?",
    options: ["The policy is cancelled", "It remains the same", "It increases to 50%", "It is waived, and the insurer pays 100% of further allowable expenses for that year"],
    answer: 3,
    explanation: "The stop-loss provision triggers the insurer to pay 100% of further allowable expenses for the remainder of the year."
  },
  {
    id: 25,
    lo: "12B",
    question: "A policy specifies that room and board are covered for a semiprivate room. If the insured chooses a private room, who pays the difference?",
    options: ["The hospital", "The insured", "The government", "The insurer"],
    answer: 1,
    explanation: "If the policy limits coverage to a semiprivate room, the insured must pay the additional cost for a private room."
  },
  {
    id: 26,
    lo: "12C",
    question: "Health benefits that provide for routine examinations, preventive work, and procedures for tooth decay are known as:",
    options: ["Prescription drug coverage", "Vision care coverage", "Dental expense coverage", "Medical expense coverage"],
    answer: 2,
    explanation: "Dental expense coverage provides benefits for routine exams, preventive work, and disease treatment for teeth/jaws."
  },
  {
    id: 27,
    lo: "12C",
    question: "A standalone vision care policy typically covers one routine eye examination per:",
    options: ["Lifetime", "Month", "Quarter", "Year"],
    answer: 3,
    explanation: "Vision care coverage generally provides benefits to cover one routine eye examination per year."
  },
  {
    id: 28,
    lo: "12C",
    question: "Prescription drug coverage often requires the insured to pay a DIFFERENT amount for generic drugs versus brand-name drugs. This is an example of:",
    options: ["Expense participation", "Out-of-pocket maximum", "Indemnity", "Deductible"],
    answer: 0,
    explanation: "Tiered copayments for drugs are a form of expense participation/cost-sharing."
  },
  {
    id: 29,
    lo: "12C",
    question: "Dental expense coverage is most commonly provided under a:",
    options: ["Major medical policy", "Stand-alone dental expense policy", "Government program", "Life insurance rider"],
    answer: 1,
    explanation: "Dental expense coverage typically is provided under a stand-alone dental expense policy."
  },
  {
    id: 30,
    lo: "12C",
    question: "Which type of 'other' medical coverage might pay for eyeglass frames or contact lenses?",
    options: ["Surgical", "Vision care coverage", "Dental", "Basic medical"],
    answer: 1,
    explanation: "Vision care coverage specifies maximum benefit amounts for eyeglass lenses/frames and contact lenses."
  },
  {
    id: 31,
    lo: "12C",
    question: "Prescription drug coverage benefits are primarily for drugs that are:",
    options: ["Herbal remedies", "Only for heart disease", "Prescribed by a physician", "Available over the counter"],
    answer: 2,
    explanation: "This coverage provides benefits for drugs and medicines prescribed by a physician and not available over the counter."
  },
  {
    id: 32,
    lo: "12C",
    question: "Can prescription drug costs be a covered expense under a MAJOR MEDICAL policy?",
    options: ["No, never", "Yes, they can be a covered expense, but can also be provided stand-alone", "Only if the bill is over $500", "Only for children"],
    answer: 1,
    explanation: "Prescription drug costs are a covered expense under many major medical policies, though they can also be stand-alone."
  },
  {
    id: 33,
    lo: "12C",
    question: "Under a prescription drug plan, an insured usually pays their share of the cost:",
    options: ["Out-of-pocket at the time of purchase", "Only if the drug doesn't work", "Monthly with their premium", "At the end of the year"],
    answer: 0,
    explanation: "Insureds typically pay a portion (copay) at the pharmacy counter."
  },
  {
    id: 34,
    lo: "12D",
    question: "A health care financing and delivery system that provides comprehensive services to members (subscribers) in a specific area is a:",
    options: ["Health maintenance organization (HMO)", "Point-of-service (POS) plan", "Preferred provider organization (PPO)", "Traditional indemnity plan"],
    answer: 0,
    explanation: "An HMO is a system that integrates financing and delivery for subscribers in a specific geographic area."
  },
  {
    id: 35,
    lo: "12D",
    question: "In a managed care plan, the group of physicians and hospitals that have contracted to deliver services to plan members is the:",
    options: ["Subscribers", "Indemnity pool", "Gatekeepers", "Network"],
    answer: 3,
    explanation: "A network is a group of physicians, hospitals, and others contracted with a specific managed care plan."
  },
  {
    id: 36,
    lo: "12D",
    question: "The network member who coordinates a plan member's medical care and serves as a 'gatekeeper' to specialized services is the:",
    options: ["Primary care provider (PCP)", "Anesthesiologist", "Specialist", "Ancillary provider"],
    answer: 0,
    explanation: "The PCP (or primary care physician) coordinates care and serves as a gatekeeper to additional services."
  },
  {
    id: 37,
    lo: "12D",
    question: "Melvin Smith visits his PCP for a sprained ankle. He pays a specified, fixed amount at the time of the office visit. This payment is a:",
    options: ["Copayment", "Premium", "Coinsurance", "Deductible"],
    answer: 0,
    explanation: "A copayment is a specified, fixed amount paid at the time medical services are received."
  },
  {
    id: 38,
    lo: "12D",
    question: "Which type of managed care plan resembles a traditional indemnity plan by reimbursing providers on a discounted 'fee-for-service' basis?",
    options: ["HMO", "PPO", "CDHP", "POS plan"],
    answer: 1,
    explanation: "A PPO arrangements involve network providers agreeing to discount fees and being reimbursed on a fee-for-service basis."
  },
  {
    id: 39,
    lo: "12D",
    question: "An HMO typically DOES NOT provide benefits for services rendered by:",
    options: ["Hospitals", "Primary care providers", "In-network providers", "Non-network providers (except for emergencies)"],
    answer: 3,
    explanation: "HMOs generally do not provide benefits for services rendered by non-network providers, with limited exceptions (like emergency care)."
  },
  {
    id: 40,
    lo: "12D",
    question: "A point-of-service (POS) plan allows members to choose medical care from inside or outside the network. However, use of non-network providers results in:",
    options: ["Cancellation of the policy", "A penalty tax", "A lower level of coverage", "A 100% refund"],
    answer: 2,
    explanation: "POS plans provide a lower level of coverage for services received from non-network providers."
  },
  {
    id: 41,
    lo: "12D",
    question: "Managed care plans integrate which two things?",
    options: ["Premium collection and Dividend payment", "Life insurance and Health insurance", "Financing/management of care and delivery of services", "Global health and Local health"],
    answer: 2,
    explanation: "Managed care integrates the financing and management of health care with the delivery of services."
  },
  {
    id: 42,
    lo: "12D",
    question: "An HMO subscriber usually pays a fixed, periodic (monthly) premium. Does this premium change based on how often they use services?",
    options: ["Only for children", "No, the premium covers most services regardless of frequency", "Only if they visit a specialist", "Yes, it increases with every visit"],
    answer: 1,
    explanation: "The premium covers the cost of most services, no matter how often the member uses those services."
  },
  {
    id: 43,
    lo: "12D",
    question: "In a 'PCP-based system', specialized care requires:",
    options: ["The same copay as a PCP", "Payment in gold", "Authorization or a reference from the PCP", "No authorization at all"],
    answer: 2,
    explanation: "A plan member often must obtain authorization or a reference from their PCP to receive specialized care."
  },
  {
    id: 44,
    lo: "12D",
    question: "Which of the following service providers would be considered 'ancillary' in a network?",
    options: ["Dentist", "Surgeon", "Radiologist", "Primary care physician"],
    answer: 2,
    explanation: "Ancillary providers include labs, radiologists, home health care, and therapists."
  },
  {
    id: 45,
    lo: "12D",
    question: "A managed care plan subscriber receives an office visit, X-rays, and a prescription. They pay a $30 copay for the visit and a $20 copay for drugs. How are the X-rays usually handled in an HMO?",
    options: ["Covered by the managed care plan (often without extra copay for ancillary services during a visit)", "Paid for by the insured", "Not covered", "Billed separately at full price"],
    answer: 0,
    explanation: "In多くのHMO, once the copay for the visit is paid, covered ancillary services like X-rays performed during the visit are fully covered by the plan."
  },
  {
    id: 46,
    lo: "12D",
    question: "HMO members are often referred to as:",
    options: ["Policyholders", "Annuity owners", "Patients", "Subscribers"],
    answer: 3,
    explanation: "HMO members are frequently called subscribers."
  },
  {
    id: 47,
    lo: "12D",
    question: "Does a typical HMO require subscribers to pay annual deductibles?",
    options: ["Only for non-network care", "No, an HMO generally does not require subscribers to pay deductibles or coinsurance", "Only for surgery", "Yes, usually $500"],
    answer: 1,
    explanation: "HMOs typically use copayments rather than deductibles and coinsurance."
  },
  {
    id: 48,
    lo: "12D",
    question: "Which managed care plan gives INCENTIVES for members to use contracted providers but still provides some coverage for non-contracted providers?",
    options: ["CDHP", "PPO", "Indemnity Plan", "HMO"],
    answer: 1,
    explanation: "A PPO provides incentives to use the network but offers reduced coverage for out-of-network care."
  },
  {
    id: 49,
    lo: "12D",
    question: "A POS plan usually requires a plan member to select a:",
    options: ["Pharmacy", "State official", "Primary care provider", "Specialist"],
    answer: 2,
    explanation: "A point-of-service plan generally requires members to select a PCP."
  },
  {
    id: 50,
    lo: "12D",
    question: "What is the GATEKEEPER's role in managed care?",
    options: ["To collect premiums", "To coordinate medical care and manage access to specialists", "To sell new policies", "To deny all claims"],
    answer: 1,
    explanation: "The gatekeeper (PCP) coordinates care and controls access to more expensive specialized services."
  },
  {
    id: 51,
    lo: "12E",
    question: "An employer-sponsored health benefit plan that gives individuals freedom to choose providers but requires them to assume more financial risk is a:",
    options: ["Managed care plan", "Consumer-driven health plan (CDHP)", "Fixed annuity", "Medi-gap plan"],
    answer: 1,
    explanation: "A CDHP gives freedom of choice but shifts financial risk/responsibility to the consumer."
  },
  {
    id: 52,
    lo: "12E",
    question: "The two key components of a CDHP are financial incentives for individuals to manage costs and:",
    options: ["Mandatory surgery", "Guaranteed profits for the insurer", "Information (often Internet-based) to enable informed decisions", "Free life insurance"],
    answer: 2,
    explanation: "CDHPs rely on incentives and information tools so participants can make informed health care decisions."
  },
  {
    id: 53,
    lo: "12E",
    question: "A medical expense insurance plan with a high deductible (e.g., $1,300+) that typically costs less than traditional insurance is a:",
    options: ["Low-value plan", "Comprehensive plan", "Basic plan", "High-deductible health plan (HDHP)"],
    answer: 3,
    explanation: "HDHPs have high deductibles and lower premiums, often used in conjunction with CDHPs."
  },
  {
    id: 54,
    lo: "12E",
    question: "Katrina Whitley has a CDHP with a $2,500 employer-funded account and a $1,300 HDHP deductible. She incurs $4,800 in expenses. How much does Katrina pay OUT-OF-POCKET?",
    options: ["$1,000", "$4,800", "$2,300", "$1,300"],
    answer: 3,
    explanation: "$2,500 from the account covers the first chunk. The next $1,300 is the HDHP deductible which Katrina must pay. The insurer pays the remaining $1,000 ($4,800 - $2,500 - $1,300)."
  },
  {
    id: 55,
    lo: "12E",
    question: "Which CDHP account is tax-advantaged, portable (taken when changing jobs), and allows unused funds to carry over year-to-year?",
    options: ["Health care flexible spending account (HCFSA)", "Standard checking account", "Health savings account (HSA)", "Health reimbursement arrangement (HRA)"],
    answer: 2,
    explanation: "HSAs are portable and allow carry-overs with significant tax advantages."
  },
  {
    id: 56,
    lo: "12E",
    question: "To be ELIGIBLE to contribute to a Health Savings Account (HSA), an individual must be covered by a:",
    options: ["HMO", "High-deductible health plan (HDHP)", "PPO", "Medicare"],
    answer: 1,
    explanation: "Coverage by an HDHP is a requirement for HSA eligibility."
  },
  {
    id: 57,
    lo: "12E",
    question: "Contributions to an HSA are NOT taxed provided they do not exceed:",
    options: ["Maximum annual limits (e.g., $3,350 for single in 2016)", "$1,000", "10% of salary", "The amount of life insurance owned"],
    answer: 0,
    explanation: "HSA contributions are tax-free up to federal annual limits."
  },
  {
    id: 58,
    lo: "12E",
    question: "HSA distributions used for NONMEDICAL expenses are subject to income tax and an additional __________ percent penalty tax.",
    options: ["0%", "20%", "10%", "50%"],
    answer: 1,
    explanation: "A 20 percent penalty tax applies to nonmedical HSA distributions (with some exceptions like for disabled or elderly persons)."
  },
  {
    id: 59,
    lo: "12E",
    question: "Which CDHP account allows ONLY the employer to make contributions?",
    options: ["IRA", "HSA", "HCFSA", "HRA"],
    answer: 3,
    explanation: "An HRA (Health Reimbursement Arrangement) is employer-sponsored and employer-funded only."
  },
  {
    id: 60,
    lo: "12E",
    question: "In an HRA, if an employee takes a distribution for NONMEDICAL expenses, what happens?",
    options: ["They pay a 20% fine", "Nothing", "The account loses its tax-favored status", "It is encouraged"],
    answer: 2,
    explanation: "Distributions for nonmedical expenses from an HRA are prohibited; taking one causes the account to lose tax-favored status."
  },
  {
    id: 61,
    lo: "12E",
    question: "A health care flexible spending account (HCFSA) is funded through:",
    options: ["Government grants", "Life insurance dividends", "Pretax salary reduction contributions from the employee", "Employer-only contributions"],
    answer: 2,
    explanation: "HCFSAs allow employees to set aside pretax wages for medical expenses."
  },
  {
    id: 62,
    lo: "12E",
    question: "What is the 'use-it-or-lose-it' rule generally associated with HCFSAs?",
    options: ["Unused money goes to the government", "The account is deleted after 5 years", "If you don't use it, your premium goes up", "Employees must spend the money or forfeit it at the end of the year (with limited rollover options)"],
    answer: 3,
    explanation: "An HCFSA stipulates that employees forfeit unused amounts (though usually up to $500 can roll over)."
  },
  {
    id: 63,
    lo: "12E",
    question: "HCFSA distributions must be 'substantiated'. This means:",
    options: ["The doctor must sign a contract", "The employee must guess their cost", "The employee must prove they incurred the expense before receiving reimbursement", "The government must approve the surgery"],
    answer: 2,
    explanation: "Substantiation requires proof of incurring the qualified expense."
  },
  {
    id: 64,
    lo: "12E",
    question: "Which of the following accounts is NOT portable?",
    options: ["HSA", "HRA and HCFSA", "IRA", "None of the above"],
    answer: 1,
    explanation: "HRAs and HCFSAs are generally not portable when an employee leaves the company; HSAs are portable."
  },
  {
    id: 65,
    lo: "12E",
    question: "Investment earnings in an HSA grow on a __________ basis.",
    options: ["Tax-deferred", "Fully taxable", "Tax-free forever", "Only taxed at death"],
    answer: 0,
    explanation: "HSA earnings grow tax-deferred."
  },
  {
    id: 66,
    lo: "12F",
    question: "The 2010 act that aimed to make health care more affordable and created online 'exchanges' is the:",
    options: ["Health Insurance Portability and Accountability Act (HIPAA)", "Social Security Act", "Patient Protection and Affordable Care Act (ACA)", "Employee Retirement Income Security Act (ERISA)"],
    answer: 2,
    explanation: "The ACA (or Affordable Care Act) enacted in 2010 introduced these changes."
  },
  {
    id: 67,
    lo: "12F",
    question: "Under the ACA, the requirement that health insurers accept all applicants regardless of health status, gender, or age is:",
    options: ["Essential benefit", "Stop-loss", "Guaranteed renewal", "Guaranteed issue"],
    answer: 3,
    explanation: "Guaranteed issue means insurers must accept all applicants."
  },
  {
    id: 68,
    lo: "12F",
    question: "Guaranteed renewal under the ACA means:",
    options: ["The policy renewed automatically for 100 years", "The insurer must refund 10% every year", "The insurer must continue coverage at the option of the insured, as long as premiums are paid", "The premium can never change"],
    answer: 2,
    explanation: "Guaranteed renewal requires insurers to keep the policy active as long as the insured pays the premium."
  },
  {
    id: 69,
    lo: "12F",
    question: "Essential health benefits (EHBs) include 10 categories of care. Which of these is NOT an EHB category?",
    options: ["Prescription drugs", "Maternity and newborn care", "Cosmetic surgery for vanity", "Mental health and substance abuse"],
    answer: 2,
    explanation: "Cosmetic surgery is NOT an essential health benefit. Maternity, mental health, and Rx drugs are."
  },
  {
    id: 70,
    lo: "12F",
    question: "The ACA PROHIBITS health plans from imposing annual or lifetime limits on covering:",
    options: ["Essential health benefits", "Only dental care", "All medical care ever", "Only vision care"],
    answer: 0,
    explanation: "Plans cannot impose annual or lifetime dollar limits on essential health benefits."
  },
  {
    id: 71,
    lo: "12F",
    question: "Under the ACA, medical expense plans (including HDHPs) must provide benefits for PREVENTIVE care:",
    options: ["With a $50 copay", "Without imposing cost-sharing mechanisms such as deductibles", "After a $1,000 deductible", "Only if the insured is under 18"],
    answer: 1,
    explanation: "ACA-compliant plans must cover preventive care with zero cost-sharing."
  },
  {
    id: 72,
    lo: "12F",
    question: "A 'health insurance exchange' allows individuals and small businesses to purchase:",
    options: ["Car insurance", "Annuities only", "Qualified health plans (QHPs)", "Life insurance riders"],
    answer: 2,
    explanation: "Exchanges are marketplaces for standardized 'Qualified Health Plans'."
  },
  {
    id: 73,
    lo: "12G",
    question: "Disability income coverage is classified as either short-term or long-term based on the length of its:",
    options: ["Lapse period", "Grace period", "Benefit period", "Elimination period"],
    answer: 2,
    explanation: "The benefit period determines whether coverage is short-term or long-term."
  },
  {
    id: 74,
    lo: "12G",
    question: "Short-term INDIVIDUAL disability income coverage typically provides a maximum benefit period of:",
    options: ["Until age 65", "One to five years", "13 to 26 weeks", "Five to ten years"],
    answer: 1,
    explanation: "Individual short-term DI coverage usually spans 1 to 5 years."
  },
  {
    id: 75,
    lo: "12G",
    question: "Long-term INDIVIDUAL disability insurance for illnesses commonly extends until the insured reaches age:",
    options: ["55", "75", "65", "60"],
    answer: 2,
    explanation: "For individual policies, long-term illness benefits often extend to age 65."
  },
  {
    id: 76,
    lo: "12G",
    question: "Short-term GROUP disability income coverage typically provides a maximum benefit period of:",
    options: ["Exactly 10 years", "2 to 5 years", "Lifetime", "1 year or less (e.g., 13, 26, or 39 weeks)"],
    answer: 3,
    explanation: "Group short-term DI is for very short durations, usually measured in weeks."
  },
  {
    id: 77,
    lo: "12H",
    question: "At one time, policies defined 'total disability' as being unable to perform the duties of ANY occupation. This is known as a(n):",
    options: ["Usually liberal definition", "Any occupation definition", "Presumptive definition", "Own occupation definition"],
    answer: 1,
    explanation: "The 'any occupation' definition is very strict, requiring the insured to be unable to work at all."
  },
  {
    id: 78,
    lo: "12H",
    question: "Most disability policies today use a 'current usual' definition. This definition typically considers an insured disabled if they cannot perform their 'regular occupation' for the first:",
    options: ["Until age 65", "Two to five years", "Month only", "30 days"],
    answer: 1,
    explanation: "The split definition usually covers the regular/own occupation for the first 2-5 years."
  },
  {
    id: 79,
    lo: "12H",
    question: "Enzo Scanno, a surgeon, lost his left arm. He can no longer perform surgery but can teach at a medical college. Under a 'current usual' definition (2-year split), what happens after 2 years?",
    options: ["He no longer meets the definition of total disability and benefits stop", "He gets benefits for life", "The policy is voided", "His benefits increase"],
    answer: 0,
    explanation: "After 2 years, the definition shifts to 'any occupation' suited to his training (like teaching). Since he can teach, he is no longer considered totally disabled."
  },
  {
    id: 80,
    lo: "12H",
    question: "A condition that automatically causes the insured to be considered totally disabled (like total blindness or loss of two limbs) is a:",
    options: ["Partial disability", "Probationary disability", "Reinstated disability", "Presumptive disability"],
    answer: 3,
    explanation: "Presumptive disabilities (blindness, loss of speech/hearing/limbs) trigger full benefits immediately."
  },
  {
    id: 81,
    lo: "12H",
    question: "Under the 'own previous occupation' definition, will benefits be paid if the surgeon in the example starts teaching?",
    options: ["Only if the teacher's salary is zero", "Yes, even if gainfully employed in another job, as long as prevented from the specific occupation duties", "Only 50%", "No, income stops"],
    answer: 1,
    explanation: "Own-occ is the most liberal definition, paying if you can't do your specific job, even if you do another one."
  },
  {
    id: 82,
    lo: "12I",
    question: "The specific amount of time that an insured must be disabled BEFORE becoming eligible to receive policy benefits is the:",
    options: ["Elimination period (waiting period)", "Benefit period", "Grace period", "Lapse period"],
    answer: 0,
    explanation: "Also called a benefit waiting period, the elimination period is like a time-deductible."
  },
  {
    id: 83,
    lo: "12I",
    question: "What is the relationship between the elimination period and the premium cost?",
    options: ["There is no relationship", "Shorter elimination = Lower premium", "Elimination periods increase premiums always", "Longer elimination = Lower premium"],
    answer: 3,
    explanation: "The longer the elimination period, the lower the cost because the insurer avoids small, short-term claims."
  },
  {
    id: 84,
    lo: "12I",
    question: "The length of elimination periods in short-term and long-term INDIVIDUAL policies typically ranges from:",
    options: ["One week to 15 days", "30 days to 6 months", "1 day to 1 week", "Exactly 1 year"],
    answer: 1,
    explanation: "30 days to 6 months is standard for individual DI elimination periods."
  },
  {
    id: 85,
    lo: "12J",
    question: "A disability benefit that provides for periodic increases based on an index like the Consumer Price Index (CPI) is a:",
    options: ["Partial benefit", "Cost-of-living-adjustment (COLA) benefit", "Future purchase option", "Premium refund"],
    answer: 1,
    explanation: "COLA riders keep benefits in line with inflation."
  },
  {
    id: 86,
    lo: "12J",
    question: "The 'future purchase option' benefit grants the insured the right to:",
    options: ["Cancel the policy early", "Bypass the elimination period", "Increase the disability benefit amount as earnings increase without proof of insurability", "Buy more life insurance"],
    answer: 2,
    explanation: "FPO riders allow for increased coverage as salary grows, without requiring new medical exams."
  },
  {
    id: 87,
    lo: "12K",
    question: "Disability income benefits are typically NOT paid if the disability results from:",
    options: ["Pneumonia", "A car accident", "A heart attack", "Intentionally self-inflicted injuries"],
    answer: 3,
    explanation: "Self-inflicted injuries, war acts, and crimes are standard exclusions."
  },
  {
    id: 88,
    lo: "12L",
    question: "Specialized coverage designed to provide benefits to a BUSINESS if an insured key person becomes disabled is:",
    options: ["Social Security", "Disability buyout coverage", "Key person disability coverage", "Personal DI"],
    answer: 2,
    explanation: "Key person DI protects the business from the loss of a key employee's services."
  },
  {
    id: 89,
    lo: "12L",
    question: "Coverage designed to fund the purchase of a partner's interest in a business if they become disabled is:",
    options: ["Disability buyout coverage", "Key person disability", "Annuitycertain", "Group long-term DI"],
    answer: 0,
    explanation: "Buyout coverage funds buy-sell agreements triggered by disability."
  },
  {
    id: 90,
    lo: "12G",
    question: "Group long-term DI policies often extend the maximum benefit period to:",
    options: ["Zero", "Lifetime for all causes", "Age 70 or normal retirement age", "Exactly 2 years"],
    answer: 2,
    explanation: "Group long-term DI often coordinates to end at retirement age."
  },
  {
    id: 91,
    lo: "12M",
    question: "Long-term care insurance (LTCI) provides benefits for medical or other services needed by an insured who, because of a serious impairment, needs care in:",
    options: ["Only during business hours", "Only a foreign country", "A hospital only", "Their own home or a qualified facility"],
    answer: 3,
    explanation: "LTCI covers home care and facility care (skilled nursing, etc.)."
  },
  {
    id: 92,
    lo: "12M",
    question: "A reduction in a person's ability to think, reason, or remember (like Alzheimer's) is a:",
    options: ["Physical impairment", "ADL failure", "Cognitive impairment", "Financial impairment"],
    answer: 2,
    explanation: "A cognitive impairment is a reduction in mental ability."
  },
  {
    id: 93,
    lo: "12M",
    question: "Activities of daily living (ADLs) are used to measure functional status. Which of the following is an ADL?",
    options: ["Bathing", "Shopping for food", "Cooking", "Managing finances"],
    answer: 0,
    explanation: "Bathing, dressing, toileting, and eating are ADLs. Cooking and shopping are IADLs."
  },
  {
    id: 94,
    lo: "12M",
    question: "A standard 'benefit trigger' for LTCI is the inability to perform at least __________ ADLs without assistance.",
    options: ["One", "Six", "Three", "Two"],
    answer: 3,
    explanation: "The 'two-of-six' ADL trigger is standard for LTCI."
  },
  {
    id: 95,
    lo: "12M",
    question: "A licensed healthcare practitioner must certify that the insured needs help with ADLs for a period expected to last at least __________ days.",
    options: ["365", "90", "60", "30"],
    answer: 1,
    explanation: "90 days is the standard expected duration trigger for LTCI benefits."
  },
  {
    id: 96,
    lo: "12M",
    question: "In an LTCI policy, the elimination period refers to:",
    options: ["How long the policy is in force before death", "The date the insurer can cancel the policy", "The time it takes to file a claim", "The number of days the insured must receive care before benefit payments can begin"],
    answer: 3,
    explanation: "The elimination period in LTCI is essentially a waiting period for payments after care starts."
  },
  {
    id: 97,
    lo: "12M",
    question: "Which benefit payment method pays a stated dollar amount regardless of the actual expenses incurred?",
    options: ["Indemnity (per diem) method", "Participation method", "Reimbursement method", "UCR method"],
    answer: 0,
    explanation: "Indemnity (per diem) pays a flat daily rate regardless of cost."
  },
  {
    id: 98,
    lo: "12M",
    question: "The 'pool of money' method for LTCI lifetime benefits is calculated by:",
    options: ["Multiplying the daily benefit amount by the number of years in the benefit period", "Summing the insured's total bank account", "Guessing", "Dividing the premium by 10"],
    answer: 0,
    explanation: "The pool of money method multiplies the daily/monthly amount by the period (e.g. $250/day * 4 years)."
  },
  {
    id: 99,
    lo: "12M",
    question: "Managed care plans manage access through use of:",
    options: ["Annuity units", "Agents", "Government officials", "Provider networks"],
    answer: 3,
    explanation: "Networks are the primary tool for managing access/delivery in managed care."
  },
  {
    id: 100,
    lo: "12M",
    question: "Which of the following is an example of an 'instrumental activity of daily living' (IADL)?",
    options: ["Eating", "Toileting", "Bathing", "Using the telephone"],
    answer: 3,
    explanation: "IADLs are more complex tasks like shopping, cooking, and using a phone. ADLs are basic self-care."
  }
];
