import { Question } from '../../types';

export const chapter8Questions: Question[] = [
  // === 8A: ROLES IN REINSURANCE TRANSACTIONS (1-10) ===
  {
    id: 1,
    lo: "8A Identify the roles that insurance companies can take in a reinsurance transaction",
    question: "Solasta Life issues an individual variable universal life policy to high-net-worth client Marcus Vance. Solasta subsequently purchases reinsurance coverage from Genesis Re to transfer some risk. In this specific deal, Solasta is known as the:",
    options: [
      "Direct writer (or ceding company)",
      "Assuming company (or retrocessionaire)",
      "Reinsurance intermediary",
      "Retrocedent"
    ],
    answer: 0,
    explanation: "A direct writer is the insurance company that purchases reinsurance to transfer (or cede) all or part of the risk on insurance policies it has issued. It is also called the ceding company."
  },
  {
    id: 2,
    lo: "8A Identify the roles that insurance companies can take in a reinsurance transaction",
    question: "Quantum Assurance cedes a massive portion of its pension group product risks to Odyssey Re. In this business scenario, Odyssey Re’s institutional role is defined as the:",
    options: [
      "Reinsurer (or assuming company)",
      "Direct writer",
      "Retrocessionaire",
      "Intermediary sponsor"
    ],
    answer: 0,
    explanation: "A reinsurer, also called a reinsurance company or an assuming company, is the insurer that provides reinsurance coverage by accepting/assuming risk from a direct writer."
  },
  {
    id: 3,
    lo: "8A Identify the roles that insurance companies can take in a reinsurance transaction",
    question: "Vanguard Re accepts a risk cession of $5 million on a critical terminal illness policy from Meridian Life. To maintain its own safety parameters, Vanguard Re subsequently transfers $2 million of this assumed risk to Zenith Re. In this second transaction, Vanguard Re is acting as a cede-packer, and Zenith Re is acting as the:",
    options: [
      "Retrocessionaire",
      "Direct writer",
      "Retrocedent",
      "Primary ceding company"
    ],
    answer: 0,
    explanation: "A retrocessionaire is a reinsurer that accepts risks from—and provides reinsurance to—another reinsurer. Here, Zenith Re is the retrocessionaire."
  },
  {
    id: 4,
    lo: "8A Identify the roles that insurance companies can take in a reinsurance transaction",
    question: "Refer to the transaction where Vanguard Re transfers a portion of its assumed risk from Meridian Life to Zenith Re. When Vanguard Re passes that assumed risk to Zenith Re, Vanguard Re is acting in the role of a:",
    options: [
      "Retrocedent",
      "Direct writer",
      "Retrocessionaire",
      "Assuming company"
    ],
    answer: 0,
    explanation: "A reinsurer that transfers risk to a retrocessionaire is called a retrocedent in that specific risk-transfer transaction."
  },
  {
    id: 5,
    lo: "8A Identify the roles that insurance companies can take in a reinsurance transaction",
    question: "Nexus Life transfers risk to Polar Re, which then retrocedes a portion of that risk to Horizon Re. Under standard industry definitions, what is the sequence of roles from Nexus Life to Polar Re to Horizon Re?",
    options: [
      "Direct writer -> Reinsurer (acting as retrocedent) -> Retrocessionaire",
      "Ceding company -> Retrocedent -> Primary underwriter",
      "Reinsurer -> Direct writer -> Retrocessionaire",
      "Retrocessionaire -> Retrocedent -> Ceding insurer"
    ],
    answer: 0,
    explanation: "Nexus Life is the direct writer (or ceding company). Polar Re is the reinsurer (assuming company) which also acts as a retrocedent when transferring risk. Horizon Re is the retrocessionaire."
  },
  {
    id: 6,
    lo: "8A Identify the roles that insurance companies can take in a reinsurance transaction",
    question: "True North Life agrees to transfer some risk to Equinox Re. Under global regulation, why are reinsurers capable of conducting business globally from centralized offices on multiple continents?",
    options: [
      "To actively disperse individual and group risk across diverse geographic subsidiaries and business partners",
      "Because global treaties exempt them from all localized solvency rules and policy reserve mandates",
      "Mainly because direct writers are prohibited by the NAIC from transferring risk to local organizations",
      "Because global reinsurers take over direct customer-facing administration for policyholders"
    ],
    answer: 0,
    explanation: "Major reinsurers maintain offices globally and work on multiple continents to effectively disperse risk among their subsidiaries and global business partners."
  },
  {
    id: 7,
    lo: "8A Identify the roles that insurance companies can take in a reinsurance transaction",
    question: "When a direct writer cedes a unit of insurance risk to a reinsurer, what is this individual transferred unit of risk called in administrative terminology?",
    options: [
      "A cession",
      "A binder",
      "An attachment",
      "A retrocedent block"
    ],
    answer: 0,
    explanation: "A cession is defined as the unit of insurance risk that a direct writer transfers to a reinsurer."
  },
  {
    id: 8,
    lo: "8A Identify the roles that insurance companies can take in a reinsurance transaction",
    question: "Under reinsurance industry terminology, when a single policy or a specific group of policies are packaged together for a reinsurance transaction, they are frequently called:",
    options: [
      "A case",
      "An individual ledger",
      "A reserve bundle",
      "A commutation binder"
    ],
    answer: 0,
    explanation: "A single policy or group of policies involved in a reinsurance arrangement is commonly referred to as a case."
  },
  {
    id: 9,
    lo: "8A Identify the roles that insurance companies can take in a reinsurance transaction",
    question: "In standard commercial reinsurance, what is the term used to describe a set or collection of similar insurance policies that are transferred or administered together?",
    options: [
      "A block of business",
      "A multiaccess rider",
      "An absolute portfolio",
      "A direct cluster"
    ],
    answer: 0,
    explanation: "A block of business is defined as a number of similar insurance policies grouped together."
  },
  {
    id: 10,
    lo: "8A Identify the roles that insurance companies can take in a reinsurance transaction",
    question: "Which of the following lines of insurance can be subject to reinsurance transactions under modern commercial structures?",
    options: [
      "Life, health, property, and liability",
      "Only individual life products",
      "Only non-commercial health and casualty lines",
      "Only annuity and pension schemes"
    ],
    answer: 0,
    explanation: "Reinsurance is highly versatile and is available for many lines of insurance, including life, health, property, and liability."
  },

  // === 8B: CHARACTERISTICS OF ASSUMPTION VS TRADITIONAL INDEMNITY REINSURANCE (11-20) ===
  {
    id: 11,
    lo: "8B Describe the characteristics of assumption reinsurance and traditional indemnity reinsurance",
    question: "Apex Life decides to exit the group long-term care line of business entirely. To execute this strategically, Apex transfers the block of business to Safe Harbor Re via a transaction where Safe Harbor permanently assumes Apex's entire legal obligation to the policyowners. This is an example of:",
    options: [
      "Assumption reinsurance (or portfolio reinsurance)",
      "Traditional indemnity reinsurance",
      "Facultative-obligatory risk-sharing",
      "Retrocessionaire factoring"
    ],
    answer: 0,
    explanation: "Assumption reinsurance (also known as portfolio reinsurance) is designed to permanently and entirely transfer blocks of existing insurance business from one company to another."
  },
  {
    id: 12,
    lo: "8B Describe the characteristics of assumption reinsurance and traditional indemnity reinsurance",
    question: "Under an assumption reinsurance transaction, what document must the assuming reinsurer issue directly to all affected policyowners to notify them who has taken legal responsibility for their policy risk?",
    options: [
      "Assumption certificate",
      "Indemnity transmittal card",
      "Notice of cession",
      "Commutation certificate"
    ],
    answer: 0,
    explanation: "As part of the assumption process, the reinsurer issues assumption certificates to all affected policyholders showing that the assuming insurer has taken full responsibility for the policy."
  },
  {
    id: 13,
    lo: "8B Describe the characteristics of assumption reinsurance and traditional indemnity reinsurance",
    question: "When Apex Life cedes its policy block to Safe Harbor Re via assumption reinsurance, who are the legally binding parties to the transaction?",
    options: [
      "The direct writer, the reinsurer, and the affected policyowners",
      "Only the direct writer and the reinsurer",
      "Only the reinsurer and the state insurance commissioner",
      "The direct writer, the reinsurer, and the primary insurance broker"
    ],
    answer: 0,
    explanation: "In an assumption reinsurance arrangement, the direct writer, the reinsurer, and the policyowners are all parties to the transaction."
  },
  {
    id: 14,
    lo: "8B Describe the characteristics of assumption reinsurance and traditional indemnity reinsurance",
    question: "In contrast to assumption reinsurance, under a traditional indemnity reinsurance arrangement, what is the legal relationship between the reinsurer and the original policyholder?",
    options: [
      "The reinsurer has no direct legal relationship with the policyholder, and the policyholder is not a party to the agreement",
      "The reinsurer becomes a primary co-signer and handles customer claim operations directly",
      "The policyholder acquires the right to sue the reinsurer in state courts if a claim is delayed",
      "The reinsurer takes over the primary legal liability to the policyholders"
    ],
    answer: 0,
    explanation: "In traditional indemnity reinsurance, the arrangement is not even disclosed to the policyholders because they are not parties to the contract. The direct writer retains all legal liability."
  },
  {
    id: 15,
    lo: "8B Describe the characteristics of assumption reinsurance and traditional indemnity reinsurance",
    question: "Sentinel Life enters into a traditional indemnity reinsurance contract with Phoenix Re. If Sentinel Life experiences a claims event, what is the mechanism through which Phoenix Re pays its portion?",
    options: [
      "The reinsurer is obligated to reimburse the direct writer after the direct writer pays benefits for reinsured policies",
      "The reinsurer pays the beneficiary directly to avoid administrative duplication",
      "The reinsurer deposits cash directly into the policy's cash value account",
      "The reinsurer transfers payments to the state guaranty association first"
    ],
    answer: 0,
    explanation: "Under indemnity reinsurance, the reinsurer is obligated to reimburse the direct writer only after the direct writer has paid the benefits for the reinsured policies."
  },
  {
    id: 16,
    lo: "8B Describe the characteristics of assumption reinsurance and traditional indemnity reinsurance",
    question: "Which of the following represents a key characteristic comparison between assumption reinsurance and traditional indemnity reinsurance?",
    options: [
      "Recapture is permitted under traditional indemnity reinsurance, but is not permitted under assumption reinsurance",
      "The reinsurer administers the policies under traditional indemnity reinsurance, whereas the original direct writer always does under assumption",
      "Assumption reinsurance is temporary, while traditional indemnity reinsurance is always permanent",
      "Policyowners must sign off on traditional indemnity deals, whereas they are not notified of assumption deals"
    ],
    answer: 0,
    explanation: "According to Figure 8.2, recapture is permitted under traditional indemnity reinsurance but not permitted under assumption reinsurance."
  },
  {
    id: 17,
    lo: "8B Describe the characteristics of assumption reinsurance and traditional indemnity reinsurance",
    question: "Under premium administration rules for traditional indemnity reinsurance, the direct writer compensates the reinsurer for providing backup coverage by making periodic payments. What are these payments called?",
    options: [
      "Reinsurance premiums",
      "Assumption allowances",
      "Proportional retention fees",
      "Direct writer allocations"
    ],
    answer: 0,
    explanation: "A reinsurance premium is the periodic payment made by a direct writer to a reinsurer as compensation for the reinsurance coverage."
  },
  {
    id: 18,
    lo: "8B Describe the characteristics of assumption reinsurance and traditional indemnity reinsurance",
    question: "If a direct writer decides to take back previously ceded reinsurance risk from a traditional indemnity reinsurer due to changes in its risk appetite, this operational procedure is known as:",
    options: [
      "Recapture",
      "Commutation",
      "Retrocession",
      "Cession recovery"
    ],
    answer: 0,
    explanation: "Traditional indemnity reinsurance arrangements allow the direct writer to take back—or recapture—specified reinsurance risks."
  },
  {
    id: 19,
    lo: "8B Describe the characteristics of assumption reinsurance and traditional indemnity reinsurance",
    question: "If a reinsurer under a traditional indemnity treaty decides to return a specific set of reinsured risks back to the direct writer, this procedural return is termed:",
    options: [
      "Commutation",
      "Recapture",
      "Retrofitting",
      "Exemption release"
    ],
    answer: 0,
    explanation: "Traditional indemnity arrangements typically allow the reinsurer to return—or commute—specified reinsured risks back to the direct writer."
  },
  {
    id: 20,
    lo: "8B Describe the characteristics of assumption reinsurance and traditional indemnity reinsurance",
    question: "State insurance regulators sometimes step in when a direct writer is on the verge of financial failure and force the transfer of its policies block to healthy insurers. When regulators do this, which type of reinsurance is utilized?",
    options: [
      "Assumption reinsurance",
      "Traditional indemnity reinsurance",
      "Facultative catastrophe reinsurance",
      "Nonproportional risk pooling"
    ],
    answer: 0,
    explanation: "Insurance regulators can use assumption reinsurance to transfer the commercial operations and policy liabilities of a failed insurer to healthy insurers, ensuring continuity for policyowners."
  },

  // === 8C: BENEFITS OF INDEMNITY REINSURANCE (21-32) ===
  {
    id: 21,
    lo: "8C Describe several benefits—in addition to spreading the risk—that indemnity reinsurance can provide for direct writers",
    question: "Stellar Assurance is a mid-sized insurer that wants to bid on high-face-value policies for corporate executives but has a limited financial base. Reinsurance helps Stellar in this scenario primarily by helping them:",
    options: [
      "Manage capacity",
      "Reduce customer-facing premium rates",
      "Eliminate localized marketing budgets",
      "Bypass corporate solvency laws"
    ],
    answer: 0,
    explanation: "Reinsurance allows the direct writer to handle larger policies by augmenting its underwriting capacity—namely, the amount of coverage it can approve on a single risk."
  },
  {
    id: 22,
    lo: "8C Describe several benefits—in addition to spreading the risk—that indemnity reinsurance can provide for direct writers",
    question: "When analyzing a direct writer's operations, how is the term 'underwriting capacity' defined?",
    options: [
      "The maximum monetary amount of risk that the company will accept on an individual insured so that claim fluctuations do not threaten solvency",
      "The total number of field agents authorized to sell products within state borders",
      "The statistical frequency of claims received over a calendar month",
      "The amount of cash assets the insurer maintains over and above its general ledger liabilities"
    ],
    answer: 0,
    explanation: "Underwriting capacity (or risk-taking capability) is the maximum monetary amount of risk a company will accept on an individual insured so that unusual claims fluctuations do not damage ongoing solvency."
  },
  {
    id: 23,
    lo: "8C Describe several benefits—in addition to spreading the risk—that indemnity reinsurance can provide for direct writers",
    question: "An underwriter at Meridian Life calculates that the company has a specified limit of $1 million per life that it is willing to cover entirely on its own balance sheet without any reinsurance. What is this limit called?",
    options: [
      "Retention limit",
      "Automatic binding limit",
      "Jumbo limit",
      "Underwriting capacity standard"
    ],
    answer: 0,
    explanation: "A retention limit is a specified maximum amount of insurance per life that an insurer is willing to carry at its own risk without transferring some of the risk to a reinsurer."
  },
  {
    id: 24,
    lo: "8C Describe several benefits—in addition to spreading the risk—that indemnity reinsurance can provide for direct writers",
    question: "How can an insurer's retention limit be expressed under standard underwriting guidelines?",
    options: [
      "As an amount per policy, an amount per life, or an overall maximum amount",
      "Only as a fixed percentage of asset base",
      "Only as a single global value certified by the SEC",
      "As a standard constant amount of $25,000 for all companies"
    ],
    answer: 0,
    explanation: "A retention limit can be expressed as an amount per policy, an amount per life, or an overall maximum amount."
  },
  {
    id: 25,
    lo: "8C Describe several benefits—in addition to spreading the risk—that indemnity reinsurance can provide for direct writers",
    question: "A direct writer is reviewing its total financial capacity. Financial capacity is distinguished from underwriting capacity because financial capacity represents:",
    options: [
      "The total monetary amount of risk the company can accept based on the investable funds it has available to write new business",
      "The maximum amount of insurance per life the company is willing to carry at its own risk",
      "The sum of the direct writer's retention limit and the reinsurer's binding limit",
      "The total regulatory limit on first-year marketing expense allowances"
    ],
    answer: 0,
    explanation: "An insurer's financial capacity is the total monetary amount of risk the company can accept based on the investable funds it has available to write new business."
  },
  {
    id: 26,
    lo: "8C Describe several benefits—in addition to spreading the risk—that indemnity reinsurance can provide for direct writers",
    question: "A young insurer, Horizon Life, successfully sells a record volume of new universal life policies. In year one, premium payments do not cover high commission, marketing, and reserve setup costs. This strain on Horizon's assets over policy reserves is defined as:",
    options: [
      "Surplus strain (or new business strain)",
      "Unearned margin deficit",
      "Retrocedent slippage",
      "Retention limit leakage"
    ],
    answer: 0,
    explanation: "The decrease in surplus caused by high initial costs and reserve requirements associated with issuing new insurance policies is called surplus strain or new business strain."
  },
  {
    id: 27,
    lo: "8C Describe several benefits—in addition to spreading the risk—that indemnity reinsurance can provide for direct writers",
    question: "How does traditional indemnity reinsurance provide 'surplus relief' for direct writing companies facing surplus strain?",
    options: [
      "The reinsurer establishes reserves for the reinsured portion of the risk, decreasing the reserves the direct writer must hold",
      "The reinsurer directly assumes all regulatory responsibility for filing tax returns",
      "The reinsurer pays the direct writer a flat annual royalty to bypass state licensing minimums",
      "The reinsurer guarantees the investment yield on the direct writer's general accounts"
    ],
    answer: 0,
    explanation: "When a reinsurer assumes a portion of the risk, it establishes reserves for its share. This reduces the reserves the direct writer must maintain, providing surplus relief."
  },
  {
    id: 28,
    lo: "8C Describe several benefits—in addition to spreading the risk—that indemnity reinsurance can provide for direct writers",
    question: "Select Life suffers an unexpected cluster of severe claims in a single quarter because of a localized epidemic. How does reinsurance benefit Select Life in this scenario?",
    options: [
      "It reduces severe fluctuations in claim payments, smoothing cash flows and ensuring predictable earnings",
      "It stops the actual occurrence or frequency of the claims from rising",
      "It allows Select Life to default on payments without violating market conduct codes",
      "It automatically converts the existing policies into noncontributory term plans"
    ],
    answer: 0,
    explanation: "Reinsurance cannot control the frequency of claims, but it can smooth the impact of extreme fluctuations. The reinsurer pays its portion, stabilizing the direct writer's earnings."
  },
  {
    id: 29,
    lo: "8C Describe several benefits—in addition to spreading the risk—that indemnity reinsurance can provide for direct writers",
    question: "Because reinsurers work with multiple direct writers globally, they are uniquely positioned to benefit direct writers by sharing:",
    options: [
      "Databases of mortality and morbidity statistics, as well as general operational advice and best practices",
      "Specific proprietary financial and pricing designs used by direct competitors",
      "Confidential diagnostic information on individual claim files from sibling companies",
      "Local state licensing certifications to bypass independent audits"
    ],
    answer: 0,
    explanation: "Reinsurers compile extensive databases of mortality/morbidity data and can share general advice, manual design best practices, and impairment statistics with clients."
  },
  {
    id: 30,
    lo: "8C Describe several benefits—in addition to spreading the risk—that indemnity reinsurance can provide for direct writers",
    question: "A direct writer is designing a complex new product with unique rider benefits. How can a reinsurance partner assist in this development stage?",
    options: [
      "By evaluating the product's underwriting standards, pricing assumptions, and marketing approaches",
      "By legally co-authoring the policy provisions to make the reinsurer directly liable to the customer",
      "By replacing the direct writer's product actuarial staff entirely to save on labor",
      "By guaranteeing that no competitor will launch a similar product design"
    ],
    answer: 0,
    explanation: "A reinsurer can assess a proposed product by evaluating underwriting standards, administration methods, pricing assumptions, and marketing approaches without sharing other client confidential details."
  },
  {
    id: 31,
    lo: "8C Describe several benefits—in addition to spreading the risk—that indemnity reinsurance can provide for direct writers",
    question: "If a direct writer's underwriting team encounters a highly unusual medical impairment on an applicant's file, such as a rare cardiovascular disease, they can ask the reinsurer for custom advice because reinsurers:",
    options: [
      "Develop specialized impairment statistics on complex risk factors like heart disease, diabetes, and hypertension",
      "Hold direct medical authority to override all state-level underwriting guidelines",
      "Can perform their own clinical examinations directly on the applicant",
      "Will automatically assume 100% of all standard and preferred cases"
    ],
    answer: 0,
    explanation: "Reinsurers have deep, aggregated statistics on various health impairments and can help direct writers accurately evaluate and underwrite complex cases."
  },
  {
    id: 32,
    lo: "8C Describe several benefits—in addition to spreading the risk—that indemnity reinsurance can provide for direct writers",
    question: "Which of the following is a direct consequence of a direct writer receiving 'surplus relief' via an indemnity reinsurance treaty?",
    options: [
      "The direct writer’s financial position is strengthened, enabling it to write and issue more insurance policies",
      "The direct writer’s regulatory retention limits are automatically decreased to zero",
      "The direct writer is legally exempt from holding its own policy reserves",
      "The direct writer is mandated to convert all individual business to a group portfolio"
    ],
    answer: 0,
    explanation: "Surplus relief strengthens an insurer’s financial position and frees up capacity, which directly enables the direct writer to safely issue more policies."
  },

  // === 8D: CESSION ARRANGEMENTS: AUTOMATIC, FACULTATIVE, AND FAC-OB (33-50) ===
  {
    id: 33,
    lo: "8D Identify the rights and obligations of the direct writer and the reinsurer when reinsurance is ceded on an automatic, facultative, or facultative obligatory basis",
    question: "Under an automatic reinsurance treaty, Zenith Life agrees in advance to cede all cases meeting precise guidelines, and Aegis Re agrees in advance to assume them. If a case meets all specifications, how does the reinsurer's review obligation operate?",
    options: [
      "The reinsurer must accept the case automatically based only on the direct writer's underwriting evaluation, without independent review",
      "The reinsurer reserves the right to review the case and refuse coverage within 10 business days",
      "The reinsurer must request an independent medical exam before final assumption",
      "The reinsurer assumes the case only if its current asset ratio exceeds state minimums"
    ],
    answer: 0,
    explanation: "Automatic (or obligatory) reinsurance requires the reinsurer to accept qualifying cases without question, relying entirely on the direct writer's underwriting."
  },
  {
    id: 34,
    lo: "8D Identify the rights and obligations of the direct writer and the reinsurer when reinsurance is ceded on an automatic, facultative, or facultative obligatory basis",
    question: "Telbaum Insurance has an automatic reinsurance treaty with Divisial Re. The treaty specifies automatic cessions of whole life cases with face amounts between $200,000 and $500,000 rated standard/preferred. If Telbaum approves a $350,000 policy rated standard, Telbaum:",
    options: [
      "Must cede the case, and Divisial Re must automatically accept it without review",
      "May choose to keep 100% of the risk internally, bypassing the treaty",
      "Must submit the entire case for facultative review to multiple competitors",
      "Must wait for Divisial Re to issue a customized pricing quote before ceding"
    ],
    answer: 0,
    explanation: "Under an automatic treaty, the direct writer agrees in advance to cede qualifying cases, and the reinsurer agrees in advance to assume them. Cession is automatic and mandatory."
  },
  {
    id: 35,
    lo: "8D Identify the rights and obligations of the direct writer and the reinsurer when reinsurance is ceded on an automatic, facultative, or facultative obligatory basis",
    question: "Alpha Assurance cedes a $600,000 risk to Omega Re. Under their automatic agreement, what is the maximum amount of risk on a single given life that Omega Re will accept automatically without doing its own underwriting review?",
    options: [
      "Automatic binding limit",
      "Retention limit",
      "Jumbo limit",
      "Minimum cession limit"
    ],
    answer: 0,
    explanation: "The automatic binding limit represents the maximum monetary amount of risk a reinsurer will accept automatically on a given life without making an independent underwriting assessment."
  },
  {
    id: 36,
    lo: "8D Identify the rights and obligations of the direct writer and the reinsurer when reinsurance is ceded on an automatic, facultative, or facultative obligatory basis",
    question: "If an automatic binding limit is breached by a exceptionally large single policy, what must the direct writer do to secure reinsurance?",
    options: [
      "The direct writer must submit the case for a facultative underwriting assessment to the reinsurer",
      "The direct writer can force the reinsurer to accept the risk by doubling the premium",
      "The direct writer must retrocede the excess risk to a retrocedent of their own choosing",
      "The direct writer is legally forbidden from issuing the policy under state law"
    ],
    answer: 0,
    explanation: "If a risk exceeds the automatic binding limit, it does not qualify for automatic cession. The direct writer must submit it on a facultative basis for independent review."
  },
  {
    id: 37,
    lo: "8D Identify the rights and obligations of the direct writer and the reinsurer when reinsurance is ceded on an automatic, facultative, or facultative obligatory basis",
    question: "Under the financial limits of automatic cessions, what is the 'minimum cession' designed to prevent?",
    options: [
      "Ceding very small risks where administrative and processing costs would exceed the premium value",
      "The reinsurer from undercutting the direct writer's primary commission rates",
      "The accumulation of multiple policies on a single life across different companies",
      "Direct writers from exceeding their authorized retention limits"
    ],
    explanation: "A minimum cession (frequently $25,000) is the smallest amount of risk a direct writer can cede. This avoids the high relative administrative costs of managing tiny risk cessions.",
    answer: 0
  },
  {
    id: 38,
    lo: "8D Identify the rights and obligations of the direct writer and the reinsurer when reinsurance is ceded on an automatic, facultative, or facultative obligatory basis",
    question: "Apex Life underwrites an policy for a wealthy media figure who already has $10 million in force with multiple insurers. The maximum allowable total insurance on any one life (both in-force and applied for) that can qualify for automatic cession is called the:",
    options: [
      "Jumbo limit",
      "Automatic binding limit",
      "Retention limit",
      "Minimum cession ceiling"
    ],
    answer: 0,
    explanation: "The jumbo limit is the maximum allowable monetary amount of total insurance—both in force and applied for—with all companies on any one life that qualifies for automatic cession."
  },
  {
    id: 39,
    lo: "8D Identify the rights and obligations of the direct writer and the reinsurer when reinsurance is ceded on an automatic, facultative, or facultative obligatory basis",
    question: "Why do reinsurers insist on enforcing strict 'jumbo limits' on their automatic cessions for life insurance?",
    options: [
      "To protect the reinsurer from excessive accumulated risk resulting from multiple policies on the same life",
      "To comply with federal securities laws regarding corporate insider limits",
      "To prevent direct writers from charging too high an expense allowance",
      "To force all policies over $25,000 to be automatically converted to group policies"
    ],
    answer: 0,
    explanation: "A jumbo limit on life reinsurance protects a reinsurer from excessive risk exposure from the accumulation of several individual policies on the same life."
  },
  {
    id: 40,
    lo: "8D Identify the rights and obligations of the direct writer and the reinsurer when reinsurance is ceded on an automatic, facultative, or facultative obligatory basis",
    question: "Under a facultative reinsurance cession arrangement, how do the rights and choices of the direct writer and the reinsurer operate?",
    options: [
      "The direct writer chooses whether to cede a risk, and the reinsurer chooses whether to accept that risk after an independent evaluation",
      "The direct writer must cede all risks, and the reinsurer must accept them but can alter the price retroactively",
      "The direct writer has the option to cede, but the reinsurer is legally required to accept all standard risk classes",
      "The reinsurer performs no independent underwriting but retains the right to cancel the policyholder's contract"
    ],
    answer: 0,
    explanation: "Facultative reinsurance is a cession arrangement where the direct writer chooses whether to cede a risk and the reinsurer exercises full underwriting choice on whether to accept or reject it."
  },
  {
    id: 41,
    lo: "8D Identify the rights and obligations of the direct writer and the reinsurer when reinsurance is ceded on an automatic, facultative, or facultative obligatory basis",
    question: "Which cession arrangement is the ONLY one in which the reinsurer performs a completely independent underwriting evaluation and has the option to reject risks based on its own assessment?",
    options: [
      "Facultative reinsurance",
      "Automatic reinsurance",
      "Facultative-obligatory reinsurance",
      "Proportional quota reinsurance"
    ],
    answer: 0,
    explanation: "Facultative reinsurance is the only cession arrangement where the reinsurer performs an independent underwriting evaluation and has the absolute option to reject risks."
  },
  {
    id: 42,
    lo: "8D Identify the rights and obligations of the direct writer and the reinsurer when reinsurance is ceded on an automatic, facultative, or facultative obligatory basis",
    question: "A direct writer underwrites a highly complex application from an individual with multiple serious health impairments. Why would they choose to use facultative reinsurance for this case?",
    options: [
      "To benefit from the reinsurer’s specialized underwriting judgment and expertise before issuing the policy",
      "To force the reinsurer to pay 100% of all administrative and marketing costs",
      "Because facultative reinsurance is significantly cheaper than automatic reinsurance",
      "To legally shield themselves from any potential bad-faith lawsuits"
    ],
    answer: 0,
    explanation: "Direct writers choose facultative reinsurance for complex/difficult cases because they benefit from the specialized underwriting judgment of reinsurers who encounter these rare impairments frequently."
  },
  {
    id: 43,
    lo: "8D Identify the rights and obligations of the direct writer and the reinsurer when reinsurance is ceded on an automatic, facultative, or facultative obligatory basis",
    question: "Nightsable Insurance is shopping a complex $2.5 million case to three facultative reinsurers. Wickapple Re offers to reinsure $1.5 million for an annual premium of $10,000, while Deepzee Re offers to reinsure $1 million for a premium of $7,500. Nightsable's goal is to reinsure as much as possible with only one reinsurer. What is Nightsable’s obligation regarding these quotes?",
    options: [
      "Nightsable is under no obligation to accept either quote, but chooses Wickapple Re because it meets their objective of maximizing face-amount coverage",
      "Nightsable must accept Deepzee Re's quote because it is the lowest rate",
      "Nightsable is forced by the treaty to split the risk equally among all three reinsurers",
      "Nightsable must request state arbitration if the premiums do not match manual tables"
    ],
    answer: 0,
    explanation: "Under facultative cessions, the direct writer is under no obligation to accept a reinsurer's quote. Nightsable selects Wickapple Re because the higher coverage meets its stated objective."
  },
  {
    id: 44,
    lo: "8D Identify the rights and obligations of the direct writer and the reinsurer when reinsurance is ceded on an automatic, facultative, or facultative obligatory basis",
    question: "In general, why is the cost of facultative reinsurance to the direct writer higher than the cost of automatic reinsurance?",
    options: [
      "Because facultative cases involve larger or more complex risks requiring high independent underwriting, evaluation, and handling costs",
      "Because reinsurers must pay higher premium taxes on facultative products under federal mandate",
      "Because facultative arrangements always require the reinsurer to write a physical paper certificate to the customer",
      "Because direct writers are legally barred from negotiating expense allowances on facultative cessions"
    ],
    answer: 0,
    explanation: "Facultative cessions cover larger or more difficult cases. The reinsurer's premium rates reflect the higher costs of conducting independent underwriting reviews and managing complex risk factors."
  },
  {
    id: 45,
    lo: "8D Identify the rights and obligations of the direct writer and the reinsurer when reinsurance is ceded on an automatic, facultative, or facultative obligatory basis",
    question: "Modern automatic reinsurance agreements often include a specific 'facultative provision'. What does this provision allow the direct writer to do?",
    options: [
      "Submit a case that does not qualify for automatic cession to the reinsurer for review on a facultative basis",
      "Bypass the reinsurer and act as their own retrocedent on complex cases",
      "Cede risks that exceed the jumbo limit at standard automatic premium rates without review",
      "Force the reinsurer to pay 50% of any accidental death claims immediately on submission"
    ],
    answer: 0,
    explanation: "A facultative provision in an automatic agreement allows a direct writer to submit non-qualifying cases (e.g. over limits) for facultative review. If accepted, they typically use rates from the automatic agreement."
  },
  {
    id: 46,
    lo: "8D Identify the rights and obligations of the direct writer and the reinsurer when reinsurance is ceded on an automatic, facultative, or facultative obligatory basis",
    question: "Under a facultative-obligatory (fac-ob) reinsurance cession arrangement, what are the primary rights and obligations of the participating companies?",
    options: [
      "The direct writer can choose whether to submit specific cases, and the reinsurer must accept them up to a stated limit if it has available financial capacity",
      "The direct writer must submit all cases, but the reinsurer can choose which ones to accept on an individual underwriting basis",
      "Both companies are obligated to accept and cede all cases without any financial capacity boundaries",
      "The reinsurer must underwrite each case independently and has the absolute option to reject any standard risks"
    ],
    answer: 0,
    explanation: "Facultative-obligatory (fac-ob) reinsurance allows the direct writer to choose whether to submit a case, but obligates the reinsurer to accept it (no independent underwriting veto) up to a limit, provided they have financial capacity."
  },
  {
    id: 47,
    lo: "8D Identify the rights and obligations of the direct writer and the reinsurer when reinsurance is ceded on an automatic, facultative, or facultative obligatory basis",
    question: "Echotail Insurance has a fac-ob treaty with Greenrind Re up to a face amount of $5 million. Echotail submits a $2 million case. Greenrind Re currently has $3 million in available financial capacity. What is Greenrind Re's obligation?",
    options: [
      "Since Greenrind Re has the financial capacity, it must accept the case without independent underwriting review",
      "Greenrind Re can perform independent underwriting and decline the case if it has a health impairment",
      "Greenrind Re must transfer the case to a retrocessionaire within 5 business days",
      "Greenrind Re is obligated to accept only up to its standard retention limit of $500,000"
    ],
    answer: 0,
    explanation: "Under a fac-ob arrangement, the reinsurer must accept the case based entirely on the direct writer's underwriting if it has available financial capacity. Since $2 million is less than the $3 million capacity, Greenrind must accept."
  },
  {
    id: 48,
    lo: "8D Identify the rights and obligations of the direct writer and the reinsurer when reinsurance is ceded on an automatic, facultative, or facultative obligatory basis",
    question: "In a fac-ob arrangement, if the reinsurer lacks available financial capacity to cover a submitted risk, what is its immediate obligation?",
    options: [
      "It must immediately notify the direct writer within the period specified in the agreement",
      "It must automatically borrow money from a prime bank to fund the reserve",
      "It can cancel the direct writer's master treaty with 30 days written notice",
      "It must accept the case anyway and seek retrocession within six months"
    ],
    answer: 0,
    explanation: "If a fac-ob reinsurer lacks financial capacity to assume a risk, it must immediately notify the direct writer. Failure to do so within the specified period results in it being automatically bound."
  },
  {
    id: 49,
    lo: "8D Identify the rights and obligations of the direct writer and the reinsurer when reinsurance is ceded on an automatic, facultative, or facultative obligatory basis",
    question: "Under standard treaty provisions, what occurs if a fac-ob reinsurer who lacks financial capacity fails to notify the direct writer of its inability to accept a case within the contractual time limit?",
    options: [
      "The reinsurer is automatically bound to the risk within the agreed-upon acceptance limits",
      "The entire reinsurance treaty is legally terminated for breach of contract",
      "The direct writer is forced to assume 100% of the risk without any claim backup",
      "The reinsurer faces state regulatory fines and mandatory suspension of its license"
    ],
    answer: 0,
    explanation: "If the reinsurer fails to notify the direct writer of a lack of capacity within the specified period, it is automatically bound to the risk up to the agreed limits."
  },
  {
    id: 50,
    lo: "8D Identify the rights and obligations of the direct writer and the reinsurer when reinsurance is ceded on an automatic, facultative, or facultative obligatory basis",
    question: "Which of the following correctly pairs the cession arrangement with the reinsurer's right to perform independent underwriting analysis on individual cases?",
    options: [
      "Facultative: Yes | Automatic: No | Facultative-Obligatory: No",
      "Facultative: No | Automatic: Yes | Facultative-Obligatory: Yes",
      "Facultative: Yes | Automatic: Yes | Facultative-Obligatory: No",
      "Facultative: No | Automatic: No | Facultative-Obligatory: Yes"
    ],
    answer: 0,
    explanation: "According to Figure 8.4, the reinsurer performs independent underwriting reviews ONLY under Facultative reinsurance. For Automatic and Fac-Ob, the reinsurer does not underwrite individual cases prior to assumption."
  },

  // === 8E: RISK SHARING ARRANGEMENTS: PROPORTIONAL VS NONPROPORTIONAL (51-65) ===
  {
    id: 51,
    lo: "8E Describe how risk is shared under a proportional reinsurance arrangement and under a nonproportional reinsurance arrangement",
    question: "Abledor Insurance possesses a proportional reinsurance agreement with Thredmore Re (30%) and Wintall Re (50%), while retaining 20%. Abledor receives a valid claim of $500,000. How are the claim liabilities allocated among these companies?",
    options: [
      "Abledor: $100,000 | Thredmore: $150,000 | Wintall: $250,000",
      "Abledor: $100,000 | Thredmore: $200,000 | Wintall: $200,000",
      "Abledor: $500,000 | Thredmore: $0 | Wintall: $0",
      "Abledor: $0 | Thredmore: $187,500 | Wintall: $312,500"
    ],
    answer: 0,
    explanation: "Under proportional reinsurance, premium, reserves, and claim obligations are shared based on specified percentages. Abledor retains 20% ($100,000), Thredmore assumes 30% ($150,000), and Wintall assumes 50% ($250,000)."
  },
  {
    id: 52,
    lo: "8E Describe how risk is shared under a proportional reinsurance arrangement and under a nonproportional reinsurance arrangement",
    question: "What is a primary characteristics of 'proportional reinsurance' regarding the sharing of financial liabilities?",
    options: [
      "The direct writer and reinsurer agree in advance to share premiums, claim obligations, and policy reserves according to a specified amount or percentage",
      "The reinsurer only pays if the direct writer's annual losses exceed a catastrophic threshold",
      "The direct writer retains all premium payments while transferring 100% of claim risks",
      "The percentage of risk shared is recalculated monthly based on the direct writer's stock behavior"
    ],
    answer: 0,
    explanation: "In proportional reinsurance, the direct writer and reinsurer agree in advance to share premiums, claim obligations, and the policy reserve proportionately based on a specified percentage or ratio of face value."
  },
  {
    id: 53,
    lo: "8E Describe how risk is shared under a proportional reinsurance arrangement and under a nonproportional reinsurance arrangement",
    question: "Why is proportional reinsurance particularly well-suited and typically used for reinsuring life insurance policies?",
    options: [
      "Because the exact ultimate liability for a life insurance policy is generally known and fixed at the outset",
      "Because proportional reinsurance completely eliminates the need to calculate policy reserves",
      "Because the state insurance code outlaws nonproportional plans for individual policies",
      "Because it bypasses the need to identify the primary insured or ceding company"
    ],
    answer: 0,
    explanation: "Proportional reinsurance is popular for life insurance because the face amount (and thus maximum claim liability) of a life policy is known and fixed from the start."
  },
  {
    id: 54,
    lo: "8E Describe how risk is shared under a proportional reinsurance arrangement and under a nonproportional reinsurance arrangement",
    question: "In contrast to proportional arrangements, how is risk shared under a 'nonproportional reinsurance' arrangement?",
    options: [
      "Neither party knows in advance what share of a risk the reinsurer will assume, as it depends on the actual claims the direct writer pays",
      "The reinsurer pays a fixed, unchanging percentage of every single policy claim from dollar one",
      "The direct writer pay 100% of premiums to the reinsurer to assume all risk on a quota-share basis",
      "The reinsurer assumes risk only for policies that are issued in foreign jurisdictions"
    ],
    answer: 0,
    explanation: "Under nonproportional reinsurance, the reinsurer’s liability depends on the actual claims paid, so neither party knows the exact risk-share in advance."
  },
  {
    id: 55,
    lo: "8E Describe how risk is shared under a proportional reinsurance arrangement and under a nonproportional reinsurance arrangement",
    question: "Under a nonproportional treaty, the reinsurer begins to share in expenses and pay claims once the direct writer’s actual paid losses reach a pre-specified limit. What is this triggering limit called?",
    options: [
      "Attachment point",
      "Retention limit",
      "Jumbo threshold",
      "Reserved capacity line"
    ],
    answer: 0,
    explanation: "The attachment point is the specified maximum monetary loss limit within a given period. Once reached, the nonproportional reinsurer begins to reimburse the direct writer."
  },
  {
    id: 56,
    lo: "8E Describe how risk is shared under a proportional reinsurance arrangement and under a nonproportional reinsurance arrangement",
    question: "Sturdy Insurance maintains nonproportional catastrophe coverage with Xample Re that triggers once Sturdy pays $75 million in claims from a single event. An earthquake causes massive casualties, resulting in $130 million in valid claims. How much will Xample Re reimburse Sturdy?",
    options: [
      "$55 million",
      "$75 million",
      "$130 million",
      "$0"
    ],
    answer: 0,
    explanation: "Once Sturdy’s losses exceed the $75 million attachment point, Xample Re pays the excess. Reimbursement = $130 million (total claims) - $75 million (attachment point) = $55 million."
  },
  {
    id: 57,
    lo: "8E Describe how risk is shared under a proportional reinsurance arrangement and under a nonproportional reinsurance arrangement",
    question: "A form of nonproportional reinsurance designed to partially protect direct life writers from multiple claims arising from a single massive event (e.g., an earthquake or epidemic) is known as:",
    options: [
      "Catastrophe coverage (or cat cover)",
      "Quota share reinsurance",
      "Assumption portfolio coverage",
      "Recapture security coverage"
    ],
    answer: 0,
    explanation: "Catastrophe coverage (or cat cover) is a type of nonproportional reinsurance designed to protect direct writers from a single catastrophic event resulting in multiple claims."
  },
  {
    id: 58,
    lo: "8E Describe how risk is shared under a proportional reinsurance arrangement and under a nonproportional reinsurance arrangement",
    question: "Which of the following events would typical catastrophe coverage (cat cover) protect a direct writer against regarding multiple life insurance claims?",
    options: [
      "Commercial airplane crashes, earthquakes, epidemics, and terrorist attacks",
      "Normal administrative errors during high-volume new business seasons",
      "Gradual increases in localized cardiovascular disease over a twenty-year period",
      "Individual high-face-value claims on celebrity lives"
    ],
    answer: 0,
    explanation: "Catastrophe coverage protects against single severe events resulting in immediate spikes, such as plane crashes, earthquakes, volcanic eruptions, epidemics, and terrorist attacks."
  },
  {
    id: 59,
    lo: "8E Describe how risk is shared under a proportional reinsurance arrangement and under a nonproportional reinsurance arrangement",
    question: "Nonproportional catastrophe treaties usually incorporate specific 'guardrails' to define reinsurer liabilities. What are these secondary requirements typically based on?",
    options: [
      "A minimum number of qualified claims and a pre-set maximum total reinsurance payout limit",
      "The direct writer's total stock value on the NYSE",
      "The reinsurer's direct write volume in non-life property lines",
      "A mandatory written consent form signed by each affected beneficiary"
    ],
    answer: 0,
    explanation: "Catastrophe coverage is usually subject to (1) a minimum number of qualified claims / minimum claim benefits, and (2) a maximum total reinsurance payout limit."
  },
  {
    id: 60,
    lo: "8E Describe how risk is shared under a proportional reinsurance arrangement and under a nonproportional reinsurance arrangement",
    question: "When comparing the sharing of policy reserves, how does this process differ between proportional and nonproportional arrangements?",
    options: [
      "Under proportional reinsurance, both companies share the policy reserve proportionately, whereas nonproportional deals do not involve sharing reserves this way",
      "Nonproportional deals force the reinsurer to hold 100% of reserves from day one",
      "Proportional arrangements require the state to hold all reserves in trust",
      "Reserves are never calculated or recorded under nonproportional treaties"
    ],
    answer: 0,
    explanation: "In proportional reinsurance, the direct writer and reinsurer split reserves according to the agreed percentages. In nonproportional treaties, because the share is not predetermined, reserves are not split proportionately."
  },
  {
    id: 61,
    lo: "8E Describe how risk is shared under a proportional reinsurance arrangement and under a nonproportional reinsurance arrangement",
    question: "A direct writer is reviewing nonproportional reinsurance options. Which line of business represents the primary sector where nonproportional reinsurance was historically developed and is most typically utilized?",
    options: [
      "Non-life types of insurance (such as property and casualty)",
      "Individual permanent life plans",
      "Un-underwritten traditional whole life",
      "Single-premium deferred annuities"
    ],
    answer: 0,
    explanation: "While catastrophe coverage is used in life insurance, nonproportional reinsurance is most typically and structurally utilized in non-life fields like property/casualty."
  },
  {
    id: 62,
    lo: "8E Describe how risk is shared under a proportional reinsurance arrangement and under a nonproportional reinsurance arrangement",
    question: "If an epic epidemic triggers a direct writer's nonproportional catastrophe cover with a reinsurer, what is the direct writer's legal obligation to pay its own policyholders?",
    options: [
      "The direct writer remains 100% legally liable to pay its policyholders under its direct contracts",
      "The direct writer can legally delay payments until the reinsurer deposits the cash",
      "The policyholders' contracts are automatically voided due to an act of God",
      "The state court system takes over all active claims payouts"
    ],
    answer: 0,
    explanation: "Even under catastrophe indemnity coverage, the direct writer retains primary and entire legal liability to its customers. The reinsurer simply reimburses the direct writer."
  },
  {
    id: 63,
    lo: "8E Describe how risk is shared under a proportional reinsurance arrangement and under a nonproportional reinsurance arrangement",
    question: "An actuary at Polar Re is calculating reserves for a proportional group life treaty. If the ceding company agrees to retain 40% of the risk and cedes 60%, Polar Re is responsible for what portion of the legal contract reserves?",
    options: [
      "Exactly 60 percent of the reserves",
      "100 percent of the reserves",
      "0 percent of the reserves, as the direct writer must hold all of them",
      "A variable amount determined by monthly claims fluctuations"
    ],
    answer: 0,
    explanation: "Under proportional reinsurance, the direct writer and reinsurer split and share the policy reserve in the exact same proportion as the risks and premiums (60%)."
  },
  {
    id: 64,
    lo: "8E Describe how risk is shared under a proportional reinsurance arrangement and under a nonproportional reinsurance arrangement",
    question: "Under a nonproportional catastrophe treaty, if the direct writer experiences a high volume of standard, isolated claims that never collectively breach the attachment point, who bears the cost?",
    options: [
      "The direct writer bears 100 percent of the costs",
      "The reinsurer must pay a pro-rata share of 15% under state laws",
      "The policyholders are assessed a temporary solvency surcharge",
      "The independent writing agents must refund their first-year commissions"
    ],
    answer: 0,
    explanation: "If total claims do not reach the attachment point within the specified contract period, the reinsurer has no claim liability, and the direct writer pays all claims alone."
  },
  {
    id: 65,
    lo: "8E Describe how risk is shared under a proportional reinsurance arrangement and under a nonproportional reinsurance arrangement",
    question: "If a direct writer purchases an automatic proportional treaty, the reinsurance premium rate is usually stated in the treaty. This setup directly enables:",
    options: [
      "Both the direct writer and the reinsurer to independently calculate the payable reinsurance premiums",
      "The reinsurer to adjust premium rates individually for every applicant",
      "The state commissioner to set the direct writer's consumer retail pricing",
      "The direct writer to avoid recording any premium payments on its billing sheets"
    ],
    answer: 0,
    explanation: "Because rates are pre-determined inside the automatic treaty, both parties can independently calculate and verify the reinsurance premiums due for every ceded case."
  },

  // === 8F: REINSURANCE ANALYSTS AND FUNCTIONAL STAFF (66-78) ===
  {
    id: 66,
    lo: "8F Explain the roles of reinsurance analysts and other insurance company staff in reinsurance administration",
    question: "Janet is a home-office employee at Pinnacle Re who calculates the portion of a case risk that is retained vs ceded, verifies treaty rules, and reconciles billing statements. She is not in a top leadership position. Janet is acting as a:",
    options: [
      "Reinsurance analyst (or client administrator / reinsurance specialist)",
      "Reinsurance marketing officer",
      "Primary sales intermediary",
      "Lead underwriting actuary"
    ],
    answer: 0,
    explanation: "A reinsurance analyst (also called a client administrator or reinsurance specialist) is any direct writer/reinsurer employee—excluding top leadership—involved in any phase of reinsurance administration."
  },
  {
    id: 67,
    lo: "8F Explain the roles of reinsurance analysts and other insurance company staff in reinsurance administration",
    question: "Which of the following is considered a typical daily activity performed by a reinsurance analyst inside a modern insurance company?",
    options: [
      "Reconciling reinsurance billing statements, analyzing data for trends, and calculating parts of risks retained and ceded",
      "Overriding state laws regarding insurer reserve structures",
      "Performing direct physical medical examinations on primary applicants",
      "Exempting small group plans from standard ERISA compliance filings"
    ],
    answer: 0,
    explanation: "Typical activities of a reinsurance analyst (Figure 8.5) include reconciling billing, verifying agreements, calculating ceded portions, and recordkeeping."
  },
  {
    id: 68,
    lo: "8F Explain the roles of reinsurance analysts and other insurance company staff in reinsurance administration",
    question: "Robert is employed by Apex Re. His job is to sell reinsurance options to direct writers, visit their home offices, and coordinate the marketing process. What is Robert’s standard job title?",
    options: [
      "Reinsurance marketing officer (or reinsurance account executive)",
      "Reinsurance analyst",
      "Reinsurance intermediary",
      "Actuarial compliance manager"
    ],
    answer: 0,
    explanation: "A reinsurance marketing officer, also called a reinsurance account executive, sells reinsurance and coordinates the marketing process for the reinsurer."
  },
  {
    id: 69,
    lo: "8F Explain the roles of reinsurance analysts and other insurance company staff in reinsurance administration",
    question: "In standard corporate operations, how are reinsurance marketing officers typically viewed by prospective direct writers?",
    options: [
      "As valuable sources of industry information and advice concerning reinsurance markets",
      "As licensed financial advisors authorized to manage corporate portfolios",
      "As external auditors who review ceding company compliance files",
      "As state-appointed regulatory monitors who report on solvency"
    ],
    answer: 0,
    explanation: "Direct writers highly value reinsurance marketing officers as excellent sources of expertise, advice, and market intelligence."
  },
  {
    id: 70,
    lo: "8F Explain the roles of reinsurance analysts and other insurance company staff in reinsurance administration",
    question: "In a direct writing company, which functional department is primarily responsible for calculating pricing structures, setting retention limits, and projecting future claims liabilities?",
    options: [
      "Actuarial",
      "Marketing",
      "Legal and compliance",
      "Human resources"
    ],
    answer: 0,
    explanation: "Actuaries calculate appropriate pricing structures, set retention limits, project liabilities, and estimate policy reserves for reinsurance transactions."
  },
  {
    id: 71,
    lo: "8F Explain the roles of reinsurance analysts and other insurance company staff in reinsurance administration",
    question: "How do reinsurers’ underwriters support the operational integrity of a traditional indemnity reinsurance treaty?",
    options: [
      "They evaluate facultative submissions, review direct writers' guidelines, and perform underwriting audits of client files",
      "They sell corporate portfolios to retail customers on a commission basis",
      "They independently override the direct writer's primary claims denials",
      "They re-write the entire state-level insurance code for direct writers"
    ],
    answer: 0,
    explanation: "Reinsurer underwriters evaluate risks for facultative cases, audit direct writers to ensure guidelines are followed, and review general ceding guidelines."
  },
  {
    id: 72,
    lo: "8F Explain the roles of reinsurance analysts and other insurance company staff in reinsurance administration",
    question: "A direct writer is negotiating a complex reinsurance agreement with multiple retrocession parameters. Which internal department provides primary advice on complex negotiations and draft legal terms?",
    options: [
      "Legal and compliance",
      "Accounting",
      "Claims",
      "Marketing"
    ],
    answer: 0,
    explanation: "The legal department develops and interprets reinsurance agreements, and provides critical advice during complex treaty negotiations."
  },
  {
    id: 73,
    lo: "8F Explain the roles of reinsurance analysts and other insurance company staff in reinsurance administration",
    question: "Which of the following is a key responsibility of the compliance unit regarding reinsurance operations?",
    options: [
      "Studying current/proposed laws and monitoring employee conduct to ensure operations comply with reinsurance regulations",
      "Setting the direct writer's absolute retention limits every calendar month",
      "Negotiating commercial asset prices for the company's investment accounts",
      "Calculating the specific reserve listings for individual pension policies"
    ],
    answer: 0,
    explanation: "The compliance unit studies laws, educates staff, and monitors operations to ensure full compliance with reinsurance policies, treaties, and external regulatory guidelines."
  },
  {
    id: 74,
    lo: "8F Explain the roles of reinsurance analysts and other insurance company staff in reinsurance administration",
    question: "The accounting department plays an indispensable role in reinsurance administration by performing which of the following tasks?",
    options: [
      "Maintaining accurate records of financial transactions like premium payments and preparing corporate financial statements",
      "Making final, independent underwriting choices on facultative applications",
      "Acquiring retail customers through local direct-mail campaigns",
      "Auditing state guaranty funds to calculate localized mortality ratios"
    ],
    answer: 0,
    explanation: "Reinsurance accounting involves maintaining records of financial flows (such as premium payments and claim reimbursements) and drafting related financial statements."
  },
  {
    id: 75,
    lo: "8F Explain the roles of reinsurance analysts and other insurance company staff in reinsurance administration",
    question: "Pinnacle Assurance does business with three different reinsurers. Under standard reinsurance auditing practices, Pinnacle is subject to:",
    options: [
      "A separate external audit by each of the three reinsurers, in addition to its own internal audits",
      "A single consolidated audit run by the state guaranty fund",
      "An automated audit bypass if its annual premium volume is below $50 million",
      "Weekly audits by the Securities and Exchange Commission (SEC)"
    ],
    answer: 0,
    explanation: "A direct writer that does business with more than one reinsurer is subject to a separate, individual external audit by each reinsurer."
  },
  {
    id: 76,
    lo: "8F Explain the roles of reinsurance analysts and other insurance company staff in reinsurance administration",
    question: "A claim examiner at Safe Harbor Life processes a routine death benefit claim on a reinsured policy. Under standard treaty conditions, how does Safe Harbor's claim staff handle settlement?",
    options: [
      "They settle the claim independently without consulting the reinsurer for approval, then seek reimbursement",
      "They must wait for the reinsurer's claim department to authorize payment before issuing funds to the beneficiary",
      "They refer the beneficiary directly to the reinsurer to file their claim paper",
      "They are contractually required to pay only the direct writer's retained 20%"
    ],
    answer: 0,
    explanation: "Typically, a direct writer's claims department settles claims independently without consulting the reinsurer, and then contacts the reinsurer for pro-rata reimbursement."
  },
  {
    id: 77,
    lo: "8F Explain the roles of reinsurance analysts and other insurance company staff in reinsurance administration",
    question: "Under what specific claims scenarios would a reinsurance agreement require a direct writer to send documentation to the reinsurer for a formal recommendation prior to settling?",
    options: [
      "Anticipated claims denials or large contestable claims",
      "All standard claims with active beneficiaries",
      "Claims that are filed within the first 120 days of a calendar year",
      "Claims involving any group noncontributory policies"
    ],
    answer: 0,
    explanation: "Reinsurance agreements often require direct writers to send claim files to the reinsurer for recommendation prior to settlement in complex cases, such as anticipated denials or large contestable claims."
  },
  {
    id: 78,
    lo: "8F Explain the roles of reinsurance analysts and other insurance company staff in reinsurance administration",
    question: "Safe Harbor Life wants to place reinsurance coverage but lacks internally experienced staff in a highly specialized, complex product line. They hire an independent licensed third-party firm to act on their behalf. This third-party firm is a:",
    options: [
      "Reinsurance intermediary",
      "Reinsurance marketing officer",
      "Retrocessionaire auditor",
      "Actuarial consultant broker"
    ],
    answer: 0,
    explanation: "A reinsurance intermediary is a licensed, independent third party that acts on behalf of a direct writer or reinsurer to place reinsurance coverage."
  },

  // === 8G: ADMINISTERING NEW BUSINESS (PREPLACEMENT AND PLACEMENT) (79-88) ===
  {
    id: 79,
    lo: "8G Explain the preplacement of reinsurance, the process for reserving capacity for requested coverage, and the placement of reinsurance",
    question: "Pinnacle Assurance is setting up a new automatic reinsurance treaty with Omni Re. How does the administration transition through the initial new business stages?",
    options: [
      "Preplacement is typically bypassed, and administration begins directly at the placement stage because terms are agreed in advance",
      "A detailed preplacement request must be reviewed for every single individual policy",
      "Pinnacle must submit a facultative application before issuing each automatic whole life policy",
      "Operations must remain in the preplacement stage for at least 90 days before coverage begins"
    ],
    answer: 0,
    explanation: "Because terms are agreed in advance for automatic cessions, preplacement (evaluating individual requests) is not necessary. Administration of automatic cases starts directly at the placement stage."
  },
  {
    id: 80,
    lo: "8G Explain the preplacement of reinsurance, the process for reserving capacity for requested coverage, and the placement of reinsurance",
    question: "What are the four typical administrative stages that a facultative reinsurance case progresses through over its cycle?",
    options: [
      "Preplacement -> Placement -> In-force -> Termination",
      "Proposal -> Underwriting -> Actuarial -> Audit",
      "Cession -> Conversion -> Recapture -> Commutation",
      "Pending -> Placed -> Replaced -> Refunded"
    ],
    answer: 0,
    explanation: "As outlined in Figure 8.7, a typical reinsurance case progresses through: Preplacement (new business), Placement (new business), In-force, and Termination."
  },
  {
    id: 81,
    lo: "8G Explain the preplacement of reinsurance, the process for reserving capacity for requested coverage, and the placement of reinsurance",
    question: "When Aegis Re accepts a facultative request for coverage, it sets aside a portion of its financial capacity specifically to protect that anticipated new business risk. What is this set-aside capacity called?",
    options: [
      "Reserved capacity",
      "Retention limit capacity",
      "Jumbo allocation",
      "Commitment reserve"
    ],
    answer: 0,
    explanation: "Reserved capacity is the portion of a reinsurer’s financial capacity that the reinsurer sets aside to provide coverage of the risk under the anticipated new business."
  },
  {
    id: 82,
    lo: "8G Explain the preplacement of reinsurance, the process for reserving capacity for requested coverage, and the placement of reinsurance",
    question: "Under facultative preplacement, what is the document sent by the direct writer's underwriting team to initiate the reinsurer's risk evaluation process?",
    options: [
      "Request for coverage (or facultative application)",
      "Reinsurance certificate",
      "Cession transmittal",
      "Notice of reserved capacity"
    ],
    answer: 0,
    explanation: "Under facultative and fac-ob arrangements, the direct writer requests coverage by sending the reinsurer a 'request for coverage' or 'facultative application'."
  },
  {
    id: 83,
    lo: "8G Explain the preplacement of reinsurance, the process for reserving capacity for requested coverage, and the placement of reinsurance",
    question: "When a reinsurer makes an offer on a facultative case, it enters the case into its administration system under a specific status code. What is this initial administrative code?",
    options: [
      "Pending",
      "Reserved",
      "Placed",
      "Waiting"
    ],
    answer: 0,
    explanation: "When a reinsurer makes an offer on a facultative case, the reinsurer codes the case's status in its system as 'pending' while waiting for the direct writer's acceptance."
  },
  {
    id: 84,
    lo: "8G Explain the preplacement of reinsurance, the process for reserving capacity for requested coverage, and the placement of reinsurance",
    question: "To prevent reserved capacity from being locked up indefinitely on cases where the direct writer is shopping around, the reinsurer assigns each reservation a specific date. What is this date called?",
    options: [
      "Date of expiry",
      "Commutation date",
      "Attachment point date",
      "Grace period deadline"
    ],
    answer: 0,
    explanation: "The date of expiry is the date on which the reinsurer will cancel the reservation of reinsurance capacity if it does not receive a cession or placement info from the direct writer."
  },
  {
    id: 85,
    lo: "8G Explain the preplacement of reinsurance, the process for reserving capacity for requested coverage, and the placement of reinsurance",
    question: "In standard industry practice, what is the typical duration range for a reinsurer's reservation of capacity / date of expiry?",
    options: [
      "Between 90 and 120 days after the reservation was made",
      "Exactly 30 days from the initial request",
      "A strict maximum period of 10 business days",
      "One calendar year from the initial underwriting file receipt"
    ],
    answer: 0,
    explanation: "Typically, the date of expiry falls between 90 and 120 days after the date the reservation of capacity was established."
  },
  {
    id: 86,
    lo: "8G Explain the preplacement of reinsurance, the process for reserving capacity for requested coverage, and the placement of reinsurance",
    question: "Meridian Life Decides that it no longer needs the facultative coverage it previously requested. Meridian sends a notification to the reinsurer to cancel the active reservation. This notification is a:",
    options: [
      "Drop notice (or close notice)",
      "Notice of expiry",
      "Extension request",
      "Cession withdrawal card"
    ],
    answer: 0,
    explanation: "A drop notice (or close notice) is a notification from a direct writer to a reinsurer stating that it no longer needs the requested reinsurance and wishes to cancel the reservation."
  },
  {
    id: 87,
    lo: "8G Explain the preplacement of reinsurance, the process for reserving capacity for requested coverage, and the placement of reinsurance",
    question: "If a direct writer needs more time to gather critical medical information on an applicant before finalizing a facultative case, they must submit a specific document to the reinsurer. What is this document?",
    options: [
      "Extension request",
      "Drop notice",
      "Facultative application rider",
      "Cession suspension card"
    ],
    answer: 0,
    explanation: "An extension request is a request from a direct writer to a reinsurer to extend the reservation of capacity for a specified period so they can finish gathering information."
  },
  {
    id: 88,
    lo: "8G Explain the preplacement of reinsurance, the process for reserving capacity for requested coverage, and the placement of reinsurance",
    question: "Omni Re accepts a $3 million facultative risk cession from Safe Harbor Assurance. After marking the case status as 'placed' in its systems, Omni Re sends a formal confirmation document to Safe Harbor. What is this document?",
    options: [
      "Reinsurance certificate",
      "Assumption certificate",
      "Notice of expiry",
      "Billing statement"
    ],
    answer: 0,
    explanation: "A reinsurance certificate is a document that notifies the direct writer that reinsurance is officially in force. It is generally sent only for facultative or fac-ob cessions on individual policies."
  },

  // === 8H: ADMINISTERING IN-FORCE BUSINESS (REPORTS, BILLING, RESERVES) (89-95) ===
  {
    id: 89,
    lo: "8H Describe the in-force administration procedures followed to change reinsurance coverage, process billing statements, and record policy reserves",
    question: "Safe Harbor Life acts as the 'reporting party' for an active proportional reinsurance treaty. What does this mean Janet, the reinsurance analyst, must do regarding in-force data?",
    options: [
      "Pinnacle must administer the records and prepare/send five key reports in electronic format to the reinsurer",
      "Janet must handle customer service inquiries directly for the reinsurer's policyowners",
      "Pinnacle must pay 100% of all death claim payouts and seek zero reimbursement",
      "Janet must draft new actuarial rate manuals for state regulatory authorization"
    ],
    answer: 0,
    explanation: "The reporting party is the party administering the reinsurance records and reports. It prepares and provides the necessary reports to its reinsurance partners."
  },
  {
    id: 90,
    lo: "8H Describe the in-force administration procedures followed to change reinsurance coverage, process billing statements, and record policy reserves",
    question: "To track active coverage, the reporting party prepares a specific reinsurance report listing all active reinsured policies as of a certain date with detailed demographic parameters. This report is a(n):",
    options: [
      "In-force policy report",
      "Policy change report",
      "Billing statement",
      "Reserve listing"
    ],
    answer: 0,
    explanation: "An in-force policy report is a reinsurance report that lists all in-force reinsured policies as of a given date and provides detailed information about each policy."
  },
  {
    id: 91,
    lo: "8H Describe the in-force administration procedures followed to change reinsurance coverage, process billing statements, and record policy reserves",
    question: "Pinnacle Assurance wants to verify that its active records match the reinsurer's records exactly to prevent coverage gaps. What in-force report does Pinnacle review to accomplish this parallel check?",
    options: [
      "In-force policy report",
      "Policy change report",
      "Billing statement",
      "Claim transmittal sheet"
    ],
    answer: 0,
    explanation: "The in-force policy report allows the direct writer and reinsurer to verify that they are keeping accurate, parallel records."
  },
  {
    id: 92,
    lo: "8H Describe the in-force administration procedures followed to change reinsurance coverage, process billing statements, and record policy reserves",
    question: "Janet is preparing a 'policy exhibit' for Safe Harbor's reinsurer. What is the primary purpose of a policy exhibit in REINSURANCE administration?",
    options: [
      "To summarize and reconcile the collective changes (new business, face amount shifts, lapses, deaths, reinstatements) during a reporting period",
      "To display individual applicant medical files to the compliance auditors",
      "To demonstrate the direct writer's local property holdings on general ledgers",
      "To outline the commission percentages paid to independent writing agents"
    ],
    answer: 0,
    explanation: "A policy exhibit is a reinsurance report that summarizes and reconciles the overall statistical changes (entries, exits, face amount alterations) that have occurred during the reporting period."
  },
  {
    id: 93,
    lo: "8H Describe the in-force administration procedures followed to change reinsurance coverage, process billing statements, and record policy reserves",
    question: "Under traditional indemnity treaties, the reinsurer reimburses the direct writer an amount to recognize acquisition, setup, sales commissions, and administrative maintenance costs. What is this payment called?",
    options: [
      "Allowance (or expense allowance / ceding commission)",
      "Reinsurance dividend",
      "Pro-rata reimbursement surcharge",
      "Retrocedent allocation yield"
    ],
    answer: 0,
    explanation: "An allowance (expense allowance or ceding commission) is an amount the reinsurer reimburses to the direct writer to recognize setup, acquisition, maintenance, and other expenses."
  },
  {
    id: 94,
    lo: "8H Describe the in-force administration procedures followed to change reinsurance coverage, process billing statements, and record policy reserves",
    question: "Janet prepares a report showing details for all policies that have changed in a way that directly impacts reinsurance premiums, coverage amounts, or expense allowances. This report is a(n):",
    options: [
      "Policy change report (or transaction report)",
      "In-force policy report",
      "Reserve listing",
      "Notice of expiry"
    ],
    answer: 0,
    explanation: "A policy change report (reinsurance transaction report) shows details for all policies that have experienced changes affecting coverage amounts, premiums, or allowances."
  },
  {
    id: 95,
    lo: "8H Describe the in-force administration procedures followed to change reinsurance coverage, process billing statements, and record policy reserves",
    question: "When a reinsurer’s actuaries compute the legal reserves for the reinsured business, which report does the reinsurance analyst review to verify individual policy reserves hold reasonable values?",
    options: [
      "Reserve listing",
      "Policy exhibit",
      "Billing statement",
      "Policy change report"
    ],
    answer: 0,
    explanation: "A reserve listing is a reinsurance report that shows all reinsured policies and the reserve held for each, helping verify the reasonableness of reserves."
  },

  // === 8I: ADMINISTERING TERMINATIONS OF REINSURANCE (96-100) ===
  {
    id: 96,
    lo: "8I Describe the steps the direct writer and reinsurer take to administer terminations of reinsurance",
    question: "A direct writer notifies the reinsurer that a permanent life insurance policy has terminated. To properly close records and calculate outstanding premiums/refunds, the reinsurer calculates the 'net amount at risk' (NAR). For a non-universal life policy, NAR is defined as:",
    options: [
      "The difference between the face amount of the life policy and the policy reserve (or cash value) at the end of the policy year",
      "The sum of the policy face amount and the reinsurance expense allowance",
      "The total amount of premium payments divided by the retention limit",
      "The maximum payout authorized under standard catastrophe catastrophe coverages"
    ],
    answer: 0,
    explanation: "Net amount at risk (NAR) for traditional / non-universal life policies is calculated as the difference between the face amount of the policy and the policy reserve (or cash value) at the end of the year."
  },
  {
    id: 97,
    lo: "8I Describe the steps the direct writer and reinsurer take to administer terminations of reinsurance",
    question: "If a reinsured policy lapses or is surrendered by the policyowner, what does the reinsurer do with the associated policy reserves on its books?",
    options: [
      "The reinsurer terminates the reinsurance records and deletes the in-force policy reserve amounts from its records",
      "The reinsurer forwards the reserve value directly to the state treasury department",
      "The reinsurer converts the reserve into an active cash surrender annuity for the beneficiary",
      "The reinsurer retains the reserve to fund other automatic cessions"
    ],
    answer: 0,
    explanation: "Upon termination of reinsurance, the reinsurer terminates the administrative record, refunds unearned premiums, and deletes any in-force reserves."
  },
  {
    id: 98,
    lo: "8I Describe the steps the direct writer and reinsurer take to administer terminations of reinsurance",
    question: "A direct writer pays its reinsurance premium annually in advance. A policyholder dies three months into the policy year. What occurs regarding the remaining nine months of advance premium under standard treaties?",
    options: [
      "The reinsurer must refund the unearned reinsurance premium portion back to the direct writer",
      "The reinsurer retains the entire annual premium as an administrative handling fee",
      "The reinsurer transfers the unearned premium to the primary beneficiary",
      "The direct writer is penalized and forced to pay an early cancellation fee"
    ],
    answer: 0,
    explanation: "When active reinsurance is terminated due to a claim, the reinsurer must refund any unearned reinsurance premium back to the direct writer."
  },
  {
    id: 99,
    lo: "8I Describe the steps the direct writer and reinsurer take to administer terminations of reinsurance",
    question: "If a direct writer initiates a 'recapture' of a ceded block of risk, what is the role-spec of the reinsurer’s reinsurance analyst?",
    options: [
      "To verify that the master reinsurance agreement allows recapture at that time and that all conditions for recapture are fully met",
      "To automatically deny the request and report the client to the state commissioner",
      "To convert the entire block into a nonproportional catastrophe structure",
      "To adjust the primary policyholder's retail interest rate to lock in balances"
    ],
    answer: 0,
    explanation: "When a direct writer requests a recapture, the reinsurer's analyst must verify if the treaty permits recapture at that time, and whether all specified conditions are satisfied."
  },
  {
    id: 100,
    lo: "8I Describe the steps the direct writer and reinsurer take to administer terminations of reinsurance",
    question: "Under standard traditional indemnity treaties, what must occur before the reinsurer officially terminates its in-force records for a terminated policy?",
    options: [
      "The direct writer's active in-force listing data must completely match the reinsurer's administrative file records",
      "The direct writer must secure a physical waiver card signed by the policy's primary beneficiary",
      "The reinsurer must wait for a formal compliance clearance from the NAIC board",
      "The direct writer must forfeit all expense allowances earned since inception"
    ],
    answer: 0,
    explanation: "During terminations of reinsurance, the direct writer's in-force listing must match the reinsurer's records, outstanding premiums must be settled, and the reinsurer closes the file."
  }
];
