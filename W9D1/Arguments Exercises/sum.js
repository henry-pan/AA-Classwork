const sum = function () {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};

const sum2 = (...args) => {
  return args.reduce((acc, el) => acc + el);
};
