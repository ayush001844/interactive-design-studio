import { useEffect, useState } from "react";
import { Calendar, Pause, Play, ArrowRight, Facebook, Twitter } from "lucide-react";

const announcements = [
  {
    date: "2025-04-15",
    title:
      "Tender for the hosting, maintenance, and management of the website of the Consulate General of India, Jaffna",
    href: "https://www.cgijaffna.gov.in",
  },
  {
    date: "2025-04-12",
    title:
      "Tender for Annual Maintenance Contract for Housekeeping/Cleaning services at Consulate General of India, Jaffna",
    href: "https://www.cgijaffna.gov.in",
  },
  {
    date: "2025-04-10",
    title: "APPLICATION FOR THE POST OF LIBRARIAN",
    href: "https://www.cgijaffna.gov.in",
  },
  {
    date: "2025-04-01",
    title:
      "Revision of visa fee for Sri Lankan and Foreign nationals from 01 April 2025 for visiting India",
    href: "https://www.cgijaffna.gov.in",
  },
  {
    date: "2025-03-27",
    title: "Launch of e-Clearance for Afterlife Remains (eCARe) Portal",
    href: "https://www.cgijaffna.gov.in",
  },
];

const fbPosts = [
  {
    author: "India in Sri Lanka, Consulate General of India, Jaffna",
    followers: "8.5K followers",
    body: "Consulate General of India, Jaffna extends heartfelt wishes for a year filled with peace, prosperity, good health, and renewed hope. #SinhalaTamilNewYear",
    time: "last Friday",
  },
  {
    author: "India in Sri Lanka, CGI Jaffna",
    followers: "8.5K followers",
    body: "Glimpses from the International Day of Yoga preparations across the Northern Province — schools, universities and community centres joined hands.",
    time: "2d",
  },
];

const twPosts = [
  {
    author: "@IndiaInSL_CGIJ",
    handle: "CGI Jaffna",
    body: "CG met Hon'ble Governor of Northern Province to discuss ongoing India-assisted development projects in housing, health and education sectors.",
    time: "3h",
  },
  {
    author: "@MEAIndia",
    handle: "Ministry of External Affairs",
    body: "EAM concluded a productive visit to Sri Lanka — reaffirming Neighbourhood First & SAGAR vision. Several MoUs signed.",
    time: "1d",
  },
];

export function Announcements() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [tab, setTab] = useState<"fb" | "tw">("fb");

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(id);
  }, [paused]);

  const current = announcements[index];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[1fr_1.3fr] gap-6 items-stretch">
        {/* Announcements card */}
        <article className="relative rounded-2xl bg-navy text-primary-foreground overflow-hidden shadow-elevated p-8 flex flex-col min-h-[320px]">
          {/* decorative circle */}
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/5" />

          <h3 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-5">
            Announcements
          </h3>

          <div className="flex items-center gap-2 text-gold text-sm font-semibold mb-3">
            <Calendar className="h-4 w-4" />
            <span>{current.date}</span>
          </div>

          <a
            href={current.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-lg md:text-xl font-semibold leading-snug flex-1 hover:text-gold transition-colors"
          >
            {current.title}
          </a>

          <div className="mt-6 flex items-end justify-between">
            <a
              href="#"
              className="inline-flex items-center gap-1 text-white font-semibold hover:text-gold transition"
            >
              View All <ArrowRight className="h-4 w-4" />
            </a>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                {announcements.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to announcement ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? "w-6 bg-white" : "w-1.5 bg-white/40"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setPaused((p) => !p)}
                aria-label={paused ? "Play" : "Pause"}
                className="h-9 w-9 rounded-full bg-white/15 hover:bg-white/25 transition flex items-center justify-center"
              >
                {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </article>

        {/* Social Updates card */}
        <article className="rounded-2xl bg-card shadow-elevated overflow-hidden flex flex-col min-h-[320px]">
          <div className="flex items-center gap-8 px-6 pt-5 border-b border-border">
            <button
              onClick={() => setTab("fb")}
              className={`pb-3 font-display text-lg md:text-xl font-bold transition relative ${
                tab === "fb" ? "text-saffron" : "text-muted-foreground hover:text-navy"
              }`}
            >
              Facebook Updates
              {tab === "fb" && (
                <span className="absolute left-0 right-0 -bottom-px h-1 bg-saffron rounded-full" />
              )}
            </button>
            <button
              onClick={() => setTab("tw")}
              className={`pb-3 font-display text-lg md:text-xl font-bold transition relative ${
                tab === "tw" ? "text-saffron" : "text-muted-foreground hover:text-navy"
              }`}
            >
              Twitter Updates
              {tab === "tw" && (
                <span className="absolute left-0 right-0 -bottom-px h-1 bg-saffron rounded-full" />
              )}
            </button>
          </div>

          <div className="p-5 grid sm:grid-cols-2 gap-4 flex-1">
            {(tab === "fb" ? fbPosts : twPosts).map((p, i) => (
              <div
                key={i}
                className="border border-border rounded-lg p-4 flex flex-col bg-background/50"
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-b from-saffron via-white to-[#1A8A3A] shrink-0 ring-1 ring-border" />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-navy truncate">
                      {p.author}
                    </p>
                    <div className="flex items-center gap-2 mt-0.5">
                      {tab === "fb" ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-1.5 py-0.5 bg-[#1877F2] text-white rounded-sm">
                          <Facebook className="h-3 w-3" /> Follow Page
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-1.5 py-0.5 bg-[#1DA1F2] text-white rounded-sm">
                          <Twitter className="h-3 w-3" /> Follow
                        </span>
                      )}
                      <span className="text-[11px] text-muted-foreground">
                        {(p as { followers?: string }).followers ??
                          (p as { handle?: string }).handle}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed line-clamp-5">
                  {p.body}
                </p>
                <div className="mt-auto pt-3 text-[11px] text-muted-foreground">
                  {p.time}
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
