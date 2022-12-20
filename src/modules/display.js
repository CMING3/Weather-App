export default function handleDisplay(weatherData){

    const sky = document.querySelector(".sky");
    const place = document.querySelector(".place");
    const degree = document.querySelector(".degree");
    const wind = document.querySelector(".wind");
    const humidity = document.querySelector(".humidity");

    sky.innerHTML = weatherData.sky;
    place.innerHTML = weatherData.locationName;
    degree.innerHTML = weatherData.temperature;
    wind.innerHTML = weatherData.windSpeed;
    humidity.innerHTML = weatherData.humidity;
}