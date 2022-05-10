function binarySearch(arrayNum, target) {
  let lowIndex = 0;
  let highIndex = arrayNum.length - 1;

  /**
   *
   */
  while (highIndex >= lowIndex) {
    let midIndex = Math.ceil((highIndex + lowIndex) / 2);
    if (arrayNum[midIndex] === target) return midIndex;
    else if (arrayNum[midIndex] < target) lowIndex = midIndex + 1;
    else highIndex = midIndex - 1;
  }
}

const result = binarySearch([2, 3, 4, 11, 41], 12);
console.log(result);
