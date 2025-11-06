//PB1: ---> Searching Element:  return index of element if element is in array otherwise -1

// Solution1
function findIndex(arr, value) {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      index = i;
      break;
    }
  }
  return index;
}

//-----------------------------------------------------

// Solution2
function findIndexOfElement(arr, value) {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

let arr = [12, 10, 3, 11, 30, 4, 5];

console.log("index:", findIndex(arr, 10));
console.log("index:", findIndexOfElement(arr, 30));

//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

//PB2: ---> Counting Negatives in an array

function countingNegatives(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count++;
    }
  }
  return count;
}

let arr1 = [10, 2, -3, -1, 5, 0, -1];

console.log("No of Negatives:", countingNegatives(arr1));

//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

//PB2: ---> Finding Largest Number in an array

//Solution1
function findLargest() {
  let maxNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (maxNum < arr[i]) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}

console.log("largest Number Solution1:", findLargest(arr));

//-----------------------------------------------------

//Solution2
function findLargestNum() {
  let maxNum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (maxNum < arr[i]) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}

console.log("largest Number Solution2:", findLargestNum(arr));

//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

//PB2: ---> Finding Smallest Number in an array

//Solution1
function FindSmallest() {
  let minNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (minNum > arr[i]) {
      minNum = arr[i];
    }
  }
  return minNum;
}

console.log("Smallest Number Solution1: ", FindSmallest(arr));

//-----------------------------------------------------

//Solution2
function FindSmallestNum() {
  let minNum = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (minNum > arr[i]) {
      minNum = arr[i];
    }
  }
  return minNum;
}

console.log("Smallest Number Solution2: ", FindSmallestNum(arr));
