import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pest Control Bribie Island | Zap Ya Pest",
  description:
    "Professional pest control services on Bribie Island. Safe, effective treatments for ants, termites, rodents, spiders, and more.",
};

export default function BribieIslandPage() {
  return (
    <main className="font-sans bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full overflow-hidden">
        <Image
          src="/images/bribie-island.png"
          alt="Bribie Island Pest Control"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex flex-col justify-center h-full text-center md:text-left md:flex-row md:items-center gap-6">
          <div className="space-y-4 text-white md:max-w-lg">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif font-extrabold leading-tight tracking-tight">
              Effective Pest Control Solutions on <span className="text-green-400">Bribie Island</span>
            </h1>
            <p className="text-base sm:text-lg font-sans leading-relaxed">
              Fast & affordable pest control, keeping homes and businesses safe from pests. Local experts who know Bribie Island inside out.
            </p>
            <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
              <Link
                href="/contact"
                className="bg-green-600 text-white px-5 py-2 rounded-md font-semibold uppercase tracking-wide shadow hover:opacity-90 transition"
              >
                Book a Free Quote
              </Link>
              <Link
                href="/services"
                className="border border-green-600 px-5 py-2 rounded-md font-semibold uppercase tracking-wide hover:bg-green-100 hover:text-green-800 transition"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="max-w-5xl mx-auto px-6 py-12 space-y-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-center text-black leading-snug tracking-tight">
          Local Pest Control Experts on Bribie Island
        </h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto font-sans leading-relaxed">
          Zap Ya Pest proudly services Bribie Island and surrounding suburbs. Our local knowledge ensures fast, effective treatments tailored to the areas unique pest challenges.
        </p>

        {/* Pests Section */}
        <div>
          <h3 className="text-lg sm:text-xl font-serif font-semibold mb-2 text-black">Pests We Commonly Treat</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1 font-sans">
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
            className="inline-block mt-3 text-green-600 font-semibold underline font-sans"
          >
            View all pests →
          </Link>
        </div>

        {/* Why Choose Us */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center mt-10">
          <div className="p-4 bg-green-50 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="font-serif font-semibold text-lg mb-1 text-black">Local Expertise</h4>
            <p className="text-gray-700 text-sm font-sans">Our team knows Bribie Island and local pest habits to provide the most effective treatments.</p>
          </div>
          <div className="p-4 bg-green-50 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="font-serif font-semibold text-lg mb-1 text-black">Safe & Effective</h4>
            <p className="text-gray-700 text-sm font-sans">We use eco-friendly products that are safe for your family and pets, while remaining tough on pests.</p>
          </div>
          <div className="p-4 bg-green-50 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="font-serif font-semibold text-lg mb-1 text-black">Licensed & Insured</h4>
            <p className="text-gray-700 text-sm font-sans">All our technicians are fully licensed and insured, giving you peace of mind with every treatment.</p>
          </div>
        </div>

        {/* Residential & Commercial */}
        <section className="space-y-8 mt-12">
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-3 text-black">Residential Pest Control Services</h3>
            <p className="text-gray-700 font-sans leading-relaxed">
              Targeted, comprehensive pest control solutions for your home, including termite inspections and end-of-lease treatments. Safe for your family and pets.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-3 text-black">Commercial Pest Control Services</h3>
            <p className="text-gray-700 font-sans leading-relaxed">
              Expert commercial pest management programs for offices, restaurants, hotels, and warehouses.
            </p>
          </div>
        </section>

        {/* Locations */}
        <section className="space-y-4 mt-12">
          <h3 className="text-2xl font-serif font-semibold text-black">Locations We Service</h3>
          <p className="text-gray-700 font-sans">We service Bribie Island including:</p>
          <ul className="list-disc pl-5 text-gray-700 space-y-1 font-sans">
            <li>Bongaree</li>
            <li>Woorim</li>
            <li>Bellara</li>
            <li>Toorbul</li>
            <li>Sandstone Point</li>
            <li>Beachmere</li>
          </ul>
        </section>

        {/* CTA */}
        <div className="text-center mt-8">
          <Link
            href="/contact"
            className="bg-green-600 text-white px-5 py-2 rounded-md font-semibold uppercase tracking-wide shadow hover:opacity-90 transition"
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
                "name": "Do you provide termite control on Bribie Island?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide professional termite inspections and treatments across Bribie Island."
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
                "name": "Which areas do you service on Bribie Island?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We service Bongaree, Woorim, Bellara, Toorbul, Sandstone Point, Beachmere, and surrounding suburbs."
                }
              }
            ]
          })
        }}
      />
    </main>
  );
}
