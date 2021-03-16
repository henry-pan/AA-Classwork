// Function.prototype.inherits = function (context) {
//   function Surrogate() {}
//   Surrogate.prototype = context.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// };

Function.prototype.inherits = function (context) {
  this.prototype = Object.create(context.prototype);
  this.prototype.constructor = this;
};

function MovingObject() {}

function Ship() {}
Ship.inherits(MovingObject);

function Asteroid() {}
Asteroid.inherits(MovingObject);

MovingObject.prototype.move = function () {
  console.log("Inherited");
};

Asteroid.prototype.move2 = function () {
  console.log("I'm an asteroid");
};

let asteroid = new Asteroid();
let ship = new Ship();
let movingObject = new MovingObject();

asteroid.move2();
movingObject.move();

console.log(asteroid instanceof MovingObject);
console.log(ship instanceof MovingObject);
