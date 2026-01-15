import { prisma } from "@/app/lib/prisma";
import LeadsTable from "./LeadsTable";

export const runtime = "nodejs";

export default async function AdminLeadsPage() {
    const leads = await prisma.lead.findMany({
        orderBy: { createdAt: "desc" },
    }) as Array<{ id: string; status: "NEW" | "CONTACTED" | "CLOSED"; name: string; email: string; phone: string | null; message: string; source: string; createdAt: Date; }>;

    return (
        <main className="min-h-screen px-6 py-20 max-w-6xl max-auto">
            <h1 className="text-3xl font-bold mb-8">Lead Submissions</h1>

            <LeadsTable leads={leads} />
        </main>
    );
}