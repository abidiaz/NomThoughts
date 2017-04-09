var twit = require('twit');
var config = require('./config.js');

var Twitter = new twit(config);

Twitter.post('statuses/update', {status : 'I\'m hungry.'}, function (err, data, response){
  console.log(data)
});
