"use client";

import { useState } from "react";

type Lead = {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    message: string;
    source: string;
    status: "NEW" | "CONTACTED" | "CLOSED";
    createdAt: Date;
};

export default function LeadsTable({ leads }: { leads: Lead[] }) {
    /* ---------------- STATE ---------------- */
    const [rows, setRows] = useState<Lead[]>(leads);
    const [search, setSearch] = useState("");
    const [sourceFilter, setSourceFilter] = useState("all");
    const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

    /* ---------------- DELETE ---------------- */
    async function handleDelete(id: string) {
        const confirmed = confirm("Are you sure you want to delete this lead?");
        if (!confirmed) return;

        const res = await fetch(`/api/admin/leads/${id}`, {
            method: "DELETE",
        });

        if (res.ok) {
            // remove from UI without reload
            setRows((prev) => prev.filter((lead) => lead.id !== id));
        }
    }

    /* ---------------- STATUS UPDATE ---------------- */
    async function handleStatusChange(
        id: string,
        status: Lead["status"]
    ) {
        const res = await fetch(`/api/admin/leads/${id}/status`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status }),
        });

        if (res.ok) {
            setRows((prev) =>
                prev.map((lead) =>
                    lead.id === id ? { ...lead, status } : lead
                )
            );
        }
    }

    /* ---------------- FILTER + SORT ---------------- */
    const filteredRows = rows
        .filter((lead) => {
            const q = search.toLowerCase();

            const matchesSearch =
                lead.name.toLowerCase().includes(q) ||
                lead.email.toLowerCase().includes(q) ||
                lead.phone?.toLowerCase().includes(q) ||
                lead.message.toLowerCase().includes(q) ||
                lead.source.toLowerCase().includes(q);

            const matchesSource =
                sourceFilter === "all" || lead.source === sourceFilter;

            return matchesSearch && matchesSource;
        })
        .sort((a, b) => {
            const dateA = new Date(a.createdAt).getTime();
            const dateB = new Date(b.createdAt).getTime();

            return sortOrder === "newest"
                ? dateB - dateA
                : dateA - dateB;
        });

    /* ---------------- UI ---------------- */
    return (
        <>
            {/* CONTROLS */}
            <div className="flex flex-wrap gap-4 mb-6">
                <input
                    type="text"
                    placeholder="Search leads..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border px-3 py-2 rounded w-64"
                />

                <select
                    value={sourceFilter}
                    onChange={(e) => setSourceFilter(e.target.value)}
                    className="border px-3 py-2 rounded"
                >
                    <option value="all">All Sources</option>
                    <option value="website">Website</option>
                    <option value="google">Google</option>
                    <option value="facebook">Facebook</option>
                </select>

                <select
                    value={sortOrder}
                    onChange={(e) =>
                        setSortOrder(e.target.value as "newest" | "oldest")
                    }
                    className="border px-3 py-2 rounded"
                >
                    <option value="newest">Newest first</option>
                    <option value="oldest">Oldest first</option>
                </select>
            </div>

            {/* TABLE */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse border">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="border p-3 text-left">Name</th>
                            <th className="border p-3 text-left">Email</th>
                            <th className="border p-3 text-left">Phone</th>
                            <th className="border p-3 text-left">Message</th>
                            <th className="border p-3 text-left">Source</th>
                            <th className="border p-3 text-left">Status</th>
                            <th className="border p-3 text-left">Date</th>
                            <th className="border p-3 text-left">Actions</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {filteredRows.map((lead) => (
                            <tr key={lead.id} className="hover:bg-gray-50">
                                <td className="border p-3">{lead.name}</td>
                                <td className="border p-3">{lead.email}</td>
                                <td className="border p-3">
                                    {lead.phone ?? "-"}
                                </td>
                                <td className="border p-3 max-w-md truncate">
                                    {lead.message}
                                </td>
                                <td className="border p-3">{lead.source}</td>

                                <td className="border p-3">
                                    <select
                                        value={lead.status}
                                        onChange={(e) =>
                                            handleStatusChange(
                                                lead.id,
                                                e.target.value as Lead["status"]
                                            )
                                        }
                                        className="border rounded px-2 py-1 text-sm bg-white"
                                    >
                                        <option value="NEW">New</option>
                                        <option value="CONTACTED">Contacted</option>
                                        <option value="CLOSED">Closed</option>
                                    </select>
                                </td>
                                
                                <td className="border p-3">
                                    {new Date(
                                        lead.createdAt
                                    ).toLocaleString()}
                                </td>
                                <td className="border p-3">
                                    <button
                                        onClick={() => handleDelete(lead.id)}
                                        className="text-red-600 hover:underline text-sm"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}

                        {filteredRows.length === 0 && (
                            <tr>
                                <td
                                    colSpan={8}
                                    className="text-center p-6 text-gray-500"
                                >
                                    No leads found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

