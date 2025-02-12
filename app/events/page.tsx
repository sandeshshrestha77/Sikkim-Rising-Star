import { CalendarIcon, MapPinIcon, TrophyIcon } from '@heroicons/react/24/outline';
import Card from '../components/ui/Card';
import Link from 'next/link';
import Image from 'next/image';

const currentEvents = [
  {
    title: "Sikkim Rising Star 2024 (Season 4)",
    status: "Registration Open",
    slug: "rising-star-2024",
    date: "March 1 - June 15, 2024",
    description: "The annual talent hunt competition returns with bigger prizes and opportunities",
    highlights: [
      "₹10 Lakhs total prize pool",
      "Professional mentorship program",
      "National media exposure",
      "Industry connections"
    ],
    venue: "Multiple locations across Sikkim",
    image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&q=80&w=1200"
  }
];

const pastEvents = [
  {
    title: "Sikkim Rising Star 2023",
    slug: "rising-star-2023",
    date: "March - June 2023",
    winner: "Tashi Namgyal",
    category: "Singing",
    venue: "Gangtok",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Sikkim Rising Star 2022",
    slug: "rising-star-2022",
    date: "April - July 2022",
    winner: "Dichen Lhamu",
    category: "Dancing",
    venue: "Gangtok",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Sikkim Rising Star 2021",
    slug: "rising-star-2021",
    date: "May - August 2021",
    winner: "Karma Sonam",
    category: "Music",
    venue: "Gangtok",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1200"
  }
];

export default function EventsPage() {
  return (
    <main className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6 font-display tracking-tight">
            Our Events
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to national recognition, discover the journey of Sikkim&apos;s biggest talent hunt competition
          </p>
        </div>
        {/* Current Season - Featured */}
        <div className="mb-24">
          {currentEvents.map((event) => (
            <Link href={`/events/${event.slug}`} key={event.slug}>
              <Card className="group relative overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill // Replaces layout="fill"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Add sizes prop
                    priority // Add priority prop for LCP
                    className="group-hover:scale-105 transition-all duration-700 object-cover" // Use CSS for object-fit
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/90" />
                </div>
                <div className="relative p-12 flex flex-col items-center text-center">
                  <span className="px-6 py-2 bg-purple-500 text-white rounded-full text-lg font-medium mb-8">
                    {event.status}
                  </span>
                  <h2 className="text-5xl font-bold text-white mb-6 font-display">
                    {event.title}
                  </h2>
                  <div className="flex items-center gap-8 text-gray-300 mb-8">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="w-6 h-6 text-purple-400" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="w-6 h-6 text-purple-400" />
                      <span>{event.venue}</span>
                    </div>
                  </div>
                  <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                    {event.description}
                  </p>
                  <div className="grid grid-cols-2 gap-8 mb-12">
                    {event.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                        <span className="text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <button className="button text-lg px-8 py-4">
                    Register Now
                  </button>
                </div>
              </Card>
            </Link>
          ))}
        </div>
        {/* Past Seasons */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-12 font-display">Previous Seasons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <Link href={`/events/${event.slug}`} key={event.slug}>
                <Card className="group overflow-hidden h-[32rem] relative">
                  <div className="absolute inset-0">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill // Replaces layout="fill"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Add sizes prop
                      className="group-hover:scale-105 transition-all duration-700 object-cover" // Use CSS for object-fit
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
                  </div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {event.title}
                    </h3>
                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                      <div className="flex items-center gap-2 text-gray-300">
                        <CalendarIcon className="w-4 h-4 text-purple-400" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <MapPinIcon className="w-4 h-4 text-purple-400" />
                        <span>{event.venue}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrophyIcon className="w-5 h-5 text-purple-400" />
                      <span className="text-white font-medium">{event.winner}</span>
                      <span className="text-purple-400">• {event.category}</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}