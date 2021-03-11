function range(start, end) {
  if(start > end) return [];
  if(start === end) return [end];

  let result = [start];

  return result.concat(range(start+1, end));
}

// console.log(range(5,5));


function sumRec(arr) {
  if(arr.length === 0) return 0;

  return arr[0] + sumRec(arr.slice(1));
}

// console.log(sumRec([1,2,3]));


function exponent1(base, exp) {
  if(exp === 0) return 1;

  return base * exponent1(base, exp-1);
}

// console.log(exponent1(2,2));


function exponent2(base, exp) {
  if(exp === 0) return 1;
  if(exp === 1) return base;

  if(exp % 2 === 0) {
    let even = exponent2(base, exp / 2);
    return even * even;
  } else {
    let odd = exponent2(base, (exp - 1)/2);
    return base * odd * odd;
  }
}

// console.log(exponent2(2,3));


function fibonacci(n) {
  if(n === 0) return [];
  if(n === 1) return [0];
  if(n === 2) return [0, 1];

  result = fibonacci(n-1);
  next = result[result.length - 1] + result[result.length - 2];
  result.push(next); 

  return result;

}

// console.log(fibonacci(5));


function deepDup(arr) {
  if(!(arr instanceof Array)) return arr;

  let result = [];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] instanceof Array){
      result.push(deepDup(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

// array = [1,[2,3],[[4]],5];
// array2 = deepDup(array);
// array2.pop();
// console.log(array);
// console.log(array2);


function bsearch(arr, target) {
  let middle = Math.floor(arr.length / 2);

  if(arr[middle] === target) return middle ;
  if(arr.length === 0) return -1 ;

  let left = arr.slice(0,middle);
  let right = arr.slice(middle+1);

  if(arr[middle] > target) {
    return bsearch(left, target);
  } else {
    let index = bsearch(right, target);
    if(index === -1) return -1;
    return index + 1 + middle;
  }
}

// console.log(bsearch([1,2,3,4,5], 0));


function mergesort(arr) {
  if(arr.length === 1) return arr;

  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0,middle);
  let right = arr.slice(middle);

  return merge(mergesort(left), mergesort(right));
}

function merge(left, right) {
  let solution = [];

  while(left.length > 0 && right.length > 0) {
    if(left[0] > right[0]) {
      solution.push(right.shift());
    } else {
      solution.push(left.shift());
    }
  }

  return solution.concat(left,right);
}

// console.log(mergesort([42,3,7,-1,50]));
