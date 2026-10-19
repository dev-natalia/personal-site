"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { dict, type Lang } from "@/lib/i18n";

export default function About({ lang }: { lang: Lang }) {
  const t = dict[lang].about;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="section-padding overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* GIF Matrix — lado esquerdo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
            style={{ height: "520px" }}
          >
            <video
              src="/digitando.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              style={{ display: "block", borderRadius: "4px" }}
            />
            {/* Overlay lateral direito */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, rgba(17,24,39,0) 30%, #111827 100%)",
              }}
            />
            {/* Overlay lateral esquerdo */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to left, rgba(17,24,39,0) 30%, #111827 100%)",
              }}
            />
            {/* Overlay superior */}
            <div
              className="absolute top-0 left-0 right-0 pointer-events-none"
              style={{
                height: "100px",
                background:
                  "linear-gradient(to bottom, #111827 0%, rgba(17,24,39,0) 100%)",
              }}
            />
            {/* Overlay inferior */}
            <div
              className="absolute bottom-0 left-0 right-0 pointer-events-none"
              style={{
                height: "100px",
                background:
                  "linear-gradient(to bottom, rgba(17,24,39,0) 0%, #111827 100%)",
              }}
            />

          </motion.div>

          {/* Texto — lado direito */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-accent text-sm mb-3">{t.eyebrow}</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-main mb-8">
              {t.title}
            </h2>

            <div className="flex flex-col gap-5 text-text-muted leading-relaxed text-base">
              {t.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4">
              {t.facts.map((fact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3 text-text-muted text-sm"
                >
                  <span className="text-base mt-0.5">{fact.icon}</span>
                  <span>{fact.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
