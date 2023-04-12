let numbers = [-2, 5, 7, -10, 3, -8];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    numbers[i] *= -1;
  }
}
console.log('The updated list of numbers is:', numbers);
