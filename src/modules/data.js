export default async function getWeatherData(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=France&appid=5191f102ac8f8da110e0cc9eddcf9e57&units=metric`;

    try{
        const response = await fetch(url, {mode: "cors"});
        if (!response.ok) throw new Error(`${location} not found`);
        const data = await response.json();
        const WeatherData = new weather(data);
        return WeatherData;
    }catch(error){
        alert (error);
    }

}

class weather {
    constructor(data){
        this.temperature = data.main.temp;
        this.locationName = data.name;
        this.sky = data.weather[0].description;
        this.windSpeed = data.wind.speed;
        this.humidity = data.main.humidity;
    }
}