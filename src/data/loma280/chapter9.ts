import { Question } from '../../types';

export const chapter9Questions: Question[] = [
  {
    id: 1,
    lo: "9A",
    question: "Jason Kilpatrick named his three children—Amos, Kiley, and Rebecca—as primary beneficiaries of his life insurance policy without specifying percentages. If Jason dies and all three children are alive, how will the insurer distribute the proceeds?",
    options: ["The insurer holds the funds until the children reach age 25", "The proceeds are divided evenly among all three", "Amos receives 100% as the eldest", "The proceeds are paid to Jason's estate"],
    answer: 1,
    explanation: "If more than one primary beneficiary is named and the policyowner does not provide specific instructions for division, the insurer typically divides the proceeds evenly among the surviving primary beneficiaries."
  },
  {
    id: 2,
    lo: "9A",
    question: "Sophie Katsaros named her children, Mia and Zoe, as equal primary beneficiaries and her husband, Basil, as the contingent beneficiary. Zoe died in an accident two years before Sophie. Upon Sophie's death, who is entitled to the proceeds?",
    options: ["The proceeds go to Sophie's estate", "Mia and Basil divide the proceeds equally", "Mia receives 100% of the proceeds", "Mia receives 50% and Zoe's estate receives 50%"],
    answer: 2,
    explanation: "A beneficiary must survive the insured to receive proceeds. Since Zoe predeceased Sophie, the primary beneficiary interest goes to the surviving primary beneficiary(ies). The contingent beneficiary (Basil) only receives funds if ALL primary beneficiaries are deceased."
  },
  {
    id: 3,
    lo: "9A",
    question: "Juliet Chau's policy names her husband, Stephen, as primary beneficiary and her children, Sam and May, as equal contingent beneficiaries. Stephen died in 2020. Juliet died in 2023 without updating the policy. How are the proceeds distributed?",
    options: ["Sam and May receive the proceeds equally", "The insurer keeps the proceeds because the primary beneficiary is dead", "The proceeds are paid to Juliet's estate", "The proceeds are paid to Stephen's estate"],
    answer: 0,
    explanation: "If the primary beneficiary(ies) predecease the insured, the proceeds are payable to the surviving contingent beneficiaries."
  },
  {
    id: 4,
    lo: "9A",
    question: "Javad Kashani named his wife primary beneficiary and his daughter Azra first contingent beneficiary. Both Javad and his wife died in the same car accident. Under standard policy terms, to whom will the proceeds be paid?",
    options: ["His wife's parents", "Azra", "Javad's brother", "His sister"],
    answer: 1,
    explanation: "Since the primary beneficiary died, the proceeds go to the next level of beneficiary, which is the first contingent beneficiary."
  },
  {
    id: 5,
    lo: "9A",
    question: "A policyowner has the unrestricted right to change the beneficiary designation at any time without the beneficiary's consent. This type of beneficiary is known as a:",
    options: ["Revocable beneficiary", "Successor beneficiary", "Irrevocable beneficiary", "Contingent beneficiary"],
    answer: 0,
    explanation: "A revocable beneficiary designation allows the policyowner to exercise the right of revocation at any time during the insured's lifetime without consent."
  },
  {
    id: 6,
    lo: "9A",
    question: "During the insured's lifetime, a revocable beneficiary has which of the following?",
    options: ["The power to prevent a policy loan", "Ownership of the policy's cash value", "A vested interest in the proceeds", "A 'mere expectancy' of receiving proceeds"],
    answer: 3,
    explanation: "A revocable beneficiary has no legal interest in the policy proceeds during the insured's life and cannot prohibit the owner from exercising ownership rights. Their interest is described as a 'mere expectancy'."
  },
  {
    id: 7,
    lo: "9A",
    question: "Aimie Brodeur named her mother, Yvette, as the irrevocable beneficiary of her life insurance policy. Aimie now wants to take out a policy loan against the cash value. What is required for Aimie to do this?",
    options: ["Aimie must first change Yvette to a revocable beneficiary", "Aimie can only do this if her mother is dead", "Aimie needs Yvette's written consent", "Nothing; she is the owner"],
    answer: 2,
    explanation: "An irrevocable beneficiary has a vested interest. The policyowner typically cannot obtain a loan, surrender the policy, or assign it without the written consent of the irrevocable beneficiary."
  },
  {
    id: 8,
    lo: "9A",
    question: "Aimie named Yvette as an irrevocable beneficiary. Several years later, Yvette died while the policy was still in effect. According to typical policy provisions, Aimie is now permitted to:",
    options: ["Do nothing; the designation is frozen for Yvette's estate", "Designate a new beneficiary without anyone's consent", "Only name her estate as beneficiary", "Pay no more premiums"],
    answer: 1,
    explanation: "Most policies state that the rights of any beneficiary, including irrevocable ones, terminate if they die before the insured. This allows the owner to name a new beneficiary."
  },
  {
    id: 9,
    lo: "9A",
    question: "A beneficiary designation that identifies a group like 'all my children' rather than listing them individually is called a:",
    options: ["Endorsement", "Contingent designation", "Irrevocable unit", "Class designation"],
    answer: 3,
    explanation: "A class designation identifies a certain group of people rather than naming each person individually."
  },
  {
    id: 10,
    lo: "9A",
    question: "Under most U.S. laws, why would a policyowner set up a trust for a beneficiary who is 8 years old?",
    options: ["To make the beneficiary irrevocable", "Because minors generally cannot receive policy proceeds directly", "To avoid paying premiums", "To allow the child to take out policy loans"],
    answer: 1,
    explanation: "Minors lack legal capacity to handle large sums directly; therefore, a guardian, trust, or UTMA account is usually required to administer the funds."
  },
  {
    id: 11,
    lo: "9B",
    question: "Suppose the annual renewal premium for a policy is $1,200. If the policyowner chooses to pay on a monthly 'mode' instead, the total annual cost is likely to be:",
    options: ["Exactly $1,200", "Zero for the first year", "More than $1,200 (e.g., $1,296)", "Less than $1,200"],
    answer: 2,
    explanation: "More frequent payments (monthly vs. annual) increase insurer administrative costs and reduce interest earnings on collected premiums, so insurers charge a higher total amount for frequent modes."
  },
  {
    id: 12,
    lo: "9B",
    question: "A policy's premium payment mode refers to:",
    options: ["The method of payment (cash or check)", "The amount of the mortality charge", "The frequency at which premiums are payable", "The length of the grace period"],
    answer: 2,
    explanation: "The premium payment mode is the frequency (annual, semiannual, quarterly, monthly) at which premiums are due."
  },
  {
    id: 13,
    lo: "9C",
    question: "Owners of participating life insurance policies share in the insurance company's 'divisible surplus' through the payment of:",
    options: ["Cash values", "Nonforfeiture values", "Interest", "Policy dividends"],
    answer: 3,
    explanation: "A policy dividend is an amount paid to the owner of a participating policy from the insurer's divisible surplus."
  },
  {
    id: 14,
    lo: "9C",
    question: "What is the most common 'automatic' dividend option for cash value life insurance policies if the owner fails to select one?",
    options: ["Accumulation at interest", "Cash option", "Paid-up additional insurance", "Premium reduction"],
    answer: 2,
    explanation: "For cash value policies, the paid-up additional insurance option is typically the standard automatic choice."
  },
  {
    id: 15,
    lo: "9C",
    question: "Under the 'Premium Reduction' dividend option, if a declared dividend of $100 is higher than the $80 premium due:",
    options: ["The beneficiary receives the $20", "The insurer keeps the extra $20 as a fee", "The owner must select another option for the remaining $20 or the automatic option applies", "The premium for next year is automatically doubled"],
    answer: 2,
    explanation: "If the dividend exceeds the premium, the owner can choose how to receive the remainder, otherwise the automatic dividend option for that policy takes over for the excess."
  },
  {
    id: 16,
    lo: "9C",
    question: "If an insured has an outstanding policy loan and applies their dividends toward it, the insurer typically applies the money first to:",
    options: ["Loan principal", "The beneficiary's future claim", "The next annual premium", "Outstanding interest on the loan"],
    answer: 3,
    explanation: "Under the policy loan repayment dividend option, dividends are applied first to unpaid interest and then to the principal balance."
  },
  {
    id: 17,
    lo: "9C",
    question: "Under the 'Accumulation at Interest' dividend option, who usually receives the accumulated dividends if the insured dies?",
    options: ["The policyowner only", "The state government", "The insurer's stockholders", "The policy's beneficiary"],
    answer: 3,
    explanation: "In cases where the owner is not the insured, accumulated dividends on deposit are usually payable to the beneficiary along with the death benefit proceeds."
  },
  {
    id: 18,
    lo: "9C",
    question: "What is a primary advantage of the 'Paid-Up Additional Insurance' dividend option?",
    options: ["It provides term insurance for 30 years", "The additions have their own cash values and require no further premiums", "It is free of all charges", "It eliminates the need for an application"],
    answer: 1,
    explanation: "Paid-up additions are mini-whole life policies purchased with dividends. They have their own cash values and are fully paid for at the time of 'purchase'."
  },
  {
    id: 19,
    lo: "9C",
    question: "Before a policyowner is allowed to switch to the 'Additional Term Insurance' dividend option, insurers usually require:",
    options: ["The death of the primary beneficiary", "A transition to a non-participating policy", "A $500 fee", "Evidence of insurability"],
    answer: 3,
    explanation: " switching to term insurance options often requires proof of health to prevent 'antiselection' (people in poor health choosing the cheaper term coverage over expensive paid-up options)."
  },
  {
    id: 20,
    lo: "9D",
    question: "An agreement where the policyowner-assignor transfers some or all ownership rights to an assignee is called a(n):",
    options: ["Assignment", "Rider", "Endorsement", "Settlement Option"],
    answer: 0,
    explanation: "An assignment is the formal agreement to transfer ownership rights in a life insurance policy."
  },
  {
    id: 21,
    lo: "9D",
    question: "A policyowner absolutely assigns her policy to her adult child as a gift. The child (assignee) now becomes the:",
    options: ["Insured", "Beneficiary only", "Policyowner", "Contingent payee"],
    answer: 2,
    explanation: "In an absolute assignment, the assignor transfers all rights, and the assignee becomes the new policyowner."
  },
  {
    id: 22,
    lo: "9D",
    question: "Mark collaterally assigned his $100,000 policy to a bank for a $30,000 loan. While this assignment is in effect, Mark:",
    options: ["Loses the right to change the beneficiary", "Can surrender the policy for cash without bank consent", "Must pay interest to the beneficiary", "Retains rights that don't affect policy value (like naming beneficiaries)"],
    answer: 3,
    explanation: "In a collateral assignment, the owner retains non-monetary rights like naming beneficiaries, but cannot diminish the policy value (loans/surrender) without the assignee's consent."
  },
  {
    id: 23,
    lo: "9D",
    question: "If Mark dies while the $30,000 collateral assignment is in effect on his $100,000 policy, how much does the bank receive?",
    options: ["$100,000", "$70,000", "$30,000", "Nothing; assignments expire upon death"],
    answer: 2,
    explanation: "The collateral assignee is entitled to receive only the amount of the debt; the remainder goes to the policy's beneficiary."
  },
  {
    id: 24,
    lo: "9D",
    question: "What happens to a collateral assignment if the borrower repays the bank loan in full during the insured's lifetime?",
    options: ["The bank becomes the permanent owner", "The policy is cancelled", "The proceeds must be shared with the bank forever", "The assignment terminates and rights revert to the policyowner"],
    answer: 3,
    explanation: "Collateral assignments are temporary. Once the debt is paid, the assignee releases their claim and all rights return to the owner."
  },
  {
    id: 25,
    lo: "9D",
    question: "Under the 'Assignment Provision,' if an insurer is not notified of an assignment and pays the full proceeds to a beneficiary, the insurer is:",
    options: ["Forced to go into liquidation", "Required to sue the beneficiary", "Liable to pay the assignee their share as well", "Not liable to the assignee for the paid funds"],
    answer: 3,
    explanation: "Insurers are only obligated to honor assignments they have received written notice of. If they pay the beneficiary before being notified of a claim by an assignee, they are generally protected."
  },
  {
    id: 26,
    lo: "9D",
    question: "Which method of transferring ownership is commonly used when a parent 'gifts' a policy to a child and the insurer adds a note to the policy itself?",
    options: ["Collateral method", "Endorsement method", "Divisible method", "Annuity method"],
    answer: 1,
    explanation: "The endorsement method is a direct way to change ownership where the insurer records the change on the policy document."
  },
  {
    id: 27,
    lo: "9E",
    question: "If a policyowner dies while the insured (a third party) is still alive, who becomes the new owner if a specific person was named for this event?",
    options: ["Primary beneficiary", "Contingent owner", "Contingent payee", "Assignee"],
    answer: 1,
    explanation: "A contingent owner is the person designated to take over ownership if the original owner dies while the insured is still living."
  },
  {
    id: 28,
    lo: "9E",
    question: "If a policy has no living owners and no contingent owners named when the owner dies, ownership typically passes to:",
    options: ["The estate of the policyowner", "The insurance company", "The beneficiary", "The insured"],
    answer: 0,
    explanation: "If no living owner exists, rights pass to the deceased policyowner's estate."
  },
  {
    id: 29,
    lo: "9F",
    question: "Under the general rule of a simultaneous death act, if both the insured and the primary beneficiary die in a way that makes it impossible to know who died first:",
    options: ["The insured is deemed to have survived the beneficiary", "The state keeps the money", "The beneficiary is deemed to have survived the insured", "The proceeds are split 50/50 between their estates"],
    answer: 0,
    explanation: "The act assumes the insured outlived the beneficiary so that proceeds go to the contingent beneficiary or the insured's estate rather than the primary beneficiary's estate."
  },
  {
    id: 30,
    lo: "9F",
    question: "Lars Klunder's policy had a 30-day survivorship clause. Lars and his primary beneficiary, Nils, were in an accident; Lars died instantly, and Nils died 5 days later. Who gets the money?",
    options: ["Nils' estate", "The state", "The hospital", "The contingent beneficiary named by Lars"],
    answer: 3,
    explanation: "Because Nils survived Lars but NOT for the required 30 days, the survivorship clause treats Nils as though he predeceased Lars, and funds go to the contingent beneficiary."
  },
  {
    id: 31,
    lo: "9G",
    question: "Teemu had a $200,000 policy with a $100,000 ADB (accidental death benefit). He died in an accident. He had $450 in advance premiums paid and a $6,200 loan. What are the total proceeds?",
    options: ["$294,600 ($300k + $450 - $6,200 + $350 index div)", "$293,800", "$300,000", "$294,250"],
    answer: 0,
    explanation: "Calculation: Base DB ($200k) + ADB ($100k) + Accumulated Div ($350) + Unearned Premium ($450) - Loan ($6,200) = $294,600."
  },
  {
    id: 32,
    lo: "9H",
    question: "Alternative methods for receiving life insurance proceeds instead of a single lump-sum check are collectively known as:",
    options: ["Settlement options", "Dividend options", "Assignment options", "Nonforfeiture options"],
    answer: 0,
    explanation: "Settlement options (or optional modes of settlement) allow choices on how to distribute policy proceeds."
  },
  {
    id: 33,
    lo: "9H",
    question: "Under the 'Interest Option' of settlement, the payee generally has the right to:",
    options: ["Never touch the money for 20 years", "Withdraw all or part of the principal proceeds at any time (unless restricted)", "Change the insured", "Withdraw only the interest"],
    answer: 1,
    explanation: "In the interest option, the insurer holds the principal and pays interest, but the payee usually has the right to withdraw the principal unless the owner placed specific restrictions."
  },
  {
    id: 34,
    lo: "9H",
    question: "Which settlement option specifies a precise length of time (e.g., 10 years) for payments to continue until the proceeds are gone?",
    options: ["Life Income Option", "Fixed Amount Option", "Interest Option", "Fixed Period Option"],
    answer: 3,
    explanation: "The fixed period option pays equal installments for a specific duration chosen by the owner or beneficiary."
  },
  {
    id: 35,
    lo: "9H",
    question: "Under the 'Fixed Amount' settlement option, if a payee makes a partial withdrawal of the principal:",
    options: ["The interest rate drops to zero", "The number of remaining installments will be reduced", "Payments stop immediately", "The payout amount per month increases"],
    answer: 1,
    explanation: "Withdrawals reduce the principal, meaning the fixed monthly payment amount can stay the same but the duration of payments will be shorter."
  },
  {
    id: 36,
    lo: "9H",
    question: "Which settlement option guarantees a permanent source of income for the payee's entire life?",
    options: ["Fixed Period Option", "Fixed Amount Option", "Interest Option", "Life Income Option"],
    answer: 3,
    explanation: "The life income option uses proceeds to purchase a life annuity, guaranteeing payments for as long as the payee lives."
  },
  {
    id: 37,
    lo: "9A",
    question: "A 'secondary beneficiary' is another term for a:",
    options: ["Class designation", "Primary beneficiary", "Irrevocable owner", "Contingent beneficiary"],
    answer: 3,
    explanation: "Secondary, contingent, and successor beneficiaries all refer to the party that receives funds if the primary beneficiary is dead."
  },
  {
    id: 38,
    lo: "9A",
    question: "Can an insurance company pay proceeds directly to a 24-year-old child named as primary beneficiary in the U.S.?",
    options: ["Yes, they have attained the age of majority", "No, a guardian is needed", "Only if they use a settlement option", "Only if the estate approves"],
    answer: 0,
    explanation: "Once a beneficiary reaches the age of majority (usually 18 or 21), they have legal capacity to receive funds directly."
  },
  {
    id: 39,
    lo: "9C",
    question: "Policy dividends are:",
    options: ["Calculated by the board of directors but not guaranteed", "Only paid to non-participating policyowners", "Guaranteed by federal law", "Determined by an agent's sales performance"],
    answer: 0,
    explanation: "Dividends are not guaranteed; the insurer's board determines if a surplus exists to distribute to participating policies."
  },
  {
    id: 40,
    lo: "9A",
    question: "If a policyowner voluntarily gives up the right to change the beneficiary, the designation becomes:",
    options: ["Contingent", "Revocable", "Irrevocable", "Vested"],
    answer: 2,
    explanation: "The designation is revocable by default unless the owner explicitly chooses to make it irrevocable."
  },
  {
    id: 41,
    lo: "9D",
    question: "To make a valid assignment, the policyowner must have 'contractual capacity.' Which individual likely lacks this?",
    options: ["A 15-year-old minor", "A 35-year-old doctor", "An healthy 65-year-old", "A corporate CEO"],
    answer: 0,
    explanation: "Minors generally lack the legal capacity to enter into binding contracts and assignments."
  },
  {
    id: 42,
    lo: "9D",
    question: "Does an absolute assignee (new owner) need an 'insurable interest' in the life of the insured?",
    options: ["Yes, always", "Only in the first 2 years", "Only if they are a corporation", "No, for absolute assignments, interest is generally not required"],
    answer: 3,
    explanation: "Once a policy is validly issued, it can generally be assigned to anyone regardless of insurable interest."
  },
  {
    id: 43,
    lo: "9D",
    question: "Speculating on a life (buying/assigning a policy with the sole intent of profiting from death without interest) is usually:",
    options: ["A tax-haven strategy", "Required for key-person insurance", "Invalid as an illegal purpose", "A valid assignment"],
    answer: 2,
    explanation: "Assignments for illegal purposes, like wagering on a life, are invalid."
  },
  {
    id: 44,
    lo: "9D",
    question: "Under the 'Endorsement Method' of transfer, the owner sends the policy to the insurer, and the insurer:",
    options: ["Notifies the local court", "Adds a note (endorsement) stating the name of the new owner", "Issues a brand new policy with a new number", "Cancels the policy and refunds cash value"],
    answer: 1,
    explanation: "The endorsement method is an internal recording process by the insurer on the existing contract."
  },
  {
    id: 45,
    lo: "9E",
    question: "If Mark names his wife and two children as contingent beneficiaries and ALL of them die before Mark, and then Mark (the insured) dies without updating the list, the proceeds go to:",
    options: ["The funeral home", "Mark's estate", "The insurance company", "The state's general fund"],
    answer: 1,
    explanation: "When no living beneficiary exists at the time of death, proceeds revert to the policyowner or their estate."
  },
  {
    id: 46,
    lo: "9E",
    question: "A 'succession beneficiary clause' is common in WHICH type of insurance?",
    options: ["Third-party whole life", "Variable annuities", "Group life insurance", "Single-premium policies"],
    answer: 2,
    explanation: "Group policies often include a default order (spouse, kids, parents) to ensure payment when no specific person is named."
  },
  {
    id: 47,
    lo: "9F",
    question: "Amy and James died in a crash. Amy's policy had James as primary and Gemma as contingent. If the jurisdiction has a Simultaneous Death Act, what is assumed?",
    explanation: "The act assumes the insured (Amy) survived the beneficiary (James), letting proceeds bypass James' estate and go to the contingent beneficiary (Gemma).",
    options: ["James survived Amy", "Both died exactly at the same millisecond", "Amy survived James", "Gemma died first"],
    answer: 2
  },
  {
    id: 48,
    lo: "9F",
    question: "How is a 'Survivorship Clause' different from the Simultaneous Death Act?",
    options: ["It requires the beneficiary to survive for a specific time (30/60 days) regardless of who died first", "It requires the owner to die first", "It only applies to car accidents", "It only applies to irrevocable beneficiaries"],
    answer: 0,
    explanation: "The clause sets a minimum survival timer (e.g., 30 days) to prevent proceeds from being tied up in two rapid estate settlements."
  },
  {
    id: 49,
    lo: "9F",
    question: "If a beneficiary intentionally kills the insured, the law generally:",
    options: ["Makes the policy void for the contingent beneficiary too", "Disqualifies them from receiving the proceeds", "Allows them to use the money for legal defense", "Awards them double the proceeds"],
    answer: 1,
    explanation: "Disqualification laws prevent criminals from profiting from their crimes."
  },
  {
    id: 50,
    lo: "9G",
    question: "An 'unearned premium' is usually added to the death proceeds because:",
    options: ["It was paid in advance for a period that the insured did not live through", "It is an extra dividend", "The insurer made a mistake", "The agent donated it"],
    answer: 0,
    explanation: "Insurers refund premiums paid for coverage duration that won't occur due to death."
  },
  {
    id: 51,
    lo: "9H",
    question: "If a policyowner selects an 'Irrevocable' settlement mode for their daughter:",
    options: ["The daughter can change it to a lump sum", "The mother becomes the insured", "The daughter cannot change the payout method once proceeds are payable", "The insurer can keep the money if the daughter is annoying"],
    answer: 2,
    explanation: "Irrevocable settlement choices by the owner bind the beneficiary to that specific plan of distribution."
  },
  {
    id: 52,
    lo: "9H",
    question: "The 'Payee' in a settlement option environment is:",
    options: ["The person whose life is insured", "The party designated to receive the installment payments", "The agent who gets commission", "The policyowner while still alive"],
    answer: 1,
    explanation: "The payee is the recipient of funds under a settlement plan."
  },
  {
    id: 53,
    lo: "9H",
    question: "Which option provides the SMALLEST monthly payment amount for a given $100,000 proceed amount?",
    options: ["Interest Option (principal kept intact)", "Lump Sum", "Fixed Period (proceeds + interest drained in 5 years)", "Fixed Amount ($5k a month)"],
    answer: 0,
    explanation: "Since the interest option keeps the principal balance untouched and only pays the earnings, it results in smaller recurring checks than options that drain the principal."
  },
  {
    id: 54,
    lo: "9A",
    question: "Successor beneficiary is another name for a:",
    options: ["Irrevocable payee", "Policyowner", "Contingent beneficiary", "Primary beneficiary"],
    answer: 2,
    explanation: "It is a standard synonym for the contingent beneficiary who 'succeeds' the primary one."
  },
  {
    id: 55,
    lo: "9C",
    question: "The 'Dividends on Deposit' option means dividends are:",
    options: ["Used to buy a second policy", "Invested in gold", "Sent to a bank account", "Left with the insurer to grow at a guaranteed minimum interest rate"],
    answer: 3,
    explanation: "This is a bank-account style option where dividends stay with the company to earn interest."
  },
  {
    id: 56,
    lo: "9D",
    question: "When a divorce decree requires a husband to name his wife as beneficiary and the court forbids changing it, she is a(n):",
    options: ["Revocable beneficiary", "Irrevocable beneficiary", "Class unit", "Contingent owner"],
    answer: 1,
    explanation: "Legal obligations often necessitate irrevocable designations to protect the interests of ex-spouses or children."
  },
  {
    id: 57,
    lo: "9D",
    question: "Absolute assignment transfer of rights is:",
    options: ["Irrevocable", "Limited to $5,000", "Temporary", "Only valid for 10 years"],
    answer: 0,
    explanation: "Unlike collateral assignments, absolute ones are permanent and irrevocable transfers of total ownership."
  },
  {
    id: 58,
    lo: "9D",
    question: "A bank wants security for a business loan. They will likely ask for a:",
    options: ["Endorsement of gift", "Class beneficiary designation", "Absolute assignment", "Collateral assignment of a life policy"],
    answer: 3,
    explanation: "Collateral assignments are the standard choice for temporary security for debts."
  },
  {
    id: 59,
    lo: "9G",
    question: "Which item is SUBTRACTED when calculating final policy proceeds?",
    options: ["Outstanding policy loans", "ADB", "Refund of advance premiums", "Accumulated Dividends"],
    answer: 0,
    explanation: "Final proceeds = (Sum of Benefits/Additions) - (Sum of Debts/Unpaid Premiums)."
  },
  {
    id: 60,
    lo: "9H",
    question: "A 'Contingent Payee' receives settlement payments if:",
    options: ["The beneficiary goes bankrupt", "The original payee dies while proceeds are still being distributed", "The insured is still alive", "The policyowner changes their mind"],
    answer: 1,
    explanation: "They are the 'backup' for long-term installment plans like fixed periods or fixed amounts."
  },
  {
    id: 61,
    lo: "9A",
    question: "To name a corporation as a beneficiary, an insurer must ensure the laws of the __________ recognize it.",
    options: ["LOMA organization", "U.N.", "Jurisdiction", "Marketing department"],
    answer: 2,
    explanation: "Legal recognition by the local jurisdiction is required for any beneficiary entity."
  },
  {
    id: 62,
    lo: "9A",
    question: "Vested interest means a property right that:",
    options: ["Expires in 30 days", "Has taken effect and cannot be changed without consent", "Is only valid for term insurance", "Can be taken away easily"],
    answer: 1,
    explanation: "A vested right is legally firm and requires the holder's approval to alter."
  },
  {
    id: 63,
    lo: "9D",
    question: "If a policyowner assigns a policy for an illegal purpose (speculating on death), the insurer treats the assignment as:",
    options: ["A dividend", "A class designation", "Invalid", "Valid"],
    answer: 2,
    explanation: "Speculation or illegal 'wagering' on lives voids the ownership transfer."
  },
  {
    id: 64,
    lo: "9A",
    question: "A policyowner naming 'My Children' as beneficiaries. One child is born later. Is the new child covered?",
    options: ["Only if the agent knows", "Yes, under the class designation", "No, only those born before issue", "Only for 30 days"],
    answer: 1,
    explanation: "Class designations automatically inclusive of all qualified members at the time of the insured's death."
  },
  {
    id: 65,
    lo: "9C",
    question: "Paid-up additions COST less than new policies because they:",
    options: ["Are always for group insurance", "Don't include an amount to cover insurer expenses/commissions", "Don't earn interest", "Have lower limits"],
    answer: 1,
    explanation: "Since they are inner-policy adjustments, the insurer doesn't charge for the sales overhead associated with new sales."
  },
  {
    id: 66,
    lo: "9D",
    question: "Can an absolute assignee (the new owner) change the life insured on the policy?",
    options: ["Only if they pay a fee", "Only if the old owner permits", "No, the insured party is almost never changeable", "Yes, they own it"],
    answer: 2,
    explanation: "Ownership rights transfer, but the core 'risk' (the person whose life is covered) stays the same."
  },
  {
    id: 67,
    lo: "9H",
    question: "A settlement mode is Considered 'revocable' if:",
    options: ["The beneficiary can select a different option after death", "The owner is still alive", "The debt is repaid", "The insurer can cancel it"],
    answer: 0,
    explanation: "Revocability in settlement options means the payee (beneficiary) has the power to change the distribution plan after the insured dies."
  },
  {
    id: 68,
    lo: "9C",
    question: "The board of directors of an insurance company annually determines the:",
    options: ["The location of the general fund", "Length of the grace period", "Amount payable as dividends", "Beneficiary of the CEO's policy"],
    answer: 2,
    explanation: "Dividend payout amounts depend on surplus performance as calculated by leadership."
  },
  {
    id: 69,
    lo: "9D",
    question: "Collateral assignee has a right to principal debt, but they must receive it in which form?",
    options: ["Installments over 10 years", "Variable credits", "Annuity", "Lump sum"],
    answer: 3,
    explanation: "Assignees under collateral agreements receive their share as a single lump-sum payment."
  },
  {
    id: 70,
    lo: "9E",
    question: "Mark Palakiko's wife and kids predeceased him. He died without naming anyone else as beneficiary. The $50,000 proceeds go to:",
    options: ["Mark's estate", "The agent's charity", "The bank", "Reserved for his future grandchildren"],
    answer: 0,
    explanation: "If no surviving beneficiary exists, the estate of the owner is the default recipient."
  },
  {
    id: 71,
    lo: "9F",
    question: "Amy's policy: Gemma is contingent. James is primary. Both Amy and James die. Concurrent with Simultaneous Death Act, James' estate gets:",
    options: ["The advance premiums only", "50% of money", "Nothing", "100% of money"],
    answer: 2,
    explanation: "James is deemed to have died first, so he doesn't inherit; his estate gets nothing from the proceeds."
  },
  {
    id: 72,
    lo: "9H",
    question: "Settlement option that provides the HIGHEST monthly payout for a limited time:",
    options: ["Interest Option", "Fixed Amount Option (e.g., draining it in 1 year)", "Fixed Period (e.g., 30 years)", "Life Income Option"],
    answer: 1,
    explanation: "Payout size depends on how fast the principal is drained; choosing to drain it very fast (Fixed Amount or short Fixed Period) maximizes the check size."
  },
  {
    id: 73,
    lo: "9A",
    question: "Is 'first beneficiary' a common synonym for primary beneficiary?",
    options: ["Only in divorce cases", "Only for group insurance", "Yes", "No"],
    answer: 2,
    explanation: "The terms are used interchangeably in the industry."
  },
  {
    id: 74,
    lo: "9C",
    question: "Dividend option available for Term policies:",
    options: ["Paid-up additions", "Accumulation at Interest", "Variable Annuity Buy", "All of the above"],
    answer: 1,
    explanation: "Term policies don't support paid-up additions as they aren't 'cash value' plans, but they do support accumulating dividends at interest."
  },
  {
    id: 75,
    lo: "9D",
    question: "Assignor = ________; Assignee = ________.",
    options: ["Minor; Guardian", "Insurer; Customer", "Beneficiary; Estate", "Policyowner; Recipient of rights"],
    answer: 3,
    explanation: "Correct roles in an assignment agreement."
  },
  {
    id: 76,
    lo: "9F",
    question: "Disqualification laws usually allow payment to whom if the primary beneficiary killed the insured?",
    options: ["The insurer keeps it", "The contingent beneficiary", "The killer's family", "The killer still gets it if they were insane"],
    answer: 1,
    explanation: "Payments usually move to the next in line (contingent)."
  },
  {
    id: 77,
    lo: "9H",
    question: "Annuity used in life income settlement option provides payments for:",
    options: ["Until age 65", "5 years only", "At least the lifetime of a named individual", "Only until the money runs out"],
    answer: 2,
    explanation: "A life annuity guarantees payouts for the remainder of the payee's life."
  },
  {
    id: 78,
    lo: "9A",
    question: "Right of Revocation is the right to:",
    options: ["Cancel the policy", "Change the beneficiary", "Take a loan", "Sue the agent"],
    answer: 1,
    explanation: "It specifically refers to updating the beneficiary list."
  },
  {
    id: 79,
    lo: "9D",
    question: "Does an absolute assignee have the right to surrender the policy for its cash value?",
    options: ["Yes, they have all ownership rights", "Only if the beneficiary says so", "Only after the first owner dies", "No"],
    answer: 0,
    explanation: "Total ownership rights include the right to terminate for cash."
  },
  {
    id: 80,
    lo: "9H",
    question: "The 'Fixed Amount' option pays installments until:",
    options: ["The payee reaches 100", "The insurer goes bankrupt", "10 years pass", "The proceeds and interest are exhausted"],
    answer: 3,
    explanation: "Payments continue until the 'bucket' of money is empty."
  },
  {
    id: 81,
    lo: "9A",
    question: "Trusts for minor beneficiaries allow policyowners to:",
    options: ["Dictate the means of managing proceeds until age of majority", "Avoid paying premiums", "Cancel the policy if kids are bad", "Make children irrevocable"],
    answer: 0,
    explanation: "Trusts provide control over how funds are used for the benefit of children."
  },
  {
    id: 82,
    lo: "9C",
    question: "Most individual life policies issued in the U.S. (approx 73%) are:",
    options: ["Participating", "Zero-premium", "Group policies", "Nonparticipating"],
    answer: 3,
    explanation: "The majority of US individual life insurance does not pay dividends (non-par)."
  },
  {
    id: 83,
    lo: "9D",
    question: "Transferring rights merely by 'handing someone the policy paper' is:",
    options: ["Insufficient; a formal agreement (assignment) or endorsement is needed", "Legal in every state", "The same as class designation", "Only valid for gifts"],
    answer: 0,
    explanation: "Legal transfer of intangible property rights requires formal documentation."
  },
  {
    id: 84,
    lo: "9G",
    question: "If an insured dies during the grace period BEFORE the premium was paid, the insurer:",
    options: ["Requires the beneficiary to pay the premium first", "Adds the premium to the death benefit", "Pays 0%", "Subtracts the unpaid premium from the death benefit"],
    answer: 3,
    explanation: "Grace period claims result in a payout minus the debt (the overdue premium)."
  },
  {
    id: 85,
    lo: "9H",
    question: "The guaranteed minimum annuity payment charts are found in the:",
    options: ["Divisible surplus report", "State law book", "Agent's manual", "Settlement options provision of the policy"],
    answer: 3,
    explanation: "Policies include charts to show payees the mathematical minimums they can expect."
  },
  {
    id: 86,
    lo: "9A",
    question: "Sophie named Mia and Zoe primary. If Sophie dies and Mia and Zoe are also dead, but their father Basil is alive (contingent), Basil gets:",
    options: ["100%", "Only 10%", "0%", "50%"],
    answer: 0,
    explanation: "Contingent beneficiaries only inherit when all primary ones are gone."
  },
  {
    id: 87,
    lo: "9C",
    question: "Dividend option that 'buys back' part of the policy debt:",
    options: ["Cash Dividend", "Paid-up additions", "Loan Repayment Option", "Premium Reduction"],
    answer: 2,
    explanation: "Correct description of applying dividends to loans."
  },
  {
    id: 88,
    lo: "9D",
    question: "Can a policyowner absolutely assign a policy to someone with NO insurable interest in their life?",
    options: ["Yes", "Only for whole life", "Only in Ohio", "No"],
    answer: 0,
    explanation: "Once legally formed, its ownership can be sold or gifted widely."
  },
  {
    id: 89,
    lo: "9C",
    question: "Which dividend option focuses on temporary coverage?",
    options: ["Accumulation at interest", "Paid-up additions", "Additional Term Insurance", "Loan repayment"],
    answer: 2,
    explanation: "This option buys one-year term riders with the dividend money."
  },
  {
    id: 90,
    lo: "9D",
    question: "Collateral assignee rights are limited TO:",
    options: ["The amount of the indebtedness", "Only for 1 year", "The total death benefit always", "Naming beneficiaries"],
    answer: 0,
    explanation: "They only have 'collateral' up to the value of what is owed to them."
  },
  {
    id: 91,
    lo: "9H",
    question: "If payee dies during the 'Fixed Period' distribution, remaining installments go to:",
    options: ["The insurer", "Gemma", "The contingent payee", "The CEO"],
    answer: 2,
    explanation: "Successor payees are named to catch the tail end of installment plans."
  },
  {
    id: 92,
    lo: "9D",
    question: "Assignment agreement is technically between:",
    options: ["Owner and Beneficiary", "Minor and Guardian", "Insurer and Owner", "Assignor and Assignee"],
    answer: 3,
    explanation: "The insurer is not actually a party to the assignment; they just record it."
  },
  {
    id: 93,
    lo: "9F",
    question: "Amy survived James by 10 minutes. Jurisdiction has no survivorship clause. James' estate gets:",
    options: ["10%", "Nothing", "Only dividends", "Proceeds"],
    answer: 3,
    explanation: "In the absence of a clause, survival by even minutes makes James the legal heir, so money goes to his estate."
  },
  {
    id: 94,
    lo: "9A",
    question: "Primary beneficiary the insurance company pays is determined at:",
    options: ["Time of application", "Time of insured's death", "Time of issue", "Time of claim approval"],
    answer: 1,
    explanation: "Who is alive *at the moment of death* determines the payout path."
  },
  {
    id: 95,
    lo: "9C",
    question: "Divisible Surplus is set aside for:",
    options: ["Marketing", "Stockholders only", "Owners of participating policies", "Paying taxes"],
    answer: 2,
    explanation: "Specific pool for par policyowners."
  },
  {
    id: 96,
    lo: "9D",
    question: "Assignor under 18. Assignment is:",
    options: ["Conditional", "Valid", "Voidable", "Invalid"],
    answer: 3,
    explanation: "Minor status makes the attempt to assign legal rights invalid."
  },
  {
    id: 97,
    lo: "9E",
    question: "Contingent owner becomes new owner IF:",
    options: ["Beneficiary dies", "Original policyowner dies while insured is still living", "Debt is repaid", "Insured dies"],
    answer: 1,
    explanation: "Designed to handle ownership succession for third-party policies."
  },
  {
    id: 98,
    lo: "9G",
    question: "Policy loan calculation includes unpaid principal AND:",
    options: ["Advance premiums", "Unpaid interest", "Taxes", "ADB"],
    answer: 1,
    explanation: "Total indebtedness (debt) includes everything the owner owes back to the value."
  },
  {
    id: 99,
    lo: "9H",
    question: "Installment payments made monthly must be large enough to meet:",
    options: ["The company's minimum requirements", "The agent's desk fee", "Beneficiary's rent", "State tax laws"],
    answer: 0,
    explanation: "Insurers have minimum payout thresholds to avoid processing trivially small checks."
  },
  {
    id: 100,
    lo: "9A",
    question: "Beneficiary designation 'My Children' handles future births:",
    options: ["Never", "Automatically", "Only if amended", "Poorly"],
    answer: 1,
    explanation: "Class designations are dynamic."
  }
];
