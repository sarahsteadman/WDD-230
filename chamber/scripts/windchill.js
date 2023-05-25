let speed = document.querySelector("#speed").innerHTML;
let temperature = document.querySelector("#temperature").innerHTML;

if(temperature <= 50 && speed > 3){
let windchill = 35.74 + (.6215 * temperature) - (35.75 * (speed ** .16)) + (.4275 * temperature * (speed ** .16));
document.querySelector("#chill").innerHTML = Math.round(windchill);
}
else{
let   windchill = "N/A";
document.querySelector("#chill").innerHTML = Math.round(windchill);
}