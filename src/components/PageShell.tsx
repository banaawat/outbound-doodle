import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
