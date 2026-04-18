import { ArrowRight, Megaphone } from "lucide-react";

const releases = [
  {
    date: "15 Apr 2026",
    title: "EAM's Visit to Sri Lanka — Joint Statement",
    body: "External Affairs Minister concluded a successful two-day visit to Sri Lanka, reaffirming the Neighbourhood First and SAGAR vision. Several MoUs were exchanged covering energy, digital public infrastructure, and connectivity.",
  },
  {
    date: "08 Apr 2026",
    title: "India hands over Emergency Medical Equipment to Northern Province",
    body: "As part of its development partnership, the Government of India handed over a consignment of advanced medical equipment to hospitals across the Northern Province of Sri Lanka.",
  },
  {
    date: "02 Apr 2026",
    title: "SLINEX-2026 — India-Sri Lanka Joint Naval Exercise concludes at Trincomalee",
    body: "The 12th edition of SLINEX concluded with enhanced interoperability between the two navies, reinforcing maritime security cooperation in the Indian Ocean Region.",
  },
];

export function PressReleaseFeature() {
  return (
    <section className="py-20 px-4">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10">
          <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Latest from the Consulate
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-navy">
            Press Releases
          </h2>
          <div className="h-1 w-16 bg-gold mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {releases.map((r, idx) => (
            <article
              key={r.title}
              className={`rounded-xl shadow-elevated overflow-hidden flex flex-col ${
                idx === 0 ? "bg-navy text-primary-foreground lg:row-span-1" : "bg-card"
              }`}
            >
              <header
                className={`flex items-center justify-between px-6 pt-6 pb-3 ${
                  idx === 0 ? "" : "border-b border-border"
                }`}
              >
                <span className="text-[11px] font-bold tracking-wider uppercase text-gold">
                  {r.date}
                </span>
                <Megaphone className="h-5 w-5 text-gold" />
              </header>
              <div className="px-6 pb-4 flex-1">
                <h3
                  className={`font-display text-xl font-bold leading-snug mb-3 ${
                    idx === 0 ? "text-white" : "text-navy"
                  }`}
                >
                  {r.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    idx === 0 ? "text-white/85" : "text-foreground/80"
                  }`}
                >
                  {r.body}
                </p>
              </div>
              <a
                href="#"
                className={`px-6 pb-6 pt-1 inline-flex items-center gap-1 text-sm font-semibold transition ${
                  idx === 0 ? "text-gold hover:text-white" : "text-gold hover:text-navy"
                }`}
              >
                Read full release <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
