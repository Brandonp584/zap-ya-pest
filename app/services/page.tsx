import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      title: "Residential Pest Control",
      subtitle: "Most popular combined treatment",
      description:
        "Comprehensive home pest protection covering cockroaches, ants, spiders, silverfish and more. Designed to keep your home protected all year round.",
      highlights: [
        "Whole home treatment",
        "Safe for pets & children",
        "12-month protection option",
        "Interior + exterior service",
      ],
      price: "$330",
      period: "12 Months Service",
      shortPlan: "Mini CASS – $220 / 6 Months",
      icon: "/icons/home.svg",
    },
    {
      title: "Targeted Pest Solutions",
      subtitle: "Treat a single pest problem",
      description:
        "Perfect if you are dealing with one specific pest such as cockroaches, ants, or spiders. Treatment is tailored to your exact issue.",
      highlights: [
        "Single pest focus",
        "Fast response",
        "Effective long-term control",
      ],
      price: "$220",
      period: "Service period varies",
      icon: "/icons/bug.svg",
    },
    {
      title: "Termite Inspections",
      subtitle: "Thorough property assessment",
      description:
        "Detailed inspection for termites, borers, and fungal decay with a full written report and treatment recommendations.",
      highlights: [
        "Full written report",
        "Expert inspector",
        "Early detection saves money",
      ],
      price: "$266",
      period: "One-time inspection",
      icon: "/icons/termite.png",
    },
    {
      title: "General Pest Solutions",
      subtitle: "Not sure what you need?",
      description:
        "Tell us your pest issue and we’ll create a tailored solution and quote specifically for your property.",
      highlights: [
        "Custom treatment plan",
        "Free assessment",
        "Local specialists",
      ],
      icon: "/icons/inspection.svg",
    },
    {
      title: "Pre-Purchase Inspections",
      subtitle: "Buying a new home?",
      description:
        "Protect your investment with a pre-purchase pest inspection before you buy.",
      highlights: [
        "Detailed property report",
        "Identify hidden risks",
        "Peace of mind before purchase",
      ],
      icon: "/icons/inspection.svg",
    },
    {
      title: "Commercial Pest Management",
      subtitle: "For businesses & properties",
      description:
        "Tailored pest control programs for restaurants, offices, schools, and commercial buildings.",
      highlights: [
        "Business-safe treatments",
        "Regular monitoring",
        "Compliance friendly",
      ],
      icon: "/icons/office.svg",
    },
  ];

  return (
    <main className="font-sans bg-slate-50 min-h-screen">

      {/* ===== HERO ===== */}
      <section className="bg-slate-900 text-white py-24 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          Pest Control Services in Brisbane & Nearby Areas
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-slate-300">
          Zap Ya Pests provides safe, professional, and reliable pest control for homes and businesses across the Moreton Bay Region and Sunshine Coast.
        </p>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="bg-green-600 text-white py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center px-6">
          <div className="font-semibold">✔ Licensed & Insured</div>
          <div className="font-semibold">🐾 Pet Safe</div>
          <div className="font-semibold">📍 Local Experts</div>
          <div className="font-semibold">💯 Satisfaction Guaranteed</div>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white border rounded-xl shadow-md hover:shadow-xl transition p-8 flex flex-col"
          >
            {/* ICON */}
            <div className="flex justify-center mb-4">
              <Image
                src={service.icon}
                alt={service.title}
                width={56}
                height={56}
                className="object-contain"
              />
            </div>

            {/* TITLE */}
            <h2 className="text-2xl font-bold text-center mb-1">
              {service.title}
            </h2>
            <p className="text-green-700 text-center font-semibold mb-3">
              {service.subtitle}
            </p>

            <p className="text-gray-600 text-center mb-4">
              {service.description}
            </p>

            {/* HIGHLIGHTS */}
            <ul className="text-sm text-gray-700 space-y-2 mb-4">
              {service.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span>✔</span> {item}
                </li>
              ))}
            </ul>

            {/* PRICE */}
            {service.price && (
              <div className="text-center mb-2">
                <span className="text-green-600 font-bold text-xl">
                  {service.price}
                </span>
                <span className="text-gray-500 text-sm ml-2">
                  {service.period}
                </span>
              </div>
            )}

            {service.shortPlan && (
              <p className="text-center text-sm text-gray-500 mb-4">
                {service.shortPlan}
              </p>
            )}

            {/* CTA */}
            <Link
              href="/contact"
              className="mt-auto block text-center bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md"
            >
              BOOK A TIME NOW
            </Link>
          </div>
        ))}
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="bg-green-600 text-white py-24 text-center px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Need Pest Control Today?
        </h2>
        <p className="max-w-xl mx-auto mb-8 text-green-100">
          Contact Zap Ya Pests for fast, reliable, and professional pest control solutions.
        </p>
        <Link
          href="/contact"
          className="bg-white text-green-700 px-8 py-4 rounded-md font-semibold hover:opacity-90 transition shadow-md"
        >
          Get a Free Quote
        </Link>
      </section>

    </main>
  );
}
