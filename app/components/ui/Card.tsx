
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`relative group p-8 rounded-2xl bg-gradient-to-br from-purple-900/50 via-purple-800/30 to-purple-900/50 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 backdrop-blur-sm hover:scale-[1.02] ${className}`}>
      <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
      {children}
    </div>
  );
}
