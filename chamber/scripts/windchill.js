const url =
"https://api.openweathermap.org/data/2.5/weather?lat=43.7314&lon=7.419&units=imperial&appid=b500430b0da641eda0c3a8a5dea9ca0e";

async function apiFetch() {
    try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
function  displayResults(weatherData) {
    temperature = weatherData.main.temp;
    speed = weatherData.wind.speed;
    calculateWindChill(speed,temperature);
  
    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    const desc = weatherData.weather[0].description;
    
    weatherIcon = document.querySelector("#icon");
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    document.querySelector("#iconCap").innerHTML = desc;
  }

function calculateWindChill(speed, temperature) {
    document.querySelector("#speed").innerHTML = speed;
    document.querySelector("#temperature").innerHTML = temperature;

  if (temperature <= 50 && speed > 3) {
    let windchill =
      35.74 +
      0.6215 * temperature -
      35.75 * speed ** 0.16 +
      0.4275 * temperature * speed ** 0.16;
    document.querySelector("#chill").innerHTML = Math.round(windchill);
  } else {
    let windchill = "N/A";
    document.querySelector("#chill").innerHTML = Math.round(windchill);
  }
}
apiFetch();
//////////////////////////////////////////////////Cards///////////////////////////////////////////////////////////
const file = 'scripts/directory.json';
let cards = document.querySelector('#spotlights');

const displayBusinesses = (businesses) =>{

    businesses.sort(() => Math.random() - 0.5);

    spotlights = [businesses[0], businesses[1], businesses[2]];

    spotlights.forEach((business) => {
        let card = document.createElement('section');
        let image = document.createElement('img');
        let h5 = document.createElement('h5');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        

        image.setAttribute('src', business.img);
        image.setAttribute('alt',  `image of ${business.name}`);
        image.setAttribute('loading', 'lazy');
        
        h5.textContent = `${business.name}`
        p2.textContent = `${business.phone}`
        p3.textContent = `${business.email}`
        p4.textContent = `${business.website}`
        
        card.appendChild(h5);
        card.appendChild(image)
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(p4);
        cards.appendChild(card);
        
    })
}

async function getbusinessData() {
    const response = await fetch(file);
    const data = await response.json();
    
    spotlights = data.businesses.filter(b => b.membership == "Gold" || b.membership == "Silver")
    
    displayBusinesses(spotlights);
  }
  
  getbusinessData();