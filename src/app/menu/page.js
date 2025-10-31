'use client';

import { useState } from 'react';
import Image from 'next/image';
import MenuTabs from '@/components/menu/MenuTabs';
import MenuCategory from '@/components/menu/MenuCategory';
import { menuData } from '@/lib/utils/constants';

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState('breakfast');

  const tabs = [
    { id: 'breakfast', label: 'Breakfast' },
    { id: 'fishMeat', label: 'Fish & Meat' },
    { id: 'plainDishes', label: 'Plain Dishes' },
    { id: 'specials', label: 'Specials/Drinks' },
  ];

  const currentMenu = menuData[activeTab];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src={currentMenu.image}
            alt={currentMenu.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-charcoal-900/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block mb-4">
            <span className="text-honey font-semibold text-lg">Our Menu</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">
            {currentMenu.title}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Welcome to Honey Drips Hotel for delicious meals that fill your soul and 
            service that makes you feel at home.
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 bg-warm-white">
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <MenuTabs 
            activeTab={activeTab} 
            onTabChange={setActiveTab}
            tabs={tabs}
          />

          {/* Menu Items */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12">
              {currentMenu.categories.map((category, index) => (
                <MenuCategory key={index} category={category} />
              ))}
            </div>
          </div>

          {/* Location Info */}
          <div className="mt-12 text-center">
            <p className="text-charcoal-600">
              📍 Located along Mama Ngina Street, Thika Town Centre
            </p>
          </div>
        </div>
      </section>
    </>
  );
}