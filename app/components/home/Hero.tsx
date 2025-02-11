import { ArrowRightIcon, SparklesIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center mb-32">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-purple-900/20 animate-gradient" />
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-20" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="space-y-8 float-animation">
          <h1 className="text-8xl font-bold tracking-tight bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
            Sikkim Rising Star
          </h1>

          <p className="text-gray-300 text-2xl max-w-2xl mx-auto leading-relaxed">
            Discover and nurture extraordinary talents of Sikkim.
            <br />
            <span className="text-purple-300 font-semibold">Since 2018</span>
          </p>

          <div className="flex items-center justify-center gap-6 mt-12">
            <a href="/register" className="button text-lg group px-12 py-4">
              Register Now
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
