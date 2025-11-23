import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-medical.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-secondary/30">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Moderne Arztpraxis mit freundlicher Atmosphäre" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 to-background/80" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Hausarztpraxis<br />
            <span className="text-primary">Caroline Weil de Vega</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Ihre Gesundheit liegt uns am Herzen. Kompetente medizinische Versorgung für die ganze Familie in Offenburg.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-8 sm:mb-12 px-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all min-h-[48px] w-full sm:w-auto"
              asChild
            >
              <a href="tel:078100000" className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                0781 00000
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary/20 hover:border-primary/40 hover:bg-secondary/50 min-h-[48px] w-full sm:w-auto"
              asChild
            >
              <a href="#kontakt" className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5" />
                Anfahrt
              </a>
            </Button>
          </div>
          
          <div className="inline-flex items-center gap-2 text-muted-foreground bg-card/80 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-sm mx-4">
            <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-xs sm:text-sm">Am Waldbach 5, 77654 Offenburg</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
