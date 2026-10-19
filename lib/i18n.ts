export type Lang = "pt" | "en";

export const paths: Record<Lang, { home: string; curriculo: string }> = {
  pt: { home: "/", curriculo: "/curriculo" },
  en: { home: "/en", curriculo: "/en/curriculo" },
};

export const otherLang = (lang: Lang): Lang => (lang === "pt" ? "en" : "pt");

export const dict = {
  pt: {
    meta: {
      title: "Natália Pereira da Silva — Desenvolvedora Backend",
      description:
        "Portfólio de Natália Pereira da Silva, desenvolvedora backend sênior com +7 anos de experiência em Python, AWS e arquitetura de sistemas.",
      ogImageAlt: "Natália Pereira da Silva — Desenvolvedora Backend",
      locale: "pt_BR",
    },
    nav: {
      links: [
        { label: "Sobre", href: "#sobre" },
        { label: "Skills", href: "#skills" },
        { label: "Projetos", href: "#projetos" },
        { label: "Contato", href: "#contato" },
      ],
      curriculo: "currículo",
      switchLang: "EN",
      switchLangLabel: "Ver o site em inglês",
    },
    hero: {
      greeting: "Olá, eu sou",
      subtitle: "Desenvolvedora backend · São Paulo, SP",
      intro:
        "Trabalho com APIs, integração de sistemas e arquitetura backend. Mais de 7 anos construindo coisas que funcionam de verdade.",
      availability: "Remoto ou aberta a mudar de país · Fuso de São Paulo (UTC−3) · Inglês avançado",
      verProjetos: "Ver projetos",
      faleComigo: "Fale comigo",
      curriculo: "Currículo",
    },
    about: {
      eyebrow: "sobre mim",
      title: "Quem está por trás do código",
      paragraphs: [
        "Natália Pereira da Silva, desenvolvedora backend em São Paulo, com sotaque mineiro de brinde. Dez anos em Minas deixam marcas.",
        "Minha trajetória foi meio engraçada: comecei em Ciência da Computação, passei por artes, design e engenharia mecânica e, no fim, voltei para o código. Tive que reaprender muita coisa em tempo recorde, mas trouxe comigo uma bagagem que uso até hoje: a experiência de olhar para um mesmo problema por ângulos bem diferentes.",
        "Trabalho principalmente com backend, desenvolvendo APIs e integrações entre sistemas, lidando com bancos SQL e NoSQL e serviços da AWS, como SQS, Lambda, S3 e Step Functions. São mais de 7 anos de experiência e uma curiosidade cada vez maior por arquitetura de sistemas.",
      ],
      facts: [
        { icon: "🏗️", text: "Já passei por empresa júnior e pelo Engenheiros Sem Fronteiras." },
        {
          icon: "🐾",
          text: "Tenho uma cachorra e uma gata que supervisionam meu trabalho. Aparentemente, nenhuma das duas confia muito na minha capacidade de trabalhar sozinha.",
        },
      ],
    },
    skills: {
      eyebrow: "skills",
      title: "O que uso no dia a dia",
      categories: {
        langs: "Linguagens & Frameworks",
        dbs: "Bancos de Dados",
        aws: "AWS",
        devops: "DevOps & Infra",
        arch: "Arquitetura & Design",
        ai: "IA & Ferramentas",
      },
      names: {
        dbModeling: "Modelagem de BD",
        sysArch: "Arquitetura de Sistemas",
        sysIntegration: "Integração de Sistemas",
      },
    },
    projects: {
      eyebrow: "projetos",
      title: "O que estou construindo",
      updated: "Atualizado",
      starsLabel: (n: number) => `${n} estrelas no GitHub`,
      viewOnGithub: (name: string) => `Ver ${name} no GitHub`,
      failed: "Os projetos não carregaram agora.",
      failedLink: "Ver meus projetos no GitHub",
    },
    contact: {
      eyebrow: "contato",
      title: "Bora conversar",
      intro:
        "Aberta a oportunidades, colaborações e boas conversas sobre sistemas. Me manda uma mensagem ou entra em contato pelas redes.",
      name: "Nome",
      email: "Email",
      message: "Mensagem",
      send: "Enviar mensagem",
      sending: "Enviando...",
      success: "Mensagem enviada! Respondo em breve.",
      error: "Algo deu errado. Tenta de novo ou manda email direto.",
    },
    footer: "Natália Pereira da Silva",
    curriculo: {
      metaTitle: "Currículo — Natália Pereira da Silva",
      back: "Voltar para o site",
      download: "Baixar PDF",
      switchLang: "EN",
      switchLangLabel: "Ver o currículo em inglês",
      contact: { email: "E-mail", linkedin: "LinkedIn", github: "GitHub" },
      sections: { resumo: "resumo", experiencia: "experiência", formacao: "formação", skills: "skills" },
    },
  },
  en: {
    meta: {
      title: "Natália Pereira da Silva — Backend Developer",
      description:
        "Portfolio of Natália Pereira da Silva, senior backend developer with 7+ years of experience in Python, AWS and systems architecture.",
      ogImageAlt: "Natália Pereira da Silva — Backend Developer",
      locale: "en_US",
    },
    nav: {
      links: [
        { label: "About", href: "#sobre" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projetos" },
        { label: "Contact", href: "#contato" },
      ],
      curriculo: "resume",
      switchLang: "PT",
      switchLangLabel: "Ver o site em português",
    },
    hero: {
      greeting: "Hi, I'm",
      subtitle: "Backend developer · São Paulo, Brazil",
      intro:
        "I work with APIs, systems integration and backend architecture. 7+ years building things that actually work.",
      availability: "Remote or open to relocation · São Paulo time zone (UTC−3) · Advanced English",
      verProjetos: "See projects",
      faleComigo: "Get in touch",
      curriculo: "Resume",
    },
    about: {
      eyebrow: "about me",
      title: "The person behind the code",
      paragraphs: [
        "Natália Pereira da Silva, backend developer based in São Paulo, with a Minas Gerais accent as a bonus. Ten years in Minas leave their mark.",
        "My path was a bit of a funny one: I started in Computer Science, went through arts, design and mechanical engineering, and in the end came back to code. I had to relearn a lot in record time, but I brought along something I still use today: the habit of looking at the same problem from very different angles.",
        "I work mostly on the backend, building APIs and integrations between systems, working with SQL and NoSQL databases and AWS services such as SQS, Lambda, S3 and Step Functions. That's 7+ years of experience and a growing curiosity about systems architecture.",
      ],
      facts: [
        { icon: "🏗️", text: "I've been part of a student-run consulting company and of Engineers Without Borders." },
        {
          icon: "🐾",
          text: "I have a dog and a cat who supervise my work. Apparently, neither of them trusts me very much to work on my own.",
        },
      ],
    },
    skills: {
      eyebrow: "skills",
      title: "What I use day to day",
      categories: {
        langs: "Languages & Frameworks",
        dbs: "Databases",
        aws: "AWS",
        devops: "DevOps & Infra",
        arch: "Architecture & Design",
        ai: "AI & Tools",
      },
      names: {
        dbModeling: "Database Modeling",
        sysArch: "Systems Architecture",
        sysIntegration: "Systems Integration",
      },
    },
    projects: {
      eyebrow: "projects",
      title: "What I'm building",
      updated: "Updated",
      starsLabel: (n: number) => `${n} stars on GitHub`,
      viewOnGithub: (name: string) => `View ${name} on GitHub`,
      failed: "Projects couldn't be loaded right now.",
      failedLink: "See my projects on GitHub",
    },
    contact: {
      eyebrow: "contact",
      title: "Let's talk",
      intro:
        "Open to opportunities, collaborations and good conversations about systems. Send me a message or reach out on my profiles.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
      sending: "Sending...",
      success: "Message sent! I'll get back to you soon.",
      error: "Something went wrong. Try again or email me directly.",
    },
    footer: "Natália Pereira da Silva",
    curriculo: {
      metaTitle: "Resume — Natália Pereira da Silva",
      back: "Back to the site",
      download: "Download PDF",
      switchLang: "PT",
      switchLangLabel: "Ver o currículo em português",
      contact: { email: "Email", linkedin: "LinkedIn", github: "GitHub" },
      sections: { resumo: "summary", experiencia: "experience", formacao: "education", skills: "skills" },
    },
  },
};

export type Dict = (typeof dict)["pt"];
