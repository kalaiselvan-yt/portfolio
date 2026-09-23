export const PROFILE = {
  name: "Kalaiselvan S",
  role: "Full-Stack Developer",
  location: "Chennai, Tamil Nadu, IN",
  phone: "+91 87546 33467",
  phoneDial: "+918754633467",
  email: "kalaiselvansk59@gmail.com",
  linkedin: "https://www.linkedin.com/in/kalaiselvans/",
  summary:
    "I build enterprise web and mobile applications end to end — React and Flutter on the front end, Java/Vert.x and FastAPI underneath, PostgreSQL or MySQL holding it together. Two years in, currently shipping healthcare software; before that, livelihood-tech products from spec to Play Store.",
};

export interface Experience {
  role: string;
  company: string;
  period: string;
  rev: string;
  current?: boolean;
  points: string[];
}

export const EXPERIENCE: Experience[] = [
  {
    rev: "REV. B",
    current: true,
    role: "Engineer",
    company: "SRM Hospitals & Research Centre, Chennai",
    period: "Jul 2026 – Present",
    points: [
      "Building enterprise healthcare applications in React.js and Flutter",
      "Designing scalable backend services in Java on Vert.x",
      "Designing and consuming GraphQL APIs for client-server communication",
      "Optimising PostgreSQL schemas and queries for response time",
    ],
  },
  {
    rev: "REV. A",
    role: "Full-Stack Developer",
    company: "Jeevitam Livelihood Tech Solutions Pvt Ltd, Chennai",
    period: "Oct 2024 – Jun 2026",
    points: [
      "Shipped web and mobile applications in React.js and Flutter",
      "Built RESTful services in FastAPI for higher throughput and reliability",
      "Authored a reusable component library that cut new-feature build time",
      "Owned features end to end, from API contract to shipped UI",
    ],
  },
];

export interface Project {
  code: string;
  name: string;
  stack: string[];
  points: string[];
}

export const PROJECTS: Project[] = [
  {
    code: "DETAIL A",
    name: "Web & Mobile Application Suite",
    stack: [
      "React.js",
      "Flutter",
      "Java",
      "Vert.x",
      "GraphQL",
      "FastAPI",
      "PostgreSQL",
      "Firebase",
    ],
    points: [
      "Multi-user apps with authentication and role-based access",
      "3 Flutter apps published on the Google Play Store",
      "State managed with Riverpod, wired to REST + GraphQL backends",
      "Built and shipped across dev, staging and production in an Agile team",
    ],
  },
  {
    code: "DETAIL B",
    name: "EV Charging Reservation & Range Prediction",
    stack: [
      "Python",
      "Django",
      "Machine Learning",
      "REST APIs",
      "MySQL",
    ],
    points: [
      "Predicts remaining range from historical usage with an ML model",
      "Lets drivers plan charging stops along a route ahead of time",
      "Django REST backend feeding live predictions into booking flow",
      "Relational schema in MySQL for reservations and vehicle history",
    ],
  },
];

export const SKILLS: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: [
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "Dart",
      "SQL",
    ],
  },
  {
    group: "Frontend",
    items: [
      "React.js",
      "Flutter",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Bootstrap",
    ],
  },
  {
    group: "Backend",
    items: [
      "Java / Vert.x",
      "FastAPI",
      "Node.js",
      "Django",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    group: "Data",
    items: ["PostgreSQL", "MySQL"],
  },
  {
    group: "Tooling",
    items: ["Git", "GitHub", "VS Code"],
  },
];

export const EDUCATION = {
  degree: "B.E., Electronics & Communication Engineering",
  school: "University College of Engineering, Arni",
  year: "2024",
  grade: "CGPA 8.34",
};