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

router.post('/', getRide, (req, res) => {
    console.log(res.saved);
    res.render('./resultsLyft', {
    results: res.saved.ops[0].lyft,
    resultsLine: res.saved.ops[0].lyftLine,
    resultsPlus: res.saved.ops[0].lyftPlus,
  });

  // console.log(res.saved);
  // res.redirect('/show');
  // res.json(res.saved.ops[0].lyft);
})

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
