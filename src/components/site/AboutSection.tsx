import { ArrowRight } from "lucide-react";
import ceremony from "@/assets/about-ceremony.jpg";

export function AboutSection() {
  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-[1400px] bg-navy text-primary-foreground rounded-3xl p-8 md:p-14 shadow-elevated">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
              An Institution of National Importance
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Consulate General of india 
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed mb-8 text-[15px]">
              The University is destined to grow as a model security educational University of India.
              Its endeavors focus on highly professional security, strategic and police education,
              research and training through its qualified civilian and security and police faculty,
              committed human resource, motivated participants and students, intellectually stimulating
              and professional disciplined environment and world-wide network, sharing and exchange.
              It aims at providing security and strategic education in the contemporary and futuristic
              security strategic and police studies and interdisciplinary areas.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-gold text-navy-deep font-semibold px-6 py-3 rounded-md hover:bg-gold-soft transition group"
            >
              Read More
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </a>
          </div>
          <div className="relative">
            <img
              src={ceremony}
              alt="RRU convocation"
              className="rounded-2xl shadow-elevated w-full object-cover aspect-[4/3]"
              loading="lazy"
            />
            <div className="absolute -bottom-5 -left-5 bg-gold text-navy-deep px-5 py-3 rounded-xl shadow-elevated">
              <div className="font-display text-2xl font-bold">25K+</div>
              <div className="text-xs font-semibold">Trained Cadets</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
