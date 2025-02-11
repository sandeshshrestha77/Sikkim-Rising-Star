import { MicrophoneIcon, MusicalNoteIcon } from '@heroicons/react/24/outline';
import { SparklesIcon } from '@heroicons/react/24/solid';

const categories = [
  {
    title: 'Singing',
    description: 'Showcase your vocal talent across various genres',
    icon: MicrophoneIcon
  },
  {
    title: 'Dancing',
    description: 'Express yourself through traditional and modern dance forms',
    icon: SparklesIcon
  },
  {
    title: 'Music',
    description: 'Demonstrate your instrumental prowess',
    icon: MusicalNoteIcon
  }
];

export default function Categories() {
  return (
    <div className="mb-24">
      <h2 className="section-title">Competition Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <div key={category.title} className="card group hover:bg-white/5">
              <Icon className="w-12 h-12 text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-display font-bold text-white mb-3">{category.title}</h4>
              <p className="text-gray-400 leading-relaxed">{category.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}