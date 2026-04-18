import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/site/TopBar";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

type OfficerRow = {
  section: string;
  designation: string;
  officer: string;
  contact: string;
  email: string;
};

const officerRows: OfficerRow[] = [
  {
    section: "Head of Mission",
    designation: "Consul General",
    officer: "Shri Sai Murali S.",
    contact: "+94-21-2220504",
    email: "cons[dot]jaffna[at]mea[dot]gov[dot]in",
  },
  {
    section: "Administration",
    designation: "Head Assistant",
    officer: "Administration Desk",
    contact: "+94-21-2220505",
    email: "hoc.jaffna[at]mea[dot]gov[dot]in",
  },
  {
    section: "Passport, Visa & Consular",
    designation: "Consular Officer",
    officer: "Consular Wing",
    contact: "+94-21-2220995",
    email: "cons[dot]jaffna[at]mea[dot]gov[dot]in",
  },
  {
    section: "Education, ICCR & ITEC",
    designation: "Education Desk",
    officer: "Scholarship Cell",
    contact: "00-94-21-2219085",
    email: "dc[dot]jaffna[at]mea[dot]gov[dot]in",
  },
  {
    section: "Commercial, Culture & Info",
    designation: "Commercial Officer",
    officer: "Commercial Wing",
    contact: "00-94-21-2219671",
    email: "comm[dot]jaffna[at]mea[dot]gov[dot]in",
  },
  {
    section: "Press & Publicity",
    designation: "Press Desk",
    officer: "Public Diplomacy Cell",
    contact: "00-94-21-2219085",
    email: "dc[dot]jaffna[at]mea[dot]gov[dot]in",
  },
];

export const Route = createFileRoute("/office-list")({
  component: OfficeListPage,
  head: () => ({
    meta: [
      { title: "Office List - Consulate General of India, Jaffna" },
      {
        name: "description",
        content:
          "Office list and contact details of sections at the Consulate General of India, Jaffna.",
      },
    ],
  }),
});

function OfficeListPage() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-8 md:py-10">
        <div className="mb-4 text-sm text-muted-foreground">
          <a href="/" className="text-navy hover:text-gold transition-colors">
            Home
          </a>
          <span className="mx-1">&gt;</span>
          <a href="/consul-general" className="text-navy hover:text-gold transition-colors">
            Consulate General
          </a>
          <span className="mx-1">&gt;</span>
          <a href="/office-list" className="font-medium text-navy hover:text-gold transition-colors">
            Officer List
          </a>
        </div>

        <section className="overflow-hidden rounded-lg border border-border bg-card shadow-soft">
          <div className="border-b border-border bg-secondary/40 px-4 py-6 text-center md:py-7">
            <h1 className="font-display text-xl font-bold text-navy underline underline-offset-4 md:text-2xl">
              Officer List
            </h1>
            <p className="mt-2 text-sm text-navy/80 md:text-base">
              Consulate General of India, Jaffna
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-sm md:text-base">
              <thead>
                <tr className="border-b border-border bg-secondary/55">
                  <th className="w-[20%] border-r border-border px-4 py-3 text-left font-semibold text-navy whitespace-nowrap">
                    Section
                  </th>
                  <th className="w-[20%] border-r border-border px-4 py-3 text-left font-semibold text-navy whitespace-nowrap">
                    Designation
                  </th>
                  <th className="w-[22%] border-r border-border px-4 py-3 text-left font-semibold text-navy whitespace-nowrap">
                    Officer
                  </th>
                  <th className="w-[18%] border-r border-border px-4 py-3 text-left font-semibold text-navy whitespace-nowrap">
                    Contact No.
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-navy whitespace-nowrap">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody>
                {officerRows.map((row, index) => (
                  <tr
                    key={`${row.section}-${row.designation}`}
                    className={index % 2 === 0 ? "border-b border-border" : "border-b border-border bg-secondary/20"}
                  >
                    <td className="border-r border-border px-4 py-3 leading-relaxed text-foreground/90">
                      {row.section}
                    </td>
                    <td className="border-r border-border px-4 py-3 leading-relaxed text-foreground/90">
                      {row.designation}
                    </td>
                    <td className="border-r border-border px-4 py-3 leading-relaxed text-foreground/90">
                      {row.officer}
                    </td>
                    <td className="border-r border-border px-4 py-3 leading-relaxed text-foreground/90">
                      {row.contact}
                    </td>
                    <td className="px-4 py-3 leading-relaxed text-navy">{row.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border-t border-border px-4 py-5 text-sm text-foreground/80 md:px-6 md:text-base">
            For appointment-specific queries, please contact the concerned section directly during office hours (Monday to Friday, 9:00 AM to 5:30 PM).
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
