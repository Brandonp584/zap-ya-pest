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
        "Reliable pest control services across homes and businesses in the Moreton Bay Region.",
    },
    {
      name: "Sunshine Coast",
      slug: "sunshine-coast",
      description:
        "Expert pest control solutions tailored for Sunshine Coast properties.",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-extrabold text-center mb-6">
        Our Service Areas
      </h1>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Zap Ya Pest provides professional, reliable pest control services across
        South East Queensland. Select your area below to learn more.
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
              View services →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
