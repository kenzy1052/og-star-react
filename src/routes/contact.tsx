import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import {
  PRIMARY_PHONE_DISPLAY,
  PRIMARY_PHONE_TEL,
  SECONDARY_PHONE_DISPLAY,
  SECONDARY_PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — OG Star Travel & Tour" },
      { name: "description", content: "Get in touch with OG Star Travel & Tour. Talk to us about work abroad opportunities, visa support, tours and relocation assistance." },
      { name: "keywords", content: "contact OG Star Travel, travel agency Accra contact, visa consultation Accra, book a tour Ghana, travel agent phone number Ghana" },
      { property: "og:title", content: "Contact — OG Star Travel & Tours" },
      { property: "og:description", content: "Talk to us about work abroad opportunities, visa support, tours and relocation assistance." },
      { property: "og:url", content: "https://ogstartravelandtours.com/contact" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://ogstartravelandtours.com/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact — OG Star Travel & Tours" },
      { name: "twitter:description", content: "Talk to us about work abroad opportunities, visa support, tours and relocation assistance." },
      { name: "twitter:image", content: "https://ogstartravelandtours.com/og-image.jpg" },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How do I get started with the Dubai Work Programme?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Reach out via this form or WhatsApp and we'll schedule a brief consultation to assess your profile and walk you through the current intake requirements.",
              },
            },
            {
              "@type": "Question",
              name: "Do you handle the visa application for me?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Our documentation team handles end-to-end visa guidance — from eligibility review and document checklist to application drafting and submission.",
              },
            },
            {
              "@type": "Question",
              name: "How long does the process typically take?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Timelines vary by destination and case. Dubai placements typically take 4–8 weeks from consultation to departure. We'll give you a realistic timeline in your first call.",
              },
            },
            {
              "@type": "Question",
              name: "Do you have tours for solo travelers?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely. Our tours accommodate solo travelers, couples, families and groups. Every itinerary is tailored to your preferences.",
              },
            },
          ],
        },
      },
    ],
    links: [{ rel: "canonical", href: "https://ogstartravelandtours.com/contact" }],
  }),
  component: ContactPage,
});

const faqs = [
  {
    q: "How do I get started with the Dubai Work Programme?",
    a: "Reach out via this form or WhatsApp and we'll schedule a brief consultation to assess your profile and walk you through the current intake requirements.",
  },
  {
    q: "Do you handle the visa application for me?",
    a: "Yes. Our documentation team handles end-to-end visa guidance — from eligibility review and document checklist to application drafting and submission.",
  },
  {
    q: "How long does the process typically take?",
    a: "Timelines vary by destination and case. Dubai placements typically take 4–8 weeks from consultation to departure. We'll give you a realistic timeline in your first call.",
  },
  {
    q: "Do you have tours for solo travelers?",
    a: "Absolutely. Our tours accommodate solo travelers, couples, families and groups. Every itinerary is tailored to your preferences.",
  },
];

