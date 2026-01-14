"use client";

import React, { useState } from "react";

type ContactForm = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState<string  | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

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
        headers: {
          "Content-Type": "application/json",
        },
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
      });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred: Please try again later."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen px-6 py-20 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">
        Get a Free Pest Control Quote
      </h1>

      <p className="text-center text-gray-600 mb-12">
        Fill out the form below and our team will get back to you shortly.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {error && (
          <p className="text-red-600 text-center font-medium">{error}</p>
        )}

        {success && (
          <p className="text-green-600 text-center font-medium">
            ✅ Thanks! We'll be in touch shortly.
          </p>
        )}

        <div>
          <label htmlFor="name" className="block mb-2 font-medium">
            Name *
          </label>
          <input
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-md p-3"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-medium">
            Email *
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-md p-3"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block mb-2 font-medium">
            Phone *
          </label>
          <input
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border rounded-md p-3"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 font-medium">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={form.message}
            onChange={handleChange}
            className="w-full border rounded-md p-3"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-3 rounded-md hover:opacity-90 transition disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Request Quote"}
        </button>
      </form>
    </main>
  );
}