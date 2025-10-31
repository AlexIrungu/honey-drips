import { MapPin, Mail, Clock, Phone } from 'lucide-react';
import { contactInfo } from '@/lib/utils/constants';

export default function ContactInfo() {
  const infoCards = [
    {
      icon: MapPin,
      title: 'Physical Address',
      content: (
        <>
          {contactInfo.address.street}<br />
          {contactInfo.address.location}<br />
          {contactInfo.address.city}
        </>
      ),
      color: 'text-honey',
      bgColor: 'bg-honey',
    },
    {
      icon: Mail,
      title: 'Email Address',
      content: (
        <>
          {contactInfo.emails.map((email, index) => (
            <a
              key={index}
              href={`mailto:${email}`}
              className="block hover:text-honey transition-colors"
            >
              {email}
            </a>
          ))}
        </>
      ),
      color: 'text-gold',
      bgColor: 'bg-gold',
    },
    {
      icon: Clock,
      title: 'Open Hours',
      content: (
        <>
          {contactInfo.hours.weekdays}<br />
          {contactInfo.hours.weekend}
        </>
      ),
      color: 'text-brown',
      bgColor: 'bg-brown',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: (
        <a
          href={`tel:${contactInfo.phone}`}
          className="hover:text-honey transition-colors"
        >
          {contactInfo.phone}
        </a>
      ),
      color: 'text-green-600',
      bgColor: 'bg-green-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {infoCards.map((card, index) => {
        const Icon = card.icon;
        return (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 text-center"
          >
            <div className={`${card.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
              <Icon className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold text-charcoal-800 text-lg mb-3">
              {card.title}
            </h3>
            <div className="text-charcoal-600 text-sm leading-relaxed">
              {card.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}