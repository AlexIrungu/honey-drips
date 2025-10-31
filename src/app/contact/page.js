import Image from 'next/image';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';
import Map from '@/components/contact/Map';

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
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-warm-white">
        <div className="container mx-auto px-4">
          <ContactInfo />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal-800 mb-4">
                Send Us a Message
              </h2>
              <p className="text-xl text-charcoal-600">
                Have a question or feedback? Fill out the form below
              </p>
            </div>

            <div className="bg-warm-white rounded-2xl shadow-large p-8 md:p-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-warm-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal-800 mb-4">
              Find Us
            </h2>
            <p className="text-xl text-charcoal-600">
              Located along Mama Ngina Street, Thika Town Centre
            </p>
          </div>
          <Map />
        </div>
      </section>
    </>
  );
}