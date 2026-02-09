"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Roboto_Slab, Open_Sans } from "next/font/google";

// Google fonts
const robotoSlab = Roboto_Slab({ subsets: ["latin"], weight: ["400", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600"] });

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
      setError(data.error || "Login Failed");
      setLoading(false);
      return;
    }

    router.replace("/admin/leads");
    router.refresh();
  }

  return (
    <main className="relative w-full min-h-screen">
      {/* Background image */}
      <Image
        src="/images/teamwork.png"
        alt="Teamwork"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Floating login form */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className={`w-full max-w-md bg-white p-6 sm:p-8 rounded-lg shadow-lg relative z-10
                      ${openSans.className} text-black`} // Open Sans applied, text black by default
        >
          <h1
            className={`text-2xl font-bold mb-6 text-center ${robotoSlab.className}`} // Roboto Slab for headings
          >
            Admin Login
          </h1>

          {error && (
            <p className="text-red-600 text-center mb-4">{error}</p>
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-3 rounded mb-4 text-black"
            required
          />

          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border p-3 rounded text-black"
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
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </main>
  );
}
