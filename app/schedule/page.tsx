import { CalendarIcon, MapPinIcon, UserGroupIcon, TrophyIcon } from '@heroicons/react/24/outline';
import Card from '../components/ui/Card';

const timeline = [
  {
    phase: "Registration",
    date: "March 1 - April 1, 2024",
    description: "Begin your journey to stardom by registering for your chosen category",
    icon: UserGroupIcon,
    details: [
      "Online registration through our portal",
      "Document verification",
      "Category selection",
      "Portfolio submission"
    ],
    location: "Online"
  },
  {
    phase: "Auditions",
    date: "April 15 - May 15, 2024",
    description: "First round of selections across categories",
    icon: MapPinIcon,
    details: [
      "Physical auditions in major cities",
      "Video submission option available",
      "Professional jury evaluation",
      "Immediate feedback"
    ],
    location: "Multiple venues across Sikkim"
  },
  {
    phase: "Semi Finals",
    date: "May 30 - June 5, 2024",
    description: "Top performers compete in live shows",
    icon: CalendarIcon,
    details: [
      "Live performances",
      "Mentorship sessions",
      "Public voting opens",
      "Media coverage"
    ],
    location: "Gangtok Convention Center"
  },
  {
    phase: "Grand Finale",
    date: "June 15, 2024",
    description: "The ultimate showcase of talent",
    icon: TrophyIcon,
    details: [
      "Live television broadcast",
      "Celebrity guest performances",
      "Winner announcements",
      "Prize distribution"
    ],
    location: "Paljor Stadium, Gangtok"
  }
];

export default function SchedulePage() {
  return (
    <main className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4 font-display tracking-tight">Event Schedule</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Mark your calendar for the most anticipated talent hunt of the year
          </p>
        </div>

        <div className="space-y-8">
          {timeline.map((event, index) => {
            const Icon = event.icon;
            return (
              <Card key={event.phase} className="p-8 relative group">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-64 shrink-0">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-purple-500/10 rounded-xl">
                        <Icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <h2 className="text-2xl font-bold text-white font-display">{event.phase}</h2>
                    </div>
                    <div className="text-purple-400 font-medium">{event.date}</div>
                    <div className="text-gray-400 text-sm mt-2">{event.location}</div>
                  </div>

                  <div className="flex-1">
                    <p className="text-gray-300 text-lg mb-6">{event.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {event.details.map((detail) => (
                        <div key={detail} className="flex items-center gap-3 text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {index < timeline.length - 1 && (
                  <div className="absolute left-12 top-full h-8 w-px bg-purple-500/20 md:left-32" />
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </main>
  );
}