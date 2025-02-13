interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`relative group p-8 rounded-2xl bg-gradient-to-br from-amber-900/50 via-amber-800/30 to-amber-900/50 
      border border-amber-500/20 hover:border-amber-500/40 transition-all duration-500 
      backdrop-blur-sm hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-500/10 ${className}`}>
      <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}