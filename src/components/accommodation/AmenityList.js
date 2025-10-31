import { Check } from 'lucide-react';

export default function AmenityList({ amenities, className = '' }) {
  return (
    <div className={`space-y-3 ${className}`}>
      {amenities.map((amenity, index) => (
        <div key={index} className="flex items-start space-x-3">
          <div className="flex-shrink-0 mt-0.5">
            <div className="w-6 h-6 bg-honey-50 rounded-full flex items-center justify-center">
              <Check className="h-4 w-4 text-honey" />
            </div>
          </div>
          <span className="text-charcoal-700 leading-relaxed">{amenity}</span>
        </div>
      ))}
    </div>
  );
}

export function AmenityGrid({ amenities, columns = 2, className = '' }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-4 ${className}`}>
      {amenities.map((amenity, index) => (
        <div
          key={index}
          className="flex items-center space-x-3 p-3 bg-warm-white rounded-lg hover:bg-honey-50 transition-colors"
        >
          <Check className="h-5 w-5 text-honey flex-shrink-0" />
          <span className="text-charcoal-700">{amenity}</span>
        </div>
      ))}
    </div>
  );
}