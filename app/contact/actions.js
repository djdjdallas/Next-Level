"use server";

import { Resend } from "resend";

function escapeHtml(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendQuoteRequest(_prevState, formData) {
  // Honeypot — bots fill this, humans don't. Silently succeed to avoid tipping them off.
  if (formData.get("website")) {
    return { status: "success" };
  }

  const name = (formData.get("name") || "").toString().trim();
  const phone = (formData.get("phone") || "").toString().trim();
  const email = (formData.get("email") || "").toString().trim();
  const service = (formData.get("service") || "").toString().trim();
  const message = (formData.get("message") || "").toString().trim();

  if (!name || !phone) {
    return {
      status: "error",
      error: "Please provide your name and phone number.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL;
  const fromEmail = process.env.FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.error("Missing Resend env vars (RESEND_API_KEY / CONTACT_EMAIL / FROM_EMAIL)");
    return {
      status: "error",
      error:
        "Our form isn't configured yet. Please call us at (818) 430-9508 and we'll take care of you.",
    };
  }

  const subject = `New Quote Request: ${service || "General Inquiry"} — ${name}`;

  const textBody = [
    `New quote request from ceonelectric.com`,
    ``,
    `Name:    ${name}`,
    `Phone:   ${phone}`,
    `Email:   ${email || "(not provided)"}`,
    `Service: ${service || "(not specified)"}`,
    ``,
    `Message:`,
    message || "(no message)",
    ``,
    `— Reply to this email to respond directly to the customer.`,
  ].join("\n");

  const htmlBody = `
    <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #1a2744; padding: 24px; border-radius: 12px 12px 0 0;">
        <h2 style="color: #D4AF37; margin: 0; font-size: 20px;">New Quote Request</h2>
        <p style="color: #ffffff; margin: 4px 0 0; font-size: 14px; opacity: 0.8;">
          From ceonelectric.com contact form
        </p>
      </div>
      <div style="background: #ffffff; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 100px; color: #1a2744;">Name:</td>
            <td style="padding: 8px 0; color: #1a2744;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #1a2744;">Phone:</td>
            <td style="padding: 8px 0;"><a href="tel:${escapeHtml(phone)}" style="color: #D4AF37;">${escapeHtml(phone)}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #1a2744;">Email:</td>
            <td style="padding: 8px 0;">${email ? `<a href="mailto:${escapeHtml(email)}" style="color: #D4AF37;">${escapeHtml(email)}</a>` : '<span style="color: #6b7280;">(not provided)</span>'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #1a2744;">Service:</td>
            <td style="padding: 8px 0; color: #1a2744;">${escapeHtml(service || "(not specified)")}</td>
          </tr>
        </table>
        <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e5e7eb;">
          <div style="font-weight: bold; color: #1a2744; margin-bottom: 8px;">Message:</div>
          <div style="color: #1a2744; white-space: pre-wrap;">${escapeHtml(message || "(no message)")}</div>
        </div>
        ${
          email
            ? `<p style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e7eb; font-size: 13px; color: #6b7280;">
                Reply directly to this email to respond to the customer.
              </p>`
            : ""
        }
      </div>
    </div>
  `;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `Ceon Electric Website <${fromEmail}>`,
      to: [toEmail],
      replyTo: email || undefined,
      subject,
      text: textBody,
      html: htmlBody,
    });

    if (error) {
      console.error("Resend API error:", error);
      return {
        status: "error",
        error:
          "We couldn't send your request. Please call us at (818) 430-9508.",
      };
    }

    return {
      status: "success",
      message: "Thanks! We'll be in touch within one business hour.",
    };
  } catch (err) {
    console.error("Quote request failed:", err);
    return {
      status: "error",
      error:
        "Something went wrong. Please call us at (818) 430-9508 and we'll take care of you.",
    };
  }
}
