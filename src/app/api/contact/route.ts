import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const TO_EMAIL = "thinkhawks@gmail.com";
const FROM_EMAIL = "Think Hawks Website <noreply@thinkhawks.com>";

const schema = z.object({
  name: z.string().trim().min(2).max(200),
  email: z.string().trim().email().max(320),
  phone: z.string().trim().max(50).optional().or(z.literal("")),
  company: z.string().trim().max(200).optional().or(z.literal("")),
  service: z.string().trim().min(1).max(200),
  budget: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().max(5000).optional().or(z.literal("")),
  // botcheck is deliberately not validated here: the honeypot is checked
  // before parsing, and the client sends a boolean. z.object() strips it.
});

function esc(value: string | null | undefined): string {
  if (!value) return "";
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
    const body = await request.json();

    // Honeypot — silently succeed if bot filled this field
    if (body?.botcheck) {
      return NextResponse.json({ success: true });
    }

    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Please check your input and try again." },
        { status: 400 }
      );
    }

    const { name, email, phone, company, service, budget, message } = parsed.data;

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service not configured. Please contact us directly at thinkhawks@gmail.com" },
        { status: 503 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const safeName = esc(name);
    const safeEmail = esc(email);
    const safePhone = esc(phone);
    const safeCompany = esc(company);
    const safeService = esc(service);
    const safeBudget = esc(budget);
    const safeMessage = esc(message).replace(/\n/g, "<br>");

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New enquiry from ${safeName} — ${safeService}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f8faf8; border-radius: 12px;">
          <div style="background: linear-gradient(135deg, #8EA97A, #A9C193); padding: 24px; border-radius: 10px; margin-bottom: 24px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 22px;">New Client Enquiry</h1>
            <p style="color: rgba(255,255,255,0.85); margin: 6px 0 0; font-size: 14px;">Think Hawks Website</p>
          </div>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #e8ede8; color: #666; font-size: 13px; width: 130px;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #e8ede8; font-weight: 600; color: #222;">${safeName}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #e8ede8; color: #666; font-size: 13px;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #e8ede8; color: #222;"><a href="mailto:${safeEmail}" style="color: #8EA97A;">${safeEmail}</a></td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #e8ede8; color: #666; font-size: 13px;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #e8ede8; color: #222;">${safePhone || "—"}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #e8ede8; color: #666; font-size: 13px;">Company</td><td style="padding: 10px 0; border-bottom: 1px solid #e8ede8; color: #222;">${safeCompany || "—"}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #e8ede8; color: #666; font-size: 13px;">Service</td><td style="padding: 10px 0; border-bottom: 1px solid #e8ede8; color: #222;">${safeService}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #e8ede8; color: #666; font-size: 13px;">Budget</td><td style="padding: 10px 0; border-bottom: 1px solid #e8ede8; color: #222;">${safeBudget || "Not specified"}</td></tr>
          </table>
          <div style="margin-top: 20px; background: white; padding: 16px; border-radius: 8px; border-left: 4px solid #8EA97A;">
            <p style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px;">Message</p>
            <p style="color: #222; font-size: 14px; line-height: 1.6; margin: 0;">${safeMessage || "—"}</p>
          </div>
          <p style="text-align: center; color: #aaa; font-size: 11px; margin-top: 24px;">Think Hawks · Lahore, Pakistan · thinkhawks@gmail.com</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Auto-reply to the client
    await resend.emails.send({
      from: FROM_EMAIL,
      to: [email],
      subject: `We received your message, ${safeName}! — Think Hawks`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f8faf8; border-radius: 12px;">
          <div style="background: linear-gradient(135deg, #8EA97A, #A9C193); padding: 24px; border-radius: 10px; margin-bottom: 24px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 22px;">Thanks for reaching out!</h1>
            <p style="color: rgba(255,255,255,0.85); margin: 6px 0 0; font-size: 14px;">Think Hawks · Digital Marketing Agency</p>
          </div>
          <p style="color: #222; font-size: 15px; line-height: 1.6;">Hi <strong>${safeName}</strong>,</p>
          <p style="color: #555; font-size: 14px; line-height: 1.6;">Thank you for contacting Think Hawks! We've received your enquiry about <strong>${safeService}</strong> and our team will get back to you within <strong>24 hours</strong>.</p>
          <p style="color: #555; font-size: 14px; line-height: 1.6;">In the meantime, feel free to reach us directly:</p>
          <div style="background: white; padding: 16px; border-radius: 8px; margin: 16px 0;">
            <p style="margin: 0; font-size: 13px; color: #444;">📞 <a href="tel:+923284580621" style="color: #8EA97A;">+92 328 458 0621</a></p>
            <p style="margin: 8px 0 0; font-size: 13px; color: #444;">💬 <a href="https://wa.me/923284580621" style="color: #8EA97A;">Chat on WhatsApp</a></p>
          </div>
          <p style="color: #aaa; font-size: 12px; margin-top: 24px; text-align: center;">Think Hawks · Office #19, Al Hafeez Shopping Mall, Gulberg III, Lahore</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
