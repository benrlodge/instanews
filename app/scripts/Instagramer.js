'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ = require('underscore');
var ig = require('instagram-node').instagram();

var VALID_TYPE = ['media_popular'];

var Instagramer = (function () {
  function Instagramer(type, callback) {
    _classCallCheck(this, Instagramer);

    this.type = type;
    this.callback = callback;

    if (!type) {
      return callback({ error: 'provide an api request type' }, {});
    }
    if (!callback) {
      return callback({ error: 'provide a callback' }, {});
    }

    ig.use({
      client_id: process.env.IG_CLIENT_ID,
      client_secret: process.env.IG_CLIENT_SECRET
    });

    // Check if type exists in mapping
    var exists = _.contains(VALID_TYPE, this.type);
    if (!exists) {
      return callback({ error: 'Media type `' + this.type + '` does not exist' }, {});
    }

    this[this.type]();
  }

  _createClass(Instagramer, [{
    key: 'media_popular',

    // API Requests - must live in VALID_TYPE array
    value: function media_popular() {
      var self = this;

      ig.media_popular(function (err, medias) {
        self.callback(err, medias);
      });
    } //-

  }]);

  return Instagramer;
})();

module.exports = Instagramer;