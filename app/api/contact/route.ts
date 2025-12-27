import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/lib/utils/EmailTemplate";
import { ConfirmationEmailTemplate } from "@/lib/utils/ConfirmationEmailTemplate";

export const runtime = "nodejs";

// const resend = new Resend(process.env.RESEND_API_KEY);

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

export async function POST(request: Request) {
  try {
    const resend = getResend();
    if (!resend) {
      return NextResponse.json(
        { ok: false, error: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }

    const { firstname, lastname, email, phone, company, message, locale } =
      await request.json();

    if (!email || !message || !firstname || !lastname || !company) {
      return new Response(
        JSON.stringify({ ok: false, error: "Missing fields" }),
        { status: 400 }
      );
    }

    const toAdmin = process.env.CONTACT_TO_EMAIL!;
    const from = process.env.CONTACT_FROM_EMAIL!;

    const adminSubject = `Nouveau message - ${firstname} ${lastname} (${company})`;
    const sentAt = new Date().toLocaleString(
      locale === "en" ? "en-US" : "fr-FR"
    );

    const adminSend = resend.emails.send({
      from,
      to: toAdmin,
      replyTo: email,
      subject: adminSubject,
      react: EmailTemplate({
        firstname,
        lastname,
        email,
        phone,
        company,
        message,
        locale: "fr",
        sentAt,
      }),
    });

    const userSubject =
      (locale ?? "fr") === "fr"
        ? "Nous avons bien reçu votre message ✅"
        : "We received your message ✅";

    const userSend = resend.emails.send({
      from,
      to: email, // le client
      replyTo: toAdmin, // si le client répond à la confirmation, ça arrive chez toi
      subject: userSubject,
      react: ConfirmationEmailTemplate({
        firstname,
        company,
        locale: locale ?? "fr",
        sentAt,
      }),
    });

    await Promise.all([adminSend, userSend]);

    return Response.json({ ok: true });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);
    return new Response(JSON.stringify({ ok: false, error: String(error) }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
}
