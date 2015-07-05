var express = require('express');
var app = express();

var Instagramer = require('./app/scripts/Instagramer');


app.use(express.static(__dirname + '/public'));
app.set('view engine', 'jade');


app.get('/', function (req, res) {
  res.render('index', { title: 'Social Stuff'});
});


app.get('/api/instagram/tag_media_recent', function (req, res) {
  
  var instagramer = new Instagramer();
  instagramer.tag_media_recent({
    tag: req.query.tag
  }, function(err, results){
    if(err){ return res.send('error: ', err); }
    console.log('result: ', results.length);
    res.send(results);
  })

});




var server = app.listen(3535, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Running node at http://%s:%s', host, port);
});





