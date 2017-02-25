const Util = {
  inherits (childClass, parentClass) {
    function Surrogate () {}
    parentClass.prototype = Surrogate.prototype;
    childClass.prototype = new Surrogate();
    childClass.prototye.constructor = childClass;
  }
};

module.exports = Util;
