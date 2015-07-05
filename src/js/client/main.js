require.config({
  baseUrl: 'js/app',
  paths: {
    jquery: '../vendor/jquery',
    backbone: '../vendor/backbone',
    underscore: '../vendor/underscore'
  }
});

require(['app'], function(app){
  var app = new app();
});