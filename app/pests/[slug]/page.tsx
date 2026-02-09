// app/pests/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { pests } from "@/app/lib/pests";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumbs";
import FAQAccordion from "./FAQAccordion";

/* ================================
   STATIC GENERATION
================================ */
export function generateStaticParams() {
  return pests.map((pest) => ({
    slug: pest.slug,
  }));
}

/* ================================
   SEO METADATA
================================ */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pest = pests.find((p) => p.slug === slug);

  if (!pest) {
    return {
      title: "Pest Not Found | Zap Ya Pests",
      description: "Professional pest control services in SE Queensland.",
    };
  }

  const introText = pest.intro.join(" ");

  return {
    title: `${pest.name} Control | Zap Ya Pests`,
    description: introText,
    openGraph: {
      title: `${pest.name} Control`,
      description: introText,
      images: [
        {
          url: pest.heroImage,
          width: 1200,
          height: 630,
          alt: pest.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${pest.name} Control`,
      description: introText,
      images: [pest.heroImage],
    },
  };
}

/* ================================
   PAGE
================================ */
export default async function PestPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const pest = pests.find((p) => p.slug === slug);
  if (!pest) return notFound();

  return (
    <main className="bg-white font-sans text-black">

      {/* HERO */}
      <section className="relative w-full h-[65vh] min-h-[480px]">
        <Image
          src={pest.heroImage}
          alt={pest.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="max-w-4xl mx-auto px-6 text-white">
            <h1 className="text-4xl md:text-6xl font-serif font-extrabold mb-4">
              {pest.heroTitle}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl">
              {pest.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* BREADCRUMBS */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Pests", href: "/pests" },
          { label: `${pest.name} Control` },
        ]}
      />

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-12">

        {/* PAGE TITLE */}
        <header className="flex flex-col items-center text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-serif font-extrabold">
            {pest.heroTitle} 
          </h2>
          <div className="w-20 h-1 bg-blue-600 rounded" />
        </header>
        
        {/* INTRO */}
        <div className="space-y-4 text-lg leading-relaxed">
          {pest.intro.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {/* OVERVIEW */}
        {pest.overview && (
          <div>
            <h2 className="text-2xl font-serif font-bold mb-4">
              About {pest.name}
            </h2>
            <ul className="space-y-3 list-disc list-inside">
              {pest.overview.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* SPECIES */}
        {pest.species && (
          <div>
            <h2 className="text-2xl font-serif font-bold mb-8">
              Common Species
            </h2>

            <div className="space-y-12">
              {pest.species.map((species, i) => (
                <div key={i} className="space-y-4">

                  {/* SPECIES NAME */}
                  <h3 className="text-xl md:text-xl font-serif font-semibold">
                    {species.name}
                  </h3>

                  {/* IMAGE */}
                  <div className="w-full w-[420px]">
                    {species.image && (
                      <Image
                        src={species.image}
                        alt={species.name}
                        width={420}
                        height={420}
                        className="rounded-xl object-cover"
                      />
                    )}

                    {species.imageAttribution && (
                      <p className="mt-2 text-xs text-slate-500 leading-snug">
                        Image: {species.imageAttribution.author},{" "}
                        <a
                          href={species.imageAttribution.sourceUrl}
                          className="underline hover:text-slate-700"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {species.imageAttribution.sourceName}
                        </a>{" "}
                        ({species.imageAttribution.license})
                      </p>
                    )}
                  </div>

                  {/* DESCRIPTION */}
                  <ul className="list-disc list-inside space-y-2 text-base md:text-lg">
                    {species.description.map((line, j) => (
                      <li key={j}>{line}</li>
                    ))}
                  </ul>

                </div>
              ))}
            </div>
          </div>
        )}

        {/* WHY IT'S A PROBLEM */}
        {pest.whyItsAProblem && (
          <div>
            <h2 className="text-2xl font-serif font-bold mb-4">
              Why {pest.name} Are a Problem
            </h2>
            <ul className="space-y-3 list-disc list-inside">
              {pest.whyItsAProblem.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* PREVENTION */}
        {pest.prevention && (
          <div>
            <h2 className="text-2xl font-serif font-bold mb-4">
              Prevention Tips
            </h2>
            <ul className="space-y-3 list-disc list-inside">
              {pest.prevention.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* TREATMENT */}
        {pest.treatment && (
          <div>
            <h2 className="text-2xl font-serif font-bold mb-4">
              Professional Treatment
            </h2>
            <ul className="space-y-3 list-disc list-inside">
              {pest.treatment.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* FAQ */}
        {pest.faq && (
          <section className="mt-12">
            <h2 className="text-2xl font-serif font-bold mb-6">
              FAQ
            </h2>
            <FAQAccordion faq={pest.faq} />
          </section>
        )}

        {/* CTA */}
        {pest.ctaTitle && (
          <section className="bg-green-600 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">
              {pest.ctaTitle}
            </h2>
            <p className="mb-6 text-lg">
              {pest.ctaText}
            </p>
            <Link
              href={pest.ctaLink}
              className="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-md hover:bg-slate-100 transition"
            >
              Get a Quote
            </Link>
          </section>
        )}
      </section>

      {/* FAQ STRUCTURED DATA */}
      {pest.faq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: pest.faq.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: f.answer,
                },
              })),
            }),
          }}
        />
      )}
    </main>
  );
}
