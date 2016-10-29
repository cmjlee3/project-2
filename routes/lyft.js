const router = require('express').Router();
// const lyftShow = require('../services/lyft');

const { lyft, lyftLine, lyftPlus } = require('../services/lyft');

const { getRide, saveRide }        = require('../models/model');

// const displayLyft = lyftShow();

router.get('/', lyft, lyftLine, lyftPlus, (req,res) => {
  res.render('./show', {
    results: res.lyft,
    resultsLine: res.lyftLine,
    resultsPlus: res.lyftPlus,
  });
});

// router.post('/show', getRide, (req, res) => {
//   // console.log(res.saved);
//   res.redirect('/show');
// })

// router.get('/show', saveRide, (req,res) => {
//   console.log(res.search);
//   // res.render('./show', {
//   //   selected: res.search || [],
//   // });
// });

// router.delete('/ride/:id', deleteRide, (req, res) => {
//   res.redirect('/show');
// });

module.exports = router;

// db.Lyft.lyftLine,
// , lyftLine
