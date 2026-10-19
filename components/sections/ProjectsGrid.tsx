"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Card from "@/components/ui/Card";
import { dict, type Lang } from "@/lib/i18n";

export interface ProjectCard {
  name: string;
  description: string | null;
  url: string;
  language: string | null;
  stars: number;
  updated: string;
}

interface ProjectsGridProps {
  lang: Lang;
  /** null quando o GitHub não respondeu */
  projects: ProjectCard[] | null;
  profileUrl: string;
}

export default function ProjectsGrid({ lang, projects, profileUrl }: ProjectsGridProps) {
  const t = dict[lang].projects;
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
          <p className="font-mono text-accent text-sm mb-3">{t.eyebrow}</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-main mb-10">
            {t.title}
          </h2>
        </motion.div>

        {projects && projects.length > 0 ? (
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
                    <h3 className="font-heading font-semibold text-text-main text-lg leading-snug break-all">
                      {project.name}
                    </h3>
                    {project.stars > 0 && (
                      <span
                        className="shrink-0 text-xs font-mono text-text-muted"
                        aria-label={t.starsLabel(project.stars)}
                      >
                        ★ {project.stars}
                      </span>
                    )}
                  </div>

                  {project.description && (
                    <p className="text-text-muted text-sm leading-relaxed">{project.description}</p>
                  )}

                  <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-1">
                    {project.language && (
                      <span className="text-xs font-mono text-accent/70 bg-accent/5 border border-accent/20 px-2 py-0.5 rounded">
                        {project.language}
                      </span>
                    )}
                    <span className="text-xs font-mono text-text-muted">{t.updated} {project.updated}</span>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t.viewOnGithub(project.name)}
                      className="ml-auto text-text-muted hover:text-accent text-xs font-mono transition-colors duration-200"
                    >
                      GitHub →
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-text-muted">
            {t.failed}{" "}
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              {t.failedLink}
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
