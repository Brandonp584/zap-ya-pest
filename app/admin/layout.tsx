import React from "react";
import LogoutButton from "./components/LogoutButton";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white border-b px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">Zap-Ya-Pest Admin</h1>
                <LogoutButton />
            </header>

            <main className="p-6">{children}</main>
        </div>
    );
}
