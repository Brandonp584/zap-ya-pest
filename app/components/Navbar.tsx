"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { pests, Pest } from "@/app/lib/pests";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pestsOpen, setPestsOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close all dropdowns
  const closeAllDropdowns = () => {
    setPestsOpen(false);
    setAreasOpen(false);
  };

  // Handle dropdown click for touch devices (tablet)
  const handleDropdownClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch && !open) {
      e.preventDefault(); // first tap opens dropdown
      setOpen(true);
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-xl" : "shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" onClick={closeAllDropdowns} className="flex flex-col leading-none">
          <span className="text-2xl font-extrabold text-slate-900 tracking-wide">
            ZAP YA PESTS!
          </span>
          <span className="text-sm font-semibold text-green-600 tracking-wide">
            PEST CONTROL
          </span>
        </Link>

        {/* Desktop & Tablet Nav */}
        <div className="hidden md:flex items-center gap-8 text-slate-700 font-medium">
          <Link href="/" onClick={closeAllDropdowns} className="hover:text-green-600 transition">
            Home
          </Link>
          <Link href="/services" onClick={closeAllDropdowns} className="hover:text-green-600 transition">
            Services
          </Link>

          {/* Pests Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setPestsOpen(true)}
            onMouseLeave={() => setPestsOpen(false)}
          >
            <Link
              href="/pests"
              onClick={(e) => handleDropdownClick(e, pestsOpen, setPestsOpen)}
              className="hover:text-green-600 font-medium transition flex items-center gap-1"
            >
              Pests ▾
            </Link>

            {/* Dropdown menu */}
            <div
              className={`absolute left-0 top-full mt-2 z-50 bg-white border rounded-lg shadow-lg p-4 grid grid-cols-2 md:grid-cols-3 gap-4 min-w-[22rem] max-w-[56rem] transition-all duration-200 ${
                pestsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              }`}
            >
              {pests.map((pest: Pest) => (
                <Link
                  key={pest.slug}
                  href={`/pests/${pest.slug}`}
                  onClick={closeAllDropdowns}
                  className="block px-2 py-1 hover:bg-gray-100 text-slate-700 rounded whitespace-nowrap transition"
                >
                  {pest.name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/about" onClick={closeAllDropdowns} className="hover:text-green-600 transition">
            About
          </Link>

          {/* Locations Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAreasOpen(true)}
            onMouseLeave={() => setAreasOpen(false)}
          >
            <button
              onClick={(e) => handleDropdownClick(e, areasOpen, setAreasOpen)}
              className="hover:text-green-600 font-medium transition flex items-center gap-1"
            >
              Locations ▾
            </button>

            <div
              className={`absolute left-0 top-full mt-2 w-56 z-50 bg-white border border-gray-200 rounded-lg transition-all duration-200 ${
                areasOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <Link href="/areas/moreton-bay" onClick={closeAllDropdowns} className="block px-4 py-2 hover:bg-gray-100 text-slate-700 transition">
                Moreton Bay Region
              </Link>
              <Link href="/areas/sunshine-coast" onClick={closeAllDropdowns} className="block px-4 py-2 hover:bg-gray-100 text-slate-700 transition">
                Sunshine Coast
              </Link>
              <Link href="/areas/bribie-island" onClick={closeAllDropdowns} className="block px-4 py-2 hover:bg-gray-100 text-slate-700 transition">
                Bribie Island
              </Link>
            </div>
          </div>

          <Link
            href="/contact"
            onClick={closeAllDropdowns}
            className="hidden md:inline-block bg-red-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-red-700 transition"
          >
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-2xl text-slate-700" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" onClick={() => setMobileOpen(false)} />

        <div
          className={`relative bg-white border-t border-gray-200 px-6 py-6 max-w-xs w-full
                      h-full overflow-auto transition-transform duration-300
                      ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <Link href="/" onClick={() => setMobileOpen(false)} className="block text-slate-700 font-medium hover:text-green-600 transition mb-3">
            Home
          </Link>
          <Link href="/services" onClick={() => setMobileOpen(false)} className="block text-slate-700 font-medium hover:text-green-600 transition mb-3">
            Services
          </Link>

          {/* Pests Mobile */}
          <div className="space-y-1 mb-3">
            <div className="flex justify-between items-center">
              <Link href="/pests" onClick={() => setMobileOpen(false)} className="text-slate-700 font-medium hover:text-green-600 transition">
                Pests
              </Link>
              <button onClick={() => setPestsOpen(!pestsOpen)} className="text-slate-700 font-medium hover:text-green-600 transition">▾</button>
            </div>
            {pestsOpen && (
              <div className="mt-2 space-y-1">
                {pests.map((pest: Pest) => (
                  <Link key={pest.slug} href={`/pests/${pest.slug}`} onClick={() => setMobileOpen(false)} className="block px-2 py-1 hover:bg-gray-100 text-slate-700 rounded transition">
                    {pest.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Locations Mobile */}
          <div className="space-y-1 mb-3">
            <div className="flex justify-between items-center">
              <span className="text-slate-700 font-medium">Locations</span>
              <button onClick={() => setAreasOpen(!areasOpen)} className="text-slate-700 font-medium hover:text-green-600 transition">▾</button>
            </div>
            {areasOpen && (
              <div className="mt-2 space-y-1">
                <Link href="/areas/moreton-bay" onClick={() => setMobileOpen(false)} className="block px-2 py-1 hover:bg-gray-100 text-slate-700 rounded transition">
                  Moreton Bay Region
                </Link>
                <Link href="/areas/sunshine-coast" onClick={() => setMobileOpen(false)} className="block px-2 py-1 hover:bg-gray-700 rounded transition">
                  Sunshine Coast
                </Link>
                <Link href="/areas/bribie-island" onClick={() => setMobileOpen(false)} className="block px-2 py-1 hover:bg-gray-100 text-slate-700 rounded transition">
                  Bribie Island
                </Link>
              </div>
            )}
          </div>

          <Link href="/contact" onClick={() => setMobileOpen(false)} className="block bg-red-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-red-700 transition text-center">
            Get a Free Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
