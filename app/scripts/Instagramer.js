'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ = require('underscore');
var ig = require('instagram-node').instagram();

var Instagramer = (function () {
  function Instagramer(obj) {
    _classCallCheck(this, Instagramer);

    ig.use({
      client_id: process.env.IG_CLIENT_ID,
      client_secret: process.env.IG_CLIENT_SECRET
    });
  }

  _createClass(Instagramer, [{
    key: 'tag_media_recent',
    value: function tag_media_recent(options, callback) {
      ig.tag_media_recent(options.tag, function (err, medias, pagination) {
        callback(err, medias);
      });
    }
  }]);

  return Instagramer;
})();

module.exports = Instagramer;