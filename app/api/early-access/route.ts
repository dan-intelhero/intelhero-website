import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const email = formData.get('email') as string;

    // Basic email validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Log the email
    console.log('New early access signup:', email);

    // Send email notification to dan@intelhero.com
    try {
      if (process.env.RESEND_API_KEY) {
        const emailResult = await resend.emails.send({
          from: 'Dan @ IntelHero <noreply@intelhero.com>',
          to: ['dan@intelhero.com'],
          replyTo: ['dan@intelhero.com'],
          subject: 'New Early Access Signup - IntelHero',
          html: `
            <h2>New Early Access Signup</h2>
            <p>Someone just signed up for early access to IntelHero!</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
            <hr>
            <p><em>This notification was sent automatically from the IntelHero website.</em></p>
          `,
        });
        console.log('Email notification sent successfully:', emailResult);
      } else {
        console.warn('RESEND_API_KEY not configured, skipping email notification');
      }
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError);
      // Don't fail the whole request if email fails
    }

    return NextResponse.json({
      message: 'Thanks! We\'ll notify you when IntelHero launches.',
      success: true
    });

  } catch (error) {
    console.error('Early access signup error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
