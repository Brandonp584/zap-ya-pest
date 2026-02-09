import React from "react";
import LogoutButton from "./components/LogoutButton";
import { Roboto_Slab, Open_Sans } from "next/font/google";

// Fonts
const robotoSlab = Roboto_Slab({ subsets: ["latin"], weight: ["400", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600"] });

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${openSans.className} min-h-screen bg-gray-50`}>
      {/* Header */}
      <header className="bg-white border-b px-4 sm:px-6 lg:px-12 py-4 flex justify-between items-center">
        <h1 className={`${robotoSlab.className} text-lg sm:text-xl font-bold text-gray-900`}>
          Zap-Ya-Pest Admin
        </h1>
        <LogoutButton />
      </header>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-12 py-6">
        {children}
      </main>
    </div>
  );
}
