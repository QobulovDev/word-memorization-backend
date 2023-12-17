const router = require('express').Router();
const auth = require('../middleware/auth');
const { admin } = require('../middleware/role');
const feedbackController = require('../controller/feedbackController');

// get all feedbecks
router.get('/', auth, admin,  feedbackController.getFeedback);

// add feedback
router.post('/', feedbackController.postFeedback);

//delete feedbacks
router.delete('/:id', auth, admin, feedbackController.deleteFeedback)

module.exports = router;