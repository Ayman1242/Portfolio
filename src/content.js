export const PROFILE = {
  name: "Ayman Abdelfattah",
  role: "Software Developer",
  focus:
    "Software developer with 3+ years of experience building full-stack systems, " +
    "from front-end interfaces to backend services and data layers. Comfortable across the stack, " +
    "with particular strength in backend systems, database management, and performance optimization.",
  location: "Edmonton, AB",
  email: "aymanabdelfattah1@gmail.com",
  github: "https://github.com/ayman1242",
  linkedin: "https://linkedin.com/in/ayman99",
  resume: "/AymanAbdelfattah_Resume.pdf",
};

export const SECTIONS = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const STACK = [
  { group: "Languages", items: ["C#", "Python", "Java", "SQL", "PL/SQL", "JavaScript", "PHP", "HTML/CSS"] },
  { group: "Frameworks & Tools", items: [".NET", "React", "REST APIs", "Git", "Docker", "Linux/WSL"] },
  { group: "Data & Cloud", items: ["Oracle DB", "Azure"] },
];

export const ABOUT_TEXT = "";

export const EXPERIENCE = [
  {
    role: "Software Development & AI Model Evaluation",
    org: "DataAnnotation",
    period: "January 2026 — Present",
    body: 
    "Contract work through DataAnnotation focused on evaluating and ranking large " +
    "language model (LLM) outputs on coding-related tasks. Work spans testing " +
    "agentic tool-use behavior, RLHF preference ranking, and prompt engineering to " +
    "surface model failure cases across reasoning, code generation, and tool use. " +
    "Reviews real code changes across multiple languages and frameworks, " +
    "functioning as hands-on quality assurance on model outputs. Built a " +
    "Docker-based workflow to standardize evaluation environments."
  },
  {
    role: "Software Developer II",
    org: "Computronix",
    period: "May 2023 — Nov 2025",
    body: 
    "Built and maintained permitting and licensing platforms for government clients, using C# for" +
    " backend services, Python for automation and scripting, and PL/SQL for stored procedures and " +
    "query optimization within Oracle. Front-end work was done in JavaScript and HTML/CSS, with the " +
    "full stack tied together end to end, from browser to backend to database.",
  },
];

export const PROJECTS = [
  {
  name: "This Portfolio",
  tag: "React · Vite · CSS",
  body:
    "Personal portfolio site built with React and Vite, structured as reusable " +
    "components (Nav, Hero, Sheet, About, Experience, Projects, Contact) with a " +
    "shared content layer for easy editing without touching layout code. Styled " +
    "with hand-written CSS using custom properties for theming, no CSS framework " +
    "or component library. Uses the IntersectionObserver API for scroll-triggered " +
    "animations and lucide-react for iconography. Fully static with no backend, " +
    "built and deployed as a production bundle via Vite.",
  link: "https://github.com/Ayman1242/Portfolio",
  },
  {
  name: "MLP & Linear/Logistic Regression",
  tag: "Python · Machine Learning",
  body:
    "A small side project I put together a few years back to really " +
    "understand how neural networks work under the hood. Built linear " +
    "regression, logistic regression, and a basic multi-layer perceptron " +
    "(MLP) completely from scratch in Python, no ML libraries doing the " +
    "heavy lifting. Trained the MLP on the classic MNIST handwritten " +
    "digits dataset, and along the way found that swapping in cross-entropy " +
    "loss for the logistic regression model beat out mean squared error by " +
    "about 3% on accuracy.",
  link: "https://github.com/Ayman1242/MLP-Linear-Logistic-Regression",
},
{
  name: "LeetCode Practice Auto-Sync",
  tag: "Python · GitHub Actions",
  body:
    "A repo I use to track my LeetCode practice, currently sitting at 70+ " +
    "solved problems spanning arrays, trees, graphs, and dynamic " +
    "programming. Set up a GitHub Actions workflow that automatically " +
    "syncs successful submissions straight from LeetCode into the repo, " +
    "so solutions get committed without any manual copy-pasting.",
  link: "https://github.com/Ayman1242/Leetcode",
},
{
  name: "Appraisal Android App",
  tag: "Java · Android · Firebase",
  body:
    "A group project built for a software engineering course at the " +
    "University of Alberta: an Android app for creating, tracking, and " +
    "discussing experiments. Features included user sign-up, a " +
    "Firebase-backed database, subscribing to other users' experiments, " +
    "and per-experiment discussion threads. Built in Java using Android Studio " +
    "with a CI workflow running via GitHub Actions.",
  link: "https://github.com/CMPUT301W21T11/Appraisal",
},
];

export const CONTACT_TEXT = "";
