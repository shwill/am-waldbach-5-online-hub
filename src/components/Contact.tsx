import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Contact = () => {
  const [mapConsent, setMapConsent] = useState(false);

  const address = "Am Waldbach 5, 77654 Offenburg";
  const addressEncoded = encodeURIComponent(address);
  return (
    <section id="kontakt" className="py-12 sm:py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-3 sm:mb-4 px-4">
              Kontakt & Anfahrt
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground px-4">
              Wir freuen uns auf Ihren Besuch
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <Card className="p-6 sm:p-8 bg-card shadow-lg border-0">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-4 sm:mb-6">
                Praxisinformationen
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Adresse</h4>
                    <p className="text-muted-foreground">
                      Am Waldbach 5<br />
                      77654 Offenburg
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Telefon</h4>
                    <a
                      href="tel:078100000"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      0781 00000
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">E-Mail</h4>
                    <a 
                      href="mailto:kontakt@gmail.com" 
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      kontakt@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Terminvereinbarung</h4>
                    <p className="text-muted-foreground">
                      Telefonisch während der Sprechzeiten
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 sm:mt-8 pt-6 border-t border-border">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground min-h-[48px]"
                  size="lg"
                  asChild
                >
                  <a href="tel:078100000" className="flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    Jetzt anrufen
                  </a>
                </Button>
              </div>
            </Card>
            
            <Card className="p-0 bg-card shadow-lg border-0 overflow-hidden">
              <div className="h-full min-h-[300px] sm:min-h-[400px] relative">
                {!mapConsent ? (
                  <div className="h-full flex flex-col items-center justify-center p-6 sm:p-8 bg-gradient-to-br from-secondary/30 to-secondary/50">
                    <MapPin className="w-12 h-12 sm:w-16 sm:h-16 text-primary mb-4" />
                    <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-3 text-center">
                      Google Maps Karte
                    </h4>
                    <p className="text-sm text-muted-foreground mb-6 max-w-md text-center">
                      Durch das Laden der Karte werden Daten an Google übertragen.
                      Mehr Informationen finden Sie in unserer{" "}
                      <a href="/impressum" className="text-primary hover:underline">
                        Datenschutzerklärung
                      </a>.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                      <Button
                        onClick={() => setMapConsent(true)}
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground min-h-[48px]"
                        size="lg"
                      >
                        <MapPin className="w-5 h-5 mr-2" />
                        Karte laden
                      </Button>
                      <Button
                        onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${addressEncoded}`, '_blank')}
                        variant="outline"
                        className="flex-1 border-2 border-primary/20 hover:border-primary/40 hover:bg-secondary/50 min-h-[48px]"
                        size="lg"
                      >
                        <Navigation className="w-5 h-5 mr-2" />
                        Route von mir
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2668.5!2d7.9419!3d48.4667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDI4JzAwLjEiTiA3wrA1NicxOC45IkU!5e0!3m2!1sde!2sde!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Standort der Hausarztpraxis Dr. Caroline Weil de Vega in Offenburg"
                      className="w-full h-full"
                    />
                    <div className="absolute bottom-4 right-4">
                      <Button
                        onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${addressEncoded}`, '_blank')}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                        size="sm"
                      >
                        <Navigation className="w-4 h-4 mr-2" />
                        Route von mir
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
