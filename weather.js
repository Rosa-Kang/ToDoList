
const API_KEY = `defe19f2cf7597457598bda07fa8ff36`
const COORDS = 'coords';
const weather = document.querySelector('.js-weather');

function getWeather(lat, lon) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature}˚C @ ${place}`;
    });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError() {
   console.log(`Can't access the location`);
}

function askForCords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);

}

function loadCoords() {
const loadedCoords = localStorage.getItem(COORDS);
if(loadedCoords === null) {
    askForCords();
} else {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
}
}
function init(){
  loadCoords();
}

init();