import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/site/TopBar";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/india-sri-lanka-bilateral-relations")({
  component: IndiaSriLankaBilateralRelations,
  head: () => ({
    meta: [
      {
        title:
          "India-Sri Lanka Bilateral Relations — Consulate General of India, Jaffna",
      },
      {
        name: "description",
        content:
          "Comprehensive information about India-Sri Lanka bilateral relations, political exchanges, and strategic partnerships.",
      },
    ],
  }),
});

function IndiaSriLankaBilateralRelations() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy/5 to-gold/5 border-b border-navy/10">
          <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
              India-Sri Lanka Bilateral Relations
            </h1>
            <p className="text-lg text-navy/70">
              Strengthening centuries-old ties through diplomatic cooperation and mutual prosperity
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="mx-auto max-w-4xl px-4 py-12 md:py-16">
          {/* Brief Introduction */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
              Brief on India-Sri Lanka Bilateral Relations
            </h2>
            <p className="text-base text-navy/80 leading-relaxed mb-4">
              India is Sri Lanka's closest neighbor and the relationship between two countries is
              more than 2,500 years old, sharing a strong civilizational and historical connect.
              Sri Lanka has a central place in India's 'Neighbourhood First' policy and
              MAHASAGAR (Mutual and Holistic Achievement for Security and Growth Across Regions)
              vision.
            </p>
            <p className="text-base text-navy/80 leading-relaxed">
              The bilateral relations are matured and diversified, encompassing all areas of
              contemporary relevance. The shared cultural and social heritage of the two countries
              and the extensive people-to-people interaction of their citizens provide the
              foundation to build a multi-faceted partnership.
            </p>
          </div>

          {/* Political Exchanges */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Political Exchanges</h2>

            <div className="space-y-6">
              {/* First exchange */}
              <div>
                <h3 className="text-lg font-semibold text-navy mb-3">High-Level Bilateral Visits</h3>
                <p className="text-base text-navy/80 leading-relaxed mb-3">
                  India-Sri Lanka bilateral political relations are marked by regular high-level
                  exchanges. Prime Minister Shri Narendra Modi (PM) visited Sri Lanka for the first
                  time since 2015 to express solidarity after Easter Sunday attacks. Prior to this,
                  PM visited Sri Lanka in March 2015 (first standalone bilateral visit by Prime
                  Minister of India since 1987) and in May 2017 as the chief guest for first ever
                  international year-end New Year celebration held by Sri Lanka.
                </p>
              </div>

              {/* Second exchange */}
              <div>
                <h3 className="text-lg font-semibold text-navy mb-3">
                  Ministerial Level Engagements
                </h3>
                <p className="text-base text-navy/80 leading-relaxed mb-3">
                  At the Ministerial level, EAM visited Sri Lanka seven times since 2019. These
                  include visit in November 2019 (the first Foreign Minister visit to Sri Lanka post
                  2019 Presidential elections), January 2021, March 2022 (to attend the BIMSTEC
                  Ministerial meeting), January 2023 (to interact with the new Sri Lankan government
                  headed by then President Ranil Wickremesinghe), October 2023 (to attend the 23rd
                  Council of Ministers' meeting of the ODA), June 2024 (first bilateral visit of EAM
                  after the assumption of office in the current term). The latest visit was on 04
                  October 2024, wherein EAM was the first foreign dignitary to visit Sri Lanka, after
                  Anura Kumara Disanayaka assumed Presidency. During the visit, EAM also conveyed that
                  payments for 7 completed LoC projects to the tune of USD 20 million could be
                  converted into grant and also the decision to gift 22 diesel locomotives to the Sri
                  Lankan Railways.
                </p>
              </div>

              {/* Third exchange */}
              <div>
                <h3 className="text-lg font-semibold text-navy mb-3">
                  Regular High-Level Finance Visits
                </h3>
                <p className="text-base text-navy/80 leading-relaxed mb-3">
                  Regular high-level visits include that of Minister of Finance and Corporate
                  Affairs Smt. Nirmala Sitharaman in November 2023 as Guest of Honour at "Naam 200"
                  event held to mark 200 years of arrival of IOTs) and National Security Advisor Ajit
                  Doval in January & November 2020 and in August 2024 (for the signing of the
                  founding documents of the Colombo Security Conclave), have sustained the momentum of
                  strong bilateral relationship. Further, then Minister of State for External Affairs
                  V. Muralieedharan and Minister of State Dr. L. Murugan visited Sri Lanka in February
                  2023 separately for the 75th Independence Day celebrations of Sri Lanka and for
                  dedicating the iconic Jaffna Cultural Center respectively.
                </p>
              </div>

              {/* Presidential Visit */}
              <div>
                <h3 className="text-lg font-semibold text-navy mb-3">Presidential Visit</h3>
                <p className="text-base text-navy/80 leading-relaxed mb-3">
                  From the Sri Lankan side, President Anura Kumara Disanayaka visited India on a
                  State visit from 15-17 December 2024, which was his first overseas trip after
                  assumption of office. President Anura Disanayaka was accompanied by Foreign
                  Minister Vijitha Herath and Minister of Labour Anil Jayantha. During the visit, he
                  held discussions with Rashtrapatiji and PM. Vice President Dhankaar, EAM, NSA and
                  Minister of Health called on President Anura Kumara Disanayaka. During the visit, a
                  joint statement titled "Fostering Partnerships for a Shared Future" was issued.
                  Both the sides exchanged Protocol amending the Agreement for the avoidance of the
                  Double Taxation and a MoU for capacity building programme for civil servants. India
                  announced financial assistance to 100 new students each annually from University of
                  Jaffna and Eastern University and a grant of USD 14.9 million for the flagship
                  project in Mahin-Anuradha-pura region. He also addressed a business interaction in
                  New Delhi and visited Bodh Gaya. Earlier, he (in his capacity as NPP leader) visited
                  India as part of the "Distinguished Visitors Programme" in February 2024 and met
                  EAM, NSA. He also visited Ahmedabad and Thiruvananthapuram.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Relations Section */}
          <div className="bg-navy/5 rounded-lg p-8 border border-navy/10">
            <h2 className="text-xl font-bold text-navy mb-4">Strengthening Ties</h2>
            <p className="text-base text-navy/80 leading-relaxed">
              The consistent engagement at the highest levels demonstrates the commitment of both
              nations to strengthen the India-Sri Lanka partnership. These relations encompass
              cooperation in multiple sectors including political affairs, economic engagement,
              cultural exchanges, defence cooperation, and development assistance, reflecting the
              comprehensive nature of the bilateral relationship.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
