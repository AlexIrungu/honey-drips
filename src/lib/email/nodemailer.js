// CORRECT: Import nodemailer properly
import nodemailer from 'nodemailer';

// Add at the top, after imports
console.log('🔍 EMAIL_USER:', process.env.EMAIL_USER);
console.log('🔍 EMAIL_PASS exists:', !!process.env.EMAIL_PASS);
console.log('🔍 EMAIL_PASS length:', process.env.EMAIL_PASS?.length);

// Create transporter instance once
const transporter = nodemailer.createTransport({
  service: 'gmail', // Using 'service' instead of host/port
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify connection
transporter.verify(function(error, success) {
  if (error) {
    console.error('❌ Email transporter error:', error);
  } else {
    console.log('✅ Email server is ready to send messages');
  }
});

export const sendEmail = async ({ to, subject, html, text }) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: to || process.env.EMAIL_TO,
      subject,
      html,
      text,
    };

    console.log('📧 Sending email to:', mailOptions.to);
    console.log('📧 Subject:', mailOptions.subject);

    const info = await transporter.sendMail(mailOptions);
    
    console.log('✅ Email sent successfully:', info.messageId);
    return { 
      success: true, 
      messageId: info.messageId 
    };
    
  } catch (error) {
    console.error('❌ Email error:', error);
    return { 
      success: false, 
      error: error.message 
    };
  }
};

export default transporter;