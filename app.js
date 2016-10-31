require('dotenv').config();
const express               = require('express');
const logger                = require('morgan');
const path                  = require('path');
const bodyParser            = require('body-parser');
const methodOverride        = require('method-override');
const session               = require('express-session');
const cookieParser          = require('cookie-parser');
const SECRET                = 'tacos3000';

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
const port                  = process.env[2] || process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(cookieParser());

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SECRET
}));
app.use(logger('dev'));

const lyftRoute = require('./routes/lyft');
// const homeRoute = require('./routes/home');
const authRoute = require('./routes/auth');
const userRoute= require('./routes/user');
const indexRoute=require('./routes/index');

app.use('/show', lyftRoute);
// app.use('/', homeRoute);
app.use('/auth', authRoute);
app.use('/users', userRoute);
app.use('/', indexRoute);

app.listen(port, ()=> console.log('Server is listening on port ', port));


app.use(express.static(path.join(__dirname, 'public')));

// app.get('/api/login', function(request, response) {
//   var url = uber.getAuthorizeUrl(['history','profile', 'request', 'places']);
//   response.redirect(url);
// });
