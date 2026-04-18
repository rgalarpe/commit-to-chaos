import { NextRequest, NextResponse } from "next/server";
import UserSchema from "./schema";

export function GET( request: NextRequest) {
    return NextResponse.json([
        { id: 1, name: 'Mel' },
        { id: 2, name: 'Mike' },
        { id: 3, name: 'Mosh' },
    ])
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const validation = UserSchema.safeParse(body);
        if (!validation.success) {
            return NextResponse.json({ error: validation.error.issues[1].message }, { status: 400 });
        }
        return NextResponse.json({ id: 4, name: body.name }, { status: 201 });
    } catch {
        return NextResponse.json({ error: 'Invalid or empty body' }, { status: 400 });
    }
}