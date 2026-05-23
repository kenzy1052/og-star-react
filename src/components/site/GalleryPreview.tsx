import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

// Two extra Unsplash travel images (reliable CDN, no auth required)
const g5 = "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80";
const g6 = "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80";

interface PolaroidItem {
  src: string;
  caption: string;
  rotate: number;   // base tilt in degrees
  hoverRotate: number; // tilt on hover
  x: number;        // slight x nudge (%)
  y: number;        // slight y nudge (px)
  zIndex: number;
  delay: number;
}

const items: PolaroidItem[] = [
  { src: g1, caption: "Departure day · Accra",        rotate: -4,  hoverRotate:  2,  x: 0,   y: 0,   zIndex: 1, delay: 0.00 },
  { src: g2, caption: "Window seat · ACC → DXB",      rotate:  3,  hoverRotate: -2,  x: 0,   y: 0,   zIndex: 2, delay: 0.08 },
  { src: g3, caption: "Cape Coast, Ghana",             rotate: -2,  hoverRotate:  4,  x: 0,   y: 0,   zIndex: 3, delay: 0.16 },
  { src: g4, caption: "Group · Burj Khalifa",          rotate:  5,  hoverRotate: -3,  x: 0,   y: 0,   zIndex: 4, delay: 0.24 },
  { src: g5, caption: "Above the clouds",              rotate: -3,  hoverRotate:  5,  x: 0,   y: 0,   zIndex: 5, delay: 0.32 },
  { src: g6, caption: "Boarding · DXB",                rotate:  2,  hoverRotate: -4,  x: 0,   y: 0,   zIndex: 6, delay: 0.40 },
];

export function GalleryPreview() {
  return (
    <section
      className="bg-[oklch(0.97_0.012_75)] py-28 md:py-36"
      style={{ overflow: "hidden" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
              05 — Gallery
            </div>
            <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.05] md:text-6xl">
              Memories from the <span className="italic">runway.</span>
            </h2>
          </div>
          <a href="/gallery" className="text-[11px] uppercase tracking-[0.28em] hover:text-accent">
            View Full Gallery →
          </a>
        </div>

        {/* Polaroid Grid — two rows of three */}
        <div
          className="grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3 lg:gap-x-14"
          style={{ perspective: "1200px" }}
        >
          {items.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 40, rotate: it.rotate }}
              whileInView={{ opacity: 1, y: it.y, rotate: it.rotate }}
              whileHover={{
                rotate: it.hoverRotate,
                scale: 1.06,
                zIndex: 20,
                boxShadow: "0 30px 60px rgba(0,0,0,0.22), 0 8px 20px rgba(0,0,0,0.14)",
              }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                default: { duration: 0.65, delay: it.delay, ease: [0.22, 1, 0.36, 1] },
                scale:   { duration: 0.35, ease: "easeOut" },
                rotate:  { duration: 0.35, ease: "easeOut" },
                boxShadow: { duration: 0.3 },
              }}
              style={{
                position: "relative",
                zIndex: it.zIndex,
                cursor: "pointer",
                // Polaroid white frame
                background: "#fffdf8",
                padding: "12px 12px 48px 12px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.13), 0 2px 6px rgba(0,0,0,0.08)",
                // Tape strips via pseudo — we use a real element instead (see below)
              }}
              className="mx-auto w-[260px] sm:w-full"
            >
              {/* Tape strip top-center */}
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
              <div
                style={{
                  overflow: "hidden",
                  width: "100%",
                  aspectRatio: "4/3",
                  background: "#d4cfc7",
                }}
              >
                <motion.img
                  src={it.src}
                  alt={it.caption}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </div>

              {/* Caption — Polaroid handwritten-style label */}
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
                {it.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      {/* Load the handwritten font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap');
      `}</style>
    </section>
  );
}