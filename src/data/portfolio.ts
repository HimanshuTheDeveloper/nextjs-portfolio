/* LAST_LINKEDIN_SYNC: 2026-10-24T07:23:46.594Z */
import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  profile: {
    name: "Himanshu",
    title: "Backend Developer & Software Engineer",
    tagline: "Architecting resilient backend systems, scalable REST APIs, and high-performance database infrastructures.",
    summary:
      "Backend Developer and Software Engineer with approximately 5 years of industry experience specializing in PHP, Laravel, MySQL, RESTful API architecture, SAS enterprise software development, and GenAI-assisted workflows. Currently engineering robust solutions at WNS (part of Capgemini). Experienced in building high-throughput database systems, secure integrations, and modern web applications with Next.js and React.",
    location: "Delhi NCR, India",
    email: "4dev.himanshu@gmail.com",
    phone: "+91 9625911567",
    linkedinUrl: "https://www.linkedin.com/in/himanshuthedeveloper/",
    githubUrl: "https://github.com/himanshuthedeveloper",
    resumeUrl: "/resume.pdf",
    yearsOfExperience: "5+ Years",
    status: "Open to exciting backend & full-stack challenges",
  },

  navigation: [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ],

  about: {
    bioParagraphs: [
      "I am a results-driven Backend Developer and Software Engineer with approximately 5 years of professional experience building dependable web applications, high-load transactional systems, and microservice/monolithic architectures.",
      "Currently contributing at WNS (part of Capgemini), I focus on mission-critical enterprise systems, SAS software development, REST API engineering, and leveraging GenAI and prompting workflows to accelerate development lifecycle efficiency.",
      "My core foundation spans Laravel, PHP, and MySQL database optimization—including complex relational query indexing, partitioning for high-traffic environments, and strict data security protocols. Complementing backend mastery, I bring deep proficiency in modern frontend technologies like Next.js, React, and Tailwind CSS to deliver end-to-end engineered digital products.",
    ],
    highlights: [
      {
        metric: "~5 Yrs",
        label: "Industry Experience",
        detail: "Production backend & full-lifecycle engineering across enterprise & scale-up projects.",
      },
      {
        metric: "10+",
        label: "Shipped Projects",
        detail: "Enterprise CRMs, logistics dispatch, e-commerce, and land management platforms.",
      },
      {
        metric: "100%",
        label: "Architecture Focus",
        detail: "Clean MVC, modular REST APIs, query optimization, and resilient security protocols.",
      },
      {
        metric: "GenAI",
        label: "Modern Tooling",
        detail: "Hands-on integration of LLM-assisted workflows, prompt engineering, and modern stacks.",
      },
    ],
    principles: [
      {
        title: "Clean Architecture & Scalability",
        description:
          "Designing modular, maintainable MVC systems and clear RESTful contracts that scale gracefully under demanding workloads.",
        icon: "Layers",
      },
      {
        title: "Database Performance & Integrity",
        description:
          "Relational schema modeling, query indexing, and caching mechanisms optimized for low latency and transactional consistency.",
        icon: "Database",
      },
      {
        title: "Security & Strict Standards",
        description:
          "Implementing robust authentication, payment gateway security, data protection protocols, and audit-ready architectures.",
        icon: "ShieldCheck",
      },
      {
        title: "Continuous Innovation & AI Integration",
        description:
          "Embracing generative AI prompting, modern full-stack workflows (Next.js/React), and modern developer tooling.",
        icon: "Cpu",
      },
    ],
  },

  experience: [
    {
      id: "wns-capgemini",
      company: "WNS (part of Capgemini)",
      role: "Software Engineer / Backend Developer",
      location: "Noida / Gurugram, India",
      workMode: "Hybrid",
      startDate: "Aug 2023",
      endDate: "Present",
      isCurrent: true,
      description:
        "Contributing to enterprise software development initiatives within the Capgemini ecosystem, focusing on backend system reliability, SAS integration, and generative AI development.",
      responsibilities: [
        "Architecting and enhancing backend business logic, micro-services, and enterprise API layers using Laravel, PHP, and modern software paradigms.",
        "Developing and maintaining SAS software integration pipelines and automated data workflows.",
        "Incorporating GenAI-assisted workflows and structured prompt engineering into engineering processes to enhance code velocity and feature testing.",
        "Collaborating with cross-functional technical leads, compliance officers, and distributed enterprise teams.",
      ],
      technologies: [
        "Laravel",
        "PHP",
        "MySQL",
        "REST APIs",
        "SAS Software",
        "GenAI & Prompting",
        "Git",
        "Enterprise Architecture",
      ],
      achievements: [
        "Streamlined enterprise backend services and established reliable automated data processing endpoints.",
        "Accelerated turnaround times by integrating GenAI prompts into internal tooling and documentation pipelines.",
      ],
    },
    {
      id: "bytelogic",
      company: "Bytelogic Technology",
      role: "Senior Web Developer",
      location: "Noida Sector-63, Uttar Pradesh, India",
      workMode: "On-site",
      startDate: "Aug 2022",
      endDate: "Jul 2023",
      isCurrent: false,
      description:
        "Led backend design and full-stack development across multiple production client applications, focusing on high-load database optimization and cPanel/Linux deployment.",
      responsibilities: [
        "Formulated application architecture using Laravel framework, ensuring modularity, scalability, and code reusability.",
        "Engineered and integrated modern front-end interfaces utilizing Next.js and React.js with backend RESTful services.",
        "Designed complex MySQL database schemas, implemented database query optimization, and resolved indexing bottlenecks for high-traffic environments.",
        "Configured and deployed production web applications on cPanel and Linux-based hosting infrastructures.",
      ],
      technologies: [
        "Laravel",
        "PHP",
        "Next.js",
        "React.js",
        "MySQL",
        "REST APIs",
        "cPanel",
        "Apache",
        "Git",
      ],
      achievements: [
        "Successfully optimized database queries for high-load platforms, resulting in faster query execution and reduced server memory utilization.",
        "Delivered end-to-end full stack web platforms within tight turnaround deadlines.",
      ],
    },
    {
      id: "xcrino",
      company: "Xcrino Business Solution",
      role: "Laravel Developer",
      location: "Dwarka Sector-7, Delhi, India",
      workMode: "On-site",
      startDate: "Jul 2021",
      endDate: "Jul 2022",
      isCurrent: false,
      description:
        "Engineered scalable web applications and REST APIs using PHP and Laravel, ensuring clean MVC architecture, unit testing, and version control best practices.",
      responsibilities: [
        "Authored clean, maintainable, and well-documented PHP code based on MVC architecture guidelines.",
        "Built, tested, and integrated REST APIs and managed third-party payment gateway integrations.",
        "Performed unit testing, cross-browser compatibility assessments, and system troubleshooting.",
        "Utilized Git version control for structured feature branching and collaborative team delivery.",
      ],
      technologies: [
        "PHP",
        "Laravel",
        "MySQL",
        "REST APIs",
        "Payment Gateways",
        "Git",
        "JavaScript",
        "jQuery",
      ],
      achievements: [
        "Integrated seamless payment processing flows with zero transaction mismatch errors across multiple customer portals.",
        "Instituted clean code patterns making the codebases highly accessible for ongoing maintenance and onboarding.",
      ],
    },
    {
      id: "max-vision",
      company: "Max Vision Solutions",
      role: "Web Development Trainee",
      location: "Delhi, India",
      workMode: "On-site",
      startDate: "Apr 2021",
      endDate: "Jun 2021",
      isCurrent: false,
      description:
        "Completed an intensive 2-month professional training program in PHP development, RDBMS foundations, responsive frontend integration, and website deployment.",
      responsibilities: [
        "Developed web applications from wireframes to full implementation using PHP, MySQL, and modern CSS frameworks.",
        "Implemented database schema relationships, SQL queries, and dynamic server-side rendering.",
        "Built responsive, mobile-friendly interfaces and tested cross-platform behavior.",
      ],
      technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "RDBMS"],
      achievements: [
        "Successfully completed project-based training modules with distinction in practical MVC development.",
      ],
    },
  ],

  skillCategories: [
    {
      id: "backend",
      title: "Backend & Systems",
      icon: "Server",
      skills: [
        { name: "Laravel", category: "Backend", featured: true },
        { name: "PHP", category: "Backend", featured: true },
        { name: "RESTful APIs", category: "Backend", featured: true },
        { name: "MVC Architecture", category: "Backend", featured: true },
        { name: "Node.js", category: "Backend" },
        { name: "Payment Gateways", category: "Backend" },
        { name: "SAS Software", category: "Backend", featured: true },
        { name: "Real-time Systems", category: "Backend" },
      ],
    },
    {
      id: "databases",
      title: "Databases & Storage",
      icon: "Database",
      skills: [
        { name: "MySQL", category: "Database", featured: true },
        { name: "RDBMS Design", category: "Database", featured: true },
        { name: "Query Optimization", category: "Database", featured: true },
        { name: "Indexing & Performance", category: "Database" },
        { name: "Database Security", category: "Database" },
        { name: "Data Migration", category: "Database" },
      ],
    },
    {
      id: "frontend",
      title: "Frontend Technologies",
      icon: "Layout",
      skills: [
        { name: "JavaScript (ES6+)", category: "Frontend", featured: true },
        { name: "TypeScript", category: "Frontend", featured: true },
        { name: "Next.js", category: "Frontend", featured: true },
        { name: "React.js", category: "Frontend", featured: true },
        { name: "Tailwind CSS", category: "Frontend", featured: true },
        { name: "jQuery", category: "Frontend" },
        { name: "Bootstrap", category: "Frontend" },
        { name: "HTML5 / CSS3", category: "Frontend" },
      ],
    },
    {
      id: "genai-tools",
      title: "GenAI & Developer Tooling",
      icon: "Sparkles",
      skills: [
        { name: "GenAI Development", category: "AI & Innovation", featured: true },
        { name: "Prompt Engineering", category: "AI & Innovation", featured: true },
        { name: "Git & GitHub", category: "Tools", featured: true },
        { name: "Postman", category: "Tools" },
        { name: "cPanel & Apache", category: "DevOps" },
        { name: "Linux / Ubuntu", category: "OS" },
        { name: "VS Code", category: "Tools" },
        { name: "LAMP / XAMPP", category: "Environment" },
      ],
    },
  ],

  projects: [
    {
      id: "three-falcons",
      title: "Three Falcons",
      tagline: "High-performance lifestyle & e-commerce shopping platform",
      description:
        "Engineered the e-commerce web platform featuring dynamic product cataloging, responsive checkout workflows, inventory management, and smooth customer journey.",
      problemSolved:
        "Delivered a fast, fluid browsing and purchasing experience backed by scalable relational product schema and secure order processing.",
      category: "E-Commerce & Portals",
      technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Tailwind CSS", "REST APIs"],
      responsibilities: [
        "Architected product catalog and shopping cart data models.",
        "Integrated secure checkout flows and payment processing.",
        "Optimized frontend asset delivery and responsiveness across mobile screens.",
      ],
      liveUrl: "https://threefalcons.com/",
      featured: true,
    },
    {
      id: "v-deliver",
      title: "V-Deliver",
      tagline: "End-to-end logistics & on-demand delivery services portal",
      description:
        "Developed a multi-tier logistics dispatch and package delivery platform connecting service senders, dispatch fleets, and operational controllers.",
      problemSolved:
        "Replaced manual delivery coordination with automated consignment routing, milestone tracking, and dynamic dispatch scheduling.",
      category: "Enterprise Systems",
      technologies: ["Laravel", "MySQL", "REST APIs", "jQuery", "Bootstrap", "Apache"],
      responsibilities: [
        "Created RESTful endpoints for booking parcels and status tracking.",
        "Engineered driver dispatch workflows and customer notifications.",
        "Ensured relational database integrity during high concurrent order loads.",
      ],
      liveUrl: "https://vdelivergroup.com/",
      featured: true,
    },
    {
      id: "dilamsys",
      title: "Digital Land Management System (DiLAMSys)",
      tagline: "Cloud-based land records digitization & workflow governance system",
      description:
        "Comprehensive enterprise governance platform designed for municipal land records, tenancy certificates, automated title verification, and document lifecycle control.",
      problemSolved:
        "Provided secure, tamper-evident digital storage and rapid query retrieval for complex multi-parameter land parcels.",
      category: "Enterprise Systems",
      technologies: ["Laravel", "PHP", "MySQL", "RDBMS", "Security Protocols", "JavaScript"],
      responsibilities: [
        "Designed relational database structures for complex plot records and surveyor documentation.",
        "Implemented granular role-based access control (RBAC) and audit trails.",
        "Built secure search filters enabling sub-second query lookups across extensive parcel catalogs.",
      ],
      liveUrl: "https://dilamsys.com/",
      featured: true,
    },
    {
      id: "basf-india",
      title: "BASF India Product Management System",
      tagline: "Enterprise catalog & agricultural chemical distribution system",
      description:
        "Enterprise product management system engineered to organize, track, and verify industrial product listings, safety sheets, and dealer distribution networks.",
      problemSolved:
        "Centralized distributed catalog data with strict data security, compliance tracking, and structured admin approvals.",
      category: "Enterprise Systems",
      technologies: ["Laravel", "PHP", "MySQL", "RDBMS", "Security Protocols"],
      responsibilities: [
        "Built enterprise backend adhering to corporate security and data handling guidelines.",
        "Created specialized product categorization and batch tracking queries.",
        "Implemented validation checkpoints and administrative dashboard analytics.",
      ],
      liveUrl: "http://ecr.basf-lgs.net/",
      featured: true,
    },
    {
      id: "import-export",
      title: "Import & Export Management System",
      tagline: "Customs manifest & international freight documentation platform",
      description:
        "Specialized trade portal facilitating automated invoice generation, manifest verification, container duty calculations, and cross-border trade filings.",
      problemSolved:
        "Eliminated error-prone manual customs data entry through standardized digital document processing and schema-validated inputs.",
      category: "Enterprise Systems",
      technologies: ["PHP", "Laravel", "MySQL", "REST APIs", "MVC Architecture"],
      responsibilities: [
        "Architected MVC controllers handling complex multi-currency calculations.",
        "Engineered document generation pipelines for shipment manifests.",
        "Ensured robust database transaction isolation for international billing.",
      ],
      liveUrl: "http://cseximonline.com/login",
      featured: false,
    },
    {
      id: "green-spark",
      title: "Green Spark Ecommerce",
      tagline: "Modern online storefront with integrated payment gateway",
      description:
        "Full-featured e-commerce store with real-time stock updates, automated payment processing, discount engine, and customer account dashboard.",
      problemSolved:
        "Provided an integrated checkout pipeline with zero friction and instant payment verification.",
      category: "E-Commerce & Portals",
      technologies: ["Laravel", "Payment Gateways", "MySQL", "JavaScript", "cPanel"],
      responsibilities: [
        "Integrated third-party payment gateway with webhook verification.",
        "Configured promotion and coupon deduction logic.",
        "Deployed and maintained server environment on cPanel.",
      ],
      liveUrl: "https://sparkweb.suhaani.co.in/",
      featured: false,
    },
    {
      id: "quick-cloud",
      title: "Quick Cloud Hosting Portal",
      tagline: "Web hosting service provisioning & cloud server management",
      description:
        "Cloud hosting portal enabling customers to select server packages, provision domain records, manage web hosting tiers, and review subscription billing.",
      problemSolved:
        "Abstracted server tier complexity into an intuitive, responsive user selection interface.",
      category: "Web Applications",
      technologies: ["PHP", "JavaScript", "Bootstrap", "MySQL", "cPanel Hosting"],
      responsibilities: [
        "Created responsive interface with dynamic plan selection calculators.",
        "Integrated backend subscription handlers and automated onboarding emails.",
      ],
      liveUrl: "https://vcc.arl.mybluehostin.me/quick/",
      featured: false,
    },
    {
      id: "bytelogic-crm",
      title: "Bytelogic Technology CRM & Ti-care",
      tagline: "Customer relationship management & multi-channel ticketing engine",
      description:
        "Integrated enterprise CRM designed to manage client inquiries, automate support ticket lifecycles, track rep productivity, and provide real-time reporting.",
      problemSolved:
        "Consolidated disconnected support emails and customer tickets into a unified, high-performance triage system.",
      category: "Enterprise Systems",
      technologies: ["Laravel", "MySQL", "REST APIs", "MVC", "Security Protocols"],
      responsibilities: [
        "Engineered ticket escalation state machines with SLA countdown triggers.",
        "Designed optimized reporting queries for manager analytics dashboards.",
      ],
      featured: false,
    },
    {
      id: "freight-management",
      title: "Freight Management & Consignment Tracking",
      tagline: "Real-time dispatch, route monitoring & consignment platform",
      description:
        "Comprehensive logistics and cargo tracking software with real-time route milestone updates, weight reconciliation, and proof-of-delivery archival.",
      problemSolved:
        "Gave dispatch operators full visibility into freight movement, reducing transit status inquiry calls.",
      category: "Enterprise Systems",
      technologies: ["Laravel", "MySQL", "Real-time Systems", "REST APIs", "PHP"],
      responsibilities: [
        "Developed consignment event logging and milestone update APIs.",
        "Implemented automated trip manifest and bill-of-lading generation.",
      ],
      featured: false,
    },
    {
      id: "laundry-supershe",
      title: "Laundry Management System & Super She CMS",
      tagline: "Bespoke operational workflow & modular content management systems",
      description:
        "Custom workflow management software handling customer clothing batches, service status tracking, and invoicing, alongside a modular CMS platform.",
      problemSolved:
        "Automated day-to-day order intake and ticket printing, eliminating manual paperwork.",
      category: "Web Applications",
      technologies: ["PHP", "Laravel", "MySQL", "jQuery", "MVC Architecture"],
      responsibilities: [
        "Designed database schema for batch categorization and billing.",
        "Constructed intuitive web interfaces for operators and administrators.",
      ],
      featured: false,
    },
  ],

  education: [
    {
      id: "mca",
      degree: "Master of Computer Application (MCA)",
      institution: "Indira Gandhi National Open University (IGNOU), Delhi",
      location: "Delhi, India",
      startDate: "2020",
      endDate: "2022",
      field: "Postgraduate Program in Computer Science & Software Engineering",
      details:
        "Focused on advanced software engineering, distributed system design, relational database management systems (RDBMS), object-oriented programming, and computer networks.",
    },
    {
      id: "bca",
      degree: "Bachelor of Computer Application (BCA)",
      institution: "Indira Gandhi National Open University (IGNOU), Delhi",
      location: "Delhi, India",
      startDate: "2017",
      endDate: "2020",
      field: "Undergraduate Program in Computer Applications",
      details:
        "Core foundational studies in data structures, algorithms, database systems, web programming, operating systems, and discrete mathematics.",
    },
    {
      id: "class-12",
      degree: "12th Class (Senior Secondary)",
      institution: "Government Sarvodaya Bal Vidyalaya, Delhi",
      location: "Delhi, India",
      startDate: "2015",
      endDate: "2016",
      field: "Science Stream",
      details:
        "Rigorous coursework in Mathematics, Physics, Chemistry, and English.",
    },
    {
      id: "class-10",
      degree: "10th Class (Secondary School)",
      institution: "Government Sarvodaya Bal Vidyalaya, Delhi",
      location: "Delhi, India",
      startDate: "2013",
      endDate: "2014",
      field: "General Academic Curriculum",
      details: "Comprehensive academic foundation across Science, Mathematics, and Languages.",
    },
  ],

  trainings: [
    {
      id: "training-max-vision",
      title: "Web Development Training (PHP & MySQL)",
      institution: "Max Vision Solutions",
      duration: "2 Months",
      period: "April 2021 – May 2021",
      description:
        "Intensive project-based industry training program focused on PHP development, relational database modeling, responsive wireframing, and backend-to-frontend integration.",
    },
  ],

  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/himanshuthedeveloper/",
      label: "linkedin.com/in/himanshuthedeveloper",
      icon: "Linkedin",
    },
    {
      platform: "Email",
      url: "mailto:4dev.himanshu@gmail.com",
      label: "4dev.himanshu@gmail.com",
      icon: "Mail",
    },
    {
      platform: "Phone",
      url: "tel:+919625911567",
      label: "+91 9625911567",
      icon: "Phone",
    },
    {
      platform: "GitHub",
      url: "https://github.com/himanshuthedeveloper",
      label: "github.com/himanshuthedeveloper",
      icon: "Github",
    },
  ],
};
