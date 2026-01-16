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
    const [selected, setSelected] = useState<string[]>([]);

    /* --------------- PAGINATION STATE ------------- */
    const [page, setPage] = useState(1);
    const pageSize = 10;

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
            setSelected((prev) => prev.filter((x) => x !== id));
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

        /* ---------------- PAGINATION LOGIC ---------------- */
        const totalPages = Math.ceil(filteredRows.length / pageSize);
        const start = (page - 1) * pageSize;
        const paginatedRows = filteredRows.slice(start, start + pageSize);

        /* ---------------- BULK HELPERS ---------------- */
    function toggleSelect(id: string) {
        setSelected((prev) =>
            prev.includes(id)
                ? prev.filter((x) => x !== id)
                : [...prev, id]
        );
    }

    function toggleSelectAll() {
        const pageIds = paginatedRows.map((lead) => lead.id);

        const allSelected = pageIds.every((id) =>
            selected.includes(id)
        );

        if (allSelected) {
            setSelected((prev) =>
                prev.filter((id) => !pageIds.includes(id))
            );
        } else {
            setSelected((prev) => [...new Set([...prev, ...pageIds])]);
        }
    }

    async function handleBulkDelete() {
        const confirmed = confirm(
            `Delete ${selected.length} selected leads?`
        );
        if (!confirmed) return;

        await Promise.all(
            selected.map((id) =>
                fetch(`/api/admin/leads/${id}`, { method: "DELETE" })
            )
        );

        setRows((prev) =>
            prev.filter((lead) => !selected.includes(lead.id))
        );
        setSelected([]);
    }

    async function handleBulkStatus(status: Lead["status"]) {
        await Promise.all(
            selected.map((id) =>
                fetch(`/api/admin/leads/${id}/status`, {
                    method: "PATCH",
                    headers: { "Content-type": "application/json"},
                    body: JSON.stringify({ status }),
                })
            )
        );

        setRows((prev) =>
            prev.map((lead) =>
                selected.includes(lead.id)
                    ? { ...lead, status }
                    : lead
            )
        );

        setSelected([]);
    }


    /* ---------------- UI ---------------- */
    return (
        <>
            {/* CONTROLS */}
            <div className="flex flex-wrap gap-4 mb-6">
                <input
                    type="text"
                    placeholder="Search leads..."
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setPage(1);
                    }}
                    className="border px-3 py-2 rounded w-64"
                />

                <select
                    value={sourceFilter}
                    onChange={(e) => {
                        setSourceFilter(e.target.value)
                        setPage(1);
                    }}
                    className="border px-3 py-2 rounded"
                >
                    <option value="all">All Sources</option>
                    <option value="website">Website</option>
                    <option value="google">Google</option>
                    <option value="facebook">Facebook</option>
                </select>

                <select
                    value={sortOrder}
                    onChange={(e) => {
                        setSortOrder(e.target.value as "newest" | "oldest");
                        setPage(1);
                    }}
                    className="border px-3 py-2 rounded"
                >
                    <option value="newest">Newest first</option>
                    <option value="oldest">Oldest first</option>
                </select>
            </div>

            {/* 🔹 BULK ACTION BAR */}
            {selected.length > 0 && (
                <div className="flex items-center gap-4 mb-4 p-3 bg-gray-100 border rounded">
                    <span className="text-sm font-medium">
                        {selected.length} selected
                    </span>

                    <button
                        onClick={handleBulkDelete}
                        className="text-red-600 text-sm hover:underline"
                    >
                        Delete selected
                    </button>

                    <select 
                        onChange={(e) =>
                            handleBulkStatus(
                                e.target.value as Lead["status"]
                            )
                        }
                        defaultValue=""
                        className="border rounded px-2 py-1 text-sm bg-white"
                    >
                        <option value="" disabled>
                            Change status...
                        </option>
                        <option value="NEW">New</option>
                        <option value="CONTACTED">Contacted</option>
                        <option value="CLOSED">Closed</option>
                    </select>
                </div>
            )}

            {/* TABLE */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse border">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="border p-3">
                                <input
                                    type="checkbox"
                                    checked={
                                        paginatedRows.length > 0 &&
                                        paginatedRows.every((lead) =>
                                            selected.includes(lead.id)
                                        )
                                    }
                                    onChange={toggleSelectAll}
                                />
                            </th>
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
                        {paginatedRows.map((lead) => (
                            <tr key={lead.id} className="hover:bg-gray-50">
                                <td className="border p-3">
                                    <input
                                        type="checkbox"
                                        checked={selected.includes(lead.id)}
                                        onChange={() =>
                                            toggleSelect(lead.id)
                                        }
                                    />
                                </td>

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

                        {paginatedRows.length === 0 && (
                            <tr>
                                <td
                                    colSpan={9}
                                    className="text-center p-6 text-gray-500"
                                >
                                    No leads found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* PAGINATION CONTROLS */}
            {totalPages > 1 && (
                <div className="text-sm text-gray-600">
                    <span className="flex justify-between items-center mt-6">
                        Page {page} of {totalPages}
                    </span>

                    <div className="flex gap-2">
                        <button
                            disabled={page === 1}
                            onClick={() => setPage((p) => p -1)}
                            className="px-3 py-1 border rounded disabled:opacity-50"
                        >
                            Prev
                        </button>
                        <button
                            disabled={page === totalPages}
                            onClick={() => setPage((p) => p + 1)}
                            className="px-3 py-1 border rounded disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

