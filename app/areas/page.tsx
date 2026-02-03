import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Areas | Zap Ya Pest",
  description:
    "Zap Ya Pest proudly provides professional pest control services across the Moreton Bay Region and Sunshine Coast.",
};

export default function AreasPage() {
  const areas = [
    {
      name: "Moreton Bay Region",
      slug: "moreton-bay",
      description:
        "Local pest control services across North Lakes, Redcliffe, Caboolture, Morayfield, Bribie Island and surrounding suburbs.",
    },
    {
      name: "Sunshine Coast",
      slug: "sunshine-coast",
      description:
        "Professional pest control for Caloundra, Maroochydore, Mooloolaba, Noosa, Buderim and nearby areas.",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-extrabold text-center mb-6">
        Our Service Areas
      </h1>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Zap Ya Pest proudly services the Moreton Bay Region and the Sunshine Coast 
        with safe, effective, and reliable pest control solutions.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {areas.map((area) => (
          <Link
            key={area.slug}
            href={`/areas/${area.slug}`}
            className="border rounded-xl p-8 hover:shadow-lg transition bg-white"
          >
            <h2 className="text-2xl font-semibold mb-2">{area.name}</h2>
            <p className="text-gray-600">{area.description}</p>
              <span className="inline-block mt-4 font-semibold underline">
                View service details →
              </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
