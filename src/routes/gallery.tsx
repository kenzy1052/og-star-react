import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import dubai from "@/assets/opp-dubai.jpg";
import canada from "@/assets/opp-canada.jpg";
import europe from "@/assets/opp-europe.jpg";
import intlHero from "@/assets/intl-hero.jpg";
import morocco from "@/assets/intl-morocco.jpg";
import bali from "@/assets/intl-bali.jpg";
import turkey from "@/assets/intl-turkey.jpg";
import localHero from "@/assets/local-hero.jpg";
import castle from "@/assets/local-castle.jpg";
import mole from "@/assets/local-mole.jpg";
import waterfall from "@/assets/local-waterfall.jpg";
import workHero from "@/assets/work-hero.jpg";
import aboutHero from "@/assets/about-hero.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — OG Star Travel & Tour" },
      { name: "description", content: "Memories from the runway. Real moments, real journeys, real people — captured through the OG Star experience." },
      { property: "og:title", content: "Gallery — OG Star" },
    ],
  }),
  component: GalleryPage,
});

interface GalleryItem {
  src: string;
  caption: string;
  category: "All" | "Work Abroad" | "Local Tours" | "International" | "Moments";
  rotate: number;
}

const items: GalleryItem[] = [
  { src: g1,       caption: "Departure day · Accra",          category: "Moments",       rotate: -3 },
  { src: g2,       caption: "Window seat · ACC → DXB",        category: "Work Abroad",   rotate:  2 },
  { src: g3,       caption: "Cape Coast, Ghana",              category: "Local Tours",   rotate: -2 },
  { src: g4,       caption: "Group · Burj Khalifa",           category: "Work Abroad",   rotate:  4 },
  { src: dubai,    caption: "Dubai · UAE",                    category: "Work Abroad",   rotate: -1 },
  { src: canada,   caption: "Canada Pathway",                 category: "Work Abroad",   rotate:  3 },
  { src: europe,   caption: "European Tour",                  category: "International", rotate: -4 },
  { src: intlHero, caption: "International Departure",        category: "International", rotate:  2 },
  { src: morocco,  caption: "Morocco Magic",                  category: "International", rotate: -2 },
  { src: bali,     caption: "Bali & Malaysia",                category: "International", rotate:  5 },
  { src: turkey,   caption: "Turkey Delight",                 category: "International", rotate: -3 },
  { src: localHero,caption: "Ghana Landscapes",               category: "Local Tours",   rotate:  1 },
  { src: castle,   caption: "Elmina Castle",                  category: "Local Tours",   rotate: -5 },
  { src: mole,     caption: "Mole National Park",             category: "Local Tours",   rotate:  3 },
  { src: waterfall,caption: "Wli Waterfalls",                 category: "Local Tours",   rotate: -2 },
  { src: workHero, caption: "New opportunities, new horizons",category: "Work Abroad",   rotate:  4 },
  { src: aboutHero,caption: "The OG Star Team",               category: "Moments",       rotate: -3 },
  {
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    caption: "Above the clouds",
    category: "Moments",
    rotate: 2,
  },
  {
    src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    caption: "Boarding · DXB",
    category: "Moments",
    rotate: -4,
  },
  {
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
    caption: "Road trip memories",
    category: "Local Tours",
    rotate: 3,
  },
  {
    src: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=800&q=80",
    caption: "Group journey · Accra",
    category: "Moments",
    rotate: -1,
  },
  {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    caption: "Airport mornings",
    category: "Moments",
    rotate: 2,
  },
];

const CATEGORIES = ["All", "Work Abroad", "International", "Local Tours", "Moments"] as const;

