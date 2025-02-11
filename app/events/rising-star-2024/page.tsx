import { TrophyIcon, CalendarIcon, MapPinIcon, ArrowRightIcon, CheckCircleIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import Card from '../../components/ui/Card';
import Link from 'next/link';
import Image from 'next/image';

const eventDetails = {
  title: "Sikkim Rising Star 2024",
  subtitle: "Season 4",
  status: "Registration Open",
  date: "March 1 - June 15, 2024",
  venue: "Multiple locations across Sikkim",
  description: "The fourth season of Sikkim Rising Star promises to be the biggest yet, with increased prize money, expanded categories, and unprecedented opportunities for talented performers.",
  keyFeatures: [
    "₹10 Lakhs total prize pool",
    "Professional mentorship program",
    "National media coverage",
    "Industry connections & opportunities"
  ],
  categories: [
    {
      name: "Singing",
      description: "Solo and duet performances across all genres",
      prizes: ["Winner: ₹3,00,000", "1st Runner-up: ₹1,50,000"]
    },
    {
      name: "Dancing",
      description: "Classical, contemporary, and folk dance forms",
      prizes: ["Winner: ₹3,00,000", "1st Runner-up: ₹1,50,000"]
    },
    {
      name: "Music",
      description: "Instrumental and band performances",
      prizes: ["Winner: ₹3,00,000", "1st Runner-up: ₹1,50,000"]
    }
  ],
  timeline: [
    {
      phase: "Registration & Screening",
      date: "March 1-31, 2024",
      description: "Online registration and initial portfolio review",
      highlights: [
        "Submit your application",
        "Upload performance video",
        "Profile verification",
        "Category selection"
      ]
    },
    {
      phase: "District Auditions",
      date: "April 1-30, 2024",
      description: "Live auditions across various districts",
      highlights: [
        "Live performance",
        "Judge feedback",
        "Shortlist announcement",
        "Mentor assignment"
      ]
    },
    {
      phase: "Training Camp",
      date: "May 1-15, 2024",
      description: "Intensive training for selected participants",
      highlights: [
        "Professional workshops",
        "One-on-one mentoring",
        "Performance enhancement",
        "Stage presence training"
      ]
    },
    {
      phase: "Live Shows",
      date: "May 20 - June 15, 2024",
      description: "Weekly live performances and eliminations",
      highlights: [
        "Live TV broadcast",
        "Public voting",
        "Expert judging",
        "Grand finale"
      ]
    }
  ],
  venues: [
    {
      city: "Gangtok",
      venue: "Manan Kendra",
      date: "Multiple dates",
      capacity: "2000+ seats"
    },
    {
      city: "Namchi",
      venue: "Community Hall",
      date: "April 5-6, 2024",
      capacity: "1000+ seats"
    }
  ]
};

export default function RisingStar2024() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&q=80"
            alt="Rising Star 2024"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center h-full pb-24">
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="px-4 py-1.5 bg-purple-500 text-white text-sm font-medium rounded-full">
                {eventDetails.status}
              </span>
              <span className="text-purple-400 font-medium">{eventDetails.subtitle}</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 font-display max-w-4xl">
              {eventDetails.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-300 mb-12">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-purple-400" />
                <span>{eventDetails.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-5 h-5 text-purple-400" />
                <span>{eventDetails.venue}</span>
              </div>
            </div>

            <p className="text-xl text-gray-300 mb-12 max-w-3xl leading-relaxed">
              {eventDetails.description}
            </p>

            <Link 
              href="/register" 
              className="button text-lg px-8 py-4 w-fit group hover:scale-105 transition-all duration-300"
            >
              Register Now
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-24">
        {/* Key Features */}
        <section>
          <h2 className="sr-only">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventDetails.keyFeatures.map((feature) => (
              <Card key={feature} className="p-6">
                <div className="flex items-center gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-purple-400 shrink-0" />
                  <span className="text-white font-medium">{feature}</span>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8 font-display">Competition Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventDetails.categories.map((category) => (
              <Card key={category.name} className="p-8 group">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-300 mb-6">{category.description}</p>
                <ul className="space-y-2">
                  {category.prizes.map((prize) => (
                    <li key={prize} className="flex items-center gap-2 text-purple-400">
                      <TrophyIcon className="w-4 h-4" />
                      <span>{prize}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Competition Journey */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8 font-display">Competition Journey</h2>
          <div className="space-y-6">
            {eventDetails.timeline.map((phase, index) => (
              <Card key={phase.phase} className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/10 mb-4">
                      <span className="text-purple-400 font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{phase.phase}</h3>
                    <div className="text-purple-400">{phase.date}</div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <p className="text-gray-300 mb-6">{phase.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {phase.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                          <span className="text-gray-300">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Venues */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8 font-display">Event Venues</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventDetails.venues.map((venue) => (
              <Card key={venue.city} className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{venue.city}</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center gap-3">
                    <MapPinIcon className="w-5 h-5 text-purple-400" />
                    <span>{venue.venue}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CalendarIcon className="w-5 h-5 text-purple-400" />
                    <span>{venue.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <UserGroupIcon className="w-5 h-5 text-purple-400" />
                    <span>{venue.capacity}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section>
          <Card className="p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Begin Your Journey?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join Sikkim Rising Star 2024 and showcase your talent to thousands. Early registrations get exclusive mentorship opportunities!
            </p>
            <Link 
              href="/register" 
              className="button text-lg px-8 py-4 group hover:scale-105 transition-all duration-300"
            >
              Register Now
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Card>
        </section>
      </div>
    </main>
  );
}
