const numbers = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2];
let i, value, hole;

for (let i = 1; i < numbers.length; i++) {
  value = numbers[i];
  hole = i;

  while (hole >= 0 && numbers[hole - 1] > value) {
    numbers[hole] = numbers[hole - 1];
    hole--;
  }

  numbers[hole] = value;
}

console.log(numbers);
