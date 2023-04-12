let strings = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
let sum = 0;
for (let i = 0; i < strings.length; i++) {
  sum += strings[i].length;
}
console.log('The sum of all the lengths is:', sum);
