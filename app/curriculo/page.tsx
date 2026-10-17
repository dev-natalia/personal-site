import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "@/components/ui/PrintButton";
import { curriculo } from "@/lib/curriculo";

// O título vira o nome sugerido do arquivo ao salvar como PDF
export const metadata: Metadata = {
  title: `Currículo — ${curriculo.nome}`,
  description: `Currículo de ${curriculo.nome}, ${curriculo.titulo}.`,
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-accent text-sm mb-6 print:text-teal-700 print:text-xs print:mb-3 print:pb-1 print:border-b print:border-gray-300">
      {children}
    </h2>
  );
}

export default function CurriculoPage() {
  const contatos = [
    { label: "E-mail", value: curriculo.email, href: `mailto:${curriculo.email}` },
    { label: "LinkedIn", value: curriculo.linkedin, href: `https://${curriculo.linkedin}` },
    { label: "GitHub", value: curriculo.github, href: `https://${curriculo.github}` },
  ];

  return (
    <div className="min-h-screen print:bg-white print:text-gray-900">
      <header className="print:hidden sticky top-0 z-10 bg-bg/90 backdrop-blur border-b border-border">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-text-muted hover:text-text-main text-sm transition-colors duration-200"
          >
            Voltar para o site
          </Link>
          <PrintButton className="px-4 py-2">Baixar PDF</PrintButton>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16 print:p-0 print:max-w-none">
        <div className="mb-12 print:mb-6">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-main leading-tight print:text-gray-900 print:text-3xl">
            {curriculo.nome}
          </h1>
          <p className="mt-3 text-accent print:text-teal-700 print:mt-1">{curriculo.titulo}</p>
          <p className="mt-1 text-text-muted print:text-gray-600 text-sm">{curriculo.localizacao}</p>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm print:mt-3 print:text-xs">
            {contatos.map((c) => (
              <li key={c.label}>
                <span className="text-text-muted print:text-gray-500">{c.label}: </span>
                <a
                  href={c.href}
                  className="text-text-main hover:text-accent transition-colors duration-200 print:text-gray-900"
                >
                  {c.value}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <section className="mb-12 print:mb-6">
          <SectionTitle>resumo</SectionTitle>
          <p className="text-text-muted leading-relaxed max-w-reading print:text-gray-700 print:text-sm print:max-w-none">
            {curriculo.resumo}
          </p>
        </section>

        <section className="mb-12 print:mb-6">
          <SectionTitle>experiência</SectionTitle>
          <ol className="flex flex-col gap-10 print:gap-4">
            {curriculo.experiencia.map((exp) => (
              <li key={`${exp.empresa}-${exp.periodo}`} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-heading text-xl font-semibold text-text-main print:text-gray-900 print:text-base">
                    {exp.empresa}
                  </h3>
                  <span className="font-mono text-text-muted text-xs print:text-gray-500">{exp.periodo}</span>
                </div>
                <p className="text-accent/80 text-sm mt-1 print:text-teal-700 print:mt-0">{exp.cargo}</p>
                <ul className="mt-3 flex flex-col gap-2 list-disc pl-5 marker:text-accent text-text-muted text-sm leading-relaxed print:mt-1 print:gap-0.5 print:text-gray-700 print:marker:text-teal-700">
                  {exp.itens.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-12 print:mb-6 break-inside-avoid">
          <SectionTitle>formação</SectionTitle>
          <ul className="flex flex-col gap-5 print:gap-2">
            {curriculo.formacao.map((f) => (
              <li key={f.curso}>
                <p className="text-text-main font-medium print:text-gray-900 print:text-sm">{f.curso}</p>
                <p className="text-text-muted text-sm print:text-gray-600 print:text-xs">
                  {f.instituicao}, {f.periodo}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="break-inside-avoid">
          <SectionTitle>skills</SectionTitle>
          <ul className="flex flex-wrap gap-2">
            {curriculo.skills.map((skill) => (
              <li
                key={skill}
                className="text-xs font-mono text-accent/80 bg-accent/5 border border-accent/20 px-2 py-1 rounded print:text-gray-700 print:bg-transparent print:border-gray-300"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <div className="print:hidden mt-16 pt-8 border-t border-border">
          <PrintButton>Baixar PDF</PrintButton>
        </div>
      </main>
    </div>
  );
}
