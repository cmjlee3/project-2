const router = require('express').Router();
// const lyftShow = require('../services/lyft');

const { lyft, lyftLine } = require('../services/lyft');

// const displayLyft = lyftShow();

router.get('/show', lyft, lyftLine, (req,res) => {
  res.render('./show', {
    results: res.lyft,
    resultsLine: res.lyftLine,
  });
});


module.exports = router;

// db.Lyft.lyftLine,
// , lyftLine
