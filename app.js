const express               = require('express');
const logger                = require('morgan');
const path                  = require('path');
const bodyParser            = require('body-parser');
const methodOverride        = require('method-override');
// const Uber                  = require('node-uber');
// const uberMethod            = require('../models/uber')

const app                   = express();
const port                  = process.argv[2] || process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger('dev'));

const lyftRoute = require('./routes/lyft');
const homeRoute = require('./routes/home');
// const uberRoute = require('./routes/uber')

app.use('/', lyftRoute);
app.use('/', homeRoute);
// app.use('/', uberRoute);

app.listen(port, console.log('Server is listening on port ', port));

// if ("geolocation" in navigator) {
//    navigator.geolocation.getCurrentPosition((pos) => {
//      console.log("in navigator");
//      document.querySelector("#location").innerHTML = `Latitude: ${pos.coords.latitude}\n Longitude: ${pos.coords.longitude}`;
//    });
//  };

app.use(express.static(path.join(__dirname, 'public')));

// app.get('/api/login', function(request, response) {
//   var url = uber.getAuthorizeUrl(['history','profile', 'request', 'places']);
//   response.redirect(url);
// });
