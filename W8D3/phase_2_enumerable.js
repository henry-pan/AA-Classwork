Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
}

// const asdf = function(el) {
//   console.log(el + "!");
// }
// console.log([1,2,3,4,5].myEach(asdf));


Array.prototype.myMap = function(callback) {
  let result = [];

  this.myEach(function(el) {
    result.push(callback(el));
  });

  return result;
}

const asdf = function(el) {
  return el + "!";
}
// console.log([1,2,3,4,5].myMap(asdf));

Array.prototype.myReduce = function(callback, initialValue) {

  let acc = initialValue;
  let arr = this;

  if (acc === undefined) {
    acc = arr[0];
    arr = this.slice(1);
  }

  arr.myEach(function(el) {
    acc = callback(acc, el);
  });

  return acc;
}

// let test = [1,2,3];
// console.log(test.myReduce(function(acc, el) {
//   return acc + el;
// },25));
// console.log(test);
