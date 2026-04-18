import { ArrowRight, Quote, Mail, Linkedin } from "lucide-react";
import vc from "@/assets/consul-general.png";

export function VCMessage() {
  return (
    <section className="py-20 px-4 bg-secondary/40">
      <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[420px_1fr] gap-12 items-center">
        <div className="relative mx-auto lg:mx-0">
          <div className="absolute -inset-3 bg-gradient-to-br from-gold/30 to-navy/20 rounded-2xl blur-2xl" />
          <div className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl">
            <img
              src={vc}
              alt="Consul General"
              className="relative w-full object-cover aspect-[4/5] shadow-elevated"
              loading="lazy"
            />
            
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/25 via-transparent to-transparent opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100" />
            
            <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-gradient-to-r from-navy-deep/95 via-navy/95 to-navy-deep/95 px-4 py-3 text-white shadow-elevated opacity-100 transition-all duration-300 md:opacity-0 md:group-hover:opacity-100">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=cons.jaffna@mea.gov.in"
                    aria-label="Email"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/saixmurali/"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
                <a
                  href="https://www.cgijaffna.gov.in/page/display/144"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-white transition-colors hover:text-gold"
                >
                  View Profile <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-5 text-center lg:text-left">
            <h3 className="font-display text-xl font-bold text-navy">
              Shri Sai Murali S.
            </h3>
            <p className="text-sm text-muted-foreground">Consul General</p>
            <p className="text-xs text-gold font-semibold mt-1">
              Consulate General of India, Jaffna
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-navy mb-2">
            Consul General's Message
          </h2>
          <div className="h-1 w-16 bg-gold mb-8 rounded-full" />

          <div className="relative pl-8 mb-6 border-l-4 border-gold">
            <Quote className="absolute -left-4 -top-2 h-7 w-7 text-gold bg-secondary/40 p-1" />
            <p className="text-foreground/85 leading-relaxed text-[15px]">
              The Consulate General of India in Jaffna is committed to strengthening the deep-rooted
              ties of friendship, culture, and cooperation between India and Sri Lanka. We work to
              serve the Indian community, promote trade and investment, expand educational and
              cultural exchanges, and deliver consular services with care, transparency, and speed.
            </p>
          </div>

          <p className="text-foreground/75 leading-relaxed mb-8 text-[15px]">
            Guided by the spirit of <em>Vasudhaiva Kutumbakam</em> — the world is one family — we
            stand ready to assist every visitor, student, trader, and member of the diaspora across
            the Northern and Eastern Provinces of Sri Lanka.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 bg-navy text-primary-foreground font-semibold px-6 py-3 rounded-md hover:bg-navy-deep transition group"
          >
            Read Full Message
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
          </a>
        </div>
      </div>
    </section>
  );
}
