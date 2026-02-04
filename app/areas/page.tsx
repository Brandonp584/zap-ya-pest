import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areas We Service | Zap Ya Pest",
  description: "Explore all the areas we provide pest control services for. Safe, effective, and local solutions for your home or business.",
};

export default function AreasPage() {
  const regions = [
    {
      name: 'Sunshine Coast',
      href: '/areas/sunshine-coast',
      description: 'From Caloundra to Noosa, covering all suburbs in the Sunshine Coast Region.'
    },
    {
      name: 'Moreton Bay',
      href: '/areas/moreton-bay',
      description: 'Serving suburbs from North Lakes to Bribie Island across the Moreton Bay Region.'
    },
    {
      name: 'Bribie Island',
      href: '/areas/bribie-island',
      description: 'Comprehensive pest control services across Bribie Island and surrounding areas.'
    }
  ];

  return (
    <main className="font-sans bg-gray-50 min-h-screen">

      {/* ================= HERO ================= */}
      <section className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full overflow-hidden bg-green-700 flex items-center justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center px-4">
          Areas We Service
        </h1>
      </section>

      {/* ================= REGIONS LIST ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12 text-lg sm:text-xl">
          Zap Ya Pest proudly services multiple regions. Click on a region below to see the detailed suburbs and services we provide.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {regions.map(region => (
            <Link
              key={region.name}
              href={region.href}
              className="flex flex-col justify-center items-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{region.name}</h3>
              <p className="text-gray-500 text-sm">{region.description}</p>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}
