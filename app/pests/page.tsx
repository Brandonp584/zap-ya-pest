"use client";

import Link from "next/link";
import { useState } from "react";
import { pests } from "@/app/lib/pest";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import Image from "next/image";
import { Roboto_Slab, Open_Sans } from "next/font/google";

const robotoSlab = Roboto_Slab({ subsets: ["latin"], weight: ["400", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function PestsPage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const faqs = [
    {
      question: "What are the most common household pests in Sunshine Coast, Bribie Island & Moreton Bay?",
      answer:
        "Common pests include cockroaches, ants, spiders, termites, rodents, fleas, and bedbugs. Their activity varies by season and environment.",
    },
    {
      question: "How can I identify signs of a pest problem?",
      answer:
        "Look for droppings, chewed items, live insects, unusual smells, and damage to food, furniture, or fabrics.",
    },
    {
      question: "Are pest control chemicals safe for my family and pets?",
      answer:
        "Yes! We use industry-approved treatments and follow strict safety protocols to protect everyone in your home.",
    },
    {
      question: "How often should I have pest control done?",
      answer:
        "It depends on the type of pest and your home’s environment. Our team provides tailored schedules for effective prevention.",
    },
    {
      question: "Can I DIY pest control?",
      answer:
        "While minor issues may be managed, professional treatment ensures complete eradication and reduces the risk of re-infestation.",
    },
  ];

  return (
    <div className="relative font-sans bg-white">

      {/* Hero Section */}
      <section className="relative w-full h-[450px] md:h-[550px]">
        {/* Hero Background Image */}
        <Image
          src="/images/spiders.png"
          alt="Hero Image"
          fill
          className="object-cover w-full h-full"
        />

        {/* Hero Text */}
        <div className="absolute inset-0 flex items-center max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex-1 text-white space-y-4 md:mr-96">
            <h1 className={`${robotoSlab.className} text-4xl md:text-5xl font-bold`}>
              Common Pests in Sunshine Coast, Bribie Island & Moreton Bay
            </h1>
            <p className={`${openSans.className} text-lg md:text-xl max-w-xl`}>
              Fast & reliable pest control to keep your home or business safe.
            </p>
            <p className={`${openSans.className} max-w-2xl text-base md:text-lg leading-relaxed`}>
              Pests love the mild Queensland climate just as much as we do. From cockroaches to termites, these unwelcome visitors can invade homes and businesses. Scroll down to explore the most common pests in your area and learn how we can help keep them away.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section Above Pests */}
      <section className="max-w-7xl mx-auto px-6 md:pl-10 md:pr-[420px] space-y-8 mt-12 md:mt-16 relative">
        <p className={`${openSans.className} text-lg md:text-xl text-slate-700 leading-relaxed`}>
          South East Queensland’s comfortable climate isn’t just attractive to people — it also creates the perfect conditions for a wide range of pests to thrive around homes and businesses.
        </p>
        <p className={`${openSans.className} text-lg md:text-xl text-slate-700 leading-relaxed`}>
          Many pests stay hidden until numbers build up, which means they’re often present long before you notice them. Below, you can learn more about the most common pests found across Moreton Bay, the Sunshine Coast, and Bribie Island.
        </p>
        <p className={`${openSans.className} text-lg md:text-xl text-slate-700 leading-relaxed`}>
          Below is a list of the pests most likely to cause problems in and around your home or garden:
        </p>

        <ul className={`${openSans.className} list-disc list-inside text-slate-700 space-y-1`}>
            <li>
                <Link href="/pests/cockroaches" className="hover:underline text-green-700">
                    Cockroaches
                </Link>
            </li>
            <li>
                <Link href="/pests/termites" className="hover:underline text-green-700">
                    Termites
                </Link>
            </li>
            <li>
                <Link href="/pests/ants" className="hover:underline text-green-700">
                    Ants
                </Link>
            </li>
            <li>
                <Link href="/pests/spiders" className="hover:underline text-green-700">
                    Spiders
                </Link>
            </li>
            <li>
                <Link href="/pest/bed-bugs" className="hover:underline text-green-700">
                    Bedbugs
                </Link>
            </li>
            <li>
                <Link href="/pests/mosquitoes" className="hover:underline text-green-700">
                    Mosquitoes
                </Link>
            </li>
            <li>
                <Link href="/pests/wasps" className="hover:underline text-green-700">
                    Wasps
                </Link>
            </li>
            <li>Flies</li>
            <li>
                <Link href="/pests/fleas" className="hover:underline text-green-700">
                    Fleas and Ticks
                </Link>
            </li>
            <li>Textile Pests</li>
            <li>
                <Link href="/pests/mice" className="hover:underline text-green-700">
                    Mice
                </Link>
            </li>
            <li>
                <Link href="/pests/rats" className="hover:underline text-green-700">
                    Rats
                </Link>
            </li>
            <li>
                <Link href="/pests/silverfish" className="hover:underline text-green-700">
                    Silverfish
                </Link>
            </li>
            <li>Pantry Pests</li>
        </ul>

        <p className={`${openSans.className} text-lg md:text-xl text-slate-700 leading-relaxed`}>
          Thankfully, homeowners and businesses across Moreton Bay, the Sunshine Coast, and Bribie Island can count on the experienced team at Zap Ya Pests. As locals who understand the unique pest challenges in these areas, we use proven treatment methods and practical expertise to remove unwanted pests and help keep your property protected year-round.
        </p>
      </section>

      {/* Request & Info Boxes (Desktop Only) */}
      <div className="hidden md:block absolute top-[420px] right-0 max-w-sm mr-6 z-10">
        {/* Request a Quote Box */}
        <div className="bg-green-600 text-white border border-green-700 rounded-lg shadow-lg p-6 flex flex-col items-start space-y-4">
          <h3 className={`${robotoSlab.className} text-2xl font-bold`}>REQUEST A QUOTE</h3>
          <p className="uppercase font-semibold text-sm">For Any Pest Treatment (Starting from $220)</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-green-600 px-6 py-4 rounded-md font-bold uppercase hover:bg-gray-100 transition text-lg"
          >
            Quote Request
          </Link>
          <p className={`${openSans.className} text-sm mt-2`}>
            We offer a 4-hour response time during business hours, and can be at your place treating in less than 3 days.<br/>
            For urgent bookings, please phone our office on 1300 00 00 00.
          </p>
        </div>

        {/* Info Boxes */}
        <div className="bg-blue-100 rounded-xl shadow-md p-6 mt-6 space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-blue-600 text-2xl">⚡</span>
            <p className={`${openSans.className} text-slate-700 font-medium`}>Fast response to enquiries in under 4 business hours.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-600 text-2xl">✅</span>
            <p className={`${openSans.className} text-slate-700 font-medium`}>Guarantee: if pests return within the service period, so do we!</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-600 text-2xl">👷‍♂️</span>
            <p className={`${openSans.className} text-slate-700 font-medium`}>100% certified pest management practitioners.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-600 text-2xl">🏅</span>
            <p className={`${openSans.className} text-slate-700 font-medium`}>HACCP (Food Safety) certified</p>
          </div>
        </div>
      </div>

      {/* Main Pest Content */}
      <section className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto px-6 md:px-10 mt-8">
        <div className="flex-1 space-y-16">
          {pests.map((pest) => (
            <div key={pest.slug} className="flex flex-col space-y-6">
              <h2 className={`${robotoSlab.className} text-3xl font-bold text-slate-900`}>{pest.name}</h2>
              <div className="w-full h-64 relative rounded-lg overflow-hidden shadow-md">
                <Image
                  src={pest.image || "/placeholder-pest.jpg"}
                  alt={pest.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                {pest.description && <p className={`${openSans.className} text-slate-700`}>{pest.description}</p>}
                {pest.summary && <p className={`${openSans.className} text-slate-700`}>{pest.summary}</p>}
                {pest.treatment && (
                  <>
                    <p className={`${openSans.className} text-slate-700 font-semibold`}>Treatment:</p>
                    <p className={`${openSans.className} text-slate-700`}>{pest.treatment}</p>
                  </>
                )}
                {pest.prevention && (
                  <>
                    <p className={`${openSans.className} text-slate-700 font-semibold`}>Prevention:</p>
                    <p className={`${openSans.className} text-slate-700`}>{pest.prevention}</p>
                  </>
                )}
                {pest.funFact && (
                  <>
                    <p className={`${openSans.className} text-slate-700 font-semibold`}>Fun Fact:</p>
                    <p className={`${openSans.className} text-slate-700`}>{pest.funFact}</p>
                  </>
                )}

                <Link
                  href={`/pests/${pest.slug}`}
                  className="inline-block bg-green-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-green-700 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="space-y-6 max-w-7xl mx-auto px-6 md:px-10 mt-16">
        <h2 className={`${robotoSlab.className} text-3xl font-bold text-slate-900 text-center`}>Frequently Asked Questions</h2>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                className="w-full flex justify-between items-center px-4 py-3 text-left text-slate-700 font-medium hover:bg-gray-50 transition"
              >
                {faq.question}
                {faqOpen === index ? <HiChevronUp /> : <HiChevronDown />}
              </button>
              <div
                className={`px-4 pb-4 text-slate-600 transition-max-height duration-300 overflow-hidden ${faqOpen === index ? "max-h-96 mt-2" : "max-h-0"}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="text-center max-w-7xl mx-auto px-6 md:px-10 mt-12 mb-12">
        <p className={`${openSans.className} text-lg text-slate-700 mb-4`}>
          Ready to protect your home or business from pests?
        </p>
        <Link
          href="/contact"
          className="inline-block bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition"
        >
          Get a Free Quote
        </Link>
      </section>
    </div>
  );
}
