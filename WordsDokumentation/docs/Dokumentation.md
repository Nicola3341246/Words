# Dokumentation

:::info
Das ist die Dokumentation unseres [Projekts](https://github.com/Nicola3341246/Words), welches nach der Projektmethode IPERKA umgesetzt wurde. Hier wird unser Ablauf und die Vorgehensweise des Projekts dokumentiert.

:::

### Inhaltsverzeichnis

- [Dokumentation](#dokumentation)
    - [Inhaltsverzeichnis](#inhaltsverzeichnis)
  - [IPERKA](#iperka)
    - [Informieren](#informieren)
    - [Planen](#planen)
    - [Entscheiden](#entscheiden)
    - [Realisieren](#realisieren)
    - [Kontrollieren](#kontrollieren)
    - [Auswerten](#auswerten)
  - [Einleitung](#einleitung)
  - [Technologien](#technologien)
  - [Quellen](#quellen)
  - [Lokale Entwicklungsumgebung](#lokale-entwicklungsumgebung)
    - [Lokale Entwicklungsumgebung aufsetzen](#lokale-entwicklungsumgebung-aufsetzen)
      - [Vorbereitung](#vorbereitung)
      - [Dependencies mit NPM installieren](#dependencies-mit-npm-installieren)
      - [Projekt starten](#projekt-starten)
  - [Anforderungen](#anforderungen)
  - [Ausführung](#ausführung)
    - [Testumgebungen](#testumgebungen)
      - [Manuell (Per Hand):](#manuell-per-hand)
  - [Testfälle](#testfälle)
    - [Testprotokoll](#testprotokoll)
    - [Testbericht](#testbericht)
  - [Projektauswertung](#projektauswertung)

## IPERKA

### Informieren

- [Einleitung](#einleitung)
- [Technologien](#technologien)
- [Quellen](#quellen)
- [Anforderungen](#anforderungen)

### Planen

- [Testfälle](#testfälle)
- [Arbeitspakete](#arbeitspakete)

### Entscheiden

- [Technologien](#technologien)

### Realisieren

- [Ausführung](#ausführung)

### Kontrollieren

- [Testfälle](#testfälle)
- [Tesprotokoll](#testprotokoll)
- [Testbericht](#testbericht)

### Auswerten

- [Projektauswertung](#projektauswertung)

## Einleitung

Für dieses Projekt haben wir uns dafür entschieden, dass wir einen Wordle-Klon, wo man wie bei Wordle ein buchstabiges Wort erraten kann. Man kann es auf Englisch und Deutsch spielen und man muss sich nicht um die Anzahl Versuche kümmern, da man so viel raten kann wie man will. Damit man trotzdem sein bestes gibt kann man sich einloggen und sich durch das Leaderboard mit anderen Nutzern messen. Wir haben auch einen Darkmode implementiert, damit man zu jeder Zeit das Spiel angenehm spielen kann.

## Technologien

Für TaskHub verwenden wir folgende Technologien:

- [JavaScript(jsx)](https://www.javascript.com/)
- [TypeScript(tsx)](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Docusaurus](https://docusaurus.io/)
- [Git](https://git-scm.com/doc)
- [GitHub](https://docs.github.com/en)
- [SvelteKit](https://kit.svelte.dev/)
- ### Hosts:
- [Supabase für das Hosten der Datenbank](https://supabase.com/)
- [Netlify für das Hosten der Website der Dokumentation](https://www.netlify.com/)

## Quellen

- [Docusaurus Dokumentation](https://docusaurus.io/docs)
- [SvelteKit Dokumentation](https://kit.svelte.dev/docs/introduction)
- [Supabase mit SvelteKit Dokumentation](https://supabase.com/docs/guides/getting-started/quickstarts/sveltekit)
- [Englische Wörterliste](https://gist.github.com/scholtes/94f3c0303ba6a7768b47583aff36654d)
- [Deutsche Wörterliste nur 5 buchstabige](https://gist.githubusercontent.com/MarvinJWendt/2f4f4154b8ae218600eb091a5706b5f4/raw/36b70dd6be330aa61cd4d4cdfda6234dcb0b8784/wordlist-german.txt)

## Lokale Entwicklungsumgebung

### Lokale Entwicklungsumgebung aufsetzen

#### Vorbereitung

Für die Realisierung dieses Projekts haben wir Visual Studio Code mit wenigen Erweiterungen, und zwar ESLint, Prettier und Live Share verwendet. Bei der Live Share-Erweiterung haben wir keine speziellen Einstellungen vorgenommen, wobei wir bei der Erweiterung Prettier und ESLint eine eigene Konfiguration erstellt haben, um unsere eigenen Code-Konventionen zu erzwingen. Diese Einstellungen werden automatisch übernommen, insofern man die eine Erweiterung installiert hat und die Entwicklungsumgebung aufgesetzt hat.

Um die lokale Entwicklungsumgebung aufzusetzen, muss man sich zuerst eine Kopie vom Repository, von der [offiziellen Quelle](https://github.com/RelxOff/TaskHub) holen.

Dies kann man tun, indem man eine eigene Kopie von dem Repository erstellt (forkt), damit man später seine Änderungen auch bei GitHub pushen kann, auch wenn man kein Contributor ist.

_Dadurch kann man auch die eigenen Änderungen im offiziellen Repository eingbringen, indem man eine Pull Request erstellt._

Wenn das Repository erfolgreich geforkt wurde, muss man das Repository klonen und in dessen Verzeichnis wechseln.

```shell
git clone https://github.com/[deinBenutzername]/TaskHub.git
cd Taskhub/
```

#### Dependencies mit NPM installieren

:::caution
Für diesen Schritt ist es notwendig, die node.js-Runtime installiert zu haben. [Download von node.js](https://nodejs.org/de/)
:::

Nachdem man das Projekt geklont hat, sollte man alle Dependencies installieren. Dabei muss man in das entsprechende Verzeichnis wechseln und die Abhängigkeiten installieren.

```bash
§cd TaskHub/ #Falls man noch nicht im richtigen Verzeichnis ist
npm i
cd ..
```

#### Projekt starten

:::caution
Für diesen Schritt ist es notwendig, die [Dependencies installiert](#Dependencies-mit-NPM-installieren) zu haben.
:::

```bash
cd TaskHub/ # Falls man noch nicht im richtigen Verzeichnis ist
npm run start
```

Nun wurde die Applikation erfolgreich gestartet und kann unter http://localhost:5713 erreicht werden.

:::caution

Für dieses Projekt muss man selber das Backend starten und hosten, da wir es nicht machen. Das heisst man muss alle Dependencies installieren also wie folgt:

```bash
npm i
npm i jsonwebtoken
npm run dev
```

Falls das Backend nicht auf http://localhost:8080/ gehostet wird muss man dies im Code umändern.

:::

## Anforderungen


| Anf.-Nr. | Muss/<br />Kann | funk./<br />qual. | Beschreibung |
| :--------- | :---------------- | ------------------- | :------------- |
| 1.       | Muss            | funk.             | Das Spiel soll ein Login haben |
| 1.       | Muss            | funk.             | Das Spiel soll drei Unterseiten haben, eine Startseite, eine Spielseite und eine Seite für Sprach- und Designeinstellungen. |
| 1.       | Muss            | funk.             | Auf der Startseite, soll der Benutzer das Spiel starten können oder auf die Einstellungen wechseln können |
| 1.       | Muss            | funk.             | In den Einstellungen soll der Benutzer die Sprache des Spiels ändern können |
| 1.       | Muss            | funk.             | In den Einstellungen soll der Benutzer einen dark und light Modus einstellen können |
| 1.       | Muss            | funk.             | Das Spiel soll auf englisch und auf deutsch gespielt werden können |
| 1.       | Muss            | funk.             | Wenn der Benutzer auf der Startseite das Spiel startet hat er unendliche Rateversuche |
| 1.       | Muss            | funk.             | Der Spieler soll in Felder schreiben können, um das Wort zu erraten |
| 1.       | Muss            | funk.             | Wenn der Spieler ein Buchstaben richtig hat, soll dieser gelb angezeigt werden |
| 1.       | Muss            | funk.             | Wenn der Spieler einen Buchstaben richtig hat und er an der richtigen Stelle staht, soll er grün angezeigt werden |
| 1.       | Muss            | funk.             | Die Ratezeit soll gemessen und in einer Rangliste eingetragen werden |
| 1.       | Muss            | funk.             | Von jedem Spieler wird die Ratezeit in eine Rangliste eingetragen |
| 1.       | Muss            | funk.             | Der Spieler soll sich die Rangliste auf der Startseite anschauen können |
| 1.       | Muss            | funk.             | Wenn der Spieler das Wort richtig erraten hat, soll er das Spiel neu starten können |

:::info
1x Arbeitspaket = 45 Minuten (eine Schullektion) <br />
1x Sitzung = 5x Arbeitspakete (ein Halbtag) <br />
Arbeitspakete \* Sitzungen \* Gruppenmitglieder<br />

16 Arbeitspakete für das Portfolio, welches jedes Gruppenmitglieder in der Freizeit erstellen muss<br />

5 \* 6 \* 4 + 16 = 136 Arbeitpakete
:::


| Nr. | Frist      | Beschreibung                                           | Zeit in Arbeitspaketen (geplant) |
| ----- | ------------ | -------------------------------------------------------- | ---------------------------------- |
| 1   | 14.03.2024 | Informieren (von IPERKA)                               | 20                               |
| 2   | 21.03.2024 | Planen und Entscheiden (von IPERKA)                    | 18                               |
| 3   | 21.03.2024 | GitHub Repository aufsetzen                            | 2                                |
| 3   | 28.03.2024 | Realisieren (von IPERKA) der Anforderungen Nr. 1 - 4   |                                  |
| 4   | 04.04.2024 | Realisieren (von IPERKA) der Anforderungen Nr. 5 - 10  |                                  |
| 5   | 25.04.2024 | Realisieren (von IPERKA) der Anforderungen Nr. 10 - 15 |                                  |
| 6   | 25.04.2024 | Realisieren (von IPERKA) der Anforderungen Nr. 15 - 21 |                                  |
| 7   | 02.05.2024 | Kontrollieren (von IPERKA)                             | 10                               |
| 8   | 02.05.2024 | Auswerten (von IPERKA)                                 | 10                               |
| 9   | 02.05.2024 | Portfolioeintrag fertigstellen                         | 16                               |

## Ausführung


| Nr. | Frist      | Bemerkung                                                                                                                                                                                                                                                                                                                                                                 | Zeit (geplant) | Zeit (effektiv) |
| :---- | :----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ----------------- |
| 1   | 09.11.2023 | Wir hatten schnell sehr viele gute Ideen, aber hatten Mühe uns zu einigen. Letztendlich konnten wir uns aber noch im Zeitrahmen einigen.                                                                                                                                                                                                                                 | 10             | 10              |
| 2   | 16.11.2023 | Wir haben die Planung erstellt und die wichtigen Entscheidungen getroffen. Wir hatten Probleme damit uns bei den Technologien zu einigen, da zwei Gruppenmitglieder an der Machbarkeit gezweifelt haben. Um uns zu einigen, haben wir das Problem in kleine Teile aufgeteilt und alle haben erkannt, dass es machbar ist. Beim Aufsetzen des Repos gab es keine Probleme. | 20             | 18              |
| 3.  | 23.11.2023 | Wir waren sogar ein wenig weiter als geplant, aber einer von uns war nicht da und irgendwie hat npm i nicht funktioniert wie es sollte und wir haben, nachdem das Projekt nicht richtig funktioniert, haben wir es neu aufgesetzt.                                                                                                                                        | 20             | 22              |
| 4.  | 30.11.2023 | Wir haben das Frontend realisiert mit den verschiedenen Unterseiten, aber nich nicht ganz vollständig                                                                                                                                                                                                                                                                    | 20             | 24              |
| 5.  | 07.12.2023 | Wir haben das Backend umgesetzt und am Ende gemrekt, dass man noch mehr Sachen braucht um Daten zu erstellen.                                                                                                                                                                                                                                                             | 20             | 30              |
| 6.  | 14.12.2023 | Wir haben die letzten Unterseiten erstellt und die API-Calls implementiert und die letzten Denkfehler und noch nicht fertigen API-Calls gemacht.                                                                                                                                                                                                                          | 20             | 36              |
| 7.  | 21.12.2023 | Wir haben die Testfälle durchgeführt und diese auch direkt ausgewertet, aber wir haben auch unser Portfolio geschrieben.                                                                                                                                                                                                                                                | 36             | 36              |

### Testumgebungen

Wir verwenden für alle Testfälle eine Testumgebung:

#### Manuell (Per Hand):

**Betriebssystem:**

Der Browser, mit dem wir die Tests in dem wir die Tests manuell testen, wird auf Microsoft Widnows 10 (**22H2** **_Build: 19045.3693_**) ausgeführt.

**Browser:**

Für den Browser verwenden wir die neuste Version von Mozilla Firefox (120).

## Testfälle


| Testf.-Nr. | Anforderung | Voraussetzung            | Testumgebung | Eingabe | Erw. Ausgabe |
| ------------ | ------------- | -------------------------- | -------------- | --------- | -------------- |
| 1.0.1      | 1           | Webapplikation gestartet | Per Hand     |         |              |

### Testprotokoll

:::info

**OK** = Dieser Testfall wurde erfolgreich getestet.

**NOK** = Dieses Testfall konnte nicht (erfolgreich) getestet werden.

:::


| Test-Nr | Bericht | Tester                                             |
| --------- | --------- | ---------------------------------------------------- |
| 1.1     | OK      | @titepasile , @Nicola3341246, @sanqro und @RelxOff |

### Testbericht

Es gehen sehr viel Testfälle nicht, da manchmal nur der Teil für das Backend existiert und daher kann das Projekt so nicht dem Kunden übergeben werden.

## Projektauswertung

Am Anfang des Projekts haben wir leider den Informieren Schritt von IPERKA unterschätzt und so zu wenig Zeit investiert. Dadurch haben wir uns in der Planung sehr überschätzt und wir ahnten auch noch nicht wie stressig die letzten paar Wochen werden, durch die vielen Prüfungen und Abgaben. Wir haben auf Nebenwirkungen nicht geachtet, wie dass man z.B. von Outlook gebannt wird wenn man zu viele Emails am ersten Tag verschickt. Wir haben, dann diese eher weniger wichtigen Sachen vernachtlässtig und uns darum gekümmert, dass wir am Schluss wenigstens etwas haben und nicht nichts.
