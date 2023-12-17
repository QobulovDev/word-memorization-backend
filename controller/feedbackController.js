const {Feedback, feedbackValidate} = require('../models/feedback');

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
    res.send({status: 200, text: "Successful saved"});
  } catch (error) {
    res.status(500).json({ error: `Data fetch error: ${error}` });
  }
}

module.exports = {postFeedback};
