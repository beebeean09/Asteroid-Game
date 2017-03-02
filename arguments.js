function summ(...args) {
  let result = 0;
  args.forEach(el => result += el);
  return result;
}

// console.log(summ(1, 2, 3, 4) === 10);
// console.log(summ(1, 2, 3, 4, 5) === 15);


Function.prototype.myBind = function(context, ...bindArgs) {
  // 'this' is the instance of the function;
  return (...callTimeArgs) => this.apply(context, bindArgs.concat(callTimeArgs));
};

// let scope = self.speak.bind(cat); // => returns a function
// self.speak.bind(cat) === cat.speak
// const someFunction = cat.speak
//
// sallySpeak() === sally.speak()
//
// function goToWork() {
//   this.speak();
//   sallySpeak();
// }

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");
// markov.says.myBind(breakfast, "meow", "Kush")();



function curriedSum(numArgs) {
  let numbers = [];
  function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      let sum = 0;
      numbers.forEach(n => sum += n);
      return sum;
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

// const test = curriedSum(4);
// console.log(test(5)(30)(20)(1));


// using call
Function.prototype.curry = function(numArgs) {
  let args = [];
  let originalFunction = this;

  function _curry(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return originalFunction.call(originalFunction, ...args);
    } else {
      return _curry;
    }
  }
  return _curry;
};


// using apply
Function.prototype.curry = function(numArgs) {
  let result = [];
  let fn = this;

  function _curry(arg) {
    result.push(arg);
    if (result.length === numArgs) {
      return fn.apply(null, result);
    } else {
      return _curry;
    }
  }
  return _curry;
};

function sayHelloNTimes(name, n) {
  function greet() {
    console.log( `Hi, ${name}!`);
  }

  for (let i = 0; i < n; i++) {
    greet();
  }
}

// sayHelloNTimes("Sally", 6);
const test = summ.curry(3);
console.log(test(5)(3)(8)); // => _curry(5)._curry(3)._curry(8) => if (numArgs === 3) => summ(5, 3 ,8)







//
