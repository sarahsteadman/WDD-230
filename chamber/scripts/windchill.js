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
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
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