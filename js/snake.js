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
