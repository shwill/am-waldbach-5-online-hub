import { Stethoscope, Heart, Syringe, FileText, Users, Activity } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Stethoscope,
    title: "Allgemeinmedizin",
    description: "Umfassende medizinische Betreuung für alle Altersgruppen"
  },
  {
    icon: Heart,
    title: "Vorsorgeuntersuchungen",
    description: "Check-ups und Gesundheitsvorsorge für Ihr Wohlbefinden"
  },
  {
    icon: Syringe,
    title: "Impfungen",
    description: "Alle empfohlenen Schutzimpfungen nach STIKO-Empfehlungen"
  },
  {
    icon: FileText,
    title: "Labordiagnostik",
    description: "Moderne Diagnostik und schnelle Befundübermittlung"
  },
  {
    icon: Users,
    title: "Hausbesuche",
    description: "Medizinische Versorgung bei Ihnen zu Hause"
  },
  {
    icon: Activity,
    title: "EKG & Langzeitmessung",
    description: "Herzdiagnostik und Blutdruckmessung"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wir bieten Ihnen ein breites Spektrum an medizinischen Leistungen für Ihre Gesundheit und Ihr Wohlbefinden
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className="p-6 hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 bg-card group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
