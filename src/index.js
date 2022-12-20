import data from "./modules/data"
import display from "./modules/display"

function searchCity(){
    const form = document.querySelector("#form");
    const locationInput = document.querySelector("#location");
    const submitBtn = document.querySelector("#submitbtn");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const weatherData = await data(locationInput.value);
        display(weatherData);
    })

}

searchCity()