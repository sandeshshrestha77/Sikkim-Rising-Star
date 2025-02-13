import { CalendarIcon, MapPinIcon, TrophyIcon } from '@heroicons/react/24/outline';
import Card from '../components/ui/Card';
import Link from 'next/link';
import Image from 'next/image';

const currentEvents = [
  {
    title: "Sikkim Rising Star 2024",
    subtitle: "Season 4",
    status: "Registration Open",
    slug: "rising-star-2024",
    date: "March 1 - June 15, 2024",
    description: "The annual talent hunt competition returns with bigger prizes and opportunities",
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
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh]">
        <div className="absolute inset-0">
          <Image
            src={currentEvents[0].image}
            alt={currentEvents[0].title}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center h-full">
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="px-4 py-1.5 bg-amber-500 text-white text-sm font-medium rounded-full">
                {currentEvents[0].status}
              </span>
              <span className="text-amber-400 font-medium">{currentEvents[0].subtitle}</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 font-display max-w-4xl">
              {currentEvents[0].title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-300 mb-8">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-amber-400" />
                <span>{currentEvents[0].date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-5 h-5 text-amber-400" />
                <span>{currentEvents[0].venue}</span>
              </div>
            </div>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl">
              {currentEvents[0].description}
            </p>
            <Link 
              href={`/events/${currentEvents[0].slug}`}
              className="inline-block px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-full text-lg font-medium transition-all duration-300 w-fit"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Past Events */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-4xl font-bold text-white mb-12 font-display">Previous Seasons</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pastEvents.map((event) => (
            <Link href={`/events/${event.slug}`} key={event.slug}>
              <Card className="group h-[32rem] relative overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                    {event.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-300">
                      <CalendarIcon className="w-4 h-4 text-amber-400" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <MapPinIcon className="w-4 h-4 text-amber-400" />
                      <span>{event.venue}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <TrophyIcon className="w-5 h-5 text-amber-400" />
                    <span className="text-white font-medium">{event.winner}</span>
                    <span className="text-amber-400">• {event.category}</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}