const LOGOS = [
  "Flipkart", "Inspire Brands", "BFL Group", "Domino's", "Alamar Foods",
  "Emirates NBD", "Alshaya Group", "KFC", "McDonald's", "Du Telecom",
  "Bajaj Auto", "ADNOC", "Dunkin' Donuts",
];

export function Logos() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {LOGOS.map((name) => (
        <div
          key={name}
          className="doodle-card-soft py-5 px-3 text-center font-serif-d text-lg text-muted-foreground hover:text-primary transition-colors cursor-default"
        >
          {name}
        </div>
      ))}
    </div>
  );
}
