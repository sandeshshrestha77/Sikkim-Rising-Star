export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-500/30 rounded-full blur-[128px]" />
        <div className="absolute top-1/3 left-1/2 w-1/2 h-1/2 bg-purple-700/20 rounded-full blur-[128px]" />
        <div className="absolute -top-1/4 left-1/3 w-1/2 h-1/2 bg-purple-900/20 rounded-full blur-[128px]" />
      </div>
    </div>
  );
}