import Link from "next/link";
import { ChevronRight } from "lucide-react";
import JsonLd from "./JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schema";

export default function Breadcrumbs({ items }) {
  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 text-sm text-gray-500"
      >
        <ol className="flex flex-wrap items-center gap-1">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-gray-400" />}
              {item.url && i < items.length - 1 ? (
                <Link href={item.url} className="hover:text-gold transition-colors">
                  {item.name}
                </Link>
              ) : (
                <span className="text-gray-700 font-medium">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(items)} />
    </>
  );
}
