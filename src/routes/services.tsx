import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowUpRight, Briefcase, FileCheck2, MessageSquare, Plane,
  Building2, Headphones, ScrollText, Compass, GraduationCap,
  PhoneCall, Mail, MapPin,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CtaBanner } from "@/components/site/CtaBanner";
import heroImg from "@/assets/services-hero.jpg";
import docsImg from "@/assets/work-docs.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — OG Star Travel & Tour" },
      { name: "description", content: "Concierge international mobility: work placements, visa & documentation, interview coaching, flight concierge, relocation support and curated tours." },
      { property: "og:title", content: "Services — OG Star" },
      { property: "og:description", content: "A concierge for every stage of your international journey." },
    ],
  }),
  component: ServicesPage,
});

const pillars = [
  {
    n: "01", icon: Briefcase, title: "Work & Travel Abroad",
    body: "Vetted overseas placements in Dubai, Canada and selective European markets — matched to your goals, not a brochure.",
    points: ["Employer matching", "Programme briefing", "Pre-departure prep", "On-arrival support"],
  },
  {
    n: "02", icon: FileCheck2, title: "Visa & Documentation",
    body: "End-to-end visa guidance with a documentation-first approach. We submit only when the file is truly ready.",
    points: ["Eligibility review", "Document checklist", "Application drafting", "Embassy submission"],
  },
  {
    n: "03", icon: MessageSquare, title: "Interview Preparation",
    body: "One-on-one coaching for embassy and employer interviews — calm, structured and tailored to your destination.",
    points: ["Mock interviews", "Question banks", "Body-language coaching", "Wardrobe guidance"],
  },
  {
    n: "04", icon: Plane, title: "Travel & Flight Concierge",
    body: "Flights, routing, fares and airport handling — quietly arranged so you can focus on the journey ahead.",
    points: ["Routing strategy", "Fare optimisation", "Airport meet & assist", "Itinerary management"],
  },
  {
    n: "05", icon: Building2, title: "Relocation & Settle-In",
    body: "The first ninety days abroad — housing, banking, local SIM and orientation, handled by a team who has been there.",
    points: ["Housing search", "Bank account setup", "Local SIM & utilities", "City orientation"],
  },
  {
    n: "06", icon: Compass, title: "Curated Tours",
    body: "Editorial local and international experiences for the modern traveler — small groups, intentional itineraries.",
    points: ["Local Ghana journeys", "International escapes", "Private group design", "Concierge in-trip"],
  },
];

const addons = [
  { icon: ScrollText, title: "Document Translation", body: "Certified translation of academic, legal and personal records." },
  { icon: GraduationCap, title: "Study Pathways", body: "Course matching, applications and student visa preparation." },
  { icon: Headphones, title: "Dedicated Concierge", body: "A named point of contact for travelers who want one human, end to end." },
];

const process = [
  { n: "01", title: "Listen", body: "We start with a conversation, not a quote." },
  { n: "02", title: "Design", body: "A pathway shaped around your life, budget and timeline." },
  { n: "03", title: "Deliver", body: "Documentation, travel and arrival — quietly executed." },
  { n: "04", title: "Stay Close", body: "Support that doesn't end at the airport." },
];

