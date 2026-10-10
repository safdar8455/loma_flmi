import { Question } from '../../types';

export const chapter7Questions: Question[] = [
  // --- OBJECTIVE 7A: Segregation of Duties ---
  {
    id: 1,
    lo: "7A: Segregation of Duties",
    question: "Scenario: At Vanguard Life, the internal audit team notes that the same clerk who deposits incoming checks from locksboxes is also responsible for recording these premium receipts in the general ledger. Which internal control concept is being violated here?",
    options: [
      "Financial accounting standards",
      "The principle of segregation of duties (dual control)",
      "Management accounting validation rules",
      "The going-concern concept"
    ],
    answer: 1,
    explanation: "Under the segregation of duties (or dual control), conflicting job functions (such as receiving cash / handling physical deposits versus recording that cash in the accounting ledger) must be separated to prevent errors or irregularities."
  },
  {
    id: 2,
    lo: "7A: Segregation of Duties",
    question: "Scenario: Apex Insurance is structuring its back-office operations. They require that employees in Treasury Operations disburse expense payments, while employees in Accounting approve the payments. This system is designed on the premise that:",
    options: [
      "Cash transactions must always be reconciled by the person who authorized them",
      "Treasury managers are legally authorized to override accounting principles",
      "Accounting is future-focused and requires real-time cash control",
      "Job tasks should not place an employee in a position to conceal errors or irregularities"
    ],
    answer: 3,
    explanation: "The principle of segregation of duties (or dual control) ensures that no single employee can complete a transaction and conceal mistakes or fraud in the normal course of their duties."
  },
  {
    id: 3,
    lo: "7A: Segregation of Duties",
    question: "The segregation of duties is also referred to by what other term within insurance company operations?",
    options: [
      "Accounting conservatism",
      "Dual control",
      "Variance tolerance",
      "Continuous audit"
    ],
    answer: 1,
    explanation: "The principle of segregation of duties is also commonly referred to as dual control."
  },
  {
    id: 4,
    lo: "7A: Segregation of Duties",
    question: "Scenario: GuardState Mutual's board wants to ensure that its major financial functions are managed independently but coordinated properly. Which three departments must be managed separately as an integral method of internal control?",
    options: [
      "Human resources, information technology, and legal",
      "Premium billing, sales, and actuarial analysis",
      "Marketing, claims, and underwriting",
      "Accounting, treasury operations, and auditing"
    ],
    answer: 3,
    explanation: "Accounting, treasury operations, and auditing are closely related but are typically managed separately as a method of internal control."
  },
  {
    id: 5,
    lo: "7A: Segregation of Duties",
    question: "Which of the following describes a correct application of the segregation of duties in an insurer's disbursements workflow?",
    options: [
      "The accounting department approves expense payments, and the treasury operations department disburses those payments",
      "The same analyst who makes an asset purchase records the journal entries and performs the bank reconciliation",
      "Auditors are responsible for approving vendor accounts and reconciling the bank statements",
      "The manager who approves vendor invoices must print and distribute the physical payment checks"
    ],
    answer: 0,
    explanation: "To follow the principle of segregation of duties, the accounting department approves payments, and the treasury operations department disburses them."
  },
  {
    id: 6,
    lo: "7A: Segregation of Duties",
    question: "Scenario: A claims processing clerk at Star Life has the authorization to both approve a claim payment and sign off on the cash disbursement. According to LOMA standards, which risk is directly heightened by this setup?",
    options: [
      "A decline in the insurer's credit rating",
      "Interest-rate fluctuations",
      "Product pricing risk",
      "Unintentional or fraudulent concealment of errors and irregularities"
    ],
    answer: 3,
    explanation: "Allowing a single employee to both approve and disburse payments places them in a position where they can conceal errors or execute fraudulent transfers."
  },
  {
    id: 7,
    lo: "7A: Segregation of Duties",
    question: "A company that designs jobs using the principle of dual control seeks to solve which employee relations challenge?",
    options: [
      "Increasing the speed of high-risk investment placements",
      "Preventing employees from being presented with ethical challenges in their day-to-day work activities",
      "Eliminating the need for external audits entirely",
      "Reducing training costs for new hires"
    ],
    answer: 1,
    explanation: "Designing jobs with dual control ensures that employees are not presented with conflicting interests or ethical temptations in their daily work."
  },
  {
    id: 8,
    lo: "7A: Segregation of Duties",
    question: "Scenario: During a restructure, Apex Mutual combines the bank vault reconciliations desk and the general payments desk under one manager, who also has signature rights on cash accounts. The internal audit team flags this. Why?",
    options: [
      "It violates the segregation of duties, reducing control over cash balances",
      "It increases the premium taxes paid to the state",
      "It limits the general manager's strategic reporting authority",
      "It makes the company non-compliant with standard IFRS guidelines"
    ],
    answer: 0,
    explanation: "Combining cash operations and reconciliation under one individual violates the segregation of duties and weakens internal control over cash."
  },
  {
    id: 9,
    lo: "7A: Segregation of Duties",
    question: "How does the principle of segregation of duties impact the reporting structure of an insurer's chief auditor?",
    options: [
      "The chief auditor reports to the treasurer to coordinate bank transfers",
      "The chief auditor operates independently and reports to the audit committee of the board of directors",
      "The chief auditor reports directly to the controller within the accounting department",
      "The chief auditor reports to the state insurance commissioner instead of the board"
    ],
    answer: 1,
    explanation: "To maintain independence and objectivity, auditing must operate separately from other financial operations and report directly to the board's audit committee."
  },
  {
    id: 10,
    lo: "7A: Segregation of Duties",
    question: "Scenario: At SafeStep Life, the treasury operations department handles the physical receipt of customer payments, but they are forbidden from making modifications to the customer database records. This is an example of:",
    options: [
      "Admitted asset valuation processes",
      "A strict application of segregation of duties",
      "The going-concern concept",
      "Management accounting limits"
    ],
    answer: 1,
    explanation: "By keeping the physical cash custodians separate from the database recordkeepers, SafeStep Life enforces segregation of duties to protect asset records."
  },

  // --- OBJECTIVE 7B: Users of Accounting Information ---
  {
    id: 11,
    lo: "7B: Users of Accounting Information",
    question: "Scenario: The Compliance Staff at Sentinel Life closely reviews the company's financial statements to ensure capital reserves match the state's minimum legal limits. The compliance staff is categorized as which type of stakeholder?",
    options: [
      "Internal stakeholder",
      "Independent stakeholder",
      "Regulatory stakeholder",
      "External stakeholder"
    ],
    answer: 0,
    explanation: "Compliance staff, company officers, managers, and directors are internal stakeholders who use accounting information to run operations and assess regulatory standing."
  },
  {
    id: 12,
    lo: "7B: Users of Accounting Information",
    question: "Scenario: An independent insurance rating agency (such as AM Best) analyzes Sentinel Life's capital and surplus levels to assign a security rating. Under Figure 7.1, what core question is this rating agency trying to answer?",
    options: [
      "Is this a stable company where I want to work?",
      "What is the insurer's share of the global market?",
      "Is the insurer solvent and profitable?",
      "Are we meeting our sales and distribution targets?"
    ],
    answer: 2,
    explanation: "Rating agencies are external stakeholders who use accounting information to evaluate whether the insurer is solvent and profitable (Figure 7.1)."
  },
  {
    id: 13,
    lo: "7B: Users of Accounting Information",
    question: "Scenario: A prospective customer, Susan, wants to purchase a 30-year term life policy from Pioneer Mutual. According to LOMA guidelines, what is the primary question Susan as a policyowner faces when reviewing the insurer's financial standing?",
    options: [
      "Is my individual department meeting its budgeted expenses?",
      "What department generated a specific operational cost?",
      "Will the insurer be in business years from now to pay benefits?",
      "Can we use management overrides to bypass statutory conservatism?"
    ],
    answer: 2,
    explanation: "A policyowner is an external stakeholder whose primary financial concern is whether the insurer will remain solvent in the long term to pay future claims (Figure 7.1)."
  },
  {
    id: 14,
    lo: "7B: Users of Accounting Information",
    question: "Scenario: A sales manager at Vanguard Mutual reviews the premium reports compiled for the first quarter of the year. Under LOMA, which question does this internal manager seek to answer?",
    options: [
      "What are the competitor's shares of our target markets?",
      "Are we meeting our sales and revenue goals?",
      "Are our tax liabilities correctly calculated?",
      "Can we override state-mandated statutory reserves?"
    ],
    answer: 1,
    explanation: "Sales and distribution managers are internal stakeholders who use accounting data to monitor sales targets and revenue performance (Figure 7.1)."
  },
  {
    id: 15,
    lo: "7B: Users of Accounting Information",
    question: "Scenario: The Chief Taxing Authority is auditing Horizon Life's corporate fillings. In this capacity, which of the following represents the taxing authority's primary financial goal?",
    options: [
      "Ensuring the insurer is solvent and meets minimum statutory capital margins",
      "Evaluating whether company employees receive competitive wages",
      "Determining if the insurer is correctly calculating and meeting its tax obligations",
      "Estimating future product design costs for the sales team"
    ],
    answer: 2,
    explanation: "Taxing authorities are external stakeholders focused on ensuring the company complies with tax files and meets tax obligations (Figure 7.1)."
  },
  {
    id: 16,
    lo: "7B: Users of Accounting Information",
    question: "Scenario: A major commercial bank is considering lending $50 million to Star Life. What is the fundamental financial question this creditor wants to answer using Star Life's balance sheet?",
    options: [
      "Can the insurer meet its debt obligations?",
      "Is the compliance team meeting its regulatory audits?",
      "What are the company's internal payroll rules?",
      "What is the average markup on variable annuity products?"
    ],
    answer: 0,
    explanation: "Creditors are external stakeholders whose primary concern is the company's ability to satisfy its financial debt obligations as they come due (Figure 7.1)."
  },
  {
    id: 17,
    lo: "7B: Users of Accounting Information",
    question: "Which of the following is considered an external stakeholder of an insurance company under standard accounting disclosures?",
    options: [
      "Department managers and internal compliance staff",
      "In-house sales representatives and administrative staff",
      "Reinsurers, policyowners, and rating agencies",
      "Board of directors and company officers"
    ],
    answer: 2,
    explanation: "External stakeholders are entities outside the company, such as regulators, rating agencies, policyowners, investors, taxing authorities, competitors, creditors, independent financial professionals, and reinsurers."
  },
  {
    id: 18,
    lo: "7B: Users of Accounting Information",
    question: "Scenario: Marcus, an independent financial professional who is not affiliated with Sentinel Life, reviews Sentinel's latest quarterly financials. What question is Marcus seeking to answer?",
    options: [
      "Is this the company where I want to submit business on behalf of my clients?",
      "Is the database infrastructure secure against cybercrime?",
      "How are Sentinel's treasury desk bank allocations coordinated?",
      "Are Sentinel's internal payroll calculations correct?"
    ],
    answer: 0,
    explanation: "Independent financial professionals are external stakeholders who use accounting data to decide whether to place their clients' business with the insurer (Figure 7.1)."
  },
  {
    id: 19,
    lo: "7B: Users of Accounting Information",
    question: "Scenario: An equity analyst at Putnam Investments wants to purchase a major block of stock in Horizon Life. What is the investor's primary question?",
    options: [
      "Will I earn an adequate return if I invest in this insurer?",
      "Are the company's internal operating reports required by law?",
      "What is the salary scale for entry-level actuarial clerks?",
      "How are physical check lockboxes distributed among banks?"
    ],
    answer: 0,
    explanation: "Investors use financial statements to determine if an investment in the insurer will yield an adequate return (Figure 7.1)."
  },
  {
    id: 20,
    lo: "7B: Users of Accounting Information",
    question: "Scenario: Swiss Re is negotiating a treaty with safeStep Insurance to cover their critical life insurance risks. In LOMA terms, how does Swiss Re use SafeStep's financial statements?",
    options: [
      "To verify safeStep's internal hiring and retention policies",
      "To ensure SafeStep can honor the reinsurance agreement and meet contractual commitments",
      "To calculate the premium taxes SafeStep owes to the state",
      "To evaluate the design quality of SafeStep's consumer web interface"
    ],
    answer: 1,
    explanation: "Reinsurers study an insurer's financial standing to verify that the insurer can honor treaty terms and has adequate solvency to perform its obligations (Figure 7.1)."
  },

  // --- OBJECTIVE 7C: Systems of Accounting ---
  {
    id: 21,
    lo: "7C: Systems of Accounting",
    question: "Which system of accounting is primarily designed to meet the information and reporting needs of an insurer's external stakeholders?",
    options: [
      "Financial accounting",
      "Cost accounting",
      "Management accounting",
      "Budget accounting"
    ],
    answer: 0,
    explanation: "Financial accounting is the system of reporting financial accounting information specifically to meet the needs of external stakeholders."
  },
  {
    id: 22,
    lo: "7C: Systems of Accounting",
    question: "Which system of accounting focuses on identifying, measuring, analyzing, and communicating financial data for internal managers to guide resource utilization?",
    options: [
      "Management accounting",
      "Disbursement accounting",
      "Financial accounting",
      "Tax accounting"
    ],
    answer: 0,
    explanation: "Management accounting provides detailed financial information for internal stakeholders, mainly managers, to support planning, decision-making, and resource allocation."
  },
  {
    id: 23,
    lo: "7C: Systems of Accounting",
    question: "How do financial accounting and management accounting compare regarding legal requirements?",
    options: [
      "Neither system is regulated, leaving insurers completely free to choose their reporting rules",
      "Both systems are strictly required by state insurance departments",
      "Management accounting is required by federal and state law, while financial accounting is voluntary",
      "Financial accounting is required by law, whereas management accounting is not required by law"
    ],
    answer: 3,
    explanation: "Financial accounting is mandated by law (to protect regulators, investors, etc.), while management accounting reports are for internal use only and are not required by law."
  },
  {
    id: 24,
    lo: "7C: Systems of Accounting",
    question: "Regarding adherence to specific accounting principles and standards, how do financial and management accounting differ?",
    options: [
      "Financial accounting is flexible, whereas management accounting is strictly historical and rigid",
      "Both systems must follow identical GAAP principles",
      "Management accounting must strictly follow international IFRS standards, while financial accounting is unregulated",
      "Financial accounting is subject to specific accounting principles (such as GAAP or statutory practice), whereas management accounting is not subject to specific principles"
    ],
    answer: 3,
    explanation: "Financial accounting must adhere to formal accounting standards (like GAAP, IFRS, or SAP). Management accounting reports are designed freely by the company based on internal needs."
  },
  {
    id: 25,
    lo: "7C: Systems of Accounting",
    question: "What is the primary difference in timing and frequency of reports between financial accounting and management accounting?",
    options: [
      "Financial accounting only generates reports once every five years during condition examinations",
      "Financial statements are prepared at any time as needed, while management reports must be submitted on fixed legal dates",
      "Financial statements are submitted at specified times and cover specified periods, while management reports are prepared as needed at any time and cover any period",
      "Both are produced exclusively on a monthly basis"
    ],
    answer: 2,
    explanation: "Financial accounting follows rigid schedules (quarterly/annually) for regulatory filings. Management accounting reports can be compiled on-demand for any timeframe (daily, weekly, years-long projections)."
  },
  {
    id: 26,
    lo: "7C: Systems of Accounting",
    question: "Regarding data focus, financial accounting emphasizes ________ of data, whereas management accounting emphasizes ________ of data for managers.",
    options: [
      "subjectivity / absolute precision",
      "external distribution / statutory oversight",
      "future forecasting / historical matching",
      "precision / flexibility and relevance"
    ],
    answer: 3,
    explanation: "Financial accounting prioritizes precision and auditability of historical data. Management accounting focuses on speed, relevance, and flexibility to support real-time decision-making."
  },
  {
    id: 27,
    lo: "7C: Systems of Accounting",
    question: "Regarding focus time orientation, financial accounting has a ________ focus, whereas management accounting has mainly a ________ focus.",
    options: [
      "forward-looking / historical",
      "cash-based / accrual-oriented",
      "historical / forward-looking",
      "regulatory / taxation"
    ],
    answer: 2,
    explanation: "Financial accounting records events that have already taken place (historical focus). Management accounting is primarily used to plan and project business strategies (forward-looking)."
  },
  {
    id: 28,
    lo: "7C: Systems of Accounting",
    question: "Scenario: An accounting clerk is recording premium income, commissions, policy loans, and policy dividends for Vanguard Mutal's active blocks. This operation is standardly known as:",
    options: [
      "Investment accounting",
      "Management cost variance mapping",
      "General ledger auditing",
      "Premium accounting (or policy accounting)"
    ],
    answer: 3,
    explanation: "Premium accounting, also called policy accounting, maintains detailed accounting records of all financial transactions related to the policies an insurer has issued (sold)."
  },
  {
    id: 29,
    lo: "7C: Systems of Accounting",
    question: "Scenario: SafeStep Life's accounting unit uses automated systems to track and record cash inflows and outflows from its corporate bond holdings and mortgages. This accounting operation refers to:",
    options: [
      "General accounting",
      "Premium accounting",
      "Investment accounting",
      "Tax accounting"
    ],
    answer: 2,
    explanation: "Investment accounting records transactions related to the assets in an insurer's investment portfolios, including cash inflows/outflows from interest, maturities, and valuations."
  },
  {
    id: 30,
    lo: "7C: Systems of Accounting",
    question: "General accounting at an insurance firm includes basic business transactions. What are two subcategories of general accounting described in LOMA guidelines?",
    options: [
      "Payroll accounting and disbursement accounting",
      "Asset valuation mapping and liquidity reserves",
      "Policyholder surrender modeling and pricing calculations",
      "Admitted ledger tracking and regulatory compliance filings"
    ],
    answer: 0,
    explanation: "General accounting includes basic bookkeeping operations common to all businesses. Examples are payroll accounting and disbursement accounting."
  },
  {
    id: 31,
    lo: "7C: Systems of Accounting",
    question: "Scenario: Apex Mutual's accounts payable department is verifying that all cash disbursements are properly authorized and charged to correct expense lines. This function refers to:",
    options: [
      "Disbursement accounting",
      "Investment accounting",
      "Payroll accounting",
      "Premium accounting"
    ],
    answer: 0,
    explanation: "Disbursement accounting, typically performed by accounts payable, focuses on recordkeeping of cash paid out, confirming authorization, and charging correct accounts."
  },
  {
    id: 32,
    lo: "7C: Systems of Accounting",
    question: "Scenario: Because Sentinel Life operates in multiple states, it must pay taxes calculated on the premium income earned within each state's jurisdiction. These payments are called:",
    options: [
      "Admitted asset fees",
      "Statutory corporate income taxes",
      "Favorable variance penalties",
      "Premium taxes"
    ],
    answer: 3,
    explanation: "Premium taxes are taxes calculated on premium income that an insurer earns within a particular state or provincial jurisdiction."
  },

  // --- OBJECTIVE 7D: Accounting Standards ---
  {
    id: 33,
    lo: "7D: Accounting Standards",
    question: "What is defined as the accounting process of classifying transaction elements (as assets, liabilities, etc.) and recording them in the company's books?",
    options: [
      "variance analysis",
      "Recognition",
      "Reconciliation",
      "Valuation"
    ],
    answer: 1,
    explanation: "Recognition is the classification of items in a transaction (such as assets, liabilities, capital, surplus, revenues, or expenses) and recording the transaction in the ledger."
  },
  {
    id: 34,
    lo: "7D: Accounting Standards",
    question: "What is the accounting process of calculating the monetary value of a company's assets, liabilities, and capital for financial reporting?",
    options: [
      "Auditing",
      "Recognition",
      "Valuation",
      "Disbursement"
    ],
    answer: 2,
    explanation: "Valuation is the process of calculating the precise monetary value of a company's assets, liabilities, and capital for accounting and reporting purposes."
  },
  {
    id: 35,
    lo: "7D: Accounting Standards",
    question: "Generally accepted accounting principles (GAAP) in the United States operate under which fundamental underlying premise?",
    options: [
      "The liquidation concept",
      "The going-concern concept",
      "The accounting conservatism concept",
      "The solvency concept"
    ],
    answer: 1,
    explanation: "The underlying premise of U.S. GAAP is the going-concern concept, which assumes the company will continue to operate indefinitely."
  },
  {
    id: 36,
    lo: "7D: Accounting Standards",
    question: "U.S. GAAP-based financial statements primarily focus on which financial characteristic of an insurance organization?",
    options: [
      "Liquidation value",
      "Taxation minimization",
      "Solvency",
      "Profitability"
    ],
    answer: 3,
    explanation: "U.S. GAAP-based financial statements focus on profitability, providing standardized formats for stakeholders to compare company performance over time."
  },
  {
    id: 37,
    lo: "7D: Accounting Standards",
    question: "Which accounting standards are U.S. life insurers legally required to follow when preparing their Annual Statement for submission to state regulators?",
    options: [
      "International financial reporting standards (IFRS)",
      "Internal management accounting guidelines",
      "Generally accepted accounting principles (GAAP)",
      "Statutory accounting practices (SAP)"
    ],
    answer: 3,
    explanation: "Statutory accounting practices are the specific standards that life insurers must follow when preparing the Annual Statement for state regulators."
  },
  {
    id: 38,
    lo: "7D: Accounting Standards",
    question: "Statutory-based financial statements primarily focus on which corporate characteristic to protect policyowners?",
    options: [
      "Solvency",
      "Profitability",
      "Tax efficiency",
      "Sales expansion"
    ],
    answer: 0,
    explanation: "Statutory financial statements focus on solvency, ensuring the insurer maintains adequate capital and surplus to meet its future policy obligations."
  },
  {
    id: 39,
    lo: "7D: Accounting Standards",
    question: "U.S. Statutory accounting practices are fundamentally driven by which accounting convention?",
    options: [
      "Voluntary reporting standards",
      "Forward-looking budgeting",
      "Accounting conservatism",
      "The going-concern assumption"
    ],
    answer: 2,
    explanation: "Statutory accounting is fundamental to accounting conservatism, which ensures that insurers can demonstrate their ability to meet policy obligations even under adverse conditions."
  },
  {
    id: 40,
    lo: "7D: Accounting Standards",
    question: "How does statutory accounting conservatism typically affect values reported on an insurer's balance sheet and income statement compared to GAAP?",
    options: [
      "Conservatism typically understates assets, overstates liabilities and expenses, and projects lower net income",
      "Conservatism overstates assets, understates liabilities, and projects higher net income",
      "Conservatism matches financial reporting values exactly to management budgets",
      "Conservatism has no effect on assets, liabilities, or net income"
    ],
    answer: 0,
    explanation: "Conservatism typically understates assets, overstates liabilities/expenses, and projects lower net income than GAAP. This is done to make sure the company's financial cushion is not overstated."
  },
  {
    id: 41,
    lo: "7D: Accounting Standards",
    question: "Why do regulators require insurers to use statutory accounting conservatism when presenting their financial condition?",
    options: [
      "To eliminate the need for independent external audits",
      "To demonstrate that insurers are able to meet policy obligations even under adverse circumstances",
      "To lower the company's overall state premium taxes",
      "To help investors maximize their return on equity (ROE)"
    ],
    answer: 1,
    explanation: "Using conservative standards demonstrates that an insurer is financially resilient and has sufficient resources to honor its long-term policy contracts, even during tough economic times."
  },
  {
    id: 42,
    lo: "7D: Accounting Standards",
    question: "Scenario: A multinational insurance company based in Paris wishes to prepare a standardized financial report that allows comparisons across multiple European countries. Which standards cover this situation?",
    options: [
      "Statutory accounting practices (SAP)",
      "The company's master budgeting guidelines",
      "International financial reporting standards (IFRS)",
      "U.S. generally accepted accounting principles (GAAP)"
    ],
    answer: 2,
    explanation: "International financial reporting standards (IFRS) are used in many countries to harmonize conflicting local regulations and allow easier global investment comparison."
  },
  {
    id: 43,
    lo: "7D: Accounting Standards",
    question: "Which of the following statements is true regarding the adoption of IFRS in the United States?",
    options: [
      "All life insurance companies in the U.S. must prepare their Annual Statement using IFRS",
      "IFRS is completely banned in the United States",
      "The United States has fully replaced U.S. GAAP with IFRS for all stock insurers",
      "The United States is not among the countries that have adopted IFRS, though foreign companies traded in the U.S. are permitted to use it"
    ],
    answer: 3,
    explanation: "The U.S. has not adopted IFRS. Instead, U.S. companies continue to use U.S. GAAP and Statutory accounting. However, foreign firms traded on U.S. exchanges may use IFRS, and some U.S. subsidiaries of foreign parents may be required to compile reports in IFRS."
  },
  {
    id: 44,
    lo: "7D: Accounting Standards",
    question: "Scenario: Apex Life is a subsidiary of a massive financial group headquartered in Germany. Which accounting standard must Apex likely use to report its financial condition to its parent company?",
    options: [
      "Disbursement general accounting ledger templates",
      "The master budget plan",
      "The State Insurance Department's handbook",
      "International financial reporting standards (IFRS)"
    ],
    answer: 3,
    explanation: "A U.S. insurer may be required to utilize IFRS if the insurer is a subsidiary of a foreign parent company that prepares statements under international standards."
  },

  // --- OBJECTIVE 7E: Primary Financial Statements ---
  {
    id: 45,
    lo: "7E: Primary Financial Statements",
    question: "What is defined as the financial statement that lists the value of an insurer's assets, liabilities, and capital and surplus as of a specific date?",
    options: [
      "The Balance Sheet",
      "The Statement of Owners' Equity",
      "The Cash Flow Statement",
      "The Income Statement"
    ],
    answer: 0,
    explanation: "A balance sheet is a snapshot of an insurer's financial standing as of a specific date, listing assets, liabilities, and capital and surplus."
  },
  {
    id: 46,
    lo: "7E: Primary Financial Statements",
    question: "What is the cumulative amount of money—calculated as an insurer's assets minus its liabilities and capital—that remains in the company over time called?",
    options: [
      "Accrual",
      "Revenue",
      "Reserve",
      "Surplus"
    ],
    answer: 3,
    explanation: "Surplus represents the accumulated earnings that remain in the company after liabilities and capital have been subtracted from total assets."
  },
  {
    id: 47,
    lo: "7E: Primary Financial Statements",
    question: "Which equation represents the basic accounting relationship on an insurance company's balance sheet?",
    options: [
      "Capital = Current Assets / Current Liabilities",
      "Assets = Liabilities + Capital and surplus",
      "Assets = Cash Inflows - Cash Outflows",
      "Assets = Revenues - Expenses"
    ],
    answer: 1,
    explanation: "The basic accounting equation is: Assets = Liabilities + Capital and surplus."
  },
  {
    id: 48,
    lo: "7E: Primary Financial Statements",
    question: "Scenario: On December 31, Vanguard Mutual had $5 billion in liabilities and $1.5 billion in capital and surplus. According to the basic accounting equation, what is the value of Vanguard Mutual's total assets?",
    options: [
      "3.5 billion",
      "1.5 billion",
      "6.5 billion",
      "5.0 billion"
    ],
    answer: 2,
    explanation: "Using the equation Assets = Liabilities ($5B) + Capital and surplus ($1.5B), the total assets equal $6.5 billion."
  },
  {
    id: 49,
    lo: "7E: Primary Financial Statements",
    question: "Scenario: Integrity Life's balance sheet indicates Unpaid Claims of $200,000 and Policy Reserves of $3,600,000. Under Figure 7.4, these items are categorized as:",
    options: [
      "Revenues",
      "Capital and surplus",
      "Assets",
      "Liabilities"
    ],
    answer: 3,
    explanation: "Policy reserves and unpaid claims represent obligations that the insurer must pay out in the future; therefore, they are categorized as liabilities on the balance sheet."
  },
  {
    id: 50,
    lo: "7E: Primary Financial Statements",
    question: "Which of the following represents a major asset line item on an insurance company's balance sheet under Figure 7.4?",
    options: [
      "Unpaid Claims",
      "Premium income",
      "Policy Reserves",
      "Invested Assets (such as stocks, bonds, and mortgages)"
    ],
    answer: 3,
    explanation: "Invested assets (along with cash and premiums receivable) are resources owned by the insurer, making them assets on the balance sheet."
  },
  {
    id: 51,
    lo: "7E: Primary Financial Statements",
    question: "What financial statement shows an insurer's revenues, expenses, and net income or loss over a defined period of time?",
    options: [
      "The Balance Sheet",
      "The Income Statement",
      "The Statement of Capital and Surplus",
      "The Cash Flow Statement"
    ],
    answer: 1,
    explanation: "The income statement shows a company's revenues and expenses during a defined period, such as a fiscal quarter or year, and indicates whether a profit or loss was incurred."
  },
  {
    id: 52,
    lo: "7E: Primary Financial Statements",
    question: "Scenario: Star Life reports Premium Income of $1.8 million and Net Investment Income of $300,000. Under Figure 7.5, these are categorised as:",
    options: [
      "Admitted assets",
      "Benefits and Expenses",
      "Total Revenues",
      "Statement of Owners' Equity options"
    ],
    answer: 2,
    explanation: "Premium income and net investment income are the primary incoming earnings for an insurer, categorized as total revenues on the income statement."
  },
  {
    id: 53,
    lo: "7E: Primary Financial Statements",
    question: "According to Figure 7.5, which of the following represents a key expense line item on an insurer's income statement?",
    options: [
      "Unpaid claims",
      "Increase in Policy Reserves",
      "Premiums Receivable",
      "Invested assets"
    ],
    answer: 1,
    explanation: "The increase in policy reserves (along with policy benefits paid, commissions, and other operating expenses) is categorized as benefits and expenses on the income statement."
  },
  {
    id: 54,
    lo: "7E: Primary Financial Statements",
    question: "Which of the primary financial statements is designed to provide information specifically about cash receipts, cash disbursements, and the net change in cash over an accounting period?",
    options: [
      "The Statement of Owners' Equity",
      "The Balance Sheet",
      "The Cash Flow Statement",
      "The Income Statement"
    ],
    answer: 2,
    explanation: "The cash flow statement tracks cash receipts (inflows) and cash disbursements (outflows) and reports the net change in cash during a specified period."
  },
  {
    id: 55,
    lo: "7E: Primary Financial Statements",
    question: "What is another name for the Statement of Owners' Equity, which shows changes in equity between two sequential balance sheets?",
    options: [
      "The Admitted Assets Ledger",
      "The Statement of Capital and Surplus",
      "The Income Statement",
      "The Cash Flow Reconciliation report"
    ],
    answer: 1,
    explanation: "The statement of owners' equity is also referred to as the statement of capital and surplus."
  },
  {
    id: 56,
    lo: "7E: Primary Financial Statements",
    question: "Scenario: An investor wishes to see whether Vanguard Mutal's internal operations generated positive returns that increased the net book value of the company over the last twelve months. Which financial statement should they inspect?",
    options: [
      "The state licensing certificate",
      "The Statement of Owners' Equity (Statement of Capital and Surplus)",
      "The cash receipts register",
      "The payroll journal"
    ],
    answer: 1,
    explanation: "The statement of owners' equity displays changes in wealth or capital and surplus over a year, tracking how the company's value built up or declined."
  },

  // --- OBJECTIVE 7F: Asset Categories in Annual Statement ---
  {
    id: 57,
    lo: "7F: Asset Categories in Annual Statement",
    question: "Under statutory accounting rules, assets whose full value can be reported on the Assets page of the Annual Statement are known as:",
    options: [
      "Admitted assets",
      "Partially admitted assets",
      "Accrued ledger assets",
      "Nonadmitted assets"
    ],
    answer: 0,
    explanation: "Admitted assets are those of high quality and liquidity whose full value can be reported on the Assets page of the Annual Statement."
  },
  {
    id: 58,
    lo: "7F: Asset Categories in Annual Statement",
    question: "Which of the following is an example of an admitted asset that may be reported at full value on the U.S. Annual Statement?",
    options: [
      "Office supplies and marketing brochures",
      "Office furniture and computers",
      "Premiums overdue by 120 days",
      "Cash and high-quality, investment-grade securities"
    ],
    answer: 3,
    explanation: "Cash and investment-grade securities are high-quality, highly marketable assets, classifying them as admitted assets."
  },
  {
    id: 59,
    lo: "7F: Asset Categories in Annual Statement",
    question: "Assets for which only a portion of their monetary value is reported on the Assets page of the Annual Statement are categorized as ________ assets.",
    options: [
      "partially admitted",
      "insolvent",
      "admitted",
      "nonadmitted"
    ],
    answer: 0,
    explanation: "Partially admitted assets are those whose value can only be partially reported on the Assets page of the Annual Statement (e.g., invested assets whose market value is below book value)."
  },
  {
    id: 60,
    lo: "7F: Asset Categories in Annual Statement",
    question: "Scenario: Vanguard Life owns secondary investments whose current market value is less than their initial book value. Under statutory rules, these are reported as:",
    options: [
      "Full admitted assets",
      "Charge-off expenses",
      "Partially admitted assets",
      "Nonadmitted assets"
    ],
    answer: 2,
    explanation: "Invested assets whose current market value is less than their book value are treated as partially admitted assets."
  },
  {
    id: 61,
    lo: "7F: Asset Categories in Annual Statement",
    question: "What are nonadmitted assets under regulatory reporting guidelines?",
    options: [
      "Assets that are illegal for an insurer to own",
      "Assets that are accorded no value on the Assets page of the Annual Statement",
      "Assets that must be stored in physical bank vaults",
      "Reinsurance recoveries that have been delayed by 10 days"
    ],
    answer: 1,
    explanation: "Nonadmitted assets are accorded no value on the Assets page of the Annual Statement because they are not easily convertible to cash to pay policy claims."
  },
  {
    id: 62,
    lo: "7F: Asset Categories in Annual Statement",
    question: "Scenario: Apex Mutual's balance sheet includes $50,000 of office supplies (paper, pens, envelopes) and $100,000 of desk furniture. Under statutory compliance, how are these office assets treated on the Annual Statement?",
    options: [
      "They are listed as Partially Admitted Assets based on depreciation",
      "They are listed at full purchase cost as Admitted Assets",
      "They are categorized as Nonadmitted Assets, meaning they are accorded zero value",
      "They are classified as Treasury Operations receivables"
    ],
    answer: 2,
    explanation: "Office supplies and furniture are physical assets that cannot be quickly converted into cash to pay policy benefits, so statutory accounting treats them as nonadmitted assets (zero value)."
  },
  {
    id: 63,
    lo: "7F: Asset Categories in Annual Statement",
    question: "Scenario: An independent broker has failed to remit a premium payment to SafeStep Life, and the balance is now 110 days overdue. Under statutory accounting, this asset is categorized as:",
    options: [
      "An admitted receivable asset",
      "A nonadmitted asset",
      "A partially admitted reserve",
      "An operational general expense"
    ],
    answer: 1,
    explanation: "Under statutory accounting practices, premiums overdue by more than 90 days are categorized as nonadmitted assets and are assigned zero value."
  },
  {
    id: 64,
    lo: "7F: Asset Categories in Annual Statement",
    question: "An asset is classified as nonadmitted under LOMA guidelines because it is presumed to ________.",
    options: [
      "have been purchased with fraudulent funds",
      "not affect an insurer's ability to pay its future obligations",
      "have an unstable currency valuation",
      "increase the corporate cash tax liabilities"
    ],
    answer: 1,
    explanation: "Nonadmitted assets include items (like office supplies, furniture, or long-overdue premiums) that cannot contribute to paying immediate policy claims, and are presumed not to affect the company's ability to pay policyholders."
  },
  {
    id: 65,
    lo: "7F: Asset Categories in Annual Statement",
    question: "How does the exclusion of nonadmitted assets from the statutory balance sheet promote the regulator's objective?",
    options: [
      "It maximizes the net profits reported to stockholders",
      "It allows the insurer to bypass federal tax audits",
      "It ensures accounting conservatism by restricting the balance sheet to highly liquid and reliable assets",
      "It lowers the company's accounting audit costs"
    ],
    answer: 2,
    explanation: "Excluding illiquid or uncollectible assets ensures that the solvency of the insurer is evaluated based only on stable assets that are readily available to pay outstanding claims."
  },
  {
    id: 66,
    lo: "7F: Asset Categories in Annual Statement",
    question: "Which of the following would be categorized as a nonadmitted asset under statutory insurance rules?",
    options: [
      "Premiums overdue by more than 90 days, or office equipment",
      "A bank deposit account",
      "A state government bond",
      "A residential mortgage in good standing"
    ],
    answer: 0,
    explanation: "According to LOMA guidelines, office equipment, furniture, and premiums overdue by more than 90 days are classic examples of nonadmitted assets."
  },

  // --- OBJECTIVE 7G: Management Accounting Tools ---
  {
    id: 67,
    lo: "7G: Management Accounting Tools",
    question: "What is defined as the management accounting process that creates a financial plan of action designed to help an organization achieve its objectives?",
    options: [
      "Auditing",
      "Cost allocation",
      "Budgeting",
      "Recognition"
    ],
    answer: 2,
    explanation: "Budgeting is the management accounting process of creating a future-focused financial plan of action to help an insurer meet its strategic goals."
  },
  {
    id: 68,
    lo: "7G: Management Accounting Tools",
    question: "Scenario: At Vanguard Life, individual departmental budgets are combined to show the overall operating and financing plan of the company for the upcoming fiscal period. This consolidated plan is called: ",
    options: [
      "The master budget (or profit plan)",
      "The statutory Annual Statement",
      "The GAAP baseline",
      "The cash analysis ledger"
    ],
    answer: 0,
    explanation: "The master budget consolidates the individual budgets of all departments, lines of business, and profit centers, showing the overall plan of action."
  },
  {
    id: 69,
    lo: "7G: Management Accounting Tools",
    question: "Why is a company's master budget often referred to as a profit plan?",
    options: [
      "Because it consists only of investment revenue calculations with no expenses",
      "Because it is prepared by external auditing companies",
      "Because achieving the goals outlined in the master budget should result in profit for the company",
      "Because it is required by state law to ensure a fixed 10% return for shareholders"
    ],
    answer: 2,
    explanation: "The master budget is often called a profit plan since the successful execution of the consolidated operating and financing guidelines is expected to yield profitable results."
  },
  {
    id: 70,
    lo: "7G: Management Accounting Tools",
    question: "To ensure that it continues to provide reliable estimates of revenues and expenses, most insurers compile the master budget ________ and update it ________.",
    options: [
      "weekly / daily",
      "every five years / quarterly",
      "annually / semi-annually",
      "on a historical basis / on a statutory basis"
    ],
    answer: 2,
    explanation: "To keep estimates accurate and responsive, companies typically compile their master budget annually and make semi-annual updates."
  },
  {
    id: 71,
    lo: "7G: Management Accounting Tools",
    question: "Scenario: At the end of the second quarter, Sentinel Life's cost accounting team compares actual expense results directly against the budgeted baseline to investigate deviations. This process is called:",
    options: [
      "Accrual recognition",
      "Going-concern audits",
      "Valuation mapping",
      "Variance analysis"
    ],
    answer: 3,
    explanation: "Variance analysis involves comparing actual financial results to budgeted amounts. Any significant discrepancies represent variances that require management investigation."
  },
  {
    id: 72,
    lo: "7G: Management Accounting Tools",
    question: "According to LOMA guidelines, when does a favorable variance occur in management budgeting?",
    options: [
      "When actual revenues are less than expected, or actual expenses are greater than expected",
      "Only when the company's tax rate drops",
      "When actual revenues are greater than expected, or actual expenses are less than expected",
      "When the budget matches the previous year's figures exactly"
    ],
    answer: 2,
    explanation: "A budget variance is favorable if the company brought in more revenue than estimated or spent less on expenses than planned."
  },
  {
    id: 73,
    lo: "7G: Management Accounting Tools",
    question: "Scenario: Apex Mutual's marketing department spent $120,000 on print ads instead of the budgeted $100,000. In management accounting, this divergence is known as:",
    options: [
      "An unfavorable variance",
      "A statutory accrual",
      "A favorable variance",
      "An admitted expense"
    ],
    answer: 0,
    explanation: "An unfavorable variance occurs when actual revenues are less than budgeted, or when actual expenses are higher than budgeted."
  },
  {
    id: 74,
    lo: "7G: Management Accounting Tools",
    question: "Scenario: The retail sales group at SafeStep Insurance records actual revenues that are 20% higher than budgeted. Although this is a favorable variance, why must management still investigate it?",
    options: [
      "Because the company owes extra premium taxes on any favorable variance",
      "To understand what caused it, verify if sales projections were set artificially low, check product pricing, and adapt future plans",
      "Because a favorable variance implies the general ledger is out of balance",
      "Because state regulators fine companies that exceed their revenue forecasts"
    ],
    answer: 1,
    explanation: "Both favorable and unfavorable variances must be investigated so management can adjust future forecasts, determine if sales margins were correct, or see if quality was sacrificed."
  },
  {
    id: 75,
    lo: "7G: Management Accounting Tools",
    question: "What is the management accounting system specifically designed for accumulating and categorizing expense data to understand and control costs?",
    options: [
      "Cost accounting",
      "Premium accounting",
      "Financial accounting",
      "General ledger accounting"
    ],
    answer: 0,
    explanation: "Cost accounting is a dedicated management accounting system for accumulating and categorizing expense data."
  },
  {
    id: 76,
    lo: "7G: Management Accounting Tools",
    question: "According to LOMA guidelines, what are the two primary objectives of an insurer's cost accounting system?",
    options: [
      "To manage employee payroll records and coordinate internal audits",
      "To calculate corporate income tax and file the Annual Statement with regulators",
      "To approve stock dividends and oversee treasury bank transfers",
      "To establish effective cost controls and generate accurate estimates of future costs for use in product pricing"
    ],
    answer: 3,
    explanation: "The two main goals of cost accounting are (1) establishing cost controls, and (2) generating accurate cost estimates that actuaries can use to price the company's insurance products."
  },
  {
    id: 77,
    lo: "7G: Management Accounting Tools",
    question: "Insurers may refer to cost accounting by several other terms. Which of the following is NOT a synonym for cost accounting listed in the text?",
    options: [
      "Expense analysis",
      "Expense accounting or cost allocation",
      "Admitted asset valuation",
      "None of the above"
    ],
    answer: 2,
    explanation: "Cost accounting is also known as expense analysis, expense accounting, or cost allocation. Asset valuation is a separate process."
  },
  {
    id: 78,
    lo: "7G: Management Accounting Tools",
    question: "Scenario: An expense analyst at Sentinel Life is allocating the specific cost of running the server farm to the individual lines of business (Life, Annuities, Health) that use it. This process represents:",
    options: [
      "Financial recognition of cash flow",
      "Budgeting a variance",
      "Determining a nonadmitted asset",
      "Cost accounting (or cost allocation)"
    ],
    answer: 3,
    explanation: "Allocating running costs to specific departments, products, or units of business is a core action within a cost accounting (cost allocation) system."
  },

  // --- OBJECTIVE 7H: Treasury Operations ---
  {
    id: 79,
    lo: "7H: Treasury Operations",
    question: "Scenario: Star Life's premium collection system prompts users to send check payments to a secure post office box managed by its primary bank. This system is known as:",
    options: [
      "A lockbox",
      "An admitted cash vault",
      "An electronic funds transfer",
      "A corporate deposit ledger"
    ],
    answer: 0,
    explanation: "A lockbox is a designated post office box that policyowners use to remit check payments, where the bank retrieves the checks and deposits them directly into the company's account."
  },
  {
    id: 80,
    lo: "7H: Treasury Operations",
    question: "Scenario: A policyholder makes an electronic payment to Star Life. An automated accounting system logs the premium receipt, but who must reconcile this deposit with the insurer's bank statement records?",
    options: [
      "Staff in Treasury Operations who do not handle physical cash",
      "The underwriters who approved the policy risk",
      "The client's independent financial advisor",
      "The external auditor during the annual review"
    ],
    answer: 0,
    explanation: "To enforce dual control, employees in treasury operations who do not handle physical cash are assigned to reconcile the bank statements with the transaction logs."
  },
  {
    id: 81,
    lo: "7H: Treasury Operations",
    question: "Why must staff in Treasury Operations and Investment Management coordinate extremely closely regarding daily bank balances?",
    options: [
      "To ensure that all investment trades are reported using statutory conservatism standards",
      "Because timely communication of available cash is critical to maximize investment yields and avoid unproductive, idle cash",
      "To ensure that the same person can buy bonds and record the cash receipts in the ledger",
      "Because investment managers are legally required to approve all treasury department payroll entries"
    ],
    answer: 1,
    explanation: "Insurers must avoid having unproductive idle cash in bank accounts. Treasury must notify investment operations of available cash so it can be invested promptly."
  },
  {
    id: 82,
    lo: "7H: Treasury Operations",
    question: "The control function for treasury operations focused on receipts and disbursements requires that which three job duties must be strictly segregated?",
    options: [
      "Financial reporting, cost accounting, and budgeting",
      "Underwriting, claims billing, and customer service",
      "Investment selection, asset trades, and auditing",
      "Cash receipts, cash disbursements, and bank reconciliation"
    ],
    answer: 3,
    explanation: "The core control function in treasury operations ensures that duties for physical cash receipts, cash disbursements, and the bank reconciliation are handled by separate individuals."
  },
  {
    id: 83,
    lo: "7H: Treasury Operations",
    question: "Scenario: Integrity Life expands its commercial operations into Germany and France. To simplify and increase the efficiency of its cross-border electronic payments, it utilizes which European payment framework?",
    options: [
      "The Swift Liquidity Assurance Union (SLAU)",
      "The Eurobond Trading Network (ETN)",
      "The European Accounting Standards Board (EASB)",
      "The Single Euro Payments Area (SEPA)"
    ],
    answer: 3,
    explanation: "The Single Euro Payments Area (SEPA) is a payment-integration initiative that simplifies and increases the efficiency of cross-border electronic bank transfers in Europe."
  },
  {
    id: 84,
    lo: "7H: Treasury Operations",
    question: "Scenario: Vanguard Life is hit with an unexpected surge in cash surrenders as a result of a sharp decline in regional economic conditions. Which treasury operations field is most directly tested by this event?",
    options: [
      "Liquidity management",
      "Disbursement auditing",
      "Tax accounting",
      "Payroll general accounting"
    ],
    answer: 0,
    explanation: "Liquidity management ensures the insurer has sufficient cash and liquid assets available to meet immediate demands (such as surrender requests) without disrupting operations."
  },
  {
    id: 85,
    lo: "7H: Treasury Operations",
    question: "Scenario: Sentinel Life's cash balance on Wednesday falls below the absolute minimum required by its bank contracts. The treasury team immediately secures a short-term overnight loan from a credit line. This activity is part of:",
    options: [
      "Statutory asset valuation audits",
      "Strategic pricing design",
      "General ledger recognition",
      "Managing daily cash balances in liquidity management"
    ],
    answer: 3,
    explanation: "Managing daily cash balances to determine if cash should be invested or borrowed overnight is a core activity of liquidity management."
  },
  {
    id: 86,
    lo: "7H: Treasury Operations",
    question: "Which of the following is an activity typically performed by treasury staff specializing in liquidity management?",
    options: [
      "Conducting annual physical audits of regional underwriting offices",
      "Signing off on the accuracy of marketing campaign expenditures",
      "Determining the core reserve values for brand-new variable annuities",
      "Anticipating and coordinating short-term and long-term debt obligations"
    ],
    answer: 3,
    explanation: "In liquidity management, treasury staff coordinate short-term and long-term debt obligations to ensure that cash is always available to pay obligations on time (Figure 7.6)."
  },
  {
    id: 87,
    lo: "7H: Treasury Operations",
    question: "Scenario: A treasury clerk at Sentinel Life is tasked with tracking daily fluctuations in the value of the British Pound to minimize risks arising from overseas premium collection. This refers to:",
    options: [
      "Pricing risk management",
      "Managing the risks associated with foreign exchange rates",
      "Variance cost accounting allocation",
      "Evaluating competitor market shares"
    ],
    answer: 1,
    explanation: "Managing foreign exchange rate risks is a key liquidity management activity for insurers operating internationally."
  },
  {
    id: 88,
    lo: "7H: Treasury Operations",
    question: "How do liquidity managers coordinate with are risk management specialists?",
    options: [
      "They work closely together to ensure that the insurer is minimizing specific risks, including interest-rate risk",
      "They must use management accounting instead of statutory guidelines",
      "They are prohibited from communicating under standard SEC rules",
      "They must share identical passwords on banking entry screens"
    ],
    answer: 0,
    explanation: "Liquidity managers must coordinate with the company's risk management team to control specific threats to financial stability, such as interest-rate volatility."
  },
  {
    id: 89,
    lo: "7H: Treasury Operations",
    question: "Scenario: A corporate treasurer is analyzing the anticipated inflows of cash from renewal premiums and outbound payments for maturing endowment policies. This represents:",
    options: [
      "General ledger reconciliation",
      "Projecting cash receipts and cash disbursements by product and line of business",
      "Determining a nonadmitted asset",
      "Statutory asset accounting"
    ],
    answer: 1,
    explanation: "Projecting cash cash flow patterns (receipts and disbursements) for separate products and business lines is an important sub-activity of liquidity management."
  },
  {
    id: 90,
    lo: "7H: Treasury Operations",
    question: "Scenario: Star Life's board wants to ensure that billing runs can continue in the event of a catastrophic cyberattack. The treasurer works with IT to develop an emergency cash response backup plan. This is known as:",
    options: [
      "A business continuity plan",
      "Regulatory capital management",
      "Budget variance checking",
      "An external compliance audit"
    ],
    answer: 0,
    explanation: "Developing the insurer's business continuity plan (in coordination with IT or the COO) is a key responsibility often involving liquidity management."
  },

  // --- OBJECTIVE 7I: Purpose of Auditing and Internal Controls ---
  {
    id: 91,
    lo: "7I: Purpose of Auditing and Internal Controls",
    question: "What is defined as the systematic process of examining and evaluating company records and procedures to ensure fair presentation, quality assurance, and policy effectiveness?",
    options: [
      "Accounting recognition",
      "Auditing",
      "Budgeting",
      "Liquidity forecasting"
    ],
    answer: 1,
    explanation: "Auditing is the process of examining and evaluating company records and procedures to ensure records are fair/accurate, controls are followed, and operations are practical."
  },
  {
    id: 92,
    lo: "7I: Purpose of Auditing and Internal Controls",
    question: "Which type of audit specifically evaluates the accuracy of accounting and financial reporting, and the adequacy of controls over cash and other assets?",
    options: [
      "A customer service quality audit",
      "A physical inventory audit",
      "An internal financial audit",
      "An underwriting compliance audit"
    ],
    answer: 2,
    explanation: "An internal financial audit is a type of internal audit focusing on the accuracy of financial reporting and the strength of asset controls."
  },
  {
    id: 93,
    lo: "7I: Purpose of Auditing and Internal Controls",
    question: "Which of the following is NOT one of the primary objective targets of an internal financial audit under LOMA guidelines?",
    options: [
      "Determining if financial records are fair and accurate",
      "Confirming that control procedures are adequate and are being followed",
      "Verifying that compliance obligations are being met and assets are safeguarded",
      "Ensuring that competitor market shares are minimized"
    ],
    answer: 3,
    explanation: "An internal financial audit verifies records, checks control following, safeguards assets, and reviews compliance; it does not focus on reducing competitor market share."
  },
  {
    id: 94,
    lo: "7I: Purpose of Auditing and Internal Controls",
    question: "Scenario: SafeStep Life's auditors finish a review of claims controls and identify that one manager has been bypassing standard signature limits. To whom should they communicate these findings?",
    options: [
      "The payroll clerk in general accounting",
      "The audit committee of the board of directors and appropriate management groups",
      "The external media networks",
      "The independent financial advisors"
    ],
    answer: 1,
    explanation: "Auditors must report findings directly to the board's audit committee and relevant management so that corrective steps can be taken."
  },
  {
    id: 95,
    lo: "7I: Purpose of Auditing and Internal Controls",
    question: "Which of the following statements is true regarding the scope of auditing in an insurance company?",
    options: [
      "Auditing is a voluntary process with no impact on risk management",
      "Auditing is strictly limited to reviewing general accounting ledgers",
      "Auditing extends well beyond accounting to evaluate operating procedures, management efficiency, and policy compliance",
      "Auditing is only conducted when a financial crime has already been proven"
    ],
    answer: 2,
    explanation: "Auditing covers non-financial procedures too—assessing operational efficiencies, compliance with rules, and correctness of policies in departments like underwriting or claims."
  },
  {
    id: 96,
    lo: "7I: Purpose of Auditing and Internal Controls",
    question: "Scenario: Vanguard Life requires that two senior managers must sign all disbursement checks over a specified monetary amount. According to Figure 7.6, this is classified as which type of control?",
    options: [
      "A GAAP valuation rule",
      "A management accounting estimate",
      "A marketing validation control",
      "An internal control"
    ],
    answer: 3,
    explanation: "Requiring two signatures on large checks is a classic example of an internal control designed to prevent unauthorized disbursements."
  },
  {
    id: 97,
    lo: "7I: Purpose of Auditing and Internal Controls",
    question: "Under Figure 7.6, which of the following is a recognized internal control used by insurance companies to protect premium deposits?",
    options: [
      "Employees in two different departments must handle receipt of cash and recording the receipt of that cash",
      "Allowing underwriters to override general ledger items",
      "Reporting all physical bank accounts under international IFRS rules",
      "Letting the treasury clerk reconcile their own cash receipts"
    ],
    answer: 0,
    explanation: "Dividing cash receipt and cash recording between two separate departments ensures that no single team can manipulate entries, which is a major internal control (Figure 7.6)."
  },
  {
    id: 98,
    lo: "7I: Purpose of Auditing and Internal Controls",
    question: "Scenario: An underwriting manager at Sentinel Life pulls a random bundle of ten life applications each Friday to check if risk metrics were evaluated correctly. Under Figure 7.6, this represents:",
    options: [
      "A financial valuation standard",
      "A GAAP going-concern check",
      "An internal control designed to ensure correct risk classes are assigned",
      "A variance cost accounting allocation"
    ],
    answer: 2,
    explanation: "Reviewing a random selection of files matches the internal control of verifying that underwriters have correctly assigned risk classes based on given factors (Figure 7.6)."
  },
  {
    id: 99,
    lo: "7I: Purpose of Auditing and Internal Controls",
    question: "According to Figure 7.6, how should an insurer structure its claims process to enforce secure internal control?",
    options: [
      "All claims must be paid out within 24 hours without examiner review",
      "Claim processing and claim disbursement job duties must be separated",
      "Claim records should be managed under management accounting rules only",
      "The claims clerk who processes claims must have the authority to print tax forms"
    ],
    answer: 1,
    explanation: "Separating claims processing and claims disbursement duties prevents conflicts of interest and ensures dual control (Figure 7.6)."
  },
  {
    id: 100,
    lo: "7I: Purpose of Auditing and Internal Controls",
    question: "Scenario: SafeStep Mutual requires that all major investment purchases and sales be performed by different employees than those who record and report purchases. This internal control serves to:",
    options: [
      "Minimize state premium taxes",
      "Convert nonadmitted assets into admitted assets",
      "Ensure independent verification and prevent fraud in asset transaction recording",
      "Lower the cost of pricing variable annuities"
    ],
    answer: 2,
    explanation: "By keeping the trading team separate from the recordkeeping team, this internal control ensures asset records cannot be falsified by the person who made the trades."
  }
];
