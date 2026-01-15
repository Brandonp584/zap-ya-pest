import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function DELETE(
    _req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    if (!id) {
        return NextResponse.json(
            { error: "Missing lead ID" },
            { status: 400 }
        );
    }

    try {
        await prisma.lead.delete({
            where: { id },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Delete lead error:", error);
        return NextResponse.json(
            { error: "Failed to delete lead" },
            { status: 500 }
        );
    }
}