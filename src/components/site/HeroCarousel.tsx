import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import slide3 from "@/assets/slide3.jpeg";
import slide1 from "@/assets/slide1.jpeg";
import slide2 from "@/assets/slide2.jpeg";


const slides = [
  {
    image: slide1,
    title: "Celebration of International Women's Day 2026 at JTCC",
    readMoreUrl: "https://www.cgijaffna.gov.in/events/detail/791",
  },
  {
    image: slide2,
    title: "Celebration of ITEC Day at JTCC",
    readMoreUrl: "https://www.cgijaffna.gov.in/events/detail/788",
  },
  {
    image: slide3,
    title: "St. Anthony's Feast at Katchatheevu",
    readMoreUrl: "https://www.cgijaffna.gov.in/events/detail/790",
  },
];

export function HeroCarousel() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);

  const go = (dir: number) => setI((v) => (v + dir + slides.length) % slides.length);
  const s = slides[i];

  return (
    <section className="relative h-[560px] md:h-[640px] overflow-hidden bg-navy-deep">
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img src={s.image} alt="Hero slide" className="h-full w-full object-cover" />
        </motion.div>
      </AnimatePresence>

      {s.title && (
        <div className="absolute bottom-20 left-0 right-0 z-20 px-4 md:px-8">
          <div className="mx-auto max-w-4xl rounded-xl bg-gradient-to-r from-black/35 via-black/25 to-black/35 px-5 py-4 text-white shadow-xl md:px-8 md:py-5">
            <p className="text-center text-base font-semibold tracking-wide md:text-lg">
              <span className="text-white">{s.title}</span>
              <span className="mx-2 text-white/70">|</span>
              <a
                href={s.readMoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-bold uppercase tracking-wider text-gold underline decoration-gold/80 underline-offset-4 transition-colors hover:text-white"
              >
                READ more
              </a>
            </p>
          </div>
        </div>
      )}

      <button
        onClick={() => go(-1)}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-navy rounded-full p-2 shadow-soft transition"
        aria-label="Previous"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => go(1)}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-navy rounded-full p-2 shadow-soft transition"
        aria-label="Next"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-gold" : "w-2 bg-white/60"}`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
