fetch('http://api.openweathermap.org/data/2.5/weather?q=Moscow,&appid=b2cd6e5dfa71d00c99d155b2603e9f2c')
  .then(function (resp) { return resp.json() }) // convert data to json
  .then(function (data) {
    console.log(data.name);

  })
  .catch(function () {
    //catch any errors
  });