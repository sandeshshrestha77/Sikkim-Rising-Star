
import { MicrophoneIcon, MusicalNoteIcon } from '@heroicons/react/24/outline';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Section from '../ui/Section';

const categories = [
  {
    title: 'Singing',
    description: 'Showcase your vocal talent across various genres',
    icon: MicrophoneIcon,
    features: ['Solo Performance', 'Duet', 'Group Performance']
  },
  {
    title: 'Dancing',
    description: 'Express yourself through traditional and modern dance forms',
    icon: SparklesIcon,
    features: ['Classical', 'Contemporary', 'Folk Dance']
  },
  {
    title: 'Music',
    description: 'Demonstrate your instrumental prowess',
    icon: MusicalNoteIcon,
    features: ['Solo Instrumental', 'Band Performance', 'Fusion']
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
              className="relative group p-8 rounded-2xl bg-gradient-to-br from-amber-900/50 via-amber-800/30 to-amber-900/50 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 backdrop-blur-sm hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <Icon className="w-12 h-12 text-amber-400 mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-bold text-white mb-3">{category.title}</h4>
              <p className="text-gray-300 leading-relaxed mb-6">{category.description}</p>
              <ul className="space-y-2">
                {category.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
