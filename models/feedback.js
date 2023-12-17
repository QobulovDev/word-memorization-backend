const mongoose = require('mongoose');
const Joi = require('joi') 

const FeedbackSchema = new mongoose.Schema({
    status: {
        type: String,
        reuqired: true,
        enum: ['angry', 'sad', 'neutral', 'good', 'excited']
    },
    email: {
        type: String,
        reuqired: true,
        minlength: 3,
        maxlength: 80,
    },
    text: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 512
    }, 
});

const Feedback = mongoose.model('Feedback', FeedbackSchema);


const feedbackValidate = (data)=>{
    const feedbackValidateSchema = Joi.object({
        status: Joi.string().required().trim().max(8),
        email: Joi.string().required().lowercase(),
        text: Joi.string().required().min(2),
    });
    return feedbackValidateSchema.validate(data);
}


module.exports = {
    Feedback,
    feedbackValidate
}