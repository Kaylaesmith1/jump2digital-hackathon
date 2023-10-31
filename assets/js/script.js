let allCharactersData = [];

// Function to fetch and display characters
async function fetchCharacters() {
    const charactersPerPage = 20;
    let page = 1; // Start with page 1
    let allCharacters = []; // Array to store all characters


    try {
        while (true) {
            const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
            const data = await response.json();

            // Add the characters from the current page to the array
            allCharacters = allCharacters.concat(data.results);

            // If there are no more pages, exit the loop
            if (data.info.next === null) {
                break;
            }

            // Move to the next page
            page++;
        }

        // Get the container where character cards will be displayed
        const characterContainer = document.getElementById('character-container');

        // Loop through each character in the data
        allCharacters.forEach(character => {
            // Create a Bootstrap column div for the character card
            const cardCol = document.createElement('div');
            cardCol.classList.add('col-12', 'col-md-6', 'col-lg-4');

            // Create a card element for the character
            const card = document.createElement('div');
            card.classList.add('character-card', 'card'); // You can style this class in CSS

            // Create an image element for the character's avatar
            const avatar = document.createElement('img');
            avatar.classList.add('card-img-top');
            avatar.src = character.image;
            avatar.alt = character.name;

            // Create elements for name, status, species, and location
            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const name = document.createElement('h2');
            name.classList.add('card-title');
            name.textContent = character.name;
    
            const status = document.createElement('p');
            status.classList.add('card-text');
            status.textContent = `Status: ${character.status}`;
    
            const species = document.createElement('p');
            species.classList.add('card-text');
            species.textContent = `Species: ${character.species}`;
    
            const location = document.createElement('p');
            location.classList.add('card-text');
            location.textContent = `Location: ${character.location.name}`;

        // Append elements to the card and cardCol
        cardBody.appendChild(name);
        cardBody.appendChild(status);
        cardBody.appendChild(species);
        cardBody.appendChild(location);

        card.appendChild(avatar);
        card.appendChild(cardBody);

        cardCol.appendChild(card);

        // Append the cardCol to the characterContainer
        characterContainer.appendChild(cardCol);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Ensure the DOM is fully loaded before calling the fetchCharacters function
document.addEventListener('DOMContentLoaded', fetchCharacters);




// SCROLL TO TOP FUNCTION
// Get a reference to the scroll-to-top button and the scroll-button
const scrollToTopButton = document.getElementById('scroll-top');
const scrollButton = document.getElementById('scroll-button');

// Function to check the scroll position and show/hide the button
function toggleScrollToTopButton() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
}

// Function to scroll to the top of the page
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Add an event listener to toggle the button visibility when scrolling
window.addEventListener('scroll', toggleScrollToTopButton);

// Add an event listener to scroll to the top when the button is clicked
scrollButton.addEventListener('click', scrollToTop);
