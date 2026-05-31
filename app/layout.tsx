import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Syne } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Natália Pereira da Silva — Desenvolvedora Backend",
  description:
    "Portfólio de Natália Pereira da Silva, desenvolvedora backend sênior com +6 anos de experiência em Python, AWS e arquitetura de sistemas.",
  openGraph: {
    title: "Natália Pereira da Silva — Desenvolvedora Backend",
    description:
      "Portfólio de Natália Pereira da Silva, desenvolvedora backend sênior com +6 anos de experiência em Python, AWS e arquitetura de sistemas.",
    url: "https://nataliaps.dev",
    siteName: "Natália Pereira da Silva",
    images: [{ url: "/coding.png", width: 1200, height: 630, alt: "Natália Pereira da Silva — Desenvolvedora Backend" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Natália Pereira da Silva — Desenvolvedora Backend",
    description:
      "Portfólio de Natália Pereira da Silva, desenvolvedora backend sênior com +6 anos de experiência em Python, AWS e arquitetura de sistemas.",
    images: ["/coding.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${syne.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
