import { NextRequest, NextResponse } from "next/server";
import UserSchema from "../schema";

export async function GET(
    request: NextRequest,
    { params }: {params: { id: number }} ){

        if(params.id>10)
            return NextResponse.json({error:'user not found'}, {status: 404});
        return NextResponse.json({ id: 1, name: 'Mel' })

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
    if (id>10)
        return NextResponse.json({error:'user not found'}, {status: 404});
    return NextResponse.json({ id: 1, name: body.name})
}

export async function DELETE(
    request: NextRequest, 
    { params }: {params: Promise<{ id: number }>} ) {
    const { id } = await params;
    if (id>10)
        return NextResponse.json({error:'user not found'}, {status: 404});
    return NextResponse.json({ message: 'User deleted' })
}