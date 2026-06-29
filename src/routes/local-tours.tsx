import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Compass, Camera, Users } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CtaBanner } from "@/components/site/CtaBanner";
import heroImg from "@/assets/local-hero.jpg";
import castle from "@/assets/local-castle.jpg";
import mole from "@/assets/local-mole.jpg";
import waterfall from "@/assets/local-waterfall.jpg";
import ashanti from "@/assets/local-ashanti.jpeg";
import accra from "@/assets/local-accra.jpeg";
import nzulezu from "@/assets/local-nzulezu.jpeg";

export const Route = createFileRoute("/local-tours")({
  head: () => ({
    meta: [
      { title: "Local Tours — OG Star Travel & Tour" },
      { name: "description", content: "Curated, editorial-style Ghanaian journeys — Cape Coast, Mole, Wli, the Ashanti Kingdom and beyond. Small groups, intentional itineraries, quiet luxury." },
      { property: "og:title", content: "Local Tours — OG Star Travel & Tours" },
      { property: "og:description", content: "Ghana, told slowly. Curated journeys with concierge care." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: LocalToursPage,
});

const journeys = [
  { img: castle, region: "Central Region", title: "Cape Coast & Elmina",
    body: "Two days along the historic coast — castles, fishing harbours and the silent weight of memory at golden hour." },
  { img: mole, region: "Northern Savannah", title: "Mole National Park",
    body: "Sunrise walking safaris, elephants at the watering hole, and nights under the savannah sky in a quiet lodge." },
  { img: waterfall, region: "Volta Region", title: "Wli Falls & Afadjato",
    body: "West Africa's tallest waterfall, mountain hikes through cocoa villages, and the river country of the Volta." },
  { img: ashanti, region: "Ashanti", title: "The Ashanti Kingdom",
    body: "Manhyia Palace, Kente weaving in Bonwire and the living craft heritage of Kumasi — guided with deep care." },
  { img: accra, region: "Greater Accra", title: "Accra in a Day",
    body: "An editorial-paced city walk: Jamestown light, Makola textures, Osu rooftops at sunset, contemporary galleries." },
  { img: nzulezu, region: "Western Region", title: "Nzulezu & Beyond",
    body: "The village on stilts, mangroves and the wide green silence of the south-western coast." },
];

const moments = [
  "Cape Coast Castle", "Elmina", "Mole National Park", "Kakum Canopy Walk",
  "Lake Volta", "Manhyia Palace", "Wli Waterfalls", "Ada Foah",
  "Paga Crocodile Pond", "Boabeng-Fiema", "Kintampo Falls", "Mount Afadjato",
  "Nzulezu Stilt Village",
];

const promises = [
  { icon: Users, k: "Small Groups", v: "Six to twelve travelers. Never a crowd." },
  { icon: Compass, k: "Considered Pace", v: "Time to look, eat slowly, sit at sunset." },
  { icon: Camera, k: "Real Moments", v: "Photographer-friendly itineraries, no rush." },
  { icon: MapPin, k: "Quiet Lodges", v: "Locally-owned places we'd send our family to." },
];

function LocalToursPage() {
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
                  Local Tours · Ghana
                </div>
                <h1 className="font-display text-[2.6rem] leading-[1.02] tracking-tight text-balance md:text-[5rem] lg:text-[5.6rem]">
                  Ghana, <span className="italic text-foreground/80">told</span>
                  <br /> slowly.
                </h1>
                <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  Not a booking engine. Not a checklist. A small collection of editorial Ghanaian journeys —
                  shaped around what is worth seeing, who is worth meeting and how long it really takes to feel a place.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a href="#journeys" className="group inline-flex items-center gap-3 bg-foreground px-7 py-4 text-[11px] uppercase tracking-[0.28em] text-background transition-all hover:bg-accent hover:text-accent-foreground">
                    Explore Journeys
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
                <img src={heroImg} alt="Ghana coastline at golden hour" className="h-full w-full object-cover" fetchPriority="high" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
                <div className="absolute bottom-6 left-6 right-6 border border-white/30 bg-background/85 p-5 backdrop-blur-xl">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Now Departing</div>
                  <div className="mt-3 font-display text-2xl leading-none">Local Destinations · Memories Awaits</div>
                  <div className="mt-1 text-xs text-muted-foreground">Small groups · Year-round</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PROMISES STRIP */}
        <section className="border-y border-border bg-[oklch(0.97_0.012_75)]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border px-0 md:grid-cols-4">
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

        {/* JOURNEYS */}
        <section id="journeys" className="bg-background py-28 md:py-36">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">01 — Curated Journeys</div>
                <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.05] md:text-6xl">
                  Six routes. <span className="italic">One country.</span>
                </h2>
              </div>
              <p className="max-w-sm text-base leading-relaxed text-muted-foreground md:text-right">
                We don't sell a hundred packages. We design six that we'd take our own families on — and refine them every season.
              </p>
            </div>

            <div className="grid grid-cols-1 border-l border-t border-border md:grid-cols-2">
              {journeys.map((j, i) => (
                <motion.article
                  key={j.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: (i % 2) * 0.05 }}
                  className="group relative border-b border-r border-border bg-background"
                >
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <img src={j.img} alt={j.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
                    <div className="absolute left-6 top-6 text-[10px] uppercase tracking-[0.3em] text-white/90">0{i + 1} · {j.region}</div>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <div className="font-display text-3xl leading-tight md:text-4xl">{j.title}</div>
                    </div>
                  </div>
                  <p className="p-8 text-sm leading-relaxed text-muted-foreground md:text-base">{j.body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* MOMENTS MARQUEE */}
        <section className="border-y border-border bg-[oklch(0.97_0.012_75)] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">02 — Places We Go</div>
            <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] md:text-5xl">
              A quiet atlas <span className="italic">of Ghana.</span>
            </h2>
            <div className="mt-12 flex flex-wrap gap-3">
              {moments.map((m) => (
                <span key={m} className="border border-foreground/15 bg-background px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-foreground/80">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* EDITORIAL FEATURE */}
        <section className="bg-background py-28 md:py-36">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-12 md:px-10">
            <div className="md:col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img src={accra} alt="Mole National Park at sunrise" loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>
            <div className="md:col-span-7 md:pl-6">
              <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">03 — Field Note</div>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] md:text-6xl">
                Travel the way <span className="italic">a country deserves.</span>
              </h2>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Ghana doesn't reward speed. It rewards mornings spent talking to a fisherman, evenings spent at a roadside grill,
                a long walk through a cocoa village with someone who grew up there. Our local journeys are designed around that pace —
                with the comforts of a premium concierge quietly handling everything else.
              </p>
              <Link to="/services" className="group mt-10 inline-flex items-center gap-3 border border-foreground/30 px-7 py-4 text-[11px] uppercase tracking-[0.28em] text-foreground transition-colors hover:border-foreground">
                Plan A Private Itinerary
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
