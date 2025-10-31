import { Leaf, Award, Utensils, Bed, Wifi, Shield } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Leaf,
      title: 'Natural Ingredients',
      description: 'Every dish is crafted from the freshest, locally-sourced natural ingredients, delivering pure and wholesome flavors to your table.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Award,
      title: 'Best Service',
      description: 'Our dedicated team provides warm, attentive service, ensuring your every need is met with genuine care and swift precision.',
      color: 'text-honey',
      bgColor: 'bg-honey-50',
    },
    {
      icon: Utensils,
      title: 'Delicious Cuisine',
      description: 'Savor delicious meals at our restaurant, serving a variety of cuisines to suit every taste and preference.',
      color: 'text-brown',
      bgColor: 'bg-orange-50',
    },
    {
      icon: Bed,
      title: 'Comfortable Rooms',
      description: 'Retreat to the serene comfort of our beautifully appointed rooms, your personal cocoon of luxury and relaxation in Thika.',
      color: 'text-gold',
      bgColor: 'bg-amber-50',
    },
    {
      icon: Wifi,
      title: 'High-Speed WiFi',
      description: 'Stay connected with complimentary high-speed WiFi throughout the hotel for work or leisure.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Shield,
      title: 'Family-Friendly',
      description: 'A safe, welcoming environment perfect for families. Alcohol-free premises ensure peace of mind.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <section className="py-20 bg-warm-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal-800 mb-4">
            Why Choose Honey Drips
          </h2>
          <p className="text-lg text-charcoal-600">
            Discover what makes us the premier destination for comfort and culinary excellence in Thika
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`${feature.bgColor} ${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-display font-bold text-charcoal-800 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-charcoal-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}