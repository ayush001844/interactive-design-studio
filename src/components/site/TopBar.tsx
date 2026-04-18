import { Facebook, Twitter, Linkedin, Instagram, Youtube, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function TopBar() {
  const [now, setNow] = useState<Date | null>(null);
  const [fontScale, setFontScale] = useState(1);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontScale * 100}%`;
  }, [fontScale]);

  useEffect(() => {
    const root = document.documentElement;
    if (highContrast) {
      root.classList.add("hc-black");
    } else {
      root.classList.remove("hc-black");
    }
  }, [highContrast]);

  const fmt = (d: Date) =>
    d.toLocaleString("en-GB", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

  return (
    <div className="bg-navy-deep text-primary-foreground/90 text-xs">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-2 px-4 py-2">
        <div className="flex items-center gap-3">
          {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
            <a key={i} href="#" aria-label="social" className="opacity-80 hover:opacity-100 hover:text-gold transition">
              <Icon className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <span suppressHydrationWarning className="font-medium tracking-wide">
            {"\u200B"}
          </span>

          <div className="flex items-center gap-1 border-l border-white/20 pl-3">
            <span className="opacity-70 mr-1">Font:</span>
            <button
              onClick={() => setFontScale((s) => Math.max(0.8, s - 0.1))}
              className="px-1.5 py-0.5 rounded hover:bg-white/10 transition"
              aria-label="Decrease font size"
              title="Decrease font size"
            >
              A-
            </button>
            <button
              onClick={() => setFontScale(1)}
              className="px-1.5 py-0.5 rounded hover:bg-white/10 transition"
              aria-label="Reset font size"
              title="Reset font size"
            >
              A
            </button>
            <button
              onClick={() => setFontScale((s) => Math.min(1.4, s + 0.1))}
              className="px-1.5 py-0.5 rounded hover:bg-white/10 transition text-sm"
              aria-label="Increase font size"
              title="Increase font size"
            >
              A+
            </button>
          </div>

          <button
            onClick={() => setHighContrast((v) => !v)}
            className="flex items-center gap-1 border-l border-white/20 pl-3 hover:text-gold transition"
            aria-label="Toggle black and white theme"
            title="Toggle black/white theme"
          >
            {highContrast ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
            <span>{highContrast ? "White" : "Black"} mode</span>
          </button>
        </div>
      </div>
    </div>
  );
}
