import { CheckIcon, StarIcon, UsersIcon, TrophyIcon, SparklesIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

const stats = [
  { label: "Participants", value: "1000+", icon: UsersIcon },
  { label: "Success Stories", value: "30+", icon: StarIcon },
  { label: "Years", value: "5+", icon: TrophyIcon },
  { label: "Annual Viewers", value: "100K+", icon: SparklesIcon }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative mb-24">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
          <div className="relative text-center py-16 px-4">
            <h1 className="text-6xl font-bold text-white mb-6 font-display">Discover Your Spotlight</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
  Join Sikkim&apos;s most prestigious talent hunt competition and become part of our growing legacy of stars.
</p>
          </div>
        </div>

        {/* Stats Section */}
        <Section className="mb-24" title={''}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.label} className="p-6 text-center group hover:scale-105 transition-all duration-300">
                  <Icon className="w-8 h-8 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </Card>
              );
            })}
          </div>
        </Section>

        {/* Mission & Values */}
        <Section title="Our Mission & Values" className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white mb-6">Mission</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                To discover, nurture, and promote exceptional talents from Sikkim, providing them with a professional platform to showcase their abilities and launch their careers in the performing arts.
              </p>
              <ul className="space-y-4">
                {[
                  "Discover hidden talents across Sikkim",
                  "Provide professional mentorship",
                  "Create performance opportunities",
                  "Build industry connections"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-purple-400 shrink-0 mt-1" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white mb-6">Values</h3>
              <div className="space-y-6">
                {[
                  { title: "Excellence", desc: "Setting high standards in talent discovery and development" },
                  { title: "Integrity", desc: "Maintaining transparency and fairness in competition" },
                  { title: "Innovation", desc: "Embracing new ideas and approaches in talent promotion" },
                  { title: "Community", desc: "Building a supportive network of artists and mentors" }
                ].map((value) => (
                  <div key={value.title} className="border-l-2 border-purple-500 pl-4">
                    <h4 className="text-lg font-bold text-white mb-1">{value.title}</h4>
                    <p className="text-gray-300">{value.desc}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Section>

        {/* Journey Timeline */}
        <Section title="Our Journey" className="mb-24">
          <div className="space-y-8">
            {[
              { year: "2018", title: "The Beginning", desc: "Launched with 100 participants from East Sikkim" },
              { year: "2020", title: "Digital Transformation", desc: "Expanded reach through virtual auditions" },
              { year: "2022", title: "National Recognition", desc: "Partnership with leading media houses" },
              { year: "2024", title: "Global Expansion", desc: "International mentors and opportunities" }
            ].map((milestone) => (
              <Card key={milestone.year} className="p-6 hover:scale-[1.02] transition-transform">
                <div className="flex items-start gap-6">
                  <div className="w-24 shrink-0">
                    <div className="text-2xl font-bold text-purple-400">{milestone.year}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                    <p className="text-gray-300">{milestone.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Contact Section */}
        <Section title="Get in Touch" className="mb-24">
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-4 text-gray-300">
              <p>Have questions about the competition or want to become a sponsor?</p>
              <p>Email: contact@sikkimrisingstar.com</p>
              <p>Phone: +91 XXXXX XXXXX</p>
              <p>Location: Gangtok, Sikkim</p>
            </div>
            
          </Card>
        </Section>
      </div>
    </main>
  );
}
