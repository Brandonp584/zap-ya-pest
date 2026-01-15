"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");
        setLoading(true);

        const res = await fetch("/api/admin/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (!res.ok) {
            setError(data.error || "login Failed");
            setLoading(false);
            return;
        }

        router.replace("/admin/leads");
        router.refresh();
    }

    return (
        <main className="min-h-screen flex items-center justify-center px-6">
            <form 
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-white p-8 rounded-lg shadow"
            >
                <h1 className="text-2xl font-bold mb-6 text-center">
                    Admin Login
                </h1>

                {error && (
                    <p className="text-red-600 text-center mb-4">
                        {error}
                    </p>
                )}

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border p-3 rounded mb-4"
                    required
                />
                <div className="relative mb-4">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Admin Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border p-3 rounded mb-4"
                        required
                    />

                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
                    >
                        {showPassword ? "🙈" : "👁️"}
                    </button>
                </div>

                <button
                    className="w-full bg-black text-white py-3 rounded hover:opacity-90 disabled:opacity-50"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Logging in..." : "Login"}                    
                </button>
            </form>
        </main>
    )
}