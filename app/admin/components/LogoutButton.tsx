"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
    const router = useRouter();

    async function handleLogout() {
        await fetch("/api/admin/logout", {
            method: "POST",
        });

        router.push("/admin/login");
        router.refresh();
    }

    return (
        <button 
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded text-sm hover:opacity-90"
        >
            Logout
        </button>
    );
}