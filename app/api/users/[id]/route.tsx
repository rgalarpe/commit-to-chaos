import { NextRequest, NextResponse } from "next/server";
import UserSchema from "../schema";
import { prisma } from "@/prisma/client";

export async function GET(
    request: NextRequest,
    { params }: {params: Promise<{ id: number }>} ){
        const { id } = await params;
        const user = await prisma.user.findUnique({ 
            where: { id: parseInt(id) } 
        });
        if(!user)
            return NextResponse.json({error:'user not found'}, {status: 404});
        return NextResponse.json(user)

}

export async function PUT(
    request: NextRequest, 
    { params }: {params: Promise<{ id: number }>} ) {
    const { id } = await params;
    const body = await request.json();
    const validation = UserSchema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.issues[1].message, { status: 400 });
    }

    const verifyUser = await prisma.user.findUnique({ where: { id: parseInt(id) } });

    if (!verifyUser)
        return NextResponse.json({error:'user not found'}, {status: 404});
    const updatedUser = await prisma.user.update({
        where: { id: parseInt(id) },
        data: {
            name: body.name,
            email: body.email
        }
    });
    return NextResponse.json(updatedUser)
}

export async function DELETE(
    request: NextRequest, 
    { params }: {params: Promise<{ id: number }>} ) {
    const { id } = await params;

    const verifyUser = await prisma.user.findUnique({ where: { id: parseInt(id) } });

    if (!verifyUser)
        return NextResponse.json({error:'user not found'}, {status: 404});
    await prisma.user.delete({
        where: { id: parseInt(id) }
    });
    return NextResponse.json({ message: 'User deleted' })
}