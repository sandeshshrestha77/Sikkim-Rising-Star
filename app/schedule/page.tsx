import { CalendarDaysIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

const schedule = [
  {
    phase: "Registration",
    date: "January 1 - February 15, 2024",
    events: [
      "Online registration opens",
      "Document submission",
      "Category selection",
      "Portfolio upload"
    ]
  },
  {
    phase: "Auditions",
    date: "March 1 - March 30, 2024",
    events: [
      "District level auditions",
      "Technical assessment",
      "Judge feedback",
      "Results announcement"
    ]
  },
  {
    phase: "Training",
    date: "April 15 - May 15, 2024",
    events: [
      "Mentorship program",
      "Workshop sessions",
      "Performance preparation",
      "Stage practice"
    ]
  }
];

export default function SchedulePage() {
  return (
    <main className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative mb-24">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
          <div className="relative text-center py-16 px-4">
            <h1 className="text-6xl font-bold text-white mb-6 font-display">Event Schedule</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Mark your calendar for Sikkim Rising Star 2024 events.
            </p>
          </div>
        </div>

        <Section className="mb-24">
          <div className="space-y-8">
            {schedule.map((phase) => (
              <Card key={phase.phase} className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <h3 className="text-2xl font-bold text-white mb-2">{phase.phase}</h3>
                    <p className="text-purple-400">{phase.date}</p>
                  </div>
                  <div className="md:w-2/3">
                    <ul className="space-y-4">
                      {phase.events.map((event) => (
                        <li key={event} className="flex items-center gap-3">
                          <CalendarDaysIcon className="w-5 h-5 text-purple-400 shrink-0" />
                          <span className="text-gray-300">{event}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}