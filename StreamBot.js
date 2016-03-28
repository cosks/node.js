console.log("Bot is starting");

var Twit = require('twit');

// required fot authentication from Twit NPM
var config = require('./config');
var T = new Twit(config);

// ===== from the Twitter Streaming API =======

//setting up a stream
var stream = T.stream('user');

//if anyone follows me
stream.on('follow', followed);

function followed(eventMsg){
  console.log("A user just followed your account!");
  var name = eventMsg.source.name;
  var screenName = eventMsg.source.screen_name;
  tweetIt('@'+ screenName + ' !! Thanks for the follow!! :D ');
}

function tweetIt(txt){
    var tweet = {
      status: txt
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
}
