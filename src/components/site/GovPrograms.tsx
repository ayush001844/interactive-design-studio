import bharat from "@/assets/prog-bharat.png";
import swachh from "@/assets/prog-swachh.png";
import india from "@/assets/prog-india.png";
import voter from "@/assets/prog-voter.png";

const programs = [
  {
    img: bharat,
    title: "Bharat",
    desc: "Government of India — Official Portal",
    href: "https://www.india.gov.in",
  },
  {
    img: swachh,
    title: "Swachh Bharat (Sweep)",
    desc: "Ek Kadam Swachhata Ki Ore",
    href: "https://swachhbharatmission.gov.in",
  },
  {
    img: india,
    title: "India",
    desc: "Incredible !ndia — Tourism Portal",
    href: "https://www.incredibleindia.org",
  },
  {
    img: voter,
    title: "National Voter Photo",
    desc: "National Voter Service Portal",
    href: "https://www.nvsp.in",
  },
];

export function GovPrograms() {
  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center mb-10">
          <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Government of India Initiatives
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">
            Quick Links
          </h2>
          <div className="h-1 w-16 bg-gold mt-4 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl bg-card shadow-soft hover:shadow-elevated border border-border overflow-hidden flex flex-col items-center text-center p-6 transition hover:-translate-y-1"
            >
              <div className="h-32 w-full flex items-center justify-center mb-4">
                <img
                  src={p.img}
                  alt={p.title}
                  width={128}
                  height={128}
                  loading="lazy"
                  className="max-h-32 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="font-display text-lg font-bold text-navy mb-1 group-hover:text-gold transition">
                {p.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-snug">{p.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
