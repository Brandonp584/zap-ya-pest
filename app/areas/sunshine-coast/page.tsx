import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pest Control Sunshine Coast | Zap Ya Pest",
  description:
    "Trusted pest control services across the Sunshine Coast. Safe and effective treatments for homes and businesses.",
};

export default function SunshineCoastPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20 space-y-10">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold mb-4">
          Pest Control on the Sunshine Coast
        </h1>
        <p className="text-gray-600 text-lg">
          Professional pest control solutions designed for Sunshine Coast homes
          and businesses.
        </p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-3">
          Servicing the Sunshine Coast
        </h2>
        <p className="text-gray-600">
          We service the Sunshine Coast including Caloundra, Maroochydore,
          Mooloolaba, Noosa, Buderim, and surrounding areas. Our team understands
          the unique pest challenges caused by coastal climates.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">
          Our Pest Control Services
        </h2>
        <p className="text-gray-600 mb-4">
          From general pest control to termite inspections and rodent management,
          Zap Ya Pest delivers safe and effective solutions.
        </p>

        <Link
          href="/services"
          className="underline font-semibold"
        >
          View services →
        </Link>
      </section>

      <section className="bg-slate-100 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">
          Book Pest Control on the Sunshine Coast
        </h2>
        <p className="text-gray-600 mb-6">
          Get in touch today for expert advice and fast service.
        </p>

        <Link
          href="/contact"
          className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
        >
          Get a Free Quote
        </Link>
      </section>

      {/* ========== FAQ Schema ========== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Do you treat rodents on the Sunshine Coast?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide professional rodent removal and prevention services across the Sunshine Coast."
                }
              },
              {
                "@type": "Question",
                "name": "How do I book a pest control service in Sunshine Coast?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can contact us directly through our website or call us to schedule an appointment in the Sunshine Coast area."
                }
              }
            ]
          })
        }}
      />
    </main>
  );
}
