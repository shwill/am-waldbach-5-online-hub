import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Datenschutz = () => {
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
              Datenschutzerklärung
            </h1>

            <div className="space-y-8 text-foreground">
              <section>
                <h2 className="text-xl sm:text-2xl font-serif font-bold mb-4">
                  1. Datenschutz auf einen Blick
                </h2>

                <h3 className="text-lg font-semibold mb-2 mt-4">
                  Allgemeine Hinweise
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                  personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                  Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                  Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem
                  Text aufgeführten Datenschutzerklärung.
                </p>

                <h3 className="text-lg font-semibold mb-2 mt-4">
                  Datenerfassung auf dieser Website
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
                  Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle"
                  in dieser Datenschutzerklärung entnehmen.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Wie erfassen wir Ihre Daten?</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei
                  kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere
                  Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch
                  unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser,
                  Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
                  automatisch, sobald Sie diese Website betreten.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Wofür nutzen wir Ihre Daten?</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
                  gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
                  Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein
                  Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine
                  Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung
                  jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten
                  Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
                  verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
                  Aufsichtsbehörde zu.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-serif font-bold mb-4">
                  2. Hosting
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                </p>

                <h3 className="text-lg font-semibold mb-2 mt-4">
                  Externes Hosting
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser
                  Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert.
                  Hierbei kann es sich v.a. um IP-Adressen, Kontaktanfragen, Meta- und
                  Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige
                  Daten, die über eine Website generiert werden, handeln.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren
                  potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse
                  einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots
                  durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine
                  entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich
                  auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die
                  Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im
                  Endgerät des Nutzers (z.B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die
                  Einwilligung ist jederzeit widerrufbar.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-serif font-bold mb-4">
                  3. Allgemeine Hinweise und Pflichtinformationen
                </h2>

                <h3 className="text-lg font-semibold mb-2 mt-4">
                  Datenschutz
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
                  Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den
                  gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
                  Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden
                  können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und
                  wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der
                  Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz
                  der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                </p>

                <h3 className="text-lg font-semibold mb-2 mt-4">
                  Hinweis zur verantwortlichen Stelle
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Caroline Weil de Vega<br />
                  Hausarztpraxis<br />
                  Am Waldbach 5<br />
                  77654 Offenburg<br />
                  <br />
                  Telefon: 0781 00000<br />
                  E-Mail: kontakt@gmail.com
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder
                  gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen
                  Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                </p>

                <h3 className="text-lg font-semibold mb-2 mt-4">
                  Speicherdauer
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt
                  wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die
                  Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen
                  oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht,
                  sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
                  personenbezogenen Daten haben (z.B. steuer- oder handelsrechtliche Aufbewahrungsfristen);
                  im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
                </p>

                <h3 className="text-lg font-semibold mb-2 mt-4">
                  Widerruf Ihrer Einwilligung zur Datenverarbeitung
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung
                  möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die
                  Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
                  unberührt.
                </p>

                <h3 className="text-lg font-semibold mb-2 mt-4">
                  Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen
                  Direktwerbung (Art. 21 DSGVO)
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO
                  ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN
                  SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH
                  EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE
                  JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER
                  DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN
                  PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE
                  SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE
                  UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG
                  ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO
                  HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER
                  PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR
                  DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE
                  WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM
                  ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
                </p>

                <h3 className="text-lg font-semibold mb-2 mt-4">
                  Beschwerderecht bei der zuständigen Aufsichtsbehörde
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei
                  einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen
                  Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das
                  Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
                  gerichtlicher Rechtsbehelfe.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Die zuständige Aufsichtsbehörde für Baden-Württemberg ist:<br />
                  <br />
                  Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg<br />
                  Lautenschlagerstraße 20<br />
                  70173 Stuttgart<br />
                  <br />
                  Telefon: 0711/615541-0<br />
                  E-Mail: poststelle@lfdi.bwl.de
                </p>

                <h3 className="text-lg font-semibold mb-2 mt-4">
                  Recht auf Datenübertragbarkeit
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in
                  Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in
                  einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die
                  direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt
                  dies nur, soweit es technisch machbar ist.
                </p>

                <h3 className="text-lg font-semibold mb-2 mt-4">
                  Auskunft, Löschung und Berichtigung
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
                  unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren
                  Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf
                  Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
                  personenbezogene Daten können Sie sich jederzeit an uns wenden.
                </p>

                <h3 className="text-lg font-semibold mb-2 mt-4">
                  Recht auf Einschränkung der Verarbeitung
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
                  zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf
                  Einschränkung der Verarbeitung besteht in folgenden Fällen:
                </p>
                <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
                  <li>
                    Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten
                    bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer
                    der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer
                    personenbezogenen Daten zu verlangen.
                  </li>
                  <li>
                    Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht,
                    können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.
                  </li>
                  <li>
                    Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur
                    Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben
                    Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer
                    personenbezogenen Daten zu verlangen.
                  </li>
                  <li>
                    Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine
                    Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch
                    nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die
                    Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen
                  diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur
                  Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der
                  Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines
                  wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats
                  verarbeitet werden.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-serif font-bold mb-4">
                  4. Datenerfassung auf dieser Website
                </h2>

                <h3 className="text-lg font-semibold mb-2 mt-4">
                  Server-Log-Dateien
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so
                  genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-1">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
                  Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien
                  Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files
                  erfasst werden.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-serif font-bold mb-4">
                  5. Plugins und Tools
                </h2>

                <h3 className="text-lg font-semibold mb-2 mt-4">
                  Google Maps
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Diese Website nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland
                  Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Funktionen von Google Maps</strong><br />
                  Mit Google Maps können wir Ihren Standort und Wegbeschreibungen zu unserer Praxis
                  darstellen. Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden
                  Darstellung unserer Online-Angebote und an einer leichten Auffindbarkeit der von uns
                  auf der Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von
                  Art. 6 Abs. 1 lit. f DSGVO dar.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Einwilligung und Zwei-Klick-Lösung</strong><br />
                  Zur Nutzung der Funktionen von Google Maps ist es notwendig, dass Google Maps Daten
                  über Sie sammelt und verarbeitet. Dazu gehören insbesondere Ihre IP-Adresse und Ihr
                  Standort, wenn Sie die entsprechende Berechtigung in Ihrem Browser erteilen. Diese
                  Daten werden von Google auch in den USA verarbeitet.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Um Ihre Privatsphäre zu schützen, verwenden wir auf dieser Website eine sogenannte
                  Zwei-Klick-Lösung. Google Maps wird nicht automatisch geladen, wenn Sie unsere Website
                  besuchen. Sie müssen zunächst aktiv durch Klick auf die Schaltfläche „Karte laden"
                  Ihre Einwilligung erteilen. Erst dann werden Daten an Google übertragen.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Die Datenverarbeitung erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1
                  lit. a DSGVO und § 25 Abs. 1 TTDSG. Sie können Ihre Einwilligung jederzeit mit
                  Wirkung für die Zukunft widerrufen, indem Sie die Seite neu laden und die Karte nicht
                  erneut laden.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Datenübermittlung in die USA</strong><br />
                  Google ist nach dem EU-US Data Privacy Framework zertifiziert. Durch diese
                  Zertifizierung verpflichtet sich Google, die Standards und Vorschriften des
                  europäischen Datenschutzrechts einzuhalten. Weitere Informationen finden Sie unter:
                  <a
                    href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors underline ml-1"
                  >
                    https://www.dataprivacyframework.gov
                  </a>
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Auftragsverarbeitung</strong><br />
                  Wir haben mit Google einen Vertrag über Auftragsverarbeitung abgeschlossen. Hierbei
                  handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der
                  gewährleistet, dass Google die personenbezogenen Daten unserer Websitebesucher nur
                  nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Welche Daten werden von Google erhoben?</strong><br />
                  Sobald Sie Google Maps auf unserer Website aktivieren, können folgende Daten erhoben
                  und von Google verarbeitet werden:
                </p>
                <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-1">
                  <li>Ihre IP-Adresse</li>
                  <li>Datum und Uhrzeit des Besuchs</li>
                  <li>Geräteinformationen (Gerätetyp, Betriebssystem, Browser)</li>
                  <li>Standortdaten (wenn Sie Ihrem Browser die Berechtigung erteilt haben)</li>
                  <li>Informationen über Ihre Nutzung der Karte (z.B. angesehene Bereiche, Zoom-Level)</li>
                  <li>Cookies und ähnliche Technologien zur Identifikation Ihres Browsers oder Geräts</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Speicherdauer</strong><br />
                  Die Speicherdauer Ihrer Daten hängt von den verschiedenen Datenarten ab. Google gibt
                  keine genaue Speicherdauer an, da dies von verschiedenen Faktoren abhängt. Bestimmte
                  Daten können Sie selbst löschen, andere werden von Google automatisch oder nach
                  Ablauf einer bestimmten Frist gelöscht.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Ihre Rechte</strong><br />
                  Sie haben das Recht, Ihre Daten bei Google einzusehen, zu berichtigen, zu löschen
                  oder deren Verarbeitung einzuschränken. Sie können auch Widerspruch gegen die
                  Verarbeitung einlegen oder Ihre Daten von Google herunterladen. Diese Rechte können
                  Sie über Ihr Google-Konto ausüben.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Mehr Informationen über den Umgang mit Nutzerdaten finden Sie in der
                  Datenschutzerklärung von Google:
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors underline ml-1"
                  >
                    https://policies.google.com/privacy
                  </a>
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy
                  Framework" (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und
                  den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen
                  in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen
                  verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen
                  hierzu erhalten Sie vom Anbieter unter folgendem Link:
                  <a
                    href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors underline ml-1"
                  >
                    https://www.dataprivacyframework.gov
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl font-serif font-bold mb-4">
                  6. Änderung dieser Datenschutzerklärung
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den
                  aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen
                  in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für
                  Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
                </p>
              </section>

              <section className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
