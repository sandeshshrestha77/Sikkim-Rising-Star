
import { ArrowRightIcon, SparklesIcon, StarIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="mb-24 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
      <div className="card p-12 relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex justify-center mb-6">
            <SparklesIcon className="w-12 h-12 text-purple-400 animate-pulse" />
          </div>
          
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Your Journey to Stardom Begins Here
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join Sikkim Rising Star 2024 and showcase your talent to thousands. 
            Early registrations get exclusive mentorship opportunities!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/register" 
              className="button text-lg px-8 py-4 group hover:scale-105 hover:shadow-purple-500/25"
            >
              Register Now
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/events/rising-star-2024" 
              className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
            >
              Learn More
              <StarIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
