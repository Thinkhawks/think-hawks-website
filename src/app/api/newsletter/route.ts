import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "thinkhawks@gmail.com";
const FROM_EMAIL = "Think Hawks Website <noreply@thinkhawks.com>";

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case "&": return "&amp;";
      case "<": return "&lt;";
      case ">": return "&gt;";
      case '"': return "&quot;";
      default: return "&#39;";
    }
  });
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string" || !/^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "Email service not configured." }, { status: 503 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      subject: `New Newsletter Subscriber: ${email}`,
      html: `<p>New newsletter subscriber: <strong>${escapeHtml(email)}</strong></p>`,
    });

    await resend.emails.send({
      from: FROM_EMAIL,
      to: [email],
      subject: "You're subscribed to Think Hawks insights!",
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f8faf8; border-radius: 12px;">
          <div style="background: linear-gradient(135deg, #8EA97A, #A9C193); padding: 24px; border-radius: 10px; margin-bottom: 24px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 20px;">Welcome to the Think Hawks insider list!</h1>
          </div>
          <p style="color: #555; font-size: 14px; line-height: 1.6;">You're now subscribed to our weekly digital marketing insights. Expect tips, strategies, and industry updates every week — straight to your inbox.</p>
          <p style="color: #aaa; font-size: 12px; margin-top: 24px; text-align: center;">Think Hawks · Lahore, Pakistan</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Newsletter API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
