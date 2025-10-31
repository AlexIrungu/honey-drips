import Image from 'next/image';
import Button from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2574"
          alt="Delicious gourmet meal"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-charcoal-900/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-display-lg md:text-display font-display font-bold text-white mb-6 animate-fade-in">
            Escape to Comfort and Serenity
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed animate-slide-up">
            Honey Drip Hotel is the premier destination for delicious meals and comfortable 
            accommodation in Thika, dedicated to giving families and individuals the best 
            experience and unforgettable memories.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
            <Button 
              href="/menu" 
              variant="primary" 
              size="lg"
              className="group"
            >
              View Menu
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              href="/accommodation" 
              variant="outline" 
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-charcoal-800"
            >
              Book Accommodation
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}