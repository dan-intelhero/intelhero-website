import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with fallback for build time
const resend = new Resend(process.env.RESEND_API_KEY || 'fallback-key-for-build');

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

    // Send email notifications
    try {
      const apiKey = process.env.RESEND_API_KEY;
      console.log('API Key status:', apiKey ? 'Present' : 'Missing', apiKey?.substring(0, 8) + '...');
      
      if (apiKey && apiKey !== 'fallback-key-for-build') {
        // 1. Send notification to Dan
        const notificationResult = await resend.emails.send({
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
        console.log('Admin notification sent successfully:', notificationResult);

        // 2. Send confirmation to the user
        const confirmationResult = await resend.emails.send({
          from: 'Dan @ IntelHero <noreply@intelhero.com>',
          to: [email],
          replyTo: ['dan@intelhero.com'],
          subject: 'Welcome to IntelHero Early Access! 🚀',
          html: `
            <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; color: #333;">
              <h2 style="color: #2563eb;">Thanks for joining IntelHero Early Access!</h2>
              
              <p>Hi there! 👋</p>
              
              <p>Thanks for signing up for early access to <strong>IntelHero</strong>. We're excited to have you on board!</p>
              
              <h3>What's Next?</h3>
              <ul>
                <li>🔔 You'll be the first to know when IntelHero launches</li>
                <li>🎯 Get exclusive early access to new features</li>
                <li>💡 Share feedback that shapes the product</li>
              </ul>
              
              <p>In the meantime, feel free to check out our <a href="https://chromewebstore.google.com/detail/intelhero-scout/biakpjmflecnjfjmbnnhbagmjijpmbop" style="color: #2563eb;">Scout extension</a> to get a taste of what we're building.</p>
              
              <p>Have questions? Just reply to this email - I'd love to hear from you!</p>
              
              <p>Best,<br>
              Dan<br>
              Founder, IntelHero</p>
              
              <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
              <p style="font-size: 12px; color: #666;">
                You're receiving this because you signed up for IntelHero early access at intelhero.com
              </p>
            </div>
          `,
        });
        console.log('User confirmation sent successfully:', confirmationResult);
      } else {
        console.warn('RESEND_API_KEY not configured properly, skipping email notifications');
        console.warn('Current API key value:', apiKey);
      }
    } catch (emailError) {
      console.error('Failed to send email notifications:', emailError);
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
