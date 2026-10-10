import { Question } from '../../types';

export const chapter3Questions: Question[] = [
  // --- OBJECTIVE 3A: Legal Function vs. Compliance Function (1-12) ---
  {
    id: 1,
    lo: "3A: Legal Function vs Compliance Function",
    question: "The area of an insurer's operations that handles legal matters, drafts contracts, and represents the firm in lawsuits is called the:",
    options: ["Legal function", "Regulatory function", "Compliance function", "Underwriting function"],
    answer: 0,
    explanation: "The legal function represents the area of operations handling formal legal matters such as contracts, legal advice, and legal disputes."
  },
  {
    id: 2,
    lo: "3A: Legal Function vs Compliance Function",
    question: "Scenario: Apex Life has implemented standard daily operating procedures to ensure that all customer personal data is stored in compliance with local privacy laws. This preventative oversight is an example of the:",
    options: ["Administrative function", "Compliance function", "Legal function", "Actuarial function"],
    answer: 1,
    explanation: "The compliance function ensures that ongoing company operations adhere to internal policies, procedures, and relevant laws across jurisdictions."
  },
  {
    id: 3,
    lo: "3A: Legal Function vs Compliance Function",
    question: "Which of the following is a primary point of difference between the legal and compliance functions in a life insurance company?",
    options: [
      "The legal function primarily handles specific legal disputes, court actions, and contract reviews, while the compliance function focuses on ensuring day-to-day operations follow laws, regulations, and policies.",
      "The legal function is only for external parties, while compliance is only for internal staff.",
      "The compliance function can authorize changes to state insurance statutes, whereas the legal function cannot.",
      "The compliance department cannot consult with the company's Board of Directors under any organizational setup."
    ],
    answer: 0,
    explanation: "The legal function focuses on resolving explicit legal issues, contracts, and disputes (defending/representing). The compliance function proactively ensures operations are conducted within legal and regulatory frameworks."
  },
  {
    id: 4,
    lo: "3A: Legal Function vs Compliance Function",
    question: "Scenario: An administrative clerk at Aurora Mutual discovers that the marketing team is distributing a brochure that contains misleading product definitions. To handle this, which department would coordinate internally to retract the materials and update the staff on compliant advertising standards?",
    options: ["Legal Department", "Claims", "Underwriting", "Compliance Department"],
    answer: 3,
    explanation: "The compliance department typically oversees daily monitoring, training, and rectifying operational issues such as non-compliant advertising."
  },
  {
    id: 5,
    lo: "3A: Legal Function vs Compliance Function",
    question: "When a claimant files a lawsuit against Zenith Life claiming unfair claim settlement, which department is directly responsible for coordinating the defense of the company in a court of law?",
    options: ["Actuarial department", "Legal department", "Compliance department", "Customer service department"],
    answer: 1,
    explanation: "Handling litigation and representing the company in a lawsuit is a core responsibility of the legal function/department."
  },
  {
    id: 6,
    lo: "3A: Legal Function vs Compliance Function",
    question: "Scenario: Integrity Life is drafting new policy rider terms for its variable annuity products. The drafting and verification of legally binding language is primarily a responsibility of the company's:",
    options: ["Marketing function", "IT function", "Compliance function", "Legal function"],
    answer: 3,
    explanation: "Preparing and reviewing the binding contract terms and legal wording is a traditional legal function."
  },
  {
    id: 7,
    lo: "3A: Legal Function vs Compliance Function",
    question: "The legal and compliance departments have a highly integrated relationship. Which of the following best describes this relationship?",
    options: [
      "The compliance department manages all formal corporate litigation, while the legal department monitors privacy laws.",
      "The compliance department is a subsection of the marketing department and does not communicate with the legal department.",
      "They operate completely independently of each other without any common reporting relationships.",
      "The legal department acts as the final legal authority, while the compliance department monitors and implements regulatory rules into operational workflows."
    ],
    answer: 3,
    explanation: "While they have different operational focus areas, a close relationship exists where legal provides counsel and compliance monitors and implements requirements."
  },
  {
    id: 8,
    lo: "3A: Legal Function vs Compliance Function",
    question: "Scenario: A regulatory update is passed in a state regarding the disclosure of interest rates on universal life products. The compliance specialist and the corporate attorney work together to update the company policy. In this context, who is primarily responsible for ensuring that the actual sales agents are trained on this new rule?",
    options: ["Compliance function", "Actuarial function", "Legal function", "Financial accounting function"],
    answer: 0,
    explanation: "The compliance function is responsible for education, training, and monitoring that employees and agents follow policies."
  },
  {
    id: 9,
    lo: "3A: Legal Function vs Compliance Function",
    question: "A difference between legal and compliance is that the compliance function is predominantly focused on which of the following?",
    options: [
      "Proactive, daily prevention and monitoring of regulatory violations in business transactions",
      "Direct litigation in a courtroom",
      "Issuing certificates of authority to other insurers",
      "Filing lawsuits against competitors"
    ],
    answer: 0,
    explanation: "Compliance operations are largely preventative, aiming to avoid regulatory action, fines, and lawsuits through day-to-day oversight."
  },
  {
    id: 10,
    lo: "3A: Legal Function vs Compliance Function",
    question: "Scenario: Sterling Mutual decides to review its internal employee code of conduct and set new guidelines regarding appropriate client gifts. This review is coordinated by the chief compliance officer (CCO). This activity is classified under:",
    options: ["Corporate litigation", "Compliance function", "Product development", "Investment management"],
    answer: 1,
    explanation: "Guidelines relating to professional ethics, codes of conduct, and business guidelines fall directly under the compliance function."
  },
  {
    id: 11,
    lo: "3A: Legal Function vs Compliance Function",
    question: "Generally, which function serves as the chief advisory body regarding legal risks, corporate structure changes, and formal regulatory disputes?",
    options: ["Sales function", "Legal function", "Compliance function", "Internal audit function"],
    answer: 1,
    explanation: "The legal function serves in an advisory capacity concerning structural changes and official legal representation in disputes."
  },
  {
    id: 12,
    lo: "3A: Legal Function vs Compliance Function",
    question: "A company operates with a strong commitment to regulatory compliance and ethical standards. In this environment, the legal and compliance functions are seen as:",
    options: [
      "Non-essential expenses that should be outsourced entirely to save on administrative costs",
      "Purely reactive units with no input on corporate governance",
      "Opponents of company growth and sales operations",
      "Proactive partners critical to protecting the company's financial stability and reputation"
    ],
    answer: 3,
    explanation: "In modern corporative governance, legal and compliance functions are proactive partners essential for reputation and stability."
  },

  // --- OBJECTIVE 3B: Organizing Legal and Compliance Departments (13-24) ---
  {
    id: 13,
    lo: "3B: Organizing Legal and Compliance Departments",
    question: "Scenario: SafeHarbor Insurance is a small regional insurer operating in only one state. To keep expenses low, which organizational structure is SafeHarbor most likely to use for its legal and compliance activities?",
    options: [
      "Outsourcing all legal and compliance duties to the state department of insurance",
      "De-centralization with localized compliance teams in ten regional offices",
      "Separate legal and compliance departments reporting to different boards",
      "A combined department where the legal department handles both legal and compliance functions"
    ],
    answer: 3,
    explanation: "Smaller companies operating in fewer jurisdictions are more likely to combine both functions in a single department (the law/legal department)."
  },
  {
    id: 14,
    lo: "3B: Organizing Legal and Compliance Departments",
    question: "Scenario: Peak Performance Life is a large national insurer. To emphasize compliance and ensure its independence, Peak Performance maintains separate legal and compliance departments. This organizational separation is done primarily to:",
    options: [
      "Fulfill a mandatory federal law requiring separation for all financial firms",
      "Double the regulatory reporting expenses of the firm",
      "Emphasize the importance of the compliance function and ensure its operational independence",
      "Avoid communication between attorneys and compliance specialists"
    ],
    answer: 2,
    explanation: "Separate departments are used by larger companies to give prominence and critical independence to the compliance function."
  },
  {
    id: 15,
    lo: "3B: Organizing Legal and Compliance Departments",
    question: "The individual in charge of an insurance company's legal department is commonly known as the:",
    options: ["Chief Financial Officer", "General Counsel", "Chief Risk Officer", "Managing Director of Regulatory Affairs"],
    answer: 1,
    explanation: "The person in charge of an insurance company's legal department is known as the general counsel or chief counsel."
  },
  {
    id: 16,
    lo: "3B: Organizing Legal and Compliance Departments",
    question: "Scenario: Sarah Vance is the general counsel of Guardian Life. To whom does Sarah typically report directly regarding top-level legal concerns of the corporate entity?",
    options: ["The company's Chief Executive Officer (CEO)", "The State Insurance Commissioner", "The Chief Compliance Officer (CCO)", "The lead external auditor"],
    answer: 0,
    explanation: "The general counsel usually reports directly to the company's CEO and advises the company's board of directors on important legal issues."
  },
  {
    id: 17,
    lo: "3B: Organizing Legal and Compliance Departments",
    question: "The officer responsible for overseeing and managing a company's compliance with regulatory requirements and internal business policies is the:",
    options: ["Chief Financial Officer (CFO)", "Vice President of sales", "Chief Compliance Officer (CCO)", "Director of human resources"],
    answer: 2,
    explanation: "The Chief Compliance Officer (CCO) is responsible for overseeing and managing compliance operations."
  },
  {
    id: 18,
    lo: "3B: Organizing Legal and Compliance Departments",
    question: "Scenario: A very large insurer, Horizon Group, is organized by separate product lines (annuities, individual life, group health). Regarding compliance organization, Horizon Group is likely to establish a corporate-wide compliance department while:",
    options: [
      "Forbidding product divisions from hiring any administrative advisors",
      "Delegating compliance responsibility for each division to compliance personnel within that division",
      "Eliminating the position of Chief Compliance Officer entirely",
      "Assigning all compliance activities to a single regional office under a state regulator"
    ],
    answer: 1,
    explanation: "Very large insurers often maintain a central compliance department but delegate division-specific compliance to personnel inside those business units."
  },
  {
    id: 19,
    lo: "3B: Organizing Legal and Compliance Departments",
    question: "If an insurance company chooses to combine its legal and compliance activities under a single leader, that person who serves as the General Counsel also acts as the:",
    options: ["State regulator", "Chief Executive Officer", "Chief Underwriter", "Chief Compliance Officer"],
    answer: 3,
    explanation: "In some combined structures, the general counsel holds the dual title and responsibilities of the chief compliance officer."
  },
  {
    id: 20,
    lo: "3B: Organizing Legal and Compliance Departments",
    question: "If a company designates the CCO as a separate position from the general counsel, the CCO typically reports to:",
    options: [
      "The general counsel or the CEO",
      "The Secretary of State of the domicile",
      "The Director of Marketing or the Sales Director",
      "The Underwriting Department Manager"
    ],
    answer: 0,
    explanation: "If separate, the CCO reports either to the general counsel or directly to the company's chief executive officer (CEO)."
  },
  {
    id: 21,
    lo: "3B: Organizing Legal and Compliance Departments",
    question: "Which of the following is true about attorneys and legal staff in an insurance company setup?",
    options: [
      "They must be independent external contractors and cannot be full-time company employees.",
      "They report to the Department of Labor instead of company executives.",
      "They are prohibited from managing or communicating with external outside counsel.",
      "They report to the General Counsel and assist him or her in advising the board of directors and supporting internal departments."
    ],
    answer: 3,
    explanation: "Attorneys and legal department staff report to the general counsel and provide advisory support across the organization."
  },
  {
    id: 22,
    lo: "3B: Organizing Legal and Compliance Departments",
    question: "Scenario: A board of directors is assessing whether to separate the internal compliance function from the legal department. In terms of best practice, separating the compliance department:",
    options: [
      "Provides greater visibility, focus, and structural authority to the compliance management program",
      "Allows the company to ignore state licensing requirements",
      "Reduces overall accountability of employees",
      "Eliminates the requirement for the company to undergo market conduct examinations"
    ],
    answer: 0,
    explanation: "Separating compliance gives the function focused visibility, structural independence, and highlights its importance to stakeholders."
  },
  {
    id: 23,
    lo: "3B: Organizing Legal and Compliance Departments",
    question: "In standard insurance company operations, who does the general counsel provide legal advice to during a corporate restructuring?",
    options: [
      "The CEO, the Board of Directors, and key internal departments",
      "The state government exclusively",
      "The general public via marketing campaigns",
      "The competitors of the insurance company"
    ],
    answer: 0,
    explanation: "The GC serves as an advisory body to the Board of Directors, the CEO, and various internal business departments."
  },
  {
    id: 24,
    lo: "3B: Organizing Legal and Compliance Departments",
    question: "Corporate governance failures in the financial sector have highlighted the importance of the compliance department. What is a key organizational requirement for this department to be effective?",
    options: [
      "The CCO must make all daily investment trading decisions personally.",
      "It must be subservient to Sales to maximize policy conversions.",
      "It must be backed by senior management's commitment to ethics and have the authority to act independently.",
      "Its staff should not have access to internal email control systems."
    ],
    answer: 2,
    explanation: "An effective compliance management program requires clear authority, executive backing, and an integrated ethical culture."
  },

  // --- OBJECTIVE 3C: Characteristics of a Corporation (25-36) ---
  {
    id: 25,
    lo: "3C: Characteristics of a Corporation",
    question: "A corporation is defined as a legal entity that is:",
    options: [
      "An informal partnership which cannot enter into legally binding contracts",
      "Separate from its owners, created by government authority, and continues beyond the death of its owners",
      "Exclusively owned by the state or federal government",
      "Identical to its owners and terminates upon the death of its primary owner"
    ],
    answer: 1,
    explanation: "A corporation is a legal entity, separate from its owners, created by government authority, with continuous existence beyond the death of its owners."
  },
  {
    id: 26,
    lo: "3C: Characteristics of a Corporation",
    question: "Because a corporation is recognized as a 'legal person', it has the legal capacity to perform all of the following EXCEPT:",
    options: [
      "Be a party in a civil or criminal legal action",
      "Own, buy, and sell real estate or personal property",
      "Vote in public government elections",
      "Enter into binding contracts on its own behalf"
    ],
    answer: 2,
    explanation: "A corporation can contract, hold property, and sue or be sued, but it is not a natural person and cannot vote in public political elections."
  },
  {
    id: 27,
    lo: "3C: Characteristics of a Corporation",
    question: "Scenario: An investor, Charles Kim, purchases 500 shares of stock in Summit Life, a stock insurance company. If Summit Life becomes insolvent with heavy debts, what is the maximum amount of financial loss Charles can suffer in relation to his investment?",
    options: [
      "His entire personal net worth is liable to pay off Summit Life's creditors.",
      "There is no loss possible because stock owners are fully insured by the federal government.",
      "He is responsible for a pro-rata share of Summit's outstanding corporate debt beyond his investment.",
      "Only the amount of his ownership interest (the money he invested to purchase the shares)."
    ],
    answer: 3,
    explanation: "A major characteristic of a corporation is limited liability, meaning an owner's personal liability is limited to his or her investment in the corporation."
  },
  {
    id: 28,
    lo: "3C: Characteristics of a Corporation",
    question: "Why do regulatory laws in the United States and Canada typically require insurers to be organized as corporations instead of sole proprietorships?",
    options: [
      "Corporations are not subjected to state insurance audits.",
      "Insurers need long-term permanence and financial stability to meet obligations that can span decades.",
      "Sole proprietors are forbidden from using paper applications.",
      "Corporations pay fewer taxes than sole proprietorships."
    ],
    answer: 1,
    explanation: "Because insurance policies have long durations, customers and regulators need assurance of the company's permanence, which corporate continuous existence provides."
  },
  {
    id: 29,
    lo: "3C: Characteristics of a Corporation",
    question: "The legal process of forming a corporation is known as:",
    options: ["Liquidation", "Demutualization", "Incorporation", "Filing litigation"],
    answer: 2,
    explanation: "Incorporation is the formal legal process of forming a corporation within a specific jurisdiction."
  },
  {
    id: 30,
    lo: "3C: Characteristics of a Corporation",
    question: "Scenario: Apex Life has been operating for 75 years. During that time, all of its original founders and subsequent stockholders have passed away. What happens to the legal status of Apex Life?",
    options: [
      "The corporation is legally dissolved immediately upon the death of the last founder.",
      "The company continues to exist and operate normally because of its continuous corporate existence.",
      "The state government takes over all operations, converting it into a state-owned enterprise.",
      "The company's certificate of authority is immediately transferred to a regional competitor."
    ],
    answer: 1,
    explanation: "A corporation has perpetual or continuous existence, which allows it to continue operating regardless of the deaths of its owners or shareholders."
  },
  {
    id: 31,
    lo: "3C: Characteristics of a Corporation",
    question: "The state or country in which an insurance company is incorporated is known as its:",
    options: ["Foreign territory", "Principal place of business", "State of representation", "Domicile"],
    answer: 3,
    explanation: "An insurance company's domicile is the specific jurisdiction in which it is incorporated."
  },
  {
    id: 32,
    lo: "3C: Characteristics of a Corporation",
    question: "Scenario: Beacon Life is incorporated in Ohio. In Ohio, Beacon Life is legally classified as a:",
    options: ["Alien corporation", "Foreign corporation", "Non-admitted insurer", "Domestic corporation"],
    answer: 3,
    explanation: "A corporation is a domestic corporation in its state of domicile (the jurisdiction where it incorporated)."
  },
  {
    id: 33,
    lo: "3C: Characteristics of a Corporation",
    question: "Once an insurer is incorporated, it must obtain a certificate of authority to conduct business in that jurisdiction. Another common term for a certificate of authority is a:",
    options: ["License", "Articles of Association", "Bylaw", "Corporate charter"],
    answer: 0,
    explanation: "A certificate of authority is also referred to as a license to conduct insurance business in that jurisdiction."
  },
  {
    id: 34,
    lo: "3C: Characteristics of a Corporation",
    question: "What legal restriction applies to an insurer regarding the products it sells under its license?",
    options: [
      "It can sell any financial product sold anywhere in the world.",
      "It must get permission from the federal bank for every individual policy sold.",
      "It can only sell products and services that are authorized by its certificate of authority or license.",
      "It cannot offer any riders or supplemental benefits."
    ],
    answer: 2,
    explanation: "An insurer can only sell the products and services explicitly authorized by its certificate of authority in that state."
  },
  {
    id: 35,
    lo: "3C: Characteristics of a Corporation",
    question: "Scenario: Peak Insurance is a domestic corporation of Texas. It wishes to expand its corporate sales operations to Oklahoma. Before it can sell policies to residents of Oklahoma, the legal department must overseen:",
    options: [
      "An increase in Oklahoma state income taxes",
      "The dissolution of its Texas corporate charter",
      "The application process for an Oklahoma certificate of authority (license)",
      "A formal name change toOklahoma Life"
    ],
    answer: 2,
    explanation: "To do business in another state, the insurer must apply for and receive a certificate of authority in that new jurisdiction."
  },
  {
    id: 36,
    lo: "3C: Characteristics of a Corporation",
    question: "Which of the following describes the legal liability of stockholders in an insurance corporation?",
    options: [
      "Unlimited liability for any lawsuits brought against the corporation",
      "Limited liability, usually capped at their level of equity investment in the firm",
      "They have zero risk and can never lose their invested capital",
      "Liability that increases proportionately with the age of the corporation"
    ],
    answer: 1,
    explanation: "A key feature of a corporation is limited liability for its owners, which protects their personal assets from corporate creditors."
  },

  // --- OBJECTIVE 3D: Multinational Corporations & Entry Methods (37-48) ---
  {
    id: 37,
    lo: "3D: Multinational Corporations & Entry Methods",
    question: "A corporation that is incorporated in one country but has operational business units in more than one country is legally known as a:",
    options: ["Domestic agency", "Fraternal alliance", "Multinational corporation", "Branch operation"],
    answer: 2,
    explanation: "A multinational corporation operates in multiple countries, complying with the laws of its home country and each host country."
  },
  {
    id: 38,
    lo: "3D: Multinational Corporations & Entry Methods",
    question: "Which of the following is a primary legal challenge faced by a multinational insurance company?",
    options: [
      "It must obtain a global certificate of authority from the United Nations.",
      "It is legally prohibited from hiring host country nationals.",
      "It must comply with the laws of its home country (domicile) AND the laws and regulations of each foreign country where it conducts business.",
      "It is exempt from all regional laws in foreign host countries."
    ],
    answer: 2,
    explanation: "Multinational corporations must navigate complex, sometimes conflicting regulatory frameworks of each jurisdiction they operate in."
  },
  {
    id: 39,
    lo: "3D: Multinational Corporations & Entry Methods",
    question: "Scenario: Liberty Standard, a US-based insurer, decides to enter the European market by establishing a legally separate corporate entity in Germany. This German corporation will be wholly owned by Liberty Standard. This is an example of entering a foreign market by:",
    options: ["Incorporating a subsidiary", "Setting up a branch office", "Utilizing a reinsurance pool", "Forming a joint venture"],
    answer: 0,
    explanation: "Incorporating a business in the foreign country that operates as a separate legal entity owned by the parent insurer creates a subsidiary."
  },
  {
    id: 40,
    lo: "3D: Multinational Corporations & Entry Methods",
    question: "Scenario: Nova Scotia Life decides to expand operations into Mexico. Instead of forming a separate Mexican corporation, Nova Scotia Life registers an extension of its Canadian legal entity with the Mexican government. This extension is physically located in Mexico City. This is an example of a:",
    options: ["Joint venture", "Holding division", "Branch office", "Separate account"],
    answer: 2,
    explanation: "Opening a branch office involves extending the existing home corporation into a foreign country by registering it with the foreign government."
  },
  {
    id: 41,
    lo: "3D: Multinational Corporations & Entry Methods",
    question: "Scenario: Maplewood Health (a Canadian insurer) and Tokyo Marine (a Japanese insurer) agree to launch a joint project to sell Medicare-supplement products in Japan for a set period of 5 years. What is this cooperative arrangement called?",
    options: ["Demutualization", "Branch licensing", "Joint venture", "Merger & Acquisition"],
    answer: 2,
    explanation: "A joint venture is an arrangement between two otherwise independent businesses that agree to undertake a specific project together for a specified time period."
  },
  {
    id: 42,
    lo: "3D: Multinational Corporations & Entry Methods",
    question: "In which of the following countries is the joint venture arrangement highly common for foreign insurers entering the market, often due to local statutory ownership limitations?",
    options: ["India", "The United States", "Canada", "Germany"],
    answer: 0,
    explanation: "Joint ventures are very common in countries like India, where statutory rules historically required sharing ownership with local domestic companies."
  },
  {
    id: 43,
    lo: "3D: Multinational Corporations & Entry Methods",
    question: "Which of the following is a key advantage of incorporating a physical subsidiary in a foreign market, as opposed to opening a branch office?",
    options: [
      "The parent company's liability is typically protected, as the subsidiary is a separate legal entity.",
      "The subsidiary is completely free from the host country's tax laws.",
      "The subsidiary is not required to maintain any local financial reserves.",
      "Fewer administrative and registration documents are required."
    ],
    answer: 0,
    explanation: "Because a subsidiary is a separate legal entity, the parent company's exposure to liability from the foreign market operations is generally limited."
  },
  {
    id: 44,
    lo: "3D: Multinational Corporations & Entry Methods",
    question: "Scenario: Atlas Life is a mutual insurance company. Its directors decide that to raise public equity capital, they should convert Atlas Life into a stock insurance company. This specific structural transformation is called:",
    options: ["Mutualization", "Demutualization", "Incorporation", "Reinsurance"],
    answer: 1,
    explanation: "The process of a mutual insurer changing its corporate form to a stock form of ownership is called demutualization."
  },
  {
    id: 45,
    lo: "3D: Multinational Corporations & Entry Methods",
    question: "Scenario: Vanguard Stock Insurers chooses to convert its corporate form into a mutual insurance company, where ownership will be vested entirely with its policyowners. This process is known as:",
    options: ["Consolidation", "Liquidation", "Mutualization", "Demutualization"],
    answer: 2,
    explanation: "The transformation of a stock insurance company into a mutual insurance company is called mutualization."
  },
  {
    id: 46,
    lo: "3D: Multinational Corporations & Entry Methods",
    question: "When an insurer undergoes demutualization or mutualization, what is the role of the company's internal legal department?",
    options: [
      "They must act as the primary stock brokers to sell shares to the public.",
      "They are legally prohibited from participating in any structural transformations.",
      "They advise the board of directors on regulatory differences, legal issues, structural benefits, and procedural compliance during the change in corporate form.",
      "They take over daily investment decisions during the transition period."
    ],
    answer: 2,
    explanation: "The legal department handles regulatory filings, advises on structural legal issues, and ensures all state codes are followed during corporate changes."
  },
  {
    id: 47,
    lo: "3D: Multinational Corporations & Entry Methods",
    question: "Which entry method into a foreign market involves registering an extension of the parent company that is not a separate legal entity?",
    options: ["Branch office", "Joint venture", "Subsidiary", "Franchise model"],
    answer: 0,
    explanation: "A branch office is an extension of the parent company itself, meaning the parent company remains directly liable for the branch's obligations."
  },
  {
    id: 48,
    lo: "3D: Multinational Corporations & Entry Methods",
    question: "An insurer is analyzing if its contract with a foreign company in country X violates international trade treaties. Who would perform this contract review?",
    options: ["The legal department", "The underwriting committee", "The external audit firm", "The sales division"],
    answer: 0,
    explanation: "Evaluating whether foreign transactions, agreements, or trade arrangements comply with relevant laws is a core task of the legal department."
  },

  // --- OBJECTIVE 3E: Litigation Process & Responsibilities (49-61) ---
  {
    id: 49,
    lo: "3E: Litigation Process & Responsibilities",
    question: "A legal proceeding initiated by one party against another in a court of law is called a:",
    options: ["Arbitration", "Mediation", "Deposition", "Lawsuit"],
    answer: 3,
    explanation: "A lawsuit is a formal legal action brought before a court of law in which one party claims to have been harmed by another party."
  },
  {
    id: 50,
    lo: "3E: Litigation Process & Responsibilities",
    question: "The formal process or act of presenting a legal dispute to a court of law for a binding judicial resolution is known as:",
    options: ["Litigation", "Conciliation", "Lobbying", "Arbitration"],
    answer: 0,
    explanation: "Litigation is the term for the process of conducting a lawsuit and seeking resolution through a government court system."
  },
  {
    id: 51,
    lo: "3E: Litigation Process & Responsibilities",
    question: "In the event of litigation, an insurer's internal legal department may establish a relationship with an independent, external law firm. This external outfit is known as:",
    options: ["Outside counsel", "General counsel", "Regulatory liaison", "Domiciled counsel"],
    answer: 0,
    explanation: "Independent law firms hired to represent the insurer in litigation are known as outside counsel."
  },
  {
    id: 52,
    lo: "3E: Litigation Process & Responsibilities",
    question: "When an insurer retains outside counsel to represent them in a lawsuit, what is the role of the insurer's internal legal department?",
    options: [
      "The internal legal department is temporarily suspended until the lawsuit is resolved.",
      "They surrender all control and do not communicate with the outside counsel.",
      "They communicate with, oversee, and guide the activities of the outside counsel.",
      "The internal attorneys are required to act as judges in the dispute."
    ],
    answer: 2,
    explanation: "If outside counsel is hired, the internal legal department acts as the primary contact, communicating with and overseeing the external firm's efforts."
  },
  {
    id: 53,
    lo: "3E: Litigation Process & Responsibilities",
    question: "Scenario: A claimant, Robert Mercer, sues Peak Life over a denied claim. Before the trial begins, Peak Life's attorneys take a formal, sworn out-of-court oral statement from Robert. This legal statement is called a:",
    options: ["Lawsuit filing", "Bylaw amendment", "Binding arbitration order", "Deposition"],
    answer: 3,
    explanation: "A deposition is a witness's sworn out-of-court testimony, taken during the discovery phase of litigation, reduced to writing for later use."
  },
  {
    id: 54,
    lo: "3E: Litigation Process & Responsibilities",
    question: "Which of the following is a typical responsibility of attorneys handling litigation for an insurance company?",
    options: [
      "Adjusting daily premium rates based on investment market fluctuations",
      "Taking statements and depositions from involved parties and researching facts of the case",
      "Deciding whether a competitor's stock should be purchased by the investment group",
      "Directly altering state insurance safety rules"
    ],
    answer: 1,
    explanation: "Lithigating attorneys are responsible for investigating facts, preparing witnesses, taking depositions, and mounting the company's defense."
  },
  {
    id: 55,
    lo: "3E: Litigation Process & Responsibilities",
    question: "Before an insurance company employee testifies in court, what is the legal department responsible for doing?",
    options: [
      "Giving the employee a cash bonus for their testimony",
      "Requiring the employee to sign a statement that assumes personal liability for the case",
      "Forbidding the employee from reviewing any company files",
      "Consulting with and preparing the employee regarding their testimony and court expectations"
    ],
    answer: 3,
    explanation: "Attorneys consult with company employees before they testify in court to prepare them and ensure clear, accurate communication of the facts."
  },
  {
    id: 56,
    lo: "3E: Litigation Process & Responsibilities",
    question: "Why does the legal department of an insurer typically try to settle legal disputes without going to court (trial) whenever possible?",
    options: [
      "Because settlement agreements are not legally binding",
      "State laws forbid insurers from winning civil trials",
      "So that they can bypass the Chief Compliance Officer's involvement",
      "To avoid the public scrutiny and high financial costs associated with prolonged litigation and trials"
    ],
    answer: 3,
    explanation: "Litigation is incredibly expensive and time-consuming, and a public trial can create negative publicity, which harms the insurer's reputation."
  },
  {
    id: 57,
    lo: "3E: Litigation Process & Responsibilities",
    question: "Which of the following is an task performed by internal attorneys during litigation?",
    options: [
      "Changing the company's domicile status to prevent a lawsuit from continuing",
      "Hiring expert witnesses to testify on industry standards or technical topics",
      "Recruiting new sales agents for marketing purposes",
      "Publishing confidential customer accounts to the general public"
    ],
    answer: 1,
    explanation: "Hiring expert testimony and researching relevant case laws are standard tasks for attorneys representing an insurer in a lawsuit."
  },
  {
    id: 58,
    lo: "3E: Litigation Process & Responsibilities",
    question: "Scenario: An insurer is sued by a group of former employees alleging illegal overtime payment practices. Which of the following describes the legal department's role in this scenario?",
    options: [
      "They ask the HR department to dissolve the corporation.",
      "They must pay the claims instantly without questioning the allegations.",
      "They transfer the liability to the state insurance guarantee fund.",
      "They attempt to resolve the dispute through negotiation/ADR or mount a defense in a court of law."
    ],
    answer: 3,
    explanation: "The legal department handles employment-related lawsuits by negotiating settlements or defending the firm in court."
  },
  {
    id: 59,
    lo: "3E: Litigation Process & Responsibilities",
    question: "Scenario: An insurer receives a claim for a life insurance policy where the beneficiary has been murdered, and the primary suspect is the contingent beneficiary. The insurer acknowledges that the policy proceeds must be paid but cannot determine who is legally entitled to the money. To protect itself, the legal department will:",
    options: [
      "Initiate legal proceedings designed to ensure the proceeds are paid to the rightful party",
      "Keep the money as excess operational profit",
      "Refund the premium to the state treasury immediately",
      "Pay both claimants the full amount out of goodwill"
    ],
    answer: 0,
    explanation: "When there are conflicting or adverse claimants, the legal department facilitates interpleader proceedings or settlements to ensure payment strictly to the rightful recipient."
  },
  {
    id: 60,
    lo: "3E: Litigation Process & Responsibilities",
    question: "Which of the following is considered an external party that the legal department acts as a direct liaison with?",
    options: ["The internal audit committee", "The company's marketing staff", "The human resources manager", "Outside counsel and regulators"],
    answer: 3,
    explanation: "Outside counsel, external regulators, policyowners, and former employees are parties external to the company that the legal department acts as liaison to."
  },
  {
    id: 61,
    lo: "3E: Litigation Process & Responsibilities",
    question: "A written record of oral testimony given under oath before an authorized court officer prior to a trial is called a:",
    options: ["Corporate charter", "Complaint records", "Deposition transcript", "Mediation agreement"],
    answer: 2,
    explanation: "Depositions are recorded and transcribed by a court reporter, creating a legal transcript for discovery and trial purposes."
  },

  // --- OBJECTIVE 3F: Alternative Dispute Resolution (ADR) (62-74) ---
  {
    id: 62,
    lo: "3F: Alternative Dispute Resolution (ADR)",
    question: "Formal or informal negotiations and procedures designed to resolve legal disputes without going through a trial in court are collectively known as:",
    options: ["Judicial decree options", "Litigation methods", "Alternative dispute resolution (ADR) methods", "Corporate actions"],
    answer: 2,
    explanation: "Alternative dispute resolution (ADR) consists of methods, such as mediation and arbitration, used to settle disputes outside of standard litigation."
  },
  {
    id: 63,
    lo: "3F: Alternative Dispute Resolution (ADR)",
    question: "In what region/country is Alternative Dispute Resolution (ADR) historically the preferred method of resolving disputes, with court litigation viewed as a last resort?",
    options: ["China", "The United States", "Canada", "The United Kingdom"],
    answer: 0,
    explanation: "In some countries, such as China, ADR is the highly preferred and traditional method for resolving business and legal disputes."
  },
  {
    id: 64,
    lo: "3F: Alternative Dispute Resolution (ADR)",
    question: "Scenario: Apex Life and a policyowner, John, agree to settle an allocation dispute using an ADR method. They hire a neutral third party to facilitate negotiations and help them find mutually agreeable terms. This process is called:",
    options: ["Direct deposition", "Arbitration", "Litigation", "Mediation"],
    answer: 3,
    explanation: "Mediation is an ADR process where a neutral third party (mediator) facilitates negotiations between parties to help them reach a voluntary, mutually agreeable resolution."
  },
  {
    id: 65,
    lo: "3F: Alternative Dispute Resolution (ADR)",
    question: "In some countries outside the United States, the process of mediation is commonly known as:",
    options: ["Conciliation", "Filing a lawsuit", "Arbitration", "Demutualization"],
    answer: 0,
    explanation: "In international contexts, mediation is occasionally referred to as conciliation."
  },
  {
    id: 66,
    lo: "3F: Alternative Dispute Resolution (ADR)",
    question: "If parties in a dispute attempt mediation but cannot reach a mutually agreeable resolution, what legal right do they typically retain?",
    options: [
      "They are barred from consulting any attorneys.",
      "They are legally forced to split the cost and drop all allegations immediately.",
      "They have the right to proceed to arbitration or continue with litigation in court.",
      "The mediator has the authority to seize their properties."
    ],
    answer: 2,
    explanation: "Mediation is non-binding. If it fails, the parties generally retain their right to pursue arbitration or litigation."
  },
  {
    id: 67,
    lo: "3F: Alternative Dispute Resolution (ADR)",
    question: "Scenario: A contract dispute between Sovereign Life and a software vendor is referred to a group of three neutral experts who evaluate the facts and render a definitive, legally binding decision. This process is called:",
    options: ["Mediation", "Arbitration", "Conciliation", "Deposition"],
    answer: 1,
    explanation: "Arbitration involves impartial third parties (arbitrators) who review the evidence and render a decision that is legally binding on all parties."
  },
  {
    id: 68,
    lo: "3F: Alternative Dispute Resolution (ADR)",
    question: "The impartial third parties who evaluate facts and make a binding decision in an arbitration proceeding are called:",
    options: ["Mediators", "Arbitrators", "External Auditors", "Litigants"],
    answer: 1,
    explanation: "Those who hear and decide arbitration cases are called arbitrators."
  },
  {
    id: 69,
    lo: "3F: Alternative Dispute Resolution (ADR)",
    question: "Which of the following is a primary characteristic of an arbitrator's decision compared to a mediator's recommendation?",
    options: [
      "The arbitrator's decision is generally non-binding.",
      "The arbitrator's decision must be signed by the State Governor.",
      "The arbitrator's decision is usually legally binding on both parties.",
      "The arbitrator's decision can be appealed to court for any reason."
    ],
    answer: 2,
    explanation: "An arbitrator's ruling is legally binding, whereas a mediator's role is strictly to facilitate a voluntary agreement."
  },
  {
    id: 70,
    lo: "3F: Alternative Dispute Resolution (ADR)",
    question: "Under what general circumstance is an appeal of an arbitrator's decision possible under standard legal practices?",
    options: [
      "If there is clear evidence that the arbitration process was conducted improperly (e.g., bias or fraud)",
      "Only if the amount in dispute is less than $1,000",
      "Whenever one of the parties is dissatisfied with the actual decision",
      "Arbitrators' decisions can never be appealed under any circumstances"
    ],
    answer: 0,
    explanation: "Appeals of an arbitrator's decision are extremely limited, typically allowed only if the arbitration was corrupt, biased, or handled improperly."
  },
  {
    id: 71,
    lo: "3F: Alternative Dispute Resolution (ADR)",
    question: "Which of the following represents a primary operational difference between mediation and arbitration?",
    options: [
      "Mediation is always public, whereas arbitration is held in closed state supreme court rooms.",
      "Mediation is a cooperative process where the mediator does not impose a decision; in arbitration, the arbitrator hears evidence and issues a binding decision.",
      "Mediation is only for criminal cases, while arbitration handles tax disputes.",
      "Arbitration is completely free of charge, whereas mediation requires paying state taxes."
    ],
    answer: 1,
    explanation: "In mediation, the neutral party acts as a facilitator helper. In arbitration, the neutral party acts as a private judge whose decision binds the parties."
  },
  {
    id: 72,
    lo: "3F: Alternative Dispute Resolution (ADR)",
    question: "Scenario: HR Manager Mark wants to resolve a dispute with a former payroll coordinator regarding severance package payments. He proposes using mediation. Why is this choice efficient?",
    options: [
      "It gives Mark the power to make the final decision unilaterally.",
      "It allows the insurer to avoid paying any severance benefits permanently.",
      "It automatically terminates the former coordinator's right to seek any legal counsel.",
      "It completely avoids court filing fees and keeps the dispute confidential and collaborative."
    ],
    answer: 3,
    explanation: "ADR methods like mediation are confidential, quicker, and significantly less adversarial and expensive than formal corporate litigation."
  },
  {
    id: 73,
    lo: "3F: Alternative Dispute Resolution (ADR)",
    question: "Which of the following is true regarding international businesses and ADR?",
    options: [
      "International trade agreements strictly forbid the use of arbitration.",
      "Only the US government registers arbitration neutral bodies.",
      "Mediation is illegal in European Union states.",
      "ADR terminology and specific procedural operations vary from country to country, though the cores remain similar."
    ],
    answer: 3,
    explanation: "While ADR is globally used, the exact terms (e.g., conciliation vs. mediation) and procedural rules vary across jurisdictions."
  },
  {
    id: 74,
    lo: "3F: Alternative Dispute Resolution (ADR)",
    question: "A clause in an insurance contract stating that any factual value disputes must be submitted to a private panel of experts for a final ruling is known as an:",
    options: ["Arbitration clause", "Litigation agreement", "Certificate of authority", "Underwriting rider"],
    answer: 0,
    explanation: "An arbitration clause is a standard contract provision requiring parties to resolve disputes through arbitration."
  },

  // --- OBJECTIVE 3G: Compliance Activities and Program (75-87) ---
  {
    id: 75,
    lo: "3G: Compliance Activities and Program",
    question: "Which of the following is a consequence of an insurance company failing to comply with applicable state or national regulations?",
    options: [
      "The insurer may suffer significant financial fines, negative publicity, and potential loss of its license.",
      "The insurer is exempted from future audits.",
      "The CCO is promoted to CEO automatically.",
      "The insurer receives an operating subsidy from the government."
    ],
    answer: 0,
    explanation: "Noncompliance carries heavy penalties, including massive statutory fines, brand damage, and administrative license revocation."
  },
  {
    id: 76,
    lo: "3G: Compliance Activities and Program",
    question: "Scenario: Zenith Life's CCO is establishing a framework designed to ensure ethics are integrated into operations. This structured organizational system is universally referred to as a:",
    options: ["Corporate marketing strategy", "Reinsurance syndicate", "Regulatory compliance management program", "Risk accumulation model"],
    answer: 2,
    explanation: "Insurers establish formal regulatory compliance management programs to safely govern compliance across the enterprise."
  },
  {
    id: 77,
    lo: "3G: Compliance Activities and Program",
    question: "Most insurer regulatory compliance management programs focus on three primary initiatives. These are:",
    options: [
      "Litigation, mediation, and arbitration",
      "Prevention, education and training, and monitoring",
      "Sales, underwriting, and claim adjusting",
      "Incorporation, licensing, and demutualization"
    ],
    answer: 1,
    explanation: "The three core initiatives of a compliance management program are prevention, education and training, and monitoring."
  },
  {
    id: 78,
    lo: "3G: Compliance Activities and Program",
    question: "An effective compliance management program requires that company senior management actively commits to:",
    options: ["Maximizing investment yields only", "An ethical work environment and a corporate culture of compliance", "Outsourcing all customer communications", "A completely decentralised litigation model"],
    answer: 1,
    explanation: "Compliance starts with the tone at the top, requiring senior management's absolute commitment to ethics and compliance culture."
  },
  {
    id: 79,
    lo: "3G: Compliance Activities and Program",
    question: "Scenario: Destiny Life integrates compliance checks directly into the design of its daily administrative workflow processes. This ensures that employees perform regulatory verification as a natural part of their jobs. This initiative represents:",
    options: ["Auditing", "Monitoring", "Education and Training", "Prevention"],
    answer: 3,
    explanation: "Integrating compliance checks into daily workflows represents the initiative of prevention—stopping noncompliance before it happens."
  },
  {
    id: 80,
    lo: "3G: Compliance Activities and Program",
    question: "Which of the following is an example of an internal control system used under the prevention initiative?",
    options: [
      "An automated email tool that flags emails containing unauthorized confidential customer information",
      "A state regulator conducting a comprehensive audit after two years",
      "The board of directors voting to demutualize",
      "An employee filing a lawsuit for wrongful termination"
    ],
    answer: 0,
    explanation: "Internal controls like filters or automated sign-off procedures are core preventive mechanisms to avoid data leaks or compliance errors."
  },
  {
    id: 81,
    lo: "3G: Compliance Activities and Program",
    question: "Scenario: SafeGuard Mutual requires that its Chief Compliance Officer signs off on all new marketing flyers and print advertisements before they are distributed by sales agents. This is an example of a:",
    options: ["Post-remedial administrative action", "External audit control", "Corrective monitoring sanction", "Preventative internal control"],
    answer: 3,
    explanation: "Requiring compliance review and approval before materials are used is a simple, effective preventative internal control."
  },
  {
    id: 82,
    lo: "3G: Compliance Activities and Program",
    question: "Under the 'Education and Training' initiative of a compliance program, what is a specific requirement for U.S. call center representatives?",
    options: [
      "They must perform annual audits on the actuarial reserve accounts.",
      "They must be trained specifically on state-mandated complaint handling and record-keeping procedures.",
      "They must have a law degree from an accredited university.",
      "They must be licensed to execute securities trades."
    ],
    answer: 1,
    explanation: "Call center staff must be trained to process complaints properly because state laws specify minimum recording and handling rules."
  },
  {
    id: 83,
    lo: "3G: Compliance Activities and Program",
    question: "A company provides its staff and financial advisors with a document outlining regulatory rules, business expectations, and examples of compliant vs non-compliant activities. This document is a:",
    options: ["Corporate charter", "Articles of Incorporation", "Compliance manual", "Certificate of authority"],
    answer: 2,
    explanation: "A compliance manual is distributed to educate employee groups on regulatory compliance and behavioral standards."
  },
  {
    id: 84,
    lo: "3G: Compliance Activities and Program",
    question: "Under the compliance program, why is the 'Monitoring' initiative critical?",
    options: [
      "It allows the legal department to cease handling lawsuits completely.",
      "It helps the insurer respond quickly to compliance issues before they grow, identifies staff training needs, and improves procedures.",
      "It ensures that sales representatives can bypass internal control filters.",
      "It is used to ensure the company never has to update its compliance manual."
    ],
    answer: 1,
    explanation: "Monitoring identifies weaknesses, guarantees fast corrective action, and verifies if training and preventive programs are working."
  },
  {
    id: 85,
    lo: "3G: Compliance Activities and Program",
    question: "An examination of a company's records, policies, and files that is conducted by internal compliance personnel who are employed by the insurer is called a:",
    options: ["Market conduct examination", "Internal audit", "Alternative dispute resolution", "External audit"],
    answer: 1,
    explanation: "Internal audits are conducted by the insurer's own employees to review compliance within specific operational units."
  },
  {
    id: 86,
    lo: "3G: Compliance Activities and Program",
    question: "Audit programs conducted by independent third parties who are not associated with or employed by the insurance company are called:",
    options: ["External audits", "Internal audits", "Cooperative reviews", "Self-assessments"],
    answer: 0,
    explanation: "External audits (or independent audits) are performed by non-employee independent third-party accounting or compliance firms."
  },
  {
    id: 87,
    lo: "3G: Compliance Activities and Program",
    question: "To whom are the results of an internal compliance audit typically reported directly within an insurance company's organizational structure?",
    options: [
      "The audit committee of the insurer's Board of Directors",
      "The National Association of Insurance Commissioners (NAIC)",
      "The general public via a press release",
      "The marketing director"
    ],
    answer: 0,
    explanation: "The results of internal audits are reported directly to the audit committee of the Board of Directors to ensure executive oversight."
  },

  // --- OBJECTIVE 3H: Market Conduct Examinations (88-100) ---
  {
    id: 88,
    lo: "3H: Market Conduct Examinations",
    question: "A market conduct examination in the United States is defined as a formal investigation of an insurer's:",
    options: [
      "Internal employee diversity ratios and salary scales",
      "Nonfinancial operations, to ensure compliance with advertising, sales, policy, underwriting, and claim handling laws",
      "Financial solvency and investment reserves",
      "Corporate taxes and international joint ventures"
    ],
    answer: 1,
    explanation: "Unlike financial audits that check cash/solvency, market conduct examinations evaluate nonfinancial operations to protect consumers."
  },
  {
    id: 89,
    lo: "3H: Market Conduct Examinations",
    question: "Who is responsible for conducting market conduct examinations of life insurance companies in the United States?",
    options: [
      "The internal compliance specialist of the insurer",
      "The Federal Bureau of Investigation (FBI)",
      "One or more state insurance departments",
      "The Securities and Exchange Commission (SEC)"
    ],
    answer: 2,
    explanation: "Market conduct examinations are formal regulatory reviews conducted by state insurance departments."
  },
  {
    id: 90,
    lo: "3H: Market Conduct Examinations",
    question: "In the United States, which private, nonprofit association advises state regulators on efficient methods to oversee market conduct and encourages multistate cost-sharing audits?",
    options: ["Federal Compliance Board (FCB)", "Society of Financial Actuaries (SFA)", "National Association of Insurance Commissioners (NAIC)", "Alternative Dispute Resolution Association (ADRA)"],
    answer: 2,
    explanation: "The NAIC provides key model regulations and advisory frameworks to promote uniformity and efficiency in state insurance regulation."
  },
  {
    id: 91,
    lo: "3H: Market Conduct Examinations",
    question: "Scenario: The Texas Department of Insurance initiates an regulatory audit of BlueStar Life that will review every single nonfinancial aspect of its operations, across all of its lines of business. This is an example of a:",
    options: ["Arbitration review", "Target examination", "Internal self-audit", "Comprehensive examination"],
    answer: 3,
    explanation: "A comprehensive examination is a full-scope review of all nonfinancial areas of an insurer's operations."
  },
  {
    id: 92,
    lo: "3H: Market Conduct Examinations",
    question: "Scenario: Following a spike in consumer complaints regarding misleading sales brochures, the New York State Department of Insurance launches a focused investigation of Apex Life's marketing department. This type of exam is known as a:",
    options: ["Direct litigated trial", "Comprehensive examination", "Target examination", "Solvency audit"],
    answer: 2,
    explanation: "A target examination is limited to specific areas or lines of business, such as advertising, claims, or a single product line."
  },
  {
    id: 93,
    lo: "3H: Market Conduct Examinations",
    question: "What is the primary factor that often triggers a state insurance department to launch a target market conduct examination of an insurer?",
    options: [
      "The insurer recording a positive financial profit of over 10%",
      "The general counsel retiring from the company",
      "A pattern of customer complaints or recent changes in state regulatory laws",
      "The company electing a new Board of Directors"
    ],
    answer: 2,
    explanation: "Target examinations are typically reactive, triggered by specific consumer or agent complaints, or changes in regulatory regulations."
  },
  {
    id: 94,
    lo: "3H: Market Conduct Examinations",
    question: "Before market conduct examiners arrive on site, what is the first formal step in the examination process outlined in the LOMA framework?",
    options: [
      "The insurer files a lawsuit against the state department.",
      "The insurer receives written notification of the pending examination.",
      "The examiner publishes a finalized report on a public website.",
      "The state department revokes the insurer's license."
    ],
    answer: 1,
    explanation: "The examiner must first send a formal, written notification informing the insurer of the pending examination."
  },
  {
    id: 95,
    lo: "3H: Market Conduct Examinations",
    question: "During a market conduct examination, what is an insurer required by state law to provide to the state examiners?",
    options: [
      "The login credentials of the CEO's personal online bank accounts",
      "A free equity stake in the insurance company's stock",
      "A written guarantee that no compliance errors exist",
      "Access to requested business records, policies, and files, along with workspace accommodations"
    ],
    answer: 3,
    explanation: "State laws mandate that insurers maintain records and cooperate by providing requested records and safe workspaces for examiners."
  },
  {
    id: 96,
    lo: "3H: Market Conduct Examinations",
    question: "Scenario: During the pre-examination phase, Odyssey Life assembles a team of knowledgeable employees. Who must Odyssey Life designate to serve as the single main contact with the incoming examiners?",
    options: ["An outside counsel attorney", "A primary liaison", "A lead customer representative", "The chairman of the board"],
    answer: 1,
    explanation: "Designating a primary liaison facilitates smooth, clear communication between the company and the state examiners."
  },
  {
    id: 97,
    lo: "3H: Market Conduct Examinations",
    question: "At the completion of the onsite examination, what do the state examiners do before leaving?",
    options: [
      "They arrest the chief compliance officer.",
      "They provide a summary of findings and discuss any discovered compliance problems with the company's representatives.",
      "They issue a final judgment and immediate financial fine without further review.",
      "They dissolve the company's Oklahoma branch office."
    ],
    answer: 1,
    explanation: "The onsite review ends with a closing discussion where examiners outline their preliminary findings and compliance gaps with company leaders."
  },
  {
    id: 98,
    lo: "3H: Market Conduct Examinations",
    question: "If an insurance company reviews the draft report prepared by the lead examiner and strongly disagrees with the findings, what action can the company take?",
    options: [
      "It is allowed to rewrite the final report itself.",
      "It can dissolve the corporation to avoid any consequences.",
      "It can request a formal regulatory hearing to present its arguments and request changes.",
      "It can ignore the report and refuse to cooperate with future audits."
    ],
    answer: 2,
    explanation: "Insurers have the legal right to challenge findings in a draft report by requesting a formal regulatory hearing before a hearing officer."
  },
  {
    id: 99,
    lo: "3H: Market Conduct Examinations",
    question: "Once a market conduct examination report is finalized and adopted in the United States, what does the state insurance department do?",
    options: [
      "Applies a secret seal so that no competitor can ever read its contents",
      "Deletes all associated records to maintain confidentiality",
      "Sends it to the federal Department of State to initiate a corporate tax review",
      "Places it on file, publishes it on its official website, and provides a copy to the NAIC"
    ],
    answer: 3,
    explanation: "The finalized regulator report is public record; it is posted online on state sites and logged with the NAIC database."
  },
  {
    id: 100,
    lo: "3H: Market Conduct Examinations",
    question: "Scenario: The final regulatory report for Apex Life highlights several critical failures in its claim-processing speed. To resolve this, what can the state insurance department impose on Apex Life?",
    options: [
      "A permanent ban on hiring any new claim workers",
      "An order to merge with a competitor",
      "A suspension of the corporate charter's continuous existence",
      "A compliance action plan requiring the insurer to provide periodic evidence of correction"
    ],
    answer: 3,
    explanation: "Regulators can issue sanctions or enforce a corrective compliance action plan (CAP) to guarantee the company remedies its operational mistakes."
  }
];
