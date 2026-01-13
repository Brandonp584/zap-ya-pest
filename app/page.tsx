import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-4x1 md:text-6x1 font-bold max-w-4x1">
          Fast, Reliable Pest Control You Can Trust 
        </h1>

        <p className="mt-6 text-lg md:text-x1 max-w-2x1 text-gray-600">
          Zap Ya Pest provides professional pest control services for home and
          businesses. Safe, effective, and guaranteed results.
        </p>

        <div className="mt-10 flex gap-4">
          <a 
            href="/contact"
            className="px-6 py-3 rounded-md text-white bg-black hover:opacity-90 transition">
              Get a Free Quote
            </a>

            <a 
            href="/services"
            className="px-6 py-3 rounded-md border-black hover:bg-black hover:text-white transition">
              View Services
            </a>
        </div>
      </section>
    </main>
  )
}
