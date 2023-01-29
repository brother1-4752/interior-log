const locationSpan = document.querySelector(".location");
const temperatureSpan = document.querySelector(".temperature");

navigator.geolocation.getCurrentPosition((position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ac060ab8e4df235787886134a9a32333`
  )
    .then((response) => response.json())
    .then((data) => {
      const temperature = (data.main.temp - 273.15).toFixed(2);
      const cityName = data.name;
      const icon = data.weather[0].icon;

      locationSpan.innerHTML = `${cityName}`;
      temperatureSpan.innerHTML = `${temperature}도`;

      const iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;
      const iconImg = document.createElement("img");
      iconImg.style.width = "50px;";
      iconImg.style.height = "50px;";
      iconImg.src = iconUrl;
      temperatureSpan.appendChild(iconImg);
    });
});
