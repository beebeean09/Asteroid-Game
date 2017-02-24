// Function.prototype.inherits = function(superClass) {
//   const subClass = this;
//
//   function Surrogate() {
//     this.prototype = superClass.prototype;
//   }
//
//   subClass.prototype = new Surrogate();
//   // the subclass's prototype is a new surrogate that points to the superclass's prototype
//   subClass.prototype.constructor = subClass;
//
//
//   // => (instance of) Surrogate.constructor = subClass
//     // => (this.prototype) = subClass
//       // => superClass.prototype = subClass => now the subClass points to the superClass's __proto__
// };
//
// Function.prototype.inherits = function(superClass) {
//   this.prototype = Object.create(superClass.prototype);
//
// };
//
// // Object.create(A.prototype) => some object that's __proto__ points
// // to A.prototype
// // Dog.prototype.constructor => Dog

// `Function.prototype.inherits` using surrogate trick

Function.prototype.inherits1 = function (BaseClass) {
  function Surrogate () {}
  Surrogate.prototype = BaseClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

// `Function.prototype.inherits` using `Object.create`

Function.prototype.inherits2 = function (BaseClass) {
  this.prototype = Object.create(BaseClass.prototype);
  this.prototype.constructor = this;
};

function Dog (name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(this.name + " barks!");
};

function Corgi (name) {
  Dog.call(this, name);
}

Corgi.inherits1(Dog);

Corgi.prototype.waddle = function () {
  console.log(this.name + " waddles!");
};

const blixa = new Corgi("Blixa");
blixa.bark();
blixa.waddle();