function Lightbox({ items, index, onClose, onPrev, onNext }: {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const item = items[index];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        className="absolute right-5 top-5 grid h-10 w-10 place-items-center border border-white/20 text-white/80 transition-colors hover:border-white/60 hover:text-white"
        onClick={onClose}
        aria-label="Close"
      >
        <X className="h-4 w-4" strokeWidth={1.5} />
      </button>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center border border-white/20 text-white/80 transition-colors hover:border-white/60 hover:text-white md:left-8"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous"
      >
        <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
      </button>

      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
        className="mx-16 flex max-h-[85vh] max-w-[85vw] flex-col items-center"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fffdf8",
          padding: "12px 12px 52px 12px",
          boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
        }}
      >
        <img
          src={item.src}
          alt={item.caption}
          className="block max-h-[75vh] max-w-[80vw] object-contain"
        />
        <div
          className="mt-2 text-center"
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "1rem",
            color: "oklch(0.38 0.03 250)",
          }}
        >
          {item.caption}
        </div>
      </motion.div>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center border border-white/20 text-white/80 transition-colors hover:border-white/60 hover:text-white md:right-8"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next"
      >
        <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
      </button>

      <div className="absolute bottom-6 text-[11px] uppercase tracking-[0.3em] text-white/40">
        {index + 1} / {items.length}
      </div>
    </motion.div>
  );
}

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? items
    : items.filter((i) => i.category === activeCategory);

  const openLightbox = useCallback((idx: number) => setLightboxIndex(idx), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevItem = useCallback(() =>
    setLightboxIndex((i) => i !== null ? (i - 1 + filtered.length) % filtered.length : null),
    [filtered.length]
  );
  const nextItem = useCallback(() =>
    setLightboxIndex((i) => i !== null ? (i + 1) % filtered.length : null),
    [filtered.length]
  );

  return (
    <>
      <Navbar />
      <main className="pt-28 md:pt-36">
        {/* Header */}
        <section className="mx-auto max-w-7xl px-6 pb-14 md:px-10 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">05 — Gallery</div>
            <h1 className="mt-6 font-display text-5xl leading-[1.02] md:text-7xl lg:text-8xl">
              Memories from<br />
              <span className="italic">the runway.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Real moments. Real people. Real journeys. These are the stories that live long after the landing.
            </p>
          </motion.div>
        </section>

        {/* Filter tabs */}
        <section className="sticky top-[72px] z-40 border-y border-border bg-background/90 backdrop-blur-lg">
          <div className="mx-auto max-w-7xl overflow-x-auto px-6 md:px-10">
            <div className="flex gap-0 py-4">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap border-b-2 px-5 py-2 text-[11px] uppercase tracking-[0.25em] transition-colors ${
                    activeCategory === cat
                      ? "border-foreground text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Polaroid masonry grid */}
        <section className="bg-[oklch(0.97_0.012_75)] py-20 md:py-28" style={{ perspective: "1200px" }}>
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <motion.div
              layout
              className="grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3 lg:gap-x-14 xl:grid-cols-4"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((item, i) => (
                  <motion.figure
                    key={`${activeCategory}-${i}-${item.caption}`}
                    layout
                    initial={{ opacity: 0, y: 40, rotate: item.rotate }}
                    animate={{ opacity: 1, y: 0, rotate: item.rotate }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    whileHover={{
                      rotate: item.rotate * -0.4,
                      scale: 1.06,
                      zIndex: 20,
                      boxShadow: "0 30px 60px rgba(0,0,0,0.22), 0 8px 20px rgba(0,0,0,0.14)",
                    }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      default: { duration: 0.6, delay: (i % 12) * 0.04, ease: [0.22, 1, 0.36, 1] },
                      scale: { duration: 0.3, ease: "easeOut" },
                      rotate: { duration: 0.3, ease: "easeOut" },
                    }}
                    onClick={() => openLightbox(i)}
                    style={{
                      position: "relative",
                      cursor: "pointer",
                      background: "#fffdf8",
                      padding: "12px 12px 48px 12px",
                      boxShadow: "0 6px 20px rgba(0,0,0,0.13), 0 2px 6px rgba(0,0,0,0.08)",
                      zIndex: 1,
                    }}
                    className="group mx-auto w-[260px] sm:w-full"
                  >
                    {/* Tape strip */}
                    <div
                      aria-hidden
                      style={{
                        position: "absolute",
                        top: "-14px",
                        left: "50%",
                        transform: "translateX(-50%) rotate(-2deg)",
                        width: "52px",
                        height: "22px",
                        background: "rgba(210,195,160,0.55)",
                        backdropFilter: "blur(1px)",
                        borderRadius: "2px",
                        zIndex: 2,
                      }}
                    />

                    {/* Photo area */}
                    <div style={{ overflow: "hidden", width: "100%", aspectRatio: "4/3", background: "#d4cfc7", position: "relative" }}>
                      <motion.img
                        src={item.src}
                        alt={item.caption}
                        loading="lazy"
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                      />
                      {/* Zoom overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/20 group-hover:opacity-100">
                        <ZoomIn className="h-7 w-7 text-white" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Caption */}
                    <figcaption
                      style={{
                        textAlign: "center",
                        marginTop: "10px",
                        fontFamily: "'Dancing Script', 'Segoe Script', cursive",
                        fontSize: "0.82rem",
                        letterSpacing: "0.01em",
                        color: "oklch(0.38 0.03 250)",
                        lineHeight: 1.3,
                      }}
                    >
                      {item.caption}
                    </figcaption>
                  </motion.figure>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <div>
                <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">Your story next</div>
                <h2 className="mt-5 font-display text-3xl leading-tight md:text-5xl">
                  Ready to create<br />
                  <span className="italic">your own memory?</span>
                </h2>
              </div>
              <a
                href="/contact"
                className="group inline-flex items-center gap-3 bg-foreground px-7 py-4 text-[11px] uppercase tracking-[0.28em] text-background transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Start Your Journey
                <svg className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" /></svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={filtered}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevItem}
            onNext={nextItem}
          />
        )}
      </AnimatePresence>

      <Footer />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap');
      `}</style>
    </>
  );
}
