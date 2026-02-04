"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b">
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

        {/* ===== Desktop Nav ===== */}
        <div className="hidden md:flex items-center gap-8 text-slate-700 font-medium">

          <Link href="/" className="hover:text-green-600 transition">Home</Link>
          <Link href="/services" className="hover:text-green-600 transition">Services</Link>
          <Link href="/pests" className="hover:text-green-600 transition">Pests</Link>
          <Link href="/about" className="hover:text-green-600 transition">About</Link>

          {/* Locations Dropdown */}
          <div className="relative group">
            <button className="hover:text-green-600 transition font-medium">
              Locations ▾
            </button>
            <div className="absolute left-0 top-full mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg">
                <Link href="/areas/moreton-bay" className="block px-4 py-2 hover:bg-gray-100 text-slate-700">Moreton Bay Region</Link>
                <Link href="/areas/sunshine-coast" className="block px-4 py-2 hover:bg-gray-100 text-slate-700">Sunshine Coast</Link>
                <Link href="/areas/bribie-island" className="block px-4 py-2 hover:bg-gray-100 text-slate-700">Bribie Island</Link>
              </div>
            </div>
          </div>

          <Link href="/contact" className="hidden md:inline-block bg-red-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-red-700 transition">
            Get a Free Quote
          </Link>
        </div>

        {/* ===== Mobile Hamburger ===== */}
        <button
          className="md:hidden text-2xl text-slate-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* ===== Mobile Menu ===== */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-3">
          <Link href="/" className="block text-slate-700 font-medium hover:text-green-600 transition">Home</Link>
          <Link href="/services" className="block text-slate-700 font-medium hover:text-green-600 transition">Services</Link>
          <Link href="/pests" className="block text-slate-700 font-medium hover:text-green-600 transition">Pests</Link>
          <Link href="/about" className="block text-slate-700 font-medium hover:text-green-600 transition">About</Link>

          {/* Mobile Dropdown */}
          <div className="border-t border-gray-200 pt-2">
            <p className="text-slate-700 font-medium mb-1">Locations</p>
            <Link href="/areas/moreton-bay" className="block px-2 py-1 hover:bg-gray-100 rounded text-slate-700">Moreton Bay Region</Link>
            <Link href="/areas/sunshine-coast" className="block px-2 py-1 hover:bg-gray-100 rounded text-slate-700">Sunshine Coast</Link>
            <Link href="/areas/bribie-island" className="block px-2 py-1 hover:bg-gray-100 rounded text-slate-700">Bribie Island</Link>
          </div>

          <Link href="/contact" className="block bg-red-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-red-700 transition text-center mt-3">
            Get a Free Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
