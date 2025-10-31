import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email/nodemailer';
import { contactEmailTemplate, contactConfirmationTemplate } from '@/lib/email/templates/contactEmail';
import { validateContactForm, sanitizeString } from '@/lib/utils/validation';

export async function POST(request) {
  try {
    const rawData = await request.json();

    // Sanitize inputs
    const data = {
      name: sanitizeString(rawData.name || ''),
      email: sanitizeString(rawData.email || ''),
      phone: sanitizeString(rawData.phone || ''),
      subject: sanitizeString(rawData.subject || ''),
      message: sanitizeString(rawData.message || ''),
    };

    // Validate data
    const validation = validateContactForm(data);
    if (!validation.isValid) {
      return NextResponse.json(
        { 
          error: 'Validation failed', 
          errors: validation.errors 
        },
        { status: 400 }
      );
    }

    // Send email to hotel
    const hotelEmail = contactEmailTemplate(data);
    const hotelResult = await sendEmail({
      subject: hotelEmail.subject,
      html: hotelEmail.html,
      text: hotelEmail.text,
    });

    if (!hotelResult.success) {
      throw new Error('Failed to send notification email');
    }

    // Send confirmation email to customer
    const customerEmail = contactConfirmationTemplate(data);
    await sendEmail({
      to: data.email,
      subject: customerEmail.subject,
      html: customerEmail.html,
      text: customerEmail.text,
    });

    return NextResponse.json(
      { 
        message: 'Message sent successfully',
        success: true 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send message',
        message: error.message 
      },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to check if service is running
export async function GET() {
  return NextResponse.json(
    { 
      status: 'Contact API is running',
      endpoints: {
        POST: 'Submit contact form'
      }
    },
    { status: 200 }
  );
}