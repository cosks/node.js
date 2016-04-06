var request = require('request'),
    cheerio = require('cheerio'),
    fs = require('fs');

var images = [];
console.log('ok0');
request('https://www.reddit.com/r/gifs', accessImg());
function accessImg(err, responce, body){
  if (!err && responce.statusCode == 200) {
    // save as a $ to make it seem more like jQuery due to cheerio
    console.log("ok1");
    var $ = cheerio.load(body);
    //using an anonymus function
    $('img','div.siteTable').each(saveImg());
    }
  }

function saveImg(){
  console.log("ok2");
  var myImg = $(this).attr('src');
  images.push(myImg);
  // for (var i = 0; i < images.length; i++) {
  //   request(images[i]).pipe(fs.createWriteStream('img/pic'+ i + '.gif'));
  // }
}
  console.log(images);
