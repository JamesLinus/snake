/* globals $l */

var Board = require('./snake.js');

var View = function ($el) {
  this.board = new Board();
  this.$el = $el;

  // this.attr("style", "height: 500px")

  this.bindEvents();
  this.setupBoard();
};


View.prototype.bindEvents = function () {
  $l('body').on("keydown", this.handleKeyEvent);
};

View.prototype.handleKeyEvent = function (event) {
  // debugger
};

View.prototype.setupBoard = function () {
  for (var j = 0; j < this.board.size; j++) {
    var $ul = $l("ul");
    for (var i = 0; i < this.board.size; i++) {
      var $li = $l("li");
      $ul.append($li);
    }
    this.$el.append($ul);
  }
};

// View.prototype.methodName = function () {

module.exports = View;
