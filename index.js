const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');

moviesApi(app);

app.listen(config.port, function () {
  console.log(`Listening at http://localhost:${config.port}`);
});

/* Prueba año biciesto*/
// app.get('/:year', function (req, res) {
//   const year = req.params.year;

//   if (year % 4 == 0 || year % 100 == 0 || year % 400 == 0) {
//     res.send(`${year} Es un año biciesto`);
//   } else {
//     res.send(`${year} NO es un año biciesto`);
//   }
// });
