
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`relative group p-8 rounded-2xl 
      bg-gradient-to-br from-black via-black/90 to-amber-950/20
      border border-amber-500/10 hover:border-amber-500/30
      transition-all duration-500 backdrop-blur-xl
      hover:shadow-2xl hover:shadow-amber-500/10
      before:absolute before:inset-0 
      before:bg-gradient-to-br before:from-amber-500/20 before:via-amber-500/5 before:to-transparent 
      before:opacity-0 before:transition-opacity before:duration-500 
      before:rounded-2xl group-hover:before:opacity-100 ${className}`}>
      <div className="absolute inset-[1px] bg-black/40 rounded-2xl backdrop-blur-xl" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