function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simulate send
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

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
            <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">07 — Contact</div>
            <h1 className="mt-6 font-display text-5xl leading-[1.02] md:text-7xl lg:text-8xl">
              Let's start a<br />
              <span className="italic">conversation.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              A short conversation is all it takes. Tell us where you want to go — we'll quietly map the rest.
            </p>
          </motion.div>
        </section>

        {/* Main grid */}
        <section className="border-t border-border">
          <div className="mx-auto grid max-w-7xl gap-0 md:grid-cols-12">

            {/* Left — contact info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.7, 0.2, 1] }}
              className="border-b border-border bg-[oklch(0.97_0.012_75)] p-10 md:col-span-5 md:border-b-0 md:border-r md:p-14"
            >
              <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">Get In Touch</div>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                We're a small team — you'll speak to a real person, not a support ticket. Reach us any way that works for you.
              </p>

              <ul className="mt-10 space-y-7">
                <li className="flex gap-5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center border border-border bg-background">
                    <MapPin className="h-4 w-4 text-accent" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Office</div>
                    <div className="mt-1.5 text-sm leading-relaxed">
                      Dome-CFC Estate, Near Achimota Mall<br />
                      P.O Box MS 446, New Achimota<br />
                      Accra, Ghana
                    </div>
                  </div>
                </li>

                <li className="flex gap-5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center border border-border bg-background">
                    <Phone className="h-4 w-4 text-accent" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Phone & WhatsApp</div>
                    <div className="mt-1.5 space-y-1 text-sm">
                      <a href={`tel:${PRIMARY_PHONE_TEL}`} className="block font-medium text-foreground hover:text-accent transition-colors">{PRIMARY_PHONE_DISPLAY}</a>
                      <a href={`tel:${SECONDARY_PHONE_TEL}`} className="block hover:text-accent transition-colors">{SECONDARY_PHONE_DISPLAY}</a>
                    </div>
                  </div>
                </li>

                <li className="flex gap-5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center border border-border bg-background">
                    <Mail className="h-4 w-4 text-accent" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Email</div>
                    <a href="mailto:ogstartravelandtours@gmail.com" className="mt-1.5 block text-sm hover:text-accent transition-colors">
                      ogstartravelandtours@gmail.com
                    </a>
                  </div>
                </li>

                <li className="flex gap-5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center border border-border bg-background">
                    <Clock className="h-4 w-4 text-accent" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Office Hours</div>
                    <div className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      Monday – Friday · 8:00 AM – 6:00 PM<br />
                      Saturday · 9:00 AM – 3:00 PM
                    </div>
                  </div>
                </li>
              </ul>

              {/* WhatsApp CTA */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 flex items-center gap-3 border border-foreground/20 bg-background px-6 py-4 text-[11px] uppercase tracking-[0.25em] transition-colors hover:bg-foreground hover:text-background"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
              className="p-10 md:col-span-7 md:p-14"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex h-full min-h-[400px] flex-col items-center justify-center text-center"
                >
                  <div className="grid h-16 w-16 place-items-center border border-accent/30 bg-accent/5">
                    <CheckCircle2 className="h-8 w-8 text-accent" strokeWidth={1.2} />
                  </div>
                  <h2 className="mt-8 font-display text-3xl md:text-4xl">Message received.</h2>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    Thank you for reaching out. A member of the OG Star Travel & Tours team will be in touch within one business day.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormState({ name: "", email: "", phone: "", service: "", message: "" }); }}
                    className="mt-8 border border-foreground/20 px-6 py-3 text-[11px] uppercase tracking-[0.25em] transition-colors hover:bg-foreground hover:text-background"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">Send a Message</div>

                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full border border-border bg-background px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full border border-border bg-background px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Phone / WhatsApp</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="+233 ..."
                          className="w-full border border-border bg-background px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-muted-foreground">I'm interested in</label>
                        <select
                          name="service"
                          value={formState.service}
                          onChange={handleChange}
                          className="w-full border border-border bg-background px-4 py-3.5 text-sm text-muted-foreground outline-none transition-colors focus:border-foreground focus:text-foreground"
                        >
                          <option value="">Select a service</option>
                          <option value="work-travel">Work & Travel Abroad</option>
                          <option value="dubai">Dubai Programme</option>
                          <option value="visa">Visa & Documentation</option>
                          <option value="interview">Interview Preparation</option>
                          <option value="relocation">Relocation Support</option>
                          <option value="local-tours">Local Tours</option>
                          <option value="international-tours">International Tours</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Your Message *</label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Tell us about your goals, timeline, or any questions you have..."
                        className="w-full resize-none border border-border bg-background px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-foreground"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="group inline-flex items-center gap-3 bg-foreground px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-background transition-colors hover:bg-accent hover:text-accent-foreground disabled:opacity-60"
                    >
                      {loading ? (
                        <>Sending...</>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-border bg-[oklch(0.97_0.012_75)] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mb-14">
              <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">Quick Answers</div>
              <h2 className="mt-6 font-display text-3xl leading-tight md:text-5xl">
                Frequently asked<br /><span className="italic">questions.</span>
              </h2>
            </div>

            <div className="grid gap-0 border-t border-border md:grid-cols-2">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.07 }}
                  className="border-b border-r border-border p-8 md:p-10"
                >
                  <div className="text-[10px] uppercase tracking-[0.3em] text-accent">0{i + 1}</div>
                  <h3 className="mt-4 font-display text-xl leading-snug md:text-2xl">{faq.q}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
