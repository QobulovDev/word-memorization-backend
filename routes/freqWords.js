const router = require('express').Router(); 
const getWords = require('../controller/freqWordController');

router.get('/:level/:count', getWords)

module.exports = router;