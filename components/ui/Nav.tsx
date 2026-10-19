"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LangSwitch from "@/components/ui/LangSwitch";
import { dict, otherLang, paths, type Lang } from "@/lib/i18n";

export default function Nav({ lang }: { lang: Lang }) {
  const t = dict[lang].nav;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/90 backdrop-blur border-b border-border" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-accent text-sm tracking-widest hover:opacity-80 transition-opacity"
        >
          nps
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {t.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-text-muted hover:text-text-main text-sm transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <LangSwitch href={paths[otherLang(lang)].home} label={t.switchLangLabel}>
            {t.switchLang}
          </LangSwitch>
          <a
            href={paths[lang].curriculo}
            className="text-accent border border-accent text-xs font-mono px-3 py-1.5 rounded hover:bg-accent/10 transition-colors duration-200"
          >
            {t.curriculo}
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
