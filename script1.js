const aside = document.getElementById('aside')
const body = document.querySelector('body')
const main = document.getElementById('main')
const animalInput = document.getElementById('animalInput')
const animal = document.getElementById('animal-list')
const card8 = document.getElementById('card8')
const card9 = document.getElementById('card9')
const card10 = document.getElementById('card10')
const darkMode = () => {
  if (body.style.backgroundColor == 'rgb(24, 24, 27)') {
    body.style.backgroundColor = 'white'
    aside.style.backgroundColor = 'rgb(250 250 250 / var(--tw-bg-opacity)'
    aside.style.color = 'rgb(24, 24, 27)'

    main.style.color = 'rgb(24, 24, 27)'
    main.style.backgroundColor = 'rgb(250 250 250 / var(--tw-bg-opacity)'

    animalInput.style.backgroundColor = 'rgb(250 250 250 / var(--tw-bg-opacity)'
    animalInput.style.color = 'black'

    animal.style.color = 'rgb(24, 24, 27)'
    animal.style.backgroundColor = 'rgb(250 250 250 / var(--tw-bg-opacity)'

    const right = document.getElementById('right')
    right.style.backgroundColor = 'white';
    right.style.color = 'black'

    card8.style.backgroundColor = 'rgb(250 250 250 / var(--tw-bg-opacity)'
    card8.style.color = 'black'

    card9.style.backgroundColor = 'rgb(250 250 250 / var(--tw-bg-opacity)'
    card8.style.color = 'black'

    card10.style.backgroundColor = 'rgb(250 250 250 / var(--tw-bg-opacity)'
    card10.style.color = 'black'


  } else {
    body.style.backgroundColor = 'rgb(24, 24, 27)'
    aside.style.backgroundColor = 'rgb(24, 24, 27)';
    aside.style.color = 'white'

    main.style.color = 'white'
    main.style.backgroundColor = 'rgb(24, 24, 27)'

    animalInput.style.backgroundColor = 'rgb(31,30,37,255)'
    animalInput.style.color = 'white'

    animal.style.color = 'white'
    animal.style.backgroundColor = 'rgb(24, 24, 27)';

    const right = document.getElementById('right')
    right.style.backgroundColor = 'rgb(24, 24, 27)';
    right.style.color = 'white';

    card8.style.backgroundColor = 'rgb(31,30,37,255)'
    card8.style.color = 'white'

    card9.style.backgroundColor = 'rgb(31,30,37,255)'
    card9.style.color = 'white'

    card10.style.backgroundColor = 'rgb(31,30,37,255)'
    card10.style.color = 'white'
  }
}

const apiKey = 'Y3P5TyOuEOwjiHxyjMD2kA==xWUnBGqLiQJCFmYK';
function animalSearch(event) {
  event.preventDefault();
  const animal = document.getElementById('animalInput').value.trim();
  console.log(animal);

  if (animal) {
    const apiUrl = `https://api.api-ninjas.com/v1/animals?name=${encodeURIComponent(animal)}`;
    const spinner = document.getElementById('spinner');
    const animalList = document.getElementById('animal-list');

    // Show spinner and hide animal list
    spinner.classList.remove('hidden');
    animalList.classList.add('hidden');

    console.log('Searching for:', animal);

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data); // Inspect the API response
        displayAnimals(data);
        // Hide spinner and show animal list
        spinner.classList.add('hidden');
        animalList.classList.remove('hidden');
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        // Hide spinner even if there is an error
        spinner.classList.add('hidden');
        animalList.classList.remove('hidden');
        animalList.innerHTML = '<p class="text-red-500">Error fetching data. Please try again later.</p>';
      });
  } else {
    console.error('Animal name cannot be empty');
  }
}

function displayAnimals(animals) {
  const animalList = document.getElementById('animal-list');
  animalList.innerHTML = ''; // Clear previous results

  if (animals.length === 0) {
    animalList.innerHTML = '<p class="text-red-500">No animals found.</p>';
  } else {
    animals.forEach(animal => {
      console.log(animal); // Log the entire animal object for inspection
      const animalDiv = document.createElement('div');
      animalDiv.className = 'p-4 rounded-lg shadow-md';
      animalDiv.innerHTML = `
        <div class='flex flex-col gap-3 p-3'>
        <h2 class="text-xl font-bold">${animal.name}</h2>
        <p><strong>Scientific Name:</strong> ${animal.taxonomy.scientific_name || 'N/A'}</p>
        <p><strong>Family:</strong> ${animal.taxonomy.family || 'N/A'}</p>
        <p><strong>Habitat:</strong> ${animal.characteristics.habitat || 'N/A'}</p>
        <p><strong>Diet:</strong> ${animal.characteristics.diet || 'N/A'}</p>
        </div>
      `;
      animalList.appendChild(animalDiv);
    });
  }
}

const toggle = () => {
  const menu = document.getElementById('menu')
  menu.style.display = menu.style.display == 'none' ? 'block' : 'none'
}

toggle()

