const { ObjectID }        = require('mongodb');
const { getDB }           = require('../lib/dbConnect.js');

const dbConnection        = 'mongodb://localhost:27017/Lyft';

function getRide(req, res, next) {
  getDB().then((db) => {
    if (err) return next(err);
    // console.log(req.body.ride);
    db.collection('ride')
     // .find({ userId: { $eq: req.session.userId } })
     .insert(req.body.ride, (insertErr, result) => {
      if (insertErr) return next(insertErr);
      res.saved = result;
      db.close();
      // console.log(res.saved);
      return next();
      });
      return false;
  });
  return false;
};

function saveRide(req, res, next) {
  getDB().then((db) => {
    if (err) return next(err);
    // console.log(req.body.ride);
    db.collection('ride')
    .find({})
      // .sort({ artistName: 1 })
      .toArray((arrayError, data) => {
        if(arrayError) return next(arrayError);

        // return the data
        res.search = data;
        console.log(res.search);
        db.close();
        return next();
      });
      return false;
  });
  return false;
}

// function deleteRide(req, res, next) {
//   getDB().then((db) => {
//     if (err) return next(err);

//     db.collection('ride')
//       .findAndRemove({ _id: ObjectID(req.params.id) }, (removeErr, doc) => {
//         if(removeErr) return next(removeErr);

//         res.removed = doc;
//         db.close();
//         return next();
//       });
//       return false;
//   });
//   return false;
// }

module.exports = {
  getRide,
  saveRide,
  // deleteRide
};
