import { Question } from '../../types';

export const chapter5Questions: Question[] = [
  // === 5A: RISKS DETERRED BY FINANCIAL UNDERWRITING (1-15) ===
  {
    id: 1,
    lo: "5A Describe the risks deterred by financial underwriting",
    question: "Underwriter Brenda identifies that an applicant is applying for more coverage than they can realistically afford. Experience shows that such policyowners tend to let their policies terminate due to nonpayment. This risk is known as of:",
    options: [
      "Policy lapse",
      "Antiselection",
      "Speculation",
      "Money laundering"
    ],
    answer: 0,
    explanation: "Lapse is the termination of a policy due to nonpayment of premiums. Financial underwriting deters this by ensuring the premium is affordable based on the applicant's income and net worth."
  },
  {
    id: 2,
    lo: "5A Describe the risks deterred by financial underwriting",
    question: "At Summit Life, the persistency rate is a critical KPI. Which of the following best defines 'persistency rate' in life insurance administration?",
    options: [
      "The percentage of a specified group of contracts that remain in force during a specified period",
      "The frequency at which death claims are approved within the two-year contestable period",
      "The proportion of substandard policies that receive temporary flat extra premium rates",
      "The percentage of electronic applications processed completely through straight-through processing"
    ],
    answer: 0,
    explanation: "Persistency rate is the percentage of a specified group of insurance contracts that remain in force during a specified period, such as a year."
  },
  {
    id: 3,
    lo: "5A Describe the risks deterred by financial underwriting",
    question: "A high policy lapse rate can negatively affect an insurer's profitability. How does financial underwriting help maintain an excellent persistency rate?",
    options: [
      "By confirming that the proposed insured can afford the premium payments necessary to keep the policy in force",
      "By automatically converting permanent cash value policies into term life policies",
      "By adding high flat extra premiums to all policies within standard risk classes",
      "By shifting the legal responsibility of premium payments to regional reinsurance companies"
    ],
    answer: 0,
    explanation: "Financial underwriting ensures the proposed insured is financially capable of affording the premium payments, directly protecting the policy's persistence over time."
  },
  {
    id: 4,
    lo: "5A Describe the risks deterred by financial underwriting",
    question: "Underwriter Gary is reviewing a low-cost, inexpensive term life application. Under standard industry guidelines, which action is most appropriate regarding Gary's financial review?",
    options: [
      "Gary may forgo a detailed examination of the proposed insured's ability to pay, but must still evaluate the need for the amount of coverage",
      "Gary must conduct a multiyear audited CPA review of all assets before approving the file",
      "Gary must automatically reject the term application as speculative",
      "Gary must apply a permanent flat extra premium of $15 per $1,000 to cover administration fees"
    ],
    answer: 0,
    explanation: "For relatively inexpensive policies (like term life), insurers may skip a rigorous premium affordability check, but the underwriter must still confirm that a valid need exists for the face amount requested."
  },
  {
    id: 5,
    lo: "5A Describe the risks deterred by financial underwriting",
    question: "An applicant who has no dependents and modest income requests a substantial amount of coverage. The underwriter suspects that the applicant may be concealing an undisclosed medical condition, which is a financial underwriting risk known as:",
    options: [
      "Antiselection",
      "Persistency erosion",
      "Speculation on human life",
      "Lien placement"
    ],
    answer: 0,
    explanation: "Antiselection occurs when individuals who believe they have a higher likelihood of loss seek more coverage than what is normal or justified, often signaling hidden medical impairments."
  },
  {
    id: 6,
    lo: "5A Describe the risks deterred by financial underwriting",
    question: "Underwriter Tim is reviewing an application for an exceptionally large face amount. Tim knows that the potential for antiselection based on financial factors is:",
    options: [
      "Greater when applicants seek policies with large face amounts",
      "Entirely restricted to term life policies under $50,000",
      "Completely resolved once the applicant signs an electronic signature form",
      "Irrelevant if the applicant's biological family has standard life expectancy"
    ],
    answer: 0,
    explanation: "The possibility of antiselection tends to be significantly greater when applicants seek substantial face amounts, requiring the insurer to conduct deeper financial background checks."
  },
  {
    id: 7,
    lo: "5A Describe the risks deterred by financial underwriting",
    question: "A basic tenet of the insurance industry holds that a death benefit must not create a situation in which an insured is worth more dead than alive. Speculation is defined as:",
    options: [
      "The unethical purchase of insurance to make a profit on the proceeds rather than to protect against financial loss",
      "The change of an occupational rating from rated to standard after twelve calendar months",
      "Investing premium reserves into higher-risk private capital equity bonds",
      "The simultaneous application for coverage with five or more separate primary carriers"
    ],
    answer: 0,
    explanation: "Speculation refers to the unethical acquisition of insurance coverage with the intent of profiting from the death benefit, rather than covering a legitimate financial loss risk."
  },
  {
    id: 8,
    lo: "5A Describe the risks deterred by financial underwriting",
    question: "Barry Winter applies for a $500,000 life insurance policy on his aunt Agnes, whom he has not seen or communicated with in seven years, and names himself as the beneficiary. The underwriter denies the case because:",
    options: [
      "Barry does not have an insurable interest in Agnes's life, making the policy speculative",
      "Agnes must undergo automatic genetic and psychiatric screening first",
      "Aunt-nephew insurance is legally prohibited under all international treaties",
      "Premium payments must be financed with a bank loan collateralization"
    ],
    answer: 0,
    explanation: "Without a valid insurable interest (showing financial loss upon her death), the nephews' application is classified as speculative and is denied."
  },
  {
    id: 9,
    lo: "5A Describe the risks deterred by financial underwriting",
    question: "A life settlement is legally defined as: ",
    options: [
      "The sale of an in-force life insurance policy to a third party for more than its cash surrender value but less than its face amount",
      "The final tax payout calculated when settling a wealthy policyowner's probate estate",
      "The automatic termination of coverage following the end of a two-year contestability window",
      "The legal agreement to transition a policy from a standard class to a preferred class"
    ],
    answer: 0,
    explanation: "In a life settlement, a policyowner (typically elderly or no longer needing the coverage) sells their active policy to an investor for an amount higher than the cash value but lower than the death benefit."
  },
  {
    id: 10,
    lo: "5A Describe the risks deterred by financial underwriting",
    question: "Jane, age 71, cannot afford the premium payments on her $300,000 policy and decides to assign ownership of it to Wiley Associates in exchange for an immediate lump sum of $85,000. Wiley Associates is acting as a:",
    options: [
      "Life settlement provider",
      "CRA credit reporting clearinghouse",
      "Reinsurance treaty underwriting committee",
      "Pharmacy benefit manager (PBM)"
    ],
    answer: 0,
    explanation: "Under a life settlement, the company that assumes ownership, pays future premiums, and receives the face amount when the insured dies is known as a life settlement provider."
  },
  {
    id: 11,
    lo: "5A Describe the risks deterred by financial underwriting",
    question: "A life settlement transaction differs from a Stranger-Originated Life Insurance (STOLI) transaction primarily in terms of:",
    options: [
      "Timing and initial intent at the time of policy purchase",
      "The exact gender-based actuarial tables used to calculate premium indices",
      "Whether the applicant signed using a voice signature or click-wrap signature",
      "The number of medical impairments reported directly to the MIB database"
    ],
    answer: 0,
    explanation: "If a policy was purchased in good faith with the intent to keep it, but sold years later due to changing needs, it is a life settlement. If it was purchased with the pre-arranged intent to sell it to an investor immediately, it is a STOLI."
  },
  {
    id: 12,
    lo: "5A Describe the risks deterred by financial underwriting",
    question: "An investor contacts 67-year-old Bailey and proposes that Bailey buy a $1,450,000 life insurance policy with the pre-arranged agreement to transfer ownership to the investor in exchange for a cash payout. This transaction represents:",
    options: [
      "Stranger-originated life insurance (STOLI)",
      "Standard temporary family income protection",
      "An authorized accelerated death benefit settlement",
      "A standard retrocession treaty transaction"
    ],
    answer: 0,
    explanation: "Since the policy is instigated by an investor who has no insurable interest in the insured, with the preplanned intent to transfer ownership upon issue, this is a STOLI."
  },
  {
    id: 13,
    lo: "5A Describe the risks deterred by financial underwriting",
    question: "Stranger-Originated Life Insurance (STOLI) transactions are considered highly problematic by insurers and regulators because:",
    options: [
      "They represent wagering on human life, which is illegal in many states and considered insurance fraud",
      "They completely eliminate the primary insurer's right to utilize independent reinsurers",
      "They require the applicant's family members to pay all monthly administrative fees",
      "They occur only when the face amount applied for is under $10,000"
    ],
    answer: 0,
    explanation: "STOLI is illegal in many states because it represents wagering on human life, violating the public requirement for an insurable interest at the policy's start."
  },
  {
    id: 14,
    lo: "5A Describe the risks deterred by financial underwriting",
    question: "When evaluating potential STOLI indicators, which of the following is considered a major 'red flag' by home office underwriters?",
    options: [
      "The premiums are to be paid or financed by someone other than the policyowner",
      "The proposed insured is under 30 years of age and in perfect physical health",
      "The application is completed entirely using electronic signatures and instant validation rules",
      "The applicant has a history of standard whole life coverage with competitor firms"
    ],
    answer: 0,
    explanation: "If premium payments are financed by loans or paid by a third party with no relationship to the insured, it strongly signals a potential STOLI transaction."
  },
  {
    id: 15,
    lo: "5A Describe the risks deterred by financial underwriting",
    question: "The legal practice of engaging in financial transactions to hide the identity, source, or ultimate destination of funds associated with criminal activity is defined as:",
    options: [
      "Money laundering",
      "Speculation on human life",
      "Third-party retrocession",
      "Antiselection"
    ],
    answer: 0,
    explanation: "Money laundering is the practice of hiding the identity, origin, or destination of illicit wealth using financial transactions or banking,/insurance products."
  },

  // === 5B: SOURCES OF FINANCIAL INFORMATION (16-30) ===
  {
    id: 16,
    lo: "5B List and describe the sources of financial information used in underwriting individual life insurance",
    question: "Under the provisions of the federal USA Patriot Act of 2001, which requirement was extended to all financial institutions, including life insurance companies?",
    options: [
      "Anti-Money Laundering (AML) compliance program requirements",
      "Mandatory flat extra premium limits for all military personnel",
      "A complete ban on using gender-based actuarial tables",
      "The requirement to utilize the numerical rating system for all term policies"
    ],
    answer: 0,
    explanation: "The USA Patriot Act of 2001 extended AML compliance program requirements to insurers, mandate training, and audit systems for cash-value products."
  },
  {
    id: 17,
    lo: "5B List and describe the sources of financial information used in underwriting individual life insurance",
    question: "Which of the following life insurance products are typically covered by federal Anti-Money Laundering (AML) rules due to their capacity to store and transfer cash assets?",
    options: [
      "Individual permanent life insurance policies and individual annuity contracts",
      "Group short-term accidental death and dismemberment certificates",
      "Standard face-amount level term policies with no cash value options",
      "Credit life insurance plans connected to local commercial auto loans"
    ],
    answer: 0,
    explanation: "Only cash value life insurance policies (such as permanent or whole life) and individual annuity contracts present high laundering risks and are subject to AML rules."
  },
  {
    id: 18,
    lo: "5B List and describe the sources of financial information used in underwriting individual life insurance",
    question: "An insurance compliance officer is training staff on AML rules. The federal bureau of the U.S. Treasury Department that requires insurers to maintain active AML programs is the:",
    options: [
      "Financial Crimes Enforcement Network (FinCEN)",
      "National Association of Insurance Commissioners (NAIC)",
      "Office of Foreign Assets Control (OFAC)",
      "Federal Insurance Office (FIO)"
    ],
    answer: 0,
    explanation: "FinCEN is the U.S. Treasury bureau responsible for enforcing AML program mandates across financial institutions and insurers."
  },
  {
    id: 19,
    lo: "5B List and describe the sources of financial information used in underwriting individual life insurance",
    question: "During client intake, Zenith Life's administrative team checks the applicant's name against a list of blocked countries, terrorists, and illegal organizations. This list is maintained by the:",
    options: [
      "Office of Foreign Assets Control (OFAC)",
      "Financial Crimes Enforcement Network (FinCEN)",
      "Medical Information Bureau (MIB)",
      "Fair Credit Reporting Association (FCRA)"
    ],
    answer: 0,
    explanation: "The Office of Foreign Assets Control (OFAC) is the U.S. Treasury department that maintains the list of restricted individuals, entities, and countries with whom business is prohibited."
  },
  {
    id: 20,
    lo: "5B List and describe the sources of financial information used in underwriting individual life insurance",
    question: "If an underwriting system triggers an alert indicating that a questionable transaction has occurred on an active permanent life file, the compliance department is required to file a:",
    options: [
      "Suspicious Activity Report (SAR) with FinCEN",
      "Material Misrepresentation Complaint with the MIB",
      "Bankruptcy Disclosure Notice with the local probate courts",
      "Flat Extra Rating Request with reinsurance partners"
    ],
    answer: 0,
    explanation: "Whenever an insurer identifies signs of a suspicious financial transaction, they must file a Suspicious Activity Report (SAR) with FinCEN."
  },
  {
    id: 21,
    lo: "5B List and describe the sources of financial information used in underwriting individual life insurance",
    question: "Which of the following actions by an applicant is a warning sign that could indicate a potential money laundering attempt to home office underwriters?",
    options: [
      "The applicant shows little concern for the financial performance of a cash value policy but intense interest in its early termination features",
      "The applicant chooses to authorize the insurer to pull tax transcripts using IRS Form 4506-T",
      "The applicant requests a nonmedical limit for a standard preferred non-tobacco product",
      "The applicant submits a detailed CPA statement covering five years of audited business profit"
    ],
    answer: 0,
    explanation: "Launderers often seek to deposit dirty money into a cash value policy and withdraw it quickly, making a focus on early termination/surrender features a major red flag."
  },
  {
    id: 22,
    lo: "5B List and describe the sources of financial information used in underwriting individual life insurance",
    question: "Underwriters collect financial status information from several primary sources. Which of the following is considered one of the three primary resources?",
    options: [
      "The application for insurance, the financial professional, and the inspection report",
      "The state department of insurance licensing register and public social media platforms",
      "The MIB Insurance Activity Index and the medical director's formal manual",
      "The NAIC model law register and federal bankruptcy court dockets"
    ],
    answer: 0,
    explanation: "The three primary sources of basic financial underwriting information are the policy application, statements/cover letters from the writing agent, and third-party consumer inspection reports."
  },
  {
    id: 23,
    lo: "5B List and describe the sources of financial information used in underwriting individual life insurance",
    question: "Before investigating further details, how does an underwriter define an applicant's financially relevant 'net worth'?",
    options: [
      "The mathematical difference between the total value of all owned assets and all liabilities",
      "The total annual salary received from unearned or passive investment interests",
      "The absolute sum of all in-force term life insurance face amounts divided by age",
      "The maximum amount of annual premium spending permitted under the percentage rules"
    ],
    answer: 0,
    explanation: "Net worth is calculated as total owned assets minus total outstanding liabilities, representing the net equity of an individual's estate."
  },
  {
    id: 24,
    lo: "5B List and describe the sources of financial information used in underwriting individual life insurance",
    question: "For an application involving a substantial face amount, an underwriter asks the writing agent to submit a 'cover letter'. What is the primary purpose of this letter?",
    options: [
      "To provide a detailed explanation describing the purpose of the insurance and the method used to determine the face amount",
      "To legally exempt the applicant from having to undergo any future MIB Group database check",
      "To transfer the ownership of the applied-for policy to an authorized reinsurance partner",
      "To verify that the agent has completed all required state-level suitability training"
    ],
    answer: 0,
    explanation: "A cover letter from the financial professional explains the financial rationale, the client's needs, and the reasoning behind the specific face value requested."
  },
  {
    id: 25,
    lo: "5B List and describe the sources of financial information used in underwriting individual life insurance",
    question: "While reviewing an inspection report, an underwriter identifies a 'lien' registered against the applicant's property. What is a 'lien' in financial risk assessment?",
    options: [
      "A legal claim on the proposed insured's property in connection with outstanding debts",
      "An official tax refund granted by the Internal Revenue Service",
      "The current cash surrender value of an active competitor policy",
      "The growth percentage applied when calculating future estate tax values"
    ],
    answer: 0,
    explanation: "A lien represents a legal claim or right against a debtor's property, signaling outstanding financial liabilities or payment defaults."
  },
  {
    id: 26,
    lo: "5B List and describe the sources of financial information used in underwriting individual life insurance",
    question: "An underwriter wants to verify an applicant's reported income directly from the Internal Revenue Service. To obtain permission to get a tax transcript, the underwriter requests starting IRS form:",
    options: [
      "Form 4506-T",
      "Form W-2",
      "Form 1099-MISC",
      "Form 1040 Schedule C"
    ],
    answer: 0,
    explanation: "IRS Form 4506-T is the official taxpayer authorization form allowing the IRS to release tax return transcripts directly to an authorized third party like an insurer."
  },
  {
    id: 27,
    lo: "5B List and describe the sources of financial information used in underwriting individual life insurance",
    question: "When reviewing personal income tax filings, why would an underwriter pay particular attention to extremely large deductions listed for medical or dental expenses?",
    options: [
      "Because large health deductions can signal that the proposed insured possesses a significant medical impairment",
      "Because medical deductions automatically reduce the applicant's legal capacity to sign e-applications",
      "Because it indicates that the financial professional did not verify the good order check",
      "Because medical deductions are classified as non-admitted assets under insolvency rules"
    ],
    answer: 0,
    explanation: "Large, unusual itemized medical deductions on tax returns can indicate the applicant has been undergoing costly treatments for a serious, undisclosed health condition."
  },
  {
    id: 28,
    lo: "5B List and describe the sources of financial information used in underwriting individual life insurance",
    question: "For applications requesting coverage of $1 million or more, the primary insurer typically requires the consumer to fill out a specialized questionnaire focusing on:",
    options: [
      "Tax liabilities, estate values, business profiles, and assets/liabilities details",
      "Every medical treatment or lab test underwent since the age of last birthday",
      "The underwriter's internal chronological worksheet and communication log",
      "The specific list of reinsurance providers contracted with the carrier"
    ],
    answer: 0,
    explanation: "For large amounts ($1 million+), a dedicated financial questionnaire is used to log assets, liabilities, business holdings, and income streams to justify the high limit."
  },
  {
    id: 29,
    lo: "5B List and describe the sources of financial information used in underwriting individual life insurance",
    question: "An applicant requests a large policy to pay prospective estate taxes. What specific information will the underwriter list on the financial questionnaire to assess this?",
    options: [
      "The total value of the estate, its asset composition, and the estimated estate tax payable",
      "The body mass index calculations using build charts",
      "A complete history of all traffic violations on their motor vehicle record",
      "The names and home addresses of the nearest three neighboring residents"
    ],
    answer: 0,
    explanation: "An estate-tax financial questionnaire asks for details on the estate's total value, asset types, and estimated taxes due to confirm the face amount matches the actual tax liability."
  },
  {
    id: 30,
    lo: "5B List and describe the sources of financial information used in underwriting individual life insurance",
    question: "Underwriter Samantha is evaluating a business owner's application. To review the company's financial position at a precise calendar point in time, Samantha inspects a:",
    options: [
      "Balance sheet",
      "Income statement",
      "Cash flow statement",
      "Statement of owners' equity"
    ],
    answer: 1,
    explanation: "A balance sheet acts as a financial snapshot, detailing a business's assets, liabilities, and owner's equity at a specific point in time (such as year-end)."
  },
  {
    id: 31,
    lo: "5B List and describe the sources of financial information used in underwriting individual life insurance",
    question: "While reviewing a balance sheet, Samantha notes the business's current debts and outstanding future financial obligations. These debts are defined as:",
    options: [
      "Liabilities",
      "Assets",
      "Owners' equity",
      "Cash flow inflows"
    ],
    answer: 0,
    explanation: "Liabilities represent the debts, financial obligations, and monetary responsibilities a business must pay to outside entities."
  },
  {
    id: 32,
    lo: "5B List and describe the sources of financial information used in underwriting individual life insurance",
    question: "A financial statement that reports a business's revenues, expenses, and net profit or loss over a defined accounting period is are known as a(n):",
    options: [
      "Income statement",
      "Balance sheet",
      "Cash flow statement",
      "Statement of owners' equity"
    ],
    answer: 0,
    explanation: "The income statement (or profit and loss statement) compiles revenues and expenses over a set period, showing if a business operated at a net profit or loss."
  },
  {
    id: 33,
    lo: "5B List and describe the sources of financial information used in underwriting individual life insurance",
    question: "Underwriter Alice wants to assess a business's ability to generate sufficient cash from its daily operating, investing, and financing activities. She should evaluate the:",
    options: [
      "Cash flow statement",
      "Balance sheet",
      "Statement of owners' equity",
      "Annual report cover letter"
    ],
    answer: 0,
    explanation: "A cash flow statement details cash receipts and disbursements, divided by operating, investing, and financing columns, reflecting cash generation strength."
  },
  {
    id: 34,
    lo: "5B List and describe the sources of financial information used in underwriting individual life insurance",
    question: "When evaluating the debt load and stability of a business owner, why do underwriters prefer 'annual' financial statements over recent 'quarterly' reports?",
    options: [
      "The debt load of a business can fluctuate significantly during a year, and annual reports allow for multiyear trend analysis of ongoing strength",
      "Quarterly reports are legally prohibited from being shared with consumer reporting agencies",
      "Annual reports are completed by physicians rather than company accountants",
      "Quarterly reports are not checked by the Financial Crimes Enforcement Network (FinCEN)"
    ],
    answer: 0,
    explanation: "Because business debt fluctuates dynamically, annual reports provide a more stable, standardized bird's-eye view of multiyear trends compared to volatile short-term quarterly statements."
  },
  {
    id: 35,
    lo: "5B List and describe the sources of financial information used in underwriting individual life insurance",
    question: "An underwriter at Pioneer Life uses Zillow and social media checks to verify the value of assets stated on an application. What is the rule regarding search discrepancies?",
    options: [
      "Discrepancies do not justify adverse decisions alone but warrant further investigation with the financial professional",
      "Alice can immediately rescind the policy, treating any social media discrepancy as a material fraud",
      "Carl must cancel the verification and approve the file at preferred plus rates",
      "discrepancy reports are sent to the state department of insurance within 48 hours"
    ],
    answer: 0,
    explanation: "Discrepancies found on online sites warrant further investigation (such as contacting the agent for clarification) rather than serving as the sole ground for policy denial."
  },
  {
    id: 36,
    lo: "5B List and describe the sources of financial information used in underwriting individual life insurance",
    question: "A company that compiles historical auditing records, CEO comments, and independently verified financials for its public investors produces a yearly document known as the:",
    options: [
      "Annual report",
      "Cash flow statement",
      "Underwriting worksheet",
      "Inspection report"
    ],
    answer: 0,
    explanation: "The annual report is a yearly publication summarizing a corporation's financial history, executive reviews, and audited balance sheets for shareholders."
  },
  {
    id: 37,
    lo: "5B List and describe the sources of financial information used in underwriting individual life insurance",
    question: "An underwriter wants to check an applicant's credit score and history of bankruptcies. Under which federal act must the consumer reporting agency operate?",
    options: [
      "Fair Credit Reporting Act (FCRA)",
      "USA Patriot Act",
      "Gramm-Leach-Bliley Act",
      "Sherman Antitrust Act"
    ],
    answer: 0,
    explanation: "Credit reports are regulated under the Fair Credit Reporting Act (FCRA), protecting the privacy and correctness of consumer credit profiles."
  },
  {
    id: 38,
    lo: "5B List and describe the sources of financial information used in underwriting individual life insurance",
    question: "Which of the following describes 'unearned income' that an underwriter might evaluate during financial risk selection?",
    options: [
      "Dividends, interest, rental income, and capital gains that do not depend on active employment",
      "The salary and bonus streams earned during daily company operations",
      "Commissions paid directly to licensed writing brokers",
      "The cash reserves kept by a primary carrier under insolvency laws"
    ],
    answer: 0,
    explanation: "Unearned income refers to passive income streams (such as dividends, investment interests, rents) that do not stop upon the insured's death."
  },
  {
    id: 39,
    lo: "5B List and describe the sources of financial information used in underwriting individual life insurance",
    question: "If an applicant has an unstable, volatile income stream because they just launched a start-up company, which action represents standard underwriting care?",
    options: [
      "Conduct a thorough investigation and request tax returns, W-2s, or business plans regardless of the coverage amount requested",
      "Issue the policy as an automatic preferred non-tobacco risk to capture market share",
      "Postpone the application for a mandatory period of twelve call months",
      "Instruct the agent to unilaterally rewrite the application using a voice signature"
    ],
    answer: 0,
    explanation: "Unstable or highly volatile income makes evaluating future potential difficult. Underwriters typically request IRS filings or business model reviews to establish a realistic limit."
  },
  {
    id: 40,
    lo: "5B List and describe the sources of financial information used in underwriting individual life insurance",
    question: "Under standard AML compliance training, a primary due diligence process used to verify customer identity and address is commonly abbreviated as:",
    options: [
      "KYC (Know Your Customer)",
      "IAI (Insurance Activity Index)",
      "STOLI (Stranger-Originated Life Insurance)",
      "TIA (Temporary Insurance Agreement)"
    ],
    answer: 0,
    explanation: "Know Your Customer (KYC) guidelines represent the essential customer-identity verification and background check processes mandated under AML and banking regulations."
  },

  // === 5C: NEEDS FOR PERSONAL LIFE INSURANCE (41-55) ===
  {
    id: 41,
    lo: "5C Identify three generally accepted needs for purchasing personal life insurance",
    question: "Historically, the insurance industry has grouped legitimate individual life insurance purchases into distinct needs. What are the three generally accepted needs?",
    options: [
      "Family income protection, estate settlement, and charitable contributions",
      "Tax sheltered money laundering, speculation, and retrocession",
      "Lapse mitigation, premium financing, and automated triaging",
      "Reinsurance splitting, credit scoring, and suitability mapping"
    ],
    answer: 0,
    explanation: "The three standard personal needs recognized in individual financial underwriting are protecting family income, settling a deceased's estate, and facilitating charitable gifts."
  },
  {
    id: 42,
    lo: "5C Identify three generally accepted needs for purchasing personal life insurance",
    question: "A young breadwinner seeks a life insurance policy to replace her earnings and cover her family's ongoing rent and grocery bills. This purchase addresses the need for:",
    options: [
      "Family income protection",
      "Estate settlement",
      "Charitable contributions",
      "Business continuity"
    ],
    answer: 0,
    explanation: "Family income protection replaces the earnings of a deceased breadwinner to provide for the daily living costs of surviving household dependents."
  },
  {
    id: 43,
    lo: "5C Identify three generally accepted needs for purchasing personal life insurance",
    question: "In financial underwriting, what is the justification required to approve an application for family income protection?",
    options: [
      "The applicant must demonstrate that the requested face amount is reasonable and justified to support the surviving family's lifestyle",
      "The applicant must prove that they possess unearned passive income over $100,000",
      "The client must undergo a mandatory twelve-month waiting period",
      "The beneficiary must be an out-of-state irrevocable trust entity"
    ],
    answer: 0,
    explanation: "To prevent overinsurance, the applicant must demonstrate that the face value requested is realistically sized to support the dependents' ongoing living needs."
  },
  {
    id: 44,
    lo: "5C Identify three generally accepted needs for purchasing personal life insurance",
    question: "An estate is legally defined as: ",
    options: [
      "The totality of an individual's net worth, including all owned assets and all liabilities",
      "The total value of land properties held in multiple domestic jurisdictions",
      "The mathematical premium amount calculated under percentage-of-income rules",
      "The cash surrender value of active permanent insurance policies"
    ],
    answer: 0,
    explanation: "An estate consists of the totality of a person's financial net worth, representing all assets (properties, cash, investments) minus all liabilities (liens, debts)."
  },
  {
    id: 45,
    lo: "5C Identify three generally accepted needs for purchasing personal life insurance",
    question: "Which of the following represents a typical asset that is included when calculating an individual's total estate value?",
    options: [
      "Stocks, bonds, bank cash accounts, houses, land, and art collections",
      "Outstanding personal loans, mortgages, and credit card debts",
      "The future face amount of the applied-for term life policy",
      "The professional commission rates owed to the writing insurance agent"
    ],
    answer: 0,
    explanation: "Estate assets are items of value owned by the individual, including liquid cash, bonds, equities, real estate, land holdings, and valuable personal collections."
  },
  {
    id: 46,
    lo: "5C Identify three generally accepted needs for purchasing personal life insurance",
    question: "Which of the following represents a liability that must be subtracted when evaluating the net value of an estate?",
    options: [
      "Mortgages, unpaid credit card balances, and outstanding business debts",
      "Residential land holdings with active equity appraisal reports",
      "The cash value of any active permanent life policies",
      "Interest received from municipal and government funding accounts"
    ],
    answer: 0,
    explanation: "Estate liabilities are legal debts and claims outstanding against the individual, such as home mortgages, loans, and credit card debts."
  },
  {
    id: 47,
    lo: "5C Identify three generally accepted needs for purchasing personal life insurance",
    question: "When an individual dies, their estate often faces substantial cash needs. Policy proceeds for 'estate settlement' are designed to cover:",
    options: [
      "Estate taxes, outstanding medical debts, funeral fees, and legal costs",
      "The payment of future premiums for sibling policyholders",
      "The administrative costs of conducting a reinsurance audit",
      "Monthly premium spending limits calculated under percentage rules"
    ],
    answer: 0,
    explanation: "Estate settlement cash is used to clear debts, final hospital bills, burial costs, legal attorneys' fees, and pending estate taxes without liquidating illiquid assets."
  },
  {
    id: 48,
    lo: "5C Identify three generally accepted needs for purchasing personal life insurance",
    question: "Why would an underwriter require clear evidence of outstanding liabilities before approving a high face amount for estate settlement?",
    options: [
      "To confirm that the coverage amount matches verified debts and prevent speculative overinsurance",
      "To satisfy the requirements of the Office of Foreign Assets Control (OFAC)",
      "To automatically apply a standard table rating debit of +25 for extra mortality",
      "To calculate the applicant's body mass index on male build charts"
    ],
    answer: 0,
    explanation: "Verification of actual liabilities ensures that the requested settlement coverage is proportional to real obligations, avoiding overinsurance risks."
  },
  {
    id: 49,
    lo: "5C Identify three generally accepted needs for purchasing personal life insurance",
    question: "An applicant wishes to buy a life insurance policy to replace the future financial donations they would have made to their local university. This purchase addresses the need for:",
    options: [
      "Charitable contributions",
      "Estate conservation",
      "Family income protection",
      "Key-person validation"
    ],
    answer: 0,
    explanation: "Life insurance is a recognized vehicle for charitable giving, allowing a policyholder to name a charity as the beneficiary to replace future donations."
  },
  {
    id: 50,
    lo: "5C Identify three generally accepted needs for purchasing personal life insurance",
    question: "Underwriter Tim is reviewing an application for a charitable contribution. He notes that the applicant has no records of any past donations to the charity. How may Tim handle this?",
    options: [
      "Tim may require a documented history of charitable giving to the organization before approving coverage",
      "Tim must automatically decline the case for violating the Fair Credit Reporting Act",
      "Tim must rate the policy at Table 4 (200%) to offset the extra mortality",
      "Tim must instruct the applicant to convert the term policy into an annuity contract"
    ],
    answer: 0,
    explanation: "While gifting via death benefit is valid, underwriters may look for a history of prior support to the designated charity to verify that the intent is genuine."
  },
  {
    id: 51,
    lo: "5C Identify three generally accepted needs for purchasing personal life insurance",
    question: "Which of the following is considered a valid need for individual life insurance but is classified as a *business* rather than a *personal* need?",
    options: [
      "Key-person coverage to protect a company against losses from an executive's death",
      "Family income protection to replace a breadwinner's salary",
      "Estate conservation cash to pay prospective death taxes",
      "A charitable contribution to fund a non-profit foundation"
    ],
    answer: 0,
    explanation: "Key-person coverage protects a business from financial loss due to the death of an essential officer, making it a commercial/business need rather than personal."
  },
  {
    id: 52,
    lo: "5C Identify three generally accepted needs for purchasing personal life insurance",
    question: "When an applicant is replacing an existing life insurance policy with a new one, how does the underwriter evaluate the new total 'insurance in force'?",
    options: [
      "The underwriter subtracts the face value of the policy being replaced from the total applied-for amount",
      "The underwriter adds the value of both policies together to double the asset holdings",
      "The underwriter requires both policies to remain active for a mandatory two-year contestability window",
      "The underwriter automatically assigns the new client file to independent team underwriting"
    ],
    answer: 0,
    explanation: "To calculate total active risk, if a policy is being replaced, the face value of the old contract is subtracted since it will terminate upon delivery of the new one."
  },
  {
    id: 53,
    lo: "5C Identify three generally accepted needs for purchasing personal life insurance",
    question: "Some insurers include 'accidental death benefits' (ADB) when calculating total active risk. What is an accidental death benefit?",
    options: [
      "A rider providing an additional payout over the base face amount if the insured dies in a covered accident",
      "A contract provision that cancels the entire policy if the insured committed suicide",
      "The premium surcharge rate applied to substandard-class high-hazard drivers",
      "An automated file triaging rule used to detect potential money laundering"
    ],
    answer: 0,
    explanation: "An ADB rider offers supplementary coverage in case of accidental death. Insurers may set separate limits for ADB vs base face coverage."
  },
  {
    id: 54,
    lo: "5C Identify three generally accepted needs for purchasing personal life insurance",
    question: "When calculating total 'insurance in force' for personal financial underwriting, which of the following is typically EXCLUDED from the calculation by underwriters?",
    options: [
      "Group life insurance and employer-funded business insurance where the employer is the beneficiary",
      "Any individual term life policy purchased by the proposed insured",
      "Permanent whole life contracts holding a cash value feature",
      "The face value of a policy that is currently being replaced"
    ],
    answer: 0,
    explanation: "Business life coverage where the employer is the beneficiary, group term cover, and pension death benefits are generally excluded when evaluating personal coverage needs."
  },
  {
    id: 55,
    lo: "5C Identify three generally accepted needs for purchasing personal life insurance",
    question: "What represents the danger to an insurer if they fail to confirm a valid, justifiable need exists for a requested face amount?",
    options: [
      "The insurer faces an increased risk of overinsurance, exposing the firm to moral hazard and antiselection losses",
      "The insurer will be legally forced to return 100% of all premium assets immediately",
      "The writing financial professional's license is automatically suspended",
      "All active contestability provisions are declared null and void in court"
    ],
    answer: 0,
    explanation: "Failing to verify needs leads to overinsurance. This creates potential moral hazards where beneficiaries may have financial incentives to harm the insured."
  },

  // === 5D: ASSESSING FINANCIAL FACTORS (56-68) ===
  {
    id: 56,
    lo: "5D Describe the financial factors an underwriter assesses to determine whether the amount of individual life insurance coverage requested is appropriate",
    question: "Underwriter tim is reviewing an applicant's annual income. Tim must distinguish between 'earned income' and 'unearned income'. Which of the following defines 'earned income'?",
    options: [
      "Salary, bonuses, comissions, and stock options that terminate upon the insured's death",
      "Dividends, interest, capital gains, and passive cash receipts from rental property",
      "The mathematical cash value held within a permanent insurance contract",
      "The total commission value paid to active writing agents"
    ],
    answer: 0,
    explanation: "Earned income is salary, wages, and professional compensation that depend on active work and will stop when the individual dies, making it the proper basis for income-replacement calculations."
  },
  {
    id: 57,
    lo: "5D Describe the financial factors an underwriter assesses to determine whether the amount of individual life insurance coverage requested is appropriate",
    question: "How is 'unearned income' (or passive income) defined during financial underwriting?",
    options: [
      "Income that may continue to be received after the insured dies, such as interest, dividends, and investment capital gains",
      "Wages, fees, and monthly salary received from active employment",
      "The cash payouts generated when selling a policy through a life settlement",
      "Surcharge payments added to cover administrative flat extra ratings"
    ],
    answer: 0,
    explanation: "Unearned income represents passive wealth streams (interest, investment gains, rents) that do not stop upon death, meaning they do not represent an earnings loss to dependents."
  },
  {
    id: 58,
    lo: "5D Describe the financial factors an underwriter assesses to determine whether the amount of individual life insurance coverage requested is appropriate",
    question: "When determining a proposed insured's *need* for coverage, what is the standard industry guideline regarding earned and unearned income?",
    options: [
      "Many insurers consider only *earned* income when determining need, but consider *both earned and unearned* income when determining ability to pay premiums",
      "Insurers consider unearned income only, completely excluding salary from need calculations",
      "Both categories are treated identically and must be verified by multiyear audited business statements",
      "Insurers exclude both categories, using credit score as the sole indicator of need"
    ],
    answer: 0,
    explanation: "Only earned income needs replacing. However, both earned and unearned income count toward the client's total financial capacity to pay the premium."
  },
  {
    id: 59,
    lo: "5D Describe the financial factors an underwriter assesses to determine whether the amount of individual life insurance coverage requested is appropriate",
    question: "An underwriter discovers that an applicant is currently going through active bankruptcy proceedings. Standard underwriting guidelines dictate that the insurer should:",
    options: [
      "Postpone making an underwriting decision until the individual has been discharged from bankruptcy for a certain period",
      "Immediately approve the application as a standard-risk term policy",
      "Apply a permanent flat extra premium rating of $10 per $1,000",
      "Report the financial professional to the federal FinCEN bureau"
    ],
    answer: 0,
    explanation: "Because active bankruptcy poses high lapse and antiselection risks, most insurers postpone files until the court officially discharges the debtor, usually for 1 to 7 years."
  },
  {
    id: 60,
    lo: "5D Describe the financial factors an underwriter assesses to determine whether the amount of individual life insurance coverage requested is appropriate",
    question: "If an applicant has a historic bankruptcy that was successfully settled, what addition to the application files should the writing agent provide to the underwriter?",
    options: [
      "A written letter explaining the cause of the bankruptcy, how it was settled, and how they manage their current finances",
      "A signed waiver removing the incontestability provision from the policy",
      "An automated MIB code showing zero impairment metrics for the past year",
      "A complete audited cash flow statement for their domestic household"
    ],
    answer: 0,
    explanation: "For a settled bankruptcy, the agent should submit an explanation letter showing how the client stabilized their finances to verify premium affordability."
  },
  {
    id: 61,
    lo: "5D Describe the financial factors an underwriter assesses to determine whether the amount of individual life insurance coverage requested is appropriate",
    question: "Apart from bankruptcy checks, how do underwriters use 'net worth' information during personal financial risk selection?",
    options: [
      "To determine the appropriate amount of coverage needed to preserve the value of the proposed insured's estate",
      "To calculate the applicant's body mass index on standard build charts",
      "To confirm that the client has paid all licensing costs to writing brokers",
      "To satisfy the requirements of the Fair Credit Reporting Act (FCRA)"
    ],
    answer: 0,
    explanation: "Net worth details help underwriters verify estate values, allowing them to approve an appropriate face amount to cover final liabilities without overinsuring."
  },
  {
    id: 62,
    lo: "5D Describe the financial factors an underwriter assesses to determine whether the amount of individual life insurance coverage requested is appropriate",
    question: "While in-force life insurance face values are excluded from net worth, what asset from active policies is included in the net worth calculation?",
    options: [
      "The cash value of any active permanent life insurance policies",
      "The total commissions paid to writing agents over the past year",
      "The estimated future value of tax-exempt death benefit payouts",
      "The monthly premium costs paid under unearned income schedules"
    ],
    answer: 0,
    explanation: "The cash value of a permanent policy is a tangible liquid asset owned by the client, and is therefore included in personal net worth calculations."
  },
  {
    id: 63,
    lo: "5D Describe the financial factors an underwriter assesses to determine whether the amount of individual life insurance coverage requested is appropriate",
    question: "Which of the following scenarios is most likely to cause an underwriter to question if an applicant has sufficient funds to pay for life coverage?",
    options: [
      "An applicant's tax returns show substantial itemized alimony payments or large business losses",
      "The proposed insured is under 40 years of age and earns a flat salary",
      "The application is submitted completely electronically with click-wrap digital signatures",
      "The applicant has unearned interest income from government bonds"
    ],
    answer: 0,
    explanation: "Large ongoing alimony outlays or significant net business losses reduce an applicant's actual disposable cash flow, raising premium affordability and lapse risks."
  },
  {
    id: 64,
    lo: "5D Describe the financial factors an underwriter assesses to determine whether the amount of individual life insurance coverage requested is appropriate",
    question: "To help in the evaluation of a young professional whose current income is low but who expects significant future earnings, the underwriter should:",
    options: [
      "Consult with the chief underwriter or obtain info about the career's standard performance, looking beyond standard guides",
      "Reject the application immediately as speculative overinsurance",
      "Apply a mandatory permanent flat extra surcharge to protect premium reserves",
      "Instruct the agent to write the policy under a pre-arranged STOLI loan agreement"
    ],
    answer: 0,
    explanation: "For high-potential young professionals (like medical residents or law associates), underwriters can look beyond rigid guidelines, using industry performance models to approve higher face values."
  },
  {
    id: 65,
    lo: "5D Describe the financial factors an underwriter assesses to determine whether the amount of individual life insurance coverage requested is appropriate",
    question: "Why should an underwriter be cautious when an applicant shows unusually high interest in a policy's active 'early termination features'?",
    options: [
      "It can signal a potential money laundering attempt using cash-value withdrawals",
      "It represents an automatic violation of state-level age limits",
      "The applicant is trying to bypass the MIB's Insurance Activity Index",
      "The policy will be rated under Table 1 due to high mortality comorbidity"
    ],
    answer: 1,
    explanation: "A high interest in quick cash withdrawals or early termination, rather than long-term death benefits, can indicate a money laundering pattern using cash-value policies."
  },

  // === 5E: COVERAGE LIMIT TOOLS & RULES (66-80) ===
  {
    id: 66,
    lo: "5E Use a factor table and the percentage-of-income rule to calculate the maximum amount of coverage a proposed insured with a specified income could qualify for",
    question: "Apex Life uses standard 'factor tables' in its underwriting guide. What is a 'factor table' as used in financial risk selection?",
    options: [
      "A chart displaying the maximum amount of insurance—expressed in multiples of gross earned income—an insurer will approve for various age brackets",
      "A grid detailing the exact cash surrender payouts for permanent policies over ten years",
      "A table outlining the premium surcharge rates applied to substandard medical hazards",
      "A registry listing synonyms and derivative terms found in the medical manual"
    ],
    answer: 0,
    explanation: "A factor table is a guideline chart showing approved coverage limits scaled as multiples of the applicant's gross earned salary, with multiples decreasing as age rises."
  },
  {
    id: 67,
    lo: "5E Use a factor table and the percentage-of-income rule to calculate the maximum amount of coverage a proposed insured with a specified income could qualify for",
    question: "Reviewing Figure 5.5's factor table, the standard multiple of current gross earned income for age bracket 20-40 is:",
    options: [
      "20",
      "15",
      "10",
      "5"
    ],
    answer: 0,
    explanation: "According to the factor table in Figure 5.5, young workers (ages 20-40) qualify for coverage up to 20 times their gross annual earned income."
  },
  {
    id: 68,
    lo: "5E Use a factor table and the percentage-of-income rule to calculate the maximum amount of coverage a proposed insured with a specified income could qualify for",
    question: "Reviewing Figure 5.5's factor table, the multiple for age bracket 41-50 is:",
    options: [
      "15",
      "20",
      "10",
      "4"
    ],
    answer: 0,
    explanation: "Figure 5.5 lists a multiple of 15 for individuals aged 41 through 50, reflecting lower remaining future working years."
  },
  {
    id: 69,
    lo: "5E Use a factor table and the percentage-of-income rule to calculate the maximum amount of coverage a proposed insured with a specified income could qualify for",
    question: "Reviewing Figure 5.5's factor table, the multiple for age bracket 51-60 is:",
    options: [
      "10",
      "15",
      "5",
      "4"
    ],
    answer: 0,
    explanation: "For the 51-60 age segment, the income replacement multiple is set at 10 times gross earned wages."
  },
  {
    id: 70,
    lo: "5E Use a factor table and the percentage-of-income rule to calculate the maximum amount of coverage a proposed insured with a specified income could qualify for",
    question: "Antonia, age 53, earns a gross salary of $70,000. She has no active in-force life policies and requests $650,000 in coverage. According to Figure 5.5, how will her request be evaluated?",
    options: [
      "Approved, as her request is under the maximum qualification limit of $700,000 ($70,000 x 10)",
      "Denied, as her request exceeds her total life expectancy multiple of 5",
      "Approved, but she must pay a temporary flat extra premium of $5 per $1,000",
      "Postponed, since she must underwent a formal CPA audited financial statement first"
    ],
    answer: 0,
    explanation: "Under the factor table, an applicant aged 53 (51-60 bracket) qualifies for up to 10 times earned income ($70,000 x 10 = $700,000). Since $650,000 is under this limit, the face amount is approved."
  },
  {
    id: 71,
    lo: "5E Use a factor table and the percentage-of-income rule to calculate the maximum amount of coverage a proposed insured with a specified income could qualify for",
    question: "Rich, age 24, has a gross earned income of $45,000 as a paralegal and applies for a $1.5 million policy. Under the table in Figure 5.5, his standard maximum limit is $900,000. How can the underwriter justify approving his full $1.5 million request?",
    options: [
      "By reviewing credentials showing Rich passed the bar exam, giving him a near-term salary projection of $75,000",
      "By requiring Rich's employer to sign a pre-arranged STOLI loan document",
      "By adding an exclusion rider prohibiting him from practicing law for two years",
      "By assigning him to team underwriting where guidelines are completely ignored"
    ],
    answer: 0,
    explanation: "Rich's upcoming promotion to attorney justifies a higher limit based on near-term salary projections, allowing the underwriter to look beyond standard factor tables."
  },
  {
    id: 72,
    lo: "5E Use a factor table and the percentage-of-income rule to calculate the maximum amount of coverage a proposed insured with a specified income could qualify for",
    question: "To evaluate premium affordability, some insurers use a rule that calculates the maximum premium a client can spend as a set percentage of their gross earned and unearned income. This rule is the:",
    options: [
      "Percentage-of-income rule",
      "numerical rating rule",
      "Table rating method",
      "Estate conservation growth rule"
    ],
    answer: 0,
    explanation: "The percentage-of-income rule calculates affordable annual premium spending as a percentage of gross annual earnings, typically varying between 6% and 20% depending on income size."
  },
  {
    id: 73,
    lo: "5E Use a factor table and the percentage-of-income rule to calculate the maximum amount of coverage a proposed insured with a specified income could qualify for",
    question: "Drylandia's percentage-of-income rule allows premiums up to 7% of the first $10,000 of income, 11% of the next $15,000, and 18% of the rest. If Joan earns $100,000, what is her maximum annual premium budget?",
    options: [
      "$15,850",
      "$10,000",
      "$18,000",
      "$20,000"
    ],
    answer: 0,
    explanation: "Joan's budget is calculated as: (7% of $10,000 = $700) + (11% of $15,000 = $1,650) + (18% of remaining $75,000 = $13,500), totaling exactly $15,850."
  },
  {
    id: 74,
    lo: "5E Use a factor table and the percentage-of-income rule to calculate the maximum amount of coverage a proposed insured with a specified income could qualify for",
    question: "Under Drylandia's percentage-of-income guidelines, once Joan's maximum annual premium budget of $15,850 is calculated, how does the underwriter apply this constraint?",
    options: [
      "Joan's approved coverage face amount should not exceed what an annual premium of $15,850 can buy",
      "The insurer will refund $15,850 to Joan's bank account once a year",
      "Joan's family is required to deposit $15,850 in an escrow account during the contestable period",
      "The writing agent's commission is capped at a maximum of $15,850 per policy year"
    ],
    answer: 0,
    explanation: "The calculated budget defines the premium limit; the approved face amount is restricted to whatever coverage level is purchasable with a $15,850 annual outlay."
  },
  {
    id: 75,
    lo: "5E Use a factor table and the percentage-of-income rule to calculate the maximum amount of coverage a proposed insured with a specified income could qualify for",
    question: "Comparing the practical use of financial verification tools, how do life insurance companies typically prioritize factor tables relative to percentage-of-income rules?",
    options: [
      "Insurers utilize factor tables significantly more frequently than percentage-of-income rules",
      "Percentage-of-income rules are used exclusively, and factor tables have been phased out",
      "Both tools are legally mandated to be run collaboratively on 100% of open applications",
      "Insurers use percentage-of-income rules for medical impairments, and factor tables for avocations"
    ],
    answer: 0,
    explanation: "While both tools assess affordability, insurers use factor tables much more frequently due to their simplicity and direct alignment with earnings replacement needs."
  },
  {
    id: 76,
    lo: "5E Use a factor table and the percentage-of-income rule to calculate the maximum amount of coverage a proposed insured with a specified income could qualify for",
    question: "Priya wants life insurance to cover future estate taxes and protect her illiquid condominiums from a forced sale. To project her taxable estate value in 30 years, her agent uses an annual growth rate on her current net worth. Insurers typically set the maximum automatic growth rate at around:",
    options: [
      "6 percent",
      "12 percent",
      "18 percent",
      "1 percent"
    ],
    answer: 0,
    explanation: "In estate tax forecasting, insurers establish a standard maximum automatic growth rate of 6% per year on net worth, though higher rates can be approved with documentation."
  },
  {
    id: 77,
    lo: "5E Use a factor table and the percentage-of-income rule to calculate the maximum amount of coverage a proposed insured with a specified income could qualify for",
    question: "Using a future-value calculator, Byzantine Life projects that Priya's estate will grow to $7 million in 30 years. Federal tax law taxes estate values over a $5 million exemption threshold at a rate of 40%. Priya's projected tax liability is:",
    options: [
      "$800,000",
      "$2,000,000",
      "$2,800,000",
      "$5,000,000"
    ],
    answer: 0,
    explanation: "Priya's taxable estate value is her projected estate minus the exemption threshold ($7M - $5M = $2M). Her projected estate tax liability is 40% of this taxable portion: $2,000,000 * 0.40 = $800,000."
  },
  {
    id: 78,
    lo: "5E Use a factor table and the percentage-of-income rule to calculate the maximum amount of coverage a proposed insured with a specified income could qualify for",
    question: "Continuing the analysis, Byzantine's underwriting guidelines permit estate conservation coverage up to 85% of the projected tax liability of $800,000. What is Priya's maximum approved face amount?",
    options: [
      "$680,000",
      "$800,000",
      "$1,215,000",
      "$5,000,000"
    ],
    answer: 0,
    explanation: "Byzantine approves estate coverage up to 85% of her model's projected tax liability ($800,000 x 0.85), which totals exactly $680,000."
  },
  {
    id: 79,
    lo: "5E Use a factor table and the percentage-of-income rule to calculate the maximum amount of coverage a proposed insured with a specified income could qualify for",
    question: "A factor table represents income replacement needs. Why is unearned or passive income excluded from factor table calculations?",
    options: [
      "Because unearned income continues to be received by surviving family members after the insured's death and does not represent a loss",
      "Because unearned income is illegal under federal anti-money laundering guidelines",
      "Because unearned income is subject to automatic retrocession treaties with reinsurers",
      "Because unearned income cannot be verified using tax documentation or W-2 transcripts"
    ],
    answer: 0,
    explanation: "Since unearned income (interests, rents) continues to flow to heirs after the insured's death, it does not represent an earner loss that needs replacing."
  },
  {
    id: 80,
    lo: "5E Use a factor table and the percentage-of-income rule to calculate the maximum amount of coverage a proposed insured with a specified income could qualify for",
    question: "Reviewing Figure 5.5's factor table, an applicant who is 65 or older qualifies for an income replacement multiple of:",
    options: [
      "4",
      "5",
      "10",
      "15"
    ],
    answer: 0,
    explanation: "For applicants aged 65 and older (typically retired or close to retirement), the standard income replacement multiple is 4, reflecting minimal remaining working years."
  },

  // === 5F: NUMERICAL RATING SYSTEM (81-90) ===
  {
    id: 81,
    lo: "5F Explain how underwriters use the numerical rating system to classify individual life insurance risks and calculate the total risk represented by a proposed insured",
    question: "Most individual life underwriters use the 'numerical rating system' to classify risks. What is the fundamental concept behind this method?",
    options: [
      "The underwriter calculates a cumulative numerical score representing the degree of risk the proposed insured presents to the insurer",
      "The insurer assigns a number code to determine which writing agent receives commission bonuses first",
      "The underwriter uses a computerized database to randomly assign applicants to peer risk classes",
      "The insurer calculates the percentage of household cash flow spent on monthly premiums"
    ],
    answer: 0,
    explanation: "The numerical rating system calculates a cumulative mathematical value representing the proposed insured's mortality risk relative to a standard baseline."
  },
  {
    id: 82,
    lo: "5F Explain how underwriters use the numerical rating system to classify individual life insurance risks and calculate the total risk represented by a proposed insured",
    question: "Under the numerical rating system, what base score represents the statistical average, or standard, mortality risk?",
    options: [
      "100",
      "0",
      "50",
      "150"
    ],
    answer: 0,
    explanation: "The system uses a baseline score of 100 to represent a standard, average life expectancy risk, applying debits and credits to this starting score."
  },
  {
    id: 83,
    lo: "5F Explain how underwriters use the numerical rating system to classify individual life insurance risks and calculate the total risk represented by a proposed insured",
    question: "An applicant has a medical impairment that has an unfavorable impact on longevity. Under the numerical rating system, this unfavorable factor is assigned a positive value known as a:",
    options: [
      "Debit",
      "Credit",
      "Lien",
      "Retrocession symbol"
    ],
    answer: 0,
    explanation: "A debit is a positive value (e.g., +25 or +50) added to the baseline score of 100, representing increased mortality risk for unfavorable health factors."
  },
  {
    id: 84,
    lo: "5F Explain how underwriters use the numerical rating system to classify individual life insurance risks and calculate the total risk represented by a proposed insured",
    question: "An applicant has excellent cardiovascular test results. Under the numerical rating system, this favorable factor is assigned a negative value known as a:",
    options: [
      "Credit",
      "Debit",
      "Surrender value",
      "Aviation exclusion"
    ],
    answer: 0,
    explanation: "A credit is a negative value (e.g., -15 or -30) subtracted from the baseline score of 100, representing decreased mortality risk for favorable health factors."
  },
  {
    id: 85,
    lo: "5F Explain how underwriters use the numerical rating system to classify individual life insurance risks and classify risks based on final scores",
    question: "How do underwriters translate the final compiled numerical score into the appropriate risk classification?",
    options: [
      "Scores significantly lower than 100 indicate a preferred risk; scores well above 100 indicate a substandard or declined risk",
      "Any score that does not equal exactly 100 is automatically declined as non-standard",
      "Scores above 100 qualify for preferred plus rates, while scores below 100 represent substandard classes",
      "The numerical score only dictates whether the policy is term or permanent coverage"
    ],
    answer: 0,
    explanation: "Low scores (under 100) represent lower mortality risk and qualify for preferred rates. High scores (well over 100) represent higher risk, indicating substandard or uninsurable classes."
  },
  {
    id: 86,
    lo: "5F Explain how underwriters use the numerical rating system to classify individual life insurance risks and calculate the total risk represented by a proposed insured",
    question: "Mark, age 31, has a congenital cardiac impairment (+50 debit) but exercises regularly and maintains excellent diet, cholesterol, and weight metrics (-35 credit). What is Mark's final risk score?",
    options: [
      "115",
      "150",
      "65",
      "85"
    ],
    answer: 0,
    explanation: "Using the base score of 100, Mark's final score is calculated as: 100 (standard baseline) + 50 (cardiac debit) - 35 (lifestyle credit), which equals 115."
  },
  {
    id: 87,
    lo: "5F Explain how underwriters use the numerical rating system to classify individual life insurance risks and calculate the total risk represented by a proposed insured",
    question: "Sally, age 43, has moderate sleep apnea (+100 debit). Based on build charts, she is slightly overweight (+15 debit). Sally's father died of sleep apnea, adding a family history debit (+50). Sally is actively utilizing physician treatments, earning a credit (-30). Sally's final score is:",
    options: [
      "235",
      "165",
      "265",
      "135"
    ],
    answer: 0,
    explanation: "Using the baseline of 100, Sally's final score is: 100 + 100 (apnea) + 15 (weight) + 50 (family history) - 30 (treatment credit) = 235."
  },
  {
    id: 88,
    lo: "5F Explain how underwriters use the numerical rating system to classify individual life insurance risks and calculate the total risk represented by a proposed insured",
    question: "Which of the following categories of risk factors are analyzed but NOT assigned debits or credits under the numerical rating system?",
    options: [
      "Financial risk factors",
      "Medical risk factors",
      "Personal risk factors",
      "Lifestyles risk factors (e.g. tobacco use)"
    ],
    answer: 0,
    explanation: "Financial risk factors (like income or net worth) are evaluated to justify the policy size, but they do not receive direct debits or credits in the numerical health rating system."
  },
  {
    id: 89,
    lo: "5F Explain how underwriters use the numerical rating system to classify individual life insurance risks and locate information in the underwriting manual",
    question: "The reference document containing the exact list of standardized debits and credits for various impairments, lab results, and personal habits is the:",
    options: [
      "Underwriting manual",
      "Temporary insurance agreement",
      "Annual report index",
      "CPA financial statement checklist"
    ],
    answer: 0,
    explanation: "The underwriting manual is the authoritative directory listing standardized debits and credits, medical conditions, and guidelines to help underwriters calculate risk scores."
  },
  {
    id: 90,
    lo: "5F Explain how underwriters use the numerical rating system to classify individual life insurance risks and understand the role of financial factors",
    question: "While financial risks do not receive debits in numerical scoring, how can a negative financial finding (like a money laundering risk) override a perfect health rating?",
    options: [
      "A negative financial finding can prompt the underwriter to decrease the coverage offered or decline the application altogether, regardless of health",
      "The insurer must automatically convert the cash value policy into an ADB term contract",
      "The underwriter must add a flat extra rating of $50 per $1,000 on the active file",
      "Financial risks are handled exclusively by reinsurers and cannot override health scores"
    ],
    answer: 0,
    explanation: "Extreme financial risks (like money laundering or lack of insurable interest) make physical health irrelevant, leading directly to a reduction in coverage or denial of the policy."
  },

  // === 5G: CHARGING FOR SUBSTANDARD RISKS (91-100) ===
  {
    id: 91,
    lo: "5G Describe three methods of charging for substandard individual life insurance risks and identify which method is most appropriate based on whether a risk is expected to increase, decrease, or remain constant over time",
    question: "An insurer decides to accept an applicant with a medical impairment as a substandard risk. To maintain equity among all insureds, what action must the insurer take?",
    options: [
      "Charge a higher premium rate than the rate charged to standard-risk individuals",
      "Unilaterally bypass the policy's two-year contestability provision",
      "Require the client's write agreement to waive all accidental death benefits",
      "Transfer the monthly premium payments to an Office of Foreign Assets Control checking pool"
    ],
    answer: 0,
    explanation: "To follow fair practices and offset higher expected claims, insurers charge substandard risks higher rates proportional to their elevated mortality probability."
  },
  {
    id: 92,
    lo: "5G Describe three methods of charging for substandard individual life insurance risks and identify which method is most appropriate based on whether a risk is expected to increase, decrease, or remain constant over time",
    question: "What are the three generally accepted methods that life insurers use to charge premiums for substandard individual risk profiles?",
    options: [
      "The table rating method, the flat extra premium method, and a combination of the two",
      "The percentage-of-income method, the loan collateralization method, and the SAR reporting system",
      "The MIB activity indexing method, the CPA audited statement method, and the OFAC listing screening",
      "The direct voice subscription method, the click-wrap checklist method, and the TIA temporary coverage"
    ],
    answer: 0,
    explanation: "The three standard structures used to charge substandard premiums are table ratings, flat extra premiums, or a combination of both methods."
  },
  {
    id: 93,
    lo: "5G Describe three methods of charging for substandard individual life insurance risks and identify which method is most appropriate based on whether a risk is expected to increase, decrease, or remain constant over time",
    question: "Underwriters use the 'table rating method' to charge for substandard risks. This charging method is most appropriate for medical conditions where the extra mortality risk is expected to:",
    options: [
      "Increase with the insured's age",
      "Remain completely constant throughout the active policy lifespan",
      "Decrease and eventually disappear over a limited time frame",
      "Be completely eliminated once the contestable period passes"
    ],
    answer: 0,
    explanation: "The table rating method is utilized for chronic medical conditions (like diabetes or heart disease) where the risk of mortality increases over time as the insured ages."
  },
  {
    id: 94,
    lo: "5G Describe three methods of charging for substandard individual life insurance risks and identify which method is most appropriate based on whether a risk is expected to increase, decrease, or remain constant over time",
    question: "In the table rating method, insurers group risks into broad substandard brackets or tables. Each table typically represents what percentage increase over the standard premium rate?",
    options: [
      "A 25 percent increase in the standard premium",
      "A 10 percent increase in the standard premium",
      "A 50 percent increase in the standard premium",
      "A 100 percent increase in the standard premium"
    ],
    answer: 0,
    explanation: "Under standard industry tables, each progressive table step (represented by a number or letter) corresponds to a 25% increase over the base standard premium rate."
  },
  {
    id: 95,
    lo: "5G Describe three methods of charging for substandard individual life insurance risks and identify which method is most appropriate based on whether a risk is expected to increase, decrease, or remain constant over time",
    question: "An applicant is assigned a final score that places them in 'Table 1' (or Class A) under the table rating method. Their premium will be what percentage of the standard rate?",
    options: [
      "125 percent",
      "150 percent",
      "175 percent",
      "200 percent"
    ],
    answer: 0,
    explanation: "Table 1 represents a 25% premium increase, meaning the client is charged 125% of the standard premium rate."
  },
  {
    id: 96,
    lo: "5G Describe three methods of charging for substandard individual life insurance risks and identify which method is most appropriate based on whether a risk is expected to increase, decrease, or remain constant over time",
    question: "Using the table rating method, an applicant's final risk score corresponds to 'Table 4'. What is the total mortality rating percentage assigned to this policy?",
    options: [
      "200 percent",
      "150 percent",
      "175 percent",
      "225 percent"
    ],
    answer: 0,
    explanation: "To calculate mortality for Table 4: multiply the table number by 25, then add 100 standard baseline ((4 * 25) + 100 = 200%). Table 4 has a mortality rating of 200%, or twice standard mortality."
  },
  {
    id: 97,
    lo: "5G Describe three methods of charging for substandard individual life insurance risks and identify which method is most appropriate based on whether a risk is expected to increase, decrease, or remain constant over time",
    question: "What is the premium pricing structure utilized in the 'flat extra premium method'?",
    options: [
      "The insurer adds a specified extra dollar amount (such as $5 or $10) to the standard premium for every $1,000 of coverage",
      "The insurer raises the premium dynamically by 25% every year the policy remains active",
      "The insurer limits the beneficiary payout to a set percentage of the estate value",
      "The client's premium rate is determined solely by their household unearned income"
    ],
    answer: 0,
    explanation: "The flat extra premium method adds a fixed dollar surcharge (e.g., $5 per $1,000 of face value) to the standard rate to offset specific, non-increasing risks."
  },
  {
    id: 98,
    lo: "5G Describe three methods of charging for substandard individual life insurance risks and identify which method is most appropriate based on whether a risk is expected to increase, decrease, or remain constant over time",
    question: "The flat extra premium method is most appropriate for cases where the extra mortality risk is expected to be:",
    options: [
      "Either constant or decreasing with the insured's age",
      "Increasing significantly over the active life of the client",
      "Completely unpredictable due to active comorbidity conditions",
      "Entirely restricted to the initial 48 hours of temporary TIA coverage"
    ],
    answer: 0,
    explanation: "Flat extra premiums are designed for constant, localized risks (like hazardous hobbies or unfavorable driving records) or risks that decrease over time (like a temporary recovery period)."
  },
  {
    id: 99,
    lo: "5G Describe three methods of charging for substandard individual life insurance risks and identify which method is most appropriate based on whether a risk is expected to increase, decrease, or remain constant over time",
    question: "Underwriter Felicia is evaluating an applicant with cancer in remission, representing a risk that will decrease and eventually disappear over a limited period. Felicia should apply a:",
    options: [
      "Temporary flat extra premium",
      "Permanent flat extra premium",
      "Table rating multiple of Table 16",
      "Permanent aviation exclusion rider"
    ],
    answer: 0,
    explanation: "A temporary flat extra premium is used for temporary, decreasing risks (such as a cancer survivor's initial recovery years), and is programmed to slide off the policy automatically."
  },
  {
    id: 100,
    lo: "5G Describe three methods of charging for substandard individual life insurance risks and identify which method is most appropriate based on whether a risk is expected to increase, decrease, or remain constant over time",
    question: "An applicant participates in dangerous avocations like rock climbing and auto racing, representing a risk expected to remain constant throughout the policy's life. The underwriter should apply a:",
    options: [
      "Permanent flat extra premium",
      "Temporary flat extra premium",
      "Table rating multiple of Table 12",
      "Standard plus non-tobacco credit of -30"
    ],
    answer: 0,
    explanation: "A permanent flat extra premium is added for static, unchanging lifestyle risks (like hazardous professions or hobbies) that persist throughout the policy's lifespan."
  }
];
