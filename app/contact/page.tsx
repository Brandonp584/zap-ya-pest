"use client"

import React, { useState } from "react";

export default function ContactPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [error, setError] = useState("");

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!form.name || !form.email || !form.message) {
            setError("Please fill in all required fields.");
            return;
        }

        setError("");
        console.log("Form ready for backend submission:", form);
    }

    return (
        <main className="min-h-screen px-6 py-20 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-6">
                Get a Free Pest Control Quote
            </h1>

            <p className="text-center text-gray-600 mb-12">
                Fill out the form below and our team will get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                    <p className="text-red-600 text-center font-medium">{error}</p>
                )}

                <div>
                    <label className="block mb-2 font-medium">Name</label>
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border rounded-md p-3"
                    />
                </div>

                <div>
                    <label className="block mb-2 font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border rounded-md p-3"
                    />
                </div>

                <div>
                    <label className="block mb-2 font-medium">Phone</label>
                    <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full border rounded-md p-3"
                    />
                </div>

                <div>
                    <label className="block mb-2 font-medium">Message</label>
                    <textarea
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}                        
                        className="w-full border rounded-md p-3"
                    />
                </div>

                <button 
                    type="submit"
                    className="w-full bg-black text-white py-3 rounded-md hover:opacity-90 transition">
                        Request Quote
                </button>
            </form>
        </main>
    );
}