import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Globe2 } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import localHeroImg from "@/assets/local-hero.jpg";
import intlHeroImg from "@/assets/intl-hero.jpg";

export const Route = createFileRoute("/tours")({
  head: () => ({
    meta: [
      { title: "Tours — OG Star Travel & Tour" },
      { name: "description", content: "Curated local Ghanaian journeys and international escapes — editorial, elegant, experience-driven." },
      { name: "keywords", content: "tour packages Ghana, Ghana tour operator, local tours Ghana, international tours Ghana, travel agency Accra, Cape Coast tours, Mole National Park tours, guided tours Ghana" },
      { property: "og:title", content: "Tours — OG Star Travel & Tour" },
      { property: "og:description", content: "Curated local Ghanaian journeys and international escapes — editorial, elegant, experience-driven." },
      { property: "og:url", content: "https://ogstartravelandtours.com/tours" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `https://ogstartravelandtours.com${localHeroImg}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Tours — OG Star Travel & Tour" },
      { name: "twitter:description", content: "Curated local Ghanaian journeys and international escapes." },
      { name: "twitter:image", content: `https://ogstartravelandtours.com${localHeroImg}` },
    ],
    links: [{ rel: "canonical", href: "https://ogstartravelandtours.com/tours" }],
  }),
  component: ToursPage,
});

function ToursPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 md:pt-36">
        {/* Header */}
        <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">Experiences</div>
            <h1 className="mt-6 font-display text-5xl leading-[1.02] md:text-7xl lg:text-8xl">
              Curated <span className="italic">journeys</span>,<br />
              crafted with care.
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Whether you're exploring Ghana's landscapes or venturing across the globe — every OG Star tour is an editorial experience, not a package. Choose your direction below.
            </p>
          </motion.div>
        </section>

        {/* Two tour cards — full bleed selection */}
        <section className="grid md:grid-cols-2">
          {/* Local Tours */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.7, 0.2, 1] }}
            className="group relative min-h-[70vh] overflow-hidden"
          >
            <img
              src={localHeroImg}
              alt="Local Tours Ghana"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

            <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-14">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/70">
                <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} />
                Ghana · Local
              </div>
              <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl">
                Local<br />Tours
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75">
                Cape Coast, Mole, Wli Waterfalls, Ashanti Kingdom — Ghana's most breathtaking destinations, curated for the discerning traveler.
              </p>
              <Link
                to="/local-tours"
                className="group/btn mt-8 inline-flex w-fit items-center gap-3 border border-white/40 bg-white/10 px-7 py-4 text-[11px] uppercase tracking-[0.28em] text-white backdrop-blur transition-all hover:bg-white hover:text-foreground"
              >
                Explore Local Tours
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" strokeWidth={1.5} />
              </Link>
            </div>
          </motion.div>

          {/* International Tours */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
            className="group relative min-h-[70vh] overflow-hidden"
          >
            <img
              src={intlHeroImg}
              alt="International Tours"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

            <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-14">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/70">
                <Globe2 className="h-3.5 w-3.5" strokeWidth={1.5} />
                Global · International
              </div>
              <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl">
                International<br />Tours
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75">
                Dubai, Morocco, Bali, Istanbul, Europe — concierge-crafted international escapes with on-ground care from the moment you land.
              </p>
              <Link
                to="/international"
                className="group/btn mt-8 inline-flex w-fit items-center gap-3 border border-white/40 bg-white/10 px-7 py-4 text-[11px] uppercase tracking-[0.28em] text-white backdrop-blur transition-all hover:bg-white hover:text-foreground"
              >
                Explore International Tours
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" strokeWidth={1.5} />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Divider note */}
        <section className="border-y border-border bg-[oklch(0.97_0.012_75)] py-12">
          <div className="mx-auto max-w-7xl px-6 text-center md:px-10">
            <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
              All tours are small-group, concierge-crafted experiences · Not package deals
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
