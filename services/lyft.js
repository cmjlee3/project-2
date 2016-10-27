const fetch             = require('node-fetch');
const API_URL           = 'https://api.lyft.com/oauth/token'
const COST              = 'https://api.lyft.com/v1/cost'

API_ID =process.env.LYFT_ID
API_SECRET = process.env.LYFT_SECRET

const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + new Buffer('yIsE61L1caaT:Pz3-niKYG7gKFKtIbeATsSWq2LfGxuMp').toString("base64")
};

// new Buffer(API_ID:API_SECRET).toString("base64")

const dataString = '{"grant_type": "client_credentials", "scope": "public"}';

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
// req.query.start_lat, req.query.start_lng, req.query.end_lat, req.query.end_lng
// 37.7772, -122.4233, 37.7972, -122.4533
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
    console.log(result)
    res.lyftPlus = result.cost_estimates[0].estimated_cost_cents_max;
    next();
  })
  .catch((err) => {
    res.error = err;
    next();
  });
}

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
