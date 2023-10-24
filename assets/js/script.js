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


    // TEST SEARCH WITH SEARCH BUTTON
    // Function to fetch character data from the API
    async function fetchCharacterData() {
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character');
            const data = await response.json();
            return data.results;
        } catch (error) {
            console.error('Error fetching character data:', error);
            return [];
        }
    }

    // Function to create and display character cards
    function displayCharacterCards(characters) {
        const searchResults = document.getElementById('search-results');
        searchResults.innerHTML = ''; // Clear previous search results

        characters.forEach(character => {
            const card = document.createElement('div');
            // Bootstrap column classes below
            // card.classList.add('col-md-4','mb-3');

            // Populate the card with character information
            card.innerHTML = `
                <div class="card">
                    <img src="${character.image}" class="card-img-top" alt="${character.name}">
                    <div class="card-body">
                        <h5 class="card-title">${character.name}</h5>
                        <p class="card-text">Status: ${character.status}</p>
                        <p class="card-text">Species: ${character.species}</p>
                        <p class="card-text">Location: ${character.location.name}</p>
                    </div>
                </div>
            `;

            searchResults.appendChild(card);
        });
    }

        // Function to reset the search and display all characters
        function resetSearch() {
            const searchInput = document.getElementById('search-input');
            searchInput.value = ''; // Clear the search input
    
            displayCharacterCards(allCharactersData); // Display all characters
        }

    // Function to perform the search
    async function searchCharacter() {
        const searchInput = document.getElementById('search-input').value.toLowerCase();
        const characters = await fetchCharacterData();
        const matchingCharacters = characters.filter(character => character.name.toLowerCase().includes(searchInput));
        displayCharacterCards(matchingCharacters);
    }

    // Add an event listener to trigger the search when the "Search" button is clicked
    document.getElementById('search-button').addEventListener('click', searchCharacter);
    // document.getElementById('reset-button').addEventListener('click', resetSearch);

    // resetSearch();



// TEST DISPLAY ALL CHARACTERS

    let allCharactersData = []; // Store all character data

    // Function to fetch all character data from the API
    async function fetchAllCharacterData() {
        try {
            let allCharacters = [];
            let page = 1;

            while (true) {
                const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
                const data = await response.json();

                if (data.results.length === 0) {
                    break; // No more characters to fetch
                }

                allCharacters = allCharacters.concat(data.results);
                page++;
            }

            return allCharacters;
        } catch (error) {
            console.error('Error fetching character data:', error);
            return [];
        }
    }

    // Function to create and display character cards
    function displayCharacterCards(characters) {
        const searchResults = document.getElementById('search-results');
        searchResults.innerHTML = ''; // Clear previous search results

        characters.forEach(character => {
            const card = document.createElement('div');
            card.classList.add('col-md-4', 'mb-3'); // Bootstrap column classes

            // Populate the card with character information
            card.innerHTML = `
                <div class="card">
                    <img src="${character.image}" class="card-img-top" alt="${character.name}">
                    <div class="card-body">
                        <h5 class="card-title">${character.name}</h5>
                        <p class="card-text">Status: ${character.status}</p>
                        <p class="card-text">Location: ${character.location.name}</p>
                    </div>
                </div>
            `;

            searchResults.appendChild(card);
        });
    }

    // Function to reset the search and display all characters
    function resetSearch() {
        const searchInput = document.getElementById('search-input');
        searchInput.value = ''; // Clear the search input

        displayCharacterCards(allCharactersData); // Display all characters
    }

    // Add event listeners
    document.getElementById('search-button').addEventListener('click', searchCharacter);
    document.getElementById('reset-button').addEventListener('click', resetSearch);

    // Initial display of all characters
    async function initialDisplay() {
        allCharactersData = await fetchAllCharacterData(); // Fetch all character data
        displayCharacterCards(allCharactersData); // Display all characters
    }

    // Call the initialDisplay function when the page loads
    window.addEventListener('load', initialDisplay);

