const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');

const {
  logErrors,
  wrapErrors,
  errorHandler,
} = require('./utils/middleware/errorHandlers');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

// Body parser
app.use(express.json());

// Routes
moviesApi(app);

// Catch 404 error
app.use(notFoundHandler);

// Errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

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
