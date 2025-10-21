import { Palette, Globe, Smartphone } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing interfaces through wireframing, prototyping, and usability testing.",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    },
    {
      icon: Globe,
      title: "Web Design",
      description: "Building responsive, modern websites with clean code and seamless user experiences.",
      features: ["Responsive Layouts", "Front-end Development", "HTML/CSS/JavaScript", "Back-end Integration"],
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Developing cross-platform mobile applications focused on performance and user experience.",
      features: ["Cross-platform Apps", "React Native", "User-centric Solutions", "Performance Optimization"],
    },
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What I <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-smooth group animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="inline-flex p-4 rounded-lg bg-gradient-primary group-hover:glow-teal transition-smooth">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
