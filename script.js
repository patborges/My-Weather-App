function searchCity(city) {
    let apiKey = "388afacfb92bd4f649accab582225b09";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
}

function city(event) {
    event.preventDefault();
    let city = document.querySelector("#city-input").value;
    searchCity(city);
}

function showTemperature(response) {
    document.querySelector("#city").innerHTML = response.data.name;

    document.querySelector("#temperature").innerHTML = Math.round(
        response.data.main.temp
    );

    let humidity = response.data.main.humidity;
    let currentHumidity = document.querySelector("#humidity");
    currentHumidity.innerHTML = `Humidity: ${humidity}%`;

    let wind = Math.round(response.data.wind.speed);
    let currentWind = document.querySelector("#wind");
    currentWind.innerHTML = `Wind: ${wind}km/h`;

    document.querySelector("#condition").innerHTML =
        response.data.weather[0].main;
}

function searchLocation(position) {
    let apiKey = "388afacfb92bd4f649accab582225b09";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showTemperature);
}

function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
}

let search = document.querySelector("#search-form");
search.addEventListener("submit", city);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("Lisbon");
