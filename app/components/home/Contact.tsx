
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Section from '../ui/Section';

export default function Contact() {
  return (
    <Section title="Contact Us" className="mb-24">
      <div className="max-w-4xl mx-auto">
        {/* Main Contact Section */}
        <div className="bg-gradient-to-br from-amber-950/90 to-black rounded-2xl p-8 lg:p-12 shadow-xl backdrop-blur-sm border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300">
          {/* Header */}
          <div className="text-center mb-12">
            <h3 className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400 mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
  Have questions about the competition? We&apos;re here to help you every step of the way.
</p>

          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email Card */}
            <a 
              href="mailto:contact@sikkimrisingstar.com" 
              className="group flex flex-col items-center text-center p-8 bg-gradient-to-br from-amber-900/30 to-black rounded-xl border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-500/10"
            >
              <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                <EnvelopeIcon className="w-7 h-7 text-amber-400 group-hover:text-amber-300 transition-colors" />
              </div>
              <h4 className="text-amber-300 font-medium mb-2">Email Us</h4>
              <span className="text-gray-300 group-hover:text-white transition-colors">contact@sikkimrisingstar.com</span>
            </a>

            {/* Phone Card */}
            <a 
              href="tel:+919876543210" 
              className="group flex flex-col items-center text-center p-8 bg-gradient-to-br from-amber-900/30 to-black rounded-xl border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-500/10"
            >
              <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                <PhoneIcon className="w-7 h-7 text-amber-400 group-hover:text-amber-300 transition-colors" />
              </div>
              <h4 className="text-amber-300 font-medium mb-2">Call Us</h4>
              <span className="text-gray-300 group-hover:text-white transition-colors">+91 98765 43210</span>
            </a>

            {/* Location Card */}
            <div className="group flex flex-col items-center text-center p-8 bg-gradient-to-br from-amber-900/30 to-black rounded-xl border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                <MapPinIcon className="w-7 h-7 text-amber-400 group-hover:text-amber-300 transition-colors" />
              </div>
              <h4 className="text-amber-300 font-medium mb-2">Visit Us</h4>
              <span className="text-gray-300">Gangtok, Sikkim</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
