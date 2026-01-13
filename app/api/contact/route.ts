import { Postpone } from "next/dist/server/app-render/dynamic-rendering";
import { NextResponse } from "next/server";
import { json } from "stream/consumers";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "missing required fields" },
                { status: 400 }
            );
        }

        console.log("New contact lead:", {
            name,
            email,
            phone,
            message,
        });

        return NextResponse.json(
            { success: true, message: "Quote request received" },
            { status: 200 }
        );
    } catch {
        return NextResponse.json(
            { error: "invaild request" },
            { status: 500}
        );
    }
}