import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { generateClientEnquiryEmail, generateAdminNotificationEmail } from './emailTemplates.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9002;

app.use(cors());
app.use(express.json());

// Configure Nodemailer Transporter strictly with environment variables (No hardcoded credentials)
const senderEmail = process.env.BASE_SYSTEM_NODEMAILER_EMAIL_ADDRESS;
const senderPassword = process.env.BASE_SYSTEM_NODEMAILER_EMAIL_PASSWORD;
const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
const smtpPort = parseInt(process.env.SMTP_PORT || '465');
const adminRecipient = process.env.NOTIFICATION_RECIPIENT || senderEmail;

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: process.env.SMTP_SECURE === 'true' || smtpPort === 465,
  auth: {
    user: senderEmail,
    pass: senderPassword,
  },
});

// Verify SMTP Connection on Startup
if (senderEmail && senderPassword) {
  transporter.verify((error, success) => {
    if (error) {
      console.warn('⚠️ SMTP Transporter Connection Warning:', error.message);
    } else {
      console.log('✅ Nodemailer Transporter Ready & Authenticated via Environment Variables!');
    }
  });
} else {
  console.warn('⚠️ SMTP Credentials missing in environment variables. Please check your .env configuration.');
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    emailConfigured: !!(senderEmail && senderPassword),
    timestamp: new Date().toISOString()
  });
});

// Endpoint: Send Inquiry Confirmation & Notification Emails
app.post('/api/send-email', async (req, res) => {
  const { name, email, phone, service, budget, message, timeline } = req.body;

  if (!email || !name) {
    return res.status(400).json({ error: 'Name and Email are required fields.' });
  }

  if (!senderEmail || !senderPassword) {
    return res.status(500).json({ 
      error: 'SMTP email credentials not configured in environment variables.' 
    });
  }

  try {
    // 1. Send Branded Client Confirmation Email
    const clientMailOptions = {
      from: `"Tcongs Infotech" <${senderEmail}>`,
      to: email,
      subject: `Inquiry Received: ${service || 'Digital Engineering'} — Tcongs Infotech`,
      html: generateClientEnquiryEmail({ name, email, phone, service, budget, message, timeline })
    };

    // 2. Send Admin Lead Alert Email
    const adminMailOptions = {
      from: `"Tcongs Website Engine" <${senderEmail}>`,
      to: adminRecipient,
      subject: `🚨 New Lead: ${name} (${service || 'General Inquiry'} - ${budget || 'Custom'})`,
      html: generateAdminNotificationEmail({ name, email, phone, service, budget, message, timeline })
    };

    // Dispatch emails concurrently
    const [clientResult, adminResult] = await Promise.all([
      transporter.sendMail(clientMailOptions),
      transporter.sendMail(adminMailOptions)
    ]);

    console.log(`📨 Email sent to ${email} (MessageID: ${clientResult.messageId})`);

    return res.status(200).json({
      success: true,
      message: 'Inquiry confirmation and admin alert sent successfully!',
      clientMessageId: clientResult.messageId
    });

  } catch (error) {
    console.error('❌ Error sending email via Nodemailer:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Failed to dispatch emails via SMTP.'
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Tcongs Email API Server listening on http://localhost:${PORT}`);
});
