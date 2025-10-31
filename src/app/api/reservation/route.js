import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email/nodemailer';
import { reservationEmailTemplate, customerConfirmationTemplate } from '@/lib/email/templates/reservationEmail';

export async function POST(request) {
  try {
    const data = await request.json();

    // Validate required fields
    const { name, phone, people, time, date } = data;
    if (!name || !phone || !people || !time || !date) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email to hotel
    const hotelEmail = reservationEmailTemplate(data);
    const hotelResult = await sendEmail({
      subject: hotelEmail.subject,
      html: hotelEmail.html,
      text: hotelEmail.text,
    });

    if (!hotelResult.success) {
      throw new Error('Failed to send hotel notification');
    }

    // Send confirmation email to customer (if email provided)
    if (data.email) {
      const customerEmail = customerConfirmationTemplate(data);
      await sendEmail({
        to: data.email,
        subject: customerEmail.subject,
        html: customerEmail.html,
        text: customerEmail.text,
      });
    }

    return NextResponse.json(
      { 
        message: 'Reservation submitted successfully',
        success: true 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Reservation API error:', error);
    return NextResponse.json(
      { error: 'Failed to process reservation' },
      { status: 500 }
    );
  }
}