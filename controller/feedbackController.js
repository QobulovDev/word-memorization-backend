const {Feedback, feedbackValidate} = require('../models/feedback');

async function getFeedback(req, res) {
  try {
    const feedbacks = await Feedback.find();
    if(!feedbacks) return res.status(404).send("data not fount");
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: `Data fetch error: ${error}` });
  }
}

async function postFeedback(req, res) {
  try {
    const { error } = feedbackValidate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    let feedback = new Feedback({
      status: req.body.status,
      email: req.body.email,
      text: req.body.text,
    });
    feedback = await feedback.save();
    res.status(200).send({text: "Successful saved"});
  } catch (error) {
    res.status(500).json({ error: `Data fetch error: ${error}` });
  }
}

async function deleteFeedback(req, res) {
  try {
    const feedBackId = req.params.id;
    if(!feedBackId) return res.status(400).send("id not fount");
    const feedback = await Feedback.findOneAndDelete({_id: feedBackId});
    if(!feedback) return res.status(400).send("feedback not fount");
    res.send({text: "Successful deleted"});
  } catch (error) {
    res.status(500).json({ error: `Data fetch error: ${error}` });
  }
}

module.exports = {
    postFeedback,
    getFeedback,
    deleteFeedback
};
