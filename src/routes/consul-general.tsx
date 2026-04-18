import { createFileRoute } from "@tanstack/react-router";
import {
  UserRound,
  MessageCircle,
  ChevronRight,
  ArrowRight,
  Mail,
  Linkedin,
} from "lucide-react";
import { TopBar } from "@/components/site/TopBar";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import consulGeneralPhoto from "@/assets/consul-general.png";

type LinkItem = {
  label: string;
  href: string;
};

const sideLinks = [
  { label: "Consul General", href: "/consul-general" },
  { label: "Former Consuls General", href: "#" },
  { label: "Location of the Consulate", href: "#" },
  { label: "Jurisdiction", href: "#" },
  { label: "Library", href: "#" },
  { label: "About India Corner", href: "#" },
  { label: "Holiday List", href: "#" },
  {
    label: "Contact our High Commission & Consulates in Sri Lanka",
    href: "#",
  },
  { label: "Right To Information", href: "#" },
] satisfies LinkItem[];

const actionLinks = [
  {
    label: "View Profile",
    href: "https://www.cgijaffna.gov.in/page/display/144",
    Icon: UserRound,
    description: "Read biography, responsibilities, and official background.",
  },
  {
    label: "Speeches",
    href: "https://www.cgijaffna.gov.in/page/display/145",
    Icon: MessageCircle,
    description: "Access statements, remarks, and public addresses.",
  },
];

export const Route = createFileRoute("/consul-general")({
  component: ConsulGeneralPage,
  head: () => ({
    meta: [
      { title: "Consul General - Consulate General of India, Jaffna" },
      {
        name: "description",
        content:
          "Profile page for the Consul General at the Consulate General of India, Jaffna.",
      },
    ],
  }),
});

function Breadcrumbs() {
  return (
    <div className="mb-4 text-sm text-muted-foreground">
      <a href="/" className="text-navy hover:text-gold transition-colors">
        Home
      </a>
      <span className="mx-1">&gt;</span>
      <a href="/consul-general" className="text-navy hover:text-gold transition-colors">
        Consulate General
      </a>
      <span className="mx-1">&gt;</span>
      <a href="/consul-general" className="font-medium text-navy hover:text-gold transition-colors">
        Consul General
      </a>
    </div>
  );
}

function ProfileCard() {
  return (
    <section className="rounded-lg border border-border bg-card p-4 shadow-soft md:p-5">
      <div className="group relative mx-auto w-full max-w-[260px] overflow-hidden rounded-2xl">
        <img
          src={consulGeneralPhoto}
          alt="Shri Sai Murali S., Consul General"
          className="h-auto w-full object-cover"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/25 via-transparent to-transparent opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100" />

        <div className="absolute inset-x-3 bottom-3 translate-y-0 rounded-2xl bg-gradient-to-r from-navy-deep/95 via-navy/95 to-navy-deep/95 px-3 py-2.5 text-white shadow-elevated opacity-100 transition-all duration-300 md:translate-y-5 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-within:translate-y-0 md:group-focus-within:opacity-100">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <a
                href="mailto:cons.jaffna@mea.gov.in"
                aria-label="Email"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>

            <a
              href="https://www.cgijaffna.gov.in/page/display/144"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-base font-semibold text-white transition-colors hover:text-gold"
            >
              View Profile <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-xl font-display font-semibold text-navy md:text-2xl">
          Shri Sai Murali S.
        </h2>
        <p className="text-base text-navy/80 md:text-lg">Consul General</p>
      </div>
    </section>
  );
}

function ActionLinksPanel() {
  return (
    <section className="rounded-lg border border-border bg-card p-5 shadow-soft md:p-6">
      <h3 className="mb-4 border-b border-border pb-3 text-lg font-semibold text-navy md:text-xl">
        Quick Access
      </h3>
      <div className="flex flex-col gap-4 md:gap-5">
        {actionLinks.map(({ label, href, Icon, description }) => (
          <a
            key={label}
            href={href}
            className="group rounded-md border border-border/70 bg-secondary/20 px-4 py-4 transition-colors hover:border-gold/50 hover:bg-secondary/45"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-navy/8 p-2 text-navy group-hover:text-gold transition-colors">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-lg font-medium text-navy group-hover:text-gold transition-colors md:text-xl">
                  {label}
                </span>
              </div>
              <ChevronRight className="h-5 w-5 text-navy/50 group-hover:text-gold transition-colors" />
            </div>
            <p className="mt-2 text-sm text-foreground/75 md:text-base">{description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

function SideLinksPanel() {
  return (
    <aside className="rounded-lg border border-border bg-card p-4 shadow-soft md:p-5">
      <h3 className="mb-3 border-b border-border pb-2 text-lg font-semibold text-navy md:text-xl">
        Consulate General
      </h3>
      <nav aria-label="Consulate General links">
        <ul className="space-y-2.5">
          {sideLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="group flex items-start gap-2 text-base leading-snug text-navy transition-colors hover:text-navy-deep md:text-lg"
              >
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-deep ring-2 ring-navy/20 transition-colors group-hover:bg-navy"
                />
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

function ConsulGeneralPage() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />

      <main className="mx-auto max-w-[1400px] px-4 py-8 md:py-10">
        <Breadcrumbs />

        <h1 className="mb-2 text-center font-display text-xl font-semibold text-navy underline underline-offset-4 md:text-2xl">
          Consul General
        </h1>
        <p className="mb-6 text-center text-sm text-muted-foreground md:text-base">
          Official profile and quick information access
        </p>

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-[320px,minmax(0,1fr),320px]">
          <ProfileCard />
          <ActionLinksPanel />
          <SideLinksPanel />
        </section>
      </main>

      <Footer />
    </div>
  );
}
