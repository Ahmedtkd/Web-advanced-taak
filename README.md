## Pokemon API
Welkom! Dit is mijn interactieve Single Page Web App over Pokémon.
Een interactieve Single Page Web Applicatie gebouwd met Vite, Vanilla JavaScript en de PokéAPI. De app laat je Pokémon zoeken, filteren op type, sorteren op XP en favorieten beheren via LocalStorage. Met ondersteuning voor licht en donker thema en volledig responsive design.

#  Projectbeschrijving
Deze applicatie haalt data op van de officiële https://pokeapi.co/ en toont een interactieve lijst van Pokémon. Je kunt zoeken op naam, filteren op type (fire, water, grass), sorteren op XP, favorieten markeren en wisselen tussen licht/donker thema. Het project is gemaakt als eindopdracht voor het vak Web Advanced.
			
## 🛠 Functionaliteiten

| Functionaliteit           | Beschrijving                                             | Bestand                        | Lijnnummers     |
|---------------------------|--------------------------------------------------------|------------------                |------------------|
| Pokémon weergeven         | Haalt Pokémon op en toont naam, afbeelding, type, gewicht, XP, enz. | `scripts/main.js`     | 1–45           |
| Zoekfunctie               | Zoekt op naam in realtime                              | `scripts/main.js`                  | 83–98           |
| Filter op type            | Toont alleen Pokémon van geselecteerd type            | `scripts/main.js`                   | 123–130         |
| Sorteren                  | Sorteert op XP                                         | `scripts/main.js`                  | 133–146         |
| Favorieten opslaan        | Gebruiker kan favorieten toevoegen/verwijderen        | `scripts/main.js`                   | 46–73           |
| Favorieten met localStorage | Favorieten blijven behouden na herladen              | `scripts/main.js`                  | 51, 57, 69       |
| Favorieten tonen          | Toont lijst met favoriete Pokémon                     | `scripts/main.js`                   | 149–219         |
| Thema wijzigen            | Schakelen tussen licht en donker thema                | `scripts/main.js`                   | 102–121         |
| Home knop                 | Terug naar hoofdweergave                              | `scripts/main.js`                   | 221–229         |


## Screenshots van de applicatie
Startpagina met donkere thema: webadvancedtaak\src\pictures\HomePagina1.png, webadvancedtaak\src\pictures\HomePagina2.png, webadvancedtaak\src\pictures\HomePagina3.png
Mobiele view: webadvancedtaak\src\pictures\Mobieleversie1.png, webadvancedtaak\src\pictures\Mobieleversie2.png, webadvancedtaak\src\pictures\Mobieleversie3.png
Favorietenweergave: webadvancedtaak\src\pictures\Favoriet.png
Sort in type: webadvancedtaak\src\pictures\SortType.png
Zoekfunctie met pokemon naam: webadvancedtaak\src\pictures\Zoekfunctie.png
Sort op xp: webadvancedtaak\src\pictures\SorteerXP.png



##  Gebruikte bronnen
Pokemon API - https://pokeapi.co/ - voor het ophalen van personagedata en de logo
Vite - https://vite.dev/ - voor het opstellen van dit project
W3schools - https://www.w3schools.com/js/default.asp - voor referentie over JS, Fetch API, en CSS
ChatGPT :
- Achtergrond kleur veranderen op keuze -> white theme, dark theme : https://chatgpt.com/share/68250133-77e0-8009-b323-7fb795138cb7
- Filtering op basis van XP van elk Pokemon: https://chatgpt.com/share/682a5e37-5604-8009-8890-e2256755b2ce 
   voor help bij bepaalde onderdelen  
Structuur van de CSS : https://chatgpt.com/share/682f9242-bfb8-8011-b737-acb291f7493a 
Pokemon - logo : https://1000logos.net/wp-content/uploads/2017/05/Pokemon-Logo.png 
Principe van fetch() : https://www.youtube.com/watch?v=37vxWr0WgQk 

## Installatiehandleiding

  -Clone eerst de repository via het volgende commando: git clone https://github.com/Ahmedtkd/Web-advanced-taak.
  - Navigeer daarna naar de map met 'cd Web-advanced-taak'.
  - Installeer de nodige dependencies door 'npm install' uit te voeren.
  - Start vervolgens de ontwikkelserver via 'npm run dev'.
  - Zodra de server actief is, kun je de applicatie openen in je browser op http://localhost:5173.

## Technologieën
- HTML5 & CSS3 (Flexbox en Grid)
- JavaScript (ES6 Modules)
- Fetch API voor data ophalen
- LocalStorage voor favorieten en thema
- Pokemon API :  https://pokeapi.co/

## Auteur
Ahmed Takadoumi - Ahmedtkd
Contact : ahmed.takadoumi@student.ehb.be
Copyright (c) Ahmed Takadoumi

			
			


			
			
			
			
			

			
			
			
			
			

































