'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function RoomGallery({ images, isOpen, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 bg-charcoal-900/95 flex items-center justify-center p-4">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-honey transition-colors p-2"
        aria-label="Close gallery"
      >
        <X className="h-8 w-8" />
      </button>

      {/* Previous Button */}
      <button
        onClick={prevImage}
        className="absolute left-4 text-white hover:text-honey transition-colors p-2"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-12 w-12" />
      </button>

      {/* Image */}
      <div className="relative w-full max-w-5xl h-[70vh]">
        <Image
          src={images[currentIndex]}
          alt={`Room view ${currentIndex + 1}`}
          fill
          className="object-contain"
        />
      </div>

      {/* Next Button */}
      <button
        onClick={nextImage}
        className="absolute right-4 text-white hover:text-honey transition-colors p-2"
        aria-label="Next image"
      >
        <ChevronRight className="h-12 w-12" />
      </button>

      {/* Image Counter */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-charcoal-800/80 backdrop-blur-sm text-white px-4 py-2 rounded-full">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Thumbnails */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-honey' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}