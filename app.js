require('dotenv').config();

const express               = require('express');
const logger                = require('morgan');
const path                  = require('path');
const bodyParser            = require('body-parser');
const methodOverride        = require('method-override');


const { lyft, lyftLine, lyftPlus }   = require('./services/lyft');
// const dbService                      = require('./models/model');
const { getRide, saveRide }          = require('./models/model')
// const Uber                  = require('node-uber');
// const uberMethod            = require('../models/uber')
// const firebase = require("firebase/app");
// require("firebase/auth");
// require("firebase/database");

// Leave out Storage
//require("firebase/storage");

// const config = {
//   // ...
// };
// firebase.initializeApp(config);

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


app.listen(port, ()=> console.log('Server is listening on port ', port));


app.use(express.static(path.join(__dirname, 'public')));

// app.get('/api/login', function(request, response) {
//   var url = uber.getAuthorizeUrl(['history','profile', 'request', 'places']);
//   response.redirect(url);
// });
