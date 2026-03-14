import { Resend } from "resend";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX_REQUESTS = 3;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes

const rateMap = new Map<string, { count: number; firstRequestAt: number }>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(key);

  if (!entry || now - entry.firstRequestAt > WINDOW_MS) {
    rateMap.set(key, { count: 1, firstRequestAt: now });
    return false;
  }

  if (entry.count >= MAX_REQUESTS) return true;

  entry.count++;
  return false;
}

// Periodically clean up stale entries so the map doesn't grow forever
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateMap) {
    if (now - entry.firstRequestAt > WINDOW_MS) rateMap.delete(key);
  }
}, WINDOW_MS);

export async function POST(req: Request) {
  try {
    const headersList = await headers();
    const ip =
      headersList.get("x-forwarded-for")?.split(",")[0].trim() ||
      headersList.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many messages. Please try again in 15 minutes." },
        { status: 429 },
      );
    }

    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "nguyendonggiang6.6@gmail.com",
      subject: subject || `New message from ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || "N/A"}</p>
        <hr />
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 },
    );
  }
}
