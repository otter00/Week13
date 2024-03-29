document.addEventListener('DOMContentLoaded', function(e){
    getWeather('Novosibirsk');
});

function getWeather(city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=d6e481919bcce169184f16536bb64bd8&units=metric')
    .then(response => response.json())
    .then(weather => {
        console.log(weather);
        document.querySelector('.city')
        .innerText = weather.name;
        document.querySelector('.temp__value')
        .innerText = Math.round(weather.main.temp);
        document.querySelector('.hi__low')
        .innerText = Math.round
        (weather.main.temp_max) + " / " +
        Math.round(weather.main.temp_min);
        document.querySelector('.weather')
        .innerText = weather.weather[0]
        .description;
    })
    .catch(error = console.log(error));
}