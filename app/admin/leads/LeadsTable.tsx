"use client";

import { useState } from "react";

type Lead = {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    message: string;
    source: string;
    createdAt: Date;
};

export default function LeadsTable({ leads }: { leads: Lead[] }) {
    const [rows, setRows] = useState<Lead[]>(leads);
    const [deletingId, setDeletingId] = useState<string | null>(null);
    const [search, setSearch] = useState("");

    async function handleDelete(id: string) {
        const confirmed = confirm("Are you sure you want to delete this lead?");
        if (!confirmed) return;

        setDeletingId(id);

        const res = await fetch(`/api/admin/leads/${id}`, {
            method: "DELETE",
        });

        if (!res.ok) {
            alert("Failed to delete lead");
            setDeletingId(null);
            return;
        }

        // ✅ Remove row instantly (no reload)
        setRows((prev) => prev.filter((lead) => lead.id !== id));
        setDeletingId(null);
    }

    const filteredRows = rows.filter((lead) => {
        const q = search.toLowerCase();

        return (
            lead.name.toLowerCase().includes(q) ||
            lead.email.toLowerCase().includes(q) ||
            lead.phone?.toLowerCase().includes(q) ||
            lead.message.toLowerCase().includes(q) ||
            lead.source.toLowerCase().includes(q)
        );
    });

    return (
        <>
            {/* Search Input */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search Leads..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full max-w-sm border px-3 py-2 rounded text-sm focus:outline-none focus:ring"
                />
            </div>

            {filteredRows.length === 0 ? (
                <p className="text-gray-500 text-sm">
                    No Leads Match Your Search
                </p>
            ) : (
                <div className="overflow-x-auto">
                        <table className="w-full border-collapse border">
                            <thead className="bg-gray-200">
                                <tr>
                            <th className="border p-3 text-left">Name</th>
                            <th className="border p-3 text-left">Email</th>
                            <th className="border p-3 text-left">Phone</th>
                            <th className="border p-3 text-left">Message</th>
                            <th className="border p-3 text-left">Source</th>
                            <th className="border p-3 text-left">Date</th>
                            <th className="border p-3 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredRows.map((lead) => (
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
                                <td className="border p-3">
                                    <button
                                        onClick={() => handleDelete(lead.id)}
                                        disabled={deletingId === lead.id}
                                        className="text-red-600 hover:underline text-sm disabled:opacity-50"
                                        >
                                            {deletingId === lead.id 
                                                ? "Deleting…" 
                                                : "Delete"}
                                    </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
}

