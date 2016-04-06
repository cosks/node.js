var request = require('request'),
    cheerio = require('cheerio'),
    fs = require('fs');

var images = [];
request('https://www.reddit.com/r/gifs/', function(err, responce, body){
  if (!err && responce.statusCode == 200) {
    // save as a $ to make it seem more like jQuery due to cheerio
    var $ = cheerio.load(body);
    //using an anonymus function
    $('a.title', '#siteTable').each(function(){
      var myImg = $(this).attr('href');
      images.push(myImg);
      //console.log(images);
      for (var i = 0; i < images.length; i++) {
        request(images[i]).pipe(fs.createWriteStream('img/pic'+ i + '.gif'));
        console.log('picture '+i+" saved");
      }
    })
  }
});
