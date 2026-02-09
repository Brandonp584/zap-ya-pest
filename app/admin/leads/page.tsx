import { prisma } from "@/app/lib/prisma";
import LeadsTable, { Lead } from "./LeadsTable";
import { Roboto_Slab, Open_Sans } from "next/font/google";
import { Lead as PrismaLead } from "@prisma/client";

export const runtime = "nodejs";

// Fonts
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default async function AdminLeadsPage() {
  // Fetch leads from Prisma
  const rawLeads = await prisma.lead.findMany({
    orderBy: { createdAt: "desc" },
  });

  // Map Prisma Lead → UI Lead
  const leads: Lead[] = rawLeads.map((lead: PrismaLead) => ({
    ...lead,
    status: lead.status as Lead["status"],
    createdAt: new Date(lead.createdAt),
  }));

  return (
    <main
      className={`${openSans.className} min-h-screen px-4 sm:px-6 lg:px-12 py-12 max-w-6xl mx-auto space-y-8 bg-white`}
    >
      <h1
        className={`${robotoSlab.className} text-2xl sm:text-3xl font-bold text-gray-900`}
      >
        Lead Submissions
      </h1>

      <LeadsTable leads={leads} />
    </main>
  );
}
