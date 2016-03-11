console.log("Bot is starting");

var Twit = require('twit');

// required fot authentication from Twit NPM
var config = require('./config');

var T = new Twit(config);


//reading from twitter:
var params = {
  //key word + count
  q: 'banana since:2011-07-11', count: 10
}

T.get('search/tweets', params, gotData);

//printing to terminal
function gotData(err, data, response) {
  var tweets = data.statuses;
  for (var i = 0; i < tweets.length; i++) {
    console.log(tweets[i].text);
  }
}
