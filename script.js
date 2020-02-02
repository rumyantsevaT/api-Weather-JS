fetch('http://api.openweathermap.org/data/2.5/weather?q=Moscow,&appid=b2cd6e5dfa71d00c99d155b2603e9f2c')
  .then(function (resp) { return resp.json() }) // convert data to json
  .then(function (data) {
    console.log(data);
    document.querySelector('.card-title').textContent = data.name;
    document.querySelector('.data-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    document.querySelector('.data-temp').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    document.querySelector('.data-desc').innerHTML = data.weather[0]['description'];
    document.querySelector('.data-wind').textContent = `Скорость ветра: ${data.wind.speed}`;
    document.querySelector('.data-coord').textContent = `Координаты: ${data.coord.lon} | ${data.coord.lat}`;


  })
  .catch(function () {
    //catch any errors
  });