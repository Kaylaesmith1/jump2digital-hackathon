<!-- ## Gitpod Reminders

To run a frontend (HTML, CSS, Javascript only) application in Gitpod, in the terminal, type:

`python3 -m http.server`

A blue button should appear to click: _Make Public_,

Another blue button should appear to click: _Open Browser_.

To run a backend Python file, type `python3 app.py`, if your Python file is named `app.py` of course.

A blue button should appear to click: _Make Public_,

Another blue button should appear to click: _Open Browser_.

In Gitpod you have superuser security privileges by default. Therefore you do not need to use the `sudo` (superuser do) command in the bash terminal in any of the lessons.

To log into the Heroku toolbelt CLI:

1. Log in to your Heroku account and go to *Account Settings* in the menu under your avatar.
2. Scroll down to the *API Key* and click *Reveal*
3. Copy the key
4. In Gitpod, from the terminal, run `heroku_config`
5. Paste in your API key when asked

You can now use the `heroku` CLI program - try running `heroku apps` to confirm it works. This API key is unique and private to you so do not share it. If you accidentally make it public then you can create a new one with _Regenerate API Key_.

------ -->
# Rick & Morty Hackathon Test

Information about the tech test to participate in a hackathon.


A link to the live site can be found here - [Rick & Morty](https://XXXX.com/)


![Responsive site design](/documentation/readme_images/amiresponsive.png)


## Table of Contents
<!-- - [The Wine Garden BnB](#the-wine-garden-bnb)
  * [Table of Contents](#table-of-contents)
  * [User Experience (UX)](#user-experience--ux-)
    + [Design](#design)
      - [Color Scheme](#color-scheme)
      - [Imagery](#imagery)
      - [Fonts](#fonts)
  * [Testing](#testing)
  * [Security Features and Defensive Design](#security-features-and-defensive-design)
    + [User Authentication](#user-authentication)
    + [Form Validation](#form-validation)
    + [Database Security](#database-security)
    + [Custom error pages](#custom-error-pages)
  * [Features](#features)
    + [Header](#header)
    + [Footer](#footer)
    + [Home Page](#home-page)
    + [Error Pages](#error-pages)
    + [Future Features](#future-features)
  * [Deployment - Heroku](#deployment---heroku)
    + [Create a Heroku App:](#create-a-heroku-app-)
    + [Attach the Postgres database:](#attach-the-postgres-database-)
    + [Prepare the environment and settings.py file:](#prepare-the-environment-and-settingspy-file-)
    + [Create files / directories](#create-files---directories)
    + [Update Heroku Config Vars](#update-heroku-config-vars)
    + [Deploy](#deploy)
  * [Forking this repository](#forking-this-repository)
  * [Cloning this repository](#cloning-this-repository)
  * [Languages](#languages)
  * [Frameworks - Libraries - Programs Used](#frameworks---libraries---programs-used)
  * [Credits](#credits)
  * [Acknowledgments](#acknowledgments) -->

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>


## User Experience (UX)

Who is using the site? Why / what do they hope to get from it?

### Design

The website design is set in simple, paragraph form, which is intended to make it easier for the reader to navigate. The navigation bar is clear on each page, as is the footer and the pages are labelled with a 'banner' format thus ensuring users know where they are at all times. 


The color scheme was chosen to reflect a 'red wine' color and incorporate rich, earthy tones to encompass the vineyard theme.


#### Color Scheme
The color palette was created using the palette generator [Coolers](https://coolors.co/).


WHY CHOSE THIS COLOR SCHEME?


All combinations of the colors used illustrate a contrast between background and text to ensure maximum user accessibility.


![Color Palette](/assets/images/color-scheme2.png)


#### Imagery
Why these images / where from? Include favicon and navbar 'logo'.
 

#### Fonts
The 'XX' font is the main font used on the page, while 'XX' in a bolder weight was used for the navbar and 'XX' for other accent areas. The 'Sans-serif' font is noted as a backup and will be used in the event that the main fonts aren't imported correctly to the site. These font styles were chosen for their ease of legibility and general letter spacing and were imported from [Google Fonts](https://fonts.google.com/).


## Testing

Details of all testing done can be viewed in depth in the [TESTING.md](https://github.com/Kaylaesmith1/bed-and-breakfast/blob/main/TESTING.md) document.


## Features
<!-- 
### Header

![Header](/documentation/readme_images/header.png)

**Logo**
- A customized logo was created using the free logo generator, [Hatchful](https://www.shopify.com/tools/logo-maker), by Shopify.
- The logo is positioned at the top left of the navigation bar. The logo is linked to the home page so the user can easily navigate the site.

![Header](/documentation/readme_images/navbar-logo.png)

**Navigation Bar**

- The navigation bar is present at the top of every page and includes all links to the other pages.
- The My Account navigation link is a drop down menu that includes the Sign up and Log in links. 

![Header](/documentation/readme_images/navbar-no-user.png)

- When a user is logged in, the title changes to the user's name with a profile icon and the dropdown menu includes the Book A Room, My Bookings and Logout page links.

![Header](/documentation/readme_images/navbar-authenticated-user.png)

- The navigation bar is fully responsive and collapses into a hamburger menu icon on smaller screen sizes. collapsing into a hamburger menu when the screen size becomes too small. When the hamburger is clicked, the menu options open on the left-hand side just under the page logo.

![Header](/documentation/readme_images/navbar-hamburger.png)

- Hovering over the links will change the color to a light green.

![Header](/documentation/readme_images/navbar-hover.png)


### Footer
- The footer section includes working links to GitHub, Twitter, Instagram and Facebook. Clicking each link will open a separate browser page to the login of that website, barring the GitHub icon, which opens to my personal GitHub page.

![Footer](/documentation/readme_images/footer.png)

- Hovering over the links will change the color to a light green, identical to the navbar. 

![Footer](/documentation/readme_images/footer-hover.png) -->

### Landing Page
<!-- 
**Call to Action Section**
- The landing page includes a call to action section which encourages the user to book a room at The Wine Garden BnB. If the user is logged in, the message above the 'Book Now' button is, "Start planning your stay at The Wine Garden BnB". 

![Landing Page - Call to Action](/documentation/readme_images/landing-hero-image-authenticated.png)
- If the user is not logged in, "Enjoy a relaxing stay and a glass of wine in the tranquility of a Midwest vineyard!" appears. Below, a 'Book Now' button is visible and will take the user to the login page where they can either log in or sign up to continue the booking process.

![Landing Page - Call to Action](/documentation/readme_images/landing-hero-image.png)



**Why a BnB Section**
- The "Why a bed and breakfast' section gives a brief overview of why users should choose a bed and breakfast over a 'cookie cutter' hotel experience. Under that, a few of the ammenities are listed in short paragraphs with three icons of the most important features The Wine Garden has to offer.

![Landing Page - Why a BnB](/documentation/readme_images/landing-why-bnb.png) -->






### Error Pages - edit these

<!-- Custom Error Pages were created to give the user more information on the error and to guide them back to the site.

![Error 404](/documentation/readme_images/error-404.png)

- 404 Page Not Found - Sorry! The page you're looking for doesn't exist. Click below to return to the homepage.

![Error 500](/documentation/readme_images/error-500.png)

- 500 Server Error - Sorry! The Wine Garden BnB can't handle this request at the moment. Please return to the home page. -->

### Future Features
<!-- A few features were thought about mid-project as aspects that could improve the UI/UX but that were not implemented in this version of the project, either due to time contraints or simply because they were suggestions from friends / family members during the final testing phase of the project.

None were original user stories and were therefore not included anywhere in the project other than in this section. They are detailed below.

1. Email authentication for users on signing up. This would add another layer of authentication for users and would be an improvement on the overall website. 
2. Have something on the My Bookings page even if you don’t have any bookings registered. As of now it's a page titled 'My bookings' but nothing is shown.
![Empty bookings](/documentation/readme_images/empty-bookings.png)
3. Incorporate a payment option, rates and pricing for booking. This is normally a feature of online hotel booking platforms. Taking credit card information could be a helpful aspect to implement in the future.
4. Add photos of menu items or some food items on the breakfast page. Perhaps clicking the menu item could open a photo of it and a description of ingredients in case the user had questions of what exactly it was.
5. If a user cancels a booking, a pop up should appear with checkboxes as to why they cancelled. This could also be a form with a textarea field to be more specific.
6. Perhaps include a 'Book Now' button somewhere no each page of the website to facilitate easy booking.
7. The Admin user has access to all bookings from the live site. As of now, each user has access only to their bookings from the live website. It could be helpful for the Admin superuser to be able to access everyone's bookings and have CRUD functionality on them. -->

## Deployment - Heroku

The following steps were taken to deploy the live website from the GitHub repository:

ADD STEPS HERE

The site is now live and operational.
## Forking this repository
<!-- - Locate the repository at this link [Rick & Morty](https://github.com/Kaylaesmith1/XXX).
- At the top of the repository, on the right side of the page, select "Fork" from the buttons available. 
- This creates a copy of the repository -->

## Cloning this repository
To clone this repository follow the below steps: 
<!-- 
1. Locate the repository at this link [Rick & Morty](https://github.com/Kaylaesmith1/XXX). 
2. Under **'Code'**, see the different cloning options, HTTPS, SSH, and GitHub CLI. Click the prefered cloning option, and then copy the link provided. 
3. Open **Terminal**.
4. In Terminal, change the current working directory to the desired location of the cloned directory.
5. Type **'git clone'**, and then paste the URL previously copied from GitHub. 
6. Type **'Enter'** to create the local clone.  -->

## Languages

- Python
- HTML
- CSS
- Javascript

## Frameworks - Libraries - Programs Used 
<!-- - [Django](https://www.djangoproject.com/): Main python framework used in the development of this project
- [Django-allauth](https://django-allauth.readthedocs.io/en/latest/installation.html): Authentication library used to create user accounts
- [PostgreSQL](https://www.postgresql.org/) Used as the database for this project.
- [Heroku](https://dashboard.heroku.com/login) - Used as the cloud-based platform to deploy the site. -->
- [Am I Responsive](https://amiresponsive.co.uk/) - Used to verify responsiveness of website on different devices.
<!-- - [Figma](https://www.figma.com/) - Used to create wireframes for both desktop and mobile visuals. -->
- [Favicon](https://favicon.io/) - Used to create the wine glass icon for the browser tab.
- [Font Awesome](https://fontawesome.com/) - Used for icons on the home page and stars on the About page.
- [GitHub](https://github.com/) - Used for version control and agile methodology.
- [Google Fonts](https://fonts.google.com/) - Imported and used to change fonts on pages from default fonts.
- [W3C](https://www.w3.org/) - Used for HTML & CSS Validation.
- [PEP8 Online](https://pep8ci.herokuapp.com/#) - Used to validate all Python code pages in the project.
- [Jshint](https://jshint.com/) - Used to validate the JavaScript page.
- [Coolors](https://coolors.co/) - Used to create color scheme.
<!-- - [Crispy Forms](https://django-crispy-forms.readthedocs.io/en/latest/) Used to manage Django Forms
- [Cloudinary](https://cloudinary.com/): Used to upload all images used on the website. -->
- [Bootstrap](https://getbootstrap.com/docs/4.6/getting-started/introduction/): CSS used for developing responsiveness and styling the website.
<!-- - [Hatchful](https://hatchful.shopify.com/): Used to generate custom logo found on all pages.
- [Wondershare](https://www.wondershare.com/): Used to style aspects of the logo (remove background).
- [Canva](https://www.canva.com/): Used for page image banners (colored overlay and opacity) -->
- [Google](https://www.google.com/): All images used were sourced from a Google search.
<!-- - [EmailJS](https://www.emailjs.com/): Used to link the contact form to developer's personal email account. -->
<!-- - [Pixelied](https://pixelied.com/features/photo-filters/convert-image-to-black-and-white): Used to convert image to black and white before using a colored overlay for banners on pages. -->

## Credits

<!-- - [W3Schools](https://www.w3schools.com/)
- [Django Docs](https://docs.djangoproject.com/en/4.0/)
- [Bootstrap 4.6 Docs](https://getbootstrap.com/docs/4.6/getting-started/introduction/)
- [Stack Overflow](https://stackoverflow.com/)
- [Code Institute - Blog Walkthrough Project](https://github.com/Code-Institute-Solutions/Django3blog)
- [YouTube Video for pop up messages](https://www.youtube.com/watch?v=lRrrLCrZDxI) - Used for contact form message pop ups on successful submission and errors. 
-  This youtube video for fetching api data: https://www.youtube.com/watch?v=zUcc4vW-jsI 
-->


## Acknowledgments
<!-- 
Special thanks to the tutoring team, specifically Joshua who helped with the contact form, Sarah who helped with implementing CRUD functionality on the live site, and Oisin who helped fix the bug of being able to book a room under a different user.

Ian_alumni from the slack channel was vital to my understanding of the pathway followed for my delete buttons and getting them to work correctly. He spent time in a call with me clarifying the urls and views pathways. Thank you, Ian!

Lastly, thank you, too, to my mentor Harry for sharing his project and ideas about CRUD functionality. He gave clear, concise feedback on what needed to be fixed before project submission and complemented the work overall.  -->