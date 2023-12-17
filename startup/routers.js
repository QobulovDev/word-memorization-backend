const express = require('express');
const cors = require('cors');

const home = require('../routes/home')
const word = require('../routes/words');
const auth = require('../routes/auth');
const user = require('../routes/user');
const freqWords = require('../routes/freqWords');
const feedback = require('../routes/feedback');

module.exports = function(app) {
    //middilwares
    app.use(express.urlencoded({extended: true}));
    app.use(express.json()); 
    app.use(express.static('public'));
    app.use(cors());
    
    //routes
    app.use('/', home);
    app.use("/api/user", user);
    app.use("/api/auth", auth);
    app.use('/api/words', word);
    app.use('/api/freqWords', freqWords);
    app.use('/api/feedback', feedback);
}