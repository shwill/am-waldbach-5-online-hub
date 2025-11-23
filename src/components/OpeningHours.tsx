import { Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const openingHours = [
  { day: "Montag", hours: "08:00–11:30, 15:00–18:00" },
  { day: "Dienstag", hours: "15:00–18:00" },
  { day: "Mittwoch", hours: "08:00–11:30" },
  { day: "Donnerstag", hours: "08:00–11:30, 15:00–18:00" },
  { day: "Freitag", hours: "08:00–11:30" },
  { day: "Samstag", hours: "Geschlossen", closed: true },
  { day: "Sonntag", hours: "Geschlossen", closed: true },
];

const OpeningHours = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Öffnungszeiten
            </h2>
            <p className="text-lg text-muted-foreground">
              Wir sind für Sie da
            </p>
          </div>
          
          <Card className="bg-card shadow-lg border-0 overflow-hidden">
            <div className="divide-y divide-border">
              {openingHours.map((item, index) => (
                <div 
                  key={item.day}
                  className={`flex justify-between items-center px-6 md:px-8 py-5 transition-colors hover:bg-secondary/50 ${
                    item.closed ? 'opacity-60' : ''
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="font-semibold text-foreground text-lg">
                    {item.day}
                  </span>
                  <span className={`text-base ${item.closed ? 'text-muted-foreground' : 'text-primary font-medium'}`}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </Card>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Termine nach Vereinbarung • Notfälle werden umgehend behandelt
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;
