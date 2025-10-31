import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const usefulLinks = [
    { name: 'Accommodation', href: '/accommodation' },
    { name: 'Menu', href: '/menu' },
    { name: 'FAQ', href: '/faq' },
  ];

  const companyLinks = [
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy', href: '/privacy' },
  ];

  return (
    <footer className="bg-charcoal-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="relative w-48 h-16">
              <Image
                src="/logo-transparent.png"
                alt="Honey Drips Hotel"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Escape to Comfort and Serenity
            </p>
            <p className="text-sm text-gray-500">
              Experience peace and tranquility at our hotel, where comfort meets simplicity.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-honey font-bold text-lg mb-6 font-display">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-honey flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Physical Address</p>
                  <p className="text-gray-400 text-sm">
                    Mama Ngina Street St.<br />
                    Opposite Maathai<br />
                    Thika
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-honey flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Email Address</p>
                  <a 
                    href="mailto:honeydrips@sparq.co.ke"
                    className="text-gray-400 text-sm hover:text-honey transition-colors"
                  >
                    honeydrips@sparq.co.ke
                  </a>
                  <br />
                  <a 
                    href="mailto:honeydripsthika@gmail.com"
                    className="text-gray-400 text-sm hover:text-honey transition-colors"
                  >
                    honeydripsthika@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-honey flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Open Hours</p>
                  <p className="text-gray-400 text-sm">
                    Monday - Saturday: 8am - 6pm<br />
                    Sunday: 10am - 4pm
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-honey flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a 
                    href="tel:+254715757458"
                    className="text-gray-400 text-sm hover:text-honey transition-colors"
                  >
                    +254 715 757 458
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-honey font-bold text-lg mb-6 font-display">Useful Links</h3>
            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-honey transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-honey font-bold text-lg mb-6 font-display">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-honey transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm text-center md:text-left">
              Copyright © {currentYear} - Website by{' '}
              <a
                href="https://sparq.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="text-honey hover:text-honey-400 transition-colors"
              >
                SPARQ eXperience
              </a>
            </p>
            <p className="text-gray-500 text-sm">
              Honey Drips Hotel Limited
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}