import { NextResponse } from "next/server";
import { mailTransport } from "@/lib/mailer";
import { renderTemplate } from "@/lib/template";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const html = await renderTemplate("contact-us", {
      name,
      email,
      subject,
      message,
      portfolio_domain: process.env.PORTFOLIO_DOMAIN
    });

    await mailTransport.sendMail({
      from: `"Assistance Team" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Thanks for reaching out to Assistance Team`,
      html: html,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
