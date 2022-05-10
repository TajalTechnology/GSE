function binarySearch_leetcode_35(arrayNum, target) {
  let lowIndex = 0;
  let highIndex = arrayNum.length - 1;
  let midIndex;
  /**
   *
   */
  while (highIndex >= lowIndex) {
    midIndex = Math.ceil((lowIndex + highIndex) / 2);

    console.log("Low:", lowIndex, "High:", highIndex);
    if (target > arrayNum[highIndex]) return highIndex + 1;
    else if (target < arrayNum[lowIndex]) return lowIndex;
    else if (target === arrayNum[midIndex]) return midIndex;
    else if (arrayNum[midIndex] < target) lowIndex = midIndex + 1;
    else highIndex = midIndex - 1;
  }
}

const result = binarySearch_leetcode_35([1, 3, 5, 6], 7);
console.log(result);
