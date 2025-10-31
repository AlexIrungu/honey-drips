'use client';

import { MapPin, Navigation } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Map() {
  // Coordinates for Mama Ngina Street, Thika
  const location = {
    lat: -1.0332,
    lng: 37.0691,
    address: 'Mama Ngina Street, Opposite Maathai, Thika',
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`;

  return (
    <div className="space-y-6">
      {/* Map Embed */}
      <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-large">
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7543!2d${location.lng}!3d${location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMDEnNTkuNSJTIDM3wrAwNCcwOC44IkU!5e0!3m2!1sen!2ske!4v1234567890`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Honey Drips Hotel Location"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        ></iframe>
        
        {/* Overlay with location pin */}
        <div className="absolute top-4 left-4 bg-white rounded-xl shadow-medium p-4 max-w-xs">
          <div className="flex items-start space-x-3">
            <div className="bg-honey rounded-full p-2 flex-shrink-0">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="font-bold text-charcoal-800 text-sm">
                Honey Drips Hotel
              </p>
              <p className="text-xs text-charcoal-600">
                {location.address}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          href={googleMapsUrl}
          variant="primary"
          size="lg"
          icon={MapPin}
          className="group"
        >
          View on Google Maps
        </Button>
        
        <Button
          href={directionsUrl}
          variant="outline"
          size="lg"
          icon={Navigation}
        >
          Get Directions
        </Button>
      </div>

      {/* Additional Info */}
      <div className="bg-honey-50 rounded-xl p-6 text-center">
        <p className="text-charcoal-700">
          <strong>Landmark:</strong> Located opposite Maathai on Mama Ngina Street
        </p>
        <p className="text-sm text-charcoal-600 mt-2">
          Easy to find in the heart of Thika Town Centre
        </p>
      </div>
    </div>
  );
}