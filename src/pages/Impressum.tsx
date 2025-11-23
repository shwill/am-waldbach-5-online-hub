import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="ghost"
            className="mb-6 sm:mb-8"
            asChild
          >
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Zurück zur Startseite
            </Link>
          </Button>

          <div className="bg-card rounded-lg shadow-lg p-6 sm:p-8 md:p-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">
              Impressum
            </h1>

            <div className="space-y-8 text-foreground">
              <section>
                <h2 className="text-xl sm:text-2xl font-serif font-bold mb-4">
                  Angaben gemäß § 5 TMG
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Caroline Weil de Vega<br />
                  Hausarztpraxis<br />
                  Am Waldbach 5<br />
                  77654 Offenburg
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-serif font-bold mb-4">
                  Kontakt
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Telefon: 0781 00000<br />
                  E-Mail: kontakt@gmail.com
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-serif font-bold mb-4">
                  Berufsbezeichnung und berufsrechtliche Regelungen
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Berufsbezeichnung: Ärztin (verliehen in Deutschland)
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Zuständige Kammer:<br />
                  Landesärztekammer Baden-Württemberg<br />
                  Jahnstraße 40<br />
                  70597 Stuttgart
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  Es gelten folgende berufsrechtliche Regelungen:<br />
                  Berufsordnung für die Ärzte Baden-Württembergs<br />
                  <a 
                    href="https://www.aerztekammer-bw.de" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors underline"
                  >
                    www.aerztekammer-bw.de
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-serif font-bold mb-4">
                  Aufsichtsbehörde
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Kassenärztliche Vereinigung Baden-Württemberg<br />
                  Albstadtweg 11<br />
                  70567 Stuttgart
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-serif font-bold mb-4">
                  Haftungsausschluss
                </h2>
                
                <h3 className="text-lg font-semibold mb-2 mt-4">
                  Haftung für Inhalte
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
                  Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. 
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                  nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                  Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                  Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
                  Tätigkeit hinweisen.
                </p>

                <h3 className="text-lg font-semibold mb-2 mt-4">
                  Haftung für Links
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen 
                  Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                  Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                  Seiten verantwortlich.
                </p>

                <h3 className="text-lg font-semibold mb-2 mt-4">
                  Urheberrecht
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                  dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                  der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                  Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-serif font-bold mb-4">
                  Streitschlichtung
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a 
                    href="https://ec.europa.eu/consumers/odr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors underline ml-1"
                  >
                    https://ec.europa.eu/consumers/odr
                  </a>
                  <br /><br />
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
