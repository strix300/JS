import { serverUrl,cityName,apiKey,addCityLocation } from "./consts/anyConsts.js";
import { infoNow,infoNowtemp } from "./consts/constsInfoNow.js";
import { infoDetailsFeelslike,infoDetailsTemp,infoDetailsWeather,infoDetailsSunrise,infoDetailsSunset } from "./consts/constInfoDetails.js";
import { infoForecast,ForecastServerUrl } from "./consts/constsInfoForecast.js";

async function sendresp() {
    try {
        const url = `${serverUrl}?q=${cityName.value}&appid=${apiKey}`;
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error('Ошибка при выполнении запроса');
        }
        let commits = await response.json();
        
        const urlForecast = `${ForecastServerUrl}?q=${cityName.value}&appid=${apiKey}`;
        let responseForecast = await fetch(urlForecast);
        let commitsForecast = await responseForecast.json();
        
        infoNowCreate(commits);
        infoDetailsCreate(commits);
        infoForecastCreate(commitsForecast);

        const addFavouriteCity = document.querySelector(".favouritecity");
        addFavouriteCity.addEventListener('click', addCity);
    } catch (error) {
        alert(error);
    }
}

async function sendrespfav(city) {
    try {
        const url = `${serverUrl}?q=${city}&appid=${apiKey}`;
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error('Ошибка при выполнении запроса');
        }
        let commits = await response.json();

        
        const urlForecast = `${ForecastServerUrl}?q=${city}&appid=${apiKey}`;
        let responseForecast = await fetch(urlForecast);
        let commitsForecast = await responseForecast.json();
        
        infoNowCreate(commits);
        infoDetailsCreate(commits);
        infoForecastCreate(commitsForecast);

    } catch (error) {
        alert(error);
    }
}

function addCity() {
    let cityElements = addCityLocation.querySelectorAll('.cities');
    let closeButtonElements = addCityLocation.querySelectorAll('.close-button')

    cityElements.forEach(city => {
        city.remove();
    });

    closeButtonElements.forEach(close => {
        close.remove();
    });

    if (cityName.value){
        localStorage.setItem(cityName.value, cityName.value);
    }

    for (let key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
          continue; 
        }
        const div = document.createElement('div');
        div.classList.add('BigCities');
        const createFavouriteCity = document.createElement('button');
        createFavouriteCity.classList.add('cities');
        createFavouriteCity.setAttribute('type', 'button');
        createFavouriteCity.value = localStorage.getItem(key);
        createFavouriteCity.textContent = localStorage.getItem(key);
        createFavouriteCity.addEventListener('click', function() {
            sendrespfav(createFavouriteCity.value);
        });
        
        const closebutton = document.createElement('button');
        closebutton.classList.add('close-button');
        closebutton.setAttribute('type', 'button');
        closebutton.textContent = '✖';
        closebutton.addEventListener('click', function () {
            div.parentNode.removeChild(div);
            localStorage.removeItem(key);
        })

        div.appendChild(createFavouriteCity);
        div.appendChild(closebutton);
        addCityLocation.appendChild(div);
    }
}

function infoNowCreate(commits) {
    infoNowtemp.textContent = Math.round(commits.main.temp - 273,15) + "°C";
        const existingWeatherIcon = document.querySelector(".infoNow-icon");
        if (existingWeatherIcon) {
            existingWeatherIcon.remove();
        }
        let iconCode = commits.weather[0].icon;
        const imageUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
        const weatherIcon = document.createElement("img");
        weatherIcon.src = imageUrl;
        weatherIcon.className = "infoNow-icon";
        infoNow.appendChild(weatherIcon);
}

function infoDetailsCreate(commits) {
    infoDetailsTemp.textContent = "Temperature: " + Math.round(commits.main.temp - 273,15) + "°C";
    infoDetailsFeelslike.textContent = "Feels like: " + Math.round(commits.main.feels_like - 273,15) + "°C";
    infoDetailsWeather.textContent = "Weather: " + commits.weather[0].main;

    let sunRiseTime = commits.sys.sunrise;
    let formattedTimeSunrise = translateoftime(sunRiseTime);
    infoDetailsSunrise.textContent = "Sunrise: " + formattedTimeSunrise;

    let sunSetTime = commits.sys.sunset;
    let formattedTimeSunset = translateoftime(sunSetTime);
    infoDetailsSunset.textContent = "Sunset: " + formattedTimeSunset;
}

async function infoForecastCreate(commitsForecast) {
    while (infoForecast.firstChild) {
        infoForecast.firstChild.remove();
    }
    for (let i = 0; i < 8; i++){
        const divForecastStatus = document.createElement('div');
        divForecastStatus.classList.add('forecastStatus')

        const divForecastDate = document.createElement('div');
        divForecastDate.classList.add('ForecastDate')
        divForecastDate.textContent = convertDateForecast(commitsForecast.list[i].dt_txt)

        const divForecastTime = document.createElement('div');
        divForecastTime.classList.add('ForecastTime')
        divForecastTime.textContent = convertTimeForecast(commitsForecast.list[i].dt_txt)

        const ForecastTemperature = document.createElement('div');
        ForecastTemperature.classList.add('ForecastTemperature');
        const temp = document.createElement('div');
        const feels_like = document.createElement('div');
        temp.textContent = "Temperature: " + Math.round(commitsForecast.list[i].main.temp- 273,15) + "°C";
        feels_like.textContent = "Feels like: " + Math.round(commitsForecast.list[i].main.feels_like - 273,15) + "°C";
        ForecastTemperature.appendChild(temp);
        ForecastTemperature.appendChild(feels_like);

        const ForecastCloudsStatus = document.createElement('div')
        ForecastCloudsStatus.classList.add('ForecastCloudsStatus');
        const textStatus = document.createElement('div');
        textStatus.textContent = commitsForecast.list[i].weather[0].description;

        const imageStatus = document.createElement("img");
        imageStatus.classList.add('ForecastCloudsImg')
        let iconCode = commitsForecast.list[i].weather[0].icon;
        const imageStatusUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
        imageStatus.src = imageStatusUrl;

        ForecastCloudsStatus.appendChild(textStatus);
        ForecastCloudsStatus.appendChild(imageStatus);

        divForecastStatus.appendChild(divForecastDate);
        divForecastStatus.appendChild(divForecastTime);
        divForecastStatus.appendChild(ForecastTemperature);
        divForecastStatus.appendChild(ForecastCloudsStatus);

        infoForecast.appendChild(divForecastStatus);
    }
}

function convertDateForecast(dateTimeString) {
const dateTime = new Date(dateTimeString);

const day = dateTime.getDate();
const monthIndex = dateTime.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const month = months[monthIndex];

const formattedDate = `${day} ${month}`;
return formattedDate;
}

function convertTimeForecast(time) {
    const dataTime = new Date(time);
    let hours = dataTime.getHours();
    let minutes = dataTime.getMinutes();
    if (hours < 10){
        hours = "0" + hours;
    }
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    const formattedTime = `${hours}:${minutes}`;
    return formattedTime;
}

function translateoftime (time){ 
    let date = new Date(time * 1000);
    let hours = date.getHours();
    if (hours < 10){
        hours = "0" + hours;
    }
    let minutes = date.getMinutes();
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    const formattedTime = `${hours}:${minutes}`;
    return formattedTime;
}

export {
    sendresp,
    addCity,
    sendrespfav,
    infoNowCreate,
    infoDetailsCreate,
    infoForecastCreate,
    convertDateForecast,
    convertTimeForecast,
    translateoftime
}