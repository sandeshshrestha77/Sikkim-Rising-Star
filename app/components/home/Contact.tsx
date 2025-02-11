import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Section from '../ui/Section';

export default function Contact() {
  return (
    <Section title="Contact Us" className="mb-24">
      <div className="bg-gradient-to-r from-purple-900/50 via-purple-800/50 to-purple-900/50 rounded-xl p-8 shadow-lg backdrop-blur-sm hover:shadow-purple-500/20">
        <h3 className="text-2xl font-display font-bold text-white mb-8">Get in Touch</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <a 
            href="mailto:contact@sikkimrisingstar.com" 
            className="flex items-center gap-4 p-6 bg-purple-900/30 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group/item hover:scale-[1.02]"
          >
            <EnvelopeIcon className="w-8 h-8 text-purple-400 group-hover/item:text-purple-300 transition-colors" />
            <div>
              <div className="text-sm text-purple-300 mb-1">Email Us</div>
              <span className="text-gray-200 group-hover/item:text-white transition-colors">contact@sikkimrisingstar.com</span>
            </div>
          </a>

          <a 
            href="tel:+919876543210" 
            className="flex items-center gap-4 p-6 bg-purple-900/30 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group/item hover:scale-[1.02]"
          >
            <PhoneIcon className="w-8 h-8 text-purple-400 group-hover/item:text-purple-300 transition-colors" />
            <div>
              <div className="text-sm text-purple-300 mb-1">Call Us</div>
              <span className="text-gray-200 group-hover/item:text-white transition-colors">+91 98765 43210</span>
            </div>
          </a>

          <div className="flex items-center gap-4 p-6 bg-purple-900/30 rounded-lg border border-purple-500/20 group/item">
            <MapPinIcon className="w-8 h-8 text-purple-400 group-hover/item:text-purple-300 transition-colors" />
            <div>
              <div className="text-sm text-purple-300 mb-1">Visit Us</div>
              <span className="text-gray-200">Gangtok, Sikkim</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}