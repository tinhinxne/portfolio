export default function SectionTitle({ number, title, subtitle }) {
  return (
    <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <span className="section-badge">{number}</span>
        <h2 className="text-3xl font-extrabold uppercase tracking-tight">{title}</h2>
      </div>
      {subtitle && (
        <p className="max-w-xs text-right text-[11px] text-ink/40">{subtitle}</p>
      )}
    </div>
  );
}
