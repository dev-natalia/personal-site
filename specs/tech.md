# Spec Técnica

## Stack

| Camada | Tecnologia | Justificativa |
|---|---|---|
| Framework | Next.js 14+ (App Router) | SSR para SEO, roteamento simples, deploy fácil na Vercel |
| Estilo | Tailwind CSS | Produtividade alta, sem CSS custom para casos simples |
| Animações | Framer Motion | API declarativa, ótima integração com React/Next |
| Ilustrações | SVG (gerado no Recraft.ai) | Vetorial, animável, leve |
| Fontes | Google Fonts (Space Grotesk, Inter, JetBrains Mono) | Gratuitas, fácil integração com Next.js |
| Ícones de skills | Simple Icons / Devicons | CDN, cobertura ampla de tecnologias |
| Formulário de contato | Resend ou Formspree | Simples de configurar, sem backend próprio |
| Integração GitHub | GitHub REST API (pública) | Sem autenticação necessária para repos públicos |
| Hospedagem | Vercel | Deploy automático via GitHub, free tier suficiente |

## Estrutura de Pastas (Next.js)

```
/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── api/
│       └── contact/route.ts   # endpoint do formulário
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── Card.tsx
│       ├── Button.tsx
│       └── Nav.tsx
├── public/
│   ├── illustration.svg       # ilustração principal
│   └── curriculo.pdf
├── lib/
│   └── github.ts              # funções da GitHub API
└── specs/                     # este diretório
```

## Decisões Técnicas

**Por que Next.js e não HTML puro?**
Blog pode ser adicionado no futuro (MDX). GitHub API fica em Server Components (sem expor token). SEO com metadata API nativa.

**Por que Tailwind?**
Zero experiência em frontend — Tailwind reduz a curva de CSS. Classes utilitárias são mais fáceis de aprender e manter do que CSS custom.

**Por que Framer Motion?**
Animações declarativas em React, documentação excelente, comunidade grande. Scroll reveal, hover effects e animações SVG em um só lugar.

**Formulário de contato**
Preferência pelo Resend (mais controle, API simples). Fallback: Formspree (zero backend, só HTML).

## Performance

- Imagens otimizadas com `next/image`
- Fontes com `next/font` (sem layout shift)
- SVG inline para a ilustração (sem request extra)
- Lazy loading nas seções abaixo do fold

## Acessibilidade

- Contraste mínimo AA em todos os textos
- Navegação por teclado funcional
- `aria-label` nos links de ícones
- Respeitar `prefers-reduced-motion` nas animações
