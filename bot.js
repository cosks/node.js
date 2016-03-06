console.log("Bot is starting");

var Twit = require('twit');

// required fot authentication from Twit NPM
var config = require('./config');

var T = new Twit(config);
