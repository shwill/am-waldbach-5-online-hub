import { Heart } from "lucide-react";

const About = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-accent/10 rounded-full mb-4 sm:mb-6">
            <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 sm:mb-6 px-4">
            Herzlich Willkommen
          </h2>
          
          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed px-4">
            <p>
              In unserer Hausarztpraxis steht Ihre Gesundheit und Ihr Wohlbefinden an erster Stelle. 
              Mit langjähriger Erfahrung und modernster medizinischer Ausstattung bieten wir Ihnen 
              eine umfassende hausärztliche Versorgung in angenehmer Atmosphäre.
            </p>
            
            <p>
              Unser Ziel ist es, Sie und Ihre Familie in allen gesundheitlichen Belangen kompetent 
              zu begleiten – von der Vorsorge über die Behandlung akuter Erkrankungen bis hin zur 
              Betreuung chronischer Leiden.
            </p>
            
            <p className="text-foreground font-medium">
              Wir nehmen uns Zeit für Sie und behandeln Sie mit der Aufmerksamkeit und Sorgfalt, 
              die Sie verdienen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
