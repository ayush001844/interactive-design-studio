import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/site/TopBar";
import { Header } from "@/components/site/Header";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import { InfoCards } from "@/components/site/InfoCards";
import { PartnerStrip } from "@/components/site/PartnerStrip";
import { VCMessage } from "@/components/site/VCMessage";
import { Announcements } from "@/components/site/Announcements";
import { AzadiStrip } from "@/components/site/AzadiStrip";
import { Events } from "@/components/site/Events";
import { GovPrograms } from "@/components/site/GovPrograms";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Rashtriya Raksha University — National Security is Supreme" },
      {
        name: "description",
        content:
          "Rashtriya Raksha University — an Institution of National Importance for security, strategic, and police studies, research and training.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main>
        <HeroCarousel />
        <InfoCards />
        <AzadiStrip />
        <VCMessage />
        <Announcements />
        <Events />
        <GovPrograms />
        <PartnerStrip />
      </main>
      <Footer />
    </div>
  );
}
