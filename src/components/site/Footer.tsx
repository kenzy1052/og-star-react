import { Link } from "@tanstack/react-router";
import { Plane, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[oklch(0.97_0.012_75)]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center border border-foreground/20 bg-background">
                <Plane className="h-4 w-4" strokeWidth={1.5} />
              </div>
              <div className="leading-tight">
                <div className="font-display text-lg">OG Star Travel & Tour</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Relish the Experience</div>
              </div>
            </div>
            <p className="mt-7 max-w-md text-sm leading-relaxed text-muted-foreground">
              A premium international mobility brand based in Accra. Helping ambitious people travel, work and build futures abroad — with care, clarity and concierge-grade support.
            </p>
            <div className="mt-6 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              Travel · Work Abroad · Tours · Visa Support
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Explore</div>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { l: "Home", to: "/" },
                { l: "Work & Travel Abroad", to: "/work-travel" },
                { l: "Tours", to: "/tours" },
                { l: "Local Tours", to: "/local-tours" },
                { l: "International Tours", to: "/international" },
                { l: "Gallery", to: "/gallery" },
                { l: "Services", to: "/services" },
                { l: "About", to: "/about" },
                { l: "Contact", to: "/contact" },
              ].map((x) => (
                <li key={x.l}>
                  <Link to={x.to} className="hover:text-accent transition-colors">{x.l}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Reach Us</div>
            <ul className="mt-5 space-y-4 text-sm text-foreground/85">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
                <span>Dome-CFC Estate, Near Achimota Mall<br />P.O Box MS 446, New Achimota, Accra · Ghana</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" strokeWidth={1.5} />
                <a href="mailto:ogstartravelandtours@gmail.com" className="hover:text-accent transition-colors">ogstartravelandtours@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" strokeWidth={1.5} />
                <div>
                  <a href="tel:+233206521474" className="hover:text-accent transition-colors block">+233 (0) 206 521 474</a>
                  <a href="tel:+233242613372" className="hover:text-accent transition-colors block">+233 (0) 242 613 372</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-[11px] uppercase tracking-[0.25em] text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} OG Star Travel & Tour</div>
          <div>Made by Kenzyverse</div>
        </div>
      </div>
    </footer>
  );
}
