import { NextRequest, NextResponse } from "next/server";
import ProductSchema from "../schema";

export async function GET(
    request: NextRequest,
    { params }: {params: { id: number }} ){
        if(params.id>10)
            return NextResponse.json({error:'product not found'}, {status: 404});
        return NextResponse.json({ id: 1, name: 'Biscuit', price: 10 })
}

export async function PUT(
    request: NextRequest,
    { params }: {params: Promise<{ id: number }>} ){
        const { id } = await params;
        const body = await request.json();
        const validation = ProductSchema.safeParse(body);
        if(!validation.success){
            return NextResponse.json(validation.error.issues[0].message, { status: 400 });
        }
        if (id>10)
            return NextResponse.json({error:'product not found'}, {status: 404});
        return NextResponse.json({ id, name: body.name, price: body.price })
}

export async function DELETE(
    request: NextRequest,
    { params }: {params: Promise<{ id: number }>} ){
        const { id } = await params;
        if(id>10)
            return NextResponse.json({error:'product not found'}, {status: 404});
        return NextResponse.json({ message: 'Product deleted' })
}