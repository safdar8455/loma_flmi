import { Question } from '../../types';

export interface TPGChapter {
  id: number;
  title: string;
  questions: Question[];
}

export const tpgChapterQuestions: TPGChapter[] = [
  {
    id: 1,
    title: "Chapter 1: Risk and Insurance",
    questions: [
      {
        id: 1,
        lo: "1.1",
        question: "Both individuals and businesses experience two kinds of risk—speculative risk and pure risk. By definition, a pure risk is one in which the possible outcomes include",
        options: ["loss, no loss, or gain", "only loss or no loss", "only gain", "only loss"],
        answer: 1,
        explanation: "A pure risk is a risk that involves no possibility of gain; the only possible outcomes are loss or no loss."
      },
      {
        id: 2,
        lo: "1.2",
        question: "Individuals and businesses often use risk management to identify and assess financial risks. Which of the following correctly describes an individual controlling the risk of financial loss?",
        options: [
      "Rhona rejected the manufacturer’s offer of an extended warranty on the new computer.",
      "Lily insists that all passengers riding in her automobile wear seat belts at all times.",
      "Timothy purchased a disability income insurance policy.",
      "Jeremy never rides roller coasters because he is concerned about injury."
    ],
        answer: 1,
        explanation: "Risk control involves taking steps to reduce the frequency or severity of a loss. Wearing seat belts is a method of controlling the risk of injury."
      },
      {
        id: 3,
        lo: "1.3",
        question: "Select the statement that correctly represents a characteristic of an insurable risk.",
        options: [
      "An insurable loss must be definite in terms of amount but not timing.",
      "An insurer must be able to predict the losses that a specific proposed insured will experience.",
      "Only losses that cause catastrophic damage to both insurer and insured are insurable.",
      "For a potential loss to be insurable, the element of chance must be present."
    ],
        answer: 3,
        explanation: "An insurable risk must be occur by chance, be definite as to time and amount, be significant, and predictable across a large group."
      },
      {
        id: 4,
        lo: "1.4",
        question: "The law of large numbers states that, typically, the more times we observe a particular event, the (less / more) likely that our observed results will approximate the true probability. Using this concept, insurers have developed (mortality / morbidity) tables for life expectancy.",
        options: ["less / mortality", "more / morbidity", "less / morbidity", "more / mortality"],
        answer: 3,
        explanation: "Law of large numbers: more observations = more accuracy. Mortality tables predict death rates."
      },
      {
        id: 5,
        lo: "1.5",
        question: "From an insurer’s standpoint, the tendency of individuals who believe they have a greater-than-average likelihood of loss to seek insurance protection to a greater extent than do others is known as:",
        options: ["antiselection", "reinsurance", "speculative risk", "moral hazard"],
        answer: 0,
        explanation: "Antiselection (adverse selection) is the tendency of people with higher risks to apply for insurance."
      },
      {
        id: 6,
        lo: "1.6",
        question: "Insurance companies generally classify proposed insureds who have a significantly greater-than-average likelihood of loss but who are still found to be insurable as:",
        options: ["preferred risks", "declined risks", "substandard risks", "standard risks"],
        answer: 2,
        explanation: "Substandard risks (or rated risks) are people whose likelihood of loss is higher than average but still within insurable limits."
      },
      {
        id: 7,
        lo: "1.7",
        question: "Suk-Ja Kang applied for a policy on her own life naming neighbor Chang Lee as beneficiary. At the same time, Mr. Lee applied for a policy on Ms. Kang's life naming himself. An insurable interest exists in:",
        options: ["Mr. Lee’s application, but not Ms. Kang’s", "both of these applications", "neither of these applications", "Ms. Kang’s application, but not Mr. Lee’s"],
        answer: 3,
        explanation: "A person always has an insurable interest in their own life (Kang's app). Neighbors generally do not have an insurable interest in each other (Lee's app)."
      }
    ]
  },
  {
    id: 2,
    title: "Chapter 2: Financial Services Industry",
    questions: [
      {
        id: 1,
        lo: "2.1",
        question: "In most countries, insurance companies are organized as corporations. One difference between a corporation and other forms of business organizations is that",
        options: [
      "a corporation’s structure protects it from being sued",
      "a corporation’s debts belong to the corporation itself and not its owners",
      "a corporation is less stable than other forms",
      "only a corporation dissolves if a owner dies"
    ],
        answer: 1,
        explanation: "Limited liability is a key feature of corporations; the entity's debts are distinct from the owners' assets."
      },
      {
        id: 2,
        lo: "2.2",
        question: "The Polyhedron Association is a nonprofit formed for social/insurance benefits for members with common vocational background, representative government, and a lodge system. Polyhedron is a:",
        options: ["fraternal benefit society", "partnership", "P&C company", "depository institution"],
        answer: 0,
        explanation: "Fraternal benefit societies are nonprofit social organizations that provide insurance to members of a formal group."
      },
      {
        id: 3,
        lo: "2.3",
        question: "Which of the following statements about financial institutions is FALSE?",
        options: [
      "They own primarily financial assets like stocks and bonds rather than fixed assets.",
      "They serve as intermediaries by channeling funds from suppliers to users.",
      "Insurance companies cannot be classified as financial institutions because they don't function as intermediaries.",
      "They help people meet goals of protecting against loss and investing assets."
    ],
        answer: 2,
        explanation: "Insurance companies ARE financial institutions because they act as intermediaries by collecting premiums and investing them in the economy."
      },
      {
        id: 4,
        lo: "2.4",
        question: "Scenario A: Calico bought a controlling interest in Tabby; both survived as separate entities. Scenario B: Beagle and Labrador consolidated; Labrador survived, Beagle ceased to exist. These are:",
        options: ["A: acquisition, B: acquisition", "A: merger, B: merger", "A: acquisition, B: merger", "A: merger, B: acquisition"],
        answer: 2,
        explanation: "Acquisition: one company buys another but both continue to exist. Merger: two companies combine and only one survives (or a new one is formed)."
      },
      {
        id: 5,
        lo: "2.5",
        question: "The primary effect of the McCarran-Ferguson Act in the United States is that it",
        options: [
      "leaves regulation to the states as long as Congress considers it adequate",
      "leaves regulation to the federal government",
      "ensures ethical conduct",
      "promotes uniformity in regulation"
    ],
        answer: 0,
        explanation: "This act confirmed that state regulation of insurance is in the public interest and remains standard unless federal law overrides it."
      },
      {
        id: 6,
        lo: "2.6",
        question: "Which is a characteristic of the National Association of Insurance Commissioners (NAIC) model laws?",
        options: [
      "The NAIC's function is to promote uniformity of state insurance regulation.",
      "States must adopt NAIC laws exactly as written.",
      "States may modify them, but must adopt some form of every model law.",
      "NAIC is a federal government agency."
    ],
        answer: 0,
        explanation: "The NAIC exists to promote consistency across various state laws, though states are not strictly forced to adopt every model law."
      },
      {
        id: 7,
        lo: "2.7",
        question: "In the United States, an example of an influential self-regulatory organization (SRO) for the life insurance industry is:",
        options: ["FIO", "FINRA", "SEC", "FSOC"],
        answer: 1,
        explanation: "FINRA (Financial Industry Regulatory Authority) is a non-governmental body that regulates brokerage firms and exchange markets."
      },
      {
        id: 8,
        lo: "2.8",
        question: "Owners’ equity in a mutual insurance company consists of",
        options: ["both capital and surplus", "surplus, but not capital", "neither capital nor surplus", "capital, but now surplus"],
        answer: 1,
        explanation: "Mutual companies have no stockholders (capital); their equity is represented entirely by surplus."
      }
    ]
  },
  {
    id: 3,
    title: "Chapter 3: Life Insurance Contracts",
    questions: [
      {
        id: 1,
        lo: "3.1",
        question: "A life insurance contract is enforceable because it meets requirements of substance rather than form. Also, the payout is contingent on the death of the insured. This means the contract is:",
        options: ["informal, commutative", "formal, commutative", "informal, aleatory", "formal, aleatory"],
        answer: 2,
        explanation: "Insurance is informal (doesn't require a seal/specific form) and aleatory (parties don't exchange equal value; payout depends on chance)."
      },
      {
        id: 2,
        lo: "3.2",
        question: "In a life insurance contract, only the insurer makes a legally enforceable promise. This makes it a:",
        options: ["unilateral contract", "contract of adhesion", "bilateral contract", "bargaining contract"],
        answer: 0,
        explanation: "In unilateral contracts, only one party is legally bound to perform their promise."
      },
      {
        id: 3,
        lo: "3.3",
        question: "Hector Avila purchased life insurance from Origami Financial after a court declared him mentally incompetent. This contract is:",
        options: ["voidable by either party", "voidable only by Mr. Avila", "valid and binding", "void"],
        answer: 3,
        explanation: "Contracts made by someone legally declared incompetent are generally void from the start."
      },
      {
        id: 4,
        lo: "3.4",
        question: "Which of the following is true about contractual capacity?",
        options: [
      "An insurer acquires legal capacity by being licensed or authorized by regulators.",
      "Individuals must prove legal capacity in court before buying insurance.",
      "Corporations have the same capacity as minors.",
      "If an insurer issues a policy to a minor, the insurer can sue to avoid the policy."
    ],
        answer: 0,
        explanation: "Insurers must be licensed by the state to have the capacity to issue contracts."
      },
      {
        id: 5,
        lo: "3.5",
        question: "Which is a valid statement about life insurance contract formation requirements?",
        options: [
      "Each party must give something of value (consideration).",
      "Applicant's consideration is the application and initial premium.",
      "Mutual assent only happens with a written agreement.",
      "Lawful purpose is fulfilled by offer and acceptance."
    ],
        answer: 0,
        explanation: "Consideration is a requirement for all valid contracts."
      },
      {
        id: 6,
        lo: "3.6",
        question: "An insurance policy is classified as:",
        options: ["tangible real property", "intangible personal property", "intangible real property", "tangible personal property"],
        answer: 1,
        explanation: "It is personal property (movable) and intangible (represents a right/value rather than a physical thing)."
      }
    ]
  },
  {
    id: 4,
    title: "Chapter 4: Principles of Pricing",
    questions: [
      {
        id: 1,
        lo: "4.1",
        question: "Policy reserves represent the amount an insurer estimates it needs for:",
        options: ["accumulating surplus", "paying future benefits to policyowners", "reinsuring risks", "paying stockholder dividends"],
        answer: 1,
        explanation: "Reserves are liabilities set aside specifically to meet future policy obligations."
      },
      {
        id: 2,
        lo: "4.2",
        question: "Premises of the legal reserve system include:",
        options: [
          "benefit amount should be calculable in advance",
          "money should be collected in advance to fund reserves",
          "premiums should relate to the amount of risk assumed",
          "all of the above"
        ],
        answer: 3,
        explanation: "The legal reserve system is built on predictability, pre-funding, and risk-based pricing."
      },
      {
        id: 3,
        lo: "4.3",
        question: "The premium rate is $5 per $1,000. Annual premium for a $300,000 policy is:",
        options: ["$15", "$1,500", "$150", "$15,000"],
        answer: 1,
        explanation: "(300,000 / 1,000) * 5 = 300 * 5 = 1,500."
      },
      {
        id: 4,
        lo: "4.4",
        question: "The cost of benefits for a life insurance product is generally calculated by:",
        options: [
      "multiplying potential benefit payments by the probability the benefit will be payable",
      "dividing potential payments by those probabilities",
      "subtracting potential payments from total premiums",
      "adding operating expenses to each year's potential payments"
    ],
        answer: 0,
        explanation: "This is the 'expected value' of the benefits."
      },
      {
        id: 5,
        lo: "4.5",
        question: "Which statement about mortality tables is correct?",
        options: [
      "A table with separate rates for smokers is a composite table.",
      "Males have lower mortality rates than females at nearly all ages.",
      "Unisex tables contain separate statistics for males and females.",
      "Higher mortality rates for a group mean higher benefit costs and higher premiums."
    ],
        answer: 3,
        explanation: "Mortality is the primary cost driver for life insurance; higher risk = higher price."
      },
      {
        id: 6,
        lo: "4.6",
        question: "Insurer operating expenses include all of the following EXCEPT:",
        options: ["the cost of benefits", "office maintenance costs", "product development costs", "payroll costs"],
        answer: 0,
        explanation: "The cost of benefits is a distinct component from operating (administrative) expenses."
      },
      {
        id: 7,
        lo: "4.7",
        question: "Mitesh loaned $5,000 at 10% interest compounded annually. After two years, how much is owed?",
        options: ["$6,050", "$6,000", "$5,500", "$5,000"],
        answer: 0,
        explanation: "Year 1: 5000 * 1.1 = 5500. Year 2: 5500 * 1.1 = 6050."
      },
      {
        id: 8,
        lo: "4.8",
        question: "Conservative values for life insurance usually take the form of mortality rates (lower / higher) than expected and operating expenses (lower / higher) than expected.",
        options: ["lower / higher", "higher / lower", "higher / higher", "lower / lower"],
        answer: 2,
        explanation: "Conservatism means overestimating costs (mortality and expenses) to ensure solvency."
      },
      {
        id: 9,
        lo: "4.9",
        question: "In the level premium system, premium rates:",
        options: [
      "are higher than needed to pay claims in the early policy years",
      "decrease as age increases",
      "increase as age increases",
      "are lower than needed to pay claims in the early policy years"
    ],
        answer: 0,
        explanation: "Level premiums remain the same; they exceed the actual mortality cost in early years to build a reserve for later years."
      }
    ]
  },
  {
    id: 5,
    title: "Chapter 5: Term Life Insurance",
    questions: [
      {
        id: 1,
        lo: "5.1",
        question: "A plan that considers how to preserve assets upon death and distribute them as desired is a(n):",
        options: ["key person plan", "buy-sell agreement", "estate plan", "business continuation plan"],
        answer: 2,
        explanation: "Estate planning is the process of arranging assets for distribution after death."
      },
      {
        id: 2,
        lo: "5.2",
        question: "Wei-Chao bought a home with a 30-year mortgage and was required to buy mortgage life insurance. Which is true?",
        options: [
      "The renewal premium decreases throughout the 30-year term.",
      "The lender (Jonquil) is a party to the insurance contract.",
      "The insurer (Malabar) is a party to the mortgage loan.",
      "The death benefit generally equals the current mortgage balance."
    ],
        answer: 3,
        explanation: "Mortgage life is decreasing term insurance designed to clear the debt."
      },
      {
        id: 3,
        lo: "5.3",
        question: "Which of the following is true?",
        options: [
      "Family income coverage is a plan of increasing term insurance.",
      "Credit life benefits can be paid to someone other than the lender.",
      "Family income coverage provides monthly income if the insured dies during the term.",
      "Credit life benefit amounts usually remain level."
    ],
        answer: 2,
        explanation: "Family income policies provide monthly checks for the remainder of a specified term."
      },
      {
        id: 4,
        lo: "5.4",
        question: "Samara has a 15-year renewable term policy. At the end of the term, she can likely renew:",
        options: [
      "after a medical exam",
      "without submitting evidence of insurability",
      "for only one year",
      "at the same rate as the original term"
    ],
        answer: 1,
        explanation: "The 'renewable' feature allows continuation without a health check."
      },
      {
        id: 5,
        lo: "5.5",
        question: "Omar can change his term policy to a cash value policy without evidence of insurability. This is a:",
        options: ["increasing policy", "convertible policy", "decreasing policy", "renewable policy"],
        answer: 1,
        explanation: "The conversion privilege allows changing term to permanent coverage."
      },
      {
        id: 6,
        lo: "5.6",
        question: "Melody has a $300,000 30-year Return of Premium (ROP) term policy. She paid $24,000 in premiums and is still alive after 30 years. The insurer paid her:",
        options: ["the $300,000 face amount", "the $300,000 beneficiary payout", "nothing", "$24,000"],
        answer: 3,
        explanation: "ROP term refunds the sum of all premiums paid if the insured survives the term."
      }
    ]
  },
  {
    id: 6,
    title: "Chapter 6: Permanent Life Insurance",
    questions: [
      {
        id: 1,
        lo: "6.1",
        question: "(Whole / Term) life insurance builds cash value. (Whole / Term) life provides protection for the entire lifetime of the insured.",
        options: ["Term / Term", "Term / Whole", "Whole / Term", "Whole / Whole"],
        answer: 3,
        explanation: "Whole life is permanent (lifetime) and builds cash value (savings)."
      },
      {
        id: 2,
        lo: "6.2",
        question: "Which of these is true about whole life policies?",
        options: [
      "Continuous-premium policies are paid up at age 65.",
      "The annual premium for limited-payment is HIGHER than for continuous-premium.",
      "In limited-payment policies, coverage expires when premium payments stop.",
      "Cash value builds more rapidly in continuous-premium policies than in limited-payment policies."
    ],
        answer: 1,
        explanation: "Cramming the total cost into fewer years (limited payment) requires larger annual payments."
      },
      {
        id: 3,
        lo: "6.3",
        question: "Compared to continuous-premium whole life, a modified-premium policy normally has an initial premium that is:",
        options: ["higher, and cash value builds slower", "higher, and cash value builds faster", "lower, and cash value builds faster", "lower, and cash value builds slower"],
        answer: 3,
        explanation: "Modified premium (like 'graded' or 'step' plans) starts low (slower BV growth) and increases later."
      },
      {
        id: 4,
        lo: "6.4",
        question: "Aidan's policy face amount decreases from $300k to $200k at age 60, then to $100k at age 70. His premium is likely (higher/lower) than a continuous $300k policy. This is a:",
        options: [
      "modified coverage policy / higher",
      "modified-premium policy / higher",
      "modified-premium policy / lower",
      "modified coverage policy / lower"
    ],
        answer: 3,
        explanation: "This is modified COVERAGE (declining benefit), which is cheaper than a level $300k death benefit."
      },
      {
        id: 5,
        lo: "6.5",
        question: "Hector bought a policy insuring both him and Marisela, paying out ONLY after both have died. This is a:",
        options: ["last survivor life insurance policy", "endowment policy", "family policy", "joint whole life policy"],
        answer: 0,
        explanation: "Last survivor (second-to-die) policies are often used for estate tax funding."
      },
      {
        id: 6,
        lo: "6.6",
        question: "One true statement about Universal Life (UL) insurance is:",
        options: [
      "It's treated as life insurance regardless of CV/DB ratio.",
      "Policyowners decide (within limits) the face amount, benefit, and premium amount.",
      "Policyowners cannot use CV for loans.",
      "Mortality, interest, and expenses are combined into one single bundled premium."
    ],
        answer: 1,
        explanation: "UL is known for its flexibility—unbundling the pricing elements and allowing changes to coverage."
      },
      {
        id: 7,
        lo: "6.7",
        question: "Jiang Li has indexed UL with $20,000 cash value, 80% participation, 12% cap, 0% floor. Index increased 20%. The cash value increased by:",
        options: ["12%", "20%", "0%", "16%"],
        answer: 0,
        explanation: "20% growth * 80% participation = 16%. However, 16% is above the 12% cap, so the credit is capped at 12%."
      },
      {
        id: 8,
        lo: "6.8",
        question: "Which statement about Variable Life (VL) in the US is correct?",
        options: [
      "The insurer alone assumes the investment risk.",
      "Policies offer guaranteed minimum cash values.",
      "Premiums and cash values are in the insurer's separate account.",
      "Death benefit remains constant."
    ],
        answer: 2,
        explanation: "Variable products use 'separate accounts' to allow policyowners to choose investments."
      },
      {
        id: 9,
        lo: "6.9",
        question: "Bonnie's Variable Universal Life (VUL) policy characteristic is:",
        options: [
      "elements are bundled",
      "guarantees a minimum cash value",
      "premiums are fixed",
      "death benefit is flexible"
    ],
        answer: 3,
        explanation: "VUL takes the flexible benefit/premium features of UL and the separate account features of VL."
      }
    ]
  },
  {
    id: 7,
    title: "Chapter 7: Supplemental Benefits",
    questions: [
      {
        id: 1,
        lo: "7.1",
        question: "Juan Ayala satisfied a three-month waiting period, then the insurer began paying his renewal premiums, and cash value continued to increase. This is a:",
        options: ["paid-up additions option", "waiver of premium for disability (WP) benefit", "disability income benefit", "waiver of premium for payor benefit"],
        answer: 1,
        explanation: "WP benefit pays premiums for the insured while they are totally disabled."
      },
      {
        id: 2,
        lo: "7.2",
        question: "One true statement about a supplemental disability income benefit is that:",
        options: [
      "it rarely includes a waiver of premium benefit",
      "benefits begin on the first day of disability",
      "the insured must be totally disabled to receive the benefit",
      "the monthly amount is a percentage of current earnings"
    ],
        answer: 2,
        explanation: "Disability income riders require total disability (and usually a waiting period) to trigger payments."
      },
      {
        id: 3,
        lo: "7.3",
        question: "Norin died in a commercial airplane crash. She had a $500,000 policy with a typical double indemnity accidental death rider. The insurer is liable for:",
        options: ["$1,500,000", "$0", "$500,000", "$1,000,000"],
        answer: 3,
        explanation: "Double indemnity doubles the face amount for accidental death. $500k * 2 = $1,000,000."
      },
      {
        id: 4,
        lo: "7.4",
        question: "Accidental physical loss of a limb triggers which benefit?",
        options: [
      "Dismemberment benefit",
      "Total disability only",
      "Both accidental death and dismemberment benefits",
      "Evidence of insurability waiver"
    ],
        answer: 0,
        explanation: "AD&D policies pay a portion (capital sum) for lost limbs/sight."
      },
      {
        id: 5,
        lo: "7.5",
        question: "One true statement about accelerated death benefits (living benefits) is:",
        options: [
      "Insurers typically charge an additional premium for them.",
      "They pay only lump-sum benefits.",
      "Payment of the benefit reduces the death benefit paid to the beneficiary at death.",
      "They are offered on all face amounts."
    ],
        answer: 2,
        explanation: "Accelerated benefits are essentially an advance on the death benefit."
      },
      {
        id: 6,
        lo: "7.6",
        question: "Casey wants to add Aida (business partner) to her policy. This rider's premium logic is usually based on:",
        options: [
      "risk of Casey only",
      "risk of Aida only",
      "a flat amount",
      "combined risk of both"
    ],
        answer: 1,
        explanation: "Second insured riders are priced based on the risk characteristics of that specific individual."
      },
      {
        id: 7,
        lo: "7.7",
        question: "Francis Watt has a rider giving him the right to buy $25,000 more insurance at ages 34, 37, and 40 without evidence of insurability. This is:",
        options: ["credit life insurance", "guaranteed insurability (GI) benefit", "additional insured rider", "paid-up additions option"],
        answer: 1,
        explanation: "GI riders allow purchasing more coverage at specified ages/events without health checks."
      }
    ]
  },
  {
    id: 8,
    title: "Chapter 8: Policy Provisions",
    questions: [
      {
        id: 1,
        lo: "8.1",
        question: "Deidre Vine died on June 22 while her 10-day free-look period (started June 15) was active. She hadn't returned the policy. The beneficiary receives:",
        options: ["a refund only", "a refund because death happened during free-look", "$300,000 (full benefit)", "nothing"],
        answer: 2,
        explanation: "Coverage is active during the free-look period unless the owner returns the policy."
      },
      {
        id: 2,
        lo: "8.2",
        question: "Select the correct statement about closed and open contracts.",
        options: [
      "Fraternal policies are closed contracts.",
      "Open contracts allow oral statements to change terms.",
      "All individual policies are open contracts.",
      "Closed contract provisions state the contract consists of the policy, riders, and application copy."
    ],
        answer: 3,
        explanation: "The 'entire contract' provision in commercial (closed) insurance excludes outside documents."
      },
      {
        id: 3,
        lo: "8.3",
        question: "Nestor Rae misstated his medical history (omitted heart surgery) and died 18 months later. The policy has a 2-year incontestability clause. The insurer:",
        options: ["neither", "resends both", "must pay both claims", "can contest Rae's claim"],
        answer: 3,
        explanation: "Since Rae died within the 2-year contestable period, the insurer can rescind for material misrepresentation."
      },
      {
        id: 4,
        lo: "8.4",
        question: "Salvatore died 15 days after his premium was due without paying. His $100k policy has a standard grace period. The insurer likely pays:",
        options: ["$100,000", "$99,500 (benefit minus due premium)", "$10,000 (premiums paid)", "$0"],
        answer: 1,
        explanation: "Claims during grace period are paid, but the outstanding premium is deducted from the proceeds."
      },
      {
        id: 5,
        lo: "8.5",
        question: "Conditions for reinstatement of a lapsed policy typically include:",
        options: [
      "evidence of insurability + back premiums ONLY",
      "reinstatement app + evidence of insurability + back premiums/interest",
      "reinstatement app + back premiums/interest ONLY",
      "reinstatement app + evidence of insurability ONLY"
    ],
        answer: 1,
        explanation: "Reinstatement usually requires the app, health proof, and clearing the debt."
      },
      {
        id: 6,
        lo: "8.6",
        question: "William incorrectly stated his mother was 50 (she was 53) when applying for a policy. If discovered during the claim, Astral will:",
        options: [
      "declare the policy void",
      "refund the premium difference",
      "pay the face amount from the app",
      "adjust face amount to what the premiums would have bought at 53"
    ],
        answer: 3,
        explanation: "Misstatement of age results in a benefit adjustment."
      },
      {
        id: 7,
        lo: "8.7",
        question: "One characteristic of policy loans is that:",
        options: [
      "a loan is an advance payment of the eventual benefit",
      "they aren't allowed on Universal Life",
      "you can borrow up to the face amount",
      "it creates a debtor-creditor relationship"
    ],
        answer: 0,
        explanation: "Technically, the cash value secures the loan, which is an advance on future payouts."
      },
      {
        id: 8,
        lo: "8.8",
        question: "Under the cash payment nonforfeiture option, when a policy is surrendered, the insurer:",
        options: [
      "cannot have a cash value",
      "removes the right to cancel extended term",
      "may subtract outstanding loans/interest from the cash surrender value",
      "keeps accidental death benefits active"
    ],
        answer: 2,
        explanation: "The net cash value is the gross surrender value minus any policy debt."
      },
      {
        id: 9,
        lo: "8.9",
        question: "Sejal died by suicide 3 years after policy issue (2-year suicide exclusion). Insurer obligated to pay:",
        options: ["death benefit only", "death benefit + AD&D", "return of premiums", "nothing"],
        answer: 0,
        explanation: "Since the 2-year suicide period passed, the basic benefit is paid, but AD&D riders usually exclude suicide regardless of timing."
      }
    ]
  },
  {
    id: 9,
    title: "Chapter 9: The Beneficiary",
    questions: [
      {
        id: 1,
        lo: "9.1",
        question: "Arlene named husband Jerome as primary and daughter Lola as contingent. Jerome is the:",
        options: ["secondary beneficiary", "primary beneficiary", "successor beneficiary", "contingent beneficiary"],
        answer: 1,
        explanation: "The primary beneficiary is first in line for the proceeds."
      },
      {
        id: 2,
        lo: "9.2",
        question: "Which is correct about beneficiary designations?",
        options: [
      "Irrevocable results in unrestricted change rights.",
      "Revocable interest is a 'mere expectancy'.",
      "Most beneficiaries are irrevocable.",
      "Revocable means you need consent to change."
    ],
        answer: 1,
        explanation: "Revocable beneficiaries have no vested interest during the insured's life."
      },
      {
        id: 3,
        lo: "9.3",
        question: "One true statement about participating policy dividends is:",
        options: [
      "Policy must be in force for two years before dividends are payable.",
      "Dividend options cannot be changed.",
      "Amount is determined during underwriting.",
      "Dividends decrease with age."
    ],
        answer: 0,
        explanation: "Insurers generally require a 1- or 2-year probationary period before dividends start."
      },
      {
        id: 4,
        lo: "9.4",
        question: "Applying dividends toward renewal premiums is the:",
        options: ["automatic dividend option", "premium reduction option", "cash dividend option", "accumulation at interest option"],
        answer: 1,
        explanation: "Premium reduction uses the dividend to lower the out-of-pocket cost."
      },
      {
        id: 5,
        lo: "9.5",
        question: "Joel changed his dividend option to paid-up additional insurance. This means:",
        options: [
      "premium includes insurer expenses",
      "it will be whole life insurance in whatever amount the dividend buys at Joel's age",
      "it will be one-year term insurance",
      "medical evidence is required"
    ],
        answer: 1,
        explanation: "Paid-up additions (PUAs) are small whole life policies bought at the attained age without loads."
      },
      {
        id: 6,
        lo: "9.6",
        question: "With respect to a COLLATERAL assignment:",
        options: [
      "all ownership rights are granted",
      "rights are permanent",
      "limited to settlement option selection",
      "limited to ownership rights concerning monetary value (to secure a debt)"
    ],
        answer: 3,
        explanation: "Collateral assignment is temporary and for security only."
      },
      {
        id: 7,
        lo: "9.7",
        question: "Duncan Wu transferred policy ownership to daughter Lillian using the endorsement method. This means:",
        options: [
      "separate assignment agreement needed",
      "Duncan must notify the insurer in writing",
      "insurer must issue a NEW policy",
      "he must make a collateral assignment"
    ],
        answer: 1,
        explanation: "Endorsement method involves a written request to the insurer to change the policy's master record."
      },
      {
        id: 8,
        lo: "9.8",
        question: "Kyle named wife Irena primary and mother Florence contingent. Irena died. Florence and Michael (contingent) also died. Proceeds go to:",
        options: ["Irena's estate", "Kyle's estate", "Michael's estate", "Florence's estate"],
        answer: 0,
        explanation: "If no beneficiaries survive the insured, proceeds go to the insured's estate (Irena was the insured)."
      },
      {
        id: 9,
        lo: "9.9",
        question: "Wilma and Gregory died in an auto accident; no proof of who died first. Lived in a SIMULTANEOUS DEATH ACT state. Proceeds of Wilma's policy go to:",
        options: ["Loretta (contingent)", "Gregory's estate", "neither", "Wilma's estate"],
        answer: 0,
        explanation: "SDA assumes the beneficiary died first if order is unknown, so proceeds skip to the contingent beneficiary."
      },
      {
        id: 10,
        lo: "9.10",
        question: "The clause stating a beneficiary must outlive the insured by a specified period is a:",
        options: ["succession clause", "survivorship clause", "right of revocation clause", "key person clause"],
        answer: 1,
        explanation: "Survivorship clauses (e.g., 30 days) require the beneficiary to survive that period to receive benefits."
      },
      {
        id: 11,
        lo: "9.11",
        question: "A beneficiary who intentionally kills the insured (is / is not) disqualified. A policy bought to profit from death is (valid / void).",
        options: ["is not / valid", "is / valid", "is / void", "is not / void"],
        answer: 2,
        explanation: "Criminal acts disqualify beneficiaries, and policies without insurable interest (gambling on life) are void."
      },
      {
        id: 12,
        lo: "9.12",
        question: "Joshua had $200k policy, $200k AD&D, $1.5k due premium, $7k dividends, and $3k loan. He died in an accident during grace period. Payout:",
        options: ["$202,500", "$395,500", "$402,500", "$195,500"],
        answer: 2,
        explanation: "Proceeds = Face ($200k) + AD&D ($200k) + Dividends ($7k) - Due Premium ($1.5k) - Loan ($3k) = $402,500."
      },
      {
        id: 13,
        lo: "9.13",
        question: "Under the fixed amount settlement option, the insurer:",
        options: [
      "pays equal installments until proceeds/interest are exhausted",
      "allows withdrawal of only part of the funds",
      "pays larger installments than other options",
      "cannot place restrictions on payee"
    ],
        answer: 0,
        explanation: "Fixed amount specifies a check size ($1k/month etc.) and pays until the bucket is empty."
      }
    ]
  },
  {
    id: 10,
    title: "Chapter 10: Annuities",
    questions: [
      {
        id: 1,
        lo: "10.1",
        question: "The person whose lifetime determines the duration of annuity payments is the:",
        options: ["contract owner", "beneficiary", "annuitant", "payee"],
        answer: 2,
        explanation: "The annuitant is the measuring life for the contract."
      },
      {
        id: 2,
        lo: "10.2",
        question: "Saida bought annuity in 2015, payments start in 2035. The annuity START DATE is:",
        options: ["Feb 1, 2015", "Feb 1, 2035", "when Saida dies", "when the reserve is full"],
        answer: 1,
        explanation: "The start date is when the payout phase begins."
      },
      {
        id: 3,
        lo: "10.3",
        question: "An annuity with payments postponed for at least a year is a (immediate / deferred) annuity. The wait time is the (accumulation / liquidation) period.",
        options: ["immediate / liquidation", "immediate / accumulation", "deferred / accumulation", "deferred / liquidation"],
        answer: 2,
        explanation: "Deferred annuities wait to pay; the growth time is the accumulation period."
      },
      {
        id: 4,
        lo: "10.4",
        question: "Raji (58) used a lump-sum to buy monthly payments starting at 65. This is a:",
        options: ["flexible-premium immediate", "flexible-premium deferred", "single-premium deferred annuity", "single-premium immediate annuity"],
        answer: 2,
        explanation: "Single lump sum + wait of 7 years = SPDA."
      },
      {
        id: 5,
        lo: "10.5",
        question: "Sharon owns fixed annuity; insurer must pay at least 1%. This 1% is the:",
        options: ["current interest-crediting rate", "bonus rate", "MVA rate", "guaranteed minimum interest-crediting rate"],
        answer: 3,
        explanation: "The minimum floor mandated by the contract."
      },
      {
        id: 6,
        lo: "10.6",
        question: "Which statement about variable annuities is correct?",
        options: [
      "US laws treat them as securities.",
      "Insurer guarantees no loss of principal.",
      "Percentages cannot be changed.",
      "Allocation cannot be changed once selected."
    ],
        answer: 0,
        explanation: "Because they carry investment risk, variable annuities are regulated as securities (SEC/FINRA)."
      },
      {
        id: 7,
        lo: "10.7",
        question: "Lance invested $100k: 50% in A ($25/unit), 30% in B ($30/unit), 20% in C ($40/unit). It's correct to say:",
        options: [
      "1,000 units in A",
      "twice as many units in A than B",
      "2,000 units in A",
      "half as many units in C than A"
    ],
        answer: 2,
        explanation: "$50k in A / $25 per unit = 2,000 units. $30k in B / $30 = 1,000 units. $20k in C / $40 = 500 units."
      },
      {
        id: 8,
        lo: "10.8",
        question: "Kara Garner (58) bought fixed annuity for retirement in 7 years, locking in a guaranteed stream. This is a:",
        options: ["longevity annuity", "fixed indexed annuity", "deferred income annuity (DIA)", "MVA annuity"],
        answer: 2,
        explanation: "DIAs are specialized fixed deferred annuities that provide a guaranteed income stream starting at a future date."
      },
      {
        id: 9,
        lo: "10.9",
        question: "A. Fixed deferred annuities typically allow 10% withdrawal free of surrender charges. B. Surrender charges usually decline over time. Which are correct?",
        options: ["Both A and B", "A only", "B only", "Neither"],
        answer: 0,
        explanation: "Standard provisions include a small free withdrawal and a declining charge schedule."
      }
    ]
  },
  {
    id: 11,
    title: "Chapter 11: Annuity Provisions",
    questions: [
      {
        id: 1,
        lo: "11.1",
        question: "Sadie paid $75,000 for a life income with refund annuity ($5,000/year). She died after 5 years (received $25,000). The beneficiary receives:",
        options: ["nothing", "a single payment of $5,000", "$50,000", "$75,000"],
        answer: 2,
        explanation: "Refund annuities guarantee that at least the principal is returned. $75,000 principal - $25,000 paid = $50,000 balance."
      },
      {
        id: 2,
        lo: "11.2",
        question: "A variable deferred annuity benefit that allows withdrawing a percentage of the benefit base annually (but not for life) is a:",
        options: ["GMDB", "GMIB", "GMWB", "GMAB"],
        answer: 2,
        explanation: "Guaranteed minimum withdrawal benefits (GMWB) protect the right to pull money out regardless of account performance."
      },
      {
        id: 3,
        lo: "11.3",
        question: "All other factors equal, one correct statement about a fixed SPIA is:",
        options: [
      "higher estimated rate of return = smaller payment",
      "longer guarantee = larger payment",
      "less frequent payments = smaller total annual payout",
      "older person = larger payment (shorter expectancy)"
    ],
        answer: 3,
        explanation: "Shorter life expectancy (older age) allows higher periodic payouts for the same premium."
      },
      {
        id: 4,
        lo: "11.4",
        question: "Rufus has 75 units in A ($10 each), 100 in B ($4), and 50 in C ($5). His first monthly payment is:",
        options: ["$4,275", "$1,900", "$2,250", "$1,400"],
        answer: 3,
        explanation: "(75 * 10) + (100 * 4) + (50 * 5) = 750 + 400 + 250 = $1,400."
      },
      {
        id: 5,
        lo: "11.5",
        question: "An insurer assessing a charge for variable annuity risks (like the death benefit guarantee) is imposing a:",
        options: ["maintenance fee", "surrender charge", "mortality & expense (M&E) charge", "front-end load"],
        answer: 2,
        explanation: "M&E charges cover the actuarial risks and profit margin of the annuity."
      },
      {
        id: 6,
        lo: "11.6",
        question: "An annuity purchased outside of a tax-advantaged retirement plan is a:",
        options: ["OAS annuity", "qualified annuity", "nonqualified annuity", "ESOP"],
        answer: 2,
        explanation: "Nonqualified indicates funds are not part of an ERISA/IRS designated plan."
      },
      {
        id: 7,
        lo: "11.7",
        question: "One true statement about traditional IRAs is:",
        options: [
      "Roth IRA allows deductible contributions",
      "investment earnings are tax deferred until withdrawal",
      "no annual contribution limits",
      "under 59.5 can withdraw without penalty"
    ],
        answer: 1,
        explanation: "Deferred growth is the primary driver for IRA savings."
      }
    ]
  },
  {
    id: 12,
    title: "Chapter 12: Medical Expense and Disability",
    questions: [
      {
        id: 1,
        lo: "12.1",
        question: "Select the correct pair of (Included in coverage / Excluded from coverage) for major medical:",
        options: [
      "registered nurses' services / routine dental",
      "routine eye exams / speech therapy",
      "anesthesia and oxygen / surgical supplies",
      "elective cosmetic surgery / childhood immunizations"
    ],
        answer: 0,
        explanation: "Standard medical covers acute care (RNs) but excludes elective/maintenance care like basic dental."
      },
      {
        id: 2,
        lo: "12.2",
        question: "Nutmeg bases payments on 90% of what providers in a region commonly charge. This is the:",
        options: ["essential health benefits", "benefit trigger", "maximum out-of-pocket", "usual, customary, and reasonable (UCR) fee"],
        answer: 3,
        explanation: "UCR is the industry standard for benchmarking medical costs."
      },
      {
        id: 3,
        lo: "12.3",
        question: "Kaoru has $500 deductible, 20% coinsurance, $5,000 out-of-pocket max. Hospitalized for $20,000. Total out-of-pocket:",
        options: ["$5,000", "$4,400", "$500", "$3,900"],
        answer: 1,
        explanation: "$500 deductible + 20% of ($20,000 - $500) = 500 + 3,900 = $4,400."
      },
      {
        id: 4,
        lo: "12.4",
        question: "Medicare provides benefits to:",
        options: [
      "people age 65+ and those with certain disabilities",
      "people 65+ only",
      "people with disabilities only",
      "everyone in the US"
    ],
        answer: 0,
        explanation: "Medicare is federal coverage for seniors and the disabled."
      },
      {
        id: 5,
        lo: "12.5",
        question: "Managed care plans typically:",
        options: [
      "adjust premiums monthly based on usage",
      "require plan member copayments",
      "provide extensive out-of-network benefits",
      "shift all risk to the insurer"
    ],
        answer: 1,
        explanation: "Copayments (point-of-service fees) are common features to manage costs."
      },
      {
        id: 6,
        lo: "12.6",
        question: "Kristen contributes to tax-advantaged accumulated money (Sunflower also contributes). Hector sets aside pre-tax wages (doesn't require HDHP).",
        options: ["A: HSA, B: HRA", "A: HRA, B: HCFSA", "A: HSA, B: HCFSA", "A: HRA, B: HSA"],
        answer: 2,
        explanation: "HSAs are for accumulation (portable); HCFSAs (Flexible Spending) are pre-tax and 'use-it-or-lose-it'."
      },
      {
        id: 7,
        lo: "12.7",
        question: "Under the ACA (Affordable Care Act), plans in individual/small group markets must provide:",
        options: [
      "deductibles for preventive care",
      "essential health benefits",
      "exchange-only offerings",
      "no out-of-pocket limits"
    ],
        answer: 1,
        explanation: "EHB (Essential Health Benefits) is a mandate for minimum coverage quality."
      },
      {
        id: 8,
        lo: "12.8",
        question: "Short-term disability period is usually (13-26 weeks / 1-5 years). Long-term commonly extends (1 year / until age 65).",
        options: ["1-5 years / 1 year", "13-26 weeks / 1 year", "13-26 weeks / until age 65", "1-5 years / until age 65"],
        answer: 2,
        explanation: "Standard industry definitions for duration of coverage."
      },
      {
        id: 9,
        lo: "12.9",
        question: "Marcus's policy has a 2-part definition of disability. After two years, he is only disabled if he cannot work at:",
        options: [
      "any occupation fitted by education, training, or experience",
      "any job earning less than before",
      "any occupation",
      "his own previous occupation"
    ],
        answer: 0,
        explanation: "The 'any occupation' phase focuses on suitability based on the insured's background."
      },
      {
        id: 10,
        lo: "12.10",
        question: "Which of the following is true?",
        options: [
      "Disability benefits replace 100% of income.",
      "Benefits should be low enough to cause drastic reduction.",
      "Presumptive disability automatically assumes total disability.",
      "Most policies pay from the first day."
    ],
        answer: 2,
        explanation: "Specific losses (dual limb, etc.) 'presume' total disability."
      },
      {
        id: 11,
        lo: "12.11",
        question: "Shi-Fay can increase her disability benefit as her income rises without health checks. This is a:",
        options: ["partial disability benefit", "GMIB", "future purchase option", "COLA"],
        answer: 2,
        explanation: "Future purchase options allow scaling coverage with career growth."
      },
      {
        id: 12,
        lo: "12.12",
        question: "Activities of Daily Living (ADLs) include:",
        options: ["cooking", "bathing", "taking medications", "all of the above"],
        answer: 1,
        explanation: "Standard ADLs: Bathing, dressing, eating, toileting, transferring, continence. (Cooking is IADL)."
      },
      {
        id: 13,
        lo: "12.13",
        question: "LTCI policy pays actual expenses up to a max (nursing home was $150/day, max was $175). Insurer paid $150. This is:",
        options: ["reimbursement method", "per diem method", "indemnity benefit method", "benefit trigger method"],
        answer: 0,
        explanation: "Reimbursement pays the actual cost incurred up to the limit."
      }
    ]
  },
  {
    id: 13,
    title: "Chapter 13: Group Insurance",
    questions: [
      {
        id: 1,
        lo: "13.1",
        question: "The parties to a MASTER group insurance contract are:",
        options: [
      "group policyholder and group insureds only",
      "insurer and group policyholder only",
      "insurer, group policyholder, and group insureds",
      "insurer and group insureds only"
    ],
        answer: 1,
        explanation: "The contract is between the insurer and the policyholder (employer/union/etc.)."
      },
      {
        id: 2,
        lo: "13.2",
        question: "One true statement about group contracts is:",
        options: [
      "Each member has the right to name their beneficiary.",
      "Each member gets physical copy of master contract.",
      "Certificates are not required.",
      "Employer pays all = contributory plan."
    ],
        answer: 0,
        explanation: "Individual rights to designate beneficiaries remain a constant in group life."
      },
      {
        id: 3,
        lo: "13.3",
        question: "Martin began work June 10. Noncontributory group life starts after 30-day probationary period. Eligibility period is 31 days. Group life starts:",
        options: ["June 10", "July 10 (and enroll for health starts)", "July 10", "August 10"],
        answer: 2,
        explanation: "Probationary window must be satisfied for automatic coverage."
      },
      {
        id: 4,
        lo: "13.4",
        question: "Which group is likely to FAIL to qualify for group coverage under typical guidelines?",
        options: [
      "Colossal Association (employees of several small builders)",
      "Cardamom Labor Union (promotes welfare)",
      "Didactic Company (professional organization)",
      "Golden Years (small group formed JUST to buy cheap insurance)"
    ],
        answer: 3,
        explanation: "Groups must exist for a purpose other than just obtaining insurance (avoiding pure antiselection)."
      },
      {
        id: 5,
        lo: "13.5",
        question: "One factor making a group eligible is:",
        options: [
      "members choose their own coverage amounts",
      "at least 25% participation",
      "employer pays 0% of premium",
      "steady flow of new members (stability)"
    ],
        answer: 3,
        explanation: "Age-distribution stability is key for group underwriting."
      },
      {
        id: 6,
        lo: "13.6",
        question: "A table defining coverage based on salary or position is a:",
        options: ["benefit schedule", "experience refund schedule", "self-administered plan", "blended rating schedule"],
        answer: 0,
        explanation: "Benefit schedules define how much insurance each class of member receives."
      },
      {
        id: 7,
        lo: "13.7",
        question: "Azalea (9 employees), Hydrangea (1,500 employees, previously insured). Primrose will use:",
        options: [
      "manual rating for both",
      "experience for Azalea, manual for Hydrangea",
      "experience for both",
      "manual for Azalea, experience for Hydrangea"
    ],
        answer: 3,
        explanation: "Experience rating requires statistically significant group size."
      },
      {
        id: 8,
        lo: "13.8",
        question: "Sequoia: $50k coverage per employee, $0.60 per $1,000 rate. Had 100 employees, added 5 more on March 1. March premium:",
        options: ["$3,000", "$30", "$150", "$3,150"],
        answer: 3,
        explanation: "105 employees * ($50,000 / $1,000) * $0.60 = 105 * 50 * 0.6 = $3,150."
      }
    ]
  },
  {
    id: 14,
    title: "Chapter 14: Group Life and Retirement",
    questions: [
      {
        id: 1,
        lo: "14.1",
        question: "Which statement about group life provisions is correct?",
        options: [
      "Policies typically include age but not sex misstatement provisions.",
      "Policyholders aren't obligated to pay for grace period coverage.",
      "Incontestability prevents contesting individual coverage without contesting master contract.",
      "Conversion requires evidence of insurability."
    ],
        answer: 0,
        explanation: "Since group rates don't differentiate by gender at the member level, misstatement of sex is usually omitted."
      },
      {
        id: 2,
        lo: "14.2",
        question: "Insured group member is prohibited from naming the group policyholder beneficiary UNLESS the group is a:",
        options: ["multiple-employer group", "labor union", "single-employer group", "group creditor life policy"],
        answer: 3,
        explanation: "In creditor life, the whole point is paying the lender."
      },
      {
        id: 3,
        lo: "14.3",
        question: "About group yearly renewable term (YRT) plans:",
        options: [
      "they build cash value",
      "few are YRT",
      "insurer can change the premium rate every year",
      "health evidence required every year"
    ],
        answer: 2,
        explanation: "YRT rates scale based on the group's evolving experience and age profile."
      },
      {
        id: 4,
        lo: "14.4",
        question: "Lili has $100k term, $50k AD&D, $25k travel accident. Dies in accident while traveling for business. Beneficiary gets:",
        options: ["$175,000", "$0", "$100,000", "$75,000"],
        answer: 0,
        explanation: "$100k + $50k + $25k = $175,000."
      },
      {
        id: 5,
        lo: "14.5",
        question: "About group VUL (Variable Universal Life) plans:",
        options: [
      "employees cannot choose payment amounts",
      "employer pays part of premium",
      "participants choose different subaccounts for cash values",
      "employer pays entire premium"
    ],
        answer: 2,
        explanation: "VUL is defined by participant choice in investment exposure."
      },
      {
        id: 6,
        lo: "14.6",
        question: "The detailed legal agreement that establishes a retirement plan and specifies obligations is the:",
        options: ["plan sponsor", "plan document", "plan administrator", "funding vehicle"],
        answer: 1,
        explanation: "The plan document is the governing constitution of the retirement plan."
      },
      {
        id: 7,
        lo: "14.7",
        question: "Under a defined (benefit / contribution) formula, the sponsor knows the cost in advance. The retirement benefit is (uncertain / specified).",
        options: [
      "benefit / uncertain",
      "benefit / specified",
      "contribution / specified",
      "contribution / uncertain"
    ],
        answer: 3,
        explanation: "Defined CONTRIBUTION = known cost input, unknown balance output."
      },
      {
        id: 8,
        lo: "14.8",
        question: "Under a 401(k) plan:",
        options: [
      "contributions are included in taxable income",
      "employees cannot contribute",
      "assets are pooled only by state treasury",
      "employee salary reduction arrangement is used"
    ],
        answer: 3,
        explanation: "401(k)s are primarily funded by employee deferrals."
      },
      {
        id: 9,
        lo: "14.9",
        question: "Pergola (150 employees) makes deductible contributions to traditional IRAs for each participant. This is a:",
        options: ["403(b)", "simplified employee pension (SEP)", "SIMPLE IRA", "457(b)"],
        answer: 1,
        explanation: "SEPs are simple employer-funded retirement plans using individual IRAs."
      },
      {
        id: 10,
        lo: "14.10",
        question: "One correct statement about US Social Security is:",
        options: [
      "only for those at full retirement age",
      "doesn't cover military",
      "administered by state",
      "funded by mandatory contributions from workers AND employers"
    ],
        answer: 3,
        explanation: "Social Security is funded by FICA taxes paid by both sides."
      },
      {
        id: 11,
        lo: "14.11",
        question: "In Canada, which statement is correct about government plans?",
        options: [
      "OAS is funded by federal general tax revenues.",
      "CPP doesn't cover self-employed.",
      "CPP provides universal pension to ALL over 65.",
      "QPP participation is voluntary."
    ],
        answer: 0,
        explanation: "OAS is the non-contributory universal pillar of the Canadian system."
      }
    ]
  }
];
