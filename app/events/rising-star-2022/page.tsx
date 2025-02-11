import { TrophyIcon, UserGroupIcon, PhotoIcon, NewspaperIcon } from '@heroicons/react/24/outline';
import Card from '../../components/ui/Card';
import Image from 'next/image';

const eventDetails = {
  title: "Sikkim Rising Star 2022",
  date: "April - July 2022",
  venue: "Manan Kendra, Gangtok",
  description: "The second edition of Sikkim Rising Star expanded its reach to all districts, introducing innovative elements like live streaming and international jury members.",
  statistics: [
    { label: "Participants", value: "250+" },
    { label: "Live Audience", value: "3000+" },
    { label: "Online Views", value: "75K+" },
    { label: "Total Prize Pool", value: "₹7 Lakhs" }
  ],
  winners: [
    {
      position: "Winner",
      name: "Dichen Lhamu",
      category: "Dancing",
      prize: "₹4,00,000",
      achievement: "Performing with national dance company",
      image: "https://images.unsplash.com/photo-1564460576398-ef55d99548b2?auto=format&fit=crop&q=80&w=256&h=256"
    },
    {
      position: "1st Runner Up",
      name: "Karma Tshering",
      category: "Music",
      prize: "₹2,00,000",
      achievement: "Started music academy",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=256&h=256"
    },
    {
      position: "2nd Runner Up",
      name: "Sonam Doma",
      category: "Singing",
      prize: "₹1,00,000",
      achievement: "Local radio show host",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=256&h=256"
    }
  ],
  highlights: [
    "First-ever live streaming of the competition",
    "International jury panel",
    "District-level auditions",
    "Collaboration with national media"
  ],
  gallery: [
    {
      url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800",
      caption: "Grand Finale Night"
    },
    {
      url: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&q=80&w=800",
      caption: "District Auditions"
    },
    {
      url: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=800",
      caption: "Mentorship Program"
    },
    {
      url: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800",
      caption: "Winners Celebration"
    }
  ],
  mediaHighlights: [
    {
      title: "Rising Star Goes Digital",
      source: "Sikkim Express",
      date: "July 15, 2022",
      link: "#"
    },
    {
      title: "International Judges Join Panel",
      source: "NOW News",
      date: "July 10, 2022",
      link: "#"
    }
  ]
};

export default function RisingStar2022() {
  return (
    <main className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-16">
          <Image
            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=2070"
            alt="Rising Star 2022"
            layout="fill"
            objectFit="cover"
            priority
          />
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

          {/* Winners */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 font-display relative inline-block">
              <span>Winners</span>
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-purple-500/50" />
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {eventDetails.winners.map((winner) => (
                <Card key={winner.name} className="p-6 group">
                  <div className="flex items-start justify-between mb-6">
                    <TrophyIcon className="w-8 h-8 text-purple-400" />
                    <span className="gradient-text font-display font-bold">{winner.position}</span>
                  </div>
                  
                  <div className="mb-6">
                    <Image
                      src={winner.image}
                      alt={winner.name}
                      width={96}
                      height={96}
                      className="rounded-full border-2 border-purple-500/20 object-cover"
                    />
                  </div>
                  
                  <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {winner.name}
                  </h3>
                  <div className="text-purple-400 text-sm font-medium mb-2">{winner.category}</div>
                  <div className="text-lg font-bold gradient-text mb-3">{winner.prize}</div>
                  <p className="text-gray-300 text-sm">{winner.achievement}</p>
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

          {/* Photo Gallery */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 font-display relative inline-block">
              <span>Photo Gallery</span>
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-purple-500/50" />
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {eventDetails.gallery.map((photo) => (
                <Card key={photo.url} className="overflow-hidden group">
                  <div className="relative h-64">
                    <Image
                      src={photo.url}
                      alt={photo.caption}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-4 left-4 text-white">{photo.caption}</div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Media Coverage */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 font-display relative inline-block">
              <span>Media Coverage</span>
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-purple-500/50" />
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {eventDetails.mediaHighlights.map((media) => (
                <Card key={media.title} className="p-6">
                  <div className="flex items-start gap-4">
                    <NewspaperIcon className="w-8 h-8 text-purple-400 shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{media.title}</h3>
                      <div className="text-sm text-gray-300">
                        {media.source} • {media.date}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
