"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// ícones removidos do cdn.simpleicons.org (questão de trademark) — servidos via jsdelivr (SVG preto, recolorido via CSS filter)
const SI = (slug: string) => `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${slug}.svg`;

const categories = [
  {
    title: "Linguagens & Frameworks",
    skills: [
      { name: "Python",      icon: "https://cdn.simpleicons.org/python/6EE7B7" },
      { name: "FastAPI",     icon: "https://cdn.simpleicons.org/fastapi/6EE7B7" },
      { name: "SQLAlchemy",  icon: "https://cdn.simpleicons.org/sqlalchemy/6EE7B7" },
      { name: "Angular",     icon: "https://cdn.simpleicons.org/angular/6EE7B7" },
    ],
  },
  {
    title: "Bancos de Dados",
    skills: [
      { name: "MySQL",      icon: "https://cdn.simpleicons.org/mysql/6EE7B7" },
      { name: "SQL Server", icon: SI("microsoftsqlserver"), recolor: true },
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/6EE7B7" },
      { name: "MongoDB",    icon: "https://cdn.simpleicons.org/mongodb/6EE7B7" },
      { name: "Redis",      icon: "https://cdn.simpleicons.org/redis/6EE7B7" },
    ],
  },
  {
    title: "AWS",
    skills: [
      { name: "SQS",         icon: SI("amazonsqs"),        recolor: true },
      { name: "Lambda",      icon: SI("awslambda"),         recolor: true },
      { name: "S3",          icon: SI("amazons3"),          recolor: true },
      { name: "API Gateway", icon: SI("amazonapigateway"),  recolor: true },
      { name: "SNS",         icon: null },
    ],
  },
  {
    title: "DevOps & Infra",
    skills: [
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/6EE7B7" },
      { name: "Terraform", icon: "https://cdn.simpleicons.org/terraform/6EE7B7" },
      { name: "GitHub Actions", icon: "https://cdn.simpleicons.org/githubactions/6EE7B7" },
      { name: "Git", icon: "https://cdn.simpleicons.org/git/6EE7B7" },
    ],
  },
  {
    title: "Arquitetura & Design",
    skills: [
      { name: "Modelagem de BD", icon: null },
      { name: "Arquitetura de Sistemas", icon: null },
      { name: "Integração de Sistemas", icon: null },
    ],
  },
  {
    title: "IA & Ferramentas",
    skills: [
      { name: "Prompt Engineering", icon: null },
      { name: "AI-assisted Dev", icon: null },
      { name: "Kafka", icon: "https://cdn.simpleicons.org/apachekafka/6EE7B7" },
    ],
  },
];

// filtro CSS: preto (#000) → #6EE7B7
const ACCENT_FILTER =
  "brightness(0) saturate(100%) invert(84%) sepia(23%) saturate(558%) hue-rotate(106deg) brightness(103%) contrast(97%)";

function SkillBadge({ name, icon, recolor }: { name: string; icon: string | null; recolor?: boolean }) {
  return (
    <div className="group relative flex items-center gap-2 bg-bg border border-border rounded px-3 py-2 hover:border-accent/50 transition-colors duration-200">
      {icon ? (
        <img
          src={icon}
          alt={name}
          className="w-4 h-4 object-contain"
          style={recolor ? { filter: ACCENT_FILTER } : undefined}
          aria-hidden
        />
      ) : (
        <span className="w-4 h-4 flex items-center justify-center text-accent text-xs font-mono">
          ✦
        </span>
      )}
      <span className="text-text-muted text-xs group-hover:text-text-main transition-colors duration-200">
        {name}
      </span>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section-padding bg-bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-accent text-sm mb-3">skills</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-main mb-10">
            O que uso no dia a dia
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
            >
              <h3 className="text-text-muted text-xs font-mono uppercase tracking-widest mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <SkillBadge key={skill.name} {...skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
