import { Question } from '../../types';

export const chapter6Questions: Question[] = [
  // === 6A: NICHE & MULTI-LIFE, JUVENILE, D2C POLICIES (1-18) ===
  {
    id: 1,
    lo: "6A List the basic features of multi-life policies, juvenile insurance policies, and direct-to-consumer policies and explain how each type of coverage is typically underwritten",
    question: "A multi-life policy is written on the lives of two or more individuals. Under what circumstances is a 'joint life' (first-to-die) insurance policy typically purchased?",
    options: [
      "By couples wishing to replace the income of whoever dies first to help the survivor pay ongoing living expenses",
      "By parents seeking to cover the final expenses and estate taxes after all members of a family have deceased",
      "By business entities seeking to establish an out-of-state irrevocable trust with no discernible connection",
      "By creditors seeking to guarantee that a mortgage will be fully repaid regardless of any policy lapses"
    ],
    answer: 0,
    explanation: "A joint life parent/first-to-die policy pays proceeds immediately upon the death of the first insured, which is ideal for replacing the deceased's active salary and supporting the survivor."
  },
  {
    id: 2,
    lo: "6A List the basic features of multi-life policies, juvenile insurance policies, and direct-to-consumer policies and explain how each type of coverage is typically underwritten",
    question: "A married couple is designing an estate plan to cover prospective federal estate taxes and preserve asset values for their children. Which type of multi-life policy is best suited for this specific goal?",
    options: [
      "Last survivor life insurance (second-to-die)",
      "First-to-die joint life insurance",
      "Stranger-originated life insurance (STOLI)",
      "Direct-to-consumer guaranteed-issue term plan"
    ],
    answer: 0,
    explanation: "Last survivor (second-to-die) insurance pays proceeds only after all insured individuals have died, providing necessary liquid cash exactly when estate taxes come due."
  },
  {
    id: 3,
    lo: "6A List the basic features of multi-life policies, juvenile insurance policies, and direct-to-consumer policies and explain how each type of coverage is typically underwritten",
    question: "Underwriter Alice is evaluating a last survivor life insurance case. When establishing the premium rate using the 'average-age' approach, how does Alice calculate the premium compared to separate single-life policies?",
    options: [
      "The average-age approach usually results in a lower premium than if the individuals purchased separate policies",
      "The average-age approach requires doubling the highest individual risk premium",
      "The average-age approach requires matching the premium of the least healthy applicant",
      "The average-age approach is calculated by dividing total asset value by the current quick ratio"
    ],
    answer: 0,
    explanation: "The average-age approach base-rates the joint risk of the group, which typically generates a lower combined premium than separate policies for each person."
  },
  {
    id: 4,
    lo: "6A List the basic features of multi-life policies, juvenile insurance policies, and direct-to-consumer policies and explain how each type of coverage is typically underwritten",
    question: "Why are the medical underwriting standards for a 'last survivor' (second-to-die) life insurance policy generally more lenient than for single-life policies?",
    options: [
      "Because the death benefit is not payable until BOTH insureds die, meaning the insurer's liability is deferred",
      "Because the government prohibits charging table-rated premiums on estate planning contracts",
      "Because last survivor policies do not allow the use of standard attending physician statements",
      "Because the cash surrender value of the policy is automatically assigned to a partner reinsurance treaty"
    ],
    answer: 0,
    explanation: "Since the benefit is not paid until both die, the healthier individual is expected to survive and defer the claim, allowing lenient underwriting on the less healthy applicant."
  },
  {
    id: 5,
    lo: "6A List the basic features of multi-life policies, juvenile insurance policies, and direct-to-consumer policies and explain how each type of coverage is typically underwritten",
    question: "What is the standard administrative protocol when a multi-life application includes one proposed insured who is classified as a ratable (substandard) risk?",
    options: [
      "The policy can typically be issued at an increased premium rate adjusted for that risk",
      "The entire application must be automatically denied under NAIC anti-discrimination rules",
      "The ratable individual must be unconsented and replaced with a child under age 18",
      "The insurer must convert the contract to a guaranteed-issue D2C term model"
    ],
    answer: 0,
    explanation: "The presence of a ratable proposed insured does not force denial; the underwriter simply adjusts the joint rates upward to offset the extra mortality risk."
  },
  {
    id: 6,
    lo: "6A List the basic features of multi-life policies, juvenile insurance policies, and direct-to-consumer policies and explain how each type of coverage is typically underwritten",
    question: "When evaluating a joint life application, custom financial underwriting requires that Alice must specifically calculate and consider:",
    options: [
      "The projected income needs of the surviving insured upon the death of the first insured",
      "The exact body mass index of the primary designated beneficiary's children",
      "The business's return-on-equity (ROE) ratio using a standard tax transcript",
      "The number of times the applicants filed for bankruptcy over the past fifteen years"
    ],
    answer: 0,
    explanation: "Since joint life pays on the first death to survive the partner, Alice must verify the amount requested is proportional to the survivor's dependency and income replacement needs."
  },
  {
    id: 7,
    lo: "6A List the basic features of multi-life policies, juvenile insurance policies, and direct-to-consumer policies and explain how each type of coverage is typically underwritten",
    question: "A grandfather applies for a whole life policy on his 10-year-old grandson, which is standard juvenile insurance. What is a primary personal purpose for acquiring such a policy?",
    options: [
      "To pay final expenses if the child dies, and to build cash values that can cover future expenses like college tuition",
      "To pay immediate dividends that can offset the grandfather's active business liabilities",
      "To satisfy a bank loan collateral agreement where the grandchild is the primary debtor",
      "To establish a legal tax-free Section 1035 exchange on the grandparent's existing term policy"
    ],
    answer: 0,
    explanation: "Juvenile policies cover immediate final expenses if tragedy strikes and build early cash value that the child can utilize for adulthood purchases like college or home down payments."
  },
  {
    id: 8,
    lo: "6A List the basic features of multi-life policies, juvenile insurance policies, and direct-to-consumer policies and explain how each type of coverage is typically underwritten",
    question: "Pinnacle Life’s underwriting rules specify limits on how soon a newborn's life can be insured. What is the standard industry timeframe regarding approving a newborn child's sheet?",
    options: [
      "Most insurers wait until the newborn is at least 15 days old and has been released from the hospital",
      "Insurers will only approve coverage once the child has completed twelve months of active schooling",
      "Newborn coverage is automatically approved at birth without requiring hospital discharge documentation",
      "Insurers cannot issue juvenile insurance unless the child is at least five years of age"
    ],
    answer: 0,
    explanation: "To manage neonatal mortality risk, insurers typically require the infant to be at least 15 days old and officially discharged home from the hospital."
  },
  {
    id: 9,
    lo: "6A List the basic features of multi-life policies, juvenile insurance policies, and direct-to-consumer policies and explain how each type of coverage is typically underwritten",
    question: "Underwriter Tim is reviewing an application for a child who was born prematurely. Which of the following represents the correct underwriting action?",
    options: [
      "Postpone issuing coverage until the child’s weight and other measurables reach normal levels for his age",
      "Unilaterally deny the file and report the family history to the MIB database",
      "Issue the policy immediately with a permanent flat extra premium of $15 per $1,000",
      "Waive the parent's consent requirement to issue a guaranteed-issue contract"
    ],
    answer: 0,
    explanation: "For premature infants, insurers postpone the risk selection until the infant has grown and met normal pediatric height/weight milestones for their age."
  },
  {
    id: 10,
    lo: "6A List the basic features of multi-life policies, juvenile insurance policies, and direct-to-consumer policies and explain how each type of coverage is typically underwritten",
    question: "A family applies for a policy on an adopted child. According to standard juvenile underwriting rules, how are adopted children evaluated?",
    options: [
      "Insurers treat adopted children the same as biological children, but usually do not issue coverage until the adoption is final",
      "Adopted children must pay double the standard child premium due to unknown genetic history",
      "Insurers require a mandatory five-year contestability period for all non-biological children",
      "The policy must be underwritten on a guaranteed-issue basis with graded benefits"
    ],
    answer: 0,
    explanation: "Insurers treat adopted children identically to biological children, but require the legal adoption process to be fully finalized before issuing the policy."
  },
  {
    id: 11,
    lo: "6A List the basic features of multi-life policies, juvenile insurance policies, and direct-to-consumer policies and explain how each type of coverage is typically underwritten",
    question: "When a grandparent applies for a policy on a young child, the underwriter must secure parental signature/involvement by:",
    options: [
      "Obtaining the parents’ written consent to the issuance of the coverage and having them attest to the medical history answers",
      "Checking the parents' current debt-to-equity ratio on a multiyear tax transcript",
      "Requiring the parent to buy an equal amount of key-person commercial coverage",
      "Filing a Suspicious Activity Report (SAR) due to third-party speculation"
    ],
    answer: 0,
    explanation: "Because parents have the closest physical care of the child and knowledge of their health, they must co-sign consent and attest to the physical disclosures."
  },
  {
    id: 12,
    lo: "6A List the basic features of multi-life policies, juvenile insurance policies, and direct-to-consumer policies and explain how each type of coverage is typically underwritten",
    question: "Why do insurers typically NOT require a physical or paramedical examination for juvenile insurance policies?",
    options: [
      "Children's mortality rates are very low after the first year of life, and modest face amounts do not justify high examination expenses",
      "State laws legally prohibit examiner nurse visits for any proposed insured under the age of 18",
      "Juvenile policies are always issued on a guaranteed-issue basis with zero eligibility requirements",
      "The Medical Information Bureau (MIB) maintains real-time physical medical files for all pediatric patients"
    ],
    answer: 0,
    explanation: "Physical exams are costly. Because childhood mortality (post-infancy) is low and coverage amounts are small, nonmedical juvenile supplements are sufficient."
  },
  {
    id: 13,
    lo: "6A List the basic features of multi-life policies, juvenile insurance policies, and direct-to-consumer policies and explain how each type of coverage is typically underwritten",
    question: "An underwriter reviews how much life insurance is active on the parents before approving a juvenile policy. Why is this comparison performed?",
    options: [
      "To prevent antiselection by ensuring parents hold an equal or greater amount of coverage on their own lives",
      "To satisfy federal compliance requirements regarding the USA Patriot Act of 2001",
      "To verify that the parent's business has a return-on-equity (ROE) ratio greater than 0.15",
      "To establish a double indemnity benefit index for the child's active accidental riders"
    ],
    answer: 0,
    explanation: "To deter moral hazard and antiselection, insurers require parents to carry coverage (often equal or up to twice the child's limit) so they don't insure the child more than themselves."
  },
  {
    id: 14,
    lo: "6A List the basic features of multi-life policies, juvenile insurance policies, and direct-to-consumer policies and explain how each type of coverage is typically underwritten",
    question: "A family applies for $100,000 of coverage on one of their three children, while building zero insurance on the other two. How will the underwriter likely handle this?",
    options: [
      "Investigate the reason for the different treatment to ensure antiselection or physical impairments are not being hidden",
      "Automatically approve the single-child application since it reduces the insurer's total family risk exposure",
      "Require all three children to undergo a mandatory 90-day waiting period",
      "Unilaterally reduce the requested face amount to $10,000 using standard build charts"
    ],
    answer: 0,
    explanation: "Singling out a single child for high coverage while peers remain uninsured signals potential antiselection. The underwriter must ensure the selected child is not in poor health."
  },
  {
    id: 15,
    lo: "6A List the basic features of multi-life policies, juvenile insurance policies, and direct-to-consumer policies and explain how each type of coverage is typically underwritten",
    question: "An exception to the rule of equal sibling coverage occurs when a child-star or actor has active personal income. Why is a high juvenile limit justified here?",
    options: [
      "Because the child's death would result in a verified, direct financial loss to the family business or parents",
      "Because child actors are legally classified as key business partners under NAIC models",
      "Because the child's unearned passive investment streams are exempt from the tax code",
      "Because the child actor's cost basis is verified using a Standard IRS Form 4506-T"
    ],
    answer: 0,
    explanation: "Since child stars generate active earned income, their premature death represents a real, measurable economic loss that the parents are entitled to protect."
  },
  {
    id: 16,
    lo: "6A List the basic features of multi-life policies, juvenile insurance policies, and direct-to-consumer policies and explain how each type of coverage is typically underwritten",
    question: "What is the primary function of a 'waiver of premium for payor benefit' (payor rider) on a juvenile life insurance policy?",
    options: [
      "It waives the renewal premiums if the adult payor dies or becomes totally disabled before the child reaches a specified age, usually 21",
      "It waives the insurer's right to request an attending physician statement for the grandchild",
      "It allows the policyowner to make unlimited tax-free withdrawals from the cash values",
      "It prevents the policy from lapsing if the child fails to complete standard physical exams"
    ],
    answer: 0,
    explanation: "The payor rider ensures that if the adult making the payments dies or is disabled, the child's coverage remains in force without premium payments until adulthood (usually age 21)."
  },
  {
    id: 17,
    lo: "6A List the basic features of multi-life policies, juvenile insurance policies, and direct-to-consumer policies and explain how each type of coverage is typically underwritten",
    question: "What level of risk rating must an adult payor meet to be approved for a waiver of premium for payor benefit rider?",
    options: [
      "They must be rated as a preferred, standard, or slightly substandard risk",
      "They must show a debt-to-equity ratio below 0.5 on audited CPA statements",
      "They must be under the age of 40 and possess zero active personal liabilities",
      "They must hold a valid double-indemnity accidental death benefit rider"
    ],
    answer: 0,
    explanation: "Because the payor benefit is a supplemental coverage on the payor's own life/health, the payor must meet standard insurability guidelines (preferred, standard, or slightly rated)."
  },
  {
    id: 18,
    lo: "6A List the basic features of multi-life policies, juvenile insurance policies, and direct-to-consumer policies and explain how each type of coverage is typically underwritten",
    question: "Direct-to-Consumer (D2C) sales are non-face-to-face programs. Policies sold on a 'guaranteed-issue basis' feature which main characteristics?",
    options: [
      "No individual underwriting takes place, and every eligible applicant who meets simple age or existing cover limits is approved",
      "Applicants must submit to a paramedical examiner visit within 60 days of policy delivery",
      "The face value allowed always increases as the age of the proposed insured increases",
      "The policy pays the full death benefit from day one, regardless of when death occurs"
    ],
    answer: 0,
    explanation: "Guaranteed-issue policies bypass risk selection; if the client meets basic age bounds (e.g. 50-85) and standard limits, the policy is issued automatically."
  },

  // === 6A (D2C CONTINUED) & 6B: BUSINESS LIFE INSURANCE FEATURES (19-35) ===
  {
    id: 19,
    lo: "6A List the basic features of multi-life policies, juvenile insurance policies, and direct-to-consumer policies and explain how each type of coverage is typically underwritten",
    question: "Many guaranteed-issue D2C products feature 'graded benefits'. Which of the following describes how a graded benefit works?",
    options: [
      "The benefit is limited initially (typically first 2 years), and if the insured dies during this time, the beneficiary receives only a return of premiums",
      "The benefit rises by a fixed 5 percent every year to offset standard consumer inflation",
      "The benefit is distributed as a monthly annuity stream rather than an cash sum payout",
      "The benefit is reduced proportionally if the business's current ratio falls below 2.0"
    ],
    answer: 0,
    explanation: "Graded benefits protect the insurer from immediate adverse claims. If death occurs within the initial period (usually 2 years), the policy returns paid premiums instead of paying the face amount."
  },
  {
    id: 20,
    lo: "6A List the basic features of multi-life policies, juvenile insurance policies, and direct-to-consumer policies and explain how each type of coverage is typically underwritten",
    question: "If a D2C policy is underwritten on a 'nonmedical basis' (nonmed D2C), which statement is correct regarding paper-flow requirements?",
    options: [
      "The applicant responds to specific yes/no health questions, and the insurer accepts or rejects the file solely based on those answers",
      "The applicant is required to authorizing the insurer to pull five years of credit bank records",
      "The applicant must complete an e-signature and submit to a reflexive cotinine panel",
      "The underwriter must contact the attending physician to verify every prescription date"
    ],
    answer: 0,
    explanation: "Nonmed D2C policies rely entirely on a small list of major medical disclosures (heart, cancer, HIV). The insurer issues or denies coverage purely based on these answers."
  },
  {
    id: 21,
    lo: "6A List the basic features of multi-life policies, juvenile insurance policies, and direct-to-consumer policies and explain how each type of coverage is typically underwritten",
    question: "Direct-to-Consumer (D2C) life insurance products generally carry higher premium rates than traditional, fully underwritten policies because:",
    options: [
      "The likelihood of antiselection is much greater when applicants face little or no underwriting requirements",
      "Federal compliance rules mandate charging a flat extra commission on all direct-response sales",
      "D2C products must legally build cash values at an accelerated multiyear growth rate",
      "The cost basis of a direct-response policy is calculated using female-only build charts"
    ],
    answer: 0,
    explanation: "Because there is little to no health screening, D2C pools attract higher-risk (less healthy) applicants, creating antiselection. Insurers charge higher premiums to offset these claims."
  },
  {
    id: 22,
    lo: "6B Describe the needs met by business life insurance and list the basic features of a buy-sell agreement, key-person life insurance, split-dollar life insurance, and creditor insurance",
    question: "Unlike personal life insurance, business life insurance is typically 'third-party insurance'. Which of the following defines this relationship?",
    options: [
      "The proposed insured is not the applicant and will not be the policyowner if a policy is issued",
      "The policy is owned and paid for by a third-party commercial bank or regional credit agency",
      "The death benefit is shared equally among the insurer, the business, and the federal government",
      "The contract involves three distinct writing agents representing different brokerage networks"
    ],
    answer: 0,
    explanation: "Third-party insurance occurs when the business is the owner and applicant of a policy covering an employee's or partner's life."
  },
  {
    id: 23,
    lo: "6B Describe the needs met by business life insurance and list the basic features of a buy-sell agreement, key-person life insurance, split-dollar life insurance, and creditor insurance",
    question: "An exception to the third-party nature of business life insurance occurs in a sole proprietorship. In this structure, who is the policyowner?",
    options: [
      "The proposed insured, the applicant, and the policyowner are the same person",
      "The employees of the company hold joint ownership via a group voting charter",
      "The state insurance department serves as the temporary administrative custodian",
      "The primary commercial loan creditor holds 100 percent of the policy's equity"
    ],
    answer: 0,
    explanation: "Because a sole proprietorship is not a separate legal entity from its owner, the sole owner is simultaneously the insured, applicant, and owner."
  },
  {
    id: 24,
    lo: "6B Describe the needs met by business life insurance and list the basic features of a buy-sell agreement, key-person life insurance, split-dollar life insurance, and creditor insurance",
    question: "For a business to purchase a life insurance policy on an individual, a valid 'insurable interest' must exist. When is this interest present in a business relationship?",
    options: [
      "If the premature death of the insured party would result in a direct financial loss to the surviving parties or to the business",
      "If the proposed insured has worked for the business for a period of at least fifteen working days",
      "If the business's return-on-equity (ROE) ratio is greater than 0.15 on annual sheets",
      "If the policy is designed as a direct-to-consumer guaranteed-issue term plan"
    ],
    answer: 0,
    explanation: "Business insurable interest is met if the insured's death causes an economic loss, such as losing a major partner's equity or a vital manager's expertise."
  },
  {
    id: 25,
    lo: "6B Describe the needs met by business life insurance and list the basic features of a buy-sell agreement, key-person life insurance, split-dollar life insurance, and creditor insurance",
    question: "To protect long-term commercial interest, a business can purchase life insurance to meet three major needs. These needs are defined as:",
    options: [
      "Ensure business continuation, attract and retain quality employees, or reassure creditors that a loan will be repaid",
      "Offset multiyear tax liabilities, finance personal home mortgages, or pay student tuition costs",
      "Purchase competitor assets, bypass anti-money laundering controls, or eliminate the local cost basis",
      "Generate guaranteed stock buybacks, establish unearned passive accounts, or cover family expenses"
    ],
    answer: 0,
    explanation: "Business life insurance addresses key-person losses/succession (continuation), executive compensation/split-dollar (recruiting), and collateral debt security (creditors)."
  },
  {
    id: 26,
    lo: "6B Describe the needs met by business life insurance and list the basic features of a buy-sell agreement, key-person life insurance, split-dollar life insurance, and creditor insurance",
    question: "What is the primary definition and function of a 'business continuation insurance plan'?",
    options: [
      "An insurance plan designed to ensure the continued financial viability of a business after the death or disability of an owner or key person",
      "A legal contract designed to automatically convert a sole proprietorship into a public corporation",
      "A federal funding program that guarantees premium payments for start-up organizations",
      "A software system designed to automate Anti-Money Laundering (AML) transaction checks"
    ],
    answer: 0,
    explanation: "Business continuation plans provide capital and a structured framework to keep a company operating smoothly after losing an essential leader."
  },
  {
    id: 27,
    lo: "6B Describe the needs met by business life insurance and list the basic features of a buy-sell agreement, key-person life insurance, split-dollar life insurance, and creditor insurance",
    question: "A buy-sell agreement is a contract between two or more parties. What is its core contractual mechanism?",
    options: [
      "One party agrees to buy a deceased's business interest, and the second party directs their estate to sell that interest to the buyer",
      "A creditor agrees to erase all outstanding business liabilities in exchange for a cash-surrender payout",
      "An employer agrees to split the cash value of an individual policy with a designated family beneficiary",
      "A corporation agrees to issue stock dividends to its major investors on specified option dates"
    ],
    answer: 0,
    explanation: "A buy-sell agreement binds survivors to purchase the deceased owner's shares and forces the deceased's estate to sell them at a pre-arranged value."
  },
  {
    id: 28,
    lo: "6B Describe the needs met by business life insurance and list the basic features of a buy-sell agreement, key-person life insurance, split-dollar life insurance, and creditor insurance",
    question: "How is life insurance actively used to fund a standard buy-sell agreement between two business partners?",
    options: [
      "Each party takes out a life insurance policy on the other’s life, utilizing the death proceeds to purchase the deceased's business share",
      "The organization registers a single joint-life policy that pays cash values to local commercial bank accounts",
      "The business files a tax-free Section 1035 exchange to transfer all assets to a partner reinsurance treaty",
      "The underwriting department adds a temporary flat extra premium to reimburse the writing broker"
    ],
    answer: 0,
    explanation: "By purchasing insurance on each partner's life, the surviving partner is guaranteed to have immediate cash to buy out the deceased's family estate shares."
  },
  {
    id: 29,
    lo: "6B Describe the needs met by business life insurance and list the basic features of a buy-sell agreement, key-person life insurance, split-dollar life insurance, and creditor insurance",
    question: "A key person is an individual whose death or disability would cause significant loss to a business. Which of the following is considered a key person?",
    options: [
      "An owner, a top salesperson, or an employee possessing special skills, knowledge, or business contacts",
      "Any hourly subcontractor who has worked for the company for less than thirty business days",
      "An out-of-state irrevocable trust manager with no direct ownership in the company's equity",
      "A consumer reporting agency representative who compiles the business's inspection files"
    ],
    answer: 0,
    explanation: "Key persons have unique qualities (top developers, Rainmaker sales leads, essential founders) whose sudden absence would disrupt profitability."
  },
  {
    id: 30,
    lo: "6B Describe the needs met by business life insurance and list the basic features of a buy-sell agreement, key-person life insurance, split-dollar life insurance, and creditor insurance",
    question: "In key-person life insurance which entity typically owns the policy, pays the premiums, and is named the beneficiary?",
    options: [
      "The business",
      "The key person’s personal spouse",
      "A third-party commercial credit lender",
      "The state insurance department "
    ],
    answer: 0,
    explanation: "To secure insurable interest and match the loss, the business is the owner, premium-payor, and primary beneficiary of key-person policies."
  },
  {
    id: 31,
    lo: "6B Describe the needs met by business life insurance and list the basic features of a buy-sell agreement, key-person life insurance, split-dollar life insurance, and creditor insurance",
    question: "An employer offers executive Dan participation in a 'split-dollar life insurance plan'. What is the basic feature of this legal arrangement?",
    options: [
      "The employer and executive share premium payment costs and divide entitlements to the policy's cash values and death benefits",
      "The employer splits the executive's annual sales commission with external reinsurance brokers",
      "The insurer agrees to provide Dan with a double indemnity payout if his spouse dies in an accident",
      "The business receives a tax-free cash loan equal to Dan's total in-force policy face value"
    ],
    answer: 0,
    explanation: "Split-dollar plans are executive benefits where the cost and cash value/benefit yields of a permanent policy are divided between firm and employee."
  },
  {
    id: 32,
    lo: "6B Describe the needs met by business life insurance and list the basic features of a buy-sell agreement, key-person life insurance, split-dollar life insurance, and creditor insurance",
    question: "If Dan's split-dollar policy is surrendered during his lifetime, what is the typical distribution of the cash surrender value?",
    options: [
      "The employer and Dan each receive the amount they originally paid toward policy premiums from the cash value",
      "The entire cash value is paid directly to Dan's personal family beneficiaries",
      "The cash value must be returned to the Internal Revenue Service under Section 1035",
      "The business uses the cash value as a permanent flat extra to fund a partner's buy-sell agreement"
    ],
    answer: 0,
    explanation: "Surrender returns the respective paid contributions to each party, and any excess cash value typically remains with the employee as a supplemental benefit."
  },
  {
    id: 33,
    lo: "6B Describe the needs met by business life insurance and list the basic features of a buy-sell agreement, key-person life insurance, split-dollar life insurance, and creditor insurance",
    question: "A company seeks 'creditor insurance' (loan coverage) upon borrowing capital from a bank. What is the primary purpose of creditor insurance?",
    options: [
      "To pay for the economic loss suffered by a creditor if a key person of a debtor business dies before a debt is fully repaid",
      "To protect the primary insurance carrier from prospective policy lapses due to business bankruptcy",
      "To guarantee that the writing financial professional will receive a series of first-year commissions",
      "To cover the healthcare expenses of disabled employees under employee benefit plans"
    ],
    answer: 0,
    explanation: "Creditor insurance secures business loans by paying off the outstanding debt if the borrower's key leader dies, protecting the bank from bad-debt default."
  },
  {
    id: 34,
    lo: "6B Describe the needs met by business life insurance and list the basic features of a buy-sell agreement, key-person life insurance, split-dollar life insurance, and creditor insurance",
    question: "To maintain the principle of insurable interest, what limit is placed on the face amount of a creditor life insurance policy?",
    options: [
      "The proceeds are never greater than the amount of the unpaid debt",
      "The proceeds must equal exactly five times the debtor's annual salary",
      "The proceeds are capped at 50 percent of the business's current ratio",
      "The proceeds must be adjusted to match standard male build charts"
    ],
    answer: 0,
    explanation: "Because insurance cannot be used for speculation, creditor coverage is strictly capped at the outstanding balance of the debt so the lender does not profit."
  },
  {
    id: 35,
    lo: "6C Describe the underwriting process for business life insurance and identify the warning signs that indicate a business is in financial difficulty or may be engaging in commercial fraud",
    question: "In underwriting business life insurance, the underwriter assesses the same three risks (medical, personal, financial) as personal insurance, but must place a different focus on:",
    options: [
      "The business’s finances, to ensure the need is valid, appropriate, and premiums are affordable",
      "The age of the main beneficiary's sibling under family benefit rules",
      "The physical stature and weight distribution of the business's CFO",
      "The specific county dockets where the business operates its client portals"
    ],
    answer: 0,
    explanation: "Business underwriting involves inspecting company balances and profitability to verify that the entity is viable enough to pay premiums."
  },

  // === 6C: BUSINESS UNDERWRITING & FINANCIAL WARNING SIGNS (36-45) ===
  {
    id: 36,
    lo: "6C Describe the underwriting process for business life insurance and identify the warning signs that indicate a business is in financial difficulty or may be engaging in commercial fraud",
    question: "Which of the following documents is a specialized questionnaire utilized by underwriters to gather detailed facts about a commercial applicant's model and operations?",
    options: [
      "Business financial supplement",
      "Attending physician statement",
      "W-2 tax form transcript",
      "Notice to Applicants index"
    ],
    answer: 0,
    explanation: "A business financial supplement requests specific descriptions of the business structure, financial stability, and rationale for the insurance purchase."
  },
  {
    id: 37,
    lo: "6C Describe the underwriting process for business life insurance and identify the warning signs that indicate a business is in financial difficulty or may be engaging in commercial fraud",
    question: "Why is underwriting business insurance for a newly established company (operating less than 2-3 years) handled more conservatively by insurers?",
    options: [
      "Because new businesses have a high rate of failure, and the insurer is concerned the company might fail before premium collections cover underwriting costs",
      "Because state regulations prohibit issuing permanent cash-value policies to young corporations",
      "Because the MIB does not record financial activities for companies under age 3",
      "Because the USA Patriot Act requires a mandatory five-year delay on new business owners"
    ],
    answer: 0,
    explanation: "With high default rates early on, underwriters vet startups closely to ensure the policy persists long enough to recover substantial administrative setup costs."
  },
  {
    id: 38,
    lo: "6C Describe the underwriting process for business life insurance and identify the warning signs that indicate a business is in financial difficulty or may be engaging in commercial fraud",
    question: "While reviewing an application for key-person coverage, which of the following is identified as a clear warning sign of financial stress in the business?",
    options: [
      "A trend of declining sales or revenues, and negative cash flow from operations",
      "The company's current ratio is greater than 2.0 on standard balance sheets",
      "The company has paid all outstanding tax elements in a timely fashion",
      "Dan has a history of standard preferred non-tobacco risk classifications"
    ],
    answer: 0,
    explanation: "Declining sales and operational cash deficits are critical signs of commercial distress, signaling the company may soon default or lapse."
  },
  {
    id: 39,
    lo: "6C Describe the underwriting process for business life insurance and identify the warning signs that indicate a business is in financial difficulty or may be engaging in commercial fraud",
    question: "An underwriter evaluates an application where the company has unusual financing arrangements, such as loans from disreputable lenders or family members. This represents a:",
    options: [
      "Sign of financial stress in the business",
      "Standard preferred business continuation plan",
      "Verified low-risk solvency indicator",
      "Pre-requisite for executing a Section 1035 exchange"
    ],
    answer: 0,
    explanation: "Relying on high-interest or informal private family loans points to cash problems and limited normal banking options, indicating commercial stress."
  },
  {
    id: 40,
    lo: "6C Describe the underwriting process for business life insurance and identify the warning signs that indicate a business is in financial difficulty or may be engaging in commercial fraud",
    question: "An underwriter flags a business that depends on only a single or very few clients and projects. Why does this represent a commercial risk?",
    options: [
      "Because the loss of one client could instantly destabilize the business and lead to premium nonpayment/lapse",
      "Because and single-project firm is legally prohibited from purchasing split-dollar policies",
      "Because the MIB cannot generate standard factor tables for concentrated businesses",
      "Because concentration automatically triggers a Suspicious Activity Report (SAR)"
    ],
    answer: 0,
    explanation: "Operational concentration creates high volatility; if that single project drops, the business may fail, rendering premium continuation impossible."
  },
  {
    id: 41,
    lo: "6C Describe the underwriting process for business life insurance and identify the warning signs that indicate a business is in financial difficulty or may be engaging in commercial fraud",
    question: "While reviewing business documents, what represents a warning sign that the company may be engaging in commercial fraud?",
    options: [
      "Evidence that the true ownership of the company is being concealed",
      "Audited financial statements completed by a certified public accountant",
      "A clear historical log of Timely loan repayments",
      "The use of standard GAAP accounting terms and definitions"
    ],
    answer: 0,
    explanation: "Concealing the identity of business owners is a primary indicator of shell structures used for fraud, money laundering, or tax evasion."
  },
  {
    id: 42,
    lo: "6C Describe the underwriting process for business life insurance and identify the warning signs that indicate a business is in financial difficulty or may be engaging in commercial fraud",
    question: "An underwriter reviews the history of a major partner and finds they have worked for multiple companies that are no longer in business. This represents a warning sign of:",
    options: [
      "Commercial fraud",
      "Standard key-person experience",
      "A typical Section 1035 transition background",
      "Solvency strength"
    ],
    answer: 0,
    explanation: "A pattern of executive affiliation with defunct companies can reflect poor management or intentional fraudulent 'bust-out' schemes, posing commercial risk."
  },
  {
    id: 43,
    lo: "6C Describe the underwriting process for business life insurance and identify the warning signs that indicate a business is in financial difficulty or may be engaging in commercial fraud",
    question: "An underwriter inspects financial records that are issued at irregular intervals, list assets that cannot be confirmed, and use rounded numbers instead of specific amounts. These indicators point to:",
    options: [
      "Potential commercial fraud",
      "A healthy, growing asset-based approach",
      "A standard graded benefit D2C framework",
      "The typical structure of a mutual partnership"
    ],
    answer: 0,
    explanation: "Rounded data, irregular audits, and unconfirmable assets are common indicators of fabricated financial results to secure unmerited high insurance limits."
  },
  {
    id: 44,
    lo: "6C Describe the underwriting process for business life insurance and identify the warning signs that indicate a business is in financial difficulty or may be engaging in commercial fraud",
    question: "If an underwriter identifies an overly complex organizational structure with a confusing web of subsidiary companies and conglomerates, they should suspect:",
    options: [
      "Commercial fraud or hidden asset trail schemes",
      "Excellent, standard corporate diversification",
      "Compliance with FinCEN safe-harbor standards",
      "An automated straight-through processing flow"
    ],
    answer: 0,
    explanation: "Convoluted structures with nested subsidiaries are often fabricated to hide liabilities, conceal true owners, or launder illicit funds across entities."
  },
  {
    id: 45,
    lo: "6D Describe three methods an underwriter can use to estimate the value of a business",
    question: "To establish appropriate business coverage limits, underwriters must value the commercial entity. What are the three standard approaches used?",
    options: [
      "Asset-based approach, income-based approach, and market approach",
      "Solvency approach, quick approach, and cost basis approach",
      "Twisting approach, churning approach, and graded approach",
      "Double indemnity approach, payor approach, and ADL approach"
    ],
    answer: 0,
    explanation: "The three primary techniques for valuing a business are analyzing net physical assets, assessing future earnings capacity, or reviewing regional market comparables."
  },

  // === 6D: BUSINESS VALUATION & 6E: RATIOS (46-60) ===
  {
    id: 46,
    lo: "6D Describe three methods an underwriter can use to estimate the value of a business",
    question: "Under the 'asset-based' valuation approach, how does the underwriter calculate the book value of the business?",
    options: [
      "By calculating the excess of the business’s total assets over its liabilities",
      "By multiplying the key person's compensation by a factor of 10",
      "By dividing current liquid cash investments by current liabilities",
      "By matching the sales price of similar dental practices in the area"
    ],
    answer: 0,
    explanation: "The asset-based approach focuses on book value, which is total assets minus total liabilities (equivalent to net capital equity)."
  },
  {
    id: 47,
    lo: "6D Describe three methods an underwriter can use to estimate the value of a business",
    question: "A business valuation that focuses primarily on the earning capacity of the organization is defined as a(n):",
    options: [
      "Income-based approach",
      "Asset-based approach",
      "Market approach",
      "Acid-test approach"
    ],
    answer: 0,
    explanation: "An income-based approach focuses on a company's past, present, and projected ability to generate revenues and profits over time."
  },
  {
    id: 48,
    lo: "6D Describe three methods an underwriter can use to estimate the value of a business",
    question: "Underwriter Felicia is evaluating a dental practice. She uses standard market guidelines indicating that dental practices typically sell for 70 percent of annual gross sales. This represents a(n):",
    options: [
      "Market approach to business valuation",
      "Asset-based approach to business valuation",
      "Income-based return-on-equity calculation",
      "Stock redemption analysis"
    ],
    answer: 0,
    explanation: "A market approach estimates business value by comparing actual transaction metrics and sale multiples of similar companies in the industry."
  },
  {
    id: 49,
    lo: "6D Describe three methods an underwriter can use to estimate the value of a business",
    question: "When assessing business values, underwriters distinguish between tangible and intangible assets. Which of the following is an example of an 'intangible' asset?",
    options: [
      "Goodwill, customer base, corporate reputation, patents, and trademarks",
      "Company cars, warehouse properties, computer servers, and inventory physical stock",
      "Total cash reserves held in local commercial checking accounts",
      "Long-term debts and interest payments owed to third-party banks"
    ],
    answer: 0,
    explanation: "Intangible assets are non-physical but valuable qualities, such as customer loyalty (goodwill), name recognition, copyrights, and intellectual patents."
  },
  {
    id: 50,
    lo: "6E Calculate a debt-to-equity ratio, current ratio, quick ratio, and return-on-equity (ROE) ratio and explain how an underwriter uses these ratios to assess a business’s solvency, liquidity, and profitability",
    question: "An underwriter utilizes financial ratios during corporate risk assessment. How is 'ratio' defined in this context?",
    options: [
      "A comparison of two numeric values that results in a measurement expressed as a percentage or fraction",
      "The duration of time a policy remains active with no payments",
      "The commission rate paid to active writing agents on replacement cases",
      "The physical weight of a child divided by their height measurements"
    ],
    answer: 0,
    explanation: "A ratio is a standard fractional or percentage comparison between two selected financial figures to assess status, such as assets to liabilities."
  },
  {
    id: 51,
    lo: "6E Calculate a debt-to-equity ratio, current ratio, quick ratio, and return-on-equity (ROE) ratio and explain how an underwriter uses these ratios to assess a business’s solvency, liquidity, and profitability",
    question: "In corporate risk evaluation, a company’s ability to meet its financial obligations on time is defined as:",
    options: [
      "Solvency",
      "Liquidity",
      "Profitability",
      "Persistency"
    ],
    answer: 0,
    explanation: "Solvency represents the fundamental baseline capacity of an organization to satisfy its long-term financial promises and debts when due."
  },
  {
    id: 52,
    lo: "6E Calculate a debt-to-equity ratio, current ratio, quick ratio, and return-on-equity (ROE) ratio and explain how an underwriter uses these ratios to assess a business’s solvency, liquidity, and profitability",
    question: "What is the correct mathematical formula for calculating a business’s debt-to-equity ratio?",
    options: [
      "Total Long-Term Debt / Owners’ Equity",
      "Current Assets / Current Liabilities",
      "Liquid Current Assets / Current Liabilities",
      "Net Income / Owners’ Equity"
    ],
    answer: 0,
    explanation: "The debt-to-equity ratio measures leverage by dividing outstanding long-term liabilities by owners' equity."
  },
  {
    id: 53,
    lo: "6E Calculate a debt-to-equity ratio, current ratio, quick ratio, and return-on-equity (ROE) ratio and explain how an underwriter uses these ratios to assess a business’s solvency, liquidity, and profitability",
    question: "A business has owners’ equity of $4.75 million and total long-term debt of $4.5 million. The resulting debt-to-equity ratio is 0.947. What does this indicate to the underwriter?",
    options: [
      "The company is solvent because its debt-to-equity ratio is less than 1, meaning owners' equity exceeds long-term debt",
      "The company is highly insolvent and must be automatically declined",
      "The company requires a mandatory flat extra premium rating of $15 per $1,000",
      "The company has exceptionally poor liquidity and cannot pay immediate obligations"
    ],
    answer: 0,
    explanation: "A debt-to-equity ratio below 1 indicates that equity outpaces debt, pointing to solid long-term solvency."
  },
  {
    id: 54,
    lo: "6E Calculate a debt-to-equity ratio, current ratio, quick ratio, and return-on-equity (ROE) ratio and explain how an underwriter uses these ratios to assess a business’s solvency, liquidity, and profitability",
    question: "If a company's total long-term debt rises to $5.5 million while owners' equity remains constant at $4.75 million, the debt-to-equity ratio is 1.158. What does this indicate?",
    options: [
      "The company's leverage has increased, pointing to potential insolvency risks",
      "The company has reached an excellent, low-risk preferred status",
      "The company is guaranteed to satisfy all short-term cash needs",
      "The company must convert its whole life options into a D2C term plan"
    ],
    answer: 0,
    explanation: "A ratio over 1 means debt outweighs equity, warning underwriters of heavy leverage and solvency weaknesses."
  },
  {
    id: 55,
    lo: "6E Calculate a debt-to-equity ratio, current ratio, quick ratio, and return-on-equity (ROE) ratio and explain how an underwriter uses these ratios to assess a business’s solvency, liquidity, and profitability",
    question: "While solvency measures long-term survival, 'liquidity' specifically defines a company’s ability to:",
    options: [
      "Easily convert its assets to cash for an approximation of their true value to meet short-term cash needs",
      "Maintain a high return-on-equity ratio over a three-to-five-year period",
      "Generate massive sales revenues without carrying any long-term liabilities",
      "Avoid policy replacements under the NAIC Model Regulation rules"
    ],
    answer: 0,
    explanation: "Liquidity assesses if a firm has enough quick-access cash or cash-equivalents to settle immediate monthly bills."
  },
  {
    id: 56,
    lo: "6E Calculate a debt-to-equity ratio, current ratio, quick ratio, and return-on-equity (ROE) ratio and explain how an underwriter uses these ratios to assess a business’s solvency, liquidity, and profitability",
    question: "What is the formula for calculating a business's 'current ratio'?",
    options: [
      "Current Assets / Current Liabilities",
      "Liquid Current Assets / Current Liabilities",
      "Total Long-Term Debt / Owners’ Equity",
      "Net Income / Owners’ Equity"
    ],
    answer: 0,
    explanation: "The current ratio divides total short-term assets by short-term liabilities expected to settle within 12 months."
  },
  {
    id: 57,
    lo: "6E Calculate a debt-to-equity ratio, current ratio, quick ratio, and return-on-equity (ROE) ratio and explain how an underwriter uses these ratios to assess a business’s solvency, liquidity, and profitability",
    question: "In evaluating short-term assets for liquidity, which of the following is defined as a 'current asset'?",
    options: [
      "Cash, cash equivalents, money market accounts, and inventory that can be converted to cash within one year",
      "Office buildings, production machinery, and land holdings",
      "Long-term bank loans and future pension liabilities",
      "The outstanding face amount of a competitor's term life policy"
    ],
    answer: 0,
    explanation: "Current assets are cash or working holdings (such as inventories and accounts receivables) convertible to cash within 12 months."
  },
  {
    id: 58,
    lo: "6E Calculate a debt-to-equity ratio, current ratio, quick ratio, and return-on-equity (ROE) ratio and explain how an underwriter uses these ratios to assess a business’s solvency, liquidity, and profitability",
    question: "Although standards vary by industry, what is the typical benchmark current ratio underwriters look for in a stable business?",
    options: [
      "A current ratio of at least 2.0 ($2 of current assets for every $1 of current liabilities)",
      "A current ratio of exactly 0.5 ($1 of asset for every $2 of liability)",
      "A current ratio matching the key person's age divided by 10",
      "A current ratio between 0.10 and 0.15"
    ],
    answer: 0,
    explanation: "Insurers generally prefer current ratios of 2.0 or higher to ensure the firm has a padded safety margin to meet operational expenses."
  },
  {
    id: 59,
    lo: "6E Calculate a debt-to-equity ratio, current ratio, quick ratio, and return-on-equity (ROE) ratio and explain how an underwriter uses these ratios to assess a business’s solvency, liquidity, and profitability",
    question: "The current ratio includes inventory, which can sell slowly or not at all. To assess immediate debt-paying ability without inventory, underwriters use the:",
    options: [
      "Quick ratio (acid-test ratio)",
      "Debt-to-equity ratio",
      "Return-on-equity (ROE) ratio",
      "Solvency trend approach"
    ],
    answer: 0,
    explanation: "The quick (or acid-test) ratio measures immediate cash strength by completely eliminating slow-moving inventory assets."
  },
  {
    id: 60,
    lo: "6E Calculate a debt-to-equity ratio, current ratio, quick ratio, and return-on-equity (ROE) ratio and explain how an underwriter uses these ratios to assess a business’s solvency, liquidity, and profitability",
    question: "Which of the following is the correct mathematical formula for calculating a business’s 'quick ratio'?",
    options: [
      "Liquid Assets / Current Liabilities",
      "Current Assets / Current Liabilities",
      "Total Long-Term Debt / Owners’ Equity",
      "Net Income / Owners’ Equity"
    ],
    answer: 0,
    explanation: "The quick ratio is calculated by dividing liquid assets (cash, short-term investments, accounts receivable) by current liabilities."
  },

  // === 6E: RATIOS (CONTINUED) & 6F: BUSINESS UNDERWRITING CONSIDERATIONS (61-75) ===
  {
    id: 61,
    lo: "6E Calculate a debt-to-equity ratio, current ratio, quick ratio, and return-on-equity (ROE) ratio and explain how an underwriter uses these ratios to assess a business’s solvency, liquidity, and profitability",
    question: "What is the typical desired benchmark value for a business's quick ratio under standard corporate evaluations?",
    options: [
      "A quick ratio greater than 1.0, indicating the ability to pay short-term bills immediately",
      "A quick ratio of exactly zero, showing that the firm holds zero receivables",
      "A quick ratio below 0.15 to maximize corporate profit potential",
      "A quick ratio matching the standard table rating debit index (+25)"
    ],
    answer: 0,
    explanation: "A quick ratio above 1.0 confirms the business holds sufficient near-instant cash assets to clear immediate expenses on short notice."
  },
  {
    id: 62,
    lo: "6E Calculate a debt-to-equity ratio, current ratio, quick ratio, and return-on-equity (ROE) ratio and explain how an underwriter uses these ratios to assess a business’s solvency, liquidity, and profitability",
    question: "Profitability is the degree of success a business has in generating positive returns for its owners. What is the standard formula for 'return-on-equity' (ROE)?",
    options: [
      "Net Income / Owners’ Equity",
      "Current Assets / Current Liabilities",
      "Liquid Assets / Current Liabilities",
      "Total Long-Term Debt / Owners’ Equity"
    ],
    answer: 0,
    explanation: "The Return-on-Equity (ROE) ratio divides a company's net income (profits) by its owners' equity, expressing efficiency in capital usage."
  },
  {
    id: 63,
    lo: "6E Calculate a debt-to-equity ratio, current ratio, quick ratio, and return-on-equity (ROE) ratio and explain how an underwriter uses these ratios to assess a business’s solvency, liquidity, and profitability",
    question: "What is the typical desired benchmark ROE value for a business, and how does the required ROE fluctuate based on company risk?",
    options: [
      "A desired value of > 15 percent (> 0.15), and underwriters expect riskier businesses to produce higher ROEs to justify the hazard",
      "A desired value of exactly 5 percent, and riskier firms must produce lower ROEs",
      "A desired value matching the quick ratio divided by the return-on-equity",
      "A desired value below 1.0, which indicates excellent long-term solvency"
    ],
    answer: 0,
    explanation: "Standard corporate benchmarks seek an ROE above 15% (0.15). Riskier industrial segments demand higher returns to compensate for the higher probability of loss or default."
  },
  {
    id: 64,
    lo: "6F Identify the underwriting considerations for each type of business life insurance coverage",
    question: "What is a primary underwriting consideration when life insurance is requested to fund a commercial buy-sell agreement?",
    options: [
      "Estimating the business's total value and verifying that the proposed insured's coverage matches their actual ownership share",
      "Ensuring that the company's quick ratio is precisely equal to its return-on-equity",
      "Applying a double indemnity payout rider to insulate the firm from standard lapses",
      "Verifying that the writing agent has submitted a Suspicious Activity Report (SAR)"
    ],
    answer: 0,
    explanation: "Buy-sell coverage must remain proportional to each partner's real equity stake in the company, ensuring no speculation or excess payout occurs."
  },
  {
    id: 65,
    lo: "6F Identify the underwriting considerations for each type of business life insurance coverage",
    question: "Two partners, Luis and Taj, own a business worth $100,000. Luis owns 60% ($60,000) and Taj owns 40% ($40,000). In a 'cross-purchase' agreement, what is the correct policy setup?",
    options: [
      "Taj buys a $60,000 policy on Luis's life, and Luis buys a $40,000 policy on Taj's life",
      "The business entity itself buys a $100,000 policy covering both spouses jointly",
      "Luis buys a $100,000 policy on himself and names Taj as the contingent beneficiary",
      "They must buy a direct-to-consumer guaranteed-issue term plan with graded benefits"
    ],
    answer: 0,
    explanation: "In cross-purchase funding, each partner buys, owns, and pays for a policy on the other partner's life, equal to that partner's equity value."
  },
  {
    id: 66,
    lo: "6F Identify the underwriting considerations for each type of business life insurance coverage",
    question: "Under standard calculations, how many individual policies must be issued to cover a partnership with five partners using the cross-purchase method?",
    options: [
      "20 policies (N * (N - 1))",
      "5 policies (one per partner)",
      "10 policies (N * 2)",
      "A single joint multi-life policy"
    ],
    answer: 0,
    explanation: "Using cross-purchase, each partner. must insure all peers. The formula N * (N - 1) means 5 * 4 = 20 policies, which is administratively cumbersome."
  },
  {
    id: 67,
    lo: "6F Identify the underwriting considerations for each type of business life insurance coverage",
    question: "Because of policy count inflation, for which size of partnerships is a cross-purchase agreement typically recommended?",
    options: [
      "Small partnerships with no more than four partners",
      "Large conglomerates holding more than twenty partners",
      "Sole proprietorships operated strictly by a husband and wife",
      "Public corporations listed on the national stock exchanges"
    ],
    answer: 0,
    explanation: "If partnerships exceed four members, the volume of required cross-policies becomes too high, making alternative structures better."
  },
  {
    id: 68,
    lo: "6F Identify the underwriting considerations for each type of business life insurance coverage",
    question: "In contrast to cross-purchase, an 'entity agreement' structures buy-sell funding such that:",
    options: [
      "The partnership itself purchases, owns, pays for, and is the beneficiary of a single policy on each partner's life",
      "The individual partners purchase policies on their own family members and heirs",
      "The local credit bank purchases a policy to cover the outstanding mortgage debts",
      "The business files a mandatory Section 1035 tax surrender request with the IRS"
    ],
    answer: 0,
    explanation: "Entity agreements use the company as the single buyer. The entity insures each owner, keeping the total policy count equal to the number of partners."
  },
  {
    id: 69,
    lo: "6F Identify the underwriting considerations for each type of business life insurance coverage",
    question: "When an entity agreement structure is applied in a corporate setting, it is known as a:",
    options: [
      "Stock redemption agreement",
      "Cross-purchase agreement",
      "Key-person split-dollar plan",
      "Direct-to-consumer graded benefit"
    ],
    answer: 0,
    explanation: "A corporate entity-agreement is a stock redemption agreement. The corporation uses insurance proceeds to repurchase stock shares from a deceased owner's estate."
  },
  {
    id: 70,
    lo: "6F Identify the underwriting considerations for each type of business life insurance coverage",
    question: "To prevent antiselection when underwriting any buy-sell agreement, what rule is typically enforced by insurers?",
    options: [
      "The lives of all major partners or stockholders should be insured, unless a strong reason exists otherwise",
      "The younger partners must register for a double indemnity accidental benefit",
      "The business must demonstrate a quick ratio above 5.0 on audited spreadsheets",
      "The policy must be written on a guaranteed-issue D2C basis"
    ],
    answer: 0,
    explanation: "Vetting all active owners ensures they aren't selectively enrolling only the sickest or oldest partner to trigger a fast payout."
  },
  {
    id: 71,
    lo: "6F Identify the underwriting considerations for each type of business life insurance coverage",
    question: "While reviewing stock redemption insurance, what is a primary underwriting factor considered regarding share percentages?",
    options: [
      "If the proposed insured’s stock holdings represent a significant and meaningful portion of the company’s equity",
      "If the stock has been exchanged in a tax-free Section 1035 transaction",
      "The exact date the stockholder registered their personal social media accounts",
      "If the business's return-on-equity is less than 0.15 on IRS transcripts"
    ],
    answer: 0,
    explanation: "If the insured owner has only a fraction of a percent of equity, no real business preservation need exists. The stake must be substantial."
  },
  {
    id: 72,
    lo: "6F Identify the underwriting considerations for each type of business life insurance coverage",
    question: "Underwriter Samantha is reviewing a key-person application. She notes that the key person is nearing retirement age and was never insured by the firm previously. Why would Samantha request clarification?",
    options: [
      "To investigate why this individual has suddenly become vitally important to the company and ensure no antiselection is present",
      "To satisfy the compliance requirements of the federal USA Patriot Act",
      "To verify that the key person has completed 90 days of active clinical trials",
      "To automatically apply a standard table rating debit of +100 for age"
    ],
    answer: 0,
    explanation: "Insuring an old, near-retiring employee who was never previously insured points to potential adverse selection where someone is seeking a claim."
  },
  {
    id: 73,
    lo: "6F Identify the underwriting considerations for each type of business life insurance coverage",
    question: "How does the size of a business impact underwriter assessments of key-person insurance needs?",
    options: [
      "As a business grows larger, the loss of any single employee is less likely to produce a severe or fatal financial impact",
      "Large businesses are legally prohibited from purchasing policies on anyone under age 55",
      "Small corporations are exempt from showing a valid insurable interest in their owners",
      "Business size is irrelevant if the quick ratio exceeds the standard current ratio"
    ],
    answer: 0,
    explanation: "Large firms have deep benches and redundant management pools. Vetting key-person needs is much tighter in small entities where losing one client leader is fatal."
  },
  {
    id: 74,
    lo: "6F Identify the underwriting considerations for each type of business life insurance coverage",
    question: "A company seeks key-person coverage of $5 million on a leader with an annual salary of $100,000. Why is this amount questionable?",
    options: [
      "Key-person limits are usually calculated as 5 to 10 times the insured's annual salary plus fringe benefits",
      "Insurers never allow key-person limits to exceed exactly $500,000",
      "The key person's unearned passive income must exceed current salary levels",
      "The face value must be calculated using standard male build charts"
    ],
    answer: 0,
    explanation: "Standard underwriting guidelines limit key-man coverage to 5-10 times salary. Sizing beyond that creates potential overinsurance."
  },
  {
    id: 75,
    lo: "6F Identify the underwriting considerations for each type of business life insurance coverage",
    question: "Underwriters pay particular attention to key-person applications in multinational companies. What is a typical challenge faced in these files?",
    options: [
      "Reviewing financial documents in foreign languages, using abridged/unaudited audits, or dealing with different national accounting terms",
      "Federal restrictions prohibiting international commercial firms from owning any term life",
      "A complete ban on using gender-based actuarial tables for overseas employees",
      "The requirement to file a Suspicious Activity Report (SAR) on all foreign residents"
    ],
    answer: 0,
    explanation: "Vetting different global files, foreign terminologies, and localized bookkeeping rules makes multinational underwriting complex."
  },

  // === 6F (CONTINUED) & 6G: UNDERWRITING POLICY REPLACEMENTS (76-88) ===
  {
    id: 76,
    lo: "6F Identify the underwriting considerations for each type of business life insurance coverage",
    question: "When evaluating creditor insurance, what is a warning sign that the borrower's case may be speculative or subject to antiselection?",
    options: [
      "If it seems likely that the borrower will need to rely entirely on the life insurance proceeds to repay the loan",
      "If the borrow provides an active collateral that is producing solid income",
      "If the business shows a debt-to-equity ratio of less than 1.0",
      "If loan repayments have been made consistently on a timely schedule"
    ],
    answer: 0,
    explanation: "If the debtor has no other means to clear the debt, they may rely on the death-claim payout, which sets up major speculative hazards."
  },
  {
    id: 77,
    lo: "6F Identify the underwriting considerations for each type of business life insurance coverage",
    question: "In creditor underwriting, why is issuing coverage for very short-term loans considered undesirable for an insurance carrier?",
    options: [
      "Short-term policies may lapse before the insurer can recover the substantial costs of underwriting, issuing, and administering the policy",
      "Short-term loans are legally exempt from the Fair Credit Reporting Act requirements",
      "State regulations require all creditor policies to carry permanent flat extra ratings",
      "The business's return-on-equity cannot be calculated on a short-term basis"
    ],
    answer: 0,
    explanation: "Administering business coverage carries front-ended costs; if the underlying loan terminates in months, the policy lapses before the carrier breaks even."
  },
  {
    id: 78,
    lo: "6F Identify the underwriting considerations for each type of business life insurance coverage",
    question: "Underwriter Tim flags an application for creditor insurance where the loan was granted years ago. What risk does this delay point to?",
    options: [
      "Antiselection, possibly because the debtor’s finances or the insured’s health has recently deteriorated",
      "A standard Section 1035 tax-free exchange sequence",
      "An automated straight-through processing mismatch",
      "A violation of the NAIC Replacement Model rules"
    ],
    answer: 0,
    explanation: "Vetting after-the-fact loans is risky; clients may only seek coverage years later because the debtor is sick or the firm is failing."
  },
  {
    id: 79,
    lo: "6F Identify the underwriting considerations for each type of business life insurance coverage",
    question: "What is an important check Tim performs to prevent overinsurance from overlap between creditor insurance and key-person insurance?",
    options: [
      "He checks if both policies cover the same person for the same loan debt to ensure total coverage doesn't exceed the true financial needs",
      "He forces the business to cancel its return-on-equity (ROE) measurements",
      "He checks if the writing financial professional has a high volume of replacements",
      "He requires the child actor to sign using a validated voice electronic signature"
    ],
    answer: 0,
    explanation: "If both commercial policies are active to secure the same borrow-balance, the total payout exceeds the actual loss, generating moral hazards."
  },
  {
    id: 80,
    lo: "6G Describe underwriting considerations for policy replacements",
    question: "A policyholder chooses to replace their existing active coverage with a new policy. If the new policy is purchased from the same insurer, it is classified as a(n):",
    options: [
      "Internal replacement",
      "External replacement",
      "Section 1035 tax surrender",
      "Waiver of premium for payor transition"
    ],
    answer: 0,
    explanation: "Internal replacements happen when a policyholder stays with their current carrier but shifts to a newer or different insurance contract."
  },
  {
    id: 81,
    lo: "6G Describe underwriting considerations for policy replacements",
    question: "If a policyholder replaces an existing policy by purchasing a new one from an entirely different insurance carrier, the transaction is a(n):",
    options: [
      "External replacement",
      "Internal replacement",
      "Section 1035 asset conversion",
      "Stock redemption"
    ],
    answer: 0,
    explanation: "External replacements are transactions where a competing carrier issues a new policy to displace the original carrier's contract."
  },
  {
    id: 82,
    lo: "6G Describe underwriting considerations for policy replacements",
    question: "Why are policy replacements a major focus for risk selection? What is the primary premium-pricing worry for older applicants?",
    options: [
      "The applicant may have developed a serious health condition, using the replacement to increase face amount without paying for the increased mortality risk",
      "The applicant is attempting to bypass the local anti-money laundering compliance checks",
      "The new carrier is legally blocked from utilizing any independent reinsurance treaties",
      "The replacement automatically resets the client's current estate value calculations"
    ],
    answer: 0,
    explanation: "Insureds in declining health may try to secure newer or bigger policies. The underwriter must ensure pricing covers their current extra mortality risk."
  },
  {
    id: 83,
    lo: "6G Describe underwriting considerations for policy replacements",
    question: "An underwriter evaluates replacement volumes to detect unethical sales. What is 'twisting' in insurance administration?",
    options: [
      "A prohibited practice where a financial professional misrepresents a policy's features to induce a client to replace it, often to the client's disadvantage",
      "The automatic addition of a waiver of premium for disability rider to standard policies",
      "Dividing risk liability among multiple reinsurers using a retrocession agreement",
      "Calculating the exact cost basis of an active whole life insurance contract"
    ],
    answer: 0,
    explanation: "Twisting is a deceptive, illegal sales practice where advisors mislead clients about negative policy impacts to prompt an unmerited replacement."
  },
  {
    id: 84,
    lo: "6G Describe underwriting considerations for policy replacements",
    question: "A writing financial professional frequently advises a client to replace one policy after another, multiple times in sequence. This prohibited sales practice is defined as:",
    options: [
      "Churning",
      "Twisting",
      "Lapping",
      "Suitability tracking"
    ],
    answer: 0,
    explanation: "Churning involves repeatedly replacing policies within a short window solely to trigger fresh first-year sales commissions for the advisor, which hurts the consumer."
  },
  {
    id: 85,
    lo: "6G Describe underwriting considerations for policy replacements",
    question: "To protect consumers from twisting and churning, most states have adopted some version of which NAIC model rule?",
    options: [
      "Replacement of Life Insurance and Annuities Model Regulation",
      "Accidental Death and Dismemberment Model Provision",
      "Insurance Information and Privacy Protection Model Act",
      "Fair Credit and Solvency Model Act"
    ],
    answer: 0,
    explanation: "The NAIC Replacement Model sets strict rules, mandatory disclosure forms, and verification schedules to manage replacements ethically."
  },
  {
    id: 86,
    lo: "6G Describe underwriting considerations for policy replacements",
    question: "Under standard state replacement laws, what must the financial professional submit when a policy is being replaced?",
    options: [
      "A replacement statement signed by both the applicant and the advisor indicating an active policy is being replaced",
      "A multiyear audited income statement showing a business current ratio above 2.0",
      "A signed waiver of the child's parental consent requirement",
      "A complete laboratory cotinine urinalysis sheet from a clinical specialist"
    ],
    answer: 0,
    explanation: "Both advisor and client must sign a formal replacement statement listing the details of the policy being canceled and the new contract's terms."
  },
  {
    id: 87,
    lo: "6G Describe underwriting considerations for policy replacements",
    question: "What is an important consumer right regarding 'sales materials' during a state-regulated replacement transaction?",
    options: [
      "The financial professional must leave copies of all shown sales materials with the applicant and provide the replacer with a list of them",
      "The financial professional is legally prohibited from using any printed sales brochures",
      "The sales materials must be submitted to the local FinCEN bureau within 48 hours",
      "The materials must be converted to an electronic voice recording co-signed by parent"
    ],
    answer: 0,
    explanation: "Leaving marketing literature with the applicant ensures they have documented evidence of any claims or representations made by the sales representative."
  },
  {
    id: 88,
    lo: "6G Describe underwriting considerations for policy replacements",
    question: "When a replacement is registered, what administrative action must the replacing insurer perform regarding the original carrier?",
    options: [
      "Send written notification to the original insurer with details about the new policy applied for",
      "Unilaterally purchase the cash surrender values of all active files",
      "File a material misrepresentation code with the MIB Group without warning",
      "Instruct the original carrier to apply a temporary flat extra premium"
    ],
    answer: 0,
    explanation: "Insurers must notify the original carrier, giving them a chance to explain the current policy benefits and conserve their business."
  },

  // === 6G (1035 EXCHANGES) & 6H: SUPPLEMENTAL BENEFITS & RIDERS (89-100) ===
  {
    id: 89,
    lo: "6G Describe underwriting considerations for policy replacements",
    question: "If a policyowner surrenders an active permanent policy, any portion of the received cash value that is greater than their 'cost basis' is:",
    options: [
      "Considered an investment gain and taxable as ordinary income",
      "Classified as a tax-free unearned dividend credit",
      "Automatically returned to the insurer to cover table rating debits",
      "Exempt from state-level tax filings under standard NAIC regulations"
    ],
    answer: 0,
    explanation: "Cash returns exceeding the total net premium injections (cost basis) represent taxable interest/capital gains and are taxed as ordinary income."
  },
  {
    id: 90,
    lo: "6G Describe underwriting considerations for policy replacements",
    question: "How is an individual policyowner's tax-relevant 'cost basis' calculated?",
    options: [
      "The sum of all premiums paid less withdrawals, dividends, and outstanding policy loans",
      "The total current cash value divided by the return-on-equity (ROE) ratio",
      "The total long-term debt subtracted from the owner's net worth",
      "The face value of the active policy minus any accidental death benefit riders"
    ],
    answer: 0,
    explanation: "Cost basis isolates the owner's net cash investment by subtracting any prior payouts (withdrawals or dividends) from the total premiums paid."
  },
  {
    id: 91,
    lo: "6G Describe underwriting considerations for policy replacements",
    question: "A Section 1035 exchange allows a policyowner to avoid taxable gains during policy replacement by:",
    options: [
      "Directly transferring the entire cash surrender value of the old policy to pay premiums on the new policy on a tax-free basis",
      "Converting a standard whole life contract into a direct-to-consumer guaranteed-issue plan",
      "Unilaterally deleting any active outstanding personal loans from the business balance sheet",
      "Waiving the requirement to declare any physical impairments on the nonmedical supplement"
    ],
    answer: 0,
    explanation: "Section 1035 of the tax code permits the tax-free rollover of cash values to a newer, better policy on the same insured, preserving capital."
  },
  {
    id: 92,
    lo: "6H Identify different types of supplemental benefits that life insurance policies may provide and describe typical underwriting considerations for each type of benefit",
    question: "Supplemental benefits and riders allow customization. If a policyowner wants to add supplemental coverage to an existing policy, who reviews this first?",
    options: [
      "The insurer’s policyowner services staff, who refer it to underwriting if the risk increase is moderate or significant",
      "A third-party consumer reporting agency inspector",
      "The Medical Information Bureau (MIB) activity database specialists",
      "The primary commercial bank that holds the business's creditor liens"
    ],
    answer: 0,
    explanation: "Minor shifts are handled directly by customer service. If a rider adds significant mortality or morbidity risk, it is routed to underwriters for formal review."
  },
  {
    id: 93,
    lo: "6H Identify different types of supplemental benefits that life insurance policies may provide and describe typical underwriting considerations for each type of benefit",
    question: "A 'disability income benefit' rider provides a monthly income benefit if the insured becomes totally disabled. How do underwriters assess this rider?",
    options: [
      "By evaluating the proposed insured's current state of health, occupation, and avocations associated with higher disability rates",
      "By checking the business's current ratio and fast asset reserves",
      "By applying a female-only male mismatch build chart to calculate BMI",
      "By ensuring the applicant's children are enrolled in a guaranteed insurability rider"
    ],
    answer: 0,
    explanation: "Disability carries high morbidity. The underwriter vets the client's physical health, dangerous hobbies, and job hazards that could cause disability."
  },
  {
    id: 94,
    lo: "6H Identify different types of supplemental benefits that life insurance policies may provide and describe typical underwriting considerations for each type of benefit",
    question: "Which of the following is an age restriction commonly applied to the 'waiver of premium for disability' (WP) benefit rider?",
    options: [
      "It is normally available to proposed insureds below age 55 or 60, and covers only disabilities beginning before age 65",
      "It is restricted exclusively to applicants over the age of 70 who show no medical impairments",
      "It can only be issued on children under 18 years old under family benefit rules",
      "It is automatically canceled once the business's debt-to-equity ratio exceeds 1.0"
    ],
    answer: 0,
    explanation: "Because disability risks skyrocket with age, WP riders have entry ceilings (below age 55 or 60) and terminate coverage as the insured nears retirement age (e.g. 65)."
  },
  {
    id: 95,
    lo: "6H Identify different types of supplemental benefits that life insurance policies may provide and describe typical underwriting considerations for each type of benefit",
    question: "A family benefit rider insures the lives of the insured’s spouse and children. What is the standard mortality limit for adding family members as standard risks?",
    options: [
      "The mortality rating of each family member must be no higher than 200 percent",
      "Each family member must be graded at standard 100 percent risk on male build charts",
      "The spouse must show a return-on-equity ratio greater than 0.15",
      "The children are automatically included regardless of any physical impairments"
    ],
    answer: 0,
    explanation: "Insurers generally permit family members with minor impairments, but decline rider coverage if any member's mortality rate exceeds 200% (Table 8)."
  },
  {
    id: 96,
    lo: "6H Identify different types of supplemental benefits that life insurance policies may provide and describe typical underwriting considerations for each type of benefit",
    question: "A 'guaranteed insurability' (GI) benefit gives the right to buy additional coverage on specified option dates. To limit antiselection, what are the standard GI limits?",
    options: [
      "Option dates occur typically every three years, and option rights expire after the insured reaches age 40",
      "The policyowner can purchase unlimited coverage at any time with no age restrictions",
      "The rider can be added to any basic policy issued on a substandard basis",
      "The increased face amount can only be purchased if the insured passes a physical exam"
    ],
    answer: 0,
    explanation: "To prevent clients from buying extra coverage only when they fall ill, insurers limit purchases to set periodic windows and end options by age 40."
  },
  {
    id: 97,
    lo: "6H Identify different types of supplemental benefits that life insurance policies may provide and describe typical underwriting considerations for each type of benefit",
    question: "An accidental death benefit (ADB) provides double indemnity. What is the standard entry age bracket and expiration limit for ADB riders?",
    options: [
      "They are rarely issued over age 55 or 60, and expire when the insured reaches age 65 or 70",
      "They can be issued at any age and persist for the entire life of a permanent contract",
      "They are restricted to children under age 18 under juvenile rules",
      "They are issued only to applicants rated for alcohol or substance abuse"
    ],
    answer: 0,
    explanation: "Accident rates rise with senior age. Insurers restrict ADB entry above age 55/60 and end coverage at age 65/70 to manage high claim costs."
  },
  {
    id: 98,
    lo: "6H Identify different types of supplemental benefits that life insurance policies may provide and describe typical underwriting considerations for each type of benefit",
    question: "Under standard guidelines, an accidental death benefit (ADB) rider can be issued at standard rates to applicants whose base mortality rating is:",
    options: [
      "200 percent mortality (Table 8) or below",
      "Exactly 100 percent base mortality only",
      "Over 300 percent mortality with a temporary flat extra",
      "Zero, meaning they are preferred plus risk profiles"
    ],
    answer: 0,
    explanation: "Insurers issue standard-rate ADB riders to applicants with moderate health risks up to 200% mortality, denying or rating them if risk is higher."
  },
  {
    id: 99,
    lo: "6H Identify different types of supplemental benefits that life insurance policies may provide and describe typical underwriting considerations for each type of benefit",
    question: "In the United States, a living benefit allows the policyowner to receive a portion of the death benefit before death. This benefit is a(n):",
    options: [
      "Accelerated death benefit",
      "Disability income benefit",
      "Guaranteed insurability option",
      "Waiver of premium for payor benefit"
    ],
    answer: 0,
    explanation: "Living benefits (accelerated benefits) allow terminal or chronically ill clients to tap their death proceeds early to cover medical costs."
  },
  {
    id: 100,
    lo: "6H Identify different types of supplemental benefits that life insurance policies may provide and describe typical underwriting considerations for each type of benefit",
    question: "To qualify for a 'chronic illness' accelerated benefit, the insured must present permanent severe cognitive impairment, or permanently be unable to perform at least two of the six 'activities of daily living' (ADL). The six ADLs are defined as:",
    options: [
      "Bathing, dressing, transferring, toileting, continence, and eating",
      "Working, driving, writing, hearing, speaking, and reasoning",
      "Sleeping, walking, exercising, studying, computing, and investing",
      "Filing taxes, signing contracts, managing business, paying rent, cleaning, and cooking"
    ],
    answer: 0,
    explanation: "Activities of daily living (ADL) are standardized baseline metrics of independence: bathing, dressing, transferring, toileting, continence, and eating."
  }
];
