import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-xs sm:text-sm text-muted-foreground">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center mb-3">
            <Link to="/impressum" className="hover:text-primary transition-colors underline">
              Impressum
            </Link>
            <span className="hidden sm:inline text-muted-foreground/50">•</span>
            <Link to="/datenschutz" className="hover:text-primary transition-colors underline">
              Datenschutzerklärung
            </Link>
          </div>
          <p>© {new Date().getFullYear()} Hausarztpraxis Dr. Caroline Weil de Vega</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
