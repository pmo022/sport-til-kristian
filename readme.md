# Get sassy
For å bruke prosjektet, gjør følgende steg:
- Installer node.js,
- Installer dependencies ved å skrive "npm install" i konsollen
- Kjør gulp ved å skrive "gulp" i konsollen

Om gulp kommandoen gir feilmelding, skriv
"npm i -g gulp" i konsollen først for å gjøre verktøyet globalt tilgjengelig i konsollen

Om dere vil kjøre node-sass alene uten alt det ekstra, gjør følgende:
- npm i -g node-sass
- node-sass sass\styles.scss -o public\css\

For å få det til å kompilere automatisk ved endring, legg til --watch flagget
- node-sass sass\styles.scss -o public\css\ --watch