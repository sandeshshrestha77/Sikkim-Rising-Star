
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Section from '../ui/Section';

const socialLinks = [
  { name: 'Instagram', url: '#' },
  { name: 'Facebook', url: '#' },
  { name: 'YouTube', url: '#' },
  { name: 'Twitter', url: '#' }
];

export default function Contact() {
  return (
    <Section title="Contact & Social Media" className="mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-r from-purple-900/50 via-purple-800/50 to-purple-900/50 rounded-xl p-8 shadow-lg backdrop-blur-sm group hover:scale-[1.02] transition-all duration-300 hover:shadow-purple-500/20">
          <h3 className="text-2xl font-display font-bold text-white mb-8">Get in Touch</h3>
          
          <div className="space-y-5">
            <a 
              href="mailto:contact@sikkimrisingstar.com" 
              className="flex items-center gap-4 p-4 bg-purple-900/30 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group/item"
            >
              <EnvelopeIcon className="w-6 h-6 text-purple-400 group-hover/item:text-purple-300 transition-colors" />
              <span className="text-gray-200 group-hover/item:text-white transition-colors">contact@sikkimrisingstar.com</span>
            </a>
            
            <a 
              href="tel:+919876543210" 
              className="flex items-center gap-4 p-4 bg-purple-900/30 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group/item"
            >
              <PhoneIcon className="w-6 h-6 text-purple-400 group-hover/item:text-purple-300 transition-colors" />
              <span className="text-gray-200 group-hover/item:text-white transition-colors">+91 98765 43210</span>
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-900/50 via-purple-800/50 to-purple-900/50 rounded-xl p-8 shadow-lg backdrop-blur-sm group hover:scale-[1.02] transition-all duration-300 hover:shadow-purple-500/20">
          <h3 className="text-2xl font-display font-bold text-white mb-8">Follow Us</h3>
          
          <div className="grid grid-cols-2 gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="p-4 bg-purple-900/30 rounded-lg border border-purple-500/20 hover:border-purple-500/40 text-center transition-all duration-300 hover:bg-purple-800/30 group/item"
              >
                <span className="text-gray-200 group-hover/item:text-white transition-colors font-medium">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
