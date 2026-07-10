import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowUpRight, Plane, ShieldCheck, Briefcase, FileCheck2,
  MessageSquare, Building2, Headphones, Globe2, CheckCircle2,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CtaBanner } from "@/components/site/CtaBanner";
import heroImg from "@/assets/work-hero.jpg";
import docsImg from "@/assets/work-docs.jpg";
import interviewImg from "@/assets/work-interview.jpg";
import dubai from "@/assets/opp-dubai.jpg";
import canada from "@/assets/opp-canada.jpg";
import europe from "@/assets/opp-europe.jpg";
import asia from "@/assets/opp-asia.jpg";
import africa from "@/assets/opp-africa.jpg";
import america from "@/assets/opp-america.jpg";

export const Route = createFileRoute("/work-travel")({
  head: () => ({
    meta: [
      { title: "Work & Travel Abroad — OG Star Travel & Tour" },
      { name: "description", content: "Concierge-crafted work & travel pathways to Dubai, Canada, Europe and beyond. Visa guidance, interview prep and relocation support — handled from Accra." },
      { name: "keywords", content: "work abroad Ghana, work and travel Ghana, Dubai jobs Ghana, work permit Ghana, Canada work visa Ghana, Europe work opportunities Ghana, relocation services Ghana, work travel agency Accra" },
      { property: "og:title", content: "Work & Travel Abroad — OG Star Travel & Tours" },
      { property: "og:description", content: "International opportunities, handled with care." },
      { property: "og:url", content: "https://ogstartravelandtours.com/work-travel" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `https://ogstartravelandtours.com${heroImg}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Work & Travel Abroad — OG Star Travel & Tours" },
      { name: "twitter:description", content: "International opportunities, handled with care." },
      { name: "twitter:image", content: `https://ogstartravelandtours.com${heroImg}` },
    ],
    links: [{ rel: "canonical", href: "https://ogstartravelandtours.com/work-travel" }],
  }),
  component: WorkTravelPage,
});

const regions = [
  { img: dubai, name: "Dubai · Abu Dhabi", tag: "Flagship Programme",
    body: "Hospitality, retail, aviation and corporate placements with full relocation support." },
  { img: canada, name: "Canada", tag: "Skilled Migration",
    body: "Long-term pathways for professionals, students and families seeking a new chapter." },
  { img: europe, name: "Europe", tag: "Travel & Study",
    body: "Schengen guidance, study placements and curated cultural journeys across the continent." },
  { img: asia, name: "Asia", tag: "Emerging Opportunities",
    body: "Selective placements across Malaysia, Bali and rising Asian hubs." },
  { img: america, name: "America", tag: "Visa Advisory",
    body: "Tourist and study visa preparation with a careful, documentation-first approach." },
  { img: africa, name: "Africa", tag: "Regional Mobility",
    body: "Cross-continental travel for business and leisure across Africa's leading cities." },
];

const journey = [
  { n: "01", title: "Discovery Call",
    body: "A relaxed conversation to understand your goals, timeline and the life you want abroad." },
  { n: "02", title: "Pathway Design",
    body: "We match you to the right destination and programme — Dubai work, Canadian residency, study, or travel." },
  { n: "03", title: "Documentation",
    body: "Passport, visa, financial and supporting documents reviewed line-by-line before submission." },
  { n: "04", title: "Interview Coaching",
    body: "One-on-one preparation so you walk into the embassy or employer interview composed and ready." },
  { n: "05", title: "Travel & Arrival",
    body: "Flights, airport handling and the first conversations on the ground — quietly arranged." },
  { n: "06", title: "Settle-In Support",
    body: "Housing, banking and local orientation for your first ninety days in a new country." },
];

const services = [
  { icon: Briefcase, title: "Work Placements", body: "Vetted overseas employers across hospitality, retail, aviation and corporate." },
  { icon: FileCheck2, title: "Visa & Documentation", body: "End-to-end visa guidance, document review and embassy submission." },
  { icon: MessageSquare, title: "Interview Coaching", body: "Calm, structured preparation for embassy and employer interviews." },
  { icon: Plane, title: "Flight Concierge", body: "Routing, fares and airport handling — handled, quietly." },
  { icon: Building2, title: "Relocation & Housing", body: "Accommodation, local SIM, banking and orientation on arrival." },
  { icon: Headphones, title: "On-Ground Support", body: "A human you can call during the first ninety days abroad." },
];

const trust = [
  "Vetted partners and employers only",
  "Documentation reviewed before any submission",
  "Transparent timelines — no rushed promises",
  "Ghanaian team, internationally experienced",
];

const faqs = [
  { q: "Which countries do you currently cover?",
    a: "Our most active routes are Dubai and the UAE, Canada, Europe (Schengen), and selective placements across Asia, Africa and the Americas." },
  { q: "How long does the process typically take?",
    a: "Most Dubai work placements run 6–12 weeks end to end. Canadian and European pathways are longer and depend on your profile." },
  { q: "Do I need prior work experience?",
    a: "It helps, but not always. We design a pathway around where you are today and where you want to be in two to five years." },
  { q: "What does the journey cost?",
    a: "Costs are transparent and depend on the route, programme and documentation involved. We share a full breakdown after the discovery call." },
];

function WorkTravelPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden pt-28 md:pt-36">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 pb-20 md:grid-cols-12 md:gap-10 md:px-10 md:pb-28">
            <div className="md:col-span-7 md:pt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
              >
                <div className="mb-7 inline-flex items-center gap-3 border border-border bg-background/70 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Work & Travel Abroad
                </div>
                <h1 className="font-display text-[2.6rem] leading-[1.02] tracking-tight text-balance md:text-[5rem] lg:text-[5.6rem]">
                  A passport <span className="italic text-foreground/80">to</span>
                  <br />the life you imagined.
                </h1>
                <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  From a quiet office in Accra, we open doors to international work and travel opportunities — Dubai placements,
                  Canadian relocation, European study and beyond. Every step considered. Every detail handled.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link to="/services" className="group inline-flex items-center gap-3 bg-foreground px-7 py-4 text-[11px] uppercase tracking-[0.28em] text-background transition-all hover:bg-accent hover:text-accent-foreground">
                    Begin Your Journey
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} />
                  </Link>
                  <a href="#regions" className="inline-flex items-center gap-3 border border-foreground/20 px-7 py-4 text-[11px] uppercase tracking-[0.28em] text-foreground transition-colors hover:border-foreground">
                    Explore Destinations
                  </a>
                </div>
                <dl className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-border pt-8">
                  {[["1,200+", "Travelers placed"], ["98%", "Visa success rate"], ["7+", "Years of trust"]].map(([k, v]) => (
                    <div key={v}>
                      <dt className="font-display text-3xl text-foreground md:text-4xl">{k}</dt>
                      <dd className="mt-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{v}</dd>
                    </div>
                  ))}
                </dl>
              </motion.div>
            </div>

            <div className="md:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.4, ease: [0.2, 0.7, 0.2, 1] }}
                className="relative aspect-[3/4] w-full overflow-hidden"
              >
                <img src={heroImg} alt="Dubai skyline at golden hour" className="h-full w-full object-cover" fetchPriority="high" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-6 left-6 right-6 border border-white/30 bg-background/85 p-5 backdrop-blur-xl"
                >
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    <span>Now Boarding</span>
                    <span>ACC → DXB</span>
                  </div>
                  <div className="mt-3 flex items-end justify-between">
                    <div>
                      <div className="font-display text-2xl leading-none">Dubai Programme</div>
                      <div className="mt-1 text-xs text-muted-foreground">2026 intake open</div>
                    </div>
                    <Plane className="h-5 w-5 -rotate-45 text-accent" strokeWidth={1.5} />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PROMISE STRIP */}
        <section className="border-y border-border bg-[oklch(0.97_0.012_75)]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border px-0 md:grid-cols-4">
            {[
              { icon: Globe2, k: "International", v: "Vetted partners" },
              { icon: ShieldCheck, k: "Documentation", v: "Reviewed line by line" },
              { icon: Headphones, k: "Concierge", v: "One human, end to end" },
              { icon: Plane, k: "Arrival", v: "Settle-in for 90 days" },
            ].map((b) => (
              <div key={b.k} className="flex items-center gap-4 bg-[oklch(0.97_0.012_75)] px-6 py-7 md:px-8">
                <b.icon className="h-5 w-5 text-accent" strokeWidth={1.4} />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{b.k}</div>
                  <div className="mt-1 font-display text-lg">{b.v}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* REGIONS */}
        <section id="regions" className="bg-background py-28 md:py-36">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">01 — Where We Take You</div>
                <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.05] md:text-6xl">
                  Six regions. <span className="italic">One quiet team.</span>
                </h2>
              </div>
              <p className="max-w-sm text-base leading-relaxed text-muted-foreground md:text-right">
                We don't chase every destination. We commit to the routes where we can deliver something close to perfect.
              </p>
            </div>

            <div className="grid grid-cols-1 border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
              {regions.map((r, i) => (
                <motion.div
                  key={r.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: (i % 3) * 0.05 }}
                  className="group relative border-b border-r border-border bg-background"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={r.img} alt={r.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
                    <div className="absolute left-5 top-5 text-[10px] uppercase tracking-[0.3em] text-white/90">0{i + 1} · {r.tag}</div>
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <div className="font-display text-2xl leading-tight">{r.name}</div>
                    </div>
                  </div>
                  <p className="p-6 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DUBAI FEATURE */}
        <section className="bg-[oklch(0.97_0.012_75)] py-28 md:py-36">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-12 md:px-10">
            <div className="md:col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img src={dubai} alt="Dubai opportunity" loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
            <div className="md:col-span-7 md:pl-6">
              <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">02 — Flagship Route</div>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] md:text-6xl">
                The Dubai <span className="italic">Programme.</span>
              </h2>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Our most established pathway. For travelers ready to step into the international hospitality, retail, aviation and corporate
                worlds — with documentation, employer matching, flights and arrival handled from a single point of contact.
              </p>
              <ul className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  "Employer matching across 12+ sectors",
                  "Visa & medical preparation",
                  "Flight booking & airport handling",
                  "First-week accommodation",
                  "Local SIM, banking & orientation",
                  "Ongoing support for 90 days",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3 border-t border-border pt-4 text-sm text-foreground/85">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link to="/services" className="group inline-flex items-center gap-3 border border-foreground/30 px-7 py-4 text-[11px] uppercase tracking-[0.28em] text-foreground transition-colors hover:border-foreground">
                  Speak With A Concierge
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section className="bg-background py-28 md:py-36">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">03 — The Journey</div>
                <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.05] md:text-6xl">
                  Six steps, <span className="italic">quietly handled.</span>
                </h2>
              </div>
              <p className="max-w-sm text-base leading-relaxed text-muted-foreground md:text-right">
                A calm, sequenced process — so the only thing you have to do is be ready to go.
              </p>
            </div>

            <div className="grid grid-cols-1 border-l border-t border-border md:grid-cols-2 lg:grid-cols-3">
              {journey.map((j, i) => (
                <motion.div
                  key={j.n}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: i * 0.04 }}
                  className="border-b border-r border-border bg-background p-8"
                >
                  <div className="text-[10px] uppercase tracking-[0.3em] text-accent">{j.n}</div>
                  <h3 className="mt-5 font-display text-2xl">{j.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{j.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES INSIDE WORK&TRAVEL */}
        <section className="bg-[oklch(0.97_0.012_75)] py-28 md:py-36">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-12 md:px-10">
            <div className="md:col-span-5">
              <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">04 — Inside The Service</div>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] md:text-5xl">
                Everything you need, <span className="italic">in one calm hand.</span>
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                Each service is delivered by the same team that knows your file — no handoffs, no chasing, no second guessing.
              </p>
              <div className="mt-10 hidden aspect-[4/5] overflow-hidden md:block">
                <img src={interviewImg} alt="Interview coaching session" loading="lazy" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="md:col-span-7">
              <div className="grid grid-cols-1 border-l border-t border-border sm:grid-cols-2">
                {services.map((s, i) => (
                  <div key={s.title} className="border-b border-r border-border bg-background p-7">
                    <s.icon className="h-5 w-5 text-accent" strokeWidth={1.4} />
                    <h3 className="mt-6 font-display text-xl">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                    <div className="mt-6 text-[10px] uppercase tracking-[0.3em] text-foreground/40">0{i + 1}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TRUST + DOCS IMAGE */}
        <section className="bg-background py-28 md:py-36">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-12 md:px-10">
            <div className="md:col-span-6">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={docsImg} alt="Travel documents prepared on linen" loading="lazy" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="md:col-span-6 md:pl-6">
              <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">05 — Why People Trust Us</div>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] md:text-5xl">
                The quiet difference <span className="italic">is in the details.</span>
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
                We won't be the loudest agency on your timeline. We will be the team your friend recommended quietly,
                because the journey simply worked.
              </p>
              <ul className="mt-10 space-y-4">
                {trust.map((t) => (
                  <li key={t} className="flex items-start gap-4 border-t border-border pt-4 text-base">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[oklch(0.97_0.012_75)] py-28 md:py-36">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-12 md:px-10">
            <div className="md:col-span-4">
              <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">06 — Questions</div>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] md:text-5xl">
                The things <span className="italic">most people ask.</span>
              </h2>
            </div>
            <div className="md:col-span-8">
              <div className="border-t border-border">
                {faqs.map((f) => (
                  <details key={f.q} className="group border-b border-border py-6">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                      <span className="font-display text-xl md:text-2xl">{f.q}</span>
                      <span className="grid h-9 w-9 shrink-0 place-items-center border border-foreground/20 transition-transform group-open:rotate-45">
                        <span className="text-lg leading-none">+</span>
                      </span>
                    </summary>
                    <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
