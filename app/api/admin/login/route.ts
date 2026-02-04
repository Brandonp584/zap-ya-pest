import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { email, password } = await req.json();
    
    const adminEmails =
    process.env.ADMIN_EMAILS?.split(",") ?? [];

    if (
        !adminEmails.includes(email) ||
        password !== process.env.ADMIN_PASSWORD
    ) {
        return NextResponse.json(
            { error: "Unautorized" },
            { status: 401 }
        );
    }
    
    const res = NextResponse.json({ success: true });

    res.cookies.set("admin-auth", "true", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 8, // 8 hours
    });

    return res;
}
