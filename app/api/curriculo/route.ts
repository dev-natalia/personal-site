import { Worker } from "worker_threads";
import path from "path";
import { curriculo } from "@/lib/curriculo";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function generatePDF(): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const workerPath = path.join(process.cwd(), "scripts", "pdfWorker.mjs");
    const worker = new Worker(workerPath, { workerData: curriculo });
    worker.once("message", (buf: Buffer) => {
      const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
      resolve(ab as ArrayBuffer);
    });
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
