const express = require('express');
const path = require('path'); 
const Routers = require('./routes');

const RandomSentence = express(); 

// set public files 
RandomSentence.set('view engine', 'ejs'); 
RandomSentence.set('views', path.join(__dirname + '/views')); 
RandomSentence.use(express.static(__dirname + '/public'));

RandomSentence.use(Routers.indexRouter); 

// index rotue

RandomSentence.listen(3000); 
