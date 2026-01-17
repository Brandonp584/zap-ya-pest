"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="stick top-0 z-50 bg-white border-b">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* LOGO / BRAND */}
                <Link href="/" className="flex flex-col leading-none">
                    <span className="text-2xl font-extrabold text-slate-900 tracking-wide">
                        ZAP YA PESTS!
                    </span>
                    <span className="text-sm font-semibold text-green-600 tracking-wide">
                        PEST CONTROL 
                    </span>
                </Link>

                {/* NAV LINKS */}
                <div className="hidden md:flex items-center gap-8 text-slate-700 font-medium">
                    <Link href="/" className="hover:text-green-600 transition">
                        Home 
                    </Link>
                    <Link href="/services" className="hover:text-green-600 transition">
                        Services 
                    </Link>
                    <Link href="/about" className="hover:text-green-600 transition">
                        About 
                    </Link>
                    <Link href="/contact" className="hover:text-green-600 transition">
                        Contact Us 
                    </Link>
                </div>

                {/* CTA BUTTON */}
                <Link 
                    href="/contact"
                    className="hidden md:inline-block bg-red-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-red-700 transition">
                        Get a Free Quote
                </Link>
            </div>
        </nav>
    )
} 