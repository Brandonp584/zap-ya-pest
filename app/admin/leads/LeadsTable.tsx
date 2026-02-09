"use client";

import { useState } from "react";
import { Roboto_Slab, Open_Sans } from "next/font/google";

// Load fonts
const robotoSlab = Roboto_Slab({ subsets: ["latin"], weight: ["400", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600"] });

export type Lead = {
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
  const [rows, setRows] = useState<Lead[]>(leads);
  const [search, setSearch] = useState("");
  const [sourceFilter, setSourceFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [selected, setSelected] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const pageSize = 10;

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
      const dateA = a.createdAt.getTime();
      const dateB = b.createdAt.getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

  const totalPages = Math.ceil(filteredRows.length / pageSize);
  const start = (page - 1) * pageSize;
  const paginatedRows = filteredRows.slice(start, start + pageSize);

  function toggleSelect(id: string) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }
  function toggleSelectAll() {
    const pageIds = paginatedRows.map((lead) => lead.id);
    const allSelected = pageIds.every((id) => selected.includes(id));
    setSelected((prev) =>
      allSelected ? prev.filter((id) => !pageIds.includes(id)) : [...new Set([...prev, ...pageIds])]
    );
  }

  async function handleDelete(id: string) {
    if (!confirm("Are you sure you want to delete this lead?")) return;
    const res = await fetch(`/api/admin/leads/${id}`, { method: "DELETE" });
    if (res.ok) {
      setRows((prev) => prev.filter((lead) => lead.id !== id));
      setSelected((prev) => prev.filter((x) => x !== id));
    }
  }

  async function handleStatusChange(id: string, status: Lead["status"]) {
    const res = await fetch(`/api/admin/leads/${id}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    if (res.ok) {
      setRows((prev) =>
        prev.map((lead) => (lead.id === id ? { ...lead, status } : lead))
      );
    }
  }

  const exportRows =
    selected.length > 0
      ? filteredRows.filter((l) => selected.includes(l.id))
      : filteredRows;

  function handleExportCSV() {
    if (exportRows.length === 0) {
      alert("No leads to export");
      return;
    }
    const headers = ["Name", "Email", "Phone", "Message", "Source", "Status", "Created At"];
    const csvRows = [
      headers.join(","),
      ...exportRows.map((lead) =>
        [
          lead.name,
          lead.email,
          lead.phone ?? "",
          lead.message.replace(/"/g, '""'),
          lead.source,
          lead.status,
          lead.createdAt.toISOString(),
        ]
          .map((v) => `"${v}"`)
          .join(",")
      ),
    ];
    const blob = new Blob([csvRows.join("\n")], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `zapya-leads-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
  }

  return (
    <div className={`${openSans.className} space-y-6 text-gray-800`}>
      {/* Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        <input
          type="text"
          placeholder="Search leads..."
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          className="w-full sm:w-64 px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
        />
        <select
          value={sourceFilter}
          onChange={(e) => { setSourceFilter(e.target.value); setPage(1); }}
          className="w-full sm:w-48 px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="all">All Sources</option>
          <option value="website">Website</option>
          <option value="google">Google</option>
          <option value="facebook">Facebook</option>
        </select>
        <select
          value={sortOrder}
          onChange={(e) => { setSortOrder(e.target.value as "newest" | "oldest"); setPage(1); }}
          className="w-full sm:w-48 px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
        </select>
      </div>

      {/* Bulk Actions */}
      {selected.length > 0 && (
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 p-3 bg-white border rounded shadow-sm">
          <span className="font-medium">{selected.length} selected</span>
          <button
            onClick={async () => {
              if (!confirm(`Delete ${selected.length} selected leads?`)) return;
              await Promise.all(selected.map((id) => fetch(`/api/admin/leads/${id}`, { method: "DELETE" })));
              setRows((prev) => prev.filter((lead) => !selected.includes(lead.id)));
              setSelected([]);
            }}
            className="text-red-600 hover:underline text-sm"
          >
            Delete
          </button>
          <button
            onClick={handleExportCSV}
            className="ml-auto px-4 py-2 bg-black text-white rounded text-sm hover:opacity-90"
          >
            Export CSV
          </button>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border text-sm sm:text-base">
          <thead className={`${robotoSlab.className} bg-blue-50 text-gray-900`}>
            <tr>
              <th className="border p-2">
                <input
                  type="checkbox"
                  checked={paginatedRows.every((l) => selected.includes(l.id)) && paginatedRows.length > 0}
                  onChange={toggleSelectAll}
                />
              </th>
              <th className="border p-2 text-left">Name</th>
              <th className="border p-2 text-left">Email</th>
              <th className="border p-2 text-left hidden sm:table-cell">Phone</th>
              <th className="border p-2 text-left hidden sm:table-cell max-w-xs break-words whitespace-normal">Message</th>
              <th className="border p-2 text-left hidden md:table-cell">Source</th>
              <th className="border p-2 text-left">Status</th>
              <th className="border p-2 text-left hidden md:table-cell">Date</th>
              <th className="border p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedRows.map((lead) => (
              <tr key={lead.id} className="hover:bg-gray-50 align-top">
                <td className="border p-2">
                  <input type="checkbox" checked={selected.includes(lead.id)} onChange={() => toggleSelect(lead.id)} />
                </td>
                <td className="border p-2 font-medium">{lead.name}</td>
                <td className="border p-2 break-words">{lead.email}</td>
                <td className="border p-2 break-words hidden sm:table-cell">{lead.phone ?? "-"}</td>
                <td className="border p-2 hidden sm:table-cell max-w-xs break-words whitespace-normal">{lead.message}</td>
                <td className="border p-2 hidden md:table-cell">{lead.source}</td>
                <td className="border p-2">
                  <select
                    value={lead.status}
                    onChange={(e) => handleStatusChange(lead.id, e.target.value as Lead["status"])}
                    className="border rounded px-2 py-1 text-sm bg-white w-full"
                  >
                    <option value="NEW">New</option>
                    <option value="CONTACTED">Contacted</option>
                    <option value="CLOSED">Closed</option>
                  </select>
                </td>
                <td className="border p-2 hidden md:table-cell">{lead.createdAt.toLocaleString()}</td>
                <td className="border p-2">
                  <button onClick={() => handleDelete(lead.id)} className="text-red-600 hover:underline text-sm">Delete</button>
                </td>
              </tr>
            ))}
            {paginatedRows.length === 0 && (
              <tr>
                <td colSpan={9} className="text-center p-4 text-gray-500">
                  No leads found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 mt-4 text-gray-700 text-sm">
          <span>Page {page} of {totalPages}</span>
          <div className="flex gap-2">
            <button disabled={page === 1} onClick={() => setPage((p) => p - 1)} className="px-3 py-1 border rounded disabled:opacity-50">Prev</button>
            <button disabled={page === totalPages} onClick={() => setPage((p) => p + 1)} className="px-3 py-1 border rounded disabled:opacity-50">Next</button>
          </div>
        </div>
      )}
    </div>
  );
}
