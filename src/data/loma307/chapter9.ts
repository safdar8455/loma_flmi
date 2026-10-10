import { Question } from '../../types';

export const chapter9Questions: Question[] = [
  // --- LO 9A: Tables, Order, Mortality Tables, Grouped vs. Ungrouped Data (Q1 - Q20) ---
  {
    id: 1,
    lo: "LO 9A Explain the primary benefits of using tables to present data and describe the different ways to organize tables.",
    question: "In business communications and financial reporting, a table is formally defined as:",
    options: [
      "An orderly listing of data arranged in rows and columns to condense and organize information",
      "A graphical chart that connects numerical points with straight line segments",
      "A software program that simulates stock market trading scenarios",
      "A legal contract provision detailing policy suicide exclusion periods"
    ],
    answer: 0,
    explanation: "A table is a structured, orderly listing of data organized in rows and columns designed to condense, sort, and display complex information systematically."
  },
  {
    id: 2,
    lo: "LO 9A Explain the primary benefits of using tables to present data and describe the different ways to organize tables.",
    question: "What is the primary benefit of organizing raw business data into a table?",
    options: [
      "Order, which allows readers to quickly locate, compare, and analyze specific individual values",
      "Guaranteeing that all future death claims will decrease by 10%",
      "Eliminating the need to perform financial accounting audits",
      "Automatically encrypting database files to prevent cyber attacks"
    ],
    answer: 0,
    explanation: "The primary benefit of a table is order, enabling users to systematically arrange, scan, and interpret structured data."
  },
  {
    id: 3,
    lo: "LO 9A Explain the primary benefits of using tables to present data and describe the different ways to organize tables.",
    question: "An administrative assistant compiles customer satisfaction survey scores for 8 customer service representatives and sorts the table from highest rating (4.8) to lowest rating (1.9). This table is organized in:",
    options: [
      "Descending order",
      "Ascending order",
      "Alphabetical order",
      "Random order"
    ],
    answer: 0,
    explanation: "Arranging numbers from highest to lowest is descending order."
  },
  {
    id: 4,
    lo: "LO 9A Explain the primary benefits of using tables to present data and describe the different ways to organize tables.",
    question: "A life insurance policy illustration shows the guaranteed cash value of a whole life contract starting at $0 in Year 1 and growing progressively to $41,700 at age 65. This table is organized in:",
    options: [
      "Ascending order (and chronological order of time/age)",
      "Descending order",
      "Randomized order",
      "Alphabetical order"
    ],
    answer: 0,
    explanation: "Listing values from lowest to highest over chronological policy years represents ascending order."
  },
  {
    id: 5,
    lo: "LO 9A Explain the primary benefits of using tables to present data and describe the different ways to organize tables.",
    question: "A pivot table is defined as:",
    options: [
      "A data summarization tool available in spreadsheet software that automatically sorts, averages, counts, or sums data and displays the results in tabulated format",
      "A physical drafting table used by corporate architects to design office buildings",
      "A statutory reserve calculation required only for variable universal life policies",
      "A telecommunications device that converts analog phone calls into digital data packets"
    ],
    answer: 0,
    explanation: "Pivot tables allow users to dynamically reorganize, summarize, filter, and analyze large datasets without writing complex formulas."
  },
  {
    id: 6,
    lo: "LO 9A Explain the primary benefits of using tables to present data and describe the different ways to organize tables.",
    question: "A mortality table is a specialized tabular presentation that shows:",
    options: [
      "The expected mortality rate (number of deaths per 1,000) for each age within a specified population group",
      "The exact calendar date and hour when an individual policyholder will die",
      "The annual sales commissions earned by independent life insurance brokers",
      "The quarterly changes in corporate bond credit ratings"
    ],
    answer: 0,
    explanation: "Mortality tables show statistical death probabilities per 1,000 individuals across consecutive ages for large population cohorts."
  },
  {
    id: 7,
    lo: "LO 9A Explain the primary benefits of using tables to present data and describe the different ways to organize tables.",
    question: "Which standardized tables, updated periodically by insurance regulators and actuarial societies, are most widely used by U.S. life insurers for statutory reserve and cash value calculations?",
    options: [
      "Commissioners Standard Ordinary (CSO) Tables",
      "Standard & Poor's Municipal Bond Tables",
      "Federal Reserve Macroeconomic Tables",
      "Department of Labor Consumer Price Index Tables"
    ],
    answer: 0,
    explanation: "The Commissioners Standard Ordinary (CSO) Mortality Tables serve as the statutory standard for valuation and minimum nonforfeiture values in the U.S."
  },
  {
    id: 8,
    lo: "LO 9A Mortality Table Calculation Scenario.",
    question: "A standard mortality table shows that out of 100,000 men alive at age 65, exactly 1,100 are expected to die before reaching age 66. What is the mortality rate per 1,000 and the corresponding percentage mortality rate at age 65?",
    options: [
      "11 deaths per 1,000 (or 1.1%, calculated as 1,100 / 100,000 = 0.011)",
      "1.1 deaths per 1,000 (or 0.11%)",
      "110 deaths per 1,000 (or 11.0%)",
      "22 deaths per 1,000 (or 2.2%)"
    ],
    answer: 0,
    explanation: "1,100 / 100,000 = 0.011 (1.1%), which equates to 11 deaths per 1,000 individuals."
  },
  {
    id: 9,
    lo: "LO 9A Explain the primary benefits of using tables to present data and describe the different ways to organize tables.",
    question: "In addition to mortality rates, standard mortality tables typically display which of the following columns of data for each age?",
    options: [
      "Total number living at the beginning of the year, total number dying during the year, and remaining life expectancy",
      "Stock market price-to-earnings ratios and dividend yields",
      "Agent commission percentages and surrender charge penalties",
      "Corporate tax brackets and depreciation schedules"
    ],
    answer: 0,
    explanation: "Comprehensive mortality tables include: Age ($x$), Number living ($l_x$), Number dying ($d_x$), Mortality rate ($q_x$), and Life Expectancy ($e_x$)."
  },
  {
    id: 10,
    lo: "LO 9A Explain the primary benefits of using tables to present data and describe the different ways to organize tables.",
    question: "How do life insurance actuaries utilize the information contained in mortality tables?",
    options: [
      "To calculate the pricing premium rates for life insurance and annuities and establish necessary policyholder reserve liabilities",
      "To determine which job applicants should be hired in customer service",
      "To schedule routine computer maintenance shutdowns",
      "To select physical furniture layouts for regional agency offices"
    ],
    answer: 0,
    explanation: "Mortality tables provide the probabilistic foundation for pricing life insurance contracts, determining annuity payouts, and establishing policy reserves."
  },
  {
    id: 11,
    lo: "LO 9A Explain the primary benefits of using tables to present data and describe the different ways to organize tables.",
    question: "In data presentation, ungrouped data are defined as data that:",
    options: [
      "List each individual item or observation separately in the table",
      "Combine all observations into broad, summarized category intervals",
      "Are plotted exclusively as 3D pie charts",
      "Are encrypted to prevent unauthorized employee viewing"
    ],
    answer: 0,
    explanation: "Ungrouped data preserve individual observations without collapsing them into summary class intervals."
  },
  {
    id: 12,
    lo: "LO 9A Explain the primary benefits of using tables to present data and describe the different ways to organize tables.",
    question: "Grouped data are defined as data that:",
    options: [
      "Divide individual values into classes or category ranges and show the frequency of observations falling within each class",
      "Display every single individual transaction without summarization",
      "List customer names in chronological order of birthdate",
      "Are restricted to whole numbers between 1 and 10"
    ],
    answer: 0,
    explanation: "Grouped data aggregate individual observations into defined class ranges (e.g., ages 20–29, 30–39) and count frequencies."
  },
  {
    id: 13,
    lo: "LO 9A Explain the primary benefits of using tables to present data and describe the different ways to organize tables.",
    question: "A table that displays the number of times observed data values fall within specified numerical classes is called a:",
    options: [
      "Grouped frequency distribution",
      "PERT network",
      "Balanced scorecard",
      "Gantt schedule"
    ],
    answer: 0,
    explanation: "A grouped frequency distribution table displays classes/ranges alongside their corresponding frequency counts."
  },
  {
    id: 14,
    lo: "LO 9A Grouped vs. Ungrouped Data Scenario.",
    question: "An analyst reviews 1,000 policy face amounts. Table A lists all 1,000 individual policy amounts. Table B groups the amounts into brackets: '<$50,000', '$50,000–$99,999', '$100,000–$249,999', and '$250,000+'. Compared to Table B, Table A provides:",
    options: [
      "Greater precision and exact detail, but is harder to scan for overarching trends across large datasets",
      "Less precision and lower accuracy",
      "A better format for identifying high-level patterns across 100,000 records",
      "Zero information regarding individual policy limits"
    ],
    answer: 0,
    explanation: "Ungrouped data offer maximum precision by showing exact individual numbers, while grouped data make high-level patterns and large datasets digestible."
  },
  {
    id: 15,
    lo: "LO 9A Explain the primary benefits of using tables to present data and describe the different ways to organize tables.",
    question: "What is the primary advantage of presenting data in a grouped frequency distribution rather than as ungrouped raw data?",
    options: [
      "It condenses massive datasets into manageable summaries, making broad trends and patterns easy to see at a glance",
      "It allows the viewer to see every single individual policyholder's exact score",
      "It eliminates the need to calculate standard deviations or variances",
      "It guarantees that all data values are distributed in a perfect normal bell curve"
    ],
    answer: 0,
    explanation: "Grouped data simplify complex and massive datasets, highlighting distribution patterns and trends that would otherwise be obscured in raw listings."
  },
  {
    id: 16,
    lo: "LO 9A Table Organization Methods.",
    question: "When an insurer presents a table listing customer service complaints organized by department (Claims, Underwriting, Billing, Policy Service) with the department having the most complaints listed first, the table is organized by:",
    options: [
      "Order of importance (or magnitude/descending frequency)",
      "Alphabetical order",
      "Chronological time of incorporation",
      "Random selection"
    ],
    answer: 0,
    explanation: "Sorting categories by complaint volume highlights critical priority areas first."
  },
  {
    id: 17,
    lo: "LO 9A Table Limitations.",
    question: "While tables are excellent for organizing and looking up precise numerical data, what is their primary limitation compared to visual charts?",
    options: [
      "Tables are less effective at immediately conveying graphical relationships, visual comparisons, and overarching trends",
      "Tables cannot display numerical amounts",
      "Tables can only be read using specialized actuarial software",
      "Tables cannot be printed on paper"
    ],
    answer: 0,
    explanation: "Tables require cognitive reading and mental synthesis of numbers; charts allow immediate visual pattern recognition."
  },
  {
    id: 18,
    lo: "LO 9A Life Expectancy Interpretation.",
    question: "In a sample mortality table, a 65-year-old male has a remaining life expectancy of 18.4 years. This statistical figure means that:",
    options: [
      "On average, a group of 65-year-old males is expected to live an additional 18.4 years (to age 83.4)",
      "Every single 65-year-old male in the group will die on the exact day he turns 83.4",
      "No male in the group can possibly survive past age 83.4",
      "The insurer must pay all policy claims when the insured turns 83.4"
    ],
    answer: 0,
    explanation: "Remaining life expectancy is an average expectation across the cohort; individual lifespans will vary widely above and below this mean."
  },
  {
    id: 19,
    lo: "LO 9A Cash Value Table Interpretation.",
    question: "Referring to whole life cash value tables, why do cash values typically show $0 during the first one or two policy years?",
    options: [
      "Because high initial acquisition expenses (such as underwriting and first-year agent commissions) must be amortized before cash value accumulates",
      "Because state insurance laws prohibit whole life contracts from ever building equity",
      "Because policyholders do not pay premiums during the first two policy years",
      "Because the insurer invests all first-year premiums in non-interest-bearing checking accounts"
    ],
    answer: 0,
    explanation: "First-year acquisition costs consume early premiums; cash value equity builds up as policy reserves accumulate in subsequent years."
  },
  {
    id: 20,
    lo: "LO 9A Tabular Data Sorting.",
    question: "Sorting sales agents alphabetically by last name in an administrative roster is most useful for:",
    options: [
      "Looking up specific individual agent records quickly by name",
      "Identifying which agent achieved the highest sales volume",
      "Comparing regional persistency rates across branch offices",
      "Calculating the weighted average commission schedule"
    ],
    answer: 0,
    explanation: "Alphabetical sorting is designed for rapid lookup of specific individuals rather than performance ranking."
  },

  // --- LO 9B: Primary Chart Types (Bar, Pie, Line) & Visual Data Forms (Q21 - Q40) ---
  {
    id: 21,
    lo: "LO 9B Describe the three primary types of charts insurance companies use to display data and the benefits these charts offer.",
    question: "The three primary types of charts used by insurance companies to display data visually are:",
    options: [
      "Bar charts, pie charts, and line graphs",
      "Flowcharts, Gantt charts, and PERT charts",
      "Scatter plots, box plots, and stem-and-leaf diagrams",
      "Balance sheets, income statements, and cash flow statements"
    ],
    answer: 0,
    explanation: "The three fundamental quantitative charts for data presentation are bar charts, pie charts, and line graphs."
  },
  {
    id: 22,
    lo: "LO 9B Describe the three primary types of charts insurance companies use to display data and the benefits these charts offer.",
    question: "A bar chart is defined as a visual tool that:",
    options: [
      "Uses vertical or horizontal rectangles (bars) along a specified scale to display the relative size, quantity, or frequency of different data units",
      "Plots points on a map showing geographic coordinates of regional offices",
      "Displays steps in a project using diamond decision symbols",
      "Connects daily stock prices with smooth continuous polynomial curves"
    ],
    answer: 0,
    explanation: "Bar charts display quantities or frequencies for discrete categories using proportional rectangular bars."
  },
  {
    id: 23,
    lo: "LO 9B Describe the three primary types of charts insurance companies use to display data and the benefits these charts offer.",
    question: "In a bar chart, a trend line is:",
    options: [
      "A line superimposed across the chart that indicates, at a glance, the general pattern or trajectory of change over time",
      "The horizontal line representing the zero axis",
      "A line separating the title of the chart from the legend",
      "The border drawn around the entire page layout"
    ],
    answer: 0,
    explanation: "Trend lines visually capture the overall direction (upward, downward, flat) across consecutive categories or time periods."
  },
  {
    id: 24,
    lo: "LO 9B Describe the three primary types of charts insurance companies use to display data and the benefits these charts offer.",
    question: "When an insurer wants to compare policy sales across multiple regional offices side by side for each product line, which type of chart is most appropriate?",
    options: [
      "A comparative (grouped) bar chart showing adjacent bars for each office per product",
      "A single one-slice pie chart",
      "A PERT network critical path diagram",
      "A text-only legal contract addendum"
    ],
    answer: 0,
    explanation: "Comparative (clustered) bar charts place multiple category bars side by side, facilitating direct comparison across groups."
  },
  {
    id: 25,
    lo: "LO 9B Describe the three primary types of charts insurance companies use to display data and the benefits these charts offer.",
    question: "A component bar chart (or 100% stacked bar chart) is defined as a bar chart that:",
    options: [
      "Combines component values from two or more datasets into a single set of bars, where each bar represents 100% and shaded segments show the percentage attributable to each component",
      "Displays data solely as circular discs cut into proportional wedges",
      "Plots individual claim occurrences as dots on a geographic map",
      "Connects daily stock closing values with straight lines"
    ],
    answer: 0,
    explanation: "Component (stacked) bar charts display the percentage composition of different subgroups within total whole bars (100%)."
  },
  {
    id: 26,
    lo: "LO 9B Describe the three primary types of charts insurance companies use to display data and the benefits these charts offer.",
    question: "A histogram is a specialized bar chart that displays:",
    options: [
      "Grouped frequency data, where each bar represents the number of times observed data fall within specified numerical ranges or intervals",
      "The alphabetical roster of executive corporate officers",
      "A project schedule with milestone events and critical paths",
      "A breakdown of personal company stock options"
    ],
    answer: 0,
    explanation: "Histograms graph continuous grouped frequency distributions where bar widths represent class intervals and heights represent frequencies."
  },
  {
    id: 27,
    lo: "LO 9B Describe the three primary types of charts insurance companies use to display data and the benefits these charts offer.",
    question: "A pictograph is a data display tool that:",
    options: [
      "Uses pictorial symbols or icons (such as stacks of coins or policy documents) to represent numerical quantities instead of plain bars",
      "Draws abstract geometric fractal patterns",
      "Measures caller hold times using stopwatch dials",
      "Translates customer service phone calls into written text"
    ],
    answer: 0,
    explanation: "Pictographs use visual icons/symbols to represent fixed units of data for heightened visual engagement."
  },
  {
    id: 28,
    lo: "LO 9B Describe the three primary types of charts insurance companies use to display data and the benefits these charts offer.",
    question: "A pie chart presents data in the shape of a circle cut into wedges, where each wedge represents:",
    options: [
      "A distinct category's relative proportion or percentage of the total whole (100%)",
      "The chronological sequence of project management tasks",
      "The standard deviation of an investment fund",
      "The geographic location of state insurance departments"
    ],
    answer: 0,
    explanation: "Pie charts illustrate parts of a whole, where the entire circle equals 100% and slices reflect category proportions."
  },
  {
    id: 29,
    lo: "LO 9B Describe the three primary types of charts insurance companies use to display data and the benefits these charts offer.",
    question: "Why are pie charts particularly effective for business audiences?",
    options: [
      "They allow audiences to immediately visualize and compare relative proportions, percentages, or market shares of a single dataset at a glance",
      "They are the most effective visual tool for displaying longitudinal trends over 30 consecutive quarters",
      "They can display more than 50 distinct categories without visual clutter",
      "They eliminate the need to calculate arithmetic percentages"
    ],
    answer: 0,
    explanation: "Pie charts provide instant visual clarity for proportional distribution across a moderate number of categories."
  },
  {
    id: 30,
    lo: "LO 9B Pie Chart Percentage Conversion Scenario.",
    question: "An agency sells 200 total life insurance policies in a month: 84 Whole Life, 62 Term Life, 22 VUL, 14 Universal Life, 12 Family Policies, and 6 Variable Life. In a pie chart, what percentage slice represents Whole Life policies?",
    options: [
      "42% (calculated as 84 / 200 = 0.42)",
      "31% (calculated as 62 / 200)",
      "84%",
      "50%"
    ],
    answer: 0,
    explanation: "84 / 200 = 0.42, which converts to a 42% slice of the pie."
  },
  {
    id: 31,
    lo: "LO 9B Describe the three primary types of charts insurance companies use to display data and the benefits these charts offer.",
    question: "A line graph (or line chart / line diagram) is defined as a chart that:",
    options: [
      "Displays information over time as a series of data points connected by straight line segments",
      "Cuts a circular disc into proportional wedges",
      "Uses shaded rectangular bars to represent categorical totals",
      "Plots yes/no decision diamonds along a workflow process"
    ],
    answer: 0,
    explanation: "Line graphs plot sequential data points connected by straight line segments, making them ideal for tracking changes over time."
  },
  {
    id: 32,
    lo: "LO 9B Describe the three primary types of charts insurance companies use to display data and the benefits these charts offer.",
    question: "In what business scenario is a line graph significantly superior to a pie chart or bar chart?",
    options: [
      "Tracking continuous trends, fluctuations, and rates of change over sequential time periods (e.g., quarterly sales, monthly lapse rates, annual mortality experience)",
      "Displaying the percentage breakdown of employee ethnic diversity in one calendar year",
      "Showing the organizational hierarchy of corporate department heads",
      "Listing the top five sales agents in alphabetical order"
    ],
    answer: 0,
    explanation: "Line graphs excel at illustrating trajectories, cycles, and rate-of-change trends across chronological time series."
  },
  {
    id: 33,
    lo: "LO 9B Line Graphs for Actuarial Experience Tracking.",
    question: "How do life insurance actuaries use comparative line graphs to evaluate product performance?",
    options: [
      "By plotting actual mortality experience alongside projected pricing mortality over consecutive years to identify variances and pricing deviations",
      "By drawing yes/no decision diamonds for claims investigators",
      "By calculating the exact salary bonuses for underwriting managers",
      "By replacing all policy cash values with term insurance coverage"
    ],
    answer: 0,
    explanation: "Actuaries compare plotted lines of actual vs. expected mortality/persistency experience to assess underwriting assumptions and financial cushions."
  },
  {
    id: 34,
    lo: "LO 9B Visual Data Displays: Data Maps.",
    question: "A dot distribution map is a type of data map that:",
    options: [
      "Shows data as individual dots plotted on a geographic plane to convey the geographic scatter, clustering, and concentration of a population",
      "Uses rectangular bars to show monthly call volumes",
      "Connects chronological data points with straight lines",
      "Plots project milestone events on a calendar"
    ],
    answer: 0,
    explanation: "Dot distribution maps use dot density to illustrate geographic dispersion and customer clustering across regions."
  },
  {
    id: 35,
    lo: "LO 9B Visual Data Displays: Heat Maps.",
    question: "A heat map is defined as a data map in which:",
    options: [
      "Different numerical values or activity levels for a given variable are represented by different colors or color intensities",
      "The physical temperature of computer hard drives is recorded",
      "Customer service representatives are ranked from best to worst",
      "Flowchart diamonds indicate policy termination rules"
    ],
    answer: 0,
    explanation: "Heat maps use chromatic gradients (e.g., cool blue to vibrant red) to represent data density, web activity, or risk concentration."
  },
  {
    id: 36,
    lo: "LO 9B Visual Data Displays: Web Heat Maps.",
    question: "A web heat map provides value to an insurance company's digital marketing and IT design teams by:",
    options: [
      "Visually illustrating which areas, buttons, and links on a company webpage receive the highest visitor click and browsing activity",
      "Displaying the internal wiring schematic of company server rooms",
      "Calculating statutory interest reserve amortization tables",
      "Listing all independent broker commission rates in alphabetical order"
    ],
    answer: 0,
    explanation: "Web heat maps track user cursor movement, scrolls, and clicks, pinpointing high-engagement zones and navigation bottlenecks on websites."
  },
  {
    id: 37,
    lo: "LO 9B Visual Data Displays: Infographics.",
    question: "An infographic (information graphic) is designed to:",
    options: [
      "Combine numbers, percentages, visual graphics, and concise text to make complex research findings and patterns easy to understand without extensive reading",
      "Replace all legally mandated formal financial statements",
      "Provide an exhaustive 500-page regulatory filing to insurance commissioners",
      "Store encrypted customer database backup files"
    ],
    answer: 0,
    explanation: "Infographics translate dense statistical research into engaging visual narratives pairing key statistics with purposeful icons and minimal text."
  },
  {
    id: 38,
    lo: "LO 9B Interactive Data Visualization.",
    question: "In modern business intelligence systems, interactive data visualization allows users to:",
    options: [
      "Manipulate, filter, zoom into data clusters (scaling), link graphs, and test predictive what-if scenarios dynamically",
      "Physically manufacture computer motherboards",
      "Automatically approve fraudulent life insurance claims",
      "Exempt policyholders from paying insurance premiums"
    ],
    answer: 0,
    explanation: "Interactive visuals enable users to dynamically explore datasets, filter subsets, drill down, and simulate alternative future scenarios."
  },
  {
    id: 39,
    lo: "LO 9B Interactive Visual Functions: Scaling & Linking.",
    question: "In interactive data analytics, scaling refers to __________ and linking refers to __________.",
    options: [
      "Zooming into or out of crowded regions on a graph; connecting elements selected in one graph to corresponding data in another graph",
      "Changing the font color; printing physical paper handouts",
      "Calculating the population variance; calculating the sample median",
      "Filing a regulatory form; approving an agent contract"
    ],
    answer: 0,
    explanation: "Scaling adjusts zoom and resolution levels; linking dynamically connects highlights/filters across multiple synchronized visual charts."
  },
  {
    id: 40,
    lo: "LO 9B Chart Selection Scenario.",
    question: "A marketing manager needs to present the proportion of total corporate premium revenue contributed by each of the company's 4 core product lines during the last fiscal year. Which chart type is most appropriate?",
    options: [
      "A pie chart (or component bar chart)",
      "A multi-stage PERT critical path network",
      "A non-normal continuous probability curve",
      "A dot distribution map"
    ],
    answer: 0,
    explanation: "Displaying categorical shares of a single annual total (100%) is best achieved with a pie chart or component bar chart."
  },

  // --- LO 9C: Flowcharts, Gantt Charts, PERT Networks, Project Management (Q41 - Q65) ---
  {
    id: 41,
    lo: "LO 9C Demonstrate an understanding of how insurers can use flowcharts, Gantt charts, and PERT networks to manage projects.",
    question: "A flowchart is defined as:",
    options: [
      "A graphic representation of a sequence or ordered arrangement of activities and decisions in a business process",
      "A calendar plotting project start and end dates with horizontal shaded bars",
      "A mathematical formula calculating expected activity completion times",
      "A corporate balance sheet showing statutory assets and liabilities"
    ],
    answer: 0,
    explanation: "Flowcharts map out step-by-step process logic, task sequences, and decision branches using standardized geometric symbols."
  },
  {
    id: 42,
    lo: "LO 9C Demonstrate an understanding of how insurers can use flowcharts, Gantt charts, and PERT networks to manage projects.",
    question: "In standard flowcharting conventions, what shape is used to represent starting and stopping points?",
    options: [
      "Ovals",
      "Rectangular boxes",
      "Diamonds",
      "Triangles"
    ],
    answer: 0,
    explanation: "Ovals indicate the beginning (Start) and termination (End) boundaries of a workflow."
  },
  {
    id: 43,
    lo: "LO 9C Demonstrate an understanding of how insurers can use flowcharts, Gantt charts, and PERT networks to manage projects.",
    question: "In standard flowcharting conventions, rectangular boxes represent:",
    options: [
      "Important operational tasks or activities",
      "Yes/no decision questions",
      "The start of the entire project",
      "The critical path calculation"
    ],
    answer: 0,
    explanation: "Rectangles depict action steps, procedures, or operations within the process."
  },
  {
    id: 44,
    lo: "LO 9C Demonstrate an understanding of how insurers can use flowcharts, Gantt charts, and PERT networks to manage projects.",
    question: "In standard flowcharting conventions, diamond shapes represent:",
    options: [
      "Yes/no decision points that determine which alternate path the process will follow",
      "Final termination end points",
      "The monetary cost of executing an activity",
      "Milestone completion events"
    ],
    answer: 0,
    explanation: "Diamonds represent conditional decision forks (e.g., 'Policy in force? Yes / No') that branch the workflow."
  },
  {
    id: 45,
    lo: "LO 9C Flowchart Benefits and Limitations.",
    question: "While developing a flowchart encourages critical thinking and documents workflow logic, what is a primary operational limitation of flowcharts?",
    options: [
      "They do not indicate the total amount of time required to complete individual activities and have limited value as scheduling tools for simultaneous tasks",
      "They cannot be drawn using modern computer software",
      "They cannot display yes/no decision logic",
      "They can only be understood by certified public accountants"
    ],
    answer: 0,
    explanation: "Flowcharts show sequential logic and decisions, but lack time durations, resource allocations, and concurrent scheduling capabilities."
  },
  {
    id: 46,
    lo: "LO 9C Claims Process Flowchart Scenario.",
    question: "In an insurance claims department flowchart, the examiner encounters the question 'Is policy in contestable period?'. If YES, the process branches to check for 'Material misrepresentation?'; if NO, the process routes directly to:",
    options: [
      "'Approve claim' (and proceed to benefit calculation and payment)",
      "'Deny claim' and end process immediately",
      "'Cancel all reinsurance treaties'",
      "'Notify the state insurance commissioner'"
    ],
    answer: 0,
    explanation: "If the policy is beyond the contestable period (typically 2 years), the claim cannot be contested for misstatement, leading directly to claim approval."
  },
  {
    id: 47,
    lo: "LO 9C Project Management Characteristics.",
    question: "All projects, regardless of complexity or length, share which fundamental characteristics?",
    options: [
      "They have a beginning and an end, include activities and milestone events, follow a sequence of steps, require time, and usually involve multiple people",
      "They are permanent continuous operations with no completion date",
      "They require zero financial resources or labor hours",
      "They can only be managed by external regulatory auditors"
    ],
    answer: 0,
    explanation: "A project is a temporary endeavor with defined start/end dates, activities, milestones, resource constraints, and cross-functional teams."
  },
  {
    id: 48,
    lo: "LO 9C Project Management: Activities vs. Events.",
    question: "In project management terminology, how is an activity distinguished from an event?",
    options: [
      "An activity is an operation that takes time and requires resources, whereas an event (milestone) marks the specific point in time when one or more activities are completed",
      "An activity takes zero time, whereas an event requires several months of labor",
      "An activity is always represented by a circle, whereas an event is represented by an arrow",
      "An activity is a financial payment, whereas an event is an underwriting rejection"
    ],
    answer: 0,
    explanation: "Activities represent work in progress requiring time and effort. Events are instantaneous milestone points marking task completion or phase transitions."
  },
  {
    id: 49,
    lo: "LO 9C Activity vs. Event Scenario.",
    question: "In the product development process, 'Drafting and revising policy contract forms' is a(n) __________, while 'Receiving state insurance department regulatory approval' is a(n) __________.",
    options: [
      "Activity; event (milestone)",
      "Event; activity",
      "Decision diamond; terminal oval",
      "Variance; standard deviation"
    ],
    answer: 0,
    explanation: "Drafting/revising is ongoing work (activity); receiving regulatory approval is a discrete milestone achievement (event)."
  },
  {
    id: 50,
    lo: "LO 9C Project Management Roles.",
    question: "In modern agile project management, a scrum master is an individual who:",
    options: [
      "Facilitates development teams, removes operational roadblocks, and manages processes for the exchange of technical information",
      "Determines the statutory interest rate for life insurance active life reserves",
      "Audits corporate tax filings for the Internal Revenue Service",
      "Sells whole life insurance policies to commercial employers"
    ],
    answer: 0,
    explanation: "Scrum masters facilitate Agile workflows, guide cross-functional teams, resolve impediments, and ensure productive sprint execution."
  },
  {
    id: 51,
    lo: "LO 9C Gantt Charts.",
    question: "A Gantt chart is defined as a graphical scheduling tool that:",
    options: [
      "Separates projects into critical activities and plots scheduled starting and ending dates for each activity along a horizontal calendar timeline",
      "Calculates the weighted average expected time of three probabilistic estimates",
      "Displays customer satisfaction as a circular pie chart",
      "Ranks sales agents in descending order of persistency"
    ],
    answer: 0,
    explanation: "Gantt charts visually schedule project tasks using horizontal bars across a time scale, showing start dates, end dates, and durations."
  },
  {
    id: 52,
    lo: "LO 9C Gantt Charts in Product Development.",
    question: "In a project Gantt chart, how do managers visually distinguish between completed tasks and planned work in progress?",
    options: [
      "Activity blocks or bars are shaded/colored to represent completed duration and left empty or outlined for planned future duration",
      "Completed tasks are erased from the chart entirely",
      "Planned tasks are marked with red lightning bolts",
      "Completed tasks are converted into decision diamonds"
    ],
    answer: 0,
    explanation: "Gantt charts use filled/shaded bars to indicate completed progress against baseline planned schedules."
  },
  {
    id: 53,
    lo: "LO 9C PERT Networks.",
    question: "A Program Evaluation and Review Technique (PERT) network is a project scheduling tool designed to:",
    options: [
      "Help organizations plan, coordinate, and shorten the time needed to complete large, complex projects with interdependent activities",
      "Calculate compound annual growth rates for variable life subaccounts",
      "Audit quarterly balance sheet equity reserves",
      "Draft customized marketing emails for prospective annuity buyers"
    ],
    answer: 0,
    explanation: "PERT networks map complex, multi-task dependencies and calculate project completion paths using network diagrams."
  },
  {
    id: 54,
    lo: "LO 9C PERT Network Elements.",
    question: "A PERT network is constructed using four fundamental elements:",
    options: [
      "Events (milestones), activities (tasks), time estimates, and the critical path",
      "Means, medians, modes, and standard deviations",
      "Ovals, rectangles, diamonds, and triangles",
      "Financial, customer, internal business, and learning perspectives"
    ],
    answer: 0,
    explanation: "The four core elements of a PERT network are: (1) Events, (2) Activities, (3) Time estimates, and (4) Critical Path."
  },
  {
    id: 55,
    lo: "LO 9C PERT Three Time Estimates.",
    question: "To calculate expected activity times in a PERT network, project managers generate three distinct time estimates for each activity:",
    options: [
      "Optimistic time (a), most probable time (m), and pessimistic time (b)",
      "Past time, present time, and future time",
      "Mean time, median time, and modal time",
      "First-year time, renewal time, and vesting time"
    ],
    answer: 0,
    explanation: "PERT uses three probabilistic duration estimates: Optimistic ($a$), Most Probable ($m$), and Pessimistic ($b$)."
  },
  {
    id: 56,
    lo: "LO 9C PERT Expected Time Formula.",
    question: "The formula used to calculate the weighted average expected time (Te) for an activity in a PERT network is:",
    options: [
      "Expected Time = (a + 4m + b) / 6",
      "Expected Time = (a + m + b) / 3",
      "Expected Time = (a + 2m + b) / 4",
      "Expected Time = (4a + m + b) / 6"
    ],
    answer: 0,
    explanation: "The standard PERT expected time formula is $T_e = \frac{a + 4m + b}{6}$, which places four times as much weight on the most probable time ($m$)."
  },
  {
    id: 57,
    lo: "LO 9C PERT Expected Time Calculation Scenario.",
    question: "For a software development task, the optimistic time (a) is 10 days, the most probable time (m) is 16 days, and the pessimistic time (b) is 20 days. What is the expected time to complete this activity?",
    options: [
      "15.7 days (calculated as [10 + (4 * 16) + 20] / 6 = [10 + 64 + 20] / 6 = 94 / 6)",
      "16.0 days",
      "15.3 days",
      "18.7 days"
    ],
    answer: 0,
    explanation: "$[10 + 4(16) + 20] / 6 = [10 + 64 + 20] / 6 = 94 / 6 \approx 15.67$ (or 15.7) days."
  },
  {
    id: 58,
    lo: "LO 9C PERT Expected Time Calculation Scenario.",
    question: "For an actuarial pricing task, the optimistic time (a) is 6 days, the most probable time (m) is 9 days, and the pessimistic time (b) is 18 days. What is the expected completion time?",
    options: [
      "10.0 days (calculated as [6 + (4 * 9) + 18] / 6 = [6 + 36 + 18] / 6 = 60 / 6)",
      "11.0 days",
      "9.0 days",
      "12.5 days"
    ],
    answer: 0,
    explanation: "$[6 + 4(9) + 18] / 6 = [6 + 36 + 18] / 6 = 60 / 6 = 10.0$ days."
  },
  {
    id: 59,
    lo: "LO 9C PERT Critical Path Definition.",
    question: "In a PERT network, the critical path is defined as:",
    options: [
      "The longest, most time-consuming sequence of connected activities and events from project start to finish",
      "The path that contains the greatest total number of activities",
      "The path with the lowest financial cost",
      "The sequence of tasks that requires zero manager supervision"
    ],
    answer: 0,
    explanation: "The critical path is the longest continuous chain of dependent activities; it determines the minimum total calendar time required to finish the project."
  },
  {
    id: 60,
    lo: "LO 9C Critical Path Project Impact.",
    question: "Why is identifying the critical path of paramount importance to project managers?",
    options: [
      "Because any delay in an activity located on the critical path will directly delay the completion of the entire project",
      "Because activities on the critical path never require financial budget approvals",
      "Because non-critical activities cannot be performed until the critical path is finished",
      "Because critical path activities can only be executed by external third-party contractors"
    ],
    answer: 0,
    explanation: "Activities on the critical path have zero slack (float) time; any slippage directly delays final project delivery."
  },
  {
    id: 61,
    lo: "LO 9C PERT Path Duration Evaluation Scenario.",
    question: "A new product launch PERT network has four distinct paths: Path 1 takes 55 days, Path 2 takes 61 days, Path 3 takes 68 days, and Path 4 takes 101 days. Which path is the critical path, and what is the total project duration?",
    options: [
      "Path 4 is the critical path, and the minimum project completion time is 101 days",
      "Path 1 is the critical path, and the project duration is 55 days",
      "Path 3 is the critical path, and the project duration is 68 days",
      "The average of all paths (71.25 days) is the project duration"
    ],
    answer: 0,
    explanation: "The critical path is the longest path (Path 4 at 101 days), establishing the total project timeline."
  },
  {
    id: 62,
    lo: "LO 9C Schedule Compression: Crashing.",
    question: "In project management, crashing is a schedule compression technique defined as:",
    options: [
      "Allocating additional resources (such as overtime, extra staff, or specialized equipment) to critical path activities to shorten their completion time",
      "Canceling the project due to catastrophic budget overruns",
      "Performing sequential activities in parallel without adding resources",
      "Eliminating all quality testing from the software release"
    ],
    answer: 0,
    explanation: "Crashing shortens task duration on the critical path by adding extra labor or financial resources (cost/time trade-off)."
  },
  {
    id: 63,
    lo: "LO 9C Schedule Compression: Fast Tracking.",
    question: "In project management, fast tracking is a schedule compression technique defined as:",
    options: [
      "Revisiting the critical path to perform sequential activities simultaneously (in parallel) that were originally planned to be done in sequence",
      "Doubling the hourly pay rate of all software programmers",
      "Deleting all documentation requirements from the project plan",
      "Hiring an external consulting firm to take over the entire company"
    ],
    answer: 0,
    explanation: "Fast tracking overlaps dependent or sequential activities so they execute concurrently, reducing total time without necessarily increasing direct labor costs (though increasing rework risk)."
  },
  {
    id: 64,
    lo: "LO 9C Limitations of PERT and Scheduling Models.",
    question: "Under what conditions can a PERT network or Gantt chart provide misleading or inaccurate management information?",
    options: [
      "When the underlying time estimates, sequencing assumptions, or task dependencies are inaccurate, unrealistic, or fail to be periodically updated as the project evolves",
      "When the project uses computerized project management software",
      "When activities are measured in business days rather than calendar days",
      "When the project involves more than two departments"
    ],
    answer: 0,
    explanation: "Scheduling tools depend entirely on the quality of their input assumptions; flawed duration estimates or outdated logic render the critical path misleading."
  },
  {
    id: 65,
    lo: "LO 9C Schedule Compression Scenario.",
    question: "Due to regulatory delays, an insurer falls 3 weeks behind schedule on administrative system installation. To launch the product on time, the manager authorizes overtime pay for system programmers and deploys two senior engineers from another unit to work on system debugging. This action is an example of:",
    options: [
      "Crashing",
      "Fast tracking",
      "Benchmarking",
      "Auto-adjudication"
    ],
    answer: 0,
    explanation: "Adding extra personnel and authorizing overtime expenditure to accelerate task completion is project crashing."
  },

  // --- LO 9D: Performance Management: Dashboards & Balanced Scorecards (Q66 - Q80) ---
  {
    id: 66,
    lo: "LO 9D Describe how insurance companies can use dashboards and balanced scorecards to manage business performance.",
    question: "In corporate operations, a performance dashboard is defined as:",
    options: [
      "A system application that combines key business performance metrics from multiple operational sources into a single, consolidated, easy-to-read graphical interface",
      "A physical mahogany wooden control desk installed in the CEO's office",
      "A statutory document filed annually with state insurance commissioners",
      "A spreadsheet containing an alphabetical list of employee telephone extensions"
    ],
    answer: 0,
    explanation: "A performance dashboard aggregates real-time KPIs and operational data from disparate enterprise systems into a unified visual cockpit."
  },
  {
    id: 67,
    lo: "LO 9D Describe how insurance companies can use dashboards and balanced scorecards to manage business performance.",
    question: "Which of the following visual components is commonly featured on an insurance company executive dashboard?",
    options: [
      "Visual dials/gauges showing YTD profits vs. targets, regional sales heat maps, monthly premium pie charts, and sales trend lines with drill-down links",
      "The full text of the state insurance code spanning 2,000 pages",
      "Scanned copies of paper checks deposited five years ago",
      "Unorganized raw transaction server logs in hexadecimal code"
    ],
    answer: 0,
    explanation: "Dashboards feature visual summaries—gauges, charts, heat maps, status indicators, and interactive drill-down links to underlying details."
  },
  {
    id: 68,
    lo: "LO 9D Describe how insurance companies can use dashboards and balanced scorecards to manage business performance.",
    question: "How do performance dashboards improve executive decision-making and operational efficiency?",
    options: [
      "They allow managers to monitor departmental contributions at a glance, track product performance, spot operational bottlenecks, and eliminate the need for manual multi-source report compiling",
      "They automatically eliminate all customer service complaints",
      "They guarantee that market interest rates will rise by 200 basis points",
      "They exempt the company from corporate income taxes"
    ],
    answer: 0,
    explanation: "Dashboards synthesize enterprise metrics, providing actionable business intelligence and early warnings for operational issues."
  },
  {
    id: 69,
    lo: "LO 9D Describe how insurance companies can use dashboards and balanced scorecards to manage business performance.",
    question: "A balanced scorecard is defined as a strategic performance management tool that:",
    options: [
      "Translates a company's mission and strategy into specific operational goals and monitors performance across four balanced financial and nonfinancial perspectives",
      "Calculates the exact mortality charge deducted from universal life policy values",
      "Measures the physical dimensions of office computer equipment",
      "Audits the corporate cafeteria's weekly grocery expenditures"
    ],
    answer: 0,
    explanation: "The Balanced Scorecard (developed by Kaplan & Norton) aligns business activities to corporate vision by tracking performance across financial and operational dimensions."
  },
  {
    id: 70,
    lo: "LO 9D Describe how insurance companies can use dashboards and balanced scorecards to manage business performance.",
    question: "What sits at the very center of a balanced scorecard framework, driving all organizational objectives and performance targets?",
    options: [
      "The company's mission and core strategy",
      "The quarterly IT hardware maintenance budget",
      "The state insurance commissioner's election campaign",
      "The company's commercial real estate mortgage portfolio"
    ],
    answer: 0,
    explanation: "The organization's mission statement and strategic vision form the core hub from which all balanced scorecard goals radiate."
  },
  {
    id: 71,
    lo: "LO 9D Describe how insurance companies can use dashboards and balanced scorecards to manage business performance.",
    question: "The balanced scorecard evaluates organizational performance across which four standard perspectives?",
    options: [
      "Financial, Customer, Internal Business Processes, and Growth & Innovation (Learning & Growth)",
      "Underwriting, Actuarial, Claims, and Legal",
      "Hardware, Software, Networks, and Databases",
      "Ascending, Descending, Grouped, and Ungrouped"
    ],
    answer: 0,
    explanation: "The four standard balanced scorecard quadrants are: (1) Financial, (2) Customer, (3) Internal Business Processes, and (4) Growth & Innovation."
  },
  {
    id: 72,
    lo: "LO 9D Balanced Scorecard: Financial Perspective.",
    question: "In a balanced scorecard, the financial perspective focuses primarily on answering which fundamental question?",
    options: [
      "'How do we look to our shareholders and financial stakeholders?' (e.g., profitability, revenue growth, cost reduction, return on equity)",
      "'How do customers perceive our products and services?'",
      "'In which internal operational processes must we excel?'",
      "'How can we continue to improve, learn, and create future value?'"
    ],
    answer: 0,
    explanation: "The financial perspective evaluates shareholder value creation, return on capital, operating margins, and revenue growth."
  },
  {
    id: 73,
    lo: "LO 9D Balanced Scorecard: Customer Perspective.",
    question: "In a balanced scorecard, the customer perspective focuses primarily on answering which fundamental question?",
    options: [
      "'How do customers see us and experience our products and services?' (e.g., customer satisfaction, brand loyalty, retention rates, net promoter score)",
      "'What is our quarterly statutory risk-based capital ratio?'",
      "'How many servers are operating in the IT data center?'",
      "'What are the legal terms of our reinsurance treaties?'"
    ],
    answer: 0,
    explanation: "The customer perspective tracks customer satisfaction, retention, net promoter metrics, and service responsiveness."
  },
  {
    id: 74,
    lo: "LO 9D Balanced Scorecard: Internal Business Perspective.",
    question: "In a balanced scorecard, the internal business perspective focuses primarily on answering which fundamental question?",
    options: [
      "'What internal processes and operational workflows must we excel at to satisfy customers and shareholders?' (e.g., underwriting turnaround, claims accuracy, straight-through processing rates)",
      "'How much dividend payout will common shareholders receive?'",
      "'What percentage of website visitors download product brochures?'",
      "'What is the remaining life expectancy of a 65-year-old annuitant?'"
    ],
    answer: 0,
    explanation: "Internal business processes measure cycle times, quality control, STP rates, and operational efficiency across core workflows."
  },
  {
    id: 75,
    lo: "LO 9D Balanced Scorecard: Growth & Innovation Perspective.",
    question: "In a balanced scorecard, the growth and innovation (learning and growth) perspective focuses on:",
    options: [
      "'How can we continue to improve, innovate, develop employee capabilities, and create future enterprise value?' (e.g., employee training, digital tool adoption, new product R&D)",
      "'What was last month's total premium revenue?'",
      "'How many claims were denied during the contestable period?'",
      "'What is the price of office printer paper?'"
    ],
    answer: 0,
    explanation: "The growth/innovation perspective measures organizational learning, employee competencies, technological adoption, and product R&D."
  },
  {
    id: 76,
    lo: "LO 9D Balanced Scorecard Implementation Steps.",
    question: "To construct an effective balanced scorecard, an insurance company follows which four-step implementation process?",
    options: [
      "1. Translate mission into operational goals; 2. Link goals to performance areas; 3. Set target performance levels/indexes; 4. Compare actual performance against targets",
      "1. Calculate mean; 2. Square distances; 3. Divide by variance; 4. Plot normal curve",
      "1. Identify optimistic time; 2. Identify pessimistic time; 3. Divide by 6; 4. Crash critical path",
      "1. Build firewall; 2. Install antivirus; 3. Create VPN; 4. Require two-factor authentication"
    ],
    answer: 0,
    explanation: "Building a scorecard requires translating high-level strategy into specific operational goals, establishing target metrics, and benchmarking actual results."
  },
  {
    id: 77,
    lo: "LO 9D Balanced Scorecard Quadrant Classification Scenario.",
    question: "An insurer sets a strategic goal to 'Increase the percentage of clean term life applications processed via straight-through processing (STP) from 40% to 75% within 12 months.' This metric belongs in which balanced scorecard perspective?",
    options: [
      "Internal Business Processes perspective",
      "Financial perspective",
      "Customer perspective",
      "Growth and Innovation perspective"
    ],
    answer: 0,
    explanation: "STP automation rate measures internal operational efficiency and process excellence."
  },
  {
    id: 78,
    lo: "LO 9D Balanced Scorecard Quadrant Classification Scenario.",
    question: "An insurer tracks 'Average number of professional development and cybersecurity training hours completed per employee per year.' This metric belongs in which balanced scorecard perspective?",
    options: [
      "Growth and Innovation (Learning and Growth) perspective",
      "Financial perspective",
      "Customer perspective",
      "Internal Business Processes perspective"
    ],
    answer: 0,
    explanation: "Employee training and skill development fall under the growth, learning, and human capital perspective."
  },
  {
    id: 79,
    lo: "LO 9D Balanced Scorecard Quadrant Classification Scenario.",
    question: "An insurer measures 'Customer Net Promoter Score (NPS) and policy persistency rate at the 13th policy month.' This metric belongs in which balanced scorecard perspective?",
    options: [
      "Customer perspective",
      "Internal Business Processes perspective",
      "Financial perspective",
      "Growth and Innovation perspective"
    ],
    answer: 0,
    explanation: "NPS and customer retention/persistency reflect customer satisfaction and brand loyalty."
  },
  {
    id: 80,
    lo: "LO 9D Balanced Scorecard Quadrant Classification Scenario.",
    question: "An insurer tracks 'Return on Equity (ROE) and expense-to-premium ratio.' This metric belongs in which balanced scorecard perspective?",
    options: [
      "Financial perspective",
      "Customer perspective",
      "Internal Business Processes perspective",
      "Growth and Innovation perspective"
    ],
    answer: 0,
    explanation: "ROE and expense ratios measure financial performance and shareholder returns."
  },

  // --- LO 9E: Characteristics of Effective Data Presentation (Q81 - Q90) ---
  {
    id: 81,
    lo: "LO 9E Identify some characteristics of effective data presentation.",
    question: "In data visualization, the principle of simplicity requires designers to:",
    options: [
      "Avoid visual clutter, eliminate unnecessary animations and decorative additions, and remove heavy unneeded gridlines that distract from core data",
      "Use at least ten bright neon colors in every chart",
      "Include decorative 3D shading, clip art, and sound effects on all graphs",
      "Display all 100,000 raw customer transaction records on a single slide"
    ],
    answer: 0,
    explanation: "Simplicity eliminates distracting visual noise, non-essential gridlines, and ornamental clutter, focusing the viewer's attention on the essential data."
  },
  {
    id: 82,
    lo: "LO 9E Identify some characteristics of effective data presentation.",
    question: "In data visualization, the principle of intent dictates that the designer should:",
    options: [
      "Identify the specific information essential to influencing audience behavior and eliminate extraneous text so the message is readily absorbed",
      "Hide negative financial results by shrinking chart fonts to 4-point size",
      "Include every single intermediate calculation step in the main graph",
      "Present data exclusively in tabular format without any titles"
    ],
    answer: 0,
    explanation: "Intent ensures every visual element has a clear communication goal, delivering key takeaways without cognitive overload."
  },
  {
    id: 83,
    lo: "LO 9E Identify some characteristics of effective data presentation.",
    question: "The principle of purposeful design requires that visual presentations be designed with:",
    options: [
      "The specific audience, data characteristics, and display platform (such as mobile screens) in mind, using color meaningfully to categorize information",
      "Completely random color assignments that change on every page",
      "Complex technical jargon that only actuaries can understand",
      "Fixed desktop-only screen dimensions that cannot be scaled"
    ],
    answer: 0,
    explanation: "Purposeful design considers user context, responsive viewing across devices, and uses functional color coding."
  },
  {
    id: 84,
    lo: "LO 9E Identify some characteristics of effective data presentation.",
    question: "The principle of universality of meaning in data visualization means that designers should:",
    options: [
      "Adhere to established, intuitive cultural conventions when using colors and symbols (e.g., using red for danger/losses and green for healthy/target performance)",
      "Use green to indicate critical operational failure and red to indicate stellar profitability",
      "Use abstract decorative symbols like lightning bolts to represent customer satisfaction",
      "Invent new proprietary symbols that require an extensive decoding manual"
    ],
    answer: 0,
    explanation: "Universality of meaning leverages standard visual metaphors (red = stop/danger/loss; green = go/growth; blue/neutral = informational) to ensure immediate comprehension."
  },
  {
    id: 85,
    lo: "LO 9E Identify some characteristics of effective data presentation.",
    question: "The principle of appropriate match between information and illustration means that:",
    options: [
      "The chosen chart format must logically fit the nature of the data (e.g., using line graphs for longitudinal trends over time and pie charts for percentage shares)",
      "Every report must contain exactly one bar chart, one pie chart, and one line graph",
      "Tabular data should always be converted into complex 3D surface charts",
      "All numerical data should be illustrated using pictographs of animals"
    ],
    answer: 0,
    explanation: "Matching information to illustration ensures that data relationships (proportions, time series, geographic dispersion) are rendered in their most intuitive visual medium."
  },
  {
    id: 86,
    lo: "LO 9E Effective Visual Design Evaluation Scenario.",
    question: "Which of the following visual presentations exemplifies effective data visualization?",
    options: [
      "A clean circular cycle showing three control cost graphs with high text contrast, uniform fonts, directional arrows indicating a continuous process, and clear intent",
      "A graphic crammed with multiple conflicting fonts, non-functional smiley faces, low contrast yellow text on white background, and missing cycle arrows",
      "A 3D pie chart with 45 tiny overlapping slices labeled in 6-point font",
      "A line graph displaying only two data points with no axis scale labels"
    ],
    answer: 0,
    explanation: "High contrast, uniform typography, directional flow indicators, and focused content embody effective design."
  },
  {
    id: 87,
    lo: "LO 9E Color Usage in Data Graphics.",
    question: "When applying color to data visualizations in executive insurance reports, designers should:",
    options: [
      "Use color functionally to differentiate categories or highlight critical variance, while erring on the side of uniformity to avoid visual distraction",
      "Use a different vibrant rainbow color for every single bar in a 50-bar chart",
      "Use light gray text on a dark gray background to minimize ink usage",
      "Change the color scheme randomly across consecutive presentation slides"
    ],
    answer: 0,
    explanation: "Color should be semantic and purposeful (e.g., highlighting an outlier or grouping related categories) rather than merely decorative."
  },
  {
    id: 88,
    lo: "LO 9E Visual Hierarchy and Layout.",
    question: "To establish a clear visual hierarchy in a performance dashboard, designers should:",
    options: [
      "Depict related information together in logical groupings, using consistent shapes, fonts, and spatial alignment to guide the viewer's eye",
      "Scatter charts randomly across the screen with varying angles",
      "Make all chart titles identical in wording and color",
      "Place footnotes and disclaimers in the exact center of the main display"
    ],
    answer: 0,
    explanation: "Logical grouping, consistent alignment, and hierarchical typography allow executives to scan and interpret dashboard metrics effortlessly."
  },
  {
    id: 89,
    lo: "LO 9E Mobile Device Considerations.",
    question: "When designing data visualizations that will be accessed on tablet or mobile smartphone screens, a critical consideration is to:",
    options: [
      "Ensure touch targets are sufficiently sized, avoid dense multi-column tables that require excessive pinch-zooming, and keep text legible on smaller displays",
      "Eliminate all data charts and display only raw unformatted text files",
      "Force the mobile screen into desktop resolution mode permanently",
      "Require users to download a separate desktop operating system emulator"
    ],
    answer: 0,
    explanation: "Mobile-responsive data visualization requires legible font sizes, simplified layouts, touch-friendly interactive controls, and vertical responsiveness."
  },
  {
    id: 90,
    lo: "LO 9E Gridlines and Background Clutter.",
    question: "Why do data visualization experts recommend minimizing or removing heavy background gridlines in standard bar and line charts?",
    options: [
      "Because dense gridlines create visual clutter that competes with the data lines and bars without adding meaningful insight to general trend comparisons",
      "Because gridlines are legally prohibited in statutory financial statements",
      "Because computer graphics cards cannot render horizontal lines",
      "Because gridlines cause statistical calculations to become inaccurate"
    ],
    answer: 0,
    explanation: "Heavy gridlines add visual noise ('chartjunk'); subtle ticks or direct data labels convey values much more cleanly."
  },

  // --- LO 9F: Deceptive Visual Presentations & Prevention Strategies (Q91 - Q100) ---
  {
    id: 91,
    lo: "LO 9F Give examples of situations in which tables, charts, and graphs can present deceptive information and identify ways to avoid these problems.",
    question: "How can using an inappropriate or stretched scale on a graph create a deceptive visual impression?",
    options: [
      "By dramatically exaggerating small, insignificant differences or, conversely, flattening large, significant changes by expanding the axis range excessively",
      "By forcing all data points to become negative numbers",
      "By converting a line chart into a scatter plot automatically",
      "By changing the underlying mathematical mean of the raw population"
    ],
    answer: 0,
    explanation: "Manipulating vertical axis scales can optically distort reality—compressing the scale makes massive swings look flat, while stretching the scale makes tiny fluctuations look enormous."
  },
  {
    id: 92,
    lo: "LO 9F Scale Manipulation Scenario.",
    question: "Product sales fluctuate marginally between 1.0 and 1.5 units. Graph A plots the data on a vertical scale of 0 to 4.5. Graph B plots the exact same data on a scale of 0 to 45. In Graph B, the sales trajectory appears:",
    options: [
      "Much flatter and virtually unchanged, visually downplaying the variation compared to Graph A",
      "Much steeper with violent visual swings",
      "Identical in visual slope to Graph A",
      "Like a circular pie chart"
    ],
    answer: 0,
    explanation: "Expanding the vertical axis scale by 10x (0 to 45) compresses the curve vertically, making the sales line appear completely flat."
  },
  {
    id: 93,
    lo: "LO 9F Give examples of situations in which tables, charts, and graphs can present deceptive information and identify ways to avoid these problems.",
    question: "A graph presents investment returns ranging between 8.5% and 9.5%, but the vertical axis begins at 8.0% rather than 0% without any visual indicator. This cropped scale creates the visual deception that:",
    options: [
      "Small annual differences in return appear massive and dramatic, and absolute return levels appear much lower than they actually are",
      "The investment return is equal to zero",
      "The investment fund has experienced zero volatility",
      "The returns are normally distributed with zero standard deviation"
    ],
    answer: 0,
    explanation: "Cropping the axis (starting at 8% instead of 0%) magnifies minor fluctuations into huge visual swings, misleading the eye."
  },
  {
    id: 94,
    lo: "LO 9F Give examples of situations in which tables, charts, and graphs can present deceptive information and identify ways to avoid these problems.",
    question: "When an author must crop a vertical scale to highlight narrow variations in a limited space, what technique must be used to prevent misleading the audience?",
    options: [
      "Clearly indicate the cropped axis using a split vertical axis symbol (such as a jagged line or break mark) and explicit scale numbering",
      "Hide the axis numbers completely from the audience",
      "Change all line colors to bright yellow",
      "Convert the chart into an unorganized raw data table"
    ],
    answer: 0,
    explanation: "A visible split-axis break mark signals to the viewer that the baseline does not start at zero, preventing visual misinterpretation."
  },
  {
    id: 95,
    lo: "LO 9F Give examples of situations in which tables, charts, and graphs can present deceptive information and identify ways to avoid these problems.",
    question: "Showing multiple unrelated datasets on the same dual-axis line graph (such as life insurance policy sales and regional ice cream consumption over 10 years) can be deceptive because:",
    options: [
      "It falsely suggests an inherent cause-and-effect relationship or correlation between variables that are actually unrelated",
      "It causes computer software to delete the database records",
      "Dual-axis graphs cannot be rendered in color",
      "It violates federal antitrust market allocation rules"
    ],
    answer: 0,
    explanation: "Overlaying unrelated data series on dual axes can create spurious visual correlations, misleading viewers into inferring false causality."
  },
  {
    id: 96,
    lo: "LO 9F Give examples of situations in which tables, charts, and graphs can present deceptive information and identify ways to avoid these problems.",
    question: "An author creates a pictograph showing life insurance sales across product lines. Instead of using multiple identical document icons, the author uses a single document icon that expands in both height and width as sales increase. Why is this presentation deceptive and incorrect?",
    options: [
      "Scaling the physical dimensions (area/volume) of a single icon makes it appear that the size of individual policies is increasing rather than the number of policies sold, visually exaggerating the difference quadratically",
      "Document icons can only be displayed in black and white",
      "It requires viewers to calculate the square root of the variance",
      "Pictographs are prohibited in business presentations"
    ],
    answer: 0,
    explanation: "Scaling a symbol's 2D area (height x width) causes a 2x increase in value to appear 4x larger visually. Correct pictographs repeat identical unit symbols."
  },
  {
    id: 97,
    lo: "LO 9F Correct vs. Incorrect Pictograph Usage Scenario.",
    question: "To correctly illustrate that 80 Whole Life policies were sold compared to 20 Variable Life policies using a pictograph where one icon represents 10 policies, the designer should display:",
    options: [
      "8 identical uniform document icons for Whole Life and 2 identical uniform document icons for Variable Life",
      "One massive document icon four times wider and four times taller for Whole Life",
      "A pie chart cut into 80 microscopic slices",
      "A single diamond flowchart decision symbol"
    ],
    answer: 0,
    explanation: "Accurate pictographs stack or repeat multiple identical unit icons (8 icons vs. 2 icons) rather than distorting symbol geometry."
  },
  {
    id: 98,
    lo: "LO 9F Deceptive Data Visualization Summary.",
    question: "Which of the following practices constitutes a deceptive and flawed data visualization technique?",
    options: [
      "Truncating the vertical axis without a split indicator, scaling pictograph icon sizes instead of counts, and using dual axes to imply false causality",
      "Providing clear axis titles, legends, and sourcing footnotes",
      "Using consistent fonts and high-contrast color schemes",
      "Organizing tabular data in logical descending numerical order"
    ],
    answer: 0,
    explanation: "Truncated scales without breaks, area-distorted icons, and misleading dual-axis alignments are classic deceptive charting practices."
  },
  {
    id: 99,
    lo: "LO 9F Ineffective Line Graph Usage.",
    question: "An analyst creates a line graph to depict total quality control costs using only two data points: 'Costs Last Year' and 'Costs This Year'. Why is using a line graph for this data ineffective?",
    options: [
      "Using a continuous line to connect only two static points in time confuses the frame of reference and gives a false visual impression of continuous change over time; a simple two-bar chart is far clearer",
      "Line graphs can only be drawn if there are at least 1,000 data points",
      "The line graph will automatically calculate a negative standard deviation",
      "Connecting two points requires calculating a PERT expected time formula"
    ],
    answer: 0,
    explanation: "Two discrete annual points do not represent a continuous trend; a two-bar comparison or simple table is more accurate and clear."
  },
  {
    id: 100,
    lo: "LO 9F Ethical Data Reporting in Insurance.",
    question: "Clear, accurate, and ethical data visualization is essential in the insurance industry because:",
    options: [
      "Executives, actuaries, regulators, and consumers rely on transparent visual presentations to evaluate solvency, assess operational risk, price products fairly, and make sound financial decisions",
      "It guarantees that an insurance company will never face a market conduct examination",
      "State laws require that all insurance reports be approved by a graphic designer",
      "It completely eliminates the need for mathematical statistical formulas"
    ],
    answer: 0,
    explanation: "Insurance is built on fiduciary trust, actuarial accuracy, and statistical integrity; truthful, transparent data visualization ensures sound governance and consumer protection."
  }
];
