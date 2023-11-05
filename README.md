# Rick & Morty Hackathon Test

Per llegir la documentació d'aquest projecte en català, cliqueu [aquí](/READMECAT.md).

Please find documentation below regarding my test submitted for participation in the Jump2Digital Hackathon. 

 A link to the live site can be found [here](https://kaylaesmith1.github.io/jump2digital-hackathon/).


![Responsive site design](/assets/images/amiresponsive.png)


## Table of Contents
- [Rick & Morty Hackathon Test](#rick---morty-hackathon-test)
  * [Table of Contents](#table-of-contents)
  * [User Experience (UX)](#user-experience--ux-)
    + [Design](#design)
      - [Color Scheme](#color-scheme)
      - [Imagery](#imagery)
      - [Fonts](#fonts)
  * [Testing](#testing)
  * [Deployment](#deployment)
  * [Languages Used](#languages-used)
  * [Frameworks - Libraries - Programs Used](#frameworks---libraries---programs-used)
  * [Bugs](#bugs)
  * [Future Implementations](#future-implementations)
  * [Credits](#credits)


## User Experience (UX)

This site was built as a test to be able to participate in a hackathon with the Jump2Digital group in Barcelona Spain. As such, I would imagine the main users of this site to be the judges selecting participants. 

However, for any user, the site should be responsive on all device sizes, available in various browsers, easily legible, colorful, and reflect the theme of 'Rick & Morty'. I attempted to reach each of these goals through the design of the page and color scheme, information for which can be found below.

### Design

The website design is set in simple, paragraph form using character cards, which is intended to make it easier for the user to navigate. A few aspects of each character's available information from the API is collected and displayed on a character card. A 'back to top' button was created to give the user a quick way to return to the top of the page.

The header includes a Rick logo that, on clicking, will take the reader to the Rick & Morty Wikipedia page in Catalan.

Below the header is the search bar with a search field where the user can search characters by name and 'Reset' button. The search works in real-time; as a user writes a name, the search will update to show all characters matching that name. Conversely, deleting any letters will update the character cards shown. Though I feel a 'Search' button would be redundant, I decided to include a 'Reset' button to facilitate the user-experience and clear the field with just one click rather than having to hold down the delete key.

The footer includes personal links to the creator's LinkedIn page and GitHub profile. The third link opens to a YouTube trailer of the Rick & Morty TV show.

#### Color Scheme

The color scheme was chosen based on the pdf prompt given by Jump2Digital and adapted slightly to fit the creator's personal vision of the site using [Coolers](https://coolors.co/). 

All combinations of colors used illustrate a contrast between the background and text to ensure maximum user accessibility. The darker colors were used for text: headers, character card information, etc, while the lighter colors were used as backgrounds with the bright greens as accents.

Using this color palette, there were no contrast errors when the site was put through Wave.

![Color Palette](/assets/images/color-scheme2.png)

#### Imagery

The imagery included on this site was a simple logo on the homepage, a favicon for the browser tab, which were obtained from a simple google search. Icons were also used for the footer links and the 'back to top' button and were obtained from [Font Awesome](https://fontawesome.com/icons).

All other imagery, eg: character avatars, was obtained through the public API facilitated by Jump2Digital.

#### Fonts

The 'Bangers' font is the main font used on the page for headers and card titles, while 'Roboto' is used for the "Search" and "Reset" buttons and other character information, as well as the entire body of the website. 

The 'Sans-serif' font is noted as a backup and will be used in the event that the main fonts aren't imported correctly to the site. These font styles were chosen for their ease of legibility and general letter spacing and were imported from [Google Fonts](https://fonts.google.com/). 

## Testing

Testing was done by the creator on various device sizes and on Chrome, Firefox and Safari (laptop and iphone). Friends also tested the application on their personal devices and reported a smooth and user-friendly experience with all interactive aspects working well.

Validation was done on the HTML, CSS and JavaScript pages and Wave was used to validate the site as a whole. The results of these tests are below:
<strong>HTML</strong>
![HTML validation](/assets/images/validate-html.png)

<strong>CSS</strong>
![CSS validation](/assets/images/validate-css.png)

<strong>JavaScript</strong>
![JavaScript validation](/assets/images/validate-js.png)
<strong>Wave</strong>
![Wave validation](/assets/images/validate-wave.png)
One error is shown when the page is validated using Wave. To create the button with the desired styling, I intentionally left the button itself blank and put the 'Back to top' sentence under it as a text snippet. As such, the button itself remains empty, which appears as an error in Wave. I chose to leave this error as it doesn't affect the functionality of the page itself.


## Deployment

The following steps were taken to deploy the live website from the GitHub repository using <strong>GitHub Pages</strong>:

1. In your personal GitHub account, locate your project's repository.

2. Click the 'Settings' tab.

3. On the left-hand side, click the 'Pages' tab

4. In the center section, select to deploy from the main branch.

5. Once built, a link will appear with a button to 'Visit site'. Clickin this will allow you to open the live page in your browser.

![Deployment GitHub Pages](/assets/images/deploy-pages.png)


## Languages Used

- HTML
- CSS
- Javascript

## Frameworks - Libraries - Programs Used 
- [Am I Responsive](https://amiresponsive.co.uk/) - Used to verify responsiveness of website on different device sizes.
- [Favicon](https://favicon.io/) - Used to create the icon for the browser tab.
- [Font Awesome](https://fontawesome.com/) - Used for footer icons and the 'Back to top' button.
- [GitHub](https://github.com/) - Used to house the project repository.
- [Google Fonts](https://fonts.google.com/) - Imported and used to style fonts on the page.
- [W3C](https://www.w3.org/) - Used for HTML & CSS validation.
- [JSHint](https://jshint.com/) - Used to validate the JavaScript page.
- [Coolors](https://coolors.co/) - Used to create the color scheme.
- [Bootstrap](https://getbootstrap.com/docs/4.6/getting-started/introduction/): CSS used for developing responsiveness and styling the website.
- [Google](https://www.google.com/): Images used were sourced from a Google search.


## Bugs
Two bugs were identified and subsequently solved:
1. <strong>Card height</strong>
![BUG: card height](/assets/images/BUG-card-height.png)
Adding a min-height to the CSS for the 'card' class solved this problem and now all cards are the same height.

2. <strong>Character search layout</strong>
![BUG: search layout](/assets/images/BUG-search-layout.png)
There was an issue with the card layout when a character was searched. Instead of the matching cards being displayed in neat rows, the unmatched cards were hidden but taking up the original space. This problem was solved by creating another container in the JS file.


To my knowledge, there are no existing bugs on the website. 


## Future Implementations
There are a couple of aspects that could be implemented in future versions of this project to improve the user experience, which are outlined below:

1. Though it wasn't a requirement for this project, having a 404 error page with a button to return the user to the homepage would be an improvement. At the moment, if the user finds themself on an erroneous page, the default GitHub 404 page is shown and the user has to physically click the 'back' button to be returned to the live site.  

2. Currently, if a user misspells a name or there are no cards in the database matching that name, no information is shown. It would be helpful to have an error message or a pop-up message alerting the user of the potential spelling mistake or to try a different character name. 

## Credits 
- [Bootstrap 4.6 Docs](https://getbootstrap.com/docs/4.6/getting-started/introduction/) were used for stylistic implementations.
- This [YouTube video](https://www.youtube.com/watch?v=zUcc4vW-jsI) to help with fetching API data.

The following websites were used for troubleshooting:
- [W3Schools](https://www.w3schools.com/)
- [Stack Overflow](https://stackoverflow.com/) 
- [Chat GPT](https://chat.openai.com/)

During the testing phase, a friend and colleague, Mia, was vital in helping fix card height and search layout bugs. Thanks, Mia!