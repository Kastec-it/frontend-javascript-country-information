import axios from 'axios';

console.log('Hallo daar!');

async function fetchCountries() {
    try {
        const response = await axios.get('https://restcountries.com/v2/all');
        const counties =response.data

        // data array sorteren op populatie van elk land
        counties.sort((a ,b) => {return a.population - b.population });
        //console.log(counties.sort());

        //functie array die data naar pagina injecteert
        createListItems(counties)



    } catch (e) {
        console.error(e);
    }
}

fetchCountries();


function createListItems(countries) {
    //referentie naar de ul in de html door middel van een getElementById
    const countryList = document.getElementById('country-list');

    //inner html maken met een li met een image,span en P element

    countryList.innerHTML = countries.map((country) => {
        return `
      <li>
        <img src="${country.flag}" alt="Vlag van ${country.name}" class="flag" />
        <span class="${getRegionColor(country.region)}">${country.name}</span>
        <p class="population">Has a population of ${country.population} people</p>
      </li>
    `;
    }).join('');

    function getRegionColor (currentRegion) {
        switch (currentRegion) {
            case 'Americas':
                return 'green';

            case 'europe':
                return 'yellow';

            case 'Asia':
                return 'red';

            case 'Africa':
                return 'blua';

            case 'Oceania':
                return 'purple'
        }
    }
}console.log('Hallo daar!');