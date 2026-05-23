import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Plane } from "lucide-react";

interface EntryExperienceProps {
  onEnter: () => void;
}

export function EntryExperience({ onEnter }: EntryExperienceProps) {
  const [clicked, setClicked] = useState(false);
  const planeControls = useAnimation();
  const leftSideControls = useAnimation();
  const rightSideControls = useAnimation();
  const centerContentControls = useAnimation();

  // Lock scroll while entry is visible
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleEnter = async () => {
    if (clicked) return;
    setClicked(true);

    const DURATION = 2.2;
    const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1]; // Premium, cinematic acceleration

    // 1. Fade out the text & UI options immediately ahead of the tear
    centerContentControls.start({
      opacity: 0,
      y: -40,
      scale: 0.95,
      transition: { duration: 0.5, ease: "easeOut" }
    });

    // 2. Rocket the plane vertically from the bottom straight out the top
    planeControls.start({
      y: [160, 0, "-130vh"],
      opacity: [0, 1, 1, 0],
      scale: [0.8, 1.1, 1.2, 0.9],
      transition: {
        duration: DURATION,
        ease: EASE,
        times: [0, 0.15, 0.85, 1],
      },
    });

    // 3. Left panel peels away left, rotating slightly like ripped cardstock
    leftSideControls.start({
      x: "-100%",
      rotateZ: -4,
      skewY: -2,
      transition: {
        duration: DURATION - 0.2,
        ease: EASE,
        delay: 0.15, // Delay matches when the plane strikes the center screen
      },
    });

    // 4. Right panel peels away right, mirroring the rip geometry
    rightSideControls.start({
      x: "100%",
      rotateZ: 4,
      skewY: 2,
      transition: {
        duration: DURATION - 0.2,
        ease: EASE,
        delay: 0.15,
      },
    });

    // Trigger homepage layout reveal just before panels fully clear frame
    setTimeout(() => {
      onEnter();
    }, (DURATION - 0.3) * 1000);
  };

  // Shared sophisticated background styling extracted to keep code clean
  const sharedBackground = {
    background: `
      radial-gradient(ellipse 90% 55% at 50% -10%, oklch(0.32 0.06 250) 0%, transparent 65%),
      radial-gradient(ellipse 60% 45% at 15% 100%, oklch(0.20 0.04 250) 0%, transparent 60%),
      radial-gradient(ellipse 55% 40% at 85% 90%, oklch(0.78 0.13 70 / 0.12) 0%, transparent 55%),
      oklch(0.18 0.03 250)
    `
  };

  return (
    <div className="fixed inset-0 z-[200] overflow-hidden pointer-events-none">
      
      {/* ── LEFT WALL OF THE TEAR ── */}
      <motion.div
        animate={leftSideControls}
        initial={{ x: "0%" }}
        style={{ ...sharedBackground, originX: 0, originY: 0.5 }}
        className="pointer-events-auto absolute inset-y-0 left-0 w-1/2 overflow-hidden border-r border-white/5 shadow-[20px_0_40px_rgba(0,0,0,0.6)]"
      >
        {/* Left Side Noise & Details */}
        <div className="absolute inset-0 opacity-[0.04] w-[200vw]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
        
        {/* Logo (Stays left) */}
        <motion.div
          animate={centerContentControls}
          className="absolute left-8 top-8 z-10 flex items-center gap-3 md:left-12 md:top-10"
        >
          <div className="grid h-9 w-9 place-items-center" style={{ border: "1px solid rgba(255,255,255,0.15)" }}>
            <Plane className="h-4 w-4 text-white/80 -rotate-45" strokeWidth={1.5} />
          </div>
          <div className="leading-tight text-left">
            <div className="font-display text-sm text-white/90">OG Star</div>
            <div className="text-[9px] uppercase tracking-[0.35em] text-white/40">Travel & Tour</div>
          </div>
        </motion.div>
      </motion.div>

      {/* ── RIGHT WALL OF THE TEAR ── */}
      <motion.div
        animate={rightSideControls}
        initial={{ x: "0%" }}
        style={{ ...sharedBackground, originX: 1, originY: 0.5 }}
        className="pointer-events-auto absolute inset-y-0 right-0 w-1/2 overflow-hidden border-l border-white/5 shadow-[-20px_0_40px_rgba(0,0,0,0.6)]"
      >
        {/* Right Side Noise & Details */}
        <div className="absolute inset-0 opacity-[0.04] w-[200vw] -translate-x-1/2" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
        
        {/* Location Tag (Stays right) */}
        <motion.div
          animate={centerContentControls}
          className="absolute right-8 top-10 hidden text-[10px] uppercase tracking-[0.4em] text-white/25 md:block"
        >
          Accra · Ghana
        </motion.div>
      </motion.div>

      {/* ── OVERLAY MAIN TEXT CONTENT ── */}
      {/* Placed centered globally so splitting panels doesn't break text rendering early */}
      <motion.div
        animate={centerContentControls}
        initial={{ opacity: 1, y: 0 }}
        className="pointer-events-auto absolute inset-x-0 top-1/2 z-10 -translate-y-[60%] px-8 text-center"
      >
        <div className="mb-5 text-[10px] uppercase tracking-[0.55em] text-white/30">
          Travel · Work Abroad · Visa Support
        </div>

        <h1 className="font-display text-[2.6rem] leading-[1.06] tracking-tight text-white/95 text-balance md:text-6xl lg:text-[5rem]">
          The world is<br />
          <span style={{ color: "oklch(0.78 0.13 70)" }} className="italic">
            waiting for you.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-white/40 md:text-base">
          Premium international mobility — crafted in Accra, designed for the world.
        </p>

        {/* CTA */}
        <button
          onClick={handleEnter}
          disabled={clicked}
          className="mt-10 inline-flex items-center gap-3 px-9 py-4 text-[11px] uppercase tracking-[0.35em] text-white/85 transition-all disabled:cursor-not-allowed hover:bg-[oklch(0.78_0.13_70_/_0.12)] hover:scale-[1.03] active:scale-[0.97]"
          style={{
            border: "1px solid rgba(255,255,255,0.18)",
            background: "transparent",
          }}
        >
          Begin Your Journey
          <Plane className="h-3.5 w-3.5 -rotate-45" strokeWidth={1.5} />
        </button>
      </motion.div>

      {/* ── THE PLANE (VERTICAL ASCENT) ── */}
      <motion.div
        animate={planeControls}
        initial={{ y: 160, opacity: 0, scale: 0.9 }}
        className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2"
        style={{ tyranny: "transform, opacity" }}
      >
        {/* Glow halo */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "140px",
            height: "140px",
            background: "radial-gradient(circle, oklch(0.78 0.13 70 / 0.5) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Vapor trail */}
        <div
          className="absolute left-1/2 top-full -translate-x-1/2"
          style={{
            width: "2px",
            height: "160px",
            background: "linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)",
          }}
        />

        {/* Plane icon: Adjusted to -rotate-45 so it climbs perfectly straight up */}
        <Plane
          className="relative z-10 h-10 w-10 -rotate-45 md:h-14 md:w-14"
          fill="rgba(255,255,255,0.95)"
          stroke="none"
          style={{
            filter: "drop-shadow(0 0 14px oklch(0.78 0.13 70 / 0.8)) drop-shadow(0 0 35px oklch(0.78 0.13 70 / 0.3))",
          }}
        />
      </motion.div>

      {/* ── Runway dots (visible before click) ── */}
      <motion.div
        animate={clicked ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        {[64, 44, 28].map((w, i) => (
          <div
            key={i}
            style={{
              width: `${w}px`,
              height: "1px",
              background: `rgba(255,255,255,${0.10 - i * 0.025})`,
            }}
          />
        ))}
      </motion.div>

      {/* ── Page counter ── */}
      <motion.div
        animate={clicked ? { opacity: 0 } : { opacity: 1 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 select-none text-[9px] uppercase tracking-[0.5em] text-white/18"
      >
        01 / 07
      </motion.div>

      {/* Edge vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "inset 0 0 140px rgba(0,0,0,0.35)" }} />
    </div>
  );
}