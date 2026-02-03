import Link from "next/link";
import { pests } from "./lib/pest";

export default function HomePage() {
  return (
    <main>

       {/* ================= HERO ================= */}
       <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Fast, Reliable{" "}
              <span className="text-green-500">Pest Control</span>
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-xl">
              Professional pest control services for homes and businesses.
              Safe treatments, guaranteed results, and local experts you can trust.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-md font-semibold"
              >
                Get a Free Quote 
              </Link>
              <Link 
                href="/services"
                className="border border-slate-600 hover:border-white transition px-6 py-3 rounded-md font-semibold"
              >
                View Services 
              </Link>
            </div>
          </div>

          {/* Image / Visual Placeholder */}
          <div className="hidden md:block">
            <div className="h-80 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-500">
              Pest Control Image
            </div>
          </div>
        </div>
       </section>

       {/* ============ TRUST BAR ================= */}
       <section className="bg-green border-b">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>Licensed & Insured</div>
          <div>Family & Pet Safe</div>
          <div>Local Pest Experts</div>
          <div>Satisfaction Guaranteed</div>
        </div>
       </section>

       {/* ========== PESTS WE TREAT ========== */}
       <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center mb-12">
            Pests We Treat
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {pests.map((pest) => (
              <Link
                key={pest.slug}
                href={`/pests/${pest.slug}`}
                className="group border rounded-xl bg-white p-6 text-center hover:shadow-lg transition"
              >
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-green-50">
                  <img src={pest.icon} className="w-8 h-8 object-contain" />
                </div>
                <p className="mt-4 font-semibold">{pest.name}</p>
              </Link>
            ))}
          </div>

          
          <div className="text-center mt-10">
            <Link
              href="/pests"
              className="underline font-semibold hover:text-green-600"
            >
              View All Pest →
            </Link>
          </div>
        </div>
        </section>

        {/* ========== SERVICES =========== */
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-extrabold text-center mb-12">
              Our Services
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                "General Pest Control",
                "Termite Treatment",
                "Rodent Control",
                "Commercial Pest Control",
              ].map((service) => (
              <div
                key={service}
                className="border rounded-xl p-6 hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg mb-2">{service}</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Effective treatments designed to eliminate and prevent pests.
                </p>
                <Link href="/services" className="underline text-sm font-medium">
                  Learn More →
                </Link>
              </div>
            ))} 
            </div>  
          </div>  
        </section>}  

        {/* ========== WWHY CHOOSE US ========== */}
        <section className="bg-slate-900 text-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-extrabold text-center mb-12">
              Why Choose Zap Ya Pest?
            </h2>

            <div className="grid md:grid-cols-3 gap-10 text-center">
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Experienced Technicians
                </h3>
                <p className="text-slate-300 text-sm">
                  Fully trained professionals using industry-proven methods.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Safe & Effective Treatments
                </h3>
                <p className="text-slate-300 text-sm">
                  Tough on pests, safe for familes and pets.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Reliable Service
                </h3>
                <p className="text-slate-300 text-sm">
                  On-time service with guaranteed results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== FINAL CTA ========== */}
        <section className="bg-green-600 text-white py-24 text-center px-6">
            <h2 className="text-3xl font-extrabold mb-4">
              Need Pest Control Today?
            </h2>

            <p className="mb-8 text-green-100">
              Contatc Zap Ya Pests for fast, reliable pest control solutions.
            </p>

            <Link
              href="/contact"
              className="bg-white text-green-700 px-8 py-4 rounded-md font-semibold hover:opacity-90 transition"
            >
              Get a Free Quote
            </Link>
        </section>     

    </main>
  )
}
