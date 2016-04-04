var request = require('request'),
    cheerio = require('cheerio'),
    fs = require('fs');

var images = [];
request('https://unsplash.com/search?utf8=%E2%9C%93&keyword=swimming&button=', function(err, responce, body){
  if (!err && responce.statusCode == 200) {
    // save as a $ to make it seem more like jQuery due to cheerio
    var $ = cheerio.load(body);
    //using an anonymus function
    $('img', 'div.photo-grid').each(function(){
      var myImg = $(this).attr('src');
      images.push(myImg);
      //console.log(images);
      for (var i = 0; i < images.length; i++) {
        request(images[i]).pipe(fs.createWriteStream('img/swim'+ i + '.jpg'));
      }
    })
  }
});
