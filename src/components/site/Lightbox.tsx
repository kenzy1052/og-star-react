import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

export interface LightboxImage {
  src: string;
  caption?: string;
}

interface LightboxProps {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;

/**
 * Full-screen image viewer with zoom in / zoom out, drag-to-pan when zoomed,
 * and previous / next navigation. Works with mouse, touch, keyboard and wheel.
 */
export function Lightbox({ images, index, onClose, onIndexChange }: LightboxProps) {
  const open = index !== null;
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const dragging = useRef(false);
  const last = useRef({ x: 0, y: 0 });

  const reset = useCallback(() => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  }, []);

  const goPrev = useCallback(() => {
    if (index === null) return;
    reset();
    onIndexChange((index - 1 + images.length) % images.length);
  }, [index, images.length, onIndexChange, reset]);

  const goNext = useCallback(() => {
    if (index === null) return;
    reset();
    onIndexChange((index + 1) % images.length);
  }, [index, images.length, onIndexChange, reset]);

  const zoomIn = useCallback(() => setZoom((z) => Math.min(MAX_ZOOM, +(z + 0.5).toFixed(2))), []);
  const zoomOut = useCallback(
    () =>
      setZoom((z) => {
        const next = Math.max(MIN_ZOOM, +(z - 0.5).toFixed(2));
        if (next === 1) setOffset({ x: 0, y: 0 });
        return next;
      }),
    [],
  );

  // Keyboard controls
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
      else if (e.key === "+" || e.key === "=") zoomIn();
      else if (e.key === "-") zoomOut();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, goPrev, goNext, zoomIn, zoomOut]);

  // Lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Reset zoom whenever a new image opens
  useEffect(() => {
    if (open) reset();
  }, [index, open, reset]);

  if (index === null) return null;
  const item = images[index];
  if (!item) return null;

  const onPointerDown = (e: React.PointerEvent) => {
    if (zoom <= 1) return;
    dragging.current = true;
    last.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    setOffset((o) => ({
      x: o.x + (e.clientX - last.current.x),
      y: o.y + (e.clientY - last.current.y),
    }));
    last.current = { x: e.clientX, y: e.clientY };
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[120] flex items-center justify-center bg-black/95 backdrop-blur-sm"
        onClick={onClose}
        onWheel={(e) => {
          if (e.deltaY < 0) zoomIn();
          else zoomOut();
        }}
      >
        {/* Top-right controls */}
        <div className="absolute right-4 top-4 z-10 flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={zoomOut}
            disabled={zoom <= MIN_ZOOM}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white/60 hover:text-white disabled:opacity-30"
            aria-label="Zoom out"
          >
            <ZoomOut className="h-4 w-4" strokeWidth={1.5} />
          </button>
          <button
            onClick={zoomIn}
            disabled={zoom >= MAX_ZOOM}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white/60 hover:text-white disabled:opacity-30"
            aria-label="Zoom in"
          >
            <ZoomIn className="h-4 w-4" strokeWidth={1.5} />
          </button>
          <button
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white/60 hover:text-white"
            aria-label="Close"
          >
            <X className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>

        {/* Prev */}
        <button
          className="absolute left-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white/60 hover:text-white md:left-8"
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
        </button>

        {/* Image */}
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.28, ease: [0.2, 0.7, 0.2, 1] }}
          className="flex max-h-[88vh] max-w-[92vw] flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="overflow-hidden"
            style={{ cursor: zoom > 1 ? (dragging.current ? "grabbing" : "grab") : "zoom-in" }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
          >
            <img
              src={item.src}
              alt={item.caption ?? ""}
              draggable={false}
              onDoubleClick={() => (zoom > 1 ? reset() : zoomIn())}
              onClick={() => zoom === 1 && zoomIn()}
              className="block max-h-[80vh] max-w-[90vw] select-none object-contain shadow-[0_40px_90px_rgba(0,0,0,0.6)]"
              style={{
                transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
                transition: dragging.current ? "none" : "transform 0.2s ease-out",
              }}
            />
          </div>
          {item.caption && (
            <div className="mt-4 text-center text-[11px] uppercase tracking-[0.3em] text-white/55">
              {item.caption}
            </div>
          )}
        </motion.div>

        {/* Next */}
        <button
          className="absolute right-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white/60 hover:text-white md:right-8"
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
        </button>

        {/* Counter */}
        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[11px] uppercase tracking-[0.3em] text-white/40">
          {index + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
