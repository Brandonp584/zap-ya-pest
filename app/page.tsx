import Link from "next/link";
import Image from "next/image";
import { pests } from "./lib/pest";

export default function HomePage() {
  return (
    <main className="font-sans bg-slate-50">

      {/* ================= HERO ================= */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Local, Reliable <span className="text-green-500">Pest Control</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-lg">
              Professional pest control across Brisbane, Moreton Bay and the Sunshine Coast.  
              Safe treatments, fast response, and long-term protection for your home or business.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-md font-semibold shadow-md"
              >
                Book Your Visit
              </Link>

              <Link 
                href="/services"
                className="border border-slate-600 hover:border-white transition px-6 py-3 rounded-md font-semibold shadow-sm"
              >
                View Services
              </Link>
            </div>

            {/* Quick Trust Signals */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
              <div className="flex items-center gap-3 text-sm sm:text-base">
                <span className="text-green-500 text-2xl">⚡</span>
                Same-day service available
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base">
                <span className="text-green-500 text-2xl">🔒</span>
                Licensed & Insured technicians
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base">
                <span className="text-green-500 text-2xl">🐾</span>
                Family & Pet Safe treatments
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base">
                <span className="text-green-500 text-2xl">💯</span>
                Satisfaction Guaranteed
              </div>
            </div>
          </div>

          {/* Logo Image */}
          <div className="hidden md:flex items-center justify-center">
            <div className="rounded-xl bg-slate-800 border border-slate-700 p-4 flex items-center justify-center shadow-inner">
              <Image
                src="/images/ZapYaLogo.png"
                alt="Zap Ya Pests Logo"
                width={300}
                height={300}
                className="object-contain"
                priority
              />
            </div>
          </div>

        </div>
      </section>

      {/* ================= PESTS ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 tracking-tight">
            Pests We Treat
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {pests.map((pest) => (
              <Link
                key={pest.slug}
                href={`/pests/${pest.slug}`}
                className="group border rounded-xl bg-slate-50 p-6 text-center hover:shadow-lg transition"
              >
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-green-50 mb-4">
                  <img
                    src={pest.icon}
                    alt={pest.name}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <p className="font-semibold">{pest.name}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/pests"
              className="underline font-semibold hover:text-green-600"
            >
              View All Pests →
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SERVICES PREVIEW ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 tracking-tight">
            Our Core Services
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Residential Pest Control",
                description: "Whole-home protection for common household pests.",
              },
              {
                title: "Termite Inspections",
                description: "Detailed checks to protect your biggest investment.",
              },
              {
                title: "Targeted Treatments",
                description: "Fast solutions for single pest problems.",
              },
              {
                title: "Commercial Pest Control",
                description: "Custom plans for businesses and properties.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="border rounded-xl p-6 hover:shadow-lg transition bg-white"
              >
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 mb-4">
                  {service.description}
                </p>
                <Link href="/services" className="underline text-sm font-medium">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICE AREAS ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
            Areas We Service
          </h2>

          <p className="max-w-2xl mx-auto text-slate-600 mb-10">
            Zap Ya Pests proudly services homes and businesses across the  
            <strong> Moreton Bay Region</strong> and the <strong>Sunshine Coast Region</strong>.
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* MORETON BAY REGION */}
          <div className="bg-slate-50 p-8 rounded-xl border">
            <h3 className="text-2xl font-bold text-green-700 mb-4">
                Moreton Bay Region
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-slate-800 font-semibold">
              <div>North Lakes</div>
              <div>Mango Hill</div>
              <div>Redcliffe</div>
              <div>Margate</div>
              <div>Scarborough</div>
              <div>Clontarf</div>
              <div>Newport</div>
              <div>Rothwell</div>
              <div>Deception Bay</div>
              <div>Burpengary</div>
              <div>Narangba</div>
              <div>Morayfield</div>
              <div>Caboolture</div>
              <div>Bellmere</div>
              <div>Upper Caboolture</div>
              <div>Elimbah</div>
              <div>Beachmere</div>
              <div>Bribie Island</div>
              <div>Wamuran</div>
              <div>Woodford</div>
              <div>Mount Mee</div>
              <div>Dayboro</div>
              <div>Samford</div>
            </div>
          </div>

          {/* SUNSHINE COAST REGION */}
          <div className="bg-slate-50 p-8 rounded-xl border">
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              Sunshine Coast Region
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-slate-800 font-semibold">
              <div>Caloundra</div>
                <div>Pelican Waters</div>
                <div>Golden Beach</div>
                <div>Kawana</div>
                <div>Birtinya</div>
                <div>Minyama</div>
                <div>Buderim</div>
                <div>Sippy Downs</div>
                <div>Mountain Creek</div>
                <div>Maroochydore</div>
                <div>Mooloolaba</div>
                <div>Alexandra Headland</div>
                <div>Coolum Beach</div>
                <div>Noosa</div>
                <div>Noosaville</div>
                <div>Tewantin</div>
                <div>Sunshine Beach</div>
                <div>Nambour</div>
                <div>Yandina</div>
                <div>Eumundi</div>
                <div>Montville</div>
                <div>Maleny</div>
                <div>Beerwah</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 tracking-tight">
            Why Choose Zap Ya Pests?
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="p-6 bg-slate-800 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">
                Local Family Business
              </h3>
              <p className="text-slate-300 text-sm">
                We care about our community and treat every home like our own.
              </p>
            </div>

            <div className="p-6 bg-slate-800 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">
                Safe & Effective Treatments
              </h3>
              <p className="text-slate-300 text-sm">
                Tough on pests, safe for families and pets.
              </p>
            </div>

            <div className="p-6 bg-slate-800 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">
                Fast Local Response
              </h3>
              <p className="text-slate-300 text-sm">
                We respond quickly to pest emergencies in your area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-green-600 text-white py-24 text-center px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Need Pest Control Today?
        </h2>
        <p className="mb-8 text-green-100 max-w-xl mx-auto">
          Contact Zap Ya Pests for fast, reliable pest control solutions in your area.
        </p>

        <Link
          href="/contact"
          className="bg-white text-green-700 px-8 py-4 rounded-md font-semibold hover:opacity-90 transition shadow-md"
        >
          Book Your Service
        </Link>
      </section>

    </main>
  );
}
