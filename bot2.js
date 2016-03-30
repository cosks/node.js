console.log("Bot is starting");

var Twit = require('twit');

// required fot authentication from Twit NPM
var config = require('./config');
var T = new Twit(config);

tweetIt();
// time is - milli seconds*seconds*minutes
setInterval(tweetIt(), 1000*60*60);

function tweetIt(){

  // upload the img to twitter first before making the tweet
  function postImg(){
    var filename = 'img/test.jpeg';
    var params = {
      encoding : 'base64'
    }
    var b64content = fs.readFileSync(filename, params);
    //'uploaded' is the call back for when the information has been uploaded
    T.post('media/upload', {media_data:b64content},uploaded);
    function uploaded(err, data, responce){
      // this is where the tweet will happen!!
      
    }
  }


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
