export function SectionHeading({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <h2 id={id} className={`section-title ${className}`}>
      {children}
    </h2>
  );
}
