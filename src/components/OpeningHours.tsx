import { Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const openingHours = [
  { day: "Montag", hours: "08:00–12:00, 16:00–19:00" },
  { day: "Dienstag", hours: "08:00–12:00" },
  { day: "Mittwoch", hours: "08:00–12:00" },
  { day: "Donnerstag", hours: "15:00–18:00" },
  { day: "Freitag", hours: "08:00–12:00" },
  { day: "Samstag", hours: "Geschlossen", closed: true },
  { day: "Sonntag", hours: "Geschlossen", closed: true },
];

const OpeningHours = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 animate-slide-up">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full mb-3 sm:mb-4">
              <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-3 sm:mb-4 px-4">
              Öffnungszeiten
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground px-4">
              Wir sind für Sie da
            </p>
          </div>
          
          <Card className="bg-card shadow-lg border-0 overflow-hidden">
            <div className="divide-y divide-border">
              {openingHours.map((item, index) => (
                <div 
                  key={item.day}
                  className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-4 px-4 sm:px-6 md:px-8 py-4 sm:py-5 transition-colors hover:bg-secondary/50 ${
                    item.closed ? 'opacity-60' : ''
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="font-semibold text-foreground text-base sm:text-lg">
                    {item.day}
                  </span>
                  <span className={`text-sm sm:text-base ${item.closed ? 'text-muted-foreground' : 'text-primary font-medium'}`}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </Card>
          
          <div className="mt-6 sm:mt-8 text-center px-4">
            <p className="text-xs sm:text-sm text-muted-foreground">
              Termine nach Vereinbarung • Notfälle werden umgehend behandelt
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;
