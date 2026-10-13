export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  featured: boolean;
  tags: string[];
  metrics: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: string[];
  keyFeatures: string[];
  techStack: { category: string; items: string[] }[];
  impact: string[];
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  partnerInfo?: string;
  period: string;
  location: string;
  type: "Internship" | "Training & Certification";
  credentialId?: string;
  credentialUrl: string;
  summary: string;
  highlights: string[];
  skills: string[];
  badgeColor: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: "Advanced" | "Proficient" | "Familiar" }[];
}

export const PERSONAL_INFO = {
  name: "Bipin Kumar",
  title: "Data Science & AI/ML Engineer",
  tagline: "Autonomous Agentic Systems • Predictive Machine Learning • End-to-End AI Pipelines",
  email: "bipinkumarkataroo6201@gmail.com",
  currentLocation: "Jaipur, Rajasthan, India",
  originLocation: "Muzaffarpur, Bihar, India",
  university: {
    name: "Jagannath University, Jaipur",
    course: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
    duration: "Jul 2023 – Expected Jul 2027",
    cgpa: "7.4 / 10.0",
    coursework: [
      "Machine Learning",
      "Data Structures & Algorithms",
      "Database Management Systems (DBMS)",
      "Applied Statistics & Probability",
      "Computer Networks",
      "Object-Oriented Programming (OOP)",
    ],
    website: "https://www.jagannathuniversity.org/",
  },
  social: {
    github: "https://github.com/krbipin",
    linkedin: "https://www.linkedin.com/in/bipinkr",
    email: "mailto:bipinkumarkataroo6201@gmail.com",
  },
  stats: [
    { label: "Deployed Production Platforms", value: "2" },
    { label: "Verified Internships & Certifications", value: "4" },
    { label: "Inference Latency Reduction", value: "3x" },
    { label: "Core Verified Technologies", value: "24+" },
  ],
  bio: `Data Science and AI/ML Engineer specialized in autonomous multi-agent operational platforms, predictive machine learning pipelines, and production web deployment. Engineered the Agentic FacilityOps AI Platform and SwasthyaAI: Diabetes Risk Predictor with Python, FastAPI, Scikit-learn, Next.js, and Streamlit.`,
};

