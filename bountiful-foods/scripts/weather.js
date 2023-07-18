const url = "https://api.openweathermap.org/data/2.5/forecast?lat=33.1581&lon=-117.3506&units=imperial&appid=709cc8eb605fd6c0bf2a9a2942cf3cf3"

async function apiFetch() {
    try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data)
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function  displayResults(weatherData) {
    day=weatherData.list[0];
    day1=weatherData.list[1].main.temp;
    day2=weatherData.list[2].main.temp;
    day3=weatherData.list[3].main.temp;
    temp = day.main.temp;
    humidity = day.main.humidity;
    condition = day.weather[0].description;
    icon = day.weather[0].icon;
  
    const iconsrc = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    
    document.querySelector("#condition").innerHTML = condition;
    document.querySelector("#temperature").innerHTML = temp;
    document.querySelector("#humidity").innerHTML = humidity;
    document.querySelector("#icon").setAttribute('src', iconsrc);
    document.querySelector("#d1").innerHTML = day1;
    document.querySelector("#d2").innerHTML = day2;
    document.querySelector("#d3").innerHTML = day3;    

  }
  function displayday(day){
    if (day > 6){
      day -= 7;
    }
    switch(day) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
  }}
now= new Date();

document.querySelector("#weekday1").innerHTML = displayday(now.getDay() + 1);
document.querySelector("#weekday2").innerHTML = displayday(now.getDay() + 2);
document.querySelector("#weekday3").innerHTML = displayday(now.getDay() + 3);

apiFetch();

// Smoothies Made

let counter = document.querySelector('#counter');

let smoothies = Number(window.localStorage.getItem("smoothies")) || 0;

counter.innerHTML = smoothies;

window.addEventListener("storage", function (event) {
	if (event.key === "smoothie") {
	  counter.innerHTML = localStorage.getItem("smoothie");
	}
  }); 