import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const stories = [
  { name: "Peter Apheli", route: "Accra → Dubai", quote: "From the first call to my first day in Dubai, OG Star handled everything. The visa, the interview, the landing — quietly excellent." },
  { name: "Daniela Oppong", route: "Accra → Toronto", quote: "They didn't sell me a package. They built me a plan. Two years later, I'm settled in Canada with my family." },
  { name: "Sarah Amadu", route: "Accra → Abu Dhabi", quote: "Professional, calm, deeply human. They turned the most stressful chapter of my life into the most exciting one." },
];

export function Stories() {
  return (
    <section className="border-y border-border bg-background py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 max-w-3xl">
          <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">04 — Stories</div>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] md:text-6xl">
            Real journeys. <span className="italic">Real people.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {stories.map((s, i) => (
            <motion.figure
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex flex-col justify-between border border-border bg-[oklch(0.97_0.012_75)] p-8 md:p-10"
            >
              <Quote className="h-6 w-6 text-accent" strokeWidth={1.3} />
              <blockquote className="mt-8 font-display text-xl leading-snug text-foreground md:text-2xl">
                "{s.quote}"
              </blockquote>
              <figcaption className="mt-10 flex items-center justify-between border-t border-border pt-5">
                <div>
                  <div className="text-sm font-medium">{s.name}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{s.route}</div>
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/40">0{i + 1}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
