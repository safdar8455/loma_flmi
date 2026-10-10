import { Question } from '../../types';

export const loma320Chapter9Questions: Question[] = [
  // ==========================================
  // OBJECTIVE 9A: AGENTS & AGENCY CONTRACTS (Q1 - Q8)
  // ==========================================
  {
    id: 1,
    lo: "9A: Define an agent and identify the components of an agency contract",
    question: "During a consultation, a prospect refers to the insurance advisor as 'my agent' and assumes the agent represents them in securing a policy. In legal terms, who does an insurance sales agent officially represent during interactions with customers?",
    options: [
      "The customer, who receives the advice and pays the premiums",
      "The state insurance department that regulates the transaction",
      "The issuing insurance company (the principal)",
      "The registered broker-dealer that clearing the business"
    ],
    answer: 2,
    explanation: "Legally, an insurance agent is the representative of the insurer (the principal), not the customer, and is authorized under an agency contract to act on behalf of the issuing company."
  },
  {
    id: 2,
    lo: "9A: Define an agent and identify the components of an agency contract",
    question: "An insurance company wishes to establish a formal relationship with a new sales representative. The written agreement that defines the representative's role, responsibilities, limits of authority, and compensation structure is known as:",
    options: [
      "An agency contract",
      "A letters patent",
      "A prospectus draft",
      "A customer suitability statement"
    ],
    answer: 0,
    explanation: "An agency contract is a written agreement between the agent and the insurer that defines the agent's role and responsibilities and describes the agent's compensation."
  },
  {
    id: 3,
    lo: "9A: Define an agent and identify the components of an agency contract",
    question: "A company legal department is drafting a standard contract for sales representatives. They want to ensure the agent is classified as an employee rather than an independent contractor. Which of the following is typically true regarding employee sales agents compared to independent contractors?",
    options: [
      "Employees are totally free from any company direction in the performance of their daily tasks.",
      "Employees are subject to specific company direction, such as standard administrative desk hours, but generally have more rights under laws like antidiscrimination or unemployment codes.",
      "Employees do not have any rights under federal antidiscrimination laws.",
      "Employees are paid entirely via third-party overrides with no direct corporate benefits."
    ],
    answer: 1,
    explanation: "Unlike independent contractors, employee agents are subject to company rules (e.g., office hours) but enjoy greater protection and rights under social, labour, or antidiscrimination laws."
  },
  {
    id: 4,
    lo: "9A: Define an agent and identify the components of an agency contract",
    question: "An agent meets with a client, completes an application for individual whole life insurance, provides a premium receipt, and collects the initial payment. Based on standard agency agreements, which of the following is a power typically granted to agents?",
    options: [
      "The authority to bind the company to the coverage immediately",
      "The authority to collect renewal premiums directly and keep them in a personal account",
      "The authority to solicit applications, issue receipts, and collect initial premiums",
      "The authority to change premium rates for substandard risks on the spot"
    ],
    answer: 2,
    explanation: "Most agency contracts authorize agents to solicit applications, issue receipts, and collect initial premiums, but do not allow them to bind coverage or collect subsequent renewal premiums."
  },
  {
    id: 5,
    lo: "9A: Define an agent and identify the components of an agency contract",
    question: "An agent wants to secure a deal with a high-net-worth client and proposes a customized premium discount not listed in the company's official rate sheet. What is the status of this action under standard agency contracts?",
    options: [
      "It is fully authorized, as agents have direct implied authority to negotiate custom rates.",
      "It is prohibited, as agency contracts explicitly bar agents from modifying premium rates or altering policy provisions.",
      "It is permitted only if the client signs an arbitration waiver.",
      "It is allowed if the agent registers the discount with the SEC beforehand."
    ],
    answer: 1,
    explanation: "Standard agency contracts strictly prohibit agents from changing premium rates, altering policy contracts, or incurring debts on the insurance company's behalf."
  },
  {
    id: 6,
    lo: "9A: Define an agent and identify the components of an agency contract",
    question: "Under the legal duties established by an agency contract, what represents the primary accountability of an agent toward their issuing insurance carrier (the principal)?",
    options: [
      "Upholding loyalty, acting in good faith, accounting for company funds, and following operating policies",
      "Assuming all underwriting risk for the prospective insureds",
      "Filing the financial statements with the NAIC every fiscal quarter",
      "Providing Legal defense for the customer in a contract dispute"
    ],
    answer: 0,
    explanation: "An agent owes the insurer the duties of loyalty, good faith, careful accounting of company funds, prompt remittance of premiums, and strict adherence to corporate operating guidelines."
  },
  {
    id: 7,
    lo: "9A: Define an agent and identify the components of an agency contract",
    question: "A sales agent is reviewing their agency contract's compensation clauses. Which of the following describes the most common default method of compensation for life insurance agents, and how is it managed for policy replacements?",
    options: [
      "Most are paid a flat salary, and replacements carry mandatory double overrides.",
      "Most are paid on a commission basis, and insurers reserve the right to reduce or revise commissions on policies that replace existing coverage with the same carrier.",
      "Most are paid under assets under management (AUM) fees, which are exempt from replacement audits.",
      "Most are paid via flat, non-negotiable referral fees issued by the SEC."
    ],
    answer: 1,
    explanation: "Commissions are the primary method of compensation, and insurers typically reserve the rights to scale down or withhold commissions for transactions that replace existing policies with the same insurer."
  },
  {
    id: 8,
    lo: "9A: Define an agent and identify the components of an agency contract",
    question: "Vanguard Life's agency contract specifies that agents must achieve a set level of active sales each quarter and maintain positive policy retention. These standards are classified as:",
    options: [
      "Fiduciary mandates under ERISA",
      "Production and persistency requirements",
      "Licensing reciprocity guidelines",
      "Nonforfeiture minimum boundaries"
    ],
    answer: 1,
    explanation: "Agency contracts usually specify minimum production (sales volume) and persistency (retention of active policies) rates that agents must achieve to remain contracted or stay eligible for benefits."
  },

  // ==========================================
  // OBJECTIVE 9B: TYPES OF AGENTS & REPRESENTATIVES (Q9 - Q17)
  // ==========================================
  {
    id: 9,
    lo: "9B: Distinguish among affiliated insurance sales agents, nonaffiliated insurance sales agents, and salaried sales representatives",
    question: "An agent is hired by a major carrier. They are trained directly by that company, work out of an office supplied by the firm, and sell primarily the products of that single carrier. This type of agent is classified as a:",
    options: [
      "Affiliated agent",
      "Nonaffiliated broker",
      "Salaried group representative",
      "Independent producer group specialist"
    ],
    answer: 0,
    explanation: "An affiliated agent sells primarily the products of a single company, which recruits, trains, and heavily controls the activities of the agent."
  },
  {
    id: 10,
    lo: "9B: Distinguish among affiliated insurance sales agents, nonaffiliated insurance sales agents, and salaried sales representatives",
    question: "An insurance company's primary corporate salesforce operates out of branch offices, under exclusive contracts to represent the brand. This full cohort of career agents is collectively referred to as the company's:",
    options: [
      "Brokerage general alliance",
      "Field force",
      "Platform cohort",
      "Registered investment advisors"
    ],
    answer: 1,
    explanation: "Insurers refer to their collective network of career agents as the 'field force,' who work daily through local offices known as 'field offices.'"
  },
  {
    id: 11,
    lo: "9B: Distinguish among affiliated insurance sales agents, nonaffiliated insurance sales agents, and salaried sales representatives",
    question: "A career agent with Apex Life meets a client who has a severe respiratory condition and fails Apex's standard underwriting criteria. Under which exception can the career agent typically place this substandard business with a competitor?",
    options: [
      "Career agents can always place any policy randomly with any carrier whenever they choose to bypass home office underwriting.",
      "Most insurers allow career agents to place a substandard risk with another carrier if their own company does not offer the required coverage or rejects the client's profile.",
      "They cannot place this risk elsewhere; career agents are barred by federal law from ever writing policies with alternative carriers.",
      "They can place the risk only if the client completes a FINRA Rule 2210 disclosure statement."
    ],
    answer: 1,
    explanation: "Under certain circumstances, such as when an applicant is a substandard risk that the primary insurer will not cover, career agents are allowed to place that policy with an exterior carrier."
  },
  {
    id: 12,
    lo: "9B: Distinguish among affiliated insurance sales agents, nonaffiliated insurance sales agents, and salaried sales representatives",
    question: "When analyzing sales office structures, what is the main distinction between a branch office and a general agency (GA)?",
    options: [
      "Branch offices are run by GAs with zero carrier funds, while general agencies are entirely funded by the corporate home office.",
      "Branch offices are established and financed by the insurer, with staff who are elements of corporate staff, whereas general agencies are established and financed by an independent General Agent.",
      "Branch offices only sell to institutional groups, while general agencies focus on direct digital channels.",
      "There is no legal difference; both terms are used interchangeably under NAIC rules."
    ],
    answer: 1,
    explanation: "Branch offices are funded by the insurer (with branch managers as employees), while a general agency is an independent business run and financed by the General Agent (GA)."
  },
  {
    id: 13,
    lo: "9B: Distinguish among affiliated insurance sales agents, nonaffiliated insurance sales agents, and salaried sales representatives",
    question: "An experienced insurance representative works without exclusive corporate ties. They contract with five different carriers, receive no direct office support or sales training from them, and submit client applications to whichever company provides the best fit. This individual is a:",
    options: [
      "Affiliated career agent",
      "Nonaffiliated agent (or broker)",
      "Salaried sales representative",
      "Platform employee"
    ],
    answer: 1,
    explanation: "Nonaffiliated agents (brokers or independent agents) do not have exclusive contracts, may submit applications to any carrier they have an agreement with, and require minimal support from insurers."
  },
  {
    id: 14,
    lo: "9B: Distinguish among affiliated insurance sales agents, nonaffiliated insurance sales agents, and salaried sales representatives",
    question: "Several large independent brokers band together to establish a specialized entity. This organization negotiates higher commission overrides, creates exclusive custom-labeled products with insurers, and focuses heavily on high-net-worth consumers. What is this organization called?",
    options: [
      "A platform agency",
      "A producer group",
      "A central depository",
      "An in-house clearing firm"
    ],
    answer: 1,
    explanation: "A producer group is an organization of independent agents or brokers that negotiates premium, product, and services packages with insurance carriers, often serving affluent segments."
  },
  {
    id: 15,
    lo: "9B: Distinguish among affiliated insurance sales agents, nonaffiliated insurance sales agents, and salaried sales representatives",
    question: "An independent sales agency receives product lines from a carrier and distributes them to select local independent brokers. They also provide administrative assistance and answer underwriting inquiries for those brokers. This firm is known as a:",
    options: [
      "Brokerage general agency (BGA)",
      "Registered advisory custodian",
      "Multiline direct-clearing group",
      "Bancassurance advisory terminal"
    ],
    answer: 0,
    explanation: "A brokerage general agency (BGA) is an independent firm that works for an insurance company and sells one or more insurance products to select independent agents or brokers, supporting them with service."
  },
  {
    id: 16,
    lo: "9B: Distinguish among affiliated insurance sales agents, nonaffiliated insurance sales agents, and salaried sales representatives",
    question: "An agent sells life insurance, individual health plans, variable annuities, and homeowner's insurance to various clients on behalf of a group of financially connected companies. They maintain their own office, hire support staff with no carrier allowance, and cross-sell products aggressively. This agent is a:",
    options: [
      "Career platform specialist",
      "Multiline agent",
      "Salaried group principal",
      "Registered investment advisor"
    ],
    answer: 1,
    explanation: "A multiline agent distributes a broad portfolio of financial options (life, health, annuities, property/casualty) for related insurers, typically as an independent contractor operating a multiple-line agency."
  },
  {
    id: 17,
    lo: "9B: Distinguish among affiliated insurance sales agents, nonaffiliated insurance sales agents, and salaried sales representatives",
    question: "SafeHaven Mutual employs a team of specialists to handle their corporate group insurance lines. These professionals are paid a regular salary rather than commissions, design complex group proposals, and visit corporate sites to enroll employees. These individuals are:",
    options: [
      "Nonaffiliated brokers",
      "Salaried sales representatives (or group representatives)",
      "Independent financial planning advisors",
      "Registered clearing principals"
    ],
    answer: 1,
    explanation: "Salaried sales representatives (or group representatives) are employees paid a salary to support sales and service group products, often helping enroll workers at worksites."
  },

  // ==========================================
  // OBJECTIVE 9C: FINANCIAL ADVISORS (Q18 - Q25)
  // ==========================================
  {
    id: 18,
    lo: "9C: Describe the role of financial advisors in selling insurance and providing other types of advisory services",
    question: "A client wants a comprehensive review of their household income, assets, retirement timelines, and savings patterns. They hire a professional who conducts a detailed analysis and delivers a written outline to help reach these goals. This professional is best described as a:",
    options: [
      "Career field agent",
      "Financial advisor (or planner)",
      "BGA administrator",
      "Wholesaler liaison"
    ],
    answer: 1,
    explanation: "A financial advisor or planner is a professional who analyzes a client's personal financial circumstances and goals and prepares a written strategic plan to meet those goals."
  },
  {
    id: 19,
    lo: "9C: Describe the role of financial advisors in selling insurance and providing other types of advisory services",
    question: "An advisor is registered with the Securities and Exchange Commission (SEC) or a state regulatory body. They provide structured investment reviews to local clients in exchange for fee-based compensation. In legal terms, this professional is a:",
    options: [
      "Salaried group representative",
      "Registered investment adviser (RIA)",
      "Nonresident platform employee",
      "Bancassurance clearing supervisor"
    ],
    answer: 1,
    explanation: "Registered investment advisers (RIAs) are financial professionals registered with the SEC or state boards who receive compensation (fees) for providing investment advice to clients."
  },
  {
    id: 20,
    lo: "9C: Describe the role of financial advisors in selling insurance and providing other types of advisory services",
    question: "An advisor's primary service is assisting a client to select, adjust, and evaluate a balanced set of assets, including mutual funds, debt systems, and insurance-linked products, aiming to maximize returns. This service is known as:",
    options: [
      "Portfolio management",
      "Fact-finding underwriting",
      "Replacement monitoring",
      "Persistency balancing"
    ],
    answer: 0,
    explanation: "Portfolio management is an advisory service designed to help select and manage a diversified portfolio of investment and insurance products to maximize earnings and minimize losses."
  },
  {
    id: 21,
    lo: "9C: Describe the role of financial advisors in selling insurance and providing other types of advisory services",
    question: "A high-net-worth client grants their financial advisor the legal power to buy, sell, and rebalance securities in their account without needing to obtain client approval before every individual trade. This arrangement is called:",
    options: [
      "A financed purchase",
      "Discretionary authority",
      "Co-mingled supervision",
      "Unilateral agency"
    ],
    answer: 1,
    explanation: "Discretionary authority allows a financial advisor to independently select, purchase, and monitor securities on the client's behalf without securing permission for each specific transaction."
  },
  {
    id: 22,
    lo: "9C: Describe the role of financial advisors in selling insurance and providing other types of advisory services",
    question: "An advisor works with an affluent client specifically to identify structured products that will prevent their substantial investments from being heavily compromised by annual fiscal liabilities. This advisory service is known as:",
    options: [
      "Estate planning",
      "Tax planning",
      "Prospecting optimization",
      "Replacement protection"
    ],
    answer: 1,
    explanation: "Tax planning is an advisory service where a professional works with an asset-heavy client to identify systems and products that protect assets against excessive taxation."
  },
  {
    id: 23,
    lo: "9C: Describe the role of financial advisors in selling insurance and providing other types of advisory services",
    question: "A client wishes to put structures in place that will protect and transfer their property, business, and assets safely to several heirs with minimal loss. The advisor coordinates with lawyers and accountants to construct this channel. This process is:",
    options: [
      "Estate planning",
      "Fact-finding prospecting",
      "Churning avoidance",
      "Superb underwriting"
    ],
    answer: 0,
    explanation: "Estate planning is the specialized process of working with a client to conserve and transfer their personal assets to heirs as smoothly and cost-effectively as possible."
  },
  {
    id: 24,
    lo: "9C: Describe the role of financial advisors in selling insurance and providing other types of advisory services",
    question: "How do fee-only financial planners primarily differ from traditional commission-based insurance agents regarding their business model?",
    options: [
      "They are legally barred from writing written financial plans of any kind.",
      "They charge clients a direct fee (flat or hourly rate) for their analytical services and do not sell financial products for commissions.",
      "They must be directly employed by the SEC as government workers.",
      "They do not have to pass any state or federal suitability audits."
    ],
    answer: 1,
    explanation: "Fee-only advisors charge customer fees for advisory and planning services, avoiding commissions on product sales to limit potential conflicts of interest."
  },
  {
    id: 25,
    lo: "9C: Describe the role of financial advisors in selling insurance and providing other types of advisory services",
    question: "While traditional career agents write the majority of individual life insurance premium sales, in which financial product market have financial advisors made their most significant distribution contribution?",
    options: [
      "Basic term life insurance",
      "Individual annuities",
      "Direct group health plans",
      "State-sponsored property/casualty insurance"
    ],
    answer: 1,
    explanation: "Financial advisors have emerged as major distributors in the financial sector and have made significant contributions specifically to individual annuity sales volume."
  },

  // ==========================================
  // OBJECTIVE 9D: LICENSING PROCESS (Q26 - Q33)
  // ==========================================
  {
    id: 26,
    lo: "9D: Describe the licensing process for insurance sales agents",
    question: "In the United States, who holds the primary regulatory responsibility for imposing and maintaining licensing requirements on insurance agents and other product representatives?",
    options: [
      "The U.S. Securities and Exchange Commission (SEC)",
      "The Financial Industry Regulatory Authority (FINRA)",
      "The individual states and their insurance departments",
      "The National Association of Insurance Commissioners (NAIC) federals"
    ],
    answer: 2,
    explanation: "The individual states are primarily responsible for regulating the insurance industry and licensing agents to ensure they carry adequate knowledge and character."
  },
  {
    id: 27,
    lo: "9D: Describe the licensing process for insurance sales agents",
    question: "A state's insurance laws define a 'producer' as any individual who sells, solicits, or negotiates insurance contracts, and mandates licensing for them. This definition is typically modeled after which regulatory master document?",
    options: [
      "The Gramm-Leach-Bliley Act (GLB)",
      "The NAIC Producer Licensing Model Act",
      "FINRA Conduct Rule 2210",
      "The Employee Retirement Income Security Act (ERISA)"
    ],
    answer: 1,
    explanation: "The NAIC Producer Licensing Model Act is a model state law that defines an insurance producer and outlines the core requirements an individual must satisfy to obtain a license."
  },
  {
    id: 28,
    lo: "9D: Describe the licensing process for insurance sales agents",
    question: "An agent lives and operates her primary insurance office in Ohio. She also wants to sell term policies to clients living in neighboring Indiana. Indiana will require her to obtain what class of license?",
    options: [
      "A resident producer license",
      "A nonresident producer license",
      "An implied discretionary license",
      "An unregistered securities permit"
    ],
    answer: 1,
    explanation: "States issue resident licenses to producers living or operating their main business inside that state, and nonresident licenses to producers licensed in other states."
  },
  {
    id: 29,
    lo: "9D: Describe the licensing process for insurance sales agents",
    question: "Which of the following is a standard, fundamental requirement that a candidate must satisfy to secure an initial state license as an insurance producer?",
    options: [
      "Be at least 18 years of age, complete required pre-licensing education, pass state exams, and pay applicable fees",
      "Secure a direct co-signature from an SEC clearing principal",
      "Hold an active FINRA Series 7 registration for at least 5 years",
      "Establish an independent multiple-line agency (MLA) physical office"
    ],
    answer: 0,
    explanation: "To secure a license, an applicant must be at least 18 years of age, file a written application, finish certified pre-license education hours, pass the state exam, and pay licensing fees."
  },
  {
    id: 30,
    lo: "9D: Describe the licensing process for insurance sales agents",
    question: "An applicant passes the state exam for a life insurance license. In the majority of U.S. states, which products will they be authorized to distribute under this specific line of authority, and what is excluded?",
    options: [
      "They can sell variable life and variable annuities only; basic fixed term policies are excluded.",
      "They can sell fixed-rate annuities and traditional life policies; variable annuities are excluded (requiring a separate securities registration).",
      "They can sell property, casualty, health, and variable assets; fixed products are excluded.",
      "They are authorized to sell any financial and securities asset without restriction."
    ],
    answer: 1,
    explanation: "A standard life insurance license covers life insurance and fixed annuities, but variable products (including variable annuities) require separate securities registrations and specialized licenses."
  },
  {
    id: 31,
    lo: "9D: Describe the licensing process for insurance sales agents",
    question: "A candidate applies for a producer license. However, during a background check, the state insurance department discovers they were recently convicted of a felony involving financial fraud. Under the Producer Licensing Model Act, how will this react?",
    options: [
      "The license will be granted immediately, with a warning to complete double continuing education hours.",
      "The state insurance department has the authority to deny the license application based on character and fitness issues.",
      "The application will be referred to FINRA for automatic Series 6 licensing bypass.",
      "The candidate will be granted a temporary nonresident license."
    ],
    answer: 1,
    explanation: "The Producer Licensing Model Act authorizes state insurance departments to deny licenses for actions involving dishonesty, fraud, or felony convictions."
  },
  {
    id: 32,
    lo: "9D: Describe the licensing process for insurance sales agents",
    question: "Once an agent completes their training, passes the state exams, and receives their license, what is typically required to keep that license valid over time?",
    options: [
      "Retrying the entire state exam every two years",
      "Paying required renewal fees and completing a specified number of hours of continuing insurance education (CE)",
      "Maintaining an exclusive career contract with a single insurer",
      "Submitting weekly customer satisfaction logs to the state supervisor"
    ],
    answer: 1,
    explanation: "Producer licenses typically remain valid indefinitely as long as renewal fees are paid on time and the producer completes required continuing education (CE) hours."
  },
  {
    id: 33,
    lo: "9D: Describe the licensing process for insurance sales agents",
    question: "The state of Illinois grants an insurance license to a candidate who was already licensed and in good standing in Michigan, without requiring them to sit for the Illinois exam. This regulatory policy is an example of:",
    options: [
      "Reciprocity",
      "Discretionary waivering",
      "Unilateral clearance",
      "Exclusionary certification"
    ],
    answer: 0,
    explanation: "Under reciprocal licensing rules, many states waive examinations for nonresident licenses when the applicant is in good standing and licensed in their home state."
  },

  // ==========================================
  // OBJECTIVE 9E: PERSONAL SELLING PROCESS (Q34 - Q42)
  // ==========================================
  {
    id: 34,
    lo: "9E: Describe the role of personal selling in distributing insurance products and identify the stages of the personal selling process",
    question: "Traditional display ads and direct-mail brochures build brand familiarity, but insurance remains a 'high-involvement' purchase. Historically, what percentage of individual life insurance premium sales in the United States are driven by personal selling?",
    options: [
      "Less than 10 percent",
      "Around 35 percent",
      "At least 82 percent",
      "Exactly 100 percent"
    ],
    answer: 2,
    explanation: "Personal selling remains the dominant force in individual life insurance distribution, accounting for at least 82 percent of individual premium sales in the United States."
  },
  {
    id: 35,
    lo: "9E: Describe the role of personal selling in distributing insurance products and identify the stages of the personal selling process",
    question: "A candidate is learning the step-by-step methodology used by premium financial professionals to work with customers. How many core steps comprise a successful personal selling process?",
    options: [
      "Three steps",
      "Five steps",
      "Seven steps",
      "Ten steps"
    ],
    answer: 2,
    explanation: "The personal selling process is structured into seven distinct stages: (1) Prospecting, (2) Establishing Relationships, (3) Determining Needs, (4) Generating Proposals, (5) Evaluating Alternatives, (6) Closing, and (7) Providing Follow-Up Service."
  },
  {
    id: 36,
    lo: "9E: Describe the role of personal selling in distributing insurance products and identify the stages of the personal selling process",
    question: "An advisor schedules interactive Zoom meetings to fit the busy lifestyles of prospective clients, helping build rapport and trust without traveling to their homes. Under which stage of the personal selling process does this work fall?",
    options: [
      "Prospecting",
      "Establishing Relationships",
      "Determining Customers' Needs",
      "Evaluating Alternatives"
    ],
    answer: 1,
    explanation: "The second stage, Establishing Relationships, focuses on building personal trust and rapport, increasingly utilizing virtual tools like video conferencing."
  },
  {
    id: 37,
    lo: "9E: Describe the role of personal selling in distributing insurance products and identify the stages of the personal selling process",
    question: "An agent practices 'solution-based selling' rather than simply pushing a default carrier policy. To succeed, they must carry out a thorough fact-finding assessment. What is this structured assessment called?",
    options: [
      "A needs analysis",
      "An alternative evaluation",
      "A persistency review",
      "A quantitative audit"
    ],
    answer: 0,
    explanation: "A needs analysis is a vital stage in solution-based selling designed to gather key client facts and ensure the recommendation aligns with the client's actual situation."
  },
  {
    id: 38,
    lo: "9E: Describe the role of personal selling in distributing insurance products and identify the stages of the personal selling process",
    question: "An advisor is conducting a structured needs analysis for a customer. According to the standard personal selling framework, which three areas of concern must the advisor evaluate?",
    options: [
      "Current financial situation, current financial products, and financial priorities",
      "Education level, professional licensing, and social media followers",
      "Commission rates, licensing fee limits, and renewal margins",
      "State replacement rules, FINRA registration files, and SEC audit logs"
    ],
    answer: 0,
    explanation: "The three core areas evaluated during a needs analysis are the prospect's (1) current financial situation, (2) current financial products, and (3) financial priorities."
  },
  {
    id: 39,
    lo: "9E: Describe the role of personal selling in distributing insurance products and identify the stages of the personal selling process",
    question: "During a needs assessment, a client expresses that they are highly uncomfortable with any product where their cash value could fluctuate based on daily stock performance. In this scenario, the agent is evaluating the customer's:",
    options: [
      "Persistency index",
      "Risk tolerance",
      "Nonforfeiture authority",
      "Lead status"
    ],
    answer: 1,
    explanation: "Risk tolerance is a customer's willingness to accept fluctuations in asset values, and advisors must match a product's risk level to this individual trait."
  },
  {
    id: 40,
    lo: "9E: Describe the role of personal selling in distributing insurance products and identify the stages of the personal selling process",
    question: "A young couple wants to purchase simple term coverage to protect their newborn, but they also seek advice on how to accumulate and protect wealth for college savings. What is the correct classification for these two needs?",
    options: [
      "Both are simple advice needs.",
      "The term coverage is a product need (solution for a specific risk), while the longrange college planning is an advice need (long-range planning/wealth management).",
      "The term coverage is an advice need, while the wealth accumulation is a product need.",
      "Both are simple commodity transactions."
    ],
    answer: 1,
    explanation: "Product needs involve solutions for specific risks (like life insurance for a dependent), while advice needs involve broader, long-range wealth accumulation, preservation, and transfer."
  },
  {
    id: 41,
    lo: "9E: Describe the role of personal selling in distributing insurance products and identify the stages of the personal selling process",
    question: "An agent is using a tablet to build a sales proposal containing investment returns for a variable annuity. Which standard of disclosure must they follow if the asset is regulated under U.S. federal securities laws?",
    options: [
      "They can show only the highest hypothetical return to excite the buyer.",
      "They are prohibited from using any visual aids, infographics, or charts.",
      "They must show historical performance (one-year, five-year, and ten-year returns) and state clearly that past performance does not guarantee future results.",
      "They must promise that returns are completely locked in."
    ],
    answer: 2,
    explanation: "Under U.S. federal securities laws, investment illustrations must show standard historical periods (1, 5, and 10-year returns) and contain disclaimers stating past results are not predictive of future returns."
  },
  {
    id: 42,
    lo: "9E: Describe the role of personal selling in distributing insurance products and identify the stages of the personal selling process",
    question: "A corporate buyer wants to secure group-term benefits for 10,000 employees. They send out a document detailing staff demographics (age, salary, gender, location) and ask several insurance carriers to submit customized premium bids. This document is a:",
    options: [
      "Notice Regarding Replacement",
      "Request for proposal (RFP)",
      "Suitability determination file",
      "FINRA Conduct Rule guideline"
    ],
    answer: 1,
    explanation: "A request for proposal (RFP) is a formal document provided by organizational buyers that outlines target group demographics and requests product bids from insurers."
  },

  // ==========================================
  // OBJECTIVE 9F: TYPES OF LEADS (Q43 - Q50)
  // ==========================================
  {
    id: 43,
    lo: "9F: Distinguish among different types of leads used during prospecting",
    question: "An advisor dedicates her morning to locating, verifying, and assessing the eligibility of prospective buyers. This fundamental phase of personal selling is called:",
    options: [
      "Evaluating options",
      "Prospecting",
      "Closing",
      "Following up"
    ],
    answer: 1,
    explanation: "Prospecting is the process by which financial professionals identify, contact, and qualify potential customers."
  },
  {
    id: 44,
    lo: "9F: Distinguish among different types of leads used during prospecting",
    question: "An agent checks his daily inbox and finds contact details submitted by visitors who used the insurer's website financial calculators. These contacts are classified as:",
    options: [
      "Referred leads",
      "Sales leads",
      "Centers of influence",
      "Fiduciary prospects"
    ],
    answer: 1,
    explanation: "Sales leads are basic potential contacts from sources like website inquiries, social media posts, or general marketing responses."
  },
  {
    id: 45,
    lo: "9F: Distinguish among different types of leads used during prospecting",
    question: "A satisfied client introduces an advisor to their sister and business partner. In personal selling terms, these prospective contacts represent:",
    options: [
      "Cold calls",
      "Referred leads (or referrals)",
      "Qualitative overrides",
      "Unqualified leads"
    ],
    answer: 1,
    explanation: "Referred leads, or referrals, come from existing customers who provide information about a contact, which is statistically more likely to result in a sale."
  },
  {
    id: 46,
    lo: "9F: Distinguish among different types of leads used during prospecting",
    question: "An advisor meets regularly with a well-respected local accountant and an estate attorney, who have extensive client networks in the community and routinely provide referrals. In prospecting, these valuable professional contacts are known as:",
    options: [
      "Registered advisers",
      "Centers of influence",
      "Independent platform leads",
      "In-house clearing agents"
    ],
    answer: 1,
    explanation: "Centers of influence are influential community figures or professionals who maintain broad networks of contacts and act as premium sources for referred leads."
  },
  {
    id: 47,
    lo: "9F: Distinguish among different types of leads used during prospecting",
    question: "An agent has exhausted all warm referrals. She opens the local business directory and begins dialing numbers of local entrepreneurs with whom she has had no prior connection. This practice is:",
    options: [
      "Warm prospecting",
      "Cold calling",
      "Twisting leads",
      "Commingling"
    ],
    answer: 1,
    explanation: "Cold calling is the act of contacting potential customers with whom the representative has had no prior connection; it is typically used as a last resort."
  },
  {
    id: 48,
    lo: "9F: Distinguish among different types of leads used during prospecting",
    question: "An advisor assesses a lead and determines they have a clear economic need for coverage, possess the financial means to pay the annual premiums, and are an acceptable underwriting risk for the insurer. This lead is classified as a:",
    options: [
      "Cold lead",
      "Qualified prospect",
      "Fiduciary override",
      "Producer contact"
    ],
    answer: 1,
    explanation: "A qualified prospect is a potential buyer who has both a verified need and the financial means to buy, and meets the insurer's underwriting standards."
  },
  {
    id: 49,
    lo: "9F: Distinguish among different types of leads used during prospecting",
    question: "Research on successful financial professionals reveals they use social media as a key prospecting tool. What are the key prospecting actions taken by high-achieving advisors on these platforms?",
    options: [
      "They post controversial content to stimulate debates with competitors.",
      "They post relevant, timely content, engage with their audience, and initiate conversations on their networks.",
      "They only post static, text-based disclosures required by the SEC.",
      "They purchase lists of social media emails to execute automated bulk phone sweeps."
    ],
    answer: 1,
    explanation: "High earners build digital trust by posting informative content, keeping target clients engaged, and initiating natural conversations across their social networks."
  },
  {
    id: 50,
    lo: "9F: Distinguish among different types of leads used during prospecting",
    question: "An advisor has a massive list of contacts including email subscribers, community event visitors, and referrals. According to sales theory, why is a 'qualified prospect' considered the most valuable category of prospect?",
    options: [
      "They require zero pre-licensing education to buy.",
      "They are statistically the most likely type of prospect to result in a completed sale.",
      "They are exempt from state suitability guidelines.",
      "They pay lower premiums than non-qualified buyers."
    ],
    answer: 1,
    explanation: "Because qualified prospects already possess the need, some ability to pay, and acceptable risk profiles, they represent the highest conversion probability."
  },

  // ==========================================
  // OBJECTIVE 9G: PROHIBITED SALES PRACTICES (Q51 - Q60)
  // ==========================================
  {
    id: 51,
    lo: "9G: Describe types of prohibited sales practices and the consequences for engaging in such behaviors",
    question: "A state insurance board is investigating a series of consumer complaints regarding deceptive sales pitches. Most state-level prohibitions on deceptive trade practices are based on which model act?",
    options: [
      "The Securities and Exchange Act of 1934",
      "The NAIC Unfair Trade Practices Act",
      "The Gramm-Leach-Bliley Deregulation Act",
      "The NY Regulation 60 Code"
    ],
    answer: 1,
    explanation: "The NAIC Unfair Trade Practices Act provides the model framework that U.S. states use to identify and prohibit unfair, deceptive, or unethical trade practices in insurance sales."
  },
  {
    id: 52,
    lo: "9G: Describe types of prohibited sales practices and the consequences for engaging in such behaviors",
    question: "An agent induces an existing annuity client to surrender their contract and buy a new one every single year, asserting it improves performance. In reality, it yields no customer benefit but subjects the customer to continuous surrender charges while generating commissions for the agent. This practice is:",
    options: [
      "Rebating",
      "Churning",
      "Twisting",
      "Commingling"
    ],
    answer: 1,
    explanation: "Churning is the illegal and unethical sales practice of inducing a customer to engage in excessive, unnecessary policy transactions purely to generate commission for the advisor."
  },
  {
    id: 53,
    lo: "9G: Describe types of prohibited sales practices and the consequences for engaging in such behaviors",
    question: "In the securities sector, when a registered broker carries out excessive, unauthorized buying and selling of mutual funds or stocks inside a client's discretionary account to inflate fee margins, this is known as:",
    options: [
      "Prospecting",
      "Churning (or portfolio churning)",
      "Rebating overrides",
      "Persistency erosion"
    ],
    answer: 1,
    explanation: "In the financial services and securities industries, excessive trading in a client account to generate higher commission payouts is prohibited as churning."
  },
  {
    id: 54,
    lo: "9G: Describe types of prohibited sales practices and the consequences for engaging in such behaviors",
    question: "To secure a major policy sale, an agent proposes to buy the client a high-end golf set. This incentive is not listed in the standard contract and is not offered to other clients. This prohibited trade practice is:",
    options: [
      "Misrepresentation",
      "Rebating",
      "Commingling",
      "Churning"
    ],
    answer: 1,
    explanation: "Rebating is offering a prospect an unstated inducement/value (cash, items, or services) to purchase a product, which is prohibited under state laws."
  },
  {
    id: 55,
    lo: "9G: Describe types of prohibited sales practices and the consequences for engaging in such behaviors",
    question: "An agent is close to failing her annual sales quota. She tells a prospect, 'If you sign this whole life contract today, I will refund 50 percent of my first-year commission back to you in cash.' Under standard state laws, this proposal is:",
    options: [
      "Perfectoms-based marketing, allowed under NAIC model laws.",
      "Rebating, and is generally prohibited under state insurance codes.",
      "Fully authorized, provided the refund is recorded on the state sales statements.",
      "An acceptable solution-based selling tactic."
    ],
    answer: 1,
    explanation: "Offering cash refunds or splitting commissions with an applicant as an encouragement to buy is an illegal and prohibited action classified as rebating."
  },
  {
    id: 56,
    lo: "9G: Describe types of prohibited sales practices and the consequences for engaging in such behaviors",
    question: "An agent misrepresents the terms of an active insurance contract to convince a customer to drop it and purchase a different policy with worse long-term provisions. This prohibited practice is known as:",
    options: [
      "Rebating",
      "Twisting",
      "Misappropriation",
      "Commingling"
    ],
    answer: 1,
    explanation: "Twisting is the illegal practice of using misrepresentations or misleading comparisons to induce a customer to replace an existing policy."
  },
  {
    id: 57,
    lo: "9G: Describe types of prohibited sales practices and the consequences for engaging in such behaviors",
    question: "An agent meets with a consumer who holds an active whole life insurance policy. The agent tells the client that their current plan has a 'dangerously outdated rate system' and encourages replacing it with a risky variable cash structure, hiding the underlying market risks. This tactic is an example of:",
    options: [
      "Appropriate portfolio rebalancing",
      "Twisting",
      "Discretionary oversight",
      "Co-branding"
    ],
    answer: 1,
    explanation: "Twisting involves using false statements, exaggerations, or skewed comparisons regarding a competitor's policy to get a client to replace it."
  },
  {
    id: 58,
    lo: "9G: Describe types of prohibited sales practices and the consequences for engaging in such behaviors",
    question: "An agent shows a client a variable illustration and states, 'This layout guarantees you will receive a solid 10 percent annual return on your cash values for the next twenty years.' Under state laws, this unsupportable claim is:",
    options: [
      "A standard marketing statement",
      "Misrepresentation",
      "Commingling",
      "A financed purchase"
    ],
    answer: 1,
    explanation: "Misrepresentation is making a false, misleading, or unsupportable statement regarding a policy's terms, features, benefits, or future performances."
  },
  {
    id: 59,
    lo: "9G: Describe types of prohibited sales practices and the consequences for engaging in such behaviors",
    question: "An agent receives a $5,000 cash premium payment from a customer. Unprepared to deposit it immediately, she places the cash into her personal checking account to cover short-term bills, intending to replace it on Friday when commissions clear. This action represents:",
    options: [
      "Unilateral rebalancing",
      "Misappropriation of funds (specifically commingling)",
      "Standard cash discounting",
      "Rebating under state waivers"
    ],
    answer: 1,
    explanation: "Mixing client premiums with personal funds is a prohibited practice known as commingling, a form of illegal misappropriation of funds, even if the use is temporary."
  },
  {
    id: 60,
    lo: "9G: Describe types of prohibited sales practices and the consequences for engaging in such behaviors",
    question: "If an agent is found guilty of engaging in prohibited sales practices like twisting or rebating at a state insurance department administrative hearing, which penalties can they face?",
    options: [
      "Monetary fines, and suspension or revocation of their producer license",
      "Direct imprisonment by the state insurance commissioner with no court hearing",
      "A mandatory promotion to a registered supervisory principal",
      "There are no direct penalties; state departments can only issue verbal warnings."
    ],
    answer: 0,
    explanation: "State insurance departments can impose monetary fines, reprimands, and suspend or revoke the producer's licensing credentials after due process in an administrative hearing."
  },

  // ==========================================
  // OBJECTIVE 9H: SUITABILITY & FINANCES (Q61 - Q69)
  // ==========================================
  {
    id: 61,
    lo: "9H: Explain how suitability requirements impact financial sales activities and understand how the DOL fiduciary rule relates to suitability",
    question: "Which of the following describes the core meaning of 'suitability requirements' for financial services representatives?",
    options: [
      "Agents must pass state-mandated marketing exams twice a year.",
      "Agents must have a reasonable basis to believe a recommended product matches the customer's financial situation, tax status, and objectives.",
      "Representatives must only offer proprietary products from their primary carrier.",
      "Insurers must ensure all agents have active Series 7 licenses."
    ],
    answer: 1,
    explanation: "Suitability requirements dictate that representatives must verify that any recommended financial or insurance product is appropriate for the client based on their precise situation, tax status, and goals."
  },
  {
    id: 62,
    lo: "9H: Explain how suitability requirements impact financial sales activities and understand how the DOL fiduciary rule relates to suitability",
    question: "To fulfill suitability requirements, what proactive action must a representative take during the consultation process?",
    options: [
      "Submit client medical files directly to the SEC",
      "Make reasonable attempts to acquire all necessary background information about the client before recommending a product",
      "Promise specific future stock returns in the product illustration",
      "Direct the customer to ignore competing nonproprietary products"
    ],
    answer: 1,
    explanation: "To adhere to suitability rules, representatives must proactively collect adequate client data (income, dependencies, existing policies) before presenting any specific product solutions."
  },
  {
    id: 63,
    lo: "9H: Explain how suitability requirements impact financial sales activities and understand how the DOL fiduciary rule relates to suitability",
    question: "An insurance carrier wants to remain compliant with suitability regulations. In addition to training agents, what system is the insurer required by law to establish?",
    options: [
      "A centralized system to supervise and review suitability recommendations",
      "A primary clearing office that registers all fixed products with the SEC",
      "An automated telemarketing monitoring framework",
      "A national database of cold calling directories"
    ],
    answer: 1,
    explanation: "Insurers carry a regulatory burden to build and support systems to actively supervise agent recommendations and ensure suitability compliance."
  },
  {
    id: 64,
    lo: "9H: Explain how suitability requirements impact financial sales activities and understand how the DOL fiduciary rule relates to suitability",
    question: "A company prepares to release a new fixed-index annuity product. It must ensure that any sales verify customer constraints regarding transfer charges, lockup periods, and tax consequences. This checks are modeled after:",
    options: [
      "The NAIC Suitability in Annuity Transactions Model Regulation",
      "The SEC Rule 2210 communications act",
      "The Gramm-Leach-Bliley banking provisions",
      "The ERISA general labor guidelines"
    ],
    answer: 0,
    explanation: "The NAIC Suitability in Annuity Transactions Model Regulation sets solid guidelines ensuring that annuity sales represent suitable exchanges, evaluating surrender charges and liquidity needs."
  },
  {
    id: 65,
    lo: "9H: Explain how suitability requirements impact financial sales activities and understand how the DOL fiduciary rule relates to suitability",
    question: "A majority of states enforce rigorous annuity suitability laws that protect older consumers. The model rule that targets transactions for customers ages 65 and older is:",
    options: [
      "The Premium Senior Advisory Act",
      "The Senior Protection in Annuity Transactions Model Regulation",
      "FINRA Conduct Rule 2110",
      "The NAIC Unfair Trade Practice model"
    ],
    answer: 1,
    explanation: "The Senior Protection in Annuity Transactions Model Regulation governs transactions for individuals ages 65 and older, who have unique asset protection needs."
  },
  {
    id: 66,
    lo: "9H: Explain how suitability requirements impact financial sales activities and understand how the DOL fiduciary rule relates to suitability",
    question: "An advisor meets with a 78-year-old retiree and recommends a deferred annuity with a 15-year surrender charge period. Why is this recommendation typically considered unsuitable?",
    options: [
      "The retiree cannot legally hold an annuity policy beyond age 70.",
      "Seniors typically have fewer income sources, shorter life expectancies, and higher immediate liquidity needs for medical emergencies, making lengthy surrender periods highly inappropriate.",
      "Retirees are exempt from paying annuity surrender penalties.",
      "The SEC automatically voids senior annuity contracts."
    ],
    answer: 1,
    explanation: "Older individuals generally require greater liquidity and have shorter investment horizons, making long withdrawal lockups and heavy penalty charges unsuitable for their profiles."
  },
  {
    id: 67,
    lo: "9H: Explain how suitability requirements impact financial sales activities and understand how the DOL fiduciary rule relates to suitability",
    question: "A registered representative proposes a deferred variable annuity purchase to a client. Under FINRA Conduct Rule 2821, which of the following is true?",
    options: [
      "The suitability evaluation must be documented, signed by the rep, and approved/signed by a registered principal.",
      "Variable annuity recommendations are exempt from standard suitability reviews.",
      "The representative must guarantee specific investment results in writing.",
      "The purchase can be bypassed if the client resides out-of-state."
    ],
    answer: 0,
    explanation: "FINRA Rule 2821 requires that variable annuity recommendations be thoroughly documented, signed by the advising representative, and approved/signed by a registered principal before processing."
  },
  {
    id: 68,
    lo: "9H: Explain how suitability requirements impact financial sales activities and understand how the DOL fiduciary rule relates to suitability",
    question: "How does the Department of Labor (DOL) Fiduciary Rule differ from standard state suitability requirements regarding retirement investment advice?",
    options: [
      "It allows advisers to place their own financial interests and commissions above the client's needs.",
      "It establishes a higher standard of care (the fiduciary standard) requiring advisors to provide impartial advice that is strictly in the client's best interest.",
      "It completely eliminates the need for written plan proposals.",
      "It applies only to direct property and casualty policies."
    ],
    answer: 1,
    explanation: "The DOL Fiduciary Rule mandates a fiduciary standard under ERISA, which is a higher standard than suitability, requiring advisers to provide impartial advice in the customer's best interest."
  },
  {
    id: 69,
    lo: "9H: Explain how suitability requirements impact financial sales activities and understand how the DOL fiduciary rule relates to suitability",
    question: "Under the provisions of the DOL Fiduciary Rule, what is the status of commission-based compensation structures that can create conflicts of interest?",
    options: [
      "Commissions are completely outlawed for all financial operations.",
      "Advisors can accept commission payments only if they adhere to specific protective steps and contract terms that shield the customer.",
      "Commissions are converted into tax-deductible contributions automatically.",
      "They are exempt from all fiduciary constraints."
    ],
    answer: 1,
    explanation: "Fiduciary guidelines permit commission-based compensation but require firms to take strict steps to prevent conflicts of interest from compromising impartial, best-interest advice."
  },

  // ==========================================
  // OBJECTIVE 9I: REPLACEMENT REGULATIONS (Q70 - Q78)
  // ==========================================
  {
    id: 70,
    lo: "9I: Describe the general process insurers must complete to comply with replacement regulations",
    question: "A client decides to drop their active life insurance policy and use the cash values to purchase a brand new contract with a different carrier. In regulatory terms, this transaction is known as:",
    options: [
      "Rebating",
      "A replacement",
      "A multi-line allocation",
      "Portfolio churning"
    ],
    answer: 1,
    explanation: "A replacement is any transaction in which a new life insurance policy or annuity is to be purchased, and existing coverages are dropped, surrendered, or altered."
  },
  {
    id: 71,
    lo: "9I: Describe the general process insurers must complete to comply with replacement regulations",
    question: "A state's regulations are designed to verify that consumers receive clear, unbiased comparative data on existing vs new plans during a transfer. These structures are typically based on:",
    options: [
      "The NAIC Life Insurance and Annuities Replacement Model Regulation",
      "FINRA Conduct Rule 3010",
      "The Securities Act of 1933",
      "The Gramm-Leach-Bliley act models"
    ],
    answer: 0,
    explanation: "The NAIC Life Insurance and Annuities Replacement Model Regulation is the model standard that states use to regulate policy and annuity turnovers."
  },
  {
    id: 72,
    lo: "9I: Describe the general process insurers must complete to comply with replacement regulations",
    question: "An advisor advises a customer to secure loans against their active whole life coverage and use those funds to pay the annual premiums on a brand new policy. This transaction is classified as:",
    options: [
      "A cold call",
      "A financed purchase",
      "Misappropriation",
      "A discretionary proxy"
    ],
    answer: 1,
    explanation: "A financed purchase occurs when a buyer obtains a new policy using cash values, loans, or dividends from an existing policy to pay the new premiums; it is classified as a replacement under model laws."
  },
  {
    id: 73,
    lo: "9I: Describe the general process insurers must complete to comply with replacement regulations",
    question: "Under model replacement regulations, which of the following active policy changes triggers the formal replacement warning and documentation process?",
    options: [
      "Subjecting a policy to simple automatic premium loans",
      "An existing policy being surrendered, lapsed, forfeited, or reduced in cash value",
      "An increase in the active face amount of a term policy with no premium shifts",
      "Adding a child rider to a standard life policy"
    ],
    answer: 1,
    explanation: "Replacement triggers include any action causing existing policies to lapse, forfeit, surrender, terminate, be reduced in value, or be amended with lower overall cash balances."
  },
  {
    id: 74,
    lo: "9I: Describe the general process insurers must complete to comply with replacement regulations",
    question: "Before completing a replacement transaction, which document must be signed by both the advising insurance producer and the policy applicant?",
    options: [
      "An RFP statement",
      "A replacement statement",
      "A FINRA Series 6 compliance voucher",
      "A discretionary trust form"
    ],
    answer: 1,
    explanation: "A replacement statement must be completed and signed by both the agent and the applicant, declaring any existing coverages that the new contract will replace."
  },
  {
    id: 75,
    lo: "9I: Describe the general process insurers must complete to comply with replacement regulations",
    question: "During a replacement transaction, the agent is required by law to provide a specific educational disclosure warning to the buyer. This document is:",
    options: [
      "A written Notice Regarding Replacement",
      "A registered SEC prospectus",
      "A qualitative analyst index",
      "An agency contract copy"
    ],
    answer: 0,
    explanation: "If a replacement is involved, the agent must present the client with a 'Notice Regarding Replacement' explaining the potential negative effects and comparing the plans."
  },
  {
    id: 76,
    lo: "9I: Describe the general process insurers must complete to comply with replacement regulations",
    question: "To help protect consumers, what operational step must a replacing insurance carrier complete once they receive a signed replacement statement?",
    options: [
      "They must send a copy of the proposal to the SEC within 24 hours.",
      "They must notify the existing insurance company of the potential replacement, giving them an opportunity to provide comparative information to the client.",
      "They must suspend the agent's commission for 60 days.",
      "They must demand that the client forfeit all cash values."
    ],
    answer: 1,
    explanation: "The replacing insurer is required to notify the existing insurance carrier of the replacement, enabling the original company to coordinate with the customer with comparison facts."
  },
  {
    id: 77,
    lo: "9I: Describe the general process insurers must complete to comply with replacement regulations",
    question: "A producer is preparing to replace a life insurance policy in the State of New York. New York has the most extensive replacement disclosure rules in the country, governed specifically by:",
    options: [
      "FINRA Rule 2210",
      "Regulation 60",
      "The Senior Protection Act",
      "The NY Suitability Charter"
    ],
    answer: 1,
    explanation: "Regulation 60 of the state of New York mandates highly detailed, comprehensive comparison disclosures and is viewed as the strictest replacement rule in the United States."
  },
  {
    id: 78,
    lo: "9I: Describe the general process insurers must complete to comply with replacement regulations",
    question: "Under New York's Regulation 60, what consumer protections are available to a client who replaces an active policy or annuity contract?",
    options: [
      "The client can cancel the replacement policy within 30 days but forfeits all paid premiums.",
      "The client has 60 days to cancel the replacement policy for a full premium refund, and can reinstate their original policy with no new contestability or suicide exclusions.",
      "The client receives a complete tax waiver on all future investments.",
      "The client is legally prohibited from ever surrendering the new policy."
    ],
    answer: 1,
    explanation: "New York Regulation 60 grants a solid 60-day free-look refund period and allows the client to reinstate their original policy without facing new contestability or suicide exclusions."
  },

  // ==========================================
  // OBJECTIVE 9J: FINRA REGULATIONS (Q79 - Q87)
  // ==========================================
  {
    id: 79,
    lo: "9J: Explain FINRA regulations that affect the personal selling process",
    question: "At the federal level, the self-regulatory organization (SRO) responsible for conducting compliance reviews of broker-dealer records, sales practices, and complaints is:",
    options: [
      "The SEC",
      "The National Association of Insurance Commissioners (NAIC)",
      "The Financial Industry Regulatory Authority (FINRA)",
      "The Department of Labor (DOL)"
    ],
    answer: 2,
    explanation: "FINRA is the non-governmental self-regulatory organization that regulates the actions and sales practices of securities broker-dealers and registered representatives in the United States."
  },
  {
    id: 80,
    lo: "9J: Explain FINRA regulations that affect the personal selling process",
    question: "If a registered person violates federal securities rules, which of the following disciplinary sanctions is within FINRA's authority to impose?",
    options: [
      "Administrative warning letters only",
      "Fines, suspensions, revocations of licensing registrations, or permanent bars from associating with any member firm",
      "Direct seizure of the representative's personal real estate holdings",
      "Filing immediate civil lawsuits on behalf of the customer"
    ],
    answer: 1,
    explanation: "FINRA's disciplinary toolkit includes imposing monetary fines, suspending or stripping registrations, and permanent licensing bans, following a formal hearing."
  },
  {
    id: 81,
    lo: "9J: Explain FINRA regulations that affect the personal selling process",
    question: "Which foundational FINRA rule dictates that all members and registered representatives must 'observe high standards of commercial honor and just and equitable principles of trade' in all dealings?",
    options: [
      "FINRA Conduct Rule 2110",
      "FINRA Conduct Rule 2120",
      "FINRA Conduct Rule 2330",
      "FINRA Conduct Rule 2210"
    ],
    answer: 0,
    explanation: "FINRA Conduct Rule 2110 is the core ethical standard requiring broker-dealers and reps to act with professional commercial honor and fair dealing."
  },
  {
    id: 82,
    lo: "9J: Explain FINRA regulations that affect the personal selling process",
    question: "A registered representative misleadingly downplays the high market risks of an investment product to secure a capital transfer. This deceptive action directly violates:",
    options: [
      "FINRA Conduct Rule 2110 only",
      "FINRA Conduct Rule 2120",
      "FINRA Conduct Rule 2330",
      "FINRA Conduct Rule 3010"
    ],
    answer: 1,
    explanation: "FINRA Conduct Rule 2120 strictly prohibits the use of any manipulative, deceptive, or fraudulent device or contrivance to induce the purchase or sale of any security."
  },
  {
    id: 83,
    lo: "9J: Explain FINRA regulations that affect the personal selling process",
    question: "To guarantee a prospective client against loss, a registered representative offers to personally reimburse them if their stock-fund investments drop below $10,000. Under FINRA Conduct Rule 2330, this arrangement is:",
    options: [
      "Fully authorized, as it protects investors from market losses.",
      "Strictly prohibited, as members cannot guarantee customers against losses or make improper use of customer funds.",
      "Allowed only if the representative completes a Series 7 disclosure.",
      "An acceptable suitability mitigation tactic."
    ],
    answer: 1,
    explanation: "FINRA Rule 2330 strictly prohibits representatives from guaranteeing customers against losses or using client money in an unauthorized or improper manner."
  },
  {
    id: 84,
    lo: "9J: Explain FINRA regulations that affect the personal selling process",
    question: "A registered representative is creating a Facebook flyer to promote variable annuities. Under FINRA Conduct Rule 2210 (governing communications with the public), which of the following is a mandatory standard?",
    options: [
      "The brochure must clearly note the name of the registered broker-dealer.",
      "The brochure must promise a minimum 6 percent return.",
      "The brochure is exempt from supervisory approval if published online.",
      "The brochure must omit any mention of tax consequences."
    ],
    answer: 0,
    explanation: "FINRA Conduct Rule 2210 mandates that public communications be balanced and fair, and must clearly show the name of the registered broker-dealer."
  },
  {
    id: 85,
    lo: "9J: Explain FINRA regulations that affect the personal selling process",
    question: "An advisor wants to include the following phrase in a sales letter: 'While the stock fund has risks, our proprietary algorithms guarantee a double asset yield by next winter.' Under FINRA Conduct Rule 2210, this projection is:",
    options: [
      "Fully permitted, provided the algorithm has been tested on ancient market datasets.",
      "Strictly prohibited, as communications with the public must not contain predictions or projections of investment results.",
      "Permitted only if the advisor holds an RIA credential.",
      "Authorized under standard SEC safe harbors."
    ],
    answer: 1,
    explanation: "Rule 2210 prohibits members from issuing promises of specific performance or predicting/projecting future investment results in public sales literature."
  },
  {
    id: 86,
    lo: "9J: Explain FINRA regulations that affect the personal selling process",
    question: "Before an application for a deferred variable annuity is officially sent to an insurance company, FINRA Conduct Rule 2821 requires which internal compliance check to occur?",
    options: [
      "A complete audit of the broker-dealer's capital reserve accounts",
      "A registered supervisor (or principal) must review, approve, and sign the suitability determination in writing",
      "A state insurance department background investigation",
      "The customer must take a basic financial intelligence exam"
    ],
    answer: 1,
    explanation: "Under FINRA Rule 2821, a registered principal of the broker-dealer must verify, document, and co-sign the suitability determination before sending the variable contract application onward."
  },
  {
    id: 87,
    lo: "9J: Explain FINRA regulations that affect the personal selling process",
    question: "FINRA's Supervisory Rule (Conduct Rule 3010) imposes strict operational duties on member broker-dealers. Under this rule, what must a broker-dealer establish and carry out?",
    options: [
      "An automated system to bypass state licensing registration fees",
      "Written supervisory procedures, direct supervision by a designated Chief Compliance Officer (CCO), and at least annual compliance meetings with each registered representative",
      "A proprietary line of fixed products to compete with external insurance carriers",
      "Weekly client cold calling monitoring files"
    ],
    answer: 1,
    explanation: "FINRA Rule 3010 mandates that broker-dealers actively monitor and supervise staff through structured written guidelines, a dedicated CCO, and annual in-person compliance interviews with each representative."
  },

  // ==========================================
  // OBJECTIVE 9K: EVALUATION (Q88 - Q94)
  // ==========================================
  {
    id: 88,
    lo: "9K: List ways in which insurers evaluate financial professionals",
    question: "When evaluating the performance of their active personal salesforce, modern insurance companies utilize both of which categories of performance indicators?",
    options: [
      "Quantitative (numerical metrics) and Qualitative (behavioral and knowledge-based aspects) measures",
      "State-based and Federal-based financial quotas",
      "Fiduciary and Non-fiduciary commission allocations",
      "Series-oriented and Model-oriented registration indexes"
    ],
    answer: 0,
    explanation: "Insurers employ a balanced framework of quantitative (numerical) and qualitative (character, expertise, and behavior) metrics to assess their sales team's efficacy."
  },
  {
    id: 89,
    lo: "9K: List ways in which insurers evaluate financial professionals",
    question: "A sales manager is running an end-of-year review. Which of the following is an example of a purely 'Quantitative' performance metric?",
    options: [
      "The representative's mastery of complex annuity product mechanics",
      "The total sales volume and amount of premiums generated by the agent during the fiscal year",
      "The representative's willingness to supply local market intelligence to underwriting",
      "The representative's adherence to professional commercial honor guidelines"
    ],
    answer: 1,
    explanation: "Quantitative achievements are represented by hard numbers, such as premium dollars collected, sales volume, contacts completed, or new accounts opened."
  },
  {
    id: 90,
    lo: "9K: List ways in which insurers evaluate financial professionals",
    question: "A company evaluates how many of an agent's written policies remain in force year after year as a result of customers continuing to pay their scheduled renewal premiums. This metric is known as the:",
    options: [
      "Persistency rate",
      "Suitability index",
      "Commission override ratio",
      "Conversion intensity rate"
    ],
    answer: 0,
    explanation: "The persistency rate measures the percentage of policies written that remain active and premium-paying over time, reflecting long-term customer satisfaction and carrier profitability."
  },
  {
    id: 91,
    lo: "9K: List ways in which insurers evaluate financial professionals",
    question: "An insurer tracks if their field agents submit policy application forms cleanly, communicate products honestly, and maintain professional manners when dealing with client complaints. These parameters are categorized as:",
    options: [
      "Quantitative metrics",
      "Qualitative measures",
      "Annuity lockup constraints",
      "RFP requirements"
    ],
    answer: 1,
    explanation: "Qualitative measures evaluate non-numerical qualifications like policy submission accuracy, company regulation knowledge, ethics, communication skills, and customer satisfaction."
  },
  {
    id: 92,
    lo: "9K: List ways in which insurers evaluate financial professionals",
    question: "An agent regularly reports field observations regarding new products launched by regional banks and local consumer feedback to their home office. In sales evaluations, this contribution is referred to as:",
    options: [
      "Fiduciary rebalancing",
      "Provision of market intelligence",
      "Prospecting override",
      "Persistency mitigation"
    ],
    answer: 1,
    explanation: "Providing market intelligence is a qualitative metric assessing an agent's ability to feed back field facts regarding competitors and regional customer trends to the home office."
  },
  {
    id: 93,
    lo: "9K: List ways in which insurers evaluate financial professionals",
    question: "A compliance department reviews whether any formal client complaints have been made against an advisor regarding high-pressure pitches or deceptive sales literature. Under which category of evaluation does this review fall?",
    options: [
      "Quantitative sales performance metrics",
      "Ethical and moral behavior qualitative measures",
      "Commission restructuring audits",
      "Licensing reciprocity protocols"
    ],
    answer: 1,
    explanation: "Monitoring files for complaints, regulatory violations, and high-pressure selling explores the qualitative aspect of ethical and moral behavior."
  },
  {
    id: 94,
    lo: "9K: List ways in which insurers evaluate financial professionals",
    question: "If an insurance company discovers during an evaluation that several regional sales groups are failing to meet suitability standard levels, what action is the carrier likely to take?",
    options: [
      "Immediately dissolve all existing agency contracts with no notice",
      "Reevaluate and improve their training programs, monitor employee performance more closely, or refine their client-facing systems",
      "Refer the whole corporate salesforce to FINRA for direct prosecution",
      "Convert all complicated variable lines into standard term policies"
    ],
    answer: 1,
    explanation: "Firms use evaluation feedback to identify weaknesses and make upgrades, typically by strengthening training programs and refining client service procedures."
  },

  // ==========================================
  // OBJECTIVE 9L: PROS & CONS (Q95 - Q100)
  // ==========================================
  {
    id: 95,
    lo: "9L: Understand the advantages and disadvantages of personal selling",
    question: "From an insurance carrier's perspective, what represents a primary 'Advantage' of utilizing personal selling over passive advertising options?",
    options: [
      "It requires a much smaller financial capital investment.",
      "It yields high closing potential because the representative guides the customer from initial interest to the final purchase decision.",
      "It allows the carrier to reach millions of prospective buyers simultaneously.",
      "It removes the requirements to satisfy state suitability laws."
    ],
    answer: 1,
    explanation: "A major strength of personal selling is its high closing power, supporting prospects throughout the decision cycle and actively securing purchase commitments."
  },
  {
    id: 96,
    lo: "9L: Understand the advantages and disadvantages of personal selling",
    question: "Vanguard Mutual wants to market a highly complex, customizable variable life asset that requires deep client explanation and financial planning. Which distribution method is the most appropriate?",
    options: [
      "Direct static email campaigns",
      "Personal selling",
      "Outbound automated telemarketing sweeps",
      "National newspaper ad sections"
    ],
    answer: 1,
    explanation: "Personal selling is the optimal choice for distributing complicated, high-involvement products because it allows for real-time customer education and customization."
  },
  {
    id: 97,
    lo: "9L: Understand the advantages and disadvantages of personal selling",
    question: "Why is personal selling considered an exceptionally persuasive marketing tool when handling sensitive topics like estate planning and life insurance?",
    options: [
      "It allows agents to bind coverage with no underwriting requirements.",
      "It creates an interactive, real-time, and two-way collaborative dialogue that builds trust and answers direct consumer objections on the spot.",
      "It is exempt from FINRA and SEC oversight.",
      "It converts variable investments into risk-safe fixed commodities."
    ],
    answer: 1,
    explanation: "Personal selling facilitates live, two-way interaction, giving advisors the means to tailor messages, highlight value, and address objections to build long-term trust."
  },
  {
    id: 98,
    lo: "9L: Understand the advantages and disadvantages of personal selling",
    question: "An insurance group is evaluating its distribution budgets. Why is personal selling classified as a highly 'Costly' marketing tool compared to digital campaigns?",
    options: [
      "It requires paying massive registration fees directly to FINRA.",
      "Providing training, travel allowances, and commission structures to individual representatives involves a significantly higher financial investment per reached customer.",
      "State departments ban the use of laptops during face-to-face pitches.",
      "It is subject to higher premium tax brackets."
    ],
    answer: 1,
    explanation: "Reaching clients on an individual, face-to-face basis involves high training expenses, support structures, travel costs, and premium commission schedules, making it costly."
  },
  {
    id: 99,
    lo: "9L: Understand the advantages and disadvantages of personal selling",
    question: "Beyond financial expense, what is a primary operational 'Disadvantage' or limitation of relying purely on personal selling to reach customers?",
    options: [
      "It fails to provide any clear consumer education.",
      "It is highly time-consuming because a representative can typically consult with only a single customer or household at a time.",
      "It makes it impossible for agents to use digital illustration software.",
      "It is restricted only to the organizational group markets."
    ],
    answer: 1,
    explanation: "A major limit of personal selling is time. Because representatives must dedicate focused 1-on-1 time to each client, it cannot immediately reach wide, mass market segments like digital advertising."
  },
  {
    id: 100,
    lo: "9L: Understand the advantages and disadvantages of personal selling",
    question: "An advisor is consistently late to scheduled client meetings and behaves abruptly when asked questions. From a marketing perspective, what risk does this behavior pose to the insurance company?",
    options: [
      "It increases the company's capital reserve tax liabilities.",
      "The poor performance or bad manners of a single representative can severely damage the entire reputation of the insurance carrier.",
      "It triggers an automatic audit under FINRA Conduct Rule 2330.",
      "There is no direct consequence, as agents act non-affiliatedly."
    ],
    answer: 1,
    explanation: "A major risk of personal selling is that the company's brand reputation is in the hands of the individual producer; poor performance can alienate customers and hurt the brand."
  }
];
