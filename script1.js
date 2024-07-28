const aside = document.getElementById('aside')
const body = document.querySelector('body')
const main = document.getElementById('main')
const search = document.getElementById('search')
const animal = document.getElementById('animal-list')
const darkMode = () =>{
    if(body.style.backgroundColor == 'rgb(24, 24, 27)'){
        body.style.backgroundColor = 'white'
        aside.style.backgroundColor = 'rgb(250 250 250 / var(--tw-bg-opacity)'
        aside.style.color = 'rgb(24, 24, 27)'

        main.style.color = 'rgb(24, 24, 27)'
        main.style.backgroundColor = 'rgb(250 250 250 / var(--tw-bg-opacity)' 
        
        search.style.color = 'rgb(24, 24, 27)'
        search.style.backgroundColor = 'rgb(250 250 250 / var(--tw-bg-opacity)'
        
        animal.style.color = 'rgb(24, 24, 27)'
        animal.style.backgroundColor = 'rgb(250 250 250 / var(--tw-bg-opacity)'
    }else{
        body.style.backgroundColor = 'rgb(24, 24, 27)'
        aside.style.backgroundColor = 'rgb(24, 24, 27)';
        aside.style.color = 'white'

        main.style.color = 'white'
        main.style.backgroundColor = 'rgb(24, 24, 27)'

        search.style.color = 'white'
        search.style.backgroundColor = 'rgba(31,30,37,255)'

        animal.style.color = 'white'
        animal.style.backgroundColor = 'rgb(24, 24, 27)'
    }
}

// Replace 'YOUR_API_KEY' with your actual API key
const apiKey = 'Y3P5TyOuEOwjiHxyjMD2kA==xWUnBGqLiQJCFmYK';

function animalSearch() {
  const animal = document.getElementById('animalInput').value.trim();
  if (animal) {
    const apiUrl = `https://api.api-ninjas.com/v1/animals?name=${encodeURIComponent(animal)}`;

    console.log('Searching for:', animal);  // Log the animal name being searched for

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
      })
      .catch(error => {
        console.error('Error fetching data:', error);
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
      animalDiv.className = 'p-4  rounded-lg shadow-md';
      animalDiv.innerHTML = `
        <h2 class="text-xl font-bold">${animal.name}</h2>
        <p><strong>Scientific Name:</strong> ${animal.taxonomy.scientific_name || 'N/A'}</p>
        <p><strong>Family:</strong> ${animal.taxonomy.family || 'N/A'}</p>
        <p><strong>Habitat:</strong> ${animal.characteristics.habitat || 'N/A'}</p>
        <p><strong>Diet:</strong> ${animal.characteristics.diet || 'N/A'}</p>
      `;
      animalList.appendChild(animalDiv);
    });
  }
}

