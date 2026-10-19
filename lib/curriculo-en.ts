import type { Curriculo } from "@/lib/curriculo";

// Versão em inglês do currículo; textos baseados na versão em inglês do perfil do LinkedIn
export const curriculoEn: Curriculo = {
  nome: "Natália Pereira da Silva",
  titulo: "Backend Engineer · Python · APIs & Distributed Systems",
  localizacao: "São Paulo, Brazil",
  email: "dev.nataliaps@gmail.com",
  linkedin: "linkedin.com/in/natalianpsilva",
  github: "github.com/dev-natalia",

  resumo:
    "Backend developer with 7+ years of experience in Python, focusing on building REST APIs, scalable microservices, and cloud-based solutions (AWS and GCP). Strong command of relational and NoSQL databases, data pipelines, messaging systems, and integration with third-party APIs. Notable for modernizing legacy systems, automating internal processes, and providing technical leadership within squads.",

  skills: [
    "Python", "FastAPI", "Flask", "Falcon",
    "REST APIs", "PostgreSQL", "MySQL", "MongoDB",
    "AWS (Lambda, Step Functions, API Gateway, S3, SQS, SNS, RDS, Kinesis, Glue)", "GCP (Cloud Functions, BigQuery)",
    "Docker", "Terraform", "Kafka", "RabbitMQ",
    "Angular", "AI Tools / Prompt Engineering", "Spec-Driven Development",
  ],

  experiencia: [
    {
      empresa: "Itaú Unibanco (via Zup)",
      cargo: "Python Backend Developer · Mid-level · Process Mining Squad",
      periodo: "March 2026 – Present",
      itens: [
        "Developed a self-service platform for Process Mining clients using Python, Angular, and AWS, from MVP through version 3",
        "Designed and built the solution architecture on AWS using Step Functions, Lambda, API Gateway, SQS, and RDS PostgreSQL",
        "Developed an event log upload and processing pipeline, including validation, mapping, batch processing, and API integration with IBM's Process Mining platform",
        "Developed an event log validation engine applying business rules",
        "Designed and developed the PostgreSQL database, using SQL and normalization principles",
        "Implemented performance improvements, reducing upload times for files over 1 GB from 5–10 minutes to about 2 minutes, plus optimizations to the validation engine",
        "Applied AI-assisted development using Spec-Driven Development and Harness Engineering, bringing delivery forward from the end of November to the end of September",
        "Took part in refinements, discoveries, and Scrum ceremonies, including Sprint Planning, Release Planning, and demos",
      ],
    },
    {
      empresa: "Zup Innovation",
      cargo: "Python Backend Developer · Mid-level",
      periodo: "August 2025 – Present",
      itens: [
        "Development and maintenance of RESTful APIs using Python and FastAPI",
        "Integration with external APIs and internal services",
        "Extensive use of PostgreSQL for data persistence and querying",
        "Implementation and consumption of AWS services: S3 (object storage) and SQS (messaging and asynchronous processing)",
        "API documentation using Swagger / OpenAPI",
        "Dependency and environment management with Poetry, and endpoint testing with Postman",
        "Participation in initiatives involving AI integrations and prompt engineering",
        "Involvement throughout the full development lifecycle: implementation, maintenance, and production support",
      ],
    },
    {
      empresa: "CI&T",
      cargo: "Python Backend Developer · Mid-level",
      periodo: "October 2024 – July 2025",
      itens: [
        "Maintenance and support of ETL pipelines using AWS Glue, processing large-scale data",
        "Built complex SQL queries to unify data from multiple sources for business analytics dashboards",
        "Troubleshooting and optimization of production data workflows",
      ],
    },
    {
      empresa: "Hike",
      cargo: "Python Backend Developer · Mid-level",
      periodo: "April 2024 – October 2024",
      itens: [
        "Developed Cloud Functions on GCP to fetch and normalize data from external platforms",
        "Stored data in Parquet format in Cloud Storage and automated ingestion via BigQuery Data Transfer",
        "Integrated REST APIs and Webhooks, handling authentication, pagination, rate limits, and schema validation",
        "Designed resilient ingestion flows ensuring reliable data for internal use",
      ],
    },
    {
      empresa: "Too Seguros",
      cargo: "Python Backend Developer · Mid-level",
      periodo: "January 2022 – February 2024",
      itens: [
        "Automated internal processes by building microservices integrated with external partner APIs",
        "Implemented CDC (Change Data Capture) with AWS Kinesis and DMS; led the migration to Apache NiFi, reducing ingestion time by over 70%",
        "Helped create a client portal with secure endpoints",
        "Built distributed systems using RabbitMQ as a message broker",
        "Collaborated closely with Architecture and QA teams to ensure scalable and well-tested services",
      ],
    },
    {
      empresa: "Blue AI",
      cargo: "Python Backend Developer · Principal",
      periodo: "January 2022 – December 2022",
      itens: [
        "Designed and developed the company's core API from scratch using FastAPI, applying clean architecture in a decoupled monolith",
        "Refactored a second internal API to improve structure and code organization",
        "Modeled and implemented a relational database in MySQL hosted on AWS Aurora",
        "Deployed containerized applications on EC2 using Docker",
        "Served as the technical owner of the company's APIs throughout their lifecycle",
      ],
    },
    {
      empresa: "Decode",
      cargo: "Python Backend Developer · Junior",
      periodo: "November 2020 – December 2021",
      itens: [
        "Integrated external APIs with the company's internal data system",
        "Built event-driven architecture using AWS (Lambda, S3, SNS, SQS)",
        "Led a team of 2 developers to redesign the integration system using Kafka, MongoDB, and asynchronous APIs with Flask, FastAPI, and Falcon",
        "Introduced testing with Pytest and quality checks with Pydantic, Poetry, Mypy, and Pylint",
        "Deployments with Docker on Rancher and CI/CD with Jenkins",
      ],
    },
    {
      empresa: "Simbiose Ventures",
      cargo: "Python Backend Developer · Junior",
      periodo: "July 2019 – July 2020",
      itens: [
        "Built and maintained REST API endpoints integrating with cloud services (AWS, Wasabi, Backblaze)",
        "Integrated tools like Sentry, Trello, and Discord (internal bots)",
        "Created a bot for managing remote work: attendance tracking, task updates, and team management",
        "Worked with MySQL and isolated environments using Docker",
        "Maintained the codebase with Git and supported clean development workflows",
      ],
    },
    {
      empresa: "Simbiose Ventures",
      cargo: "People and Process Analyst",
      periodo: "December 2018 – June 2019",
      itens: [
        "Managed a team of 15 people, defined goals and deadlines, and followed up on execution",
        "Conducted over 100 interviews focused on cultural fit (Hiring for Attitude methodology)",
        "Designed personalized learning and technical development plans",
        "Developed internal processes and checklists for continuous improvement",
      ],
    },
  ],

  formacao: [
    {
      instituicao: "Univesp",
      curso: "Bachelor's in Information Technology",
      periodo: "2024 – 2027 (in progress)",
    },
    {
      instituicao: "Federal University of Viçosa",
      curso: "Bachelor's in Computer Science",
      periodo: "2011 – 2012",
    },
    {
      instituicao: "Escola Profissional Nossa Senhora de Fátima",
      curso: "IT Technician",
      periodo: "2008",
    },
  ],
};
