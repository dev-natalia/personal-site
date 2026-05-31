"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Card from "@/components/ui/Card";

type ProjectStatus = "Em construção" | "Em breve";

interface Project {
  name: string;
  description: string;
  tech: string[];
  status: ProjectStatus;
  githubUrl?: string;
  siteUrl?: string;
}

const projects: Project[] = [
  {
    name: "Este site — Portfólio",
    description:
      "Site de portfólio pessoal com Next.js, Tailwind e Framer Motion. Inclui integração com GitHub API e ilustrações SVG animadas.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "GitHub API"],
    status: "Em construção",
  },
  {
    name: "Autosserviço AWS",
    description:
      "API serverless construída inteiramente na AWS. Lambda Powertools como estrutura principal, com API Gateway, SQS, SNS, S3 e Step Functions.",
    tech: ["Python", "AWS Lambda", "Lambda Powertools", "API Gateway", "SQS", "S3"],
    status: "Em construção",
  },
  {
    name: "SDD Tool",
    description:
      "Ferramenta para criação de specs e condução de um fluxo de Spec Driven Development. Ajuda devs a estruturar o que querem construir antes de escrever código.",
    tech: ["A definir"],
    status: "Em breve",
  },
  {
    name: "Task Manager pessoal",
    description:
      "Sistema de controle de tarefas com sistema próprio de níveis de energia e princípios de GTD. Gestão pessoal de produtividade com uma abordagem mais humana.",
    tech: ["A definir"],
    status: "Em breve",
  },
];

const statusColors: Record<ProjectStatus, string> = {
  "Em construção": "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  "Em breve": "bg-border text-text-muted border-border",
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projetos" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-accent text-sm mb-3">projetos</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-main mb-10">
            O que estou construindo
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full flex flex-col gap-4 hover:border-accent/30 transition-colors duration-200">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading font-semibold text-text-main text-lg leading-snug">
                    {project.name}
                  </h3>
                  <span
                    className={`shrink-0 text-xs font-mono px-2 py-0.5 rounded border ${statusColors[project.status]}`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-text-muted text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono text-accent/70 bg-accent/5 border border-accent/20 px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {(project.githubUrl || project.siteUrl) && (
                  <div className="flex gap-4 pt-1">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ver ${project.name} no GitHub`}
                        className="text-text-muted hover:text-accent text-xs font-mono transition-colors duration-200"
                      >
                        GitHub →
                      </a>
                    )}
                    {project.siteUrl && (
                      <a
                        href={project.siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ver site de ${project.name}`}
                        className="text-text-muted hover:text-accent text-xs font-mono transition-colors duration-200"
                      >
                        Site →
                      </a>
                    )}
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
