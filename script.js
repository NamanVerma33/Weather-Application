const locat = document.querySelector('#location');
const submit = document.querySelector('#submit');
const image = document.querySelector('#image');
const temp = document.querySelector('#temperature');
const description = document.querySelector('#description');
const humidity = document.querySelector('#humidity');
const wind = document.querySelector('#wind');
const error = document.querySelector('.location-error');
const weather = document.querySelector('.weather-body');

async function checkweather(city){

    const api_key = "9a82fb08366f3de8b40198e137f35135";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data =await fetch(`${url}`).then(response=> 
    response.json());

    if(weather_data.cod == '404'){
        error.style.display='flex';
        weather.style.display='none';
        return;
    }
    weather.style.display = 'flex';
    error.style.display = 'none';    
    console.log(weather_data);
    temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)} °C`

    description.innerHTML = `${weather_data.weather[0].description}`

    humidity.innerHTML = `${weather_data.main.humidity}%`;

    wind.innerHTML = `${weather_data.wind.speed}Km/H`


    switch(weather_data.weather[0].main){
        case 'Clouds':
            image.src="Aspects/cloud.png"
            break;
        case 'Clear':
            image.src="Aspects/clear.png"
            break;
        case 'Mist':
            image.src="Aspects/clear.png"
            break;
        case 'Rain':
            image.src="Aspects/rain.png"
            break;
        case 'Snow':
            image.src="Aspects/snow.png"   
            break; 
    }

}


submit.addEventListener('click',()=>{
    checkweather(locat.value);
});
