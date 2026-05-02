import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST() {
    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'biancababe@tutamail.com',
        subject: 'Welcome!',
        react: <WelcomeTemplate name="Biance" />
    });

    return NextResponse.json({ message: 'Email sent successfully' });
}
