import Image from 'next/image';
import Button from '@/components/ui/Button';
import Card, { CardImage, CardContent, CardTitle, CardDescription } from '@/components/ui/Card';
import { ArrowRight } from 'lucide-react';

export default function MenuPreview() {
  const menuCategories = [
    {
      title: 'Platter',
      description: 'Explore our signature platter with chips, rice, beef, pilau, chicken, chapo, vegetables, juice, and salad.',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2669',
      link: '/menu#platter',
    },
    {
      title: 'Fish & Meat',
      description: 'Finger-licking tilapia is a main attraction for families, along with beef, goat stew, fries, and unforgettable chicken bites.',
      image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=2676',
      link: '/menu#fish-meat',
    },
    {
      title: 'Breakfast',
      description: 'Enjoy a power breakfast with African tea, chocolate, Milo, coffee, sausage, eggs, andazi, and bacon.',
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=2680',
      link: '/menu#breakfast',
    },
    {
      title: 'Salads & Juice',
      description: 'Fresh fruit and vegetable salads made from natural ingredients with fruit juices and fresh yoghurts.',
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=2574',
      link: '/menu#salads',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal-800 mb-4">
            Choose Your Menu
          </h2>
          <p className="text-lg text-charcoal-600">
            Welcome to Honey Drips Hotel for delicious meals that fill your soul and service 
            that makes you feel at home. Located along Mama Ngina Street, Thika Town Centre.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {menuCategories.map((category, index) => (
            <Card key={index} hover className="group">
              <CardImage 
                src={category.image} 
                alt={category.title}
                className="h-64"
              />
              <CardContent>
                <CardTitle className="group-hover:text-honey transition-colors">
                  {category.title}
                </CardTitle>
                <CardDescription>
                  {category.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button href="/menu" variant="primary" size="lg" className="group">
            View Full Menu
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}