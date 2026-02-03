import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pest Control Moreton Bay | Zap Ya Pest",
  description:
    "Professional pest control services in the Moreton Bay Region. Safe, effective treatments for ants, termites, rodents, spiders, and more.",
};

export default function MoretonBayPage() {
  return (
    <main className="font-sans">

      {/* ================= HERO ================= */}
      <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/Moreton.png"
          alt="Moreton Bay Pest Control"
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
              Effective Pest Control Solutions in the <span className="text-green-400">Moreton Bay Region</span>
            </h1>
            <p className="text-lg sm:text-xl">
              Fast & affordable pest control, keeping homes and businesses safe from pests. Local experts who know the Moreton Bay Region inside out.
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
          Local Pest Control Experts in Moreton Bay
        </h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto">
          Zap Ya Pest proudly services Moreton Bay including North Lakes, Redcliffe, Caboolture, Morayfield, Bribie Island, and surrounding suburbs. Our local knowledge ensures fast, effective treatments tailored to the area's unique pest challenges.
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
            <p className="text-gray-700 text-sm">Our team knows the Moreton Bay area and local pest habits to provide the most effective treatments.</p>
          </div>
          <div className="p-6 bg-green-50 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-lg mb-2">Safe & Effective</h4>
            <p className="text-gray-700 text-sm">We use eco-friendly products that are safe for your family and pets, while remaining tough on pests.</p>
          </div>
          <div className="p-6 bg-green-50 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-lg mb-2">Licensed & Insured</h4>
            <p className="text-gray-700 text-sm">All our technicians are fully licensed and insured, giving you peace of mind with every treatment.</p>
          </div>
        </div>

        {/* Residential & Commercial */}
        <section className="space-y-8 mt-16">
          <div>
            <h3 className="text-2xl font-semibold mb-3">Residential Pest Control Services</h3>
            <p className="text-gray-700">We provide targeted, comprehensive, and complete pest control solutions for your home, including termite inspections and end-of-lease treatments. Safe for your family and pets.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">Commercial Pest Control Services</h3>
            <p className="text-gray-700">Protect your business with our expert commercial pest management programs, including HACCP and ISO9001 compliant solutions. Ideal for offices, restaurants, hotels, and warehouses.</p>
          </div>
        </section>

        {/* Locations */}
        <section className="space-y-4 mt-16">
          <h3 className="text-2xl font-semibold">Locations We Service</h3>
          <p className="text-gray-700">We service the Moreton Bay Region including:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Albany Creek</li>
            <li>Banksia Beach</li>
            <li>Beachmere</li>
            <li>Bongaree</li>
            <li>Bribie Island</li>
            <li>Burpengary</li>
            <li>Caboolture</li>
            <li>Deception Bay</li>
            <li>Elimbah</li>
            <li>Kallangur</li>
            <li>Kippa-Ring</li>
            <li>Morayfield</li>
            <li>Murrumba Downs</li>
            <li>Narangba</li>
            <li>North Lakes</li>
            <li>Petrie</li>
            <li>Redcliffe</li>
            <li>Sandstone Point</li>
            <li>Scarborough</li>
          </ul>
        </section>

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
                "name": "Do you provide termite control in Moreton Bay?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide comprehensive termite inspections and treatments across the Moreton Bay Region."
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
                "name": "Which areas do you service in Moreton Bay?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We service North Lakes, Redcliffe, Caboolture, Morayfield, Bribie Island, and surrounding suburbs."
                }
              }
            ]
          })
        }}
      />
    </main>
  );
}
