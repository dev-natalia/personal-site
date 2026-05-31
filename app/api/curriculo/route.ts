import { Worker } from "worker_threads";
import path from "path";
import { curriculo } from "@/lib/curriculo";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function generatePDF(): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const worker = new Worker(
      path.join(process.cwd(), "scripts/pdfWorker.mjs"),
      { workerData: curriculo }
    );
    worker.once("message", (buf: Buffer) => resolve(buf));
    worker.once("error", reject);
    worker.once("exit", (code) => {
      if (code !== 0) reject(new Error(`PDF worker exited with code ${code}`));
    });
  });
}

export async function GET() {
  const buffer = await generatePDF();
  return new Response(buffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="natalia-silva-curriculo.pdf"',
      "Cache-Control": "no-store",
    },
  });
}
