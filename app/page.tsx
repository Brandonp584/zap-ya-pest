"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen text-gray-900">

      {/* ================= HERO SECTION ================= */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28">
        <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold max-4xl"
      >
        Fast, Reliable Pest Control You Can Trust
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-6 text-lg md:text-xl max-w-2xl text-gray-600"
      >
        Protect your home and business with professional pest control services.
        Safe treatments, proven results, and local experts you can rely on.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-10 flex gap-4"
      >
        <a 
          href="/contact"
          className="px-6 py-3 rounded-md text-white bg-black hover:opacity-90 transition"
        >
          Get a Free Quote
        </a>

        < a 
          href="/services"
          className="px-6 py-3 rounded-md text-white bg-black hover:opacity transition"
        >
          View Services
        </a>
      </motion.div>
      </section>

      {/* ================= TRUST BAR ================= */}
      <section className="bg-gray-50 pu-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm font-medium">
          <div>✔ Licensed & Insured</div>
          <div>✔ Local Pest Experts</div>
          <div>✔ Family & Pet Safe</div>
          <div>✔ Satisfaction Guaranteed</div>
        </div>
      </section>

      {/* ================= SERVICES PREVIEW ================= */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-14">
          Our Pest Control Services
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            "General Pest Control",
            "Termite Protection",
            "Rodent Control",
            "Commercial Pest Control",
          ].map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border rounded-xl p-6 hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg mb-2">{service}</h3>
              <p className="text-sm text-gray-600 mb-4">
                Effective treatments designed to eliminate and prevent pests.
              </p>
              <a href="/services" className="text-sm font-medium underline">
                Learn More →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-black text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14">
            Why Choose Zap Ya Pest?
          </h2>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              {
                title: "Experienced Technicians",
                text: "Fully trained professionals using industry-leading methods.",
              },
              {
                title: "Safe & Effecive Treatments",
                text: "Tough on pests while remaing safe for families and pests.",
              },
              {
                title: "Reliable, On-Time Service",
                text: " We show up on time and get the job done right the first time",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{opacity: 1, y: 0 }}
                viewport={{ once: true}}
                transition={{ delay: index * 0.15 }}
              >
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.text}</p>
              </motion.div>                
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT PREVIEW ================= */}
      <section className="py-24 px-6 mx-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Local Pest Control You Can Rely On 
        </h2>

        <p className="text-gray-600 text-lg mb-6">
          Zap Ya Pest is a locally operated pest control company focused on
          protecting homes and businesses with honest service and proven solutions.
        </p>

        <a href="/about" className="font- medium underline">
        Learn More About Us →
        </a>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-gray-900 text-white py-24 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Need Pest Control Today?
        </h2>

        <p className="text-gray-300 mb-8">
          Contact Zap Ya Pest now for a fast, reliable pest control servicess.
        </p>

        <a 
          href="/contact"
          className="px-8 py-4 bg-white text-black rounded-md font-medium hover:opacity-90 transition"
        >
          Get a Free Quote
        </a>
      </section>
    </main>
  )
}
