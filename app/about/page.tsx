"use client";

import { Roboto_Slab, Open_Sans } from "next/font/google";

// Google fonts
const robotoSlab = Roboto_Slab({ subsets: ["latin"], weight: ["400", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600"] });

export default function AboutPage() {
  return (
    <main
      className={`${openSans.className} bg-white min-h-screen p-6 sm:p-8 md:p-12 text-black`}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className={`text-3xl sm:text-4xl font-bold mb-4 ${robotoSlab.className}`}>
          About Zap Ya Pest
        </h1>

        <p className="text-base sm:text-lg mb-6">
          At Zap Ya Pest, we provide trusted pest control services backed by over <strong>5 years of experience</strong>.  
          Our team is committed to protecting your home and business from unwanted pests while ensuring the safety of your family, pets, and property.
        </p>

        <section className="mb-6">
          <h2 className={`text-xl sm:text-2xl font-semibold mb-2 ${robotoSlab.className}`}>
            Our Mission
          </h2>
          <p>
            Our mission is simple: deliver fast, effective, and environmentally conscious pest control solutions with professionalism and care.
          </p>
        </section>

        <section className="mb-6">
          <h2 className={`text-xl sm:text-2xl font-semibold mb-2 ${robotoSlab.className}`}>
            Why Choose Us
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>5+ years of hands-on pest control experience</li>
            <li>Licensed and certified technicians</li>
            <li>Safe, eco-friendly treatments</li>
            <li>Fast response times and excellent customer service</li>
            <li>Customized plans for homes and businesses</li>
          </ul>
        </section>

        <section>
          <h2 className={`text-xl sm:text-2xl font-semibold mb-2 ${robotoSlab.className}`}>
            Our Expertise
          </h2>
          <p>
            From ants and roaches to termites, rodents, and more, we specialize in identifying and eliminating pests quickly and efficiently.  
            Every treatment is designed to solve the problem at its source, giving you peace of mind.
          </p>
        </section>
      </div>
    </main>
  );
}
