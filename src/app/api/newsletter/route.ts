import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { clientKey, rateLimit, tooManyRequests } from "@/lib/rate-limit";

const TO_EMAIL = "thinkhawks@gmail.com";
const FROM_EMAIL = "Think Hawks Website <noreply@thinkhawks.com>";

// Subscribing is a one-off action; the extra headroom covers someone
// correcting a typo. The form appears in both the footer and the blog page.
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;

const schema = z.object({
  email: z.string().trim().email().max(320),
});

function esc(value: string): string {
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
    // Checked before parsing so malformed floods are cheap to reject too.
    const limit = rateLimit(
      clientKey(request, "newsletter"),
      RATE_LIMIT,
      RATE_WINDOW_MS
    );
    if (!limit.ok) {
      return tooManyRequests(
        limit.retryAfterSec,
        "Too many requests — please try again in a few minutes."
      );
    }

    const body = await request.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const { email } = parsed.data;

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "Email service not configured." }, { status: 503 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Subject lines are plain text — escaping there would show "&#39;" etc.
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      subject: `New Newsletter Subscriber: ${email}`,
      html: `<p>New newsletter subscriber: <strong>${esc(email)}</strong></p>`,
    });

    // Resend reports failures in `error` rather than throwing, so without
    // this check a rejected send still told the visitor they were subscribed
    // while the address never reached us.
    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Confirmation to the subscriber — we already have the address, so a
    // failure here must not be reported as a failed subscription.
    try {
      const { error: welcomeError } = await resend.emails.send({
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
      if (welcomeError) console.error("Welcome email failed:", welcomeError);
    } catch (welcomeErr) {
      console.error("Welcome email threw:", welcomeErr);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Newsletter API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
