import Section from '../ui/Section';
import Card from '../ui/Card';
import { Trophy } from '../icons';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const winners = [
  {
    year: 2023,
    name: "Tashi Namgyal",
    category: "Singing",
    achievement: "Now a professional playback singer",
    image: "https://images.unsplash.com/photo-1570158268183-d296b2892211?auto=format&fit=crop&q=80&w=256&h=256"
  },
  {
    year: 2022,
    name: "Dichen Lhamu",
    category: "Dancing",
    achievement: "Performing with national dance company",
    image: "https://images.unsplash.com/photo-1564460576398-ef55d99548b2?auto=format&fit=crop&q=80&w=256&h=256"
  },
  {
    year: 2021,
    name: "Karma Sonam",
    category: "Music",
    achievement: "Released debut album",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=256&h=256"
  }
];

export default function PastWinners() {
  return (
    <Section title="Hall of Fame" className="mb-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {winners.map((winner) => (
          <Card key={winner.name} className="p-6 group hover:scale-105 transition-transform">
            <div className="flex items-start justify-between mb-6">
              <Trophy className="w-8 h-8 text-purple-400" />
              <span className="gradient-text font-display font-bold">{winner.year}</span>
            </div>
            
            <div className="mb-6">
              <img 
                src={winner.image} 
                alt={winner.name} 
                className="w-24 h-24 rounded-full border-2 border-purple-500/20 object-cover"
              />
            </div>
            
            <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
              {winner.name}
            </h3>
            <div className="text-purple-400 text-sm font-medium mb-3">{winner.category}</div>
            <p className="text-gray-300 text-sm leading-relaxed">{winner.achievement}</p>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a href="/winners" className="button">
          View All Winners
          <ArrowRightIcon className="w-5 h-5" />
        </a>
      </div>
    </Section>
  );
}