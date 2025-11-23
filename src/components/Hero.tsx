import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-3 sm:mb-4 leading-tight">
            Hausarztpraxis<br />
            <span className="text-primary">Dr. Caroline Weil de Vega</span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mt-6 sm:mt-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground min-h-[48px] w-full sm:w-auto"
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
