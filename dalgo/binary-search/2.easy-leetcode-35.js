function binarySearch_leetcode_35(arrayNum, target) {
  let lowIndex = 0;
  let highIndex = arrayNum.length - 1;
  let midIndex;
  /**
   *
   */
  while (highIndex >= lowIndex) {
    midIndex = Math.ceil((lowIndex + highIndex) / 2);

    if (arrayNum[midIndex] == target) return midIndex;
    if (arrayNum[highIndex] < target) return highIndex + 1;

    if (arrayNum[midIndex] > target) highIndex = midIndex;
    else if (arrayNum[midIndex] < target) lowIndex = midIndex + 1;
    else if (arrayNum[highIndex] > target && arrayNum[lowIndex] < target)
      return lowIndex + 1;
    console.log(Math.ceil(midIndex));
  }
}

const result = binarySearch_leetcode_35([2, 3, 4, 10, 40], 11);
console.log(result);

// function findIndex(num, target) {
//   let lowIndex = 0;
//   let hightIndex = num.length - 1;
//   let targetIndex;
//   let midIndex;

//   while (hightIndex >= lowIndex) {
//     midIndex = Math.ceil((lowIndex + hightIndex) / 2);

//     if (target > num[hightIndex]) return (targetIndex = hightIndex + 1);

//     if (target < num[midIndex]) hightIndex = num[midIndex];
//     if (target > num[midIndex] && target < num[hightIndex])
//       lowIndex = num[midIndex + 1];
//     if (target == num[midIndex]) return (targetIndex = midIndex);
//   }
// }

// const result = findIndex([1, 3, 5, 6], 1);
// console.log(result);
