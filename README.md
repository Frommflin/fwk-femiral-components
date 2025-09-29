# components-lib

Ett minimalt **komponentbibliotek** byggt med **Vite + React** och **Storybook 9**.

**Syfte:**  
Ge en snabb och isolerad miljö för att utveckla, dokumentera och testa UI-komponenter. Vite används för en enkel demoapp, medan Storybook används för komponentutveckling och dokumentation.

---

## Versioner

- Node: `22.19.0`
- npm: `10.9.3`
- React: `^19.1.1`

## Kom igång

### Ta hem repot

- Navigera dit du vill klona projektet
- klona repot: `git clone https://github.com/Frommflin/fwk-femiral-components.git`
- navigera in i repomappen: `cd fwk-femiral-components`

### Aktivera rätt node version

- se till att du har nvm installerat
  - om nvm inte är installerat, kör följande kommando i terminalen (bash):
  - `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash`
  - `\. "$HOME/.nvm/nvm.sh"`
  - Fler alternativ för installation av nvm kan hittas på [Node.js](https://nodejs.org/en/download)
- Installera node-versionen i projektet `nvm install 22.19.0`
- Använd den nedladdade versionen (ger också rätt npm version): `nvm use`

### Installera dependencies

`npm install`

### Kör app

`npm run dev`

### Kör storybook

`npm run storybook`

## CI workflow

Projektet genomgår test av bygge (`npm run build`) vid varje push in i `master`-branchen. Resultat av bygget hittas under `Actions` > `Node.js CI` i repo-menyn, alternativ navigera direkt till `https://github.com/Frommflin/fwk-femiral-components/actions/workflows/react-build.yml`

