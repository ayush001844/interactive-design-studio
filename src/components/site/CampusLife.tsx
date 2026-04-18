import track from "@/assets/campus-track.jpg";
import gym from "@/assets/campus-gym.jpg";
import cycling from "@/assets/campus-cycling.jpg";
import garden from "@/assets/campus-garden.jpg";

const items = [
  { img: track, title: "Athletics & Track" },
  { img: gym, title: "Strength & Fitness" },
  { img: cycling, title: "Cycling Club" },
  { img: garden, title: "Green Campus" },
];

export function CampusLife() {
  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center mb-10">
          <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Campus Life</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">
            A Disciplined, Vibrant Ecosystem
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it) => (
            <figure
              key={it.title}
              className="relative overflow-hidden rounded-xl group cursor-pointer aspect-[4/3] shadow-soft"
            >
              <img
                src={it.img}
                alt={it.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy/20 to-transparent" />
              <figcaption className="absolute bottom-4 left-4 right-4 text-primary-foreground font-display font-bold text-lg">
                {it.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
