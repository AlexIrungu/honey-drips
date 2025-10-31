export const contactEmailTemplate = (data) => {
  const { name, email, phone, subject, message } = data;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  return {
    subject: `New Contact Form Submission: ${subject || 'General Inquiry'}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
          }
          .email-container {
            background-color: #ffffff;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }
          .header {
            background-color: #F4A23F;
            color: white;
            padding: 30px;
            text-align: center;
          }
          .logo {
            max-width: 120px;
            height: auto;
            margin-bottom: 15px;
          }
          .header h1 {
            margin: 0;
            font-size: 28px;
          }
          .header p {
            margin: 5px 0 0 0;
            opacity: 0.95;
          }
          .content {
            background-color: #ffffff;
            padding: 30px;
          }
          .detail-row {
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 1px solid #f0f0f0;
          }
          .detail-row:last-child {
            border-bottom: none;
          }
          .label {
            font-weight: bold;
            color: #F4A23F;
            display: inline-block;
            width: 120px;
          }
          .value {
            color: #3A3A3A;
          }
          .message-box {
            background-color: #fafaf8;
            padding: 20px;
            border-left: 4px solid #F4A23F;
            margin-top: 20px;
            border-radius: 5px;
          }
          .footer {
            text-align: center;
            padding: 20px;
            color: #666;
            font-size: 12px;
            background-color: #fafaf8;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <img src="${siteUrl}/logo-transparent.png" alt="Honey Drips Hotel" class="logo">
            <h1>📧 New Contact Form Submission</h1>
            <p>Honey Drips Hotel</p>
          </div>
          
          <div class="content">
            <h2 style="color: #3A3A3A; margin-top: 0;">Contact Details</h2>
            
            <div class="detail-row">
              <span class="label">Name:</span>
              <span class="value">${name}</span>
            </div>
            
            <div class="detail-row">
              <span class="label">Email:</span>
              <span class="value">${email}</span>
            </div>
            
            <div class="detail-row">
              <span class="label">Phone:</span>
              <span class="value">${phone || 'Not provided'}</span>
            </div>
            
            ${subject ? `
            <div class="detail-row">
              <span class="label">Subject:</span>
              <span class="value">${subject}</span>
            </div>
            ` : ''}
            
            <div class="message-box">
              <strong>Message:</strong><br><br>
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div class="footer">
            <p>This is an automated message from Honey Drips Hotel contact form.</p>
            <p>Mama Ngina Street, Thika | +254 715 757 458</p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
${subject ? `Subject: ${subject}\n` : ''}

Message:
${message}

---
Honey Drips Hotel
Mama Ngina Street, Thika
+254 715 757 458
    `,
  };
};

export const contactConfirmationTemplate = (data) => {
  const { name } = data;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  return {
    subject: 'Thank you for contacting Honey Drips Hotel',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
          }
          .email-container {
            background-color: #ffffff;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }
          .header {
            background-color: #F4A23F;
            color: white;
            padding: 30px;
            text-align: center;
          }
          .logo {
            max-width: 120px;
            height: auto;
            margin-bottom: 15px;
          }
          .header h1 {
            margin: 10px 0;
            font-size: 28px;
          }
          .content {
            background-color: #ffffff;
            padding: 30px;
          }
          .contact-info {
            background-color: #f9f9f9;
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
          }
          .footer {
            text-align: center;
            padding: 20px;
            background-color: #fafaf8;
            color: #666;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <img src="${siteUrl}/logo-transparent.png" alt="Honey Drips Hotel" class="logo">
            <h1>🍯 Thank You, ${name}!</h1>
            <p>We've received your message</p>
          </div>
          
          <div class="content">
            <p>Dear ${name},</p>
            
            <p>Thank you for reaching out to Honey Drips Hotel. We have received your message and our team will get back to you as soon as possible, typically within 24 hours.</p>
            
            <div class="contact-info">
              <strong>If you have an urgent inquiry, please contact us directly:</strong><br><br>
              📞 +254 715 757 458<br>
              📧 honeydrips@sparq.co.ke<br>
              📍 Mama Ngina Street, Thika
            </div>
            
            <p>We look forward to serving you!</p>
            
            <p>Warm regards,<br>
            <strong>The Honey Drips Hotel Team</strong></p>
          </div>
          
          <div class="footer">
            <p>© 2025 Honey Drips Hotel. All rights reserved.</p>
            <p>Mama Ngina Street, Thika | +254 715 757 458</p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
Thank You, ${name}!

We've received your message.

Thank you for reaching out to Honey Drips Hotel. We have received your message and our team will get back to you as soon as possible.

Contact us: +254 715 757 458

Warm regards,
The Honey Drips Hotel Team
    `,
  };
};