import type { Metadata } from "next";
import { Inter, Syne, JetBrains_Mono } from "next/font/google";
import { dict, paths, type Lang } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-syne",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export function buildMetadata(lang: Lang): Metadata {
  const { meta } = dict[lang];
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      languages: { "pt-BR": paths.pt.home, en: paths.en.home },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://nataliaps.dev${paths[lang].home === "/" ? "" : paths[lang].home}`,
      siteName: "Natália Pereira da Silva",
      images: [{ url: "/coding.png", width: 1200, height: 630, alt: meta.ogImageAlt }],
      locale: meta.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/coding.png"],
    },
  };
}

// Cada idioma tem seu próprio layout raiz (route groups) para o <html lang> sair correto
export default function RootDocument({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang === "pt" ? "pt-BR" : "en"}>
      <body
        className={`${inter.variable} ${syne.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
