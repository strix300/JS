const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const cityName = document.querySelector(".inputsearch");
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f'; 
const searchbutton = document.querySelector(".button");
const addCityLocation = document.querySelector(".favourite-cities");
const invise = document.querySelector(".invise");

export {
    serverUrl,
    cityName,
    apiKey,
    searchbutton,
    addCityLocation,
    invise
}