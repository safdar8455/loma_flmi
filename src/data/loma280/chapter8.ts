import { Question } from '../../types';

export const chapter8Questions: Question[] = [
  {
    id: 1,
    lo: "8A",
    question: "Claude Juneau received his new life insurance policy on October 1. On October 5, he decided he didn't want the policy and mailed it back to the insurer for a full refund. Which policy provision allowed him to do this?",
    options: ["Entire contract provision", "Incontestability provision", "Free-look provision", "Grace period provision"],
    answer: 2,
    explanation: "The free-look provision (or free-examination provision) gives the policyowner a stated period (usually 10-30 days) after delivery to cancel the policy and receive a full refund of premiums paid."
  },
  {
    id: 2,
    lo: "8A",
    question: "Claude received his policy on October 6. It contained a 10-day free-look period. On October 8, Claude died in an accident before he could contact the insurer to cancel. What is the insurer's obligation?",
    options: ["The insurer pays half the death benefit", "The insurer must only refund the premiums paid", "The insurer is obligated to pay the death benefit to the beneficiary", "The policy is void because Claude intended to cancel it"],
    answer: 2,
    explanation: "Insurance coverage is in effect throughout the free-look period. Since Claude had not yet rejected the policy at the time of his death, the policy was in force."
  },
  {
    id: 3,
    lo: "8B",
    question: "The Zenith Life Insurance Company issues a policy that specifically states that only the terms printed in or attached to the policy document are part of the agreement. This is known as a(n):",
    options: ["Conditional contract", "Aleatory contract", "Open contract", "Closed contract"],
    answer: 3,
    explanation: "A closed contract is one where only those terms and conditions printed in or attached to the contract are considered part of the contract."
  },
  {
    id: 4,
    lo: "8B",
    question: "Typically, the 'Entire Contract' in a closed contract life insurance policy consists of the policy, any attached riders, and the:",
    options: ["Agent's sales proposal", "Insurer's internal underwriting manual", "Attached copy of the application", "Fraternal society's bylaws"],
    answer: 2,
    explanation: "Standard 'Entire Contract' provisions specify these three components: the policy, riders, and the application."
  },
  {
    id: 5,
    lo: "8B",
    question: "Fraternal benefit societies often issue policies where the society's charter and bylaws are part of the contract but are not physically attached. This is characteristic of a(n):",
    options: ["Unilateral contract", "Closed contract", "Bargaining contract", "Open contract"],
    answer: 3,
    explanation: "An open contract identifies documents that constitute the contract even if they are not all physically attached."
  },
  {
    id: 6,
    lo: "8C",
    question: "Ivana stated on her application that she saw a doctor for a fractured wrist, when it was actually just a sprained wrist. The insurer would have issued the policy on the same terms regardless. This misstatement is:",
    options: ["Not a material misrepresentation", "A fraudulent misrepresentation", "A breach of capacity", "A material misrepresentation"],
    answer: 0,
    explanation: "A misstatement is material ONLY if the insurer would have acted differently (e.g., higher premium or lower face amount) if it had known the truth."
  },
  {
    id: 7,
    lo: "8C",
    question: "Edward Honda hid the fact that he was being treated for kidney disease on his application. The insurer discovered this six months after the policy was issued. Under the incontestability provision, the insurer:",
    options: ["Must wait two years to cancel", "Can only increase the premium", "Cannot do anything because the policy was issued", "Can rescind (cancel) the contract"],
    answer: 3,
    explanation: "A material misrepresentation discovered during the contestable period (usually the first two years) gives the insurer the right to rescind the contract."
  },
  {
    id: 8,
    lo: "8C",
    question: "Edward Honda hid his kidney disease on his application. He died four years after the policy was issued. The insurer then discovered the lie. In this situation, the insurer:",
    options: ["Can still rescind the contract", "Can sue the estate for fraud", "Must refund only the premiums", "Must pay the death benefit to the beneficiary"],
    answer: 3,
    explanation: "Because the two-year contestable period had expired by the time of death, the insurer can no longer contest the validity of the contract on the grounds of material misrepresentation."
  },
  {
    id: 9,
    lo: "8C",
    question: "In most US states, the maximum duration for a contestable period permitted by law is:",
    options: ["Two years", "Five years", "One year", "The lifetime of the policy"],
    answer: 0,
    explanation: "Standard law in most states limits the period to two years from the date of issue."
  },
  {
    id: 10,
    lo: "8D",
    question: "Joanna Hark's $150,000 policy has a premium due on July 6. She has a 31-day grace period. If she dies on August 3 without having paid the premium, the insurer will:",
    options: ["Deny the claim", "Refund the premiums paid only", "Pay $149,400 (Face amount minus the $600 premium)", "Pay $150,000"],
    answer: 2,
    explanation: "If the insured dies during the grace period, the insurer pays the death benefit but deducts the overdue premium."
  },
  {
    id: 11,
    lo: "8D",
    question: "What happens to a life insurance policy if the required renewal premium is not paid by the time the grace period expires?",
    options: ["The policy usually lapses", "The insurer must wait another 90 days before acting", "The policy is automatically reinstated", "The face amount is doubled"],
    answer: 0,
    explanation: "Failure to pay by the end of the grace period typically results in the termination of coverage (lapse)."
  },
  {
    id: 12,
    lo: "8D",
    question: "Hideo Tanaka's universal life policy cash value has just become insufficient to cover monthly mortality and expense charges. His policy provides a 61-day grace period. This period begins on:",
    options: ["The date the cash value became insufficient", "His next birthday", "The date the policy was issued", "The date he last paid a premium"],
    answer: 0,
    explanation: "For UL policies, the grace period start date often depends on when the cash value is no longer large enough to cover monthly deductions."
  },
  {
    id: 13,
    lo: "8E",
    question: "Reinstatement is the process of putting back into force a policy that terminated for nonpayment of premium. Reinstatement is generally NOT allowed if:",
    options: ["The insured is over 40", "The policyowner has surrendered the policy for its cash value", "The policy was only a term policy", "The premiums were paid by a loan"],
    answer: 1,
    explanation: "Once a policy is surrendered for cash, it is dead; reinstatement is for policies that lapsed without being surrendered."
  },
  {
    id: 14,
    lo: "8E",
    question: "To reinstate a fixed-premium whole life policy, the policyowner typically must pay:",
    options: ["Just the next premium due", "All back premiums plus interest", "A reinstatement fee of $500", "One year's worth of premiums regardless of length of lapse"],
    answer: 1,
    explanation: "Wait-back premiums and interest are required to restore the policy's reserve to its proper level."
  },
  {
    id: 15,
    lo: "8E",
    question: "When a policy is reinstated, a 'new contestable period' generally begins. This allows the insurer to contest the policy based on:",
    options: ["Any health changes that happened AFTER the reinstatement", "The original application only", "Nothing; the old period continues", "Misrepresentations made in the reinstatement application"],
    answer: 3,
    explanation: "The insurer receives a new two-year window to verify the accuracy of the information provided in the reinstatement application."
  },
  {
    id: 16,
    lo: "8F",
    question: "Michael incorrectly stated that his sister Inga was 33 instead of 35 on her insurance application. If Inga dies, and the insurer discovers the error, what action will they take?",
    options: ["They will deny the claim for fraud", "They will adjust the death benefit to what the premiums paid would have purchased at the correct age", "They will pay the full face amount anyway", "They will refund the premiums only"],
    answer: 1,
    explanation: "Incorrect age/sex statements are not treated as material misrepresentations; instead, the insurer adjusts the benefit amount."
  },
  {
    id: 17,
    lo: "8F",
    question: "If an insurer discovers a misstatement of age BEFORE the insured dies, they may give the owner the option to:",
    options: ["There are no options; it is void", "Cancel the policy immediately", "Change the beneficiary", "Pay or receive a refund for the premium difference"],
    answer: 3,
    explanation: "The insurer can correct the error during the insured's lifetime by adjusting premiums instead of the face amount."
  },
  {
    id: 18,
    lo: "8G",
    question: "Marco Grimaldi has a $350,000 policy with a $15,000 unpaid policy loan. When he dies, how much does the beneficiary receive?",
    options: ["$365,000", "$350,000", "$335,000", "$15,000"],
    answer: 2,
    explanation: "Unpaid loans plus interest are subtracted from the death benefit payout."
  },
  {
    id: 19,
    lo: "8G",
    question: "Unlike a commercial bank loan, a policyowner is __________ to repay a policy loan.",
    options: ["Required to pay within 30 days", "Not legally obligated", "Legally obligated", "Forced by the government"],
    answer: 1,
    explanation: "Technically, the owner is borrowing from their own funds/future benefit, so there is no personal legal liability to repay."
  },
  {
    id: 20,
    lo: "8G",
    question: "What happens if the total indebtedness (loan + interest) on a policy exceeds the policy's cash value?",
    options: ["The insurer sends a bill for the difference", "The death benefit doubles", "The policy terminates without further value", "Nothing, until the insured dies"],
    answer: 2,
    explanation: "The loan must be backed by the cash value. If the debt eats up all the value, the policy is gone."
  },
  {
    id: 21,
    lo: "8G",
    question: "A 'policy withdrawal' provision, common in universal life insurance, is also known as a:",
    options: ["Full surrender", "APL option", "Reinstatement", "Partial surrender"],
    answer: 3,
    explanation: "A withdrawal allows the owner to take out some of the cash value without it being a loan."
  },
  {
    id: 22,
    lo: "8H",
    question: "The options available to a cash value policyowner if the policy lapses or they decide to stop paying premiums are collectively called:",
    options: ["Dividend options", "Nonforfeiture options", "Assignment options", "Settlement options"],
    answer: 1,
    explanation: "Nonforfeiture refers to the fact that the owner does not forfeit (lose) the value they've built up."
  },
  {
    id: 23,
    lo: "8H",
    question: "If a policyowner stops paying premiums and chooses to use the net cash surrender value as a single premium to buy a policy of the SAME plan but with a LOWER face amount, they have chosen:",
    options: ["The cash payment option", "Extended term insurance", "Reduced paid-up insurance", "Automatic premium loan"],
    answer: 2,
    explanation: "Reduced paid-up keeps the same type of policy (usually whole life) but for a smaller amount that is fully paid for life."
  },
  {
    id: 24,
    lo: "8H",
    question: "Under the 'Extended Term Insurance' nonforfeiture option, the policy's net cash surrender value is used to purchase:",
    options: ["Whole life insurance with a lower face amount", "Term insurance for the same face amount as the original policy", "Term insurance with a higher face amount", "A variable annuity"],
    answer: 1,
    explanation: "Extended term provides the full original coverage amount but only for as long as the cash value can buy it."
  },
  {
    id: 25,
    lo: "8H",
    question: "Most policies designate which nonforfeiture benefit as the 'automatic' choice if the owner makes no selection?",
    options: ["Extended term insurance", "APL", "Cash payment", "Reduced paid-up"],
    answer: 0,
    explanation: "Extended term is the most common automatic default."
  },
  {
    id: 26,
    lo: "8H",
    question: "Universal life policies usually do NOT include an extended term option because:",
    options: ["The law prohibits it", "The face amount cannot be fixed", "The mortality charges are automatically deducted from the cash value bucket until it's empty", "There is no cash value in UL"],
    answer: 2,
    explanation: "UL's inherent design (monthly deductions) serves the same purpose as an automatic nonforfeiture feature."
  },
  {
    id: 27,
    lo: "8H",
    question: "The Automatic Premium Loan (APL) option keeps the original policy in force for the full amount by:",
    options: ["Asking the beneficiary to pay", "Borrowing the premium amount against the policy's cash value", "Paying premiums from a separate bank account", "Converting it to term insurance"],
    answer: 1,
    explanation: "APL creates a policy loan to pay for overdue premiums automatically."
  },
  {
    id: 28,
    lo: "8I",
    question: "Most life insurance policies state that the insurer will not pay the death benefit if the insured commits suicide within __________ of the policy date.",
    options: ["Five years", "Two years", "90 days", "30 days"],
    answer: 1,
    explanation: "Two years is the standard suicide exclusion period to protect against antiselection."
  },
  {
    id: 29,
    lo: "8I",
    question: "If an insured commits suicide during the first year of a policy with a standard 2-year suicide exclusion, the insurer will typically:",
    options: ["Refund the premiums paid (minus any loans)", "Pay the full death benefit", "Pay nothing at all", "Pay 50% of the benefit"],
    answer: 0,
    explanation: "The insurer's limitation is to refund premiums if the death falls within the exclusion window."
  },
  {
    id: 30,
    lo: "8I",
    question: "Which of the following exclusions is most likely to be included in a policy only during a time of international conflict?",
    options: ["War exclusion clause", "Hazardous activities exclusion", "Aviation exclusion", "Suicide exclusion"],
    answer: 0,
    explanation: "War exclusion clauses are typically used when there is a significant threat of war or an ongoing one."
  },
  {
    id: 31,
    lo: "8A",
    question: "The free-look period for a newly issued life insurance policy typically begins on:",
    options: ["The date the application was signed", "The date the first premium is received", "The date the policy was issued by the home office", "The date the policy is delivered to the policyowner"],
    answer: 3,
    explanation: "Timing starts when the owner actually gets the policy in their hands (delivery)."
  },
  {
    id: 32,
    lo: "8B",
    question: "Under the Entire Contract Provision, any changes to the contract MUST be:",
    options: ["Signed by the beneficiary", "Requested by the agent", "Made in writing and agreed to by both parties", "Approved by the state board of health"],
    answer: 2,
    explanation: "Oral changes are invalid; only written amendments (riders) signed by proper officers and the owner count."
  },
  {
    id: 33,
    lo: "8C",
    question: "The central purpose of the incontestability provision is to protect the __________.",
    options: ["Insurance company", "Underwriting department", "State insurance commissioner", "Policyowner and beneficiary"],
    answer: 3,
    explanation: "It ensures that families can rely on the benefit after a reasonable time (2 years) without fear of the insurer digging up old application errors."
  },
  {
    id: 34,
    lo: "8C",
    question: "In the context of life insurance, a misrepresentation is considered 'material' ONLY if:",
    options: ["It is a lie about a person's middle name", "It is about a minor injury like a scraped knee", "It involves a fact that would have changed the insurer's decision to issue the policy", "The applicant didn't realize it was false"],
    answer: 2,
    explanation: "Materiality is defined by whether the truth would have changed the underwriting outcome."
  },
  {
    id: 35,
    lo: "8C",
    question: "If an insurance application contains a 'fraudulent misrepresentation' (one made with intent to deceive), some jurisdictions allow the insurer to contest the policy:",
    options: ["Never", "Only for 2 years", "Only if the insured lives", "At any time"],
    answer: 3,
    explanation: "Fraud is an exception to the incontestability rule in many areas because fraud voids a contract of its lawful purpose."
  },
  {
    id: 36,
    lo: "8D",
    question: "A grace period is designed to protect the policyowner against __________.",
    options: ["Unintentional lapse of the policy", "Taxes on the death benefit", "Insolvency of the insurer", "Lawsuits from creditors"],
    answer: 0,
    explanation: "It provides a safety window if they forget to pay on the exact due date."
  },
  {
    id: 37,
    lo: "8E",
    question: "To help prevent 'antiselection,' what does a reinstatement provision require the policyowner to provide?",
    options: ["A letter of recommendation from the agent", "Satisfactory evidence of the insured's continued insurability", "Copy of their tax return", "Proof of income"],
    answer: 1,
    explanation: "This prevents people from only reinstating policies when they discover they have a terminally ill condition."
  },
  {
    id: 38,
    lo: "8F",
    question: "When an insurer adjusts a benefit because of a misstatement of age, are they 'contesting' the validity of the contract?",
    options: ["Only if the beneficiary disagrees", "Yes, this voids the deal", "No, they are simply enforcing a specific policy provision", "Only if it is within the first 2 years"],
    answer: 2,
    explanation: "Enforcing the terms (the adjustment) is not the same as rescinding the whole agreement."
  },
  {
    id: 39,
    lo: "8G",
    question: "In a policy loan, the insurer usually requires the owner to have a:",
    options: ["Net cash value available", "Full-time job", "Medical exam", "High credit score"],
    answer: 0,
    explanation: "Loans are purely against the available cash in the policy value."
  },
  {
    id: 40,
    lo: "8H",
    question: "Which nonforfeiture option is actually a 'termination' of all coverage in exchange for cash?",
    options: ["Reduced paid-up", "Extended term", "APL", "Cash payment"],
    answer: 3,
    explanation: "The cash payment option ends the relationship and provides the net cash value to the owner."
  },
  {
    id: 41,
    lo: "8B",
    question: "Fraternal benefit societies don't attach their bylaws to the policy because:",
    options: ["They are secret", "The applicant receives them upon becoming a member of the society", "They are too long to print", "They change every week"],
    answer: 1,
    explanation: "Membership is a prereq, so members are expected to already have access to the rules."
  },
  {
    id: 42,
    lo: "8C",
    question: "The phrase 'during the lifetime of the insured' in an incontestability clause means that if the insured dies in month 23 (before 2 years are up):",
    options: ["The policy remains contestable forever", "The policy is automatically void", "The policy is incontestable immediately", "The insurer has only one month to investigate"],
    answer: 0,
    explanation: "Since they didn't survive the full 2-year 'test' period, the insurer can investigate that claim whenever it is filed."
  },
  {
    id: 43,
    lo: "8E",
    question: "Reinstating an old whole life policy is often better than buying a new one because the premium for the old one is based on the:",
    options: ["Average age", "Society age", "Issue age", "Attained age"],
    answer: 2,
    explanation: "The original policy uses the age at original purchase, which will be much younger than the current age."
  },
  {
    id: 44,
    lo: "8F",
    question: "Presidency Life discovers Michael misstated Inga's sex as male when she is female. How will the death benefit be adjusted?",
    options: ["Voided", "Increased", "Decreased", "Remaining the same"],
    answer: 1,
    explanation: "Since females generally have lower mortality rates, the premium Michael paid was enough to buy MORE coverage if Inga were correctly listed as female."
  },
  {
    id: 45,
    lo: "8G",
    question: "A partial surrender (withdrawal) in UL reduces the cash value and typically:",
    options: ["Increases the face amount", "Lowers the agent's commission", "Requires a medical exam", "Reduces the death benefit"],
    answer: 3,
    explanation: "Taking out a piece of the policy's engine reduces the final payout."
  },
  {
    id: 46,
    lo: "8H",
    question: "How long is a policyowner typically given to select a nonforfeiture option after a premium is due?",
    options: ["60 days", "One year", "30 days", "Until the end of the grace period"],
    answer: 3,
    explanation: "The selection should ideally happen by the end of the grace period before the automatic default kicks in."
  },
  {
    id: 47,
    lo: "8I",
    question: "A hazardous activities exclusion might apply to an insured who enjoys:",
    options: ["Driving a standard sedan", "Going to the movies", "Sky diving", "Reading"],
    answer: 2,
    explanation: "High-risk hobbies are often excluded to keep the basic premium rate fair for average risk people."
  },
  {
    id: 48,
    lo: "8I",
    question: "An aviation exclusion usually does NOT apply if the insured is:",
    options: ["A crew member of a military jet", "Practicing for a race", "The pilot of a private plane", "A passenger on a regularly scheduled commercial flight"],
    answer: 3,
    explanation: "Commercial air travel is statistically very safe and usually covered as standard."
  },
  {
    id: 49,
    lo: "8A",
    question: "In the Claude Juneau example, how much was the insurer's refund to Claude's family?",
    options: ["Zero, they had to pay the death benefit", "The cash value only", "Whatever the agent decided", "The full premium only"],
    answer: 0,
    explanation: "Since Claude hadn't cancelled yet, the payout was the full death benefit promised."
  },
  {
    id: 50,
    lo: "8H",
    question: "Single-premium paid-up additions purchased with cash values also have their own:",
    options: ["Renewal premiums", "Free-look periods", "Cash values", "Dividends"],
    answer: 2,
    explanation: "They are mini-whole life policies, so they build their own cash values."
  },
  {
    id: 51,
    lo: "8E",
    question: "If Marisol reinstates Jorge's 2012 policy in 2014, and the insurer discovers a lie in the 2014 application in 2015, can they rescind?",
    options: ["Yes, based on the new contestable period starting in 2014", "Only if Jorge dies in 2015", "No, only for 2012 lies", "Only if the lie was about his income"],
    answer: 0,
    explanation: "The reinstatement triggers a fresh window for the information provided ONLY in that new submission."
  },
  {
    id: 52,
    lo: "8H",
    question: "The 'Cash Value' of a policy is a source for which of the following nonforfeiture options?",
    options: ["Only the cash payment", "Only APL", "All of them (as they are funded by the cash value)", "None of them"],
    answer: 2,
    explanation: "The cash value is the 'fuel' for all nonforfeiture alternatives."
  },
  {
    id: 53,
    lo: "8I",
    question: "Insurer suicide exclusion exists to protect against 'antiselection', which means:",
    options: ["Preventing people from buying insurance WITH the intent to commit suicide for the benefit", "Allowing എല്ലാവരും buy insurance", "Encouraging suicide", "Lowering tax liability"],
    answer: 0,
    explanation: "It stops people from 'gaming' the death benefit."
  },
  {
    id: 54,
    lo: "8G",
    question: "A lending institution loan usually requires which of the following that a policy loan does not?",
    options: ["Interest", "A credit check", "A signature", "A specific date"],
    answer: 1,
    explanation: "Banks check your history; insurers just check your policy value."
  },
  {
    id: 55,
    lo: "8C",
    question: "Does an insurer typically exercise their right to contest a policy for fraud even if the contestable period has expired?",
    options: ["Only in the US", "Only for deaths under age 50", "Yes, always", "Seldom, because proving 'intent to deceive' (fraud) is very difficult in court"],
    answer: 3,
    explanation: "Proving subjective intent is a high legal bar."
  },
  {
    id: 56,
    lo: "8B",
    question: "A separate form where a proposed insured answers health questions is called a:",
    options: ["Free-look", "Bylaw", "Rider", "Declaration of insurability"],
    answer: 3,
    explanation: "This is a key document particularly in open contracts."
  },
  {
    id: 57,
    lo: "8D",
    question: "The notice given by a UL insurer to a policyowner before coverage terminates for lack of funds must be issued at least __________ days in advance.",
    options: ["60", "30", "90", "10"],
    answer: 1,
    explanation: "A 30-day (or 31) notice is a standard legal protection for the customer."
  },
  {
    id: 58,
    lo: "8E",
    question: "A policy that is 'back in force' after a lapse is said to be:",
    options: ["Applied", "Surrendered", "Dividended", "Reinstated"],
    answer: 3,
    explanation: "Reinstatement restores the original contract."
  },
  {
    id: 59,
    lo: "8G",
    question: "Insurers notify owners at least 30 days before terminating a policy because of loan __________.",
    options: ["High interest rates", "Beneficiary changes", "Non-payment of principal", "Indebtedness exceeding cash value"],
    answer: 3,
    explanation: "They give warning so the owner can add funds to prevent the crash."
  },
  {
    id: 60,
    lo: "8I",
    question: "Standard exclusions are intended to protect the company's __________.",
    options: ["Marketing plans", "Taxes", "Assets and Solvency", "Agents"],
    answer: 2,
    explanation: "Exclusions limit exposure to extraordinary risks that would drain the company (like war)."
  },
  {
    id: 61,
    lo: "8A",
    question: "What is another name for the Free-look provision?",
    options: ["Cooling-off provision", "Grace examination", "Lapse period", "Reinstatement window"],
    answer: 0,
    explanation: "Cooling-off is a common synonym emphasizing the chance to rethink the deal."
  },
  {
    id: 62,
    lo: "8C",
    question: "If a misrepresentation is 'Innocent' (not intended to deceive) but still 'Material', can the insurer rescind if within 2 years?",
    options: ["Only after death", "Yes", "Only for whole life", "No"],
    answer: 1,
    explanation: "Materiality is the key; intent doesn't matter during the contestable period for rescission."
  },
  {
    id: 63,
    lo: "8H",
    question: "Net cash surrender value = Cash Value minus __________.",
    options: ["Application fees", "Premiums", "Unpaid loans and interest", "State taxes"],
    answer: 2,
    explanation: "It's the amount you actually walk away with."
  },
  {
    id: 64,
    lo: "8F",
    question: "In the Inga Henriksson case, she was misstated as 33 (younger) but was actually 35 (older). How does her death benefit change for this specific age error?",
    options: ["Voided", "Increased", "Decreased", "Stay the same"],
    answer: 2,
    explanation: "The premium for a 33 year old is lower; since she was actually 35, the money paid only buys a SMALLER amount of coverage."
  },
  {
    id: 65,
    lo: "8D",
    question: "Can an insurer deduct overdue premiums from a death benefit during the grace period?",
    options: ["Yes, they usually do so", "Only for children", "No, it's illegal", "Only if the owner says so"],
    answer: 0,
    explanation: "The insurer pays the net benefit (Face amount - Owed premiums)."
  },
  {
    id: 66,
    lo: "8E",
    question: "Common time frames for reinstatement windows are __________ years.",
    options: ["2 to 5", "10 to 20", "Life of the policy", "1 to 2"],
    answer: 0,
    explanation: "Most policies allow 2 to 5 years from the date of lapse."
  },
  {
    id: 67,
    lo: "8G",
    question: "Universal Life withdrawals (Partial surrenders) are and don't charge interest because:",
    options: ["The government forbids it", "They are illegal to charge", "The agent pays it", "You are taking out your OWN money permanently"],
    answer: 3,
    explanation: "Withdrawals aren't loans; they are reductions in equity."
  },
  {
    id: 68,
    lo: "8H",
    question: "Which option provides the longest cover duration usually?",
    options: ["Extended term", "Reduced paid-up (lasts for life)", "APL", "Cash payment"],
    answer: 1,
    explanation: "Reduced paid-up is for life; extended term eventually expires."
  },
  {
    id: 69,
    lo: "8I",
    question: "A new suicide exclusion period generally begins on which date?",
    options: ["Only the original issue date", "The date the beneficiary changes", "The date of reinstatement", "Every policy anniversary"],
    answer: 2,
    explanation: "Companies reset the clock upon reinstatement to prevent people from trying to bypass it."
  },
  {
    id: 70,
    lo: "8B",
    question: "Only _________ of the insurer can usually change the insurance contract.",
    options: ["Specified officers", "Agents", "Actuaries", "Policyowners"],
    answer: 0,
    explanation: "Limits authority to prevent rogue agent changes."
  },
  {
    id: 71,
    lo: "8C",
    question: "Is contestable period FAVORABLE or UNFAVORABLE to the policyowner?",
    options: ["Unfavorable", "Favorable (it limits the insurer)", "Neutral", "Only favorable to agents"],
    answer: 1,
    explanation: "It restricts the insurance company's power to deny claims."
  },
  {
    id: 72,
    lo: "8D",
    question: "31 days of grace is often used for __________ premium payments.",
    options: ["Weekly", "Monthly/Annual", "Variable", "Single"],
    answer: 1,
    explanation: "Standard for regular recurring premiums."
  },
  {
    id: 73,
    lo: "8F",
    question: "Does Misstatement of Age policy provision apply IF discovered 50 years after issue?",
    options: ["Only for whole life", "No, only if within 2 years", "Only if the agent is alive", "Yes, at any time"],
    answer: 3,
    explanation: "Incontestability doesn't apply to age adjustments; facts are corrected whenever found."
  },
  {
    id: 74,
    lo: "8G",
    question: "Interest on policy loans is usually charged on a(n) _________ basis.",
    options: ["Daily", "Annual", "Weekly", "Century"],
    answer: 1,
    explanation: "Standard annual interest accrual."
  },
  {
    id: 75,
    lo: "8H",
    question: "Extended term insurance coverage amount is __________.",
    options: ["Zero", "Face amount of original policy", "Doubled", "Reduced"],
    answer: 1,
    explanation: "It keeps the same level of protection for a shorter time."
  },
  {
    id: 76,
    lo: "8I",
    question: "A war exclusion that covers death from combat is called a 'Status' clause or 'Results' clause?",
    options: ["Combat clause", "Status (died while in military)", "Soldier clause", "Results (died DUE to war)"],
    answer: 3,
    explanation: "Results clauses look for the causal link to war activities."
  },
  {
    id: 77,
    lo: "8A",
    question: "Claude Juneau died 2 days after delivering. Does beneficiary get benefit?",
    options: ["Only if agent says so", "Only if Claude signed a form", "No", "Yes"],
    answer: 3,
    explanation: "The risk starts at issue/delivery, regardless of the free-look period window."
  },
  {
    id: 78,
    lo: "8C",
    question: "Materiality is based on __________ standards.",
    options: ["Agent's personal", "Objective actuarial/underwriting", "Subjective customer", "None"],
    answer: 1,
    explanation: "It depends on the company's formal risk rules."
  },
  {
    id: 79,
    lo: "8H",
    question: "Net cash surrender value reflects the addition of __________ (covered in next chapter).",
    options: ["Loans", "Taxes", "Hopes", "Dividends"],
    answer: 3,
    explanation: "Dividends increase the value; loans decrease it."
  },
  {
    id: 80,
    lo: "8D",
    question: "Lapse happens __________ the grace period ends.",
    options: ["Immediately after", "Before", "One year after", "During"],
    answer: 0,
    explanation: "The coverage ends strictly at the expiration of the grace window."
  },
  {
    id: 81,
    lo: "8C",
    question: "Fraud requires 'intent to _________'.",
    options: ["Induce another party to give up something of value", "Buy", "Save money", "Help the company"],
    answer: 0,
    explanation: "Active deception is the core of fraud."
  },
  {
    id: 82,
    lo: "8E",
    question: "Payment of back premiums restores the _________ to proper level.",
    options: ["Lobbying fund", "Agent's bank account", "Policy reserve", "Premium rate"],
    answer: 2,
    explanation: "Math balance must be restored for the insurer to honor the old deal."
  },
  {
    id: 83,
    lo: "8F",
    question: "Sex misstatement: if listed as female but actually male, benefit _________.",
    options: ["Void", "Decreases (since males have higher mortality cost)", "Stays same", "Increases"],
    answer: 1,
    explanation: "Males are more expensive to insure; the 'female' premium bought less 'male' coverage."
  },
  {
    id: 84,
    lo: "8G",
    question: "Can an insurer ask for a credit check before giving a policy loan?",
    options: ["Yes", "Only for UL", "No", "Only if insured is over 60"],
    answer: 2,
    explanation: "It's your money essentially; no credit risk to insurer."
  },
  {
    id: 85,
    lo: "8H",
    question: "Automatic nonforfeiture for whole life usually is _________.",
    options: ["Extended term", "Reduced paid-up", "Cash", "None"],
    answer: 0,
    explanation: "Extended term keeps the high coverage active for as long as possible automatically."
  },
  {
    id: 86,
    lo: "8I",
    question: "Exclusions vary from insurer to insurer. This means customers should _________.",
    options: ["Assume they are all the same", "Read the policy", "Only buy from the government", "Ignore them"],
    answer: 1,
    explanation: "Individual contract wording is final."
  },
  {
    id: 87,
    lo: "8A",
    question: "Free-look refund includes which of the following?",
    options: ["Premium plus agent fee", "Only half", "Full premium paid (usually)", "Premium only"],
    answer: 2,
    explanation: "A complete 'un-doing' of the transaction."
  },
  {
    id: 88,
    lo: "8B",
    question: "An entire contract provision prevents _________ statements from altering terms.",
    options: ["Old", "Written", "Oral", "Government"],
    answer: 2,
    explanation: "Protects against 'the agent said X' when the policy says Y."
  },
  {
    id: 89,
    lo: "8C",
    question: "Incontestability period of ONE year is _________ favorable to the owner than two?",
    options: ["More", "Less", "Same", "Illegal"],
    answer: 0,
    explanation: "Shorter window for the insurer to find faults is better for the customer."
  },
  {
    id: 90,
    lo: "8E",
    question: "Is evidence of insurability needed for standard premiums during the grace period?",
    options: ["Only after death", "Yes", "No", "Only for whole life"],
    answer: 2,
    explanation: "Grace period is an unconditional right; reinstatement is conditional."
  },
  {
    id: 91,
    lo: "8G",
    question: "Marco's unpaid $15k loan check: who gets the $335k balance?",
    options: ["Estate", "Agent", "Insurer", "Beneficiary"],
    answer: 3,
    explanation: "The final net benefit goes to the named party."
  },
  {
    id: 92,
    lo: "8H",
    question: "Paid-up insurance of same plan = _________.",
    options: ["Whole life for whole life", "None", "Variable for whole life", "Term for whole life"],
    answer: 0,
    explanation: "It maintains the underlying product type (plan)."
  },
  {
    id: 93,
    lo: "8I",
    question: "Suicide while 'sane or insane'. Does the clause care about mental state?",
    options: ["No, typically covers both to ensure exclusion works", "Yes", "Only for children", "Only in Ohio"],
    answer: 0,
    explanation: "Standard legal wording covers all cases of self-harm triggering the exclusion."
  },
  {
    id: 94,
    lo: "8B",
    question: "Can specified officers of the insurer change a contract oraly?",
    options: ["Only if agent agrees", "No, must be in writing", "Only for preferred risks", "Yes"],
    answer: 1,
    explanation: "Entire contract remains written-only for safety."
  },
  {
    id: 95,
    lo: "8D",
    question: "Grace period for monthly premiums is usually _________ days.",
    options: ["31", "10", "90", "1"],
    answer: 0,
    explanation: "Standard industry length matching a month."
  },
  {
    id: 96,
    lo: "8G",
    question: "Does UL charge interest on withdrawals?",
    options: ["No", "Yes", "Only for agents", "Only if over $5k"],
    answer: 0,
    explanation: "Withdrawals are a reduction, not a debt."
  },
  {
    id: 97,
    lo: "8F",
    question: "Inga died 7 years later. Original period was long gone. Do age adjustments still happen?",
    options: ["Only if beneficiary admits it", "Yes", "Only if insurer sues", "No, it's incontestable"],
    answer: 1,
    explanation: "Misstatement of age is an adjustment provision, not a contest of validity."
  },
  {
    id: 98,
    lo: "8E",
    question: "Cost of UL reinstatement: usually at least _________ months of mortality/expense charges.",
    options: ["12", "1", "60", "2"],
    answer: 3,
    explanation: "A 2-month cushion is standard for flexible premium policies."
  },
  {
    id: 99,
    lo: "8H",
    question: "Is 'Reduced Paid-Up' available for term policies?",
    options: ["Only in Canada", "Only for children", "No, they have no cash value to fund it", "Yes"],
    answer: 2,
    explanation: "You need the built-up equity of whole life to 'buy' the permanent coverage."
  },
  {
    id: 100,
    lo: "8B",
    question: "Misunderstandings regarding contract terms are minimized by which provision?",
    options: ["Free-look", "Entire Contract", "Lapse", "Grace Period"],
    answer: 1,
    explanation: "Sticking to the written four corners of the document provides clarity for all parties."
  }
];
