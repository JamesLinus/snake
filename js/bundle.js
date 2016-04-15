/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	var Board = __webpack_require__(1);
	var View = __webpack_require__(2);
	
	window.$l(function() {
	var $el = $l(".snake");
	
	var board = new Board();
	var view = new View($el);
	
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	var Snake = function() {
	  this.direction = "N";
	  this.segments = [new Coord([0,0]), new Coord([0,-1]), new Coord([0,-2])];
	};
	
	Snake.prototype.move = function () {
	  this.segments.pop();
	  var newSegment = this.segments[0].plus(this.direction);
	  this.segments.unshift(newSegment);
	
	
	  for(var i = 0; i < this.segments.length; i++) {
	
	    console.log(this.segments[i].coordPair);
	  }
	  console.log("*");
	};
	
	Snake.prototype.turn = function (newDirection) {
	  if (newDirection !== this.oppositeDirection) {
	    this.direction = newDirection;
	  }
	};
	
	Snake.prototype.oppositeDirection = function () {
	  var _CARDINALS = {"N": "S",
	                    "S": "N",
	                    "E": "W",
	                    "W": "E" };
	  return _CARDINALS[this.direction];
	};
	
	
	
	
	var Coord = function(coordPair) {
	  this.coordPair = coordPair;
	};
	
	Coord.prototype.plus = function (direction) {
	  var newArray;
	  if(direction === "N") {
	    newArray = [this.coordPair[0], this.coordPair[1]+1];
	
	  } else if(direction === "S") {
	    newArray = [this.coordPair[0], this.coordPair[1]-1];
	
	    // var newArray = [this.coordPair[0]+1, this.coordPair[1]];
	  } else if(direction === "E") {
	    newArray = [this.coordPair[0]+1, this.coordPair[1]];
	
	  } else {
	    newArray = [this.coordPair[0]-1, this.coordPair[1]];
	  }
	  return new Coord(newArray);
	};
	
	Coord.prototype.equals = function () {
	
	};
	
	Coord.prototype.isOpposite = function () {
	
	};
	
	
	
	var Board = function () {
	  this.snake = new Snake();
	  this.size = 20;
	};
	
	
	module.exports = Board;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* globals $l */
	
	var Board = __webpack_require__(1);
	
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


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map