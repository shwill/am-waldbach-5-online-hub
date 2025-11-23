import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="font-serif font-bold text-foreground text-lg mb-1">
              Hausarztpraxis Caroline Weil de Vega
            </h3>
            <p className="text-sm text-muted-foreground">
              Ihre Gesundheit in guten Händen
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 text-sm">
            <a 
              href="tel:078139003" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              0781 39003
            </a>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <span className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              Am Waldbach 5, 77654 Offenburg
            </span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Hausarztpraxis Caroline Weil de Vega. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
