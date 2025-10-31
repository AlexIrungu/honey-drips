import Image from 'next/image';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Janet's Family",
      role: "Customer",
      content: "The food here is incredible! My kids devoured everything, and I loved that it was so fresh. The perfect spot for a family treat.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2670",
    },
    {
      name: "Michael Njogu",
      role: "Customer",
      content: "From the warm welcome to the incredibly comfortable bed, every detail was perfect. The staff went above and beyond to make our anniversary special.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574",
    },
    {
      name: "Hiking Roger",
      role: "Customer",
      content: "A hidden gem! The room was a peaceful haven, the meals were delicious, and the service was impeccable. We'll definitely be back.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574",
    },
  ];

  return (
    <section className="py-20 bg-warm-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal-800 mb-4">
            Our Clients Thought
          </h2>
          <p className="text-lg text-charcoal-600">
            Join our growing group of individuals and families who have shared wonderful and 
            unforgettable experiences at Honey Drips Hotel in Thika.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="text-honey mb-6">
                <Quote className="h-12 w-12 fill-current" />
              </div>

              {/* Testimonial Content */}
              <p className="text-charcoal-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-charcoal-800">{testimonial.name}</p>
                  <p className="text-sm text-charcoal-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}