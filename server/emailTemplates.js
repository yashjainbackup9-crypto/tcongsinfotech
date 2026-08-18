/**
 * Professional HTML Email Templates for Tcongs Infotech Inquiries
 */

export function generateClientEnquiryEmail({ name, email, phone, service, budget, message, timeline }) {
  const currentYear = new Date().getFullYear();
  const submissionDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Inquiry with Tcongs Infotech</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background-color: #0B0B0E;
      color: #E2E8F0;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
    }
    .wrapper {
      width: 100%;
      background-color: #050507;
      padding: 40px 15px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #121218;
      border-radius: 20px;
      border: 1px solid #262635;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0,0,0,0.5);
    }
    .header {
      background: linear-gradient(135deg, #181824 0%, #0D0D14 100%);
      padding: 35px 30px;
      text-align: center;
      border-bottom: 1px solid #2A2A3C;
      position: relative;
    }
    .logo-badge {
      display: inline-block;
      width: 48px;
      height: 48px;
      line-height: 48px;
      background: linear-gradient(135deg, #E51A4B 0%, #FF4D79 100%);
      border-radius: 14px;
      color: #FFFFFF;
      font-weight: 900;
      font-size: 24px;
      margin-bottom: 12px;
      box-shadow: 0 8px 20px rgba(229, 26, 75, 0.35);
    }
    .brand-title {
      font-size: 20px;
      font-weight: 800;
      color: #FFFFFF;
      margin: 0;
      letter-spacing: -0.5px;
    }
    .brand-sub {
      color: #94A3B8;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-top: 4px;
    }
    .content {
      padding: 35px 30px;
    }
    .greeting {
      font-size: 22px;
      font-weight: 700;
      color: #FFFFFF;
      margin: 0 0 16px 0;
    }
    .intro-text {
      font-size: 14px;
      line-height: 1.6;
      color: #CBD5E1;
      margin-bottom: 25px;
    }
    .summary-card {
      background-color: #1A1A24;
      border: 1px solid #2E2E42;
      border-radius: 14px;
      padding: 20px;
      margin-bottom: 28px;
    }
    .summary-title {
      font-size: 12px;
      font-weight: 800;
      color: #E51A4B;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      margin-bottom: 14px;
    }
    .summary-row {
      display: flex;
      justify-content: space-between;
      padding: 8px 0;
      border-bottom: 1px solid #28283A;
      font-size: 13px;
    }
    .summary-row:last-child {
      border-bottom: none;
    }
    .summary-label {
      color: #94A3B8;
      font-weight: 500;
    }
    .summary-value {
      color: #FFFFFF;
      font-weight: 600;
      text-align: right;
    }
    .message-box {
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px solid #28283A;
      font-size: 13px;
      color: #CBD5E1;
      line-height: 1.5;
    }
    .next-steps {
      background-color: rgba(229, 26, 75, 0.05);
      border: 1px solid rgba(229, 26, 75, 0.2);
      border-radius: 14px;
      padding: 20px;
      margin-bottom: 30px;
    }
    .next-steps h4 {
      font-size: 14px;
      color: #FFFFFF;
      margin: 0 0 12px 0;
      font-weight: 700;
    }
    .step-item {
      font-size: 13px;
      color: #94A3B8;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
    }
    .step-bullet {
      color: #E51A4B;
      font-weight: bold;
      margin-right: 8px;
    }
    .cta-container {
      text-align: center;
      margin: 30px 0 15px 0;
    }
    .cta-button {
      display: inline-block;
      background: linear-gradient(135deg, #E51A4B 0%, #D01540 100%);
      color: #FFFFFF !important;
      text-decoration: none;
      font-size: 14px;
      font-weight: 700;
      padding: 14px 34px;
      border-radius: 50px;
      box-shadow: 0 10px 25px rgba(229, 26, 75, 0.35);
    }
    .footer {
      background-color: #0D0D12;
      padding: 25px 30px;
      text-align: center;
      border-top: 1px solid #1E1E2C;
      font-size: 11px;
      color: #64748B;
      line-height: 1.6;
    }
    .footer a {
      color: #94A3B8;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      
      <!-- Header -->
      <div class="header">
        <div class="logo-badge">T</div>
        <h1 class="brand-title">TCONGS INFOTECH</h1>
        <div class="brand-sub">Smart Digital Engineering</div>
      </div>

      <!-- Main Content -->
      <div class="content">
        <h2 class="greeting">Hello ${name || 'there'},</h2>
        <p class="intro-text">
          Thank you for getting in touch with <strong>Tcongs Infotech</strong>. We have successfully received your project inquiry. Our technical architecture team is reviewing your requirements to prepare a tailored engineering roadmap.
        </p>

        <!-- Project Summary Card -->
        <div class="summary-card">
          <div class="summary-title">Inquiry Overview</div>
          <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #28283A;">
              <td style="padding: 8px 0; color: #94A3B8; font-size: 13px;">Selected Solution:</td>
              <td style="padding: 8px 0; color: #FFFFFF; font-size: 13px; font-weight: 600; text-align: right;">${service || 'Custom Engineering'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #28283A;">
              <td style="padding: 8px 0; color: #94A3B8; font-size: 13px;">Budget Scope:</td>
              <td style="padding: 8px 0; color: #E2EC07; font-size: 13px; font-weight: 700; text-align: right;">${budget || 'Custom Scope'}</td>
            </tr>
            ${phone ? `
            <tr style="border-bottom: 1px solid #28283A;">
              <td style="padding: 8px 0; color: #94A3B8; font-size: 13px;">Phone Contact:</td>
              <td style="padding: 8px 0; color: #FFFFFF; font-size: 13px; text-align: right;">${phone}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 8px 0; color: #94A3B8; font-size: 13px;">Submitted On:</td>
              <td style="padding: 8px 0; color: #94A3B8; font-size: 12px; text-align: right;">${submissionDate}</td>
            </tr>
          </table>

          ${message ? `
          <div class="message-box">
            <strong style="color: #FFFFFF;">Your Notes:</strong><br>
            "${message}"
          </div>
          ` : ''}
        </div>

        <!-- What Happens Next -->
        <div class="next-steps">
          <h4>🚀 What Happens Next (Within 24 Hours):</h4>
          <div class="step-item"><span class="step-bullet">✓</span> <strong>Technical Review:</strong> Senior architect evaluates stack feasibility.</div>
          <div class="step-item"><span class="step-bullet">✓</span> <strong>Milestone Proposal:</strong> Clear bi-weekly sprint estimates with zero hidden costs.</div>
          <div class="step-item"><span class="step-bullet">✓</span> <strong>Confidentiality:</strong> 100% mutual NDA & IP ownership protection guaranteed.</div>
        </div>

        <!-- CTA -->
        <div class="cta-container">
          <a href="https://tcongsinfotech.com" class="cta-button">
            Schedule 30-Min Discovery Call 📅
          </a>
        </div>
      </div>

      <!-- Footer -->
      <div class="footer">
        <p style="margin: 0 0 6px 0;">
          <strong>Tcongs Infotech</strong> • Mumbai Headquarters, Maharashtra, India<br>
          Serving Global Clients across USA, UAE, Canada & India
        </p>
        <p style="margin: 0;">
          Direct Email: <a href="mailto:info@tcongsinfotech.com">info@tcongsinfotech.com</a> | Website: <a href="https://tcongsinfotech.com">tcongsinfotech.com</a><br>
          © ${currentYear} Tcongs Infotech. All Rights Reserved.
        </p>
      </div>

    </div>
  </div>
</body>
</html>
  `;
}

export function generateAdminNotificationEmail({ name, email, phone, service, budget, message, timeline }) {
  const submissionDate = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Website Lead - Tcongs Infotech</title>
</head>
<body style="font-family: sans-serif; background-color: #f4f6f8; padding: 25px; color: #1e293b;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; padding: 30px; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <div style="border-left: 4px solid #E51A4B; padding-left: 15px; margin-bottom: 20px;">
      <h2 style="margin: 0; color: #0f172a; font-size: 20px;">🚨 New Client Inquiry Received</h2>
      <p style="margin: 4px 0 0 0; color: #64748b; font-size: 13px;">Tcongs Infotech Landing Page Lead Engine</p>
    </div>

    <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
      <tr style="background-color: #f8fafc;">
        <td style="font-weight: bold; width: 35%; border: 1px solid #e2e8f0;">Client Name:</td>
        <td style="border: 1px solid #e2e8f0;">${name}</td>
      </tr>
      <tr>
        <td style="font-weight: bold; border: 1px solid #e2e8f0;">Email:</td>
        <td style="border: 1px solid #e2e8f0;"><a href="mailto:${email}" style="color: #E51A4B; font-weight: bold;">${email}</a></td>
      </tr>
      <tr style="background-color: #f8fafc;">
        <td style="font-weight: bold; border: 1px solid #e2e8f0;">Phone / WhatsApp:</td>
        <td style="border: 1px solid #e2e8f0;">${phone || 'N/A'}</td>
      </tr>
      <tr>
        <td style="font-weight: bold; border: 1px solid #e2e8f0;">Service Needed:</td>
        <td style="border: 1px solid #e2e8f0; font-weight: 600;">${service}</td>
      </tr>
      <tr style="background-color: #f8fafc;">
        <td style="font-weight: bold; border: 1px solid #e2e8f0;">Budget Range:</td>
        <td style="border: 1px solid #e2e8f0; color: #059669; font-weight: bold;">${budget}</td>
      </tr>
      <tr>
        <td style="font-weight: bold; border: 1px solid #e2e8f0;">Date & Time (IST):</td>
        <td style="border: 1px solid #e2e8f0;">${submissionDate}</td>
      </tr>
    </table>

    <div style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; font-size: 13px; line-height: 1.5; margin-bottom: 20px;">
      <strong>Client Project Description / Scope:</strong><br>
      ${message || 'No additional notes provided.'}
    </div>

    <div style="text-align: center;">
      <a href="mailto:${email}?subject=RE: Your Tcongs Infotech Project Inquiry - ${encodeURIComponent(service)}" 
         style="display: inline-block; background-color: #E51A4B; color: #ffffff; text-decoration: none; font-weight: bold; font-size: 14px; padding: 12px 28px; border-radius: 6px;">
        Reply to Client Lead Directly →
      </a>
    </div>
  </div>
</body>
</html>
  `;
}
