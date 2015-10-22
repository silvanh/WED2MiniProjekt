# Event Applikation

## Daten Model

```yaml
Event:
	id [string]
	name [string]
	description [string]
	targetGroup [string]
	contributionsDescription [string]
	location:
		name [string]
		street [string]
		zipCode [string]
		city [string]
	times:
		begin [Date]
		end [Date]
	maximalAmoutOfGuests [number]
	guests [Guest[]]

	\begin
	\end

Guest:
	id [string]
	name [string]
	contribution [string]
	comment [string]
	canceled [boolean=false]

```

## Benutzeroberfläche

![Wireframes](wireframes.jpg)

## Testat Kriterien

- Die Applikation funktioniert in Firefox und Chrome (FF 40+, GC 45+).
- Alle User-Stories wurden umgesetzt.
- Die Applikation ist als Client-Server Applikation aufgebaut. Die Client-Applikation basiert auf AngularJS/JavaScript.
- Die Applikation nutzt eine REST-Schnittstelle zum Datenaustausch mit dem Server (Persistenz). Ein Node.js-Server wird von uns vorgegeben, es ist jedoch auch erlaubt, eine eigene Implementation zu erstellen (beliebige Technologie), welche die gleiche REST-Schnittstelle anbietet. Der von uns angebotene Node.js Server darf auch verändert/erweitert werden.
- Zur Kommunikation mit dem Server wird der AngularJS Ajax Service verwendet.
- Zur Verwaltung der Events und Gäste werden Services/Repositories eingesetzt.
- Die Applikation besteht aus mindestens vier verschiedenen Views. Mindestens zwei Views manipulieren Daten (Forms). Zur Navigation zwischen den Views wird die Routing Komponente von Angular eingesetzt.
- Die Benutzeroberfläche besitzt mindestens ein funktionales, minimales Styling. CSS-Frameworks wie Foundation oder Bootstrap dürfen verwendet werden (keine Bootstrap JS!).
- Responsive Design (360px*576px - 1920px*1080).
- Für Formulare wird, wo sinnvoll, HTML5-Formvalidierung + AngularJS Formvalidierung verwendet.
- Für mindestens folgende Aktionen/Komponenten existieren Jasmine-Tests mit gemockten Services:
	- Test der Scope Variablen auf Korrektheit/Vollständigkeit im List-Controller mit mindestens 3 Datensätzen (Events).
	- Create Event View: Test über erfolgreiches Anlegen eines neuen Events
	- Add Guest View: Test über erfolgreiches Hinzufügen eines neuen Gastes
	- Test jeder Repository-Methode/API-Calls mit gemocktem $httpBackend.
