var _ = require('underscore');
var ig = require('instagram-node').instagram();


class Instagramer {

  constructor(obj){
    ig.use({ 
      client_id: process.env.IG_CLIENT_ID,
      client_secret: process.env.IG_CLIENT_SECRET
    });
  }

  tag_media_recent(options, callback){
    ig.tag_media_recent(options.tag, function(err, medias, pagination) {
      callback(err, medias);
    });
  }

}

module.exports = Instagramer;
