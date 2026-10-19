import CurriculoView, { curriculoMetadata } from "@/components/CurriculoView";

export const metadata = curriculoMetadata("en");

export default function CurriculoPage() {
  return <CurriculoView lang="en" />;
}
