import { NextRequest, NextResponse } from "next/server";
import UserSchema from "./schema";
import { prisma } from "@/prisma/client";

export async function GET( request: NextRequest) {
    const users = await prisma.user.findMany();

    return NextResponse.json(users)
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const validation = UserSchema.safeParse(body);
        if (!validation.success) {
            return NextResponse.json({ error: validation.error.issues[1].message }, { status: 400 });
        }
        
        const verifyEmail = await prisma.user.findUnique({
            where: { email: body.email } });
        if(verifyEmail)
            return NextResponse.json({ error: 'Email already exists' }, { status: 400 });
        
        const user = await prisma.user.create({
            data: {
                name: body.name,
                email: body.email
            }
        });
        
        return NextResponse.json({ user, name: body.name }, { status: 201 });
    } catch {
        return NextResponse.json({ error: 'Invalid or empty body' }, { status: 400 });
 }
}