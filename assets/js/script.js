// const apiUrl = 'https://rickandmortyapi.com/api/character';

// async function fetchCharacters() {
//     try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();

//         const characterList = document.getElementById('character-list');
//         data.results.forEach((character) => {
//             const li = document.createElement('li');
//             li.textContent = character.name;
//             characterList.appendChild(li);
//         });
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// fetchCharacters();

   //FETCH ALL CHARACTERS
   const apiUrl = 'https://rickandmortyapi.com/api/character';
   // Function to fetch and display characters
async function fetchCharacters() {
    // const charactersPerPage = 20; 
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

        // Loop through each character in the allCharacters array
        allCharacters.forEach(character => {
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
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the fetchCharacters function to fetch and display all characters
fetchCharacters();
