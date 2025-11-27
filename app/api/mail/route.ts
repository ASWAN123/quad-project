import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const {
      name,
      email,
      phone,
      message,
      guests,
      preferredDate,
      tourType,
    } = await request.json();

    // Basic validation
    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: 'Name and email are required fields' },
        { status: 400 }
      );
    }

    // Check if environment variables are set
    if (!process.env.GMX_EMAIL || !process.env.GMX_PASSWORD) {
      console.error('Missing GMX email credentials');
      return NextResponse.json(
        { success: false, message: 'Email service not configured' },
        { status: 500 }
      );
    }

    const messageHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
          .header { background: linear-gradient(135deg, #f59e0b, #d97706); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center; }
          .content { background: #f8fafc; padding: 20px; border-radius: 0 0 10px 10px; }
          .detail { margin: 12px 0; padding: 8px 0; border-bottom: 1px solid #e2e8f0; }
          .label { font-weight: bold; color: #f59e0b; display: inline-block; width: 160px; }
          .value { color: #4a5568; }
          .message-box { background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 15px 0; }
          .footer { text-align: center; color: #666; font-size: 12px; margin-top: 20px; padding-top: 15px; border-top: 1px solid #e2e8f0; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>🏜️ New Desert Adventure Inquiry</h1>
          <p>Someone is dreaming of a Moroccan desert experience!</p>
        </div>
        
        <div class="content">
          <div class="detail">
            <span class="label">Client Name:</span>
            <span class="value">${name}</span>
          </div>
          
          <div class="detail">
            <span class="label">Email Address:</span>
            <span class="value">${email}</span>
          </div>
          
          <div class="detail">
            <span class="label">Phone Number:</span>
            <span class="value">${phone || 'Not provided'}</span>
          </div>
          
          <div class="detail">
            <span class="label">Adventure Type:</span>
            <span class="value">${getTourTypeLabel(tourType)}</span>
          </div>
          
          <div class="detail">
            <span class="label">Number of Guests:</span>
            <span class="value">${guests}</span>
          </div>
          
          <div class="detail">
            <span class="label">Preferred Date:</span>
            <span class="value">${preferredDate || 'Not specified'}</span>
          </div>
          
          <div class="detail">
            <span class="label">Client Message:</span>
          </div>
          
          <div class="message-box">
            ${message ? message.replace(/\n/g, '<br>') : 'No additional message provided'}
          </div>
          
          <div class="detail">
            <span class="label">Submission Time:</span>
            <span class="value">${new Date().toLocaleString()}</span>
          </div>
        </div>
        
        <div class="footer">
          <p>This inquiry was submitted through the Quad Camel Marrakech website contact form.</p>
          <p>Please respond within 24 hours for the best customer experience.</p>
        </div>
      </body>
      </html>
    `;

    // Setup Nodemailer transporter - FIXED: Use consistent environment variables
    const transporter = nodemailer.createTransport({
      host: 'mail.gmx.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMX_EMAIL,  // Use GMX_EMAIL consistently
        pass: process.env.GMX_PASSWORD, // Use GMX_PASSWORD consistently
      },
    });

    // Recipients
    const recipients = [
      'khokhoabderrahim9@gmail.com',
      'box2018tow@gmail.com',
    ];

    // Send emails to all recipients - FIXED: Use GMX_EMAIL for from address
    for (const recipient of recipients) {
      await transporter.sendMail({
        from: `"Quad Camel Marrakech" <${process.env.GMX_EMAIL}>`, // Use GMX_EMAIL here
        to: recipient,
        subject: `🏜️ New Desert Adventure Inquiry from ${name}`,
        html: messageHtml,
        replyTo: email,
      });
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Adventure inquiry sent successfully! We will contact you within 24 hours.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Error sending adventure inquiry:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send inquiry. Please try again or contact us directly via WhatsApp.' 
      },
      { status: 500 }
    );
  }
}

// Helper function to format tour type labels
function getTourTypeLabel(tourType: string) {
  const types: Record<string, string> = {
    'combo': 'Quad Biking + Camel Trekking Combo',
    'quad': 'Quad Biking Only',
    'camel': 'Camel Trekking Only', 
    'custom': 'Custom Experience'
  };
  return types[tourType] || tourType || 'Not specified';
}