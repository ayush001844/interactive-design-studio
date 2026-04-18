import { useEffect, useState, type FormEvent } from "react";
import { ChevronDown, Menu, X, Search } from "lucide-react";
import satyamavJyata from "@/assets/satyamav-jyata.png";
import sriLankaFlag from "@/assets/sri-lanka.png";

const nav = [
  { label: "Home", href: "/" },
  {
    label: "Consulate General",
    children: [
      { label: "Consul General", href: "/consul-general" },
      { label: "Officer List", href: "/office-list" },
      
    ],
  },
  {
    label: "Visa Passport & Consular Service",
    children: [
      { label: "Visa", href: "#" },
      { label: "Passport", href: "#" },
      { label: "Consular Services", href: "#" },
    ],
  },
  {
    label: "India-Sri Lanka Relations",
    children: [
      { label: "India-Sri Lanka Bilateral Relations", href: "/india-sri-lanka-bilateral-relations" },
      { label: "India-Sri Lanka Economic And Trade Engagement", href: "/india-sri-lanka-economic-and-trade-engagement" },
    ],
  },
  {
    label: "Projects",
    children: [
      { label: "Ongoing", href: "#" },
      { label: "Completed", href: "#" },
    ],
  },
  {
    label: "Education",
    children: [
      { label: "Scholarships", href: "#" },
      { label: "ITEC", href: "#" },
    ],
  },
  {
    label: "Media Center",
    children: [
      { label: "Press Releases", href: "#" },
      { label: "Gallery", href: "#" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

function formatTime(date: Date, timeZone: string) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "short",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  })
    .format(date)
    .replace(",", ",")
    .replace(" at ", " at ");
}

function LiveClock() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="text-[11px] md:text-xs text-navy/80 font-medium leading-tight space-y-1">
      <div suppressHydrationWarning className="flex items-center gap-2 justify-end">
        <span>{now ? formatTime(now, "Asia/Kolkata") : "\u00A0"}</span>
        <span
          aria-label="India"
          className="relative inline-block h-3.5 w-6 overflow-hidden rounded-[2px] border border-black/10"
          style={{
            background:
              "linear-gradient(to bottom, #ff9933 0%, #ff9933 33.33%, #ffffff 33.33%, #ffffff 66.66%, #138808 66.66%, #138808 100%)",
          }}
        >
          <span className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1a3c8a]" />
        </span>
      </div>
      <div suppressHydrationWarning className="flex items-center gap-2 justify-end">
        <span>{now ? formatTime(now, "Asia/Colombo") : "\u00A0"}</span>
        <img
          src={sriLankaFlag}
          alt="Sri Lanka flag"
          width={24}
          height={14}
          className="h-3.5 w-6 rounded-[2px] border border-black/10 object-cover"
        />
      </div>
    </div>
  );
}

const SEARCH_MAP: Record<string, string> = {
  visa: "/visa",
  passport: "/passport",
  "consul general": "/consul-general",
  "officer list": "/office-list",
  "economic and trade": "/india-sri-lanka-economic-and-trade-engagement",
  itec: "/education",
  education: "/education",
  press: "/media-center",
  gallery: "/media-center",
  contact: "/contact",
};

function HeaderSearch() {
  const [q, setQ] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const query = q.trim().toLowerCase();
    if (!query) return;
    const match = SEARCH_MAP[query];
    if (match) {
      window.location.href = match;
      return;
    }
    window.open(
      `https://www.google.com/search?q=site:cgijaffna.gov.in+${encodeURIComponent(q.trim())}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex items-stretch w-full md:w-72">
      <input
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search the consulate site…"
        className="flex-1 min-w-0 rounded-l-md border border-navy/20 bg-white text-navy placeholder:text-navy/40 px-3 py-2 text-sm focus:outline-none focus:border-gold"
      />
      <button
        type="submit"
        aria-label="Search"
        className="rounded-r-md bg-navy text-primary-foreground px-3 hover:bg-gold hover:text-navy transition"
      >
        <Search className="h-4 w-4" />
      </button>
    </form>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 shadow-soft">
      {/* Top white row: emblem + title + search + clocks */}
      <div className="bg-white text-navy border-b border-border">
        <div className="mx-auto max-w-[1400px] px-4 py-3 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
          <div className="flex items-center justify-between gap-3">
            <a href="/" className="flex items-center gap-3 shrink-0">
              <img
                src={satyamavJyata}
                alt="State Emblem of India — Satyamev Jayate"
                width={64}
                height={64}
                className="h-16 w-16 object-contain"
              />
              <div className="leading-tight">
                <div className="font-display text-base sm:text-lg md:text-xl font-bold text-navy">
                  Consulate General of India
                </div>
                <div className="text-[11px] md:text-xs text-navy/70">
                  Jaffna, Sri Lanka
                </div>
              </div>
            </a>
            <button
              className="lg:hidden p-2 text-navy"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5 lg:justify-end">
            <HeaderSearch />
            <LiveClock />
          </div>
        </div>
      </div>

      {/* Navy nav strip */}
      <div className="bg-navy text-primary-foreground">
        <nav className="hidden lg:block">
          <ul className="mx-auto max-w-[1400px] px-4 flex items-center justify-between">
            {nav.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setActive(item.label)}
                onMouseLeave={() => setActive(null)}
              >
                {item.href && !item.children ? (
                  <a
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-3 text-sm font-medium hover:text-gold transition"
                  >
                    {item.label}
                  </a>
                ) : (
                  <button className="flex items-center gap-1 px-3 py-3 text-sm font-medium hover:text-gold transition">
                    {item.label}
                    {item.children && <ChevronDown className="h-3.5 w-3.5" />}
                  </button>
                )}
                {item.children && active === item.label && (
                  <div className="absolute left-0 top-full bg-white text-foreground rounded-md shadow-elevated min-w-[240px] py-2 z-50 animate-in fade-in slide-in-from-top-1">
                    {item.children.map((c) => (
                      <a
                        key={c.label}
                        href={c.href}
                        target={c.href?.startsWith("http") ? "_blank" : undefined}
                        rel={c.href?.startsWith("http") ? "noopener,noreferrer" : undefined}
                        className="block px-4 py-2 text-sm hover:bg-secondary hover:text-navy transition"
                      >
                        {c.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {open && (
          <div className="lg:hidden border-t border-white/10 px-4 py-3 space-y-1">
            {nav.map((i) => (
              <a
                key={i.label}
                href={i.href || "#"}
                target={i.href?.startsWith("http") ? "_blank" : undefined}
                rel={i.href?.startsWith("http") ? "noopener,noreferrer" : undefined}
                className="block py-2 text-sm"
              >
                {i.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
