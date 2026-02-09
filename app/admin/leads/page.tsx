import LeadsTable, { Lead } from "./LeadsTable";
import { Roboto_Slab, Open_Sans } from "next/font/google";

// Fonts
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
});

// Force dynamic SSR to avoid build-time DB access
export const dynamic = "force-dynamic";

export default async function AdminLeadsPage() {
  let leads: Lead[] = [];

  // Only try Prisma if DATABASE_URL exists
  if (process.env.DATABASE_URL) {
    try {
      const { prisma } = await import("@/app/lib/prisma");
      const rawLeads = await prisma.lead.findMany({
        orderBy: { createdAt: "desc" },
      });

      type PrismaLead = (typeof rawLeads)[number];

      leads = rawLeads.map((lead: PrismaLead) => ({
        ...lead,
        status: lead.status as Lead["status"],
        createdAt: new Date(lead.createdAt),
      }));
    } catch (err) {
      console.warn("Prisma failed, using empty leads", err);
      leads = [];
    }
  } else {
    // Fallback placeholder data if no DB
    leads = [
      {
        id: "1",
        name: "John Doe",
        email: "john@example.com",
        phone: "123-456-7890",
        message: "Interested in pest control",
        source: "Website Form",
        status: "NEW",
        createdAt: new Date(),
      },
      {
        id: "2",
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "987-654-3210",
        message: "Need a quote for termites",
        source: "Referral",
        status: "NEW",
        createdAt: new Date(),
      },
    ];
  }

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
