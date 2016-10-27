// const router = require('express').Router();
// // const { uber } = require('../services/uber');
// const { search } = require('../services/uber');

// router.get('/show', uber, (req,res) => {
//   res.render('./show', {
//     // results: res.uber
//   });
// });


// const uber = new Uber({
//   client_id: process.env.CLIENT_ID,
//   client_secret: process.env.CLIENT_SECRET,
//   server_token: process.env.SERVER_TOKEN,
//   redirect_uri: '/',
//   name: 'Cecil',
//   language: 'en_US', // optional, defaults to en_US
//   sandbox: true // optional, defaults to false
// });

// app.get('/show', function(request, response) {
//   var url = uber.getAuthorizeUrl(['history','profile', 'request', 'places']);
//   console.log('*******************', url)
//   response.redirect(url);
// });

//  app.get('/show', function(request, response) {
//     uber.authorization({
//       authorization_code: request.query.code
//     }, function(err, access_token, refresh_token) {
//       if (err) {
//         console.error(err);
//       } else {
//         // store the user id and associated access token
//         // redirect the user back to your actual app
//         response.redirect('/');
//       }
//     });
// });

//  app.get('/show', function(request, response) {
//   // extract the query from the request URL
//   var query = url.parse(request.url, true).query;

//   // if no query params sent, respond with Bad Request
//   if (!query || !query.lat || !query.lng) {
//     response.sendStatus(400);
//   } else {
//     uber.products.getAllForLocation(query.lat, query.lng, function(err, res) {
//       if (err) {
//         console.error(err);
//         response.sendStatus(500);
//       } else {
//         response.json(res);
//       }
//     });
//   }
// });

// router.get('/show', (req, res) => {
//   console.log('**************************', res.results)
//   res.render('./show', {
//     results : res.results || [],
//   })
// })

// router.post('/show', search, (req, res) => {
//   console.log('results *******************', res.results)
//   res.render('./show', {
//     results : res.results || [],
//   })
// })

// module.exports = router;

