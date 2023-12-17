const router = require('express').Router();
const feedbackController = require('../controller/feedbackController');


// add feedback
router.post('/', feedbackController.postFeedback);

module.exports = router;