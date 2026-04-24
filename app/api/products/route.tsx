import { NextRequest, NextResponse } from "next/server";
import ProductSchema from "./schema";
import { prisma } from "@/prisma/client";

export async function GET() {
    const products = await prisma.product.findMany();
    return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const validation = ProductSchema.safeParse(body);
        if (!validation.success) {
            return NextResponse.json({ error: validation.error.issues[0].message }, { status: 400 });
        }
        const createProduct = await prisma.product.create({
            data: {
                name: body.name,
                price: body.price
            }
        });
        
        return NextResponse.json(createProduct, { status: 201 });
    } catch {
        return NextResponse.json({ error: 'Invalid or empty body' }, { status: 400 });
    } 
}