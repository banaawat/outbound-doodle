import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo-banaawat.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/proof", label: "Proof" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b-2 border-dashed border-foreground/80">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center" aria-label="Banaawat home">
            <img src={logo} alt="Banaawat — B2B Cold Email Agency" className="h-7 sm:h-10 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="text-sm font-medium text-foreground/80 hover:text-foreground relative"
                activeProps={{ className: "text-foreground squiggle" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link to="/contact" className="hidden md:inline-flex btn-doodle btn-orange font-display text-xl py-2">
            Work With Me ✦
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden btn-doodle py-1.5 px-3"
            aria-label="Open menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {open && (
        <div className="md:hidden fixed inset-0 top-16 bg-background z-50 flex flex-col items-center justify-center gap-6 p-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="font-display text-5xl text-foreground"
              activeProps={{ className: "text-primary squiggle" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="btn-doodle btn-orange font-display text-2xl mt-4">
            Work With Me ✦
          </Link>
        </div>
      )}
    </>
  );
}
