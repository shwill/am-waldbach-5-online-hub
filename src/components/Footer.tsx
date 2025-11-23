import { Phone, MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="text-center md:text-left px-4">
            <h3 className="font-serif font-bold text-foreground text-base sm:text-lg mb-1">
              Hausarztpraxis Caroline Weil de Vega
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Ihre Gesundheit in guten Händen
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 text-xs sm:text-sm px-4">
            <a 
              href="tel:078139003" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              0781 39003
            </a>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <a 
              href="mailto:kontakt@gmail.com" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              kontakt@gmail.com
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border text-center text-xs sm:text-sm text-muted-foreground px-4">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center mb-3">
            <Link to="/impressum" className="hover:text-primary transition-colors underline">
              Impressum
            </Link>
          </div>
          <p>© {new Date().getFullYear()} Hausarztpraxis Caroline Weil de Vega. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
