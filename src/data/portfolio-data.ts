export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: "Agentic AI" | "Machine Learning" | "Deep Learning & NLP" | "Full-Stack AI";
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
    { label: "Production & ML Projects", value: "6+" },
    { label: "Verified Internships & Certifications", value: "4" },
    { label: "Inference Latency Reduction", value: "3x" },
    { label: "Core Technical Skills", value: "30+" },
  ],
  bio: `Data Science and AI/ML Engineer with hands-on experience building end-to-end machine learning pipelines, autonomous agentic platforms, and data-driven web products. Proficient in Python, Scikit-learn, TensorFlow, LangChain, FastAPI, and modern frontend architectures. Passionate about solving real-world challenges through intelligent, production-ready systems.`,
};

export const PROJECTS: Project[] = [
  {
    slug: "facilityops-ai",
    title: "Agentic FacilityOps AI Platform",
    subtitle: "Autonomous Multi-Agent Building Intelligence & Telemetry System",
    description: "Enterprise operations platform with autonomous AI agents continuously monitoring energy, maintenance, occupancy, security, and cost metrics with real-time 1-minute streaming telemetry.",
    category: "Agentic AI",
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
    category: "Machine Learning",
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
  {
    slug: "rag-document-qa",
    title: "RAG-Powered Document Q&A System",
    subtitle: "Retrieval-Augmented Generation Multi-Document Intelligence Engine",
    description: "Enterprise semantic search and conversational question-answering pipeline ingesting multi-format corpora with ChromaDB vector search and Groq LLM inference under 300ms.",
    category: "Agentic AI",
    featured: true,
    tags: ["LangChain", "ChromaDB", "Sentence Transformers", "FastAPI", "React", "Groq LLM"],
    metrics: [
      { label: "Query Latency", value: "<300ms" },
      { label: "Vector Store", value: "ChromaDB" },
      { label: "Embeddings", value: "Sentence Transformers" },
      { label: "LLM Provider", value: "Groq Llama 3" },
    ],
    githubUrl: "https://github.com/krbipin",
    overview: "Built an enterprise Retrieval-Augmented Generation (RAG) system capable of ingesting diverse unstructured documents (PDFs, DOCX, TXT) to deliver precise, citation-backed answers without hallucination.",
    problem: "Standard large language models hallucinate on specialized internal documents and cannot access private organizational knowledge without costly retraining.",
    solution: "Engineered a LangChain ingestion pipeline that chunks documents with recursive semantic splitting, generates dense embeddings with Sentence Transformers, and indexes them in ChromaDB. Queries retrieve top-k context vectors and feed a conditioned prompt to Groq LLM for verified answers.",
    architecture: [
      "Document pre-processor splits text into optimal 512-token chunks with 50-token overlaps.",
      "Sentence Transformers model computes dense 384-dimensional vector embeddings.",
      "ChromaDB indexes vectors with HNSW indexing for sub-millisecond similarity queries.",
      "FastAPI orchestrates query routing, prompt synthesis, and conversation history in MongoDB.",
      "React frontend provides real-time streaming answer generation and document upload preview.",
    ],
    keyFeatures: [
      "Semantic Chunking & Deduplication: Prevents fragmented context loss.",
      "Sub-300ms End-to-End Latency: Powered by Groq's high-throughput LPU inference.",
      "Source Citation: Highlights exact document pages and excerpts supporting every answer.",
      "Conversation History Memory: Retains multi-turn dialogue context securely.",
    ],
    techStack: [
      { category: "AI & Vector", items: ["LangChain", "ChromaDB", "Sentence Transformers", "Groq API"] },
      { category: "Full-Stack", items: ["FastAPI", "React.js", "MongoDB", "Tailwind CSS"] },
    ],
    impact: [
      "Reduced research time across multi-page technical manuals from 45 minutes to seconds.",
      "Zero observed hallucinations through strict context constraint prompting.",
    ],
  },
  {
    slug: "movie-recommender",
    title: "Hybrid Movie Recommendation System",
    subtitle: "Collaborative & Content-Based Filtering Personalization Engine",
    description: "Hybrid recommendation platform combining SVD matrix factorization with TF-IDF cosine similarity on the MovieLens 1M dataset, achieving RMSE of 0.87.",
    category: "Machine Learning",
    featured: false,
    tags: ["Scikit-learn", "Pandas", "SVD Factorization", "TF-IDF", "Express.js", "React"],
    metrics: [
      { label: "Evaluation RMSE", value: "0.87" },
      { label: "Dataset Size", value: "1M Ratings" },
      { label: "Filtering Mode", value: "Hybrid" },
      { label: "Stack", value: "MERN + Python" },
    ],
    githubUrl: "https://github.com/krbipin",
    overview: "Developed a hybrid recommendation platform that solves the cold-start problem and user preference drift by blending content-based semantic matching with collaborative behavioral signals.",
    problem: "Single-paradigm recommenders fail: collaborative filtering suffers from cold-start problems on new items, while content-based filtering creates repetitive filter bubbles without serendipity.",
    solution: "Engineered a weighted ensemble combining Truncated SVD matrix factorization on user-item interaction matrices with TF-IDF cosine similarity vectors across genres and plot metadata, evaluated on MovieLens 1M.",
    architecture: [
      "Preprocessing cleans and normalizes user rating distributions across 1 million entries.",
      "SVD matrix factorization extracts latent feature vectors for users and movies.",
      "TF-IDF vectorizer extracts text feature vectors from movie metadata.",
      "Dynamic ensemble weight shifts recommendations based on user rating history depth.",
      "Full-stack MERN interface presents movie cards, genre exploration, and dynamic rating feedback.",
    ],
    keyFeatures: [
      "Hybrid Recommendation Engine: Automatic fallback to content matching for new users.",
      "Fast Matrix Factorization: Offline precomputed latent vectors with real-time dot products.",
      "Interactive React UI: Personalized movie shelves, watchlists, and search.",
    ],
    techStack: [
      { category: "ML & Data", items: ["Python", "Scikit-learn", "Pandas", "NumPy", "SciPy"] },
      { category: "Full-Stack", items: ["React.js", "Node.js", "Express.js", "MongoDB Atlas"] },
    ],
    impact: [
      "Achieved a 0.87 RMSE on test holdouts, outperforming baseline collaborative models by 14%.",
    ],
  },
  {
    slug: "churn-predictor",
    title: "Customer Churn Prediction Dashboard",
    subtitle: "Explainable AI (XAI) & Telecom Customer Retention System",
    description: "Predictive analytics pipeline with XGBoost classifier and SMOTE balancing, featuring SHAP value explainability and dual Streamlit + React operational dashboards.",
    category: "Machine Learning",
    featured: false,
    tags: ["XGBoost", "SHAP", "SMOTE", "FastAPI", "Streamlit", "React"],
    metrics: [
      { label: "AUC-ROC Score", value: "92%" },
      { label: "Class Balancing", value: "SMOTE" },
      { label: "Explainability", value: "SHAP Values" },
      { label: "Backend API", value: "FastAPI" },
    ],
    githubUrl: "https://github.com/krbipin",
    overview: "A comprehensive telecom customer churn prediction platform that combines high-accuracy classification with transparent Explainable AI (XAI) to help retention teams take preemptive action.",
    problem: "Customer acquisition in telecommunications costs 5x more than retention. When churn prediction models act as black boxes, retention teams cannot determine why a high-value customer is likely to leave.",
    solution: "Trained an XGBoost classifier with SMOTE oversampling to resolve extreme class imbalance. Integrated TreeSHAP to generate per-customer feature attribution waterfalls, highlighting exact churn drivers like contract type, fiber optics tenure, and tech support tickets.",
    architecture: [
      "SMOTE balances churn ratio in telecom feature matrices.",
      "XGBoost classifier trained with GridSearchCV hyperparameter tuning achieving 92% AUC-ROC.",
      "SHAP explainer computes local and global feature attribution scores.",
      "FastAPI endpoint delivers churn risk scores alongside top 3 driving negative features.",
      "Dual interface: Streamlit for analytical exploration and React dashboard for operational teams.",
    ],
    keyFeatures: [
      "Transparent Risk Breakdown: Displays which specific billing or service factors drive churn risk.",
      "Real-Time Batch Scoring: Evaluates thousands of customer records concurrently.",
      "Interactive Streamlit Simulator: What-if analysis testing retention discount scenarios.",
    ],
    techStack: [
      { category: "Machine Learning", items: ["XGBoost", "SHAP", "Scikit-learn", "Imbalanced-Learn (SMOTE)"] },
      { category: "Web & API", items: ["FastAPI", "Streamlit", "React.js", "MongoDB"] },
    ],
    impact: [
      "Achieved 92% AUC-ROC, providing early warning signals 60 days before contract expiry.",
    ],
  },
  {
    slug: "sentiment-analyzer",
    title: "Real-Time Sentiment Analysis Pipeline",
    subtitle: "Fine-Tuned BERT NLP Model with ONNX Runtime Acceleration",
    description: "Production deep learning sentiment classification pipeline utilizing fine-tuned BERT with ONNX Runtime acceleration, achieving 91% F1-score and 3x faster inference.",
    category: "Deep Learning & NLP",
    featured: false,
    tags: ["PyTorch", "HuggingFace", "BERT", "ONNX Runtime", "Express", "React"],
    metrics: [
      { label: "Model F1-Score", value: "91%" },
      { label: "Latency Speedup", value: "3x via ONNX" },
      { label: "Base Architecture", value: "BERT-base" },
      { label: "Serving Engine", value: "ONNX Runtime" },
    ],
    githubUrl: "https://github.com/krbipin",
    overview: "A production-grade NLP service that classifies customer reviews and social media comments in real-time using a fine-tuned transformer model optimized for high-throughput serving.",
    problem: "Standard BERT models are computationally heavy and have significant latency when deployed on standard CPU instances, making real-time user-facing analysis expensive and sluggish.",
    solution: "Fine-tuned bert-base-uncased on paired review datasets to reach 91% F1-score, then converted the model graph to ONNX with graph optimizations and quantization, reducing latency by 3x on commodity servers.",
    architecture: [
      "Fine-tuned Hugging Face transformer model on GPU with PyTorch.",
      "Exported model graph to ONNX and applied graph simplification and constant folding.",
      "ONNX Runtime execution provider deployed on lightweight Python server.",
      "Express.js gateway mediates requests, verifies tokens, and logs predictions in MongoDB.",
      "React UI displays sentiment polarity gauges and historical sentiment trends.",
    ],
    keyFeatures: [
      "3x Faster Inference: ONNX optimizations deliver sub-50ms CPU inferences.",
      "Confidence Scores: Outputs multi-class probabilities (Positive, Neutral, Negative).",
      "Historical Sentiment Tracking: Interactive sentiment timeline charts over time.",
    ],
    techStack: [
      { category: "NLP & Deep Learning", items: ["PyTorch", "Hugging Face Transformers", "BERT", "ONNX Runtime"] },
      { category: "Full-Stack", items: ["Node.js", "Express.js", "React.js", "MongoDB"] },
    ],
    impact: [
      "Lowered cloud compute hosting costs by running optimized ONNX inferences on standard CPU instances.",
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
    badgeColor: "emerald",
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
    badgeColor: "cyan",
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
    badgeColor: "violet",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Machine Learning & Deep Learning",
    description: "Core statistical learning algorithms, deep neural nets, and optimization techniques.",
    skills: [
      { name: "Scikit-learn", level: "Advanced" },
      { name: "TensorFlow & Keras", level: "Proficient" },
      { name: "PyTorch", level: "Proficient" },
      { name: "XGBoost & LightGBM", level: "Advanced" },
      { name: "ONNX Runtime", level: "Proficient" },
      { name: "HuggingFace Transformers", level: "Proficient" },
    ],
  },
  {
    title: "NLP, LLMs & Agentic Systems",
    description: "Generative AI, retrieval pipelines, semantic embeddings, and multi-agent systems.",
    skills: [
      { name: "LangChain", level: "Advanced" },
      { name: "LlamaIndex", level: "Proficient" },
      { name: "RAG Architectures", level: "Advanced" },
      { name: "Groq LLM & OpenAI APIs", level: "Advanced" },
      { name: "Sentence Transformers", level: "Advanced" },
      { name: "ChromaDB & FAISS", level: "Advanced" },
      { name: "NLTK & SpaCy", level: "Proficient" },
    ],
  },
  {
    title: "Data Analytics & Engineering",
    description: "Exploratory data analysis, statistical tests, feature engineering, and reporting.",
    skills: [
      { name: "Pandas", level: "Advanced" },
      { name: "NumPy", level: "Advanced" },
      { name: "Matplotlib & Seaborn", level: "Advanced" },
      { name: "Plotly", level: "Proficient" },
      { name: "Power BI", level: "Proficient" },
      { name: "Excel Advanced", level: "Proficient" },
      { name: "Feature Engineering & SMOTE", level: "Advanced" },
    ],
  },
  {
    title: "Full-Stack Development & APIs",
    description: "Production web applications, reactive user interfaces, and high-performance microservices.",
    skills: [
      { name: "FastAPI", level: "Advanced" },
      { name: "React.js", level: "Advanced" },
      { name: "Next.js (App Router)", level: "Advanced" },
      { name: "Node.js & Express.js", level: "Proficient" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "RESTful API Design", level: "Advanced" },
      { name: "Streamlit", level: "Advanced" },
    ],
  },
  {
    title: "Databases & Cloud Infrastructure",
    description: "Relational, document, and vector databases with deployment platforms.",
    skills: [
      { name: "PostgreSQL (Neon)", level: "Advanced" },
      { name: "MongoDB & Atlas", level: "Proficient" },
      { name: "SQL & SQLAlchemy 2", level: "Advanced" },
      { name: "Docker (Basics)", level: "Familiar" },
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Vercel & Render", level: "Advanced" },
    ],
  },
  {
    title: "Languages & Core Fundamentals",
    description: "Programming languages, computer science foundations, and software craftsmanship.",
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "SQL", level: "Advanced" },
      { name: "JavaScript / TypeScript", level: "Proficient" },
      { name: "R (Basics)", level: "Familiar" },
      { name: "Data Structures & Algorithms", level: "Proficient" },
      { name: "Object-Oriented Programming", level: "Advanced" },
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
    answer: "Bipin has engineered 6 notable projects, spearheaded by the Agentic FacilityOps AI Platform (an autonomous multi-agent building intelligence system deployed at facilityops-platform.vercel.app) and SwasthyaAI (a healthcare machine learning diabetes risk predictor live on Streamlit). He has also built RAG-powered document retrieval engines, hybrid recommendation algorithms, and customer churn prediction dashboards.",
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
