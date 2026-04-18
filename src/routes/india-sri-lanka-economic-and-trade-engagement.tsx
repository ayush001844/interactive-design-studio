import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/site/TopBar";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

type ExportItem = {
  rank: number;
  hsCode: string;
  description: string;
};

const exportsToIndia2021: ExportItem[] = [
  {
    rank: 1,
    hsCode: "23099030",
    description: "Residues and waste from the food industries; prepared animal fodder",
  },
  {
    rank: 2,
    hsCode: "9041120",
    description: "Coffee, tea, mate and spices",
  },
  {
    rank: 3,
    hsCode: "151620",
    description:
      "Animal or vegetable fats and oils and their cleavage products; prepared edible fats; animal or vegetable waxes",
  },
  {
    rank: 4,
    hsCode: "8028090",
    description: "Edible fruits and nuts; peel of citrus fruit or melons",
  },
  {
    rank: 5,
    hsCode: "9041190",
    description: "Coffee, tea, mate and spices",
  },
  {
    rank: 6,
    hsCode: "27101960",
    description:
      "Mineral fuels, mineral oils and products of their distillation; bituminous substances; mineral waxes",
  },
  {
    rank: 7,
    hsCode: "23099090",
    description: "Residues and waste from the food industries; prepared animal fodder",
  },
  {
    rank: 8,
    hsCode: "600622",
    description: "Knitted or crocheted fabrics",
  },
  {
    rank: 9,
    hsCode: "854430",
    description:
      "Electrical machinery and equipment and parts thereof; sound recorders and reproducers, television image and sound recorders and reproducers, and parts and accessories of such articles",
  },
  {
    rank: 10,
    hsCode: "87120090",
    description:
      "Vehicles other than railway or tramway rolling-stock, and parts and accessories thereof",
  },
];

const engagementPoints = [
  {
    title: "Cooperation in Economic Projects (MoU)",
    body:
      "A Memorandum of Understanding for cooperation in economic projects was signed between India and Sri Lanka on 26 April 2017. The MoU identifies specific projects and provides an overall framework for strengthening bilateral development partnership.",
  },
  {
    title: "Ferry Service",
    body:
      "Service between India and Sri Lanka on passenger transportation by sea resumed and expanded through Colombo and Tuticorin / Tamil Nadu connectivity initiatives.",
  },
  {
    title: "Agriculture Cooperation",
    body:
      "A work plan under the MoU on agriculture promotes collaboration in crop science, post-harvest management, plant quarantine, credit and related rural development cooperation.",
  },
  {
    title: "Telecommunications Cooperation",
    body:
      "A mechanism of technical and institutional cooperation in telecommunications remains active under the India-Sri Lanka regulatory framework.",
  },
  {
    title: "Cooperation in IT",
    body:
      "India and Sri Lanka continue cooperation in e-governance, public service delivery, digital services and capacity-building initiatives under bilateral IT arrangements.",
  },
  {
    title: "Palaly Airport Development",
    body:
      "India supported runway and related infrastructure rehabilitation at Palaly Airfield with technical engagement and restored connectivity plans.",
  },
  {
    title: "South Asia Satellite (SAS)",
    body:
      "Sri Lanka joined regional cooperation enabled through the South Asia Satellite for communication and broadcasting applications including tele-education and tele-medicine.",
  },
  {
    title: "Civil Nuclear Cooperation",
    body:
      "A bilateral agreement on civil nuclear cooperation provides a framework for collaboration in peaceful uses of atomic energy, training, research and regulatory practices.",
  },
  {
    title: "Science and Technology Cooperation",
    body:
      "India-Sri Lanka S&T cooperation spans food technology, health, space applications, biotechnology, electronics, renewable energy and information technology.",
  },
  {
    title: "Renewable Energy and Fisheries Harbour Development",
    body:
      "Both countries continue collaboration on hybrid renewable energy projects and fisheries harbour development under bilateral cooperation frameworks.",
  },
  {
    title: "Training Programmes",
    body:
      "India provides opportunities to over 400 officials in Sri Lanka annually under ITEC for skill development and capacity enhancement.",
  },
];

export const Route = createFileRoute("/india-sri-lanka-economic-and-trade-engagement")({
  component: IndiaSriLankaEconomicAndTradeEngagementPage,
  head: () => ({
    meta: [
      {
        title:
          "India-Sri Lanka Economic and Trade Engagement - Consulate General of India, Jaffna",
      },
      {
        name: "description",
        content:
          "Overview of India-Sri Lanka economic and trade engagement, investments, exports, and cooperation initiatives.",
      },
    ],
  }),
});

