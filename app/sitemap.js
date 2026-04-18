import { SITE_URL } from "@/lib/seo/business";
import { AREAS } from "@/lib/seo/areas";

export default function sitemap() {
  const now = new Date();

  const staticRoutes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services/panel-upgrade", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services/ev-charger-installation", priority: 0.9, changeFrequency: "monthly" },
    { path: "/emergency-electrician-los-angeles", priority: 0.9, changeFrequency: "monthly" },
    { path: "/panel-upgrade-cost-los-angeles", priority: 0.8, changeFrequency: "monthly" },
    { path: "/projects", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about", priority: 0.6, changeFrequency: "yearly" },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
    { path: "/areas", priority: 0.8, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  ];

  const areaRoutes = AREAS.map((a) => ({
    path: `/areas/${a.slug}`,
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  return [...staticRoutes, ...areaRoutes].map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
