import { CalendarIcon, MapPinIcon, UserGroupIcon, TrophyIcon } from '@heroicons/react/24/outline';
import Card from '../components/ui/Card';
import Link from 'next/link';

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
    title: "Sikkim Rising Star 2023 (Season 3)",
    slug: "rising-star-2023",
    date: "March - June 2023",
    description: "A celebration of talent featuring over 300 participants",
    highlights: [
      "30 finalists selected",
      "Grand finale at Paljor Stadium",
      "Live television broadcast",
      "Celebrity guest performances"
    ],
    winner: "Tashi Namgyal",
    category: "Singing",
    venue: "Gangtok",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Sikkim Rising Star 2022 (Season 2)",
    slug: "rising-star-2022",
    date: "April - July 2022",
    description: "Breaking records with participation from all districts",
    highlights: [
      "25 finalists selected",
      "First-ever live streaming",
      "International guest judges",
      "Collaboration with national media"
    ],
    winner: "Dichen Lhamu",
    category: "Dancing",
    venue: "Gangtok",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Sikkim Rising Star 2021 (Season 1)",
    slug: "rising-star-2021",
    date: "May - August 2021",
    description: "The inaugural season that started it all",
    highlights: [
      "20 finalists selected",
      "Regional auditions",
      "Local media coverage",
      "Launch of mentorship program"
    ],
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
          <h1 className="text-5xl font-bold text-white mb-4 font-display tracking-tight">Events</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover our current and past events that have shaped the entertainment landscape of Sikkim
          </p>
        </div>

        {/* Current/Upcoming Events */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-8 font-display relative inline-block">
            <span>Current Season</span>
            <div className="absolute -bottom-2 left-0 w-12 h-1 bg-purple-500/50" />
          </h2>

          <div className="space-y-8">
            {currentEvents.map((event) => (
              <Link href={`/events/${event.slug}`} key={event.title}>
                <Card className="overflow-hidden group cursor-pointer">
                  <div className="relative h-64 mb-6">
                    <div className="absolute inset-0">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/50" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-purple-500 text-white rounded-full text-sm font-medium">
                        {event.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                          {event.title}
                        </h3>
                        <div className="flex items-center gap-4 text-gray-300">
                          <div className="flex items-center gap-2">
                            <CalendarIcon className="w-5 h-5 text-purple-400" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPinIcon className="w-5 h-5 text-purple-400" />
                            <span>{event.venue}</span>
                          </div>
                        </div>
                      </div>
                      <div className="button">
                        Register Now
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6">{event.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {event.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                          <span className="text-gray-300">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 font-display relative inline-block">
            <span>Previous Seasons</span>
            <div className="absolute -bottom-2 left-0 w-12 h-1 bg-purple-500/50" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <Link href={`/events/${event.slug}`} key={event.title}>
                <Card className="overflow-hidden group cursor-pointer h-full">
                  <div className="relative h-48">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                  </div>

                  <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-4 text-gray-300 text-sm mb-4">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4 text-purple-400" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPinIcon className="w-4 h-4 text-purple-400" />
                        <span>{event.venue}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 flex-grow">{event.description}</p>

                    <div className="border-t border-white/10 pt-4">
                      <div className="flex items-center gap-2 mb-2">
                        <TrophyIcon className="w-5 h-5 text-purple-400" />
                        <span className="text-white font-medium">{event.winner}</span>
                        <span className="text-purple-400">• {event.category}</span>
                      </div>
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