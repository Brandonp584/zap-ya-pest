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
    <main className="font-sans bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full overflow-hidden">
        <Image
          src="/images/Moreton.png"
          alt="Moreton Bay Pest Control"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex flex-col justify-center h-full text-center md:text-left md:flex-row md:items-center gap-6">
          <div className="space-y-4 md:max-w-lg text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold leading-tight tracking-tight">
              Effective Pest Control Solutions in the <span className="text-green-400">Moreton Bay Region</span>
            </h1>
            <p className="text-base sm:text-lg font-sans leading-relaxed">
              Fast & affordable pest control, keeping homes and businesses safe from pests. Local experts who know the Moreton Bay Region inside out.
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
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-center text-black leading-snug tracking-tight">Local Pest Control Experts in Moreton Bay</h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto font-sans leading-relaxed">
          Zap Ya Pest proudly services Moreton Bay including North Lakes, Redcliffe, Caboolture, Morayfield, Bribie Island, and surrounding suburbs. Our local knowledge ensures fast, effective treatments tailored to the areas unique pest challenges.
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
        <div className="grid md:grid-cols-3 gap-6 text-center mt-8">
          <div className="p-4 bg-green-50 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="font-serif font-semibold text-lg mb-1 text-black">Local Expertise</h4>
            <p className="text-gray-700 text-sm font-sans">Our team knows the Moreton Bay area and local pest habits to provide the most effective treatments.</p>
          </div>
          <div className="p-4 bg-green-50 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="font-serif font-semibold text-lg mb-1 text-black">Safe & Effective</h4>
            <p className="text-gray-700 text-sm font-sans">We use eco-friendly products safe for your family and pets, while remaining tough on pests.</p>
          </div>
          <div className="p-4 bg-green-50 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="font-serif font-semibold text-lg mb-1 text-black">Licensed & Insured</h4>
            <p className="text-gray-700 text-sm font-sans">All our technicians are fully licensed and insured, giving you peace of mind with every treatment.</p>
          </div>
        </div>

        {/* Residential & Commercial */}
        <div className="space-y-6 mt-8">
          <div>
            <h3 className="text-lg sm:text-xl font-serif font-semibold mb-1 text-black">Residential Pest Control Services</h3>
            <p className="text-gray-700 font-sans leading-relaxed">We provide targeted, comprehensive, and complete pest control solutions for your home, including termite inspections and end-of-lease treatments. Safe for your family and pets.</p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-serif font-semibold mb-1 text-black">Commercial Pest Control Services</h3>
            <p className="text-gray-700 font-sans leading-relaxed">Protect your business with our expert commercial pest management programs, including HACCP and ISO9001 compliant solutions. Ideal for offices, restaurants, hotels, and warehouses.</p>
          </div>
        </div>

        {/* Locations */}
        <div className="mt-8">
          <h3 className="text-lg sm:text-xl font-serif font-semibold mb-1 text-black">Locations We Service</h3>
          <p className="text-gray-700 font-sans leading-relaxed">We service the Moreton Bay Region including:</p>
          <ul className="list-disc pl-5 text-gray-700 space-y-1 font-sans">
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
        </div>

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
    </main>
  );
}
