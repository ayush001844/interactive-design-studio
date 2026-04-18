import { Calendar, ArrowRight } from "lucide-react";

const events = [
  {
    date: "12 Apr 2026",
    tag: "Cultural",
    title: "International Day of Yoga 2026 — Curtain-Raiser at Jaffna",
    desc: "Consulate General of India, Jaffna joins hands with local partners to launch IDY-2026 awareness sessions across Northern Province.",
  },
  {
    date: "05 Apr 2026",
    tag: "Development",
    title: "Inauguration of India-Assisted Housing Units, Kilinochchi",
    desc: "Handover of 250 houses constructed under the Indian Housing Project benefitting families in the Northern Province.",
  },
  {
    date: "28 Mar 2026",
    tag: "Education",
    title: "ITEC Day 2026 Celebrated at Jaffna Public Library",
    desc: "Alumni of the Indian Technical & Economic Cooperation programme gathered for an evening of dialogue and cultural exchange.",
  },
  {
    date: "18 Mar 2026",
    tag: "Bilateral",
    title: "Free Distribution of Medical Equipment to Jaffna Teaching Hospital",
    desc: "Government of India hands over advanced diagnostic equipment as part of the ongoing health-sector partnership.",
  },
];

export function Events() {
  return (
    <section className="py-16 px-4 bg-secondary/40">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center mb-10">
          <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">
            What's Happening
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">
            Events
          </h2>
          <div className="h-1 w-16 bg-gold mt-4 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {events.map((e, idx) => {
            const isFeature = idx === 0;
            return (
              <article
                key={e.title}
                className={`rounded-xl shadow-elevated overflow-hidden flex flex-col ${
                  isFeature ? "bg-navy text-primary-foreground" : "bg-card text-foreground"
                }`}
              >
                <header
                  className={`flex items-center justify-between px-5 pt-5 pb-3 ${
                    isFeature ? "" : "border-b border-border"
                  }`}
                >
                  <div
                    className={`text-[11px] font-bold tracking-wide uppercase ${
                      isFeature ? "text-gold" : "text-gold"
                    }`}
                  >
                    {e.tag}
                  </div>
                  <Calendar className="h-5 w-5 text-gold" />
                </header>

                <div className="px-5 py-3 flex-1">
                  <div
                    className={`text-[11px] font-semibold mb-1 ${
                      isFeature ? "text-white/70" : "text-muted-foreground"
                    }`}
                  >
                    {e.date}
                  </div>
                  <h3
                    className={`font-display text-base font-bold leading-snug mb-2 ${
                      isFeature ? "text-white" : "text-navy"
                    }`}
                  >
                    {e.title}
                  </h3>
                  <p
                    className={`text-sm leading-snug ${
                      isFeature ? "text-white/80" : "text-foreground/75"
                    }`}
                  >
                    {e.desc}
                  </p>
                </div>

                <a
                  href="#"
                  className={`px-5 pb-5 pt-1 inline-flex items-center gap-1 text-sm font-semibold transition ${
                    isFeature ? "text-gold hover:text-white" : "text-gold hover:text-navy"
                  }`}
                >
                  Read more <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
