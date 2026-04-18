import { Megaphone, Building2, Globe2, TrendingUp, ArrowRight } from "lucide-react";

type Item = { date?: string; tag?: string; text: string; href: string };

const blocks: {
  key: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  items: Item[];
}[] = [
  {
    key: "press",
    title: "Press Release",
    icon: Megaphone,
    items: [
      { date: "2026-04-12", text: "EAM visit to Sri Lanka — Joint Statement", href: "#" },
      { date: "2026-04-05", text: "India hands over Emergency Medical Equipment to Northern Province", href: "#" },
      { date: "2026-03-28", text: "SLINEX-2026 — India-Sri Lanka Joint Naval Exercise concludes", href: "#" },
    ],
  },
  {
    key: "consulate",
    title: "Consulate",
    icon: Building2,
    items: [
      { tag: "About", text: "Consul General of India, Jaffna", href: "#" },
      { tag: "Officers", text: "Officer List & Jurisdiction", href: "#" },
      { tag: "Notice", text: "Consulate Holidays Calendar 2026", href: "#" },
    ],
  },
  {
    key: "srilanka",
    title: "Sri Lanka",
    icon: Globe2,
    items: [
      { tag: "Bilateral", text: "India-Sri Lanka Bilateral Relations", href: "#" },
      { tag: "Culture", text: "Cultural & People-to-People Ties", href: "#" },
      { tag: "Development", text: "Development Partnership in Northern Province", href: "#" },
    ],
  },
  {
    key: "trade",
    title: "Trade & Investment",
    icon: TrendingUp,
    items: [
      { tag: "ISFTA", text: "India-Sri Lanka Free Trade Agreement", href: "#" },
      { tag: "BIPA", text: "Bilateral Investment Promotion Agreement", href: "#" },
      { tag: "Invest India", text: "Opportunities for Sri Lankan Businesses", href: "#" },
    ],
  },
];

export function InfoCards() {
  return (
    <section className="relative -mt-16 z-20 mx-auto max-w-[1400px] px-4">
      {/* Flags header */}
      <div className="flex items-center justify-center gap-3 mb-5">
        <span className="text-2xl md:text-3xl leading-none" aria-label="India">🇮🇳</span>
        <span className="font-display text-base md:text-lg font-semibold text-white drop-shadow">
          India · Sri Lanka
        </span>
        <span className="text-2xl md:text-3xl leading-none" aria-label="Sri Lanka">🇱🇰</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {blocks.map(({ key, title, icon: Icon, items }, idx) => {
          const isFeature = idx === 0;
          return (
            <article
              key={key}
              className={`rounded-xl shadow-elevated overflow-hidden flex flex-col ${
                isFeature
                  ? "bg-navy text-primary-foreground"
                  : "bg-card text-foreground"
              }`}
            >
              <header
                className={`flex items-center justify-between px-5 pt-5 pb-3 ${
                  isFeature ? "" : "border-b border-border"
                }`}
              >
                <h3
                  className={`font-display text-xl md:text-2xl font-bold ${
                    isFeature ? "text-white" : "text-navy"
                  }`}
                >
                  {title}
                </h3>
                <Icon className={`h-5 w-5 ${isFeature ? "text-gold" : "text-gold"}`} />
              </header>

              <ul className="px-5 py-3 space-y-3 flex-1">
                {items.map((it, i) => (
                  <li key={i}>
                    {(it.date || it.tag) && (
                      <div
                        className={`text-[11px] font-semibold tracking-wide ${
                          isFeature ? "text-gold" : "text-gold"
                        }`}
                      >
                        {it.date ?? it.tag}
                      </div>
                    )}
                    <a
                      href={it.href}
                      className={`block text-sm leading-snug mt-0.5 transition ${
                        isFeature
                          ? "text-white/90 hover:text-gold"
                          : "text-navy hover:text-gold"
                      }`}
                    >
                      {it.text}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`px-5 pb-5 pt-1 inline-flex items-center gap-1 text-sm font-semibold transition ${
                  isFeature ? "text-gold hover:text-white" : "text-gold hover:text-navy"
                }`}
              >
                View all <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
