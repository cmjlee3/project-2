


// // const uber = new Uber({
// //   client_id: '9HRnU2eYt10rHANWV50avCJu5z2iVQF9',
// //   client_secret: 'ILxJIUwlqrGh0PSGLar2NnW0mc1igzwRxfxnx0PM',
// //   server_token: 'Qw8fAOZZ2KOh0Xyk2MJMX4pOb8q',
// // });

// // const fetch             = require('node-fetch');
// // const API_URL           = 'https://login.uber.com/oauth/v2/token'
// // const COST              = 'https://api.uber.com/v1/products'

// // const headers = {
// //     'Content-Type': 'application/json',
// //     'Authorization': 'Basic ' + new Buffer('9HRnU2eYt10rHANWV50avCJu5z2iVQF9:Qw8fAOZZ2KOh0Xyk2MJMX4pOb8q-QxpdnDkvT770').toString("base64")
// // };

// // const dataString = '{"grant_type": "client_credentials", "scope": "public"}';

// // const uber = (req, res, next) => {
// //   fetch(API_URL, {
// //     method: 'POST',
// //     headers: headers,
// //     body: dataString,
// //   })
// //   .then(r => r.json())
// //   .then(json => json.access_token)
// //   .then(token => costUber(token, 37.7772, -122.4233, 37.7972, -122.4533))
// //   .then(r => r.json())
// //   .then(result => {
// //     res.uber = result.cost_estimates[0].estimated_cost_cents_max;
// //     next();
// //   })
// //   .catch((err) => {
// //     res.error = err;
// //     next();
// //   });
// // }

// // const costUber = (token, start_lat, start_lng, end_lat, end_lng) => {
// //   const query_url = COST + `?start_lat=${start_lat}&start_lng=${start_lng}&end_lat=${end_lat}&end_lng=${end_lng}&ride_type=uber`
// //   const headers = {
// //     'Authorization': 'bearer ' + token
// //   }

// //   return fetch(query_url, {
// //     method: 'GET',
// //     headers: headers
// //   })
// // }

// const request = require('request');

// // https://login.uber.com/oauth/v2/authorize?client_id=YOUR_CLIENT_ID&response_type=code


// const search = (req, res, next) => {

//   console.log('in search!!!')

//   const headers = {
//     'Authorization' : `Token${process.env.SERVER_TOKEN}`
//   }

//   const options = {
//      url: 'https://login.uber.com/oauth/v2/authorize?client_id=9HRnU2eYt10rHANWV50avCJu5z2iVQF9&response_type=code',
//      headers: headers
//   };

//   function callback(err, response, body) {
//     console.log('eerrr', err)
//     console.log('response ', response.statusCode)
//     console.log('body', body)
//     if (!err && response.statusCode==200) {
//       console.log('body *******', body);
//       res.results = body;
//       next();
//     } else {
//       next(err);
//     }
//   }

//   request(options, callback);
// }



// module.exports = { search };
