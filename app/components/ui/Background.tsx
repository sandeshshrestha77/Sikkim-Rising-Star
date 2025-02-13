
export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-amber-500/20 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute top-1/3 left-1/2 w-1/2 h-1/2 bg-amber-700/15 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute -top-1/4 left-1/3 w-1/2 h-1/2 bg-amber-900/15 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
}
