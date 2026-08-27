import { emailRegex } from "@utils";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const UK_INBOX = process.env.MAIL_TO || "info_uk@cardinaltorch.com";
const FROM_ADDRESS =
  process.env.MAIL_FROM || "Cardinal Torch UK <noreply@cardinaltorch.com>";

const escapeHtml = (value) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const asText = (value) => String(value ?? "").trim();

const html = (name, email, message, company, number) => {
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br/>");

  return `
    <h1>UK office enquiry from ${escapeHtml(name)}</h1>
    <p>${safeMessage}</p>
    <p>Return Mail: <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
    ${number ? `<p>Phone Number: ${escapeHtml(number)}</p>` : ""}
    ${company ? `<p>Company: ${escapeHtml(company)}</p>` : ""}
  `;
};

export async function POST(request) {
  const formData = await request.formData();

  const sender = {
    name: asText(formData.get("name")),
    email: asText(formData.get("email")),
    number: asText(formData.get("number")),
    company: asText(formData.get("company")),
    message: asText(formData.get("message")),
  };

  if (!sender.name) {
    return NextResponse.json(
      { success: false, message: "Please enter your name" },
      { status: 400 }
    );
  }

  if (!sender.email || !emailRegex.test(sender.email)) {
    return NextResponse.json(
      { success: false, message: "Please provide a valid email" },
      { status: 400 }
    );
  }

  if (!sender.message) {
    return NextResponse.json(
      { success: false, message: "Please enter a message" },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY");
    return NextResponse.json(
      { success: false, message: "Email service is not configured" },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: UK_INBOX,
      replyTo: sender.email,
      subject: `UK Office enquiry from ${sender.name} || ${sender.email}`,
      html: html(
        sender.name,
        sender.email,
        sender.message,
        sender.company,
        sender.number
      ),
      text: [
        `UK office enquiry from ${sender.name}`,
        "",
        sender.message,
        "",
        `Return Mail: ${sender.email}`,
        sender.number ? `Phone Number: ${sender.number}` : null,
        sender.company ? `Company: ${sender.company}` : null,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      const detail =
        typeof error === "object" && error?.message
          ? error.message
          : "Unable to send message right now";
      return NextResponse.json(
        { success: false, message: detail },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Something went wrong somewhere" },
      { status: 500 }
    );
  }
}
