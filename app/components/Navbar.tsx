"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { pests, Pest } from "@/app/lib/pests";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePestsOpen, setMobilePestsOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close all mobile states
  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobilePestsOpen(false);
    setMobileAreasOpen(false);
  };

  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-xl" : "shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-2xl font-extrabold text-slate-900 tracking-wide">
            ZAP YA PESTS!
          </span>
          <span className="text-sm font-semibold text-green-600 tracking-wide">
            PEST CONTROL
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-slate-700 font-medium">
          <Link href="/" className="hover:text-green-600 transition">
            Home
          </Link>
          <Link href="/services" className="hover:text-green-600 transition">
            Services
          </Link>

          {/* Pests Dropdown */}
          <div className="relative group">
            <Link href="/pests" className="hover:text-green-600 font-medium">
              Pests ▾
            </Link>
            <div
              className="absolute left-0 top-full mt-2 z-50
                         opacity-0 invisible group-hover:opacity-100 group-hover:visible
                         transition-all duration-300 ease-out
                         transform -translate-y-2 group-hover:translate-y-0"
            >
              <div className="bg-white border rounded-lg shadow-lg p-4
                              grid grid-cols-2 md:grid-cols-3 gap-4 min-w-[22rem] max-w-[56rem]">
                {pests.map((pest: Pest) => (
                  <Link
                    key={pest.slug}
                    href={`/pests/${pest.slug}`}
                    className="block px-2 py-1 hover:bg-gray-100 text-slate-700 rounded whitespace-nowrap transition"
                  >
                    {pest.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/about" className="hover:text-green-600 transition">
            About
          </Link>

          {/* Areas Dropdown */}
          <div className="relative group">
            <button className="hover:text-green-600 transition font-medium">
              Locations ▾
            </button>
            <div
              className="absolute left-0 top-full mt-2 w-56 z-50
                         opacity-0 invisible group-hover:opacity-100 group-hover:visible
                         transition-all duration-300 ease-out
                         transform -translate-y-2 group-hover:translate-y-0"
            >
              <div className="bg-white border border-gray-200 rounded-lg">
                <Link
                  href="/areas/moreton-bay"
                  className="block px-4 py-2 hover:bg-gray-100 text-slate-700 transition"
                >
                  Moreton Bay Region
                </Link>
                <Link
                  href="/areas/sunshine-coast"
                  className="block px-4 py-2 hover:bg-gray-100 text-slate-700 transition"
                >
                  Sunshine Coast
                </Link>
                <Link
                  href="/areas/bribie-island"
                  className="block px-4 py-2 hover:bg-gray-100 text-slate-700 transition"
                >
                  Bribie Island
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="hidden md:inline-block bg-red-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-red-700 transition"
          >
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-slate-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/30"
          onClick={closeMobileMenu}
        />

        <div
          className={`relative bg-white border-t border-gray-200 px-6 py-6 max-w-xs w-full
                      h-full overflow-auto transition-transform duration-300
                      ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="block text-slate-700 font-medium hover:text-green-600 transition mb-3"
          >
            Home
          </Link>

          <Link
            href="/services"
            onClick={closeMobileMenu}
            className="block text-slate-700 font-medium hover:text-green-600 transition mb-3"
          >
            Services
          </Link>

          {/* Pests Mobile */}
          <div className="space-y-1 mb-3">
            <div className="flex justify-between items-center">
              <Link
                href="/pests"
                onClick={closeMobileMenu}
                className="text-slate-700 font-medium hover:text-green-600 transition"
              >
                Pests
              </Link>
              <button
                onClick={() => setMobilePestsOpen(!mobilePestsOpen)}
                className="text-slate-700 font-medium hover:text-green-600 transition"
              >
                ▾
              </button>
            </div>

            <div
              className={`overflow-auto transition-max-height duration-300 ease-out ${
                mobilePestsOpen ? "max-h-[calc(100vh-10rem)]" : "max-h-0"
              }`}
            >
              <div className="mt-2 space-y-1">
                {pests.map((pest: Pest) => (
                  <Link
                    key={pest.slug}
                    href={`/pests/${pest.slug}`}
                    onClick={closeMobileMenu}
                    className="block px-2 py-1 hover:bg-gray-100 text-slate-700 rounded transition"
                  >
                    {pest.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/about"
            onClick={closeMobileMenu}
            className="block text-slate-700 font-medium hover:text-green-600 transition mb-3"
          >
            About
          </Link>

          {/* Areas Mobile */}
          <div className="space-y-1 mb-3">
            <div className="flex justify-between items-center">
              <span className="text-slate-700 font-medium">Locations</span>
              <button
                onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                className="text-slate-700 font-medium hover:text-green-600 transition"
              >
                ▾
              </button>
            </div>

            <div
              className={`overflow-auto transition-max-height duration-300 ease-out ${
                mobileAreasOpen ? "max-h-[calc(100vh-10rem)]" : "max-h-0"
              }`}
            >
              <div className="mt-2 space-y-1">
                <Link
                  href="/areas/moreton-bay"
                  onClick={closeMobileMenu}
                  className="block px-2 py-1 hover:bg-gray-100 text-slate-700 rounded transition"
                >
                  Moreton Bay Region
                </Link>
                <Link
                  href="/areas/sunshine-coast"
                  onClick={closeMobileMenu}
                  className="block px-2 py-1 hover:bg-gray-100 text-slate-700 rounded transition"
                >
                  Sunshine Coast
                </Link>
                <Link
                  href="/areas/bribie-island"
                  onClick={closeMobileMenu}
                  className="block px-2 py-1 hover:bg-gray-100 text-slate-700 rounded transition"
                >
                  Bribie Island
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            onClick={closeMobileMenu}
            className="block bg-red-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-red-700 transition text-center"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
