// this tempalte was provided by the instructors at General Assembly

const MongoClient = require('mongodb');

// process.env.MONGOLAB_URI is DEPRECATED
// process.env.MONGODB_URI is needed for when we deploy to Heroku
const connectionURL = process.env.MONGODB_URI || 'mongodb://localhost/Lyft';

function getDB() {
  return MongoClient.connect(connectionURL);
}

module.exports = {
  getDB
};
