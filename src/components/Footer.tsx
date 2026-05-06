import logo from "@/assets/logo-banaawat.png";

export function Footer() {
  return (
    <footer className="border-t-2 border-dashed border-foreground/80 mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <img src={logo} alt="Banaawat" className="h-9 w-auto" />
        <p className="font-display text-xl text-foreground/80">
          Booking meetings. Building pipeline.
        </p>
        <div className="flex items-center gap-3">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn-doodle py-2 px-3" aria-label="LinkedIn">
            in
          </a>
          <a href="mailto:vansh@example.com" className="btn-doodle py-2 px-3" aria-label="Email">
            ✉
          </a>
        </div>
      </div>
      <div className="text-center pb-6 text-xs text-muted-foreground">
        © 2025 Vansh · Built for outbound, not for fun
      </div>
    </footer>
  );
}
