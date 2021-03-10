Array.prototype.uniq = function() {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (!result.includes(this[i])) {
      result.push(this[i]);
    }
  }
  return result;
}

// const test = [1,2,2,3,3,3];
// console.log(test.uniq());
// console.log(test);

Array.prototype.twoSum = function(){
  let result = [];
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        result.push([i, j]);
      }
    }
  }
  return result;
}

// const test = [1,-1,2,-3,3,4];
// console.log(test.twoSum());

Array.prototype.transpose = function() {
  let result  = [];

  for (let row = 0; row < this.length; row++) {
    let arr = [];
    for (let col = 0; col < this.length; col++) {
      arr.push(this[col][row]);
    }
    result.push(arr);
  }


  return result;
}

// const test = [[0,1,2],[3,4,5],[6,7,8]];
// console.log(test.transpose());
// console.log(test);
