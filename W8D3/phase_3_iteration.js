Array.prototype.bubbleSort = function() {
  let sorted = false;
  while (sorted === false) {
    sorted = true;
    for (let i = 0; i < this.length -1; i++) {
      if (this[i] > this[i+1]) {
        sorted = false;
        [this[i], this[i+1]] = [this[i+1], this[i]];
      }
    }
  }
  return this;
}

// const test = [2,4,1,3,50,7,5];
// console.log(test.bubbleSort());

String.prototype.substrings = function() {
  let result = [];

  for (let i = 0; i < this.length; i++){
    for (let j = i; j < this.length; j++){
      result.push(this.slice(i,j+1));

    }
  }

  return result;
}

console.log("Hello".substrings());
