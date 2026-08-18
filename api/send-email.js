import nodemailer from 'nodemailer';
import { generateClientEnquiryEmail, generateAdminNotificationEmail } from '../server/emailTemplates.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, phone, service, budget, message, timeline } = req.body;

  if (!email || !name) {
    return res.status(400).json({ error: 'Name and Email are required.' });
  }

  const senderEmail = process.env.BASE_SYSTEM_NODEMAILER_EMAIL_ADDRESS;
  const senderPassword = process.env.BASE_SYSTEM_NODEMAILER_EMAIL_PASSWORD;
  const adminRecipient = process.env.NOTIFICATION_RECIPIENT || senderEmail;
  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = parseInt(process.env.SMTP_PORT || '465');

  if (!senderEmail || !senderPassword) {
    return res.status(500).json({ 
      error: 'SMTP email credentials not configured in environment variables.' 
    });
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465 || process.env.SMTP_SECURE === 'true',
    auth: {
      user: senderEmail,
      pass: senderPassword,
    },
  });

  try {
    const clientMailOptions = {
      from: `"Tcongs Infotech" <${senderEmail}>`,
      to: email,
      subject: `Inquiry Received: ${service || 'Digital Engineering'} — Tcongs Infotech`,
      html: generateClientEnquiryEmail({ name, email, phone, service, budget, message, timeline })
    };

    const adminMailOptions = {
      from: `"Tcongs Website Engine" <${senderEmail}>`,
      to: adminRecipient,
      subject: `🚨 New Lead: ${name} (${service || 'General Inquiry'} - ${budget || 'Custom'})`,
      html: generateAdminNotificationEmail({ name, email, phone, service, budget, message, timeline })
    };

    await Promise.all([
      transporter.sendMail(clientMailOptions),
      transporter.sendMail(adminMailOptions)
    ]);

    return res.status(200).json({
      success: true,
      message: 'Emails dispatched successfully!'
    });
  } catch (error) {
    console.error('Serverless email error:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Failed to dispatch email'
    });
  }
}
