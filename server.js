var express = require('express');
var app = express();

var Instagramer = require('./app/scripts/Instagramer');
var Test = require('./app/scripts/Test')

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'jade');


app.get('/', function (req, res) {
  res.render('index', { title: 'Social Stuff'});
});

 
app.get('/test', function(req, res){
  res.send('testing')
})


app.get('/images/popular', function (req, res) {
  var type = 'media_popular'

  var instagramer = new Instagramer(type, function(err, results){
    if(err){
      console.log('Error: ', err);
      res.send('Error: ', err);
    }
    res.render('images', {images: results});
  });
  
});

app.get('/api/instagram/:type', function (req, res) {
  
  var type = req.params.type

  var instagramer = new Instagramer(type, function(err, results){
    if(err){
      console.log('Error: ', err);
      res.send('Error: ', err);
    }
    res.send(results)
  });
  
});






var server = app.listen(3535, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Running node at http://%s:%s', host, port);
});





var Ben = new Test();

