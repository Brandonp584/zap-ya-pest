import Link from "next/link";

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="bg-slate-50 border-b border-slate-200" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-6 py-3 text-sm text-slate-600 flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="hover:text-green-600 font-medium">
                {item.label}
              </Link>
            ) : (
              <span className="text-slate-800 font-semibold">{item.label}</span>
            )}
            {i < items.length - 1 && <span className="text-slate-400">›</span>}
          </span>
        ))}
      </div>
    </nav>
  );
}
