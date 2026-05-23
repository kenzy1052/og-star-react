import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Heart, ShieldCheck, Compass, Sparkles, Mail, Phone, MapPin } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import heroImg from "@/assets/about-hero.jpg";
import officeImg from "@/assets/about-office.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — OG Star Travel & Tour" },
      { name: "description", content: "A quiet team in Accra opening doors abroad. The story, values and people behind OG Star Travel & Tour." },
      { property: "og:title", content: "About — OG Star" },
      { property: "og:description", content: "A concierge-grade international mobility brand from Ghana." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, t: "People First", b: "Every file is a person, a family, a future. We never forget that." },
  { icon: ShieldCheck, t: "Quiet Integrity", b: "We submit only when the paperwork is truly ready. No shortcuts. No false promises." },
  { icon: Compass, t: "Considered Pace", b: "We do fewer things than most agencies — so we can do them properly." },
  { icon: Sparkles, t: "Concierge Care", b: "One named human, end to end. From the first call to the first ninety days abroad." },
];

const milestones = [
  { n: "2018", t: "Founded in Accra", b: "Began as a small visa & travel advisory, helping friends and family travel safely." },
  { n: "2020", t: "Dubai Programme", b: "Launched our flagship work & travel pathway to the United Arab Emirates." },
  { n: "2022", t: "International Tours", b: "Added editorial group tours to Morocco, Turkey, Bali and Europe." },
  { n: "2024", t: "Relocation Concierge", b: "Expanded into Canada and Europe relocation support — housing, banking, settle-in." },
  { n: "2026", t: "1,200+ Travelers", b: "A growing community of clients who travel, work and build futures abroad with us." },
];

const stats = [
  { k: "1,200+", v: "Travelers placed abroad" },
  { k: "98%", v: "Visa success rate" },
  { k: "20+", v: "Countries served" },
  { k: "7+", v: "Years of quiet trust" },
];

function AboutPage() {
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
                  About OG Star
                </div>
                <h1 className="font-display text-[2.6rem] leading-[1.02] tracking-tight text-balance md:text-[5rem] lg:text-[5.6rem]">
                  A quiet team <span className="italic text-foreground/80">in</span>
                  <br /> Accra. Opening doors abroad.
                </h1>
                <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  OG Star Travel & Tour is a concierge-grade international mobility brand built in Ghana for ambitious people
                  who want to travel, work and live across borders — with someone calm and capable on their side.
                </p>
              </motion.div>
            </div>

            <div className="md:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.4, ease: [0.2, 0.7, 0.2, 1] }}
                className="relative aspect-[4/5] w-full overflow-hidden"
              >
                <img src={heroImg} alt="OG Star concierge at work in Accra" className="h-full w-full object-cover" fetchPriority="high" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* STATS STRIP */}
        <section className="border-y border-border bg-[oklch(0.97_0.012_75)]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.v} className="bg-[oklch(0.97_0.012_75)] px-6 py-10 md:px-10">
                <div className="font-display text-4xl md:text-5xl">{s.k}</div>
                <div className="mt-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </section>

        {/* STORY */}
        <section className="bg-background py-28 md:py-36">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-12 md:px-10">
            <div className="md:col-span-5">
              <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">01 — Our Story</div>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] md:text-6xl">
                Built quietly, <span className="italic">on trust.</span>
              </h2>
            </div>
            <div className="space-y-7 text-base leading-relaxed text-muted-foreground md:col-span-7 md:text-lg">
              <p>
                OG Star Travel & Tour began the way most good companies do — with a small problem worth solving. Friends and
                family wanted to travel, work and study abroad, and the process felt opaque, intimidating and full of empty promises.
              </p>
              <p>
                From a small office in Dome-CFC Estate, near Achimota Mall, we set out to build the quiet opposite: a travel and
                relocation team that submits only when the paperwork is truly ready, treats every traveler as a person rather than
                a file, and remains reachable long after the flight has landed.
              </p>
              <p>
                Today we serve clients across the United Arab Emirates, Canada, Europe, Asia, the Americas and Africa — and we still
                pick up the phone ourselves.
              </p>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="bg-[oklch(0.97_0.012_75)] py-28 md:py-36">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">02 — What We Stand For</div>
                <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.05] md:text-6xl">
                  Four values. <span className="italic">No exceptions.</span>
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 border-l border-t border-border md:grid-cols-2">
              {values.map((v, i) => (
                <motion.div
                  key={v.t}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: (i % 2) * 0.06 }}
                  className="border-b border-r border-border bg-[oklch(0.97_0.012_75)] p-10"
                >
                  <v.icon className="h-6 w-6 text-accent" strokeWidth={1.3} />
                  <h3 className="mt-7 font-display text-2xl md:text-3xl">{v.t}</h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">{v.b}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* OFFICE / EDITORIAL */}
        <section className="bg-background py-28 md:py-36">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-12 md:px-10">
            <div className="md:col-span-7">
              <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">03 — Where We Work</div>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] md:text-6xl">
                A small office. <span className="italic">A wide map.</span>
              </h2>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Our home is a calm room in Dome-CFC Estate, near Achimota Mall in Accra. You're welcome to visit — most of our
                best journeys begin around the table, with a slow conversation and a coffee.
              </p>
              <ul className="mt-10 space-y-5">
                <li className="flex gap-4 border-t border-border pt-5">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.4} />
                  <div className="text-foreground/85">Dome-CFC Estate, Near Achimota Mall<br /><span className="text-muted-foreground">P.O Box MS 446, New Achimota · Accra · Ghana</span></div>
                </li>
                <li className="flex gap-4 border-t border-border pt-5">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.4} />
                  <div className="text-foreground/85">ogstartravelandtours@gmail.com</div>
                </li>
                <li className="flex gap-4 border-t border-border pt-5">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.4} />
                  <div className="text-foreground/85">+233 (0) 206 521 474<br /><span className="text-muted-foreground">+233 (0) 242 613 372</span></div>
                </li>
              </ul>
            </div>
            <div className="md:col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img src={officeImg} alt="OG Star office interior in Accra" loading="lazy" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="bg-[oklch(0.97_0.012_75)] py-28 md:py-36">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mb-14">
              <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">04 — A Quiet Timeline</div>
              <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.05] md:text-6xl">
                Seven years, <span className="italic">slowly written.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 border-l border-t border-border md:grid-cols-2 lg:grid-cols-5">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.n}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="border-b border-r border-border bg-[oklch(0.97_0.012_75)] p-8"
                >
                  <div className="font-display text-3xl text-accent">{m.n}</div>
                  <h3 className="mt-5 font-display text-xl leading-tight">{m.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.b}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-background py-28 md:py-36">
          <div className="mx-auto max-w-5xl px-6 text-center md:px-10">
            <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">05 — Begin</div>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] md:text-6xl">
              Come and have <span className="italic">a quiet conversation.</span>
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              No commitment. No paperwork. Just a call — to understand where you want to go, and whether we are the right team to take you there.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link to="/services" className="group inline-flex items-center gap-3 bg-foreground px-7 py-4 text-[11px] uppercase tracking-[0.28em] text-background transition-all hover:bg-accent hover:text-accent-foreground">
                Speak With A Concierge
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} />
              </Link>
              <Link to="/work-travel" className="inline-flex items-center gap-3 border border-foreground/20 px-7 py-4 text-[11px] uppercase tracking-[0.28em] text-foreground transition-colors hover:border-foreground">
                Work & Travel Abroad
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
