
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Events | Sikkim Rising Star',
  description: 'Discover past and upcoming talent hunt competitions in Sikkim',
};

export default function EventsPage() {
  const events = [
    {
      year: "2024",
      title: "Rising Star 2024",
      status: "Upcoming",
      description: "The biggest talent hunt competition yet, featuring international judges and live streaming.",
      link: "/events/rising-star-2024",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=2070",
      date: "June 30, 2024",
      highlights: ["International Judges", "Live Streaming", "₹10L Prize Pool"]
    },
    {
      year: "2023",
      title: "Rising Star 2023",
      status: "Completed",
      description: "A spectacular showcase of Sikkim's finest talents with nationwide recognition.",
      link: "/events/rising-star-2023",
      image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&q=80&w=2070",
      date: "June 25, 2023",
      highlights: ["500+ Participants", "National Coverage", "Celebrity Performances"]
    },
    {
      year: "2022",
      title: "Rising Star 2022",
      status: "Completed",
      description: "Featured groundbreaking performances and launched several successful careers.",
      link: "/events/rising-star-2022",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=2070",
      date: "June 20, 2022",
      highlights: ["300+ Participants", "Regional Finals", "Media Coverage"]
    },
    {
      year: "2021",
      title: "Rising Star 2021",
      status: "Completed",
      description: "The first-ever digital edition with participants from across the region.",
      link: "/events/rising-star-2021",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=2070",
      date: "June 15, 2021",
      highlights: ["Digital Format", "200+ Participants", "Online Voting"]
    }
  ];

  const upcomingEvents = events.filter(event => event.status === "Upcoming");
  const pastEvents = events.filter(event => event.status === "Completed");

  return (
    <main className="min-h-screen">
      {/* Upcoming Events Section */}
      <Section title="Upcoming Events" className="pt-32 pb-16">
        <div className="grid grid-cols-1 gap-8">
          {upcomingEvents.map((event) => (
            <Link href={event.link} key={event.year}>
              <Card className="group hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-amber-950/80 via-black to-black border-amber-500/30 hover:shadow-xl hover:shadow-amber-500/20 scale-[1.02]">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative w-full md:w-2/5 h-[300px] rounded-lg overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                  <div className="flex-1 p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-3xl font-bold text-white group-hover:text-amber-400 transition-colors">
                        {event.title}
                      </h3>
                      <span className="px-4 py-2 rounded-full text-sm bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold animate-pulse">
                        {event.status}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-6">{event.description}</p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-gray-400">
                        <span className="text-amber-400">📅</span>
                        {event.date}
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {event.highlights.map((highlight, index) => (
                          <span key={index} className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-sm">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* Past Events Section */}
      <Section title="Past Events" className="pb-32">
        <div className="grid grid-cols-1 gap-8">
          {pastEvents.map((event) => (
            <Link href={event.link} key={event.year}>
              <Card className="group hover:border-amber-500/30 transition-colors duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative w-full md:w-2/5 h-[300px] rounded-lg overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                  <div className="flex-1 p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-3xl font-bold text-white group-hover:text-amber-400 transition-colors">
                        {event.title}
                      </h3>
                      <span className="px-3 py-1 rounded-full text-sm bg-gray-500/20 text-gray-300">
                        {event.status}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-6">{event.description}</p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-gray-400">
                        <span className="text-amber-400">📅</span>
                        {event.date}
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {event.highlights.map((highlight, index) => (
                          <span key={index} className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}
