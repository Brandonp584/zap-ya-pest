"use client";

import React, { useState } from "react";

type ContactForm = {
  name: string;
  email: string;
  phone: string;
  message: string;
  company: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    message: "",
    company: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
        company: "",
      });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-slate-900 text-center mb-4">
          Get a Free Pest Control Quote
        </h1>

        <p className="text-center text-slate-600 mb-12">
          Fill out the form below and our friendly team will get back to you
          shortly.
        </p>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 space-y-6"
        >
          {error && (
            <p className="text-red-600 text-center font-medium">{error}</p>
          )}

          {success && (
            <p className="text-green-600 text-center font-medium">
              ✅ Thanks! We’ll be in touch shortly.
            </p>
          )}

          <div>
            <label htmlFor="name" className="block mb-2 font-medium text-slate-700">
              Name *
            </label>
            <input
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3
                         focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-medium text-slate-700">
              Email *
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3
                         focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block mb-2 font-medium text-slate-700">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3
                         focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-medium text-slate-700">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3
                         focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          {/* Honeypot */}
          <div className="hidden">
            <label>Company</label>
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-md font-semibold
                       hover:bg-green-700 transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Request Free Quote"}
          </button>
        </form>
      </div>
    </main>
  );
}
