# Dokumentation

:::info
Das ist die Dokumentation unseres [Projekts](https://github.com/Nicola3341246/Words), welches nach der Projektmethode IPERKA umgesetzt wurde. Hier wird unser Ablauf und die Vorgehensweise des Projekts dokumentiert.

:::

### Inhaltsverzeichnis

-   [Dokumentation](#dokumentation)
    -   [Inhaltsverzeichnis](#inhaltsverzeichnis)
    -   [IPERKA](#iperka)
        -   [Informieren](#informieren)
        -   [Planen](#planen)
        -   [Entscheiden](#entscheiden)
        -   [Realisieren](#realisieren)
        -   [Kontrollieren](#kontrollieren)
        -   [Auswerten](#auswerten)
    -   [Einleitung](#einleitung)
    -   [Technologien](#technologien)
    -   [Quellen](#quellen)
    -   [Lokale Entwicklungsumgebung](#lokale-entwicklungsumgebung)
        -   [Lokale Entwicklungsumgebung aufsetzen](#lokale-entwicklungsumgebung-aufsetzen)
            -   [Vorbereitung](#vorbereitung)
            -   [Dependencies mit NPM installieren](#dependencies-mit-npm-installieren)
            -   [Projekt starten](#projekt-starten)
    -   [Anforderungen](#anforderungen)
    -   [Ausführung](#ausführung)
        -   [Testumgebungen](#testumgebungen)
            -   [Manuell (Per Hand):](#manuell-per-hand)
    -   [Testfälle](#testfälle)
        -   [Testprotokoll](#testprotokoll)
        -   [Testbericht](#testbericht)
    -   [Projektauswertung](#projektauswertung)

## IPERKA

### Informieren

-   [Einleitung](#einleitung)
-   [Technologien](#technologien)
-   [Quellen](#quellen)
-   [Anforderungen](#anforderungen)

### Planen

-   [Testfälle](#testfälle)
-   [Arbeitspakete](#arbeitspakete)

### Entscheiden

-   [Technologien](#technologien)

### Realisieren

-   [Ausführung](#ausführung)

### Kontrollieren

-   [Testfälle](#testfälle)
-   [Tesprotokoll](#testprotokoll)
-   [Testbericht](#testbericht)

### Auswerten

-   [Projektauswertung](#projektauswertung)

## Einleitung

Für dieses Projekt haben wir uns dafür entschieden, dass wir einen Wordle-Klon, wo man wie bei Wordle ein buchstabiges Wort erraten kann. Man kann es auf Englisch und Deutsch spielen und man muss sich nicht um die Anzahl Versuche kümmern, da man so viel raten kann wie man will. Damit man trotzdem sein bestes gibt kann man sich einloggen und sich durch das Leaderboard mit anderen Nutzern messen. Wir haben auch einen Darkmode implementiert, damit man zu jeder Zeit das Spiel angenehm spielen kann.

## Technologien

Für Words verwenden wir folgende Technologien:

-   [TypeScript](https://www.typescriptlang.org/)
-   [ESLint](https://eslint.org)
-   [Prettier](https://prettier.io)
-   [Docusaurus](https://docusaurus.io/)
-   [Git](https://git-scm.com/doc)
-   [GitHub](https://docs.github.com/en)
-   [SvelteKit](https://kit.svelte.dev/)

### Hosts:

-   [Supabase für das Hosten der Datenbank](https://supabase.com/)
-   [Netlify für das Hosten der Website der Dokumentation](https://www.netlify.com/)

## Quellen

-   [Docusaurus Dokumentation](https://docusaurus.io/docs)
-   [SvelteKit Dokumentation](https://kit.svelte.dev/docs/introduction)
-   [Supabase mit SvelteKit Dokumentation](https://supabase.com/docs/guides/getting-started/quickstarts/sveltekit)
-   [Englische Wörterliste](https://gist.github.com/scholtes/94f3c0303ba6a7768b47583aff36654d)
-   [Deutsche Wörterliste nur 5 buchstabige](https://gist.githubusercontent.com/MarvinJWendt/2f4f4154b8ae218600eb091a5706b5f4/raw/36b70dd6be330aa61cd4d4cdfda6234dcb0b8784/wordlist-german.txt)

## Lokale Entwicklungsumgebung

### Lokale Entwicklungsumgebung aufsetzen

#### Vorbereitung

Für die Realisierung dieses Projekts haben wir Visual Studio Code mit wenigen Erweiterungen, und zwar ESLint, Prettier und Live Share verwendet. Bei der Live Share-Erweiterung haben wir keine speziellen Einstellungen vorgenommen, wobei wir bei der Erweiterung Prettier und ESLint eine eigene Konfiguration erstellt haben, um unsere eigenen Code-Konventionen zu erzwingen. Diese Einstellungen werden automatisch übernommen, insofern man die eine Erweiterung installiert hat und die Entwicklungsumgebung aufgesetzt hat.

Um die lokale Entwicklungsumgebung aufzusetzen, muss man sich zuerst eine Kopie vom Repository, von der [offiziellen Quelle](https://github.com/Nicola3341246/Words) holen.

Dies kann man tun, indem man eine eigene Kopie von dem Repository erstellt (forkt), damit man später seine Änderungen auch bei GitHub pushen kann, auch wenn man kein Contributor ist.

_Dadurch kann man auch die eigenen Änderungen im offiziellen Repository eingbringen, indem man eine Pull Request erstellt._

Wenn das Repository erfolgreich geforkt wurde, muss man das Repository klonen und in dessen Verzeichnis wechseln.

```shell
git clone https://github.com/[deinBenutzername]/Words.git
cd Words/
```

#### Dependencies mit NPM installieren

:::caution
Für diesen Schritt ist es notwendig, die node.js-Runtime installiert zu haben. [Download von node.js](https://nodejs.org/de/download)
:::

Nachdem man das Projekt geklont hat, sollte man alle Dependencies installieren. Dabei muss man in das entsprechende Verzeichnis wechseln und die Abhängigkeiten installieren.

```bash
§cd Words/ #Falls man noch nicht im richtigen Verzeichnis ist
npm i
cd ..
```

#### Projekt starten

:::caution
Für diesen Schritt ist es notwendig, die [Dependencies installiert](#Dependencies-mit-NPM-installieren) zu haben.
:::

```bash
cd Words/ # Falls man noch nicht im richtigen Verzeichnis ist
npm run start
```

Nun wurde die Applikation erfolgreich gestartet und kann unter http://localhost:5713 erreicht werden.

## Anforderungen

| Anf.-Nr. | Muss/<br />Kann | funk./<br />qual. | Beschreibung                                                                                                                                                                                     |
| :------- | :-------------- | ----------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.       | Muss            | funk.             | Die Applikation soll ein Login haben, bei dem man sich nur durch GitHub anmelden kann.                                                                                                           |
| 2.       | Muss            | funk.             | Die Applikation soll einen Header haben, der darauf reagiert auf welcher Unterseite man ist und, dann soll diese Seite nicht mehr bei der Navigation angezeigt werden.                           |
| 3.       | Muss            | funk.             | Die Applikation soll einen Header haben, der darauf reagiert, ob der Benutzer eingeloggt ist. Falls der Benutzer eingeloggt ist, soll ein "Logout"-Button angezeigt werden.                      |
| 4.       | Muss            | funk.             | Auf der Startseite soll es einen Knopf geben, um das Spiel zu starten.                                                                                                                           |
| 5.1      | Muss            | funk.             | Wenn der Benutzer das Spiel gestartet hat, soll die Applikation anfangen die Zeit für das Spiel zu messen.                                                                                       |
| 5.2      | Muss            | funk.             | Wenn der Benutzer das Spiel gestartet hat, soll er unendlich Versuche zum raten haben und es soll keine Begrenzung geben.                                                                        |
| 6.       | Muss            | funk.             | Der Benutzer sollte in fünf Textfelder ein Wort hineinschreiben können, also pro Buchstabe ein Textfeld.                                                                                         |
| 7.1      | Muss            | funk.             | Wenn der Benutzer auf "Check Guess" (oder Enter) gedrückt hat, sollen die Buchstaben, die er richtig erraten hat, aber an der falschen Stelle im korrekten Wort sind, gelb markiert werden.      |
| 7.2      | Muss            | funk.             | Wenn der Benutzer auf "Check Guess" (oder Enter) gedrückt hat, sollen die Buchstaben, die er richtig erraten hat und an der richtigen Stelle im korrekten Wort sind, grün markiert werden.       |
| 7.3      | Muss            | funk.             | Wenn der Benutzer auf "Check Guess" (oder Enter) gedrückt hat und das erratene Wort mit dem zu erratenen (also dem korrekten) Word übereinstimmt, hat er das Spiel gewonnen.                     |
| 8.1      | Muss            | funk.             | Wenn der Benutzer das Spiel gewonnen hat, soll ihm das korrekte Wort, die benötigte Zeit, die Anzahl Versuche und dass er gewonnen hat mitgeteilt werden.                                        |
| 8.2      | Muss            | funk.             | Wenn der Benutzer das Spiel gewonnen hat, soll die benötigte Zeit an die Schnittstelle für die Rangliste geschickt werden.                                                                       |
| 8.3      | Muss            | funk.             | Wenn der Benutzer das Spiel gewonnen hat, soll das Spiel automatisch neu gestartet werden.                                                                                                       |
| 9.1      | Muss            | funk.             | Bei der Rangliste soll für jeden Benutzer, der jemals ein Spiel gespielt hat, der Rang, der Name und das Ergebnis in Sekunden angezeigt werden.                                                  |
| 9.2      | Muss            | funk.             | Die Rangliste soll nur einen neuen Eintrag bekommen, wenn der Benutzer beim neuen Ergebnis schneller war, als beim alten.                                                                        |
| 9.3      | Muss            | funk.             | Die Rangliste soll nach den Ergebnissen sortiert werden.                                                                                                                                         |
| 10.1     | Muss            | funk.             | In den Einstellungen soll der Benutzer die Sprache des Spiels ändern können. Dabei soll der Benutzer zwischen Englisch und Deutsch auswählen können, und die Spiellogik sollte darauf reagieren. |
| 10.2     | Muss            | funk.             | In den Einstellungen soll der Benutzer einen Dark und Light Modus einstellen können.                                                                                                             |

:::info
1x Arbeitspaket = 45 Minuten (eine Schullektion) <br />
1x Sitzung = 5x Arbeitspakete (ein Halbtag) <br />
Arbeitspakete \* Sitzungen \* Gruppenmitglieder

4 Lektionen pro Gruppenmitglied für das Portfolio <br /><br />

5 \* 6 \* 4 + 16 = 136 Arbeitpakete
:::

| Nr. | Frist      | Beschreibung                                              | Zeit in Arbeitspaketen (geplant) |
| --- | ---------- | --------------------------------------------------------- | -------------------------------- |
| 1   | 14.03.2024 | Informieren (von IPERKA)                                  | 10                               |
| 2   | 14.03.2024 | Planen und Entscheiden (von IPERKA)                       | 8                                |
| 3   | 14.03.2024 | GitHub Repository aufsetzen                               | 2                                |
| 3   | 21.03.2024 | Realisieren (von IPERKA) der Anforderungen Nr. 1 - 5.1    | 20                               |
| 4   | 28.03.2024 | Realisieren (von IPERKA) der Anforderungen Nr. 5.2 - 7.2  | 20                               |
| 5   | 04.04.2024 | Realisieren (von IPERKA) der Anforderungen Nr. 7.3 - 9.1  | 20                               |
| 6   | 25.04.2024 | Realisieren (von IPERKA) der Anforderungen Nr. 9.1 - 10.2 | 20                               |
| 7   | 02.05.2024 | Kontrollieren (von IPERKA)                                | 10                               |
| 8   | 02.05.2024 | Auswerten (von IPERKA)                                    | 10                               |
| 9   | 02.05.2024 | Portfolioeintrag fertigstellen                            | 16                               |

## Ausführung

| Nr. | Frist      | Bemerkung                                                                                                                                                                                                                                                                               | Zeit (geplant) | Zeit (effektiv) |
| :-- | :--------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | --------------- |
| 1   | 14.03.2024 | Wir hatten viele Ideen, aber wir konnten uns nicht so schnell auf die "Worlde-Idee" einigen. Ansonsten gab es keine Probleme.                                                                                                                                                           | 10             | 10              |
| 2   | 14.03.2024 | Wir haben die Planung erstellt und die wichtigen Entscheidungen getroffen. Wir hatten Probleme uns auf die Technologie SvelteKit zu einigen, weil einige Gruppenmitglieder schlechte Erfahrungen damit gemacht haben. Allerdings gab es beim Aufsetzen des Repos keine Probleme.        | 8              | 8               |
| 3   | 21.03.2024 | Wir sind gut im Plan und wir konnten unsere Ziele erreichen, allerdings verlief die Implementation teilweise ein wenig holprig.                                                                                                                                                         | 20             | 20              |
| 4   | 28.03.2024 | Wir sind in Verzögerung geraten, weil wir nicht so bei der Sache waren und wir uns gegenseitig noch viel helfen mussten mit SvelteKit.                                                                                                                                                  | 20             | 22              |
| 5   | 04.04.2024 | Wir sind gut im Plan und wir konnten unsere Ziele erreichen.                                                                                                                                                                                                                            | 20             | 20              |
| 6   | 25.04.2024 | Wir hatten Probleme mit unserer Deutschen Wörterliste, da diese zu lange oder zu kurze Wörter hatte und nicht richtig formatiert war. Deshalb mussten wir ungeplant ein Bash-Script schreiben, da dies von Hand viel zu lange gedauert hätte. Deshalb hat es ein wenig länger gedauert. | 20             | 23              |
| 7   | 02.05.2024 | Wir haben die Testfälle erfolgreich durchgeführt und jeder Testfall konnte erfolgreich getestet werden.                                                                                                                                                                                 | 10             | 12              |
| 8   | 02.05.2024 | Keine                                                                                                                                                                                                                                                                                   | 10             | 8               |
| 9   | 02.05.2024 | Keine                                                                                                                                                                                                                                                                                   | 16             | 16              |

## Testfälle

### Testumgebungen

Wir verwenden für die Testfälle zwei verschiedene Testumgebungen:

#### Manuell (Per Hand):

**Betriebssystem:**

Der Browser, mit dem wir die Tests in dem wir die Tests manuell testen, wird auf Microsoft Windows 11 (**23H2** **Build: 22631.3447**) ausgeführt.

**Browser:**

Für den Browser verwenden wir die neuste Version von Mozilla Firefox (125.02).

#### Postman:

**Betriebssystem:**
Die Postman-Applikation, mit der wir die Tests im Backend testen, wird auf Microsoft Windows 11 (23H2 Build: 226321.3447) ausgeführt.

**Postman:**

Wir verwenden die Version v11.0.4 der Postman-Applikation, um die Tests im Backend durchzuführen.

| Testf.-Nr. | Anforderung | Voraussetzung                                                                              | Testumgebung | Eingabe                                                                                                                                                                                                                                                                                                                | Erw. Ausgabe                                                                                                                                                                   |
| ---------- | ----------- | ------------------------------------------------------------------------------------------ | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.1        | 1           | Man ist auf"https://wordle.niculian.me/login"                                              | Per Hand     | 1. Auf "Login with GitHub" drücken.<br />3. Alles was GitHub benötigt eingeben                                                                                                                                                                                                                                         | 2. Man wird auf GitHub weitergeleitet.<br />3. Man wird wieder auf "https://wordle.niculian.me/main" weitergeleitet und im Header steht "Logout"                               |
| 2.1        | 2           | Man ist auf "https://wordle.niculian.me/settings"                                          | Per Hand     | 1. Auf den "Back"-Knopf drücken                                                                                                                                                                                                                                                                                        | 2. Im Header gibt es keinen "Back"-Knopf mehr.                                                                                                                                 |
| 2.2        | 2           | Man ist auf "https://worlde.niculian.me/main                                               | Per Hand     | 1. Auf den "Scoreboard"-Knopf drücken.                                                                                                                                                                                                                                                                                 | 3. Im Header gibt es keinen "Scoreboard"-Knopf mehr", dafür einen "Back"-Knopf.                                                                                                |
| 3.1        | 3           | Testfall 1.1                                                                               | Per Hand     | 1. Auf den "Scoreboard"-Knopf drücken.                                                                                                                                                                                                                                                                                 | 2. Im Header gibt es einen "Logout"-Knopf, aber keinen "Login"-Knopf.                                                                                                          |
| 3.2        | 3           | Man ist auf "https://worlde.niculian.me/main" und man ist nicht angemeldet.                | Per Hand     | 1. Auf den "Scoreboard"-Knopf drücken.                                                                                                                                                                                                                                                                                 | 2. Im Header gibt es einen "Login"-Knopf, aber keinen "Logout"-Knopf.                                                                                                          |
| 4.1        | 4           | Man ist auf "https://wordle.niculian.me/main.                                              | Per Hand     | 1. Auf den "Start Playing"-Knopf drücken.                                                                                                                                                                                                                                                                              | 2. Man wird auf "https://worlde.niculian.me/offlineGame" weitergeleitet und man sieht das Input-Feld für das Wort.                                                             |
| 5.1.1      | 5.1         | Man ist auf "https://worlde.niculian.me/main"                                              | Per Hand     | 1. Auf "Start Playing"-Knopf drücken.<br />2. Sobald das DOM fertig geladen ist, die Zeit anfangen zu stoppen.<br />3. Das Spiel zu Ende spielen.                                                                                                                                                                      | 4. Es erscheint ein Pop-Up, dass die Zeit beinhaltet. (+-2 Sek auf Stoppuhr)                                                                                                   |
| 5.2.1      | 5.2         | Testfall 4.1                                                                               | Per Hand     | 1. In das Eingabefeld für das Wort 200-Mal "okiok" eingeben.                                                                                                                                                                                                                                                           | 2. Es gibt 200 Versuche.                                                                                                                                                       |
| 6.1        | 6.          | Testfall 4.1                                                                               | Per Hand     | 1. In das Eingabefeld "Teste" eingeben.                                                                                                                                                                                                                                                                                | 2. In den fünf Textfeldern wird jeweils: "T", "E", "S", "T", "E" angezeigt.                                                                                                    |
| 7.1.1      | 7.1         | Testfall 4.1 und Annahme, dass Wort ein Vokal besitzt.                                     | Per Hand     | 1. "aeiou" in das Eingabefeld eingeben.<br />                                                                                                                                                                                                                                                                          | 2. Ein Textfeld wird Gelb angezeigt und der Buchstaben ist am falschen Ort.                                                                                                    |
| 7.2.1      | 7.2         | Testfall 4.1                                                                               | Per Hand     | 1. 5 Zufällige Buchstaben eingeben, bis ein Textfeld grün wird.                                                                                                                                                                                                                                                        | 2. Ein Textfeld wird Grün und der Buchstaben ist richtig.                                                                                                                      |
| 7.3.1      | 7.3         | Testfall 4.1                                                                               | Per Hand     | 1. Zufällige Buchstaben eingeben, bis man das Spiel gewonnen hat.                                                                                                                                                                                                                                                      | 2. Ein Pop-Up mit dem Text: "You won!<br /><br />The word was: [Wort]<br />Amount of Guesses: [Anzahl Versuche]<br />Used Time: [Verwendete Zeit in Sekunden]"<br />erscheint. |
| 8.1.1      | 8.1         | Testfall 4.1, Annahme das Wort ist "Teste"                                                 | Per Hand     | 1. "Teste" in das Eingabefeld eingeben.                                                                                                                                                                                                                                                                                | 2. Ein Pop-Up mit dem Text: "You won!<br />The word was: teste<br />Amount of Guesses: 1<br />Used Time [Verwendete Zeit in Sekunden]" <br />erscheint.                        |
| 8.2.1      | 8.2         | Postman wurde gestartet.                                                                   | Postman      | 1. Eine Post-Request an: https://wordle.niculian.me/scoreboard"<br />mit diesem Request-Body schicken: {<br />"id": "irgendeine uuid",<br />"score": 2929292,<br />"username": "tester"<br />, "user_uuid": "irgendeine uuid<br />}                                                                                    | 2. HTTP-Response: "Score added successfully"                                                                                                                                   |
| 8.2.2      | 8.2         | Testfall 8.2.1                                                                             | Postman      | 1. Eine Post-Request an: https://wordle.niculian.me/scoreboard"<br />mit diesem Request-Body schicken: {<br />"id": "irgendeine uuid, aber die gleiche wie bei testfall 8.2.1",<br />"score": 2,<br />"username": "tester"<br />, "user_uuid": "irgendeine uuid, aber gleiche die wie bei testfall 8.2.1<br />}        | 2. HTTP-Response: "Score added successfully"                                                                                                                                   |
| 8.2.3      | 8.2         | Testfall 8.2.1                                                                             | Postman      | 1. Eine Post-Request an: https://wordle.niculian.me/scoreboard"<br />mit diesem Request-Body schicken: {<br />"id": "irgendeine uuid, aber die gleiche wie bei testfall 8.2.1",<br />"score": 2929292,<br />"username": "tester"<br />, "user_uuid": "irgendeine uuid, aber die gleiche wie bei testfall 8.2.1"<br />} | 2. HTTP-Response: "Score not added, because the existing score is higher"                                                                                                      |
| 8.3.1      | 8.3         | Testfall 4.1                                                                               | Per Hand     | 1. Spiel zu Ende spielen<br /> 3. Pop-Up wegklicken.                                                                                                                                                                                                                                                                   | 2. Das Pop-Up mit den Informationen zum Spiel erscheint.<br />4. Alle Eingabefelder wurden entfernt und das Spiel wurde neugestartet.                                          |
| 9.1.1      | 9.1         | Man ist auf "https://worlde.niculian.me/main"                                              | Per Hand     | 1. Auf den "Scoreboard-Knopf" drücken.                                                                                                                                                                                                                                                                                 | 2. Es wird das Scoreboard angezeigt und bei jedem Spieler steht der Rang, der Name und die Zeit.                                                                               |
| 9.2.1      | 9.2         | Postman wurde gestartet.                                                                   | Postman      | 1. Eine Post-Request an: https://wordle.niculian.me/scoreboard"<br />mit diesem Request-Body schicken: {<br />"id": "irgendeine uuid",<br />"score": 30,<br />"username": "tester3100"<br />, "user_uuid": "irgendeine uuid<br />}                                                                                     | 2. HTTP-Response: "Score added successfully"                                                                                                                                   |
| 9.2.2      | 9.2         | Testfall 9.2.1                                                                             | Postman      | 1. Eine Post-Request an: https://wordle.niculian.me/scoreboard"<br />mit diesem Request-Body schicken: {<br />"id": "irgendeine uuid, aber die gleiche wie bei testfall 9.2.1",<br />"score": 300,<br />"username": "tester3100"<br />, "user_uuid": "irgendeine uuid, aber gleiche die wie bei testfall 9.2.1<br />}  | 2. HTTP-Response: "Score not added, because the existing score is higher. "                                                                                                    |
| 9.2.3      | 9.2         | Testfall 9.2.1                                                                             | Postman      | 1. Eine Post-Request an: https://wordle.niculian.me/scoreboard"<br />mit diesem Request-Body schicken: {<br />"id": "irgendeine uuid, aber die gleiche wie bei testfall 9.2.1",<br />"score": 29,<br />"username": "tester3100"<br />, "user_uuid": "irgendeine uuid, aber gleiche die wie bei testfall 9.2.1<br />}   | 2. HTTP-Response: "Score added successfully"                                                                                                                                   |
| 9.3.1      | 9.3         | Man ist auf "https://worlde.niculian.me/main"                                              | Per Hand     | 1. Auf den "Scoreboard"-Knopf drücken.                                                                                                                                                                                                                                                                                 | 2. Der erste Rang, hat weniger Zeit benötigt als der Zweite.                                                                                                                   |
| 10.1.1     | 10.1        | Man ist auf "https://worlde.niculian.me/main" und hat noch keine Einstellungen vorgenommen | Per Hand     | 1. Auf den "Start Playing"-Knopf drücken.<br /><br />3. Auf den "Settings"-Knopf" drücken.<br />5. Auf den "Start Playing"-Knopf drücken.                                                                                                                                                                              | 2. Der Text "Language: English" wird angezeigt.<br />4. "German" auswählen.<br />6. Der Text "Lanuge: German" wird angezeigt.                                                  |
| 10.1.2     | 10.1        | Testfall 10.1.1                                                                            | Per Hand     | 1. Auf den "Start Playing-Knopf" drücken.<br />3 Auf den "Settings"-Knopf" drücken.<br />5. Auf den "Start Playing"-Knopf drücken.                                                                                                                                                                                     | 2. Der Text "Language: German" wird angezeigt.<br />4. "English" auswählen.<br />6. Der Text "Language: English" wird angezeigt.                                               |
| 10.2.1     | 10.2        | Man ist auf "https://wordle.niculian.me/main" und hat noch keine Einstellungen vorgenommen | Per Hand     | 1. Auf den "Settings"-Knopf drücken.<br />2. Auf den "Toggle Dark Mode"-Knopf drücken.                                                                                                                                                                                                                                 | 3. Die Website ist nun im Dark-Mode, also schwarz.                                                                                                                             |
| 10.2.2     | 10.2        | Testfall 10.2.1                                                                            | Per Hand     | 1. Auf den "Settings"-Knopf drücken.<br />2. Auf dne "Toggle Dark Mode"-Knopf drücken.                                                                                                                                                                                                                                 | 3. Die Website ist nun im White-Mode, also weiss.                                                                                                                              |

### Testprotokoll

:::info

**OK** = Dieser Testfall wurde erfolgreich getestet.

**NOK** = Dieses Testfall konnte nicht (erfolgreich) getestet werden.

:::

| Test-Nr | Bericht | Tester                  |
| ------- | ------- | ----------------------- |
| 1.1     | OK      | @sanqro, @Nicola3341246 |
| 2.1     | OK      | @sanqro, @Nicola3341246 |
| 2.2     | OK      | @sanqro, @Nicola3341246 |
| 3.1     | OK      | @sanqro, @Nicola3341246 |
| 3.2     | OK      | @sanqro, @Nicola3341246 |
| 4.1     | OK      | @sanqro, @Nicola3341246 |
| 5.1.1   | OK      | @sanqro, @Nicola3341246 |
| 5.2.1   | OK      | @sanqro, @Nicola3341246 |
| 6.1     | OK      | @sanqro, @Nicola3341246 |
| 7.1.1   | OK      | @sanqro, @Nicola3341246 |
| 7.2.1   | OK      | @sanqro, @Nicola3341246 |
| 7.3.1   | OK      | @sanqro, @Nicola3341246 |
| 8.1.1   | OK      | @sanqro, @Nicola3341246 |
| 8.2.1   | OK      | @sanqro, @Nicola3341246 |
| 8.2.2   | OK      | @sanqro, @Nicola3341246 |
| 8.2.3   | OK      | @sanqro, @Nicola3341246 |
| 8.3.1   | OK      | @sanqro, @Nicola3341246 |
| 9.1.1   | OK      | @sanqro, @Nicola3341246 |
| 9.2.1   | OK      | @sanqro, @Nicola3341246 |
| 9.2.2   | OK      | @sanqro, @Nicola3341246 |
| 9.2.3   | OK      | @sanqro, @Nicola3341246 |
| 9.3.1   | OK      | @sanqro, @Nicola3341246 |
| 10.1.1  | OK      | @sanqro, @Nicola3341246 |
| 10.1.2  | OK      | @sanqro, @Nicola3341246 |
| 10.2.1  | OK      | @sanqro, @Nicola3341246 |
| 10.2.2  | OK      | @sanqro, @Nicola3341246 |

### Testbericht

Alle Testfälle konnten erfolgreich getestet werden und die Applikation muss nicht mehr überarbeitet werden.

## Projektauswertung

Am Anfang des Projekts haben wir den Informieren-Schritt von IPERKA auf die leichte Schulter genommen und damit beim Realisieren-Schritt von IPERKA dann Zeit verloren, weil unsere deutsche Wörterliste falsch war und wir dies nicht bemerkt haben, deshalb mussten wir dann ein Bash-Script schreiben, um beispielsweise die zu langen Wörter zu entfernen. Zusätzlich waren wir nicht so produktiv, wie wir es hätten sein können, da wir uns während diesem Projekt ein wenig selbst abgelenkt haben und uns somit gegenseitig von der Arbeit abgehalten haben.