function IndiaSriLankaEconomicAndTradeEngagementPage() {
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
          <a href="/india-sri-lanka-bilateral-relations" className="text-navy hover:text-gold transition-colors">
            India-Sri Lanka Relations
          </a>
          <span className="mx-1">&gt;</span>
          <a
            href="/india-sri-lanka-economic-and-trade-engagement"
            className="font-medium text-navy hover:text-gold transition-colors"
          >
            Economic and Trade Engagement
          </a>
        </div>

        <section className="overflow-hidden rounded-lg border border-border bg-card shadow-soft">
          <div className="border-b border-border bg-secondary/40 px-4 py-6 text-center md:py-7">
            <h1 className="font-display text-xl font-bold text-navy underline underline-offset-4 md:text-2xl">
              India-Sri Lanka Economic and Trade Engagement
            </h1>
            <p className="mt-2 text-sm text-navy/80 md:text-base">
              Trade, investment, connectivity and development cooperation
            </p>
          </div>

          <div className="space-y-6 px-4 py-6 md:px-6 md:py-8">
            <section className="space-y-4 text-foreground/90">
              <h2 className="text-lg font-semibold uppercase tracking-wide text-navy md:text-xl">Overview</h2>
              <p className="text-sm leading-relaxed md:text-base">
                India and Sri Lanka enjoy a vibrant and growing economic and commercial partnership, with significant
                expansion over the years. The India-Sri Lanka Free Trade Agreement (ISFTA) has contributed
                significantly to expansion of bilateral trade. Economic ties also include a flourishing development
                partnership covering infrastructure, connectivity, transportation, housing, health, livelihood,
                education and industrial development.
              </p>
              <p className="text-sm leading-relaxed md:text-base">
                India has traditionally been among Sri Lanka's largest trade partners and Sri Lanka remains among the
                largest trade partners of India in SAARC. Bilateral merchandise trade has shown strong momentum, with
                two-way exchange and sustained access through ISFTA provisions.
              </p>
              <p className="text-sm leading-relaxed md:text-base">
                India is also one of the largest contributors to FDI in Sri Lanka. According to Central Bank of Sri
                Lanka estimates, total FDI from India exceeds US$ 2.2 billion. Investments continue in petroleum
                retail, tourism and hotels, manufacturing, real estate, telecommunications, and banking and financial
                services.
              </p>
              <p className="text-sm leading-relaxed md:text-base">
                Tourism and aviation have further strengthened economic engagement, with strong movement of visitors
                between both countries and growing air connectivity through bilateral civil aviation arrangements.
              </p>
            </section>

            <section className="rounded-md border border-border bg-secondary/20 p-4 md:p-5">
              <h2 className="mb-3 text-lg font-semibold text-navy md:text-xl">
                Top 10 Items Exported from Sri Lanka to India (2021)
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[880px] border-collapse text-sm md:text-base">
                  <thead>
                    <tr className="border-b border-border bg-secondary/55">
                      <th className="w-[8%] border-r border-border px-3 py-2.5 text-left font-semibold text-navy whitespace-nowrap">
                        top_10
                      </th>
                      <th className="w-[14%] border-r border-border px-3 py-2.5 text-left font-semibold text-navy whitespace-nowrap">
                        HS Code
                      </th>
                      <th className="px-3 py-2.5 text-left font-semibold text-navy">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {exportsToIndia2021.map((item, idx) => (
                      <tr
                        key={`${item.rank}-${item.hsCode}`}
                        className={idx % 2 === 0 ? "border-b border-border" : "border-b border-border bg-secondary/25"}
                      >
                        <td className="border-r border-border px-3 py-2.5 text-foreground/90">{item.rank}</td>
                        <td className="border-r border-border px-3 py-2.5 text-foreground/90">{item.hsCode}</td>
                        <td className="px-3 py-2.5 leading-relaxed text-foreground/90">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">Source: Sri Lanka Customs</p>
            </section>

            <section className="space-y-3 text-foreground/90">
              <h2 className="text-lg font-semibold uppercase tracking-wide text-navy md:text-xl">Investments</h2>
              <p className="text-sm leading-relaxed md:text-base">
                India remains among the top investors in Sri Lanka, with several leading Indian companies establishing
                strong presence across sectors. Investment partnerships continue to be a key pillar of bilateral
                economic relations.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold uppercase tracking-wide text-navy md:text-xl">
                Other Economic Engagements
              </h2>
              <div className="grid gap-3">
                {engagementPoints.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-md border border-border bg-background px-4 py-3 shadow-sm"
                  >
                    <h3 className="text-base font-semibold text-navy md:text-lg">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-foreground/85 md:text-base">{item.body}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-md border border-border bg-secondary/20 px-4 py-4 text-sm text-foreground/85 md:text-base">
              <h2 className="mb-2 text-lg font-semibold text-navy">Training Programmes</h2>
              <p className="leading-relaxed">
                India provides training opportunities to over 400 officials in Sri Lanka annually for skill development
                and capacity enhancement under the Indian Technical and Economic Cooperation Programme (ITEC).
              </p>
              <p className="mt-2">
                For more information: {" "}
                <a
                  href="https://www.itecgoi.in/index"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy underline hover:text-gold transition-colors"
                >
                  https://www.itecgoi.in/index
                </a>
              </p>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
