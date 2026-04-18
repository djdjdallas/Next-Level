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

  const receivedAt = new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  });

  const telHref = `tel:${phone.replace(/[^\d+]/g, "")}`;

  const textBody = [
    `New quote request from ceonelectric.com`,
    `Received ${receivedAt}`,
    ``,
    `Call ${name}: ${phone}`,
    email ? `Email ${name}: ${email}` : `Email: (not provided)`,
    `Service: ${service || "(not specified)"}`,
    ``,
    `Message:`,
    message || "(no message)",
    ``,
    email
      ? `— Reply to this email to respond directly to the customer.`
      : `— No email provided; reach out by phone.`,
  ].join("\n");

  const htmlBody = `
    <div style="background: #f5f6f8; padding: 24px 12px; font-family: -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(16, 24, 40, 0.08);">
        <tr>
          <td style="background: #1a2744; padding: 20px 28px;">
            <div style="font-size: 12px; letter-spacing: 2px; color: #D4AF37; font-weight: 700; text-transform: uppercase;">Ceon Electric</div>
            <div style="font-size: 11px; color: #ffffff; opacity: 0.65; margin-top: 2px;">New quote request · ${escapeHtml(receivedAt)}</div>
          </td>
        </tr>
        <tr>
          <td style="padding: 28px 28px 8px;">
            <div style="font-size: 13px; color: #6b7280; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">From</div>
            <div style="font-size: 26px; color: #1a2744; font-weight: 700; margin-top: 4px; line-height: 1.2;">${escapeHtml(name)}</div>
            ${
              service
                ? `<div style="display: inline-block; margin-top: 10px; padding: 4px 12px; background: #fdf6e3; color: #8a6d1f; border: 1px solid #e8d9a6; border-radius: 999px; font-size: 12px; font-weight: 600;">${escapeHtml(service)}</div>`
                : ""
            }
          </td>
        </tr>
        <tr>
          <td style="padding: 20px 28px 8px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding-bottom: 10px;">
                  <a href="${escapeHtml(telHref)}" style="display: block; background: #D4AF37; color: #1a2744; text-decoration: none; font-weight: 700; font-size: 16px; text-align: center; padding: 14px 20px; border-radius: 8px;">
                    📞 Call ${escapeHtml(name)} — ${escapeHtml(phone)}
                  </a>
                </td>
              </tr>
              ${
                email
                  ? `<tr>
                      <td>
                        <a href="mailto:${escapeHtml(email)}?subject=${encodeURIComponent(`Re: Your quote request`)}" style="display: block; background: #ffffff; color: #1a2744; text-decoration: none; font-weight: 600; font-size: 15px; text-align: center; padding: 12px 20px; border: 1.5px solid #1a2744; border-radius: 8px;">
                          ✉️ Reply to ${escapeHtml(email)}
                        </a>
                      </td>
                    </tr>`
                  : ""
              }
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding: 16px 28px 8px;">
            <div style="font-size: 13px; color: #6b7280; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; margin-bottom: 8px;">Message</div>
            <div style="background: #f9fafb; border-left: 3px solid #D4AF37; padding: 14px 16px; color: #1a2744; font-size: 15px; line-height: 1.55; white-space: pre-wrap; border-radius: 0 6px 6px 0;">${escapeHtml(message || "(no message provided)")}</div>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 28px 24px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size: 13px; color: #6b7280;">
              <tr>
                <td style="padding: 6px 0; width: 80px; color: #6b7280;">Phone</td>
                <td style="padding: 6px 0; color: #1a2744; font-weight: 500;">${escapeHtml(phone)}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #6b7280;">Email</td>
                <td style="padding: 6px 0; color: #1a2744; font-weight: 500;">${email ? escapeHtml(email) : '<span style="color: #9ca3af; font-weight: 400;">not provided</span>'}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #6b7280;">Service</td>
                <td style="padding: 6px 0; color: #1a2744; font-weight: 500;">${escapeHtml(service || '(not specified)')}</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="background: #f9fafb; padding: 14px 28px; border-top: 1px solid #e5e7eb;">
            <div style="font-size: 12px; color: #6b7280; text-align: center;">
              ${email ? "Reply to this email to respond directly to the customer." : "No customer email — reach out by phone."}
            </div>
          </td>
        </tr>
      </table>
      <div style="max-width: 600px; margin: 12px auto 0; text-align: center; font-size: 11px; color: #9ca3af;">
        Sent from the ceonelectric.com contact form
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

    if (email) {
      const firstName = name.split(/\s+/)[0] || name;
      const confirmSubject = `We got your request — Ceon Electric`;
      const confirmText = [
        `Hi ${firstName},`,
        ``,
        `Thanks for reaching out to Ceon Electric. We received your request and a member of our team will call you within one business hour during business hours. Outside of business hours, we'll reach out first thing the next business morning.`,
        ``,
        `If it's an emergency and you need help now, call us any time at (818) 430-9508 — we answer 24/7.`,
        ``,
        `Hours of Operation`,
        `  Monday – Friday: 7:00 AM – 6:00 PM`,
        `  Saturday:        8:00 AM – 4:00 PM`,
        `  Sunday:          Emergency Only`,
        ``,
        `Here's a copy of what you sent us:`,
        ``,
        `  Name:    ${name}`,
        `  Phone:   ${phone}`,
        `  Email:   ${email}`,
        `  Service: ${service || "(not specified)"}`,
        ``,
        `  Message:`,
        `  ${message || "(no message)"}`,
        ``,
        `— The Ceon Electric Team`,
        `(818) 430-9508 (cell, 24/7) · (323) 963-2089 (office) · service@ceonelectric.com`,
        `Licensed & Insured · C10 #1141112`,
      ].join("\n");

      const confirmHtml = `
        <div style="background: #f5f6f8; padding: 24px 12px; font-family: -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(16, 24, 40, 0.08);">
            <tr>
              <td style="background: #1a2744; padding: 24px 28px; text-align: center;">
                <div style="font-size: 13px; letter-spacing: 3px; color: #D4AF37; font-weight: 700; text-transform: uppercase;">Ceon Electric</div>
                <div style="font-size: 11px; color: #ffffff; opacity: 0.6; margin-top: 4px; letter-spacing: 1px;">Licensed · Insured · C10 #1141112</div>
              </td>
            </tr>
            <tr>
              <td style="padding: 32px 28px 8px;">
                <div style="font-size: 22px; color: #1a2744; font-weight: 700; line-height: 1.3;">Thanks, ${escapeHtml(firstName)} — we got your request.</div>
                <div style="font-size: 15px; color: #4b5563; line-height: 1.6; margin-top: 12px;">
                  A member of our team will call you within <strong style="color: #1a2744;">one business hour</strong> during business hours. Outside of those hours, we'll reach out first thing the next business morning.
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding: 16px 28px 8px;">
                <div style="background: #fdf6e3; border: 1px solid #e8d9a6; border-radius: 10px; padding: 16px 18px;">
                  <div style="font-size: 13px; font-weight: 700; color: #8a6d1f; text-transform: uppercase; letter-spacing: 1px;">Need help now?</div>
                  <div style="font-size: 14px; color: #1a2744; margin-top: 4px; line-height: 1.5;">
                    For electrical emergencies, call us any time at
                    <a href="tel:+18184309508" style="color: #1a2744; font-weight: 700; text-decoration: none;">(818) 430-9508</a>
                    — we answer 24/7.
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px 28px 8px;">
                <div style="font-size: 13px; color: #6b7280; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; margin-bottom: 10px;">Hours of Operation</div>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size: 14px;">
                  <tr>
                    <td style="padding: 5px 0; color: #6b7280;">Monday – Friday</td>
                    <td style="padding: 5px 0; color: #1a2744; font-weight: 600; text-align: right;">7:00 AM – 6:00 PM</td>
                  </tr>
                  <tr>
                    <td style="padding: 5px 0; color: #6b7280;">Saturday</td>
                    <td style="padding: 5px 0; color: #1a2744; font-weight: 600; text-align: right;">8:00 AM – 4:00 PM</td>
                  </tr>
                  <tr>
                    <td style="padding: 5px 0; color: #6b7280;">Sunday</td>
                    <td style="padding: 5px 0; color: #1a2744; font-weight: 600; text-align: right;">Emergency Only</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px 28px 8px;">
                <div style="font-size: 13px; color: #6b7280; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; margin-bottom: 10px;">Your Request</div>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size: 14px; background: #f9fafb; border-radius: 8px;">
                  <tr>
                    <td style="padding: 10px 14px; width: 80px; color: #6b7280; border-bottom: 1px solid #eef0f3;">Name</td>
                    <td style="padding: 10px 14px; color: #1a2744; font-weight: 500; border-bottom: 1px solid #eef0f3;">${escapeHtml(name)}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 14px; color: #6b7280; border-bottom: 1px solid #eef0f3;">Phone</td>
                    <td style="padding: 10px 14px; color: #1a2744; font-weight: 500; border-bottom: 1px solid #eef0f3;">${escapeHtml(phone)}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 14px; color: #6b7280; border-bottom: 1px solid #eef0f3;">Email</td>
                    <td style="padding: 10px 14px; color: #1a2744; font-weight: 500; border-bottom: 1px solid #eef0f3;">${escapeHtml(email)}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 14px; color: #6b7280;${message ? " border-bottom: 1px solid #eef0f3;" : ""}">Service</td>
                    <td style="padding: 10px 14px; color: #1a2744; font-weight: 500;${message ? " border-bottom: 1px solid #eef0f3;" : ""}">${escapeHtml(service || "(not specified)")}</td>
                  </tr>
                  ${
                    message
                      ? `<tr>
                          <td colspan="2" style="padding: 10px 14px;">
                            <div style="color: #6b7280; font-size: 13px; margin-bottom: 4px;">Message</div>
                            <div style="color: #1a2744; white-space: pre-wrap; line-height: 1.55;">${escapeHtml(message)}</div>
                          </td>
                        </tr>`
                      : ""
                  }
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px 28px 28px;">
                <div style="font-size: 14px; color: #1a2744; line-height: 1.6;">
                  Thanks again,<br>
                  <strong>The Ceon Electric Team</strong>
                </div>
              </td>
            </tr>
            <tr>
              <td style="background: #f9fafb; padding: 18px 28px; border-top: 1px solid #e5e7eb; text-align: center;">
                <div style="font-size: 13px; color: #4b5563;">
                  <a href="tel:+18184309508" style="color: #1a2744; font-weight: 600; text-decoration: none;">(818) 430-9508</a>
                  <span style="color: #9ca3af;"> cell</span>
                  &nbsp;·&nbsp;
                  <a href="tel:+13239632089" style="color: #1a2744; font-weight: 600; text-decoration: none;">(323) 963-2089</a>
                  <span style="color: #9ca3af;"> office</span>
                  &nbsp;·&nbsp;
                  <a href="mailto:service@ceonelectric.com" style="color: #1a2744; font-weight: 600; text-decoration: none;">service@ceonelectric.com</a>
                </div>
                <div style="font-size: 11px; color: #9ca3af; margin-top: 6px;">Licensed &amp; Insured · C10 #1141112</div>
              </td>
            </tr>
          </table>
        </div>
      `;

      try {
        const { error: confirmErr } = await resend.emails.send({
          from: `Ceon Electric <service@ceonelectric.com>`,
          to: [email],
          replyTo: "service@ceonelectric.com",
          subject: confirmSubject,
          text: confirmText,
          html: confirmHtml,
        });
        if (confirmErr) {
          console.error("Customer confirmation email failed:", confirmErr);
        }
      } catch (confirmEx) {
        console.error("Customer confirmation email threw:", confirmEx);
      }
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
