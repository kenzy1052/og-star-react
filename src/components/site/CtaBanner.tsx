import { ArrowUpRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-foreground py-28 text-background md:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-8">
          <div className="text-[10px] uppercase tracking-[0.35em] text-background/60">06 — Begin</div>
          <h2 className="mt-6 font-display text-4xl leading-[1.02] text-balance md:text-7xl">
            Your future doesn't wait.
            <br />
            <span className="italic text-accent">Neither should you.</span>
          </h2>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-background/70 md:text-lg">
            A short conversation is all it takes. Tell us where you want to go — we'll quietly map the rest.
          </p>
        </div>
        <div className="flex items-end md:col-span-4">
          <a href="/contact" className="group inline-flex w-full items-center justify-between gap-6 border border-background/30 bg-transparent px-7 py-6 text-[11px] uppercase tracking-[0.28em] transition-colors hover:bg-accent hover:text-accent-foreground">
            Start a Conversation
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