function ServicesPage() {
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
                  Services · Concierge Mobility
                </div>
                <h1 className="font-display text-[2.6rem] leading-[1.02] tracking-tight text-balance md:text-[5rem] lg:text-[5.6rem]">
                  Concierge for <span className="italic text-foreground/80">every</span>
                  <br /> stage of the journey.
                </h1>
                <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  Six core services. One quiet team. From the first conversation in Accra to the first ninety days abroad —
                  we shape the entire arc with calm precision.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a href="#pillars" className="group inline-flex items-center gap-3 bg-foreground px-7 py-4 text-[11px] uppercase tracking-[0.28em] text-background transition-all hover:bg-accent hover:text-accent-foreground">
                    Explore Services
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} />
                  </a>
                  <Link to="/work-travel" className="inline-flex items-center gap-3 border border-foreground/20 px-7 py-4 text-[11px] uppercase tracking-[0.28em] text-foreground transition-colors hover:border-foreground">
                    Work & Travel Abroad
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="md:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.4, ease: [0.2, 0.7, 0.2, 1] }}
                className="relative aspect-[3/4] w-full overflow-hidden"
              >
                <img src={heroImg} alt="Traveler preparing for an international journey" className="h-full w-full object-cover" fetchPriority="high" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* PILLARS */}
        <section id="pillars" className="border-y border-border bg-background py-28 md:py-36">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">01 — Core Services</div>
                <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.05] md:text-6xl">
                  Six pillars. <span className="italic">Zero noise.</span>
                </h2>
              </div>
              <p className="max-w-sm text-base leading-relaxed text-muted-foreground md:text-right">
                Each service is a complete offer — never an upsell, never a shortcut. We do fewer things, and we do them well.
              </p>
            </div>

            <div className="grid grid-cols-1 border-l border-t border-border md:grid-cols-2">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: (i % 2) * 0.05 }}
                  className="group relative border-b border-r border-border bg-background p-8 md:p-10"
                >
                  <div className="flex items-start justify-between gap-6">
                    <p.icon className="h-6 w-6 text-accent" strokeWidth={1.3} />
                    <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/40">{p.n}</span>
                  </div>
                  <h3 className="mt-7 font-display text-2xl md:text-3xl">{p.title}</h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">{p.body}</p>
                  <ul className="mt-7 grid gap-2 sm:grid-cols-2">
                    {p.points.map((pt) => (
                      <li key={pt} className="border-t border-border pt-3 text-[11px] uppercase tracking-[0.2em] text-foreground/70">
                        {pt}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-[oklch(0.97_0.012_75)] py-28 md:py-36">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">02 — How We Work</div>
                <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.05] md:text-6xl">
                  A quieter <span className="italic">way of working.</span>
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
              {process.map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="bg-[oklch(0.97_0.012_75)] p-8"
                >
                  <div className="text-[10px] uppercase tracking-[0.3em] text-accent">{s.n}</div>
                  <h3 className="mt-5 font-display text-2xl">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ADD-ONS + IMAGE */}
        <section className="bg-background py-28 md:py-36">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-12 md:px-10">
            <div className="md:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={docsImg} alt="Travel documents on linen" loading="lazy" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="md:col-span-7 md:pl-6">
              <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">03 — Beyond The Core</div>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] md:text-5xl">
                Small services, <span className="italic">large difference.</span>
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
                The supporting layer behind every successful departure — discreet, efficient, and always optional.
              </p>
              <div className="mt-10 grid gap-px bg-border sm:grid-cols-3">
                {addons.map((a) => (
                  <div key={a.title} className="bg-background p-6">
                    <a.icon className="h-5 w-5 text-accent" strokeWidth={1.4} />
                    <h3 className="mt-5 font-display text-lg">{a.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT BLOCK */}
        <section className="bg-[oklch(0.97_0.012_75)] py-28 md:py-36">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-12 md:px-10">
            <div className="md:col-span-5">
              <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">04 — Begin</div>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] md:text-5xl">
                Start with a <span className="italic">quiet conversation.</span>
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                No commitment. No paperwork. Just a call to understand where you want to go — and whether we are the right team to take you there.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="grid gap-px bg-border sm:grid-cols-2">
                {[
                  { icon: PhoneCall, k: "Call", lines: ["+233 (0) 206 521 474", "+233 (0) 242 613 372"] },
                  { icon: Mail, k: "Email", lines: ["ogstartravelandtours@gmail.com"] },
                  { icon: MapPin, k: "Visit", lines: ["Dome-CFC Estate, Near Achimota Mall", "Accra, Ghana"] },
                  { icon: Briefcase, k: "Office Hours", lines: ["Mon — Fri · 9:00 – 18:00", "Sat · By appointment"] },
                ].map((c) => (
                  <div key={c.k} className="bg-[oklch(0.97_0.012_75)] p-8">
                    <c.icon className="h-5 w-5 text-accent" strokeWidth={1.4} />
                    <div className="mt-5 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{c.k}</div>
                    <div className="mt-2 space-y-1">
                      {c.lines.map((l) => (
                        <div key={l} className="font-display text-lg leading-tight">{l}</div>
                      ))}
                    </div>
                  </div>
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
