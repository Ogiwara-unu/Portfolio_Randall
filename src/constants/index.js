export const myProjects = [
  {
    id: 1,
    title: "Pokelab",
    description:
      "A Single Page Application built with React and Express that consumes data from the PokeAPI and displays detailed Pokémon information.",
    subDescription: [
      "Developed a fast SPA using React + Vite with IndexedDB and a Service Worker for offline capabilities.",
      "Implemented a lightweight backend using Node.js and Express to handle API requests.",
      "Used PM2 for deployment and process management.",
      "Integrated Axios on both frontend and backend for seamless data fetching.",
    ],
    href: "https://github.com/Ogiwara-unu/PokeProject",
    logo: "",
    image: "/assets/projects/pokeproject.jpg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Node.js", path: "/assets/logos/nodejs.svg" },
      { id: 3, name: "Express", path: "/assets/logos/expressjs.svg" },
      { id: 4, name: "PM2", path: "/assets/logos/pm2.svg" },
    ],
  },
  {
    id: 2,
    title: "Okarys API",
    description:
      "A GraphQL-based music API that manages songs, playlists, artists, and albums with token-based authentication.",
    subDescription: [
      "Built a flexible API using GraphQL with queries and mutations.",
      "Implemented authentication using JWT.",
      "Structured the backend with Express for modern API development.",
      "Used SQLite for lightweight and efficient persistence.",
    ],
    href: "https://github.com/Ogiwara-unu/okaryMsc_api",
    logo: "",
    image: "/assets/projects/okarys.png",
    tags: [
      { id: 1, name: "GraphQL", path: "/assets/logos/graphql.svg" },
      { id: 2, name: "Express", path: "/assets/logos/expressjs.svg" },
      { id: 3, name: "SQLite", path: "/assets/logos/sqlite.svg" },
      { id: 4, name: "JWT", path: "/assets/logos/jwt.svg" },
    ],
  },
  {
    id: 3,
    title: "SafeSteps",
    description:
      "A mobile hiking companion app built with Ionic and Firebase designed to enhance outdoor safety and route planning.",
    subDescription: [
      "Developed a cross-platform mobile interface using Ionic.",
      "Implemented route storage, real-time data, and authentication with Firebase.",
      "Used Capacitor to access native device features such as GPS and local storage.",
    ],
    href: "https://github.com/Ogiwara-unu/SafeSteps",
    logo: "",
    image: "/assets/projects/safesteps.png",
    tags: [
      { id: 1, name: "Ionic", path: "/assets/logos/ionic.svg" },
      { id: 2, name: "Firebase", path: "/assets/logos/firebase.svg" },
      { id: 3, name: "Capacitor", path: "/assets/logos/capacitor.svg" },
    ],
  },
  {
    id: 4,
    title: "ContiAIDocs",
    description:
      "Technical documentation for an n8n workflow powering a virtual assistant that handles invoice creation and data validation.",
    subDescription: [
      "Documented the full logic of an automation system built with n8n.",
      "Explained data validation, formatting, and Oracle APEX database posting.",
      "Used Docusaurus, Markdown, and JavaScript for structured and clear documentation.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/rpaDocs.png",
    tags: [
      { id: 1, name: "Docusaurus", path: "/assets/logos/docusaurus.svg" },
      { id: 2, name: "Markdown", path: "/assets/logos/markdown.svg" },
      { id: 3, name: "JavaScript", path: "/assets/logos/javascript.svg" },
    ],
  },
  {
    id: 5,
    title: "N8N Billing Workflow",
    description:
      "An automation workflow for invoice processing using n8n, Supabase, Redis, and RESTful APIs.",
    subDescription: [
      "Created a complete automation flow for basic billing.",
      "Integrated Supabase, Postgres, Redis, Twilio, and REST APIs.",
      "Implemented JavaScript function nodes for advanced logic and data transformation.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/workflow.png",
    tags: [
      { id: 1, name: "n8n", path: "/assets/logos/n8n.svg" },
      { id: 2, name: "Supabase", path: "/assets/logos/supabase.svg" },
      { id: 3, name: "Postgres", path: "/assets/logos/postgres.svg" },
      { id: 4, name: "Redis", path: "/assets/logos/redis.svg" },
    ],
  },
  {
    id: 6,
    title: "Laravel Rent API",
    description:
      "A RESTful API for managing a car rental system, built with Laravel and MariaDB.",
    subDescription: [
      "Developed endpoints for vehicles, rentals, clients, and billing.",
      "Implemented authentication and role management using Laravel’s tools.",
      "Used MariaDB for efficient and structured data storage.",
    ],
    href: "https://github.com/Ogiwara-unu/renta_api",
    logo: "",
    image: "/assets/projects/api_rent.png",
    tags: [
      { id: 1, name: "Laravel", path: "/assets/logos/laravel.svg" },
      { id: 2, name: "PHP", path: "/assets/logos/php.svg" },
      { id: 3, name: "MariaDB", path: "/assets/logos/mariadb.svg" },
    ],
  },
];


export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/50671867501?text=Hello%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20contact%20you",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/randallalv/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/randall_wa0/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Software Developer Intern",
    job: "CATSA",
    date: "Feb 2024 – Jun 2025",
    contents: [
      "Developed internal systems using Oracle APEX and SQL Developer.",
      "Implemented RESTful integrations to optimize internal processes.",
      "Improved data handling and reduced manual workload through automation.",
    ],
  },
  {
    title: "Automation Developer (Intern)",
    job: "ContiCR",
    date: "Jul 2025 – Nov 2025",
    contents: [
      "Built an automation workflow using n8n for invoice creation and processing.",
      "Integrated Redis, Supabase, Postgres, Twilio, and Gemini AI.",
      "Developed a virtual assistant capable of validating and posting data into Oracle databases.",
    ],
  },
  {
    title: "Freelance Developer",
    job: "Independent",
    date: "2025 – Present",
    contents: [
      "Developed multiple personal and client projects using React, Node.js, Laravel, and n8n.",
      "Created custom documentation using Docusaurus and Markdown.",
      "Continuously expanding expertise in automation, backend systems, and cloud tools.",
    ],
  },
];

export const reviews = [
  {
    name: "Valeria Fernández",
    username: "@valeria",
    body: "Randall is reliable, organized, and great to work with.",
    img: "https://robohash.org/valeriafernandez",
  },
  {
    name: "Christian Villalobos",
    username: "@christian",
    body: "He solves problems efficiently and always brings smart ideas.",
    img: "https://robohash.org/christianvillalobos",
  },
  {
    name: "Jafeth Espinoza",
    username: "@jafeth",
    body: "A collaborative teammate with strong technical skills.",
    img: "https://robohash.org/jafethespinoza",
  },
  {
    name: "Raúl Barrantes",
    username: "@raul",
    body: "Communicative, focused, and dependable under pressure.",
    img: "https://robohash.org/raulbarrantes",
  },
  {
    name: "Eddier López",
    username: "@eddier",
    body: "Shows great initiative, fast learning, and strong logic.",
    img: "https://robohash.org/eddierlopez",
  },
  {
    name: "Edgar Villalobos",
    username: "@edgar",
    body: "Delivers high-quality automation and workflow solutions.",
    img: "https://robohash.org/edgarvillalobos",
  },
  {
    name: "Camilo Redondo",
    username: "@camilo",
    body: "Proactive and skilled at optimizing processes.",
    img: "https://robohash.org/camiloredondo",
  },
  {
    name: "Nathali Chacón",
    username: "@nathali",
    body: "Clear communicator who builds effective solutions.",
    img: "https://robohash.org/nathalichacon",
  },
];


