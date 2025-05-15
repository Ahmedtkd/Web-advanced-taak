// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))


fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
  .then(response => response.json())
  .then(data => {
    const characterList = document.getElementById('characterList');
    characterList.innerHTML = '';

    data.results.forEach(pokemon => {
      fetch(pokemon.url)
        .then(res => res.json())
        .then(details => {
          const card = document.createElement('div');
          card.classList.add('pokemon-card');

          // Naam
          const name = document.createElement('h3');
          name.textContent = details.name;

          // Afbeelding
          const image = document.createElement('img');
          image.src = details.sprites.front_default;
          image.alt = details.name;

          // Gewicht
          const weight = document.createElement('p');
          weight.textContent = `Gewicht: ${details.weight}`;

          // Hoogte
          const height = document.createElement('p');
          height.textContent = `Hoogte: ${details.height}`;

          // Types 
          const types = document.createElement('p');
          const typeNames = details.types.map(t => t.type.name).join(', ');
          types.textContent = `Type(s): ${typeNames}`;

          const experience = document.createElement('p');
          experience.textContent = `Base XP: ${details.base_experience}`;
          
          
          card.appendChild(experience);
          card.appendChild(name);
          card.appendChild(image);
          card.appendChild(weight);
          card.appendChild(height);
          card.appendChild(types);

          characterList.appendChild(card);
        })
        .catch(err => {
          console.error('Fout bij ophalen: ', err);
        });
    });
    const searchInput = document.getElementById('search');

searchInput.addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const allCards = document.querySelectorAll('.pokemon-card');

  allCards.forEach(card => {
    const name = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = name.includes(query) ? 'block' : 'none';
  });
});

  })
  .catch(error => {
    console.error('Fout bij het ophalen van de lijst Pokémon:', error);
  });


  // ChatGPT
  const themeSelect = document.getElementById('themeSelectie');

  themeSelect.addEventListener('change', () => {
    const selectedTheme = themeSelect.value;
    const root = document.documentElement;
  
    // Verwijder bestaande thema-klassen
    root.classList.remove('light-theme', 'dark-theme');
  
    // Voeg nieuwe toe
    if (selectedTheme === 'light') {
      root.classList.add('light-theme');
    } else {
      root.classList.add('dark-theme');
    }
  });
  
  // Zet standaard thema
  document.documentElement.classList.add('dark-theme');
  themeSelect.value = 'dark';
  