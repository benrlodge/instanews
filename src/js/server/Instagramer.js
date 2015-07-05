var _ = require('underscore');
var ig = require('instagram-node').instagram();



const VALID_TYPE = ['media_popular'];


class Instagramer {

  constructor(type, callback){

    this.type = type;
    this.callback = callback;

    if(!type){
      return callback({error: 'provide an api request type'}, {})
    }
    if(!callback){
      return callback({error: 'provide a callback'}, {})
    }

    ig.use({ 
      client_id: process.env.IG_CLIENT_ID,
      client_secret: process.env.IG_CLIENT_SECRET
    });

    // Check if type exists in mapping
    let exists = _.contains(VALID_TYPE, this.type)
    if(!exists){
      return callback({error: "Media type `"+this.type+"` does not exist"}, {})
    }

    this[this.type]()
  
  }


  // API Requests - must live in VALID_TYPE array
  media_popular(){
    let self = this;
    
    ig.media_popular(function(err, medias) {
      self.callback(err, medias);
    });

  }//-



}

module.exports = Instagramer;
