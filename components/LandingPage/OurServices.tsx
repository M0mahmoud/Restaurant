import { Clock, MapPin, Smartphone, Truck } from "lucide-react";

export default function OurServices() {
  const services = [
    {
      icon: MapPin,
      title: "Wide selection",
      description: "Explore our diverse menu options.",
    },
    {
      icon: Smartphone,
      title: "Easy booking",
      description: "Quick and simple reservations.",
    },
    {
      icon: Clock,
      title: "Faster takeaway",
      description: "Swift service for your convenience.",
    },
    {
      icon: Truck,
      title: "Free delivery",
      description: "Complimentary delivery to your door.",
    },
  ];
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 sm:text-5xl">
          Our Services
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 bg-[#F8FAF8] dark:bg-gray-900 rounded-2xl transition-all hover:shadow-lg"
            >
              <div className="h-12 w-12 rounded-full bg-[#4A8B6F] dark:bg-[#3F7A5F] flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
