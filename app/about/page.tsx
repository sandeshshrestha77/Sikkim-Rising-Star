import { CheckCircleIcon, TrophyIcon, UserGroupIcon, StarIcon, ScaleIcon, BuildingOfficeIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

const successStories = [
  {
    name: "Tashi Namgyal",
    year: "2022",
    quote: "This competition changed my life. I'm now performing professionally across India.",
    image: "https://images.unsplash.com/photo-1570158268183-d296b2892211?auto=format&fit=crop&q=80&w=256&h=256"
  },
  {
    name: "Dichen Lhamu",
    year: "2021",
    quote: "The mentorship and exposure I received were invaluable to my career growth.",
    image: "https://images.unsplash.com/photo-1564460576398-ef55d99548b2?auto=format&fit=crop&q=80&w=256&h=256"
  }
];

const organizers = [
  {
    name: "Pema Wangdi",
    role: "Founder & Director",
    bio: "20+ years in entertainment industry",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=256&h=256"
  },
  {
    name: "Tashi Doma",
    role: "Creative Director",
    bio: "Former national award winner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=256&h=256"
  }
];

const judgingCriteria = [
  {
    category: "Technical Skills",
    criteria: ["Pitch accuracy", "Rhythm & timing", "Technical proficiency", "Control & precision"]
  },
  {
    category: "Artistic Expression",
    criteria: ["Stage presence", "Emotional connection", "Creativity", "Interpretation"]
  },
  {
    category: "Overall Performance",
    criteria: ["Confidence", "Preparation", "Audience engagement", "Professional conduct"]
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4 font-display tracking-tight">About the Talent Hunt Competition</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Empowering talent, creating opportunities, and building dreams since 2018</p>
        </div>
        
        <div className="space-y-24">
          {/* Mission & Vision */}
          <Section title="Our Mission & Vision">
            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-display">Mission</h3>
                  <p className="text-gray-300 leading-relaxed">
                    To discover, nurture, and promote exceptional talents from Sikkim, providing them with a professional platform to showcase their abilities and launch their careers in the performing arts.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-display">Vision</h3>
                  <p className="text-gray-300 leading-relaxed">
                    To establish Sikkim as a hub of artistic excellence and create opportunities for talented individuals to achieve their dreams in the entertainment industry.
                  </p>
                </div>
              </div>
            </Card>
          </Section>

          {/* Who Can Participate */}
          <Section title="Who Can Participate?">
            <Card className="p-8">
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed mb-6">
                  We welcome passionate performers between the ages of 16-35 who are ready to showcase their talent and take their artistic journey to the next level.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Eligibility Criteria</h3>
                    <ul className="space-y-3">
                      {[
                        "Age between 16-35 years",
                        "Resident of Sikkim",
                        "Any skill level welcome",
                        "Must be available for all competition rounds"
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <CheckCircleIcon className="w-5 h-5 text-purple-400 shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Required Documents</h3>
                    <ul className="space-y-3">
                      {[
                        "Valid ID proof",
                        "Residence certificate",
                        "Recent photographs",
                        "Performance portfolio (if any)"
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <CheckCircleIcon className="w-5 h-5 text-purple-400 shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </Section>

          {/* Why Join */}
          <Section title="Why Join the Competition?">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Career Launch",
                  description: "Get discovered by industry professionals and launch your entertainment career",
                  icon: StarIcon
                },
                {
                  title: "Professional Training",
                  description: "Receive mentorship from experienced artists and industry experts",
                  icon: UserGroupIcon
                },
                {
                  title: "Valuable Prizes",
                  description: "Win cash prizes, recording contracts, and performance opportunities",
                  icon: TrophyIcon
                }
              ].map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <Card key={benefit.title} className="p-6 text-center">
                    <Icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </Card>
                );
              })}
            </div>
          </Section>

          {/* Journey & History */}
          <Section title="Our Journey & History">
            <Card className="p-8">
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Founded in 2018, Sikkim Rising Star has grown from a local talent show to the state's most prestigious talent hunt competition. Our journey has been marked by countless success stories and the launch of numerous successful careers in the performing arts.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { number: "1000+", label: "Participants" },
                    { number: "30+", label: "Success Stories" },
                    { number: "5+", label: "Years of Excellence" },
                    { number: "100K+", label: "Annual Viewers" }
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                      <div className="text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </Section>

          {/* Meet the Organizers */}
          <Section title="Meet the Organizers">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {organizers.map((organizer) => (
                <Card key={organizer.name} className="p-6">
                  <div className="flex items-center gap-6">
                    <img
                      src={organizer.image}
                      alt={organizer.name}
                      className="w-24 h-24 rounded-full object-cover border-2 border-purple-500/20"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{organizer.name}</h3>
                      <div className="text-purple-400 font-medium mb-2">{organizer.role}</div>
                      <p className="text-gray-300 text-sm">{organizer.bio}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Section>

          {/* Judging Criteria */}
          <Section title="Judging Criteria & Process">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {judgingCriteria.map((category) => (
                <Card key={category.category} className="p-6">
                  <ScaleIcon className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">{category.category}</h3>
                  <ul className="space-y-3">
                    {category.criteria.map((criterion) => (
                      <li key={criterion} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                        <span className="text-gray-300">{criterion}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </Section>

          {/* Success Stories */}
          <Section title="Success Stories & Testimonials">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {successStories.map((story) => (
                <Card key={story.name} className="p-6">
                  <div className="flex items-center gap-6">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-purple-500/20"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{story.name}</h3>
                      <div className="text-purple-400 text-sm mb-2">Winner {story.year}</div>
                      <p className="text-gray-300 italic">"{story.quote}"</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Section>

          {/* Partners & Sponsors */}
          <Section title="Partners & Sponsors">
            <Card className="p-8">
              <div className="space-y-8">
                <p className="text-gray-300 leading-relaxed">
                  We are proud to partner with leading organizations and brands who share our vision of nurturing talent and creating opportunities.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-video bg-purple-500/5 rounded-lg flex items-center justify-center">
                      <BuildingOfficeIcon className="w-12 h-12 text-purple-400/50" />
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </Section>

          {/* Get Involved */}
          <Section title="Get Involved / Become a Sponsor">
            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Sponsorship Opportunities</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Join us in supporting young talent and gain exposure to a wide audience. We offer various sponsorship packages tailored to your objectives.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Brand visibility at all events",
                      "Media coverage and promotion",
                      "VIP access to shows",
                      "Networking opportunities"
                    ].map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3">
                        <CheckCircleIcon className="w-5 h-5 text-purple-400 shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Contact Us</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <EnvelopeIcon className="w-5 h-5 text-purple-400" />
                      <a href="mailto:sponsors@sikkimrisingstar.com" className="text-gray-300 hover:text-white transition-colors">
                        sponsors@sikkimrisingstar.com
                      </a>
                    </div>
                    <a
                      href="/contact"
                      className="button w-full justify-center"
                    >
                      Request Sponsorship Package
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </Section>
        </div>
      </div>
    </main>
  );
}