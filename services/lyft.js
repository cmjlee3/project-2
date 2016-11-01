// Lyft API setup with help from friend, Trevor Sontag.

const fetch             = require('node-fetch');
const API_URL           = 'https://api.lyft.com/oauth/token'
const COST              = 'https://api.lyft.com/v1/cost'
// const ETA               = 'https://api.lyft.com/v1/eta'

// API_ID =process.env.LYFT_ID
// API_SECRET = process.env.LYFT_SECRET

//// required id and secret used by api, buffer format found on google, keys and id don't need to be private.
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + new Buffer('yIsE61L1caaT:Pz3-niKYG7gKFKtIbeATsSWq2LfGxuMp').toString("base64")
};

//// require dependencies used by api
const dataString = '{"grant_type": "client_credentials", "scope": "public"}';

//function for price of lyft
const lyft = (req, res, next) => {
  fetch(API_URL, {
    method: 'POST',
    headers: headers,
    body: dataString,
  })
  .then(r => r.json())
  .then(json => json.access_token)
  .then(token => costLyft(token, req.query.start_lat, req.query.start_lng, req.query.end_lat, req.query.end_lng))
  .then(r => r.json())
  .then(result => {
    res.lyft = result.cost_estimates[0].estimated_cost_cents_max;
    next();
  })
  .catch((err) => {
    res.error = err;
    next();
  });
}

//required syntax layout in order to use query params for cost calculation
const costLyft = (token, start_lat, start_lng, end_lat, end_lng) => {
  const query_url = COST + `?start_lat=${start_lat}&start_lng=${start_lng}&end_lat=${end_lat}&end_lng=${end_lng}&ride_type=lyft`
  const headers = {
    'Authorization': 'bearer ' + token
  }

  return fetch(query_url, {
    method: 'GET',
    headers: headers
  })
}

//attempt at using api to calculate ETA

// const lyftTime = (req, res, next) => {
//   fetch(API_URL, {
//     method: 'POST',
//     headers: headers,
//     body: dataString,
//   })
//   .then(r => r.json())
//   .then(json => json.access_token)
//   .then(token => etaLyft(token, req.query.start_lat, req.query.start_lng, req.query.end_lat, req.query.end_lng))
//   .then(r => r.json())
//   .then(result => {
//     console.log(result)
//     res.lyftTime = result.eta_estimates[0].eta_seconds;
//     next();
//   })
//   .catch((err) => {
//     res.error = err;
//     next();
//   });
// }

// const etaLyft = (token, start_lat, start_lng) => {
//   const query_urls = ETA + `?start_lat=${start_lat}&start_lng=${start_lng}&end_lat=${end_lat}&end_lng=${end_lng}&ride_type=lyft_line`
//   const headers = {
//     'Authorization': 'bearer ' + token
//   }

//   return fetch(query_urls, {
//     method: 'GET',
//     headers: headers
//   })
// }

//function for price of lyftline
const lyftLine = (req, res, next) => {
  fetch(API_URL, {
    method: 'POST',
    headers: headers,
    body: dataString,
  })
  .then(r => r.json())
  .then(json => json.access_token)
  .then(token => costLyftLine(token, req.query.start_lat, req.query.start_lng, req.query.end_lat, req.query.end_lng))
  .then(r => r.json())
  .then(result => {
    res.lyftLine = result.cost_estimates[0].estimated_cost_cents_max;
    next();
  })
  .catch((err) => {
    res.error = err;
    next();
  });
}

//required syntax layout in order to use query params for cost calculation
const costLyftLine = (token, start_lat, start_lng, end_lat, end_lng) => {
  const query_url = COST + `?start_lat=${start_lat}&start_lng=${start_lng}&end_lat=${end_lat}&end_lng=${end_lng}&ride_type=lyft_line`
  const headers = {
    'Authorization': 'bearer ' + token
  }

  return fetch(query_url, {
    method: 'GET',
    headers: headers
  })
}

//function for price of lyftPlus
const lyftPlus = (req, res, next) => {
  fetch(API_URL, {
    method: 'POST',
    headers: headers,
    body: dataString,
  })
  .then(r => r.json())
  .then(json => json.access_token)
  .then(token => costLyftPlus(token, req.query.start_lat, req.query.start_lng, req.query.end_lat, req.query.end_lng))
  .then(r => r.json())
  .then(result => {
    // console.log(result)
    res.lyftPlus = result.cost_estimates[0].estimated_cost_cents_max;
    next();
  })
  .catch((err) => {
    res.error = err;
    next();
  });
}

//required syntax layout in order to use query params for cost calculation
const costLyftPlus = (token, start_lat, start_lng, end_lat, end_lng) => {
  const query_url = COST + `?start_lat=${start_lat}&start_lng=${start_lng}&end_lat=${end_lat}&end_lng=${end_lng}&ride_type=lyft_plus`
  const headers = {
    'Authorization': 'bearer ' + token
  }

  return fetch(query_url, {
    method: 'GET',
    headers: headers
  })
}




module.exports = { lyft, lyftLine, lyftPlus };
