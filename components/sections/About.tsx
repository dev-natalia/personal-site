"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const facts = [
  { icon: "🏗️", text: "Já passei por empresa júnior e pelo Engenheiros Sem Fronteiras." },
  {
    icon: "🐾",
    text: "Tenho uma cachorra e uma gata que supervisionam meu trabalho. Aparentemente, nenhuma das duas confia muito na minha capacidade de trabalhar sozinha.",
  },
];

export default function About() {
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
            <p className="font-mono text-accent text-sm mb-3">sobre mim</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-main mb-8">
              Quem está por trás do código
            </h2>

            <div className="flex flex-col gap-5 text-text-muted leading-relaxed text-base">
              <p>
                Natália Pereira da Silva, desenvolvedora backend em São Paulo, com sotaque mineiro de brinde. Dez anos em Minas deixam marcas.
              </p>
              <p>
                Minha trajetória foi meio engraçada: comecei em Ciência da Computação, passei por artes, design e engenharia mecânica e, no fim, voltei para o código. Tive que reaprender muita coisa em tempo recorde, mas trouxe comigo uma bagagem que uso até hoje: a experiência de olhar para um mesmo problema por ângulos bem diferentes.
              </p>
              <p>
                Trabalho principalmente com backend, desenvolvendo APIs e integrações entre sistemas, lidando com bancos SQL e NoSQL e serviços da AWS, como SQS, Lambda, S3 e Step Functions. São mais de 7 anos de experiência e uma curiosidade cada vez maior por arquitetura de sistemas.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4">
              {facts.map((fact, i) => (
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
