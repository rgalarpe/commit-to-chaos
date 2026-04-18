import { NextRequest, NextResponse } from "next/server";
import ProductSchema from "./schema";

export function GET(request: NextRequest) {
    return NextResponse.json([
        { id: 1, name: 'Biscuit', price: 10 },
        { id: 2, name: 'Soda', price: 20 },
        { id: 3, name: 'Ham', price: 30 },
    ]);
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const validation = ProductSchema.safeParse(body);
        if (!validation.success) {
            return NextResponse.json({ error: validation.error.issues[0].message }, { status: 400 });
        }
        return NextResponse.json({ id: 4, name: body.name, price: body.price }, { status: 201 });
    } catch {
        return NextResponse.json({ error: 'Invalid or empty body' }, { status: 400 });
    } 
}