   //FETCH ALL CHARACTERS
   const apiUrl = 'https://rickandmortyapi.com/api/character';

   // Function to fetch all character IDs from the API
async function fetchAllCharacterIds() {
    try {
        // Fetch the first page of characters to get the total number of characters
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        const totalCharacters = data.info.count;

        // Calculate the number of pages needed to fetch all characters (assuming 20 characters per page)
        const totalPages = Math.ceil(totalCharacters / 20);

        // Initialize an array to store all character IDs
        const allCharacterIds = [];

        // Loop through each page and fetch character IDs
        for (let page = 1; page <= totalPages; page++) {
            const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
            const data = await response.json();

            // Extract character IDs from the current page and add them to the array
            const characterIds = data.results.map(character => character.id);
            allCharacterIds.push(...characterIds);
        }

        return allCharacterIds;
    } catch (error) {
        console.error('Error fetching character IDs:', error);
        return [];
    }
}

// Function to fetch and display characters by their characterIds
async function fetchCharactersByIds() {
    // Get all character IDs
    const characterIds = await fetchAllCharacterIds();

    // Check if characterIds is not empty
    if (characterIds.length === 0) {
        return;
    }

    const characterContainer = document.getElementById('character-container');

    try {
        for (const characterId of characterIds) {
            // Fetch the character by ID from the API
            const response = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`);
            const character = await response.json();

            // Create a card element for the character (same code as before)
            // ...

            const card = document.createElement('div');
            card.classList.add('character-card'); // You can style this class in CSS

            // Create an image element for the character's avatar
            const avatar = document.createElement('img');
            avatar.src = character.image;

            // Create elements for name, status, and location
            const name = document.createElement('h2');
            name.textContent = character.name;

            const status = document.createElement('p');
            status.textContent = `Status: ${character.status}`;

            const location = document.createElement('p');
            location.textContent = `Location: ${character.location.name}`;

            const species = document.createElement('p');
            species.textContent = `Species: ${character.species}`;

            // Append elements to the card
            card.appendChild(avatar);
            card.appendChild(name);
            card.appendChild(status);
            card.appendChild(species);
            card.appendChild(location);

            // Append the card to the container
            characterContainer.appendChild(card);
        }
    } catch (error) {
        console.error('Error fetching characters by IDs:', error);
    }
}

// Call the fetchCharactersByIds function to fetch and display all characters
fetchCharactersByIds();


