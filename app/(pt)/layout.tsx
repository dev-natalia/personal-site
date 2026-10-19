import RootDocument, { buildMetadata } from "@/components/RootDocument";
import "../globals.css";

export const metadata = buildMetadata("pt");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="pt">{children}</RootDocument>;
}
