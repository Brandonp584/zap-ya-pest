import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pest Control Moreton Bay | Zap Ya Pest",
  description:
    "Professional pest control services in the Moreton Bay Region. Safe, effective treatments for ants, termites, rodents, spiders, and more.",
};

export default function MoretonBayPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20 space-y-10">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold mb-4">
          Pest Control in Moreton Bay
        </h1>
        <p className="text-gray-600 text-lg">
          Local, reliable pest control services for homes and businesses across
          the Moreton Bay Region.
        </p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-3">
          Local Pest Control Experts
        </h2>
        <p className="text-gray-600">
          Zap Ya Pest proudly services the Moreton Bay Region including areas
          such as North Lakes, Redcliffe, Caboolture, Morayfield, Bribie Island,
          and surrounding suburbs. Our treatments are tailored to local pest
          pressures and seasonal conditions.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">
          Pests We Commonly Treat
        </h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-1">
          <li>Ants</li>
          <li>Termites</li>
          <li>Cockroaches</li>
          <li>Spiders</li>
          <li>Rodents</li>
          <li>Mosquitoes</li>
        </ul>

        <Link
          href="/pests"
          className="inline-block mt-4 underline font-semibold"
        >
          View all pests →
        </Link>
      </section>

      <section className="bg-slate-100 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">
          Need Pest Control in Moreton Bay?
        </h2>
        <p className="text-gray-600 mb-6">
          Contact Zap Ya Pest today for fast, effective, and affordable pest
          control solutions.
        </p>

        <Link
          href="/contact"
          className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
        >
          Get a Free Quote
        </Link>
      </section>
    </main>
  );
}
