const router = require('express').Router();
const { lyft } = require('../services/lyft');

router.get('/show', lyft, (req,res) => {
  res.render('./show', {
    results: res.lyft
  });
});


module.exports = router;
