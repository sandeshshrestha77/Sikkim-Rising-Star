import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <div className="text-center mb-32 relative">
      <div className="float-animation space-y-8">
        
        <h1 className="text-7xl font-bold mb-8 relative inline-block tracking-tight">
          <span className="relative z-10">Sikkim Rising Star</span>
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-purple-500/50" />
        </h1>
        
        <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Discover, nurture and celebrate the extraordinary talents of Sikkim.
          <br />
          <span className="gradient-text font-semibold">Established in 2018</span>
        </p>
        
        <div className="mt-12">
          <a 
            href="/register" 
            className="button text-lg group"
          >
            Register for Season 4 
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}