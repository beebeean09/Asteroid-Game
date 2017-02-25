const MovingObject = require("./moving_object.js");

const Asteroid = function(options) {
  const default = { color: "#D2691E", radius: 15 }
  this.color = default.color;
  this.radius = default.radius;
};

Asteroid.inherits(MovingObject);

// Return a randomly oriented vector with the given length.
randomVec (length) {
  const deg = 2 * Math.PI * Math.random();
  return Util.scale([Math.sin(deg), Math.cos(deg)], length);
};
// Scale the length of a vector by the given amount.
scale (vec, m) {
  return [vec[0] * m, vec[1] * m];
};
