
var Board = require('./snake');
var View = require('./snake-view');

window.$l(function() {
var $el = $l(".snake");

var board = new Board();
var view = new View($el);

});
