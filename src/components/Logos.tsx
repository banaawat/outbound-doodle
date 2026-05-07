const LOGOS: { name: string; domain: string }[] = [
  { name: "Flipkart", domain: "flipkart.com" },
  { name: "Inspire Brands", domain: "inspirebrands.com" },
  { name: "BFL Group", domain: "bflgroup.com" },
  { name: "Domino's", domain: "dominos.com" },
  { name: "Alamar Foods", domain: "alamarfoods.com" },
  { name: "Emirates NBD", domain: "emiratesnbd.com" },
  { name: "Alshaya Group", domain: "alshaya.com" },
  { name: "KFC", domain: "kfc.com" },
  { name: "McDonald's", domain: "mcdonalds.com" },
  { name: "Du Telecom", domain: "du.ae" },
  { name: "Bajaj Auto", domain: "bajajauto.com" },
  { name: "ADNOC", domain: "adnoc.ae" },
  { name: "Dunkin' Donuts", domain: "dunkindonuts.com" },
];

export function Logos() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
      {LOGOS.map(({ name, domain }, i) => (
        <div
          key={name}
          className="doodle-card bg-card py-4 px-4 flex items-center justify-center gap-3 hover:-translate-y-1 hover:rotate-0 transition-transform duration-200"
          style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (0.4 + (i % 3) * 0.3)}deg)` }}
          title={name}
        >
          <span className="relative inline-flex h-9 w-9 items-center justify-center shrink-0 rounded-full border-2 border-dashed border-foreground/70 bg-background overflow-hidden">
            <img
              src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="h-6 w-6 object-contain"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </span>
          <span className="font-serif-d text-base sm:text-lg text-foreground/85 leading-tight">
            {name}
          </span>
        </div>
      ))}
    </div>
  );
}
