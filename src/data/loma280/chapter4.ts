import { Question } from '../../types';

export const chapter4Questions: Question[] = [
  {
    id: 1,
    lo: "4A",
    question: "The Reliable Life Insurance Company is reporting its year-end financial status. In this report, policy reserves should be classified as:",
    options: ["Investment earnings", "Long-term liabilities", "Company assets", "Owners' equity"],
    answer: 1,
    explanation: "Policy reserves represent an insurer's estimate of future obligations to pay benefits, making them liabilities. By law, insurers must maintain assets to match these liabilities."
  },
  {
    id: 2,
    lo: "4B",
    question: "Isabella is a 35-year-old female who just purchased a life insurance policy. Her premium rate is determined by the insurance company based on a 'block of policies.' What criteria were most likely used to place her in this specific block?",
    options: ["The city she lives in and her credit score", "The number of children she has", "Her income level and occupation only", "Her age, sex, and risk classification"],
    answer: 3,
    explanation: "A block of policies is a group of policies issued to insureds who are all the same age and sex and in the same risk classification."
  },
  {
    id: 3,
    lo: "4B",
    question: "A policyowner, Marcus, has a $250,000 life insurance policy. The actuary has set the annual premium rate at $6 per $1,000 of coverage. What is Marcus's annual premium amount?",
    options: ["$150", "$600", "$1,500", "$2,500"],
    answer: 2,
    explanation: "Annual Premium = (Policy Face Amount / 1,000) × Rate per $1,000. Here: ($250,000 / 1,000) = 250 units. 250 × $6 = $1,500."
  },
  {
    id: 4,
    lo: "4C",
    question: "When calculating premium rates, actuaries seek to ensure that the rates are 'Adequate.' In this context, adequacy means the rates must:",
    options: ["Be at least $10 per unit of coverage", "Be high enough to pay benefits, expenses, and provide a reasonable profit", "Be exactly the same as competitors", "Only cover the death benefits without including expenses"],
    answer: 1,
    explanation: "Adequate rates ensure the insurer has enough money to pay benefits and operating expenses while remaining profitable."
  },
  {
    id: 5,
    lo: "4C",
    question: "Actuaries at the Summit Life Insurance Company are reviewing their pricing to ensure rates are 'Equitable.' This means:",
    options: ["All policyowners in the country pay the same rate", "All men pay the same rate as all women", "Premiums reflect the degree of risk the insurer assumes for each specific classification", "Premiums are kept at the lowest possible level regardless of risk"],
    answer: 2,
    explanation: "Equitable rates ensure that each policyowner is charged a premium that reflects the specific risk level they represent to the insurer."
  },
  {
    id: 6,
    lo: "4C",
    question: "The Beacon Insurance Company realizes that if its premium rates are 'Excessive,' the most likely result will be:",
    options: ["Policyowners will never lapse their policies", "Increased profit in the short term only", "The government will take over the company", "Potential customers will buy from competitors with lower rates"],
    answer: 3,
    explanation: "Excessive rates drive customers toward competitors with lower pricing and make it difficult for agents to sell the products."
  },
  {
    id: 7,
    lo: "4C",
    question: "The 'Cost of Benefits' assigned to a specific life insurance policy and year is determined by multiplying the potential benefit amount by:",
    options: ["The probability that the benefit will be payable", "The interest rate", "The number of agents selling the product", "The company's total assets"],
    answer: 0,
    explanation: "Projected Cost = Potential benefit amount × Probability that the benefit will be payable (mortality rate)."
  },
  {
    id: 8,
    lo: "4D",
    question: "If a mortality table shows that the mortality rate for 60-year-old males is 12 per 1,000, and a group starts the year with 50,000 members, how many are expected to die during the year?",
    options: ["50,000", "600", "1,200", "12"],
    answer: 1,
    explanation: "Expected deaths = (Group Size / 1,000) × Mortality Rate. Here: (50,000 / 1,000) = 50 units. 50 × 12 = 600."
  },
  {
    id: 9,
    lo: "4D",
    question: "A 'Sex-Distinct' mortality table is used by an insurer because statistics generally show that at nearly all ages:",
    options: ["Females buy more insurance than males", "Mortality rates are identical for both sexes", "Females have lower mortality rates than males", "Males have lower mortality rates than females"],
    answer: 2,
    explanation: "Females generally have longer life expectancies and lower mortality rates than males of the same age."
  },
  {
    id: 10,
    lo: "4D",
    question: "An insurer uses a mortality table that shows separate rates for male tobacco users and female tobacco nonusers. This is an example of:",
    options: ["A Sex-distinct mortality table", "A Unisex mortality table", "A Level premium table", "A Composite mortality table"],
    answer: 0,
    explanation: "Sex-distinct tables show separate statistics for males and females, often further divided into tobacco usage categories."
  },
  {
    id: 11,
    lo: "4C",
    question: "Operating expenses for a life insurer typically include all of the following EXCEPT:",
    options: ["The value of death benefits paid to beneficiaries", "Payroll costs for staff", "Commissions paid to agents", "Costs to mail account statements"],
    answer: 0,
    explanation: "Operating expenses are costs of operations *other than* expenses for contractual benefits (the cost of benefits)."
  },
  {
    id: 12,
    lo: "4D",
    question: "If an insurer's actual lapse rate for a product exceeds the rate that was built into the premium pricing, what is the most likely outcome for the insurer?",
    options: ["The mortality rate for that product will automatically decrease", "The company may lose money on that product", "The company will make more profit than expected", "The company will be forced to increase policy dividends"],
    answer: 1,
    explanation: "Insurers incur high initial costs to issue policies. If too many policies terminate (lapse) prematurely, the insurer may not recover those initial expenses."
  },
  {
    id: 13,
    lo: "4F",
    question: "In financial modeling, an actuary uses 'Conservative Values' to provide a buffer against adverse results. Which of the following is an example of a conservative value?",
    options: ["Operating expenses that are higher than expected", "Mortality rates that are lower than expected", "Lapse rates that are zero", "Investment earnings that are higher than expected"],
    answer: 0,
    explanation: "Conservative values assume 'worst-case' paths: higher mortality, higher expenses, or lower investment returns."
  },
  {
    id: 14,
    lo: "4E",
    question: "Susan loans $2,000 to a friend at 5% simple interest per year. If the friend pays back the loan after 3 years, how much TOTAL interest will Susan have earned?",
    options: ["$300", "$100", "$315.25", "$2,300"],
    answer: 0,
    explanation: "Simple Interest = Principal × Rate × Time. $2,000 × 0.05 × 3 = $300."
  },
  {
    id: 15,
    lo: "4E",
    question: "David deposits $10,000 into an account that pays 6% interest compounded annually. How much interest will he earn in the SECOND year only?",
    options: ["$36", "$636", "$1,236", "$600"],
    answer: 1,
    explanation: "Year 1 interest: $10,000 × 0.06 = $600. Balance start of Year 2: $10,600. Year 2 interest: $10,600 × 0.06 = $636."
  },
  {
    id: 16,
    lo: "4G",
    question: "The 'Level Premium System' allows a policyowner to pay the same premium amount each year. This is possible because:",
    options: ["Premiums in the early years are higher than needed to pay claims and expenses", "The government pays for the increase in risk over time", "Insurers ignore the cost of insurance in later years", "Mortality rates never change as people get older"],
    answer: 0,
    explanation: "Early-year premiums cover the cost of insurance and build up a surplus that, combined with investment earnings, covers the higher costs in later years."
  },
  {
    id: 17,
    lo: "4A",
    question: "Under the legal reserve system, a 'policy reserve' is created to ensure that an insurer carries out which primary obligation?",
    options: ["Maintains enough funds to pay future claims as they occur", "Pays dividends to stockholders every quarter", "Hires enough agents to reach sales quotas", "Avoids paying all federal taxes"],
    answer: 0,
    explanation: "The premises of the legal reserve system is that companies should collect funds in advance to ensure they can meet future benefit promises."
  },
  {
    id: 18,
    lo: "4B",
    question: "An insurer's 'Annual Premium Rate' for a block of policies is $12.00. If a policyowner wants a policy with 50 coverage units ($50,000), what is the annual premium amount?",
    options: ["$1,200", "$50", "$6,000", "$600"],
    answer: 3,
    explanation: "Annual Premium = Units × Rate. 50 × $12 = $600."
  },
  {
    id: 19,
    lo: "4C",
    question: "Actuaries use financial models to simulate the potential financial processes of a product over time. These models typically run how many scenarios?",
    options: ["Only best-case scenarios", "Only scenarios where the company goes bankrupt", "Exactly one (the most likely case)", "Hundreds or even thousands of scenarios"],
    answer: 3,
    explanation: "Financial models run many scenarios representing different sets of economic and demographic values to test product robustness."
  },
  {
    id: 20,
    lo: "4D",
    question: "When a mortality table does NOT show separate rates for tobacco users and nonusers, it is known as a:",
    options: ["Specific table", "Conservative table", "Composite table", "Adequate table"],
    answer: 2,
    explanation: "A composite table blends the experience of users and nonusers into one set of rates."
  },
  {
    id: 21,
    lo: "4E",
    question: "The 'Rate of Return' on an investment is expressed as:",
    options: ["Investment earnings as a percentage of the principal", "A fixed dollar amount regardless of principal", "The total number of years an investment lasts", "The amount of taxes paid on the investment"],
    answer: 0,
    explanation: "Rate of Return = (Earnings / Principal) × 100."
  },
  {
    id: 22,
    lo: "4G",
    question: "A graph comparing level premiums to one-year term premiums shows that the one-year term cost curve:",
    options: ["Stops at age 65 for all policyowners", "Is a flat horizontal line", "Starts high and decreases over time", "Increases as the insured grows older"],
    answer: 3,
    explanation: "One-year term insurance directly reflects the mortality rate, which increases as an insured ages."
  },
  {
    id: 23,
    lo: "4A",
    question: "In the United States, policy reserves are sometimes referred to by other names in legal statutes. Which of the following is NOT a common synonym?",
    options: ["Asset reserves", "Contractual reserves", "Legal reserves", "Statutory reserves"],
    answer: 0,
    explanation: "Reserves are liabilities. Assets are kept to back them, but the reserve itself is the liability measurement."
  },
  {
    id: 24,
    lo: "4B",
    question: "A coverage unit in life insurance pricing is typically equal to:",
    options: ["$100", "$1", "$1,000", "The entire face amount of the policy"],
    answer: 2,
    explanation: "Premium rates are almost always expressed as the price per $1,000 of coverage."
  },
  {
    id: 25,
    lo: "4C",
    question: "Which factor in premium calculation allows insurance companies to charge customers LESS than the actual cost of future benefits?",
    options: ["Investment earnings", "Commissions", "Operating expenses", "Mortality rates"],
    answer: 0,
    explanation: "Interest earned on premiums allows the company to fund a portion of the future benefits with investment income rather than just premium dollars."
  },
  {
    id: 26,
    lo: "4D",
    question: "In the sample mortality table provided in the text, if the 'Number Living' at age 60 is 98,900 and 1,200 die during that year, what is the 'Number Living' at age 61?",
    options: ["98,900", "1,200", "100,000", "97,700"],
    answer: 3,
    explanation: "Number Living (Age 61) = Number Living (Age 60) - Number Dying (Age 60). 98,900 - 1,200 = 97,700."
  },
  {
    id: 27,
    lo: "4E",
    question: "Calculating interest on both the principal and the accrued interest is known as:",
    options: ["Simple interest", "Compounding", "Amortization", "Discounting"],
    answer: 1,
    explanation: "Compounding means you earn interest on interest."
  },
  {
    id: 28,
    lo: "4F",
    question: "Why do insurers project mortality rates that are higher than expected in their financial models?",
    options: ["To ensure the premium rate will be more than adequate", "Because they believe everyone will die next year", "To try and make the company look less profitable to tax authorities", "To discourage people from buying insurance"],
    answer: 0,
    explanation: "Using higher-than-expected mortality is a conservative approach to ensure solvency even if actual death rates are worse than predicted."
  },
  {
    id: 29,
    lo: "4G",
    question: "In which policy years are level premium rates LOWER than the actual cost of providing coverage?",
    options: ["Later policy years", "Only the very first year", "Early policy years", "Every year for the life of the policy"],
    answer: 0,
    explanation: "In later years, the mortality risk is very high, and the level premium doesn't cover that year's risk alone; it relies on the prior years' surplus."
  },
  {
    id: 30,
    lo: "4C",
    question: "A life insurance company spends money on payroll for its customer service staff. This expenditure is classified as:",
    options: ["A cost of benefits", "An operating expense", "An investment loss", "A policy reserve"],
    answer: 1,
    explanation: "Payroll and customer service costs are operational expenses required to run the company and support policies."
  },
  {
    id: 31,
    lo: "4A",
    question: "Policy reserves are the __________ portion of an insurer's total liabilities.",
    options: ["Smallest", "Only", "Most volatile", "Largest"],
    answer: 3,
    explanation: "Because an insurer's primary job is paying future claims, these estimated obligations make up the bulk of their liabilities."
  },
  {
    id: 32,
    lo: "4B",
    question: "If an insurer applies a 'policy fee' to a Marcus's policy, this fee will:",
    options: ["Be subtracted from the annual premium amount", "Increase the total premium amount Marcus pays", "Decrease the death benefit paid to the beneficiary", "Have no effect on the total charged to Marcus"],
    answer: 1,
    explanation: "Policy fees are flat amounts added to the calculated premium to cover administrative costs."
  },
  {
    id: 33,
    lo: "4C",
    question: "Underwriting expenses are incurred by an insurer when:",
    options: ["A policy terminates due to a lapse", "A policy is issued", "The insurer pays a stockholder dividend", "A beneficiary files a death claim"],
    answer: 1,
    explanation: "Underwriting (assessing risk) happens at the start of the relationship."
  },
  {
    id: 34,
    lo: "4C",
    question: "Lapse is the termination of an insurance policy due to:",
    options: ["The insurer going out of business", "The death of the insured", "Nonpayment of premium", "The policy reaching its maturity date"],
    answer: 2,
    explanation: "Lapsing occurs specifically when a policyowner stops paying required premiums."
  },
  {
    id: 35,
    lo: "4E",
    question: "If interest is compounded quarterly instead of annually, the total interest earned over five years will be:",
    options: ["Less", "The same", "Zero", "Higher"],
    answer: 3,
    explanation: "More frequent compounding results in interest being earned on interest more often, leading to a higher total."
  },
  {
    id: 36,
    lo: "4F",
    question: "A financial model approximated the operation of real-world financial processes. What tool do companies typically use to perform these simulations?",
    options: ["A mortality table provided by the government only", "Historical annual reports from competitors", "A ledger book", "Product development software"],
    answer: 3,
    explanation: "Specialized software allows for complex mathematical simulations at scale."
  },
  {
    id: 37,
    lo: "4G",
    question: "Level premium systems are used to price many types of insurance. Which of the following is typically NOT priced with a level premium for several decades?",
    options: ["One-year renewable term insurance", "Whole life insurance", "Endowment insurance", "30-year term life insurance"],
    answer: 0,
    explanation: "One-year renewable term premiums usually increase every year as the insured's mortality risk increases."
  },
  {
    id: 38,
    lo: "4B",
    question: "If an insurer's premium rate for a block is $5.00 per $1,000, what is the annual premium for a $1,000,000 policy?",
    options: ["$500", "$5,000", "$1,000", "$50,000"],
    answer: 1,
    explanation: "$1,000,000 / $1,000 = 1,000 units. 1,000 × $5 = $5,000."
  },
  {
    id: 39,
    lo: "4D",
    question: "An insurer uses a unisex mortality table when:",
    options: ["It doesn't know the sex of any of its applicants", "It can only sell to one sex", "It wants to charge men more than women", "State law requires it or for specific types of group benefits"],
    answer: 3,
    explanation: "Unisex tables use a single set of rates for both males and females."
  },
  {
    id: 40,
    lo: "4E",
    question: "In the example of Kalinda Patel, she earned $1,250 in simple interest over 25 years on a $1,000 deposit. If it had been compound interest at the same rate, she would have earned roughly:",
    options: ["$500", "$3,000", "$2,386", "$1,250"],
    answer: 2,
    explanation: "The text notes the dramatic effect of compounding over long periods (25 years)."
  },
  {
    id: 41,
    lo: "4F",
    question: "A financial model runs a scenario where operating expenses are lower than expected. This scenario is __________ compared to the standard conservative pricing model.",
    options: ["More conservative", "Standard", "Less conservative", "Risk-free"],
    answer: 2,
    explanation: "Conservative models assume higher-than-expected expenses. Assuming lower expenses is an optimistic/non-conservative scenario."
  },
  {
    id: 42,
    lo: "4G",
    question: "What happens to the excess premiums collected in the early years of a level premium policy?",
    options: ["They are invested to help pay future claims", "They are returned to the policyowner at the end of each year", "The government takes them as taxes", "They are paid out immediately as agent bonuses"],
    answer: 0,
    explanation: "Investment of early-year surplus is critical to the level premium system's viability."
  },
  {
    id: 43,
    lo: "4A",
    question: "By law, an insurer's __________ must be at least equal to its policy reserve liabilities.",
    options: ["Total premiums collected this year", "Agent count", "Assets", "Investment earnings"],
    answer: 2,
    explanation: "Insurers must have the physical value (assets) to cover their future promises (reserves)."
  },
  {
    id: 44,
    lo: "4B",
    question: "Which variable is LEAST likely to be used by an actuary to define a block of policies for basic term life insurance pricing?",
    options: ["Insured's Weight/Height", "Insured's Tobacco use", "Insured's Sex", "Insured's Occupation"],
    answer: 3,
    explanation: "Blocks are first categorized by Age, Sex, and Risk (which includes health/tobacco), though occupation is a factor, basic blocks focus on the core demographics."
  },
  {
    id: 45,
    lo: "4C",
    question: "If mortality rates for a specific group are lower than anticipated, the cost of benefits for that group will:",
    options: ["Decrease", "Become zero", "Stay the same", "Increase"],
    answer: 0,
    explanation: "Fewer deaths = lower cost to provide insurance coverage."
  },
  {
    id: 46,
    lo: "4D",
    question: "The mortality rate per 1,000 is calculated by dividing:",
    options: ["Number Dying by Total Assets", "Number Living by Number Dying", "Number Dying by Number Living", "Total Premiums by Number Living"],
    answer: 2,
    explanation: "Rate = (Deaths in group / Members beginning group) × 1,000."
  },
  {
    id: 47,
    lo: "4E",
    question: "Interest is defined as a payment for:",
    options: ["An insurance policy", "An expert actuary's services", "The use of money", "The right to cancel a policy"],
    answer: 2,
    explanation: "Interest is the 'rent' paid for using capital."
  },
  {
    id: 48,
    lo: "4F",
    question: "Conservative financial models protect an insurer from which type of outcomes?",
    options: ["Government takeovers only", "Optimistic outcomes", "Stock market growth", "Unexpected negative outcomes"],
    answer: 3,
    explanation: "They provide a safety buffer against adverse reality."
  },
  {
    id: 49,
    lo: "4G",
    question: "In the later years of a level premium policy, the 'net amount at risk' for the insurer is supported by what that was previously built up?",
    options: ["The company's marketing budget", "New policies sold this year", "Policy reserves and investment earnings", "Direct government grants"],
    answer: 2,
    explanation: "The system relies on 'pre-funding' the later risk years."
  },
  {
    id: 50,
    lo: "4A",
    question: "The legal reserve system derives its name from:",
    options: ["The Supreme Court of the United States", "The law of large numbers", "Laws passed by the insurance companies themselves", "Legal requirements that apply to insurers in many jurisdictions"],
    answer: 3,
    explanation: "Jurisdictions mandate that insurers set aside these specific funds (legal reserves)."
  },
  {
    id: 51,
    lo: "4E",
    question: "If a company Collects $100,000 in premiums and earns a 5% rate of return in one year, how much total money does it have at year-end (assuming no expenses)?",
    options: ["$100,000", "$100,005", "$95,000", "$105,000"],
    answer: 3,
    explanation: "100k principal + 5k earnings = 105k."
  },
  {
    id: 52,
    lo: "4B",
    question: "A policyowner with a $100,000 policy pays $500 per year. The premium rate (per $1,000) is:",
    options: ["$5.00", "$50", "$0.50", "$500"],
    answer: 0,
    explanation: "$100,000 / $1,000 = 100 units. $500 / 100 = $5.00."
  },
  {
    id: 53,
    lo: "4B",
    question: "Does an actuary usually determine the 'exact' premium for every single individual person?",
    options: ["Yes, each is unique", "Only if the person is over 65", "Only for preferred risks", "No, they establish rates for blocks of policies"],
    answer: 3,
    explanation: "Actuaries price groups (blocks) based on similar characteristics."
  },
  {
    id: 54,
    lo: "4C",
    question: "Who is primarily responsible for ensuring insurance products are financially sound and profitable?",
    options: ["The customer service rep", "The marketing department", "The actuary", "The lodge members"],
    answer: 2,
    explanation: "Actuaries use math/modeling to ensure financial stability."
  },
  {
    id: 55,
    lo: "4D",
    question: "A composite mortality table might be used when an insurer:",
    options: ["Is required by law to separate sexes", "Does not have enough statistics to split users/nonusers", "Wants the most accurate pricing possible", "Wants to only sell to preferred risks"],
    answer: 1,
    explanation: "Composite tables are simpler but less precise than fully split tables."
  },
  {
    id: 56,
    lo: "4G",
    question: "Level premium policies allow coverage to remain __________ even when mortality risk is very high.",
    options: ["Affordable", "Both Affordable and Unchanged in price", "Illegal", "Unchanged in price"],
    answer: 1,
    explanation: "The system prevents premiums from becoming unaffordable in old age."
  },
  {
    id: 57,
    lo: "4E",
    question: "Interest earned on a loan is usually paid by the __________.",
    options: ["Agent", "Lender", "Borrower", "Insurer"],
    answer: 2,
    explanation: "The borrower pays for the use of the borrowed money."
  },
  {
    id: 58,
    lo: "4F",
    question: "An insurer projects that lapse rates will be 20% higher than expected. Is this a 'conservative' value?",
    options: ["Only if investment earnings are high", "Only if mortality is low", "Yes", "No"],
    answer: 2,
    explanation: "Higher lapses usually mean the company recovers fewer expenses, so assuming a higher rate is a conservative/safe approach."
  },
  {
    id: 59,
    lo: "4A",
    question: "Which premise is NOT a part of the legal reserve system?",
    options: ["Premiums should be unrelated to the actual risk", "Companies should collect money in advance", "Premiums should be directly related to the risk assumed", "Benefits should be specified in advance"],
    answer: 0,
    explanation: "Premiums *must* be related to risk in this system."
  },
  {
    id: 60,
    lo: "4C",
    question: "The money an insurer earns from corporate bonds and real estate is called:",
    options: ["Premium revenue", "Investment earnings", "Operating income", "Capital surplus"],
    answer: 1,
    explanation: "Income from invested assets is investment earnings."
  },
  {
    id: 61,
    lo: "4E",
    question: "In the example of Susan's 3-year simple interest loan, her principal remained at $2,000 every year for interest calculation. This is because:",
    options: ["Simple interest is only on the original principal", "She didn't charge interest in year 2", "The friend paid back half the principal early", "It was compound interest"],
    answer: 0,
    explanation: "Simple interest ignores prior interest earned when calculating the current period's interest."
  },
  {
    id: 62,
    lo: "4D",
    question: "Life expectancy and mortality rates vary widely by __________.",
    options: ["The color of the policy paper", "Policyowner's shoe size", "The agent's age", "Country"],
    answer: 3,
    explanation: "Socio-economic factors by country have a huge impact on life expectancy statistics."
  },
  {
    id: 63,
    lo: "4F",
    question: "What does use of conservative values provide to an insurance company?",
    options: ["A buffer against adverse results", "A marketing disadvantage", "Higher dividends for everyone immediately", "Lower mortality for its policyowners"],
    answer: 0,
    explanation: "The buffer ensures solvency even in poor economic or health climates."
  },
  {
    id: 64,
    lo: "4A",
    question: "Statutory reserves are required by law in __________.",
    options: ["No countries; it's a voluntary system", "Only for government-owned insurers", "The United States and many other jurisdictions", "Only the United Kingdom"],
    answer: 2,
    explanation: "It is a standard legal requirement globally."
  },
  {
    id: 65,
    lo: "4B",
    question: "If Marcus's policy dividends are used to reduce his premium, his 'Out-of-Pocket' cost will:",
    options: ["Decrease", "Become zero forever", "Increase", "Stay the same"],
    answer: 0,
    explanation: "Dividends provide a financial offset to the required premium payment."
  },
  {
    id: 66,
    lo: "4C",
    question: "Actuaries are experts in which field?",
    options: ["Advertising and Marketing", "Construction and Real Estate law", "Automobile repair and safety", "Financial risk management and mathematics of insurance"],
    answer: 3,
    explanation: "Actuaries apply high-level math to financial risks."
  },
  {
    id: 67,
    lo: "4D",
    question: "Gender-neutral pricing is also known as using __________ tables.",
    options: ["Unisex", "Specific", "Sex-distinct", "General"],
    answer: 0,
    explanation: "Unisex = One set of rates for all genders."
  },
  {
    id: 68,
    lo: "4E",
    question: "With compound interest, the beginning balance each period __________.",
    options: ["Stays the same", "Increases by the interest earned in the previous period", "Is set to zero", "Decreases"],
    answer: 1,
    explanation: "Interest 'accumulates' into the principal."
  },
  {
    id: 69,
    lo: "4G",
    question: "Why can an insurer invest premium dollars in the early policy years?",
    options: ["They must use them to pay agent commissions only", "They are technically company profit from day one", "The law allows them to gamble with customer money", "They are not needed immediately to pay claims"],
    answer: 3,
    explanation: "The surplus created in early years is a 'fund' for future claims."
  },
  {
    id: 70,
    lo: "4F",
    question: "Scenario simulations in financial models represent __________ set(s) of values.",
    options: ["Identical", "Wrong", "Different", "One"],
    answer: 2,
    explanation: "A wide variety of 'futures' are tested."
  },
  {
    id: 71,
    lo: "4E",
    question: "A 'Principal' of $5,000 at 10% interest for one year earns how much?",
    options: ["$50", "$100", "$500", "$5,000"],
    answer: 2,
    explanation: "$5,000 × 0.1 = $500."
  },
  {
    id: 72,
    lo: "4C",
    question: "An insurer's 'Product Development Software' simulates which time period?",
    options: ["The time a product is expected to remain in force", "The past 100 years", "Only the current month", "Exactly five years"],
    answer: 0,
    explanation: "Models look forward over the lifetime of the policy."
  },
  {
    id: 73,
    lo: "4D",
    question: "A Mortality Table shows the expected number dying during a year. This number is based on __________.",
    options: ["A random number generator", "Lapse rates from last year", "Observed historical experience", "Stock market results"],
    answer: 2,
    explanation: "Tables are built from millions of actual historical data points."
  },
  {
    id: 74,
    lo: "4C",
    question: "Commissions to producers are usually HIGHEST in which year?",
    options: ["The final year of the policy", "The initial (first) year", "Every year equally", "Year 10"],
    answer: 1,
    explanation: "Insurers pay high 'heaped' commissions to incentivize original sales."
  },
  {
    id: 75,
    lo: "4G",
    question: "If a young insured dies in year 1 of a level premium policy, the insurer __________.",
    options: ["Asks the beneficiary to wait 20 years", "Does not pay", "Only pays back the premium", "Pays the full death benefit"],
    answer: 3,
    explanation: "The death benefit promise is valid from day one."
  },
  {
    id: 76,
    lo: "4E",
    question: "Simple interest is often used for __________ loans.",
    options: ["Variable annuities", "Long-term mortgages", "Short-term consumer", "Whole life insurance"],
    answer: 2,
    explanation: "Simple interest is rare in long-term finance today."
  },
  {
    id: 77,
    lo: "4A",
    question: "Are reserves the largest portion of an insurer's total *assets*?",
    options: ["No, they are liabilities", "Only for stock insurers", "Only in Canada", "Yes"],
    answer: 0,
    explanation: "Reserves = What we owe (Liabilities)."
  },
  {
    id: 78,
    lo: "4C",
    question: "The cost of building computer systems for an insurance company is a(n) __________.",
    options: ["Cost of benefit", "Policy dividend", "Investment principal", "Operating expense"],
    answer: 3,
    explanation: "Infrastructure costs are operational expenses."
  },
  {
    id: 79,
    lo: "4D",
    question: "Do females generally pay LESS than males of the same age for life insurance?",
    options: ["Yes", "Only if they already have 5 children", "No", "Only if they smoke"],
    answer: 0,
    explanation: "Lower female mortality rates allow for lower premiums."
  },
  {
    id: 80,
    lo: "4F",
    question: "Conservative values might include a 'safety margin'. This means the surplus will likely __________ if actual results are average.",
    options: ["Disappear", "Become a liability", "Grow", "Stay the same"],
    answer: 2,
    explanation: "If you price for 'worse-than-average' and 'average' happens, you end up with extra money (profit/surplus)."
  },
  {
    id: 81,
    lo: "4B",
    question: "Premium Rate × Number of Units = __________.",
    options: ["Total Assets", "Operating Expense", "Interest Earned", "Annual Premium Amount"],
    answer: 3,
    explanation: "The core calculation for a customer's payment."
  },
  {
    id: 82,
    lo: "4C",
    question: "Higher mortality rates usually lead to __________ premium rates.",
    options: ["Lower", "Higher", "Unchanged", "Average"],
    answer: 1,
    explanation: "Increased risk of death = increased cost of insurance."
  },
  {
    id: 83,
    lo: "4D",
    question: "Probability that 11 out of 1,000 men die is expressed as what decimal?",
    options: ["0.11", "0.011", "1.1", "0.0011"],
    answer: 1,
    explanation: "11 / 1,000 = 0.011."
  },
  {
    id: 84,
    lo: "4E",
    question: "If an insurer buys stock for 100k and sells for 120k after one year, their rate of return is __________.",
    options: ["5%", "120%", "10%", "20%"],
    answer: 3,
    explanation: "(20k profit / 100k investment) = 20%."
  },
  {
    id: 85,
    lo: "4G",
    question: "Without a level premium system, insurance would become __________ for many seniors.",
    options: ["Cheaper", "Unaffordable", "Unnecessary", "Illegal"],
    answer: 1,
    explanation: "Pure mortality costs skyrocket in later years."
  },
  {
    id: 86,
    lo: "4A",
    question: "Are insurers required by law to maintain reserves at all times?",
    options: ["Yes", "Only for new companies", "No, only once a year", "Only if they are losing money"],
    answer: 0,
    explanation: "Compliance with reserve laws is constant."
  },
  {
    id: 87,
    lo: "4B",
    question: "A 'Coverage Unit' is almost always __________.",
    options: ["$100", "$1,000", "$1", "$10,000"],
    answer: 1,
    explanation: "Industry standard unit."
  },
  {
    id: 88,
    lo: "4C",
    question: "Lapses help or hurt the company's profitability in the early years?",
    options: ["Only help if they were preferred risks", "Hurt", "Help", "No impact"],
    answer: 1,
    explanation: "Early lapses prevent the company from recovering front-end costs."
  },
  {
    id: 89,
    lo: "4D",
    question: "Which country in sample Figure 4.2 has the HIGHEST female life expectancy?",
    options: ["Brazil", "United States", "Japan", "China"],
    answer: 2,
    explanation: "Japan (87) vs US (81) vs Brazil (79) etc."
  },
  {
    id: 90,
    lo: "4F",
    question: "If an actuary projects mortality that is TOO low, the resulting premiums will be __________.",
    options: ["Too high", "Inadequate", "Lapsed", "Excessive"],
    answer: 1,
    explanation: "Underpricing leads to insufficient funds to pay claims."
  },
  {
    id: 91,
    lo: "4G",
    question: "The graph shows term insurance costs as a __________ curve.",
    options: ["Straight horizontal", "Straight downward", "Fluctuating", "Steadily upward"],
    answer: 3,
    explanation: "Reflects the climbing mortality rate."
  },
  {
    id: 92,
    lo: "4E",
    question: "Collecting dividends on stock is a form of __________.",
    options: ["Premium", "Expense", "Investment earnings", "Liability"],
    answer: 2,
    explanation: "Income from ownership of stock."
  },
  {
    id: 93,
    lo: "4C",
    question: "Operating expenses spend LESS than benefit payments usually?",
    options: ["They spend the same", "Yes, spend considerably more on benefits", "No, expenses are usually double the benefits", "Depends on the stock market"],
    answer: 1,
    explanation: "Primary purpose is claims; ops are a smaller (though significant) slice."
  },
  {
    id: 94,
    lo: "4A",
    question: "Reserves are based on an insurer's __________ of needs.",
    options: ["Guarantee", "Certainty", "Estimate", "Wish"],
    answer: 2,
    explanation: "Actuaries Use statistics to provide the best estimate."
  },
  {
    id: 95,
    lo: "4B",
    question: "Age and Sex determine the __________ mortality risk of a group.",
    options: ["Optional", "Primary", "Partial", "Entire"],
    answer: 1,
    explanation: "Demographics are the biggest single predictor of mortality."
  },
  {
    id: 96,
    lo: "4D",
    question: "Are univariate tables common?",
    options: ["Yes, for one gender", "Only for annuities", "Only for children", "No, they usually use sex-distinct or unisex"],
    answer: 3,
    explanation: "Unisex and Sex-distinct are the two primary types mentioned."
  },
  {
    id: 97,
    lo: "4E",
    question: "The principle sum of money originally invested is called the __________.",
    options: ["Premium", "Principal", "Dividend", "Margin"],
    answer: 1,
    explanation: "The base amount of an investment."
  },
  {
    id: 98,
    lo: "4G",
    question: "Mortality rates at age 80 are __________ than age 30.",
    options: ["Lower", "Zero", "The same", "Much higher"],
    answer: 3,
    explanation: "Death becomes more statistically certain with age."
  },
  {
    id: 99,
    lo: "4F",
    question: "Financial models help simulate 'What if' scenarios. This is called __________ analysis.",
    options: ["Fixed", "Backward", "Sensitivity (Scenario)", "Unnecessary"],
    answer: 2,
    explanation: "Testing sensitivity to changed variables."
  },
  {
    id: 100,
    lo: "Intro",
    question: "This chapter focused exclusively on which type of products?",
    options: ["Health insurance", "Life insurance", "Automobile insurance", "Mutual fund products"],
    answer: 1,
    explanation: "The text specifies: 'Unlike previous chapters... this chapter focuses on life insurance products.'"
  }
];
