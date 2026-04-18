import { MapPin, Phone, Mail, Printer, Clock, Globe, Facebook, Twitter, Instagram } from "lucide-react";
import logo from "@/assets/emblem-india.png";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-primary-foreground pt-16 pb-6">
      <div className="mx-auto max-w-[1400px] px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="CGI Jaffna" className="h-12 w-12 rounded bg-white/95 p-0.5" />
            <div>
              <div className="font-display text-lg font-bold">Consulate General of India</div>
              <div className="text-xs text-gold">Jaffna, Sri Lanka</div>
            </div>
          </div>
          <ul className="space-y-3 text-sm text-primary-foreground/85">
            <li className="flex gap-2"><MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" /> No. 14, Maruthady Lane, Nallur, Jaffna, Sri Lanka</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 text-gold shrink-0 mt-0.5" /> +94-21-2220504, 2220505 (PABX)</li>
            <li className="flex gap-2"><Printer className="h-4 w-4 text-gold shrink-0 mt-0.5" /> Fax: +94-21-2219675, 2220503</li>
            <li className="flex gap-2"><Clock className="h-4 w-4 text-gold shrink-0 mt-0.5" /> 9:00 AM – 5:30 PM • Monday – Friday</li>
            <li className="flex gap-2"><Globe className="h-4 w-4 text-gold shrink-0 mt-0.5" /> <a href="https://www.cgijaffna.gov.in" target="_blank" rel="noreferrer" className="hover:text-gold">www.cgijaffna.gov.in</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 text-gold shrink-0 mt-0.5" /><span>cons.jaffna@mea.gov.in</span></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-bold mb-4">Query Contacts</h4>
          <ul className="space-y-3 text-xs text-primary-foreground/80 leading-relaxed">
            <li><div className="text-gold font-semibold">Passport, Visa & Consular</div>+94-21-2220995, 2220504/5<br />cons.jaffna@mea.gov.in</li>
            <li><div className="text-gold font-semibold">ICCR / ITEC / Education</div>00-94-21-2219085<br />dc.jaffna@mea.gov.in</li>
            <li><div className="text-gold font-semibold">Commercial, Culture & Info</div>00-94-21-2219671<br />comm.jaffna@mea.gov.in</li>
            <li><div className="text-gold font-semibold">Press</div>00-94-21-2219085<br />dc.jaffna@mea.gov.in</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-bold mb-4">Connect</h4>
          <div className="flex gap-3 mb-6">
            <a href="https://www.facebook.com/CGJaffna" target="_blank" rel="noreferrer" aria-label="Facebook" className="h-9 w-9 rounded-full bg-white/10 hover:bg-gold hover:text-navy-deep flex items-center justify-center transition"><Facebook className="h-4 w-4" /></a>
            <a href="https://twitter.com/CGJaffna" target="_blank" rel="noreferrer" aria-label="Twitter" className="h-9 w-9 rounded-full bg-white/10 hover:bg-gold hover:text-navy-deep flex items-center justify-center transition"><Twitter className="h-4 w-4" /></a>
            <a href="https://www.instagram.com/india_in_jaffna" target="_blank" rel="noreferrer" aria-label="Instagram" className="h-9 w-9 rounded-full bg-white/10 hover:bg-gold hover:text-navy-deep flex items-center justify-center transition"><Instagram className="h-4 w-4" /></a>
          </div>
          <div className="text-xs text-primary-foreground/80 space-y-1">
            <div>Twitter: @CGJaffna</div>
            <div>Instagram: india_in_jaffna</div>
            <div>Time: IST (0:00) & GMT (+5:30)</div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-4 mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-primary-foreground/70">
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {["Privacy Policy", "Terms of Use", "Disclaimer", "Accessibility", "Sitemap", "Help"].map((l) => (
            <a key={l} href="#" className="hover:text-gold transition">{l}</a>
          ))}
        </div>
        <div className="text-center md:text-right">
          © 2026 Consulate General of India, Jaffna. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
