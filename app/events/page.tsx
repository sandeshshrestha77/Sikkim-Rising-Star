
import { CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Link from 'next/link';

const events = [
  {
    year: "2024",
    title: "Rising Star 2024",
    status: "Upcoming",
    date: "March - June 2024",
    venue: "Paljor Stadium, Gangtok",
    description: "The biggest talent hunt yet with international mentors",
    link: "/events/rising-star-2024"
  },
  {
    year: "2023",
    title: "Rising Star 2023",
    status: "Past",
    date: "March - June 2023",
    venue: "Manan Kendra, Gangtok",
    description: "Record-breaking participation across Sikkim",
    link: "/events/rising-star-2023"
  },
  {
    year: "2022",
    title: "Rising Star 2022",
    status: "Past",
    date: "April - July 2022",
    venue: "Manan Kendra, Gangtok",
    description: "First digital-hybrid competition format",
    link: "/events/rising-star-2022"
  }
];

export default function EventsPage() {
  const upcomingEvents = events.filter(event => event.status === "Upcoming");
  const pastEvents = events.filter(event => event.status === "Past");

  return (
    <main className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mb-24">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
          <div className="relative text-center py-16 px-4">
            <h1 className="text-6xl font-bold text-white mb-6 font-display">Our Events</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our journey of discovering and nurturing talents across the years.
            </p>
          </div>
        </div>

        {upcomingEvents.length > 0 && (
          <Section title="Upcoming Events" className="mb-16">
            <div className="space-y-8">
              {upcomingEvents.map((event) => (
                <Link href={event.link} key={event.year}>
                  <Card className="p-8 hover:scale-[1.02] transition-transform border-2 border-purple-500/30">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-64 shrink-0">
                        <div className="text-3xl font-bold text-purple-400">{event.year}</div>
                        <div className="flex items-center gap-2 mt-2 text-gray-400">
                          <CalendarIcon className="w-4 h-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-gray-400">
                          <MapPinIcon className="w-4 h-4" />
                          <span>{event.venue}</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                        <p className="text-gray-300">{event.description}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </Section>
        )}

        <Section title="Past Events" className="mb-24">
          <div className="space-y-8">
            {pastEvents.map((event) => (
              <Link href={event.link} key={event.year}>
                <Card className="p-8 hover:scale-[1.02] transition-transform">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-64 shrink-0">
                      <div className="text-3xl font-bold text-purple-400">{event.year}</div>
                      <div className="flex items-center gap-2 mt-2 text-gray-400">
                        <CalendarIcon className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-gray-400">
                        <MapPinIcon className="w-4 h-4" />
                        <span>{event.venue}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                      <p className="text-gray-300">{event.description}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}
