import { Question } from '../../types';

export const tpgMaster100: Question[] = [
  // Chapter 1: Risk and Insurance (7 questions)
  {
    id: 1,
    lo: "1.1",
    question: "Both individuals and businesses experience two kinds of risk—speculative risk and pure risk. By definition, a pure risk is one in which the possible outcomes include",
    options: ["only gain", "only loss", "loss, no loss, or gain", "only loss or no loss"],
    answer: 3,
    explanation: "A pure risk is a risk that involves no possibility of gain; the only possible outcomes are loss or no loss."
  },
  {
    id: 2,
    lo: "1.2",
    question: "The probability that a particular event will occur in the future is often determined by observing the results of that event in the past. If an insurer observes a large number of people who are similar in terms of age and health, the insurer can predict with a high degree of accuracy the number of deaths that will occur among those people. This mathematical principle is known as the",
    options: ["law of diminishing returns", "law of large numbers", "principle of insurable interest", "principle of indemnity"],
    answer: 1,
    explanation: "The law of large numbers states that the more times an event is observed, the closer the observed result will be to the true probability."
  },
  {
    id: 3,
    lo: "1.3",
    question: "An insurance company generally classifies a proposed insured who has a significantly greater-than-average likelihood of loss but who is still found to be insurable as a",
    options: ["substandard risk", "declined risk", "standard risk", "preferred risk"],
    answer: 0,
    explanation: "Substandard risks (also called rated risks) are those whose likelihood of loss is higher than average but still within acceptable limits for a higher premium."
  },
  {
    id: 4,
    lo: "1.4",
    question: "From an insurer's standpoint, the tendency of individuals who believe they have a greater-than-average likelihood of loss to seek insurance protection to a greater extent than do others is known as",
    options: ["risk control", "antiselection", "risk avoidance", "risk retention"],
    answer: 1,
    explanation: "Antiselection (or adverse selection) is the tendency of high-risk individuals to seek more insurance than average-risk individuals."
  },
  {
    id: 5,
    lo: "1.5",
    question: "When a person chooses not to engage in a hazardous activity, such as skydiving, because they want to avoid the possibility of a financial loss associated with that activity, the person is using the risk management technique known as",
    options: ["risk control", "risk transfer", "risk avoidance", "risk acceptance"],
    answer: 2,
    explanation: "Risk avoidance involves staying away from any activity that could lead to a loss."
  },
  {
    id: 6,
    lo: "1.6",
    question: "In the context of the requirements for an insurable risk, a loss is considered definite if it is possible for the insurer to establish",
    options: ["that the loss was expected to occur", "that the loss was catstrophic to the insurer", "the emotional value of the person insured", "the exact time and amount of the loss"],
    answer: 3,
    explanation: "Definite means the time, place, and amount of the loss can be clearly established so the insurer knows when and how much to pay."
  },
  {
    id: 7,
    lo: "1.7",
    question: "In individual life insurance, an insurable interest must exist at the time",
    options: ["the beneficiary is named", "the insured person dies", "a claim for benefits is filed", "the policy for coverage is issued"],
    answer: 3,
    explanation: "In life insurance, insurable interest only needs to exist at the time the policy is issued."
  },

  // Chapter 2: The Financial Services Industry (7 questions)
  {
    id: 8,
    lo: "2.1",
    question: "In most countries, insurance companies are organized as corporations. One distinguishing characteristic of a corporation is that",
    options: ["its owners are personally liable for the company's debts", "it is dissolved upon the death of an owner", "it is a legal entity that is separate from its owners", "it is owned by the government"],
    answer: 2,
    explanation: "A corporation is a distinct legal entity with limited liability for its owners."
  },
  {
    id: 9,
    lo: "2.2",
    question: "A nonprofit organization that is formed for the purpose of providing social and insurance benefits to its members and that has a lodge system and a representative form of government is known as a",
    options: ["financial holding company", "mutual insurance company", "fraternal benefit society", "stock insurance company"],
    answer: 2,
    explanation: "Fraternal benefit societies are nonprofit social organizations that provide insurance to members of a formal group."
  },
  {
    id: 10,
    lo: "2.3",
    question: "The owners' equity in a stock insurance company is represented by the company's capital and its surplus. In this context, capital is the amount of money that",
    options: ["the company owes to its policyowners", "the insurer has set aside to pay future claims", "the company has earned as profit", "the company's owners have invested in the company"],
    answer: 3,
    explanation: "Capital is the investment made by stockholders when they purchase shares in the company."
  },
  {
    id: 11,
    lo: "2.4",
    question: "In the United States, the primary regulator of the insurance industry is the",
    options: ["National Association of Insurance Commissioners (NAIC)", "federal government", "individual states", "Financial Industry Regulatory Authority (FINRA)"],
    answer: 2,
    explanation: "In the US, insurance is primarily regulated at the state level, as confirmed by the McCarran-Ferguson Act."
  },
  {
    id: 12,
    lo: "2.5",
    question: "The movement toward a single financial institution being able to serve a customer's banking, insurance, and securities needs is known as",
    options: ["financial consolidation", "market conduct regulation", "solvency regulation", "financial convergence"],
    answer: 3,
    explanation: "Financial convergence is the blurring of lines between different types of financial service providers."
  },
  {
    id: 13,
    lo: "2.6",
    question: "Which of the following statements about the McCarran-Ferguson Act is correct?",
    options: ["It confirmed that state regulation of insurance is in the public interest.", "It created the SEC.", "It prohibited states from taxing insurance companies.", "It established the federal government as the primary regulator of insurance."],
    answer: 0,
    explanation: "The McCarran-Ferguson Act left regulation to the states as long as Congress considered it adequate."
  },
  {
    id: 14,
    lo: "2.7",
    question: "A financial institution that acts as an intermediary by channeling funds from people who have movey to save to people who need to borrow funds is known as a",
    options: ["fraternal society", "direct writer", "depository institution", "stockholder"],
    answer: 2,
    explanation: "Depository institutions like banks take deposits and provide loans, acting as intermediaries."
  },

  // Chapter 3: Contract Law and Life Insurance (7 questions)
  {
    id: 15,
    lo: "3.1",
    question: "In order for a contract to be legally enforceable, the parties to the contract must give something of value to each other. This requirement for a valid contract is known as",
    options: ["mutual assent", "lawful purpose", "contractual capacity", "consideration"],
    answer: 3,
    explanation: "Consideration is the value exchanged between parties to a contract."
  },
  {
    id: 16,
    lo: "3.2",
    question: "Because only the insurance company makes a legally enforceable promise to perform if a specified event occurs, an insurance policy is considered to be a",
    options: ["bilateral contract", "bargaining contract", "commutative contract", "unilateral contract"],
    answer: 3,
    explanation: "In a unilateral contract, only one party is legally bound to perform their promise."
  },
  {
    id: 17,
    lo: "3.3",
    question: "A contract that is drafted by one party (the insurer) and must be accepted or rejected in its entirety by the other party (the applicant) is known as a",
    options: ["formal contract", "contract of adhesion", "commutative contract", "bargaining contract"],
    answer: 1,
    explanation: "Contracts of adhesion are 'take it or leave it' agreements where the buyer cannot negotiate the terms."
  },
  {
    id: 18,
    lo: "3.4",
    question: "A life insurance policy is an aleatory contract. By definition, an aleatory contract is one in which the parties",
    options: ["do not have to perform unless the economy is strong", "mutually agree on every term", "exchange unequal value", "exchange equal value"],
    answer: 2,
    explanation: "Aleatory contracts depend on chance, and the value exchanged by the parties is usually unequal."
  },
  {
    id: 19,
    lo: "3.5",
    question: "An insurance applicant's consideration for the insurance contract consists of",
    options: ["the application and the initial premium", "the health of the applicant", "the application only", "the initial premium only"],
    answer: 0,
    explanation: "The applicant's consideration is the signed application and the first premium payment."
  },
  {
    id: 20,
    lo: "3.6",
    question: "Waiters and bartenders are generally considered to have the legal __________ to enter into a contract.",
    options: ["capacity", "consideration", "assent", "purpose"],
    answer: 0,
    explanation: "Contractual capacity refers to the legal power to enter into a binding agreement."
  },
  {
    id: 21,
    lo: "3.7",
    question: "A life insurance policy is a contract for a lawful purpose. One indicator of a lawful purpose in a life insurance contract is the presence of",
    options: ["a large face amount", "a double indemnity clause", "an insurable interest", "a high premium"],
    answer: 2,
    explanation: "Insurable interest ensures the contract is for protection, not a wager on life (which is unlawful)."
  },

  // Chapter 4: Principles of Pricing (7 questions)
  {
    id: 22,
    lo: "4.1",
    question: "The amount of money that an insurer estimates it will need to pay all of its potential future obligations is known as the insurer's",
    options: ["policy reserves", "capital", "surplus", "retention limit"],
    answer: 0,
    explanation: "Policy reserves are liabilities that represent the present value of future benefit obligations."
  },
  {
    id: 23,
    lo: "4.2",
    question: "If a life insurance policy has a face amount of $250,000 and the premium rate is $8.00 per $1,000 of coverage, the annual premium for the policy is",
    options: ["$2,000", "$200", "$2,500", "$250"],
    answer: 0,
    explanation: "(250,000 / 1,000) * 8 = 250 * 8 = 2,000."
  },
  {
    id: 24,
    lo: "4.3",
    question: "The mathematical principle that money today is worth more than the same amount of money in the future is known as the",
    options: ["principle of indemnity", "time value of money", "law of large numbers", "basis of mortality"],
    answer: 1,
    explanation: "The time value of money reflects that money earned today moves into investments to earn interest over time."
  },
  {
    id: 25,
    lo: "4.4",
    question: "A mortality table that contains separate mortality rates for males and females is known as a",
    options: ["sex-distinct table", "composite table", "unisex table", "select table"],
    answer: 0,
    explanation: "Sex-distinct tables reflect the different life expectancies of men and women."
  },
  {
    id: 26,
    lo: "4.5",
    question: "The premium rate that an insurer applies to a particular group of proposed insureds is based on the insurer's estimated",
    options: ["capital and surplus", "stock price", "cost of benefits, operating expenses, and investment earnings", "market share"],
    answer: 2,
    explanation: "Pricing factors include benefits (mortality), expenses (loading), and interest (investment)."
  },
  {
    id: 27,
    lo: "4.6",
    question: "In a level premium system, the premium rate remains the same throughout the time that the policy is in force. One characteristic of a level premium system is that",
    options: ["the premium is higher than needed to pay claims in the early years", "no reserves are built up", "it is commonly used for term insurance only", "it allows the insurer to increase the rate every year"],
    answer: 0,
    explanation: "Early-year overpayments fund the high costs of coverage in later years."
  },
  {
    id: 28,
    lo: "4.7",
    question: "Operating expenses for an insurance company, such as payroll and rent, are often called",
    options: ["loading", "reserves", "claims", "dividends"],
    answer: 0,
    explanation: "Loading is the portion of the premium designed to cover administrative costs and provide a profit margin."
  },

  // Chapter 5: Term Life Insurance (7 questions)
  {
    id: 29,
    lo: "5.1",
    question: "Life insurance that provides protection for a specified period of time and that does not have a savings element is known as",
    options: ["universal life insurance", "variable life insurance", "term life insurance", "whole life insurance"],
    answer: 2,
    explanation: "Term insurance is temporary protection with no cash value component."
  },
  {
    id: 30,
    lo: "5.2",
    question: "A term life insurance policy that allows the policyowner to continue the coverage after the initial term without providing evidence of insurability is",
    options: ["decreasing", "increasing", "convertible", "renewable"],
    answer: 3,
    explanation: "Renewability allows the continuation of coverage regardless of changes in health."
  },
  {
    id: 31,
    lo: "5.3",
    question: "A policy of term life insurance in which the face amount of the policy decreases over the term of the policy is most likely to be used to",
    options: ["provide a lifetime income for a spouse", "provide for retirement income", "pay off a mortgage if the insured dies", "build a college fund for a child"],
    answer: 2,
    explanation: "Decreasing term is ideal for covering debts that diminish over time, like mortgages."
  },
  {
    id: 32,
    lo: "5.4",
    question: "The conversion privilege in a term life insurance policy allows the policyowner to change the policy to a",
    options: ["variable annuity", "decreasing term policy", "permanent life insurance policy", "temporary health insurance policy"],
    answer: 2,
    explanation: "Conversion allows an insured to switch from temporary to permanent coverage without a medical exam."
  },
  {
    id: 33,
    lo: "5.5",
    question: "Family income coverage is a plan of term life insurance that provides a monthly income to the beneficiary if the insured dies",
    options: ["only after the beneficiary reaches age 65", "during a specified term of years", "in an accident", "at any time during the insured's life"],
    answer: 1,
    explanation: "Family income plans provide income for the remainder of a set term from the date of policy issue."
  },
  {
    id: 34,
    lo: "5.6",
    question: "Credit life insurance is a type of term life insurance designed to pay the balance of a borrower's debt if the borrower dies. The beneficiary of a credit life insurance policy is the",
    options: ["borrower's children", "borrower's estate", "lender", "borrower's spouse"],
    answer: 2,
    explanation: "The lender (creditor) is the beneficiary so the debt can be cleared."
  },
  {
    id: 35,
    lo: "5.7",
    question: "Return of premium (ROP) term insurance differs from traditional term insurance in that ROP term",
    options: ["refunnds all premiums paid if the insured survives the term", "is cheaper than traditional term", "has no fixed term", "has no death benefit"],
    answer: 0,
    explanation: "ROP term provides a refund of all paid premiums if the insured is alive at the end of the term."
  },

  // Chapter 6: Permanent Life Insurance (8 questions)
  {
    id: 36,
    lo: "6.1",
    question: "Whole life insurance differs from term life insurance because whole life insurance provides",
    options: ["protection for a limited period only", "no benefit if the insured survives the term", "only accidental death benefits", "a savings element (cash value)"],
    answer: 3,
    explanation: "Permanent products build cash value, which acts as a savings/investment element."
  },
  {
    id: 37,
    lo: "6.2",
    question: "A whole life insurance policy for which the premiums are paid throughout the lifetime of the insured is a",
    options: ["modified-premium whole life policy", "continuous-premium whole life policy", "graded-premium whole life policy", "limited-payment whole life policy"],
    answer: 1,
    explanation: "Continuous-premium (or straight life) requires level payments until death or maturity."
  },
  {
    id: 38,
    lo: "6.3",
    question: "In a limited-payment whole life insurance policy, the amount of each premium payment is generally __________ the premium for an equivalent continuous-premium policy.",
    options: ["higher than", "the same as", "lower than", "fluctuating compared to"],
    answer: 0,
    explanation: "Because the total cost is compressed into a shorter timeframe, annual payments must be larger."
  },
  {
    id: 39,
    lo: "6.4",
    question: "One distinguishing characteristic of universal life insurance is that it is 'unbundled'. This means that the insurer",
    options: ["discloses the separate charges for mortality, interest, and expenses", "places all funds in individual stock accounts", "combines all pricing elements into one premium", "does not allow the owner to change the face amount"],
    answer: 0,
    explanation: "UL transparency (unbundling) shows exactly how much goes to mortality costs, expenses, and interest."
  },
  {
    id: 40,
    lo: "6.5",
    question: "Under a universal life insurance policy with Option A (Level) death benefit, the total death benefit is equal to the",
    options: ["cash value only", "face amount of the policy", "face amount plus the cash value", "premiums paid plus interest"],
    answer: 1,
    explanation: "Option A keeps the total death benefit level; as cash value grows, the amount of pure insurance decreases."
  },
  {
    id: 41,
    lo: "6.6",
    question: "Variable life insurance is a form of permanent life insurance where the cash value and death benefit vary based on the performance of",
    options: ["funds held in a separate account", "the insurer's general account", "the interest rates set by the government", "a specific index like the S&P 500"],
    answer: 0,
    explanation: "Variable products use 'separate accounts' to give policyowners investment choice and risk."
  },
  {
    id: 42,
    lo: "6.7",
    question: "Variable universal life (VUL) insurance combines the characteristics of which two insurance products?",
    options: ["Term and Universal Life", "Whole Life and Variable Life", "Universal Life and Variable Life", "Term and Whole Life"],
    answer: 2,
    explanation: "VUL takes the flexible structure of UL and the separate account features of VL."
  },
  {
    id: 43,
    lo: "6.8",
    question: "Joint whole life insurance typically pays the death benefit when",
    options: ["the second of the insureds dies", "the third of the insureds dies", "the first of the insureds dies", "the children reach age 21"],
    answer: 2,
    explanation: "Joint life (first-to-die) pays on the first death; last survivor (second-to-die) pays on the second."
  },

  // Chapter 7: Supplemental Benefits (7 questions)
  {
    id: 44,
    lo: "7.1",
    question: "A waiver of premium (WP) for disability benefit specifies that the insurer will waive the policy's premiums if the insured",
    options: ["becomes unemployed", "dies in an accident", "reaches age 65", "becomes totally disabled"],
    answer: 3,
    explanation: "WP benefits cover the cost of the policy if the insured cannot work due to disability."
  },
  {
    id: 45,
    lo: "7.2",
    question: "The accidental death benefit (double indemnity) rider typically pays a benefit only if the death of the insured was caused by an accident that was",
    options: ["caused by illness", "internal", "external, violent, and accidental", "foreseen"],
    answer: 2,
    explanation: "Double indemnity requires that the cause of death be purely accidental and external."
  },
  {
    id: 46,
    lo: "7.3",
    question: "The guaranteed insurability (GI) rider allows the policyowner to purchase additional insurance at specified times",
    options: ["only if they are still standard risk", "only if they pass a new medical exam", "without providing evidence of insurability", "at a lower premium than the original policy"],
    answer: 2,
    explanation: "GI riders protect against becoming uninsurable in the future."
  },
  {
    id: 47,
    lo: "7.4",
    question: "Accelerated death benefits (living benefits) allow the policyowner to receive a portion of the death benefit before the insured's death if the insured",
    options: ["loses their job", "needs money for retirement", "is age 65 or older", "is diagnosed with a terminal illness"],
    answer: 3,
    explanation: "Terminal or catastrophic illness triggers allow access to proceeds for end-of-life care."
  },
  {
    id: 48,
    lo: "7.5",
    question: "The payor benefit rider is most likely to be found in which type of insurance policy?",
    options: ["A policy insuring a retiree", "A policy insuring a child", "A policy insuring a CEO", "A policy insuring a spouse"],
    answer: 1,
    explanation: "Payor benefits waive the child's premiums if the parent (payor) dies or is disabled."
  },
  {
    id: 49,
    lo: "7.6",
    question: "A disability income benefit rider provides a monthly income to the policyowner if the insured becomes",
    options: ["partially disabled", "bankrupt", "recently unemployed", "totally disabled"],
    answer: 3,
    explanation: "These riders are mini-disability income policies attached to life insurance."
  },
  {
    id: 50,
    lo: "7.7",
    question: "An accidental death and dismemberment (AD&D) rider provides benefits for accidental death AND for",
    options: ["routine medical expenses", "critical illness diagnosis", "death by natural causes", "loss of limbs or sight"],
    answer: 3,
    explanation: "Dismemberment covers the loss of body parts or vital functions (like sight) due to an accident."
  },

  // Chapter 8: Common Policy Provisions (7 questions)
  {
    id: 51,
    lo: "8.1",
    question: "The entire contract provision generally states that the life insurance contract consists of the policy, any attached riders, and",
    options: ["a copy of the signed application", "the insurer's bylaws", "the medical examiner's full report", "oral statements made by the agent"],
    answer: 0,
    explanation: "Including the application in the 'entire contract' makes all application statements part of the binding agreement."
  },
  {
    id: 52,
    lo: "8.2",
    question: "The free-look provision gives the policyowner a specified period of time after the policy is delivered to examine the policy and",
    options: ["return it for a full refund of premiums", "borrow against the cash value", "increase the face amount without cost", "change the beneficiary once"],
    answer: 0,
    explanation: "Free-look is a 'customer satisfaction' window, usually 10-30 days."
  },
  {
    id: 53,
    lo: "8.3",
    question: "The grace period in a life insurance policy is the period of time after a premium due date during which the policy",
    options: ["owner must provide new health evidence", "remains in force even if the premium has not been paid", "is considered lapsed", "insurer can cancel for no reason"],
    answer: 1,
    explanation: "The grace period prevents immediate lapse when a payment is late."
  },
  {
    id: 54,
    lo: "8.4",
    question: "The incontestability provision specifies a time limit beyond which the insurer cannot use a material misrepresentation on the application to",
    options: ["rescind (avoid) the contract", "change the agent", "pay the death benefit", "increase the premium"],
    answer: 0,
    explanation: "After usually 2 years, the insurer is barred from using old honest mistakes to deny a claim."
  },
  {
    id: 55,
    lo: "8.5",
    question: "If an insurer discovers that an insured's age was misstated on the application, the insurer will typically",
    options: ["void the policy and refund all premiums", "sue the beneficiary", "ignore the error if the insured has died", "adjust the death benefit to what the premiums would have bought at the correct age"],
    answer: 3,
    explanation: "Benefit adjustment is the standard solution for age/sex misstatements."
  },
  {
    id: 56,
    lo: "8.6",
    question: "The suicide exclusion in a life insurance policy typically specifies that if the insured commits suicide during the first two years of the policy, the insurer will pay only",
    options: ["the full death benefit", "a return of the premiums paid", "the cash value only", "nothing at all"],
    answer: 1,
    explanation: "Returning premiums prevents people from buying insurance with the intent of committing suicide for the benefit."
  },
  {
    id: 57,
    lo: "8.7",
    question: "The reinstatement provision allows a policyowner to restore a lapsed policy to its original status, typically provided the owner",
    options: ["names a new beneficiary", "pays back premiums with interest and provides evidence of insurability", "applied for a new policy", "is under age 65"],
    answer: 1,
    explanation: "Reinstatement requires catching up on costs and proving you are still healthy enough for the same rates."
  },

  // Chapter 9: The Beneficiary and Settlement Options (7 questions)
  {
    id: 58,
    lo: "9.1",
    question: "The person or entity named in a life insurance policy to receive the policy proceeds upon the death of the insured is the",
    options: ["underwriter", "insured", "policyowner", "beneficiary"],
    answer: 3,
    explanation: "The beneficiary is the intended recipient of the death benefit."
  },
  {
    id: 59,
    lo: "9.2",
    question: "A beneficiary who is named to receive the proceeds only if the primary beneficiary is no longer alive is known as the",
    options: ["irrevocable beneficiary", "contingent beneficiary", "primary beneficiary", "revocable beneficiary"],
    answer: 1,
    explanation: "Contingent (or secondary) beneficiaries are back-ups."
  },
  {
    id: 60,
    lo: "9.3",
    question: "An irrevocable beneficiary designation differs from a revocable designation because, in an irrevocable designation, the policyowner",
    options: ["can change the beneficiary at any time", "cannot borrow against the policy", "needs the beneficiary's consent to change the designation", "is the beneficiary"],
    answer: 2,
    explanation: "Irrevocable beneficiaries have a vested interest that limits the owner's unilateral power."
  },
  {
    id: 61,
    lo: "9.4",
    question: "The fixed period settlement option specifies that the policy proceeds will be paid to the payee",
    options: ["in installments of a specified amount", "as long as the payee is alive", "in a single lump sum", "for a specified length of time"],
    answer: 3,
    explanation: "Fixed period focuses on 'how long' payments last; fixed amount focuses on 'how much' each check is."
  },
  {
    id: 62,
    lo: "9.5",
    question: "A policy dividend is a refund of a portion of the premium that resulted from favorable experience in a",
    options: ["fraternal benefit society", "stock insurance company", "mutual insurance company", "savings bank life insurance"],
    answer: 2,
    explanation: "Dividends in mutual companies are considered a partial return of the policyowner's premium."
  },
  {
    id: 63,
    lo: "9.6",
    question: "The collateral assignment of a life insurance policy is typically used to",
    options: ["permanently transfer all ownership rights", "secure a debt such as a bank loan", "avoid paying premiums", "change the beneficiary"],
    answer: 1,
    explanation: "Collateral assignments give the lender certain rights as security until the loan is repaid."
  },
  {
    id: 64,
    lo: "9.7",
    question: "The life income settlement option guarantees that the payee will receive payments",
    options: ["only if they are under age 65", "for exactly 10 years", "until they have received the full face amount", "for as long as they live"],
    answer: 3,
    explanation: "Life income (annuitization) provides a stream that cannot be outlived."
  },

  // Chapter 10: Annuities (7 questions)
  {
    id: 65,
    lo: "10.1",
    question: "By definition, an annuity is a financial product that provides for a series of",
    options: ["lump-sum payments", "variable death benefits", "stock market investments", "periodic income payments"],
    answer: 3,
    explanation: "Annuities are designed to distribute funds over time, often for retirement."
  },
  {
    id: 66,
    lo: "10.2",
    question: "The person whose lifetime determines the duration of the income payments in an annuity contract is the",
    options: ["contract owner", "annuitant", "beneficiary", "payee"],
    answer: 1,
    explanation: "The annuitant is the measuring life for the payout phase."
  },
  {
    id: 67,
    lo: "10.3",
    question: "An annuity in which the income payments are scheduled to begin more than one year after the contract is purchased is a",
    options: ["term annuity", "deferred annuity", "whole life annuity", "immediate annuity"],
    answer: 1,
    explanation: "Deferred annuities have an accumulation phase before the payout phase."
  },
  {
    id: 68,
    lo: "10.4",
    question: "In a fixed annuity, the interest rate that the insurer credits to the contract is guaranteed to be at least a minimum rate, but the insurer also credits a higher",
    options: ["surrender rate", "guaranteed rate", "current rate", "bonus rate"],
    answer: 2,
    explanation: "Fixed annuities credit a yearly 'current' rate that is usually higher than the contract's lifetime minimum."
  },
  {
    id: 69,
    lo: "10.5",
    question: "A variable annuity differs from a fixed annuity because, in a variable annuity, the investment risk is assumed by the",
    options: ["contract owner", "insurer", "beneficiary", "agent"],
    answer: 0,
    explanation: "Because variable account values fluctuate with the market, the owner carries the risk."
  },
  {
    id: 70,
    lo: "10.6",
    question: "Which type of annuity links the potential interest credited to the contract to the performance of a financial index like the S&P 500?",
    options: ["Variable annuity", "Immediate annuity", "Fixed deferred annuity", "Fixed indexed annuity"],
    answer: 3,
    explanation: "Equity indexed (or fixed indexed) annuities capture some market upside with downside protection."
  },
  {
    id: 71,
    lo: "10.7",
    question: "An annuity purchased outside of a regular employer-sponsored retirement plan is known as a",
    options: ["fixed benefit annuity", "group annuity", "qualified annuity", "nonqualified annuity"],
    answer: 3,
    explanation: "Nonqualified annuities are funded with after-tax dollars and aren't part of a special IRS tax-deferred plan."
  },

  // Chapter 11: Annuity Provisions and Retirement (7 questions)
  {
    id: 72,
    lo: "11.1",
    question: "The payout period of an annuity contract is the time during which the insurer",
    options: ["calculates the mortality rate", "accumulates interest", "provides periodic income payments to the payee", "collects premiums"],
    answer: 2,
    explanation: "The payout (or liquidation) period is when the 'mailbox checks' start."
  },
  {
    id: 73,
    lo: "11.2",
    question: "A जीवन income with refund annuity option specifies that if the annuitant dies before the total of payments equals the purchase price, the insurer will",
    options: ["pay double the amount to the beneficiary", "refund the balance to the beneficiary", "pay nothing more", "refund the premiums to the annuitant's estate"],
    answer: 1,
    explanation: "Refund features ensure that the owner's family gets at least the principal back."
  },
  {
    id: 74,
    lo: "11.3",
    question: "Which retirement plan feature allows employees to transition their retirement savings from one employer's plan to another?",
    options: ["eligibility", "portability", "vesting", "conversion"],
    answer: 1,
    explanation: "Portability is the ability to move retirement assets between plans when changing jobs."
  },
  {
    id: 75,
    lo: "11.4",
    question: "In a defined benefit (DB) retirement plan, the amount of the future retirement benefit is usually",
    options: ["specified by a formula", "half of the employee's last paycheck", "limited by the stock market", "uncertain"],
    answer: 0,
    explanation: "DB plans guarantee a specific outcome; the employer carries the funding risk."
  },
  {
    id: 76,
    lo: "11.5",
    question: "A traditional IRA in the United States typically allows a person to contribute a limited amount each year and then",
    options: ["pay no taxes ever", "withdraw at age 40 without penalty", "withdraw all funds tax-free", "defer taxes on the investment earnings until withdrawal"],
    answer: 3,
    explanation: "Tax-deferred growth is the key tax advantage of traditional IRAs."
  },
  {
    id: 77,
    lo: "11.6",
    question: "A retirement plan in which the employer's contribution to the plan is known but the future benefit is uncertain is a",
    options: ["defined contribution plan", "defined benefit plan", "social security plan", "fixed income plan"],
    answer: 0,
    explanation: "DC plans (like 401ks) focus on inputs; the output depends on investment results."
  },
  {
    id: 78,
    lo: "11.7",
    question: "Which US retirement plan allows for salary reduction contributions by employees, which are often matched by the employer?",
    options: ["Profit sharing plan", "401(k) plan", "403(b) plan", "Defined benefit plan"],
    answer: 1,
    explanation: "401(k) plans are the standard vehicle for employee salary deferrals."
  },

  // Chapter 12: Medical Expense and Disability (8 questions)
  {
    id: 79,
    lo: "12.1",
    question: "Medical expense insurance is typically an indemnity contract, which means that the insurer reimburses the insured for",
    options: ["the insured's total income", "the estimated future costs", "the actual financial loss incurred", "a fixed amount regardless of costs"],
    answer: 2,
    explanation: "Indemnity restores the insured to their pre-loss financial position by paying for real costs."
  },
  {
    id: 80,
    lo: "12.2",
    question: "The deductible in a major medical policy is the amount of eligible medical expenses that",
    options: ["is waived for preferred risks", "the insurer pays first", "the insured must pay before the insurer begins to pay", "is paid by the government"],
    answer: 2,
    explanation: "Deductibles are the initial out-of-pocket costs borne by the insured."
  },
  {
    id: 81,
    lo: "12.3",
    question: "As a cost-sharing feature, coinsurance requires the insured and the insurer to",
    options: ["pay the same premium", "wait for a year before coverage starts", "jointly buy the policy", "share the eligible expenses in a specified ratio"],
    answer: 3,
    explanation: "Coinsurance (e.g., 80/20) shares the burden of the bill between both parties."
  },
  {
    id: 82,
    lo: "12.4",
    question: "Disability income insurance provides a monthly income if an insured becomes disabled. A typical requirement for receiving benefits is that the insured must be",
    options: ["totally disabled", "age 65 or older", "partially disabled", "unemployed"],
    answer: 0,
    explanation: "Total disability is the standard trigger for income protection payments."
  },
  {
    id: 83,
    lo: "12.5",
    question: "The waiting period in a disability income policy is the length of time after the disability begins during which",
    options: ["the premiums are waived", "no benefits are payable", "the insurer pays double", "the insured can return to work"],
    answer: 1,
    explanation: "The waiting (elimination) period acts as a temporal deductible."
  },
  {
    id: 84,
    lo: "12.6",
    question: "Managed care plans typically use a network of providers. A plan that generally restricts coverage to providers within the network is a",
    options: ["POS", "HMO", "PPO", "Traditional indemnity plan"],
    answer: 1,
    explanation: "Health Maintenance Organizations (HMOs) prioritize network-only care for maximum cost control."
  },
  {
    id: 85,
    lo: "12.7",
    question: "Long-term care insurance (LTCI) provides benefits for medical and social services when a person has difficulty performing",
    options: ["activities of daily living (ADLs)", "hazardous hobbies", "legal tasks", "work-related duties"],
    answer: 0,
    explanation: "ADLs (like bathing/eating) are the common triggers for LTCI benefits."
  },
  {
    id: 86,
    lo: "12.8",
    question: "Under the Affordable Care Act (ACA) in the US, individual and small-group health plans must provide a set of",
    options: ["guaranteed investment returns", "essential health benefits", "tax-free premiums", "unlimited benefits"],
    answer: 1,
    explanation: "EHB mandates that these plans cover 10 specific categories of care."
  },

  // Chapter 13: Group Insurance (7 questions)
  {
    id: 87,
    lo: "13.1",
    question: "In a group insurance contract, the legal document that contains all the provisions of the agreement is the",
    options: ["member certificate", "master group insurance contract", "summary plan description", "individual application"],
    answer: 1,
    explanation: "The master contract is the binding agreement between the insurer and the group policyholder."
  },
  {
    id: 88,
    lo: "13.2",
    question: "Because group insurance is issued to many people under one contract, the insurer realizes administrative savings. To reflect this, group premiums are typically __________ than premiums for individual insurance.",
    options: ["the same", "higher", "lower", "more volatile"],
    answer: 2,
    explanation: "Scalability and lack of individual evidence collections lower the cost per person."
  },
  {
    id: 89,
    lo: "13.3",
    question: "A group insurance plan in which the employer pays the entire premium is known as a",
    options: ["voluntary plan", "noncontributory plan", "universal plan", "contributory plan"],
    answer: 1,
    explanation: "Noncontributory means members do not contribute to the premium cost."
  },
  {
    id: 90,
    lo: "13.4",
    question: "A group of employees must usually wait for a stated period of time after being hired before they are eligible for insurance. This wait time is the",
    options: ["open enrollment period", "elimination period", "probationary period", "eligibility period"],
    answer: 2,
    explanation: "The probationary period ensures the employee is a stable, permanent hire before adding them to benefits."
  },
  {
    id: 91,
    lo: "13.5",
    question: "Manual rating for group insurance means the insurer bases the premium rate on",
    options: ["a standard table for that type of group", "the group's own past claim history", "the individual health of every member", "the underwriter's intuition"],
    answer: 0,
    explanation: "Manual rates are based on the insurer's general experience for similar groups."
  },
  {
    id: 92,
    lo: "13.6",
    question: "Self-administered group plans are plans in which the group policyholder, rather than the insurer, performs functions like",
    options: ["recordkeeping and certificate issuance", "hiring the insurance agents", "setting the premium rate", "investing the insurer's assets"],
    answer: 0,
    explanation: "Self-administration shifts administrative tasks from the insurer to the employer."
  },
  {
    id: 93,
    lo: "13.7",
    question: "In a contributory group plan, many organizations require that at least 75% of eligible members participate to",
    options: ["reduce the cost for the insurer", "maximize the agent's commission", "avoid federal taxes", "limit antiselection"],
    answer: 3,
    explanation: "High participation ensures a mix of healthy and unhealthy risks, preventing the 'sick only' pool."
  },

  // Chapter 14: Group Life and Retirement (7 questions)
  {
    id: 94,
    lo: "14.1",
    question: "Most group life insurance plans are based on which type of insurance coverage?",
    options: ["Single-premium annuity", "Yearly renewable term (YRT)", "Variable universal life", "Whole life"],
    answer: 1,
    explanation: "YRT is the most common and cost-effective form of group life coverage."
  },
  {
    id: 95,
    lo: "14.2",
    question: "Under the conversion provision of a group life policy, a member who leaves the group generally has the right to",
    options: ["receive a refund of all premiums", "keep their group rate for 10 more years", "avoid taxes on the benefit", "convert their group coverage to an individual permanent policy without health evidence"],
    answer: 3,
    explanation: "Group conversion is a critical protection for people leaving their jobs."
  },
  {
    id: 96,
    lo: "14.3",
    question: "Group accidental death and dismemberment (AD&D) coverage typically pays the full principal sum if the member suffers",
    options: ["loss of one limb", "accidental death", "temporary disability", "death by natural causes"],
    answer: 1,
    explanation: "The principal sum is the maximum benefit for death; dismemberment usually pays a smaller percentage."
  },
  {
    id: 97,
    lo: "14.4",
    question: "A group retirement plan funding vehicle that consists of all the plan assets pooled into a single investment fund is a",
    options: ["trust", "general account", "separate account", "maintenance fee"],
    answer: 0,
    explanation: "Trusts are the standard legal entities used to hold retirement plan assets for the benefit of members."
  },
  {
    id: 98,
    lo: "14.5",
    question: "In a retirement plan, 'vesting' refers to the employee's right to",
    options: ["change their subaccount allocations", "name their own beneficiary", "keep the employer's contributions if the employee leaves the company", "withdraw money before age 59.5"],
    answer: 2,
    explanation: "Vesting is becoming the owner of the employer-matching funds over time."
  },
  {
    id: 99,
    lo: "14.6",
    question: "The detailed legal agreement that establishes a retirement plan and specifies the obligations of the sponsor and participants is the",
    options: ["underwriting manual", "policy rider", "master certificate", "plan document"],
    answer: 3,
    explanation: "The plan document is the governing constitution of the retirement plan."
  },
  {
    id: 100,
    lo: "14.7",
    question: "Standard US Social Security benefits are funded by mandatory contributions from",
    options: ["both workers and employers", "workers only", "employers only", "the federal general fund only"],
    answer: 0,
    explanation: "FICA taxes are split between employee and employer to fund retirement and disability benefits."
  }
];
