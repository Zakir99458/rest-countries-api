const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries =>{
    const container = document.getElementById('countries');
    const countryHTML = countries.map(country => getCountryHTML(country))
    container.innerHTML = countryHTML.join('');

    console.log(countries[0])
    console.log(countryHTML[0]);
}

const getCountryHTML = (country) => {
    return `
        <div class="country"> 
            <h2> ${country.name.common} </h2>
            <h4> ${country.capital} </h4>
            <img src="${country.flags.png}">  </img>
        </div>
    `
}
loadCountries();