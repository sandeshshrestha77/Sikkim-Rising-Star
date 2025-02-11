import { TrophyIcon, SparklesIcon, StarIcon } from '@heroicons/react/24/outline';
import Section from '../ui/Section';
import Card from '../ui/Card';

const prizes = [
  {
    title: "First Prize",
    amount: "₹5,00,000",
    benefits: [
      "Professional recording contract",
      "1-year mentorship program",
      "National media exposure",
      "Performance opportunities"
    ],
    icon: TrophyIcon
  },
  {
    title: "Second Prize",
    amount: "₹3,00,000",
    benefits: [
      "Studio recording session",
      "6-month mentorship program",
      "Media features",
      "Industry connections"
    ],
    icon: SparklesIcon
  },
  {
    title: "Third Prize",
    amount: "₹2,00,000",
    benefits: [
      "Portfolio photoshoot",
      "3-month training program",
      "Local media coverage",
      "Performance platform"
    ],
    icon: StarIcon
  }
];

export default function Prizes() {
  return (
    <Section title="Prizes & Rewards" className="mb-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {prizes.map((prize) => {
          const Icon = prize.icon;
          return (
            <Card key={prize.title} className="text-center">
              <div className="mb-6">
                <Icon className="w-12 h-12 text-purple-400 mx-auto group-hover:scale-110 transition-transform" />
              </div>
              
              <h3 className="text-2xl font-display font-bold text-white mb-2">{prize.title}</h3>
              <div className="text-3xl font-bold gradient-text mb-6">{prize.amount}</div>
              
              <ul className="space-y-3 text-left">
                {prize.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}