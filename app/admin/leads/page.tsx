import { prisma } from "app/lib/prisma";

export const runtime = "nodejs";

export default async function AdminLeadsPage() {
    const leads = await prisma.lead.findMany({
        orderBy: { createdAt: "desc" },
    });

    return (
        <main className="min-h-screen px-6 py-20 max-w-6xl max-auto">
            <h1 className="text-3xl font-bold mb-8">Lead Submissions</h1>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse border">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="border p-3 text-left">Name</th>
                            <th className="border p-3 text-left">Email</th>
                            <th className="border p-3 text-left">Phone</th>
                            <th className="border p-3 text-left">Message</th>
                            <th className="border p-3 text-left">Source</th>
                            <th className="border p-3 text-left">date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leads.map((lead) => (
                            <tr key={lead.id} className="hover:bg-gray-50">
                                <td className="border p-3">{lead.name}</td>
                                <td className="border p-3">{lead.email}</td>
                                <td className="border p-3">{lead.phone ?? "-"}</td>
                                <td className="border p-3 max-w-md truncate">
                                    {lead.message}
                                </td>
                                <td className="border p-3">{lead.source}</td>
                                <td className="border p-3">
                                    {new Date(lead.createdAt).toLocaleString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
}