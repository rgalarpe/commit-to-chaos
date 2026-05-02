//template for NextRequest export function
import { prisma } from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server'
import z from 'zod';
//import for hash password using bcrypytt
import bcrypt from 'bcryptjs';


//z.object for email and password
const registerSchema = z.object({
    email: z.email(),
    password: z.string().min(6),
});


export async function POST(request: NextRequest) {
    const body = await request.json();

    const regValid = registerSchema.safeParse(body);
    //if validation not successful return json validation.error.errors
    if (!regValid.success) { return NextResponse.json({ errors: regValid.error.issues[0].message }, { status: 400 }); }

    //user prisma findUniqe
    const userExists = await prisma.user.findUnique({
        where: {
            email: body.email
        }
    });
    if (userExists) { return NextResponse.json({ error: 'User already exists' }, { status: 400 }); }

    //implement bycrypt to hash password
    const hashedPassword = await bcrypt.hash(body.password, 10);

    //create user with prisma
    const newUser = await prisma.user.create({
        data: {
            email: body.email,
            hashedPassword: hashedPassword
        }
    });

    return NextResponse.json({ message: 'User registered successfully', email: newUser.email }, { status: 201 });
}    