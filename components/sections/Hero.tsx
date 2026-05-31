"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import BlinkingCursor from "@/components/ui/BlinkingCursor";
import { useTypewriter } from "@/hooks/useTypewriter";

const NAME = "Natália Pereira\nda Silva";
const SUBTITLE = "Desenvolvedora backend · São Paulo, SP";

export default function Hero() {
  const { displayed, phaseIndex } = useTypewriter(
    [
      { text: NAME, speed: 60 },
      { text: SUBTITLE, speed: 45 },
    ],
    800
  );

  const nameLines = displayed[0].split("\n");

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ background: "#111827", minHeight: "100vh" }}
    >
      {/* Vídeo de fundo */}
      <video
        src="/site-pessoal.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute right-0 select-none pointer-events-none"
        style={{ height: "75vh", width: "auto", top: "8%", objectFit: "cover" }}
      />

      {/* Overlay lateral */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, #111827 0%, #111827 40%, rgba(17,24,39,0) 85%)",
        }}
      />

      {/* Overlay superior */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "120px",
          background:
            "linear-gradient(to bottom, #111827 0%, rgba(17,24,39,0) 100%)",
        }}
      />

      {/* Overlay inferior — cobre do fim do vídeo (~83vh) até o fim da section */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "calc(17vh + 140px)",
          background:
            "linear-gradient(to bottom, rgba(17,24,39,0) 0%, #111827 55%)",
        }}
      />

      {/* Conteúdo */}
      <div
        className="relative z-10 flex items-center px-6 md:px-12 lg:px-24"
        style={{ minHeight: "100vh", paddingTop: "4rem" }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6 max-w-md"
        >
          <div>
            <p className="font-mono text-accent text-sm mb-3">Olá, eu sou</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-main leading-tight">
              {nameLines.map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
              {phaseIndex === 0 && <BlinkingCursor />}
            </h1>
          </div>

          <div className="font-mono text-text-muted text-sm flex items-center gap-1" style={{ minHeight: "1.25rem" }}>
            <span>{displayed[1]}</span>
            {(phaseIndex === 1 || phaseIndex === -1) && <BlinkingCursor />}
          </div>

          <p className="text-text-muted text-base leading-relaxed">
            Trabalho com APIs, integração de sistemas e arquitetura backend.
            Mais de 6 anos construindo coisas que funcionam de verdade.
          </p>

          <div className="flex flex-col gap-3 pt-2 w-fit">
            <div className="flex gap-3">
              <Button href="#projetos" variant="outline">
                Ver projetos
              </Button>
              <Button href="#contato" variant="outline">
                Fale comigo
              </Button>
            </div>
            <Button href="/api/curriculo" download variant="primary" className="w-full">
              Baixar currículo ↓
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
