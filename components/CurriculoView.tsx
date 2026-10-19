import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "@/components/ui/PrintButton";
import LangSwitch from "@/components/ui/LangSwitch";
import { curriculo } from "@/lib/curriculo";
import { curriculoEn } from "@/lib/curriculo-en";
import { dict, otherLang, paths, type Lang } from "@/lib/i18n";

const curriculos = { pt: curriculo, en: curriculoEn };

// O título vira o nome sugerido do arquivo ao salvar como PDF
export function curriculoMetadata(lang: Lang): Metadata {
  const c = curriculos[lang];
  return {
    title: dict[lang].curriculo.metaTitle,
    description: `${c.nome}, ${c.titulo}.`,
    alternates: { languages: { "pt-BR": paths.pt.curriculo, en: paths.en.curriculo } },
  };
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-accent text-sm mb-6 print:text-teal-700 print:text-xs print:mb-3 print:pb-1 print:border-b print:border-gray-300">
      {children}
    </h2>
  );
}

export default function CurriculoView({ lang }: { lang: Lang }) {
  const c = curriculos[lang];
  const t = dict[lang].curriculo;
  const contatos = [
    { label: t.contact.email, value: c.email, href: `mailto:${c.email}` },
    { label: t.contact.linkedin, value: c.linkedin, href: `https://${c.linkedin}` },
    { label: t.contact.github, value: c.github, href: `https://${c.github}` },
  ];

  return (
    <div className="min-h-screen print:bg-white print:text-gray-900">
      <header className="print:hidden sticky top-0 z-10 bg-bg/90 backdrop-blur border-b border-border">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <Link
            href={paths[lang].home}
            className="text-text-muted hover:text-text-main text-sm transition-colors duration-200"
          >
            {t.back}
          </Link>
          <div className="flex items-center gap-3">
            <LangSwitch href={paths[otherLang(lang)].curriculo} label={t.switchLangLabel}>
              {t.switchLang}
            </LangSwitch>
            <PrintButton className="px-4 py-2">{t.download}</PrintButton>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16 print:p-0 print:max-w-none">
        <div className="mb-12 print:mb-6">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-main leading-tight print:text-gray-900 print:text-3xl">
            {c.nome}
          </h1>
          <p className="mt-3 text-accent print:text-teal-700 print:mt-1">{c.titulo}</p>
          <p className="mt-1 text-text-muted print:text-gray-600 text-sm">{c.localizacao}</p>
          <p className="mt-1 text-text-muted print:text-gray-600 text-sm">{dict[lang].hero.availability}</p>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm print:mt-3 print:text-xs">
            {contatos.map((contato) => (
              <li key={contato.label}>
                <span className="text-text-muted print:text-gray-500">{contato.label}: </span>
                <a
                  href={contato.href}
                  className="text-text-main hover:text-accent transition-colors duration-200 print:text-gray-900"
                >
                  {contato.value}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <section className="mb-12 print:mb-6">
          <SectionTitle>{t.sections.resumo}</SectionTitle>
          <p className="text-text-muted leading-relaxed max-w-reading print:text-gray-700 print:text-sm print:max-w-none">
            {c.resumo}
          </p>
        </section>

        <section className="mb-12 print:mb-6">
          <SectionTitle>{t.sections.experiencia}</SectionTitle>
          <ol className="flex flex-col gap-10 print:gap-4">
            {c.experiencia.map((exp) => (
              <li key={`${exp.empresa}-${exp.periodo}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 break-after-avoid">
                  <h3 className="font-heading text-xl font-semibold text-text-main print:text-gray-900 print:text-base">
                    {exp.empresa}
                  </h3>
                  <span className="font-mono text-text-muted text-xs print:text-gray-500">{exp.periodo}</span>
                </div>
                <p className="text-accent/80 text-sm mt-1 print:text-teal-700 print:mt-0 break-after-avoid">{exp.cargo}</p>
                <ul className="mt-3 flex flex-col gap-2 list-disc pl-5 marker:text-accent text-text-muted text-sm leading-relaxed print:mt-1 print:gap-0.5 print:text-gray-700 print:marker:text-teal-700">
                  {exp.itens.map((item) => (
                    <li key={item} className="break-inside-avoid">{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-12 print:mb-6 break-inside-avoid">
          <SectionTitle>{t.sections.formacao}</SectionTitle>
          <ul className="flex flex-col gap-5 print:gap-2">
            {c.formacao.map((f) => (
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
          <SectionTitle>{t.sections.skills}</SectionTitle>
          <ul className="flex flex-wrap gap-2">
            {c.skills.map((skill) => (
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
          <PrintButton>{t.download}</PrintButton>
        </div>
      </main>
    </div>
  );
}
