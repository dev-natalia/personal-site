import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO = "dev.nataliaps@gmail.com";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Campos obrigatórios ausentes" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY não configurada");
    return NextResponse.json({ error: "Serviço de email não configurado" }, { status: 500 });
  }

  const { error } = await resend.emails.send({
    from: "Portfólio <onboarding@resend.dev>",
    to: TO,
    replyTo: email,
    subject: `[Portfólio] Mensagem de ${name}`,
    text: `Nome: ${name}\nEmail: ${email}\n\n${message}`,
    html: `
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <hr/>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Falha ao enviar email" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
