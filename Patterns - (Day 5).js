//Pattern 1

//  * * * *
//  * * * *
//  * * * *
//  * * * *
//  * * * *

const n = 5;

for (let i = 0; i < n; i++) {
  let pattern = "";
  for (let j = 0; j < n; j++) {
    pattern = pattern + "*  ";
  }
  console.log(pattern);
}

console.log();

//Pattern 2

//  *
//  * *
//  * * *
//  * * * *
//  * * * * *

for (let i = 0; i < n; i++) {
  let pattern = "";
  for (let j = 0; j <= i; j++) {
    pattern = pattern + "*  ";
  }
  console.log(pattern);
}

console.log();

//Pattern 3

//  1
//  1 2
//  1 2 3
//  1 2 3 4
//  1 2 3 4 5

for (let i = 0; i < n; i++) {
  let pattern = "";
  for (let j = 0; j < i + 1; j++) {
    pattern = pattern + (j + 1) + " ";
  }
  console.log(pattern);
}

console.log();

//Pattern 4

//  1
//  2 2
//  3 3 3
//  4 4 4 4
//  5 5 5 5 5

for (let i = 0; i < n; i++) {
  let pattern = "";
  for (let j = 0; j < i + 1; j++) {
    pattern = pattern + (i + 1) + " ";
  }
  console.log(pattern);
}

console.log();

//Pattern 5

//  5 5 5 5 5
//  4 4 4 4
//  3 3 3
//  2 2
//  1

for (let i = n; i > 0; i--) {
  let pattern = "";
  for (let j = 1; j < i + 1; j++) {
    pattern = pattern + j + " ";
  }
  console.log(pattern);
}

console.log();

//Pattern 6

//  1 2 3 4 5
//  1 2 3 4
//  1 2 3
//  1 2
//  1

for (let i = n; i > 0; i--) {
  let pattern = "";
  for (let j = 1; j < i + 1; j++) {
    pattern = pattern + j + " ";
  }
  console.log(pattern);
}

console.log();

//Pattern 7

//  * * * * *
//  * * * *
//  * * *
//  * *
//  *

for (let i = n; i > 0; i--) {
  let pattern = "";
  for (let j = 1; j < i + 1; j++) {
    pattern = pattern + "* ";
  }
  console.log(pattern);
}

console.log();

//Pattern 8

//         *
//       * *
//     * * *
//   * * * *
// * * * * *

for (let i = 1; i <= n; i++) {
  let pattern = "";
  for (let j = 1; j <= n; j++) {
    if (j <= i) {
      pattern = pattern + "* ";
    } else {
      pattern = "  " + pattern;
    }
  }
  console.log(pattern);
}

console.log();

// Pattern 9

//  1
//  1 0
//  1 0 1
//  1 0 1 0
//  1 0 1 0 1

for (let i = 1; i <= n; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern = pattern + (j % 2) + " ";
  }
  console.log(pattern);
}

console.log();

// Pattern 9

//  1
//  1 0
//  1 0 1
//  1 0 1 0
//  1 0 1 0 1

let value = 1;

for (let i = 1; i <= n; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    if (value === 1) {
      pattern = pattern + value + " ";
      value = value - 1;
    } else {
      pattern = pattern + value + " ";
      value = value + 1;
    }
  }
  console.log(pattern);
}
