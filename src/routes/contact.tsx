import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/site/TopBar";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us - Consulate General of India, Jaffna" },
      {
        name: "description",
        content:
          "Contact details for Consulate General of India, Jaffna including address, office hours, phone numbers, and official channels.",
      },
    ],
  }),
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-8 md:py-10">
        <div className="mb-5 text-sm text-muted-foreground">
          <a href="/" className="text-navy hover:text-gold transition-colors">
            Home
          </a>
          <span className="mx-1">&gt;</span>
          <span className="font-medium text-navy">Contact</span>
        </div>

        <section className="overflow-hidden rounded-lg border border-border bg-card shadow-soft">
          <div className="border-b border-border bg-secondary/40 px-4 py-6 text-center md:py-7">
            <h1 className="font-display text-xl font-bold text-navy underline underline-offset-4 md:text-2xl">
              Contact
            </h1>
            <h2 className="mt-2 font-display text-2xl font-semibold text-navy md:text-3xl">
              Consulate General of India
            </h2>
            <p className="mt-1 text-base font-medium text-navy/80 md:text-lg">Jaffna</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-sm md:text-base">
              <tbody>
                <tr className="border-b border-border">
                  <th className="w-[18%] border-r border-border bg-secondary/60 px-4 py-3 text-left font-semibold text-navy">
                    Address
                  </th>
                  <td colSpan={3} className="px-4 py-3 leading-relaxed text-foreground/90">
                    No.14, Maruthady Lane, Nallur, Jaffna, Sri Lanka
                  </td>
                </tr>

                <tr className="border-b border-border bg-secondary/30">
                  <th className="border-r border-border px-4 py-3 text-left font-semibold text-navy">
                    Time difference
                  </th>
                  <td colSpan={3} className="px-4 py-3 leading-relaxed text-foreground/90">
                    IST (0:00) &amp; GMT (+ 5:30)
                  </td>
                </tr>

                <tr className="border-b border-border">
                  <th className="border-r border-border bg-secondary/60 px-4 py-3 text-left font-semibold text-navy">
                    Telephone
                  </th>
                  <td className="border-r border-border px-4 py-3 leading-relaxed text-foreground/90">
                    + 94-21-2220504, 2220505 (PABX)
                  </td>
                  <th className="w-[12%] border-r border-border bg-secondary/60 px-4 py-3 text-left font-semibold text-navy">
                    Fax
                  </th>
                  <td className="px-4 py-3 leading-relaxed text-foreground/90">+ 94-21-2219675, 2220503</td>
                </tr>

                <tr className="border-b border-border bg-secondary/30">
                  <th className="border-r border-border px-4 py-3 text-left font-semibold text-navy">
                    Office Hours
                  </th>
                  <td className="border-r border-border px-4 py-3 leading-relaxed text-foreground/90">9.00 AM to 5.30 PM</td>
                  <th className="border-r border-border px-4 py-3 text-left font-semibold text-navy whitespace-nowrap">
                    Working days
                  </th>
                  <td className="px-4 py-3 leading-relaxed text-foreground/90">Monday - Friday</td>
                </tr>

                <tr className="border-b border-border">
                  <th className="border-r border-border bg-secondary/60 px-4 py-3 text-left font-semibold text-navy">
                    Website
                  </th>
                  <td className="border-r border-border px-4 py-3">
                    <a
                      href="https://www.cgijaffna.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy hover:text-gold underline transition-colors"
                    >
                      www.cgijaffna.gov.in
                    </a>
                  </td>
                  <th className="border-r border-border bg-secondary/60 px-4 py-3 text-left font-semibold text-navy whitespace-nowrap">
                    Official twitter handle
                  </th>
                  <td className="px-4 py-3 leading-relaxed text-foreground/90">@CGJaffna</td>
                </tr>

                <tr className="bg-secondary/30">
                  <th className="border-r border-border px-4 py-3 text-left font-semibold text-navy">
                    Facebook Page
                  </th>
                  <td className="border-r border-border px-4 py-3 leading-relaxed text-foreground/90">
                    India in Sri Lanka, Consulate General of India, Jaffna (
                    <a
                      href="https://www.facebook.com/CGJaffna"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy hover:text-gold underline transition-colors"
                    >
                      https://www.facebook.com/CGJaffna
                    </a>
                    )
                  </td>
                  <th className="border-r border-border px-4 py-3 text-left font-semibold text-navy whitespace-nowrap">
                    Instagram Handle
                  </th>
                  <td className="px-4 py-3 leading-relaxed text-foreground/90">india_in_jaffna</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4 border-t border-border px-4 py-6 text-foreground/90 md:px-6 md:py-8">
            <p className="text-sm leading-relaxed md:text-base">
              For queries related to Indian Passport, Indian Visas &amp; Consular matters, please
              contact +94-21-2220995, +94-21-2220504/5, email:
              <span className="text-navy font-medium"> cons[dot]jaffna[at]mea[dot]gov[dot]in</span>
            </p>

            <p className="text-sm leading-relaxed md:text-base">
              For queries related to ICCR Scholarship, ITEC Training, Education matters: please
              contact 00-94-21-2219085, email:
              <span className="text-navy font-medium"> dc[dot]jaffna[at]mea[dot]gov[dot]in</span>
            </p>

            <p className="text-sm leading-relaxed md:text-base">
              For queries related to Commercial, Culture &amp; Info matters: please contact
              00-94-21-2219671, email:
              <span className="text-navy font-medium"> comm[dot]jaffna[at]mea[dot]gov[dot]in</span>
            </p>

            <p className="text-sm leading-relaxed md:text-base">
              For queries related to Press: please contact 00-94-21-2219085, email:
              <span className="text-navy font-medium"> dc[dot]jaffna[at]mea[dot]gov[dot]in</span>
            </p>

            <p className="text-center text-xl tracking-widest text-navy/70">*******</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
