import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pests } from "@/app/lib/pest";

/* ================================
        STATIC GENERATION
   ================================ */
export async function generateStaticParams() {
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
      title: "Pest Not Found | Zap Ya Pest",
      description: "Professional pest control control services.",
    };
  }

   return {
    title: `${pest.name} Control | Zap Ya Pest`,
    description: pest.summary,

    openGraph: {
      title: `${pest.name} Control`,
      description: pest.summary,
      url: `https://yourdomain.com/pests/${pest.slug}`,
      images: [
        {
          url: pest.icon,
          width: 512,
          height: 512,
          alt: pest.name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${pest.name} Control`,
      description: pest.summary,
      images: [pest.icon],
    },
  };
}

/* ================================
        PAGE COMPONENT
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
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <img
          src={pest.icon}
          alt={pest.name}
          className="w-24 h-24 mx-auto object-contain mb-4"
        />
        <h1 className="text-4xl font-bold mb-2">{pest.name}</h1>
        <p className="text-gray-700 text-lg">{pest.summary}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-2">Prevention</h2>
          <p className="text-gray-600">{pest.prevention}</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-2">Treatment</h2>
          <p className="text-gray-600">{pest.treatment}</p>
        </div>

        {pest.funFact && (
          <div className="bg-white rounded-xl p-6 shadow">
            <h2 className="text-xl font-semibold mb-2">Fun Fact</h2>
            <p className="text-gray-600">{pest.funFact}</p>
          </div>
        )}
      </div>
    </div>
  );
}
