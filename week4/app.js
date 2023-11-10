// Attaching the click event listener to the "Get Weather" button
document.getElementById('btn').addEventListener('click', function() {
    // receiving the city name
    let cityName = document.getElementById('cityInput').value;
    // Your OpenWeatherMap API Key - replace with your actual key
    let apikey = '3633217c1995a6894bb297ebe5e19099';
    
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=metric`;

    // Fetching weather data from the API
    fetch(apiUrl)
    .then(response => {
        // passing fail responses
        if (!response.ok) {
            throw new Error(`An error occurred: ${response.status}`);
        }
        return response.json();
    })
    .then(weatherData => {
        // weather details
        let description = weatherData.weather[0].description;
        let temperature = weatherData.main.temp;
        let wind = weatherData.wind.speed;
        // Updating the webpage with the weather information
        document.getElementById('weather-info').innerHTML = `
            <p>Detail Weather: ${description}</p>
            <p>Temperature: ${temperature} °C</p>
            <p>Speed of Wind: ${wind} m/s</p>
        `;
    })
    .catch(error => {
        // Handling any errors that occurred during the fetch
        console.error('Error fetching the weather data:', error);
        document.getElementById('weather-info').innerHTML = `<p>Error: ${error.message}</p>`;
    });
});