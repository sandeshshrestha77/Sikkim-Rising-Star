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
    <footer className="relative mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-purple-800/5 to-black pointer-events-none" />

      <div className="relative border-t border-purple-500/20 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <Link href="/" className="inline-block text-2xl font-display font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Sikkim Rising Star
              </Link>
              <p className="text-gray-400 leading-relaxed mb-6">
                Sikkim's Premier Talent Hunt Competition, discovering and nurturing extraordinary talents since 2018.
              </p>
              <div className="space-y-3">
                <a href="mailto:contact@sikkimrisingstar.com" className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors">
                  <EnvelopeIcon className="w-5 h-5" />
                  contact@sikkimrisingstar.com
                </a>
                <a href="tel:+919876543210" className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors">
                  <PhoneIcon className="w-5 h-5" />
                  +91 98765 43210
                </a>
              </div>
            </div>

            {Object.entries(navigation).slice(0, 3).map(([title, items]) => (
              <div key={title}>
                <h3 className="text-lg font-display font-bold text-white mb-6 capitalize">{title}</h3>
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-gray-400 hover:text-purple-400 transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-purple-500/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Sikkim Rising Star. All rights reserved.
              </p>
              <div className="flex gap-6">
                {navigation.social.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}