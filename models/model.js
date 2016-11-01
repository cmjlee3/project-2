const { MongoClient, ObjectID }     = require('mongodb');

// links to the mongo db
const dbConnection                  = process.env.MONGODB_URI || 'mongodb://localhost:27017/Lyft';

//Retrieves data from the API and stores it into Mongo
function getRide(req, res, next) {
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);
    // console.log(hi);
    db.collection('ride')
     // .find({ userId: { $eq: req.session.userId } })
     .insert(req.body.ride, (insertErr, result) => {
      if (insertErr) return next(insertErr);
      // console.log(res.saved);
      res.saved = result;
      db.close();
      // console.log(res.saved);
      return next();
      });
      return false;
  });
  return false;
};

//Takes the stored mongo data and renders it to the next page in order to save.
function saveRide(req, res, next) {
  const filterObj = {};
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);
    // console.log(req.body.ride);
    db.collection('ride')
    .find(filterObj)
      // .sort({ artistName: 1 })
      .toArray((arrayError, data) => {
        if(arrayError) return next(arrayError);

        // return the data
        // console.log('======='+res.search);
        res.search = data;
        db.close();
        return next();
      });
      return false;
  });
  return false;
}

//deletes the saved favorite
function deleteRide(req, res, next) {
  console.log('=========' +req.params.id)
  getDB().then((db) => {
    if (err) return next(err);

    db.collection('ride')
      .findAndRemove({ _id: ObjectID(req.params.id) }, (removeErr, doc) => {
        if(removeErr) return next(removeErr);

        res.removed = doc;
        // console.log("from models =====" + res.removed);
        db.close();
        return next();
      });
      return false;
  });
  return false;
}

module.exports = {
  getRide,
  saveRide,
  deleteRide
};
