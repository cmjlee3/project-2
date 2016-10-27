const fetch             = require('node-fetch');
const API_URL           = 'https://api.lyft.com/oauth/token'
const COST              = 'https://api.lyft.com/v1/cost'

const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + new Buffer('yIsE61L1caaT:Pz3-niKYG7gKFKtIbeATsSWq2LfGxuMp').toString("base64")
};

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


module.exports = { lyft };
