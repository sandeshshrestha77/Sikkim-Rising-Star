interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ title, children, className = "" }: SectionProps) {
  return (
    <div className={`mb-16 ${className}`}>
      <h2 className="text-3xl font-bold text-white mb-8 relative">
        <span className="relative z-10">{title}</span>
        <div className="absolute -bottom-2 left-0 w-12 h-1 bg-purple-500/50" />
      </h2>
      {children}
    </div>
  );
}