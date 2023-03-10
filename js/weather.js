const AIP_KEY = "85065b946105af2bf6375b2a27afcc51";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${AIP_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:nth-child(2)");
      const temp = document.querySelector("#weather span:last-child");

      weather.innerText = data.weather[0].main;
      city.innerText = data.name;
      temp.innerText = `${data.main.temp}°C`;
    });
}

function onGeoError() {
  alert(`Can't find you. So I can't tell you the weather.`);
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
