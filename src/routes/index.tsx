import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { EntryExperience } from "@/components/EntryExperience";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Opportunities } from "@/components/site/Opportunities";
import { Stories } from "@/components/site/Stories";
import { GalleryPreview } from "@/components/site/GalleryPreview";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OG Star Travel & Tour — Your Gateway to the World" },
      { name: "description", content: "Premium international travel, work abroad, Dubai opportunities, visa support and curated tours from Accra, Ghana. Concierge-grade service for every journey." },
      { name: "keywords", content: "travel agency Ghana, travel agency Accra, visa support Accra, work abroad Ghana, international tours Ghana, Dubai opportunities Ghana, OG Star Travel, travel agent Accra, work travel Ghana, study abroad Ghana, tour packages Ghana, Ghana tour operator, flight booking Ghana, relocation services Ghana" },
      { property: "og:title", content: "OG Star Travel & Tour — Your Gateway to the World" },
      { property: "og:description", content: "Premium international travel, work abroad, visa support and curated tours from Accra, Ghana." },
      { property: "og:url", content: "https://ogstartravelandtours.com/" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://ogstartravelandtours.com/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "OG Star Travel & Tour — Your Gateway to the World" },
      { name: "twitter:description", content: "Premium international travel, work abroad, visa support and curated tours from Accra, Ghana." },
      { name: "twitter:image", content: "https://ogstartravelandtours.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://ogstartravelandtours.com/" }],
  }),
  component: Index,
});

const ENTERED_KEY = "ogstar:entered";

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      delay: i * 0.13,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function Index() {
  // Start as null = "not yet determined" — we check sessionStorage in useEffect
  const [entered, setEntered] = useState<boolean | null>(null);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    try {
      const hasEntered = sessionStorage.getItem(ENTERED_KEY) === "1";
      if (hasEntered) {
        // Returning visitor this session — skip entry, show page immediately
        setEntered(true);
        setAnimateIn(true);
      } else {
        // First visit — show entry experience
        setEntered(false);
      }
    } catch {
      // Privacy mode / SSR fallback — skip entry
      setEntered(true);
      setAnimateIn(true);
    }
  }, []);

  useEffect(() => {
    if (entered === false) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [entered]);

  const handleEnter = () => {
    try { sessionStorage.setItem(ENTERED_KEY, "1"); } catch {}
    setEntered(true);
    setTimeout(() => setAnimateIn(true), 120);
  };

  // While we haven't checked sessionStorage yet, render nothing (avoids flash)
  if (entered === null) return null;

  const sections = [
    <Hero key="hero" />,
    <Services key="services" />,
    <Opportunities key="opp" />,
    <Stories key="stories" />,
    <GalleryPreview key="gallery" />,
    <CtaBanner key="cta" />,
    <Footer key="footer" />,
  ];

  return (
    <>
      {entered === false && <EntryExperience onEnter={handleEnter} />}

      <Navbar />

      <main>
        {sections.map((section, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={sectionVariants}
            initial="hidden"
            animate={animateIn ? "visible" : "hidden"}
          >
            {section}
          </motion.div>
        ))}
      </main>
    </>
  );
}
