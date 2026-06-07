(function () {
  const WA = "919043946087";
  const NAVY = "#0A1860", BLUE = "#1A3CFF", CYAN = "#00C8FF";

  // ── Tool knowledge base ──────────────────────────────────────────────────
  const TOOL_KB = {
    // ── HEALTHCARE Phase 1 ──
    "clinic revenue leakage": "The Clinic Revenue Leakage Detector identifies where your clinic is silently losing money — through missed billing, under-priced services, unpaid follow-ups, and no-shows. It gives you a monthly leakage estimate and a recovery roadmap. Most clinics recover ₹15,000–₹80,000/month after using it.",
    "patient no-show": "The Patient No-Show Predictor scores each appointment for no-show risk based on booking gap, channel, and history. It then triggers WhatsApp/SMS reminders automatically to reduce no-shows by up to 60%. For a clinic seeing 300 patients/month, that can mean ₹30,000+ in recovered revenue.",
    "staff productivity": "The Staff Productivity Analyser tracks doctor utilisation, nurse workload, and admin efficiency. It scores your team against industry benchmarks and surfaces bottlenecks before they become burnout. Ideal for clinics with 3+ staff.",
    "marketing roi": "The Healthcare Marketing ROI Calculator shows you cost-per-patient-acquisition across every channel — Google Ads, social media, referrals, and offline campaigns. Know exactly which ₹ is working and which is wasted.",
    "treatment cost": "The Treatment Cost Estimator generates itemised pre-treatment cost breakdowns for patients. Builds trust, reduces billing disputes, and speeds up TPA/insurance pre-auth. Embeddable on your website.",
    "clinic growth": "The Clinic Growth Dashboard gives you a single growth score based on patient volume, revenue trend, Google ratings, and retention. It tells you exactly what to fix next to grow faster.",
    "health risk": "The Patient Health Risk Assessment screens for Type 2 Diabetes, Hypertension, and cardiovascular risk in under 2 minutes using standard clinical parameters. Perfect for OPD and health camps.",
    "appointment assistant": "The AI Appointment Assistant automates booking, rescheduling, and post-visit follow-ups via WhatsApp — 24/7 with zero staff effort. It handles multi-doctor, multi-slot scheduling and reduces booking call time by 80%.",
    "digital token": "The Digital Token System eliminates waiting room chaos. Patients get tokens via WhatsApp, wait from home, and arrive on time. Includes real-time queue display for your reception screen.",
    // ── HEALTHCARE Phase 2 ──
    "opd revenue": "The OPD Revenue Maximizer analyses your OPD's consultation volume, fee structure, ancillary revenue, and no-show rate to compute maximum revenue potential and current gap. Most OPDs recover ₹30,000–₹1,20,000/month.",
    "clinic expansion": "The Clinic Expansion ROI Planner models revenue, cost, break-even, and ROI for clinic expansion scenarios — adding a branch, increasing space, or adding specialities. Answers the key question: should I expand now?",
    "pharmacy margin": "The In-House Pharmacy Margin Calculator helps you calculate drug procurement cost, margin on MRP, optimal stock level, and net pharmacy profit. Most in-house pharmacies achieve 20–30% blended margin.",
    "doctor utilisation": "The Doctor Utilisation Tracker monitors consultations per hour, idle time, and revenue per doctor — with benchmark comparison. Know which doctors are underperforming and why.",
    "lab test pricing": "The Lab Test Pricing Optimizer analyses your cost per test, local market pricing, and competitive positioning to set optimal test prices that balance competitiveness with profitability.",
    "telemedicine revenue": "The Telemedicine Revenue Calculator models patient reach, consultation volume, fee structure, and monthly revenue from telemedicine services — compared to in-person economics.",
    "nurse staffing": "The Nurse Staffing Calculator determines optimal nurse-to-patient ratios, shift requirements, and staffing cost for wards, ICU, OT, and OPD based on Indian Nursing Council guidelines.",
    "equipment depreciation": "The Medical Equipment Depreciation Planner calculates straight-line and WDV depreciation, maintenance cost escalation, and optimal replacement timing for all your medical equipment.",
    "bed occupancy": "The IPD Bed Occupancy Optimizer tracks occupancy rate, average length of stay, bed turnover ratio, and revenue per available bed — with specific improvement recommendations.",
    "tpa claims": "The TPA Insurance Claims Tracker monitors claim submission rate, rejection rate, average TAT, and monthly cash flow impact from TPA and insurance empanelments.",
    "patient satisfaction": "The Patient Satisfaction Score Calculator measures your Net Promoter Score, Patient Satisfaction Index, and Google Review impact — with improvement recommendations by department.",
    "clinic catchment": "The Clinic Catchment Area Analyser maps where your patients come from, competition density, and untapped neighbourhoods — to plan targeted patient acquisition.",
    "surgical package": "The Surgical Package Pricing Tool calculates procedure cost across OT, anaesthesia, implants, drugs, and stay — then benchmarks against market to set optimal package prices.",
    "health camp roi": "The Health Camp ROI Calculator computes health camp cost, new patient conversions, revenue generated, and long-term patient lifetime value from camp investments.",
    "clinical waste": "The Clinical Waste Management Cost Calculator estimates biomedical waste volume, segregation compliance score, disposal cost, and regulatory penalty risk.",
    "digital marketing roi": "The Clinic Digital Marketing ROI Calculator measures cost per new patient from Google Ads, Meta Ads, Google Business Profile, and referral programs — with ROI comparison across channels.",
    "patient retention": "The Patient Retention & Recall Calculator measures retention rate, recall conversion, and revenue impact — with personalized follow-up ROI analysis.",
    "diagnostic feasibility": "The Diagnostic Centre Feasibility Tool models investment, equipment, test volume, revenue, and payback period for a diagnostic centre business.",
    "clinical staff": "The Clinical Staff Productivity Planner tracks receptionist, billing, housekeeping, and security staff productivity — with optimal staffing ratios and shift allocation.",
    "hospital bed planning": "The Hospital Bed Planning Tool calculates required beds by specialty, investment per bed, operational cost, and revenue per bed for hospital planning.",
    "ayush clinic": "The AYUSH Clinic ROI Calculator models investment, patient volume, revenue, and payback period for Ayurveda, Yoga, or Homeopathy clinic setup.",
    "cashless package": "The Cashless Package Designer creates CGHS/ESI/TPA-compliant treatment packages with appropriate costing, ICD codes, and documentation requirements.",
    "healthcare startup": "The Healthcare Startup Feasibility Calculator models investment, revenue projections, break-even timeline, and ROI for any healthcare business.",
    "medical tourism": "The Medical Tourism ROI Calculator models international patient volume, package pricing, logistics cost, and net revenue from a medical tourism program.",
    "infection control": "The Infection Control Cost Calculator estimates PPE cost, sterilization cost, disinfection cost, and total infection control budget per patient.",
    "palliative care": "The Palliative Care Cost Planner estimates cost and resource requirements for establishing a palliative care unit — including home palliative and inpatient hospice services.",
    // ── REAL ESTATE Phase 1 ──
    "property affordability": "The Property Affordability Calculator gives buyers a realistic purchase range based on income, liabilities, and down payment — with EMI projections and a readiness score. Helps brokers qualify buyers faster.",
    "rental yield": "The Rental Yield Calculator computes gross and net rental yield and compares it against FD and equity returns — so you know whether to rent, sell, or hold your property.",
    "property roi": "The Property ROI Projection Tool models capital appreciation + rental income over 5–10 years. Compare multiple properties side-by-side to find the best investment.",
    "home loan": "The Home Loan Eligibility Checker gives an instant loan eligibility estimate based on income, credit score, and liabilities — modelled on SBI, HDFC, ICICI, and Axis norms.",
    "property comparison": "The Property Comparison Tool evaluates up to 3 properties on 12 parameters — price, location, builder reputation, amenities, rental potential, and resale demand — in a structured report.",
    "broker lead": "The Broker Lead Tracker manages your property pipeline from enquiry to closure with follow-up reminders, budget scoring, and conversion probability — built specifically for real estate brokers.",
    "locality": "The Locality Intelligence Report gives you a full neighbourhood profile — infrastructure pipeline, price trends, social amenities, and a growth grade (A–D) for any Indian pin code.",
    "should i buy": "The Should I Buy This Property tool gives an honest Buy/Wait/Skip verdict based on financial readiness, market timing, property value, and urgency — no bias, no pressure.",
    // ── REAL ESTATE Phase 2 ──
    "nri investment": "The NRI Investment Calculator evaluates ROI, tax implications, repatriation rules, and net returns for NRI property investments in India.",
    "emi vs rent": "The EMI vs Rent Analyzer compares the real 10-year cost of buying vs renting — factoring in opportunity cost, EMI, maintenance, and appreciation.",
    "pre-launch roi": "The Pre-Launch ROI Estimator calculates appreciation, completion risk, and net ROI on pre-launch property investments with risk-adjusted return calculations.",
    "portfolio tracker": "The Real Estate Portfolio Tracker monitors current value, rental yield, loan outstanding, and total net worth across all your property investments.",
    "resale value": "The Resale Value Predictor projects your property's future resale value in 1, 3, and 5 years using appreciation trends and infrastructure pipeline data.",
    "flat handover": "The Flat Handover Checklist Tool provides 150+ inspection points covering civil, electrical, plumbing, and finishing — protecting your investment at possession.",
    "rera compliance": "The RERA Compliance Checker verifies registration status, quarterly update compliance, escrow adherence, and legal clearances for any project.",
    "rental agreement": "The Rental Agreement Fee Calculator computes stamp duty, registration fee, broker commission, and security deposit for any rental property.",
    "stamp duty": "The Stamp Duty Estimator calculates exact stamp duty and registration charges for property purchase in Tamil Nadu, Maharashtra, Karnataka, and other states.",
    "lease vs buy": "The Lease vs Buy Analyzer compares the 10-year financial impact of leasing vs buying commercial property — factoring in opportunity cost and tax benefits.",
    "commercial roi": "The Commercial Space ROI Calculator calculates gross yield, net yield, and 10-year IRR for commercial property investments.",
    "housing loan tax": "The Housing Loan Tax Benefit Calculator computes exact tax savings under Section 80C, 24(b), and 80EEA for your home loan.",
    "builder scorecard": "The Builder Credibility Scorecard evaluates any developer on 20 parameters — delivery history, RERA compliance, legal clearances, and financial health.",
    "vacancy cost": "The Vacancy Cost Calculator computes the true monthly cost of vacant property — lost rent, ongoing EMI, maintenance, and opportunity cost.",
    "land conversion": "The Land Conversion Cost Estimator calculates conversion fees, NA order charges, stamp duty, and legal fees for agricultural to non-agricultural land conversion.",
    "joint venture": "The Joint Venture Profit Splitter models revenue sharing, cost allocation, and net profit distribution for builder-landowner joint ventures.",
    // ── CONSTRUCTION Phase 1 ──
    "peb": "The PEB Budget Estimator calculates material, fabrication, and erection costs for Pre-Engineered Buildings in under 3 minutes — based on span, height, and end-use. ±15% accuracy for budgeting.",
    "warehouse cost": "The Warehouse Cost Estimator covers civil, structural, MEP, and fit-out costs for basic to Grade-A warehouses. Supports both RCC and PEB construction methods.",
    "cold storage": "The Cold Storage ROI Calculator models construction cost, operating expenses, rental income, and payback period. Includes NABARD subsidy modelling for eligible projects.",
    "construction timeline": "The Construction Timeline Planner generates a phased project schedule from approvals to handover — with critical path identification and monsoon adjustment. Exports to Gantt chart.",
    "steel weight": "The Steel Weight Calculator computes IS section weights (ISMB, ISMC, ISA, SHS, RHS, CHS) by length and quantity — instant BOQ-ready output for estimation and procurement.",
    "boq": "The BOQ Generator creates a preliminary Bill of Quantities across civil, structural, architectural, and MEP trades — ±20% accuracy for budgeting, with DSR-based unit rates.",
    "roofing": "The Roofing Sheet Calculator gives exact sheet counts, fastener quantities, and ridge/flashing lengths — with wastage allowance for corrugated, trapezoidal, and standing seam profiles.",
    "industrial roi": "The Industrial ROI Calculator models CAPEX, revenue, operating costs, and capacity utilisation to compute payback period and 10-year ROI — with IRR, NPV, and DSCR on paid plans.",
    // ── CONSTRUCTION Phase 2 ──
    "concrete mix": "The Concrete Mix Design Calculator computes cement, sand, aggregate, and water quantities for M10 to M40 grade concrete with IS 456 compliance.",
    "brickwork": "The Brickwork Estimator calculates exact brick and mortar quantities for any wall — supporting standard brick, modular brick, and AAC block specifications.",
    "electrical load": "The Electrical Load Calculator sizes your electrical system accurately — computing total connected load, demand load, panel size, and generator capacity.",
    "plumbing material": "The Plumbing Material Estimator calculates CPVC, PPR, and GI pipe quantities, fittings, and total plumbing material cost for any building.",
    "labour cost": "The Labour Cost Planner estimates daily rates, total man-days, and total labour cost by trade — mason, carpenter, electrician, plumber, and general labour.",
    "delay penalty": "The Project Delay Penalty Calculator estimates liquidated damages, escalation costs, and total penalty exposure for construction project delays.",
    "material inflation": "The Material Price Inflation Tracker monitors price trends and calculates inflation impact on budgets for cement, steel, sand, and other key materials.",
    "foundation cost": "The Foundation Cost Estimator calculates strip, raft, pile, and isolated footing costs based on soil bearing capacity, load, and building type.",
    "paint area": "The Paint Area Calculator estimates paint coverage, number of coats, total litres required, and cost for interior and exterior surfaces.",
    "solar roi": "The Solar Panel ROI Calculator computes system size, generation capacity, grid savings, subsidy benefits, and payback period for rooftop solar.",
    "rainwater harvesting": "The Rainwater Harvesting Calculator estimates catchment area, storage capacity, recharge potential, and system cost — including TNPCB compliance guidance.",
    "lift cost": "The Lift/Elevator Cost Planner estimates elevator purchase, installation, annual maintenance contract, and 10-year lifecycle cost for any building type.",
    "site safety": "The Site Safety Compliance Checker audits your construction site against BIS, OSHA, and BOCW Act requirements — covering PPE, scaffolding, electrical safety, and fire prevention.",
    "green building": "The Green Building Cost Estimator calculates additional cost of green building features vs conventional construction, with payback period analysis.",
    "prefab vs rcc": "The Prefab vs RCC Cost Comparator calculates construction cost, timeline, waste generation, and 20-year lifecycle cost for prefab vs conventional construction.",
    "tender margin": "The Tender Margin Calculator computes direct costs, overhead, profit margin, and optimum bid price for any construction tender.",
    "subcontractor rate": "The Subcontractor Rate Benchmarker compares your subcontractor rates against market benchmarks for civil, MEP, finishing, and specialized trades.",
    "waterproofing": "The Waterproofing Area Calculator estimates waterproofing material quantity and cost for terrace, bathroom, basement, and water tank applications.",
    "glazing facade": "The Glazing & Facade Cost Estimator calculates cost of unitized curtain wall, stick system, structural glazing, and window wall systems.",
    "hvac load": "The HVAC Load Calculator computes cooling load in TR, equipment capacity, duct sizing, and system cost using ASHRAE and NBC methods.",
    "site clearance": "The Site Clearance Cost Estimator budgets for existing structure demolition, debris disposal, excavation, leveling, and site preparation.",
    "construction finance": "The Construction Finance ROI Tool calculates IRR, NPV, equity return, and project ROI for residential and commercial construction financing.",
    "scaffold": "The Scaffold Requirement Calculator estimates scaffolding components, erection days, rental cost, and safety requirements for any building height.",
    // ── EDUCATION Phase 1 ──
    "course eligibility": "The Course Eligibility Checker instantly validates whether a student meets entry criteria for any programme — reducing manual screening time for admissions teams by 70%.",
    "scholarship": "The Scholarship Eligibility Finder matches students to government, private, and merit-based scholarships they qualify for — improving enrolment and reducing dropout due to financial barriers.",
    "student performance": "The Student Performance Analyser tracks scores across subjects, identifies weak areas, and flags at-risk students early — so faculty can intervene before exams.",
    "fee reminder": "The Fee Reminder System automates WhatsApp and SMS alerts for due fees — reducing collection delays and uncomfortable manual follow-up calls for your admin team.",
    "exam planner": "The Exam Planner generates personalised study schedules based on syllabus, subject weightage, and available days — helping students study smarter, not harder.",
    "career recommendation": "The Career Recommendation Tool matches students to career paths based on interests, strengths, and current market demand — backed by real industry data.",
    "admission followup": "The Admission Follow-up Tracker manages every enquiry from first contact to enrolment — with stage-wise follow-up reminders so no lead goes cold.",
    "marks predictor": "The Marks Predictor estimates final exam scores based on internal marks, attendance, and study hours — giving students and teachers a realistic target to work toward.",
    "stream selector": "The Stream Selector helps Class 10 students choose Science, Commerce, or Arts based on subject strengths and career goals — with clear reasoning for parents too.",
    "student inquiry": "The Student Inquiry Manager captures, assigns, and tracks all student queries across channels — WhatsApp, phone, and web — from a single dashboard.",
    // ── EDUCATION Phase 2 ──
    "coaching centre roi": "The Coaching Centre ROI Calculator models investment, batch revenue, break-even students, and 3-year ROI for coaching centre business planning.",
    "student loan": "The Student Loan EMI Calculator computes EMI, total interest, repayment schedule, and tax benefits for education loans from major Indian banks.",
    "faculty salary": "The Faculty Salary Benchmarker compares teacher salaries against market rates by subject, experience, and qualification — to attract and retain quality faculty.",
    "class schedule": "The Class Schedule Optimizer generates conflict-free timetables maximizing room utilization, respecting faculty availability, and minimizing student travel.",
    "edtech subscription": "The EdTech Subscription Revenue Model calculates subscriber growth, churn rate, LTV, CAC, and profitability for an online learning platform.",
    "college admission": "The College Admission Predictor estimates admission probability based on student marks, category, entrance exam scores, and target college preferences.",
    "parent engagement": "The Parent Engagement Score Tool tracks PTM attendance, WhatsApp response rate, fee payment timeliness, and feedback participation.",
    "school infrastructure": "The School Infrastructure Cost Planner budgets for new school construction or expansion — covering construction, furniture, equipment, and technology.",
    "attendance impact": "The Attendance Impact Calculator measures correlation between attendance rates and exam scores, plus revenue impact of dropouts.",
    "exam roi": "The Competitive Exam ROI Planner models coaching cost, opportunity cost, probability of success, and break-even timeline for JEE, NEET, and UPSC preparation.",
    "library cost": "The Library Resource Cost Calculator budgets book collection cost, digital resource subscriptions, furniture, and annual maintenance for educational institution libraries.",
    "school transport": "The School Transport Cost Planner models route design, vehicle capacity, fuel cost, driver salary, and per-student transport fee.",
    "cbse igcse": "The CBSE vs IGCSE Cost Comparator calculates total education cost over 12 years for both curricula — including fees, materials, tutoring, and opportunity cost.",
    "scholarship fund": "The Scholarship Fund Planning Tool calculates scholarship fund size, criteria, disbursement schedule, and sustainability model for institutional programs.",
    "school to college": "The School to College Transition Planner creates a personalized college application timeline, entrance exam schedule, and financial planning for Class 11-12 students.",
    "pta fund": "The PTA Fund Management Tool tracks PTA collections, expenditure, event budgets, and annual reporting for school PTA committees.",
    "digital classroom": "The Digital Classroom ROI Tool measures cost, adoption rate, learning outcome improvement, and operational savings from smart classroom investments.",
    "special needs": "The Special Needs Program Cost Planner budgets for special educators, assistive technology, modified materials, and accommodation for students with disabilities.",
    "teacher training": "The Teacher Training ROI Calculator computes training cost and models the impact on student outcomes, parent satisfaction, and teacher retention.",
    "neet jee": "The NEET/JEE Batch Performance Tracker monitors student-wise and batch-wise performance, identifies weak areas, and predicts final exam outcomes.",
    "international school": "The International School Setup Planner budgets regulatory requirements, infrastructure, faculty sourcing, and break-even timeline for IB or IGCSE schools.",
    // ── FINANCE & ACCOUNTING ──
    "gst calculator": "The GST Calculator India computes GST amount, CGST, SGST, IGST, and invoice total for any base price and GST rate — with reverse calculation for inclusive pricing.",
    "business profitability": "The Business Profitability Dashboard calculates gross margin, net margin, EBITDA, break-even revenue, and profitability trends with actionable improvement recommendations.",
    "working capital": "The Working Capital Calculator models inventory days, receivable days, payable days, and net working capital requirement — with financing options and optimization strategies.",
    "tds compliance": "The TDS Compliance Checker verifies TDS amounts, applicable rates, filing deadlines, and compliance gaps for your business.",
    "business valuation": "The Business Valuation Calculator estimates your business value using multiple methods — P/E multiple, EV/EBITDA, DCF, and asset-based valuation.",
    "cash flow forecast": "The Cash Flow Forecast Tool builds a 13-week rolling cash flow forecast with inflow/outflow tracking, stress testing, and early warning alerts.",
    // ── TRADING & INVESTING ──
    "sip return": "The SIP Return Calculator models SIP returns with step-up option, inflation adjustment, goal-based planning, and comparison across fund categories.",
    "stock portfolio": "The Stock Portfolio Analyser calculates portfolio XIRR, sector concentration, P/E multiple, dividend yield, and benchmark comparison.",
    "options premium": "The Options Premium Calculator explains option pricing components, break-even price, maximum profit/loss, and P&L scenarios for basic strategies.",
    "fd mutual fund": "The FD vs Mutual Fund Comparator compares post-tax returns from Fixed Deposits vs mutual fund categories over 1, 3, 5, and 10 years.",
    "gold investment": "The Gold Investment Analyser compares physical gold, gold ETFs, sovereign gold bonds, and gold mutual funds on cost, liquidity, and tax efficiency.",
    "crypto risk": "The Crypto Portfolio Risk Calculator computes portfolio volatility, maximum drawdown, correlation between coins, and optimal position sizing.",
    // ── ARCHITECTURE & INTERIOR ──
    "interior design": "The Interior Design Budget Planner estimates furniture, lighting, flooring, paint, soft furnishing, and designer fee for complete home interiors.",
    "vastu": "The Vastu Compliance Checker evaluates room placement, entrance direction, kitchen location, master bedroom, and plot orientation against Vastu principles.",
    "office space": "The Office Space Planner calculates space requirement per employee, furniture layout, conference room ratio, pantry, and total fit-out cost.",
    "renovation cost": "The Home Renovation Cost Estimator calculates bathroom, kitchen, flooring, painting, electrical, and total renovation cost for any home.",
    "landscape garden": "The Landscape & Garden Cost Planner estimates planting, irrigation, outdoor lighting, hardscaping, and maintenance cost for any garden design.",
    "architectural fee": "The Architectural Drawing Fee Calculator estimates architect fees for residential, commercial, and institutional projects — based on area, complexity, and services scope.",
    // ── MANUFACTURING & MSME ──
    "production cost": "The Production Cost Calculator computes raw material cost, direct labour, machine time, overhead absorption, and total cost per unit.",
    "machine efficiency": "The Machine Efficiency Calculator measures OEE (Overall Equipment Effectiveness), availability, performance, and quality rates — with bottleneck identification.",
    "msme loan": "The MSME Loan Eligibility Checker verifies eligibility for Mudra loans, CGTMSE, ECLGS, and other MSME financing schemes — with application guidance.",
    "inventory turnover": "The Inventory Turnover Analyser calculates inventory turnover ratio, days inventory outstanding, dead stock value, and optimal reorder points.",
    "export readiness": "The Export Readiness Checker evaluates your export readiness across product compliance, packaging, pricing, documentation, and market entry strategy.",
    "quality control": "The Quality Control Cost Calculator estimates prevention, appraisal, internal failure, and external failure costs — with ROI analysis of quality investment.",
    // ── LOGISTICS & TRANSPORT ──
    "freight cost": "The Freight Cost Calculator estimates road, rail, air, and sea freight costs for any weight, volume, route, and service level — with mode comparison.",
    "warehouse space": "The Warehouse Space Planner calculates racking requirements, aisle dimensions, dock requirements, and total area needed for your inventory.",
    "fleet management": "The Fleet Management Cost Calculator estimates acquisition, fuel, maintenance, insurance, driver cost, and per-km operational cost for any fleet.",
    "last mile": "The Last Mile Delivery Cost Planner models per-delivery cost, delivery density, return rate impact, and technology investment ROI.",
    "cold chain": "The Cold Chain Cost Estimator calculates refrigerated transport, cold storage, temperature monitoring, and compliance cost for temperature-sensitive products.",
    "3pl vs inhouse": "The 3PL vs In-House Logistics Comparator compares 10-year total cost, flexibility, control, and scalability of outsourced vs internal logistics operations.",
    // ── RESTAURANTS & F&B ──
    "food cost": "The Restaurant Food Cost Calculator computes food cost percentage, recipe costing, gross profit per dish, and menu contribution margin.",
    "cloud kitchen": "The Cloud Kitchen Feasibility Calculator models investment, monthly operating cost, order volume targets, and break-even for a cloud kitchen business.",
    "restaurant staff": "The Restaurant Staff Cost Optimizer analyses labour cost percentage, staff productivity, optimal scheduling, and wage benchmarks.",
    "menu engineering": "The Menu Engineering Tool classifies dishes as Stars, Plowhorses, Puzzles, or Dogs — with pricing, placement, and promotion recommendations.",
    "restaurant marketing": "The Restaurant Marketing ROI Tool measures cost per new customer, lifetime value, and ROI for Zomato Ads, Google Ads, Instagram, and loyalty programs.",
    "catering pricing": "The Catering & Event Pricing Calculator computes food, staff, equipment, transport, and overhead cost for events — with competitive pricing recommendations.",
    // ── HR & STAFFING ──
    "employee cost": "The Employee Total Cost Calculator computes gross salary, PF, ESI, gratuity, leave encashment, and total employment cost per employee.",
    "attrition cost": "The Employee Attrition Cost Calculator estimates replacement cost, training cost, productivity loss, and total annual attrition cost — with retention ROI analysis.",
    "payroll compliance": "The Payroll Compliance Checker verifies compliance with PF, ESI, TDS, minimum wages, gratuity, bonus, and leave rules — with state-specific requirements.",
    "recruitment cost": "The Recruitment Cost Calculator estimates job portal fees, recruiter cost, interview time, background check, and onboarding cost — with channel-wise ROI comparison.",
    "hr audit": "The HR Audit Readiness Checker evaluates compliance documents, policy completeness, process maturity, and risk exposure across all HR functional areas.",
    "training roi": "The Training ROI Calculator computes training cost, productivity improvement, error reduction, and retention impact — with ROI justification for budget approval.",
    // ── E-COMMERCE & D2C ──
    "d2c unit economics": "The D2C Unit Economics Calculator models Revenue per Order, CAC, LTV, Contribution Margin, and Payback Period for Direct-to-Consumer businesses.",
    "marketplace vs d2c": "The Marketplace vs D2C Website Comparator compares economics, control, brand building, and scalability of Amazon/Flipkart vs your own D2C website.",
    "ecommerce returns": "The E-commerce Returns Cost Calculator models return processing cost, refund amount, product loss, and net profitability impact of different return rates.",
  };

  const PRICING_INFO = "All Scalioz tools are priced at ₹499/month, ₹3,999/year (save 33%), or ₹9,999 lifetime — all + 18% GST. Every plan includes full tool access, unlimited queries, PDF report export, and WhatsApp support.";
  const CUSTOM_INFO = "Yes, we build custom versions of any tool. We can rebrand it, modify the logic, integrate with your existing systems, or build something entirely new. Contact us on WhatsApp: +91 90439 46087";
  const GENERAL_INFO = "Scalioz builds smart business tools for Indian businesses across 12 industries — Healthcare, Real Estate, Construction, Education, Finance, Trading, Architecture, Manufacturing, Logistics, Restaurants, HR, and E-commerce. Our 166 tools help you make faster, data-driven decisions without expensive consultants.";

  function getAIResponse(userMsg) {
    const msg = userMsg.toLowerCase();
    if (msg.includes("price") || msg.includes("cost") || msg.includes("₹") || msg.includes("rupee") || msg.includes("plan") || msg.includes("subscription")) {
      return PRICING_INFO;
    }
    if (msg.includes("custom") || msg.includes("modify") || msg.includes("white label") || msg.includes("brand")) {
      setTimeout(() => szShowFlow("qualify_1"), 500);
      return;
    }
    for (const [key, desc] of Object.entries(TOOL_KB)) {
      if (msg.includes(key) || key.split(" ").some(w => w.length > 4 && msg.includes(w))) {
        return desc + "\n\nWant to try it free or know more? Just ask!";
      }
    }
    // Category responses
    if (msg.includes("healthcare") || msg.includes("clinic") || msg.includes("hospital") || msg.includes("doctor")) {
      return "We have 35 Healthcare tools covering revenue leakage, patient no-shows, staff productivity, OPD optimization, telemedicine, diagnostics, and much more.\n\nWhich challenge are you facing?";
    }
    if (msg.includes("real estate") || msg.includes("property") || msg.includes("broker") || msg.includes("house")) {
      return "We have 24 Real Estate tools: from Property Affordability and Rental Yield to NRI Investment, RERA Compliance, Stamp Duty, and Joint Venture Profit Splitter.\n\nWhich interests you?";
    }
    if (msg.includes("construction") || msg.includes("peb") || msg.includes("warehouse") || msg.includes("building")) {
      return "We have 31 Construction & PEB tools covering everything from BOQ and Steel Weight to Green Building, HVAC Load, Site Safety, and Tender Margin.\n\nWhich one can I explain?";
    }
    if (msg.includes("education") || msg.includes("school") || msg.includes("college") || msg.includes("coaching")) {
      return "We have 31 Education tools covering student performance, admissions, fee collection, career guidance, NEET/JEE coaching, international schools, and more.\n\nWhat would you like to know?";
    }
    if (msg.includes("finance") || msg.includes("gst") || msg.includes("tds") || msg.includes("cash flow")) {
      return "We have 6 Finance & Accounting tools: GST Calculator, Business Profitability Dashboard, Working Capital, TDS Compliance, Business Valuation, and Cash Flow Forecast.\n\nWhich interests you?";
    }
    if (msg.includes("trading") || msg.includes("invest") || msg.includes("sip") || msg.includes("stock") || msg.includes("mutual fund")) {
      return "We have 6 Trading & Investing tools: SIP Return Calculator, Stock Portfolio Analyser, Options Premium, FD vs Mutual Fund, Gold Investment, and Crypto Risk Calculator.\n\nWhat would you like to know?";
    }
    if (msg.includes("architecture") || msg.includes("interior") || msg.includes("vastu") || msg.includes("renovation")) {
      return "We have 6 Architecture & Interior tools: Interior Design Budget Planner, Vastu Compliance, Office Space Planner, Renovation Cost, Landscape, and Architectural Fee Calculator.\n\nWhich interests you?";
    }
    if (msg.includes("manufacturing") || msg.includes("msme") || msg.includes("factory") || msg.includes("production")) {
      return "We have 6 Manufacturing & MSME tools: Production Cost, Machine Efficiency (OEE), MSME Loan Eligibility, Inventory Turnover, Export Readiness, and Quality Control Cost.\n\nWhat would you like to know?";
    }
    if (msg.includes("logistics") || msg.includes("freight") || msg.includes("warehouse") || msg.includes("fleet") || msg.includes("delivery")) {
      return "We have 6 Logistics & Transport tools: Freight Cost, Warehouse Space Planner, Fleet Management, Last Mile Delivery, Cold Chain, and 3PL vs In-House Comparator.\n\nWhich interests you?";
    }
    if (msg.includes("restaurant") || msg.includes("food") || msg.includes("kitchen") || msg.includes("catering")) {
      return "We have 6 Restaurant & F&B tools: Food Cost Calculator, Cloud Kitchen Feasibility, Staff Cost Optimizer, Menu Engineering, Marketing ROI, and Catering Pricing Calculator.\n\nWhat would you like to know?";
    }
    if (msg.includes("hr") || msg.includes("payroll") || msg.includes("employee") || msg.includes("recruitment") || msg.includes("attrition")) {
      return "We have 6 HR & Staffing tools: Employee Total Cost, Attrition Cost, Payroll Compliance, Recruitment Cost, HR Audit, and Training ROI Calculator.\n\nWhich interests you?";
    }
    if (msg.includes("ecommerce") || msg.includes("d2c") || msg.includes("marketplace") || msg.includes("shopify") || msg.includes("amazon")) {
      return "We have 3 E-commerce & D2C tools: D2C Unit Economics, Marketplace vs D2C Comparator, and E-commerce Returns Cost Calculator.\n\nWhat would you like to know?";
    }
    if (msg.includes("benefit") || msg.includes("what does") || msg.includes("how does") || msg.includes("explain") || msg.includes("tell me") || msg.includes("help me")) {
      return "I can explain any of our 166 tools! Just tell me which tool or which industry you're in — Healthcare, Real Estate, Construction, Education, Finance, Trading, Architecture, Manufacturing, Logistics, Restaurants, HR, or E-commerce — and I'll give you full details.";
    }
    if (msg.includes("hi") || msg.includes("hello") || msg.includes("hey")) {
      return "Hi! 👋 I'm the Scalioz AI Assistant. I can tell you about any of our 166 business tools across 12 industries, explain pricing, or connect you with our team for a custom build. What would you like to know?";
    }
    return "I'm here to help! I can tell you about any of our 166 tools — what they do, how they work, pricing, or customisation. Try asking:\n• 'Tell me about the GST calculator'\n• 'What tools do you have for restaurants?'\n• 'How much does it cost?'\n• 'I need a custom tool'";
  }

  // ── FLOW-based options ───────────────────────────────────────────────────
  const FLOWS = {
    start: {
      msg: "👋 Hi! I'm the Scalioz AI Assistant.\n\nWhat brings you here today?",
      options: ["Learn about a specific tool", "Browse by industry", "Pricing & plans", "Need a custom tool", "Talk to the team"]
    },
    browse: {
      msg: "Which industry are you in?",
      options: ["🏥 Healthcare", "🏠 Real Estate", "🏗️ Construction & PEB", "🎓 Education", "💰 Finance & Accounting", "📈 Trading & Investing", "🏠 Architecture & Interior", "🏭 Manufacturing & MSME", "🚚 Logistics & Transport", "🍽️ Restaurants & F&B", "👤 HR & Staffing", "🛍️ E-commerce & D2C"]
    },
    healthcare: { msg: "We have 35 Healthcare tools. What challenge are you facing?", options: ["Revenue & billing gaps", "Patient no-shows", "Staff efficiency", "Marketing ROI", "Patient screening", "Appointment automation", "OPD optimization", "Insurance & TPA", "Clinic expansion"] },
    realestate: { msg: "We have 24 Real Estate tools. What do you need?", options: ["Property ROI / yield", "Loan eligibility", "Lead management", "Property comparison", "Locality research", "Buy decision help", "NRI investment", "Stamp duty / RERA", "Joint venture"] },
    construction: { msg: "We have 31 Construction tools. What's your need?", options: ["PEB cost estimate", "Warehouse budget", "Cold storage ROI", "Project timeline", "Steel / BOQ", "Roofing calculation", "Green building", "HVAC / MEP", "Tender / procurement"] },
    education: { msg: "We have 31 Education tools. What's your focus?", options: ["Student performance", "Admissions & eligibility", "Fee collection", "Career guidance", "Exam planning", "Coaching centre ROI", "NEET / JEE coaching", "School infrastructure"] },
    finance: { msg: "We have 6 Finance & Accounting tools. What do you need?", options: ["GST calculation", "Business profitability", "Working capital", "TDS compliance", "Business valuation", "Cash flow forecast"] },
    trading: { msg: "We have 6 Trading & Investing tools. What interests you?", options: ["SIP returns", "Stock portfolio", "Options premium", "FD vs Mutual Fund", "Gold investment", "Crypto risk"] },
    architecture: { msg: "We have 6 Architecture & Interior tools. What do you need?", options: ["Interior design budget", "Vastu compliance", "Office space planning", "Renovation cost", "Landscape garden", "Architect fee"] },
    manufacturing: { msg: "We have 6 Manufacturing & MSME tools. What's your need?", options: ["Production cost", "Machine efficiency", "MSME loan eligibility", "Inventory turnover", "Export readiness", "Quality control cost"] },
    logistics: { msg: "We have 6 Logistics & Transport tools. What do you need?", options: ["Freight cost", "Warehouse space", "Fleet management", "Last mile delivery", "Cold chain cost", "3PL vs in-house"] },
    restaurants: { msg: "We have 6 Restaurant & F&B tools. What's your focus?", options: ["Food cost control", "Cloud kitchen feasibility", "Staff cost", "Menu engineering", "Marketing ROI", "Catering pricing"] },
    hr: { msg: "We have 6 HR & Staffing tools. What do you need?", options: ["Employee total cost", "Attrition cost", "Payroll compliance", "Recruitment cost", "HR audit", "Training ROI"] },
    ecommerce: { msg: "We have 3 E-commerce & D2C tools. Which interests you?", options: ["D2C unit economics", "Marketplace vs D2C", "Returns cost"] },
    qualify_1: {
      msg: "Great — custom builds are our speciality! Let me understand your needs first.\n\nWhich industry is your business in?",
      options: ["🏥 Healthcare", "🏠 Real Estate", "🏗️ Construction & PEB", "🎓 Education", "💰 Finance / Trading", "🏭 Manufacturing / MSME", "🚚 Logistics", "🍽️ Restaurants / F&B", "👤 HR / Staffing", "🛍️ E-commerce / D2C"]
    },
    qualify_2: {
      msg: "Got it! What do you want the custom tool to do?",
      options: ["Automate a manual process", "Calculate / estimate costs or ROI", "Track leads or customers", "Generate reports or documents", "Something entirely new"]
    },
    qualify_3: {
      msg: "Understood. What's your budget range for this custom build?",
      options: ["Under ₹10,000", "₹10,000 – ₹25,000", "₹25,000 – ₹50,000", "Above ₹50,000", "Not sure yet — need a quote"]
    },
    qualify_4: {
      msg: "Perfect! Last question — when do you need this?",
      options: ["Urgently (within 1 week)", "Within a month", "1–3 months", "Just exploring for now"]
    },
  };

  const TOOL_RESPONSES = {
    "Revenue & billing gaps": TOOL_KB["clinic revenue leakage"],
    "Patient no-shows": TOOL_KB["patient no-show"],
    "Staff efficiency": TOOL_KB["staff productivity"],
    "Marketing ROI": TOOL_KB["marketing roi"],
    "Patient screening": TOOL_KB["health risk"],
    "Appointment automation": TOOL_KB["appointment assistant"],
    "OPD optimization": TOOL_KB["opd revenue"],
    "Insurance & TPA": TOOL_KB["tpa claims"],
    "Clinic expansion": TOOL_KB["clinic expansion"],
    "Property ROI / yield": TOOL_KB["rental yield"] + "\n\n" + TOOL_KB["property roi"],
    "Loan eligibility": TOOL_KB["home loan"],
    "Lead management": TOOL_KB["broker lead"],
    "Property comparison": TOOL_KB["property comparison"],
    "Locality research": TOOL_KB["locality"],
    "Buy decision help": TOOL_KB["should i buy"],
    "NRI investment": TOOL_KB["nri investment"],
    "Stamp duty / RERA": TOOL_KB["stamp duty"],
    "Joint venture": TOOL_KB["joint venture"],
    "PEB cost estimate": TOOL_KB["peb"],
    "Warehouse budget": TOOL_KB["warehouse cost"],
    "Cold storage ROI": TOOL_KB["cold storage"],
    "Project timeline": TOOL_KB["construction timeline"],
    "Steel / BOQ": TOOL_KB["steel weight"] + "\n\n" + TOOL_KB["boq"],
    "Roofing calculation": TOOL_KB["roofing"],
    "Green building": TOOL_KB["green building"],
    "HVAC / MEP": TOOL_KB["hvac load"],
    "Tender / procurement": TOOL_KB["tender margin"],
    "Student performance": TOOL_KB["student performance"],
    "Admissions & eligibility": TOOL_KB["course eligibility"],
    "Fee collection": TOOL_KB["fee reminder"],
    "Career guidance": TOOL_KB["career recommendation"],
    "Exam planning": TOOL_KB["exam planner"],
    "Coaching centre ROI": TOOL_KB["coaching centre roi"],
    "NEET / JEE coaching": TOOL_KB["neet jee"],
    "School infrastructure": TOOL_KB["school infrastructure"],
    "GST calculation": TOOL_KB["gst calculator"],
    "Business profitability": TOOL_KB["business profitability"],
    "Working capital": TOOL_KB["working capital"],
    "TDS compliance": TOOL_KB["tds compliance"],
    "Business valuation": TOOL_KB["business valuation"],
    "Cash flow forecast": TOOL_KB["cash flow forecast"],
    "SIP returns": TOOL_KB["sip return"],
    "Stock portfolio": TOOL_KB["stock portfolio"],
    "Options premium": TOOL_KB["options premium"],
    "FD vs Mutual Fund": TOOL_KB["fd mutual fund"],
    "Gold investment": TOOL_KB["gold investment"],
    "Crypto risk": TOOL_KB["crypto risk"],
    "Interior design budget": TOOL_KB["interior design"],
    "Vastu compliance": TOOL_KB["vastu"],
    "Office space planning": TOOL_KB["office space"],
    "Renovation cost": TOOL_KB["renovation cost"],
    "Landscape garden": TOOL_KB["landscape garden"],
    "Architect fee": TOOL_KB["architectural fee"],
    "Production cost": TOOL_KB["production cost"],
    "Machine efficiency": TOOL_KB["machine efficiency"],
    "MSME loan eligibility": TOOL_KB["msme loan"],
    "Inventory turnover": TOOL_KB["inventory turnover"],
    "Export readiness": TOOL_KB["export readiness"],
    "Quality control cost": TOOL_KB["quality control"],
    "Freight cost": TOOL_KB["freight cost"],
    "Warehouse space": TOOL_KB["warehouse space"],
    "Fleet management": TOOL_KB["fleet management"],
    "Last mile delivery": TOOL_KB["last mile"],
    "Cold chain cost": TOOL_KB["cold chain"],
    "3PL vs in-house": TOOL_KB["3pl vs inhouse"],
    "Food cost control": TOOL_KB["food cost"],
    "Cloud kitchen feasibility": TOOL_KB["cloud kitchen"],
    "Staff cost": TOOL_KB["restaurant staff"],
    "Menu engineering": TOOL_KB["menu engineering"],
    "Restaurant marketing": TOOL_KB["restaurant marketing"],
    "Catering pricing": TOOL_KB["catering pricing"],
    "Employee total cost": TOOL_KB["employee cost"],
    "Attrition cost": TOOL_KB["attrition cost"],
    "Payroll compliance": TOOL_KB["payroll compliance"],
    "Recruitment cost": TOOL_KB["recruitment cost"],
    "HR audit": TOOL_KB["hr audit"],
    "Training ROI": TOOL_KB["training roi"],
    "D2C unit economics": TOOL_KB["d2c unit economics"],
    "Marketplace vs D2C": TOOL_KB["marketplace vs d2c"],
    "Returns cost": TOOL_KB["ecommerce returns"],
  };

  let chatMode = "flow";
  let flowState = "start";
  let msgHistory = [];
  let chatOpen = false;
  let state = {};

  const css = `
    #sz-bubble{position:fixed;bottom:24px;right:24px;z-index:9999;cursor:pointer;width:58px;height:58px;
      border-radius:50%;background:linear-gradient(135deg,${NAVY},${BLUE});display:flex;align-items:center;
      justify-content:center;box-shadow:0 4px 20px rgba(26,60,255,.5);transition:transform .2s;}
    #sz-bubble:hover{transform:scale(1.08);}
    #sz-ping{position:absolute;top:0;right:0;width:14px;height:14px;background:#ef4444;border-radius:50%;
      border:2px solid white;animation:szping 1.5s infinite;}
    @keyframes szping{0%,100%{transform:scale(1);}50%{transform:scale(1.35);}}
    #sz-box{position:fixed;bottom:92px;right:24px;z-index:9998;width:350px;max-width:calc(100vw - 32px);
      background:white;border-radius:16px;box-shadow:0 8px 40px rgba(0,0,0,.2);
      display:none;flex-direction:column;overflow:hidden;font-family:'Segoe UI',system-ui,sans-serif;max-height:580px;}
    #sz-head{background:linear-gradient(135deg,${NAVY},${BLUE});padding:14px 16px;display:flex;
      align-items:center;gap:10px;color:white;flex-shrink:0;}
    #sz-head-av{width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,.18);
      display:flex;align-items:center;justify-content:center;font-size:1.2rem;flex-shrink:0;}
    #sz-head-name{font-weight:800;font-size:.92rem;}
    #sz-head-st{font-size:.72rem;opacity:.8;display:flex;align-items:center;gap:4px;}
    #sz-head-st::before{content:'';width:7px;height:7px;background:#4ade80;border-radius:50%;display:inline-block;}
    #sz-close{margin-left:auto;background:none;border:none;color:white;cursor:pointer;font-size:1.2rem;padding:0;opacity:.8;}
    #sz-close:hover{opacity:1;}
    #sz-msgs{padding:14px;overflow-y:auto;flex:1;display:flex;flex-direction:column;gap:8px;min-height:120px;}
    .sz-bot{background:#f1f5f9;color:#0f172a;align-self:flex-start;max-width:88%;padding:10px 13px;
      border-radius:12px 12px 12px 3px;font-size:.83rem;line-height:1.55;white-space:pre-line;}
    .sz-user{background:linear-gradient(135deg,${NAVY},${BLUE});color:white;align-self:flex-end;
      max-width:88%;padding:10px 13px;border-radius:12px 12px 3px 12px;font-size:.83rem;line-height:1.55;}
    .sz-typing{display:flex;gap:4px;padding:12px 14px;align-self:flex-start;}
    .sz-typing span{width:7px;height:7px;background:#94a3b8;border-radius:50%;animation:sztyp 1s infinite;}
    .sz-typing span:nth-child(2){animation-delay:.2s;}
    .sz-typing span:nth-child(3){animation-delay:.4s;}
    @keyframes sztyp{0%,100%{transform:translateY(0);}50%{transform:translateY(-5px);}}
    #sz-opts{padding:0 12px 8px;display:flex;flex-direction:column;gap:5px;flex-shrink:0;max-height:200px;overflow-y:auto;}
    .sz-opt{padding:8px 12px;border-radius:8px;border:1.5px solid #e2e8f0;background:white;
      font-size:.79rem;font-weight:600;color:${NAVY};cursor:pointer;text-align:left;transition:all .15s;}
    .sz-opt:hover{background:#f0f4ff;border-color:${BLUE};}
    #sz-input-row{display:flex;gap:8px;padding:10px 12px;border-top:1px solid #f1f5f9;flex-shrink:0;}
    #sz-input{flex:1;border:1.5px solid #e2e8f0;border-radius:8px;padding:8px 12px;font-size:.82rem;
      outline:none;font-family:inherit;transition:border-color .2s;}
    #sz-input:focus{border-color:${BLUE};}
    #sz-send{background:linear-gradient(135deg,${NAVY},${BLUE});color:white;border:none;border-radius:8px;
      padding:8px 14px;cursor:pointer;font-size:.82rem;font-weight:700;transition:opacity .15s;white-space:nowrap;}
    #sz-send:hover{opacity:.88;}
    #sz-footer{padding:5px 12px 8px;font-size:.67rem;color:#94a3b8;text-align:center;flex-shrink:0;}
  `;

  const s = document.createElement("style");
  s.textContent = css;
  document.head.appendChild(s);

  document.body.insertAdjacentHTML("beforeend", `
    <div id="sz-bubble" onclick="szToggle()">
      <div id="sz-ping"></div>
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    </div>
    <div id="sz-box">
      <div id="sz-head">
        <div id="sz-head-av">🤖</div>
        <div>
          <div id="sz-head-name">Scalioz AI Assistant</div>
          <div id="sz-head-st">Online — 166 tools, 12 industries</div>
        </div>
        <button id="sz-close" onclick="szToggle()">✕</button>
      </div>
      <div id="sz-msgs"></div>
      <div id="sz-opts"></div>
      <div id="sz-input-row">
        <input id="sz-input" placeholder="Ask about any of our 166 tools..." onkeydown="if(event.key==='Enter')szSend()" />
        <button id="sz-send" onclick="szSend()">Send</button>
      </div>
      <div id="sz-footer">Powered by Scalioz AI · <a href="https://wa.me/919043946087" target="_blank" style="color:#1A3CFF;text-decoration:none;">WhatsApp us</a></div>
    </div>
  `);

  window.szToggle = function() {
    chatOpen = !chatOpen;
    const box = document.getElementById("sz-box");
    box.style.display = chatOpen ? "flex" : "none";
    box.style.flexDirection = "column";
    document.getElementById("sz-ping").style.display = "none";
    if (chatOpen && msgHistory.length === 0) szShowFlow("start");
  };

  function szAddBot(text) {
    const el = document.createElement("div");
    el.className = "sz-bot"; el.textContent = text;
    document.getElementById("sz-msgs").appendChild(el);
    scrollMsgs(); msgHistory.push({r:"bot",t:text});
  }

  function szAddUser(text) {
    const el = document.createElement("div");
    el.className = "sz-user"; el.textContent = text;
    document.getElementById("sz-msgs").appendChild(el);
    scrollMsgs(); msgHistory.push({r:"user",t:text});
  }

  function szTyping() {
    const el = document.createElement("div");
    el.className = "sz-typing"; el.id = "sz-typing-ind";
    el.innerHTML = "<span></span><span></span><span></span>";
    document.getElementById("sz-msgs").appendChild(el);
    scrollMsgs(); return el;
  }

  function scrollMsgs() {
    const m = document.getElementById("sz-msgs");
    setTimeout(() => m.scrollTop = m.scrollHeight, 50);
  }

  function szShowFlow(step) {
    flowState = step;
    const f = FLOWS[step];
    if (!f) return;
    szAddBot(f.msg);
    const opts = document.getElementById("sz-opts");
    opts.innerHTML = "";
    f.options.forEach(o => {
      const b = document.createElement("button");
      b.className = "sz-opt"; b.textContent = o;
      b.onclick = () => szFlowClick(o, step);
      opts.appendChild(b);
    });
  }

  function szFlowClick(opt, step) {
    szAddUser(opt);
    document.getElementById("sz-opts").innerHTML = "";

    if (step === "start") {
      if (opt.includes("specific tool")) { szAddBot("Sure! Type the tool name or describe what you're looking for and I'll explain everything about it."); }
      else if (opt.includes("industry")) szShowFlow("browse");
      else if (opt.includes("Pricing")) { szAddBot(PRICING_INFO); szShowNextOptions(); }
      else if (opt.includes("custom")) { state = {}; szShowFlow("qualify_1"); }
      else if (opt.includes("team")) szSendWA("wants to talk to the team");
    } else if (step === "qualify_1") {
      state.category = opt;
      setTimeout(() => szShowFlow("qualify_2"), 400);
    } else if (step === "qualify_2") {
      state.challenge = opt;
      setTimeout(() => szShowFlow("qualify_3"), 400);
    } else if (step === "qualify_3") {
      state.budget = opt;
      setTimeout(() => szShowFlow("qualify_4"), 400);
    } else if (step === "qualify_4") {
      state.timeline = opt;
      const summary = `Hi Scalioz Team! 👋\n\nI need a custom tool build:\n\n🏢 Industry: ${state.category}\n🔧 Requirement: ${state.challenge}\n💰 Budget: ${state.budget}\n📅 Timeline: ${state.timeline}\n\nPlease get in touch!`;
      setTimeout(() => {
        szAddBot(`Thank you! Here's a summary of your requirement:\n\n🏢 ${state.category}\n🔧 ${state.challenge}\n💰 ${state.budget}\n📅 ${state.timeline}\n\nOur team will review and get back to you within 2 hours. Connecting you now...`);
        const opts = document.getElementById("sz-opts");
        opts.innerHTML = "";
        const b = document.createElement("button");
        b.className = "sz-opt";
        b.style.cssText = "background:#25D366;color:white;border:none;font-size:.85rem;padding:10px;";
        b.textContent = "💬 Send My Requirements on WhatsApp →";
        b.onclick = () => window.open(`https://wa.me/${WA}?text=${encodeURIComponent(summary)}`, "_blank");
        opts.appendChild(b);
      }, 500);
    } else if (step === "browse") {
      if (opt.includes("Healthcare")) szShowFlow("healthcare");
      else if (opt.includes("Real Estate")) szShowFlow("realestate");
      else if (opt.includes("Construction")) szShowFlow("construction");
      else if (opt.includes("Education")) szShowFlow("education");
      else if (opt.includes("Finance")) szShowFlow("finance");
      else if (opt.includes("Trading")) szShowFlow("trading");
      else if (opt.includes("Architecture")) szShowFlow("architecture");
      else if (opt.includes("Manufacturing")) szShowFlow("manufacturing");
      else if (opt.includes("Logistics")) szShowFlow("logistics");
      else if (opt.includes("Restaurant") || opt.includes("F&B")) szShowFlow("restaurants");
      else if (opt.includes("HR")) szShowFlow("hr");
      else if (opt.includes("E-commerce") || opt.includes("D2C")) szShowFlow("ecommerce");
      else szShowFlow("construction");
    } else {
      const resp = TOOL_RESPONSES[opt];
      if (resp) {
        const t = szTyping();
        setTimeout(() => { t.remove(); szAddBot(resp); szShowNextOptions(); }, 700);
      } else szShowNextOptions();
    }
  }

  function szShowNextOptions() {
    const opts = document.getElementById("sz-opts");
    opts.innerHTML = "";
    ["Ask another question", "View all 166 tools →", "Talk to our team"].forEach(o => {
      const b = document.createElement("button");
      b.className = "sz-opt"; b.textContent = o;
      b.onclick = () => {
        opts.innerHTML = "";
        if (o.includes("another")) { szAddBot("Sure! What would you like to know?"); }
        else if (o.includes("tools")) {
          const depth = (window.location.pathname.split("/").length > 2) ? "../" : "";
          window.location.href = depth + "tools.html";
        }
        else szSendWA("wants to talk to team after browsing tools");
      };
      opts.appendChild(b);
    });
  }

  window.szSend = function() {
    const input = document.getElementById("sz-input");
    const msg = input.value.trim();
    if (!msg) return;
    input.value = "";
    szAddUser(msg);
    document.getElementById("sz-opts").innerHTML = "";
    const msgL = msg.toLowerCase();

    if (msgL.includes("custom") || msgL.includes("modify") || msgL.includes("white label") || msgL.includes("brand")) {
      const t = szTyping();
      setTimeout(() => { t.remove(); state = {}; szShowFlow("qualify_1"); }, 600);
      return;
    }
    if (msgL.includes("team") || msgL.includes("contact") || msgL.includes("call") || msgL.includes("speak")) {
      const t = szTyping();
      setTimeout(() => { t.remove(); szSendWA(`wants to talk: "${msg}"`); }, 600);
      return;
    }
    const t = szTyping();
    setTimeout(() => {
      t.remove();
      const resp = getAIResponse(msg);
      if (resp) { szAddBot(resp); szShowNextOptions(); }
    }, 600);
  };

  function szSendWA(reason) {
    const summary = `Hi Scalioz! 👋\nI was chatting with your AI assistant.\nReason: ${reason}\n\nPlease help me!`;
    const opts = document.getElementById("sz-opts");
    const b = document.createElement("button");
    b.className = "sz-opt";
    b.style.background = "#25D366"; b.style.color = "white"; b.style.border = "none";
    b.textContent = "💬 Continue on WhatsApp →";
    b.onclick = () => window.open(`https://wa.me/${WA}?text=${encodeURIComponent(summary)}`, "_blank");
    opts.innerHTML = ""; opts.appendChild(b);
  }

})();
