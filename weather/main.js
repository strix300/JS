import { searchbutton,invise } from "./consts/anyConsts.js";
import { infoNow,nowButton } from "./consts/constsInfoNow.js";
import { infoDetails,detailsButton } from "./consts/constInfoDetails.js";
import { infoForecast,forecastButton} from "./consts/constsInfoForecast.js";

import { sendresp,addCity } from "./functions.js";

addCity();

searchbutton.addEventListener('click',sendresp);

nowButton.addEventListener('click', () => {
    infoNow.style.zIndex = 4;
    invise.style.zIndex = 3;
    infoForecast.style.zIndex = 2;
    infoDetails.style.zIndex = 1;

    nowButton.style.backgroundColor = "#ffa8b6";
    forecastButton.style.backgroundColor = "transparent"
    detailsButton.style.backgroundColor = "transparent"
});

detailsButton.addEventListener('click', () => {
    infoDetails.style.zIndex = 4;
    invise.style.zIndex = 3;
    infoForecast.style.zIndex = 1;
    infoNow.style.zIndex = 2;
    
    detailsButton.style.backgroundColor = "#ffa8b6";
    forecastButton.style.backgroundColor = "transparent"
    nowButton.style.backgroundColor = "transparent"
});

forecastButton.addEventListener('click', ()=>{
    infoForecast.style.zIndex = 4;
    invise.style.zIndex = 3;
    infoNow.style.zIndex = 1;
    infoDetails.style.zIndex = 2;

    forecastButton.style.backgroundColor = "#ffa8b6";
    detailsButton.style.backgroundColor = "transparent"
    nowButton.style.backgroundColor = "transparent"
})