export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";


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

        await prisma.lead.create({
            data: {
                name,
                email,
                phone: phone ?? null,
                message,
            },
        });

        return NextResponse.json(
            { success: true, message: "Quote request received" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact API Error:", error);

        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}