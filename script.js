const apiKey = "a4b454db97c8dd2dfa69a34c7f47c87f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherCondition = document.querySelector(".weather-condition");


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
        document.querySelector(".weather-condition").innerHTML = data.weather[0].main;
    }

    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
        document.querySelector(".weather-condition").innerHTML = data.weather[0].main;
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
        document.querySelector(".weather-condition").innerHTML = data.weather[0].main;

    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
        document.querySelector(".weather-condition").innerHTML = data.weather[0].main;

    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
        document.querySelector(".weather-condition").innerHTML = data.weather[0].main;

    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png";
        document.querySelector(".weather-condition").innerHTML = data.weather[0].main;

    }else if(data.weather[0].main == "Haze"){
        weatherIcon.src = "images/mist.png";
        document.querySelector(".weather-condition").innerHTML = data.weather[0].main;

    }

    document.querySelector(".weather").style.display = "block";


}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
