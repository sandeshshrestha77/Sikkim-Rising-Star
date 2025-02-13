import { CalendarDaysIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import Card from '../../components/ui/Card';
import Image from 'next/image';

const eventDetails = {
  title: "Sikkim Rising Star 2024",
  date: "June - August 2024",
  registrationDeadline: "May 31, 2024",
  venue: "Manan Kendra, Gangtok",
  description: "Be part of Sikkim's biggest talent hunt! Showcase your skills on a grand stage with international judges, live streaming, and unprecedented opportunities. Join us for an unforgettable journey of talent, creativity, and stardom.",
};

export default function RisingStar2024() {
  return (
    <main className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative w-full h-[80vh] mb-16 rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=2070"
            alt="Rising Star 2024"
            className="object-cover"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-12">
              <div className="max-w-3xl mx-auto text-center"><h1 className="text-6xl font-bold text-white mb-6 font-display tracking-tight">
  Don&apos;t Miss Out!
</h1>
                <h2 className="text-4xl font-bold text-amber-400 mb-4">{eventDetails.title}</h2>
                <div className="flex flex-wrap justify-center gap-6 text-gray-300 mb-8">
                  <div className="flex items-center gap-2">
                    <CalendarDaysIcon className="w-5 h-5 text-amber-400" />
                    {eventDetails.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="w-5 h-5 text-amber-400" />
                    {eventDetails.venue}
                  </div>
                </div>
                <a
                  href="/register"
                  className="inline-block px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black text-lg font-semibold rounded-full transition-colors"
                >
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Event Overview */}
        <Card className="p-8 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Event Overview</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">{eventDetails.description}</p>
            <div className="flex items-center justify-center gap-2 text-amber-400">
              <ClockIcon className="w-5 h-5" />
              <span>Registration Deadline: {eventDetails.registrationDeadline}</span>
            </div>
          </div>
        </Card>

        {/* CTA Section */}
        <Card className="text-center p-12 bg-gradient-to-br from-amber-500/10 to-amber-600/10">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Begin Your Journey?</h3>
          <p className="text-gray-300 mb-8">Limited spots available. Register now to secure your place!</p>
          <a
            href="/register"
            className="inline-block px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-full transition-colors"
          >
            Start Your Application
          </a>
        </Card>
      </div>
    </main>
  );
}