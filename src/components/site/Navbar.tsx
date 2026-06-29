import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-mark.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [toursOpen, setToursOpen] = useState(false);
  const toursRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (toursRef.current && !toursRef.current.contains(e.target as Node)) {
        setToursOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-border/60 bg-background/85 backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="flex items-center" aria-label="OG Star Travel & Tours — Home">
          <img
            src={logo}
            alt="OG Star Travel & Tours"
            className="h-11 w-auto md:h-14"
            width={320}
            height={138}
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          <Link to="/" className="text-[12px] uppercase tracking-[0.18em] text-foreground/75 transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>
            Home
          </Link>
          <Link to="/work-travel" className="text-[12px] uppercase tracking-[0.18em] text-foreground/75 transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>
            Work & Travel
          </Link>
          <Link to="/services" className="text-[12px] uppercase tracking-[0.18em] text-foreground/75 transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>
            Services
          </Link>

          {/* Tours dropdown */}
          <div ref={toursRef} className="relative">
            <button
              className="flex items-center gap-1 text-[12px] uppercase tracking-[0.18em] text-foreground/75 transition-colors hover:text-foreground"
              onMouseEnter={() => setToursOpen(true)}
              onMouseLeave={() => setToursOpen(false)}
              onClick={() => setToursOpen((v) => !v)}
            >
              <Link to="/tours" className="text-[12px] uppercase tracking-[0.18em] text-foreground/75 transition-colors hover:text-foreground">
                Tours
              </Link>
              <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${toursOpen ? "rotate-180" : ""}`} strokeWidth={1.5} />
            </button>

            <AnimatePresence>
              {toursOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute left-0 top-full mt-3 min-w-[200px] border border-border bg-background/95 shadow-xl backdrop-blur-xl"
                  onMouseEnter={() => setToursOpen(true)}
                  onMouseLeave={() => setToursOpen(false)}
                >
                  <Link
                    to="/local-tours"
                    onClick={() => setToursOpen(false)}
                    className="flex items-center gap-3 border-b border-border/60 px-5 py-4 text-[11px] uppercase tracking-[0.22em] text-foreground/70 transition-colors hover:bg-[oklch(0.97_0.012_75)] hover:text-foreground"
                  >
                    <span className="text-accent">✦</span> Local Tours
                  </Link>
                  <Link
                    to="/international"
                    onClick={() => setToursOpen(false)}
                    className="flex items-center gap-3 px-5 py-4 text-[11px] uppercase tracking-[0.22em] text-foreground/70 transition-colors hover:bg-[oklch(0.97_0.012_75)] hover:text-foreground"
                  >
                    <span className="text-accent">✦</span> International Tours
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/gallery" className="text-[12px] uppercase tracking-[0.18em] text-foreground/75 transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>
            Gallery
          </Link>
          <Link to="/about" className="text-[12px] uppercase tracking-[0.18em] text-foreground/75 transition-colors hover:text-foreground" activeProps={{ className: "text-foreground" }}>
            About
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contact" className="hidden border border-foreground bg-foreground px-5 py-3 text-[11px] uppercase tracking-[0.25em] text-background transition-colors hover:bg-transparent hover:text-foreground md:inline-block">
            Contact
          </Link>
          <button onClick={() => setOpen((v) => !v)} className="grid h-10 w-10 place-items-center border border-foreground/20 lg:hidden" aria-label="Menu">
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="flex flex-col px-6 py-4">
            {[
              { label: "Home", to: "/" },
              { label: "Work & Travel", to: "/work-travel" },
              { label: "Services", to: "/services" },
              { label: "Tours", to: "/tours" },
              { label: "Local Tours", to: "/local-tours" },
              { label: "International Tours", to: "/international" },
              { label: "Gallery", to: "/gallery" },
              { label: "About", to: "/about" },
              { label: "Contact", to: "/contact" },
            ].map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`border-b border-border/60 py-4 text-sm uppercase tracking-[0.18em] ${l.label === "Local Tours" || l.label === "International Tours" ? "pl-5 text-foreground/60" : ""}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
