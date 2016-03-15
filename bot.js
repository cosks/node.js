console.log("Bot is starting");

var Twit = require('twit');

// required fot authentication from Twit NPM
var config = require('./config');
var T = new Twit(config);


//reading from twitter:
  var params = {
    //key word + count
    q: '@TeamSoloMid since:2016-01-01', count: 4
  }

  T.get('search/tweets', params, gotData);

  //printing to terminal
  function gotData(err, data, response) {
    var tweets = data.statuses;
    for (var i = 0; i < tweets.length; i++) {
      console.log(tweets[i].text);
    }
  }

//  tweet 'hello world!'
  var tweet = {
    status: '#helloWworld !!'
  }

  function tweeted(err, data, responce){
    if(err){
      console.log("Error"+err);
    }
    else{
      //console.log(data);
      console.log("Tweet posted!");
    }
  }
  T.post('statuses/update', tweet, tweeted)
