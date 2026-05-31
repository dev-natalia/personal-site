# Spec de Seções

## 1. Hero

**Layout:** duas colunas em desktop (texto à esquerda, ilustração à direita), uma coluna em mobile.

**Conteúdo:**
- Nome: `Natália Pereira da Silva`
- Tagline: A definir (criar após o restante do site estar tomando forma)
- Subtítulo sugerido: `Desenvolvedora backend · São Paulo, SP`

**CTAs:**
- Botão primário: "Ver projetos" → scroll para #projetos
- Botão secundário (outline): "Fale comigo" → scroll para #contato
- Link discreto abaixo: "Baixar currículo ↓" → download do PDF

**Elemento visual:**
- Ilustração animada SVG (ver specs/identity.md)
- Cursor piscando após a tagline (JetBrains Mono, cor do acento)

---

## 2. Sobre mim

**Layout:** uma coluna, texto centralizado ou alinhado à esquerda com largura máxima de leitura (~65ch).

**Conteúdo:**

> Natália Pereira da Silva, desenvolvedora backend baseada em São Paulo — com sotaque mineiro no meio, porque dez anos em Minas deixam marca.

> A caminho não foi em linha reta: comecei em Ciência da Computação, passei por artes, design e engenharia mecânica antes de voltar para o código. Quando voltei, reaprendi tudo em tempo recorde — e percebi que as outras áreas tinham me dado algo que a maioria dos devs não tem: uma visão diferente de problema.

> Trabalho principalmente com backend: APIs, integração de sistemas, bancos SQL e NoSQL, AWS (SQS, Kafka, Lambda, SNS, S3, Step Functions). Mais de 6 anos de experiência e, ultimamente, cada vez mais interessada em arquitetura de sistemas.

**Fatos rápidos (3 itens com ícone ou emoji):**
- Fui de empresa júnior a Engenheiros Sem Fronteiras
- Tenho uma cachorra e uma gata que supervisionam meu trabalho
- Meu setup inclui Monster e cigarro — não necessariamente nessa ordem

---

## 3. Skills

**Layout:** grid de logos por categoria. Sem níveis/barras de progresso.

**Categorias e tecnologias:**

**Linguagens & Frameworks**
Python, FastAPI, SQLAlchemy, Angular (estudando)

**Bancos de Dados**
MySQL, SQL Server, PostgreSQL, MongoDB, Redis

**AWS**
SQS, Kafka, Lambda, SNS, S3, Step Functions, API Gateway

**Arquitetura & Design**
Modelagem de banco de dados, Arquitetura de sistemas, Integração de sistemas

**DevOps & Infra**
Docker, Terraform, GitHub Actions, Git

**IA & Ferramentas**
Prompt engineering, AI-assisted development

**Implementação:**
- Logos via Devicons ou Simple Icons (CDN)
- Hover com nome da tecnologia em tooltip
- Animação sutil de entrada ao fazer scroll até a seção

---

## 4. Projetos

**Layout:** grid de cards (2 colunas desktop, 1 coluna mobile).

**Card contém:**
- Nome do projeto
- Descrição curta (1-2 linhas)
- Tags de tecnologias usadas
- Links: GitHub (se público) e/ou descrição
- Badge "Em breve" para projetos em construção

**Projetos:** ver `specs/projects.md`

**Observação:** integração com GitHub API para puxar repos públicos dinamicamente quando disponíveis.

---

## 5. Contato

**Layout:** duas colunas — links sociais à esquerda, formulário à direita.

**Links sociais:**
- LinkedIn
- GitHub
- Email: dev.nataliaps@gmail.com

**Formulário:**
- Campos: Nome, Email, Mensagem
- Botão: "Enviar mensagem"
- Implementação: Resend ou Formspree (a definir)
- Feedback visual de sucesso/erro após envio
