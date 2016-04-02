console.log("the replier bot is starting");

var Twit = require('twit');

// required fot authentication from Twit NPM
var config = require('./config');
var T = new Twit(config);

// ===== from the Twitter Streaming API (vid 7) =======

//setting up a stream
var stream = T.stream('user');

//every time there is a Tweet Event
stream.on('tweet', tweetEvent);

function tweetEvent(eventMsg){
  console.log("A tweet event happened");
  //the bollow is to figure out the eventMsg
  //the fs module allows to read and write files :
  var fs = require('fs');
  var json = JSON.stringify(eventMsg, null, 2);
  fs.writeFile("twet.json", json)
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
