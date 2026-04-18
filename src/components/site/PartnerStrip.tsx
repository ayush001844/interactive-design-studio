import itec from "@/assets/partners/itec.png";
import mea from "@/assets/partners/mea.png";
import indiagov from "@/assets/partners/indiagov.png";
import incredibleIndia from "@/assets/partners/incredible-india.png";
import iccr from "@/assets/partners/iccr.png";
import hciColombo from "@/assets/partners/hci-colombo.png";
import cpv from "@/assets/partners/cpv.png";
import prabhas from "@/assets/partners/prabhas.png";

const partners = [
  { name: "ITEC", src: itec, href: "https://www.itecgoi.in/" },
  { name: "Ministry of External Affairs, Government of India", src: mea, href: "https://www.mea.gov.in/" },
  { name: "india.gov.in — The National Portal of India", src: indiagov, href: "https://www.india.gov.in/" },
  { name: "Incredible India", src: incredibleIndia, href: "https://www.incredibleindia.gov.in/" },
  { name: "Indian Council for Cultural Relations", src: iccr, href: "https://www.iccr.gov.in/" },
  { name: "High Commission of India, Colombo — Sri Lanka", src: hciColombo, href: "https://www.hcicolombo.gov.in/" },
  { name: "Consular, Passport & Visa Division", src: cpv, href: "https://www.mea.gov.in/cpv.htm" },
  { name: "PRABHAS", src: prabhas, href: "https://prabhas.mea.gov.in/" },
];

export function PartnerStrip() {
  const loop = [...partners, ...partners];

  return (
    <section className="py-8 bg-background overflow-hidden border-y border-border">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="relative overflow-hidden">
          <div className="flex gap-16 w-max animate-marquee items-center">
            {loop.map((p, i) => (
              <a
                key={`${p.name}-${i}`}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={p.name}
                title={p.name}
                className="shrink-0 flex items-center justify-center h-20 transition hover:scale-110"
              >
                <img
                  src={p.src}
                  alt={p.name}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="max-h-16 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
