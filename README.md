# dc20-digitalborger-frontend

## Ung Borger

Ung Borger er en app som skal samle offentlige digitale tjenester.
Appen skal fokusere på tjenester for aldersgruppen 13 til 18 år, og gjøre det lettere for dem å navigere i den offentlige jungelen.

Prosjektet tar utgangspunkt i Halogen sin innsiktpresentasjon som viste at ungdom generelt mangler oversikt over relevante tjenester. Det er få som har fullstendig oversikt over hvilke tjenester som er relevante for dem i dag, og hva som kan bli viktig i fremtiden. Dessuten rappoterer unge at de ofte trenger hjelp av en foresatt dersom de foreksempel skal søke skattekort.

Ung Borger har som oppgave å synliggjøre offentlige tjenester for målgruppen og gjøre det lettere for dem å søke/bli informert om tjenester på egenhånd.

## Installasjonsguide

### Før man kan kjøre prosjektet må man:

- Være på DigDir sitt nett
- Installere Node package manager (npm), https://www.npmjs.com/get-npm
- Installere Expo, `npm install -g expo-cli`
- Være innlogget på expo med brukeren ---- `expo login`

For å se appen kan man enten bruke en simulator, eller en fysisk mobil.

#### Simulator:

- Mac: XCode
- Windows/Linux: Android Studios

#### Mobil:

- Last ned appen Expo (Expo client for Android).

### For å kjøre prosjektet:

1. `git clone git@github.com:difi/dc20-digitalborger-frontend.git`
2. `cd dc20-digitalborger-frontend`
3. `npm install`
4. `expo start`
5. Start simulator eller scan QR-kode med mobil

## Bibliotek

I koden vår har vi noen ferdiglagde komponenter

Vigo -> Karakterer : Her brukes Tab View hentet fra: https://github.com/satya164/react-native-tab-view

##Components

####Login:

####Services:
Ung Borger tilbyr følgende offentlige tjenester:
Komponentene finner du via startsiden (home)

- Digipost
- Helsenorge
- Lånekassen
- Politi
- Skatteetaten
- Vegvesenet
- Vigo

#### Hourglass:

Timeglass skal gi brukeren oversikt over personlige frister

#### Notification:

Varsel skal gi brukeren oversikt over generelle frister fra de ulike tjenestene

#### Profile:

#### Service Communications:

#### Other components:

- ListItem
- Button
- Storage
- Theme
