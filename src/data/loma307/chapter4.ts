import { Question } from '../../types';

export const chapter4Questions: Question[] = [
  // --- LO 4A: The Time Value of Money Concept & Principles (Q1 - Q10) ---
  {
    id: 1,
    lo: "LO 4A Define the time value of money.",
    question: "The time value of money concept fundamentally holds that:",
    options: [
      "The value of a sum of money changes over time as a result of the effects of interest and earning opportunities",
      "Money maintains a fixed purchasing power perpetually regardless of inflation or interest rates",
      "A dollar received ten years in the future is inherently more valuable than a dollar received today",
      "All financial assets must double in value every seven years under statutory law"
    ],
    answer: 0,
    explanation: "The time value of money concept establishes that a sum of money changes in value over time due to the ability to earn interest. A dollar today is worth more than a dollar in the future because today's dollar can be invested to generate earnings."
  },
  {
    id: 2,
    lo: "LO 4A Define the time value of money.",
    question: "Why do rational individuals and institutional investors prefer receiving $1,000 today rather than receiving $1,000 five years from today?",
    options: [
      "Because the sooner money is received, the more time and opportunity that money has to be invested and generate interest earnings",
      "Because money received today is exempt from all federal and state income taxes",
      "Because five-year future payments are legally classified as unearned liabilities",
      "Because money held in cash depreciates at a guaranteed compound rate of 10% annually"
    ],
    answer: 0,
    explanation: "Receiving money sooner provides the opportunity to invest it immediately, earning compound interest or investment returns over the five-year period."
  },
  {
    id: 3,
    lo: "LO 4A Define the time value of money.",
    question: "In making corporate financial decisions, the time value of money allows insurance companies to analyze the relationships among:",
    options: [
      "Payment cash flow amounts, interest (or discount) rates, and time periods",
      "Employee headcount, marketing commissions, and regulatory filing fees",
      "The number of board meetings, mortality rates, and reinsurance cessions",
      "State premium tax brackets and municipal zoning laws"
    ],
    answer: 0,
    explanation: "Time value of money calculations systematically link payment amounts, interest rates (rates of return), and the length of time over which funds are invested or discounted."
  },
  {
    id: 4,
    lo: "LO 4A Define the time value of money.",
    question: "Why do life insurance companies depend to a unique degree on accurate time value of money calculations?",
    options: [
      "Because life insurance and annuity products involve receiving premiums today in exchange for a legally binding contractual promise to pay benefits in the future",
      "Because life insurers are required by law to pay simple interest on all term insurance policies",
      "Because the NAIC prohibits insurers from investing in fixed-income debt securities",
      "Because insurance companies do not maintain contractual reserves for claim payments"
    ],
    answer: 0,
    explanation: "Life insurers collect premium revenue upfront and invest those funds over decades to pay future guaranteed death, health, or retirement annuity obligations, making TVM essential to solvency and pricing."
  },
  {
    id: 5,
    lo: "LO 4A Define the time value of money.",
    question: "An insurance company uses time value of money analysis to make all of the following strategic corporate decisions EXCEPT:",
    options: [
      "Selecting the font typography for annual policyholder statement mailings",
      "Deciding whether to introduce a new life insurance or annuity product",
      "Evaluating whether to purchase or lease commercial office equipment and real estate",
      "Determining fair purchase prices and required yields for corporate bond portfolios"
    ],
    answer: 0,
    explanation: "Time value of money is applied to financial decisions like product pricing, capital budgeting (leasing vs. buying), real estate acquisitions, and bond valuation, not non-financial graphic design choices."
  },
  {
    id: 6,
    lo: "LO 4A Time Value of Money Scenario.",
    question: "Joaquin (age 25) invests $1,000 in a retirement account earning 7.2% compounded annually, while his colleague Marcus waits until age 35 to invest $1,000 in the exact same account. By age 65, Joaquin's investment will have grown to $16,000, whereas Marcus's investment will only reach $8,000. This disparity demonstrates that:",
    options: [
      "Delaying an investment results in the permanent loss of compound interest earnings that would have accumulated during the delayed years",
      "The Rule of 72 applies only to individuals under age 30",
      "Marcus's account was subjected to an ordinary annuity deduction",
      "Joaquin's investment was protected against inflation risk by state regulators"
    ],
    answer: 0,
    explanation: "Because Joaquin invested 10 years earlier, his money had an extra doubling period (4 doublings to $16,000 vs. Marcus's 3 doublings to $8,000), illustrating the cost of waiting in TVM."
  },
  {
    id: 7,
    lo: "LO 4A Time Value of Money Scenario.",
    question: "From an insurer's perspective, why is a level $600 premium paid in Year 1 worth significantly more than a level $600 premium paid in Year 20 of a permanent life insurance contract?",
    options: [
      "The Year 1 premium can be invested immediately to earn interest across all 20 years, and it is certain, whereas the Year 20 premium earns interest for fewer periods and is subject to lapse or mortality risk",
      "Year 20 premiums are legally classified as uncollectible bad debts under statutory accounting",
      "The insurer must refund 100% of Year 20 premiums to the policyholder's beneficiaries",
      "Inflation increases the nominal dollar value of Year 1 premiums while reducing their contractual reserve status"
    ],
    answer: 0,
    explanation: "Earlier premiums generate compound investment income over many compounding periods and are certain, whereas future premiums have shorter compounding horizons and might never be paid due to lapses or deaths."
  },
  {
    id: 8,
    lo: "LO 4A Time Value of Money Scenario.",
    question: "Marc and Stacy are shopping for a home and know they can afford monthly payments of $2,200 for 30 years at a 4.5% interest rate. In time value of money terminology, calculating the maximum loan principal amount they can borrow today is an application of:",
    options: [
      "Present value (PV), which determines the current lump-sum borrowing capacity supported by the stream of future mortgage payments",
      "Future value interest factor for an annuity due (FVIFA)",
      "Simple interest rate amortized multiplication",
      "Nominal equity risk premium analysis"
    ],
    answer: 0,
    explanation: "The maximum amount a borrower can borrow today based on a stream of future affordable payments is the Present Value (PV) of that payment stream."
  },
  {
    id: 9,
    lo: "LO 4A Define the time value of money.",
    question: "Which of the following components represents the core factors that determine how much an investment will grow over time?",
    options: [
      "The initial principal invested, the interest rate (rate of return), whether interest is simple or compound, and the length of the investment period",
      "The credit rating of the depository institution and the statutory reserve percentage only",
      "The number of independent insurance agents marketing the product",
      "The physical weight of the paper certificates held in vault custody"
    ],
    answer: 0,
    explanation: "The ultimate value of an investment depends on: (1) principal amount, (2) interest rate, (3) simple vs. compound interest, and (4) the investment period."
  },
  {
    id: 10,
    lo: "LO 4A Define the time value of money.",
    question: "In the context of financial mathematics and insurance accounting, the terms 'rate of return' and 'interest rate' are generally treated as:",
    options: [
      "Equivalent percentages expressing the earnings generated as a proportion of the original amount invested",
      "Mutually exclusive concepts where interest rate applies only to equities and rate of return applies only to cash",
      "Opposite metrics whose sum must equal 100%",
      "Statutory penalties assessed against underperforming master limited partnerships"
    ],
    answer: 0,
    explanation: "Both 'rate of return' and 'interest rate' express investment earnings as a percentage of the original principal invested."
  },

  // --- LO 4B: Simple vs. Compound Interest & Calculations (Q11 - Q24) ---
  {
    id: 11,
    lo: "LO 4B Describe the difference between simple interest and compound interest and be able to calculate interest earnings using each type of interest.",
    question: "Simple interest is formally defined as interest that is calculated and applied:",
    options: [
      "Only to the original principal amount of an investment throughout its entire term",
      "To both the original principal and all previously accumulated interest earnings",
      "Exclusively on municipal bond issues that mature in less than 90 days",
      "To the fair market value of equity shares at the close of every trading day"
    ],
    answer: 0,
    explanation: "Simple interest applies solely to the initial principal amount; accumulated interest from previous periods does not earn interest in subsequent periods."
  },
  {
    id: 12,
    lo: "LO 4B Describe the difference between simple interest and compound interest and be able to calculate interest earnings using each type of interest.",
    question: "Compound interest is formally defined as interest earned on:",
    options: [
      "Both the original principal amount and all accumulated interest from prior periods",
      "The principal amount minus annual operational expense charges only",
      "Short-term non-marketable Treasury bills exclusively",
      "The appreciation of agricultural real estate holdings before harvest"
    ],
    answer: 0,
    explanation: "Compound interest calculates earnings on the updated total balance (original principal plus accumulated past interest), creating exponential growth over time."
  },
  {
    id: 13,
    lo: "LO 4B Describe the difference between simple interest and compound interest and be able to calculate interest earnings using each type of interest.",
    question: "Little Insurance Company deposits $1,000 into an account earning 5% simple annual interest for 10 years. How much interest is earned in Year 1, and what is the total balance at the end of Year 10?",
    options: [
      "Year 1 interest = $50; Total balance at Year 10 = $1,500",
      "Year 1 interest = $50; Total balance at Year 10 = $1,628.90",
      "Year 1 interest = $5; Total balance at Year 10 = $1,050",
      "Year 1 interest = $100; Total balance at Year 10 = $2,000"
    ],
    answer: 0,
    explanation: "With simple interest: Annual interest = $1,000 × 0.05 = $50 each year. Over 10 years, total interest earned = 10 × $50 = $500. Total ending balance = $1,000 + $500 = $1,500."
  },
  {
    id: 14,
    lo: "LO 4B Describe the difference between simple interest and compound interest and be able to calculate interest earnings using each type of interest.",
    question: "If Little Insurance Company deposits $1,000 into an account earning 5% interest compounded annually for 10 years, the ending balance will be $1,628.90. What accounts for the $128.90 difference compared to simple interest?",
    options: [
      "The compounding effect, which generates interest on previously earned and accumulated interest",
      "A statutory bonus dividend paid by the state guaranty association",
      "An increase in the nominal risk-free Treasury rate during Year 5",
      "A reduction in the insurer's minimum contractual reserve liabilities"
    ],
    answer: 0,
    explanation: "Under compounding, each year's interest is added to the balance, so subsequent interest is calculated on a progressively larger base ($1,628.90 vs. $1,500.00 = $128.90 difference)."
  },
  {
    id: 15,
    lo: "LO 4B Describe the difference between simple interest and compound interest and be able to calculate interest earnings using each type of interest.",
    question: "An investor places $5,000 in a savings certificate that pays 6% simple annual interest. How much total interest will the investor accumulate over a 4-year holding period?",
    options: [
      "$1,200",
      "$1,312.48",
      "$300",
      "$6,200"
    ],
    answer: 0,
    explanation: "Simple interest = Principal × Interest Rate × Number of Periods = $5,000 × 0.06 × 4 = $1,200."
  },
  {
    id: 16,
    lo: "LO 4B Describe the difference between simple interest and compound interest and be able to calculate interest earnings using each type of interest.",
    question: "An investor deposits $2,000 into a fixed annuity earning 4% interest compounded annually. What is the account balance at the end of Year 2?",
    options: [
      "$2,163.20",
      "$2,160.00",
      "$2,080.00",
      "$2,240.00"
    ],
    answer: 0,
    explanation: "Year 1 ending balance: $2,000 × 1.04 = $2,080. Year 2 ending balance: $2,080 × 1.04 = $2,163.20 (or $2,000 × 1.04² = $2,163.20)."
  },
  {
    id: 17,
    lo: "LO 4B Describe the difference between simple interest and compound interest and be able to calculate interest earnings using each type of interest.",
    question: "If an investor earns $180 of interest on a $3,000 one-year deposit, what is the annual interest rate earned?",
    options: [
      "6.0%",
      "5.4%",
      "16.6%",
      "0.06%"
    ],
    answer: 0,
    explanation: "Interest Rate = Interest Earned ÷ Principal = $180 ÷ $3,000 = 0.06, or 6.0%."
  },
  {
    id: 18,
    lo: "LO 4B Describe the difference between simple interest and compound interest and be able to calculate interest earnings using each type of interest.",
    question: "Why is the annual dollar amount of interest earned constant under simple interest, but increasing under compound interest?",
    options: [
      "Under simple interest, the principal base remains constant, whereas under compound interest, the base expands each period as prior earnings are added to principal",
      "Under compound interest, the statutory interest rate increases by 1% each year automatically",
      "Under simple interest, the government deducts mandatory administrative fees at the end of each period",
      "Under compound interest, the investor is required to make additional cash contributions every year"
    ],
    answer: 0,
    explanation: "Simple interest applies the rate to the static original principal each year ($50/yr), whereas compound interest applies the rate to a growing balance ($50, $52.50, $55.13, etc.)."
  },
  {
    id: 19,
    lo: "LO 4B Simple vs. Compound Interest Scenario.",
    question: "Apex Life holds two $100,000 investments for 5 years. Investment X pays 5% simple annual interest, while Investment Y pays 5% interest compounded annually. At the end of Year 5, how much more total interest has Investment Y earned than Investment X?",
    options: [
      "$2,628.16",
      "$25,000.00",
      "$1,500.00",
      "$0.00"
    ],
    answer: 0,
    explanation: "Investment X total interest = $100,000 × 0.05 × 5 = $25,000. Investment Y future value = $100,000 × (1.05)⁵ = $127,628.16 (total interest = $27,628.16). Difference = $27,628.16 - $25,000 = $2,628.16."
  },
  {
    id: 20,
    lo: "LO 4B Simple vs. Compound Interest Scenario.",
    question: "In calculating interest for an asset accumulation product, the beginning-of-year balance in Year 3 is $1,102.50 and the annual compound crediting rate is 5%. What is the interest earned during Year 3 (rounded to the nearest cent)?",
    options: [
      "$55.13",
      "$50.00",
      "$52.50",
      "$57.88"
    ],
    answer: 0,
    explanation: "Year 3 interest = Beginning Balance × 5% = $1,102.50 × 0.05 = $55.125, which rounds to $55.13."
  },
  {
    id: 21,
    lo: "LO 4B Simple vs. Compound Interest Scenario.",
    question: "What is the end-of-year balance at the end of Year 3 for the deposit in Question 20?",
    options: [
      "$1,157.63",
      "$1,150.00",
      "$1,215.51",
      "$1,102.50"
    ],
    answer: 0,
    explanation: "Ending balance = Beginning balance + Interest earned = $1,102.50 + $55.13 = $1,157.63."
  },
  {
    id: 22,
    lo: "LO 4B Define principal and interest rate.",
    question: "In financial calculations, how must a stated interest rate of 4.25% be expressed when multiplying with the principal amount?",
    options: [
      "0.0425",
      "4.25",
      "0.425",
      "0.00425"
    ],
    answer: 0,
    explanation: "To convert a percentage into decimal form for mathematical calculations, divide by 100: 4.25% ÷ 100 = 0.0425."
  },
  {
    id: 23,
    lo: "LO 4B Simple vs. Compound Interest Review.",
    question: "Most financial contracts, bank savings deposits, and life insurer asset accumulation products credit interest based on:",
    options: [
      "Compound interest",
      "Simple interest exclusively",
      "Zero-coupon discount margins",
      "Linear non-accrual schedules"
    ],
    answer: 0,
    explanation: "Virtually all commercial asset accumulation contracts, annuities, and savings vehicles operate on compound interest."
  },
  {
    id: 24,
    lo: "LO 4B Simple vs. Compound Interest Review.",
    question: "The formula to calculate the total amount of simple interest ($I$) earned over multiple periods ($n$) on principal ($P$) at an annual rate ($i$) is:",
    options: [
      "I = P × i × n",
      "I = P × (1 + i)ⁿ",
      "I = P ÷ (i × n)",
      "I = (P + i) ÷ n"
    ],
    answer: 0,
    explanation: "Simple interest total earnings formula is $I = P \times i \times n$."
  },

  // --- LO 4C: Nominal vs. Effective Interest Rates & Compounding Frequency (Q25 - Q38) ---
  {
    id: 25,
    lo: "LO 4C Distinguish between a nominal and an effective interest rate.",
    question: "A nominal interest rate is best defined as an interest rate that:",
    options: [
      "Is quoted 'in name only' without taking into account the effects of compounding frequency, inflation, or fees",
      "Includes all compounding effects calculated on a continuous daily basis",
      "Is guaranteed to equal the yield on 30-year sovereign government debt",
      "Is adjusted downward to reflect state premium excise taxes"
    ],
    answer: 0,
    explanation: "Nominal means 'in name only'—it is the stated annual interest rate quoted before considering the frequency of compounding during the year."
  },
  {
    id: 26,
    lo: "LO 4C Distinguish between a nominal and an effective interest rate.",
    question: "An effective interest rate is formally defined as an interest rate that:",
    options: [
      "Includes and reflects the true financial impact of compounding over the course of one full year",
      "Excludes all interest earned on the original principal balance",
      "Is fixed permanently by the Federal Open Market Committee",
      "Applies only to unamortized commercial mortgages"
    ],
    answer: 0,
    explanation: "The effective interest rate (or annual percentage yield) reflects the actual total interest rate earned when interest is compounded more frequently than once per year."
  },
  {
    id: 27,
    lo: "LO 4C Distinguish between a nominal and an effective interest rate.",
    question: "When interest is compounded more frequently than once per year (e.g., semiannually, quarterly, monthly, weekly), what is the relationship between the effective interest rate and the nominal interest rate?",
    options: [
      "The effective interest rate is strictly greater than the nominal interest rate",
      "The effective interest rate is strictly less than the nominal interest rate",
      "The effective interest rate is always exactly equal to the nominal interest rate",
      "The effective interest rate drops to zero due to transaction fees"
    ],
    answer: 0,
    explanation: "More frequent compounding generates interest on interest within the year, making the effective annual rate higher than the stated nominal rate."
  },
  {
    id: 28,
    lo: "LO 4C Distinguish between a nominal and an effective interest rate.",
    question: "What is the general mathematical formula for calculating the effective interest rate given a nominal annual interest rate and $n$ compounding periods per year?",
    options: [
      "Effective interest rate = [1 + (nominal interest rate / n)]ⁿ - 1",
      "Effective interest rate = [1 + (nominal interest rate × n)] / n",
      "Effective interest rate = (nominal interest rate / n) × 100",
      "Effective interest rate = [1 - (nominal interest rate / n)]ⁿ + 1"
    ],
    answer: 0,
    explanation: "The formula is: $\\text{Effective Rate} = (1 + \\frac{\\text{nominal rate}}{n})^n - 1$."
  },
  {
    id: 29,
    lo: "LO 4C Distinguish between a nominal and an effective interest rate.",
    question: "An investment account offers a nominal interest rate of 5.0% compounded monthly ($n = 12$). What is the effective annual interest rate (rounded to five decimal places)?",
    options: [
      "5.11619%",
      "5.00000%",
      "5.12458%",
      "6.00000%"
    ],
    answer: 0,
    explanation: "Effective rate = $(1 + \\frac{0.05}{12})^{12} - 1 = (1 + 0.0041667)^{12} - 1 = 1.0511619 - 1 = 0.0511619$, or 5.11619%."
  },
  {
    id: 30,
    lo: "LO 4C Distinguish between a nominal and an effective interest rate.",
    question: "An investment account offers a nominal interest rate of 5.0% compounded weekly ($n = 52$). What is the effective annual interest rate (rounded to five decimal places)?",
    options: [
      "5.12458%",
      "5.11619%",
      "5.00000%",
      "5.26000%"
    ],
    answer: 0,
    explanation: "Effective rate = $(1 + \\frac{0.05}{52})^{52} - 1 = (1 + 0.0009615)^{52} - 1 = 1.0512458 - 1 = 0.0512458$, or 5.12458%."
  },
  {
    id: 31,
    lo: "LO 4C Distinguish between a nominal and an effective interest rate.",
    question: "As the frequency of compounding increases for a constant nominal interest rate (e.g., moving from annual to quarterly to monthly to weekly to daily):",
    options: [
      "The total dollar amount of interest earned increases and the effective interest rate increases",
      "The effective interest rate decreases toward zero",
      "The nominal interest rate increases automatically by law",
      "The present value of future lump-sum cash flows increases"
    ],
    answer: 0,
    explanation: "Increasing compounding frequency allows interest to be credited sooner and compounded more times, increasing both total interest earned and the effective rate."
  },
  {
    id: 32,
    lo: "LO 4C Compounding Frequency Scenario.",
    question: "Little Insurance Company invests $1,000,000 in Account A (5% compounded annually), Account B (5% compounded monthly, effective rate 5.11618%), and Account C (5% compounded weekly, effective rate 5.12458%). After one year, how much more interest does Account B earn compared to Account A?",
    options: [
      "$1,161.80",
      "$1,245.80",
      "$50,000.00",
      "$116.18"
    ],
    answer: 0,
    explanation: "Account A earnings = $1,000,000 × 0.05 = $50,000.00. Account B earnings = $1,000,000 × 0.0511618 = $51,161.80. Difference = $51,161.80 - $50,000.00 = $1,161.80."
  },
  {
    id: 33,
    lo: "LO 4C Compounding Frequency Scenario.",
    question: "In the same scenario as Question 32, how much more interest does Account C (compounded weekly) earn compared to Account A (compounded annually)?",
    options: [
      "$1,245.80",
      "$1,161.80",
      "$51,245.80",
      "$84.00"
    ],
    answer: 0,
    explanation: "Account C earnings = $1,000,000 × 0.0512458 = $51,245.80. Account A earnings = $50,000.00. Difference = $51,245.80 - $50,000.00 = $1,245.80."
  },
  {
    id: 34,
    lo: "LO 4C Distinguish between a nominal and an effective interest rate.",
    question: "When an investment compounds interest once per year ($n = 1$), the relationship between the nominal interest rate and the effective interest rate is that:",
    options: [
      "The effective interest rate is exactly equal to the nominal interest rate",
      "The effective interest rate is greater by 1%",
      "The nominal interest rate cannot be determined",
      "The effective interest rate is undefined"
    ],
    answer: 0,
    explanation: "With annual compounding ($n = 1$), $(1 + i/1)^1 - 1 = i$, meaning nominal and effective interest rates are identical."
  },
  {
    id: 35,
    lo: "LO 4C Distinguish between a nominal and an effective interest rate.",
    question: "A bank advertises a 6% nominal annual rate on certificate of deposit accounts. If interest is compounded quarterly ($n = 4$), what is the periodic interest rate applied each quarter?",
    options: [
      "1.50%",
      "6.00%",
      "2.00%",
      "0.50%"
    ],
    answer: 0,
    explanation: "Periodic interest rate per quarter = Nominal Annual Rate ÷ Number of Quarters = 6.0% ÷ 4 = 1.50%."
  },
  {
    id: 36,
    lo: "LO 4C Distinguish between a nominal and an effective interest rate.",
    question: "For a 6% nominal rate compounded quarterly ($n = 4$), what is the effective annual interest rate?",
    options: [
      "6.136%",
      "6.000%",
      "6.240%",
      "5.850%"
    ],
    answer: 0,
    explanation: "Effective rate = $(1 + 0.06/4)^4 - 1 = (1.015)^4 - 1 = 1.06136355 - 1 = 0.06136$, or 6.136%."
  },
  {
    id: 37,
    lo: "LO 4C Investment Period Concepts.",
    question: "How does the length of the investment period affect the growth of funds subject to compound interest?",
    options: [
      "The longer the investment period, the greater the compounding effect and the larger the ultimate total value of the investment",
      "The length of the investment period has zero mathematical effect on compound growth",
      "Longer investment periods cause compound interest to revert to simple interest",
      "Longer investment periods reduce future value due to exponential depreciation"
    ],
    answer: 0,
    explanation: "Because compound interest builds upon previously accumulated earnings, extending the investment period accelerates exponential balance growth."
  },
  {
    id: 38,
    lo: "LO 4C Compounding Frequency Review.",
    question: "Which of the following compounding frequencies produces the highest effective annual interest rate for a stated 4.0% nominal rate?",
    options: [
      "Daily compounding (365 times per year)",
      "Monthly compounding (12 times per year)",
      "Quarterly compounding (4 times per year)",
      "Semiannual compounding (2 times per year)"
    ],
    answer: 0,
    explanation: "Higher compounding frequency increases interest on interest, so daily compounding yields the highest effective interest rate among the choices."
  },

  // --- LO 4D: The Rule of 72 & Doubling Calculations (Q39 - Q48) ---
  {
    id: 39,
    lo: "LO 4D Explain the Rule of 72 and how it is used.",
    question: "The Rule of 72 is a practical financial convention (heuristic) used by investors to estimate:",
    options: [
      "The approximate number of years required for a principal sum to double at a specified compound annual interest rate",
      "The statutory mortality rate of life insurance policyholders aged 72 and older",
      "The exact percentage of corporate bonds that default during an economic recession",
      "The precise present value discount factor for an ordinary annuity due"
    ],
    answer: 0,
    explanation: "The Rule of 72 is a mental math heuristic that estimates how many years it takes for an investment to double under annual compound interest."
  },
  {
    id: 40,
    lo: "LO 4D Explain the Rule of 72 and how it is used.",
    question: "What is the standard formula for finding the approximate number of years to double an investment using the Rule of 72?",
    options: [
      "Years to double = 72 ÷ Annual interest rate (in percent)",
      "Years to double = 72 × Annual interest rate",
      "Years to double = Annual interest rate ÷ 72",
      "Years to double = 72 ÷ (1 + Annual interest rate)"
    ],
    answer: 0,
    explanation: "Formula: $\\text{Years to double} = 72 / \\text{Interest Rate}$ (where the interest rate is expressed as a whole percentage number, e.g., 6 for 6%)."
  },
  {
    id: 41,
    lo: "LO 4D Explain the Rule of 72 and how it is used.",
    question: "If an insurance company deposits funds into an account earning 5.0% interest compounded annually, approximately how many years will it take for the investment to double?",
    options: [
      "14.4 years",
      "20.0 years",
      "10.0 years",
      "7.2 years"
    ],
    answer: 0,
    explanation: "Years to double = 72 ÷ 5 = 14.4 years."
  },
  {
    id: 42,
    lo: "LO 4D Explain the Rule of 72 and how it is used.",
    question: "Little Insurance Company plans to expand operations and needs to double a sum of money in exactly 9 years. According to the Rule of 72, what annual compound interest rate must the investment earn?",
    options: [
      "8.0%",
      "6.0%",
      "9.0%",
      "12.5%"
    ],
    answer: 0,
    explanation: "Required Interest Rate = 72 ÷ Years to double = 72 ÷ 9 = 8.0%."
  },
  {
    id: 43,
    lo: "LO 4D Explain the Rule of 72 and how it is used.",
    question: "According to the Rule of 72, an investment earning 6% interest compounded annually will double in approximately how many years?",
    options: [
      "12.0 years",
      "6.0 years",
      "18.0 years",
      "14.4 years"
    ],
    answer: 0,
    explanation: "Years to double = 72 ÷ 6 = 12.0 years."
  },
  {
    id: 44,
    lo: "LO 4D Explain the Rule of 72 and how it is used.",
    question: "According to the Rule of 72, an investment earning 10% interest compounded annually will double in approximately:",
    options: [
      "7.2 years",
      "10.0 years",
      "5.0 years",
      "8.0 years"
    ],
    answer: 0,
    explanation: "Years to double = 72 ÷ 10 = 7.2 years."
  },
  {
    id: 45,
    lo: "LO 4D Explain the Rule of 72 and how it is used.",
    question: "According to the Rule of 72, if an investment earns 3% compounded annually, how long will it take to double in value?",
    options: [
      "24.0 years",
      "36.0 years",
      "21.6 years",
      "18.0 years"
    ],
    answer: 0,
    explanation: "Years to double = 72 ÷ 3 = 24.0 years."
  },
  {
    id: 46,
    lo: "LO 4D Rule of 72 Multi-Period Scenario.",
    question: "An investor deposits $5,000 in an account earning 8% compounded annually. According to the Rule of 72, what will the approximate value of this investment be after 27 years?",
    options: [
      "$40,000",
      "$20,000",
      "$15,000",
      "$80,000"
    ],
    answer: 0,
    explanation: "Years to double = 72 ÷ 8 = 9 years. In 27 years, the investment doubles 3 times ($27 ÷ 9 = 3$ periods): Year 9 = $10,000; Year 18 = $20,000; Year 27 = $40,000."
  },
  {
    id: 47,
    lo: "LO 4D Explain the Rule of 72 and how it is used.",
    question: "Why must financial analysts treat the Rule of 72 strictly as a rule of thumb (heuristic) rather than an exact predictive calculation in real-world insurance operations?",
    options: [
      "Because real-world investment results are affected by reinvestment-rate risk, cash flow timing unpredictability, defaults, inflation, and debt amortization",
      "Because the Rule of 72 is legally banned by the Securities and Exchange Commission",
      "Because the Rule of 72 is mathematically valid only for simple interest loans",
      "Because life insurance contracts are prohibited from earning compound interest"
    ],
    answer: 0,
    explanation: "The Rule of 72 provides a quick mental estimate under constant annual compounding, but real-world investments face variable rates, cash flow changes, reinvestment risk, and fees."
  },
  {
    id: 48,
    lo: "LO 4D Rule of 72 Table Match.",
    question: "Which of the following pairs correctly matches the annual compound interest rate with its approximate doubling period under the Rule of 72?",
    options: [
      "4% interest → 18.0 years; 8% interest → 9.0 years; 9% interest → 8.0 years",
      "2% interest → 72.0 years; 4% interest → 24.0 years; 6% interest → 18.0 years",
      "1% interest → 36.0 years; 5% interest → 10.0 years; 10% interest → 5.0 years",
      "3% interest → 12.0 years; 6% interest → 6.0 years; 12% interest → 3.0 years"
    ],
    answer: 0,
    explanation: "72/4 = 18.0 yrs; 72/8 = 9.0 yrs; 72/9 = 8.0 yrs. All three match the Rule of 72."
  },

  // --- LO 4E: Future Value Calculations & Insurer Applications (Q49 - Q62) ---
  {
    id: 49,
    lo: "LO 4E Perform future value calculations and describe insurer applications of future value.",
    question: "The future value (FV) of a sum of money is formally defined as:",
    options: [
      "The amount that an original sum is expected to be worth at a specified future date, given a specified interest rate",
      "The current purchasing power of a future payment after subtracting inflation",
      "The initial principal amount invested before any interest has accrued",
      "The contractual surrender charge assessed during the first policy year"
    ],
    answer: 0,
    explanation: "Future value (FV) represents the accumulated value of an invested principal plus all interest earned over time at a specified rate."
  },
  {
    id: 50,
    lo: "LO 4E Perform future value calculations and describe insurer applications of future value.",
    question: "What is the formula for calculating the future value (FV) of a single amount for one compounding period given present value (PV) and interest rate (i)?",
    options: [
      "FV = PV × (1 + i)",
      "FV = PV ÷ (1 + i)",
      "FV = PV + (1 + i)",
      "FV = (PV × i) ÷ 100"
    ],
    answer: 0,
    explanation: "For a single period: $\\text{FV} = \\text{PV} + (\\text{PV} \\times i) = \\text{PV} \\times (1 + i)$."
  },
  {
    id: 51,
    lo: "LO 4E Perform future value calculations and describe insurer applications of future value.",
    question: "Little Insurance Company deposits $1,000 into an investment account earning 5% interest compounded annually. What is the future value at the end of Year 1?",
    options: [
      "$1,050.00",
      "$1,005.00",
      "$1,500.00",
      "$1,102.50"
    ],
    answer: 0,
    explanation: "FV = $1,000 × (1 + 0.05) = $1,000 × 1.05 = $1,050.00."
  },
  {
    id: 52,
    lo: "LO 4E Perform future value calculations and describe insurer applications of future value.",
    question: "What is the general mathematical formula for calculating the future value (FV) of a single amount invested for $n$ compounding periods at interest rate $i$?",
    options: [
      "FV = PV × (1 + i)ⁿ",
      "FV = PV ÷ (1 + i)ⁿ",
      "FV = PV × (1 + i × n)",
      "FV = PV + (i)ⁿ"
    ],
    answer: 0,
    explanation: "The multi-period future value formula is $\\text{FV} = \\text{PV} \\times (1 + i)^n$."
  },
  {
    id: 53,
    lo: "LO 4E Perform future value calculations and describe insurer applications of future value.",
    question: "Little Insurance Company deposits $1,000 into an account earning 5% compounded annually for two years. What is the future value of this investment at the end of Year 2?",
    options: [
      "$1,102.50",
      "$1,100.00",
      "$1,050.00",
      "$1,157.63"
    ],
    answer: 0,
    explanation: "FV = $1,000 × (1.05)² = $1,000 × 1.1025 = $1,102.50."
  },
  {
    id: 54,
    lo: "LO 4E Perform future value calculations and describe insurer applications of future value.",
    question: "A Future Value Interest Factor (FVIF) is defined as:",
    options: [
      "The future value of $1.00 invested at a specified interest rate (i) for a stated number of periods (n), represented by (1 + i)ⁿ",
      "The percentage of policyholders who surrender their contracts annually",
      "The discount rate applied to convert future cash flows into present value",
      "The ratio of an insurer's contractual reserves to its risk-based capital"
    ],
    answer: 0,
    explanation: "FVIF represents the future worth of $1.00 at rate $i$ after $n$ periods, where $\\text{FVIF}(n, i) = (1 + i)^n$."
  },
  {
    id: 55,
    lo: "LO 4E Perform future value calculations and describe insurer applications of future value.",
    question: "In an FVIF table, all the factor numbers are:",
    options: [
      "Greater than 1.0 (assuming a positive interest rate)",
      "Less than 1.0",
      "Equal to zero",
      "Negative for periods exceeding five years"
    ],
    answer: 0,
    explanation: "Because money earning positive interest grows over time, $(1 + i)^n > 1.0$ for any $i > 0$ and $n \\ge 1$."
  },
  {
    id: 56,
    lo: "LO 4E Perform future value calculations and describe insurer applications of future value.",
    question: "Using an FVIF table, the factor for $n = 3$ periods at $i = 5\\%$ interest is 1.158. What is the future value of a $4,000 investment under these terms?",
    options: [
      "$4,632.00",
      "$4,600.00",
      "$4,158.00",
      "$5,200.00"
    ],
    answer: 0,
    explanation: "FV = PV × FVIF(3, 5%) = $4,000 × 1.158 = $4,632.00."
  },
  {
    id: 57,
    lo: "LO 4E Perform future value calculations and describe insurer applications of future value.",
    question: "When calculating the future value of an investment where interest is compounded quarterly over 5 years:",
    options: [
      "The number of compounding periods (n) is 20 (5 × 4), and the periodic interest rate (i) is the annual rate divided by 4",
      "The number of compounding periods (n) is 5, and the interest rate is multiplied by 4",
      "The number of compounding periods (n) is 12, and the interest rate is divided by 12",
      "The future value is calculated using simple interest addition"
    ],
    answer: 0,
    explanation: "For quarterly compounding: $n = \\text{years} \\times 4 = 5 \\times 4 = 20$; periodic rate $i = \\text{annual rate} \\div 4$."
  },
  {
    id: 58,
    lo: "LO 4E Future Value Multi-Period Scenario.",
    question: "Little Insurance Company invests $1,000 at a 5% nominal annual interest rate compounded quarterly for 5 years. Given that the FVIF for 20 periods at 1.25% is 1.282, what is the future value of this investment?",
    options: [
      "$1,282.00",
      "$1,250.00",
      "$1,200.00",
      "$1,347.00"
    ],
    answer: 0,
    explanation: "Compounding periods = 5 × 4 = 20; Periodic interest rate = 5% ÷ 4 = 1.25%; FV = $1,000 × 1.282 = $1,282.00."
  },
  {
    id: 59,
    lo: "LO 4E Future Value Multi-Period Scenario.",
    question: "If an insurer invests $100,000 in a 3-year security paying 10% compounded annually, what is the future value at maturity (FVIF for 3 years at 10% is 1.331)?",
    options: [
      "$133,100",
      "$130,000",
      "$121,000",
      "$133,000"
    ],
    answer: 0,
    explanation: "FV = $100,000 × 1.331 = $133,100."
  },
  {
    id: 60,
    lo: "LO 4E Future Value Multi-Period Scenario.",
    question: "An investor deposits $2,500 at 2% annual interest compounded annually for 3 years. Given FVIF(3, 2%) = 1.061, what is the accumulated future value?",
    options: [
      "$2,652.50",
      "$2,650.00",
      "$2,550.00",
      "$2,750.00"
    ],
    answer: 0,
    explanation: "FV = $2,500 × 1.061 = $2,652.50."
  },
  {
    id: 61,
    lo: "LO 4E Future Value Insurer Applications.",
    question: "Life insurers apply future value calculations in product development to:",
    options: [
      "Project the growth of policy cash values and determine whether accumulated funds will be sufficient to pay future death benefits and annuity claims",
      "Calculate the daily stock market volume of competing property/casualty carriers",
      "Determine state statutory premium tax brackets",
      "Eliminate default risk on sovereign debt securities"
    ],
    answer: 0,
    explanation: "Insurers project how invested premiums and reserves will grow over decades (future value) to ensure accumulated assets cover promised claims and meet crediting guarantees."
  },
  {
    id: 62,
    lo: "LO 4E Future Value Single vs. Multiple Periods.",
    question: "In the formula $FV = PV \times (1 + i)^n$, what does the exponent $n$ represent?",
    options: [
      "The total number of compounding periods over which the principal is invested",
      "The nominal annual interest rate expressed in percentage points",
      "The net asset value of the insurer's separate accounts",
      "The number of beneficiaries designated under the insurance contract"
    ],
    answer: 0,
    explanation: "The exponent $n$ represents the total number of compounding periods (e.g., years, quarters, or months) the investment accumulates interest."
  },

  // --- LO 4F: Ordinary Annuities vs. Annuities Due & Timelines (Q63 - Q76) ---
  {
    id: 63,
    lo: "LO 4F Differentiate between an ordinary annuity and an annuity due and provide examples of each.",
    question: "In financial mathematics, an annuity is formally defined as:",
    options: [
      "Any series of equal payments made at regular, equal intervals over a specified period of time",
      "A series of variable, fluctuating payments made at unpredictable calendar intervals",
      "A commercial retirement contract issued exclusively by state-chartered banks",
      "A single lump-sum dividend distribution paid to common shareholders"
    ],
    answer: 0,
    explanation: "In financial mathematics, an annuity refers to any stream of equal cash payments (cash flows) occurring at regular intervals (monthly, annually, etc.)."
  },
  {
    id: 64,
    lo: "LO 4F Differentiate between an ordinary annuity and an annuity due and provide examples of each.",
    question: "Which of the following statements correctly clarifies the difference between a mathematical annuity and an insurance annuity contract?",
    options: [
      "The mathematical formulas used to calculate the values of an annuity are universally valid without any reference to an actual insurance annuity contract",
      "Annuity mathematical formulas apply only when an individual purchases an insurance contract from a licensed agent",
      "Insurance annuity contracts never involve equal, regular periodic payments",
      "Mathematical annuities can only involve payments made by an insurer, never payments received"
    ],
    answer: 0,
    explanation: "The mathematical concept of an annuity applies to any regular cash flow series (mortgages, bonds, salaries, rents), independent of commercial insurance contracts."
  },
  {
    id: 65,
    lo: "LO 4F Differentiate between an ordinary annuity and an annuity due and provide examples of each.",
    question: "An ordinary annuity is defined as a series of periodic payments where each payment occurs:",
    options: [
      "At the end of each payment period",
      "At the beginning of each payment period",
      "In the exact middle of each calendar year",
      "Only upon the formal surrender of the contract"
    ],
    answer: 0,
    explanation: "An ordinary annuity features payments made at the end of each payment period (e.g., bond coupons, paychecks earned after work is completed)."
  },
  {
    id: 66,
    lo: "LO 4F Differentiate between an ordinary annuity and an annuity due and provide examples of each.",
    question: "An annuity due is defined as a series of periodic payments where each payment occurs:",
    options: [
      "At the beginning of each payment period",
      "At the end of each payment period",
      "At maturity when the principal is repaid",
      "Only after a 30-day statutory grace period expires"
    ],
    answer: 0,
    explanation: "An annuity due features payments made at the start/beginning of each period (e.g., apartment rent, life insurance premiums)."
  },
  {
    id: 67,
    lo: "LO 4F Differentiate between an ordinary annuity and an annuity due and provide examples of each.",
    question: "Which of the following is a classic real-world example of an ordinary annuity?",
    options: [
      "A series of semiannual interest (coupon) payments on a corporate bond where the first payment occurs at the end of the first interest period",
      "A series of apartment rent payments due on the first day of each month",
      "An annual whole life insurance premium paid at the beginning of each policy year",
      "A lump-sum death claim payout disbursed upon an insured's passing"
    ],
    answer: 0,
    explanation: "Bond interest coupons and employment paychecks are paid at the end of periods after service/holding time, making them ordinary annuities."
  },
  {
    id: 68,
    lo: "LO 4F Differentiate between an ordinary annuity and an annuity due and provide examples of each.",
    question: "Which of the following is a classic real-world example of an annuity due?",
    options: [
      "A series of annual life insurance premiums paid at the beginning of each policy year",
      "A series of bond interest coupon payments received at the end of each six-month period",
      "A series of bi-weekly salary paychecks disbursed after completion of the pay period",
      "A lump-sum maturity repayment of a corporate bond's par value"
    ],
    answer: 0,
    explanation: "Life insurance premiums and lease/rent payments are paid at the beginning of the period covered, making them annuities due."
  },
  {
    id: 69,
    lo: "LO 4F Timeline Analysis Scenario.",
    question: "Consider an ordinary annuity of $100 per year for 3 years. When does the first payment occur, and how many total interest payments are earned across the 3 payments by the end of Year 3?",
    options: [
      "First payment occurs at the end of Year 1; total of 3 interest payments earned (2 for payment 1, 1 for payment 2, 0 for payment 3)",
      "First payment occurs at the beginning of Year 1; total of 6 interest payments earned",
      "First payment occurs at Year 0; total of 9 interest payments earned",
      "First payment occurs at the end of Year 3; zero interest earned"
    ],
    answer: 0,
    explanation: "For an ordinary annuity: Payment 1 (end of Yr 1) earns 2 yrs interest; Payment 2 (end of Yr 2) earns 1 yr interest; Payment 3 (end of Yr 3) earns 0 interest. Total = 3 interest credits."
  },
  {
    id: 70,
    lo: "LO 4F Timeline Analysis Scenario.",
    question: "Consider an annuity due of $100 per year for 3 years. When does the first payment occur, and how many total interest payments are earned across the 3 payments by the end of Year 3?",
    options: [
      "First payment occurs at the beginning of Year 1; total of 6 interest payments earned (3 for payment 1, 2 for payment 2, 1 for payment 3)",
      "First payment occurs at the end of Year 1; total of 3 interest payments earned",
      "First payment occurs at the end of Year 3; total of 1 interest payment earned",
      "First payment occurs at Year 2; total of 4 interest payments earned"
    ],
    answer: 0,
    explanation: "For an annuity due: Payment 1 (start of Yr 1) earns 3 yrs interest; Payment 2 (start of Yr 2) earns 2 yrs interest; Payment 3 (start of Yr 3) earns 1 yr interest. Total = 6 interest credits."
  },
  {
    id: 71,
    lo: "LO 4F Differentiate between an ordinary annuity and an annuity due and provide examples of each.",
    question: "For identical payment amounts, interest rates, and numbers of periods, how does the future value of an annuity due compare to the future value of an ordinary annuity?",
    options: [
      "The future value of an annuity due is always greater than the future value of an ordinary annuity because each payment is invested one period earlier and earns an extra period of interest",
      "The future value of an annuity due is always lower than an ordinary annuity",
      "Both future values are always identical regardless of payment timing",
      "The annuity due future value is exactly half of the ordinary annuity future value"
    ],
    answer: 0,
    explanation: "Because every cash flow in an annuity due occurs at the beginning of the period rather than the end, every payment earns one additional compounding period of interest, yielding a higher FV."
  },
  {
    id: 72,
    lo: "LO 4F Differentiate between an ordinary annuity and an annuity due and provide examples of each.",
    question: "Because of the timing difference of payments, the future value of an annuity due is mathematically equal to:",
    options: [
      "The future value of a corresponding ordinary annuity of one additional period, minus one payment amount",
      "The future value of an ordinary annuity divided by 2",
      "The present value of an ordinary annuity multiplied by the Rule of 72",
      "The future value of an ordinary annuity plus two additional payments"
    ],
    answer: 0,
    explanation: "FV of Annuity Due = FV of corresponding Ordinary Annuity for $(n + 1)$ periods minus 1 payment amount. Adding one period equalizes interest payments, and subtracting one payment equalizes payments made."
  },
  {
    id: 73,
    lo: "LO 4F Differentiate between an ordinary annuity and an annuity due and provide examples of each.",
    question: "What compound interest factor is used to simplify future value calculations for annuities involving large numbers of payments and compounding periods?",
    options: [
      "Future Value Interest Factor for an Annuity (FVIFA)",
      "Present Value Interest Factor (PVIF)",
      "Risk-Based Capital (RBC) Ratio",
      "Nominal Yield Spread Factor (NYSF)"
    ],
    answer: 0,
    explanation: "FVIFAs (Future Value Interest Factors for an Annuity) are pre-calculated factor tables used to determine the future value of a stream of annuity cash flows."
  },
  {
    id: 74,
    lo: "LO 4F Differentiate between an ordinary annuity and an annuity due and provide examples of each.",
    question: "Because of payment timing, the present value of an annuity due is mathematically equal to:",
    options: [
      "The present value of a corresponding ordinary annuity of one additional period, minus the amount of one payment",
      "The present value of an ordinary annuity plus one additional compounding period",
      "The future value of an ordinary annuity discounted by 72",
      "The face value of the underlying commercial mortgage"
    ],
    answer: 0,
    explanation: "Present value of an annuity due = PV of a corresponding ordinary annuity of $(n + 1)$ periods minus 1 payment amount."
  },
  {
    id: 75,
    lo: "LO 4F Annuity Classification Scenario.",
    question: "Acme Corporation pays its salaried employees on the last business day of every month for work completed during that month. Acme's payroll represents an:",
    options: [
      "Ordinary annuity",
      "Annuity due",
      "Amortized collateral obligation",
      "Equity dividend due"
    ],
    answer: 0,
    explanation: "Because salary payments are made at the end of each work period, they represent an ordinary annuity."
  },
  {
    id: 76,
    lo: "LO 4F Annuity Classification Scenario.",
    question: "Tenant Sandra signs a 12-month commercial lease requiring $1,500 rent payable on the first day of each calendar month. Sandra's lease payments represent an:",
    options: [
      "Annuity due",
      "Ordinary annuity",
      "Unequal cash flow series",
      "Amortized bond coupon"
    ],
    answer: 0,
    explanation: "Because rent is due at the beginning of each monthly period, it represents an annuity due."
  },

  // --- LO 4G: Present Value Calculations, Discounting & Bond Valuation (Q77 - Q88) ---
  {
    id: 77,
    lo: "LO 4G Perform present value calculations and describe insurer applications of present value.",
    question: "The present value (PV) of a sum of money is defined as:",
    options: [
      "The amount that, if invested at a specified interest rate on a specified date, would grow to equal a specified future amount",
      "The total interest earned on an investment over a 30-year maturity period",
      "The face value printed on a corporate bond certificate",
      "The final accumulated balance of a retirement account at age 65"
    ],
    answer: 0,
    explanation: "Present value (PV) is the current worth of a future sum given a specified interest/discount rate—i.e., the principal that must be invested today to reach a target future value."
  },
  {
    id: 78,
    lo: "LO 4G Perform present value calculations and describe insurer applications of present value.",
    question: "Why is calculating the present value of a future sum commonly referred to as 'discounting'?",
    options: [
      "Because present value calculations reverse the compounding process, subtracting expected accumulated interest to determine current worth",
      "Because state insurance departments require a 10% discount on all policyholder premium billings",
      "Because broker-dealers offer retail discounts on all open-market bond trades",
      "Because future payments are penalized for lack of liquidity"
    ],
    answer: 0,
    explanation: "Discounting reverses compounding: instead of adding interest forward in time, it strips out future interest to determine what a future cash flow is worth today."
  },
  {
    id: 79,
    lo: "LO 4G Perform present value calculations and describe insurer applications of present value.",
    question: "What is the general mathematical formula for the present value (PV) of a single amount for a single period given future value (FV) and interest rate (i)?",
    options: [
      "PV = FV ÷ (1 + i)",
      "PV = FV × (1 + i)",
      "PV = FV - (1 + i)",
      "PV = (FV × i) ÷ n"
    ],
    answer: 0,
    explanation: "For a single period: $\\text{PV} = \\frac{\\text{FV}}{1 + i} = \\text{FV} \\times \\frac{1}{1 + i}$."
  },
  {
    id: 80,
    lo: "LO 4G Perform present value calculations and describe insurer applications of present value.",
    question: "Little Insurance Company needs to have $1,200 one year from today. If it can earn 5% interest compounded annually, how much must Little invest today (PV)?",
    options: [
      "$1,142.88",
      "$1,140.00",
      "$1,260.00",
      "$1,000.00"
    ],
    answer: 0,
    explanation: "PV = $1,200 ÷ (1 + 0.05) = $1,200 ÷ 1.05 = $1,142.857... (or $1,200 × 0.9524 = $1,142.88)."
  },
  {
    id: 81,
    lo: "LO 4G Perform present value calculations and describe insurer applications of present value.",
    question: "What is the general formula for calculating the present value (PV) of a single amount across $n$ compounding periods?",
    options: [
      "PV = FV ÷ (1 + i)ⁿ  [or  PV = FV × (1 / (1 + i)ⁿ)]",
      "PV = FV × (1 + i)ⁿ",
      "PV = FV ÷ (1 + i × n)",
      "PV = (FV - PV) ÷ n"
    ],
    answer: 0,
    explanation: "The multi-period present value formula is $\\text{PV} = \\frac{\\text{FV}}{(1 + i)^n} = \\text{FV} \\times [\\frac{1}{(1 + i)^n}]$."
  },
  {
    id: 82,
    lo: "LO 4G Perform present value calculations and describe insurer applications of present value.",
    question: "A Present Value Interest Factor (PVIF) represents the present value of $1.00 discounted at $i$ percent for $n$ periods. In a PVIF table, all the factor values are:",
    options: [
      "Less than 1.0 and decrease as the number of periods (n) increases or as interest rates (i) rise",
      "Greater than 1.0 and increase as interest rates rise",
      "Exactly equal to 1.0 across all interest rates",
      "Negative for periods exceeding 10 years"
    ],
    answer: 0,
    explanation: "Because future money is worth less today under positive interest rates, $\\text{PVIF} = \\frac{1}{(1 + i)^n} < 1.0$, and factors decline as $n$ or $i$ grows."
  },
  {
    id: 83,
    lo: "LO 4G Present Value Multi-Period Scenario.",
    question: "Little Insurance Company plans to have $1,400 two years from today. At a 5% interest rate compounded annually, what is the present value of this sum (given PVIF for 2 years at 5% is 0.9070)?",
    options: [
      "$1,269.80",
      "$1,260.00",
      "$1,333.33",
      "$1,470.00"
    ],
    answer: 0,
    explanation: "PV = $1,400 × PVIF(2, 5%) = $1,400 × 0.9070 = $1,269.80."
  },
  {
    id: 84,
    lo: "LO 4G Present Value Compounding Frequency Scenario.",
    question: "Little Insurance needs $2,000 three years from today, earning 5% nominal interest compounded semiannually. In calculating PV, what are the values for $n$ (periods) and $i$ (periodic rate)?",
    options: [
      "n = 6 (3 years × 2 periods/yr); i = 2.5% (5% ÷ 2)",
      "n = 3; i = 5%",
      "n = 12; i = 1.25%",
      "n = 6; i = 5%"
    ],
    answer: 0,
    explanation: "With semiannual compounding: $n = 3 \\times 2 = 6$ periods; periodic rate $i = 5\\% \\div 2 = 2.5\\%$ per period."
  },
  {
    id: 85,
    lo: "LO 4G Present Value of an Annuity Concept.",
    question: "The present value of an annuity (PVA) is defined as:",
    options: [
      "The single sum of money that must be invested today at a specified interest rate to provide a specified series of equal future payments",
      "The total sum of all nominal annuity payments without interest discounting",
      "The future accumulated surrender value of a cash value whole life contract",
      "The statutory capital standard required for variable life separate accounts"
    ],
    answer: 0,
    explanation: "The PV of an annuity is the lump sum needed today to fund a regular series of equal future withdrawals or disbursements at a given interest rate."
  },
  {
    id: 86,
    lo: "LO 4G Bond Valuation via Present Value Scenario.",
    question: "When an insurance company calculates the fair value purchase price to pay for a fixed-rate corporate bond, it must calculate and sum which two separate present values?",
    options: [
      "The present value of the bond's periodic coupon (interest) payments (an ordinary annuity) PLUS the present value of the bond's par value at maturity (a single lump sum)",
      "The future value of all coupon payments minus the underwriter's sales load",
      "The present value of the issuing corporation's common stock dividends plus book value",
      "The amortized mortgage replacement cost plus inflation risk premium"
    ],
    answer: 0,
    explanation: "Bond pricing combines: (1) PV of the coupon stream (ordinary annuity, using PVIFA) and (2) PV of the par value face amount at maturity (single payment, using PVIF)."
  },
  {
    id: 87,
    lo: "LO 4G Bond Valuation Calculation Scenario.",
    question: "Little is evaluating a 20-year, 4.5% annual coupon bond with a $1,000 par value. Market interest rates are 5%. Annual coupon payment = $45. Given PVIFA(20, 5%) = 12.462 and PVIF(20, 5%) = 0.3769, what is the fair value price of the bond?",
    options: [
      "$937.69",
      "$1,000.00",
      "$910.50",
      "$1,062.31"
    ],
    answer: 0,
    explanation: "PV of coupons = $45 × 12.462 = $560.79. PV of par value = $1,000 × 0.3769 = $376.90. Bond Price = $560.79 + $376.90 = $937.69."
  },
  {
    id: 88,
    lo: "LO 4G Bond Pricing & Fair Value Analysis.",
    question: "In the bond valuation in Question 87, why did the 4.5% bond sell at a discount ($937.69, below its $1,000 par value)?",
    options: [
      "Because the bond's coupon rate (4.5%) is lower than the prevailing market interest rate (5.0%), requiring a price discount so the investor earns the competitive 5.0% return",
      "Because the issuing corporation defaulted on its senior subordinated debt",
      "Because 20-year bonds are legally restricted from trading at par value",
      "Because the bond was structured as an annuity due rather than an ordinary annuity"
    ],
    answer: 0,
    explanation: "When a bond's coupon rate is below the prevailing market yield for similar securities, its market price drops below par (sells at a discount) to equalize its yield with the market."
  },

  // --- LO 4H: Fundamental Rules Governing PV and FV (Q89 - Q100) ---
  {
    id: 89,
    lo: "LO 4H Explain the rules that govern future values and present values.",
    question: "Rule I states that a given present value can have any number of future values, and a given future value can have any number of present values, because:",
    options: [
      "Present and future values change whenever there is an incremental increase or decrease in the interest rate or the number of compounding periods",
      "Statutory accounting allows insurers to select arbitrary discount rates",
      "Future values fluctuate daily based on currency exchange rate swings",
      "Present values are legally reset to zero at the end of each fiscal year"
    ],
    answer: 0,
    explanation: "Changing either the interest rate ($i$) or the number of periods ($n$) generates a unique future value for any present value, and vice versa."
  },
  {
    id: 90,
    lo: "LO 4H Explain the rules that govern future values and present values.",
    question: "Rule II states that the timing of cash flows affects their present value and future value. In the context of insurance contracts, this means that:",
    options: [
      "The value of cash flows depends on when cash is paid into or withdrawn from an account and how long it remains invested",
      "Premiums paid at the end of a policy year have identical future value to premiums paid at the beginning",
      "Cash flow timing matters only for non-profit fraternal benefit societies",
      "All cash flows within a calendar year are treated as occurring simultaneously on December 31"
    ],
    answer: 0,
    explanation: "When cash is deposited or withdrawn directly determines the number of periods it compounds, altering its present and future value."
  },
  {
    id: 91,
    lo: "LO 4H Explain the rules that govern future values and present values.",
    question: "Rule III states that present value and future value are mathematically linked. This means that:",
    options: [
      "Future value equals present value plus accumulated interest, while present value equals future value minus accumulated interest",
      "Present value multiplied by future value always equals the initial principal squared",
      "Future value divided by present value always equals the Risk-Based Capital ratio",
      "Present value is always equal to future value regardless of interest rates"
    ],
    answer: 0,
    explanation: "PV and FV are two sides of the same coin: $\\text{FV} = \\text{PV} + \\text{Interest}$ and $\\text{PV} = \\text{FV} - \\text{Interest}$."
  },
  {
    id: 92,
    lo: "LO 4H Explain the rules that govern future values and present values.",
    question: "Rule IV states that, assuming a positive interest rate, the future value of a sum of money will ALWAYS be:",
    options: [
      "Greater than its present value",
      "Less than its present value",
      "Equal to its present value",
      "Half of its present value"
    ],
    answer: 0,
    explanation: "Because interest earnings at a positive rate are always positive, invested money grows, making FV strictly greater than PV."
  },
  {
    id: 93,
    lo: "LO 4H Explain the rules that govern future values and present values.",
    question: "Conversely, under Rule IV, assuming a positive interest rate, the present value of a future sum will ALWAYS be:",
    options: [
      "Less than its future value",
      "Greater than its future value",
      "Equal to its future value",
      "Zero"
    ],
    answer: 0,
    explanation: "Because discounting strips out positive future interest, the present value of a future sum is always less than the future nominal amount."
  },
  {
    id: 94,
    lo: "LO 4H Explain the rules that govern future values and present values.",
    question: "Rule V dictates that if the present value (principal) of a sum remains constant, an INCREASE in the interest rate will result in:",
    options: [
      "An increase in the future value",
      "A decrease in the future value",
      "No change in the future value",
      "A decrease in the number of compounding periods"
    ],
    answer: 0,
    explanation: "Higher interest rates generate greater interest earnings on the principal, driving future value upward."
  },
  {
    id: 95,
    lo: "LO 4H Explain the rules that govern future values and present values.",
    question: "Rule V dictates that if the present value (principal) remains constant, an INCREASE in the number of compounding periods will result in:",
    options: [
      "An increase in the future value",
      "A decrease in the future value",
      "An immediate reduction in the nominal interest rate",
      "Zero change in accumulated interest"
    ],
    answer: 0,
    explanation: "Allowing an investment to compound over more periods increases the accumulated interest, increasing the future value."
  },
  {
    id: 96,
    lo: "LO 4H Explain the rules that govern future values and present values.",
    question: "Rule V dictates that if the future value of a target sum remains constant, an INCREASE in the interest (discount) rate will result in:",
    options: [
      "A decrease in the present value",
      "An increase in the present value",
      "No change in the present value",
      "An automatic doubling of the investment period"
    ],
    answer: 0,
    explanation: "When you can earn a higher interest rate, you need to invest LESS money today (lower PV) to reach the same future target amount."
  },
  {
    id: 97,
    lo: "LO 4H Explain the rules that govern future values and present values.",
    question: "Rule V dictates that if the future value of a target sum remains constant, a DECREASE in the interest (discount) rate will result in:",
    options: [
      "An increase in the present value",
      "A decrease in the present value",
      "A decrease in statutory contractual reserve requirements",
      "An increase in the future value interest factor"
    ],
    answer: 0,
    explanation: "When interest rates fall, money grows more slowly; therefore, you must invest MORE money today (higher PV) to reach the target future sum."
  },
  {
    id: 98,
    lo: "LO 4H Explain the rules that govern future values and present values.",
    question: "Rule V dictates that if the future value of a target sum remains constant, an INCREASE in the number of investment periods will result in:",
    options: [
      "A decrease in the present value",
      "An increase in the present value",
      "No change in the required initial deposit",
      "An immediate doubling of the required rate of return"
    ],
    answer: 0,
    explanation: "More time allows interest to compound longer, meaning a smaller initial principal (lower PV) is needed today to reach the future target."
  },
  {
    id: 99,
    lo: "LO 4H Present Value Sensitivity Scenario.",
    question: "An insurer needs $1,000 one year from today. At a 4% interest rate, PV is $961.54. At a 5% interest rate, PV is $952.38. At a 3% interest rate, PV is $970.87. This progression demonstrates that:",
    options: [
      "Present value is inversely related to the interest rate: as interest rates increase, present value decreases",
      "Present value is directly proportional to the interest rate",
      "Interest rate changes have zero effect on one-year discounting calculations",
      "Future value interest factors are negative at 3% interest"
    ],
    answer: 0,
    explanation: "As interest rates rise (3% → 4% → 5%), the present value required to reach $1,000 drops ($970.87 → $961.54 → $952.38), illustrating the inverse relationship between interest rates and PV."
  },
  {
    id: 100,
    lo: "LO 4H Comprehensive TVM Synthesis Scenario.",
    question: "Which of the following summaries correctly states the fundamental directional rules of the Time Value of Money?",
    options: [
      "For a constant PV: Higher interest rates & longer periods INCREASE Future Value. For a constant FV: Higher interest rates & longer periods DECREASE Present Value.",
      "For a constant PV: Higher interest rates DECREASE Future Value. For a constant FV: Higher interest rates INCREASE Present Value.",
      "Future Value is always less than Present Value whenever interest is compounded more frequently than annually.",
      "Present Value and Future Value are completely independent and share no mathematical relationship."
    ],
    answer: 0,
    explanation: "PV and FV rules: (1) For a fixed PV, higher rates and more time increase FV. (2) For a fixed target FV, higher rates and more time reduce the needed initial PV."
  }
];
