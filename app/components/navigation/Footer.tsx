import Link from 'next/link';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

const navigation = {
  competition: [
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Register', href: '/register' },
    { name: 'Rules & Guidelines', href: '#' }
  ],
  resources: [
    { name: 'Success Stories', href: '#stories' },
    { name: 'Media Coverage', href: '#media' },
    { name: 'Press Kit', href: '#press' },
    { name: 'FAQs', href: '#faq' }
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Competition Rules', href: '#' },
    { name: 'Code of Conduct', href: '#' }
  ],
  social: [
    { name: 'Instagram', href: '#' },
    { name: 'Facebook', href: '#' },
    { name: 'YouTube', href: '#' },
    { name: 'Twitter', href: '#' }
  ]
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 pt-24 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-purple-500/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link href="/" className="text-2xl font-display font-bold text-white hover:text-purple-400 transition-colors">
              Sikkim Rising Star
            </Link>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Sikkim's Premier Talent Hunt Competition, discovering and nurturing extraordinary talents since 2018.
            </p>
            <div className="mt-6 space-y-3">
              <a href="mailto:contact@sikkimrisingstar.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <EnvelopeIcon className="w-5 h-5" />
                contact@sikkimrisingstar.com
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <PhoneIcon className="w-5 h-5" />
                +91 98765 43210
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-display font-bold mb-6">Competition</h3>
            <ul className="space-y-4">
              {navigation.competition.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-display font-bold mb-6">Resources</h3>
            <ul className="space-y-4">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-display font-bold mb-6">Legal</h3>
            <ul className="space-y-4">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Sikkim Rising Star. All rights reserved.
            </p>
            <div className="flex gap-6">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}