export const curriculo = {
  nome: "Natália Pereira da Silva",
  titulo: "Backend Engineer · Python · APIs & Distributed Systems",
  localizacao: "São Paulo, SP",
  email: "dev.nataliaps@gmail.com",
  linkedin: "linkedin.com/in/natalianpsilva",
  github: "github.com/dev-natalia",

  resumo:
    "Desenvolvedora backend com mais de 7 anos de experiência em Python, com foco na construção de APIs REST, microsserviços escaláveis e soluções em nuvem (AWS e GCP). Forte domínio de bancos de dados relacionais e NoSQL, pipelines de dados, mensageria e integração com APIs de terceiros. Destaque para modernização de sistemas legados, automação de processos internos e liderança técnica de squads.",

  skills: [
    "Python", "FastAPI", "Flask", "Falcon",
    "API REST", "PostgreSQL", "MySQL", "MongoDB",
    "AWS (Lambda, Step Functions, API Gateway, S3, SQS, SNS, RDS, Kinesis, Glue)", "GCP (Cloud Functions, BigQuery)",
    "Docker", "Terraform", "Kafka", "RabbitMQ",
    "Angular", "AI Tools / Prompt Engineering", "Spec-Driven Development",
  ],

  experiencia: [
    {
      empresa: "Itaú Unibanco (pela Zup)",
      cargo: "Desenvolvedora Backend Python · Pleno · Squad Process Mining",
      periodo: "Março 2026 – Presente",
      itens: [
        "Desenvolvimento de autosserviço para clientes de Process Mining com Python, Angular e AWS, do MVP à versão 3",
        "Criação da arquitetura da solução na AWS com Step Functions, Lambda, API Gateway, SQS e RDS PostgreSQL",
        "Pipeline de upload e processamento de logs de eventos, com validações, mapeamento, processamento em batches e integração via APIs com a plataforma de Process Mining da IBM",
        "Desenvolvimento de motor de validação de logs aplicando regras de negócio",
        "Modelagem e desenvolvimento do banco PostgreSQL, com SQL e princípios de normalização",
        "Melhorias de performance que reduziram o upload de arquivos acima de 1 GB de 5–10 minutos para cerca de 2 minutos, além de otimizações no motor de validação",
        "Uso de IA no desenvolvimento com Spec-Driven Development e Harness Engineering, antecipando a entrega do fim de novembro para o fim de setembro",
        "Participação em refinamentos, discoveries e cerimônias Scrum, incluindo Sprint Planning, Release Planning e demos",
      ],
    },
    {
      empresa: "Zup Innovation",
      cargo: "Desenvolvedora Backend Python · Pleno",
      periodo: "Agosto 2025 – Presente",
      itens: [
        "Desenvolvimento e sustentação de APIs REST com Python e FastAPI",
        "Integração com APIs externas e serviços internos",
        "Uso intensivo de PostgreSQL para persistência e consulta de dados",
        "Implementação e consumo de serviços AWS: S3 (armazenamento) e SQS (mensageria e processamento assíncrono)",
        "Documentação de APIs com Swagger / OpenAPI",
        "Gerenciamento de dependências e ambientes com Poetry e testes de endpoints com Postman",
        "Atuação em iniciativas de integração com soluções de IA e engenharia de prompt",
        "Participação no ciclo completo de desenvolvimento: implementação, manutenção e suporte de APIs em produção",
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
        "Integração com APIs REST e Webhooks, com tratamento de autenticação, paginação, limites e validação de schemas",
        "Desenho de fluxos de ingestão resilientes para dados utilizados internamente",
      ],
    },
    {
      empresa: "Too Seguros",
      cargo: "Desenvolvedora Backend Python · Pleno",
      periodo: "Janeiro 2022 – Fevereiro 2024",
      itens: [
        "Automação de processos internos via microsserviços integrados a APIs externas de parceiros",
        "Desenvolvimento de CDC com AWS Kinesis e DMS; liderança da migração para Apache NiFi, reduzindo o tempo de ingestão em mais de 70%",
        "Criação de área logada para clientes com endpoints seguros",
        "Sistemas distribuídos com RabbitMQ como broker de mensagens",
        "Parceria próxima com Arquitetura e QA para garantir escalabilidade e testes adequados",
      ],
    },
    {
      empresa: "Blue AI",
      cargo: "Desenvolvedora Backend Python · Principal",
      periodo: "Janeiro 2022 – Dezembro 2022",
      itens: [
        "Criação da API principal da empresa do zero com FastAPI e arquitetura limpa, em um monólito desacoplado",
        "Refatoração de uma segunda API interna para padronização e melhor organização do código",
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
        "Liderança de time de 2 pessoas na reestruturação do sistema de integração com Kafka, MongoDB e APIs assíncronas em Flask, FastAPI e Falcon",
        "Implantação de testes com Pytest e validação com Pydantic, Poetry, Mypy e Pylint",
        "Deploys com Docker no Rancher e automação via Jenkins",
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
        "Versionamento com Git e suporte a workflows limpos de desenvolvimento",
      ],
    },
    {
      empresa: "Simbiose Ventures",
      cargo: "Analista de Pessoas e Processos",
      periodo: "Dezembro 2018 – Junho 2019",
      itens: [
        "Gestão de uma equipe de 15 pessoas, com definição de metas, prazos e acompanhamento da execução",
        "Condução de mais de 100 entrevistas com foco em fit cultural (metodologia Hiring for Attitude)",
        "Criação de planos personalizados de evolução técnica e aprendizado",
        "Desenvolvimento de processos internos e checklists para melhoria contínua da operação",
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
