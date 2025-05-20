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

          const favorietButton = document.createElement('button');
          favorietButton.textContent = '🤍';
          favorietButton.classList.add('favorietButton');

          // Gemaakt met leerkracht
          let favoriets = JSON.parse(localStorage.getItem('favoriets')) || [];
          if (favoriets.includes(details.name)){
            favorietButton.textContent = '❤️'; 
          }

          favorietButton.addEventListener('click', () => {
            let favoriets = JSON.parse(localStorage.getItem('favoriets')) || [];

            if (favoriets.includes(details.name)){
              favoriets = favoriets.filter(name => name !== details.name);
              favorietButton.textContent = '🤍';
            }
            else{
              favoriets.push(details.name);
              favorietButton.textContent = '❤️';
            }

            // Uitleg gevraagd
            localStorage.setItem('favoriets', JSON.stringify(favoriets));
            if (document.getElementById('favorietLijst').style.display !== 'none') {
              toonFavorieten();
            }
          });
          
          card.appendChild(favorietButton);
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

const filterSelect = document.getElementById('typeFilter');
filterSelect.addEventListener('change', function () {
  const selected = this.value.toLowerCase();
  document.querySelectorAll('.pokemon-card').forEach(card => {
    const types = card.querySelector('p:nth-child(6)').textContent.toLowerCase();
    card.style.display = types.includes(selected) || selected === '' ? 'block' : 'none';
  });
});

//CHATGPT
document.getElementById('xpSort').addEventListener('change', function () {
  const sortOrder = this.value;
  const container = document.getElementById('characterList');
  const cards = Array.from(container.querySelectorAll('.pokemon-card'))
    .filter(card => card.style.display !== 'none');

  cards.sort((a, b) => {
    const xpA = parseInt(a.querySelector('p:nth-child(1)').textContent.replace('Base XP: ', ''));
    const xpB = parseInt(b.querySelector('p:nth-child(1)').textContent.replace('Base XP: ', ''));
    return sortOrder === 'lowToHigh' ? xpA - xpB : xpB - xpA;
  });

  cards.forEach(card => container.appendChild(card));
});


document.getElementById('MaakFavoriet').addEventListener('click', () => {
  const lijst = document.getElementById('favorietLijst');
  const characterList = document.getElementById('characterList');

  if (lijst.style.display === 'none' || lijst.style.display === '') {
    lijst.style.display = 'flex'; // Belangrijk: verander naar flex in plaats van block
    lijst.style.flexWrap = 'wrap';
    lijst.style.justifyContent = 'center';
    lijst.style.gap = '1rem';
    characterList.style.display = 'none';
    toonFavorieten();
  } else {
    lijst.style.display = 'none';
    characterList.style.display = 'flex'; // Belangrijk: verander naar flex in plaats van block
    characterList.style.flexWrap = 'wrap';
    characterList.style.justifyContent = 'center';
    characterList.style.gap = '1rem';
  }
});

function toonFavorieten() {
  const lijst = document.getElementById('favorietLijst');
  const favoriets = JSON.parse(localStorage.getItem('favoriets')) || [];

  lijst.innerHTML = ''; 

  if (favoriets.length === 0) {
    lijst.innerHTML = '<p>Geen favorieten geselecteerd.</p>';
    return;
  }

  favoriets.forEach(name => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then(details => {
        const card = document.createElement('div');
        card.classList.add('pokemon-card');

        const experience = document.createElement('p');
        experience.textContent = `Base XP: ${details.base_experience}`;

        const nameEl = document.createElement('h3');
        nameEl.textContent = details.name;

        const image = document.createElement('img');
        image.src = details.sprites.front_default;
        image.alt = details.name;

        const weight = document.createElement('p');
        weight.textContent = `Gewicht: ${details.weight}`;

        const height = document.createElement('p');
        height.textContent = `Hoogte: ${details.height}`;

        const types = document.createElement('p');
        types.textContent = `Type(s): ${details.types.map(t => t.type.name).join(', ')}`;

        card.appendChild(experience);
        card.appendChild(nameEl);
        card.appendChild(image);
        card.appendChild(weight);
        card.appendChild(height);
        card.appendChild(types);

        lijst.appendChild(card);
      })
      .catch(err => {
        console.error(`Fout bij ophalen van ${name}:`, err);
      });
  });
}

const homeBtn = document.getElementById('homeBtn');

homeBtn.addEventListener('click', () => {
  document.getElementById('favorietLijst').style.display = 'none';
  document.getElementById('characterList').style.display = 'flex'; // Belangrijk: verander naar flex in plaats van block
  document.getElementById('characterList').style.flexWrap = 'wrap';
  document.getElementById('characterList').style.justifyContent = 'center';
  document.getElementById('characterList').style.gap = '1rem';
});