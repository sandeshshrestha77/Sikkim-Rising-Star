
interface SectionProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ title, className = "", children }: SectionProps) {
  return (
    <section className={`py-24 ${className}`}>
      <div className="relative mb-20 flex justify-center">
        <h2 className="text-5xl font-bold text-white relative z-10 tracking-tight">
          {title}
          <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-70" />
        </h2>
      </div>
      <div className="animate-fade-in">
        {children}
      </div>
    </section>
  );
}