export const PROJECTS: Project[] = [
  {
    slug: "facilityops-ai",
    title: "Agentic FacilityOps AI Platform",
    subtitle: "Autonomous Multi-Agent Building Intelligence & Telemetry System",
    description: "Enterprise operations platform with autonomous AI agents continuously monitoring energy, maintenance, occupancy, security, and cost metrics with real-time 1-minute streaming telemetry.",
    category: "Autonomous Multi-Agent AI",
    featured: true,
    tags: ["Next.js 16", "FastAPI", "PostgreSQL (Neon)", "Scikit-Learn", "Pandas", "Groq LLM", "Clerk"],
    metrics: [
      { label: "Autonomous Modules", value: "8 Agents" },
      { label: "Telemetry Poll Rate", value: "1-min Live" },
      { label: "Dashboard Views", value: "14 Pages" },
      { label: "Failure Prediction", value: "RandomForest" },
    ],
    liveUrl: "https://facilityops-platform.vercel.app/",
    githubUrl: "https://github.com/krbipin/Agentic-FacilityOps-AI-Platform",
    overview: "Agentic FacilityOps AI Platform is a modern, enterprise-ready building intelligence suite. Instead of static dashboards, autonomous agents continuously evaluate live facility telemetry to predict HVAC & equipment failures, detect security anomalies, forecast energy costs, and provide conversational facility recommendations.",
    problem: "Commercial facility managers struggle with fragmented sensor silos, delayed reactive maintenance, unexpected equipment downtime, and exorbitant peak utility costs. Existing dashboards display stale metrics with zero predictive decision intelligence.",
    solution: "Engineered an autonomous agentic framework combining FastAPI microservices with a PostgreSQL Neon database. A LiveSimulator feeds streaming 1-minute metrics, triggering Scikit-Learn agents (IsolationForest for anomaly detection, RandomForest for failure risk). A Groq LLM-powered Facility Copilot answers complex operational queries with contextual grounding.",
    architecture: [
      "FastAPI backend exposes high-throughput endpoints with SQLAlchemy 2 & async psycopg3.",
      "Neon PostgreSQL stores 16 normalized tables spanning facilities, equipment, telemetry, and alerts.",
      "LiveSimulator continuously emits real-time sensor events across HVAC, lighting, and occupancy.",
      "IsolationForest and RandomForest models run continuous inference to compute health scores.",
      "Next.js 16 App Router UI renders 14 responsive dashboards with real-time reactive charting.",
    ],
    keyFeatures: [
      "8 Autonomous Agents: Energy, Maintenance, Occupancy, Security, Cost, Intelligence, Alerts, and Executive Reporting.",
      "14 Production Views: Deep dive screens for asset tracking, work orders, automated alert triggers, and settings.",
      "Zero-Mock Backend: Live telemetry data dynamically computed and updated without hardcoded mock constants.",
      "Groq AI Copilot: Interactive conversational interface with prompt engineering to analyze facility logs.",
      "Clerk Authentication: Enterprise-grade session management with role guards.",
    ],
    techStack: [
      { category: "Frontend", items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Recharts"] },
      { category: "Backend & ML", items: ["Python 3.12+", "FastAPI", "Scikit-learn", "Pandas", "NumPy", "Groq API"] },
      { category: "Database & Cloud", items: ["PostgreSQL (Neon)", "SQLAlchemy 2", "Vercel", "Render"] },
      { category: "Security & Auth", items: ["Clerk Authentication", "CORS Route Guards"] },
    ],
    impact: [
      "Eliminated equipment surprise downtime through early RandomForest risk scores.",
      "Reduced energy consumption spikes by flag-alerting anomalies under 15-second cycles.",
      "Standardized multi-facility management across unlimited campuses in a single unified UI.",
    ],
  },
  {
    slug: "diabetes-predictor",
    title: "SwasthyaAI: Diabetes Risk Predictor",
    subtitle: "Healthcare Machine Learning Diagnostic & Risk Assessment System",
    description: "Interactive predictive health tool using Machine Learning to assess early diabetes risks from 8 clinical features, providing actionable insights for social awareness.",
    category: "Predictive Machine Learning",
    featured: true,
    tags: ["Python", "Scikit-learn", "Streamlit", "NumPy", "StandardScaler", "Pickle"],
    metrics: [
      { label: "Clinical Features", value: "8 Parameters" },
      { label: "Inference Time", value: "<150ms" },
      { label: "Scaler Pipeline", value: "StandardScaler" },
      { label: "Use Case", value: "Public Welfare" },
    ],
    liveUrl: "https://diabetes-predictor-muqth3gs8dfgsg9ea2wqz3.streamlit.app/",
    githubUrl: "https://github.com/krbipin/diabetes-predictor",
    overview: "SwasthyaAI is an accessible machine learning healthcare application developed for public health awareness. It evaluates biometric signals (glucose, blood pressure, insulin, BMI, pedigree) to identify high-risk diabetes indicators before severe symptoms manifest.",
    problem: "Early symptoms of type-2 diabetes often go undetected until critical complications arise. Standard lab diagnostics are frequently inaccessible in rural or low-resource settings, leading to delayed medical interventions.",
    solution: "Trained and optimized a supervised classification pipeline on historical clinical data. Encapsulated the serialized model (.sav) and normalization scaler inside a zero-latency Streamlit application with explicit medical disclaimers and immediate visual risk indicators.",
    architecture: [
      "User submits 8 biometric features via an intuitive Streamlit two-column form.",
      "NumPy reshapes inputs and passes them into pre-computed StandardScaler for normalization.",
      "Pre-trained binary classification model evaluates feature vector probabilities.",
      "Dynamic response card renders with clear high-risk medical alerts or healthy lifestyle reinforcement.",
    ],
    keyFeatures: [
      "Multi-Parameter Intake: Gathers glucose, blood pressure, BMI, pedigree function, pregnancies, and age.",
      "Standardized Normalization: Guarantees zero distribution skew between training and inference.",
      "Instantaneous Diagnostic Inference: Computes probability status in under 150 milliseconds.",
      "Responsive Accessible UI: Formulated for cross-device mobile and desktop usability.",
    ],
    techStack: [
      { category: "Machine Learning", items: ["Scikit-learn", "NumPy", "StandardScaler", "Pickle (.sav)"] },
      { category: "UI & Hosting", items: ["Streamlit Community Cloud", "Python 3.11"] },
    ],
    impact: [
      "Helped hundreds of self-screeners understand their clinical risk parameters easily.",
      "Reinforced preventive medical consultation for flagged individuals.",
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "1m1b-ibm-aicte",
    role: "AI for Sustainability Virtual Intern",
    organization: "1M1B (One Million for One Billion)",
    partnerInfo: "Supported by AICTE in collaboration with IBM SkillsBuild",
    period: "Jul 2026 – Sep 2026",
    location: "Remote",
    type: "Internship",
    credentialId: "INTERNSHIP_17828984086a44dee80acf6",
    credentialUrl: "https://drive.google.com/file/d/1iidB_Dbg4kjbW5WS51m5cxUBOjh-K3V4/view?usp=sharing",
    summary: "Selected for the prestigious AI for Sustainability internship program. Applied Agentic AI and RAG architectures to real-world challenges aligned with United Nations Sustainable Development Goals (UN SDGs).",
    highlights: [
      "Gained intensive hands-on experience in Agentic AI workflows, responsible AI frameworks, and RAG systems.",
      "Designed impact-driven AI solutions addressing real-life sustainability challenges aligned with UN SDGs.",
      "Collaborated through IBM SkillsBuild learning pathways and AICTE national technical internship portal guidelines.",
      "Awarded official Certificate of Completion issued on 22.09.2026 under AICTE Internship ID INTERNSHIP_17828984086a44dee80acf6.",
    ],
    skills: ["Agentic AI", "RAG Systems", "Responsible AI", "IBM SkillsBuild", "AICTE Standards", "Prompt Engineering"],
    badgeColor: "indigo",
  },
  {
    id: "edunet-ibm-aicte",
    role: "Artificial Intelligence Intern",
    organization: "Edunet Foundation",
    partnerInfo: "In collaboration with AICTE and IBM SkillsBuild",
    period: "11 May 2026 – 21 Jun 2026",
    location: "Remote",
    type: "Internship",
    credentialId: "STU681afa946eb801746598548",
    credentialUrl: "https://drive.google.com/file/d/1PEHj3cmzb0WjEpgbtPYufUHfjtPZeX9J/view?usp=sharing",
    summary: "Completed rigorous 6-week technical internship focused on Artificial Intelligence fundamentals, machine learning model architectures, and applied data pipelines.",
    highlights: [
      "Engineered machine learning pipelines, exploratory data analysis workflows, and predictive models.",
      "Leveraged IBM SkillsBuild enterprise curriculum to master AI principles and practical implementation.",
      "Demonstrated technical excellence recognized by Chairman of Edunet Foundation and Chief Coordinating Officer of AICTE.",
      "Verified Student ID: STU681afa946eb801746598548.",
    ],
    skills: ["Machine Learning", "Python", "Data Preprocessing", "Supervised Learning", "IBM SkillsBuild", "AICTE"],
    badgeColor: "indigo",
  },
  {
    id: "codewithharry-datascience",
    role: "Data Science Trainee",
    organization: "CodeWithHarry",
    partnerInfo: "The Ultimate Job Ready Data Science Course",
    period: "Sep 2025",
    location: "Remote",
    type: "Training & Certification",
    credentialUrl: "https://drive.google.com/file/d/1lH3gDQlH29kg_qeKrEOJu52MBpZaRWi1/view?usp=sharing",
    summary: "Mastered end-to-end industry data science practices, exploratory data analysis, mathematical modeling, and production-grade ML workflows.",
    highlights: [
      "Completed comprehensive training on full ML lifecycle: data collection, feature engineering, model training, evaluation, and deployment.",
      "Applied statistical modeling, regression, classification, and clustering on real-world datasets using Pandas and Scikit-learn.",
      "Built production-ready model deployment workflows with Python scripts and visualization dashboards.",
    ],
    skills: ["Data Science Lifecycle", "Feature Engineering", "Pandas", "Scikit-Learn", "Matplotlib", "Model Evaluation"],
    badgeColor: "indigo",
  },
  {
    id: "udemy-python-bootcamp",
    role: "Python Programming Trainee",
    organization: "Udemy",
    partnerInfo: "Complete 2025 Python Bootcamp (15 Hours) by Haris Ali Khan",
    period: "Sep 2025",
    location: "Remote",
    type: "Training & Certification",
    credentialUrl: "https://drive.google.com/file/d/1TeC1VFPYj05N3HYI5yMqytYWOYy6qLHE/view?usp=sharing",
    summary: "In-depth specialization in modern Python programming, Object-Oriented Programming (OOP), file streams, algorithms, and automated scripting.",
    highlights: [
      "Mastered core Python paradigms, OOP principles, data structures, modular package architecture, and error handling.",
      "Developed mini-projects for data manipulation, automated API calling, and ETL preprocessing for ML pipelines.",
    ],
    skills: ["Advanced Python", "Object-Oriented Programming", "Automation Scripts", "Data Structures", "ETL Processing"],
    badgeColor: "indigo",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Machine Learning & Predictive Modeling",
    description: "Supervised classification, anomaly detection, feature normalization, and diagnostic pipelines.",
    skills: [
      { name: "Scikit-learn", level: "Advanced" },
      { name: "RandomForest Classifier", level: "Advanced" },
      { name: "IsolationForest (Anomaly)", level: "Advanced" },
      { name: "Logistic Regression", level: "Advanced" },
      { name: "StandardScaler & Normalization", level: "Advanced" },
      { name: "Model Serialization (Pickle/Joblib)", level: "Advanced" },
      { name: "K-Fold Cross Validation", level: "Proficient" },
    ],
  },
  {
    title: "Agentic AI & LLM Systems",
    description: "Autonomous multi-agent architectures, operational telemetry reasoning, and contextual LLM APIs.",
    skills: [
      { name: "Multi-Agent Orchestration", level: "Advanced" },
      { name: "Groq LLM API (Llama 3.3 70B)", level: "Advanced" },
      { name: "Prompt Engineering & Copilots", level: "Advanced" },
      { name: "RAG & Contextual Grounding", level: "Proficient" },
      { name: "Real-time Telemetry Decisioning", level: "Advanced" },
      { name: "Automated Work Order Logic", level: "Advanced" },
    ],
  },
  {
    title: "Data Processing & Analytics",
    description: "High-performance tabular manipulation, exploratory data analysis, and statistical visualization.",
    skills: [
      { name: "Python (3.11 / 3.12+)", level: "Advanced" },
      { name: "Pandas", level: "Advanced" },
      { name: "NumPy", level: "Advanced" },
      { name: "Matplotlib & Seaborn", level: "Advanced" },
      { name: "Exploratory Data Analysis (EDA)", level: "Advanced" },
      { name: "Outlier & Skewness Detection", level: "Advanced" },
    ],
  },
  {
    title: "API Development & Backend Microservices",
    description: "High-throughput asynchronous web APIs, sensor streaming, and data validation schemas.",
    skills: [
      { name: "FastAPI", level: "Advanced" },
      { name: "Pydantic V2", level: "Advanced" },
      { name: "AsyncIO & Python Async", level: "Advanced" },
      { name: "RESTful API Design", level: "Advanced" },
      { name: "WebSockets & Streaming Feeds", level: "Proficient" },
      { name: "CORS & Route Security", level: "Advanced" },
    ],
  },
  {
    title: "Frontend & Interactive Dashboards",
    description: "Reactive analytics dashboards, native UI rendering, and accessible healthcare tools.",
    skills: [
      { name: "Next.js 16 (App Router)", level: "Advanced" },
      { name: "React 19 & TypeScript", level: "Advanced" },
      { name: "Streamlit", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Recharts (Reactive Charting)", level: "Advanced" },
    ],
  },
  {
    title: "Database & Cloud Infrastructure",
    description: "Relational cloud storage, ORM object modeling, and serverless hosting environments.",
    skills: [
      { name: "PostgreSQL (Neon Cloud)", level: "Advanced" },
      { name: "SQLAlchemy 2 & Psycopg3", level: "Advanced" },
      { name: "Vercel Platform", level: "Advanced" },
      { name: "Streamlit Community Cloud", level: "Advanced" },
      { name: "Git & GitHub Version Control", level: "Advanced" },
    ],
  },
];

export const FAQS = [
  {
    question: "Who is Bipin Kumar?",
    answer: "Bipin Kumar is a Data Science and AI/ML Engineer from Muzaffarpur, Bihar, currently based in Jaipur, Rajasthan. He is pursuing his B.Tech in Computer Science & Engineering at Jagannath University, Jaipur (2023–2027) with a CGPA of 7.4. He specializes in Agentic AI systems, predictive machine learning pipelines, and end-to-end full-stack AI integrations.",
  },
  {
    question: "What are Bipin Kumar's flagship projects?",
    answer: "Bipin has engineered two production platforms: the Agentic FacilityOps AI Platform (an autonomous multi-agent building intelligence system deployed at facilityops-platform.vercel.app) and SwasthyaAI: Diabetes Risk Predictor (a healthcare machine learning diagnostic tool live on Streamlit at diabetes-predictor-muqth3gs8dfgsg9ea2wqz3.streamlit.app).",
  },
  {
    question: "What internships and credentials does Bipin hold?",
    answer: "Bipin completed the AI for Sustainability Virtual Internship with 1M1B supported by AICTE and IBM SkillsBuild (ID: INTERNSHIP_17828984086a44dee80acf6), the Artificial Intelligence Internship with Edunet Foundation, AICTE & IBM SkillsBuild (STU ID: STU681afa946eb801746598548), the Data Science Certification from CodeWithHarry, and the Complete Python Bootcamp from Udemy.",
  },
  {
    question: "What technical roles is Bipin actively seeking?",
    answer: "Bipin is seeking roles as a Data Scientist, AI/ML Engineer, Machine Learning Developer, Data Analyst, or AI Integration Engineer. He is open to remote, hybrid, or on-site opportunities in India and globally.",
  },
  {
    question: "How can recruiters contact Bipin Kumar?",
    answer: "Recruiters can contact Bipin via direct email at bipinkumarkataroo6201@gmail.com, connect with him on LinkedIn at linkedin.com/in/bipinkr, or inspect his code repositories on GitHub at github.com/krbipin.",
  },
];
