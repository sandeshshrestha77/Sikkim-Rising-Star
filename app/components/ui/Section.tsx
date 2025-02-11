
interface SectionProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ title, className = "", children }: SectionProps) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="relative mb-16 flex justify-center">
        <h2 className="text-4xl font-bold text-white relative z-10">
          {title}
          <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        </h2>
      </div>
      {children}
    </section>
  );
}
