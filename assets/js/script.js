// Function to fetch and display characters
async function fetchCharacters() {
  let page = 1;
  let allCharacters = [];


  try {
    while (true) {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
      const data = await response.json();

      allCharacters = allCharacters.concat(data.results);

      if (data.info.next === null) {
        break;
      }

      page++;
    }

    const characterContainer = document.getElementById('character-container');

    // Loop through characters in the API
    allCharacters.forEach(character => {

      // Create a Bootstrap column div for the character card
      const cardCol = document.createElement('div');
      cardCol.classList.add('col-12', 'col-md-6', 'col-lg-4');

      // Create a card element for the character
      const card = document.createElement('div');
      card.classList.add('character-card', 'card');

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

      const statusText = document.createElement('p');
      statusText.classList.add('card-text');
      statusText.innerHTML = `<u class="card-text-headings">Status</u>: ${character.status}`;

      const speciesText = document.createElement('p');
      speciesText.classList.add('card-text');
      speciesText.innerHTML = `<u class="card-text-headings">Species</u>: ${character.species}`;

      const locationText = document.createElement('p');
      locationText.classList.add('card-text');
      locationText.innerHTML = `<u class="card-text-headings">Location</u>: ${character.location.name}`;

      cardBody.appendChild(name);
      cardBody.appendChild(statusText);
      cardBody.appendChild(speciesText);
      cardBody.appendChild(locationText);

      card.appendChild(avatar);
      card.appendChild(cardBody);

      cardCol.appendChild(card);

      characterContainer.appendChild(cardCol);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// LOAD DOM BEFORE CHARACTERS FETCHED
document.addEventListener('DOMContentLoaded', fetchCharacters);




// SCROLL TO TOP FUNCTION
const scrollToTopButton = document.getElementById('scroll-top');
const scrollButton = document.getElementById('scroll-button');

// Show / hide button at 1000px
function toggleScrollToTopButton() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
}

// Return to top of page
function scrollToTop() {
  document.body.scrollTop = 0; //Safari
  document.documentElement.scrollTop = 0; //Other browsers
}

// EventListener: toggles button visibility when scrolling
window.addEventListener('scroll', toggleScrollToTopButton);

// EventListener: scroll to top when clicked
scrollButton.addEventListener('click', scrollToTop);




// SEARCH A CHARACTER
function filterCharacters() {
  const searchInput = document.getElementById('search-input').value.toLowerCase();
  const characterCards = document.querySelectorAll('.character-card');

  characterCards.forEach(card => {
    const characterName = card.querySelector('.card-title').textContent.toLowerCase();
    const cardContainer = card.parentElement;

    if (characterName.includes(searchInput)) {
      cardContainer.style.display = 'block';

    } else {
      cardContainer.style.display = 'none';
    }
  });
}

function resetCharacters() {
  const cardContainers = document.querySelectorAll('.col-12, .col-md-6, .col-lg-4');
  cardContainers.forEach(container => {
    container.style.display = 'block';
  });
  document.getElementById('search-input').value = '';
}


//EventListener: search / reset
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

const resetButton = document.getElementById('reset-button');

searchButton.addEventListener('click', filterCharacters);
resetButton.addEventListener('click', resetCharacters);

//Click 'Enter' to search
searchInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    filterCharacters();
  }
});
