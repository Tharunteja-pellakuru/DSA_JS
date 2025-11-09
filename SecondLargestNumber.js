//PB2: ---> Finding Second Largest Number in an array

//Solution1 -> Without Corner Cases
function secondLargest(arr) {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

let arr = [25, 2, 20, 3, 19, 10, 25];

console.log("second largest Number Solution1:", secondLargest(arr));

//----------------------------------------------------------------------------

//Solution2 -> With Corner Cases
//Corner Cases
// 1. Empty Array   2. Duplicates in Array  3. length of an array is < 2

function secondLargestNum(arr) {
  if (arr.length < 2) {
    return -1;
  }

  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

console.log("second largest Number Solution2:", secondLargestNum(arr));

//---------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------
