import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function PATCH(
    req: Request,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await context.params;
        const { status } = await req.json();

        if (!["NEW", "CONTACTED", "CLOSED"].includes(status)) {
            return NextResponse.json(
                { error: "Invalid status" },
                { status: 400 }
            );
        }

        await prisma.lead.update({
            where: { id },
            data: { status },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Update status error:", error);
        return NextResponse.json(
            { error: "Failed to update status" },
            { status: 500 }
        );
    }
}