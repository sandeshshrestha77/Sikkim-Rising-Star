import { TrophyIcon, CalendarIcon, MapPinIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import Card from '../../components/ui/Card';

const eventDetails = {
  title: "Sikkim Rising Star 2024",
  subtitle: "Season 4",
  date: "March 1 - June 15, 2024",
  venue: "Multiple locations across Sikkim",
  description: "The fourth season of Sikkim Rising Star promises to be the biggest yet, with increased prize money, expanded categories, and unprecedented opportunities for talented performers.",
  statistics: [
    { label: "Expected Participants", value: "500+" },
    { label: "Prize Pool", value: "₹10 Lakhs" },
    { label: "Venues", value: "6 Cities" },
    { label: "Categories", value: "3 Major" }
  ],
  phases: [
    {
      title: "Registration",
      date: "March 1-31",
      details: [
        "Online registration opens",
        "Portfolio submission",
        "Category selection",
        "Initial screening"
      ]
    },
    {
      title: "Auditions",
      date: "April 1-30",
      details: [
        "City-wise auditions",
        "Expert panel evaluation",
        "Mentor assignment",
        "Top 50 selection"
      ]
    },
    {
      title: "Training",
      date: "May 1-15",
      details: [
        "Intensive workshops",
        "One-on-one mentoring",
        "Performance prep",
        "Media training"
      ]
    },
    {
      title: "Live Shows",
      date: "May 20 - June 15",
      details: [
        "Weekly eliminations",
        "Public voting",
        "Guest performances",
        "Grand Finale"
      ]
    }
  ],
  venues: [
    {
      city: "Gangtok",
      venue: "Manan Kendra",
      dates: "Multiple dates",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800"
    },
    {
      city: "Namchi",
      venue: "Community Hall",
      dates: "April 5-6",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800"
    }
  ]
};

export default function RisingStar2024() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&q=80&w=2070"
            alt="Rising Star 2024"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center h-full pb-24">
            <span className="text-purple-400 text-xl mb-4 font-medium">Season 4</span>
            <h1 className="text-7xl font-bold text-white mb-8 font-display max-w-4xl">
              Sikkim Rising Star 2024
            </h1>
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl leading-relaxed">
              {eventDetails.description}
            </p>
            <div className="flex items-center gap-8 text-gray-300 mb-12">
              <div className="flex items-center gap-3">
                <CalendarIcon className="w-6 h-6 text-purple-400" />
                <span className="text-xl">{eventDetails.date}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPinIcon className="w-6 h-6 text-purple-400" />
                <span className="text-xl">{eventDetails.venue}</span>
              </div>
            </div>
            <button className="button text-lg px-8 py-4 w-fit">
              Register Now
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-24">
        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {eventDetails.statistics.map((stat) => (
            <Card key={stat.label} className="p-6 text-center">
              <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Competition Journey */}
        <section>
          <h2 className="text-4xl font-bold text-white mb-12 font-display">Competition Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventDetails.phases.map((phase, index) => (
              <Card key={phase.title} className="p-8 relative group hover:scale-[1.02] transition-all duration-300">
                <div className="absolute -left-4 -top-4 w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center">
                  <span className="text-purple-400 font-bold text-xl">{index + 1}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{phase.title}</h3>
                <div className="text-purple-400 mb-6">{phase.date}</div>

                <ul className="space-y-3">
                  {phase.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Venues */}
        <section>
          <h2 className="text-4xl font-bold text-white mb-12 font-display">Event Venues</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventDetails.venues.map((venue) => (
              <Card key={venue.city} className="overflow-hidden group">
                <div className="relative h-64">
                  <img
                    src={venue.image}
                    alt={venue.city}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{venue.city}</h3>
                    <div className="text-gray-300">{venue.venue}</div>
                    <div className="text-purple-400 mt-2">{venue.dates}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section>
          <Card className="p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Showcase Your Talent?</h2>
            <p className="text-gray-300 text-lg mb-8">Join us for Season 4 and begin your journey to stardom</p>
            <button className="button text-lg px-8 py-4">
              Register Now
            </button>
          </Card>
        </section>
      </div>
    </main>
  );
}