export const reservationEmailTemplate = (data) => {
  const { name, phone, email, people, time, date, message } = data;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  return {
    subject: `New Reservation Request from ${name}`,
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
            width: 150px;
          }
          .value {
            color: #3A3A3A;
          }
          .message-box {
            background-color: #fafaf8;
            padding: 15px;
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
            <h1>🍯 New Reservation Request</h1>
            <p>Honey Drips Hotel</p>
          </div>
          
          <div class="content">
            <h2 style="color: #3A3A3A; margin-top: 0;">Reservation Details</h2>
            
            <div class="detail-row">
              <span class="label">Customer Name:</span>
              <span class="value">${name}</span>
            </div>
            
            <div class="detail-row">
              <span class="label">Phone Number:</span>
              <span class="value">${phone}</span>
            </div>
            
            ${email ? `
            <div class="detail-row">
              <span class="label">Email:</span>
              <span class="value">${email}</span>
            </div>
            ` : ''}
            
            <div class="detail-row">
              <span class="label">Number of People:</span>
              <span class="value">${people} ${parseInt(people) === 1 ? 'person' : 'people'}</span>
            </div>
            
            <div class="detail-row">
              <span class="label">Date:</span>
              <span class="value">${new Date(date).toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            
            <div class="detail-row">
              <span class="label">Time:</span>
              <span class="value">${time}</span>
            </div>
            
            ${message ? `
            <div class="message-box">
              <strong>Special Requests:</strong><br>
              ${message}
            </div>
            ` : ''}
          </div>
          
          <div class="footer">
            <p>This is an automated message from Honey Drips Hotel reservation system.</p>
            <p>Mama Ngina Street, Thika | +254 715 757 458</p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
New Reservation Request

Customer Name: ${name}
Phone: ${phone}
${email ? `Email: ${email}\n` : ''}
Number of People: ${people}
Date: ${date}
Time: ${time}
${message ? `\nSpecial Requests:\n${message}` : ''}

---
Honey Drips Hotel
Mama Ngina Street, Thika
+254 715 757 458
    `,
  };
};

export const customerConfirmationTemplate = (data) => {
  const { name, date, time, people } = data;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  return {
    subject: 'Reservation Confirmation - Honey Drips Hotel',
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
          .highlight {
            background-color: #fafaf8;
            padding: 20px;
            border-radius: 5px;
            margin: 20px 0;
            border-left: 4px solid #F4A23F;
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
            <p>Your reservation has been received</p>
          </div>
          
          <div class="content">
            <p>Dear ${name},</p>
            
            <p>Thank you for choosing Honey Drips Hotel. We have received your reservation request and will confirm it shortly.</p>
            
            <div class="highlight">
              <strong>Your Reservation Details:</strong><br><br>
              📅 Date: ${new Date(date).toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}<br>
              🕐 Time: ${time}<br>
              👥 Number of People: ${people}
            </div>
            
            <p>Our team will contact you shortly to confirm your reservation.</p>
            
            <div class="contact-info">
              <strong>If you have any questions, please contact us:</strong><br><br>
              📞 +254 715 757 458<br>
              📧 honeydrips@sparq.co.ke<br>
              📍 Mama Ngina Street, Thika
            </div>
            
            <p>We look forward to welcoming you!</p>
            
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

Your reservation has been received.

Reservation Details:
Date: ${date}
Time: ${time}
Number of People: ${people}

Our team will contact you shortly to confirm your reservation.

Contact us: +254 715 757 458

Warm regards,
The Honey Drips Hotel Team
    `,
  };
};