'use client';

import { useState } from 'react';
import Image from 'next/image';
import RoomCard from '@/components/accommodation/RoomCard';
import RoomGallery from '@/components/accommodation/RoomGallery';
import { roomData } from '@/lib/utils/constants';
import { Wifi, Tv, Bath, ShieldCheck } from 'lucide-react';

export default function AccommodationPage() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const openGallery = (images) => {
    setGalleryImages(images);
    setIsGalleryOpen(true);
  };

  const amenities = [
    {
      icon: Wifi,
      title: 'High-speed WiFi',
      description: 'Stay connected with complimentary WiFi',
    },
    {
      icon: Tv,
      title: 'Flat-screen TV',
      description: 'Entertainment at your fingertips',
    },
    {
      icon: ShieldCheck,
      title: 'Sanitized Linen',
      description: 'Your safety is our priority',
    },
    {
      icon: Bath,
      title: 'Private Bathroom',
      description: 'Modern facilities for your comfort',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2574"
            alt="Hotel room"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-charcoal-900/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block mb-4">
            <span className="text-honey font-semibold text-lg">Accommodation</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Accommodation That Suits Your Lifestyle
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover a haven of peace and tranquility at Honey Drips Hotel, where comfort 
            meets simplicity. Our cozy rooms are equipped with all the amenities you may 
            need for an enjoyable stay in Thika.
          </p>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 bg-warm-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal-800 mb-4">
              Room Amenities
            </h2>
            <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
              Every room is designed with your comfort in mind
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="bg-honey-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-honey" />
                  </div>
                  <h3 className="font-bold text-charcoal-800 mb-2">
                    {amenity.title}
                  </h3>
                  <p className="text-sm text-charcoal-600">
                    {amenity.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Room Cards */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal-800 mb-4">
              Our Rooms
            </h2>
            <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
              Choose the perfect room for your stay
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {roomData.map((room) => (
              <RoomCard 
                key={room.id} 
                room={room}
                onGalleryClick={openGallery}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      <RoomGallery
        images={galleryImages}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />
    </>
  );
}