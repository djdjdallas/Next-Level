import JsonLd from "./JsonLd";
import { faqSchema } from "@/lib/seo/schema";

export default function FAQ({ heading = "Frequently Asked Questions", items }) {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center tracking-tight font-display">
          {heading}
        </h2>
        <div className="space-y-4">
          {items.map((item, i) => (
            <details
              key={i}
              className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm open:shadow-md transition-shadow"
            >
              <summary className="flex items-center justify-between cursor-pointer font-bold text-lg text-navy list-none">
                <span>{item.q}</span>
                <span className="ml-4 flex-shrink-0 text-gold text-2xl leading-none group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <div className="mt-4 text-gray-600 leading-relaxed">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
      <JsonLd data={faqSchema(items)} />
    </section>
  );
}
