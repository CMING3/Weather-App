async function getWeatherData() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=France&appid=5191f102ac8f8da110e0cc9eddcf9e57`,
    {
        mode:'cors'
    });
    const weatherData = await response.json();

    const temperature = weatherData.main.temp;
    const locationName = weatherData.name;
    const sky = weatherData.weather[0].description;
    const windSpeed = weatherData.wind.speed;
    const humidity = weatherData.main.humidity;

    console.log(weatherData)
    console.log(sky,locationName,temperature,windSpeed,humidity)
}
