const router                             = require('express').Router();
// const lyftShow = require('../services/lyft');

const { lyft, lyftLine, lyftPlus }       = require('../services/lyft');

const { getRide, saveRide, deleteRide }  = require('../models/model');
// deleteRide

router.get('/', lyft, lyftLine, lyftPlus, (req,res) => {
  // console.log(res.removed);
  res.render('./show', {
    results: res.lyft || [],
    resultsLine: res.lyftLine || [],
    resultsPlus: res.lyftPlus || [],

  });
});

router.post('/lyft', getRide, (req, res) => {

  res.render('./resultsLyft', {
      results: res.saved.ops[0].lyft || [],
      ride: res.removed,
      // resultsLine: res.saved.ops[0].lyftLine || [],
      // resultsPlus: res.saved.ops[0].lyftPlus || [],
  });
});
router.post('/lyftLine', getRide, (req, res) => {

  res.render('./resultsLine', {
      // results: res.saved.ops[0].lyft || [],
      resultsLine: res.saved.ops[0].lyftLine || [],
      ride: res.removed,
      // resultsPlus: res.saved.ops[0].lyftPlus || [],
  });
});
router.post('/lyftPlus', getRide, (req, res) => {

  res.render('./resultsPlus', {
      // results: res.saved.ops[0].lyft || [],
      // resultsLine: res.saved.ops[0].lyftLine || [],
      resultsPlus: res.saved.ops[0].lyftPlus || [],
  });
});

router.delete('/lyft/:id', deleteRide, (req, res) => {
  res.redirect('show');
});

// router.post('/', saveRide, getRide, (req, res) => {
//   res.redirect('./show');
// });
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


module.exports = router;

// db.Lyft.lyftLine,
// , lyftLine
