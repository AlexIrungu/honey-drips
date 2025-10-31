'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import RoomReservationModal from '@/components/accommodation/RoomReservationModal';
import { Check } from 'lucide-react';

export default function RoomCard({ room, onGalleryClick }) {
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-medium transition-all duration-300">
        {/* Room Image */}
        <div className="relative h-80 overflow-hidden group cursor-pointer" onClick={() => onGalleryClick(room.gallery)}>
          <Image
            src={room.image}
            alt={room.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/20 transition-colors duration-300"></div>
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-sm text-charcoal-600">Click to view gallery</span>
          </div>
        </div>

        {/* Room Details */}
        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-3xl font-display font-bold text-charcoal-800">
              {room.name}
            </h3>
            <div className="text-right">
              <div className="text-3xl font-bold text-honey">
                Ksh.{room.price.toLocaleString()}
              </div>
              <div className="text-sm text-charcoal-600">per night</div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-3 mb-6">
            {room.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-honey flex-shrink-0 mt-0.5" />
                <span className="text-charcoal-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* Reserve Button - Opens Modal */}
          <Button 
            onClick={() => setIsReservationModalOpen(true)}
            variant="success" 
            size="lg" 
            className="w-full"
          >
            Reserve Room
          </Button>
        </div>
      </div>

      {/* Reservation Modal */}
      <RoomReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
        room={room}
      />
    </>
  );
}