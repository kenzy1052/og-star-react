import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Plane, Globe2, Compass, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CtaBanner } from "@/components/site/CtaBanner";
import heroImg from "@/assets/intl-hero.jpg";
import dubai from "@/assets/opp-dubai.jpg";
import morocco from "@/assets/intl-morocco.jpg";
import bali from "@/assets/intl-bali.jpg";
import turkey from "@/assets/intl-turkey.jpg";
import europe from "@/assets/opp-europe.jpg";
import canada from "@/assets/opp-canada.jpg";

export const Route = createFileRoute("/international")({
  head: () => ({
    meta: [
      { title: "International Tours — OG Star Travel & Tour" },
      { name: "description", content: "Concierge-crafted international escapes — Dubai, Morocco, Bali, Istanbul, Europe and beyond. Editorial itineraries, quiet luxury, on-ground care." },
      { property: "og:title", content: "International Tours — OG Star Travel & Tours" },
      { property: "og:description", content: "A small atlas of the world, considered. Curated international journeys from Accra." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: InternationalPage,
});

const escapes = [
  { img: dubai, region: "United Arab Emirates", title: "The Dubai Experience",
    days: "5 — 7 Nights",
    body: "Desert at sunset, marina lights at midnight, and the quiet luxury of a city built around hospitality." },
  { img: morocco, region: "North Africa", title: "Morocco Magic",
    days: "7 Nights",
    body: "Marrakech riads, the Atlas mountains and an afternoon in the desert that you'll think about for years." },
  { img: bali, region: "Southeast Asia", title: "Bali & Malaysia",
    days: "10 Nights",
    body: "Rice terraces, slow mornings, then the architecture and energy of Kuala Lumpur — two countries, one rhythm." },
  { img: turkey, region: "Eurasia", title: "Turkey Delight",
    days: "6 Nights",
    body: "Istanbul's old city, the Bosphorus at dusk, Cappadocia balloons at first light. Considered, not rushed." },
  { img: europe, region: "Europe", title: "Europe Grand Tour",
    days: "10 — 14 Nights",
    body: "A handful of cities, never a checklist. Paris, Rome, Amsterdam — paced like a long, well-written novel." },
  { img: canada, region: "East Africa", title: "Nairobi Adventure",
    days: "6 Nights",
    body: "Wildlife, coffee farms and the elegant, modern face of Nairobi — for travelers who want depth, not noise." },
];

const promises = [
  { icon: Globe2, k: "Editorial Itineraries", v: "Cities chosen, not collected." },
  { icon: ShieldCheck, k: "Visa & Documentation", v: "Quietly handled before you fly." },
  { icon: Plane, k: "Flight Concierge", v: "Routing, fares, lounge access." },
  { icon: Compass, k: "On-Ground Care", v: "A human, in your timezone." },
];

const philosophy = [
  { n: "01", t: "Fewer Destinations", b: "We commit to the routes we know well — and decline the rest." },
  { n: "02", t: "Smaller Groups", b: "Six to fourteen travelers. Sometimes private. Never a crowd." },
  { n: "03", t: "Considered Pace", b: "Time to wander. Long lunches. Sunsets that don't end at a schedule." },
  { n: "04", t: "Trusted Partners", b: "Hotels, guides and drivers we've used personally — and would again." },
];

function InternationalPage() {
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
                  International Tours
                </div>
                <h1 className="font-display text-[2.6rem] leading-[1.02] tracking-tight text-balance md:text-[5rem] lg:text-[5.6rem]">
                  A small atlas <span className="italic text-foreground/80">of</span>
                  <br /> the world.
                </h1>
                <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  Hand-built international escapes from Accra. We design fewer journeys than most agencies — so each one
                  arrives with the visas, flights, hotels and on-ground care quietly resolved long before you board.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a href="#escapes" className="group inline-flex items-center gap-3 bg-foreground px-7 py-4 text-[11px] uppercase tracking-[0.28em] text-background transition-all hover:bg-accent hover:text-accent-foreground">
                    Explore Destinations
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} />
                  </a>
                  <Link to="/services" className="inline-flex items-center gap-3 border border-foreground/20 px-7 py-4 text-[11px] uppercase tracking-[0.28em] text-foreground transition-colors hover:border-foreground">
                    Design A Private Trip
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
                <img src={heroImg} alt="International terminal at twilight" className="h-full w-full object-cover" fetchPriority="high" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-6 left-6 right-6 border border-white/30 bg-background/85 p-5 backdrop-blur-xl"
                >
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    <span>Boarding Soon</span>
                    <span>ACC → DXB · IST · CDG</span>
                  </div>
                  <div className="mt-3 font-display text-2xl leading-none">Six routes open</div>
                  <div className="mt-1 text-xs text-muted-foreground">2026 departures</div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PROMISES */}
        <section className="border-y border-border bg-[oklch(0.97_0.012_75)]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border md:grid-cols-4">
            {promises.map((b) => (
              <div key={b.k} className="flex items-center gap-4 bg-[oklch(0.97_0.012_75)] px-6 py-7 md:px-8">
                <b.icon className="h-5 w-5 text-accent" strokeWidth={1.4} />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{b.k}</div>
                  <div className="mt-1 font-display text-lg leading-tight">{b.v}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ESCAPES */}
        <section id="escapes" className="bg-background py-28 md:py-36">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">01 — Selected Escapes</div>
                <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.05] md:text-6xl">
                  Six destinations. <span className="italic">Quietly perfected.</span>
                </h2>
              </div>
              <p className="max-w-sm text-base leading-relaxed text-muted-foreground md:text-right">
                Each route is run by a team that has lived it personally. No marketplaces. No middlemen. No surprises on arrival.
              </p>
            </div>

            <div className="grid grid-cols-1 border-l border-t border-border md:grid-cols-2 lg:grid-cols-3">
              {escapes.map((e, i) => (
                <motion.article
                  key={e.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: (i % 3) * 0.05 }}
                  className="group relative border-b border-r border-border bg-background"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img src={e.img} alt={e.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                    <div className="absolute left-5 top-5 text-[10px] uppercase tracking-[0.3em] text-white/90">0{i + 1} · {e.region}</div>
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <div className="font-display text-2xl leading-tight md:text-3xl">{e.title}</div>
                      <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-white/80">{e.days}</div>
                    </div>
                  </div>
                  <p className="p-6 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="bg-[oklch(0.97_0.012_75)] py-28 md:py-36">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">02 — How We Travel</div>
                <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.05] md:text-6xl">
                  A quieter way <span className="italic">to see the world.</span>
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
              {philosophy.map((p, i) => (
                <motion.div
                  key={p.n}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="bg-[oklch(0.97_0.012_75)] p-8"
                >
                  <div className="text-[10px] uppercase tracking-[0.3em] text-accent">{p.n}</div>
                  <h3 className="mt-5 font-display text-2xl">{p.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.b}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PRIVATE DESIGN */}
        <section className="bg-background py-28 md:py-36">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-12 md:px-10">
            <div className="md:col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img src={morocco} alt="Istanbul at golden hour" loading="lazy" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="md:col-span-7 md:pl-6">
              <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">03 — Private Design</div>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] md:text-6xl">
                Didn't see your <span className="italic">dream trip?</span>
              </h2>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Most of our finest journeys begin as a private conversation. Tell us where you've always wanted to go,
                how long you have, and what kind of traveler you are — we'll come back with a quiet, beautifully written plan.
              </p>
              <Link to="/services" className="group mt-10 inline-flex items-center gap-3 border border-foreground/30 px-7 py-4 text-[11px] uppercase tracking-[0.28em] text-foreground transition-colors hover:border-foreground">
                Start The Conversation
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
