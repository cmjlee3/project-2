const router = require('express').Router();
// const lyftShow = require('../services/lyft');

const { lyft, lyftLine, lyftPlus } = require('../services/lyft');

// const displayLyft = lyftShow();

router.get('/show', lyft, lyftLine, lyftPlus, (req,res) => {
  res.render('./show', {
    results: res.lyft,
    resultsLine: res.lyftLine,
    resultsPlus: res.lyftPlus,
  });
});


module.exports = router;

// db.Lyft.lyftLine,
// , lyftLine
