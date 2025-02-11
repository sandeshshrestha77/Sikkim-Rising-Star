import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center mb-32">
      {/* Overlay Gradient for Contrast */}
      <div className="absolute inset-0 bg-black/30" />
      {/* Content Section */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 sm:space-y-8 float-animation">
          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white">
            Unleash Your Potential
          </h1>
          {/* Subtitle */}
          <p className="text-gray-300 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
            Join Sikkim's biggest talent showcase and shine like never before.
            <br />
            <span className="text-purple-300 font-semibold">Your moment starts here!</span>
          </p>
          {/* Call-to-Action Button */}
          <div className="flex items-center justify-center gap-4 mt-8 sm:mt-10">
            <a
              href="/events"
              className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-full transition-all duration-300 group"
            >
              Get Started Now
              <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}