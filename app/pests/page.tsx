"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Roboto_Slab, Open_Sans } from "next/font/google";
import Breadcrumb from "@/app/components/Breadcrumbs";

const robotoSlab = Roboto_Slab({ subsets: ["latin"], weight: ["400", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function PestsPage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const faqs = [
    {
      question: "What are the most common household pests?",
      answer:
        "Cockroaches, ants, spiders, rodents, termites, bedbugs, mosquitoes, and fleas are the most common. Their activity changes with seasons and local conditions.",
    },
    {
      question: "How do I know if my home has pests?",
      answer:
        "Watch for droppings, unusual smells, chewed items, damage to food or furniture, or actual sightings of pests. Early detection is key to preventing infestations.",
    },
    {
      question: "Can I handle pest control myself?",
      answer:
        "Some small issues can be managed, but professional treatments ensure pests are fully removed and reduce the risk of them coming back.",
    },
    {
      question: "Are pest control chemicals safe for my family and pets?",
      answer:
        "Yes! We only use industry-approved treatments and follow strict safety protocols to protect your loved ones, including pets.",
    },
    {
      question: "How often should I have pest control done?",
      answer:
        "Frequency depends on the type of pest and your home environment. Our team can provide a tailored schedule for ongoing protection.",
    },
  ];

  const pests = [
    {
      title: "Cockroaches",
      img: "/images/cockroaches.png",
      text1:
        "Cockroaches are quick, nocturnal pests that thrive in kitchens and dark, damp areas. They reproduce rapidly, making early control essential.",
      text2:
        "We use targeted sprays, baits, and powders to remove infestations and prevent them from returning.",
      link: "/pests/cockroaches",
    },
    {
      title: "Termites",
      img: "/images/termites.png",
      text1:
        "Termites silently damage timber structures, often unnoticed until serious harm occurs. Moisture attracts them, so monitoring is essential.",
      text2:
        "Our team uses advanced detection tools and barrier treatments to protect your home from these destructive pests.",
      link: "/pests/termites",
    },
    {
      title: "Ants",
      img: "/images/ants.png",
      text1:
        "Ants invade kitchens, gardens, and even wiring. They reproduce quickly and can be difficult to control without professional treatment.",
      text2:
        "We locate and eliminate nests and apply safe treatments to stop them from returning.",
      link: "/pests/ants",
    },
    {
      title: "Spiders",
      img: "/images/spiders.png",
      text1:
        "Spiders hide in corners and dark spaces, laying eggs that multiply rapidly. Some species can be dangerous if left untreated.",
      text2:
        "Our experts safely remove spiders and their webs using sprays and dusts tailored to each species.",
      link: "/pests/spiders",
    },
    {
      title: "Bedbugs",
      img: "/images/bed-bug.jpg",
      text1:
        "Bedbugs feed at night and hide in bedding, furniture, and crevices. They spread quickly without proper treatment.",
      text2:
        "We use professional insecticides and guidance on laundering to ensure these pests won’t return.",
      link: "/pests/bed-bugs",
    },
    {
      title: "Mosquitoes",
      img: "/images/mosqutio.jpg",
      text1:
        "Mosquitoes breed in stagnant water and can transmit diseases. Reducing breeding sites and targeted treatments help protect your family.",
      text2: "",
      link: "/pests/mosquitoes",
    },
    {
      title: "Wasps",
      img: "/images/wasps.jpg",
      text1:
        "Wasps can be aggressive and sting multiple times. Removing nests safely is crucial for family and pet safety.",
      text2: "",
      link: "/pests/wasps",
    },
    {
      title: "Fleas and Ticks",
      img: "/images/flea.jpg",
      text1:
        "Fleas and ticks can spread diseases to pets and humans. They reproduce quickly and require coordinated treatment to remove.",
      text2: "",
      link: "/pests/fleas",
    },
  ];

  return (
    <div className="relative font-sans bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[450px] md:h-[550px]">
        <Image
          src="/images/spiders.png"
          alt="Hero Image"
          fill
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex-1 text-white space-y-4 md:mr-96">
            <h1 className={`${robotoSlab.className} text-4xl md:text-5xl font-bold`}>
              Protect Your Home from Common Pests
            </h1>
            <p className={`${openSans.className} text-lg md:text-xl max-w-xl`}>
              Quick, effective, and safe pest control to keep your home or business pest-free.
            </p>
            <p className={`${openSans.className} max-w-2xl text-base md:text-lg leading-relaxed`}>
              South East Queensland’s mild climate is perfect for pests. From cockroaches to termites, these unwelcome guests can cause damage and discomfort. Learn about the pests in your area and how we can help protect your property.
            </p>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Pests" }]} />

      {/* Request & Info Boxes + Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-12 flex flex-col lg:flex-row gap-8">
        {/* Boxes: Tablet and Desktop Only */}
        <div className="hidden md:flex flex-col gap-6 lg:max-w-sm flex-shrink-0 order-2">
          {/* Quote Box */}
          <div className="bg-green-600 text-white border border-green-700 rounded-lg shadow-lg p-6 flex flex-col items-start space-y-4">
            <h3 className={`${robotoSlab.className} text-2xl font-bold`}>REQUEST A QUOTE</h3>
            <p className={`${openSans.className} uppercase font-semibold text-sm`}>
              For Any Pest Treatment (Starting from $220)
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-green-600 px-6 py-4 rounded-md font-bold uppercase hover:bg-gray-100 transition text-lg"
            >
              Quote Request
            </Link>
            <p className={`${openSans.className} text-sm mt-2`}>
              We respond within 4 hours during business hours and can schedule treatment in under 3 days.
            </p>
            <p className={`${openSans.className} text-sm mt-1`}>
              For urgent bookings, please phone our office on 1300 00 00 00.
            </p>
          </div>

          {/* Info Box */}
          <div className="bg-blue-100 rounded-xl shadow-md p-6 space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-2xl">⚡</span>
              <p className={`${openSans.className} text-slate-700 font-medium`}>
                Fast response to enquiries in under 4 business hours.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-2xl">✅</span>
              <p className={`${openSans.className} text-slate-700 font-medium`}>
                Guarantee: if pests return during the service period, so do we!
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-2xl">👷‍♂️</span>
              <p className={`${openSans.className} text-slate-700 font-medium`}>
                100% certified pest management practitioners.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-2xl">🏅</span>
              <p className={`${openSans.className} text-slate-700 font-medium`}>HACCP (Food Safety) certified</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-16 order-1">
          {/* Pest Overview Intro */}
          <section className="space-y-6">
            <div className="text-center space-y-4">
              <h2 className={`${robotoSlab.className} text-3xl md:text-4xl font-bold text-slate-900`}>
                Common Pests in Moreton Bay, Sunshine Coast & Bribie Island
              </h2>
              <div className="mx-auto w-24 h-1 bg-green-600 rounded" />
            </div>
            <div className="space-y-4 text-slate-700 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
              <p>
                Humans aren’t the only ones who enjoy the warm, coastal climate of South East Queensland.
                The mild weather and abundant food sources make Moreton Bay, the Sunshine Coast, and Bribie Island
                ideal environments for a wide range of household pests.
              </p>
              <p>
                Some pests are easy to spot, while others stay hidden inside walls, roof spaces, gardens,
                and subfloors — often going unnoticed until they become a serious problem.
                Understanding which pests are common in your area is the first step in protecting your home or business.
              </p>
              <p>
                Below is a list of the most common pests we treat across the region, along with information
                on how they behave, the risks they pose, and how professional pest control can help keep them under control.
              </p>
            </div>
          </section>

          {/* Main Pest Content */}
          <section className="flex flex-col gap-16">
            {pests.map((pest, i) => (
              <div key={i} className="flex flex-col items-start text-left space-y-4 w-full">
                <h2 className={`${robotoSlab.className} text-3xl font-bold text-slate-900`}>
                  Pest Control for {pest.title}
                </h2>
                <div className="relative w-full h-64 md:w-[500px] md:h-[500px] rounded-lg overflow-hidden shadow-md">
                  <Image src={pest.img} alt={pest.title} fill className="object-cover" />
                </div>
                <div className="max-w-2xl space-y-2">
                  <p className={`${openSans.className} text-slate-700 text-lg md:text-xl`}>{pest.text1}</p>
                  {pest.text2 && <p className={`${openSans.className} text-slate-700 text-lg md:text-xl`}>{pest.text2}</p>}
                  <Link
                    href={pest.link}
                    className="inline-block bg-green-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-700 transition w-max"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </section>

          {/* FAQ Section */}
          <section className="space-y-4 max-w-4xl mx-auto mt-16">
            <h2 className={`${robotoSlab.className} text-3xl font-bold text-slate-900 text-center`}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                    className="w-full text-left px-4 py-3 font-serif font-semibold flex justify-between items-center bg-white text-black shadow-sm hover:bg-gray-200 "
                  >
                    {faq.question}
                    <span className="ml-2">{faqOpen === i ? "-" : "+"}</span>
                  </button>
                  {faqOpen === i && (
                    <div className="px-4 py-3 bg-white text-black font-sans">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
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
      </div>
    </div>
  );
}
