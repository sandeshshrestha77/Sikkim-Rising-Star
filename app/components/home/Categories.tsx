
import { MicrophoneIcon, MusicalNoteIcon } from '@heroicons/react/24/outline';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Section from '../ui/Section';

const categories = [
  {
    title: 'Singing',
    description: 'Showcase your vocal talent across various genres',
    icon: MicrophoneIcon,
    features: ['Solo Performance', 'Duet', 'Group Performance'],
    gradient: 'from-amber-500 via-amber-600 to-amber-700'
  },
  {
    title: 'Dancing',
    description: 'Express yourself through traditional and modern dance forms',
    icon: SparklesIcon,
    features: ['Classical', 'Contemporary', 'Folk Dance'],
    gradient: 'from-amber-400 via-amber-500 to-amber-600'
  },
  {
    title: 'Music',
    description: 'Demonstrate your instrumental prowess',
    icon: MusicalNoteIcon,
    features: ['Solo Instrumental', 'Band Performance', 'Fusion'],
    gradient: 'from-amber-600 via-amber-700 to-amber-800'
  }
];

export default function Categories() {
  return (
    <Section title="Competition Categories" className="mb-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <div key={category.title} 
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
              
              <div className="relative p-8 bg-gradient-to-br from-black/80 to-amber-950/80 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-500 h-full transform group-hover:scale-[1.02]">
                <div className="flex items-start justify-between mb-6">
                  <Icon className="w-12 h-12 text-amber-400 group-hover:scale-110 transition-transform duration-500" />
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors duration-500" />
                </div>
                
                <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400 mb-3">
                  {category.title}
                </h4>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {category.description}
                </p>
                
                <ul className="space-y-3">
                  {category.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-gray-400 group-hover:text-gray-300 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
