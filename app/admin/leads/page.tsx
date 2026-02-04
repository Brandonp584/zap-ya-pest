import { prisma } from "@/app/lib/prisma";
import LeadsTable from "./LeadsTable";

export const runtime = "nodejs";

export default async function AdminLeadsPage() {
  const rawLeads = await prisma.lead.findMany({
    orderBy: { createdAt: "desc" },
  });

  const leads = rawLeads.map((lead) => ({
  ...lead,
  createdAt: lead.createdAt.toISOString(),
  status: lead.status as "NEW" | "CONTACTED" | "CLOSED",
}));


  return (
    <main className="min-h-screen px-6 py-20 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Lead Submissions</h1>
      <LeadsTable leads={leads} />
    </main>
  );
}
