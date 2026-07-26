export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-wrap">
      <div className="marquee">
        {doubled.map((item, i) => (
          <div className="m-item" key={i}>
            <span>{item}</span>
            <div className="dot" />
          </div>
        ))}
      </div>
    </div>
  );
}
