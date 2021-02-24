
const goButton = document.querySelector('#button');
const inputField = document.querySelector('#input-field');
const card = document.querySelector('#card-results');

const createCardHtml = (tempMax, tempMin, weather, wind) => `
<div class="card" id="card-results">
            <div class="card-body1">
                ${tempMax}
            </div>
            <div class="card-body2">
                ${tempMin}
            </div>
            <div class="card-body3">
                ${weather}
            </div>
            <div class="card-body4">
                ${wind}
            </div>
        </div>
        `;


goButton.addEventListener('click', () => {
    




const cityName = "sydney";
const keyAPI = "03e95026372d7898965c970489aecc33";
//const card = input.value;

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${keyAPI}&units=metric`)
  .then(response => response.json())
  .then(data => {console.log();

    
    
    const tempMax = data.main.temp_max;
    const tempMin = data.main.temp_min;
    const weather = data.weather[0].main;
    const wind = data.wind.speed;


    const cardHtml = createCardHtml(tempMax, tempMin, weather, wind);
    card.innerHTML = cardHtml;})

/*main.temp_min,
  main.temp_max,
  weather[0].main, 
  wind.speed*/
});