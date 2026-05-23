import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import dubai from "@/assets/opp-dubai.jpg";
import canada from "@/assets/opp-canada.jpg";
import europe from "@/assets/opp-europe.jpg";

const items = [
  { img: dubai, place: "Dubai · UAE", kicker: "Work Programme", body: "The flagship route — hospitality, retail and corporate roles with full relocation support." },
  { img: canada, place: "Canada", kicker: "Skilled Migration", body: "Long-term pathways for professionals, students and families seeking a new chapter." },
  { img: europe, place: "Europe", kicker: "Travel & Study", body: "Schengen support, study placements and curated cultural journeys across the continent." },
];

export function Opportunities() {
  return (
    <section id="opportunities" className="bg-[oklch(0.97_0.012_75)] py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">03 — Where We Take You</div>
            <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.05] md:text-6xl">
              International opportunities, <span className="italic">handled with care.</span>
            </h2>
          </div>
          <a href="/work-travel" className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-foreground/80 hover:text-foreground">
            All Destinations
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} />
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.a
              href="/work-travel"
              key={it.place}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.2, 0.7, 0.2, 1] }}
              className="group relative block overflow-hidden border border-border bg-background"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={it.img} alt={it.place} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
                <div className="absolute left-5 top-5 text-[10px] uppercase tracking-[0.3em] text-white/90">0{i + 1} · {it.kicker}</div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="font-display text-3xl leading-tight">{it.place}</div>
                </div>
              </div>
              <div className="flex items-start justify-between gap-4 p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">{it.body}</p>
                <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-foreground/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.4} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
