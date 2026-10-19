import Nav from "@/components/ui/Nav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { dict, type Lang } from "@/lib/i18n";

export default function HomePage({ lang }: { lang: Lang }) {
  return (
    <>
      <Nav lang={lang} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Skills lang={lang} />
        <Projects lang={lang} />
        <Contact lang={lang} />
      </main>
      <footer className="border-t border-border py-8 text-center text-text-muted text-sm font-mono">
        <span>© {new Date().getFullYear()} {dict[lang].footer}</span>
      </footer>
    </>
  );
}
