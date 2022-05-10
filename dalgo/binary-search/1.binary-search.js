function binarySearch(arrayNum, target) {
  let lowIndex = 0;
  let highIndex = arrayNum.length - 1;
  let midIndex;
  /**
   *
   */
  while (highIndex >= lowIndex) {
    midIndex = Math.ceil((lowIndex + highIndex) / 2);
    if (arrayNum[midIndex] == target) return midIndex;
    if (arrayNum[midIndex] > target) highIndex = midIndex;
    else lowIndex = midIndex + 1;
  }
}

const result = binarySearch([2, 3, 4, 10, 40], 2);
console.log(result);
