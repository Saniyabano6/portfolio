// Edit your content here. Everything on the page comes from this file.
export const EMAIL = "shaikhsaniyabano6@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/saniya-bano-bba467316/";
export const GITHUB = "https://github.com/Saniyabano6";

export type Project = {
  name: string; cat: string; stack: string; pts: string[]; gh: string; wip?: boolean;
};

export const PROJECTS: Project[] = [
  { name: "News Research Tool", cat: "GenAI", stack: "Python, LangChain, FAISS, Groq (LLaMA-3.3-70B), HuggingFace, Streamlit",
    pts: ["RAG assistant: loads news URLs, splits them into chunks, embeds with HuggingFace and indexes in FAISS for semantic search.",
          "Groq LLaMA-3.3-70B answers through RetrievalQAWithSourcesChain, so every answer comes with cited source links.",
          "Streamlit UI with python-dotenv key handling and checks for empty vector stores, missing env variables and invalid URLs."],
    gh: "https://github.com/Saniyabano6/Research-tool" },
  { name: "Orbit", cat: "Full-stack", wip: true, stack: "Next.js, TypeScript, shadcn/ui, Drizzle, Postgres, NextAuth, Composio",
    pts: ["Platform where users create and manage their own AI agents, each with its own config, chat and tools.",
          "Google and GitHub sign-in, per-user agent ownership, and tool connections like Gmail through Composio.",
          "Working on routines: the agent asks clarifying questions and then schedules tasks with the tools it needs."],
    gh: "" },
  { name: "CineScope", cat: "ML", stack: "Python, FastAPI, Streamlit, TF-IDF, Cosine Similarity, TMDB API",
    pts: ["Content-based movie recommender using TF-IDF and cosine similarity, with genre-based fallback.",
          "Async FastAPI backend and Streamlit frontend: Trending, Popular, Top Rated, Upcoming, search and detail pages.",
          "Uses live TMDB data and is deployed on Render."],
    gh: "https://github.com/Saniyabano6/AIBasedMovie-recom" },
  { name: "Student Performance Predictor", cat: "ML", stack: "Python, Flask, Scikit-learn, XGBoost, CatBoost, Pandas",
    pts: ["Modular ML pipeline: ingestion, transformation, training and prediction in separate components.",
          "Benchmarked 8 regression models with grid search and picked the best by R2 score.",
          "Saved the preprocessor and model as artifacts and served predictions through a Flask form."],
    gh: "https://github.com/Saniyabano6/MLProject" },
  { name: "Nexora AI", cat: "Full-stack", stack: "See repo for the stack",
    pts: ["Foodie-focused project. Replace this line with 2-3 lines about what it does."],
    gh: "https://github.com/Saniyabano6/Foodie" },
  { name: "Zomato EDA", cat: "Data", stack: "Python, Pandas, NumPy, Matplotlib, Seaborn, Jupyter",
    pts: ["Cleaned a real restaurant dataset and handled missing values.",
          "Univariate and bivariate analysis of ratings, average cost, location and cuisine popularity, turned into plain business insights."],
    gh: "https://github.com/Saniyabano6/ExploratoryDataAnalysis" },
  { name: "House Price Prediction", cat: "ML", stack: "Python, Scikit-learn, HistGradientBoostingRegressor, GridSearchCV",
    pts: ["Regression pipeline with imputation, ordinal and one-hot encoding and scaling.",
          "Tuned HistGradientBoostingRegressor with GridSearchCV and k-fold CV, evaluated with RMSE and R2, plus a feature importance plot."],
    gh: "" },
];

export const SKILLS: Record<string, string[]> = {
  GenAI: ["LangChain", "RAG", "FAISS", "ChromaDB", "HuggingFace Embeddings", "Groq", "OpenAI", "Prompt Engineering"],
  "Machine Learning": ["Scikit-learn", "XGBoost", "CatBoost", "Pipelines", "GridSearchCV", "Feature Engineering", "Model Evaluation"],
  Data: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "EDA", "SQL"],
  Web: ["React.js", "TypeScript", "JavaScript", "Next.js", "FastAPI", "Flask", "Streamlit"],
  Languages: ["Python", "TypeScript", "JavaScript", "SQL"],
  "Databases and tools": ["MongoDB", "SQL Server", "Git", "GitHub", "Render", "VS Code"],
};

export const JOURNEY = [
  { t: "Diploma in Computer Science and Engineering", s: "GGP Bahraich, 2022 to 2025. 81%, Rank 1" },
  { t: "Software Development Intern, 45-day industrial training", s: "Full-stack web development: database connectivity, CRUD operations, UI optimization" },
  { t: "B.Tech Electronics Engineering", s: "Harcourt Butler Technical University, Kanpur, 2025 to 2028. All India Rank 33 in CUET-UG 2025" },
  { t: "Web Development Head", s: "Association of Electronics Engineering, HBTU Kanpur. Led the team on technical projects and events" },
];
