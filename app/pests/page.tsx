import Link from "next/link";
import { pests } from "@/app/lib/pest";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pest We Treat | Zap Ya Pest",
    description:
    "Explore the pests we treat including ants, cockroaches, termites, rodents, and more. Professional pest control services you can trust.",
}; 

export default function PestsPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-20">
            <h1 className="text-4xl font-extrabold text-center mb-6">
                Pest We Treat
            </h1>

            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                Zap Ya Pest provides professional treatment for a wide range of common
                household pests. Click a pest below to learn more about prevention,
                treatment, and control soultuions.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {pests.map((pest) => (
                    <Link
                        key={pest.slug}
                        href={`/pests/${pest.slug}`}
                        className="group borddr rounded-xl bg-white p-6 text-center hover:shadow-lg transition"
                    >
                        <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-green-50">
                            <img
                                src={pest.icon}
                                alt={pest.name}
                                className="w-8 h-8 object-contain transition group-hover:scale-110"
                            />
                        </div>

                        <h2 className="mt-4 font-semibold">{pest.name}</h2>
                    </Link>
                ))}
            </div>
        </div>
    )
}