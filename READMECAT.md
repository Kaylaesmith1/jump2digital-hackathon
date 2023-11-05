# Prova pel 'Rick & Morty Hackató'

To read this documentation in English, click [here](/README.md).

La documentació a sota s'entrega com a part de la meva prova per participar a l'hackató de Jump2Digital.

L'enllaç per veure la web a l'entorn real es pot trobar [aquí](https://kaylaesmith1.github.io/jump2digital-hackathon/).


![Disseny responsiu](/assets/images/amiresponsive.png)


## Taula de Continguts
- [Prova pel 'Rick & Morty Hackató'](#prova-pel--rick---morty-hackat--)
  * [Taula de Continguts](#taula-de-continguts)
  * [Experiència de l'usuari (UX)](#experi-ncia-de-l-usuari--ux-)
    + [Disseny](#disseny)
      - [Esquema de Colors](#esquema-de-colors)
      - [Imatges](#imatges)
      - [Tipus de lletra](#tipus-de-lletra)
  * [Proves](#proves)
  * [Desplegament](#desplegament)
  * [Llengües Utilitzades](#lleng-es-utilitzades)
  * [Frameworks - Biblioteques - Programes utilitzats](#frameworks---biblioteques---programes-utilitzats)
  * [Bugs](#bugs)
  * [Implementacions al futur](#implementacions-al-futur)
  * [Crèdits](#cr-dits)


## Experiència de l'usuari (UX)
Aquesta web es va construir com a prova per poder participar en un hackató amb el grup Jump2Digital a Barcelona. Per tant, m'imagino que els principals usuaris d'aquests pàgina serien els jutges / les jutgesses que seleccionen els participants.

No obstant això, per a qualsevol usuari, la pàgina ha de veure's bé a totes les mides de dispositiu, ha d'estar disponible en diversos navegadors, ser fàcilment llegible, colorit i reflectir el tema de "Rick i Morty". He intentat assolir cadascun d'aquests objectius mitjançant el disseny de la pàgina i l'esquema de colors, informació sobre la qual es pot trobar a continuació.

### Disseny
El disseny de la web s'estableix en forma senzilla de paràgrafs mitjançant targetes del caràcters, que pretenen facilitar la navegació de l'usuari. Es recullen de l'API alguns aspectes de la informació disponible de cada personatge i s'hi mostren en una targeta de personatge. Es va crear un botó "Tornar a dalt" per oferir l'usuari una manera ràpida de tornar al principi de la pàgina.

La capçalera inclou un logotip de Rick que, en clicar, portarà l'usuari a la pàgina de la Viquipèdia de Rick & Morty en català.

Just a sota de la capçalera es troba la barra de cerca amb un camp de cerca on l'usuari pot cercar personatges pel seu nom i un botó de 'Restablir'. La cerca funciona en temps real; a mesura que l'usuari escriu un nom, la cerca s'actualitzarà per mostrar tots els personatges que coincideixen amb aquest nom. D'altra banda, en esborrar qualsevol lletra s'actualitzaran les targetes de personatge mostrades. 

Tot i que considero que un botó de 'Cerca' seria redundat, he decidit incloure un botó de 'Restablir' per facilitar l'experiència de l'usuari i netejar el camp amb només un clic, en lloc de haver de mantenir premuda la tecla d'esborrat.

El peu de pàgina inclou enllaços personals a la pàgina de LinkedIn i al perfil de GitHub de la creadora. El tercer enllaç s'obre a un tràiler de YouTube del programa de televisió Rick & Morty.


#### Esquema de Colors
L'esquema de colors es va triar basant-se al document en PDF rebut de Jump2Digital i s'hi va adaptar lleugerament per ajustar-se a la visió personal de la creadora del lloc web utilitzant [Coolers](https://coolors.co/).

Totes les combinacions de colors utilitzades il·lustren un contrast entre el fons i el text per assegurar una accessibilitat màxima per a qualsevol usuari. Els colors més foscos s'utilitzen per al text: titulars, informació de les targetes de personatge, etc., mentre que els colors més clars s'utilitzen com a fons amb els verds brillants com a detalls.

Fent servir aquesta paleta de colors, no hi va haver problemes de contrast quan la web va ser avaluada amb Wave.

![Color Palette](/assets/images/color-scheme2.png)


#### Imatges
Les imatges utilitzades en aquesta web inclouen un senzill logotip a la pàgina d'inici i un favicon per la pestanya del navegador, que es van obtenir a través d'una simple cerca a Google. També es van utilitzar icones pels enllaços del peu de pàgina i el botó 'tornar a dalt', que es van obtenir de [Font Awesome](https://fontawesome.com/icons).

Totes les altres imatges, com ara els avatars dels personatges, es van obtenir a través de l'API pública facilitada per Jump2Digital.
 
#### Tipus de lletra
La font 'Bangers' és la font principal utilitzada a la pàgina per als titulars i els títols de les targetes, mentre que 'Roboto' es fa servir pels botons "Search" i "Reset" i per la informació dels personatges, així com per tot el cos de la pàgina web.

La font 'Sans-serif' està indicada com a alternativa i s'utilitzarà en cas que les fonts principals no s'importin correctament a la pàgina. Aquestes fonts es van triar per la seva facilitat de llegibilitat i l'espaiat general de les lletres i es van importar de [Google Fonts](https://fonts.google.com/). 


## Proves 
Les proves es van realitzar pel creador en diversos tamanys de dispositius i en Chrome, Firefox i Safari (ordinador portàtil i iPhone). Uns amics també van provar l'aplicació en els seus dispositius personals i van informar d'una experiència fluïda i amigable amb tots els aspectes interactius funcionant correctament.

La validació es va realitzar a les pàgines HTML, CSS i JavaScript, i Wave es va utilitzar per validar la web sencera. Els resultats d'aquestes proves són els següents:

<strong>HTML</strong>
![Validació HTML](/assets/images/validate-html.png)

<strong>CSS</strong>
![Validació CSS](/assets/images/validate-css.png)

<strong>JavaScript</strong>
![Validació JavaScript](/assets/images/validate-js.png)
<strong>Wave</strong>
![WValidació Wave](/assets/images/validate-wave.png)

En la validació del lloc amb Wave, es mostra un error. Per crear el botó amb l'estil desitjat, vaig deixar intencionadament el botó buit i vaig col·locar les paraules 'Cap amunt' a sota com un fragment de text. Per tant, el botó en si mateix es manté buit, cosa que apareix com un error en Wave. Vaig optar per deixar aquest error tal qual ja que no afecta la funcionalitat de la pàgina en si.

## Desplegament

Es van fer els passos següents per publicar aquesta pàgina web en directe des del dipòsit de GitHub mitjançant <strong>GitHub Pages</strong>:

1. Al vostre compte personal de GitHub, localitzeu el repositori del vostre projecte.

2. Feu clic a la pestanya "Settings".

3. Al columna esquerre, feu clic a la pestanya "Pages".

4. A la secció central, seleccioneu per desplegar des de la branca principal.

5. Un cop creat, apareixerà un enllaç amb un botó a "Visite site". Cliqueu-hi que us permetrà obrir la pàgina en directe al vostre navegador.

![Desplega GitHub Pages](/assets/images/deploy-pages-cat.png)


## Llengües Utilitzades

- HTML
- CSS
- Javascript


## Frameworks - Biblioteques - Programes utilitzats
- [Am I Responsive](https://amiresponsive.co.uk/) - Utilitzat per verificar el 'responsiveness' del lloc web en diferents dispositius.
- [Favicon](https://favicon.io/) - Utilitzat per crear la ícona per a la pestanya de navegador.
- [Font Awesome](https://fontawesome.com/) - Utilitzat per al peu de pàgina i el botó "Cap a munt".
- [GitHub](https://github.com/) - Usat per allotjar el repositori del projecte.
- [Google Fonts](https://fonts.google.com/) - Importat i utilitzat per estilitzar els tipus de lletra a la pàgina.
- [W3C](https://www.w3.org/) - Usat per la validació del HTML & CSS.
- [JSHint](https://jshint.com/) - Usat per la validació de la pàgina JS.
- [Coolors](https://coolors.co/) - Utilitzat per crear l'esquema de colors.
- [Bootstrap](https://getbootstrap.com/docs/4.6/getting-started/introduction/): CSS utilitzat per desenvolupar el 'responsiveness' i el disseny del lloc web.
- [Google](https://www.google.com/): Les imatges utilitzades provenen d'una cerca de Google.


## Bugs
Es van identificar i posteriorment es van solucionar dues errades:

1. <strong>Alçada de les targetes</strong>
![BUG: alçada de les targetes](/assets/images/BUG-card-height.png)
Afegir una alçada mínima al CSS de la classe 'card' va solucionar aquest problema i ara totes les targetes tenen la mateixa alçada.

2. <strong>Disseny de la cerca de personatges</strong>
![BUG: disseny de cerca](/assets/images/BUG-search-layout.png)
Hi va haver un problema amb el disseny de les targetes quan es buscava un personatge. En lloc que les targetes coincidents es mostrassin en files ordenades, les targetes que no coincidien quedaven ocultes però ocupaven l'espai original. Aquest problema es va solucionar creant un altre contenidor en el fitxer JS.

Segons el meu coneixement, no hi ha errades existents al lloc web.

## Implementacions al futur
Hi ha un parell d'aspectes que es podrien implementar en futures versions d'aquest projecte per millorar l'experiència de l'usuari, els quals s'expliquen a continuació:

1. Tot i que no era un requisit per a aquest projecte, tenir una pàgina d'error 404 amb un botó per tornar l'usuari a la pàgina d'inici seria una millora. Ara mateix, si l'usuari es troba en una pàgina errònia, es mostra la pàgina d'error 404 per defecte de GitHub i l'usuari ha de clicar físicament al botó 'enrere' per tornar a la pàgina web activa.

2. Actualment, si un usuari fa errors d'escriptura en un nom o no hi ha cap targeta a la base de dades que coincideixi amb aquest nom, no es mostra cap informació. Seria útil tenir un missatge d'error o un missatge emergent que alerti l'usuari de l'errada possible en l'escriptura o l'animi a provar un altre nom de personatge.

## Crèdits

- [Bootstrap 4.6 Docs](https://getbootstrap.com/docs/4.6/getting-started/introduction/) s'utilitzaven per a implementacions estilístiques.
- Aquest [vídeo de YouTube](https://www.youtube.com/watch?v=zUcc4vW-jsI) per ajudar a entendre com obtenir les dades de l'API.

S'han utilitzat els llocs web següents per solucionar problemes:
- [W3Schools](https://www.w3schools.com/)
- [Stack Overflow](https://stackoverflow.com/) 
- [Chat GPT](https://chat.openai.com/)

Durant la fase de proves, una amiga i companya, la Mia, va ser vital per ajudar a corregir l'alçada de les targetes i els errors de disseny amb la cerca. Moltes gràcies, Mia!

