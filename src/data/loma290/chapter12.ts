import { Question } from '../../types';

export const chapter12Questions: Question[] = [
  // ==========================================
  // OBJECTIVE 12A: Underwriting and New Business Processing (1-9)
  // ==========================================
  {
    id: 1,
    lo: "12A: Underwriting & New Business",
    question: "Scenario: Integrity Life opens an insurance application and assesses the degree of risk the applicant represents to assign them to a proper risk category. This professional process of selection of risks is known as:",
    options: [
      "Feasibility study",
      "Clearing and settlement",
      "Actuarial valuation",
      "Underwriting"
    ],
    answer: 3,
    explanation: "Underwriting, also known as selection of risks, is the process of assessing and classifying the degree of risk a proposed insured or group represents and making a decision to accept or decline that risk."
  },
  {
    id: 2,
    lo: "12A: Underwriting & New Business",
    question: "Scenario: Sarah applies for a term life insurance policy. The employee responsible for evaluating Sarah's risks, deciding whether to issue the policy, and determining her specific premium rate is a(n):",
    options: [
      "Actuary",
      "Underwriter",
      "Claim examiner",
      "Compliance officer"
    ],
    answer: 1,
    explanation: "An underwriter is an insurance company employee who evaluates risks, accepts or declines insurance applications, and determines the appropriate premium rate to charge acceptable risks."
  },
  {
    id: 3,
    lo: "12A: Underwriting & New Business",
    question: "How does 'new business processing' conceptually relate to 'underwriting' for individual life insurance products?",
    options: [
      "Underwriting is a critical part of new business processing, which also includes application receipt, processing, and policy issue",
      "Underwriting is a completely separate process that occurs only after a policy has run its course",
      "Underwriting is done by third-party broker-dealers, while new business processing is done by the state department",
      "New business processing only applies to commercial property-casualty contracts"
    ],
    answer: 0,
    explanation: "Underwriting is a core subset of new business processing. For individual life insurance, new business processing includes processing applications, underwriting applications, and issuing policies."
  },
  {
    id: 4,
    lo: "12A: Underwriting & New Business",
    question: "Scenario: SafeStep Mutual receives annuity applications. Unlike life insurance policies, the core task for new business processing of standard annuities differs because they normally do not go through:",
    options: [
      "Legal verification steps",
      "Application processing stages",
      "Policy issue procedures",
      "Underwriting"
    ],
    answer: 3,
    explanation: "Because standard annuities usually do not go through underwriting (as there is no mortality risk of premature death, but rather longevity risk that does not require traditional health risk selection), new business processing for annuities generally involves only processing applications and issuing policies."
  },
  {
    id: 5,
    lo: "12A: Underwriting & New Business",
    question: "Under LOMA Chapter 12, what represents the primary driver of mortality risk that life insurance underwriters seek to control?",
    options: [
      "The risk of depreciation in general account bond values",
      "The likelihood that an annuity contract holder will outlive their assets",
      "The likelihood that a proposed insured will die sooner than statistically expected",
      "The possibility that premium taxes will rise"
    ],
    answer: 2,
    explanation: "For life insurance, mortality risk is the likelihood that a person will die sooner than statistically expected, which directly affects the timing and amount of benefit outflows."
  },
  {
    id: 6,
    lo: "12A: Underwriting & New Business",
    question: "Scenario: Apex Life has offered a retirement annuity product for years. How does the concept of mortality risk apply to annuity products compared to life insurance?",
    options: [
      "For annuity products, mortality risk is the likelihood that a proposed insured will live longer than statistically expected",
      "Mortality risk has zero application or calculation in annuity product pricing",
      "It represents the risk of sudden premium tax adjustments",
      "It is identical; the insurer is penalized if the annuitant dies prematurely"
    ],
    answer: 0,
    explanation: "For annuity products, the primary financial risk is longevity, which is represented in mortality terms as the likelihood that a proposed insured will live longer than statistically expected, requiring more payouts."
  },
  {
    id: 7,
    lo: "12A: Underwriting & New Business",
    question: "If an insurance company does not properly assess risks during the underwriting phase, what is the ultimate threat over time?",
    options: [
      "The company will be legally forced to invest only in common stocks",
      "The insurer's profits will suffer and, in the worst case, the company could become insolvent",
      "The total face amount of all policies will automatically double",
      "The state will automatically convert the firm to a fraternal society"
    ],
    answer: 1,
    explanation: "Improper risk assessment leads to writing high-risk policies at inadequate premium levels. Over time, excessive claim payouts will drain reserves, threatening profits and solvency."
  },
  {
    id: 8,
    lo: "12A: Underwriting & New Business",
    question: "What is an insurer's primary purpose in placing each approved applicant into a specific 'risk class'?",
    options: [
      "To group individuals of similar risk levels and charge premium rates proportionate to the risk they represent",
      "To ensure that all individuals pay exactly identical premium rates",
      "To bypass the need for any medical assessments",
      "To keep the sales force from knowing the applicant's status"
    ],
    answer: 0,
    explanation: "A risk class groups individuals of similar risk. Placing each applicant in the proper class ensures equitable, proportionate premium pricing based on actual risk factors."
  },
  {
    id: 9,
    lo: "12A: Underwriting & New Business",
    question: "Under LOMA, what is the definition of a 'risk class'?",
    options: [
      "The commission scale paid to a personal-producing general agent",
      "A group of insureds who represent a similar level of risk to an insurance company",
      "The physical geographic borders of an insurer's sales team",
      "A group of underwriters carrying the same license authority levels"
    ],
    answer: 1,
    explanation: "LOMA defines a risk class as a group of insureds who represent a similar level of risk to an insurance company."
  },

  // ==========================================
  // OBJECTIVE 12B: Automation in New Business Processing (10-18)
  // ==========================================
  {
    id: 10,
    lo: "12B: Automation & e-Apps",
    question: "Scenario: Centennial Life allows its field agents to log into a digital platform to capture client answers and receive real-time check-box validations during the meeting. This software represents an:",
    options: [
      "Electronic application (e-application) system",
      "Independent clearing network",
      "Attending physician's database",
      "Underwriting philosophy binder"
    ],
    answer: 0,
    explanation: "An electronic application (e-application) system provides interfaces to record and submit application information using a computer or mobile device, improving accuracy and speed."
  },
  {
    id: 11,
    lo: "12B: Automation & e-Apps",
    question: "How do electronic e-application systems improve processing accuracy and speed compared to traditional paper layouts?",
    options: [
      "They completely eliminate the need to run any underwriting processes",
      "They can improve efficiency by only accepting applications that contain all required fields, inputs, and digital signatures before submission",
      "They allow the customer to set their own premium rates",
      "They bypass all local regulatory review standards"
    ],
    answer: 1,
    explanation: "E-application systems utilize automated fields and validation checks to prevent the submission of incomplete forms, immediately filtering out missing information."
  },
  {
    id: 12,
    lo: "12B: Automation & e-Apps",
    question: "Scenario: An applicant clicks a secure link to authorize their contract using a legally binding electronic communication pattern. This visual mark is an:",
    options: [
      "Independent validation code",
      "Attending physician's signature",
      "Unilateral proxy seal",
      "Electronic signature (e-signature)"
    ],
    answer: 3,
    explanation: "An electronic signature (e-signature) is a legally binding method of making a contract using electronic communications media as allowed by law."
  },
  {
    id: 13,
    lo: "12B: Automation & e-Apps",
    question: "Scenario: After receiving an application, the administrative team conducts a 'good order check' to ensure everything is ready to proceed to underwriting. What is the standard term for a completed, fault-free application?",
    options: [
      "STP (Straight-Through Processed)",
      "BRE (Business Rules Engaged)",
      "IGO (In Good Order)",
      "NIGO (Not in Good Order)"
    ],
    answer: 2,
    explanation: "An application that is complete, accurate, signed, and ready to progress to underwriting is referred to as being 'in good order' (IGO)."
  },
  {
    id: 14,
    lo: "12B: Automation & e-Apps",
    question: "Which of the following describes a scenario where an application is flagged as NIGO (Not in Good Order)?",
    options: [
      "The contract is immediately approved by a jet unit",
      "The application form is missing required signatures, uses an outdated version for that state, or the agent's license has expired",
      "The applicant selects a standard non-tobacco option",
      "The underwriter assigns a credit for excellent family health history"
    ],
    answer: 1,
    explanation: "An application is 'not in good order' (NIGO) if key fields are blank, required adjacent elements are missing, or professional licensing issues are uncovered."
  },
  {
    id: 15,
    lo: "12B: Automation & e-Apps",
    question: "Scenario: Vantage Life analyzes a customer's request and double-checks if the chosen universal policy matches their specific financial profile, objectives, and income. This is a:",
    options: [
      "Filing review check",
      "Reinsurance allocation check",
      "Suitability check",
      "Statutory accounting check"
    ],
    answer: 2,
    explanation: "Suitability refers to whether a particular insurance or annuity product is appropriate for an applicant based on their unique goals, needs, and current financial condition."
  },
  {
    id: 16,
    lo: "12B: Automation & e-Apps",
    question: "Scenario: Pioneer Life evaluates deferred annuity sales. For these products, the firm applies a stronger standard than simple suitability, verifying that the product is:",
    options: [
      "Fully backed by a separate account equity block",
      "Deductible under federal estate tax limits",
      "Free of any cash value guarantees",
      "In the client's best interest"
    ],
    answer: 3,
    explanation: "For certain products, such as deferred annuities, insurers frequently apply a higher standard than suitability, requiring proof that the sale is in the client's best interest."
  },
  {
    id: 17,
    lo: "12B: Automation & e-Apps",
    question: "Which of the following describes the extreme version of automation in new business processing, where a customer completes a digital form and is immediately issued an active policy online in one brief session?",
    options: [
      "Field underwriting with manual post-delivery reviews",
      "Manual teleunderwriting with exception queues",
      "Instant issue underwriting combined with straight-through processing (STP)",
      "Bilateral numerical rating with manual audits"
    ],
    answer: 2,
    explanation: "Combining instant issue underwriting (instant automated decisioning) and straight-through processing (handing every step from app to issue electronically) yields an instant policy contract transaction."
  },
  {
    id: 18,
    lo: "12B: Automation & e-Apps",
    question: "Under LOMA, how does an automated system using a custom business rules engine (BRE) achieve 'exception-based underwriting'?",
    options: [
      "It rejects 100% of applications to force manual human reviews",
      "It automatically assigns all applicants to the substandard risk class",
      "It only evaluates applications that are flagged as NIGO",
      "It automatically accepts applications that meet clearly defined criteria and refers the rest (exceptions) to human underwriters"
    ],
    answer: 3,
    explanation: "Exception-based underwriting uses a BRE to instantly auto-approve clean, low-risk cases. Only cases falling outside basic parameters (exceptions) require manual human underwriter review."
  },

  // ==========================================
  // OBJECTIVE 12C: Key Underwriting Job Positions (19-27)
  // ==========================================
  {
    id: 19,
    lo: "12C: job Positions",
    question: "Scenario: An executive is responsible for establishing the entire insurer's underwriting guidelines, overseeing large and complex contracts, and monitoring the department's cost and quality. Who is this professional?",
    options: [
      "The Medical Underwriting Director",
      "The Intermediate Underwriting Supervisor",
      "The Chief Underwriter",
      "The Field General Agent"
    ],
    answer: 2,
    explanation: "The chief underwriter is charged with running the underwriting department, establishing underwriting philosophy and guidelines, monitoring quality/metrics, and signing off on highly complex cases."
  },
  {
    id: 20,
    lo: "12C: job Positions",
    question: "Scenario: Aegis Life has a physician on staff who updates medical rating charts and assists underwriters in interpreting complex medical histories, but never performs physical exams on applicants. This person is the:",
    options: [
      "Chief Underwriter",
      "Attending Physician Specialist",
      "Medical Underwriting Director",
      "Field Medical Examiner"
    ],
    answer: 2,
    explanation: "The medical underwriting director and their staff prepare the medical guidelines and assist with complex cases. They do not conduct physical examinations of life applicants."
  },
  {
    id: 21,
    lo: "12C: job Positions",
    question: "Which professional in the underwriting department is responsible for directing daily underwriting activities and directly reporting to the chief underwriter?",
    options: [
      "The Underwriting Manager",
      "The General Agent",
      "The Compliance Specialist",
      "The Registered Representative"
    ],
    answer: 0,
    explanation: "Underwriting managers oversee day-to-day operations and directly report to the head of the department (the chief underwriter)."
  },
  {
    id: 22,
    lo: "12C: job Positions",
    question: "Scenario: Dave reports to an underwriting manager and is specifically responsible for overseeing the underwriting team handling variable life products for the Midwest sales region. Dave's position is an:",
    options: [
      "Associate Medical Director",
      "Agent of Record",
      "Underwriting Supervisor",
      "Field Underwriter"
    ],
    answer: 2,
    explanation: "Underwriting supervisors report to underwriting managers. Each is typically responsible for a specific product line, a group of agents, or a geographic territory."
  },
  {
    id: 23,
    lo: "12C: job Positions",
    question: "Scenario: Susan meets face-to-face with prospects to gather initial information during the application process. Under LOMA, while not formally part of the home-office underwriting staff, Susan is performing the role of a:",
    options: [
      "Field Underwriter",
      "Jet Unit Coordinator",
      "Medical Examiner",
      "Reinsurance Specialist"
    ],
    answer: 0,
    explanation: "Sales agents are often called field underwriters because they initiate risk selection by collecting key up-front applicant data when they write cases."
  },
  {
    id: 24,
    lo: "12C: job Positions",
    question: "Scenario: SafeStep Mutual wants to expedite the approval of simple, minor-risk applications. They create a dedicated, highly trained team authorized to immediately issue policies meeting specific standards. This team is a:",
    options: [
      "Jet unit",
      "Compliance syndicate",
      "BGA cabinet",
      "Medical audit pool"
    ],
    answer: 0,
    explanation: "A jet unit is a team (representing real people or automated processes) authorized to instantly approve individual applications that satisfy basic, simple criteria."
  },
  {
    id: 25,
    lo: "12C: job Positions",
    question: "If an application evaluated by a jet unit contains an unusual medical condition or is for a very high coverage amount, how is it handled?",
    options: [
      "It is forwarded directly to the SEC",
      "It is sent from the jet unit to other underwriting staff for a more comprehensive review",
      "It is automatically declined",
      "It is issued immediately under standard risk rates to avoid delays"
    ],
    answer: 1,
    explanation: "Jet units only process highly standardized, minor-risk applications. Any case that does not qualify for instant approval is routed to general/senior underwriters."
  },
  {
    id: 26,
    lo: "12C: job Positions",
    question: "Who is responsible for the actual daily task of assessing and classifying risks presented on incoming insurance applications?",
    options: [
      "Underwriters",
      "Group representatives",
      "The Board of Directors",
      "The company's CFO"
    ],
    answer: 0,
    explanation: "Underwriters are the core operational employees responsible for analyzing files, assessing risk exposure, and classifying cases."
  },
  {
    id: 27,
    lo: "12C: job Positions",
    question: "How do very large insurance companies typically organize their new business and underwriting operations to maximize structural efficiency?",
    options: [
      "They may establish new business and underwriting as completely separate departments",
      "They are legally required to organize both functions under the marketing department",
      "They outsource 100% of underwriting tasks to reinsurance firms",
      "They must route all files to external state regulators for review"
    ],
    answer: 0,
    explanation: "While some combine them under a single vice president, very large insurers often establish 'new business' and 'underwriting' as two distinct, cooperative departments."
  },

  // ==========================================
  // OBJECTIVE 12D: Underwriting Philosophy vs Underwriting Guidelines (28-36)
  // ==========================================
  {
    id: 28,
    lo: "12D: Philosophy vs Guidelines",
    question: "Under LOMA guidelines, what represents the primary difference between an insurer's 'underwriting philosophy' and its 'underwriting guidelines'?",
    options: [
      "Guidelines are set by state insurance departments, while philosophy is written by the agents",
      "Philosophy is a set of broad strategic objectives guiding all actions, whereas guidelines are detailed standards that specify limits for assigning applicants to risk classes",
      "Philosophy only applies to standard risks, whereas guidelines apply only to declined cases",
      "There is no difference; they are identical terms under LOMA"
    ],
    answer: 1,
    explanation: "Underwriting philosophy is the broad set of strategic objectives (reflecting goals and pricing assumptions) established by the board. Underwriting guidelines are the specific, operative handbook rules used by underwriters to classify individual risks."
  },
  {
    id: 29,
    lo: "12D: Philosophy vs Guidelines",
    question: "Scenario: Pioneer Life's Board has a strategic objective to insure a portion of high-risk proposed insureds to expand their market footprint. This overall rule represents Pioneer's:",
    options: [
      "Underwriting philosophy",
      "Underwriting guideline",
      "Product design manual",
      "Claims procedure"
    ],
    answer: 0,
    explanation: "A strategic broad-level steering objective set by the board represents the company's underwriting philosophy."
  },
  {
    id: 30,
    lo: "12D: Philosophy vs Guidelines",
    question: "Scenario: An manual instructs underwriters that an individual with a blood pressure reading over 140/90 must be assigned to the substandard risk class. This specific rule is part of the insurer's:",
    options: [
      "Underwriting philosophy",
      "Business analysis projections",
      "Underwriting guidelines",
      "Sales illustration guidelines"
    ],
    answer: 2,
    explanation: "Underwriting guidelines translate broad philosophy into precise limits and criteria (e.g., blood pressure cutoffs) used to assign individuals to risk classes."
  },
  {
    id: 31,
    lo: "12D: Philosophy vs Guidelines",
    question: "Scenario: Millennium Life places a proposed insured into the 'preferred class'. Under LOMA Chapter 12, what does this specific classification represent?",
    options: [
      "The applicant has average mortality and pays the standard premium rate",
      "The applicant represents a risk that is too great to be insured at any price",
      "The applicant's anticipated mortality is lower than average, representing the lowest degree of risk",
      "The applicant is uninsurable and the case is declined"
    ],
    answer: 2,
    explanation: "The preferred class is reserved for healthier-than-average individuals with lower expected mortality, who qualify for the lowest premium rates (Figure 12.2)."
  },
  {
    id: 32,
    lo: "12D: Philosophy vs Guidelines",
    question: "Which of the following describes the LOMA definition of a standard risk class?",
    options: [
      "Applicants whose anticipated mortality is average",
      "Applicants who are completely uninsurable",
      "Applicants with anticipated mortality that is significantly lower than average",
      "Applicants who represent a temporary extra occupational risk"
    ],
    answer: 0,
    explanation: "The standard class designates average risk profiles. Their mortality characteristics match the core block of active pricing assumptions (Figure 12.2)."
  },
  {
    id: 33,
    lo: "12D: Philosophy vs Guidelines",
    question: "Scenario: An applicant has a mild medical condition. The underwriter determines they represent an above-average mortality risk but can still be insured for a higher premium. In which risk class do they belong?",
    options: [
      "Preferred class",
      "Declined class",
      "Substandard class",
      "Standard class"
    ],
    answer: 2,
    explanation: "The substandard class is for individuals with above-average expected mortality (higher risk) who are still deemed insurable on rated or modified terms (Figure 12.2)."
  },
  {
    id: 34,
    lo: "12D: Philosophy vs Guidelines",
    question: "Scenario: The underwriter evaluates an application where the proposed insured has a terminal illness. The anticipated extra mortality is so great that a reasonable premium cannot cover it. The underwriter places this file in the:",
    options: [
      "Substandard class",
      "Standard class",
      "Exclusionary class",
      "Declined class"
    ],
    answer: 3,
    explanation: "The declined class is for risks too severe to underwrite at an affordable rate, or where risk cannot be accurately predicted (Figure 12.2)."
  },
  {
    id: 35,
    lo: "12D: Philosophy vs Guidelines",
    question: "Why do life insurance companies typically subdivide their core risk classes into smoker (tobacco users) and nonsmoker (nontobacco users)?",
    options: [
      "To eliminate the need to calculate any debits or credits",
      "Because smokers represent a significantly higher statistical mortality risk than nonsmokers",
      "To reduce the number of applications processed by the jet unit",
      "Because state laws mandate identical premium pricing for both groups"
    ],
    answer: 1,
    explanation: "Actuarial data proves that tobacco users suffer higher mortality rates, so insurers segment risk classes to charge fair, risk-proportionate rates."
  },
  {
    id: 36,
    lo: "12D: Philosophy vs Guidelines",
    question: "If an insurer uses 'tobacco users' and 'nontobacco users' as classification categories, what types of products are usually tracked under the 'tobacco' definition besides standard cigarettes?",
    options: [
      "Only imported cigars",
      "Only products sold through worksite marketing programs",
      "Any product containing caffeine ingredients",
      "Smokeless tobacco products like chewing tobacco, plus cigarette, cigar, and pipe tobacco"
    ],
    answer: 3,
    explanation: "Tobacco user rules usually cover smokeless products (chewing tobacco) and all smoking instruments (cigars, pipes) to accurately capture overall chemical risk."
  },

  // ==========================================
  // OBJECTIVE 12E: The Underwriting Process & Sources of Medical Information (37-46)
  // ==========================================
  {
    id: 37,
    lo: "12E: Underwriting Process",
    question: "Under LOMA, what is the defined term for the documentation showing that a proposed insured appears to be an acceptable, insurable risk?",
    options: [
      "Underwriting guidelines",
      "Evidence of insurability",
      "A notice of appointment",
      "A statement of health (SOH) ledger"
    ],
    answer: 1,
    explanation: "Evidence of insurability is the official term for any documentation confirming that a proposed insured represents an acceptable risk to the carrier."
  },
  {
    id: 38,
    lo: "12E: Underwriting Process",
    question: "Scenario: Mary receives an application table showing requirements based on the applicant's age and requested face amount. This chart is known as the table of underwriting requirements or a:",
    options: [
      "Claims incidence matrix",
      "Product design pricing workbook",
      "Field underwriting manual's age and amount requirements chart",
      "BRE scoring ledger"
    ],
    answer: 2,
    explanation: "An age and amount requirements chart specifies what types of medical or personal evidence (MIB checks, exam reports, blood tests) are needed based on age and transaction size."
  },
  {
    id: 39,
    lo: "12E: Underwriting Process",
    question: "Scenario: A life insurance agent adds notes to a specific section of the application detailing the applicant's professional demeanor, steady home environment, and personal relationship. This section is the:",
    options: [
      "Paramedical report",
      "Nonmedical supplement",
      "Agent's statement",
      "Attending physician's statement"
    ],
    answer: 2,
    explanation: "The agent's statement is the application section where the field representative records observations or facts they believe could impact risk selection."
  },
  {
    id: 40,
    lo: "12E: Underwriting Process",
    question: "Scenario: Apex Life has a vendor call a client directly over video chat to gather health answers and enter them directly into a computerized script. This method is called:",
    options: [
      "Bilateral numerical profiling",
      "Teleunderwriting",
      "Straight-through claims audit",
      "Field manual underwriting"
    ],
    answer: 1,
    explanation: "Teleunderwriting is an interactive method where a trained vendor or home office interviewer captures all key risk data via a telephone or video chat session."
  },
  {
    id: 41,
    lo: "12E: Underwriting Process",
    question: "Why do insurers often find that teleunderwriting yields MORE complete and thorough applicant information than traditional agent-completed paper layouts?",
    options: [
      "Because teleunderwriting questions are restricted to basic non-medical habits",
      "Because the system automatically waives the right to run MIB background checks",
      "Because teleunderwriters are legally authorized to bypass state privacy laws",
      "Because applicants often feel more comfortable sharing personal medical details with a professional stranger over the phone than with a local agent"
    ],
    answer: 3,
    explanation: "Real-world studies show that customers are more candid about personal health issues when talking anonymously to a professional teleunderwriter."
  },
  {
    id: 42,
    lo: "12E: Underwriting Process",
    question: "Scenario: Integrity Life evaluates an application. The client answers a set of health history questions on a form, and no physician or medical physical exam is required. This document is a:",
    options: [
      "Paramedical report",
      "Medical report",
      "Nonmedical supplement (statement of health)",
      "Attending physician's statement"
    ],
    answer: 2,
    explanation: "A nonmedical supplement (or statement of health) collects health history directly from the applicant without requiring physical medical exams."
  },
  {
    id: 43,
    lo: "12E: Underwriting Process",
    question: "Scenario: An examiner records an applicant's height, weight, blood pressure, and pulse, and records their answers to health questions. Under LOMA, this file is a:",
    options: [
      "Nonmedical supplement",
      "Attending physician's statement (APS)",
      "Full medical report",
      "Paramedical report"
    ],
    answer: 3,
    explanation: "A paramedical report captures clinical measurements (BP, height, weight, pulse) and health answers recorded by a trained paramedical examiner."
  },
  {
    id: 44,
    lo: "12E: Underwriting Process",
    question: "Scenario: SafeStep Mutual receives a document where a licensed physician completes a detailed medical questionnaire and performs a physical exam of the proposed insured. This form represents a:",
    options: [
      "Paramedical report",
      "MIB report",
      "Medical report",
      "Nonmedical supplement"
    ],
    answer: 2,
    explanation: "A medical report is a comprehensive document completed by both the applicant and a licensed physician, who conducts a physical examination."
  },
  {
    id: 45,
    lo: "12E: Underwriting Process",
    question: "Under LOMA, what is the 'MIB Group Inc. (MIB)'?",
    options: [
      "A not-for-profit membership corporation providing coded medical information to insurers in Canada and the U.S. about prior applications",
      "An internal audit team led by the medical underwriting director",
      "A government-run regulatory agency overseeing all independent broker-dealers",
      "A commercial pharmaceutical database keeping prescription histories"
    ],
    answer: 0,
    explanation: "The MIB is a cooperative, not-for-profit database that compiles coded disclosures and findings from prior insurance applications to protect against fraud."
  },
  {
    id: 46,
    lo: "12E: Underwriting Process",
    question: "Scenario: An underwriter needs the actual daily treatment records and clinical history from an applicant's personal cardiologist. The underwriter will order a(n):",
    options: [
      "Attending physician's statement (APS)",
      "MIB background pull",
      "Nonmedical supplement",
      "Paramedical report file"
    ],
    answer: 0,
    explanation: "An attending physician's statement (APS) is a targeted report requested from a doctor who has treated or is active in treating the applicant."
  },

  // ==========================================
  // OBJECTIVE 12F: Financial Underwriting and Personal Underwriting (47-55)
  // ==========================================
  {
    id: 47,
    lo: "12F: Financial & Personal UW",
    question: "Under LOMA Chapter 12, what are the three primary determinations made during 'financial underwriting'?",
    options: [
      "Whether the pricing assumptions are GAAP, IFRS, or SAP compliant",
      "Whether the client has a bank account, pays credit card interest, and uses electronic signatures",
      "Whether the agent's commission is a first-year, renewal, or trail rate",
      "Whether the proposed insured needs the coverage, has a reasonable relationship between the need and the amount, and can afford it"
    ],
    answer: 3,
    explanation: "Financial underwriting ensures the policy is structurally sound by verifying: (1) a real financial need exists, (2) the coverage amount matches that need, and (3) the buyer can afford the premiums."
  },
  {
    id: 48,
    lo: "12F: Financial & Personal UW",
    question: "Which of the following describes a recognized personal financial need that supports a legitimate purchase of individual life insurance?",
    options: [
      "Replacing standard general accounts with high-risk derivatives",
      "Family income protection, estate settlement, and charitable contributions",
      "Commercial stock speculation in separate accounts",
      "Paying off state insurance department licensing fees"
    ],
    answer: 1,
    explanation: "Legitimate personal life insurance needs include providing income for dependents (income protection), funding estate taxes/settlements, or making charitable gifts."
  },
  {
    id: 49,
    lo: "12F: Financial & Personal UW",
    question: "Scenario: An applicant with a modest annual salary of $30,000 applies for a $10 million life insurance policy. How should the financial underwriter interpret this transaction?",
    options: [
      "As an exempt transaction that does not require any evidence of insurability",
      "As a valuable way to increase the insurer's separate account assets",
      "As a standard, low-risk transaction that should be auto-approved by the jet unit",
      "As a potential indicator of antiselection or speculative hazard, requiring deep financial investigation"
    ],
    answer: 3,
    explanation: "Applying for coverage that is vastly disproportionate to an applicant's economic status signals potential adverse selection or speculative risks, triggering a detailed review."
  },
  {
    id: 50,
    lo: "12F: Financial & Personal UW",
    question: "Which of the following is defined as the process that evaluates lifestyle choices that can significantly affect the probable length of a proposed insured's life?",
    options: [
      "Bilateral numerical rating",
      "Annuity longevity matching",
      "Financial underwriting",
      "Personal underwriting"
    ],
    answer: 3,
    explanation: "Personal underwriting evaluates lifestyle and non-medical factors (hobbies, driving records, records of crime) that statistically impact mortality risk."
  },
  {
    id: 51,
    lo: "12F: Financial & Personal UW",
    question: "Scenario: An underwriter notes that an applicant has three citations for reckless speeding on their driving record. This assessment falls under which underwriting category?",
    options: [
      "Personal underwriting",
      "Actuarial pricing",
      "Medical underwriting",
      "Financial underwriting"
    ],
    answer: 0,
    explanation: "A reckless driving record is a lifestyle risk factor, making it a subject of personal underwriting rather than medical or financial review."
  },
  {
    id: 52,
    lo: "12F: Financial & Personal UW",
    question: "Which of the following represents a hazardous occupation or lifestyle factor that a personal underwriter must analyze?",
    options: [
      "Earning a high trail commission on variable products",
      "Participating in professional motorcycle racing, commercial aviation, or structural demolition",
      "Utilizing electronic application systems to submit files",
      "Working as an administrative accountant"
    ],
    answer: 1,
    explanation: "Dangerous hobbies or jobs (stunt driving, racing, demolition) statistically elevate accidental death rates, requiring personal underwriting adjustment."
  },
  {
    id: 53,
    lo: "12F: Financial & Personal UW",
    question: "To evaluate a proposed insured's personal and lifestyle risks, which supporting documents do underwriters commonly request?",
    options: [
      "Only the coordinates of general account corporate real estate",
      "The client's childhood school report cards",
      "Motor vehicle reports (MVR) and criminal history investigations",
      "Only the insurer's annual statement balance sheets"
    ],
    answer: 2,
    explanation: "MVRs track driving infractions, and criminal background checks highlight risk behaviors, serving as standard inputs for personal underwriting."
  },
  {
    id: 54,
    lo: "12F: Financial & Personal UW",
    question: "Why is financial underwriting an effective tool to guard against adverse selection (antiselection)?",
    options: [
      "It prevents premium rates from being filed with the state department",
      "It makes sure the amount of insurance requested is not excessive relative to the loss the beneficiary would suffer",
      "It allows the insurer to pay higher commissions to PPGAs",
      "It eliminates the need to review the applicant's credit history"
    ],
    answer: 1,
    explanation: "By aligning coverage amounts with the actual economic loss of a death, financial underwriting removes the incentive for speculation or high-risk gambling."
  },
  {
    id: 55,
    lo: "12F: Financial & Personal UW",
    question: "An underwriter orders a pharmaceutical database check. What is the value of this resource in evaluating an applicant's risk profile?",
    options: [
      "It determines the premium tax due on separate account annuities",
      "It acts as a substitute for an agent's license notice of appointment",
      "It provides a prescription history that indicates what treatments or medical conditions the applicant has",
      "It provides a history of the applicant's credit score"
    ],
    answer: 2,
    explanation: "Prescription drug databases provide immediate, objective medication histories, verifying the presence of medical conditions the applicant might have omitted."
  },

  // ==========================================
  // OBJECTIVE 12G: Numerical Rating System & General Risk Classes (56-64)
  // ==========================================
  {
    id: 56,
    lo: "12G: Numerical Rating System",
    question: "Scenario: Aegis Mutual uses an objective, mathematical point-based risk classification method where they calculate a final score to determine an applicant's risk class. This tool is the:",
    options: [
      "Table pricing schedule",
      "Actuarial formula manual",
      "Standard deviations model",
      "Numerical rating system"
    ],
    answer: 3,
    explanation: "The numerical rating system is a risk classification method that assigns a score representing the applicant's mortality risk to place them in the correct risk class."
  },
  {
    id: 57,
    lo: "12G: Numerical Rating System",
    question: "Under LOMA, how are 'debits' and 'credits' defined within the context of the numerical rating system?",
    options: [
      "Debits are set by regulators, whereas credits are set by local agents",
      "Debits correspond to standard risks, whereas credits apply only to preferred cases",
      "Debits are cash charges, whereas credits are premium reductions",
      "Debits are positive (+) values assigned to factors that increase mortality risk, and credits are negative (-) values for factors that decrease risk"
    ],
    answer: 3,
    explanation: "Debits (+) increase the score because they reflect unfavorable risk factors that elevate mortality. Credits (-) reduce the score because they reflect favorable factors that lower risk."
  },
  {
    id: 58,
    lo: "12G: Numerical Rating System",
    question: "What is the standard base score that most life insurance underwriters utilize to represent average or standard mortality?",
    options: [
      "50",
      "100",
      "200",
      "0"
    ],
    answer: 1,
    explanation: "The numerical rating system begins with a base score of 100, which represents standard (average) mortality."
  },
  {
    id: 59,
    lo: "12G: Numerical Rating System",
    question: "In the numerical rating system, is a HIGHER or a LOWER final score considered better for the proposed insured?",
    options: [
      "It depends entirely on whether they use electronic applications",
      "There is no difference; they are charged identical premiums",
      "Lower, because lower scores represent lower mortality risks and result in lower premium rates",
      "Higher, because higher scores yield larger commission rates for the agent"
    ],
    answer: 2,
    explanation: "Lower numerical ratings mean lower expected mortality (lower risk of premature death), which translates to lower standard or preferred premium rates."
  },
  {
    id: 60,
    lo: "12G: Numerical Rating System",
    question: "Scenario: Lora Gentry's rating calculation starts at a standard base of 100. Because she has a minor heart impairment, the system adds a debit of +50. Because her parents both lived healthily into their 80s, she receives a credit of -10. What is her final numerical rating?",
    options: [
      "140",
      "100",
      "150",
      "160"
    ],
    answer: 0,
    explanation: "Her score is calculated as: Base (100) + Debit (50) - Credit (10) = 140 (Figure 12.4)."
  },
  {
    id: 61,
    lo: "12G: Numerical Rating System",
    question: "Scenario: An insurer's underwriting guidelines state that any total numerical score between 100 and 125 is classified as standard. Applicant Ms. Gentry receives a final score of 140. How is Gentry classified?",
    options: [
      "Preferred risk",
      "Declined risk",
      "Standard risk",
      "Substandard risk"
    ],
    answer: 3,
    explanation: "Since her rating of 140 exceeds the standard upper limit (125), Gentry exhibits above-average mortality risk and is classified as a substandard risk."
  },
  {
    id: 62,
    lo: "12G: Numerical Rating System",
    question: "Scenario: Juan has excellent cardiovascular health and a clean driving record, earning a final numerical score of 85. If standard is 100-125, Juan qualifies for the:",
    options: [
      "Preferred class",
      "Declined class",
      "Standard class",
      "Substandard class"
    ],
    answer: 0,
    explanation: "Expected mortality lower than standard (represented by a score of 85, below the standard base of 100) places Juan in the preferred class (Figure 12.4)."
  },
  {
    id: 63,
    lo: "12G: Numerical Rating System",
    question: "If positive numbers (debits) are assigned to risk factors in the numerical rating system, these factors are statistially associated with:",
    options: [
      "An increase in premium tax write-offs",
      "A decrease in the proposed insured's mortality risk",
      "Zero overall impact on claims occurrence",
      "An increase in the proposed insured's mortality risk"
    ],
    answer: 3,
    explanation: "Debits reflect statistically proven negative factors (heart disease, speeding, skydiving) that increase mortality risk, pushing the rating upward."
  },
  {
    id: 64,
    lo: "12G: Numerical Rating System",
    question: "In calculating an applicant's rating, credits (negative numbers) are commonly assigned to which of the following?",
    options: [
      "Having an expired state sales license",
      "Participation in active structural demolition work",
      "A history of cardiac arrest",
      "Exceptional longevity in the applicant's biological parents, or excellent personal cardiovascular scores"
    ],
    answer: 3,
    explanation: "Credits reflect favorable genetic or lifestyle factors (e.g., long-lived parents, outstanding cholesterol/BP) that lower mortality risk."
  },

  // ==========================================
  // OBJECTIVE 12H: Applying the Premium Rate (65-73)
  // ==========================================
  {
    id: 65,
    lo: "12H: Applying the Premium Rate",
    question: "Under LOMA Chapter 12, what are the 'rate manuals' used by life insurance underwriters?",
    options: [
      "Books or electronic databases containing an insurer's risk classes and associated premium rates for specific products",
      "Instruction guides explaining how straight-through processing works",
      "Regulatory manuals outlining how to audit general account portfolios",
      "A set of rules for calculating agent commission vesting rights"
    ],
    answer: 0,
    explanation: "Rate manuals list the specific monetary rates per insurance coverage unit ($1,000 of face amount) associated with each risk class and age group."
  },
  {
    id: 66,
    lo: "12H: Applying the Premium Rate",
    question: "Scenario: Shanna’s rate manual lists a premium rate of $4.50 per coverage unit. If Shanna purchases a standard policy containing 100 coverage units ($100,000 of face value), what is her annual premium?",
    options: [
      "100.00",
      "10000.00",
      "450.00",
      "4500.00"
    ],
    answer: 2,
    explanation: "The premium is calculated as the unit rate magnified by the number of coverage units: $4.50 x 100 units = $450.00 (Figure 12.4)."
  },
  {
    id: 67,
    lo: "12H: Applying the Premium Rate",
    question: "Scenario: Leila Appelbaum’s numerical rating is 200, placing her in the substandard class. Under the 'table rating method' of premium adjustment, how is her premium determined?",
    options: [
      "She is assigned to a specific substandard rating table based on her score, with an extra premium calculated as a percentage multiplier of standard mortality",
      "An additional flat fee of $3.00 is added per year regardless of policy size",
      "Her premium is paid entirely out of the insurer's separate account assets",
      "She is charged a flat standard premium, and her benefits are cut by 50%"
    ],
    answer: 0,
    explanation: "The table rating method segments substandard risks into incremental tables. The premium for each table incorporates a percentage surcharge on top of standard base mortality rates."
  },
  {
    id: 68,
    lo: "12H: Applying the Premium Rate",
    question: "Under LOMA guidelines, for what type of substandard risk is the 'table rating method' considered most actuarially appropriate?",
    options: [
      "When the risk shows a pattern of extra mortality that increases with age, such as in diabetic or overweight patients",
      "When the risk remains completely flat and constant across all life stages",
      "When the extra mortality risk is highly temporary and is expected to disappear in six months",
      "When the policyholder belongs to a large multi-employer group"
    ],
    answer: 0,
    explanation: "The table rating method matches risks (like obesity, diabetes) where the margin of extra mortality compared to standard peers grows wider as the cohort ages."
  },
  {
    id: 69,
    lo: "12H: Applying the Premium Rate",
    question: "Scenario: Leila's policy is rated using the 'flat extra premium method' instead of a table. Under this method, how does the insurer adjust the premium charge?",
    options: [
      "By charging her a standard rate but delaying her coverage by five years",
      "By multiplying her standard premium rate by a constant percentage of 300%",
      "By adding a specified, fixed extra dollar amount to the standard premium rate for every $1,000 of coverage",
      "By making her agent waive all future trail commissions"
    ],
    answer: 2,
    explanation: "The flat extra premium method adds a constant monetary surcharge (e.g., $3.00 per $1,000) directly to the base rate to cover specific risk exposures."
  },
  {
    id: 70,
    lo: "12H: Applying the Premium Rate",
    question: "For what specific type of risk is the 'flat extra premium method' considered most appropriate by life underwriters?",
    options: [
      "When the extra mortality risk is expected to remain constant or decrease with age",
      "Only for variable annuities with guaranteed separate accounts",
      "When the applicant is classified under the preferred risk class",
      "When the extra risk is statistically shown to increase exponentially as the insured ages"
    ],
    answer: 0,
    explanation: "Flat extra charges fit static or diminishing hazards, such as an applicant's dangerous sporting hobbies or a passenger aviation license."
  },
  {
    id: 71,
    lo: "12H: Applying the Premium Rate",
    question: "Scenario: Shanna Appelbaum's standard premium rate is $4.50. Under the flat extra premium method, her hazard triggers an extra $3.00 per unit charge. For 100 units of coverage, what is her total annual premium?",
    options: [
      "300.00",
      "750.00",
      "1000.00",
      "450.00"
    ],
    answer: 1,
    explanation: "The rate is: Standard ($4.50) + Flat Extra ($3.00) = $7.50 per unit. For 100 units: $7.50 x 100 = $750.00."
  },
  {
    id: 72,
    lo: "12H: Applying the Premium Rate",
    question: "If an underwriter evaluates an applicant whose score is 500 (declined risk), what action does the underwriter take regarding premium rates?",
    options: [
      "The underwriter refers the case to a premium tax examiner",
      "The underwriter issues a standard policy but files a notice of appointment",
      "The underwriter applies a flat $50.00 surcharge",
      "The underwriter does not apply a premium rate; instead, they notify the agent about the declined status"
    ],
    answer: 3,
    explanation: "Declined risks cannot be insured at any standard or substandard premium rate. The underwriter issues a declination and alerts the field agent."
  },
  {
    id: 73,
    lo: "12H: Applying the Premium Rate",
    question: "In standard individual life underwriting, why must insurers charge premiums that are proportionate to the risk each proposed insured represents?",
    options: [
      "To treat all policyholders equitably, ensuring that lower-risk individuals do not subsidize higher-risk individuals",
      "To guarantee that all applications are accepted by the jet unit",
      "To ensure maximum profits for the state insurance departments",
      "To eliminate the need to maintain statutory reserve assets"
    ],
    answer: 0,
    explanation: "Charging proportionate premiums is the essence of underwriting equity, ensuring that each participant's cost corresponds strictly to their statistical risk profile."
  },

  // ==========================================
  // OBJECTIVE 12I: Underwriting & Other Organizational Functions (74-82)
  // ==========================================
  {
    id: 74,
    lo: "12I: Organizational Relationships",
    question: "How do 'actuaries' and 'underwriters' collaborate dynamically to protect a life insurance company's financial solvency?",
    options: [
      "Actuaries underwrite individual applications, while underwriters set pricing policy with regulators",
      "Actuaries verify agent licenses, while underwriters audit billing files",
      "Actuaries create social media ads, while underwriters manage general accounts",
      "Actuaries establish pricing assumptions based on average population risks, and underwriters ensure that the actual risk accepted matches those assumptions"
    ],
    answer: 3,
    explanation: "This is a key LOMA dynamic: Actuaries establish the mathematical pricing models, and underwriters evaluate incoming applications to make sure the risk portfolio aligns with those pricing expectations."
  },
  {
    id: 75,
    lo: "12I: Organizational Relationships",
    question: "Scenario: Standard Life's marketing department identifies a growing demand for policies targeting active retirees. They consult with the underwriting department to discuss how this will impact:",
    options: [
      "The statutory tax rate of the state",
      "The PPGA first-year commission schedules",
      "The insurer's underwriting guidelines, helping balance risk selection with customer demand details",
      "The corporate clearing house locations"
    ],
    answer: 2,
    explanation: "Marketing and Underwriting cooperate to balance risk parameters with competitive market opportunities, designing guidelines that permit safe and appealing sales."
  },
  {
    id: 76,
    lo: "12I: Organizational Relationships",
    question: "Scenario: Millennium Life wants to pass on a portion of its very large risk exposures to an external wholesale risk-bearing partner. Who must collaborate to finalize these contract guidelines?",
    options: [
      "The billing department and the IT developer",
      "Reinsurance staff and home-office underwriters",
      "The customer service agent and the primary beneficiary",
      "The Chief Compliance Officer and the state insurance commissioner"
    ],
    answer: 1,
    explanation: "Underwriters consult with Reinsurance specialists to design risk limits and alignment parameters that satisfy both primary and reinsurance treaties."
  },
  {
    id: 77,
    lo: "12I: Organizational Relationships",
    question: "The underwriting department interacts closely with the 'compliance' and 'legal' teams to make sure that:",
    options: [
      "The company's logo is correctly trademarked",
      "The company earns at least a 10% profit on common stock indices",
      "All risk classification practices comply with laws, and the company fulfills its legal policy contract duties",
      "All underwriters hold active FINRA licenses"
    ],
    answer: 2,
    explanation: "Legal and compliance departments ensure that underwriting operations meet all local privacy, fair practice, and contract administration statutes."
  },
  {
    id: 78,
    lo: "12I: Organizational Relationships",
    question: "Scenario: Centennial Life's 'claims department' handles a file where the insured died only six months after buying a policy. Why do claims examiners contact the underwriting department?",
    options: [
      "To change the policy's risk class",
      "To move the policy's cash value into the general corporate account",
      "To pay a bonus to the agent who wrote the application",
      "To get help analyzing the files because claims filed during the contestable period require checking the original underwriting disclosures"
    ],
    answer: 3,
    explanation: "During the contestable period, claims staff investigate the original underwriting file to verify that the insured did not make key misrepresentations or omissions when applying."
  },
  {
    id: 79,
    lo: "12I: Organizational Relationships",
    question: "Scenario: During financial underwriting of a complex corporate business application, the underwriter must verify the applicant's corporate balance sheet and income statements. Which internal department assists him with this analysis?",
    options: [
      "Accounting staff",
      "Information Technology staff",
      "Customer Service staff",
      "Reinsurance agents"
    ],
    answer: 0,
    explanation: "Accounting staff help underwriters decipher complex corporate tax returns and statements to verify financial relationships and affordability (Figure 12.1)."
  },
  {
    id: 80,
    lo: "12I: Organizational Relationships",
    question: "Scenario: Aegis Life wants to upgrade its legacy system so that automated business rules engines (BRE) can execute exception-based underwriting. Which department supports this development?",
    options: [
      "Marketing division",
      "Claims administration staff",
      "Agency operations team",
      "Information Technology (IT) staff"
    ],
    answer: 3,
    explanation: "IT staff build, configure, and troubleshoot the databases and automated workflow systems supporting modern underwriting decision-making."
  },
  {
    id: 81,
    lo: "12I: Organizational Relationships",
    question: "Why do 'customer service representatives' frequently coordinate with home-office underwriters?",
    options: [
      "To pay first-year commissions directly to PPGAs",
      "To obtain accurate information about why a policy was rated or delayed in order to answer client questions",
      "To write the legal code for new state-level compliance mandates",
      "To adjust the base rating of Standard Mortality"
    ],
    answer: 1,
    explanation: "Customer service depends on underwriters to supply the background details necessary to resolve applicant or policyholder queries about delays or surcharges."
  },
  {
    id: 82,
    lo: "12I: Organizational Relationships",
    question: "If an insurer's actual overall claims experience is significantly higher than actuaries anticipated, how should the company respond?",
    options: [
      "By converting the company's accounting from GAAP to SAP rules",
      "By verifying if underwriters have deviated from the core philosophy and potentially tightening the underwriting guidelines",
      "By immediately doubling first-year agent commission scales",
      "By shutting down the marketing department"
    ],
    answer: 1,
    explanation: "Heavy claim trends indicate that underwriters are accepting excessive risks or that pricing assumptions are off, requiring an adjustment of guidelines."
  },

  // ==========================================
  // OBJECTIVE 12J: Group Insurance Underwriting Process & Risk Factors (83-91)
  // ==========================================
  {
    id: 83,
    lo: "12J: Group Underwriting",
    question: "Under LOMA, what is the primary key difference between individual life underwriting and group life insurance underwriting?",
    options: [
      "Group underwriting requires 100% of participants to pass a physical exam",
      "Individual underwriting evaluates the employer, while group evaluates the state",
      "Individual underwriting is subject to the GLB Act, while group is exempt",
      "Group underwriting evaluates information about the composition and risk of the group as a whole rather than assessing individual members"
    ],
    answer: 3,
    explanation: "Standard group underwriting looks at the collective risk characteristics (average age, stability of employment) of the whole group instead of medical histories of individual group members."
  },
  {
    id: 84,
    lo: "12J: Group Underwriting",
    question: "Under what specific condition might a group life underwriter require individual evidence of insurability from individual group members?",
    options: [
      "When the corporate group is very large (over 1,000 employees)",
      "When the group is very small, or when a member tries to enroll in the plan after the standard enrollment deadline",
      "Only if the supervisor is represented by an independent broker",
      "Whenever the employer's industry is highly profitable"
    ],
    answer: 1,
    explanation: "To prevent anti-selection (people only enrolling because they fell ill), underwriters require individual health verification for late-entrants or tiny groups."
  },
  {
    id: 85,
    lo: "12J: Group Underwriting",
    question: "Scenario: A group underwriter notes that a prospective employer group includes a few individuals with severe medical conditions. How does this impact the group underwriting decision for a large cohort?",
    options: [
      "The underwriter is not concerned with the high risk of a few members, but rather focuses on whether the group as a whole represents an acceptable risk",
      "The underwriter must decline the entire employer group's application",
      "The underwriter must exclude those specific individuals from coverage",
      "The underwriter represents them with separate account assets"
    ],
    answer: 0,
    explanation: "Because group plans blend risk, large cohorts naturally contain some high-risk individuals. Underwriters focus on the collective, average viability of the corporate group."
  },
  {
    id: 86,
    lo: "12J: Group Underwriting",
    question: "Group life insurance contracts in the United States are subject to state laws that are frequently modeled after the regulatory template created by the:",
    options: [
      "U.S. SEC",
      "Canadian Life and Health Insurance Association (CLHIA)",
      "Fair Credit Reporting Act (FCRA)",
      "NAIC Group Life Insurance Model Act"
    ],
    answer: 3,
    explanation: "The National Association of Insurance Commissioners (NAIC) Group Life Insurance Model Act sets guidelines regarding eligibility, contract terms, and minimum participants."
  },
  {
    id: 87,
    lo: "12J: Group Underwriting",
    question: "Scenario: An employer submits a document to an insurer detailing their corporate stats and requesting a coverage bid. Under LOMA, this inquiry document is a:",
    options: [
      "Request for proposal (RFP)",
      "Proposal for insurance",
      "Certificate of insurance",
      "Master application"
    ],
    answer: 0,
    explanation: "An RFP is the official document that describes group demographics and coverage needs and invites insurers to submit premium bids (Figure 12.5)."
  },
  {
    id: 88,
    lo: "12J: Group Underwriting",
    question: "Scenario: After evaluating a group file, standard underwriting approves the terms and returns a detailed specifications bid to the group. This bid document is the:",
    options: [
      "Master application form",
      "Certificate draft outline",
      "Proposal for insurance",
      "RFP response memo"
    ],
    answer: 2,
    explanation: "The proposal for insurance is the official bid outlining the coverage specifications and premium rates proposed by the insurer (Figure 12.5)."
  },
  {
    id: 89,
    lo: "12J: Group Underwriting",
    question: "Scenario: The employer accepts the insurer's group bid. An authorized officer of the employer signs the final contract request form. This form is the:",
    options: [
      "Bilateral proxy statement",
      "Master application",
      "RFP waiver ledger",
      "Certificate of insurability"
    ],
    answer: 1,
    explanation: "The master application is the formal group insurance application containing plan provisions, signed by the employer's authorized representative to request coverage."
  },
  {
    id: 90,
    lo: "12J: Group Underwriting",
    question: "Who are the actual legal parties to the 'master group insurance contract' issued by the life insurance company?",
    options: [
      "The state insurance department and the MIB Group",
      "The insurance company and the group policyholder (the employer/sponsor)",
      "The individual employees and their beneficiaries",
      "The field agent and the Chief Underwriter"
    ],
    answer: 1,
    explanation: "The contract is a bilateral agreement between the insurer and the employer (the group policyholder). Individual employees are not legal parties to the master contract."
  },
  {
    id: 91,
    lo: "12J: Group Underwriting",
    question: "Scenario: Mark is hired by an accounting firm and joins their group life plan. Instead of a master policy, Mark receives a document describing his rights and coverage. This is a:",
    options: [
      "Evidence of insurability statement",
      "Specialized medical profile",
      "Master application copy",
      "Certificate of insurance"
    ],
    answer: 3,
    explanation: "A certificate of insurance describes the coverage terms of the master contract and outlines the rights and benefits of the individual insured employee."
  },

  // ==========================================
  // OBJECTIVE 12K: Laws and Regulations (92-100)
  // ==========================================
  {
    id: 92,
    lo: "12K: Laws & Regulations",
    question: "Under LOMA guidelines, premium risk discrimination by underwriters is legally permitted as long as it is based on:",
    options: [
      "The applicant's household net worth as reported in personal tax statements",
      "Recognized actuarial principles or the insurer's own actual or reasonably anticipated experience",
      "The personal preferences of the company's chief marketing director",
      "The applicant's gender, marital status, or national origin"
    ],
    answer: 1,
    explanation: "Underwriting is built on fair discrimination. Surcharges or ratings are legal if backed by sound statistical evidence, actual historical payouts, or scientific actuarial rules."
  },
  {
    id: 93,
    lo: "12K: Laws & Regulations",
    question: "Underfair discrimination laws in almost all jurisdictions, which of the following represents an illegal basis for an underwriting decision?",
    options: [
      "Participation in structural demolition work",
      "The applicant's race, religion, or national origin",
      "A documented record of multiple reckless driving offenses",
      "A history of coronary bypass surgery"
    ],
    answer: 1,
    explanation: "Basing risk decisions on race, religion, or national origin is strictly prohibited and constitutes illegal, unfair discrimination."
  },
  {
    id: 94,
    lo: "12K: Laws & Regulations",
    question: "Scenario: Sentinel Mutual uses a consumer report to evaluate an applicant's background. Which U.S. federal law regulates how Sentinel obtains and utilizes this consumer data?",
    options: [
      "The Fair Credit Reporting Act (FCRA)",
      "The Gramm-Leach-Bliley Act (GLBA)",
      "The NAIC Model Privacy Act",
      "The PIPEDA statute"
    ],
    answer: 0,
    explanation: "The U.S. Fair Credit Reporting Act (FCRA) regulates the reporting, accuracy, disclosures, and use of consumer background or credit reports."
  },
  {
    id: 95,
    lo: "12K: Laws & Regulations",
    question: "Scenario: SafeStep Mutual declines an applicant's file because of an adverse finding in a commercial consumer background check. Under the FCRA, what is SafeStep's legal duty?",
    options: [
      "To pay a fine to the state insurance department",
      "To demand that the competitor company underwrite the policy standard",
      "To inform the applicant of her right to obtain a free copy of the report and to dispute its contents with the consumer reporting agency",
      "To keep the reasons for declination completely confidential from the applicant"
    ],
    answer: 2,
    explanation: "If an insurer declines coverage because of consumer report data, they must inform the consumer and identify the agency, allowing them to verify or dispute the findings."
  },
  {
    id: 96,
    lo: "12K: Laws & Regulations",
    question: "Scenario: Aegis Life provides clients with a detailed disclosure of its records-confidentiality rules at inception and annually, and allows clients to 'opt out' of data sharing with third parties. This complies with:",
    options: [
      "The NAIC Group Life Insurance Model Act",
      "The Fair Credit Reporting Act (FCRA)",
      "The PIPEDA statute",
      "The Gramm-Leach-Bliley (GLB) Act"
    ],
    answer: 3,
    explanation: "The U.S. federal Gramm-Leach-Bliley (GLB) Act governs financial privacy, requiring upfront/annual disclosures and enabling consumers to block (opt out of) sharing with external businesses."
  },
  {
    id: 97,
    lo: "12K: Laws & Regulations",
    question: "Under the GLB Act, what specific term refers to personally identifiable financial data that is not publicly available?",
    options: [
      "Evidence of insurability data",
      "Public information",
      "Nonpublic personal information",
      "Disclosure documentation"
    ],
    answer: 2,
    explanation: "GLB protects 'nonpublic personal information'—individually identifiable financial, credit, or medical data that is not freely accessible to the public."
  },
  {
    id: 98,
    lo: "12K: Laws & Regulations",
    question: "Scenario: An insurer in the state of Ohio incorporates strict protocols on how personal data is gathered, evaluated, and shared, based on a template passed by many U.S. states. This model template is the:",
    options: [
      "FCRA disclosure manual",
      "NAIC Model Privacy Act",
      "Ohio General Account Privacy Act",
      "PIPEDA Canadian statute"
    ],
    answer: 1,
    explanation: "The NAIC Model Privacy Act is a state-level policy template establishing standards for gathering, retaining, and sharing consumer data in insurance transactions."
  },
  {
    id: 99,
    lo: "12K: Laws & Regulations",
    question: "Scenario: A Canadian insurer manages customer directories in Ontario. Which federal Canadian law governs how private-sector organizations collect and disclose personal data?",
    options: [
      "The Securities and Exchange Commission Act",
      "The Personal Information Protection and Electronic Documents Act (PIPEDA)",
      "The Gramm-Leach-Bliley Act (GLBA)",
      "The Canadian Life and Health Insurance Association (CLHIA) guidelines"
    ],
    answer: 1,
    explanation: "In Canada, the federal Personal Information Protection and Electronic Documents Act (PIPEDA) is the core privacy framework for the commercial sector."
  },
  {
    id: 100,
    lo: "12K: Laws & Regulations",
    question: "Scenario: While PIPEDA is Canada's federal private-sector privacy framework, in which provinces must insurers check for substantially similar provincial privacy laws that govern instead?",
    options: [
      "Ontario, Manitoba, and Saskatchewan",
      "Yukon, Northwest Territories, and Nunavut",
      "Quebec, British Columbia, and Alberta",
      "Nova Scotia, New Brunswick, and Newfoundland"
    ],
    answer: 2,
    explanation: "Quebec, BC, and Alberta have implemented provincial privacy statutes that replace default PIPEDA jurisdiction for commercial transactions (Figure 12.6)."
  }
];
