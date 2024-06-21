const apiKey = "fac2a2208d1490443a7f7d5137889645";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

document.addEventListener("DOMContentLoaded", () => {
    const searchbox = document.getElementById("cityInput");
    const searchbtn = document.getElementById("searchButton");

    async function checkWeather(city) {
        try {
            const url = `${apiUrl}${city}&appid=${apiKey}&units=metric`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Weather data not found");
            }

            const data = await response.json();
            console.log(data);

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        } catch (error) {
            console.error("Error fetching weather data:", error);
            alert("Weather data not found. Please try again.");
        }
    }

    searchbtn.addEventListener("click", (e) => {
        e.preventDefault();
        const city = searchbox.value.trim();
        if (city) {
            checkWeather(city);
        } else {
            alert("Please enter a city name");
        }
    });
});
