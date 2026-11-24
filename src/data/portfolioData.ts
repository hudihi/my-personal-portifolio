import { Project, SkillCategory, ExperienceItem, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Abdillah Ahmed Issa',
  shortName: 'Abdillah Issa',
  initials: 'AI',
  role: 'Software Developer',
  tagline: 'Crafting responsive cross-platform mobile apps, scalable backend microservices, and automated cloud deployments.',
  location: 'Dar es Salaam, Tanzania',
  phone: '+255 743 721 853',
  email: 'abdillahissa866@gmail.com',
  github: 'https://github.com/hudihi',
  githubUsername: 'hudihi',
  linkedin: 'https://linkedin.com/in/abdillah-issa-7410402ba',
  availability: 'Open for Full-time Roles & High-Impact Projects',
  summary:
    'Software Developer with hands-on experience delivering end-to-end web and mobile applications. Proficient in crafting responsive cross-platform mobile apps with Flutter & Dart, building scalable backend architectures using Java, Spring Boot, and Python (FastAPI), and managing cloud/server infrastructure. Experienced in GitOps workflows, automated CI/CD via GitHub Actions, and reverse proxy routing with Traefik.',
};

export const CORE_PILLARS = [
  {
    title: 'Mobile Engineering',
    tagline: 'Flutter & Dart',
    description: 'Responsive cross-platform apps with Riverpod, BLoC, and production App Store / Play Store pipelines.',
  },
  {
    title: 'Backend & APIs',
    tagline: 'Java, Spring Boot & FastAPI',
    description: 'Scalable RESTful microservices, secure authentication, and transactional SQL data layers.',
  },
  {
    title: 'Cloud & Infrastructure',
    tagline: 'Docker, Traefik & GitOps',
    description: 'Production containerization, Traefik SSL reverse proxy routing, and automated GitHub Actions CI/CD.',
  },
  {
    title: 'AI/ML Serving',
    tagline: 'vLLM & Inference APIs',
    description: 'Deploying high-throughput, low-latency AI inference microservices with FastAPI and Docker.',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Mobile Development',
    description: 'Cross-platform mobile applications for iOS & Android',
    skills: [
      'Flutter',
      'Dart',
      'Material 3',
      'Riverpod',
      'BLoC',
      'Provider',
      'REST APIs & Dio',
      'Firebase',
      'Hive (Local DB)',
      'Play Console & App Store Connect',
      'Unit Testing',
    ],
  },
  {
    category: 'Backend & APIs',
    description: 'Robust server architectures and microservices',
    skills: [
      'Java',
      'Spring Boot',
      'Python',
      'FastAPI',
      'RESTful APIs',
      'Microservices Architecture',
      'PostgreSQL',
      'MySQL',
      'JWT Authentication',
    ],
  },
  {
    category: 'DevOps & Cloud',
    description: 'Infrastructure, containers, and automated delivery pipelines',
    skills: [
      'Docker & Containerization',
      'Traefik Reverse Proxy (SSL)',
      'Portainer',
      'GitHub Actions (CI/CD)',
      'GitOps Workflows',
      'Google Cloud Platform (GCP)',
      'Cloudflare (DNS & SSL)',
      'Linux Server Administration',
      'Nginx',
      'Git',
    ],
  },
  {
    category: 'Machine Learning & AI',
    description: 'Inference serving and predictive modeling',
    skills: [
      'vLLM High-throughput Serving',
      'FastAPI Inference Microservices',
      'Scikit-Learn',
      'XGBoost & CatBoost',
      'LightGBM',
      'Joblib Model Serialization',
      'Neural Networks',
    ],
  },
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    period: 'July 2025 – August 2026',
    role: 'Software Developer',
    company: 'NEBO TECH',
    location: 'Mikocheni, Dar es Salaam',
    type: 'Full-time',
    highlights: [
      'Architected and deployed production-ready inference microservices with FastAPI and Python, integrating ML/AI models with Flutter and React user interfaces.',
      'Containerized backend services using Docker and configured vLLM to serve high-throughput, low-latency AI inference workloads.',
      'Configured Linux server environments using Traefik reverse proxy for SSL termination, path-based routing, and secure API traffic management.',
      'Provisioned and configured Google Cloud Platform compute instances, preparing production-ready hosts and managing containerized services through Portainer.',
      'Established automated CI/CD deployment flows via GitHub Actions and GitOps workflows to deploy containerized microservices to production.',
    ],
    technologies: ['FastAPI', 'Python', 'vLLM', 'Docker', 'Traefik', 'GCP', 'GitHub Actions', 'Portainer', 'React', 'Flutter'],
  },
  {
    period: 'March 2025 – Dec 2025',
    role: 'Mobile Developer',
    company: 'Youth for Children Innovation (Y4C)',
    location: 'UDSM, Dar es Salaam',
    type: 'Part-time',
    highlights: [
      'Engineered cross-platform mobile applications using Flutter and Dart, implementing responsive UI design and state management via Riverpod and Provider.',
      'Integrated secure RESTful backend APIs for user authentication, real-time data sync, and nutrition recommendation engines.',
      'Automated mobile application build signing, version management, and deployment pipelines for Google Play Store and Apple App Store releases.',
    ],
    technologies: ['Flutter', 'Dart', 'Riverpod', 'Provider', 'RESTful APIs', 'Play Store', 'App Store Connect'],
  },
  {
    period: 'Jan 2025 – July 2025',
    role: 'Mobile Developer',
    company: '3D Solutions & Robotics Lab',
    location: 'UDSM, Dar es Salaam',
    type: 'Part-time',
    highlights: [
      'Translated product requirements into functional, high-performance Flutter mobile applications.',
      'Managed application build configurations and app store release management for production deployment.',
      'Performed mobile application testing, debugging, memory optimization, and API performance tuning prior to production launches.',
    ],
    technologies: ['Flutter', 'Dart', 'Mobile Testing', 'Performance Tuning', 'Build Configurations'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'pahala-marketplace',
    title: 'Pahala Marketplace',
    role: 'Full-Stack & DevOps Engineer',
    category: 'Full-Stack & DevOps',
    description:
      'End-to-end e-commerce platform built with a modern React frontend and Spring Boot / FastAPI backend microservices, orchestrated via Docker and Traefik.',
    highlights: [
      'Architected Spring Boot and FastAPI microservices backed by PostgreSQL with transactional integrity.',
      'Configured Traefik reverse proxy container with automated Let’s Encrypt SSL certificates, health checks, and path-based routing.',
      'Engineered automated CI/CD workflows via GitHub Actions to execute backend unit/integration tests and push container images.',
    ],
    technologies: ['React.js', 'Python (FastAPI)', 'Java / Spring Boot', 'PostgreSQL', 'Docker', 'Traefik', 'GitHub Actions'],
    metrics: [
      { label: 'Architecture', value: 'Microservices' },
      { label: 'Proxy / SSL', value: 'Traefik Auto-SSL' },
      { label: 'CI/CD', value: 'GitHub Actions' },
    ],
  },
  {
    id: 'client-websites',
    title: 'Client Web Platforms & Deployments',
    role: 'Full-Stack Developer & Deployment Engineer',
    category: 'Client Platforms',
    description:
      'Delivered two live production business websites end-to-end: Mavuno Water Solutions (mavuno.co.tz) for rural Tanzanian farming education, and Promax Geoservices (promaxgeo.com) for geotechnical engineering.',
    highlights: [
      'Delivered Mavuno Water Solutions (mavuno.co.tz) supporting smallholder farmers in rural Tanzania with irrigation and drainage tools.',
      'Delivered Promax Geoservices (promaxgeo.com), a geotechnical investigation and civil engineering firm platform.',
      'Owned the full delivery stack: domain registration, Cloudflare DNS/SSL, containerized FastAPI backends, and GitOps deployments.',
    ],
    technologies: ['React.js', 'Bootstrap', 'Python (FastAPI)', 'Docker', 'Cloudflare (DNS/SSL)', 'GitOps'],
    metrics: [
      { label: 'Platforms', value: '2 Production' },
      { label: 'Security', value: 'Cloudflare SSL' },
      { label: 'Workflow', value: 'GitOps' },
    ],
  },
  {
    id: 'lishe-app',
    title: 'LisheApp — Nutrition Mobile Guidance',
    role: 'Mobile & Backend Engineer',
    category: 'Mobile & AI',
    description:
      'Mobile application designed to guide nutrition and health management, featuring intelligent recommendation flows and secure cloud synchronization.',
    highlights: [
      'Built responsive Flutter & Dart mobile interfaces with Riverpod state management and Material 3 design system.',
      'Integrated RESTful backend APIs for authentication, profile tracking, and AI-driven dietary recommendations.',
      'Optimized network payloads using Dio and local caching via Hive for seamless offline resilience.',
    ],
    technologies: ['Flutter', 'Dart', 'Riverpod', 'RESTful APIs', 'AI Recommendation Engine', 'Hive'],
    metrics: [
      { label: 'Platform', value: 'iOS & Android' },
      { label: 'State', value: 'Riverpod' },
      { label: 'Intelligence', value: 'AI Nutrition' },
    ],
  },
  {
    id: 'credit-scoring-pipeline',
    title: 'Credit Scoring Prediction Pipeline',
    role: 'Machine Learning Engineer',
    category: 'Machine Learning',
    description:
      'Multi-model ensemble pipeline analyzing financial transaction datasets to predict creditworthiness for loan requesting dashboard services.',
    highlights: [
      'Extracted and preprocessed financial transaction records, engineering features for classification accuracy.',
      'Trained and evaluated ensemble models including XGBoost, CatBoost, LightGBM, and neural networks, optimizing AUC metrics.',
      'Serialized predictive models via Joblib for zero-overhead integration into loan request microservice backends.',
    ],
    technologies: ['Python', 'XGBoost', 'CatBoost', 'LightGBM', 'Neural Networks', 'Scikit-Learn', 'Joblib'],
    metrics: [
      { label: 'Models', value: 'Ensemble' },
      { label: 'Metric', value: 'Target AUC' },
      { label: 'Serving', value: 'Joblib / API' },
    ],
  },
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: 'BSc. in Computer Science',
    institution: 'University of Dar es Salaam (UDSM)',
    period: 'Nov 2022 – July 2025',
    details: ['Core Computer Science, Distributed Systems, Algorithms, Software Engineering, Mobile Architecture.'],
  },
  {
    degree: 'Cloud & Enterprise Technology Programme',
    institution: 'Deloitte SkillSprint, CoICT',
    period: 'Feb 2025 – July 2025',
    details: [
      'AWS cloud fundamentals: IAM, compute, storage, databases, security, networking, monitoring, and cost management.',
      'Agile methodologies, Enterprise architectures, and Information Management.',
    ],
  },
  {
    degree: 'Advanced Certificate of Secondary Education (ACSEE)',
    institution: 'Tabora Boys Secondary School',
    period: 'July 2020 – May 2022',
  },
];

export const CERTIFICATIONS = [
  'Java Foundations: Complete Course with Java 21 (Udemy)',
  'Spring Boot 4 & Spring Framework 7 (Udemy)',
];

export const LANGUAGES = [
  { name: 'Kiswahili', level: 'Native' },
  { name: 'English', level: 'Professional Working Proficiency' },
];
