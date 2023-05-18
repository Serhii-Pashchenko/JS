const array = ['sdfsdf', 65, false, 'A', 98, true, 41, null, 97, 100];
const arrayNumbers = [];
for (let i = 0; i < array.length; i++) {
  if (typeof array[i] === "number") {
    arrayNumbers.push(array[i]);
  }
}
let sum = 0;
let min = arrayNumbers[0];
let max = arrayNumbers[0];
for (let i = 0; i < arrayNumbers.length; i++) {
  sum += arrayNumbers[i];
  if (i < arrayNumbers.length - 1) {
    if (min > arrayNumbers[i+1]) {
      min = arrayNumbers[i+1];
    }
    if (max < arrayNumbers[i+1]) {
      max = arrayNumbers[i+1];
    }
  }
}
console.log('Масив: ' + array);
console.log('Масив чисел: ' + arrayNumbers);
console.log('Сума чисел: ' + sum);
console.log('Мінімальне значення: ' + min);
console.log('Максимальне значення: ' + max);

let a = '';
for (let i = 0; i < 5; i++) {
  a += '#';
  console.log(a);
}