const curriedSum = function (numArgs) {
  let numbers = [];
  return function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return numbers.reduce((acc, el) => acc + el);
    } else {
      return _curriedSum;
    }
  };
};

// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56

Function.prototype.curry = function (numArgs) {
  let that = this;
  let args = [];
  return function _curry(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return that.apply(null, args);
    } else {
      return _curry;
    }
  };
};

Function.prototype.curry2 = function (numArgs) {
  let that = this;
  let args = [];
  return function _curry(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return that(...args);
    } else {
      return _curry;
    }
  };
};
