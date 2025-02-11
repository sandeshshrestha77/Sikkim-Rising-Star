interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`card hover:border-purple-500/20 transition-colors ${className}`}>
      {children}
    </div>
  );
}