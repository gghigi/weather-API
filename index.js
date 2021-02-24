
const goButton = document.querySelector('#button');
const inputField = document.querySelector('#input-field');
const card = document.querySelector('#card-results');



goButton.addEventListener('click', () => {
    console.log('hi')
    //const cardHtml = createCardHtml(input.value);
    //weatherContainer.innerHTML = cardHtml;
    
});

const createCardHtml = (id, appid) => `
<div class="card" id="card-results">
            <div class="card-body">
                ${cityWeather}
            </div>
        </div>
        `;


const cityWeather = input.value;

fetch('api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}')
  .then(response => response.json())
  .then(data => console.log(data));