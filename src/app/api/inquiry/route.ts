import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, course, message } = body;

    // Basic validation
    if (!name || !email || !phone || !course) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "Inquiry Form <onboarding@resend.dev>",
      to: ["jivanparivartan9@gmail.com"],
      subject: `New Inquiry from ${name}`,
      replyTo: email,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Course Inquiry</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Program:</strong> ${course}</p>

          <h3>Message:</h3>
          <p>${message || "No message provided"}</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Email send error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send inquiry",
      },
      { status: 500 }
    );
  }
}