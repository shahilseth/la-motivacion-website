const items = [
  "5 AM — 9 PM Open Daily",
  "Pro Ultimate Equipment",
  "Certified Trainers",
  "Luxury Spa Available",
  "Women's Exclusive Hours",
  "Supplement Shop",
];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="ticker">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i}>
            <span className="dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
