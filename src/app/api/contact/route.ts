import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { firstname, lastname, email, phone, subject, message } = body;

  if (!firstname || !lastname || !email || !phone || !subject || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Option A: just log (safe default; no credentials needed)
  console.log("CONTACT_FORM:", { firstname, lastname, email, phone, subject, message });

  // Option B: send email via SMTP/Resend/etc (tell which provider you use)
  // Example: integrate Resend/Nodemailer here.

  return NextResponse.json({ ok: true });
}
