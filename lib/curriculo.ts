export const curriculo = {
  nome: "Natália Pereira da Silva",
  titulo: "Backend Engineer · Python · APIs & Distributed Systems",
  localizacao: "São Paulo, SP",
  email: "dev.nataliaps@gmail.com",
  linkedin: "linkedin.com/in/natalianpsilva",
  github: "github.com/dev-natalia",

  resumo:
    "Desenvolvedora backend com mais de 5 anos de experiência em Python, com foco na construção de APIs REST, microsserviços escaláveis e soluções em nuvem (AWS e GCP). Forte domínio de bancos de dados relacionais e NoSQL, pipelines de dados, mensageria e integração com APIs de terceiros. Destaque para modernização de sistemas legados, automação de processos internos e liderança técnica de squads.",

  skills: [
    "Python", "FastAPI", "Flask", "Falcon",
    "API REST", "PostgreSQL", "MySQL", "MongoDB",
    "AWS (Lambda, S3, SQS, SNS, Kinesis)", "GCP (Cloud Functions, BigQuery)",
    "Docker", "Terraform", "Kafka", "RabbitMQ",
    "Angular", "AI Tools / Prompt Engineering",
  ],

  experiencia: [
    {
      empresa: "Zup Innovation",
      cargo: "Desenvolvedora Backend Python · Pleno",
      periodo: "Agosto 2025 – Presente",
      itens: [
        "Desenvolvimento e sustentação de APIs REST com Python e FastAPI",
        "Integração com APIs externas e serviços internos",
        "Uso intensivo de PostgreSQL para persistência e consulta de dados",
        "Implementação de serviços AWS: S3 e SQS",
        "Documentação de APIs com Swagger / OpenAPI",
        "Atuação em iniciativas de integração com soluções de IA e engenharia de prompt",
      ],
    },
    {
      empresa: "CI&T",
      cargo: "Desenvolvedora Backend Python · Pleno",
      periodo: "Outubro 2024 – Julho 2025",
      itens: [
        "Sustentação e manutenção de pipelines de ETL com AWS Glue para grandes volumes de dados",
        "Criação de queries SQL complexas para unificação de dados em painéis analíticos",
        "Suporte na otimização de fluxos e resolução de problemas em produção",
      ],
    },
    {
      empresa: "Hike",
      cargo: "Desenvolvedora Backend Python · Pleno",
      periodo: "Abril 2024 – Outubro 2024",
      itens: [
        "Desenvolvimento de Cloud Functions no GCP para ingestão e normalização de dados externos",
        "Armazenamento em formato Parquet no Cloud Storage e ingestão via BigQuery Data Transfer",
        "Integração com APIs REST e Webhooks, com tratamento de autenticação e paginação",
        "Desenho de fluxos de ingestão resilientes para dados utilizados internamente",
      ],
    },
    {
      empresa: "Too Seguros",
      cargo: "Desenvolvedora Backend Python · Pleno",
      periodo: "Janeiro 2022 – Fevereiro 2024",
      itens: [
        "Automação de processos internos via microsserviços integrados a APIs externas de parceiros",
        "Desenvolvimento de CDC com AWS Kinesis e DMS; liderança da migração para Apache NiFi, reduzindo tempo de ingestão em 70%",
        "Criação de área logada para clientes com endpoints seguros",
        "Sistemas distribuídos com RabbitMQ como broker de mensagens",
      ],
    },
    {
      empresa: "Blue AI",
      cargo: "Desenvolvedora Backend Python · Principal",
      periodo: "Janeiro 2022 – Dezembro 2022",
      itens: [
        "Criação da API principal da empresa do zero com FastAPI e arquitetura limpa",
        "Modelagem de banco de dados com MySQL hospedado em AWS Aurora",
        "Deploy com Docker em instâncias EC2",
        "Responsável técnica pelas APIs da empresa durante todo o ciclo de vida",
      ],
    },
    {
      empresa: "Decode",
      cargo: "Desenvolvedora Backend Python · Júnior",
      periodo: "Novembro 2020 – Dezembro 2021",
      itens: [
        "Integrações com APIs externas conectando serviços terceiros ao sistema interno",
        "Uso de AWS (Lambda, S3, SNS, SQS) para arquitetura orientada a eventos",
        "Liderança de time de 2 pessoas na reestruturação do sistema de integração com Kafka, MongoDB e APIs assíncronas",
        "Implantação de testes com Pytest e validação com Pydantic, Mypy e Pylint",
      ],
    },
    {
      empresa: "Simbiose Ventures",
      cargo: "Desenvolvedora Backend Python · Júnior",
      periodo: "Julho 2019 – Julho 2020",
      itens: [
        "Desenvolvimento e manutenção de endpoints REST em API integrada com AWS, Wasabi e Backblaze",
        "Integração com Sentry, Trello e Discord (bots internos)",
        "Criação de bot para gerenciamento de home office: ponto, tarefas e controle de equipe",
        "Banco de dados MySQL e ambientes isolados com Docker",
      ],
    },
  ],

  formacao: [
    {
      instituicao: "Univesp",
      curso: "Bacharelado em Tecnologia da Informação",
      periodo: "2024 – 2027 (em andamento)",
    },
    {
      instituicao: "Universidade Federal de Viçosa",
      curso: "Bacharelado em Ciência da Computação",
      periodo: "2011 – 2012",
    },
    {
      instituicao: "Escola Profissional Nossa Senhora de Fátima",
      curso: "Técnico em Informática",
      periodo: "2008",
    },
  ],
};
