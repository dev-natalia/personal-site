import CurriculoView, { curriculoMetadata } from "@/components/CurriculoView";

export const metadata = curriculoMetadata("pt");

export default function CurriculoPage() {
  return <CurriculoView lang="pt" />;
}
