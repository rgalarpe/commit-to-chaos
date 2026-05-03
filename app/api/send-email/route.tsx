import { NextRequest, NextResponse } from 'next/server';
import { transporter } from '@/lib/nodemailer';
import { render } from '@react-email/render';
import WelcomeTemplate from '@/emails/WelcomeTemplate';

export async function POST(request: NextRequest) {
    const body = await request.json();
    const html = await render(<WelcomeTemplate name={body.name} />);

    await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: body.email,
        subject: 'Welcome!',
        html: html
    });

    return NextResponse.json({ message: 'Email sent successfully' });
}