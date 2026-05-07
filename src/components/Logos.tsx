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
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {LOGOS.map(({ name, domain }) => (
        <div
          key={name}
          className="doodle-card-soft py-5 px-4 flex items-center justify-center gap-3 bg-card hover:-translate-y-0.5 transition-transform"
          title={name}
        >
          <img
            src={`https://logo.clearbit.com/${domain}`}
            alt={`${name} logo`}
            loading="lazy"
            className="h-7 w-7 object-contain shrink-0"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
          <span className="font-serif-d text-base text-foreground/80 truncate">
            {name}
          </span>
        </div>
      ))}
    </div>
  );
}
