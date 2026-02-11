export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { Resend } from "resend";

// Log environment variables at runtime for debugging
console.log("RESEND_API_KEY:", !!process.env.RESEND_API_KEY);
console.log("CONTACT_RECEIVER:", !!process.env.CONTACT_RECEIVER);

let resend: Resend | null = null;
if (process.env.RESEND_API_KEY) {
  resend = new Resend(process.env.RESEND_API_KEY);
} else {
  console.error("RESEND_API_KEY is undefined. Did you set it in Netlify?");
}

export async function POST(req: Request) {
  try {
    if (!resend) {
      return NextResponse.json(
        { error: "Server misconfigured: missing Resend API key" },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { name, email, phone, message, company } = body;

    // 1. Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 2. Honeypot
    if (company) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 3. Save to database
    await prisma.lead.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone?.trim() || null,
        message: message.trim(),
        source: "website",
      },
    });

    // 4. Check CONTACT_RECEIVER before sending email
    const receiver = process.env.CONTACT_RECEIVER;
    if (!receiver) {
      console.error("CONTACT_RECEIVER is undefined. Did you set it in Netlify?");
      return NextResponse.json(
        { error: "Server misconfigured: missing contact receiver" },
        { status: 500 }
      );
    }

    // 5. Send email via Resend
    await resend.emails.send({
      from: "Website <onboarding@resend.dev>",
      to: receiver,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Quote request received" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
