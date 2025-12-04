import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { MarkdownBlock } from "@/components/MarkdownBlock";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const privacyContent = `# Datenschutzerklärung

**Letztes Update:** 04.12.2025

Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten (nachfolgend kurz „Daten") innerhalb unseres Onlineangebotes und der mit ihm verbundenen Webseiten, Funktionen und Inhalte sowie externen Onlinepräsenzen, wie z.B. unser Social Media Profile auf (nachfolgend gemeinsam bezeichnet als „Onlineangebot"). Im Hinblick auf die verwendeten Begrifflichkeiten, wie z.B. „Verarbeitung" oder „Verantwortlicher" verweisen wir auf die Definitionen im Art. 4 der Datenschutzgrundverordnung (DSGVO).

## Verantwortlicher

**Lukas Pfahlsberger**

Bruck 12
6914 Hohenweiler

**Email:** info@noreja.com
**Telefon:** +43 69010149533

**Impressum:** www.noreja.com/impressum

## Maßgebliche Rechtsgrundlagen

Nach Maßgabe des Art. 13 DSGVO teilen wir Ihnen die Rechtsgrundlagen unserer Datenverarbeitungen mit. Sofern die Rechtsgrundlage in der Datenschutzerklärung nicht genannt wird, gilt Folgendes: Die Rechtsgrundlage für die Einholung von Einwilligungen ist Art. 6 Abs. 1 lit. a und Art. 7 DSGVO, die Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer Leistungen und Durchführung vertraglicher Maßnahmen sowie Beantwortung von Anfragen ist Art. 6 Abs. 1 lit. b DSGVO, die Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer rechtlichen Verpflichtungen ist Art. 6 Abs. 1 lit. c DSGVO, und die Rechtsgrundlage für die Verarbeitung zur Wahrung unserer berechtigten Interessen ist Art. 6 Abs. 1 lit. f DSGVO. Für den Fall, dass lebenswichtige Interessen der betroffenen Person oder einer anderen natürlichen Person eine Verarbeitung personenbezogener Daten erforderlich machen, dient Art. 6 Abs. 1 lit. d DSGVO als Rechtsgrundlage.

## Sicherheitsmaßnahmen

Wir treffen nach Maßgabe des Art. 32 DSGVO unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeit und Schwere des Risikos für die Rechte und Freiheiten natürlicher Personen, geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.

Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen Zugangs zu den Daten, als auch des sie betreffenden Zugriffs, der Eingabe, Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, Löschung von Daten und Reaktion auf Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der Entwicklung, bzw. Auswahl von Hardware, Software sowie Verfahren, entsprechend dem Prinzip des Datenschutzes durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen (Art. 25 DSGVO).

## Zusammenarbeit mit Auftragsverarbeitern und Dritten

Sofern wir im Rahmen unserer Verarbeitung Daten gegenüber anderen Personen und Unternehmen (Auftragsverarbeitern oder Dritten) offenbaren, sie an diese übermitteln oder ihnen sonst Zugriff auf die Daten gewähren, erfolgt dies nur auf Grundlage einer gesetzlichen Erlaubnis (z.B. wenn eine Übermittlung der Daten an Dritte, wie an Zahlungsdienstleister, gem. Art. 6 Abs. 1 lit. b DSGVO zur Vertragserfüllung erforderlich ist), Sie eingewilligt haben, eine rechtliche Verpflichtung dies vorsieht oder auf Grundlage unserer berechtigten Interessen (z.B. beim Einsatz von Beauftragten, Webhostern, etc.).

Sofern wir Dritte mit der Verarbeitung von Daten auf Grundlage eines sog. „Auftragsverarbeitungsvertrages" beauftragen, geschieht dies auf Grundlage des Art. 28 DSGVO.

## Übermittlungen in Drittländer

Sofern wir Daten in einem Drittland (d.h. außerhalb der Europäischen Union (EU) oder des Europäischen Wirtschaftsraums (EWR)) verarbeiten oder dies im Rahmen der Inanspruchnahme von Diensten Dritter oder Offenlegung, bzw. Übermittlung von Daten an Dritte geschieht, erfolgt dies nur, wenn es zur Erfüllung unserer (vor)vertraglichen Pflichten, auf Grundlage Ihrer Einwilligung, aufgrund einer rechtlichen Verpflichtung oder auf Grundlage unserer berechtigten Interessen geschieht. Vorbehaltlich gesetzlicher oder vertraglicher Erlaubnisse, verarbeiten oder lassen wir die Daten in einem Drittland nur beim Vorliegen der besonderen Voraussetzungen der Art. 44 ff. DSGVO verarbeiten. D.h. die Verarbeitung erfolgt z.B. auf Grundlage besonderer Garantien, wie der offiziell anerkannten Feststellung eines der EU entsprechenden Datenschutzniveaus (z.B. für die USA durch das „Privacy Shield") oder Beachtung offiziell anerkannter spezieller vertraglicher Verpflichtungen (so genannte „Standardvertragsklauseln").

## Rechte der betroffenen Personen

Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend Art. 15 DSGVO.

Sie haben entsprechend. Art. 16 DSGVO das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.

Sie haben nach Maßgabe des Art. 17 DSGVO das Recht zu verlangen, dass betreffende Daten unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe des Art. 18 DSGVO eine Einschränkung der Verarbeitung der Daten zu verlangen.

Sie haben das Recht zu verlangen, dass die Sie betreffenden Daten, die Sie uns bereitgestellt haben nach Maßgabe des Art. 20 DSGVO zu erhalten und deren Übermittlung an andere Verantwortliche zu fordern.

Sie haben ferner gem. Art. 77 DSGVO das Recht, eine Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen.

## Widerrufsrecht

Sie haben das Recht, erteilte Einwilligungen gem. Art. 7 Abs. 3 DSGVO mit Wirkung für die Zukunft zu widerrufen

## Widerspruchsrecht

Sie können der künftigen Verarbeitung der Sie betreffenden Daten nach Maßgabe des Art. 21 DSGVO jederzeit widersprechen. Der Widerspruch kann insbesondere gegen die Verarbeitung für Zwecke der Direktwerbung erfolgen.

## Cookies und Widerspruchsrecht bei Direktwerbung

Als „Cookies" werden kleine Dateien bezeichnet, die auf Rechnern der Nutzer gespeichert werden. Innerhalb der Cookies können unterschiedliche Angaben gespeichert werden. Ein Cookie dient primär dazu, die Angaben zu einem Nutzer (bzw. dem Gerät auf dem das Cookie gespeichert ist) während oder auch nach seinem Besuch innerhalb eines Onlineangebotes zu speichern. Als temporäre Cookies, bzw. „Session-Cookies" oder „transiente Cookies", werden Cookies bezeichnet, die gelöscht werden, nachdem ein Nutzer ein Onlineangebot verlässt und seinen Browser schließt. In einem solchen Cookie kann z.B. der Inhalt eines Warenkorbs in einem Onlineshop oder ein Login-Status gespeichert werden. Als „permanent" oder „persistent" werden Cookies bezeichnet, die auch nach dem Schließen des Browsers gespeichert bleiben. So kann z.B. der Login-Status gespeichert werden, wenn die Nutzer diese nach mehreren Tagen aufsuchen. Ebenso können in einem solchen Cookie die Interessen der Nutzer gespeichert werden, die für Reichweitenmessung oder Marketingzwecke verwendet werden. Als „Third-Party-Cookie" werden Cookies bezeichnet, die von anderen Anbietern als dem Verantwortlichen, der das Onlineangebot betreibt, angeboten werden (andernfalls, wenn es nur dessen Cookies sind spricht man von „First-Party Cookies").

Wir können temporäre und permanente Cookies einsetzen und klären hierüber im Rahmen unserer Datenschutzerklärung auf.

Falls die Nutzer nicht möchten, dass Cookies auf ihrem Rechner gespeichert werden, werden sie gebeten die entsprechende Option in den Systemeinstellungen ihres Browsers zu deaktivieren. Gespeicherte Cookies können in den Systemeinstellungen des Browsers gelöscht werden. Der Ausschluss von Cookies kann zu Funktionseinschränkungen dieses Onlineangebotes führen.

Ein genereller Widerspruch gegen den Einsatz der zu Zwecken des Onlinemarketing eingesetzten Cookies kann bei einer Vielzahl der Dienste, vor allem im Fall des Trackings, über die US-amerikanische Seite http://www.aboutads.info/choices/ oder die EU-Seite http://www.youronlinechoices.com/ erklärt werden. Des Weiteren kann die Speicherung von Cookies mittels deren Abschaltung in den Einstellungen des Browsers erreicht werden. Bitte beachten Sie, dass dann gegebenenfalls nicht alle Funktionen dieses Onlineangebotes genutzt werden können.

## Löschung von Daten

Die von uns verarbeiteten Daten werden nach Maßgabe der Art. 17 und 18 DSGVO gelöscht oder in ihrer Verarbeitung eingeschränkt. Sofern nicht im Rahmen dieser Datenschutzerklärung ausdrücklich angegeben, werden die bei uns gespeicherten Daten gelöscht, sobald sie für ihre Zweckbestimmung nicht mehr erforderlich sind und der Löschung keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Sofern die Daten nicht gelöscht werden, weil sie für andere und gesetzlich zulässige Zwecke erforderlich sind, wird deren Verarbeitung eingeschränkt. D.h. die Daten werden gesperrt und nicht für andere Zwecke verarbeitet. Das gilt z.B. für Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen.

Nach gesetzlichen Vorgaben in Deutschland, erfolgt die Aufbewahrung insbesondere für 10 Jahre gemäß §§ 147 Abs. 1 AO, 257 Abs. 1 Nr. 1 und 4, Abs. 4 HGB (Bücher, Aufzeichnungen, Lageberichte, Buchungsbelege, Handelsbücher, für Besteuerung relevanter Unterlagen, etc.) und 6 Jahre gemäß § 257 Abs. 1 Nr. 2 und 3, Abs. 4 HGB (Handelsbriefe).

Nach gesetzlichen Vorgaben in Österreich erfolgt die Aufbewahrung insbesondere für 7 J gemäß § 132 Abs. 1 BAO (Buchhaltungsunterlagen, Belege/Rechnungen, Konten, Belege, Geschäftspapiere, Aufstellung der Einnahmen und Ausgaben, etc.), für 22 Jahre im Zusammenhang mit Grundstücken und für 10 Jahre bei Unterlagen im Zusammenhang mit elektronisch erbrachten Leistungen, Telekommunikations-, Rundfunk- und Fernsehleistungen, die an Nichtunternehmer in EU-Mitgliedstaaten erbracht werden und für die der Mini-One-Stop-Shop (MOSS) in Anspruch genommen wird.

## Vertragliche Leistungen

Wir verarbeiten die Daten unserer Vertragspartner und Interessenten sowie anderer Auftraggeber, Kunden, Mandanten, Klienten oder Vertragspartner (einheitlich bezeichnet als „Vertragspartner") entsprechend Art. 6 Abs. 1 lit. b. DSGVO, um ihnen gegenüber unsere vertraglichen oder vorvertraglichen Leistungen zu erbringen. Die hierbei verarbeiteten Daten, die Art, der Umfang und der Zweck und die Erforderlichkeit ihrer Verarbeitung, bestimmen sich nach dem zugrundeliegenden Vertragsverhältnis.

Zu den verarbeiteten Daten gehören die Stammdaten unserer Vertragspartner (z.B., Namen und Adressen), Kontaktdaten (z.B. E-Mailadressen und Telefonnummern) sowie Vertragsdaten (z.B., in Anspruch genommene Leistungen, Vertragsinhalte, vertragliche Kommunikation, Namen von Kontaktpersonen) und Zahlungsdaten (z.B., Bankverbindungen, Zahlungshistorie).

Besondere Kategorien personenbezogener Daten verarbeiten wir grundsätzlich nicht, außer wenn diese Bestandteile einer beauftragten oder vertragsgemäßen Verarbeitung sind

Wir verarbeiten Daten, die zur Begründung und Erfüllung der vertraglichen Leistungen erforderlich sind und weisen auf die Erforderlichkeit ihrer Angabe, sofern diese für die Vertragspartner nicht evident ist, hin. Eine Offenlegung an externe Personen oder Unternehmen erfolgt nur, wenn sie im Rahmen eines Vertrags erforderlich ist. Bei der Verarbeitung der uns im Rahmen eines Auftrags überlassenen Daten, handeln wir entsprechend den Weisungen der Auftraggeber sowie der gesetzlichen Vorgaben.

Im Rahmen der Inanspruchnahme unserer Onlinedienste, können wir die IP-Adresse und den Zeitpunkt der jeweiligen Nutzerhandlung speichern. Die Speicherung erfolgt auf Grundlage unserer berechtigten Interessen, als auch der Interessen der Nutzer am Schutz vor Missbrauch und sonstiger unbefugter Nutzung. Eine Weitergabe dieser Daten an Dritte erfolgt grundsätzlich nicht, außer sie ist zur Verfolgung unserer Ansprüche gem. Art. 6 Abs. 1 lit. f. DSGVO erforderlich oder es besteht hierzu eine gesetzliche Verpflichtung gem. Art. 6 Abs. 1 lit. c. DSGVO.

Die Löschung der Daten erfolgt, wenn die Daten zur Erfüllung vertraglicher oder gesetzlicher Fürsorgepflichten sowie Umgang mit etwaigen Gewährleistungs- und vergleichbaren Pflichten nicht mehr erforderlich ist, wobei die Erforderlichkeit der Aufbewahrung der Daten alle drei Jahre überprüft wird; im Übrigen gelten die gesetzlichen Aufbewahrungspflichten.

## Kommentare und Beiträge

Wenn Nutzer Kommentare oder sonstige Beiträge hinterlassen, können ihre IP-Adressen auf Grundlage unserer berechtigten Interessen im Sinne des Art. 6 Abs. 1 lit. f. DSGVO für 7 Tage gespeichert werden. Das erfolgt zu unserer Sicherheit, falls jemand in Kommentaren und Beiträgen widerrechtliche Inhalte hinterlässt (Beleidigungen, verbotene politische Propaganda, etc.). In diesem Fall können wir selbst für den Kommentar oder Beitrag belangt werden und sind daher an der Identität des Verfassers interessiert.

Des Weiteren behalten wir uns vor, auf Grundlage unserer berechtigten Interessen gem. Art. 6 Abs. 1 lit. f. DSGVO, die Angaben der Nutzer zwecks Spamerkennung zu verarbeiten.

Die im Rahmen der Kommentare und Beiträge angegebenen Daten, werden von uns bis zum Widerspruch der Nutzer dauerhaft gespeichert.

## Akismet Anti-Spam-Prüfung

Unser Onlineangebot nutzt den Dienst „Akismet", der von der Automattic Inc., 60 29th Street #343, San Francisco, CA 94110, USA, angeboten wird. Die Nutzung erfolgt auf Grundlage unserer berechtigten Interessen im Sinne des Art. 6 Abs. 1 lit. f) DSGVO. Mit Hilfe dieses Dienstes werden Kommentare echter Menschen von Spam-Kommentaren unterschieden. Dazu werden alle Kommentarangaben an einen Server in den USA verschickt, wo sie analysiert und für Vergleichszwecke vier Tage lang gespeichert werden. Ist ein Kommentar als Spam eingestuft worden, werden die Daten über diese Zeit hinaus gespeichert. Zu diesen Angaben gehören der eingegebene Name, die Emailadresse, die IP-Adresse, der Kommentarinhalt, der Referrer, Angaben zum verwendeten Browser sowie dem Computersystem und die Zeit des Eintrags.

Nähere Informationen zur Erhebung und Nutzung der Daten durch Akismet finden sich in den Datenschutzhinweisen von Automattic: https://automattic.com/privacy/.

Nutzer können gerne Pseudonyme nutzen, oder auf die Eingabe des Namens oder der Emailadresse verzichten. Sie können die Übertragung der Daten komplett verhindern, indem Sie unser Kommentarsystem nicht nutzen. Das wäre schade, aber leider sehen wir sonst keine Alternativen, die ebenso effektiv arbeiten.

## Kontaktaufnahme

Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail, Telefon oder via sozialer Medien) werden die Angaben des Nutzers zur Bearbeitung der Kontaktanfrage und deren Abwicklung gem. Art. 6 Abs. 1 lit. b) DSGVO verarbeitet. Die Angaben der Nutzer können in einem Customer-Relationship-Management System („CRM System") oder vergleichbarer Anfragenorganisation gespeichert werden.

Wir löschen die Anfragen, sofern diese nicht mehr erforderlich sind. Wir überprüfen die Erforderlichkeit alle zwei Jahre; Ferner gelten die gesetzlichen Archivierungspflichten.

## Newsletter

Mit den nachfolgenden Hinweisen informieren wir Sie über die Inhalte unseres Newsletters sowie das Anmelde-, Versand- und das statistische Auswertungsverfahren sowie Ihre Widerspruchsrechte auf. Indem Sie unseren Newsletter abonnieren, erklären Sie sich mit dem Empfang und den beschriebenen Verfahren einverstanden.

**Inhalt des Newsletters:** Wir versenden Newsletter, E-Mails und weitere elektronische Benachrichtigungen mit werblichen Informationen (nachfolgend „Newsletter") nur mit der Einwilligung der Empfänger oder einer gesetzlichen Erlaubnis. Sofern im Rahmen einer Anmeldung zum Newsletter dessen Inhalte konkret umschrieben werden, sind sie für die Einwilligung der Nutzer maßgeblich. Im Übrigen enthalten unsere Newsletter Informationen zu unseren Leistungen und uns.

**Double-Opt-In und Protokollierung:** Die Anmeldung zu unserem Newsletter erfolgt in einem sog. Double-Opt-In-Verfahren. D.h. Sie erhalten nach der Anmeldung eine E-Mail, in der Sie um die Bestätigung Ihrer Anmeldung gebeten werden. Diese Bestätigung ist notwendig, damit sich niemand mit fremden E-Mailadressen anmelden kann. Die Anmeldungen zum Newsletter werden protokolliert, um den Anmeldeprozess entsprechend den rechtlichen Anforderungen nachweisen zu können. Hierzu gehört die Speicherung des Anmelde- und des Bestätigungszeitpunkts, als auch der IP-Adresse. Ebenso werden die Änderungen Ihrer bei dem Versanddienstleister gespeicherten Daten protokolliert.

**Anmeldedaten:** Um sich für den Newsletter anzumelden, reicht es aus, wenn Sie Ihre E-Mailadresse angeben. Optional bitten wir Sie einen Namen, zwecks persönlicher Ansprache im Newsletters anzugeben.

Der Versand des Newsletters und die mit ihm verbundene Erfolgsmessung erfolgt auf Grundlage einer Einwilligung der Empfänger gem. Art. 6 Abs. 1 lit. a, Art. 7 DSGVO i.V.m § 7 Abs. 2 Nr. 3 UWG bzw. auf Grundlage der gesetzlichen Erlaubnis gem. § 7 Abs. 3 UWG.

Die Protokollierung des Anmeldeverfahrens erfolgt auf Grundlage unserer berechtigten Interessen gem. Art. 6 Abs. 1 lit. f DSGVO. Unser Interesse richtet sich auf den Einsatz eines nutzerfreundlichen sowie sicheren Newslettersystems, das sowohl unseren geschäftlichen Interessen dient, als auch den Erwartungen der Nutzer entspricht und uns ferner den Nachweis von Einwilligungen erlaubt.

**Kündigung/Widerruf** – Sie können den Empfang unseres Newsletters jederzeit kündigen, d.h. Ihre Einwilligungen widerrufen. Einen Link zur Kündigung des Newsletters finden Sie am Ende eines jeden Newsletters. Wir können die ausgetragenen E-Mailadressen bis zu drei Jahren auf Grundlage unserer berechtigten Interessen speichern bevor wir sie löschen, um eine ehemals gegebene Einwilligung nachweisen zu können. Die Verarbeitung dieser Daten wird auf den Zweck einer möglichen Abwehr von Ansprüchen beschränkt. Ein individueller Löschungsantrag ist jederzeit möglich, sofern zugleich das ehemalige Bestehen einer Einwilligung bestätigt wird.

### Newsletter – Erfolgsmessung

Die Newsletter enthalten einen sog. „web-beacon", d.h. eine pixelgroße Datei, die beim Öffnen des Newsletters von unserem Server, bzw. sofern wir einen Versanddienstleister einsetzen, von dessen Server abgerufen wird. Im Rahmen dieses Abrufs werden zunächst technische Informationen, wie Informationen zum Browser und Ihrem System, als auch Ihre IP-Adresse und Zeitpunkt des Abrufs erhoben.

Diese Informationen werden zur technischen Verbesserung der Services anhand der technischen Daten oder der Zielgruppen und ihres Leseverhaltens anhand derer Abruforte (die mit Hilfe der IP-Adresse bestimmbar sind) oder der Zugriffszeiten genutzt. Zu den statistischen Erhebungen gehört ebenfalls die Feststellung, ob die Newsletter geöffnet werden, wann sie geöffnet werden und welche Links geklickt werden. Diese Informationen können aus technischen Gründen zwar den einzelnen Newsletterempfängern zugeordnet werden. Es ist jedoch weder unser Bestreben, noch, sofern eingesetzt, das des Versanddienstleisters, einzelne Nutzer zu beobachten. Die Auswertungen dienen uns viel mehr dazu, die Lesegewohnheiten unserer Nutzer zu erkennen und unsere Inhalte auf sie anzupassen oder unterschiedliche Inhalte entsprechend den Interessen unserer Nutzer zu versenden.

## Hosting (Netlify)

Unsere Website wird bei **Netlify, Inc., 101 2nd Street, Suite 575, San Francisco, CA 94105, USA** gehostet.

Netlify stellt die technische Infrastruktur und Hosting-Dienstleistungen bereit, die für den Betrieb dieser Website erforderlich sind. Dazu gehören unter anderem Rechenkapazität, Speicherplatz, Sicherheitsfunktionen sowie die Auslieferung der Website über ein globales Content Delivery Network (CDN).

Im Rahmen der Bereitstellung dieser Dienste verarbeitet Netlify insbesondere folgende Daten:

- IP-Adresse des aufrufenden Endgeräts  
- Datum und Uhrzeit des Zugriffs  
- aufgerufene URLs und Dateien  
- Referrer-URL  
- Browsertyp, Version und Betriebssystem  
- Server- und Diagnosedaten (Logfiles), ggf. anonymisiert

Die Verarbeitung dieser Daten erfolgt zum Zweck der technischen Auslieferung der Website, zur Sicherstellung eines stabilen und sicheren Betriebs sowie zur Fehleranalyse.

**Rechtsgrundlage:**  
Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren, performanten und störungsfreien Bereitstellung unseres Onlineangebots).  
Sofern im Rahmen einzelner Funktionen zusätzliche Tools eingesetzt werden, die Cookies oder Tracking-Technologien verwenden, erfolgt dies ausschließlich auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO.

**Datenübermittlung in die USA:**  
Netlify verarbeitet Daten auch in den USA. Die Übermittlung erfolgt auf Grundlage von Art. 46 DSGVO (insbesondere EU-Standardvertragsklauseln) sowie zusätzlicher technischer und organisatorischer Schutzmaßnahmen, um ein angemessenes Datenschutzniveau zu gewährleisten.

Weitere Informationen finden Sie in der Datenschutzrichtlinie von Netlify:  
https://www.netlify.com/privacy/

## Google Tag Manager

Wir setzen den Google Tag Manager ein. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Der Google Tag Manager ist ein Tool, mit dessen Hilfe wir Tracking- oder Statistik-Tools und andere Technologien auf unserer Website einbinden können. Der Google Tag Manager selbst erstellt keine Nutzerprofile, speichert keine Cookies und nimmt keine eigenständigen Analysen vor. Er dient lediglich der Verwaltung und Ausspielung der über ihn eingebundenen Tools. Der Google Tag Manager erfasst jedoch Ihre IP-Adresse, die auch an das Mutterunternehmen von Google in die Vereinigten Staaten übertragen werden kann. Der Einsatz des Google Tag Managers erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an einer schnellen und unkomplizierten Einbindung und Verwaltung verschiedener Tools auf seiner Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar. Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework" (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active

## Google Analytics

Wir setzen auf Grundlage unserer berechtigten Interessen (d.h. Interesse an der Analyse, Optimierung und wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f. DSGVO) Google Analytics, einen Webanalysedienst der Google LLC („Google") ein. Google verwendet Cookies. Die durch das Cookie erzeugten Informationen über Benutzung des Onlineangebotes durch die Nutzer werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.

Google ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine Garantie, das europäische Datenschutzrecht einzuhalten (https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active).

Google wird diese Informationen in unserem Auftrag benutzen, um die Nutzung unseres Onlineangebotes durch die Nutzer auszuwerten, um Reports über die Aktivitäten innerhalb dieses Onlineangebotes zusammenzustellen und um weitere, mit der Nutzung dieses Onlineangebotes und der Internetnutzung verbundene Dienstleistungen, uns gegenüber zu erbringen. Dabei können aus den verarbeiteten Daten pseudonyme Nutzungsprofile der Nutzer erstellt werden.

Wir setzen Google Analytics nur mit aktivierter IP-Anonymisierung ein. Das bedeutet, die IP-Adresse der Nutzer wird von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraums gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt.

Die von dem Browser des Nutzers übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt. Die Nutzer können die Speicherung der Cookies durch eine entsprechende Einstellung ihrer Browser-Software verhindern; die Nutzer können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf ihre Nutzung des Onlineangebotes bezogenen Daten an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter folgendem Link verfügbare Browser-Plugin herunterladen und installieren: http://tools.google.com/dlpage/gaoptout?hl=de.

Die personenbezogenen Daten der Nutzer werden nach 14 Monaten gelöscht oder anonymisiert.

Weitere Informationen zur Datennutzung durch Google, Einstellungs- und Widerspruchsmöglichkeiten, erfahren Sie in der Datenschutzerklärung von Google (https://policies.google.com/technologies/ads) sowie in den Einstellungen für die Darstellung von Werbeeinblendungen durch Google (https://adssettings.google.com/authenticated).

Alternativ zum Browser-Add-On oder innerhalb von Browsern auf mobilen Geräten, klicken Sie bitte diesen Link, um die Erfassung durch Google Analytics innerhalb dieser Website zukünftig zu verhindern:

**Analytics-Opt-Out**

Dabei wird ein Opt-Out-Cookie auf Ihrem Gerät abgelegt. Löschen Sie Ihre Cookies, müssen Sie diesen Link erneut klicken.

## Clarity

Diese Website nutzt Clarity. Anbieter ist die Microsoft Ireland Operations Limited, One Microsoft Place, South County Business Park, Leopardstown, Dublin 18, Irland, https://docs.microsoft.com/en-us/clarity/ (im Folgenden „Clarity"). Clarity ist ein Werkzeug zur Analyse des Nutzerverhaltens auf dieser Website. Hierbei erfasst Clarity insbesondere Mausbewegungen und erstellt eine grafische Darstellung darüber, auf welchen Teil der Website Nutzer besonders häufig scrollen (Heatmaps). Clarity kann ferner Sitzungen aufzeichnen, sodass wir die Seitennutzung in Form von Videos ansehen können. Ferner erhalten wir Angaben über das allgemeine Nutzerverhalten innerhalb unserer Website. Clarity verwendet Technologien, die die Wiedererkennung des Nutzers zum Zwecke der Analyse des Nutzerverhaltens ermöglichen (z. B. Cookies oder Einsatz von Device-Fingerprinting). Ihre personenbezogenen Daten werden auf den Servern von Microsoft (Microsoft Azure Cloud Service) in den USA gespeichert. Soweit eine Einwilligung (Consent) eingeholt wurde, erfolgt der Einsatz des o. g. Dienstes ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Soweit keine Einwilligung eingeholt wurde, erfolgt die Verwendung dieses Dienstes auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO; der Websitebetreiber hat ein berechtigtes Interesse an einer effektiven Nutzeranalyse. Weitere Details zum Datenschutz von Clarity finden Sie hier: https://docs.microsoft.com/en-us/clarity/faq. Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework" (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt0000000KzNaAAK&status=Active

## Onlinepräsenzen in sozialen Medien

Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und Plattformen, um mit den dort aktiven Kunden, Interessenten und Nutzern kommunizieren und sie dort über unsere Leistungen informieren zu können.

Wir weisen darauf hin, dass dabei Daten der Nutzer außerhalb des Raumes der Europäischen Union verarbeitet werden können. Hierdurch können sich für die Nutzer Risiken ergeben, weil so z.B. die Durchsetzung der Rechte der Nutzer erschwert werden könnte. Im Hinblick auf US-Anbieter die unter dem Privacy-Shield zertifiziert sind, weisen wir darauf hin, dass sie sich damit verpflichten, die Datenschutzstandards der EU einzuhalten.

Ferner werden die Daten der Nutzer im Regelfall für Marktforschungs- und Werbezwecke verarbeitet. So können z.B. aus dem Nutzungsverhalten und sich daraus ergebenden Interessen der Nutzer Nutzungsprofile erstellt werden. Die Nutzungsprofile können wiederum verwendet werden, um z.B. Werbeanzeigen innerhalb und außerhalb der Plattformen zu schalten, die mutmaßlich den Interessen der Nutzer entsprechen. Zu diesen Zwecken werden im Regelfall Cookies auf den Rechnern der Nutzer gespeichert, in denen das Nutzungsverhalten und die Interessen der Nutzer gespeichert werden. Ferner können in den Nutzungsprofilen auch Daten unabhängig der von den Nutzern verwendeten Geräte gespeichert werden (insbesondere wenn die Nutzer Mitglieder der jeweiligen Plattformen sind und bei diesen eingeloggt sind).

Die Verarbeitung der personenbezogenen Daten der Nutzer erfolgt auf Grundlage unserer berechtigten Interessen an einer effektiven Information der Nutzer und Kommunikation mit den Nutzern gem. Art. 6 Abs. 1 lit. f. DSGVO. Falls die Nutzer von den jeweiligen Anbietern der Plattformen um eine Einwilligung in die vorbeschriebene Datenverarbeitung gebeten werden, ist die Rechtsgrundlage der Verarbeitung Art. 6 Abs. 1 lit. a., Art. 7 DSGVO.

Für eine detaillierte Darstellung der jeweiligen Verarbeitungen und der Widerspruchsmöglichkeiten (Opt-Out), verweisen wir auf die nachfolgend verlinkten Angaben der Anbieter.

Auch im Fall von Auskunftsanfragen und der Geltendmachung von Nutzerrechten, weisen wir darauf hin, dass diese am effektivsten bei den Anbietern geltend gemacht werden können. Nur die Anbieter haben jeweils Zugriff auf die Daten der Nutzer und können direkt entsprechende Maßnahmen ergreifen und Auskünfte geben. Sollten Sie dennoch Hilfe benötigen, dann können Sie sich an uns wenden.

- **Facebook** (Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland), Facebook-Seiten auf Grundlage einer Vereinbarung über gemeinsame Verarbeitung personenbezogener Daten – Datenschutzerklärung: https://www.facebook.com/about/privacy/, Opt-Out: https://www.facebook.com/settings?tab=ads und http://www.youronlinechoices.com, Privacy Shield: https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active.
- **Google/ YouTube** (Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA) – Datenschutzerklärung: https://policies.google.com/privacy, Opt-Out: https://adssettings.google.com/authenticated, Privacy Shield: https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active.
- **Instagram** (Instagram Inc., 1601 Willow Road, Menlo Park, CA, 94025, USA) – Datenschutzerklärung/ Opt-Out: http://instagram.com/about/legal/privacy/.
- **Twitter** (Twitter Inc., 1355 Market Street, Suite 900, San Francisco, CA 94103, USA) – Datenschutzerklärung: https://twitter.com/de/privacy, Opt-Out: https://twitter.com/personalization, Privacy Shield: https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&status=Active.
- **Pinterest** (Pinterest Inc., 635 High Street, Palo Alto, CA, 94301, USA) – Datenschutzerklärung/ Opt-Out: https://about.pinterest.com/de/privacy-policy.
- **LinkedIn** (LinkedIn Ireland Unlimited Company Wilton Place, Dublin 2, Irland) – Datenschutzerklärung https://www.linkedin.com/legal/privacy-policy , Opt-Out: https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out, Privacy Shield: https://www.privacyshield.gov/participant?id=a2zt0000000L0UZAA0&status=Active.
- **Xing** (XING AG, Dammtorstraße 29-32, 20354 Hamburg, Deutschland) – Datenschutzerklärung/ Opt-Out: https://privacy.xing.com/de/datenschutzerklaerung.

## Einbindung von Diensten und Inhalten Dritter

Wir setzen innerhalb unseres Onlineangebotes auf Grundlage unserer berechtigten Interessen (d.h. Interesse an der Analyse, Optimierung und wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f. DSGVO) Inhalts- oder Serviceangebote von Drittanbietern ein, um deren Inhalte und Services, wie z.B. Videos oder Schriftarten einzubinden (nachfolgend einheitlich bezeichnet als "Inhalte").

Dies setzt immer voraus, dass die Drittanbieter dieser Inhalte, die IP-Adresse der Nutzer wahrnehmen, da sie ohne die IP-Adresse die Inhalte nicht an deren Browser senden könnten. Die IP-Adresse ist damit für die Darstellung dieser Inhalte erforderlich. Wir bemühen uns nur solche Inhalte zu verwenden, deren jeweilige Anbieter die IP-Adresse lediglich zur Auslieferung der Inhalte verwenden. Drittanbieter können ferner so genannte Pixel-Tags (unsichtbare Grafiken, auch als „Web Beacons" bezeichnet) für statistische oder Marketingzwecke verwenden. Durch die „Pixel-Tags" können Informationen, wie der Besucherverkehr auf den Seiten dieser Website ausgewertet werden. Die pseudonymen Informationen können ferner in Cookies auf dem Gerät der Nutzer gespeichert werden und unter anderem technische Informationen zum Browser und Betriebssystem, verweisende Webseiten, Besuchszeit sowie weitere Angaben zur Nutzung unseres Onlineangebotes enthalten, als auch mit solchen Informationen aus anderen Quellen verbunden werden.

### Youtube

Wir binden die Videos der Plattform "YouTube" des Anbieters Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA, ein. Datenschutzerklärung: https://www.google.com/policies/privacy/, Opt-Out: https://adssettings.google.com/authenticated.

### Google Fonts

Wir binden die Schriftarten („Google Fonts") des Anbieters Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA, ein. Datenschutzerklärung: https://www.google.com/policies/privacy/, Opt-Out: https://adssettings.google.com/authenticated.

### Google ReCaptcha

Wir binden die Funktion zur Erkennung von Bots, z.B. bei Eingaben in Onlineformularen („ReCaptcha") des Anbieters Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA, ein. Datenschutzerklärung: https://www.google.com/policies/privacy/, Opt-Out: https://adssettings.google.com/authenticated.

### Google Maps

Wir binden die Landkarten des Dienstes "Google Maps" des Anbieters Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA, ein. Zu den verarbeiteten Daten können insbesondere IP-Adressen und Standortdaten der Nutzer gehören, die jedoch nicht ohne deren Einwilligung (im Regelfall im Rahmen der Einstellungen ihrer Mobilgeräte vollzogen), erhoben werden. Die Daten können in den USA verarbeitet werden. Datenschutzerklärung: https://www.google.com/policies/privacy/, Opt-Out: https://adssettings.google.com/authenticated.

## Verwendung von Facebook Social Plugins

Wir nutzen auf Grundlage unserer berechtigten Interessen (d.h. Interesse an der Analyse, Optimierung und wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f. DSGVO) Social Plugins („Plugins") des sozialen Netzwerkes facebook.com, welches von der Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland betrieben wird („Facebook"). Die Plugins können Interaktionselemente oder Inhalte (z.B. Videos, Grafiken oder Textbeiträge) darstellen und sind an einem der Facebook Logos erkennbar (weißes „f" auf blauer Kachel, den Begriffen „Like", „Gefällt mir" oder einem „Daumen hoch"-Zeichen) oder sind mit dem Zusatz „Facebook Social Plugin" gekennzeichnet. Die Liste und das Aussehen der Facebook Social Plugins kann hier eingesehen werden: https://developers.facebook.com/docs/plugins/.

Facebook ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine Garantie, das europäische Datenschutzrecht einzuhalten (https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active).

Wenn ein Nutzer eine Funktion dieses Onlineangebotes aufruft, die ein solches Plugin enthält, baut sein Gerät eine direkte Verbindung mit den Servern von Facebook auf. Der Inhalt des Plugins wird von Facebook direkt an das Gerät des Nutzers übermittelt und von diesem in das Onlineangebot eingebunden. Dabei können aus den verarbeiteten Daten Nutzungsprofile der Nutzer erstellt werden. Wir haben daher keinen Einfluss auf den Umfang der Daten, die Facebook mit Hilfe dieses Plugins erhebt und informiert die Nutzer daher entsprechend unserem Kenntnisstand.

Durch die Einbindung der Plugins erhält Facebook die Information, dass ein Nutzer die entsprechende Seite des Onlineangebotes aufgerufen hat. Ist der Nutzer bei Facebook eingeloggt, kann Facebook den Besuch seinem Facebook-Konto zuordnen. Wenn Nutzer mit den Plugins interagieren, zum Beispiel den Like Button betätigen oder einen Kommentar abgeben, wird die entsprechende Information von Ihrem Gerät direkt an Facebook übermittelt und dort gespeichert. Falls ein Nutzer kein Mitglied von Facebook ist, besteht trotzdem die Möglichkeit, dass Facebook seine IP-Adresse in Erfahrung bringt und speichert. Laut Facebook wird in Deutschland nur eine anonymisierte IP-Adresse gespeichert.

Zweck und Umfang der Datenerhebung und die weitere Verarbeitung und Nutzung der Daten durch Facebook sowie die diesbezüglichen Rechte und Einstellungsmöglichkeiten zum Schutz der Privatsphäre der Nutzer, können diese den Datenschutzhinweisen von Facebook entnehmen: https://www.facebook.com/about/privacy/.

Wenn ein Nutzer Facebookmitglied ist und nicht möchte, dass Facebook über dieses Onlineangebot Daten über ihn sammelt und mit seinen bei Facebook gespeicherten Mitgliedsdaten verknüpft, muss er sich vor der Nutzung unseres Onlineangebotes bei Facebook ausloggen und seine Cookies löschen. Weitere Einstellungen und Widersprüche zur Nutzung von Daten für Werbezwecke, sind innerhalb der Facebook-Profileinstellungen möglich: https://www.facebook.com/settings?tab=ads oder über die US-amerikanische Seite http://www.aboutads.info/choices/ oder die EU-Seite http://www.youronlinechoices.com/. Die Einstellungen erfolgen plattformunabhängig, d.h. sie werden für alle Geräte, wie Desktopcomputer oder mobile Geräte übernommen.

## Twitter

Innerhalb unseres Onlineangebotes können Funktionen und Inhalte des Dienstes Twitter, angeboten durch die Twitter Inc., 1355 Market Street, Suite 900, San Francisco, CA 94103, USA, eingebunden werden. Hierzu können z.B. Inhalte wie Bilder, Videos oder Texte und Schaltflächen gehören, mit denen Nutzer Ihr Gefallen betreffend die Inhalte kundtun, den Verfassern der Inhalte oder unsere Beiträge abonnieren können. Sofern die Nutzer Mitglieder der Plattform Twitter sind, kann Twitter den Aufruf der o.g. Inhalte und Funktionen den dortigen Profilen der Nutzer zuordnen. Twitter ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine Garantie, das europäische Datenschutzrecht einzuhalten (https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&status=Active). Datenschutzerklärung: https://twitter.com/de/privacy, Opt-Out: https://twitter.com/personalization.

## Shariff-Sharingfunktionen

Wir verwenden die datenschutzsicheren „Shariff"-Schaltflächen. „Shariff" wurde entwickelt, um mehr Privatsphäre im Netz zu ermöglichen und die üblichen „Share"-Buttons der sozialen Netzwerke zu ersetzen. Dabei stellt nicht der Browser der Nutzer, sondern der Server auf dem sich dieses Onlineangebot befindet, eine Verbindung mit dem Server der jeweiligen Social-Media-Plattformen her und fragt z.B. die Anzahl von Likes, etc. ab. Der Nutzer bleibt hierbei anonym. Mehr Informationen zum Shariff-Projekt finden Sie bei den Entwicklern von dem Magazin c't: www.ct.de/

## Hubspot

Wir verwenden auf unserer Website HubSpot, ein Tool für digitales Marketing. Dienstanbieter ist das amerikanische Unternehmen HubSpot, Inc., 25 First Street, 2nd Floor Cambridge, MA, USA. Das Unternehmen hat unter anderem auch in Irland einen Firmensitz mit der Adresse 1 Sir John Rogerson's Quay, Dublin 2, Irland.

HubSpot verarbeitet Daten von Ihnen u.a. auch in den USA. HubSpot ist aktiver Teilnehmer des EU-US Data Privacy Frameworks, wodurch der korrekte und sichere Datentransfer personenbezogener Daten von EU-Bürgern in die USA geregelt wird. Mehr Informationen dazu finden Sie auf https://commission.europa.eu/document/fa09cbad-dd7d-4684-ae60-be03fcb0fddf_en.

Zudem verwendet HubSpot sogenannte Standardvertragsklauseln (= Art. 46. Abs. 2 und 3 DSGVO). Standardvertragsklauseln (Standard Contractual Clauses – SCC) sind von der EU-Kommission bereitgestellte Mustervorlagen und sollen sicherstellen, dass Ihre Daten auch dann den europäischen Datenschutzstandards entsprechen, wenn diese in Drittländer (wie beispielsweise in die USA) überliefert und dort gespeichert werden. Durch das EU-US Data Privacy Framework und durch die Standardvertragsklauseln verpflichtet sich HubSpot, bei der Verarbeitung Ihrer relevanten Daten, das europäische Datenschutzniveau einzuhalten, selbst wenn die Daten in den USA gespeichert, verarbeitet und verwaltet werden. Diese Klauseln basieren auf einem Durchführungsbeschluss der EU-Kommission. Sie finden den Beschluss und die entsprechenden Standardvertragsklauseln u.a. hier: https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de

Die Datenverarbeitungsbedingung (Data Processing Agreement), welche den Standardvertragsklauseln entspricht, finden Sie unter https://legal.hubspot.com/dpa.

Mehr über die Daten, die durch die Verwendung von HubSpot verarbeitet werden, erfahren Sie in der Privacy Policy auf https://legal.hubspot.com/de/privacy-policy.`;

export default function PrivacyPolicy() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useLanguage();

  const gradientStyle = {
    background: `
      linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--noreja-main) / 0.16) 40%, hsl(var(--noreja-secondary) / 0.15) 80%, hsl(var(--background)) 100%),
      radial-gradient(ellipse 1000px 700px at 70% 20%, hsl(var(--noreja-secondary) / 0.14) 0%, transparent 60%)
    `
  } as const;

  return (
    <div className="min-h-screen relative overflow-hidden" style={gradientStyle}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-noreja-main/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-24">
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground">
              {t.footer.legal.privacy}
            </h1>
            <p className="text-xl text-muted-foreground">
              Informationen zum Schutz Ihrer personenbezogenen Daten
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="pb-20">
        <div className="w-full max-w-4xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card/50 border border-border/40 rounded-lg p-8"
          >
            <MarkdownBlock 
              content={privacyContent}
              className="text-foreground"
            />
          </motion.div>
        </div>
      </section>
      </div>
    </div>
  );
}
