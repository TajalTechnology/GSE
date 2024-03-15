step for insertion sort.
1. Let we have a array.
``` 
const numbers = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2];
```
2. Imagin your frist element is sorted and others need to be sorted.
3. Take some `variables`.
```
let i, hole, value;
```
4. As we need to sorted whole array so we need to a `for loop` to compare all elements. And as our frist element is sorted so we started render our array from 1;
```
for(i = 1; i< numbers.length; i++>){
    //code are here
}
```
5. We got every element of array. we assaign those element as a value. So our value equals to 
```
value = numbers[i];
```
6. When we take elements from array, So this array have a empty space imediatly. Which we called `hole` and index of `hole` is
```
hole=i
```
7. Now we need anaother loop to compare current value with sorted array. Here we use `while loop`. And there is a condition
    1. `hole >= 0 && numbers[hole - 1] > value`
    `Description:` That means this loop will continue till `hole is greeter then zero bor equal zero` and  `numbers[hole - 1] is grater then value`
8. Inside while loop we just assaign previous value `numbers[hole] = numbers[hole-1]` and decrease `hole`
```
numbers[hole] = numbers[hole - 1];
hole--;
```
9. Now outside the while loop, just assaign `numbers[hole] = value`
10. `Full code:`
```javascript
const numbers = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2];
let i, hole, value;

for (let i = 1; i < numbers.length; i++) {
  value = numbers[i];
  hole = i;

  // compare with all emelemts of left side.
  while (hole >= 0 && numbers[hole - 1] > value) {
    numbers[hole] = numbers[hole - 1];
    hole--;
  }
  numbers[hole] = value;
}

console.log(numbers);
```




