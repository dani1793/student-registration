/*
 # Copyright (c) 2015 Smart Fission, all rights reserved
 # Proprietary and Confidential Information
 #
 # This source file is the property of Smart Fission, and
 # may not be copied or distributed in any isomorphic form without
 # the prior written consent of Smart Fission.
 #

 # Authors: Daniyal Usmani

 */
'use strict';

var mongoose = require('mongoose');
var express = require('express');

var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser());
// Middleware to allow Cross Origin Resource Sharing (CORS)
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept-Encoding, Accept-Language');
    next();
});


//Include any Models as function parameters


var Student = require('./models/students');

var studentRouter = require('./routers/students')(Student);

var config = require('./config');

var port = 3000;
var hostname = 'localhost';


mongoose.connect(config.mongoUrl);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
  console.log('connected correctly to Mongo server');

})
app.use('/students', studentRouter);


app.listen(port, hostname, function () {
  // console.log(`Server running at http://${hostname}:${port}/`);
});
