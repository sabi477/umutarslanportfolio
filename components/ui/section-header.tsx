interface SectionHeaderProps {
  subtitle: string;
  title: string;
  className?: string;
}

export function SectionHeader({
  subtitle,
  title,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`text-center ${className}`}
    >
      <p className="text-sm text-muted-foreground">{subtitle}</p>
      <h2 className="mt-2 text-2xl font-semibold text-foreground md:text-3xl">
        {title}
      </h2>
    </div>
  );
}
