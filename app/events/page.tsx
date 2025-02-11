import { CalendarIcon, MapPinIcon, UserGroupIcon, TrophyIcon } from '@heroicons/react/24/outline';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Link from 'next/link';

const events = [
  {
    year: "2024",
    title: "Rising Star 2024",
    status: "Upcoming",
    description: "The biggest talent hunt yet with international mentors",
    link: "/events/rising-star-2024"
  },
  {
    year: "2023",
    title: "Rising Star 2023",
    status: "Completed",
    description: "Record-breaking participation across Sikkim",
    link: "/events/rising-star-2023"
  },
  {
    year: "2022",
    title: "Rising Star 2022",
    status: "Completed",
    description: "First digital-hybrid competition format",
    link: "/events/rising-star-2022"
  }
];

export default function EventsPage() {
  return (
    <main className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative mb-24">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
          <div className="relative text-center py-16 px-4">
            <h1 className="text-6xl font-bold text-white mb-6 font-display">Our Events</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our journey of discovering and nurturing talents across the years.
            </p>
          </div>
        </div>

        <Section className="mb-24">
          <div className="space-y-8">
            {events.map((event) => (
              <Link href={event.link} key={event.year}>
                <Card className="p-8 hover:scale-[1.02] transition-transform">
                  <div className="flex items-start gap-6">
                    <div className="w-24 shrink-0">
                      <div className="text-2xl font-bold text-purple-400">{event.year}</div>
                      <div className="text-sm text-gray-400 mt-1">{event.status}</div>
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