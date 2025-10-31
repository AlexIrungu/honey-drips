import Image from 'next/image';
import ContactInfo from '@/components/contact/ContactInfo';
import ReservationForm from '@/components/contact/ReservationForm';

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670"
            alt="Contact us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-charcoal-900/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block mb-4">
            <span className="text-honey font-semibold text-lg">Get in Touch</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-warm-white">
        <div className="container mx-auto px-4">
          <ContactInfo />
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
          </div>
        </div>
      </section>
    </>
  );
}