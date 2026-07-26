interface MetaItem {
  label: string;
  value: string;
}

interface ProjectHeaderProps {
  title: string;
  description: string;
  meta: MetaItem[];
  hasNDA?: boolean;
}

export function ProjectHeader({
  title,
  description,
  meta,
  hasNDA,
}: ProjectHeaderProps) {
  return (
    <div className="proj-hero">
      <h1>
        {title}
        {hasNDA && <span className="lock-badge">🔒 NDA</span>}
      </h1>
      <p className="desc">{description}</p>
      <div className="meta-grid">
        {meta.map((item) => (
          <div className="meta-item" key={item.label}>
            <label>{item.label}</label>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
