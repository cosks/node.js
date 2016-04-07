  var request = require('request'),
      cheerio = require('cheerio'),
      fs = require('fs');

  var images = [];
  request('https://www.reddit.com/r/gifs', function(err, responce, body){
    if (!err && responce.statusCode == 200) {
      // save as a $ to make it seem more like jQuery due to cheerio
      var $ = cheerio.load(body);
      //using an anonymus function
      $('href','.thumbnail may-blank').each(function(){
        var myImg = $(this).attr('src');
        images.push(myImg);
        //console.log(images);
        for (var i = 0; i < images.length; i++) {
          request(images[i]).pipe(fs.createWriteStream('img/swim'+ i + '.jpg'));
        }
      })
    }
  });
