import { Question } from '../../types';

export const chapter1Questions: Question[] = [
  // Objective 1A: Stakeholder groups
  {
    id: 1,
    lo: "1A: Identify stakeholder groups",
    question: "A party that has an interest in or a reason to concern itself with how an insurance company conducts its business is known as a:",
    options: ["Stakeholder", "Policyowner", "Reinsurer", "Competitor"],
    answer: 0,
    explanation: "A stakeholder (or constituent) is any party with an interest in the company's business conduct, ranging from owners to regulators."
  },
  {
    id: 2,
    lo: "1A: Owners - Stock Insurance Company",
    question: "Scenario: The Forbright Financial Company is owned by individuals who have purchased shares of the company's stock. Periodically, the board of directors distributes a portion of excess profits to these individuals. These payments are called:",
    options: ["Interest credits", "Premium refunds", "Policy dividends", "Stockholder dividends"],
    answer: 3,
    explanation: "Stockholders receive dividends as a share of the company's excess profits."
  },
  {
    id: 3,
    lo: "1A: Owners - Mutual Insurance Company",
    question: "Unlike stock insurance companies, mutual insurance companies are owned by their:",
    options: ["Bondholders", "Policyowners", "Board of Directors", "Stockholders"],
    answer: 1,
    explanation: "Mutual insurance companies are owned by the policyowners who have purchased policies from the company."
  },
  {
    id: 4,
    lo: "1A: Owners - Fraternal Benefit Society",
    question: "Scenario: The Unity Circle is a nonprofit organization that provides social and insurance benefits to its members. Members may periodically receive premium refunds. This entity is most likely a:",
    options: ["Fraternal benefit society", "Stock insurer", "Holding company", "Mutual insurer"],
    answer: 0,
    explanation: "Fraternal benefit societies are nonprofit organizations formed for social and insurance benefits for their members."
  },
  {
    id: 5,
    lo: "1A: Customers",
    question: "In the context of the insurance industry, which of the following groups are considered 'customers' of an insurer?",
    options: ["Only employees", "Policyowners, insureds, and beneficiaries", "Only policyowners", "Only regulators and rating agencies"],
    answer: 1,
    explanation: "Customers include policyowners, insureds, beneficiaries, applicants, and even financial professionals who advise them."
  },
  {
    id: 6,
    lo: "1A: Financial Professionals",
    question: "Scenario: Sarah is a licensed independent agent who advises clients on which insurance products best meet their needs. From the perspective of the insurance company, Sarah is considered a:",
    options: ["Sub-contractor", "Customer", "Support function", "Regulator"],
    answer: 1,
    explanation: "Financial professionals are considered customers of an insurer because they advise buyers and expect quality service to serve their clients."
  },
  {
    id: 7,
    lo: "1A: Compensation",
    question: "Most financial professionals receive the majority of their compensation for selling insurance products in the form of:",
    options: ["Bonuses", "Salaries", "Dividends", "Commissions"],
    answer: 3,
    explanation: "A commission is a percentage of the premiums the customer pays for an insurance policy."
  },

  // Objective 1B: Solvency vs Market Conduct Laws
  {
    id: 8,
    lo: "1B: Solvency Laws",
    question: "Regulations that focus on an insurance company's ability to pay its debts, contractual obligations, and operating expenses on time are known as:",
    options: ["Taxation laws", "Solvency laws", "Employment laws", "Market conduct laws"],
    answer: 1,
    explanation: "Solvency laws (prudential regulation) ensure that insurance companies remain financially capable of meeting their obligations."
  },
  {
    id: 9,
    lo: "1B: Market Conduct Laws",
    question: "Scenario: A regulator is reviewing the sales practices and claim administration procedures of a life insurer to ensure they are operating fairly. This review falls under:",
    options: ["Investment regulation", "Market conduct regulation", "Solvency regulation", "Taxation regulation"],
    answer: 1,
    explanation: "Market conduct laws (marketplace regulation) ensure that companies conduct nonfinancial operations fairly and ethically."
  },

  // Rating Agencies
  {
    id: 10,
    lo: "Rating Agencies",
    question: "Which of the following describes a rating agency?",
    options: ["A private organization that evaluates an insurer's financial condition", "A trade organization for financial professionals", "An internal department that audits company expenses", "A government body that sets insurance laws"],
    answer: 0,
    explanation: "Rating agencies (like A.M. Best or S&P) are private, independent organizations that rank insurers on financial stability."
  },

  // Reinsurers
  {
    id: 11,
    lo: "Reinsurance",
    question: "Scenario: Global Life transfers a portion of its death benefit risk to Secure Re to safeguard its financial stability. Global Life is known in this transaction as the:",
    options: ["Reinsurer", "Subsidiary", "Assuming company", "Direct writer"],
    answer: 3,
    explanation: "The company that transfers the risk is the direct writer (or ceding company); the company assuming it is the reinsurer."
  },

  // Balancing Stakeholders
  {
    id: 12,
    lo: "Balancing Stakeholder Interests",
    question: "Scenario: Apex Life has excess profits. Owners want a large dividend, while employees want a pay raise. The responsibility for identifying and prioritizing these conflicting interests lies with:",
    options: ["Management", "The Reinsurer", "The Customers", "Regulators"],
    answer: 0,
    explanation: "Management is responsible for identifying, safeguarding, and prioritizing the interests of various stakeholder groups."
  },

  // Objective 1C: Levels of management & 4 functions
  {
    id: 13,
    lo: "1C: Levels of Management",
    question: "Which group of people is elected by the owners of a company to set broad policies and appoint the CEO?",
    options: ["Department supervisors", "Senior-level managers", "Board of directors", "Middle-level managers"],
    answer: 2,
    explanation: "The board of directors is the top level of management, elected by owners to oversee the company."
  },
  {
    id: 14,
    lo: "1C: Inside vs Outside Directors",
    question: "Scenario: Mr. Chen serves on the board of directors of Zenith Life and also holds the position of Chief Financial Officer (CFO) within the company. Mr. Chen is an:",
    options: ["Ad hoc director", "Outside director", "Independent director", "Inside director"],
    answer: 3,
    explanation: "Inside directors hold positions within the company in addition to their board seats."
  },
  {
    id: 15,
    lo: "1C: Senior-Level Management",
    question: "The most senior member of management, often also serving as the company president, is the:",
    options: ["CEO", "CIO", "CFO", "COO"],
    answer: 0,
    explanation: "The Chief Executive Officer (CEO) is the most senior manager and is entrusted with broad authority by the board."
  },
  {
    id: 16,
    lo: "1C: Middle-Level Management",
    question: "Scenario: Maria is an expert in claim administration and manages the Claim Department. She reports to a Vice President. Maria is a:",
    options: ["Inside director", "Middle-level manager", "Senior-level manager", "First-level manager"],
    answer: 1,
    explanation: "Middle-level managers are typically functional experts in charge of smaller units like departments."
  },
  {
    id: 17,
    lo: "1C: Four Functions of Management",
    question: "Management activities such as leading, influencing, and motivating employees are part of the management function called:",
    options: ["Controlling", "Organizing", "Directing", "Planning"],
    answer: 2,
    explanation: "Directing involves leading and motivating; Organizing involves coordinating resources; Planning sets goals; Controlling monitors performance."
  },

  // Objective 1D: Organizational Concepts
  {
    id: 18,
    lo: "1D: Authority vs Responsibility",
    question: "An employee's right to make decisions, take action, and direct others is known as:",
    options: ["Responsibility", "Accountability", "Delegation", "Authority"],
    answer: 3,
    explanation: "Authority is the right to decide or act; Responsibility is the duty to perform the task."
  },
  {
    id: 19,
    lo: "1D: Delegation",
    question: "The process of assigning authority and responsibility to another employee for completing a specific task is:",
    options: ["Departmentalization", "Delegation", "Supervision", "Centralization"],
    answer: 1,
    explanation: "Delegation allows managers to assign tasks and the authority to complete them to others."
  },
  {
    id: 20,
    lo: "1D: Centralized vs Decentralized",
    question: "In a centralized organization, top management:",
    options: ["Shares decision-making authority with lower levels", "Does not create any strategic plans", "Delegates most policy decisions to supervisors", "Retains most of the decision-making authority"],
    answer: 3,
    explanation: "Centralization involves retaining authority at the top; Decentralization shares it."
  },

  // Objective 1E: Functional Areas (Line vs Support)
  {
    id: 21,
    lo: "1E: Line Functions",
    question: "Which of the following is considered a 'line function' in an insurance company?",
    options: ["Human Resources", "Legal", "Underwriting", "Accounting"],
    answer: 2,
    explanation: "Line functions directly affect the production or administration of products. Examples: Marketing, Underwriting, Claim Administration."
  },
  {
    id: 22,
    lo: "1E: Support Functions",
    question: "Functional areas that provide services like Actuarial, Investments, or Legal are known as:",
    options: ["Profit centers", "Strategic business units", "Line functions", "Support (Staff) functions"],
    answer: 3,
    explanation: "Support functions provide assistance to line functions or other support units."
  },

  // Objective 1F: Traditional Organization Ways
  {
    id: 23,
    lo: "1F: Organization by Function",
    question: "When an insurer divides its operations according to the work each division performs (e.g., separate units for Accounting and Marketing that serve all products), it is organized by:",
    options: ["Product", "Customer", "Function", "Territory"],
    answer: 2,
    explanation: "Functional organization groups divisions by the type of work performed."
  },
  {
    id: 24,
    lo: "1F: Organization by Product",
    question: "Scenario: Reliance Life has three divisions: Individual Life, Group Life, and Individual Annuities. Each division has its own marketing and actuarial teams. This company is organized by:",
    options: ["Function", "Market Type", "Product", "Distribution Channel"],
    answer: 2,
    explanation: "Product-based organization distributes work according to lines of insurance products."
  },

  // Objective 1G: Profit Center vs SBU
  {
    id: 25,
    lo: "1G: Profit Center",
    question: "A line of business that is evaluated on its profitability and is responsible for its own revenues and expenses is a:",
    options: ["Holding company", "Centralized unit", "Support function", "Profit center"],
    answer: 3,
    explanation: "Profit centers are independent business lines evaluated on their financial performance."
  },
  {
    id: 26,
    lo: "1G: Strategic Business Unit (SBU)",
    question: "An organizational unit that acts like an independent business, with its own set of customers, competitors, and budget, is most specifically called a:",
    options: ["Standing committee", "Line function", "Strategic Business Unit (SBU)", "Ad hoc committee"],
    answer: 2,
    explanation: "SBUs are highly autonomous units within a large corporation that act as independent businesses."
  },

  // Objective 1H: Committees
  {
    id: 27,
    lo: "1H: Standing vs Ad Hoc Committees",
    question: "A permanent committee used by executives as a source of continuing advice is a:",
    options: ["Project team", "Task force", "Standing committee", "Ad hoc committee"],
    answer: 2,
    explanation: "Standing committees are permanent; Ad hoc (project teams/tasks forces) are temporary."
  },
  {
    id: 28,
    lo: "1H: Audit Committee",
    question: "Which committee of the Board of Directors reviews the company's internal audit plan and periodic financial statements?",
    options: ["Audit committee", "Product development committee", "Executive committee", "Investment committee"],
    answer: 0,
    explanation: "The Audit Committee oversees accounting policies, audits, and financial reporting."
  },

  // Objective 1I: Holding Company Structure
  {
    id: 29,
    lo: "1I: Holding Company Definition",
    question: "A company that has a controlling interest in one or more other companies is a:",
    options: ["Profit center", "Reinsurer", "Holding company", "Subsidiary"],
    answer: 2,
    explanation: "Holding companies control other companies (subsidiaries)."
  },
  {
    id: 30,
    lo: "1I: Upstream vs Downstream",
    question: "Scenario: Best Life creates 'Best Holdings Inc.' as its owner. Best Holdings now controls Best Life. This is an example of an:",
    options: ["Upstream holding company", "Downstream holding company", "Ad hoc structure", "Independent SBU"],
    answer: 0,
    explanation: "An upstream holding company controls the corporation that formed it."
  },

  // ... (Continuing with more specific definitions and nuances to reach depth)
  {
    id: 31,
    lo: "1A: Stakeholder Interests",
    question: "The 'overriding common interest' of all stakeholders in an insurance company is:",
    options: ["Low prices for all products", "Higher pay for employees", "Continued solvency and profitable operations", "Large dividend payments"],
    answer: 2,
    explanation: "While interests diverge, the fundamental common interest is the company's survival (solvency) and profitability."
  },
  {
    id: 32,
    lo: "1C: Management Functions - Planning",
    question: "Strategic planning usually covers a time horizon of:",
    options: ["One month", "One year or less", "Three to five years", "Ten to twenty years"],
    answer: 2,
    explanation: "Strategic planning sets long-term goals, typically 3-5 years, whereas operational planning is 1 year or less."
  },
  {
    id: 33,
    lo: "1D: Division of Labor",
    question: "Breaking down the processing of a life insurance application into underwriting activities and policy issue activities is an example of:",
    options: ["Authority delegation", "Division of labor", "Centralization", "Departmentalization"],
    answer: 1,
    explanation: "Division of labor divides large tasks into smaller, specialized activities."
  },
  {
    id: 34,
    lo: "1E: Typical Functional Areas",
    question: "Which functional area ensures that the company conducts operations on a mathematically sound basis and determines reserve liabilities?",
    options: ["Treasury", "Marketing", "Actuarial", "Accounting"],
    answer: 2,
    explanation: "The Actuarial function handles mathematical soundness, product design, and reserve calculation."
  },
  {
    id: 35,
    lo: "1I: Advantages of Holding Company",
    question: "One advantage of a holding company structure is that it allows a company to:",
    options: ["Violate solvency laws", "Avoid all government regulation", "Merge all corporate cultures instantly", "Diversify products and protect from concentration risk"],
    answer: 3,
    explanation: "Holding companies allow for diversification into different businesses and easier access to funds."
  },
  {
    id: 36,
    lo: "1A: Stakeholders - Creditors",
    question: "Scenario: Forbright Financial borrows money from a major bank to fund a new technology platform. In this context, the bank becomes a:",
    options: ["Regulator", "Supplier stakeholder", "Reinsurer", "Creditor stakeholder"],
    answer: 3,
    explanation: "Banks and other lenders are creditor stakeholders who have an interest in the company's ability to repay debt."
  },
  {
    id: 37,
    lo: "Mission Statement",
    question: "A formal written statement of a company's fundamental purpose or reason for being is its:",
    options: ["Org chart", "Strategic plan", "Mission statement", "Policy dividend"],
    answer: 2,
    explanation: "The mission statement outlines the company's core purpose."
  },
  {
    id: 38,
    lo: "1B: Solvency vs Market Conduct",
    question: "Prudential regulation is another term for:",
    options: ["Market conduct regulation", "Tax regulation", "Labor law regulation", "Solvency regulation"],
    answer: 3,
    explanation: "Prudential regulation focuses on financial stability and solvency."
  },
  {
    id: 39,
    lo: "1C: Management Functions - Organizing",
    question: "The process of assembling and coordinating required resources to attain organizational goals is:",
    options: ["Organizing", "Directing", "Planning", "Controlling"],
    answer: 0,
    explanation: "Organizing involves coordinating resources like people, money, and technology."
  },
  {
    id: 40,
    lo: "1D: Accountability",
    question: "When an employee is answerable for how well he or she carries out assigned responsibilities, this is known as:",
    options: ["Authority", "Delegation", "Accountability", "Centralization"],
    answer: 2,
    explanation: "Accountability means being answerable for performance."
  },
  {
    id: 41,
    lo: "1E: Functional Areas - Information Technology",
    question: "Which functional area oversees the management of corporate data and uses technology to optimize company operations?",
    options: ["Underwriting", "Actuarial", "Treasury operations", "Information Technology"],
    answer: 3,
    explanation: "IT manages data and optimizes operations through technological solutions."
  },
  {
    id: 42,
    lo: "1F: Organization by Territory",
    question: "Scenario: Global Life has separate divisions for its North American operations and its Asian operations. This is an example of organization by:",
    options: ["Distribution channel", "Territory", "Product", "Function"],
    answer: 1,
    explanation: "Territorial organization divides the company based on geographic regions."
  },
  {
    id: 43,
    lo: "1H: Ad Hoc Committee",
    question: "A temporary committee established for a specific purpose, such as investigating why claims are escalating in one region, is an:",
    options: ["Ad hoc committee", "Executive committee", "Audit committee", "Standing committee"],
    answer: 0,
    explanation: "Ad hoc committees (or task forces) represent temporary groups for specific projects."
  },
  {
    id: 44,
    lo: "1I: Downstream Holding Company",
    question: "Scenario: Best Life Insurance Company creates a holding company called 'Best Holdings' which it owns. Best Holdings then owns two other subsidiaries. Best Holdings is an:",
    options: ["Strategic business unit", "Downstream holding company", "Upstream holding company", "Ad hoc committee"],
    answer: 1,
    explanation: "A downstream holding company is formed and owned by the company that created it."
  },
  {
    id: 45,
    lo: "1A: Customers - Beneficiaries",
    question: "Scenario: Mr. Smith is named as the recipient of the death benefit in his wife's life insurance policy. In the insurer's view, Mr. Smith is a:",
    options: ["Policyowner", "Customer", "Stockholder", "Regulator"],
    answer: 1,
    explanation: "Beneficiaries are considered customers of the insurance company."
  },
  {
    id: 46,
    lo: "1C: Management Functions - Controlling",
    question: "The management function that involves monitoring whether the company's performance is meeting its goals and taking corrective action if it is not is:",
    options: ["Controlling", "Organizing", "Planning", "Directing"],
    answer: 0,
    explanation: "Controlling monitors and corrects performance."
  },
  {
    id: 47,
    lo: "1D: Chain of Command",
    question: "A visual display of the lines of authority and responsibility within a company is an:",
    options: ["SWOT analysis", "Strategic plan", "Reinsurance treaty", "Organization chart"],
    answer: 3,
    explanation: "An org chart displays reporting lines and the chain of command."
  },
  {
    id: 48,
    lo: "1E: Functional Areas - Underwriting",
    question: "Which functional area is responsible for ensuring the company classifies proposed insureds so they fall within the range of mortality rates assumed during product design?",
    options: ["Actuarial", "Marketing", "Claim administration", "Underwriting"],
    answer: 3,
    explanation: "Underwriting assesses and classifies risk to match pricing assumptions."
  },
  {
    id: 49,
    lo: "1G: Strategic Business Unit (SBU) Benefits",
    question: "The primary advantage of creating profit centers or SBUs is that it allows management to:",
    options: ["Identify which business lines are performing above or below expectations", "Avoid duplicating support functions", "Reduce the number of managers needed", "Ensure centralized decision making"],
    answer: 0,
    explanation: "Profit centers allow for better performance tracking by segment."
  },
  {
    id: 50,
    lo: "1H: Executive Committee",
    question: "Which board committee deals with questions of overall company policy and items not specifically assigned to other board committees?",
    options: ["Audit committee", "Executive committee", "Product development committee", "Investment committee"],
    answer: 1,
    explanation: "The Executive Committee handles broad policy and unassigned items."
  },
  {
    id: 51,
    lo: "1A: Stakeholders - Rating Agencies",
    question: "Scenario: A potential investor is checking the financial strength of Best Life. They consult A.M. Best and Standard & Poor's. These organizations are called:",
    options: ["Reinsurers", "Rating agencies", "Regulators", "Trade organizations"],
    answer: 1,
    explanation: "Rating agencies are independent organizations that evaluate and rank the financial condition of insurers."
  },
  {
    id: 52,
    lo: "1A: Stakeholders - Trade Organizations",
    question: "Groups that represent the interests of the insurance industry as a whole, such as the American Council of Life Insurers (ACLI), are examples of:",
    options: ["Regulators", "Profit centers", "Rating agencies", "Trade organizations"],
    answer: 3,
    explanation: "Trade organizations represent collective industry interests and provide research and advocacy."
  },
  {
    id: 53,
    lo: "1C: Levels of Management - Lower-Level",
    question: "Managers who are in charge of subunits of departments and spend more time in direct supervision of nonmanagement employees are:",
    options: ["Supervisors (First-level managers)", "Middle-level managers", "Senior-level managers", "Inside directors"],
    answer: 0,
    explanation: "First-level managers or supervisors directly oversee the work of nonmanagement staff."
  },
  {
    id: 54,
    lo: "1C: Management Functions - Planning",
    question: "The process of preparing for the future by establishing goals and formulating strategies is:",
    options: ["Directing", "Organizing", "Planning", "Controlling"],
    answer: 2,
    explanation: "Planning is the foundational function that sets future direction."
  },
  {
    id: 55,
    lo: "1C: Planning - Strategy vs Tactics",
    question: "Scenario: Zenith Life decides to expand into the Asian market (a long-term goal). To do this, they plan to hire 50 new agents in Tokyo (a specific task). The long-term goal is a ______, and the hiring task is a ______.",
    options: ["Tactic; Strategy", "Strategy; Tactic", "Plan; Goal", "Goal; Objective"],
    answer: 1,
    explanation: "Strategies are broad courses of action for long-term goals; tactics are the specific tasks required to achieve them."
  },
  {
    id: 56,
    lo: "1C: Operational Planning",
    question: "Middle-level managers conduct _______ planning, which typically covers a period of one year or less.",
    options: ["Operational (Tactical)", "Long-range", "Fiduciary", "Strategic"],
    answer: 0,
    explanation: "Operational planning translates strategic goals into short-term, day-to-day activity plans."
  },
  {
    id: 57,
    lo: "1D: Departmentalization",
    question: "The process of grouping similar or related work activities into units is known as:",
    options: ["Decentralization", "Division of labor", "Delegation", "Departmentalization"],
    answer: 3,
    explanation: "Departmentalization groups jobs to facilitate supervision and coordination."
  },
  {
    id: 58,
    lo: "1D: Decentralized Organizations",
    question: "A major advantage of a decentralized organization is that it:",
    options: ["Ensures absolute consistency in all policy decisions", "Eliminates the need for middle management", "Allows decisions to be made closer to the customer", "Requires fewer managers than centralized firms"],
    answer: 2,
    explanation: "Decentralization allows for faster responses and more personalized customer decisions."
  },
  {
    id: 59,
    lo: "1E: Functional Areas - New Business",
    question: "Which functional area oversees the process from the receipt of an application through the issuance of the insurance policy?",
    options: ["New business administration", "Annuity administration", "Marketing", "Underwriting"],
    answer: 0,
    explanation: "New business administration handles the logistics of the policy issuance process."
  },
  {
    id: 60,
    lo: "1E: Functional Areas - Customer Service",
    question: "Interacting with customers and providing them information to help perform transactions is the primary role of:",
    options: ["Customer service", "Marketing", "Accounting", "New business administration"],
    answer: 0,
    explanation: "Customer service is the primary point of contact for ongoing policyowner needs."
  },
  {
    id: 61,
    lo: "1E: Functional Areas - Treasury Operations",
    question: "The functional area that manages and invests the cash coming into and out of a company is:",
    options: ["Accounting", "Treasury operations", "Actuarial", "Investments"],
    answer: 1,
    explanation: "Treasury operations handles cash management and liquidity."
  },
  {
    id: 62,
    lo: "1F: Organization by Customer Type",
    question: "Scenario: Best Life has two separate divisions: one for household markets and another for corporate markets. This is organization by:",
    options: ["Product", "Customer type", "Territory", "Function"],
    answer: 1,
    explanation: "Organization by customer type creates divisions based on specific market segments."
  },
  {
    id: 63,
    lo: "1F: Organization by Distribution Channel",
    question: "An insurer that has an 'Agency division' and a 'Direct-to-consumer division' is organized by:",
    options: ["Product", "Territory", "Function", "Distribution system"],
    answer: 3,
    explanation: "Distribution system organization focuses on how products reach the buyer."
  },
  {
    id: 64,
    lo: "1H: Standing Committees - Board Level",
    question: "Which board-level committee determines the broad investment policy of the company?",
    options: ["Budget committee", "Investment committee", "Audit committee", "Executive committee"],
    answer: 1,
    explanation: "The Investment Committee sets the overall guidelines for company asset management."
  },
  {
    id: 65,
    lo: "1H: Interdepartmental Committees - ALCO",
    question: "The committee that analyzes the unique asset and liability characteristics of a company's products is the:",
    options: ["Corporate communications committee", "Asset/liability committee (ALCO)", "Product development committee", "Budget committee"],
    answer: 1,
    explanation: "ALCO coordinates investment strategy with product design to manage financial risk."
  },
  {
    id: 66,
    lo: "1I: Subsidiaries",
    question: "A company that is owned or controlled by another company is known as a:",
    options: ["Parent company", "Holding company", "Subsidiary", "Reinsurer"],
    answer: 2,
    explanation: "Subsidiaries are the individual companies controlled by a holding company."
  },
  {
    id: 67,
    lo: "1I: Upstream Holding Company Characteristics",
    question: "Which type of insurance company CANNOT be owned by another company, thus cannot be part of an upstream holding company system?",
    options: ["Fraternal benefit society", "Both B and C", "Stock insurance company", "Mutual insurance company"],
    answer: 1,
    explanation: "Mutual companies and fraternal societies are owned by policyowners/members and do not issue stock; they cannot be owned by others."
  },
  {
    id: 68,
    lo: "1A: Stakeholders - Suppliers",
    question: "Scenario: A company that provides office equipment and software to Forbright Financial is a stakeholder known as a:",
    options: ["Vendor/Supplier", "Customer", "Regulator", "Creditor"],
    answer: 0,
    explanation: "Suppliers provide the goods and services necessary for the company to operate."
  },
  {
    id: 69,
    lo: "1C: Management Levels - Middle-Level Role",
    question: "Functional experts who manage specific departments, like the claim or actuarial department, are typically:",
    options: ["Independent directors", "Middle-level managers", "Senior-level managers", "First-level supervisors"],
    answer: 1,
    explanation: "Middle-level managers are the departmental experts between seniors and supervisors."
  },
  {
    id: 70,
    lo: "1B: Market Conduct Laws Focus",
    question: "Which of the following is a focus of market conduct laws?",
    options: ["Adequacy of reserve liabilities", "Company investment limits", "Fair claim administration practices", "Minimum capital requirements"],
    answer: 2,
    explanation: "Market conduct laws focus on fair business practices like claims, sales, and service."
  },
  {
    id: 71,
    lo: "1A: Stakeholders - Employees",
    question: "Insurance company employees are stakeholders because their efforts significantly impact:",
    options: ["Success and profitability of company operations", "The election of the Board of Directors", "Taxation laws in their region", "The company's social media presence"],
    answer: 0,
    explanation: "Employees' work directly determines the company's operational success."
  },
  {
    id: 72,
    lo: "1C: Planning Process",
    question: "Taking into consideration company resources, strengths, weaknesses, and the environment is part of:",
    options: ["Organizing", "Delegating", "Planning", "Controlling"],
    answer: 2,
    explanation: "Planning requires analyzing the internal and external environment."
  },
  {
    id: 73,
    lo: "1D: Authority Delegation",
    question: "When a manager assigns a task to an employee, they must also provide the ______ to meet their responsibilities.",
    options: ["Supervision", "Accountability", "Authority", "Liability"],
    answer: 2,
    explanation: "Delegation is ineffective without giving the person the authority to take action."
  },
  {
    id: 74,
    lo: "1E: Functional Areas - Compliance",
    question: "Which function ensures that the company's operations comply with financial services and insurance department regulations in every jurisdiction it operates in?",
    options: ["Compliance", "Accounting", "HR", "Legal"],
    answer: 0,
    explanation: "Compliance is specifically focused on meeting regulatory requirements."
  },
  {
    id: 75,
    lo: "1E: Functional Areas - HR",
    question: "Matters related to hiring, training, evaluating, and terminating employees are handled by:",
    options: ["Accounting", "Legal", "Directing", "Human Resources"],
    answer: 3,
    explanation: "HR manages the workforce lifecycle."
  },
  {
    id: 76,
    lo: "1F: Functional Organization Advantage",
    question: "The major advantage of organizing operations by function is its:",
    options: ["Personalized customer focus", "Avoidance of duplicate support functions", "Ease of diversifying into separate markets", "Simplicity and focus on technical skills in each area"],
    answer: 3,
    explanation: "Functional organization is simple and build-up deep expertise in specific work areas."
  },
  {
    id: 77,
    lo: "1G: SBU Characteristics",
    question: "A Strategic Business Unit (SBU) typically has its own identifying ______ and its own set of ______.",
    options: ["Legal name; Employees", "Profits; Competitors", "CEO; Regulators", "Tax ID; Reinsurers"],
    answer: 1,
    explanation: "SBUs act like independent businesses with their own financial targets and rivals."
  },
  {
    id: 78,
    lo: "1H: Board Committees",
    question: "Officers of a company and members of its board make up several of the most important ______ committees of any business.",
    options: ["Temporal", "Ad hoc", "External", "Standing"],
    answer: 3,
    explanation: "Standing committees are permanent fixtures for ongoing governance."
  },
  {
    id: 79,
    lo: "1H: Standing Committee Definition",
    question: "The word used to describe a permanent committee that executives use for continuing advice is:",
    options: ["Project team", "Standing committee", "Task force", "Ad hoc group"],
    answer: 1,
    explanation: "Standing committees are permanent; other terms imply temporary structures."
  },
  {
    id: 80,
    lo: "1I: Controlling Interest",
    question: "A holding company exists when a company owns enough shares of another company's stock to control its operations. This is known as a:",
    options: ["Minority interest", "Shared interest", "Statutory interest", "Controlling interest"],
    answer: 3,
    explanation: "A controlling interest gives the parent company authority over the subsidiary."
  },
  {
    id: 81,
    lo: "1A: Stockholder Rights",
    question: "Stockholders receive excess profits in the form of stockholder dividends. These dividends are payments to the:",
    options: ["Customers", "Creditors", "Owners", "Regulators"],
    answer: 2,
    explanation: "As owners of a stock company, stockholders are entitled to a share of profits."
  },
  {
    id: 82,
    lo: "1A: Policyowner Rights",
    question: "In a mutual company, policy dividends are considered to be a:",
    options: ["Stockholder profit", "Taxable salary", "Guaranteed interest credit", "Return of a portion of the premium"],
    answer: 3,
    explanation: "Mutual policy dividends are conceptually a refund of surplus premium."
  },
  {
    id: 83,
    lo: "1C: Management Functions - Directing",
    question: "Supervision corresponds to the formal functions of:",
    options: ["Planning and Organizing", "Accounting and Legal", "Directing and Controlling", "Marketing and Sales"],
    answer: 2,
    explanation: "Managers supervise through directing (leading) and controlling (checking progress)."
  },
  {
    id: 84,
    lo: "1D: Chain of Command Function",
    question: "The chain of command identifies:",
    options: ["Who reports to whom", "The company's mission", "The company's investment policy", "The profitability of each department"],
    answer: 0,
    explanation: "The chain of command defines the vertical reporting structure."
  },
  {
    id: 85,
    lo: "1E: Functional Areas - Legal",
    question: "Which functional area drafts the contracts that insurers use in the course of business?",
    options: ["Marketing", "Legal", "Accounting", "Actuarial"],
    answer: 1,
    explanation: "Legal drafts and reviews policy forms and contracts."
  },
  {
    id: 86,
    lo: "1F: Territory Organization Driver",
    question: "Organizing by territory makes sense when ______ differences exist among the various regions.",
    options: ["Regulatory or language", "Marketing", "Employee salary", "Product"],
    answer: 0,
    explanation: "Local differences in laws and languages often necessitate territorial divisions."
  },
  {
    id: 87,
    lo: "1H: Product Development Committee",
    question: "The interdepartmental committee that decides whether enough consumer demand exists for a new product is the:",
    options: ["Corporate communications committee", "Budget committee", "Product development committee", "Audit committee"],
    answer: 2,
    explanation: "The PDC evaluates market research for potential new product launches."
  },
  {
    id: 88,
    lo: "1I: Downstream Holding Company Setup",
    question: "In a downstream holding company arrangement, Best Life creates Best Holdings, which in turn owns subsidiaries. Who does the President of Best Holdings report to?",
    options: ["The CEO of Best Life", "The policyowners", "The Reinsurer", "Regulators"],
    answer: 0,
    explanation: "Since the holding company is owned by Best Life, its leader reports to the creator's CEO."
  },
  {
    id: 89,
    lo: "1B: Solvency Definition",
    question: "The ability of a company to pay its debts and contractual obligations on time is:",
    options: ["Solvency", "Profitability", "Efficiency", "Liquidity"],
    answer: 0,
    explanation: "Solvency is the core requirement for an insurer to remain viable."
  },
  {
    id: 90,
    lo: "1C: senior-Level Management - Vice President",
    question: "Each vice president in an insurance company usually supervises and coordinates the activities of a:",
    options: ["Strategic Business Unit", "Profit center", "Temporary task force", "Major division"],
    answer: 3,
    explanation: "VPs typically head major organizational divisions."
  },
  {
    id: 91,
    lo: "1E: Functional Areas - Annuity Administration",
    question: "Which functional area is specifically responsible for processing annuity payments?",
    options: ["Treasury", "Annuity administration", "Actuarial", "Claim administration"],
    answer: 1,
    explanation: "Annuity administration handles the payouts for annuity products."
  },
  {
    id: 92,
    lo: "1F: Product Organization Disadvantage",
    question: "What is a common drawback of organizing as profit centers or SBUs?",
    options: ["Too much centralization", "Slower decision making", "Duplication of some support functions", "Lack of technical expertise"],
    answer: 2,
    explanation: "Having separate divisions often means duplicating departments like IT or Accounting for each product."
  },
  {
    id: 93,
    lo: "1G: Profit Center Evaluation",
    question: "A profit center is evaluated on its:",
    options: ["Profitability (revenues vs expenses)", "Marketing reach", "Compliance reports", "Number of employees"],
    answer: 0,
    explanation: "The primary metric for a profit center is its financial result."
  },
  {
    id: 94,
    lo: "1H: Ad Hoc Committee Disbanding",
    question: "Once an ad hoc committee's purpose is accomplished, the committee is:",
    options: ["Promoted to a standing committee", "Reorganized by territory", "Disbanded", "Sent to the Board of Directors"],
    answer: 2,
    explanation: "Ad hoc teams are temporary by definition."
  },
  {
    id: 95,
    lo: "1I: Holding Company Advantage",
    question: "A holding company often has greater access to external funds than an individual insurance company. This is through:",
    options: ["Customer premiums", "Only policy dividends", "Regulatory grants", "Borrowing or issuing shares of stock in the holding company"],
    answer: 3,
    explanation: "Holding companies have broader capital market reach."
  },
  {
    id: 96,
    lo: "1D: Accountability vs Authority",
    question: "Scenario: A manager gives an employee the task to audit files but does not give the login credentials to the system. This manager has assigned ______ without ______.",
    options: ["Accountability; Planning", "Responsibility; Authority", "Authority; Responsibility", "Strategy; Tactics"],
    answer: 1,
    explanation: "Responsibility is the duty; authority is the power to perform it."
  },
  {
    id: 97,
    lo: "1E: Functional Areas - Accounting",
    question: "Which area maintains financial records and files required financial statements with regulators?",
    options: ["Accounting", "Legal", "Investments", "Treasury operations"],
    answer: 0,
    explanation: "Accounting deals with financial reporting and external records."
  },
  {
    id: 98,
    lo: "1I: Holding Company Clashes",
    question: "A holding company structure helps eliminate potential problems like:",
    options: ["Taxes", "Government audits", "Competition from other SBUs", "Corporate culture clashes"],
    answer: 3,
    explanation: "Keeping companies as distinct entities under a holding structure can reduce integration friction."
  },
  {
    id: 99,
    lo: "1C: Board of Directors Election",
    question: "The owners of a company elect the board of directors. In a stock company, these owners are ______; in a mutual company, they are ______.",
    options: ["Regulators; Reinsurers", "Managers; Employees", "Stockholders; Policyowners", "Policyowners; Stockholders"],
    answer: 2,
    explanation: "Stockholders own stock; mutual policyowners own the company through their policies."
  },
  {
    id: 100,
    lo: "1A: stakeholder interests divergence",
    question: "Beyond the common goal of solvency, different stakeholder interests can diverge from, and এমনকি conflict with, each other. This must be managed by:",
    options: ["Management", "Owners", "Regulators", "Rating Agencies"],
    answer: 0,
    explanation: "Deciding whose interest to prioritize in a conflict is a core management duty."
  }
];
