import { TrophyIcon, UserGroupIcon, PhotoIcon, NewspaperIcon } from '@heroicons/react/24/outline';
import Card from '../../components/ui/Card';

const eventDetails = {
  title: "Sikkim Rising Star 2024 (Season 4)",
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
      title: "Registration Phase",
      date: "March 1-31, 2024",
      details: [
        "Online and offline registration",
        "Portfolio submission",
        "Category selection",
        "Initial screening"
      ]
    },
    {
      title: "Audition Rounds",
      date: "April 1-30, 2024",
      details: [
        "City-wise auditions",
        "Expert panel evaluation",
        "Mentorship assignment",
        "Top 50 selection"
      ]
    },
    {
      title: "Training Camp",
      date: "May 1-15, 2024",
      details: [
        "Intensive workshops",
        "One-on-one mentoring",
        "Performance preparation",
        "Media training"
      ]
    },
    {
      title: "Live Shows",
      date: "May 20 - June 15, 2024",
      details: [
        "Weekly eliminations",
        "Public voting",
        "Guest performances",
        "Grand Finale"
      ]
    }
  ],
  highlights: [
    "Increased prize money of ₹10 Lakhs",
    "International mentors and judges",
    "Live streaming on major platforms",
    "Career development program",
    "National media coverage",
    "Industry networking events"
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
      dates: "April 5-6, 2024",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800"
    }
  ],
  judges: [
    {
      name: "Pema Wangchuk",
      role: "Music Director",
      bio: "Award-winning composer with 20+ years of industry experience",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=256&h=256"
    },
    {
      name: "Karma Denzong",
      role: "Choreographer",
      bio: "International dance performer and acclaimed choreographer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=256&h=256"
    }
  ]
};

export default function RisingStar2024() {
  return (
    <main className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-16">
          <img
            src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&q=80&w=2070"
            alt="Rising Star 2024"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h1 className="text-5xl font-bold text-white mb-4 font-display tracking-tight">{eventDetails.title}</h1>
            <div className="flex items-center gap-4 text-gray-300">
              <span>{eventDetails.date}</span>
              <span>•</span>
              <span>{eventDetails.venue}</span>
            </div>
          </div>
        </div>

        <div className="space-y-16">
          {/* Overview */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 font-display relative inline-block">
              <span>Event Overview</span>
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-purple-500/50" />
            </h2>
            
            <Card className="p-8">
              <p className="text-gray-300 leading-relaxed mb-8">{eventDetails.description}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {eventDetails.statistics.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* Competition Phases */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 font-display relative inline-block">
              <span>Competition Phases</span>
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-purple-500/50" />
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {eventDetails.phases.map((phase, index) => (
                <Card key={phase.title} className="p-6 relative">
                  <div className="absolute -left-4 -top-4 w-8 h-8 bg-purple-500/10 rounded-full flex items-center justify-center">
                    <span className="text-purple-400 font-bold">{index + 1}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                  <div className="text-purple-400 text-sm mb-4">{phase.date}</div>
                  
                  <ul className="space-y-2">
                    {phase.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </section>

          {/* Event Highlights */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 font-display relative inline-block">
              <span>Event Highlights</span>
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-purple-500/50" />
            </h2>
            
            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {eventDetails.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span className="text-gray-300">{highlight}</span>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* Venues */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 font-display relative inline-block">
              <span>Event Venues</span>
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-purple-500/50" />
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {eventDetails.venues.map((venue) => (
                <Card key={venue.city} className="overflow-hidden group">
                  <div className="relative h-48">
                    <img
                      src={venue.image}
                      alt={venue.city}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-bold text-white mb-1">{venue.city}</h3>
                      <div className="text-gray-300 text-sm">{venue.venue}</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-purple-400">{venue.dates}</div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Judges */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 font-display relative inline-block">
              <span>Meet the Judges</span>
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-purple-500/50" />
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {eventDetails.judges.map((judge) => (
                <Card key={judge.name} className="p-6">
                  <div className="flex items-start gap-6">
                    <img
                      src={judge.image}
                      alt={judge.name}
                      className="w-24 h-24 rounded-full object-cover border-2 border-purple-500/20"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{judge.name}</h3>
                      <div className="text-purple-400 font-medium mb-2">{judge.role}</div>
                      <p className="text-gray-300 text-sm">{judge.bio}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section>
            <Card className="p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Showcase Your Talent?</h2>
              <p className="text-gray-300 mb-6">Join us for Season 4 and begin your journey to stardom</p>
              <a href="/register" className="button inline-flex items-center justify-center">
                Register Now
                <TrophyIcon className="w-5 h-5 ml-2" />
              </a>
            </Card>
          </section>
        </div>
      </div>
    </main>
  );
}