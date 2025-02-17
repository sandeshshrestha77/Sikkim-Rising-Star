import Link from "next/link";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

const navigation = {
  main: [
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Register", href: "/register" },
    { name: "Contact", href: "#contact" },
  ],
  company: [
    { name: "Success Stories", href: "#stories" },
    { name: "Media Coverage", href: "#media" },
    { name: "Press Kit", href: "#press" },
    { name: "FAQs", href: "#faq" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Competition Rules", href: "#" },
  ],
};

const socialLinks = [
  { name: "Instagram", href: "#", ariaLabel: "Visit Instagram" },
  { name: "Facebook", href: "#", ariaLabel: "Visit Facebook" },
  { name: "YouTube", href: "#", ariaLabel: "Visit YouTube" },
  { name: "Twitter", href: "#", ariaLabel: "Visit Twitter" },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding and Contact Info */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="inline-block text-2xl font-display font-bold text-white mb-4"
            >
              Sikkim Rising Star
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
  Sikkim&apos;s Premier Talent Hunt Competition, discovering extraordinary talents since 2018.
</p>
            <div className="space-y-2">
              <a
                href="mailto:contact@sikkimrisingstar.com"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                aria-label="Email Sikkim Rising Star"
              >
                <EnvelopeIcon className="w-4 h-4" />
                contact@sikkimrisingstar.com
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                aria-label="Call Sikkim Rising Star"
              >
                <PhoneIcon className="w-4 h-4" />
                +91 98765 43210
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          {Object.entries(navigation).map(([title, items]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {title === "main" ? "Navigation" : title}
              </h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright Section with Social Links */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Sikkim Rising Star. All rights reserved.
            </p>
            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                  aria-label={social.ariaLabel}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
