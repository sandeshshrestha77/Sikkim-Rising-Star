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
        <div className="card p-8">
          <h3 className="text-2xl font-display font-bold text-white mb-6">Get in Touch</h3>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <EnvelopeIcon className="w-5 h-5 text-purple-400" />
              <a href="mailto:contact@sikkimrisingstar.com" className="text-gray-300 hover:text-white transition-colors">
                contact@sikkimrisingstar.com
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <PhoneIcon className="w-5 h-5 text-purple-400" />
              <a href="tel:+919876543210" className="text-gray-300 hover:text-white transition-colors">
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>

        <div className="card p-8">
          <h3 className="text-2xl font-display font-bold text-white mb-6">Follow Us</h3>
          
          <div className="grid grid-cols-2 gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="card p-4 text-center hover:bg-purple-500/5 transition-colors"
              >
                <span className="text-gray-300 hover:text-white transition-colors">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}