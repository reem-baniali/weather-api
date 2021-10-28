
let date = new Date();
let today = date.toString().slice(0, 3);
console.log(today);
let todayDate = date.toString().slice(3, 15);
console.log(todayDate);

let dayname = document.querySelector(".date-dayname");
  dayname.innerHTML = today;

  let dayDate = document.querySelector(".date-day");
  dayDate.innerHTML = todayDate;

let option = document.getElementById("select_city");
option.addEventListener("change", async function () {
   city = option.value;

  apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=+${city}+&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`;
  const respnse = await fetch(apiUrl);
  const data = await respnse.json();
  console.log(data);

  
  let location = document.querySelector(".location");
  location.innerHTML = data.name + ", " + data.sys.country;

  let weatherTemp = document.querySelector(".weather-temp");
  weatherTemp.innerHTML =Math.floor( data.main.temp) + " °C";

  let weatherStatus = document.querySelector(".weather-desc");
  weatherStatus.innerHTML = data.weather[0].main;

  let precipitation = document.querySelector(".pValue");
  precipitation.innerHTML = data.main.pressure;

  let huidity = document.querySelector(".Hvalue");
  huidity.innerHTML = data.main.humidity;

  let windSpeed = document.querySelector(".Wvalue");
  windSpeed.innerHTML = data.wind.speed + "Km/h";

  let dayName = document.querySelector(".day-name");
  dayName.innerHTML = today;
});



