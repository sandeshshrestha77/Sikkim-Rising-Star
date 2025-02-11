import { ArrowRightIcon, CalendarIcon, DocumentCheckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card p-8 backdrop-blur-md relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-colors" />
          
          <div className="relative">
            <div className="p-3 bg-purple-500/10 rounded-xl w-fit mb-6">
              <CalendarIcon className="w-8 h-8 text-purple-400" />
            </div>
            
            <h3 className="text-2xl font-display font-bold text-white mb-4">Register for 2024</h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              Take the first step towards your dreams. Early registrations get exclusive mentorship opportunities.
            </p>
            
            <Link href="/register" className="button">
              Register Now
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className="card p-8 backdrop-blur-md relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-colors" />
          
          <div className="relative">
            <div className="p-3 bg-purple-500/10 rounded-xl w-fit mb-6">
              <DocumentCheckIcon className="w-8 h-8 text-purple-400" />
            </div>
            
            <h3 className="text-2xl font-display font-bold text-white mb-4">Download Information Pack</h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              Get detailed information about categories, rules, judging criteria, and prizes.
            </p>
            
            <Link href="#download" className="button">
              Download PDF
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}