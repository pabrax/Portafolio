export function TechList({ items, label }: { items: readonly string[]; label: string }) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item} className="tech-badge">
          {item}
        </li>
      ))}
    </ul>
  );
}
