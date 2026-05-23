import { Briefcase, FileCheck2, MessageSquare, Plane, ScrollText, Compass } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { icon: Briefcase, title: "Work & Travel Abroad", body: "Vetted overseas opportunities in Dubai, Canada and beyond — matched to your goals." },
  { icon: FileCheck2, title: "Visa & Documentation", body: "End-to-end visa guidance, document review and embassy preparation." },
  { icon: MessageSquare, title: "Interview Preparation", body: "One-on-one coaching to walk in confident and walk out approved." },
  { icon: Plane, title: "Travel Concierge", body: "Flights, accommodation and airport handling — handled, quietly." },
  { icon: ScrollText, title: "Relocation Support", body: "Settle-in assistance for housing, banking and the first 90 days abroad." },
  { icon: Compass, title: "Curated Tours", body: "Editorial local and international experiences for the modern traveler." },
];

export function Services() {
  return (
    <section id="services" className="border-b border-border bg-background py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* Header — full width, stacked on top like other sections */}
        <div className="mb-14">
          <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">02 — Services</div>
          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display text-4xl leading-[1.05] md:text-6xl">
              A concierge for <span className="italic">every</span> stage of your journey.
            </h2>
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground md:text-right">
              From the first conversation to your first day abroad — we shape the entire arc with calm precision.
            </p>
          </div>
        </div>

        {/* Cards grid — full width below the header */}
        <div className="grid grid-cols-1 border-t border-l border-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative border-b border-r border-border bg-background p-8 transition-colors hover:bg-[oklch(0.97_0.012_75)]"
            >
              <s.icon className="h-6 w-6 text-accent" strokeWidth={1.3} />
              <h3 className="mt-7 font-display text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <div className="mt-8 text-[10px] uppercase tracking-[0.3em] text-foreground/40">0{i + 1}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}