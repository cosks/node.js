console.log("Bot is starting");

var Twit = require('twit');

// required fot authentication from Twit NPM
var config = require('./config');
var T = new Twit(config);

tweetIt();
// time is - milli seconds*seconds*minutes
setInterval(tweetIt(), 1000*60*60);

function tweetIt(){
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
}
