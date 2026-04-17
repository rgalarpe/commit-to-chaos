import { NextRequest, NextResponse } from "next/server";

export function GET( request: NextRequest) {
    return NextResponse.json([
        { id: 1, name: 'Mel' },
        { id: 2, name: 'Mike' },
        { id: 3, name: 'Mosh' },
    ])
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    if(!body.name) {
        return NextResponse.json({error: 'Name is required'}, {status: 400});
    }
    return NextResponse.json({ id: 4, name: body.name }, {status: 201});
}