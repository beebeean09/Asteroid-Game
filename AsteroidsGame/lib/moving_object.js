const MovingObject = function (options) {
  const defaults = { pos: [0, 0], vel: [0,0], radius: 1, color: "#6495ED" };
  this.pos = options.pos || defaults.pos;
  this.vel = options.vel || defaults.vel;
  this.radius = options.radius || defaults.radius;
  this.color = options.color || defaults.color;
};

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI
  );

  ctx.fill();
};

MovingObject.prototype.move = function() {
  setInterval( () => {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  }, 1000/60);
};


const canvasEl = document.getElementsByTagName("canvas")[0];
const ctx = canvasEl.getContext("2d");
let circle = new MovingObject({pos: [75, 75], vel: [1,0], radius: 70});

setInterval( () => {
  circle.draw(ctx);
}, 1000/60);

circle.move();
window.MovingObject = MovingObject;

module.exports = MovingObject;
