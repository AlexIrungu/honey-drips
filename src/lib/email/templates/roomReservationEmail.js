export const roomReservationEmailTemplate = (data) => {
  const { name, phone, email, checkIn, checkOut, guests, roomType, roomPrice, nights, totalPrice, specialRequests } = data;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  return {
    subject: `New Room Reservation - ${roomType} by ${name}`,
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
          .section {
            margin-bottom: 30px;
          }
          .section-title {
            font-size: 20px;
            font-weight: bold;
            color: #F4A23F;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 2px solid #F4A23F;
          }
          .detail-row {
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid #f0f0f0;
          }
          .detail-row:last-child {
            border-bottom: none;
          }
          .label {
            font-weight: bold;
            color: #666;
            display: inline-block;
            width: 150px;
          }
          .value {
            color: #3A3A3A;
          }
          .price-summary {
            background-color: #fafaf8;
            padding: 20px;
            border-radius: 5px;
            border-left: 4px solid #F4A23F;
          }
          .total-row {
            font-size: 18px;
            font-weight: bold;
            padding-top: 15px;
            margin-top: 15px;
            border-top: 2px solid #F4A23F;
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
            <h1>🏨 New Room Reservation</h1>
            <p>Honey Drips Hotel</p>
          </div>
          
          <div class="content">
            <div class="section">
              <h2 class="section-title">Guest Information</h2>
              
              <div class="detail-row">
                <span class="label">Guest Name:</span>
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
                <span class="label">Number of Guests:</span>
                <span class="value">${guests} ${parseInt(guests) === 1 ? 'guest' : 'guests'}</span>
              </div>
            </div>

            <div class="section">
              <h2 class="section-title">Reservation Details</h2>
              
              <div class="detail-row">
                <span class="label">Room Type:</span>
                <span class="value">${roomType}</span>
              </div>
              
              <div class="detail-row">
                <span class="label">Check-in Date:</span>
                <span class="value">${new Date(checkIn).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              
              <div class="detail-row">
                <span class="label">Check-out Date:</span>
                <span class="value">${new Date(checkOut).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              
              <div class="detail-row">
                <span class="label">Duration:</span>
                <span class="value">${nights} night${nights !== 1 ? 's' : ''}</span>
              </div>
            </div>

            <div class="section">
              <h2 class="section-title">Price Summary</h2>
              
              <div class="price-summary">
                <div class="detail-row">
                  <span class="label">Room Rate:</span>
                  <span class="value">Ksh.${roomPrice.toLocaleString()} per night</span>
                </div>
                
                <div class="detail-row">
                  <span class="label">Number of Nights:</span>
                  <span class="value">${nights}</span>
                </div>
                
                <div class="total-row">
                  <span class="label">Total Amount:</span>
                  <span class="value" style="color: #F4A23F;">Ksh.${totalPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            ${specialRequests ? `
            <div class="section">
              <h2 class="section-title">Special Requests</h2>
              <div class="message-box">
                ${specialRequests.replace(/\n/g, '<br>')}
              </div>
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
New Room Reservation

GUEST INFORMATION
Name: ${name}
Phone: ${phone}
${email ? `Email: ${email}\n` : ''}
Number of Guests: ${guests}

RESERVATION DETAILS
Room Type: ${roomType}
Check-in: ${checkIn}
Check-out: ${checkOut}
Duration: ${nights} night${nights !== 1 ? 's' : ''}

PRICE SUMMARY
Room Rate: Ksh.${roomPrice.toLocaleString()} per night
Nights: ${nights}
Total: Ksh.${totalPrice.toLocaleString()}

${specialRequests ? `\nSPECIAL REQUESTS:\n${specialRequests}` : ''}

---
Honey Drips Hotel
Mama Ngina Street, Thika
+254 715 757 458
    `,
  };
};

export const roomReservationConfirmationTemplate = (data) => {
  const { name, checkIn, checkOut, roomType, nights, totalPrice } = data;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  return {
    subject: 'Room Reservation Confirmation - Honey Drips Hotel',
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
            <p>Your room reservation has been received</p>
          </div>
          
          <div class="content">
            <p>Dear ${name},</p>
            
            <p>Thank you for choosing Honey Drips Hotel. We have received your room reservation and will confirm it shortly.</p>
            
            <div class="highlight">
              <strong>Your Reservation Details:</strong><br><br>
              🏨 Room Type: ${roomType}<br>
              📅 Check-in: ${new Date(checkIn).toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}<br>
              📅 Check-out: ${new Date(checkOut).toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}<br>
              🌙 Duration: ${nights} night${nights !== 1 ? 's' : ''}<br>
              💰 Total: Ksh.${totalPrice.toLocaleString()}
            </div>
            
            <p>Our team will contact you shortly to confirm your reservation and discuss payment arrangements.</p>
            
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

Your room reservation has been received.

RESERVATION DETAILS:
Room Type: ${roomType}
Check-in: ${checkIn}
Check-out: ${checkOut}
Duration: ${nights} night${nights !== 1 ? 's' : ''}
Total: Ksh.${totalPrice.toLocaleString()}

Our team will contact you shortly to confirm your reservation.

Contact us: +254 715 757 458

Warm regards,
The Honey Drips Hotel Team
    `,
  };
};