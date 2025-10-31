import Image from 'next/image';
import ReservationForm from '@/components/contact/ReservationForm';
import Button from '@/components/ui/Button';
import { Clock, Users, Calendar, Phone } from 'lucide-react';

export default function ReservationPage() {
  const benefits = [
    {
      icon: Clock,
      title: 'Quick & Easy',
      description: 'Book your table in just a few clicks',
    },
    {
      icon: Users,
      title: 'Group Friendly',
      description: 'Perfect for families and large groups',
    },
    {
      icon: Calendar,
      title: 'Flexible Dates',
      description: 'Choose any date that works for you',
    },
    {
      icon: Phone,
      title: 'Instant Confirmation',
      description: 'Get notified immediately after booking',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670"
            alt="Restaurant reservation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-charcoal-900/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block mb-4">
            <span className="text-honey font-semibold text-lg">Book Your Table</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Make a Reservation
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Reserve your table at Honey Drips Hotel and experience exceptional dining 
            in the heart of Thika. We look forward to serving you!
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-warm-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300"
                >
                  <div className="bg-honey-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-honey" />
                  </div>
                  <h3 className="font-bold text-charcoal-800 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-charcoal-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="py-16 bg-charcoal-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                Online Reservation
              </h2>
              <p className="text-xl text-gray-300">
                Fill out the details of your reservation
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-large p-8 md:p-12">
              <ReservationForm />
            </div>

            {/* Alternative Contact */}
            <div className="mt-8 text-center">
              <p className="text-gray-300 mb-4">
                Prefer to book by phone?
              </p>
              <Button
                href="tel:+254715757458"
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-charcoal-800"
                icon={Phone}
              >
                Call +254 715 757 458
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 bg-warm-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-soft p-8">
              <h3 className="text-2xl font-display font-bold text-charcoal-800 mb-6">
                Important Information
              </h3>
              
              <div className="space-y-4 text-charcoal-700">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-honey rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    <strong>Confirmation:</strong> Your reservation will be confirmed within 1 hour via phone call or SMS.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-honey rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    <strong>Opening Hours:</strong> Monday - Saturday: 8am - 6pm | Sunday: 10am - 4pm
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-honey rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    <strong>Cancellation:</strong> Please call us at least 2 hours before your reservation time if you need to cancel.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-honey rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    <strong>Special Requests:</strong> We'll do our best to accommodate dietary requirements and special occasions. Please mention them in your message.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-honey rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    <strong>Family-Friendly:</strong> Honey Drips Hotel is a family-friendly and alcohol-free environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}