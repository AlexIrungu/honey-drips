import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import MenuPreview from '@/components/home/MenuPreview';
import Testimonials from '@/components/home/Testimonials';
import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Menu Preview Section */}
      <MenuPreview />

      {/* About Section with Image */}
      <section className="py-20 bg-charcoal-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Discover Comfort and Serenity
              </h2>
              
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  Discover a haven of peace and tranquility at Honey Drip Hotel, where comfort 
                  meets simplicity. Our cozy rooms are equipped with all the amenities you may 
                  need, and you can enjoy your stay in Thika.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-honey rounded-full"></div>
                    <p>High-speed WiFi</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-honey rounded-full"></div>
                    <p>Flat-screen TV</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-honey rounded-full"></div>
                    <p>Disinfectant-washed linen for your safety and peace of mind</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-honey rounded-full"></div>
                    <p>Private bathroom</p>
                  </div>
                </div>

                <p className="leading-relaxed pt-4">
                  Savor delicious meals at our restaurant, serving a variety of cuisines to suit 
                  every taste. Whether you're travelling for business or leisure, our hotel provides 
                  the perfect retreat.
                </p>

                <p className="leading-relaxed">
                  Honey Drips Hotel is a family-friendly and alcohol-free environment.
                </p>

                <p className="leading-relaxed">
                  Join us for a relaxing stay, knowing that our hotel prioritizes your comfort and 
                  well-being.
                </p>
              </div>

              <Button href="/accommodation" variant="primary" size="lg" className="mt-6">
                Go to Booking
              </Button>
            </div>

            {/* Right: Image */}
            <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-large">
              <Image
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670"
                alt="Hotel room interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Final CTA Section */}
      <section className="py-20 bg-honey">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to Experience Honey Drips?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your stay today and discover why families choose us for unforgettable memories
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              href="/reservation" 
              variant="secondary" 
              size="lg"
            >
              Make a Reservation
            </Button>
            <Button 
              href="/menu" 
              variant="outline" 
              size="lg"
              className="bg-white text-honey border-white hover:bg-warm-white"
            >
              View Our Menu
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}