import { NextRequest, NextResponse } from "next/server";
import ProductSchema from "../schema";
import { prisma } from "@/prisma/client";

export async function GET(
    request: NextRequest,
    { params }: {params: Promise<{ id: number }>} ){
        const { id } = await params;
        const product = await prisma.product.findUnique({ where: { id: parseInt(id) } });
        if(!product)
            return NextResponse.json({error:'product not found'}, {status: 404});
        return NextResponse.json(product)
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
        const checkProductExists = await prisma.product.findUnique({ where: { id: parseInt(id) } });
        if(!checkProductExists)
            return NextResponse.json({error:'product not found'}, {status: 404});
        const updatedProduct = await prisma.product.update({
            where: { id: parseInt(id) },
            data: {
                name: body.name,
                price: body.price
            }
        });
        return NextResponse.json(updatedProduct)
}

export async function DELETE(
    request: NextRequest,
    { params }: {params: Promise<{ id: number }>} ){
        const { id } = await params;
        const verifyProduct = await prisma.product.findUnique({ where: { id: parseInt(id) } });
        if(!verifyProduct)
            return NextResponse.json({error:'product not found'}, {status: 404});
        await prisma.product.delete({
            where: { id: parseInt(id) }
        });
        return NextResponse.json({ message: 'Product deleted' })
}