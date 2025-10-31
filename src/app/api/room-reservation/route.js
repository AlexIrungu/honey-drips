import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email/nodemailer';
import { roomReservationEmailTemplate, roomReservationConfirmationTemplate } from '@/lib/email/templates/roomReservationEmail';

export async function POST(request) {
  try {
    const data = await request.json();

    // Validate required fields
    const { name, phone, checkIn, checkOut, roomType, guests } = data;
    if (!name || !phone || !checkIn || !checkOut || !roomType || !guests) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate dates
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    if (checkInDate >= checkOutDate) {
      return NextResponse.json(
        { error: 'Check-out date must be after check-in date' },
        { status: 400 }
      );
    }

    // Send email to hotel
    const hotelEmail = roomReservationEmailTemplate(data);
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
      const customerEmail = roomReservationConfirmationTemplate(data);
      await sendEmail({
        to: data.email,
        subject: customerEmail.subject,
        html: customerEmail.html,
        text: customerEmail.text,
      });
    }

    return NextResponse.json(
      { 
        message: 'Room reservation submitted successfully',
        success: true 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Room reservation API error:', error);
    return NextResponse.json(
      { error: 'Failed to process room reservation' },
      { status: 500 }
    );
  }
}