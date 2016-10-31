const router = require('express').Router();
// const lyftShow = require('../services/lyft');

const { lyft, lyftLine, lyftPlus } = require('../services/lyft');

const { getRide, saveRide }        = require('../models/model');

// const displayLyft = lyftShow();

router.get('/', lyft, lyftLine, lyftPlus, (req,res) => {
  res.render('./show', {
    results: res.lyft || [],
    resultsLine: res.lyftLine || [],
    resultsPlus: res.lyftPlus || [],
  });
});

// router.post('/', getRide, (req, res) => {
//     console.log(res.saved);
//     res.render('./resultsLyft', {
//     results: res.saved.ops[0].lyft || [],
//   });
//     res.render('./resultsLine', {
//       resultsLine: res.saved.ops[0].lyftLine || [],
//     });
//     res.render('./resultsPlus', {
//       resultsPlus: res.saved.ops[0].lyftPlus || [],
//     });
// })

router.post('/', getRide, (req, res) => {
  res.redirect('./show', {
    results: res.search || [],
  });
});
// router.post('/', getRide, lyftLine, (req, res) => {


// })
// router.post('/', getRide, lyftPlus, (req, res) => {
//   res.render('./results', {
//      resultsPlus: res.lyftPlus || [],
//   });

// })
// router.get('/show', getRide, saveRide, (req,res) => {
//   console.log(res.search);
//    res.render('./results', {
//     selected: res.search || [],

//   });
// });

// router.delete('/ride/:id', deleteRide, (req, res) => {
//   res.redirect('/show');
// });

module.exports = router;

// db.Lyft.lyftLine,
// , lyftLine
