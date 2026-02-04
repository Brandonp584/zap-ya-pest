import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pest Control Sunshine Coast | Zap Ya Pest",
  description:
    "Trusted pest control services across the Sunshine Coast. Safe and effective treatments for homes and businesses.",
};

export default function SunshineCoastPage() {
  return (
    <main className="font-sans">

      {/* ================= HERO ================= */}
      <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/sunshine.png"
          alt="Sunshine Coast Pest Control"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex flex-col justify-center h-full text-center md:text-left md:flex-row md:items-center gap-10">
          <div className="space-y-6 text-white md:max-w-lg">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Reliable Pest Control on the <span className="text-green-400">Sunshine Coast</span>
            </h1>
            <p className="text-lg sm:text-xl">
              Fast, safe, and effective pest control services for homes and businesses. Local experts who know the Sunshine Coast and its pests inside out.
            </p>
            <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
              <Link
                href="/contact"
                className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
              >
                Book a Free Quote
              </Link>
              <Link
                href="/services"
                className="border border-green-600 hover:bg-green-100 hover:text-green-800 transition px-6 py-3 rounded-md font-semibold"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">
          Local Pest Control Experts on the Sunshine Coast
        </h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto">
          Zap Ya Pest services the Sunshine Coast including Caloundra, Maroochydore, Mooloolaba, Noosa, Buderim, and surrounding suburbs. Our local expertise ensures fast, effective pest control solutions tailored to the regions unique challenges.
        </p>

        {/* Pests Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Pests We Commonly Treat</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Ants</li>
            <li>Termites</li>
            <li>Cockroaches</li>
            <li>Spiders</li>
            <li>Rodents</li>
            <li>Mosquitoes</li>
            <li>Wasps</li>
          </ul>
          <Link
            href="/pests"
            className="inline-block mt-4 underline font-semibold"
          >
            View all pests →
          </Link>
        </div>

        {/* Why Choose Us */}
        <div className="grid md:grid-cols-3 gap-8 text-center mt-12">
          <div className="p-6 bg-green-50 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-lg mb-2">Local Expertise</h4>
            <p className="text-gray-700 text-sm">
              We know the Sunshine Coast area and local pest habits to provide the most effective treatments.
            </p>
          </div>
          <div className="p-6 bg-green-50 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-lg mb-2">Safe & Effective</h4>
            <p className="text-gray-700 text-sm">
              Eco-friendly products safe for family and pets while remaining tough on pests.
            </p>
          </div>
          <div className="p-6 bg-green-50 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-lg mb-2">Licensed & Insured</h4>
            <p className="text-gray-700 text-sm">
              Fully licensed and insured technicians for peace of mind.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
          >
            Schedule Your Pest Service
          </Link>
        </div>
      </section>

      {/* ================= FAQ Structured Data ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Do you provide termite control on the Sunshine Coast?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide professional termite inspections and treatments across the Sunshine Coast."
                }
              },
              {
                "@type": "Question",
                "name": "Are your pest treatments safe for pets and children?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. All our treatments are family and pet safe."
                }
              },
              {
                "@type": "Question",
                "name": "Which areas do you service on the Sunshine Coast?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We service Caloundra, Maroochydore, Mooloolaba, Noosa, Buderim, and surrounding suburbs."
                }
              }
            ]
          })
        }}
      />
    </main>
  );
}
