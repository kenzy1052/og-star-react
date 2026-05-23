import { motion } from "framer-motion";
import { ArrowUpRight, Plane } from "lucide-react";
import heroImg from "@/assets/hero-traveler.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-40">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 pb-20 md:grid-cols-12 md:gap-10 md:px-10 md:pb-28">
        <div className="md:col-span-7 md:pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <div className="mb-7 inline-flex items-center gap-3 border border-border bg-background/70 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              International Mobility · Since 2018
            </div>

            <h1 className="font-display text-[2.8rem] leading-[1.02] tracking-tight text-balance md:text-[5rem] lg:text-[6rem]">
              Travel further.
              <br />
              <span className="italic text-foreground/80">Live</span> bigger.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              OG Star opens doors to international opportunities — Dubai work programs, Canadian relocation, European travel and curated tours. Every journey, concierge-crafted from Accra.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#opportunities" className="group inline-flex items-center gap-3 bg-foreground px-7 py-4 text-[11px] uppercase tracking-[0.28em] text-background transition-all hover:bg-accent hover:text-accent-foreground">
                Explore Opportunities
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} />
              </a>
              <a href="#services" className="inline-flex items-center gap-3 border border-foreground/20 px-7 py-4 text-[11px] uppercase tracking-[0.28em] text-foreground transition-colors hover:border-foreground">
                Our Services
              </a>
            </div>

            <dl className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-border pt-8">
              {[["1,200+", "Travelers placed"], ["6", "Continents reached"], ["98%", "Visa success rate"]].map(([k, v]) => (
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
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.2, 0.7, 0.2, 1] }}
            className="relative aspect-[3/4] w-full overflow-hidden"
          >
            <img src={heroImg} alt="Traveler preparing for an international journey" className="h-full w-full object-cover" fetchPriority="high" />
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

      <div className="border-y border-border bg-[oklch(0.97_0.012_75)] py-5">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-12 whitespace-nowrap pr-12 text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
            {Array.from({ length: 2 }).flatMap((_, i) =>
              ["Dubai", "Abu Dhabi", "Canada", "Europe", "Asia", "America", "Morocco", "Turkey", "Seychelles", "Bali"].map((c) => (
                <span key={`${i}-${c}`} className="flex items-center gap-12">
                  {c}
                  <span className="text-accent">✦</span>
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
